package ethmodel

// TODO rename this file
// TODO move other APIs into shared project and have only public JS api here
// TODO split this into multiple files

import scala.util.Random
import scala.scalajs.js.annotation.{JSExportAll, JSExportTopLevel}

// Simulation is the public API for use in webapp JavaScript.
@JSExportTopLevel("Simulation")
@JSExportAll
final class Simulation {
  private var rand = new scala.util.Random(Math.round(new scala.scalajs.js.Date().getTime()))
  private var _state: State = State.init(rand, InitialConfig.Default)

  private def setConfig(newConfig: OngoingConfig): Unit = _state = State.replaceConfig(_state, newConfig)

  def toggleTransactionFeesBurned(): Boolean = {
    val nc = _state.ongoingConfig.copy(
      transactionFeesBurned = !_state.ongoingConfig.transactionFeesBurned)
    setConfig(nc)
    nc.transactionFeesBurned
  }

  def toggleIgnoreTaxRate(): Boolean = {
    val nc = _state.ongoingConfig.copy(
      ignoreTaxRate = !_state.ongoingConfig.ignoreTaxRate)
    setConfig(nc)
    nc.ignoreTaxRate
  }

  def state: State = _state
  def stepTimeOnce(): Unit = _state = State.getNextState(rand, _state)
}

final object Ethereum {
  // getIssuanceApr is a starter implementation of the
  // validator block reward inflation schedule described in
  // https://docs.ethhub.io/ethereum-roadmap/ethereum-2.0/eth-2.0-economics/
  def getIssuanceApr(numEthStaking: Int): Double = {
    // TODO this needs to be redone with the actual formula used in
    // the beacon chain. This current impl is just linear regression
    // between each bucket in the chart in that ethhub link.
    numEthStaking match {
      case x if x < 1000000 => 0.181
      case x if x < 3000000 => 0.21925 - 0.00000003825 * x
      case x if x < 10000000 => 0.124771 - 0.00000000675714 * x
      case x if x < 30000000 => 0.0693 - 0.00000000121 * x
      case x if x < 100000000 => 0.0393857 - 0.000000000212857 * x
      case _ => 0.0181
    }
  }
}

@JSExportAll
final case class InitialConfig(
  val totalEthSupply: Int,
  // TODO minRoiAprToValidate distribution
  // TODO taxRate distribution
  ongoingConfig: OngoingConfig,
)

final object InitialConfig {
  val Default = InitialConfig(
    totalEthSupply = 115000000,
    ongoingConfig = OngoingConfig.Default,
  )
}

// TODO s/OngoingConfig/Config
@JSExportAll
final case class OngoingConfig(
  validator32EthFlatCostUsd: Int, // US dollar cost to run one validator node for 32 ETH
  ethUsdPrice: Int, // ETH/USD price in US dollars
  annualizedTotalTransactionFeesUsd: Long, // annualized total transaction fees in USD
  transactionFeesBurned: Boolean, // transaction fees are burned iff true, otherwise transaction fees are paid to validators
  ethHolderActionChance: Int, // each ETHHolder has a 1 in ethHolderActionChance of taking action during any step of the simulation. This tries to simulate the delay between market signals and real people actually acting on them eg. by starting/stopping being a validator
  ignoreTaxRate: Boolean, // iff true taxRate is ignored as if it were 0
  // TODO allow validators to be slashed
)

final object OngoingConfig {
  val Default = OngoingConfig(
    validator32EthFlatCostUsd = 80,
    ethUsdPrice = 275,
    annualizedTotalTransactionFeesUsd = 50000000, // $50M USD. The actual number in 2019 was about $35M
    transactionFeesBurned = false,
    ethHolderActionChance = 5, // ie. 1 in N chance of taking an action
    ignoreTaxRate = false,
  )
}

import ETHHolder._
import ETHHolder.Status._

final case class ETHHolder(
  holdingsOf32Eth: Int, // this is the account balance in ETH expressed as number of 32 ETH stakes this ETH holder has. eg. holdingsOf32Eth == 4 means they have 4*32 = 128 ETH
  status: Status, // current status of this ETH Holder, are they validating or just holding?
  minRoiAprToValidate: Double, // the minimum return on investment annualized percentage rate this ETHHolder needs to participate as a validator vs just hold their ETH and not run a validator node, eg. minRoiAprToValidate == 0.02 means they will validate iff their ROI is >= 2%
  taxRate: Double, // tax rate on this ETH holder's validator income, a tax rate of 0.1 means 10% of validator gross profit becomes a tax liability --> TODO make this an "everyone US-based" instead of an individual rate?
)

final object ETHHolder {
  sealed abstract class Status
  final object Status {
    final case class CurrentlyValidating(
      annualizedRevenueUsd: Long, // annualized staking revenue this validator
      annualizedExpensesUsd: Long, // annualized expenses incurred for this validator, including tax
      roiApr: Double, // return on investment annual percentage rate for this validator, ie. (revenue - expenses) / holdingsOf32Eth.toUsd
    ) extends Status // ETH holder is currently running validator node(s) such that 100% of their ETH is staked
    final case object CurrentlyJustHolding extends Status // ETH holder is currently running zero validator nodes and is just holding ETH
  }
}

@JSExportAll
final case class Metrics(
  totalEthSupply: Int, // total number of ETH in existence
  numEthHolders: Int, // number of ETH holders, including validators
  numValidators: Int, // number of validators, a subset of numEthHolders
  numEthStaked: Int, // number of ETH tokens staked by all validators
  annualizedNetworkCostUsd: Double, // annualized US dollar value of the ETH that must be sold to pay for entire network operating cost
  issuanceApr: Double, // issuance annualized percentage rate each validator gets as revenue from block rewards
  inflationApr: Double, // total net inflation, including burned transaction fees if they are burned
)

// State of the Ethereum monetary policy simulation as of the latest time step
@JSExportAll
final case class State(
  ongoingConfig: OngoingConfig, // OngoingConfig used to calculate this time step
  ethHolders: List[ETHHolder], // the population of ETH holders, a subset of which are validators, and each ETHHolder's state has been updated for this time step
  var historicalMetrics: List[Metrics], // historicalMetrics, will be immediately updated such that historicalMetrics.head == metrics, for iteration convenience in client
) {
  // Metrics derived for this time step's data, eg. metrics on this.ethHolders
  val metrics = State.deriveMetrics(ongoingConfig, ethHolders)
  historicalMetrics ::= metrics
}

final object State {
  def init(rand: Random, c: InitialConfig): State = {
    val numEthHolders = 10000

    // TODO make the distribution of holdingsOf32EthsArray less uniform to simulate whales, etc.
    val holdingsOf32EthsArray: Array[Int] = Array.fill(numEthHolders)(1)
    var ethLeft = c.totalEthSupply
    ethLeft -= numEthHolders * 32 // to account for initializing every ethHolders to at least 32 ETH so they can validate
    while (ethLeft > 31) {
      // We're allocating over 100M ETH, so do it in 3200 ETH chunks
      val i = rand.nextInt(numEthHolders)
      holdingsOf32EthsArray(i) += 100
      ethLeft -= 3200
    }
    var holdingsOf32Eths = holdingsOf32EthsArray.toList // so we can use list.tail

    val minRoiAprToValidateStandardDeviation: Double = 0.01
    val minRoiAprToValidateMean: Double = 0.06

    val ethHolders: Array[ETHHolder] = Array.fill(numEthHolders)({
      val e = ETHHolder(
        holdingsOf32Eth = holdingsOf32Eths.head,
        status = CurrentlyJustHolding,
        minRoiAprToValidate = Math.max(0,
          rand.nextGaussian() * minRoiAprToValidateStandardDeviation + minRoiAprToValidateMean),
        taxRate = if (rand.nextBoolean() && rand.nextBoolean()) 0 else 0.33, // 25% of ETH holders have a zero percent tax rate, the rest have 33% tax rate
      )
      holdingsOf32Eths = holdingsOf32Eths.tail
      e
    })

    State(
      c.ongoingConfig,
      ethHolders.toList,
      historicalMetrics = List.empty,
    )
  }

  def replaceConfig(s: State, replaceConfig: OngoingConfig): State =
    s.copy(ongoingConfig = replaceConfig)

  private def deriveMetrics(ongoingConfig: OngoingConfig, ethHolders: List[ETHHolder]): Metrics = {
    val totalEthSupply: Int = ethHolders.foldLeft(0)((s, e) => s + e.holdingsOf32Eth * 32)

    val numEthHolders = ethHolders.length

    val numValidators = ethHolders.foldLeft(0)((s, e) => e.status match {
      case _: CurrentlyValidating => s + 1
      case CurrentlyJustHolding => s
    })

    val numEthStaked: Int = ethHolders.foldLeft(0)((s, e) => e.status match {
      case _: CurrentlyValidating => s + e.holdingsOf32Eth * 32
      case CurrentlyJustHolding => s
    })

    val annualizedNetworkCostUsd: Long = ethHolders.foldLeft(0: Long)((s, e) => e.status match {
      case v: CurrentlyValidating => s + v.annualizedExpensesUsd
      case CurrentlyJustHolding => s
    })

    val issuanceApr = Ethereum.getIssuanceApr(numEthStaked)

    val inflationApr = (
      totalEthSupply // existing ETH
      + numEthStaked * issuanceApr  // ETH created from block rewards
      - (if (ongoingConfig.transactionFeesBurned) ongoingConfig.annualizedTotalTransactionFeesUsd / ongoingConfig.ethUsdPrice  else 0) // ETH destroyed from burning transaction fees, if applicable
    ) / totalEthSupply - 1

    Metrics(
      totalEthSupply = totalEthSupply,
      numEthHolders = numEthHolders,
      numValidators = numValidators,
      numEthStaked = numEthStaked,
      annualizedNetworkCostUsd = annualizedNetworkCostUsd,
      issuanceApr = issuanceApr,
      inflationApr = inflationApr,
    )
  }

  // getNextState advances the simulation one time step.
  def getNextState(rand: Random, s: State): State =
    s.copy(
      ethHolders = s.ethHolders.map(getNextEthHolder(rand, s, _)),
    )

  // calcValidatorRoi is a helper function that generates a
  // CurrentlyValidating (potentially for the next time step)
  // for the passed ETHHolder (from the previous time step).
  private def calcValidatorRoi(s: State, e: ETHHolder): CurrentlyValidating = {
    val numEthStaked: Long = e.holdingsOf32Eth * 32

    val ethHoldingsValueUsd: Long = numEthStaked * s.ongoingConfig.ethUsdPrice

    val annualizedTransactionFeeRevenueUsd: Long = if (s.ongoingConfig.transactionFeesBurned || s.metrics.numEthStaked < 1) 0 else {
      // This validator gets a pro rata share of total tx fees based on the portion of total eth they have staked
      s.ongoingConfig.annualizedTotalTransactionFeesUsd * numEthStaked / s.metrics.numEthStaked
    }

    val annualizedRevenueUsd: Long = Math.round(ethHoldingsValueUsd * s.metrics.issuanceApr) + annualizedTransactionFeeRevenueUsd

    val validatingCost: Long = e.holdingsOf32Eth * s.ongoingConfig.validator32EthFlatCostUsd

    // here we assume that tax is paid only on the gross profit after substracting the cost of goods sold (ie. cost to run a validator node)
    val taxCost: Long = Math.round(
      (if (s.ongoingConfig.ignoreTaxRate) 0 else e.taxRate) *
      Math.max(0, annualizedRevenueUsd - validatingCost)
    )

    val annualizedExpensesUsd: Long = validatingCost + taxCost

    val roiApr: Double = (annualizedRevenueUsd - annualizedExpensesUsd).toDouble / ethHoldingsValueUsd

    CurrentlyValidating(
      annualizedRevenueUsd = annualizedRevenueUsd,
      annualizedExpensesUsd = annualizedExpensesUsd,
      roiApr = roiApr,
    )
  }

  // getNextEthHolder advances the passed ETHHolder one time step.
  private def getNextEthHolder(rand: Random, s: State, e: ETHHolder): ETHHolder = {
    val canDoAction: Boolean = rand.nextInt(s.ongoingConfig.ethHolderActionChance) < 1

    val nextStatus: Status = (canDoAction, e.status) match {
      case (true, _) => {
        val tv = calcValidatorRoi(s, e)
        if (tv.roiApr >= e.minRoiAprToValidate) tv else CurrentlyJustHolding
      }
      case (false, _: CurrentlyValidating) => {
        // ETH holder doesn't get an action this time step, will continue validating
        calcValidatorRoi(s, e)
      }
      case (false, CurrentlyJustHolding) => {
        // ETH holder doesn't get an action this time step, will continue not validating
        CurrentlyJustHolding
      }
    }
    e.copy(
      status = nextStatus,
    )
  }
}
