import React, {useState, useEffect, useRef} from "react";
import "./App.css";
import {Switch, Route} from "react-router-dom";

import {Simulation} from "./ethmodel-opt";

function App() {
  const [sim] = useState(new Simulation());
  const [numEthStaked, setNumEthStaked] = useState(0);
  const [numEthHolders, setNumEthHolders] = useState(0);
  const [numValidators, setNumValidators] = useState(0);
  const [annualizedNetworkCostUsd, setAnnualizedNetworkCostUsd] = useState(0);
  const [issuanceApr, setIssuanceApr] = useState(0);
  const [inflationApr, setInflationApr] = useState(0);
  const [transactionFeesBurned, setTransactionFeesBurned] = useState(false);
  const [ignoreTaxRate, setIgnoreTaxRate] = useState(false);

  useInterval(() => {
    sim.stepTimeOnce();
    setNumEthStaked(sim.state.metrics.numEthStaked);
    setNumEthHolders(sim.state.metrics.numEthHolders);
    setNumValidators(sim.state.metrics.numValidators);
    setAnnualizedNetworkCostUsd(sim.state.metrics.annualizedNetworkCostUsd);
    setIssuanceApr(sim.state.metrics.issuanceApr);
    setInflationApr(sim.state.metrics.inflationApr);
    setTransactionFeesBurned(sim.state.ongoingConfig.transactionFeesBurned);
    setIgnoreTaxRate(sim.state.ongoingConfig.ignoreTaxRate);
  }, 1000);

  const controls = (
    <div style={{width: "80vw", height: "28vh", paddingLeft: "10%"}}>
      <div style={{margin: "auto", textAlign: "center"}}>
        Eth2 monetary policy simulation
      </div>
      <button
        style={{
          width: "100%",
          fontSize: "1.2em",
          margin: "2%",
          border: "2px solid black"
        }}
        onClick={() =>
          setTransactionFeesBurned(sim.toggleTransactionFeesBurned())
        }
      >
        transaction fees are being&nbsp;
        {transactionFeesBurned ? "burned" : "paid to validators"}, press to
        toggle
      </button>
      <button
        style={{
          width: "100%",
          fontSize: "1.2em",
          margin: "2%",
          border: "2px solid black"
        }}
        onClick={() => setIgnoreTaxRate(sim.toggleIgnoreTaxRate())}
      >
        tax rates are being&nbsp;
        {ignoreTaxRate ? "ignored" : "obeyed"}, press to toggle
      </button>
    </div>
  );

  const metrics = (
    <div style={{width: "80vw", height: "69vh", paddingLeft: "10%"}}>
      <div style={{margin: "auto", textAlign: "center"}}>
        {numEthHolders} holders being simulated
        <br />
        <br />
        {numEthStaked} ETH staked
        <br />
        <br />
        {numValidators} validators
        <br />
        <br />
        {Math.round(inflationApr * 10000) / 100}% annualized inflation
        <br />
        <br />
        {Math.round(issuanceApr * 10000) / 100}% annualized validator nominal ROI
        <br />
        <br />${annualizedNetworkCostUsd} annualized network cost
        <br />
        <br />
        <br />
        <span>
          Roadmap: ensure correctness (WIP); make the UI nicer; add proof of
          work simulation to show the cost savings of proof of stake; test the
          model against some competing theories, eg. how validators may respond
          to fees being burned; expose more config params from underlying
          library; better implementation of Eth2 inflation schedule; better
          visualization (historical data is already collected for time series)
        </span>
      </div>
    </div>
  );

  return (
    <Switch>
      // <Route path="/config">// </Route>
      <Route path="/">
        <div>
          <div style={{width: "80vw", height: "3vh"}} />
          {controls}
          {metrics}
        </div>
      </Route>
    </Switch>
  );
}

// https://overreacted.io/making-setinterval-declarative-with-react-hooks/
function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(
    () => {
      savedCallback.current = callback;
    },
    [callback]
  );

  // Set up the interval.
  useEffect(
    () => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    },
    [delay]
  );
}

export default App;
