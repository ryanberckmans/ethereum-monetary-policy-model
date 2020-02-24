'use strict';
const $linkingInfo = Object.freeze({
  "assumingES6": true,
  "productionMode": true,
  "linkerVersion": "1.0.0",
  "fileLevelThis": this
});
const $imul = Math.imul;
const $fround = Math.fround;
const $clz32 = Math.clz32;
let $L0;
function $propertyName(obj) {
  for (const prop in obj) {
    return prop
  }
}
class $Char {
  constructor(c) {
    this.c = c
  };
  toString() {
    return String.fromCharCode(this.c)
  };
}
function $noIsInstance(instance) {
  throw new TypeError("Cannot call isInstance() on a Class representing a JS trait/object")
}
function $makeNativeArrayWrapper(arrayClassData, nativeArray) {
  return new arrayClassData.constr(nativeArray)
}
function $newArrayObject(arrayClassData, lengths) {
  return $newArrayObjectInternal(arrayClassData, lengths, 0)
}
function $newArrayObjectInternal(arrayClassData, lengths, lengthIndex) {
  const result = new arrayClassData.constr(lengths[lengthIndex]);
  if ((lengthIndex < (lengths.length - 1))) {
    const subArrayClassData = arrayClassData.componentData;
    const subLengthIndex = (lengthIndex + 1);
    const underlying = result.u;
    for (let i = 0; (i < underlying.length); (i++)) {
      underlying[i] = $newArrayObjectInternal(subArrayClassData, lengths, subLengthIndex)
    }
  };
  return result
}
function $objectGetClass(instance) {
  switch ((typeof instance)) {
    case "string": {
      return $d_T.getClassOf()
    }
    case "number": {
      const v = (instance | 0);
      if ((v === instance)) {
        if ($isByte(v)) {
          return $d_jl_Byte.getClassOf()
        } else if ($isShort(v)) {
          return $d_jl_Short.getClassOf()
        } else {
          return $d_jl_Integer.getClassOf()
        }
      } else {
        return $d_jl_Float.getClassOf()
      }
    }
    case "boolean": {
      return $d_jl_Boolean.getClassOf()
    }
    case "undefined": {
      return $d_jl_Void.getClassOf()
    }
    default: {
      if ((instance === null)) {
        return instance.getClass__jl_Class()
      } else if ((instance instanceof $c_RTLong)) {
        return $d_jl_Long.getClassOf()
      } else if ((instance instanceof $Char)) {
        return $d_jl_Character.getClassOf()
      } else if ((!(!(instance && instance.$classData)))) {
        return instance.$classData.getClassOf()
      } else {
        return null
      }
    }
  }
}
function $dp_toString__T(instance) {
  return ((instance === (void 0)) ? "undefined" : instance.toString())
}
function $dp_getClass__jl_Class(instance) {
  return $objectGetClass(instance)
}
function $dp_clone__O(instance) {
  if (((!(!(instance && instance.$classData))) || (instance === null))) {
    return instance.clone__O()
  } else {
    throw $ct_jl_CloneNotSupportedException__(new $c_jl_CloneNotSupportedException())
  }
}
function $dp_notify__V(instance) {
  if ((instance === null)) {
    instance.notify__V()
  }
}
function $dp_notifyAll__V(instance) {
  if ((instance === null)) {
    instance.notifyAll__V()
  }
}
function $dp_finalize__V(instance) {
  if (((!(!(instance && instance.$classData))) || (instance === null))) {
    instance.finalize__V()
  }
}
function $dp_equals__O__Z(instance, rhs) {
  if (((!(!(instance && instance.$classData))) || (instance === null))) {
    return instance.equals__O__Z(rhs)
  } else if (((typeof instance) === "number")) {
    return $f_jl_Double__equals__O__Z(instance, rhs)
  } else if ((instance instanceof $Char)) {
    return $f_jl_Character__equals__O__Z(instance, rhs)
  } else {
    return (instance === rhs)
  }
}
function $dp_hashCode__I(instance) {
  switch ((typeof instance)) {
    case "string": {
      return $f_T__hashCode__I(instance)
    }
    case "number": {
      return $f_jl_Double__hashCode__I(instance)
    }
    case "boolean": {
      return $f_jl_Boolean__hashCode__I(instance)
    }
    case "undefined": {
      return $f_jl_Void__hashCode__I(instance)
    }
    default: {
      if (((!(!(instance && instance.$classData))) || (instance === null))) {
        return instance.hashCode__I()
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__hashCode__I(instance)
      } else {
        return $systemIdentityHashCode(instance)
      }
    }
  }
}
function $dp_compareTo__O__I(instance, rhs) {
  switch ((typeof instance)) {
    case "string": {
      return $f_T__compareTo__O__I(instance, rhs)
    }
    case "number": {
      return $f_jl_Double__compareTo__O__I(instance, rhs)
    }
    case "boolean": {
      return $f_jl_Boolean__compareTo__O__I(instance, rhs)
    }
    default: {
      if ((instance instanceof $Char)) {
        return $f_jl_Character__compareTo__O__I(instance, rhs)
      } else {
        return instance.compareTo__O__I(rhs)
      }
    }
  }
}
function $dp_length__I(instance) {
  if (((typeof instance) === "string")) {
    return $f_T__length__I(instance)
  } else {
    return instance.length__I()
  }
}
function $dp_charAt__I__C(instance, index) {
  if (((typeof instance) === "string")) {
    return $f_T__charAt__I__C(instance, index)
  } else {
    return instance.charAt__I__C(index)
  }
}
function $dp_subSequence__I__I__jl_CharSequence(instance, start, end) {
  if (((typeof instance) === "string")) {
    return $f_T__subSequence__I__I__jl_CharSequence(instance, start, end)
  } else {
    return instance.subSequence__I__I__jl_CharSequence(start, end)
  }
}
function $dp_byteValue__B(instance) {
  if (((typeof instance) === "number")) {
    return $f_jl_Double__byteValue__B(instance)
  } else {
    return instance.byteValue__B()
  }
}
function $dp_shortValue__S(instance) {
  if (((typeof instance) === "number")) {
    return $f_jl_Double__shortValue__S(instance)
  } else {
    return instance.shortValue__S()
  }
}
function $dp_intValue__I(instance) {
  if (((typeof instance) === "number")) {
    return $f_jl_Double__intValue__I(instance)
  } else {
    return instance.intValue__I()
  }
}
function $dp_longValue__J(instance) {
  if (((typeof instance) === "number")) {
    return $f_jl_Double__longValue__J(instance)
  } else {
    return instance.longValue__J()
  }
}
function $dp_floatValue__F(instance) {
  if (((typeof instance) === "number")) {
    return $f_jl_Double__floatValue__F(instance)
  } else {
    return instance.floatValue__F()
  }
}
function $dp_doubleValue__D(instance) {
  if (((typeof instance) === "number")) {
    return $f_jl_Double__doubleValue__D(instance)
  } else {
    return instance.doubleValue__D()
  }
}
function $intDiv(x, y) {
  if ((y === 0)) {
    throw $ct_jl_ArithmeticException__T__(new $c_jl_ArithmeticException(), "/ by zero")
  } else {
    return ((x / y) | 0)
  }
}
function $intMod(x, y) {
  if ((y === 0)) {
    throw $ct_jl_ArithmeticException__T__(new $c_jl_ArithmeticException(), "/ by zero")
  } else {
    return ((x % y) | 0)
  }
}
function $doubleToInt(x) {
  return ((x > 2147483647) ? 2147483647 : ((x < (-2147483648)) ? (-2147483648) : (x | 0)))
}
function $newJSObjectWithVarargs(ctor, args) {
  const instance = Object.create(ctor.prototype);
  const result = ctor.apply(instance, args);
  switch ((typeof result)) {
    case "string":
    case "number":
    case "boolean":
    case "undefined":
    case "symbol": {
      return instance
    }
    default: {
      return ((result === null) ? instance : result)
    }
  }
}
function $resolveSuperRef(superClass, propName) {
  const getPrototypeOf = Object.getPrototyeOf;
  const getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  let superProto = superClass.prototype;
  while ((superProto !== null)) {
    const desc = getOwnPropertyDescriptor(superProto, propName);
    if ((desc !== (void 0))) {
      return desc
    };
    superProto = getPrototypeOf(superProto)
  }
}
function $superGet(superClass, self, propName) {
  const desc = $resolveSuperRef(superClass, propName);
  if ((desc !== (void 0))) {
    const getter = desc.get;
    return ((getter !== (void 0)) ? getter.call(self) : getter.value)
  }
}
function $superSet(superClass, self, propName, value) {
  const desc = $resolveSuperRef(superClass, propName);
  if ((desc !== (void 0))) {
    const setter = desc.set;
    if ((setter !== (void 0))) {
      setter.call(self, value);
      return (void 0)
    }
  };
  throw new TypeError((("super has no setter '" + propName) + "'."))
}
function $systemArraycopy(src, srcPos, dest, destPos, length) {
  const srcu = src.u;
  const destu = dest.u;
  if ((((srcu !== destu) || (destPos < srcPos)) || (((srcPos + length) | 0) < destPos))) {
    for (let i = 0; (i < length); i = ((i + 1) | 0)) {
      destu[((destPos + i) | 0)] = srcu[((srcPos + i) | 0)]
    }
  } else {
    for (let i = ((length - 1) | 0); (i >= 0); i = ((i - 1) | 0)) {
      destu[((destPos + i) | 0)] = srcu[((srcPos + i) | 0)]
    }
  }
}
let $lastIDHash = 0;
const $idHashCodeMap = new WeakMap();
function $systemIdentityHashCode(obj) {
  switch ((typeof obj)) {
    case "string":
    case "number":
    case "bigint":
    case "boolean":
    case "undefined": {
      return $dp_hashCode__I(obj)
    }
    default: {
      if ((obj === null)) {
        return 0
      } else {
        let hash = $idHashCodeMap.get(obj);
        if ((hash === (void 0))) {
          hash = (($lastIDHash + 1) | 0);
          $lastIDHash = hash;
          $idHashCodeMap.set(obj, hash)
        };
        return hash
      }
    }
  }
}
function $isByte(v) {
  return ((((typeof v) === "number") && (((v << 24) >> 24) === v)) && ((1 / v) !== (1 / (-0))))
}
function $isShort(v) {
  return ((((typeof v) === "number") && (((v << 16) >> 16) === v)) && ((1 / v) !== (1 / (-0))))
}
function $isInt(v) {
  return ((((typeof v) === "number") && ((v | 0) === v)) && ((1 / v) !== (1 / (-0))))
}
function $bC(c) {
  return new $Char(c)
}
const $bC0 = $bC(0);
function $uC(v) {
  return ((v === null) ? 0 : v.c)
}
function $uJ(v) {
  return ((v === null) ? $L0 : v)
}
function $byteArray2TypedArray(value) {
  return new Int8Array(value.u)
}
function $typedArray2ByteArray(value) {
  return new ($d_B.getArrayOf().constr)(new Int8Array(value))
}
function $shortArray2TypedArray(value) {
  return new Int16Array(value.u)
}
function $typedArray2ShortArray(value) {
  return new ($d_S.getArrayOf().constr)(new Int16Array(value))
}
function $charArray2TypedArray(value) {
  return new Uint16Array(value.u)
}
function $typedArray2CharArray(value) {
  return new ($d_C.getArrayOf().constr)(new Uint16Array(value))
}
function $intArray2TypedArray(value) {
  return new Int32Array(value.u)
}
function $typedArray2IntArray(value) {
  return new ($d_I.getArrayOf().constr)(new Int32Array(value))
}
function $floatArray2TypedArray(value) {
  return new Float32Array(value.u)
}
function $typedArray2FloatArray(value) {
  return new ($d_F.getArrayOf().constr)(new Float32Array(value))
}
function $doubleArray2TypedArray(value) {
  return new Float64Array(value.u)
}
function $typedArray2DoubleArray(value) {
  return new ($d_D.getArrayOf().constr)(new Float64Array(value))
}
class $TypeData {
  constructor() {
    this.constr = (void 0);
    this.parentData = (void 0);
    this.ancestors = null;
    this.componentData = null;
    this.arrayBase = null;
    this.arrayDepth = 0;
    this.zero = null;
    this.arrayEncodedName = "";
    this._classOf = (void 0);
    this._arrayOf = (void 0);
    this.isArrayOf = (void 0);
    this.name = "";
    this.isPrimitive = false;
    this.isInterface = false;
    this.isArrayClass = false;
    this.isJSClass = false;
    this.isInstance = (void 0)
  };
  initPrim(zero, arrayEncodedName, displayName, isArrayOf) {
    this.ancestors = {};
    this.zero = zero;
    this.arrayEncodedName = arrayEncodedName;
    this.isArrayOf = isArrayOf;
    this.name = displayName;
    this.isPrimitive = true;
    this.isInstance = (function(obj) {
      return false
    });
    return this
  };
  initClass(internalNameObj, isInterface, fullName, ancestors, isJSType, parentData, isInstance, isArrayOf) {
    const internalName = $propertyName(internalNameObj);
    this.parentData = parentData;
    this.ancestors = ancestors;
    this.arrayEncodedName = (("L" + fullName) + ";");
    this.isArrayOf = (isArrayOf || (function(obj, depth) {
      return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors[internalName])))
    }));
    this.isJSType = (!(!isJSType));
    this.name = fullName;
    this.isInterface = isInterface;
    this.isInstance = (isInstance || (function(obj) {
      return (!(!((obj && obj.$classData) && obj.$classData.ancestors[internalName])))
    }));
    return this
  };
  initArray(componentData) {
    const componentZero = ((componentData.zero === "longZero") ? $L0 : componentData.zero);
    class ArrayClass extends $c_O {
      constructor(arg) {
        super();
        if (((typeof arg) === "number")) {
          this.u = new Array(arg);
          for (let i = 0; (i < arg); (i++)) {
            this.u[i] = componentZero
          }
        } else {
          this.u = arg
        }
      };
      clone__O() {
        return new ArrayClass(((this.u instanceof Array) ? this.u.slice(0) : new this.u.constructor(this.u)))
      };
    }
    ArrayClass.prototype.$classData = this;
    const encodedName = ("[" + componentData.arrayEncodedName);
    const componentBase = (componentData.arrayBase || componentData);
    const arrayDepth = (componentData.arrayDepth + 1);
    this.constr = ArrayClass;
    this.parentData = $d_O;
    this.ancestors = {
      O: 1,
      jl_Cloneable: 1,
      Ljava_io_Serializable: 1
    };
    this.componentData = componentData;
    this.arrayBase = componentBase;
    this.arrayDepth = arrayDepth;
    this.arrayEncodedName = encodedName;
    this.name = encodedName;
    this.isArrayClass = true;
    this.isInstance = (function(obj) {
      return componentBase.isArrayOf(obj, arrayDepth)
    });
    return this
  };
  getClassOf() {
    if ((!this._classOf)) {
      this._classOf = new $c_jl_Class(this)
    };
    return this._classOf
  };
  getArrayOf() {
    if ((!this._arrayOf)) {
      this._arrayOf = new $TypeData().initArray(this)
    };
    return this._arrayOf
  };
  "isAssignableFrom"(that) {
    if ((this.isPrimitive || that.isPrimitive)) {
      return (this === that)
    } else {
      let thatFakeInstance;
      if ((that === $d_T)) {
        thatFakeInstance = ""
      } else if ((that === $d_jl_Boolean)) {
        thatFakeInstance = false
      } else if ((((((that === $d_jl_Byte) || (that === $d_jl_Short)) || (that === $d_jl_Integer)) || (that === $d_jl_Float)) || (that === $d_jl_Double))) {
        thatFakeInstance = 0
      } else if ((that === $d_jl_Long)) {
        thatFakeInstance = $L0
      } else if ((that === $d_jl_Character)) {
        thatFakeInstance = $bC0
      } else if ((that === $d_jl_Void)) {
        thatFakeInstance = (void 0)
      } else {
        thatFakeInstance = {
          $classData: that
        }
      };
      return this.isInstance(thatFakeInstance)
    }
  };
  "checkCast"(obj) {
    /*<skip>*/
  };
  "getSuperclass"() {
    return (this.parentData ? this.parentData.getClassOf() : null)
  };
  "getComponentType"() {
    return (this.componentData ? this.componentData.getClassOf() : null)
  };
  "newArrayOfThisClass"(lengths) {
    let arrayClassData = this;
    for (let i = 0; (i < lengths.length); (i++)) {
      arrayClassData = arrayClassData.getArrayOf()
    };
    return $newArrayObject(arrayClassData, lengths)
  };
}
function $isArrayOf_V(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_V))))
}
function $isArrayOf_Z(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_Z))))
}
function $isArrayOf_C(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_C))))
}
function $isArrayOf_B(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_B))))
}
function $isArrayOf_S(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_S))))
}
function $isArrayOf_I(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_I))))
}
function $isArrayOf_J(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_J))))
}
function $isArrayOf_F(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_F))))
}
function $isArrayOf_D(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_D))))
}
const $d_V = new $TypeData().initPrim((void 0), "V", "void", $isArrayOf_V);
const $d_Z = new $TypeData().initPrim(false, "Z", "boolean", $isArrayOf_Z);
const $d_C = new $TypeData().initPrim(0, "C", "char", $isArrayOf_C);
const $d_B = new $TypeData().initPrim(0, "B", "byte", $isArrayOf_B);
const $d_S = new $TypeData().initPrim(0, "S", "short", $isArrayOf_S);
const $d_I = new $TypeData().initPrim(0, "I", "int", $isArrayOf_I);
const $d_J = new $TypeData().initPrim("longZero", "J", "long", $isArrayOf_J);
const $d_F = new $TypeData().initPrim(0.0, "F", "float", $isArrayOf_F);
const $d_D = new $TypeData().initPrim(0.0, "D", "double", $isArrayOf_D);
const $ct_O__ = (function($thiz) {
  return $thiz
});
class $c_O {
  hashCode__I() {
    return $systemIdentityHashCode(this)
  };
  equals__O__Z(that) {
    return (this === that)
  };
  toString__T() {
    const $$x1 = $objectGetClass(this).getName__T();
    const i = this.hashCode__I();
    return (($$x1 + "@") + (+(i >>> 0)).toString(16))
  };
  "toString"() {
    return this.toString__T()
  };
}
function $is_O(obj) {
  return (obj !== null)
}
function $isArrayOf_O(obj, depth) {
  const data = (obj && obj.$classData);
  if ((!data)) {
    return false
  } else {
    const arrayDepth = (data.arrayDepth || 0);
    return ((!(arrayDepth < depth)) && ((arrayDepth > depth) || (!data.arrayBase.isPrimitive)))
  }
}
const $d_O = new $TypeData().initClass({
  O: 0
}, false, "java.lang.Object", {
  O: 1
}, (void 0), (void 0), $is_O, $isArrayOf_O);
$c_O.prototype.$classData = $d_O;
class $c_Lethmodel_ETHHolder$Status extends $c_O {
}
function $isArrayOf_Lethmodel_ETHHolder$Status(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lethmodel_ETHHolder$Status)))
}
class $c_Lethmodel_Ethereum$ extends $c_O {
  getIssuanceApr__I__D(numEthStaking) {
    return ((numEthStaking < 1000000) ? 0.181 : ((numEthStaking < 3000000) ? (0.21925 - (3.825E-8 * numEthStaking)) : ((numEthStaking < 10000000) ? (0.124771 - (6.75714E-9 * numEthStaking)) : ((numEthStaking < 30000000) ? (0.0693 - (1.21E-9 * numEthStaking)) : ((numEthStaking < 100000000) ? (0.0393857 - (2.12857E-10 * numEthStaking)) : 0.0181)))))
  };
}
const $d_Lethmodel_Ethereum$ = new $TypeData().initClass({
  Lethmodel_Ethereum$: 0
}, false, "ethmodel.Ethereum$", {
  Lethmodel_Ethereum$: 1,
  O: 1
});
$c_Lethmodel_Ethereum$.prototype.$classData = $d_Lethmodel_Ethereum$;
let $n_Lethmodel_Ethereum$ = (void 0);
function $m_Lethmodel_Ethereum$() {
  if ((!$n_Lethmodel_Ethereum$)) {
    $n_Lethmodel_Ethereum$ = new $c_Lethmodel_Ethereum$()
  };
  return $n_Lethmodel_Ethereum$
}
const $p_Lethmodel_Simulation__setConfig__Lethmodel_OngoingConfig__V = (function($thiz, newConfig) {
  const s = $thiz.Lethmodel_Simulation__f__state;
  const ethHolders = s.Lethmodel_State__f_ethHolders;
  const historicalMetrics = s.Lethmodel_State__f_historicalMetrics;
  $thiz.Lethmodel_Simulation__f__state = new $c_Lethmodel_State(newConfig, ethHolders, historicalMetrics)
});
class $c_Lethmodel_Simulation extends $c_O {
  constructor() {
    super();
    this.Lethmodel_Simulation__f_rand = null;
    this.Lethmodel_Simulation__f__state = null;
    const a = (+new Date().getTime());
    const this$2 = $m_RTLong$();
    const value = (+Math.round(a));
    const lo = this$2.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I(value);
    const hi = this$2.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
    this.Lethmodel_Simulation__f_rand = $ct_s_util_Random__J__(new $c_s_util_Random(), new $c_RTLong(lo, hi));
    this.Lethmodel_Simulation__f__state = $m_Lethmodel_State$().init__s_util_Random__Lethmodel_InitialConfig__Lethmodel_State(this.Lethmodel_Simulation__f_rand, $m_Lethmodel_InitialConfig$().Lethmodel_InitialConfig$__f_Default)
  };
  toggleTransactionFeesBurned__Z() {
    const qual$1 = this.Lethmodel_Simulation__f__state.Lethmodel_State__f_ongoingConfig;
    const x$1 = (!this.Lethmodel_Simulation__f__state.Lethmodel_State__f_ongoingConfig.Lethmodel_OngoingConfig__f_transactionFeesBurned);
    const x$2 = qual$1.Lethmodel_OngoingConfig__f_validator32EthFlatCostUsd;
    const x$3 = qual$1.Lethmodel_OngoingConfig__f_ethUsdPrice;
    const t = qual$1.Lethmodel_OngoingConfig__f_annualizedTotalTransactionFeesUsd;
    const lo = t.RTLong__f_lo;
    const hi = t.RTLong__f_hi;
    const x$5 = qual$1.Lethmodel_OngoingConfig__f_ethHolderActionChance;
    const x$6 = qual$1.Lethmodel_OngoingConfig__f_ignoreTaxRate;
    const nc = new $c_Lethmodel_OngoingConfig(x$2, x$3, new $c_RTLong(lo, hi), x$1, x$5, x$6);
    $p_Lethmodel_Simulation__setConfig__Lethmodel_OngoingConfig__V(this, nc);
    return nc.Lethmodel_OngoingConfig__f_transactionFeesBurned
  };
  toggleIgnoreTaxRate__Z() {
    const qual$1 = this.Lethmodel_Simulation__f__state.Lethmodel_State__f_ongoingConfig;
    const x$1 = (!this.Lethmodel_Simulation__f__state.Lethmodel_State__f_ongoingConfig.Lethmodel_OngoingConfig__f_ignoreTaxRate);
    const x$2 = qual$1.Lethmodel_OngoingConfig__f_validator32EthFlatCostUsd;
    const x$3 = qual$1.Lethmodel_OngoingConfig__f_ethUsdPrice;
    const t = qual$1.Lethmodel_OngoingConfig__f_annualizedTotalTransactionFeesUsd;
    const lo = t.RTLong__f_lo;
    const hi = t.RTLong__f_hi;
    const x$5 = qual$1.Lethmodel_OngoingConfig__f_transactionFeesBurned;
    const x$6 = qual$1.Lethmodel_OngoingConfig__f_ethHolderActionChance;
    const nc = new $c_Lethmodel_OngoingConfig(x$2, x$3, new $c_RTLong(lo, hi), x$5, x$6, x$1);
    $p_Lethmodel_Simulation__setConfig__Lethmodel_OngoingConfig__V(this, nc);
    return nc.Lethmodel_OngoingConfig__f_ignoreTaxRate
  };
  stepTimeOnce__V() {
    this.Lethmodel_Simulation__f__state = $m_Lethmodel_State$().getNextState__s_util_Random__Lethmodel_State__Lethmodel_State(this.Lethmodel_Simulation__f_rand, this.Lethmodel_Simulation__f__state)
  };
  $js$exported$meth$toggleTransactionFeesBurned__O() {
    return this.toggleTransactionFeesBurned__Z()
  };
  $js$exported$meth$toggleIgnoreTaxRate__O() {
    return this.toggleIgnoreTaxRate__Z()
  };
  $js$exported$prop$state__O() {
    return this.Lethmodel_Simulation__f__state
  };
  $js$exported$meth$stepTimeOnce__O() {
    this.stepTimeOnce__V()
  };
  "stepTimeOnce"() {
    return this.$js$exported$meth$stepTimeOnce__O()
  };
  get "state"() {
    return this.$js$exported$prop$state__O()
  };
  "toggleIgnoreTaxRate"() {
    return this.$js$exported$meth$toggleIgnoreTaxRate__O()
  };
  "toggleTransactionFeesBurned"() {
    return this.$js$exported$meth$toggleTransactionFeesBurned__O()
  };
}
const $d_Lethmodel_Simulation = new $TypeData().initClass({
  Lethmodel_Simulation: 0
}, false, "ethmodel.Simulation", {
  Lethmodel_Simulation: 1,
  O: 1
});
$c_Lethmodel_Simulation.prototype.$classData = $d_Lethmodel_Simulation;
class $c_jl_Class extends $c_O {
  constructor(data0) {
    super();
    this.jl_Class__f_data = null;
    this.jl_Class__f_data = data0
  };
  toString__T() {
    return ((this.isInterface__Z() ? "interface " : (this.isPrimitive__Z() ? "" : "class ")) + this.getName__T())
  };
  isAssignableFrom__jl_Class__Z(that) {
    return (!(!this.jl_Class__f_data.isAssignableFrom(that.jl_Class__f_data)))
  };
  isInterface__Z() {
    return (!(!this.jl_Class__f_data.isInterface))
  };
  isArray__Z() {
    return (!(!this.jl_Class__f_data.isArrayClass))
  };
  isPrimitive__Z() {
    return (!(!this.jl_Class__f_data.isPrimitive))
  };
  getName__T() {
    return this.jl_Class__f_data.name
  };
  getComponentType__jl_Class() {
    return this.jl_Class__f_data.getComponentType()
  };
  newArrayOfThisClass__O__O(dimensions) {
    return this.jl_Class__f_data.newArrayOfThisClass(dimensions)
  };
}
function $isArrayOf_jl_Class(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Class)))
}
const $d_jl_Class = new $TypeData().initClass({
  jl_Class: 0
}, false, "java.lang.Class", {
  jl_Class: 1,
  O: 1
});
$c_jl_Class.prototype.$classData = $d_jl_Class;
class $c_jl_FloatingPointBits$ extends $c_O {
  constructor() {
    super();
    this.jl_FloatingPointBits$__f_java$lang$FloatingPointBits$$_areTypedArraysSupported = false;
    this.jl_FloatingPointBits$__f_arrayBuffer = null;
    this.jl_FloatingPointBits$__f_int32Array = null;
    this.jl_FloatingPointBits$__f_float32Array = null;
    this.jl_FloatingPointBits$__f_float64Array = null;
    this.jl_FloatingPointBits$__f_areTypedArraysBigEndian = false;
    this.jl_FloatingPointBits$__f_highOffset = 0;
    this.jl_FloatingPointBits$__f_lowOffset = 0;
    $n_jl_FloatingPointBits$ = this;
    this.jl_FloatingPointBits$__f_java$lang$FloatingPointBits$$_areTypedArraysSupported = true;
    this.jl_FloatingPointBits$__f_arrayBuffer = new ArrayBuffer(8);
    this.jl_FloatingPointBits$__f_int32Array = new Int32Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 2);
    this.jl_FloatingPointBits$__f_float32Array = new Float32Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 2);
    this.jl_FloatingPointBits$__f_float64Array = new Float64Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 1);
    this.jl_FloatingPointBits$__f_int32Array[0] = 16909060;
    this.jl_FloatingPointBits$__f_areTypedArraysBigEndian = ((new Int8Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 8)[0] | 0) === 1);
    this.jl_FloatingPointBits$__f_highOffset = (this.jl_FloatingPointBits$__f_areTypedArraysBigEndian ? 0 : 1);
    this.jl_FloatingPointBits$__f_lowOffset = (this.jl_FloatingPointBits$__f_areTypedArraysBigEndian ? 1 : 0)
  };
  numberHashCode__D__I(value) {
    const iv = ((value | 0) | 0);
    if (((iv === value) && ((1.0 / value) !== (-Infinity)))) {
      return iv
    } else {
      const t = this.doubleToLongBits__D__J(value);
      const lo = t.RTLong__f_lo;
      const hi = t.RTLong__f_hi;
      return (lo ^ hi)
    }
  };
  doubleToLongBits__D__J(value) {
    this.jl_FloatingPointBits$__f_float64Array[0] = value;
    const value$1 = (this.jl_FloatingPointBits$__f_int32Array[this.jl_FloatingPointBits$__f_highOffset] | 0);
    const value$2 = (this.jl_FloatingPointBits$__f_int32Array[this.jl_FloatingPointBits$__f_lowOffset] | 0);
    return new $c_RTLong(value$2, value$1)
  };
}
const $d_jl_FloatingPointBits$ = new $TypeData().initClass({
  jl_FloatingPointBits$: 0
}, false, "java.lang.FloatingPointBits$", {
  jl_FloatingPointBits$: 1,
  O: 1
});
$c_jl_FloatingPointBits$.prototype.$classData = $d_jl_FloatingPointBits$;
let $n_jl_FloatingPointBits$ = (void 0);
function $m_jl_FloatingPointBits$() {
  if ((!$n_jl_FloatingPointBits$)) {
    $n_jl_FloatingPointBits$ = new $c_jl_FloatingPointBits$()
  };
  return $n_jl_FloatingPointBits$
}
const $p_jl_System$SystemProperties$__loadSystemProperties__O = (function($thiz) {
  const result = {};
  result["java.version"] = "1.8";
  result["java.vm.specification.version"] = "1.8";
  result["java.vm.specification.vendor"] = "Oracle Corporation";
  result["java.vm.specification.name"] = "Java Virtual Machine Specification";
  result["java.vm.name"] = "Scala.js";
  const value = $linkingInfo.linkerVersion;
  result["java.vm.version"] = value;
  result["java.specification.version"] = "1.8";
  result["java.specification.vendor"] = "Oracle Corporation";
  result["java.specification.name"] = "Java Platform API Specification";
  result["file.separator"] = "/";
  result["path.separator"] = ":";
  result["line.separator"] = "\n";
  return result
});
class $c_jl_System$SystemProperties$ extends $c_O {
  constructor() {
    super();
    this.jl_System$SystemProperties$__f_dict = null;
    this.jl_System$SystemProperties$__f_properties = null;
    $n_jl_System$SystemProperties$ = this;
    this.jl_System$SystemProperties$__f_dict = $p_jl_System$SystemProperties$__loadSystemProperties__O(this);
    this.jl_System$SystemProperties$__f_properties = null
  };
  getProperty__T__T__T(key, default$1) {
    return ((this.jl_System$SystemProperties$__f_dict !== null) ? $m_jl_Utils$().dictGetOrElse__O__T__O__O(this.jl_System$SystemProperties$__f_dict, key, default$1) : this.jl_System$SystemProperties$__f_properties.getProperty__T__T__T(key, default$1))
  };
}
const $d_jl_System$SystemProperties$ = new $TypeData().initClass({
  jl_System$SystemProperties$: 0
}, false, "java.lang.System$SystemProperties$", {
  jl_System$SystemProperties$: 1,
  O: 1
});
$c_jl_System$SystemProperties$.prototype.$classData = $d_jl_System$SystemProperties$;
let $n_jl_System$SystemProperties$ = (void 0);
function $m_jl_System$SystemProperties$() {
  if ((!$n_jl_System$SystemProperties$)) {
    $n_jl_System$SystemProperties$ = new $c_jl_System$SystemProperties$()
  };
  return $n_jl_System$SystemProperties$
}
class $c_jl_Utils$ extends $c_O {
  dictGetOrElse__O__T__O__O(dict, key, default$1) {
    return ((!(!$m_jl_Utils$Cache$().jl_Utils$Cache$__f_safeHasOwnProperty.call(dict, key))) ? dict[key] : default$1)
  };
}
const $d_jl_Utils$ = new $TypeData().initClass({
  jl_Utils$: 0
}, false, "java.lang.Utils$", {
  jl_Utils$: 1,
  O: 1
});
$c_jl_Utils$.prototype.$classData = $d_jl_Utils$;
let $n_jl_Utils$ = (void 0);
function $m_jl_Utils$() {
  if ((!$n_jl_Utils$)) {
    $n_jl_Utils$ = new $c_jl_Utils$()
  };
  return $n_jl_Utils$
}
class $c_jl_Utils$Cache$ extends $c_O {
  constructor() {
    super();
    this.jl_Utils$Cache$__f_safeHasOwnProperty = null;
    $n_jl_Utils$Cache$ = this;
    this.jl_Utils$Cache$__f_safeHasOwnProperty = Object.prototype.hasOwnProperty
  };
}
const $d_jl_Utils$Cache$ = new $TypeData().initClass({
  jl_Utils$Cache$: 0
}, false, "java.lang.Utils$Cache$", {
  jl_Utils$Cache$: 1,
  O: 1
});
$c_jl_Utils$Cache$.prototype.$classData = $d_jl_Utils$Cache$;
let $n_jl_Utils$Cache$ = (void 0);
function $m_jl_Utils$Cache$() {
  if ((!$n_jl_Utils$Cache$)) {
    $n_jl_Utils$Cache$ = new $c_jl_Utils$Cache$()
  };
  return $n_jl_Utils$Cache$
}
const $f_jl_Void__equals__O__Z = (function($thiz, that) {
  return ($thiz === that)
});
const $f_jl_Void__hashCode__I = (function($thiz) {
  return 0
});
const $f_jl_Void__toString__T = (function($thiz) {
  return "undefined"
});
function $isArrayOf_jl_Void(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Void)))
}
const $d_jl_Void = new $TypeData().initClass({
  jl_Void: 0
}, false, "java.lang.Void", {
  jl_Void: 1,
  O: 1
}, (void 0), (void 0), ((x) => (x === (void 0))));
class $c_jl_reflect_Array$ extends $c_O {
  newInstance__jl_Class__I__O(componentType, length) {
    return componentType.newArrayOfThisClass__O__O([length])
  };
  getLength__O__I(array) {
    if ($isArrayOf_O(array, 1)) {
      const x2 = array;
      return x2.u.length
    } else if ($isArrayOf_Z(array, 1)) {
      const x3 = array;
      return x3.u.length
    } else if ($isArrayOf_C(array, 1)) {
      const x4 = array;
      return x4.u.length
    } else if ($isArrayOf_B(array, 1)) {
      const x5 = array;
      return x5.u.length
    } else if ($isArrayOf_S(array, 1)) {
      const x6 = array;
      return x6.u.length
    } else if ($isArrayOf_I(array, 1)) {
      const x7 = array;
      return x7.u.length
    } else if ($isArrayOf_J(array, 1)) {
      const x8 = array;
      return x8.u.length
    } else if ($isArrayOf_F(array, 1)) {
      const x9 = array;
      return x9.u.length
    } else if ($isArrayOf_D(array, 1)) {
      const x10 = array;
      return x10.u.length
    } else {
      throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "argument type mismatch")
    }
  };
}
const $d_jl_reflect_Array$ = new $TypeData().initClass({
  jl_reflect_Array$: 0
}, false, "java.lang.reflect.Array$", {
  jl_reflect_Array$: 1,
  O: 1
});
$c_jl_reflect_Array$.prototype.$classData = $d_jl_reflect_Array$;
let $n_jl_reflect_Array$ = (void 0);
function $m_jl_reflect_Array$() {
  if ((!$n_jl_reflect_Array$)) {
    $n_jl_reflect_Array$ = new $c_jl_reflect_Array$()
  };
  return $n_jl_reflect_Array$
}
class $c_ju_Arrays$ extends $c_O {
  binarySearch__AI__I__I(a, key) {
    let startIndex = 0;
    let endIndex = a.u.length;
    while (true) {
      if ((startIndex === endIndex)) {
        return (((-1) - startIndex) | 0)
      } else {
        const mid = ((((startIndex + endIndex) | 0) >>> 1) | 0);
        const elem = a.u[mid];
        if ((key < elem)) {
          endIndex = mid
        } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, elem)) {
          return mid
        } else {
          startIndex = ((1 + mid) | 0)
        }
      }
    }
  };
  equals__AJ__AJ__Z(a, b) {
    if ((a === b)) {
      return true
    };
    if (((a === null) || (b === null))) {
      return false
    };
    const len = a.u.length;
    if ((b.u.length !== len)) {
      return false
    };
    let i = 0;
    while ((i !== len)) {
      const t = a.u[i];
      const lo = t.RTLong__f_lo;
      const hi = t.RTLong__f_hi;
      const t$1 = b.u[i];
      const lo$1 = t$1.RTLong__f_lo;
      const hi$1 = t$1.RTLong__f_hi;
      if ((!$m_sr_BoxesRunTime$().equals__O__O__Z(new $c_RTLong(lo, hi), new $c_RTLong(lo$1, hi$1)))) {
        return false
      };
      i = ((1 + i) | 0)
    };
    return true
  };
  equals__AI__AI__Z(a, b) {
    if ((a === b)) {
      return true
    };
    if (((a === null) || (b === null))) {
      return false
    };
    const len = a.u.length;
    if ((b.u.length !== len)) {
      return false
    };
    let i = 0;
    while ((i !== len)) {
      const x = a.u[i];
      const y = b.u[i];
      if ((!$m_sr_BoxesRunTime$().equals__O__O__Z(x, y))) {
        return false
      };
      i = ((1 + i) | 0)
    };
    return true
  };
  equals__AS__AS__Z(a, b) {
    if ((a === b)) {
      return true
    };
    if (((a === null) || (b === null))) {
      return false
    };
    const len = a.u.length;
    if ((b.u.length !== len)) {
      return false
    };
    let i = 0;
    while ((i !== len)) {
      const x = a.u[i];
      const y = b.u[i];
      if ((!$m_sr_BoxesRunTime$().equals__O__O__Z(x, y))) {
        return false
      };
      i = ((1 + i) | 0)
    };
    return true
  };
  equals__AC__AC__Z(a, b) {
    if ((a === b)) {
      return true
    };
    if (((a === null) || (b === null))) {
      return false
    };
    const len = a.u.length;
    if ((b.u.length !== len)) {
      return false
    };
    let i = 0;
    while ((i !== len)) {
      const x = a.u[i];
      const y = b.u[i];
      if ((!$m_sr_BoxesRunTime$().equals__O__O__Z($bC(x), $bC(y)))) {
        return false
      };
      i = ((1 + i) | 0)
    };
    return true
  };
  equals__AB__AB__Z(a, b) {
    if ((a === b)) {
      return true
    };
    if (((a === null) || (b === null))) {
      return false
    };
    const len = a.u.length;
    if ((b.u.length !== len)) {
      return false
    };
    let i = 0;
    while ((i !== len)) {
      const x = a.u[i];
      const y = b.u[i];
      if ((!$m_sr_BoxesRunTime$().equals__O__O__Z(x, y))) {
        return false
      };
      i = ((1 + i) | 0)
    };
    return true
  };
  equals__AZ__AZ__Z(a, b) {
    if ((a === b)) {
      return true
    };
    if (((a === null) || (b === null))) {
      return false
    };
    const len = a.u.length;
    if ((b.u.length !== len)) {
      return false
    };
    let i = 0;
    while ((i !== len)) {
      const x = a.u[i];
      const y = b.u[i];
      if ((!$m_sr_BoxesRunTime$().equals__O__O__Z(x, y))) {
        return false
      };
      i = ((1 + i) | 0)
    };
    return true
  };
  equals__AD__AD__Z(a, b) {
    if ((a === b)) {
      return true
    };
    if (((a === null) || (b === null))) {
      return false
    };
    const len = a.u.length;
    if ((b.u.length !== len)) {
      return false
    };
    let i = 0;
    while ((i !== len)) {
      const x = a.u[i];
      const y = b.u[i];
      if ((!$m_sr_BoxesRunTime$().equals__O__O__Z(x, y))) {
        return false
      };
      i = ((1 + i) | 0)
    };
    return true
  };
  equals__AF__AF__Z(a, b) {
    if ((a === b)) {
      return true
    };
    if (((a === null) || (b === null))) {
      return false
    };
    const len = a.u.length;
    if ((b.u.length !== len)) {
      return false
    };
    let i = 0;
    while ((i !== len)) {
      const x = a.u[i];
      const y = b.u[i];
      if ((!$m_sr_BoxesRunTime$().equals__O__O__Z(x, y))) {
        return false
      };
      i = ((1 + i) | 0)
    };
    return true
  };
  fill__AO__I__I__O__V(a, fromIndex, toIndex, value) {
    if ((fromIndex > toIndex)) {
      throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), (((("fromIndex(" + fromIndex) + ") > toIndex(") + toIndex) + ")"))
    };
    if ((fromIndex < 0)) {
      /*<skip>*/
    };
    if ((toIndex > 0)) {
      /*<skip>*/
    };
    let i = fromIndex;
    while ((i !== toIndex)) {
      a.u[i] = value;
      i = ((1 + i) | 0)
    }
  };
}
const $d_ju_Arrays$ = new $TypeData().initClass({
  ju_Arrays$: 0
}, false, "java.util.Arrays$", {
  ju_Arrays$: 1,
  O: 1
});
$c_ju_Arrays$.prototype.$classData = $d_ju_Arrays$;
let $n_ju_Arrays$ = (void 0);
function $m_ju_Arrays$() {
  if ((!$n_ju_Arrays$)) {
    $n_ju_Arrays$ = new $c_ju_Arrays$()
  };
  return $n_ju_Arrays$
}
class $c_s_Array$EmptyArrays$ extends $c_O {
  constructor() {
    super();
    this.s_Array$EmptyArrays$__f_emptyBooleanArray = null;
    this.s_Array$EmptyArrays$__f_emptyByteArray = null;
    this.s_Array$EmptyArrays$__f_emptyCharArray = null;
    this.s_Array$EmptyArrays$__f_emptyDoubleArray = null;
    this.s_Array$EmptyArrays$__f_emptyFloatArray = null;
    this.s_Array$EmptyArrays$__f_emptyIntArray = null;
    this.s_Array$EmptyArrays$__f_emptyLongArray = null;
    this.s_Array$EmptyArrays$__f_emptyShortArray = null;
    this.s_Array$EmptyArrays$__f_emptyObjectArray = null;
    $n_s_Array$EmptyArrays$ = this;
    this.s_Array$EmptyArrays$__f_emptyBooleanArray = $newArrayObject($d_Z.getArrayOf(), [0]);
    this.s_Array$EmptyArrays$__f_emptyByteArray = $newArrayObject($d_B.getArrayOf(), [0]);
    this.s_Array$EmptyArrays$__f_emptyCharArray = $newArrayObject($d_C.getArrayOf(), [0]);
    this.s_Array$EmptyArrays$__f_emptyDoubleArray = $newArrayObject($d_D.getArrayOf(), [0]);
    this.s_Array$EmptyArrays$__f_emptyFloatArray = $newArrayObject($d_F.getArrayOf(), [0]);
    this.s_Array$EmptyArrays$__f_emptyIntArray = $newArrayObject($d_I.getArrayOf(), [0]);
    this.s_Array$EmptyArrays$__f_emptyLongArray = $newArrayObject($d_J.getArrayOf(), [0]);
    this.s_Array$EmptyArrays$__f_emptyShortArray = $newArrayObject($d_S.getArrayOf(), [0]);
    this.s_Array$EmptyArrays$__f_emptyObjectArray = $newArrayObject($d_O.getArrayOf(), [0])
  };
}
const $d_s_Array$EmptyArrays$ = new $TypeData().initClass({
  s_Array$EmptyArrays$: 0
}, false, "scala.Array$EmptyArrays$", {
  s_Array$EmptyArrays$: 1,
  O: 1
});
$c_s_Array$EmptyArrays$.prototype.$classData = $d_s_Array$EmptyArrays$;
let $n_s_Array$EmptyArrays$ = (void 0);
function $m_s_Array$EmptyArrays$() {
  if ((!$n_s_Array$EmptyArrays$)) {
    $n_s_Array$EmptyArrays$ = new $c_s_Array$EmptyArrays$()
  };
  return $n_s_Array$EmptyArrays$
}
class $c_s_LowPriorityImplicits2 extends $c_O {
}
class $c_sc_ArrayOps$ extends $c_O {
  copyToArray$extension__O__O__I__I__I(this$, xs, start, len) {
    const srcLen = $m_sr_ScalaRunTime$().array_length__O__I(this$);
    const destLen = $m_sr_ScalaRunTime$().array_length__O__I(xs);
    const x = ((len < srcLen) ? len : srcLen);
    const y = ((destLen - start) | 0);
    const x$1 = ((x < y) ? x : y);
    const copied = ((x$1 > 0) ? x$1 : 0);
    if ((copied > 0)) {
      $m_s_Array$().copy__O__I__O__I__I__V(this$, 0, xs, start, copied)
    };
    return copied
  };
}
const $d_sc_ArrayOps$ = new $TypeData().initClass({
  sc_ArrayOps$: 0
}, false, "scala.collection.ArrayOps$", {
  sc_ArrayOps$: 1,
  O: 1
});
$c_sc_ArrayOps$.prototype.$classData = $d_sc_ArrayOps$;
let $n_sc_ArrayOps$ = (void 0);
function $m_sc_ArrayOps$() {
  if ((!$n_sc_ArrayOps$)) {
    $n_sc_ArrayOps$ = new $c_sc_ArrayOps$()
  };
  return $n_sc_ArrayOps$
}
class $c_sc_Hashing$ extends $c_O {
  improve__I__I(hcode) {
    let h = ((hcode + (~(hcode << 9))) | 0);
    h = (h ^ ((h >>> 14) | 0));
    h = ((h + (h << 4)) | 0);
    return (h ^ ((h >>> 10) | 0))
  };
}
const $d_sc_Hashing$ = new $TypeData().initClass({
  sc_Hashing$: 0
}, false, "scala.collection.Hashing$", {
  sc_Hashing$: 1,
  O: 1
});
$c_sc_Hashing$.prototype.$classData = $d_sc_Hashing$;
let $n_sc_Hashing$ = (void 0);
function $m_sc_Hashing$() {
  if ((!$n_sc_Hashing$)) {
    $n_sc_Hashing$ = new $c_sc_Hashing$()
  };
  return $n_sc_Hashing$
}
function $is_sc_IterableOnce(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_IterableOnce)))
}
function $isArrayOf_sc_IterableOnce(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_IterableOnce)))
}
const $f_sc_IterableOnceOps__forall__F1__Z = (function($thiz, p) {
  let res = true;
  const it = $thiz.iterator__sc_Iterator();
  while ((res && it.hasNext__Z())) {
    res = (!(!p.apply__O__O(it.next__O())))
  };
  return res
});
const $f_sc_IterableOnceOps__exists__F1__Z = (function($thiz, p) {
  let res = false;
  const it = $thiz.iterator__sc_Iterator();
  while (((!res) && it.hasNext__Z())) {
    res = (!(!p.apply__O__O(it.next__O())))
  };
  return res
});
const $f_sc_IterableOnceOps__isEmpty__Z = (function($thiz) {
  return (!$thiz.iterator__sc_Iterator().hasNext__Z())
});
const $f_sc_IterableOnceOps__copyToArray__O__I__I = (function($thiz, xs, start) {
  const xsLen = $m_sr_ScalaRunTime$().array_length__O__I(xs);
  const it = $thiz.iterator__sc_Iterator();
  let i = start;
  while (((i < xsLen) && it.hasNext__Z())) {
    $m_sr_ScalaRunTime$().array_update__O__I__O__V(xs, i, it.next__O());
    i = ((1 + i) | 0)
  };
  return ((i - start) | 0)
});
const $f_sc_IterableOnceOps__copyToArray__O__I__I__I = (function($thiz, xs, start, len) {
  const it = $thiz.iterator__sc_Iterator();
  let i = start;
  const y = (($m_sr_ScalaRunTime$().array_length__O__I(xs) - start) | 0);
  const end = ((start + ((len < y) ? len : y)) | 0);
  while (((i < end) && it.hasNext__Z())) {
    $m_sr_ScalaRunTime$().array_update__O__I__O__V(xs, i, it.next__O());
    i = ((1 + i) | 0)
  };
  return ((i - start) | 0)
});
const $f_sc_IterableOnceOps__mkString__T__T__T__T = (function($thiz, start, sep, end) {
  if ($thiz.isEmpty__Z()) {
    return (("" + start) + end)
  } else {
    const this$1 = $thiz.addString__scm_StringBuilder__T__T__T__scm_StringBuilder($ct_scm_StringBuilder__(new $c_scm_StringBuilder()), start, sep, end);
    return this$1.scm_StringBuilder__f_underlying.jl_StringBuilder__f_java$lang$StringBuilder$$content
  }
});
const $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function($thiz, b, start, sep, end) {
  const jsb = b.scm_StringBuilder__f_underlying;
  if (((start.length | 0) !== 0)) {
    jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content) + start)
  };
  const it = $thiz.iterator__sc_Iterator();
  if (it.hasNext__Z()) {
    const obj = it.next__O();
    jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj);
    while (it.hasNext__Z()) {
      jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
      const obj$1 = it.next__O();
      jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$1)
    }
  };
  if (((end.length | 0) !== 0)) {
    jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content) + end)
  };
  return b
});
const $p_sc_LinearSeqIterator$LazyCell__v$lzycompute__sc_LinearSeqOps = (function($thiz) {
  if ((!$thiz.sc_LinearSeqIterator$LazyCell__f_bitmap$0)) {
    $thiz.sc_LinearSeqIterator$LazyCell__f_v = $thiz.sc_LinearSeqIterator$LazyCell__f_st.apply__O();
    $thiz.sc_LinearSeqIterator$LazyCell__f_bitmap$0 = true
  };
  $thiz.sc_LinearSeqIterator$LazyCell__f_st = null;
  return $thiz.sc_LinearSeqIterator$LazyCell__f_v
});
class $c_sc_LinearSeqIterator$LazyCell extends $c_O {
  constructor(outer, st) {
    super();
    this.sc_LinearSeqIterator$LazyCell__f_v = null;
    this.sc_LinearSeqIterator$LazyCell__f_st = null;
    this.sc_LinearSeqIterator$LazyCell__f_bitmap$0 = false;
    this.sc_LinearSeqIterator$LazyCell__f_st = st
  };
  v__sc_LinearSeqOps() {
    return ((!this.sc_LinearSeqIterator$LazyCell__f_bitmap$0) ? $p_sc_LinearSeqIterator$LazyCell__v$lzycompute__sc_LinearSeqOps(this) : this.sc_LinearSeqIterator$LazyCell__f_v)
  };
}
const $d_sc_LinearSeqIterator$LazyCell = new $TypeData().initClass({
  sc_LinearSeqIterator$LazyCell: 0
}, false, "scala.collection.LinearSeqIterator$LazyCell", {
  sc_LinearSeqIterator$LazyCell: 1,
  O: 1
});
$c_sc_LinearSeqIterator$LazyCell.prototype.$classData = $d_sc_LinearSeqIterator$LazyCell;
const $p_sci_ChampBaseIterator__initNodes__V = (function($thiz) {
  if (($thiz.sci_ChampBaseIterator__f_nodeCursorsAndLengths === null)) {
    $thiz.sci_ChampBaseIterator__f_nodeCursorsAndLengths = $newArrayObject($d_I.getArrayOf(), [($m_sci_Node$().sci_Node$__f_MaxDepth << 1)]);
    $thiz.sci_ChampBaseIterator__f_nodes = $newArrayObject($d_sci_Node.getArrayOf(), [$m_sci_Node$().sci_Node$__f_MaxDepth])
  }
});
const $p_sci_ChampBaseIterator__setupPayloadNode__sci_Node__V = (function($thiz, node) {
  $thiz.sci_ChampBaseIterator__f_currentValueNode = node;
  $thiz.sci_ChampBaseIterator__f_currentValueCursor = 0;
  $thiz.sci_ChampBaseIterator__f_currentValueLength = node.payloadArity__I()
});
const $p_sci_ChampBaseIterator__pushNode__sci_Node__V = (function($thiz, node) {
  $p_sci_ChampBaseIterator__initNodes__V($thiz);
  $thiz.sci_ChampBaseIterator__f_currentStackLevel = ((1 + $thiz.sci_ChampBaseIterator__f_currentStackLevel) | 0);
  const cursorIndex = ($thiz.sci_ChampBaseIterator__f_currentStackLevel << 1);
  const lengthIndex = ((1 + ($thiz.sci_ChampBaseIterator__f_currentStackLevel << 1)) | 0);
  $thiz.sci_ChampBaseIterator__f_nodes.u[$thiz.sci_ChampBaseIterator__f_currentStackLevel] = node;
  $thiz.sci_ChampBaseIterator__f_nodeCursorsAndLengths.u[cursorIndex] = 0;
  $thiz.sci_ChampBaseIterator__f_nodeCursorsAndLengths.u[lengthIndex] = node.nodeArity__I()
});
const $p_sci_ChampBaseIterator__popNode__V = (function($thiz) {
  $thiz.sci_ChampBaseIterator__f_currentStackLevel = (((-1) + $thiz.sci_ChampBaseIterator__f_currentStackLevel) | 0)
});
const $p_sci_ChampBaseIterator__searchNextValueNode__Z = (function($thiz) {
  while (($thiz.sci_ChampBaseIterator__f_currentStackLevel >= 0)) {
    const cursorIndex = ($thiz.sci_ChampBaseIterator__f_currentStackLevel << 1);
    const lengthIndex = ((1 + ($thiz.sci_ChampBaseIterator__f_currentStackLevel << 1)) | 0);
    const nodeCursor = $thiz.sci_ChampBaseIterator__f_nodeCursorsAndLengths.u[cursorIndex];
    const nodeLength = $thiz.sci_ChampBaseIterator__f_nodeCursorsAndLengths.u[lengthIndex];
    if ((nodeCursor < nodeLength)) {
      const ev$1 = $thiz.sci_ChampBaseIterator__f_nodeCursorsAndLengths;
      ev$1.u[cursorIndex] = ((1 + ev$1.u[cursorIndex]) | 0);
      const this$1 = $thiz.sci_ChampBaseIterator__f_nodes.u[$thiz.sci_ChampBaseIterator__f_currentStackLevel];
      const nextNode = this$1.getNode__I__sci_SetNode(nodeCursor);
      if (nextNode.hasNodes__Z()) {
        $p_sci_ChampBaseIterator__pushNode__sci_Node__V($thiz, nextNode)
      };
      if (nextNode.hasPayload__Z()) {
        $p_sci_ChampBaseIterator__setupPayloadNode__sci_Node__V($thiz, nextNode);
        return true
      }
    } else {
      $p_sci_ChampBaseIterator__popNode__V($thiz)
    }
  };
  return false
});
const $ct_sci_ChampBaseIterator__ = (function($thiz) {
  $thiz.sci_ChampBaseIterator__f_currentValueCursor = 0;
  $thiz.sci_ChampBaseIterator__f_currentValueLength = 0;
  $thiz.sci_ChampBaseIterator__f_currentStackLevel = (-1);
  return $thiz
});
const $ct_sci_ChampBaseIterator__sci_Node__ = (function($thiz, rootNode) {
  $ct_sci_ChampBaseIterator__($thiz);
  if (rootNode.hasNodes__Z()) {
    $p_sci_ChampBaseIterator__pushNode__sci_Node__V($thiz, rootNode)
  };
  if (rootNode.hasPayload__Z()) {
    $p_sci_ChampBaseIterator__setupPayloadNode__sci_Node__V($thiz, rootNode)
  };
  return $thiz
});
class $c_sci_ChampBaseIterator extends $c_O {
  constructor() {
    super();
    this.sci_ChampBaseIterator__f_currentValueCursor = 0;
    this.sci_ChampBaseIterator__f_currentValueLength = 0;
    this.sci_ChampBaseIterator__f_currentValueNode = null;
    this.sci_ChampBaseIterator__f_currentStackLevel = 0;
    this.sci_ChampBaseIterator__f_nodeCursorsAndLengths = null;
    this.sci_ChampBaseIterator__f_nodes = null
  };
  hasNext__Z() {
    return ((this.sci_ChampBaseIterator__f_currentValueCursor < this.sci_ChampBaseIterator__f_currentValueLength) || $p_sci_ChampBaseIterator__searchNextValueNode__Z(this))
  };
}
const $p_sci_IndexedSeqDefaults$__liftedTree1$1__I = (function($thiz) {
  try {
    const x = $m_jl_System$SystemProperties$().getProperty__T__T__T("scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength", "64");
    const this$4 = $m_jl_Integer$();
    return this$4.parseInt__T__I__I(x, 10)
  } catch (e) {
    if ((e instanceof $c_jl_SecurityException)) {
      return 64
    } else {
      throw e
    }
  }
});
class $c_sci_IndexedSeqDefaults$ extends $c_O {
  constructor() {
    super();
    this.sci_IndexedSeqDefaults$__f_defaultApplyPreferredMaxLength = 0;
    $n_sci_IndexedSeqDefaults$ = this;
    this.sci_IndexedSeqDefaults$__f_defaultApplyPreferredMaxLength = $p_sci_IndexedSeqDefaults$__liftedTree1$1__I(this)
  };
}
const $d_sci_IndexedSeqDefaults$ = new $TypeData().initClass({
  sci_IndexedSeqDefaults$: 0
}, false, "scala.collection.immutable.IndexedSeqDefaults$", {
  sci_IndexedSeqDefaults$: 1,
  O: 1
});
$c_sci_IndexedSeqDefaults$.prototype.$classData = $d_sci_IndexedSeqDefaults$;
let $n_sci_IndexedSeqDefaults$ = (void 0);
function $m_sci_IndexedSeqDefaults$() {
  if ((!$n_sci_IndexedSeqDefaults$)) {
    $n_sci_IndexedSeqDefaults$ = new $c_sci_IndexedSeqDefaults$()
  };
  return $n_sci_IndexedSeqDefaults$
}
const $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException = (function($thiz, as, ix) {
  return $ct_jl_ArrayIndexOutOfBoundsException__T__(new $c_jl_ArrayIndexOutOfBoundsException(), ((ix + " is out of bounds (min 0, max ") + (((-1) + $m_sr_ScalaRunTime$().array_length__O__I(as)) | 0)))
});
class $c_sci_Node extends $c_O {
  removeElement__AI__I__AI(as, ix) {
    if ((ix < 0)) {
      throw $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix)
    };
    if ((ix > (((-1) + as.u.length) | 0))) {
      throw $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix)
    };
    const result = $newArrayObject($d_I.getArrayOf(), [(((-1) + as.u.length) | 0)]);
    $systemArraycopy(as, 0, result, 0, ix);
    const srcPos = ((1 + ix) | 0);
    const length = (((-1) + ((as.u.length - ix) | 0)) | 0);
    $systemArraycopy(as, srcPos, result, ix, length);
    return result
  };
  insertElement__AI__I__I__AI(as, ix, elem) {
    if ((ix < 0)) {
      throw $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix)
    };
    if ((ix > as.u.length)) {
      throw $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix)
    };
    const result = $newArrayObject($d_I.getArrayOf(), [((1 + as.u.length) | 0)]);
    $systemArraycopy(as, 0, result, 0, ix);
    result.u[ix] = elem;
    const destPos = ((1 + ix) | 0);
    const length = ((as.u.length - ix) | 0);
    $systemArraycopy(as, ix, result, destPos, length);
    return result
  };
}
const $d_sci_Node = new $TypeData().initClass({
  sci_Node: 0
}, false, "scala.collection.immutable.Node", {
  sci_Node: 1,
  O: 1
});
$c_sci_Node.prototype.$classData = $d_sci_Node;
class $c_sci_Node$ extends $c_O {
  constructor() {
    super();
    this.sci_Node$__f_MaxDepth = 0;
    $n_sci_Node$ = this;
    this.sci_Node$__f_MaxDepth = $doubleToInt((+Math.ceil(6.4)))
  };
  maskFrom__I__I__I(hash, shift) {
    return (31 & ((hash >>> shift) | 0))
  };
  bitposFrom__I__I(mask) {
    return (1 << mask)
  };
  indexFrom__I__I__I(bitmap, bitpos) {
    const i = (bitmap & (((-1) + bitpos) | 0));
    return $m_jl_Integer$().bitCount__I__I(i)
  };
  indexFrom__I__I__I__I(bitmap, mask, bitpos) {
    return ((bitmap === (-1)) ? mask : this.indexFrom__I__I__I(bitmap, bitpos))
  };
}
const $d_sci_Node$ = new $TypeData().initClass({
  sci_Node$: 0
}, false, "scala.collection.immutable.Node$", {
  sci_Node$: 1,
  O: 1
});
$c_sci_Node$.prototype.$classData = $d_sci_Node$;
let $n_sci_Node$ = (void 0);
function $m_sci_Node$() {
  if ((!$n_sci_Node$)) {
    $n_sci_Node$ = new $c_sci_Node$()
  };
  return $n_sci_Node$
}
class $c_sci_SetNode$ extends $c_O {
  constructor() {
    super();
    this.sci_SetNode$__f_EmptySetNode = null;
    $n_sci_SetNode$ = this;
    this.sci_SetNode$__f_EmptySetNode = new $c_sci_BitmapIndexedSetNode(0, 0, ($m_s_reflect_ManifestFactory$AnyManifest$(), $newArrayObject($d_O.getArrayOf(), [0])), ($m_s_reflect_ManifestFactory$IntManifest$(), $newArrayObject($d_I.getArrayOf(), [0])), 0, 0)
  };
}
const $d_sci_SetNode$ = new $TypeData().initClass({
  sci_SetNode$: 0
}, false, "scala.collection.immutable.SetNode$", {
  sci_SetNode$: 1,
  O: 1
});
$c_sci_SetNode$.prototype.$classData = $d_sci_SetNode$;
let $n_sci_SetNode$ = (void 0);
function $m_sci_SetNode$() {
  if ((!$n_sci_SetNode$)) {
    $n_sci_SetNode$ = new $c_sci_SetNode$()
  };
  return $n_sci_SetNode$
}
const $f_sci_VectorPointer__preClean__I__V = (function($thiz, depth) {
  $thiz.depth_$eq__I__V(depth);
  const x1 = (((-1) + depth) | 0);
  switch (x1) {
    case 0: {
      $thiz.display1_$eq__AAO__V(null);
      $thiz.display2_$eq__AAAO__V(null);
      $thiz.display3_$eq__AAAAO__V(null);
      $thiz.display4_$eq__AAAAAO__V(null);
      $thiz.display5_$eq__AAAAAAO__V(null);
      break
    }
    case 1: {
      $thiz.display2_$eq__AAAO__V(null);
      $thiz.display3_$eq__AAAAO__V(null);
      $thiz.display4_$eq__AAAAAO__V(null);
      $thiz.display5_$eq__AAAAAAO__V(null);
      break
    }
    case 2: {
      $thiz.display3_$eq__AAAAO__V(null);
      $thiz.display4_$eq__AAAAAO__V(null);
      $thiz.display5_$eq__AAAAAAO__V(null);
      break
    }
    case 3: {
      $thiz.display4_$eq__AAAAAO__V(null);
      $thiz.display5_$eq__AAAAAAO__V(null);
      break
    }
    case 4: {
      $thiz.display5_$eq__AAAAAAO__V(null);
      break
    }
    case 5: {
      break
    }
    default: {
      throw new $c_s_MatchError(x1)
    }
  }
});
const $f_sci_VectorPointer__initFrom__sci_VectorPointer__I__V = (function($thiz, that, depth) {
  $thiz.depth_$eq__I__V(depth);
  const x1 = (((-1) + depth) | 0);
  switch (x1) {
    case (-1): {
      break
    }
    case 0: {
      $thiz.display0_$eq__AO__V(that.display0__AO());
      break
    }
    case 1: {
      $thiz.display1_$eq__AAO__V(that.display1__AAO());
      $thiz.display0_$eq__AO__V(that.display0__AO());
      break
    }
    case 2: {
      $thiz.display2_$eq__AAAO__V(that.display2__AAAO());
      $thiz.display1_$eq__AAO__V(that.display1__AAO());
      $thiz.display0_$eq__AO__V(that.display0__AO());
      break
    }
    case 3: {
      $thiz.display3_$eq__AAAAO__V(that.display3__AAAAO());
      $thiz.display2_$eq__AAAO__V(that.display2__AAAO());
      $thiz.display1_$eq__AAO__V(that.display1__AAO());
      $thiz.display0_$eq__AO__V(that.display0__AO());
      break
    }
    case 4: {
      $thiz.display4_$eq__AAAAAO__V(that.display4__AAAAAO());
      $thiz.display3_$eq__AAAAO__V(that.display3__AAAAO());
      $thiz.display2_$eq__AAAO__V(that.display2__AAAO());
      $thiz.display1_$eq__AAO__V(that.display1__AAO());
      $thiz.display0_$eq__AO__V(that.display0__AO());
      break
    }
    case 5: {
      $thiz.display5_$eq__AAAAAAO__V(that.display5__AAAAAAO());
      $thiz.display4_$eq__AAAAAO__V(that.display4__AAAAAO());
      $thiz.display3_$eq__AAAAO__V(that.display3__AAAAO());
      $thiz.display2_$eq__AAAO__V(that.display2__AAAO());
      $thiz.display1_$eq__AAO__V(that.display1__AAO());
      $thiz.display0_$eq__AO__V(that.display0__AO());
      break
    }
    default: {
      throw new $c_s_MatchError(x1)
    }
  }
});
const $f_sci_VectorPointer__gotoPos__I__I__V = (function($thiz, index, xor) {
  if ((xor >= 32)) {
    if ((xor < 1024)) {
      $thiz.display0_$eq__AO__V($thiz.display1__AAO().u[(31 & ((index >>> 5) | 0))])
    } else if ((xor < 32768)) {
      $thiz.display1_$eq__AAO__V($thiz.display2__AAAO().u[(31 & ((index >>> 10) | 0))]);
      $thiz.display0_$eq__AO__V($thiz.display1__AAO().u[(31 & ((index >>> 5) | 0))])
    } else if ((xor < 1048576)) {
      $thiz.display2_$eq__AAAO__V($thiz.display3__AAAAO().u[(31 & ((index >>> 15) | 0))]);
      $thiz.display1_$eq__AAO__V($thiz.display2__AAAO().u[(31 & ((index >>> 10) | 0))]);
      $thiz.display0_$eq__AO__V($thiz.display1__AAO().u[(31 & ((index >>> 5) | 0))])
    } else if ((xor < 33554432)) {
      $thiz.display3_$eq__AAAAO__V($thiz.display4__AAAAAO().u[(31 & ((index >>> 20) | 0))]);
      $thiz.display2_$eq__AAAO__V($thiz.display3__AAAAO().u[(31 & ((index >>> 15) | 0))]);
      $thiz.display1_$eq__AAO__V($thiz.display2__AAAO().u[(31 & ((index >>> 10) | 0))]);
      $thiz.display0_$eq__AO__V($thiz.display1__AAO().u[(31 & ((index >>> 5) | 0))])
    } else if ((xor < 1073741824)) {
      $thiz.display4_$eq__AAAAAO__V($thiz.display5__AAAAAAO().u[(31 & ((index >>> 25) | 0))]);
      $thiz.display3_$eq__AAAAO__V($thiz.display4__AAAAAO().u[(31 & ((index >>> 20) | 0))]);
      $thiz.display2_$eq__AAAO__V($thiz.display3__AAAAO().u[(31 & ((index >>> 15) | 0))]);
      $thiz.display1_$eq__AAO__V($thiz.display2__AAAO().u[(31 & ((index >>> 10) | 0))]);
      $thiz.display0_$eq__AO__V($thiz.display1__AAO().u[(31 & ((index >>> 5) | 0))])
    } else {
      throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException())
    }
  }
});
const $f_sci_VectorPointer__gotoNextBlockStart__I__I__V = (function($thiz, index, xor) {
  if ((xor < 1024)) {
    $thiz.display0_$eq__AO__V($thiz.display1__AAO().u[(31 & ((index >>> 5) | 0))])
  } else if ((xor < 32768)) {
    $thiz.display1_$eq__AAO__V($thiz.display2__AAAO().u[(31 & ((index >>> 10) | 0))]);
    $thiz.display0_$eq__AO__V($thiz.display1__AAO().u[0])
  } else if ((xor < 1048576)) {
    $thiz.display2_$eq__AAAO__V($thiz.display3__AAAAO().u[(31 & ((index >>> 15) | 0))]);
    $thiz.display1_$eq__AAO__V($thiz.display2__AAAO().u[0]);
    $thiz.display0_$eq__AO__V($thiz.display1__AAO().u[0])
  } else if ((xor < 33554432)) {
    $thiz.display3_$eq__AAAAO__V($thiz.display4__AAAAAO().u[(31 & ((index >>> 20) | 0))]);
    $thiz.display2_$eq__AAAO__V($thiz.display3__AAAAO().u[0]);
    $thiz.display1_$eq__AAO__V($thiz.display2__AAAO().u[0]);
    $thiz.display0_$eq__AO__V($thiz.display1__AAO().u[0])
  } else if ((xor < 1073741824)) {
    $thiz.display4_$eq__AAAAAO__V($thiz.display5__AAAAAAO().u[(31 & ((index >>> 25) | 0))]);
    $thiz.display3_$eq__AAAAO__V($thiz.display4__AAAAAO().u[0]);
    $thiz.display2_$eq__AAAO__V($thiz.display3__AAAAO().u[0]);
    $thiz.display1_$eq__AAO__V($thiz.display2__AAAO().u[0]);
    $thiz.display0_$eq__AO__V($thiz.display1__AAO().u[0])
  } else {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException())
  }
});
const $f_sci_VectorPointer__gotoNewBlockStart__I__I__V = (function($thiz, index, depth) {
  if ((depth > 5)) {
    $thiz.display4_$eq__AAAAAO__V($thiz.display5__AAAAAAO().u[(31 & ((index >>> 25) | 0))])
  };
  if ((depth > 4)) {
    $thiz.display3_$eq__AAAAO__V($thiz.display4__AAAAAO().u[(31 & ((index >>> 20) | 0))])
  };
  if ((depth > 3)) {
    $thiz.display2_$eq__AAAO__V($thiz.display3__AAAAO().u[(31 & ((index >>> 15) | 0))])
  };
  if ((depth > 2)) {
    $thiz.display1_$eq__AAO__V($thiz.display2__AAAO().u[(31 & ((index >>> 10) | 0))])
  };
  if ((depth > 1)) {
    $thiz.display0_$eq__AO__V($thiz.display1__AAO().u[(31 & ((index >>> 5) | 0))])
  }
});
const $f_sci_VectorPointer__gotoNextBlockStartWritable__I__I__V = (function($thiz, index, xor) {
  if ((xor < 1024)) {
    if (($thiz.depth__I() === 1)) {
      $thiz.display1_$eq__AAO__V($newArrayObject($d_O.getArrayOf().getArrayOf(), [32]));
      $thiz.display1__AAO().u[0] = $thiz.display0__AO();
      $thiz.depth_$eq__I__V(((1 + $thiz.depth__I()) | 0))
    };
    $thiz.display0_$eq__AO__V($newArrayObject($d_O.getArrayOf(), [32]));
    $thiz.display1__AAO().u[(31 & ((index >>> 5) | 0))] = $thiz.display0__AO()
  } else if ((xor < 32768)) {
    if (($thiz.depth__I() === 2)) {
      $thiz.display2_$eq__AAAO__V($newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf(), [32]));
      $thiz.display2__AAAO().u[0] = $thiz.display1__AAO();
      $thiz.depth_$eq__I__V(((1 + $thiz.depth__I()) | 0))
    };
    $thiz.display0_$eq__AO__V($newArrayObject($d_O.getArrayOf(), [32]));
    $thiz.display1_$eq__AAO__V($newArrayObject($d_O.getArrayOf().getArrayOf(), [32]));
    $thiz.display1__AAO().u[(31 & ((index >>> 5) | 0))] = $thiz.display0__AO();
    $thiz.display2__AAAO().u[(31 & ((index >>> 10) | 0))] = $thiz.display1__AAO()
  } else if ((xor < 1048576)) {
    if (($thiz.depth__I() === 3)) {
      $thiz.display3_$eq__AAAAO__V($newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf(), [32]));
      $thiz.display3__AAAAO().u[0] = $thiz.display2__AAAO();
      $thiz.depth_$eq__I__V(((1 + $thiz.depth__I()) | 0))
    };
    $thiz.display0_$eq__AO__V($newArrayObject($d_O.getArrayOf(), [32]));
    $thiz.display1_$eq__AAO__V($newArrayObject($d_O.getArrayOf().getArrayOf(), [32]));
    $thiz.display2_$eq__AAAO__V($newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf(), [32]));
    $thiz.display1__AAO().u[(31 & ((index >>> 5) | 0))] = $thiz.display0__AO();
    $thiz.display2__AAAO().u[(31 & ((index >>> 10) | 0))] = $thiz.display1__AAO();
    $thiz.display3__AAAAO().u[(31 & ((index >>> 15) | 0))] = $thiz.display2__AAAO()
  } else if ((xor < 33554432)) {
    if (($thiz.depth__I() === 4)) {
      $thiz.display4_$eq__AAAAAO__V($newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf(), [32]));
      $thiz.display4__AAAAAO().u[0] = $thiz.display3__AAAAO();
      $thiz.depth_$eq__I__V(((1 + $thiz.depth__I()) | 0))
    };
    $thiz.display0_$eq__AO__V($newArrayObject($d_O.getArrayOf(), [32]));
    $thiz.display1_$eq__AAO__V($newArrayObject($d_O.getArrayOf().getArrayOf(), [32]));
    $thiz.display2_$eq__AAAO__V($newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf(), [32]));
    $thiz.display3_$eq__AAAAO__V($newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf(), [32]));
    $thiz.display1__AAO().u[(31 & ((index >>> 5) | 0))] = $thiz.display0__AO();
    $thiz.display2__AAAO().u[(31 & ((index >>> 10) | 0))] = $thiz.display1__AAO();
    $thiz.display3__AAAAO().u[(31 & ((index >>> 15) | 0))] = $thiz.display2__AAAO();
    $thiz.display4__AAAAAO().u[(31 & ((index >>> 20) | 0))] = $thiz.display3__AAAAO()
  } else if ((xor < 1073741824)) {
    if (($thiz.depth__I() === 5)) {
      $thiz.display5_$eq__AAAAAAO__V($newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf(), [32]));
      $thiz.display5__AAAAAAO().u[0] = $thiz.display4__AAAAAO();
      $thiz.depth_$eq__I__V(((1 + $thiz.depth__I()) | 0))
    };
    $thiz.display0_$eq__AO__V($newArrayObject($d_O.getArrayOf(), [32]));
    $thiz.display1_$eq__AAO__V($newArrayObject($d_O.getArrayOf().getArrayOf(), [32]));
    $thiz.display2_$eq__AAAO__V($newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf(), [32]));
    $thiz.display3_$eq__AAAAO__V($newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf(), [32]));
    $thiz.display4_$eq__AAAAAO__V($newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf(), [32]));
    $thiz.display1__AAO().u[(31 & ((index >>> 5) | 0))] = $thiz.display0__AO();
    $thiz.display2__AAAO().u[(31 & ((index >>> 10) | 0))] = $thiz.display1__AAO();
    $thiz.display3__AAAAO().u[(31 & ((index >>> 15) | 0))] = $thiz.display2__AAAO();
    $thiz.display4__AAAAAO().u[(31 & ((index >>> 20) | 0))] = $thiz.display3__AAAAO();
    $thiz.display5__AAAAAAO().u[(31 & ((index >>> 25) | 0))] = $thiz.display4__AAAAAO()
  } else {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException())
  }
});
const $f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO = (function($thiz, array, index) {
  const x = array.u[index];
  array.u[index] = null;
  return x.clone__O()
});
const $f_sci_VectorPointer__stabilize__I__V = (function($thiz, index) {
  const x1 = (((-1) + $thiz.depth__I()) | 0);
  switch (x1) {
    case 5: {
      $thiz.display5_$eq__AAAAAAO__V($thiz.display5__AAAAAAO().clone__O());
      $thiz.display4_$eq__AAAAAO__V($thiz.display4__AAAAAO().clone__O());
      $thiz.display3_$eq__AAAAO__V($thiz.display3__AAAAO().clone__O());
      $thiz.display2_$eq__AAAO__V($thiz.display2__AAAO().clone__O());
      $thiz.display1_$eq__AAO__V($thiz.display1__AAO().clone__O());
      $thiz.display5__AAAAAAO().u[(31 & ((index >>> 25) | 0))] = $thiz.display4__AAAAAO();
      $thiz.display4__AAAAAO().u[(31 & ((index >>> 20) | 0))] = $thiz.display3__AAAAO();
      $thiz.display3__AAAAO().u[(31 & ((index >>> 15) | 0))] = $thiz.display2__AAAO();
      $thiz.display2__AAAO().u[(31 & ((index >>> 10) | 0))] = $thiz.display1__AAO();
      $thiz.display1__AAO().u[(31 & ((index >>> 5) | 0))] = $thiz.display0__AO();
      break
    }
    case 4: {
      $thiz.display4_$eq__AAAAAO__V($thiz.display4__AAAAAO().clone__O());
      $thiz.display3_$eq__AAAAO__V($thiz.display3__AAAAO().clone__O());
      $thiz.display2_$eq__AAAO__V($thiz.display2__AAAO().clone__O());
      $thiz.display1_$eq__AAO__V($thiz.display1__AAO().clone__O());
      $thiz.display4__AAAAAO().u[(31 & ((index >>> 20) | 0))] = $thiz.display3__AAAAO();
      $thiz.display3__AAAAO().u[(31 & ((index >>> 15) | 0))] = $thiz.display2__AAAO();
      $thiz.display2__AAAO().u[(31 & ((index >>> 10) | 0))] = $thiz.display1__AAO();
      $thiz.display1__AAO().u[(31 & ((index >>> 5) | 0))] = $thiz.display0__AO();
      break
    }
    case 3: {
      $thiz.display3_$eq__AAAAO__V($thiz.display3__AAAAO().clone__O());
      $thiz.display2_$eq__AAAO__V($thiz.display2__AAAO().clone__O());
      $thiz.display1_$eq__AAO__V($thiz.display1__AAO().clone__O());
      $thiz.display3__AAAAO().u[(31 & ((index >>> 15) | 0))] = $thiz.display2__AAAO();
      $thiz.display2__AAAO().u[(31 & ((index >>> 10) | 0))] = $thiz.display1__AAO();
      $thiz.display1__AAO().u[(31 & ((index >>> 5) | 0))] = $thiz.display0__AO();
      break
    }
    case 2: {
      $thiz.display2_$eq__AAAO__V($thiz.display2__AAAO().clone__O());
      $thiz.display1_$eq__AAO__V($thiz.display1__AAO().clone__O());
      $thiz.display2__AAAO().u[(31 & ((index >>> 10) | 0))] = $thiz.display1__AAO();
      $thiz.display1__AAO().u[(31 & ((index >>> 5) | 0))] = $thiz.display0__AO();
      break
    }
    case 1: {
      $thiz.display1_$eq__AAO__V($thiz.display1__AAO().clone__O());
      $thiz.display1__AAO().u[(31 & ((index >>> 5) | 0))] = $thiz.display0__AO();
      break
    }
    case 0: {
      break
    }
    default: {
      throw new $c_s_MatchError(x1)
    }
  }
});
const $f_sci_VectorPointer__gotoPosWritable0__I__I__V = (function($thiz, newIndex, xor) {
  const x1 = (((-1) + $thiz.depth__I()) | 0);
  switch (x1) {
    case 5: {
      $thiz.display5_$eq__AAAAAAO__V($thiz.display5__AAAAAAO().clone__O());
      const array = $thiz.display5__AAAAAAO();
      const index = (31 & ((newIndex >>> 25) | 0));
      $thiz.display4_$eq__AAAAAO__V($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array, index));
      const array$1 = $thiz.display4__AAAAAO();
      const index$1 = (31 & ((newIndex >>> 20) | 0));
      $thiz.display3_$eq__AAAAO__V($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$1, index$1));
      const array$2 = $thiz.display3__AAAAO();
      const index$2 = (31 & ((newIndex >>> 15) | 0));
      $thiz.display2_$eq__AAAO__V($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$2, index$2));
      const array$3 = $thiz.display2__AAAO();
      const index$3 = (31 & ((newIndex >>> 10) | 0));
      $thiz.display1_$eq__AAO__V($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$3, index$3));
      const array$4 = $thiz.display1__AAO();
      const index$4 = (31 & ((newIndex >>> 5) | 0));
      $thiz.display0_$eq__AO__V($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$4, index$4));
      break
    }
    case 4: {
      $thiz.display4_$eq__AAAAAO__V($thiz.display4__AAAAAO().clone__O());
      const array$5 = $thiz.display4__AAAAAO();
      const index$5 = (31 & ((newIndex >>> 20) | 0));
      $thiz.display3_$eq__AAAAO__V($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$5, index$5));
      const array$6 = $thiz.display3__AAAAO();
      const index$6 = (31 & ((newIndex >>> 15) | 0));
      $thiz.display2_$eq__AAAO__V($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$6, index$6));
      const array$7 = $thiz.display2__AAAO();
      const index$7 = (31 & ((newIndex >>> 10) | 0));
      $thiz.display1_$eq__AAO__V($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$7, index$7));
      const array$8 = $thiz.display1__AAO();
      const index$8 = (31 & ((newIndex >>> 5) | 0));
      $thiz.display0_$eq__AO__V($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$8, index$8));
      break
    }
    case 3: {
      $thiz.display3_$eq__AAAAO__V($thiz.display3__AAAAO().clone__O());
      const array$9 = $thiz.display3__AAAAO();
      const index$9 = (31 & ((newIndex >>> 15) | 0));
      $thiz.display2_$eq__AAAO__V($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$9, index$9));
      const array$10 = $thiz.display2__AAAO();
      const index$10 = (31 & ((newIndex >>> 10) | 0));
      $thiz.display1_$eq__AAO__V($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$10, index$10));
      const array$11 = $thiz.display1__AAO();
      const index$11 = (31 & ((newIndex >>> 5) | 0));
      $thiz.display0_$eq__AO__V($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$11, index$11));
      break
    }
    case 2: {
      $thiz.display2_$eq__AAAO__V($thiz.display2__AAAO().clone__O());
      const array$12 = $thiz.display2__AAAO();
      const index$12 = (31 & ((newIndex >>> 10) | 0));
      $thiz.display1_$eq__AAO__V($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$12, index$12));
      const array$13 = $thiz.display1__AAO();
      const index$13 = (31 & ((newIndex >>> 5) | 0));
      $thiz.display0_$eq__AO__V($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$13, index$13));
      break
    }
    case 1: {
      $thiz.display1_$eq__AAO__V($thiz.display1__AAO().clone__O());
      const array$14 = $thiz.display1__AAO();
      const index$14 = (31 & ((newIndex >>> 5) | 0));
      $thiz.display0_$eq__AO__V($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$14, index$14));
      break
    }
    case 0: {
      $thiz.display0_$eq__AO__V($thiz.display0__AO().clone__O());
      break
    }
    default: {
      throw new $c_s_MatchError(x1)
    }
  }
});
const $f_sci_VectorPointer__gotoPosWritable1__I__I__I__V = (function($thiz, oldIndex, newIndex, xor) {
  if ((xor < 32)) {
    $thiz.display0_$eq__AO__V($thiz.display0__AO().clone__O())
  } else if ((xor < 1024)) {
    $thiz.display1_$eq__AAO__V($thiz.display1__AAO().clone__O());
    $thiz.display1__AAO().u[(31 & ((oldIndex >>> 5) | 0))] = $thiz.display0__AO();
    const array = $thiz.display1__AAO();
    const index = (31 & ((newIndex >>> 5) | 0));
    $thiz.display0_$eq__AO__V($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array, index))
  } else if ((xor < 32768)) {
    $thiz.display1_$eq__AAO__V($thiz.display1__AAO().clone__O());
    $thiz.display2_$eq__AAAO__V($thiz.display2__AAAO().clone__O());
    $thiz.display1__AAO().u[(31 & ((oldIndex >>> 5) | 0))] = $thiz.display0__AO();
    $thiz.display2__AAAO().u[(31 & ((oldIndex >>> 10) | 0))] = $thiz.display1__AAO();
    const array$1 = $thiz.display2__AAAO();
    const index$1 = (31 & ((newIndex >>> 10) | 0));
    $thiz.display1_$eq__AAO__V($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$1, index$1));
    const array$2 = $thiz.display1__AAO();
    const index$2 = (31 & ((newIndex >>> 5) | 0));
    $thiz.display0_$eq__AO__V($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$2, index$2))
  } else if ((xor < 1048576)) {
    $thiz.display1_$eq__AAO__V($thiz.display1__AAO().clone__O());
    $thiz.display2_$eq__AAAO__V($thiz.display2__AAAO().clone__O());
    $thiz.display3_$eq__AAAAO__V($thiz.display3__AAAAO().clone__O());
    $thiz.display1__AAO().u[(31 & ((oldIndex >>> 5) | 0))] = $thiz.display0__AO();
    $thiz.display2__AAAO().u[(31 & ((oldIndex >>> 10) | 0))] = $thiz.display1__AAO();
    $thiz.display3__AAAAO().u[(31 & ((oldIndex >>> 15) | 0))] = $thiz.display2__AAAO();
    const array$3 = $thiz.display3__AAAAO();
    const index$3 = (31 & ((newIndex >>> 15) | 0));
    $thiz.display2_$eq__AAAO__V($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$3, index$3));
    const array$4 = $thiz.display2__AAAO();
    const index$4 = (31 & ((newIndex >>> 10) | 0));
    $thiz.display1_$eq__AAO__V($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$4, index$4));
    const array$5 = $thiz.display1__AAO();
    const index$5 = (31 & ((newIndex >>> 5) | 0));
    $thiz.display0_$eq__AO__V($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$5, index$5))
  } else if ((xor < 33554432)) {
    $thiz.display1_$eq__AAO__V($thiz.display1__AAO().clone__O());
    $thiz.display2_$eq__AAAO__V($thiz.display2__AAAO().clone__O());
    $thiz.display3_$eq__AAAAO__V($thiz.display3__AAAAO().clone__O());
    $thiz.display4_$eq__AAAAAO__V($thiz.display4__AAAAAO().clone__O());
    $thiz.display1__AAO().u[(31 & ((oldIndex >>> 5) | 0))] = $thiz.display0__AO();
    $thiz.display2__AAAO().u[(31 & ((oldIndex >>> 10) | 0))] = $thiz.display1__AAO();
    $thiz.display3__AAAAO().u[(31 & ((oldIndex >>> 15) | 0))] = $thiz.display2__AAAO();
    $thiz.display4__AAAAAO().u[(31 & ((oldIndex >>> 20) | 0))] = $thiz.display3__AAAAO();
    const array$6 = $thiz.display4__AAAAAO();
    const index$6 = (31 & ((newIndex >>> 20) | 0));
    $thiz.display3_$eq__AAAAO__V($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$6, index$6));
    const array$7 = $thiz.display3__AAAAO();
    const index$7 = (31 & ((newIndex >>> 15) | 0));
    $thiz.display2_$eq__AAAO__V($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$7, index$7));
    const array$8 = $thiz.display2__AAAO();
    const index$8 = (31 & ((newIndex >>> 10) | 0));
    $thiz.display1_$eq__AAO__V($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$8, index$8));
    const array$9 = $thiz.display1__AAO();
    const index$9 = (31 & ((newIndex >>> 5) | 0));
    $thiz.display0_$eq__AO__V($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$9, index$9))
  } else if ((xor < 1073741824)) {
    $thiz.display1_$eq__AAO__V($thiz.display1__AAO().clone__O());
    $thiz.display2_$eq__AAAO__V($thiz.display2__AAAO().clone__O());
    $thiz.display3_$eq__AAAAO__V($thiz.display3__AAAAO().clone__O());
    $thiz.display4_$eq__AAAAAO__V($thiz.display4__AAAAAO().clone__O());
    $thiz.display5_$eq__AAAAAAO__V($thiz.display5__AAAAAAO().clone__O());
    $thiz.display1__AAO().u[(31 & ((oldIndex >>> 5) | 0))] = $thiz.display0__AO();
    $thiz.display2__AAAO().u[(31 & ((oldIndex >>> 10) | 0))] = $thiz.display1__AAO();
    $thiz.display3__AAAAO().u[(31 & ((oldIndex >>> 15) | 0))] = $thiz.display2__AAAO();
    $thiz.display4__AAAAAO().u[(31 & ((oldIndex >>> 20) | 0))] = $thiz.display3__AAAAO();
    $thiz.display5__AAAAAAO().u[(31 & ((oldIndex >>> 25) | 0))] = $thiz.display4__AAAAAO();
    const array$10 = $thiz.display5__AAAAAAO();
    const index$10 = (31 & ((newIndex >>> 25) | 0));
    $thiz.display4_$eq__AAAAAO__V($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$10, index$10));
    const array$11 = $thiz.display4__AAAAAO();
    const index$11 = (31 & ((newIndex >>> 20) | 0));
    $thiz.display3_$eq__AAAAO__V($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$11, index$11));
    const array$12 = $thiz.display3__AAAAO();
    const index$12 = (31 & ((newIndex >>> 15) | 0));
    $thiz.display2_$eq__AAAO__V($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$12, index$12));
    const array$13 = $thiz.display2__AAAO();
    const index$13 = (31 & ((newIndex >>> 10) | 0));
    $thiz.display1_$eq__AAO__V($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$13, index$13));
    const array$14 = $thiz.display1__AAO();
    const index$14 = (31 & ((newIndex >>> 5) | 0));
    $thiz.display0_$eq__AO__V($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$14, index$14))
  } else {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException())
  }
});
const $f_sci_VectorPointer__copyRange__AO__I__I__AO = (function($thiz, array, oldLeft, newLeft) {
  const componentType = $objectGetClass(array).getComponentType__jl_Class();
  const elems = $m_jl_reflect_Array$().newInstance__jl_Class__I__O(componentType, 32);
  const length = ((32 - ((newLeft > oldLeft) ? newLeft : oldLeft)) | 0);
  $systemArraycopy(array, oldLeft, elems, newLeft, length);
  return elems
});
const $f_sci_VectorPointer__gotoFreshPosWritable0__I__I__I__V = (function($thiz, oldIndex, newIndex, xor) {
  if ((xor >= 32)) {
    if ((xor < 1024)) {
      if (($thiz.depth__I() === 1)) {
        $thiz.display1_$eq__AAO__V($newArrayObject($d_O.getArrayOf().getArrayOf(), [32]));
        $thiz.display1__AAO().u[(31 & ((oldIndex >>> 5) | 0))] = $thiz.display0__AO();
        $thiz.depth_$eq__I__V(((1 + $thiz.depth__I()) | 0))
      };
      $thiz.display0_$eq__AO__V($newArrayObject($d_O.getArrayOf(), [32]))
    } else if ((xor < 32768)) {
      if (($thiz.depth__I() === 2)) {
        $thiz.display2_$eq__AAAO__V($newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf(), [32]));
        $thiz.display2__AAAO().u[(31 & ((oldIndex >>> 10) | 0))] = $thiz.display1__AAO();
        $thiz.depth_$eq__I__V(((1 + $thiz.depth__I()) | 0))
      };
      $thiz.display1_$eq__AAO__V($thiz.display2__AAAO().u[(31 & ((newIndex >>> 10) | 0))]);
      if (($thiz.display1__AAO() === null)) {
        $thiz.display1_$eq__AAO__V($newArrayObject($d_O.getArrayOf().getArrayOf(), [32]))
      };
      $thiz.display0_$eq__AO__V($newArrayObject($d_O.getArrayOf(), [32]))
    } else if ((xor < 1048576)) {
      if (($thiz.depth__I() === 3)) {
        $thiz.display3_$eq__AAAAO__V($newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf(), [32]));
        $thiz.display3__AAAAO().u[(31 & ((oldIndex >>> 15) | 0))] = $thiz.display2__AAAO();
        $thiz.depth_$eq__I__V(((1 + $thiz.depth__I()) | 0))
      };
      $thiz.display2_$eq__AAAO__V($thiz.display3__AAAAO().u[(31 & ((newIndex >>> 15) | 0))]);
      if (($thiz.display2__AAAO() === null)) {
        $thiz.display2_$eq__AAAO__V($newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf(), [32]))
      };
      $thiz.display1_$eq__AAO__V($thiz.display2__AAAO().u[(31 & ((newIndex >>> 10) | 0))]);
      if (($thiz.display1__AAO() === null)) {
        $thiz.display1_$eq__AAO__V($newArrayObject($d_O.getArrayOf().getArrayOf(), [32]))
      };
      $thiz.display0_$eq__AO__V($newArrayObject($d_O.getArrayOf(), [32]))
    } else if ((xor < 33554432)) {
      if (($thiz.depth__I() === 4)) {
        $thiz.display4_$eq__AAAAAO__V($newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf(), [32]));
        $thiz.display4__AAAAAO().u[(31 & ((oldIndex >>> 20) | 0))] = $thiz.display3__AAAAO();
        $thiz.depth_$eq__I__V(((1 + $thiz.depth__I()) | 0))
      };
      $thiz.display3_$eq__AAAAO__V($thiz.display4__AAAAAO().u[(31 & ((newIndex >>> 20) | 0))]);
      if (($thiz.display3__AAAAO() === null)) {
        $thiz.display3_$eq__AAAAO__V($newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf(), [32]))
      };
      $thiz.display2_$eq__AAAO__V($thiz.display3__AAAAO().u[(31 & ((newIndex >>> 15) | 0))]);
      if (($thiz.display2__AAAO() === null)) {
        $thiz.display2_$eq__AAAO__V($newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf(), [32]))
      };
      $thiz.display1_$eq__AAO__V($thiz.display2__AAAO().u[(31 & ((newIndex >>> 10) | 0))]);
      if (($thiz.display1__AAO() === null)) {
        $thiz.display1_$eq__AAO__V($newArrayObject($d_O.getArrayOf().getArrayOf(), [32]))
      };
      $thiz.display0_$eq__AO__V($newArrayObject($d_O.getArrayOf(), [32]))
    } else if ((xor < 1073741824)) {
      if (($thiz.depth__I() === 5)) {
        $thiz.display5_$eq__AAAAAAO__V($newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf(), [32]));
        $thiz.display5__AAAAAAO().u[(31 & ((oldIndex >>> 25) | 0))] = $thiz.display4__AAAAAO();
        $thiz.depth_$eq__I__V(((1 + $thiz.depth__I()) | 0))
      };
      $thiz.display4_$eq__AAAAAO__V($thiz.display5__AAAAAAO().u[(31 & ((newIndex >>> 25) | 0))]);
      if (($thiz.display4__AAAAAO() === null)) {
        $thiz.display4_$eq__AAAAAO__V($newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf(), [32]))
      };
      $thiz.display3_$eq__AAAAO__V($thiz.display4__AAAAAO().u[(31 & ((newIndex >>> 20) | 0))]);
      if (($thiz.display3__AAAAO() === null)) {
        $thiz.display3_$eq__AAAAO__V($newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf(), [32]))
      };
      $thiz.display2_$eq__AAAO__V($thiz.display3__AAAAO().u[(31 & ((newIndex >>> 15) | 0))]);
      if (($thiz.display2__AAAO() === null)) {
        $thiz.display2_$eq__AAAO__V($newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf(), [32]))
      };
      $thiz.display1_$eq__AAO__V($thiz.display2__AAAO().u[(31 & ((newIndex >>> 10) | 0))]);
      if (($thiz.display1__AAO() === null)) {
        $thiz.display1_$eq__AAO__V($newArrayObject($d_O.getArrayOf().getArrayOf(), [32]))
      };
      $thiz.display0_$eq__AO__V($newArrayObject($d_O.getArrayOf(), [32]))
    } else {
      throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException())
    }
  }
});
const $f_sci_VectorPointer__gotoFreshPosWritable1__I__I__I__V = (function($thiz, oldIndex, newIndex, xor) {
  $f_sci_VectorPointer__stabilize__I__V($thiz, oldIndex);
  $f_sci_VectorPointer__gotoFreshPosWritable0__I__I__I__V($thiz, oldIndex, newIndex, xor)
});
class $c_sc_package$$colon$plus$ extends $c_O {
}
const $d_sc_package$$colon$plus$ = new $TypeData().initClass({
  sc_package$$colon$plus$: 0
}, false, "scala.collection.package$$colon$plus$", {
  sc_package$$colon$plus$: 1,
  O: 1
});
$c_sc_package$$colon$plus$.prototype.$classData = $d_sc_package$$colon$plus$;
let $n_sc_package$$colon$plus$ = (void 0);
function $m_sc_package$$colon$plus$() {
  if ((!$n_sc_package$$colon$plus$)) {
    $n_sc_package$$colon$plus$ = new $c_sc_package$$colon$plus$()
  };
  return $n_sc_package$$colon$plus$
}
class $c_sc_package$$plus$colon$ extends $c_O {
}
const $d_sc_package$$plus$colon$ = new $TypeData().initClass({
  sc_package$$plus$colon$: 0
}, false, "scala.collection.package$$plus$colon$", {
  sc_package$$plus$colon$: 1,
  O: 1
});
$c_sc_package$$plus$colon$.prototype.$classData = $d_sc_package$$plus$colon$;
let $n_sc_package$$plus$colon$ = (void 0);
function $m_sc_package$$plus$colon$() {
  if ((!$n_sc_package$$plus$colon$)) {
    $n_sc_package$$plus$colon$ = new $c_sc_package$$plus$colon$()
  };
  return $n_sc_package$$plus$colon$
}
class $c_s_math_Ordered$ extends $c_O {
}
const $d_s_math_Ordered$ = new $TypeData().initClass({
  s_math_Ordered$: 0
}, false, "scala.math.Ordered$", {
  s_math_Ordered$: 1,
  O: 1
});
$c_s_math_Ordered$.prototype.$classData = $d_s_math_Ordered$;
let $n_s_math_Ordered$ = (void 0);
function $m_s_math_Ordered$() {
  if ((!$n_s_math_Ordered$)) {
    $n_s_math_Ordered$ = new $c_s_math_Ordered$()
  };
  return $n_s_math_Ordered$
}
class $c_s_package$ extends $c_O {
  constructor() {
    super();
    this.s_package$__f_BigDecimal = null;
    this.s_package$__f_BigInt = null;
    this.s_package$__f_AnyRef = null;
    this.s_package$__f_Traversable = null;
    this.s_package$__f_Iterable = null;
    this.s_package$__f_Seq = null;
    this.s_package$__f_IndexedSeq = null;
    this.s_package$__f_Iterator = null;
    this.s_package$__f_List = null;
    this.s_package$__f_Nil = null;
    this.s_package$__f_$colon$colon = null;
    this.s_package$__f_$plus$colon = null;
    this.s_package$__f_$colon$plus = null;
    this.s_package$__f_Stream = null;
    this.s_package$__f_LazyList = null;
    this.s_package$__f_Vector = null;
    this.s_package$__f_StringBuilder = null;
    this.s_package$__f_Range = null;
    this.s_package$__f_Equiv = null;
    this.s_package$__f_Fractional = null;
    this.s_package$__f_Integral = null;
    this.s_package$__f_Numeric = null;
    this.s_package$__f_Ordered = null;
    this.s_package$__f_Ordering = null;
    this.s_package$__f_Either = null;
    this.s_package$__f_Left = null;
    this.s_package$__f_Right = null;
    this.s_package$__f_bitmap$0 = 0;
    $n_s_package$ = this;
    this.s_package$__f_AnyRef = new $c_s_package$$anon$1();
    this.s_package$__f_Traversable = $m_sc_Iterable$();
    this.s_package$__f_Iterable = $m_sc_Iterable$();
    this.s_package$__f_Seq = $m_sci_Seq$();
    this.s_package$__f_IndexedSeq = $m_sci_IndexedSeq$();
    this.s_package$__f_Iterator = $m_sc_Iterator$();
    this.s_package$__f_List = $m_sci_List$();
    this.s_package$__f_Nil = $m_sci_Nil$();
    this.s_package$__f_$colon$colon = $m_sci_$colon$colon$();
    this.s_package$__f_$plus$colon = $m_sc_package$$plus$colon$();
    this.s_package$__f_$colon$plus = $m_sc_package$$colon$plus$();
    this.s_package$__f_Stream = $m_sci_Stream$();
    this.s_package$__f_LazyList = $m_sci_LazyList$();
    this.s_package$__f_Vector = $m_sci_Vector$();
    this.s_package$__f_StringBuilder = $m_scm_StringBuilder$();
    this.s_package$__f_Range = $m_sci_Range$();
    this.s_package$__f_Equiv = $m_s_math_Equiv$();
    this.s_package$__f_Fractional = $m_s_math_Fractional$();
    this.s_package$__f_Integral = $m_s_math_Integral$();
    this.s_package$__f_Numeric = $m_s_math_Numeric$();
    this.s_package$__f_Ordered = $m_s_math_Ordered$();
    this.s_package$__f_Ordering = $m_s_math_Ordering$();
    this.s_package$__f_Either = $m_s_util_Either$();
    this.s_package$__f_Left = $m_s_util_Left$();
    this.s_package$__f_Right = $m_s_util_Right$()
  };
}
const $d_s_package$ = new $TypeData().initClass({
  s_package$: 0
}, false, "scala.package$", {
  s_package$: 1,
  O: 1
});
$c_s_package$.prototype.$classData = $d_s_package$;
let $n_s_package$ = (void 0);
function $m_s_package$() {
  if ((!$n_s_package$)) {
    $n_s_package$ = new $c_s_package$()
  };
  return $n_s_package$
}
class $c_sr_BoxesRunTime$ extends $c_O {
  equals__O__O__Z(x, y) {
    if ((x === y)) {
      return true
    } else if ($is_jl_Number(x)) {
      const x2 = x;
      return this.equalsNumObject__jl_Number__O__Z(x2, y)
    } else if ((x instanceof $Char)) {
      const x3 = x;
      return this.equalsCharObject__jl_Character__O__Z(x3, y)
    } else {
      return ((x === null) ? (y === null) : $dp_equals__O__Z(x, y))
    }
  };
  equalsNumObject__jl_Number__O__Z(xn, y) {
    if ($is_jl_Number(y)) {
      const x2 = y;
      return this.equalsNumNum__jl_Number__jl_Number__Z(xn, x2)
    } else if ((y instanceof $Char)) {
      const x3 = y;
      if (((typeof xn) === "number")) {
        const x2$1 = (+xn);
        return (x2$1 === $uC(x3))
      } else if ((xn instanceof $c_RTLong)) {
        const t = $uJ(xn);
        const lo = t.RTLong__f_lo;
        const hi = t.RTLong__f_hi;
        const value = $uC(x3);
        const hi$1 = (value >> 31);
        return ((lo === value) && (hi === hi$1))
      } else {
        return ((xn === null) ? (x3 === null) : $dp_equals__O__Z(xn, x3))
      }
    } else {
      return ((xn === null) ? (y === null) : $dp_equals__O__Z(xn, y))
    }
  };
  equalsNumNum__jl_Number__jl_Number__Z(xn, yn) {
    if (((typeof xn) === "number")) {
      const x2 = (+xn);
      if (((typeof yn) === "number")) {
        const x2$2 = (+yn);
        return (x2 === x2$2)
      } else if ((yn instanceof $c_RTLong)) {
        const t = $uJ(yn);
        const lo = t.RTLong__f_lo;
        const hi = t.RTLong__f_hi;
        return (x2 === $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo, hi))
      } else if ((yn instanceof $c_s_math_ScalaNumber)) {
        const x4 = yn;
        return x4.equals__O__Z(x2)
      } else {
        return false
      }
    } else if ((xn instanceof $c_RTLong)) {
      const t$1 = $uJ(xn);
      const lo$1 = t$1.RTLong__f_lo;
      const hi$1 = t$1.RTLong__f_hi;
      if ((yn instanceof $c_RTLong)) {
        const t$2 = $uJ(yn);
        const lo$2 = t$2.RTLong__f_lo;
        const hi$2 = t$2.RTLong__f_hi;
        return ((lo$1 === lo$2) && (hi$1 === hi$2))
      } else if (((typeof yn) === "number")) {
        const x3$3 = (+yn);
        return ($m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo$1, hi$1) === x3$3)
      } else if ((yn instanceof $c_s_math_ScalaNumber)) {
        const x4$2 = yn;
        return x4$2.equals__O__Z(new $c_RTLong(lo$1, hi$1))
      } else {
        return false
      }
    } else {
      return ((xn === null) ? (yn === null) : $dp_equals__O__Z(xn, yn))
    }
  };
  equalsCharObject__jl_Character__O__Z(xc, y) {
    if ((y instanceof $Char)) {
      const x2 = y;
      return ($uC(xc) === $uC(x2))
    } else if ($is_jl_Number(y)) {
      const x3 = y;
      if (((typeof x3) === "number")) {
        const x2$1 = (+x3);
        return (x2$1 === $uC(xc))
      } else if ((x3 instanceof $c_RTLong)) {
        const t = $uJ(x3);
        const lo = t.RTLong__f_lo;
        const hi = t.RTLong__f_hi;
        const value = $uC(xc);
        const hi$1 = (value >> 31);
        return ((lo === value) && (hi === hi$1))
      } else {
        return ((x3 === null) ? (xc === null) : $dp_equals__O__Z(x3, xc))
      }
    } else {
      return ((xc === null) && (y === null))
    }
  };
}
const $d_sr_BoxesRunTime$ = new $TypeData().initClass({
  sr_BoxesRunTime$: 0
}, false, "scala.runtime.BoxesRunTime$", {
  sr_BoxesRunTime$: 1,
  O: 1
});
$c_sr_BoxesRunTime$.prototype.$classData = $d_sr_BoxesRunTime$;
let $n_sr_BoxesRunTime$ = (void 0);
function $m_sr_BoxesRunTime$() {
  if ((!$n_sr_BoxesRunTime$)) {
    $n_sr_BoxesRunTime$ = new $c_sr_BoxesRunTime$()
  };
  return $n_sr_BoxesRunTime$
}
const $d_sr_Null$ = new $TypeData().initClass({
  sr_Null$: 0
}, false, "scala.runtime.Null$", {
  sr_Null$: 1,
  O: 1
});
class $c_sr_ScalaRunTime$ extends $c_O {
  array_apply__O__I__O(xs, idx) {
    if ($isArrayOf_O(xs, 1)) {
      const x2 = xs;
      return x2.u[idx]
    } else if ($isArrayOf_I(xs, 1)) {
      const x3 = xs;
      return x3.u[idx]
    } else if ($isArrayOf_D(xs, 1)) {
      const x4 = xs;
      return x4.u[idx]
    } else if ($isArrayOf_J(xs, 1)) {
      const x5 = xs;
      return x5.u[idx]
    } else if ($isArrayOf_F(xs, 1)) {
      const x6 = xs;
      return x6.u[idx]
    } else if ($isArrayOf_C(xs, 1)) {
      const x7 = xs;
      return $bC(x7.u[idx])
    } else if ($isArrayOf_B(xs, 1)) {
      const x8 = xs;
      return x8.u[idx]
    } else if ($isArrayOf_S(xs, 1)) {
      const x9 = xs;
      return x9.u[idx]
    } else if ($isArrayOf_Z(xs, 1)) {
      const x10 = xs;
      return x10.u[idx]
    } else if ($isArrayOf_jl_Void(xs, 1)) {
      const x11 = xs;
      return x11.u[idx]
    } else if ((xs === null)) {
      throw new $c_jl_NullPointerException()
    } else {
      throw new $c_s_MatchError(xs)
    }
  };
  array_update__O__I__O__V(xs, idx, value) {
    if ($isArrayOf_O(xs, 1)) {
      const x2 = xs;
      x2.u[idx] = value
    } else if ($isArrayOf_I(xs, 1)) {
      const x3 = xs;
      x3.u[idx] = (value | 0)
    } else if ($isArrayOf_D(xs, 1)) {
      const x4 = xs;
      x4.u[idx] = (+value)
    } else if ($isArrayOf_J(xs, 1)) {
      const x5 = xs;
      x5.u[idx] = $uJ(value)
    } else if ($isArrayOf_F(xs, 1)) {
      const x6 = xs;
      x6.u[idx] = (+value)
    } else if ($isArrayOf_C(xs, 1)) {
      const x7 = xs;
      x7.u[idx] = $uC(value)
    } else if ($isArrayOf_B(xs, 1)) {
      const x8 = xs;
      x8.u[idx] = (value | 0)
    } else if ($isArrayOf_S(xs, 1)) {
      const x9 = xs;
      x9.u[idx] = (value | 0)
    } else if ($isArrayOf_Z(xs, 1)) {
      const x10 = xs;
      x10.u[idx] = (!(!value))
    } else if ($isArrayOf_jl_Void(xs, 1)) {
      const x11 = xs;
      x11.u[idx] = (void 0)
    } else if ((xs === null)) {
      throw new $c_jl_NullPointerException()
    } else {
      throw new $c_s_MatchError(xs)
    }
  };
  array_length__O__I(xs) {
    return $m_jl_reflect_Array$().getLength__O__I(xs)
  };
  _toString__s_Product__T(x) {
    const this$1 = x.productIterator__sc_Iterator();
    const start = (x.productPrefix__T() + "(");
    return $f_sc_IterableOnceOps__mkString__T__T__T__T(this$1, start, ",", ")")
  };
}
const $d_sr_ScalaRunTime$ = new $TypeData().initClass({
  sr_ScalaRunTime$: 0
}, false, "scala.runtime.ScalaRunTime$", {
  sr_ScalaRunTime$: 1,
  O: 1
});
$c_sr_ScalaRunTime$.prototype.$classData = $d_sr_ScalaRunTime$;
let $n_sr_ScalaRunTime$ = (void 0);
function $m_sr_ScalaRunTime$() {
  if ((!$n_sr_ScalaRunTime$)) {
    $n_sr_ScalaRunTime$ = new $c_sr_ScalaRunTime$()
  };
  return $n_sr_ScalaRunTime$
}
class $c_sr_Statics$ extends $c_O {
  mix__I__I__I(hash, data) {
    let h = this.mixLast__I__I__I(hash, data);
    const i = h;
    h = ((i << 13) | ((i >>> 19) | 0));
    return (((-430675100) + $imul(5, h)) | 0)
  };
  mixLast__I__I__I(hash, data) {
    let k = data;
    k = $imul((-862048943), k);
    const i = k;
    k = ((i << 15) | ((i >>> 17) | 0));
    k = $imul(461845907, k);
    return (hash ^ k)
  };
  finalizeHash__I__I__I(hash, length) {
    return this.avalanche__I__I((hash ^ length))
  };
  avalanche__I__I(h0) {
    let h = h0;
    h = (h ^ ((h >>> 16) | 0));
    h = $imul((-2048144789), h);
    h = (h ^ ((h >>> 13) | 0));
    h = $imul((-1028477387), h);
    h = (h ^ ((h >>> 16) | 0));
    return h
  };
  longHash__J__I(lv) {
    const lo = lv.RTLong__f_lo;
    const lo$1 = lv.RTLong__f_hi;
    return ((lo$1 === (lo >> 31)) ? lo : (lo ^ lo$1))
  };
  doubleHash__D__I(dv) {
    const iv = $doubleToInt(dv);
    if ((iv === dv)) {
      return iv
    } else {
      const this$1 = $m_RTLong$();
      const lo = this$1.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I(dv);
      const hi = this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
      return (($m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo, hi) === dv) ? (lo ^ hi) : $m_jl_FloatingPointBits$().numberHashCode__D__I(dv))
    }
  };
  anyHash__O__I(x) {
    if ((x === null)) {
      return 0
    } else if (((typeof x) === "number")) {
      const x3 = (+x);
      return this.doubleHash__D__I(x3)
    } else if ((x instanceof $c_RTLong)) {
      const t = $uJ(x);
      const lo = t.RTLong__f_lo;
      const hi = t.RTLong__f_hi;
      return this.longHash__J__I(new $c_RTLong(lo, hi))
    } else {
      return $dp_hashCode__I(x)
    }
  };
  ioobe__I__O(n) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n))
  };
}
const $d_sr_Statics$ = new $TypeData().initClass({
  sr_Statics$: 0
}, false, "scala.runtime.Statics$", {
  sr_Statics$: 1,
  O: 1
});
$c_sr_Statics$.prototype.$classData = $d_sr_Statics$;
let $n_sr_Statics$ = (void 0);
function $m_sr_Statics$() {
  if ((!$n_sr_Statics$)) {
    $n_sr_Statics$ = new $c_sr_Statics$()
  };
  return $n_sr_Statics$
}
class $c_sr_Statics$PFMarker$ extends $c_O {
}
const $d_sr_Statics$PFMarker$ = new $TypeData().initClass({
  sr_Statics$PFMarker$: 0
}, false, "scala.runtime.Statics$PFMarker$", {
  sr_Statics$PFMarker$: 1,
  O: 1
});
$c_sr_Statics$PFMarker$.prototype.$classData = $d_sr_Statics$PFMarker$;
let $n_sr_Statics$PFMarker$ = (void 0);
function $m_sr_Statics$PFMarker$() {
  if ((!$n_sr_Statics$PFMarker$)) {
    $n_sr_Statics$PFMarker$ = new $c_sr_Statics$PFMarker$()
  };
  return $n_sr_Statics$PFMarker$
}
class $c_sjsr_package$ extends $c_O {
  wrapJavaScriptException__O__jl_Throwable(e) {
    if ((e instanceof $c_jl_Throwable)) {
      const x2 = e;
      return x2
    } else {
      return new $c_sjs_js_JavaScriptException(e)
    }
  };
  unwrapJavaScriptException__jl_Throwable__O(th) {
    if ((th instanceof $c_sjs_js_JavaScriptException)) {
      const x2 = th;
      const e = x2.sjs_js_JavaScriptException__f_exception;
      return e
    } else {
      return th
    }
  };
}
const $d_sjsr_package$ = new $TypeData().initClass({
  sjsr_package$: 0
}, false, "scala.scalajs.runtime.package$", {
  sjsr_package$: 1,
  O: 1
});
$c_sjsr_package$.prototype.$classData = $d_sjsr_package$;
let $n_sjsr_package$ = (void 0);
function $m_sjsr_package$() {
  if ((!$n_sjsr_package$)) {
    $n_sjsr_package$ = new $c_sjsr_package$()
  };
  return $n_sjsr_package$
}
class $c_s_util_hashing_MurmurHash3 extends $c_O {
  mix__I__I__I(hash, data) {
    let h = this.mixLast__I__I__I(hash, data);
    const i = h;
    h = ((i << 13) | ((i >>> 19) | 0));
    return (((-430675100) + $imul(5, h)) | 0)
  };
  mixLast__I__I__I(hash, data) {
    let k = data;
    k = $imul((-862048943), k);
    const i = k;
    k = ((i << 15) | ((i >>> 17) | 0));
    k = $imul(461845907, k);
    return (hash ^ k)
  };
  finalizeHash__I__I__I(hash, length) {
    return this.scala$util$hashing$MurmurHash3$$avalanche__I__I((hash ^ length))
  };
  scala$util$hashing$MurmurHash3$$avalanche__I__I(hash) {
    let h = hash;
    h = (h ^ ((h >>> 16) | 0));
    h = $imul((-2048144789), h);
    h = (h ^ ((h >>> 13) | 0));
    h = $imul((-1028477387), h);
    h = (h ^ ((h >>> 16) | 0));
    return h
  };
  productHash__s_Product__I__Z__I(x, seed, ignorePrefix) {
    const arr = x.productArity__I();
    if ((arr === 0)) {
      return $f_T__hashCode__I(x.productPrefix__T())
    } else {
      let h = seed;
      if ((!ignorePrefix)) {
        h = this.mix__I__I__I(h, $f_T__hashCode__I(x.productPrefix__T()))
      };
      let i = 0;
      while ((i < arr)) {
        const $$x1 = h;
        const x$1 = x.productElement__I__O(i);
        h = this.mix__I__I__I($$x1, $m_sr_Statics$().anyHash__O__I(x$1));
        i = ((1 + i) | 0)
      };
      return this.finalizeHash__I__I__I(h, arr)
    }
  };
  unorderedHash__sc_IterableOnce__I__I(xs, seed) {
    let elem = 0;
    elem = 0;
    let elem$1 = 0;
    elem$1 = 0;
    let elem$2 = 0;
    elem$2 = 0;
    let elem$3 = 0;
    elem$3 = 1;
    const this$5 = xs.iterator__sc_Iterator();
    while (this$5.hasNext__Z()) {
      const arg1 = this$5.next__O();
      const h = $m_sr_Statics$().anyHash__O__I(arg1);
      elem = ((elem + h) | 0);
      elem$1 = (elem$1 ^ h);
      elem$3 = $imul(elem$3, (1 | h));
      elem$2 = ((1 + elem$2) | 0)
    };
    let h$1 = seed;
    h$1 = this.mix__I__I__I(h$1, elem);
    h$1 = this.mix__I__I__I(h$1, elem$1);
    h$1 = this.mixLast__I__I__I(h$1, elem$3);
    return this.finalizeHash__I__I__I(h$1, elem$2)
  };
  orderedHash__sc_IterableOnce__I__I(xs, seed) {
    const it = xs.iterator__sc_Iterator();
    let h = seed;
    if ((!it.hasNext__Z())) {
      return this.finalizeHash__I__I__I(h, 0)
    };
    const x0 = it.next__O();
    if ((!it.hasNext__Z())) {
      return this.finalizeHash__I__I__I(this.mix__I__I__I(h, $m_sr_Statics$().anyHash__O__I(x0)), 1)
    };
    const x1 = it.next__O();
    const initial = $m_sr_Statics$().anyHash__O__I(x0);
    h = this.mix__I__I__I(h, initial);
    const h0 = h;
    let prev = $m_sr_Statics$().anyHash__O__I(x1);
    const rangeDiff = ((prev - initial) | 0);
    let i = 2;
    while (it.hasNext__Z()) {
      h = this.mix__I__I__I(h, prev);
      const x = it.next__O();
      const hash = $m_sr_Statics$().anyHash__O__I(x);
      if ((rangeDiff !== ((hash - prev) | 0))) {
        h = this.mix__I__I__I(h, hash);
        i = ((1 + i) | 0);
        while (it.hasNext__Z()) {
          const $$x1 = h;
          const x$1 = it.next__O();
          h = this.mix__I__I__I($$x1, $m_sr_Statics$().anyHash__O__I(x$1));
          i = ((1 + i) | 0)
        };
        return this.finalizeHash__I__I__I(h, i)
      };
      prev = hash;
      i = ((1 + i) | 0)
    };
    return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev))
  };
  arrayHash__O__I__I(a, seed) {
    let h = seed;
    const l = $m_sr_ScalaRunTime$().array_length__O__I(a);
    switch (l) {
      case 0: {
        return this.finalizeHash__I__I__I(h, 0);
        break
      }
      case 1: {
        const $$x1 = h;
        const x = $m_sr_ScalaRunTime$().array_apply__O__I__O(a, 0);
        return this.finalizeHash__I__I__I(this.mix__I__I__I($$x1, $m_sr_Statics$().anyHash__O__I(x)), 1);
        break
      }
      default: {
        const x$1 = $m_sr_ScalaRunTime$().array_apply__O__I__O(a, 0);
        const initial = $m_sr_Statics$().anyHash__O__I(x$1);
        h = this.mix__I__I__I(h, initial);
        const h0 = h;
        const x$2 = $m_sr_ScalaRunTime$().array_apply__O__I__O(a, 1);
        let prev = $m_sr_Statics$().anyHash__O__I(x$2);
        const rangeDiff = ((prev - initial) | 0);
        let i = 2;
        while ((i < l)) {
          h = this.mix__I__I__I(h, prev);
          const x$3 = $m_sr_ScalaRunTime$().array_apply__O__I__O(a, i);
          const hash = $m_sr_Statics$().anyHash__O__I(x$3);
          if ((rangeDiff !== ((hash - prev) | 0))) {
            h = this.mix__I__I__I(h, hash);
            i = ((1 + i) | 0);
            while ((i < l)) {
              const $$x2 = h;
              const x$4 = $m_sr_ScalaRunTime$().array_apply__O__I__O(a, i);
              h = this.mix__I__I__I($$x2, $m_sr_Statics$().anyHash__O__I(x$4));
              i = ((1 + i) | 0)
            };
            return this.finalizeHash__I__I__I(h, l)
          };
          prev = hash;
          i = ((1 + i) | 0)
        };
        return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev))
      }
    }
  };
  rangeHash__I__I__I__I__I(start, step, last, seed) {
    return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(this.mix__I__I__I(seed, start), step), last))
  };
  indexedSeqHash__sc_IndexedSeq__I__I(a, seed) {
    let h = seed;
    const l = a.length__I();
    switch (l) {
      case 0: {
        return this.finalizeHash__I__I__I(h, 0);
        break
      }
      case 1: {
        const $$x1 = h;
        const x = a.apply__I__O(0);
        return this.finalizeHash__I__I__I(this.mix__I__I__I($$x1, $m_sr_Statics$().anyHash__O__I(x)), 1);
        break
      }
      default: {
        const x$1 = a.apply__I__O(0);
        const initial = $m_sr_Statics$().anyHash__O__I(x$1);
        h = this.mix__I__I__I(h, initial);
        const h0 = h;
        const x$2 = a.apply__I__O(1);
        let prev = $m_sr_Statics$().anyHash__O__I(x$2);
        const rangeDiff = ((prev - initial) | 0);
        let i = 2;
        while ((i < l)) {
          h = this.mix__I__I__I(h, prev);
          const x$3 = a.apply__I__O(i);
          const hash = $m_sr_Statics$().anyHash__O__I(x$3);
          if ((rangeDiff !== ((hash - prev) | 0))) {
            h = this.mix__I__I__I(h, hash);
            i = ((1 + i) | 0);
            while ((i < l)) {
              const $$x2 = h;
              const x$4 = a.apply__I__O(i);
              h = this.mix__I__I__I($$x2, $m_sr_Statics$().anyHash__O__I(x$4));
              i = ((1 + i) | 0)
            };
            return this.finalizeHash__I__I__I(h, l)
          };
          prev = hash;
          i = ((1 + i) | 0)
        };
        return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev))
      }
    }
  };
  listHash__sci_List__I__I(xs, seed) {
    let n = 0;
    let h = seed;
    let rangeState = 0;
    let rangeDiff = 0;
    let prev = 0;
    let initial = 0;
    let elems = xs;
    while ((!elems.isEmpty__Z())) {
      const head = elems.head__O();
      const tail = elems.tail__O();
      const hash = $m_sr_Statics$().anyHash__O__I(head);
      h = this.mix__I__I__I(h, hash);
      const x1 = rangeState;
      switch (x1) {
        case 0: {
          initial = hash;
          rangeState = 1;
          break
        }
        case 1: {
          rangeDiff = ((hash - prev) | 0);
          rangeState = 2;
          break
        }
        case 2: {
          if ((rangeDiff !== ((hash - prev) | 0))) {
            rangeState = 3
          };
          break
        }
      };
      prev = hash;
      n = ((1 + n) | 0);
      elems = tail
    };
    return ((rangeState === 2) ? this.rangeHash__I__I__I__I__I(initial, rangeDiff, prev, seed) : this.finalizeHash__I__I__I(h, n))
  };
  arrayHash$mZc$sp__AZ__I__I(a, seed) {
    let h = seed;
    const l = a.u.length;
    switch (l) {
      case 0: {
        return this.finalizeHash__I__I__I(h, 0);
        break
      }
      case 1: {
        return this.finalizeHash__I__I__I(this.mix__I__I__I(h, (a.u[0] ? 1231 : 1237)), 1);
        break
      }
      default: {
        const initial = (a.u[0] ? 1231 : 1237);
        h = this.mix__I__I__I(h, initial);
        const h0 = h;
        let prev = (a.u[1] ? 1231 : 1237);
        const rangeDiff = ((prev - initial) | 0);
        let i = 2;
        while ((i < l)) {
          h = this.mix__I__I__I(h, prev);
          const hash = (a.u[i] ? 1231 : 1237);
          if ((rangeDiff !== ((hash - prev) | 0))) {
            h = this.mix__I__I__I(h, hash);
            i = ((1 + i) | 0);
            while ((i < l)) {
              h = this.mix__I__I__I(h, (a.u[i] ? 1231 : 1237));
              i = ((1 + i) | 0)
            };
            return this.finalizeHash__I__I__I(h, l)
          };
          prev = hash;
          i = ((1 + i) | 0)
        };
        return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev))
      }
    }
  };
  arrayHash$mBc$sp__AB__I__I(a, seed) {
    let h = seed;
    const l = a.u.length;
    switch (l) {
      case 0: {
        return this.finalizeHash__I__I__I(h, 0);
        break
      }
      case 1: {
        return this.finalizeHash__I__I__I(this.mix__I__I__I(h, a.u[0]), 1);
        break
      }
      default: {
        const initial = a.u[0];
        h = this.mix__I__I__I(h, initial);
        const h0 = h;
        let prev = a.u[1];
        const rangeDiff = ((prev - initial) | 0);
        let i = 2;
        while ((i < l)) {
          h = this.mix__I__I__I(h, prev);
          const hash = a.u[i];
          if ((rangeDiff !== ((hash - prev) | 0))) {
            h = this.mix__I__I__I(h, hash);
            i = ((1 + i) | 0);
            while ((i < l)) {
              h = this.mix__I__I__I(h, a.u[i]);
              i = ((1 + i) | 0)
            };
            return this.finalizeHash__I__I__I(h, l)
          };
          prev = hash;
          i = ((1 + i) | 0)
        };
        return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev))
      }
    }
  };
  arrayHash$mCc$sp__AC__I__I(a, seed) {
    let h = seed;
    const l = a.u.length;
    switch (l) {
      case 0: {
        return this.finalizeHash__I__I__I(h, 0);
        break
      }
      case 1: {
        return this.finalizeHash__I__I__I(this.mix__I__I__I(h, a.u[0]), 1);
        break
      }
      default: {
        const initial = a.u[0];
        h = this.mix__I__I__I(h, initial);
        const h0 = h;
        let prev = a.u[1];
        const rangeDiff = ((prev - initial) | 0);
        let i = 2;
        while ((i < l)) {
          h = this.mix__I__I__I(h, prev);
          const hash = a.u[i];
          if ((rangeDiff !== ((hash - prev) | 0))) {
            h = this.mix__I__I__I(h, hash);
            i = ((1 + i) | 0);
            while ((i < l)) {
              h = this.mix__I__I__I(h, a.u[i]);
              i = ((1 + i) | 0)
            };
            return this.finalizeHash__I__I__I(h, l)
          };
          prev = hash;
          i = ((1 + i) | 0)
        };
        return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev))
      }
    }
  };
  arrayHash$mDc$sp__AD__I__I(a, seed) {
    let h = seed;
    const l = a.u.length;
    switch (l) {
      case 0: {
        return this.finalizeHash__I__I__I(h, 0);
        break
      }
      case 1: {
        const $$x1 = h;
        const dv = a.u[0];
        return this.finalizeHash__I__I__I(this.mix__I__I__I($$x1, $m_sr_Statics$().doubleHash__D__I(dv)), 1);
        break
      }
      default: {
        const dv$1 = a.u[0];
        const initial = $m_sr_Statics$().doubleHash__D__I(dv$1);
        h = this.mix__I__I__I(h, initial);
        const h0 = h;
        const dv$2 = a.u[1];
        let prev = $m_sr_Statics$().doubleHash__D__I(dv$2);
        const rangeDiff = ((prev - initial) | 0);
        let i = 2;
        while ((i < l)) {
          h = this.mix__I__I__I(h, prev);
          const dv$3 = a.u[i];
          const hash = $m_sr_Statics$().doubleHash__D__I(dv$3);
          if ((rangeDiff !== ((hash - prev) | 0))) {
            h = this.mix__I__I__I(h, hash);
            i = ((1 + i) | 0);
            while ((i < l)) {
              const $$x2 = h;
              const dv$4 = a.u[i];
              h = this.mix__I__I__I($$x2, $m_sr_Statics$().doubleHash__D__I(dv$4));
              i = ((1 + i) | 0)
            };
            return this.finalizeHash__I__I__I(h, l)
          };
          prev = hash;
          i = ((1 + i) | 0)
        };
        return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev))
      }
    }
  };
  arrayHash$mFc$sp__AF__I__I(a, seed) {
    let h = seed;
    const l = a.u.length;
    switch (l) {
      case 0: {
        return this.finalizeHash__I__I__I(h, 0);
        break
      }
      case 1: {
        const $$x1 = h;
        const fv = a.u[0];
        const this$1 = $m_sr_Statics$();
        return this.finalizeHash__I__I__I(this.mix__I__I__I($$x1, this$1.doubleHash__D__I(fv)), 1);
        break
      }
      default: {
        const fv$1 = a.u[0];
        const this$2 = $m_sr_Statics$();
        const initial = this$2.doubleHash__D__I(fv$1);
        h = this.mix__I__I__I(h, initial);
        const h0 = h;
        const fv$2 = a.u[1];
        const this$3 = $m_sr_Statics$();
        let prev = this$3.doubleHash__D__I(fv$2);
        const rangeDiff = ((prev - initial) | 0);
        let i = 2;
        while ((i < l)) {
          h = this.mix__I__I__I(h, prev);
          const fv$3 = a.u[i];
          const this$4 = $m_sr_Statics$();
          const hash = this$4.doubleHash__D__I(fv$3);
          if ((rangeDiff !== ((hash - prev) | 0))) {
            h = this.mix__I__I__I(h, hash);
            i = ((1 + i) | 0);
            while ((i < l)) {
              const $$x2 = h;
              const fv$4 = a.u[i];
              const this$5 = $m_sr_Statics$();
              h = this.mix__I__I__I($$x2, this$5.doubleHash__D__I(fv$4));
              i = ((1 + i) | 0)
            };
            return this.finalizeHash__I__I__I(h, l)
          };
          prev = hash;
          i = ((1 + i) | 0)
        };
        return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev))
      }
    }
  };
  arrayHash$mIc$sp__AI__I__I(a, seed) {
    let h = seed;
    const l = a.u.length;
    switch (l) {
      case 0: {
        return this.finalizeHash__I__I__I(h, 0);
        break
      }
      case 1: {
        return this.finalizeHash__I__I__I(this.mix__I__I__I(h, a.u[0]), 1);
        break
      }
      default: {
        const initial = a.u[0];
        h = this.mix__I__I__I(h, initial);
        const h0 = h;
        let prev = a.u[1];
        const rangeDiff = ((prev - initial) | 0);
        let i = 2;
        while ((i < l)) {
          h = this.mix__I__I__I(h, prev);
          const hash = a.u[i];
          if ((rangeDiff !== ((hash - prev) | 0))) {
            h = this.mix__I__I__I(h, hash);
            i = ((1 + i) | 0);
            while ((i < l)) {
              h = this.mix__I__I__I(h, a.u[i]);
              i = ((1 + i) | 0)
            };
            return this.finalizeHash__I__I__I(h, l)
          };
          prev = hash;
          i = ((1 + i) | 0)
        };
        return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev))
      }
    }
  };
  arrayHash$mJc$sp__AJ__I__I(a, seed) {
    let h = seed;
    const l = a.u.length;
    switch (l) {
      case 0: {
        return this.finalizeHash__I__I__I(h, 0);
        break
      }
      case 1: {
        const $$x1 = h;
        const t = a.u[0];
        const lo = t.RTLong__f_lo;
        const hi = t.RTLong__f_hi;
        return this.finalizeHash__I__I__I(this.mix__I__I__I($$x1, $m_sr_Statics$().longHash__J__I(new $c_RTLong(lo, hi))), 1);
        break
      }
      default: {
        const t$1 = a.u[0];
        const lo$1 = t$1.RTLong__f_lo;
        const hi$1 = t$1.RTLong__f_hi;
        const initial = $m_sr_Statics$().longHash__J__I(new $c_RTLong(lo$1, hi$1));
        h = this.mix__I__I__I(h, initial);
        const h0 = h;
        const t$2 = a.u[1];
        const lo$2 = t$2.RTLong__f_lo;
        const hi$2 = t$2.RTLong__f_hi;
        let prev = $m_sr_Statics$().longHash__J__I(new $c_RTLong(lo$2, hi$2));
        const rangeDiff = ((prev - initial) | 0);
        let i = 2;
        while ((i < l)) {
          h = this.mix__I__I__I(h, prev);
          const t$3 = a.u[i];
          const lo$3 = t$3.RTLong__f_lo;
          const hi$3 = t$3.RTLong__f_hi;
          const hash = $m_sr_Statics$().longHash__J__I(new $c_RTLong(lo$3, hi$3));
          if ((rangeDiff !== ((hash - prev) | 0))) {
            h = this.mix__I__I__I(h, hash);
            i = ((1 + i) | 0);
            while ((i < l)) {
              const $$x2 = h;
              const t$4 = a.u[i];
              const lo$4 = t$4.RTLong__f_lo;
              const hi$4 = t$4.RTLong__f_hi;
              h = this.mix__I__I__I($$x2, $m_sr_Statics$().longHash__J__I(new $c_RTLong(lo$4, hi$4)));
              i = ((1 + i) | 0)
            };
            return this.finalizeHash__I__I__I(h, l)
          };
          prev = hash;
          i = ((1 + i) | 0)
        };
        return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev))
      }
    }
  };
  arrayHash$mSc$sp__AS__I__I(a, seed) {
    let h = seed;
    const l = a.u.length;
    switch (l) {
      case 0: {
        return this.finalizeHash__I__I__I(h, 0);
        break
      }
      case 1: {
        return this.finalizeHash__I__I__I(this.mix__I__I__I(h, a.u[0]), 1);
        break
      }
      default: {
        const initial = a.u[0];
        h = this.mix__I__I__I(h, initial);
        const h0 = h;
        let prev = a.u[1];
        const rangeDiff = ((prev - initial) | 0);
        let i = 2;
        while ((i < l)) {
          h = this.mix__I__I__I(h, prev);
          const hash = a.u[i];
          if ((rangeDiff !== ((hash - prev) | 0))) {
            h = this.mix__I__I__I(h, hash);
            i = ((1 + i) | 0);
            while ((i < l)) {
              h = this.mix__I__I__I(h, a.u[i]);
              i = ((1 + i) | 0)
            };
            return this.finalizeHash__I__I__I(h, l)
          };
          prev = hash;
          i = ((1 + i) | 0)
        };
        return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev))
      }
    }
  };
  arrayHash$mVc$sp__Ajl_Void__I__I(a, seed) {
    let h = seed;
    const l = a.u.length;
    switch (l) {
      case 0: {
        return this.finalizeHash__I__I__I(h, 0);
        break
      }
      case 1: {
        return this.finalizeHash__I__I__I(this.mix__I__I__I(h, 0), 1);
        break
      }
      default: {
        h = this.mix__I__I__I(h, 0);
        const h0 = h;
        let prev = 0;
        const rangeDiff = prev;
        let i = 2;
        while ((i < l)) {
          h = this.mix__I__I__I(h, prev);
          if ((rangeDiff !== ((-prev) | 0))) {
            h = this.mix__I__I__I(h, 0);
            i = ((1 + i) | 0);
            while ((i < l)) {
              h = this.mix__I__I__I(h, 0);
              i = ((1 + i) | 0)
            };
            return this.finalizeHash__I__I__I(h, l)
          };
          prev = 0;
          i = ((1 + i) | 0)
        };
        return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev))
      }
    }
  };
}
class $c_Lethmodel_InitialConfig$ extends $c_O {
  constructor() {
    super();
    this.Lethmodel_InitialConfig$__f_Default = null;
    $n_Lethmodel_InitialConfig$ = this;
    this.Lethmodel_InitialConfig$__f_Default = new $c_Lethmodel_InitialConfig(115000000, $m_Lethmodel_OngoingConfig$().Lethmodel_OngoingConfig$__f_Default)
  };
}
const $d_Lethmodel_InitialConfig$ = new $TypeData().initClass({
  Lethmodel_InitialConfig$: 0
}, false, "ethmodel.InitialConfig$", {
  Lethmodel_InitialConfig$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_Lethmodel_InitialConfig$.prototype.$classData = $d_Lethmodel_InitialConfig$;
let $n_Lethmodel_InitialConfig$ = (void 0);
function $m_Lethmodel_InitialConfig$() {
  if ((!$n_Lethmodel_InitialConfig$)) {
    $n_Lethmodel_InitialConfig$ = new $c_Lethmodel_InitialConfig$()
  };
  return $n_Lethmodel_InitialConfig$
}
class $c_Lethmodel_OngoingConfig$ extends $c_O {
  constructor() {
    super();
    this.Lethmodel_OngoingConfig$__f_Default = null;
    $n_Lethmodel_OngoingConfig$ = this;
    this.Lethmodel_OngoingConfig$__f_Default = new $c_Lethmodel_OngoingConfig(80, 275, new $c_RTLong(50000000, 0), false, 5, false)
  };
}
const $d_Lethmodel_OngoingConfig$ = new $TypeData().initClass({
  Lethmodel_OngoingConfig$: 0
}, false, "ethmodel.OngoingConfig$", {
  Lethmodel_OngoingConfig$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_Lethmodel_OngoingConfig$.prototype.$classData = $d_Lethmodel_OngoingConfig$;
let $n_Lethmodel_OngoingConfig$ = (void 0);
function $m_Lethmodel_OngoingConfig$() {
  if ((!$n_Lethmodel_OngoingConfig$)) {
    $n_Lethmodel_OngoingConfig$ = new $c_Lethmodel_OngoingConfig$()
  };
  return $n_Lethmodel_OngoingConfig$
}
const $p_Lethmodel_State$__calcValidatorRoi__Lethmodel_State__Lethmodel_ETHHolder__Lethmodel_ETHHolder$Status$CurrentlyValidating = (function($thiz, s, e) {
  const value = (e.Lethmodel_ETHHolder__f_holdingsOf32Eth << 5);
  const hi = (value >> 31);
  const value$1 = s.Lethmodel_State__f_ongoingConfig.Lethmodel_OngoingConfig__f_ethUsdPrice;
  const hi$1 = (value$1 >> 31);
  const a0 = (65535 & value);
  const a1 = ((value >>> 16) | 0);
  const b0 = (65535 & value$1);
  const b1 = ((value$1 >>> 16) | 0);
  const a0b0 = $imul(a0, b0);
  const a1b0 = $imul(a1, b0);
  const a0b1 = $imul(a0, b1);
  const lo = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
  const c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
  const hi$2 = (((((((($imul(value, hi$1) + $imul(hi, value$1)) | 0) + $imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
  let t$1;
  if ((s.Lethmodel_State__f_ongoingConfig.Lethmodel_OngoingConfig__f_transactionFeesBurned || (s.Lethmodel_State__f_metrics.Lethmodel_Metrics__f_numEthStaked < 1))) {
    t$1 = $L0
  } else {
    const t = s.Lethmodel_State__f_ongoingConfig.Lethmodel_OngoingConfig__f_annualizedTotalTransactionFeesUsd;
    const lo$1 = t.RTLong__f_lo;
    const hi$3 = t.RTLong__f_hi;
    const a0$1 = (65535 & lo$1);
    const a1$1 = ((lo$1 >>> 16) | 0);
    const b0$1 = (65535 & value);
    const b1$1 = ((value >>> 16) | 0);
    const a0b0$1 = $imul(a0$1, b0$1);
    const a1b0$1 = $imul(a1$1, b0$1);
    const a0b1$1 = $imul(a0$1, b1$1);
    const lo$2 = ((a0b0$1 + (((a1b0$1 + a0b1$1) | 0) << 16)) | 0);
    const c1part$1 = ((((a0b0$1 >>> 16) | 0) + a0b1$1) | 0);
    const hi$4 = (((((((($imul(lo$1, hi) + $imul(hi$3, value)) | 0) + $imul(a1$1, b1$1)) | 0) + ((c1part$1 >>> 16) | 0)) | 0) + (((((65535 & c1part$1) + a1b0$1) | 0) >>> 16) | 0)) | 0);
    const value$2 = s.Lethmodel_State__f_metrics.Lethmodel_Metrics__f_numEthStaked;
    const hi$5 = (value$2 >> 31);
    const this$4 = $m_RTLong$();
    const lo$3 = this$4.divideImpl__I__I__I__I__I(lo$2, hi$4, value$2, hi$5);
    const hi$6 = this$4.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
    const x__lo = lo$3;
    const x__hi = hi$6;
    t$1 = new $c_RTLong(x__lo, x__hi)
  };
  const lo$4 = t$1.RTLong__f_lo;
  const hi$7 = t$1.RTLong__f_hi;
  const a = ($m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo, hi$2) * s.Lethmodel_State__f_metrics.Lethmodel_Metrics__f_issuanceApr);
  const this$6 = $m_RTLong$();
  const value$3 = (+Math.round(a));
  const lo$5 = this$6.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I(value$3);
  const hi$8 = this$6.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
  const lo$6 = ((lo$5 + lo$4) | 0);
  const hi$9 = ((((-2147483648) ^ lo$6) < ((-2147483648) ^ lo$5)) ? ((1 + ((hi$8 + hi$7) | 0)) | 0) : ((hi$8 + hi$7) | 0));
  const value$4 = $imul(e.Lethmodel_ETHHolder__f_holdingsOf32Eth, s.Lethmodel_State__f_ongoingConfig.Lethmodel_OngoingConfig__f_validator32EthFlatCostUsd);
  const hi$10 = (value$4 >> 31);
  const $$x1 = (s.Lethmodel_State__f_ongoingConfig.Lethmodel_OngoingConfig__f_ignoreTaxRate ? 0.0 : e.Lethmodel_ETHHolder__f_taxRate);
  const lo$7 = ((lo$6 - value$4) | 0);
  const hi$11 = ((((-2147483648) ^ lo$7) > ((-2147483648) ^ lo$6)) ? (((-1) + ((hi$9 - hi$10) | 0)) | 0) : ((hi$9 - hi$10) | 0));
  const t$2 = ((hi$11 < 0) ? $L0 : new $c_RTLong(lo$7, hi$11));
  const lo$8 = t$2.RTLong__f_lo;
  const hi$12 = t$2.RTLong__f_hi;
  const a$1 = ($$x1 * $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo$8, hi$12));
  const this$12 = $m_RTLong$();
  const value$5 = (+Math.round(a$1));
  const lo$9 = this$12.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I(value$5);
  const hi$13 = this$12.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
  const lo$10 = ((value$4 + lo$9) | 0);
  const hi$14 = ((((-2147483648) ^ lo$10) < ((-2147483648) ^ value$4)) ? ((1 + ((hi$10 + hi$13) | 0)) | 0) : ((hi$10 + hi$13) | 0));
  const lo$11 = ((lo$6 - lo$10) | 0);
  const hi$15 = ((((-2147483648) ^ lo$11) > ((-2147483648) ^ lo$6)) ? (((-1) + ((hi$9 - hi$14) | 0)) | 0) : ((hi$9 - hi$14) | 0));
  const roiApr = ($m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo$11, hi$15) / $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo, hi$2));
  return new $c_Lethmodel_ETHHolder$Status$CurrentlyValidating(new $c_RTLong(lo$6, hi$9), new $c_RTLong(lo$10, hi$14), roiApr)
});
const $p_Lethmodel_State$__getNextEthHolder__s_util_Random__Lethmodel_State__Lethmodel_ETHHolder__Lethmodel_ETHHolder = (function($thiz, rand, s, e) {
  const n = s.Lethmodel_State__f_ongoingConfig.Lethmodel_OngoingConfig__f_ethHolderActionChance;
  const canDoAction = (rand.s_util_Random__f_self.nextInt__I__I(n) < 1);
  const x1 = new $c_T2(canDoAction, e.Lethmodel_ETHHolder__f_status);
  let nextStatus;
  matchEnd14: {
    const p2 = (!(!x1.T2__f__1));
    if ((p2 === true)) {
      const tv = $p_Lethmodel_State$__calcValidatorRoi__Lethmodel_State__Lethmodel_ETHHolder__Lethmodel_ETHHolder$Status$CurrentlyValidating($thiz, s, e);
      nextStatus = ((tv.Lethmodel_ETHHolder$Status$CurrentlyValidating__f_roiApr >= e.Lethmodel_ETHHolder__f_minRoiAprToValidate) ? tv : $m_Lethmodel_ETHHolder$Status$CurrentlyJustHolding$());
      break matchEnd14
    };
    const p4 = (!(!x1.T2__f__1));
    if (((p4 === false) && (x1.T2__f__2 instanceof $c_Lethmodel_ETHHolder$Status$CurrentlyValidating))) {
      nextStatus = $p_Lethmodel_State$__calcValidatorRoi__Lethmodel_State__Lethmodel_ETHHolder__Lethmodel_ETHHolder$Status$CurrentlyValidating($thiz, s, e);
      break matchEnd14
    };
    const p6 = (!(!x1.T2__f__1));
    const p7 = x1.T2__f__2;
    let $$x1;
    if ((p6 === false)) {
      const x = $m_Lethmodel_ETHHolder$Status$CurrentlyJustHolding$();
      $$x1 = (x === p7)
    } else {
      $$x1 = false
    };
    if ($$x1) {
      nextStatus = $m_Lethmodel_ETHHolder$Status$CurrentlyJustHolding$();
      break matchEnd14
    };
    throw new $c_s_MatchError(x1)
  };
  const x$2$2 = e.Lethmodel_ETHHolder__f_holdingsOf32Eth;
  const x$3 = e.Lethmodel_ETHHolder__f_minRoiAprToValidate;
  const x$4 = e.Lethmodel_ETHHolder__f_taxRate;
  return new $c_Lethmodel_ETHHolder(x$2$2, nextStatus, x$3, x$4)
});
class $c_Lethmodel_State$ extends $c_O {
  init__s_util_Random__Lethmodel_InitialConfig__Lethmodel_State(rand, c) {
    $m_s_reflect_ManifestFactory$IntManifest$();
    const array = $newArrayObject($d_I.getArrayOf(), [10000]);
    let i = 0;
    while ((i < 10000)) {
      array.u[i] = 1;
      i = ((1 + i) | 0)
    };
    let ethLeft = c.Lethmodel_InitialConfig__f_totalEthSupply;
    ethLeft = (((-320000) + ethLeft) | 0);
    while ((ethLeft > 31)) {
      const i$1 = rand.s_util_Random__f_self.nextInt__I__I(10000);
      array.u[i$1] = ((100 + array.u[i$1]) | 0);
      ethLeft = (((-3200) + ethLeft) | 0)
    };
    const this$4 = $m_s_Predef$().wrapIntArray__AI__scm_ArraySeq$ofInt(array);
    const elem = $m_sci_List$().from__sc_IterableOnce__sci_List(this$4);
    let elem$1 = null;
    elem$1 = elem;
    const array$1 = $newArrayObject($d_Lethmodel_ETHHolder.getArrayOf(), [10000]);
    let i$2 = 0;
    while ((i$2 < 10000)) {
      const $$x3 = i$2;
      const $$x2 = elem$1.head__O();
      const $$x1 = $m_Lethmodel_ETHHolder$Status$CurrentlyJustHolding$();
      const b = (0.06 + (0.01 * rand.s_util_Random__f_self.nextGaussian__D()));
      const e = new $c_Lethmodel_ETHHolder(($$x2 | 0), $$x1, (+Math.max(0.0, b)), ((rand.s_util_Random__f_self.nextBoolean__Z() && rand.s_util_Random__f_self.nextBoolean__Z()) ? 0.0 : 0.33));
      elem$1 = elem$1.tail__O();
      array$1.u[$$x3] = e;
      i$2 = ((1 + i$2) | 0)
    };
    const $$x4 = c.Lethmodel_InitialConfig__f_ongoingConfig;
    const this$9 = $m_s_Predef$().wrapRefArray__AO__scm_ArraySeq$ofRef(array$1);
    return new $c_Lethmodel_State($$x4, $m_sci_List$().from__sc_IterableOnce__sci_List(this$9), ($m_sci_List$(), $m_sci_Nil$()))
  };
  ethmodel$State$$deriveMetrics__Lethmodel_OngoingConfig__sci_List__Lethmodel_Metrics(ongoingConfig, ethHolders) {
    let acc = 0;
    let these = ethHolders;
    while ((!these.isEmpty__Z())) {
      const arg1 = acc;
      const arg2 = these.head__O();
      const s = (arg1 | 0);
      const e = arg2;
      acc = ((s + (e.Lethmodel_ETHHolder__f_holdingsOf32Eth << 5)) | 0);
      these = these.tail__O()
    };
    const totalEthSupply = (acc | 0);
    const numEthHolders = ethHolders.length__I();
    let acc$1 = 0;
    let these$1 = ethHolders;
    while ((!these$1.isEmpty__Z())) {
      const arg1$1 = acc$1;
      const arg2$1 = these$1.head__O();
      const s$3 = (arg1$1 | 0);
      const e$3 = arg2$1;
      const x1 = e$3.Lethmodel_ETHHolder__f_status;
      if ((x1 instanceof $c_Lethmodel_ETHHolder$Status$CurrentlyValidating)) {
        acc$1 = ((1 + s$3) | 0)
      } else {
        const x = $m_Lethmodel_ETHHolder$Status$CurrentlyJustHolding$();
        if ((x === x1)) {
          acc$1 = s$3
        } else {
          throw new $c_s_MatchError(x1)
        }
      };
      these$1 = these$1.tail__O()
    };
    const numValidators = (acc$1 | 0);
    let acc$2 = 0;
    let these$2 = ethHolders;
    while ((!these$2.isEmpty__Z())) {
      const arg1$2 = acc$2;
      const arg2$2 = these$2.head__O();
      const s$4 = (arg1$2 | 0);
      const e$4 = arg2$2;
      const x1$1 = e$4.Lethmodel_ETHHolder__f_status;
      if ((x1$1 instanceof $c_Lethmodel_ETHHolder$Status$CurrentlyValidating)) {
        acc$2 = ((s$4 + (e$4.Lethmodel_ETHHolder__f_holdingsOf32Eth << 5)) | 0)
      } else {
        const x$1 = $m_Lethmodel_ETHHolder$Status$CurrentlyJustHolding$();
        if ((x$1 === x1$1)) {
          acc$2 = s$4
        } else {
          throw new $c_s_MatchError(x1$1)
        }
      };
      these$2 = these$2.tail__O()
    };
    const numEthStaked = (acc$2 | 0);
    let acc$3 = $L0;
    let these$3 = ethHolders;
    while ((!these$3.isEmpty__Z())) {
      const arg1$3 = acc$3;
      const arg2$3 = these$3.head__O();
      const t = $uJ(arg1$3);
      const lo = t.RTLong__f_lo;
      const hi = t.RTLong__f_hi;
      const e$5 = arg2$3;
      const x1$2 = e$5.Lethmodel_ETHHolder__f_status;
      if ((x1$2 instanceof $c_Lethmodel_ETHHolder$Status$CurrentlyValidating)) {
        const x2 = x1$2;
        const b = x2.Lethmodel_ETHHolder$Status$CurrentlyValidating__f_annualizedExpensesUsd;
        const bhi = b.RTLong__f_hi;
        const lo$1 = ((lo + b.RTLong__f_lo) | 0);
        const hi$1 = ((((-2147483648) ^ lo$1) < ((-2147483648) ^ lo)) ? ((1 + ((hi + bhi) | 0)) | 0) : ((hi + bhi) | 0));
        acc$3 = new $c_RTLong(lo$1, hi$1)
      } else {
        const x$2 = $m_Lethmodel_ETHHolder$Status$CurrentlyJustHolding$();
        if ((x$2 === x1$2)) {
          acc$3 = new $c_RTLong(lo, hi)
        } else {
          throw new $c_s_MatchError(x1$2)
        }
      };
      these$3 = these$3.tail__O()
    };
    const t$1 = $uJ(acc$3);
    const lo$2 = t$1.RTLong__f_lo;
    const hi$2 = t$1.RTLong__f_hi;
    const issuanceApr = $m_Lethmodel_Ethereum$().getIssuanceApr__I__D(numEthStaked);
    let t$3;
    if (ongoingConfig.Lethmodel_OngoingConfig__f_transactionFeesBurned) {
      const t$2 = ongoingConfig.Lethmodel_OngoingConfig__f_annualizedTotalTransactionFeesUsd;
      const lo$3 = t$2.RTLong__f_lo;
      const hi$4 = t$2.RTLong__f_hi;
      const value = ongoingConfig.Lethmodel_OngoingConfig__f_ethUsdPrice;
      const hi$3 = (value >> 31);
      const this$3 = $m_RTLong$();
      const lo$4 = this$3.divideImpl__I__I__I__I__I(lo$3, hi$4, value, hi$3);
      const hi$5 = this$3.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
      const x$3__lo = lo$4;
      const x$3__hi = hi$5;
      t$3 = new $c_RTLong(x$3__lo, x$3__hi)
    } else {
      t$3 = $L0
    };
    const lo$5 = t$3.RTLong__f_lo;
    const hi$6 = t$3.RTLong__f_hi;
    const inflationApr = ((-1.0) + (((totalEthSupply + (numEthStaked * issuanceApr)) - $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo$5, hi$6)) / totalEthSupply));
    return new $c_Lethmodel_Metrics(totalEthSupply, numEthHolders, numValidators, numEthStaked, $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo$2, hi$2), issuanceApr, inflationApr)
  };
  getNextState__s_util_Random__Lethmodel_State__Lethmodel_State(rand, s) {
    const this$2 = s.Lethmodel_State__f_ethHolders;
    const f = ((this$1, rand$1, s$1) => ((x$1$2) => {
      const x$1 = x$1$2;
      return $p_Lethmodel_State$__getNextEthHolder__s_util_Random__Lethmodel_State__Lethmodel_ETHHolder__Lethmodel_ETHHolder($m_Lethmodel_State$(), rand$1, s$1, x$1)
    }))(this, rand, s);
    let x$1$3;
    if ((this$2 === $m_sci_Nil$())) {
      x$1$3 = $m_sci_Nil$()
    } else {
      const arg1 = this$2.head__O();
      const h = new $c_sci_$colon$colon(f(arg1), $m_sci_Nil$());
      let t = h;
      let rest = this$2.tail__O();
      while ((rest !== $m_sci_Nil$())) {
        const arg1$1 = rest.head__O();
        const nx = new $c_sci_$colon$colon(f(arg1$1), $m_sci_Nil$());
        t.sci_$colon$colon__f_next = nx;
        t = nx;
        rest = rest.tail__O()
      };
      x$1$3 = h
    };
    const x$2 = s.Lethmodel_State__f_ongoingConfig;
    const x$3 = s.Lethmodel_State__f_historicalMetrics;
    return new $c_Lethmodel_State(x$2, x$1$3, x$3)
  };
}
const $d_Lethmodel_State$ = new $TypeData().initClass({
  Lethmodel_State$: 0
}, false, "ethmodel.State$", {
  Lethmodel_State$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_Lethmodel_State$.prototype.$classData = $d_Lethmodel_State$;
let $n_Lethmodel_State$ = (void 0);
function $m_Lethmodel_State$() {
  if ((!$n_Lethmodel_State$)) {
    $n_Lethmodel_State$ = new $c_Lethmodel_State$()
  };
  return $n_Lethmodel_State$
}
const $p_jl_Character$__nonASCIIZeroDigitCodePoints$lzycompute__AI = (function($thiz) {
  if (((((16 & $thiz.jl_Character$__f_bitmap$0) << 24) >> 24) === 0)) {
    $thiz.jl_Character$__f_nonASCIIZeroDigitCodePoints = $makeNativeArrayWrapper($d_I.getArrayOf(), [1632, 1776, 1984, 2406, 2534, 2662, 2790, 2918, 3046, 3174, 3302, 3430, 3664, 3792, 3872, 4160, 4240, 6112, 6160, 6470, 6608, 6784, 6800, 6992, 7088, 7232, 7248, 42528, 43216, 43264, 43472, 43600, 44016, 65296, 66720, 69734, 69872, 69942, 70096, 71360, 120782, 120792, 120802, 120812, 120822]);
    $thiz.jl_Character$__f_bitmap$0 = (((16 | $thiz.jl_Character$__f_bitmap$0) << 24) >> 24)
  };
  return $thiz.jl_Character$__f_nonASCIIZeroDigitCodePoints
});
const $p_jl_Character$__nonASCIIZeroDigitCodePoints__AI = (function($thiz) {
  return (((((16 & $thiz.jl_Character$__f_bitmap$0) << 24) >> 24) === 0) ? $p_jl_Character$__nonASCIIZeroDigitCodePoints$lzycompute__AI($thiz) : $thiz.jl_Character$__f_nonASCIIZeroDigitCodePoints)
});
class $c_jl_Character$ extends $c_O {
  constructor() {
    super();
    this.jl_Character$__f_java$lang$Character$$charTypesFirst256 = null;
    this.jl_Character$__f_charTypeIndices = null;
    this.jl_Character$__f_charTypes = null;
    this.jl_Character$__f_isMirroredIndices = null;
    this.jl_Character$__f_nonASCIIZeroDigitCodePoints = null;
    this.jl_Character$__f_bitmap$0 = 0
  };
  digitWithValidRadix__I__I__I(codePoint, radix) {
    let value;
    if ((codePoint < 256)) {
      value = (((codePoint >= 48) && (codePoint <= 57)) ? (((-48) + codePoint) | 0) : (((codePoint >= 65) && (codePoint <= 90)) ? (((-55) + codePoint) | 0) : (((codePoint >= 97) && (codePoint <= 122)) ? (((-87) + codePoint) | 0) : (-1))))
    } else if (((codePoint >= 65313) && (codePoint <= 65338))) {
      value = (((-65303) + codePoint) | 0)
    } else if (((codePoint >= 65345) && (codePoint <= 65370))) {
      value = (((-65335) + codePoint) | 0)
    } else {
      const a = $p_jl_Character$__nonASCIIZeroDigitCodePoints__AI(this);
      const p = $m_ju_Arrays$().binarySearch__AI__I__I(a, codePoint);
      const zeroCodePointIndex = ((p < 0) ? (((-2) - p) | 0) : p);
      if ((zeroCodePointIndex < 0)) {
        value = (-1)
      } else {
        const v = ((codePoint - $p_jl_Character$__nonASCIIZeroDigitCodePoints__AI(this).u[zeroCodePointIndex]) | 0);
        value = ((v > 9) ? (-1) : v)
      }
    };
    return ((value < radix) ? value : (-1))
  };
}
const $d_jl_Character$ = new $TypeData().initClass({
  jl_Character$: 0
}, false, "java.lang.Character$", {
  jl_Character$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_Character$.prototype.$classData = $d_jl_Character$;
let $n_jl_Character$ = (void 0);
function $m_jl_Character$() {
  if ((!$n_jl_Character$)) {
    $n_jl_Character$ = new $c_jl_Character$()
  };
  return $n_jl_Character$
}
const $p_jl_Integer$__fail$1__T__E = (function($thiz, s$1) {
  throw new $c_jl_NumberFormatException((("For input string: \"" + s$1) + "\""))
});
class $c_jl_Integer$ extends $c_O {
  parseInt__T__I__I(s, radix) {
    const len = ((s === null) ? 0 : (s.length | 0));
    if ((((len === 0) || (radix < 2)) || (radix > 36))) {
      $p_jl_Integer$__fail$1__T__E(this, s)
    };
    const firstChar = (65535 & (s.charCodeAt(0) | 0));
    const negative = (firstChar === 45);
    const maxAbsValue = (negative ? 2.147483648E9 : 2.147483647E9);
    let i = ((negative || (firstChar === 43)) ? 1 : 0);
    if ((i >= (s.length | 0))) {
      $p_jl_Integer$__fail$1__T__E(this, s)
    };
    let result = 0.0;
    while ((i !== len)) {
      const $$x1 = $m_jl_Character$();
      const index = i;
      const digit = $$x1.digitWithValidRadix__I__I__I((65535 & (s.charCodeAt(index) | 0)), radix);
      result = ((result * radix) + digit);
      if (((digit === (-1)) || (result > maxAbsValue))) {
        $p_jl_Integer$__fail$1__T__E(this, s)
      };
      i = ((1 + i) | 0)
    };
    if (negative) {
      const n = (-result);
      return ((n | 0) | 0)
    } else {
      const n$1 = result;
      return ((n$1 | 0) | 0)
    }
  };
  bitCount__I__I(i) {
    const t1 = ((i - (1431655765 & (i >> 1))) | 0);
    const t2 = (((858993459 & t1) + (858993459 & (t1 >> 2))) | 0);
    return ($imul(16843009, (252645135 & ((t2 + (t2 >> 4)) | 0))) >> 24)
  };
}
const $d_jl_Integer$ = new $TypeData().initClass({
  jl_Integer$: 0
}, false, "java.lang.Integer$", {
  jl_Integer$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_Integer$.prototype.$classData = $d_jl_Integer$;
let $n_jl_Integer$ = (void 0);
function $m_jl_Integer$() {
  if ((!$n_jl_Integer$)) {
    $n_jl_Integer$ = new $c_jl_Integer$()
  };
  return $n_jl_Integer$
}
class $c_jl_Number extends $c_O {
}
function $is_jl_Number(obj) {
  return ((obj instanceof $c_jl_Number) || ((typeof obj) === "number"))
}
function $isArrayOf_jl_Number(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Number)))
}
class $c_jl_String$ extends $c_O {
  constructor() {
    super();
    this.jl_String$__f_CASE_INSENSITIVE_ORDER = null;
    this.jl_String$__f_bitmap$0 = false
  };
  new__AC__I__I__T(value, offset, count) {
    const end = ((offset + count) | 0);
    if ((((offset < 0) || (end < offset)) || (end > value.u.length))) {
      throw new $c_jl_StringIndexOutOfBoundsException()
    };
    let result = "";
    let i = offset;
    while ((i !== end)) {
      const $$x1 = result;
      const this$1 = value.u[i];
      result = (("" + $$x1) + String.fromCharCode(this$1));
      i = ((1 + i) | 0)
    };
    return result
  };
}
const $d_jl_String$ = new $TypeData().initClass({
  jl_String$: 0
}, false, "java.lang.String$", {
  jl_String$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_String$.prototype.$classData = $d_jl_String$;
let $n_jl_String$ = (void 0);
function $m_jl_String$() {
  if ((!$n_jl_String$)) {
    $n_jl_String$ = new $c_jl_String$()
  };
  return $n_jl_String$
}
const $ct_jl_Throwable__T__jl_Throwable__Z__Z__ = (function($thiz, s, e, enableSuppression, writableStackTrace) {
  $thiz.jl_Throwable__f_s = s;
  $thiz.jl_Throwable__f_e = e;
  $thiz.jl_Throwable__f_enableSuppression = enableSuppression;
  $thiz.jl_Throwable__f_writableStackTrace = writableStackTrace;
  if (writableStackTrace) {
    $thiz.fillInStackTrace__jl_Throwable()
  };
  return $thiz
});
class $c_jl_Throwable extends Error {
  constructor() {
    super();
    this.jl_Throwable__f_s = null;
    this.jl_Throwable__f_e = null;
    this.jl_Throwable__f_enableSuppression = false;
    this.jl_Throwable__f_writableStackTrace = false;
    this.jl_Throwable__f_stackTraceStateInternal = null;
    this.jl_Throwable__f_stackTrace = null;
    this.jl_Throwable__f_suppressed = null
  };
  getMessage__T() {
    return this.jl_Throwable__f_s
  };
  fillInStackTrace__jl_Throwable() {
    const identifyingString = Object.prototype.toString.call(this);
    if ((identifyingString === "[object Error]")) {
      this.jl_Throwable__f_stackTraceStateInternal = this
    } else {
      const x = Error.captureStackTrace;
      if ((x === (void 0))) {
        const e = new Error();
        this.jl_Throwable__f_stackTraceStateInternal = e
      } else {
        Error.captureStackTrace(this);
        this.jl_Throwable__f_stackTraceStateInternal = this
      }
    };
    return this
  };
  toString__T() {
    const className = $objectGetClass(this).getName__T();
    const message = this.getMessage__T();
    return ((message === null) ? className : ((className + ": ") + message))
  };
  $js$exported$meth$toString__O() {
    return this.toString__T()
  };
  $js$exported$prop$name__O() {
    return $objectGetClass(this).getName__T()
  };
  $js$exported$prop$message__O() {
    const m = this.getMessage__T();
    return ((m === null) ? "" : m)
  };
  hashCode__I() {
    return $c_O.prototype.hashCode__I.call(this)
  };
  equals__O__Z(that) {
    return $c_O.prototype.equals__O__Z.call(this, that)
  };
  get "message"() {
    return this.$js$exported$prop$message__O()
  };
  get "name"() {
    return this.$js$exported$prop$name__O()
  };
  "toString"() {
    return this.$js$exported$meth$toString__O()
  };
}
function $isArrayOf_jl_Throwable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Throwable)))
}
const $p_ju_Random__loop$1__I__I = (function($thiz, n$1) {
  while (true) {
    const bits = $thiz.next__I__I(31);
    const value = $intMod(bits, n$1);
    if ((((((bits - value) | 0) + (((-1) + n$1) | 0)) | 0) < 0)) {
      /*<skip>*/
    } else {
      return value
    }
  }
});
class $c_ju_Random extends $c_O {
  constructor(seed_in) {
    super();
    this.ju_Random__f_seedHi = 0;
    this.ju_Random__f_seedLo = 0;
    this.ju_Random__f_nextNextGaussian = 0.0;
    this.ju_Random__f_haveNextNextGaussian = false;
    this.ju_Random__f_haveNextNextGaussian = false;
    this.setSeed__J__V(seed_in)
  };
  setSeed__J__V(seed_in) {
    const lo = ((-554899859) ^ seed_in.RTLong__f_lo);
    const hi = (5 ^ seed_in.RTLong__f_hi);
    const hi$1 = (65535 & hi);
    const lo$1 = (((lo >>> 24) | 0) | (hi$1 << 8));
    this.ju_Random__f_seedHi = lo$1;
    this.ju_Random__f_seedLo = (16777215 & lo);
    this.ju_Random__f_haveNextNextGaussian = false
  };
  next__I__I(bits) {
    const oldSeedHi = this.ju_Random__f_seedHi;
    const oldSeedLo = this.ju_Random__f_seedLo;
    const loProd = (11.0 + (1.5525485E7 * oldSeedLo));
    const hiProd = ((1502.0 * oldSeedLo) + (1.5525485E7 * oldSeedHi));
    const x = (loProd / 1.6777216E7);
    const newSeedHi = (16777215 & ((((x | 0) | 0) + (16777215 & ((hiProd | 0) | 0))) | 0));
    const newSeedLo = (16777215 & ((loProd | 0) | 0));
    this.ju_Random__f_seedHi = newSeedHi;
    this.ju_Random__f_seedLo = newSeedLo;
    const result32 = ((newSeedHi << 8) | (newSeedLo >> 16));
    return ((result32 >>> ((32 - bits) | 0)) | 0)
  };
  nextDouble__D() {
    return (((1.34217728E8 * this.next__I__I(26)) + this.next__I__I(27)) / 9.007199254740992E15)
  };
  nextBoolean__Z() {
    return (this.next__I__I(1) !== 0)
  };
  nextInt__I__I(n) {
    if ((n <= 0)) {
      throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "n must be positive")
    } else {
      return (((n & ((-n) | 0)) === n) ? (this.next__I__I(31) >> $clz32(n)) : $p_ju_Random__loop$1__I__I(this, n))
    }
  };
  nextGaussian__D() {
    if (this.ju_Random__f_haveNextNextGaussian) {
      this.ju_Random__f_haveNextNextGaussian = false;
      return this.ju_Random__f_nextNextGaussian
    } else {
      let x = 0.0;
      let y = 0.0;
      let rds = 0.0;
      do {
        x = ((-1.0) + (2.0 * this.nextDouble__D()));
        y = ((-1.0) + (2.0 * this.nextDouble__D()));
        rds = ((x * x) + (y * y))
      } while (((rds === 0.0) || (rds > 1.0)));
      const a = rds;
      const a$1 = (((-2.0) * (+Math.log(a))) / rds);
      const c = (+Math.sqrt(a$1));
      this.ju_Random__f_nextNextGaussian = (y * c);
      this.ju_Random__f_haveNextNextGaussian = true;
      return (x * c)
    }
  };
}
const $d_ju_Random = new $TypeData().initClass({
  ju_Random: 0
}, false, "java.util.Random", {
  ju_Random: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_ju_Random.prototype.$classData = $d_ju_Random;
const $p_RTLong$__toUnsignedString__I__I__T = (function($thiz, lo, hi) {
  if ((((-2097152) & hi) === 0)) {
    const this$1 = ((4.294967296E9 * hi) + (+(lo >>> 0)));
    return ("" + this$1)
  } else {
    return $p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, lo, hi, 1000000000, 0, 2)
  }
});
const $p_RTLong$__unsigned_$div__I__I__I__I__I = (function($thiz, alo, ahi, blo, bhi) {
  if ((((-2097152) & ahi) === 0)) {
    if ((((-2097152) & bhi) === 0)) {
      const aDouble = ((4.294967296E9 * ahi) + (+(alo >>> 0)));
      const bDouble = ((4.294967296E9 * bhi) + (+(blo >>> 0)));
      const rDouble = (aDouble / bDouble);
      const x = (rDouble / 4.294967296E9);
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ((x | 0) | 0);
      return ((rDouble | 0) | 0)
    } else {
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
      return 0
    }
  } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
    const pow = ((31 - $clz32(blo)) | 0);
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ((ahi >>> pow) | 0);
    return (((alo >>> pow) | 0) | ((ahi << 1) << ((31 - pow) | 0)))
  } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
    const pow$2 = ((31 - $clz32(bhi)) | 0);
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
    return ((ahi >>> pow$2) | 0)
  } else {
    return ($p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, 0) | 0)
  }
});
const $p_RTLong$__unsigned_$percent__I__I__I__I__I = (function($thiz, alo, ahi, blo, bhi) {
  if ((((-2097152) & ahi) === 0)) {
    if ((((-2097152) & bhi) === 0)) {
      const aDouble = ((4.294967296E9 * ahi) + (+(alo >>> 0)));
      const bDouble = ((4.294967296E9 * bhi) + (+(blo >>> 0)));
      const rDouble = (aDouble % bDouble);
      const x = (rDouble / 4.294967296E9);
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ((x | 0) | 0);
      return ((rDouble | 0) | 0)
    } else {
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ahi;
      return alo
    }
  } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
    return (alo & (((-1) + blo) | 0))
  } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (ahi & (((-1) + bhi) | 0));
    return alo
  } else {
    return ($p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, 1) | 0)
  }
});
const $p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O = (function($thiz, alo, ahi, blo, bhi, ask) {
  let shift = ((((bhi !== 0) ? $clz32(bhi) : ((32 + $clz32(blo)) | 0)) - ((ahi !== 0) ? $clz32(ahi) : ((32 + $clz32(alo)) | 0))) | 0);
  const n = shift;
  const lo = (((32 & n) === 0) ? (blo << n) : 0);
  const hi = (((32 & n) === 0) ? (((((blo >>> 1) | 0) >>> ((31 - n) | 0)) | 0) | (bhi << n)) : (blo << n));
  let bShiftLo = lo;
  let bShiftHi = hi;
  let remLo = alo;
  let remHi = ahi;
  let quotLo = 0;
  let quotHi = 0;
  while (((shift >= 0) && (((-2097152) & remHi) !== 0))) {
    const alo$1 = remLo;
    const ahi$1 = remHi;
    const blo$1 = bShiftLo;
    const bhi$1 = bShiftHi;
    if (((ahi$1 === bhi$1) ? (((-2147483648) ^ alo$1) >= ((-2147483648) ^ blo$1)) : (((-2147483648) ^ ahi$1) >= ((-2147483648) ^ bhi$1)))) {
      const lo$1 = remLo;
      const hi$1 = remHi;
      const lo$2 = bShiftLo;
      const hi$2 = bShiftHi;
      const lo$3 = ((lo$1 - lo$2) | 0);
      const hi$3 = ((((-2147483648) ^ lo$3) > ((-2147483648) ^ lo$1)) ? (((-1) + ((hi$1 - hi$2) | 0)) | 0) : ((hi$1 - hi$2) | 0));
      remLo = lo$3;
      remHi = hi$3;
      if ((shift < 32)) {
        quotLo = (quotLo | (1 << shift))
      } else {
        quotHi = (quotHi | (1 << shift))
      }
    };
    shift = (((-1) + shift) | 0);
    const lo$4 = bShiftLo;
    const hi$4 = bShiftHi;
    const lo$5 = (((lo$4 >>> 1) | 0) | (hi$4 << 31));
    const hi$5 = ((hi$4 >>> 1) | 0);
    bShiftLo = lo$5;
    bShiftHi = hi$5
  };
  const alo$2 = remLo;
  const ahi$2 = remHi;
  if (((ahi$2 === bhi) ? (((-2147483648) ^ alo$2) >= ((-2147483648) ^ blo)) : (((-2147483648) ^ ahi$2) >= ((-2147483648) ^ bhi)))) {
    const lo$6 = remLo;
    const hi$6 = remHi;
    const remDouble = ((4.294967296E9 * hi$6) + (+(lo$6 >>> 0)));
    const bDouble = ((4.294967296E9 * bhi) + (+(blo >>> 0)));
    if ((ask !== 1)) {
      const x = (remDouble / bDouble);
      const lo$7 = ((x | 0) | 0);
      const x$1 = (x / 4.294967296E9);
      const hi$7 = ((x$1 | 0) | 0);
      const lo$8 = quotLo;
      const hi$8 = quotHi;
      const lo$9 = ((lo$8 + lo$7) | 0);
      const hi$9 = ((((-2147483648) ^ lo$9) < ((-2147483648) ^ lo$8)) ? ((1 + ((hi$8 + hi$7) | 0)) | 0) : ((hi$8 + hi$7) | 0));
      quotLo = lo$9;
      quotHi = hi$9
    };
    if ((ask !== 0)) {
      const rem_mod_bDouble = (remDouble % bDouble);
      remLo = ((rem_mod_bDouble | 0) | 0);
      const x$2 = (rem_mod_bDouble / 4.294967296E9);
      remHi = ((x$2 | 0) | 0)
    }
  };
  if ((ask === 0)) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = quotHi;
    return quotLo
  } else if ((ask === 1)) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = remHi;
    return remLo
  } else {
    const lo$10 = quotLo;
    const hi$10 = quotHi;
    const quot = ((4.294967296E9 * hi$10) + (+(lo$10 >>> 0)));
    const this$3 = remLo;
    const remStr = ("" + this$3);
    const start = (remStr.length | 0);
    return ((("" + quot) + "000000000".substring(start)) + remStr)
  }
});
class $c_RTLong$ extends $c_O {
  constructor() {
    super();
    this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0
  };
  org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T(lo, hi) {
    return ((hi === (lo >> 31)) ? ("" + lo) : ((hi < 0) ? ("-" + $p_RTLong$__toUnsignedString__I__I__T(this, ((-lo) | 0), ((lo !== 0) ? (~hi) : ((-hi) | 0)))) : $p_RTLong$__toUnsignedString__I__I__T(this, lo, hi)))
  };
  org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo, hi) {
    if ((hi < 0)) {
      const x = ((lo !== 0) ? (~hi) : ((-hi) | 0));
      const x$1 = ((-lo) | 0);
      return (-((4.294967296E9 * (+(x >>> 0))) + (+(x$1 >>> 0))))
    } else {
      return ((4.294967296E9 * hi) + (+(lo >>> 0)))
    }
  };
  fromInt__I__RTLong(value) {
    return new $c_RTLong(value, (value >> 31))
  };
  fromDouble__D__RTLong(value) {
    const lo = this.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I(value);
    return new $c_RTLong(lo, this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn)
  };
  org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I(value) {
    if ((value < (-9.223372036854776E18))) {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (-2147483648);
      return 0
    } else if ((value >= 9.223372036854776E18)) {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 2147483647;
      return (-1)
    } else {
      const rawLo = ((value | 0) | 0);
      const x = (value / 4.294967296E9);
      const rawHi = ((x | 0) | 0);
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (((value < 0.0) && (rawLo !== 0)) ? (((-1) + rawHi) | 0) : rawHi);
      return rawLo
    }
  };
  org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I(alo, ahi, blo, bhi) {
    return ((ahi === bhi) ? ((alo === blo) ? 0 : ((((-2147483648) ^ alo) < ((-2147483648) ^ blo)) ? (-1) : 1)) : ((ahi < bhi) ? (-1) : 1))
  };
  divideImpl__I__I__I__I__I(alo, ahi, blo, bhi) {
    if (((blo | bhi) === 0)) {
      throw $ct_jl_ArithmeticException__T__(new $c_jl_ArithmeticException(), "/ by zero")
    };
    if ((ahi === (alo >> 31))) {
      if ((bhi === (blo >> 31))) {
        if (((alo === (-2147483648)) && (blo === (-1)))) {
          this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
          return (-2147483648)
        } else {
          const lo = $intDiv(alo, blo);
          this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (lo >> 31);
          return lo
        }
      } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (-1);
        return (-1)
      } else {
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
        return 0
      }
    } else {
      let aAbs__lo;
      let aAbs__hi;
      if ((ahi < 0)) {
        const lo$1 = ((-alo) | 0);
        const hi = ((alo !== 0) ? (~ahi) : ((-ahi) | 0));
        const $$x1__lo = lo$1;
        const $$x1__hi = hi;
        aAbs__lo = $$x1__lo;
        aAbs__hi = $$x1__hi
      } else {
        const $$x2__lo = alo;
        const $$x2__hi = ahi;
        aAbs__lo = $$x2__lo;
        aAbs__hi = $$x2__hi
      };
      let bAbs__lo;
      let bAbs__hi;
      if ((bhi < 0)) {
        const lo$2 = ((-blo) | 0);
        const hi$1 = ((blo !== 0) ? (~bhi) : ((-bhi) | 0));
        const $$x3__lo = lo$2;
        const $$x3__hi = hi$1;
        bAbs__lo = $$x3__lo;
        bAbs__hi = $$x3__hi
      } else {
        const $$x4__lo = blo;
        const $$x4__hi = bhi;
        bAbs__lo = $$x4__lo;
        bAbs__hi = $$x4__hi
      };
      const absRLo = $p_RTLong$__unsigned_$div__I__I__I__I__I(this, aAbs__lo, aAbs__hi, bAbs__lo, bAbs__hi);
      if (((ahi ^ bhi) >= 0)) {
        return absRLo
      } else {
        const hi$2 = this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ((absRLo !== 0) ? (~hi$2) : ((-hi$2) | 0));
        return ((-absRLo) | 0)
      }
    }
  };
  remainderImpl__I__I__I__I__I(alo, ahi, blo, bhi) {
    if (((blo | bhi) === 0)) {
      throw $ct_jl_ArithmeticException__T__(new $c_jl_ArithmeticException(), "/ by zero")
    };
    if ((ahi === (alo >> 31))) {
      if ((bhi === (blo >> 31))) {
        if ((blo !== (-1))) {
          const lo = $intMod(alo, blo);
          this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (lo >> 31);
          return lo
        } else {
          this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
          return 0
        }
      } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
        return 0
      } else {
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ahi;
        return alo
      }
    } else {
      let aAbs__lo;
      let aAbs__hi;
      if ((ahi < 0)) {
        const lo$1 = ((-alo) | 0);
        const hi = ((alo !== 0) ? (~ahi) : ((-ahi) | 0));
        const $$x1__lo = lo$1;
        const $$x1__hi = hi;
        aAbs__lo = $$x1__lo;
        aAbs__hi = $$x1__hi
      } else {
        const $$x2__lo = alo;
        const $$x2__hi = ahi;
        aAbs__lo = $$x2__lo;
        aAbs__hi = $$x2__hi
      };
      let bAbs__lo;
      let bAbs__hi;
      if ((bhi < 0)) {
        const lo$2 = ((-blo) | 0);
        const hi$1 = ((blo !== 0) ? (~bhi) : ((-bhi) | 0));
        const $$x3__lo = lo$2;
        const $$x3__hi = hi$1;
        bAbs__lo = $$x3__lo;
        bAbs__hi = $$x3__hi
      } else {
        const $$x4__lo = blo;
        const $$x4__hi = bhi;
        bAbs__lo = $$x4__lo;
        bAbs__hi = $$x4__hi
      };
      const absRLo = $p_RTLong$__unsigned_$percent__I__I__I__I__I(this, aAbs__lo, aAbs__hi, bAbs__lo, bAbs__hi);
      if ((ahi < 0)) {
        const hi$2 = this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ((absRLo !== 0) ? (~hi$2) : ((-hi$2) | 0));
        return ((-absRLo) | 0)
      } else {
        return absRLo
      }
    }
  };
}
const $d_RTLong$ = new $TypeData().initClass({
  RTLong$: 0
}, false, "org.scalajs.linker.runtime.RuntimeLong$", {
  RTLong$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_RTLong$.prototype.$classData = $d_RTLong$;
let $n_RTLong$ = (void 0);
function $m_RTLong$() {
  if ((!$n_RTLong$)) {
    $n_RTLong$ = new $c_RTLong$()
  };
  return $n_RTLong$
}
const $p_s_Array$__slowcopy__O__I__O__I__I__V = (function($thiz, src, srcPos, dest, destPos, length) {
  let i = srcPos;
  let j = destPos;
  const srcUntil = ((srcPos + length) | 0);
  while ((i < srcUntil)) {
    $m_sr_ScalaRunTime$().array_update__O__I__O__V(dest, j, $m_sr_ScalaRunTime$().array_apply__O__I__O(src, i));
    i = ((1 + i) | 0);
    j = ((1 + j) | 0)
  }
});
class $c_s_Array$ extends $c_O {
  copy__O__I__O__I__I__V(src, srcPos, dest, destPos, length) {
    const srcClass = $objectGetClass(src);
    if ((srcClass.isArray__Z() && $objectGetClass(dest).isAssignableFrom__jl_Class__Z(srcClass))) {
      $systemArraycopy(src, srcPos, dest, destPos, length)
    } else {
      $p_s_Array$__slowcopy__O__I__O__I__I__V(this, src, srcPos, dest, destPos, length)
    }
  };
  equals__AO__AO__Z(xs, ys) {
    if ((xs === ys)) {
      return true
    };
    if ((xs.u.length !== ys.u.length)) {
      return false
    };
    const len = xs.u.length;
    let i = 0;
    while ((i < len)) {
      if ((!$m_sr_BoxesRunTime$().equals__O__O__Z(xs.u[i], ys.u[i]))) {
        return false
      };
      i = ((1 + i) | 0)
    };
    return true
  };
}
const $d_s_Array$ = new $TypeData().initClass({
  s_Array$: 0
}, false, "scala.Array$", {
  s_Array$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_Array$.prototype.$classData = $d_s_Array$;
let $n_s_Array$ = (void 0);
function $m_s_Array$() {
  if ((!$n_s_Array$)) {
    $n_s_Array$ = new $c_s_Array$()
  };
  return $n_s_Array$
}
class $c_s_LowPriorityImplicits extends $c_s_LowPriorityImplicits2 {
  wrapRefArray__AO__scm_ArraySeq$ofRef(xs) {
    if ((xs === null)) {
      return null
    } else if ((xs.u.length === 0)) {
      const this$3 = $m_scm_ArraySeq$();
      $m_s_reflect_ManifestFactory$ObjectManifest$();
      return this$3.scm_ArraySeq$__f_EmptyArraySeq
    } else {
      return new $c_scm_ArraySeq$ofRef(xs)
    }
  };
  wrapIntArray__AI__scm_ArraySeq$ofInt(xs) {
    return ((xs !== null) ? new $c_scm_ArraySeq$ofInt(xs) : null)
  };
}
class $c_T2$ extends $c_O {
  toString__T() {
    return "Tuple2"
  };
}
const $d_T2$ = new $TypeData().initClass({
  T2$: 0
}, false, "scala.Tuple2$", {
  T2$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_T2$.prototype.$classData = $d_T2$;
let $n_T2$ = (void 0);
function $m_T2$() {
  if ((!$n_T2$)) {
    $n_T2$ = new $c_T2$()
  };
  return $n_T2$
}
class $c_sci_$colon$colon$ extends $c_O {
  toString__T() {
    return "::"
  };
}
const $d_sci_$colon$colon$ = new $TypeData().initClass({
  sci_$colon$colon$: 0
}, false, "scala.collection.immutable.$colon$colon$", {
  sci_$colon$colon$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_sci_$colon$colon$.prototype.$classData = $d_sci_$colon$colon$;
let $n_sci_$colon$colon$ = (void 0);
function $m_sci_$colon$colon$() {
  if ((!$n_sci_$colon$colon$)) {
    $n_sci_$colon$colon$ = new $c_sci_$colon$colon$()
  };
  return $n_sci_$colon$colon$
}
class $c_sci_HashSetBuilder$$anon$1 extends $c_sci_ChampBaseIterator {
  constructor(outer, x2$1) {
    super();
    $ct_sci_ChampBaseIterator__sci_Node__(this, x2$1.sci_HashSet__f_rootNode);
    while (this.hasNext__Z()) {
      const originalHash = this.sci_ChampBaseIterator__f_currentValueNode.getHash__I__I(this.sci_ChampBaseIterator__f_currentValueCursor);
      outer.update__sci_SetNode__O__I__I__I__V(outer.sci_HashSetBuilder__f_scala$collection$immutable$HashSetBuilder$$rootNode, this.sci_ChampBaseIterator__f_currentValueNode.getPayload__I__O(this.sci_ChampBaseIterator__f_currentValueCursor), originalHash, $m_sc_Hashing$().improve__I__I(originalHash), 0);
      this.sci_ChampBaseIterator__f_currentValueCursor = ((1 + this.sci_ChampBaseIterator__f_currentValueCursor) | 0)
    }
  };
}
const $d_sci_HashSetBuilder$$anon$1 = new $TypeData().initClass({
  sci_HashSetBuilder$$anon$1: 0
}, false, "scala.collection.immutable.HashSetBuilder$$anon$1", {
  sci_HashSetBuilder$$anon$1: 1,
  sci_ChampBaseIterator: 1,
  O: 1
});
$c_sci_HashSetBuilder$$anon$1.prototype.$classData = $d_sci_HashSetBuilder$$anon$1;
function $is_sci_LazyList$State(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_LazyList$State)))
}
function $isArrayOf_sci_LazyList$State(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_LazyList$State)))
}
class $c_sci_List$$anon$1 extends $c_O {
  toString__T() {
    return "<function1>"
  };
  apply__O__O(x) {
    return this
  };
}
const $d_sci_List$$anon$1 = new $TypeData().initClass({
  sci_List$$anon$1: 0
}, false, "scala.collection.immutable.List$$anon$1", {
  sci_List$$anon$1: 1,
  O: 1,
  F1: 1
});
$c_sci_List$$anon$1.prototype.$classData = $d_sci_List$$anon$1;
class $c_sci_Range$ extends $c_O {
}
const $d_sci_Range$ = new $TypeData().initClass({
  sci_Range$: 0
}, false, "scala.collection.immutable.Range$", {
  sci_Range$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Range$.prototype.$classData = $d_sci_Range$;
let $n_sci_Range$ = (void 0);
function $m_sci_Range$() {
  if ((!$n_sci_Range$)) {
    $n_sci_Range$ = new $c_sci_Range$()
  };
  return $n_sci_Range$
}
class $c_sci_SetNode extends $c_sci_Node {
}
function $isArrayOf_sci_SetNode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_SetNode)))
}
const $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable = (function($thiz, xs) {
  const it = xs.iterator__sc_Iterator();
  while (it.hasNext__Z()) {
    $thiz.addOne__O__scm_Growable(it.next__O())
  };
  return $thiz
});
class $c_scm_StringBuilder$ extends $c_O {
}
const $d_scm_StringBuilder$ = new $TypeData().initClass({
  scm_StringBuilder$: 0
}, false, "scala.collection.mutable.StringBuilder$", {
  scm_StringBuilder$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_scm_StringBuilder$.prototype.$classData = $d_scm_StringBuilder$;
let $n_scm_StringBuilder$ = (void 0);
function $m_scm_StringBuilder$() {
  if ((!$n_scm_StringBuilder$)) {
    $n_scm_StringBuilder$ = new $c_scm_StringBuilder$()
  };
  return $n_scm_StringBuilder$
}
class $c_s_math_Fractional$ extends $c_O {
}
const $d_s_math_Fractional$ = new $TypeData().initClass({
  s_math_Fractional$: 0
}, false, "scala.math.Fractional$", {
  s_math_Fractional$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_math_Fractional$.prototype.$classData = $d_s_math_Fractional$;
let $n_s_math_Fractional$ = (void 0);
function $m_s_math_Fractional$() {
  if ((!$n_s_math_Fractional$)) {
    $n_s_math_Fractional$ = new $c_s_math_Fractional$()
  };
  return $n_s_math_Fractional$
}
class $c_s_math_Integral$ extends $c_O {
}
const $d_s_math_Integral$ = new $TypeData().initClass({
  s_math_Integral$: 0
}, false, "scala.math.Integral$", {
  s_math_Integral$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_math_Integral$.prototype.$classData = $d_s_math_Integral$;
let $n_s_math_Integral$ = (void 0);
function $m_s_math_Integral$() {
  if ((!$n_s_math_Integral$)) {
    $n_s_math_Integral$ = new $c_s_math_Integral$()
  };
  return $n_s_math_Integral$
}
class $c_s_math_Numeric$ extends $c_O {
}
const $d_s_math_Numeric$ = new $TypeData().initClass({
  s_math_Numeric$: 0
}, false, "scala.math.Numeric$", {
  s_math_Numeric$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_math_Numeric$.prototype.$classData = $d_s_math_Numeric$;
let $n_s_math_Numeric$ = (void 0);
function $m_s_math_Numeric$() {
  if ((!$n_s_math_Numeric$)) {
    $n_s_math_Numeric$ = new $c_s_math_Numeric$()
  };
  return $n_s_math_Numeric$
}
class $c_s_package$$anon$1 extends $c_O {
  toString__T() {
    return "object AnyRef"
  };
}
const $d_s_package$$anon$1 = new $TypeData().initClass({
  s_package$$anon$1: 0
}, false, "scala.package$$anon$1", {
  s_package$$anon$1: 1,
  O: 1,
  s_Specializable: 1
});
$c_s_package$$anon$1.prototype.$classData = $d_s_package$$anon$1;
class $c_s_reflect_ClassTag$ extends $c_O {
  apply__jl_Class__s_reflect_ClassTag(runtimeClass1) {
    return ((runtimeClass1 === $d_B.getClassOf()) ? $m_s_reflect_ManifestFactory$ByteManifest$() : ((runtimeClass1 === $d_S.getClassOf()) ? $m_s_reflect_ManifestFactory$ShortManifest$() : ((runtimeClass1 === $d_C.getClassOf()) ? $m_s_reflect_ManifestFactory$CharManifest$() : ((runtimeClass1 === $d_I.getClassOf()) ? $m_s_reflect_ManifestFactory$IntManifest$() : ((runtimeClass1 === $d_J.getClassOf()) ? $m_s_reflect_ManifestFactory$LongManifest$() : ((runtimeClass1 === $d_F.getClassOf()) ? $m_s_reflect_ManifestFactory$FloatManifest$() : ((runtimeClass1 === $d_D.getClassOf()) ? $m_s_reflect_ManifestFactory$DoubleManifest$() : ((runtimeClass1 === $d_Z.getClassOf()) ? $m_s_reflect_ManifestFactory$BooleanManifest$() : ((runtimeClass1 === $d_V.getClassOf()) ? $m_s_reflect_ManifestFactory$UnitManifest$() : ((runtimeClass1 === $d_O.getClassOf()) ? $m_s_reflect_ManifestFactory$ObjectManifest$() : ((runtimeClass1 === $d_sr_Nothing$.getClassOf()) ? $m_s_reflect_ManifestFactory$NothingManifest$() : ((runtimeClass1 === $d_sr_Null$.getClassOf()) ? $m_s_reflect_ManifestFactory$NullManifest$() : new $c_s_reflect_ClassTag$GenericClassTag(runtimeClass1)))))))))))))
  };
}
const $d_s_reflect_ClassTag$ = new $TypeData().initClass({
  s_reflect_ClassTag$: 0
}, false, "scala.reflect.ClassTag$", {
  s_reflect_ClassTag$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_reflect_ClassTag$.prototype.$classData = $d_s_reflect_ClassTag$;
let $n_s_reflect_ClassTag$ = (void 0);
function $m_s_reflect_ClassTag$() {
  if ((!$n_s_reflect_ClassTag$)) {
    $n_s_reflect_ClassTag$ = new $c_s_reflect_ClassTag$()
  };
  return $n_s_reflect_ClassTag$
}
class $c_s_reflect_Manifest$ extends $c_O {
}
const $d_s_reflect_Manifest$ = new $TypeData().initClass({
  s_reflect_Manifest$: 0
}, false, "scala.reflect.Manifest$", {
  s_reflect_Manifest$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_reflect_Manifest$.prototype.$classData = $d_s_reflect_Manifest$;
let $n_s_reflect_Manifest$ = (void 0);
function $m_s_reflect_Manifest$() {
  if ((!$n_s_reflect_Manifest$)) {
    $n_s_reflect_Manifest$ = new $c_s_reflect_Manifest$()
  };
  return $n_s_reflect_Manifest$
}
class $c_sr_AbstractFunction0 extends $c_O {
  toString__T() {
    return "<function0>"
  };
}
class $c_sr_AbstractFunction1 extends $c_O {
  toString__T() {
    return "<function1>"
  };
}
class $c_sr_IntRef extends $c_O {
  constructor(elem) {
    super();
    this.sr_IntRef__f_elem = 0;
    this.sr_IntRef__f_elem = elem
  };
  toString__T() {
    const i = this.sr_IntRef__f_elem;
    return ("" + i)
  };
}
const $d_sr_IntRef = new $TypeData().initClass({
  sr_IntRef: 0
}, false, "scala.runtime.IntRef", {
  sr_IntRef: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_sr_IntRef.prototype.$classData = $d_sr_IntRef;
class $c_sr_ObjectRef extends $c_O {
  constructor(elem) {
    super();
    this.sr_ObjectRef__f_elem = null;
    this.sr_ObjectRef__f_elem = elem
  };
  toString__T() {
    const obj = this.sr_ObjectRef__f_elem;
    return ("" + obj)
  };
}
const $d_sr_ObjectRef = new $TypeData().initClass({
  sr_ObjectRef: 0
}, false, "scala.runtime.ObjectRef", {
  sr_ObjectRef: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_sr_ObjectRef.prototype.$classData = $d_sr_ObjectRef;
class $c_s_util_Either$ extends $c_O {
}
const $d_s_util_Either$ = new $TypeData().initClass({
  s_util_Either$: 0
}, false, "scala.util.Either$", {
  s_util_Either$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_util_Either$.prototype.$classData = $d_s_util_Either$;
let $n_s_util_Either$ = (void 0);
function $m_s_util_Either$() {
  if ((!$n_s_util_Either$)) {
    $n_s_util_Either$ = new $c_s_util_Either$()
  };
  return $n_s_util_Either$
}
class $c_s_util_Left$ extends $c_O {
  toString__T() {
    return "Left"
  };
}
const $d_s_util_Left$ = new $TypeData().initClass({
  s_util_Left$: 0
}, false, "scala.util.Left$", {
  s_util_Left$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_util_Left$.prototype.$classData = $d_s_util_Left$;
let $n_s_util_Left$ = (void 0);
function $m_s_util_Left$() {
  if ((!$n_s_util_Left$)) {
    $n_s_util_Left$ = new $c_s_util_Left$()
  };
  return $n_s_util_Left$
}
const $ct_s_util_Random__ju_Random__ = (function($thiz, self) {
  $thiz.s_util_Random__f_self = self;
  return $thiz
});
const $ct_s_util_Random__J__ = (function($thiz, seed) {
  $ct_s_util_Random__ju_Random__($thiz, new $c_ju_Random(seed));
  return $thiz
});
class $c_s_util_Random extends $c_O {
  constructor() {
    super();
    this.s_util_Random__f_self = null
  };
}
const $d_s_util_Random = new $TypeData().initClass({
  s_util_Random: 0
}, false, "scala.util.Random", {
  s_util_Random: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_util_Random.prototype.$classData = $d_s_util_Random;
class $c_s_util_Right$ extends $c_O {
  toString__T() {
    return "Right"
  };
}
const $d_s_util_Right$ = new $TypeData().initClass({
  s_util_Right$: 0
}, false, "scala.util.Right$", {
  s_util_Right$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_util_Right$.prototype.$classData = $d_s_util_Right$;
let $n_s_util_Right$ = (void 0);
function $m_s_util_Right$() {
  if ((!$n_s_util_Right$)) {
    $n_s_util_Right$ = new $c_s_util_Right$()
  };
  return $n_s_util_Right$
}
class $c_s_util_hashing_MurmurHash3$ extends $c_s_util_hashing_MurmurHash3 {
  constructor() {
    super();
    this.s_util_hashing_MurmurHash3$__f_seqSeed = 0;
    this.s_util_hashing_MurmurHash3$__f_mapSeed = 0;
    this.s_util_hashing_MurmurHash3$__f_setSeed = 0;
    $n_s_util_hashing_MurmurHash3$ = this;
    this.s_util_hashing_MurmurHash3$__f_seqSeed = $f_T__hashCode__I("Seq");
    this.s_util_hashing_MurmurHash3$__f_mapSeed = $f_T__hashCode__I("Map");
    this.s_util_hashing_MurmurHash3$__f_setSeed = $f_T__hashCode__I("Set")
  };
  seqHash__sc_Seq__I(xs) {
    if ($is_sc_IndexedSeq(xs)) {
      const x2 = xs;
      return this.indexedSeqHash__sc_IndexedSeq__I__I(x2, this.s_util_hashing_MurmurHash3$__f_seqSeed)
    } else if ((xs instanceof $c_sci_List)) {
      const x3 = xs;
      return this.listHash__sci_List__I__I(x3, this.s_util_hashing_MurmurHash3$__f_seqSeed)
    } else {
      return this.orderedHash__sc_IterableOnce__I__I(xs, this.s_util_hashing_MurmurHash3$__f_seqSeed)
    }
  };
}
const $d_s_util_hashing_MurmurHash3$ = new $TypeData().initClass({
  s_util_hashing_MurmurHash3$: 0
}, false, "scala.util.hashing.MurmurHash3$", {
  s_util_hashing_MurmurHash3$: 1,
  s_util_hashing_MurmurHash3: 1,
  O: 1
});
$c_s_util_hashing_MurmurHash3$.prototype.$classData = $d_s_util_hashing_MurmurHash3$;
let $n_s_util_hashing_MurmurHash3$ = (void 0);
function $m_s_util_hashing_MurmurHash3$() {
  if ((!$n_s_util_hashing_MurmurHash3$)) {
    $n_s_util_hashing_MurmurHash3$ = new $c_s_util_hashing_MurmurHash3$()
  };
  return $n_s_util_hashing_MurmurHash3$
}
const $f_jl_Boolean__equals__O__Z = (function($thiz, that) {
  return ($thiz === that)
});
const $f_jl_Boolean__hashCode__I = (function($thiz) {
  return ((!(!$thiz)) ? 1231 : 1237)
});
const $f_jl_Boolean__toString__T = (function($thiz) {
  const b = (!(!$thiz));
  return ("" + b)
});
const $d_jl_Boolean = new $TypeData().initClass({
  jl_Boolean: 0
}, false, "java.lang.Boolean", {
  jl_Boolean: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), ((x) => ((typeof x) === "boolean")));
const $f_jl_Character__hashCode__I = (function($thiz) {
  return $uC($thiz)
});
const $f_jl_Character__equals__O__Z = (function($thiz, that) {
  if ((that instanceof $Char)) {
    const this$1 = that;
    return ($uC($thiz) === $uC(this$1))
  } else {
    return false
  }
});
const $f_jl_Character__toString__T = (function($thiz) {
  const c = $uC($thiz);
  return String.fromCharCode(c)
});
function $isArrayOf_jl_Character(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Character)))
}
const $d_jl_Character = new $TypeData().initClass({
  jl_Character: 0
}, false, "java.lang.Character", {
  jl_Character: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), ((x) => (x instanceof $Char)));
const $ct_jl_Exception__T__ = (function($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
});
class $c_jl_Exception extends $c_jl_Throwable {
}
const $d_jl_Exception = new $TypeData().initClass({
  jl_Exception: 0
}, false, "java.lang.Exception", {
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_Exception.prototype.$classData = $d_jl_Exception;
class $c_s_Predef$ extends $c_s_LowPriorityImplicits {
  constructor() {
    super();
    this.s_Predef$__f_Map = null;
    this.s_Predef$__f_Set = null;
    this.s_Predef$__f_$minus$greater = null;
    this.s_Predef$__f_Manifest = null;
    this.s_Predef$__f_NoManifest = null;
    $n_s_Predef$ = this;
    $m_s_package$();
    $m_sci_List$();
    this.s_Predef$__f_Map = $m_sci_Map$();
    this.s_Predef$__f_Set = $m_sci_Set$();
    this.s_Predef$__f_$minus$greater = $m_T2$();
    this.s_Predef$__f_Manifest = $m_s_reflect_Manifest$();
    this.s_Predef$__f_NoManifest = $m_s_reflect_NoManifest$()
  };
  require__Z__V(requirement) {
    if ((!requirement)) {
      throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "requirement failed")
    }
  };
}
const $d_s_Predef$ = new $TypeData().initClass({
  s_Predef$: 0
}, false, "scala.Predef$", {
  s_Predef$: 1,
  s_LowPriorityImplicits: 1,
  s_LowPriorityImplicits2: 1,
  O: 1
});
$c_s_Predef$.prototype.$classData = $d_s_Predef$;
let $n_s_Predef$ = (void 0);
function $m_s_Predef$() {
  if ((!$n_s_Predef$)) {
    $n_s_Predef$ = new $c_s_Predef$()
  };
  return $n_s_Predef$
}
const $f_s_Product2__productElement__I__O = (function($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.T2__f__1;
      break
    }
    case 1: {
      return $thiz.T2__f__2;
      break
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 1)"))
    }
  }
});
const $ct_sc_ClassTagIterableFactory$AnyIterableDelegate__sc_ClassTagIterableFactory__ = (function($thiz, delegate) {
  $thiz.sc_ClassTagIterableFactory$AnyIterableDelegate__f_delegate = delegate;
  return $thiz
});
class $c_sc_ClassTagIterableFactory$AnyIterableDelegate extends $c_O {
  constructor() {
    super();
    this.sc_ClassTagIterableFactory$AnyIterableDelegate__f_delegate = null
  };
  from__sc_IterableOnce__O(it) {
    const this$3 = this.sc_ClassTagIterableFactory$AnyIterableDelegate__f_delegate;
    $m_s_reflect_ManifestFactory$AnyManifest$();
    const n = it.knownSize__I();
    if ((n > (-1))) {
      const elements = $newArrayObject($d_O.getArrayOf(), [n]);
      const iterator = it.iterator__sc_Iterator();
      let i = 0;
      while ((i < n)) {
        elements.u[i] = iterator.next__O();
        i = ((1 + i) | 0)
      };
      return this$3.make__O__scm_ArraySeq(elements)
    } else {
      const this$5 = $m_scm_ArrayBuffer$().from__sc_IterableOnce__scm_ArrayBuffer(it);
      let $$x1;
      if ((this$5.scm_ArrayBuffer__f_size0 >= 0)) {
        const len = this$5.scm_ArrayBuffer__f_size0;
        const destination = $newArrayObject($d_O.getArrayOf(), [len]);
        this$5.copyToArray__O__I__I__I(destination, 0, this$5.scm_ArrayBuffer__f_size0);
        $$x1 = destination
      } else {
        let capacity = 0;
        let size = 0;
        let jsElems = null;
        capacity = 0;
        size = 0;
        jsElems = [];
        const this$8 = new $c_scm_ArrayBufferView(this$5.scm_ArrayBuffer__f_array, this$5.scm_ArrayBuffer__f_size0);
        const it$1 = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$8);
        while (it$1.hasNext__Z()) {
          const elem = it$1.next__O();
          const unboxedElem = ((elem === null) ? null : elem);
          jsElems.push(unboxedElem)
        };
        $$x1 = $makeNativeArrayWrapper($d_O.getArrayOf(), jsElems)
      };
      return this$3.make__O__scm_ArraySeq($$x1)
    }
  };
}
const $ct_sc_IterableFactory$Delegate__sc_IterableFactory__ = (function($thiz, delegate) {
  $thiz.sc_IterableFactory$Delegate__f_delegate = delegate;
  return $thiz
});
class $c_sc_IterableFactory$Delegate extends $c_O {
  constructor() {
    super();
    this.sc_IterableFactory$Delegate__f_delegate = null
  };
  from__sc_IterableOnce__O(it) {
    return this.sc_IterableFactory$Delegate__f_delegate.from__sc_IterableOnce__O(it)
  };
}
const $f_sc_IterableOps__sizeCompare__I__I = (function($thiz, otherSize) {
  if ((otherSize < 0)) {
    return 1
  } else {
    const known = $thiz.knownSize__I();
    if ((known >= 0)) {
      return ((known === otherSize) ? 0 : ((known < otherSize) ? (-1) : 1))
    } else {
      let i = 0;
      const it = $thiz.iterator__sc_Iterator();
      while (it.hasNext__Z()) {
        if ((i === otherSize)) {
          return (it.hasNext__Z() ? 1 : 0)
        };
        it.next__O();
        i = ((1 + i) | 0)
      };
      return ((i - otherSize) | 0)
    }
  }
});
const $f_sc_IterableOps__drop__I__O = (function($thiz, n) {
  return $thiz.fromSpecific__sc_IterableOnce__O($ct_sc_View$Drop__sc_IterableOps__I__(new $c_sc_View$Drop(), $thiz, n))
});
const $f_sc_IterableOps__tail__O = (function($thiz) {
  if ($thiz.isEmpty__Z()) {
    throw $ct_jl_UnsupportedOperationException__(new $c_jl_UnsupportedOperationException())
  };
  return $thiz.drop__I__O(1)
});
function $is_sc_IterableOps(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_IterableOps)))
}
function $isArrayOf_sc_IterableOps(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_IterableOps)))
}
const $f_sc_Iterator__indexWhere__F1__I__I = (function($thiz, p, from) {
  let i = ((from > 0) ? from : 0);
  $thiz.drop__I__sc_Iterator(from);
  while ($thiz.hasNext__Z()) {
    if ((!(!p.apply__O__O($thiz.next__O())))) {
      return i
    };
    i = ((1 + i) | 0)
  };
  return (-1)
});
const $f_sc_Iterator__drop__I__sc_Iterator = (function($thiz, n) {
  let i = 0;
  while (((i < n) && $thiz.hasNext__Z())) {
    $thiz.next__O();
    i = ((1 + i) | 0)
  };
  return $thiz
});
const $f_sc_Iterator__sameElements__sc_IterableOnce__Z = (function($thiz, that) {
  const those = that.iterator__sc_Iterator();
  while (($thiz.hasNext__Z() && those.hasNext__Z())) {
    if ((!$m_sr_BoxesRunTime$().equals__O__O__Z($thiz.next__O(), those.next__O()))) {
      return false
    }
  };
  return ($thiz.hasNext__Z() === those.hasNext__Z())
});
function $is_sc_Iterator(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_Iterator)))
}
function $isArrayOf_sc_Iterator(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_Iterator)))
}
class $c_sc_Iterator$ extends $c_O {
  constructor() {
    super();
    this.sc_Iterator$__f_scala$collection$Iterator$$_empty = null;
    $n_sc_Iterator$ = this;
    this.sc_Iterator$__f_scala$collection$Iterator$$_empty = new $c_sc_Iterator$$anon$19()
  };
  from__sc_IterableOnce__O(source) {
    return source.iterator__sc_Iterator()
  };
}
const $d_sc_Iterator$ = new $TypeData().initClass({
  sc_Iterator$: 0
}, false, "scala.collection.Iterator$", {
  sc_Iterator$: 1,
  O: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sc_Iterator$.prototype.$classData = $d_sc_Iterator$;
let $n_sc_Iterator$ = (void 0);
function $m_sc_Iterator$() {
  if ((!$n_sc_Iterator$)) {
    $n_sc_Iterator$ = new $c_sc_Iterator$()
  };
  return $n_sc_Iterator$
}
class $c_sc_View$ extends $c_O {
  from__sc_IterableOnce__sc_View(it) {
    if ($is_sc_View(it)) {
      const x2 = it;
      return x2
    } else if ($is_sc_Iterable(it)) {
      const x3 = it;
      const it$1 = new $c_sjsr_AnonFunction0(((this$1, x3$1) => (() => x3$1.iterator__sc_Iterator()))(this, x3));
      return new $c_sc_View$$anon$1(it$1)
    } else {
      const this$3 = $m_sci_LazyList$().from__sc_IterableOnce__sci_LazyList(it);
      return $ct_sc_SeqView$Id__sc_SeqOps__(new $c_sc_SeqView$Id(), this$3)
    }
  };
  from__sc_IterableOnce__O(source) {
    return this.from__sc_IterableOnce__sc_View(source)
  };
}
const $d_sc_View$ = new $TypeData().initClass({
  sc_View$: 0
}, false, "scala.collection.View$", {
  sc_View$: 1,
  O: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sc_View$.prototype.$classData = $d_sc_View$;
let $n_sc_View$ = (void 0);
function $m_sc_View$() {
  if ((!$n_sc_View$)) {
    $n_sc_View$ = new $c_sc_View$()
  };
  return $n_sc_View$
}
class $c_sci_BitmapIndexedSetNode extends $c_sci_SetNode {
  constructor(dataMap, nodeMap, content, originalHashes, size, cachedJavaKeySetHashCode) {
    super();
    this.sci_BitmapIndexedSetNode__f_dataMap = 0;
    this.sci_BitmapIndexedSetNode__f_nodeMap = 0;
    this.sci_BitmapIndexedSetNode__f_content = null;
    this.sci_BitmapIndexedSetNode__f_originalHashes = null;
    this.sci_BitmapIndexedSetNode__f_size = 0;
    this.sci_BitmapIndexedSetNode__f_cachedJavaKeySetHashCode = 0;
    this.sci_BitmapIndexedSetNode__f_dataMap = dataMap;
    this.sci_BitmapIndexedSetNode__f_nodeMap = nodeMap;
    this.sci_BitmapIndexedSetNode__f_content = content;
    this.sci_BitmapIndexedSetNode__f_originalHashes = originalHashes;
    this.sci_BitmapIndexedSetNode__f_size = size;
    this.sci_BitmapIndexedSetNode__f_cachedJavaKeySetHashCode = cachedJavaKeySetHashCode
  };
  size__I() {
    return this.sci_BitmapIndexedSetNode__f_size
  };
  cachedJavaKeySetHashCode__I() {
    return this.sci_BitmapIndexedSetNode__f_cachedJavaKeySetHashCode
  };
  getPayload__I__O(index) {
    return this.sci_BitmapIndexedSetNode__f_content.u[index]
  };
  getHash__I__I(index) {
    return this.sci_BitmapIndexedSetNode__f_originalHashes.u[index]
  };
  getNode__I__sci_SetNode(index) {
    return this.sci_BitmapIndexedSetNode__f_content.u[(((((-1) + this.sci_BitmapIndexedSetNode__f_content.u.length) | 0) - index) | 0)]
  };
  contains__O__I__I__I__Z(element, originalHash, elementHash, shift) {
    const mask = $m_sci_Node$().maskFrom__I__I__I(elementHash, shift);
    const bitpos = $m_sci_Node$().bitposFrom__I__I(mask);
    if (((this.sci_BitmapIndexedSetNode__f_dataMap & bitpos) !== 0)) {
      const index = $m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedSetNode__f_dataMap, mask, bitpos);
      return ((this.sci_BitmapIndexedSetNode__f_originalHashes.u[index] === originalHash) && $m_sr_BoxesRunTime$().equals__O__O__Z(element, this.getPayload__I__O(index)))
    };
    if (((this.sci_BitmapIndexedSetNode__f_nodeMap & bitpos) !== 0)) {
      const index$2 = $m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedSetNode__f_nodeMap, mask, bitpos);
      return this.getNode__I__sci_SetNode(index$2).contains__O__I__I__I__Z(element, originalHash, elementHash, ((5 + shift) | 0))
    };
    return false
  };
  updated__O__I__I__I__sci_BitmapIndexedSetNode(element, originalHash, elementHash, shift) {
    const mask = $m_sci_Node$().maskFrom__I__I__I(elementHash, shift);
    const bitpos = $m_sci_Node$().bitposFrom__I__I(mask);
    if (((this.sci_BitmapIndexedSetNode__f_dataMap & bitpos) !== 0)) {
      const index = $m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedSetNode__f_dataMap, mask, bitpos);
      const element0 = this.getPayload__I__O(index);
      if (Object.is(element0, element)) {
        return this
      } else {
        const element0UnimprovedHash = this.getHash__I__I(index);
        const element0Hash = $m_sc_Hashing$().improve__I__I(element0UnimprovedHash);
        if (((originalHash === element0UnimprovedHash) && $m_sr_BoxesRunTime$().equals__O__O__Z(element0, element))) {
          return this
        } else {
          const subNodeNew = this.mergeTwoKeyValPairs__O__I__I__O__I__I__I__sci_SetNode(element0, element0UnimprovedHash, element0Hash, element, originalHash, elementHash, ((5 + shift) | 0));
          return this.copyAndMigrateFromInlineToNode__I__I__sci_SetNode__sci_BitmapIndexedSetNode(bitpos, element0Hash, subNodeNew)
        }
      }
    };
    if (((this.sci_BitmapIndexedSetNode__f_nodeMap & bitpos) !== 0)) {
      const index$2 = $m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedSetNode__f_nodeMap, mask, bitpos);
      const subNode = this.getNode__I__sci_SetNode(index$2);
      const subNodeNew$2 = subNode.updated__O__I__I__I__sci_SetNode(element, originalHash, elementHash, ((5 + shift) | 0));
      if ((subNode === subNodeNew$2)) {
        return this
      } else {
        return this.copyAndSetNode__I__sci_SetNode__sci_SetNode__sci_BitmapIndexedSetNode(bitpos, subNode, subNodeNew$2)
      }
    };
    return this.copyAndInsertValue__I__O__I__I__sci_BitmapIndexedSetNode(bitpos, element, originalHash, elementHash)
  };
  removed__O__I__I__I__sci_BitmapIndexedSetNode(element, originalHash, elementHash, shift) {
    const mask = $m_sci_Node$().maskFrom__I__I__I(elementHash, shift);
    const bitpos = $m_sci_Node$().bitposFrom__I__I(mask);
    if (((this.sci_BitmapIndexedSetNode__f_dataMap & bitpos) !== 0)) {
      const index = $m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedSetNode__f_dataMap, mask, bitpos);
      const element0 = this.getPayload__I__O(index);
      if ($m_sr_BoxesRunTime$().equals__O__O__Z(element0, element)) {
        const i = this.sci_BitmapIndexedSetNode__f_dataMap;
        let $$x1;
        if (($m_jl_Integer$().bitCount__I__I(i) === 2)) {
          const i$1 = this.sci_BitmapIndexedSetNode__f_nodeMap;
          $$x1 = ($m_jl_Integer$().bitCount__I__I(i$1) === 0)
        } else {
          $$x1 = false
        };
        if ($$x1) {
          const newDataMap = ((shift === 0) ? (this.sci_BitmapIndexedSetNode__f_dataMap ^ bitpos) : $m_sci_Node$().bitposFrom__I__I($m_sci_Node$().maskFrom__I__I__I(elementHash, 0)));
          if ((index === 0)) {
            const array = [this.getPayload__I__O(1)];
            const xs = new $c_sjsr_WrappedVarArgs(array);
            $m_s_reflect_ManifestFactory$AnyManifest$();
            const len = xs.length__I();
            const array$1 = $newArrayObject($d_O.getArrayOf(), [len]);
            const this$7 = new $c_sc_IndexedSeqView$Id(xs);
            const iterator = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$7);
            let i$2 = 0;
            while (iterator.hasNext__Z()) {
              array$1.u[i$2] = iterator.next__O();
              i$2 = ((1 + i$2) | 0)
            };
            return new $c_sci_BitmapIndexedSetNode(newDataMap, 0, array$1, $makeNativeArrayWrapper($d_I.getArrayOf(), [this.sci_BitmapIndexedSetNode__f_originalHashes.u[1]]), (((-1) + this.sci_BitmapIndexedSetNode__f_size) | 0), $m_sc_Hashing$().improve__I__I(this.sci_BitmapIndexedSetNode__f_originalHashes.u[1]))
          } else {
            const array$2 = [this.getPayload__I__O(0)];
            const xs$1 = new $c_sjsr_WrappedVarArgs(array$2);
            $m_s_reflect_ManifestFactory$AnyManifest$();
            const len$1 = xs$1.length__I();
            const array$3 = $newArrayObject($d_O.getArrayOf(), [len$1]);
            const this$14 = new $c_sc_IndexedSeqView$Id(xs$1);
            const iterator$1 = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$14);
            let i$3 = 0;
            while (iterator$1.hasNext__Z()) {
              array$3.u[i$3] = iterator$1.next__O();
              i$3 = ((1 + i$3) | 0)
            };
            return new $c_sci_BitmapIndexedSetNode(newDataMap, 0, array$3, $makeNativeArrayWrapper($d_I.getArrayOf(), [this.sci_BitmapIndexedSetNode__f_originalHashes.u[0]]), (((-1) + this.sci_BitmapIndexedSetNode__f_size) | 0), $m_sc_Hashing$().improve__I__I(this.sci_BitmapIndexedSetNode__f_originalHashes.u[0]))
          }
        } else {
          return this.copyAndRemoveValue__I__I__sci_BitmapIndexedSetNode(bitpos, elementHash)
        }
      } else {
        return this
      }
    };
    if (((this.sci_BitmapIndexedSetNode__f_nodeMap & bitpos) !== 0)) {
      const index$2 = $m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedSetNode__f_nodeMap, mask, bitpos);
      const subNode = this.getNode__I__sci_SetNode(index$2);
      const subNodeNew = subNode.removed__O__I__I__I__sci_SetNode(element, originalHash, elementHash, ((5 + shift) | 0));
      if ((subNodeNew === subNode)) {
        return this
      };
      const subNodeNewSize = subNodeNew.size__I();
      if ((subNodeNewSize === 1)) {
        if ((this.sci_BitmapIndexedSetNode__f_size === subNode.size__I())) {
          return subNodeNew
        } else {
          return this.copyAndMigrateFromNodeToInline__I__I__sci_SetNode__sci_SetNode__sci_BitmapIndexedSetNode(bitpos, elementHash, subNode, subNodeNew)
        }
      } else if ((subNodeNewSize > 1)) {
        return this.copyAndSetNode__I__sci_SetNode__sci_SetNode__sci_BitmapIndexedSetNode(bitpos, subNode, subNodeNew)
      }
    };
    return this
  };
  mergeTwoKeyValPairs__O__I__I__O__I__I__I__sci_SetNode(key0, originalKeyHash0, keyHash0, key1, originalKeyHash1, keyHash1, shift) {
    if ((shift >= 32)) {
      const this$4 = $m_sci_Vector$();
      const array = [key0, key1];
      const elems = new $c_sjsr_WrappedVarArgs(array);
      return new $c_sci_HashCollisionSetNode(originalKeyHash0, keyHash0, this$4.from__sc_IterableOnce__sci_Vector(elems))
    } else {
      const mask0 = $m_sci_Node$().maskFrom__I__I__I(keyHash0, shift);
      const mask1 = $m_sci_Node$().maskFrom__I__I__I(keyHash1, shift);
      if ((mask0 !== mask1)) {
        const dataMap = ($m_sci_Node$().bitposFrom__I__I(mask0) | $m_sci_Node$().bitposFrom__I__I(mask1));
        const newCachedHashCode = ((keyHash0 + keyHash1) | 0);
        if ((mask0 < mask1)) {
          const array$1 = [key0, key1];
          const xs = new $c_sjsr_WrappedVarArgs(array$1);
          $m_s_reflect_ManifestFactory$AnyManifest$();
          const len = xs.length__I();
          const array$2 = $newArrayObject($d_O.getArrayOf(), [len]);
          const this$11 = new $c_sc_IndexedSeqView$Id(xs);
          const iterator = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$11);
          let i = 0;
          while (iterator.hasNext__Z()) {
            array$2.u[i] = iterator.next__O();
            i = ((1 + i) | 0)
          };
          return new $c_sci_BitmapIndexedSetNode(dataMap, 0, array$2, $makeNativeArrayWrapper($d_I.getArrayOf(), [originalKeyHash0, originalKeyHash1]), 2, newCachedHashCode)
        } else {
          const array$3 = [key1, key0];
          const xs$1 = new $c_sjsr_WrappedVarArgs(array$3);
          $m_s_reflect_ManifestFactory$AnyManifest$();
          const len$1 = xs$1.length__I();
          const array$4 = $newArrayObject($d_O.getArrayOf(), [len$1]);
          const this$18 = new $c_sc_IndexedSeqView$Id(xs$1);
          const iterator$1 = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$18);
          let i$1 = 0;
          while (iterator$1.hasNext__Z()) {
            array$4.u[i$1] = iterator$1.next__O();
            i$1 = ((1 + i$1) | 0)
          };
          return new $c_sci_BitmapIndexedSetNode(dataMap, 0, array$4, $makeNativeArrayWrapper($d_I.getArrayOf(), [originalKeyHash1, originalKeyHash0]), 2, newCachedHashCode)
        }
      } else {
        const nodeMap = $m_sci_Node$().bitposFrom__I__I(mask0);
        const node = this.mergeTwoKeyValPairs__O__I__I__O__I__I__I__sci_SetNode(key0, originalKeyHash0, keyHash0, key1, originalKeyHash1, keyHash1, ((5 + shift) | 0));
        const array$5 = [node];
        const xs$2 = new $c_sjsr_WrappedVarArgs(array$5);
        $m_s_reflect_ManifestFactory$AnyManifest$();
        const len$2 = xs$2.length__I();
        const array$6 = $newArrayObject($d_O.getArrayOf(), [len$2]);
        const this$25 = new $c_sc_IndexedSeqView$Id(xs$2);
        const iterator$2 = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$25);
        let i$2 = 0;
        while (iterator$2.hasNext__Z()) {
          array$6.u[i$2] = iterator$2.next__O();
          i$2 = ((1 + i$2) | 0)
        };
        return new $c_sci_BitmapIndexedSetNode(0, nodeMap, array$6, $m_s_Array$EmptyArrays$().s_Array$EmptyArrays$__f_emptyIntArray, node.size__I(), node.cachedJavaKeySetHashCode__I())
      }
    }
  };
  hasPayload__Z() {
    return (this.sci_BitmapIndexedSetNode__f_dataMap !== 0)
  };
  payloadArity__I() {
    const i = this.sci_BitmapIndexedSetNode__f_dataMap;
    return $m_jl_Integer$().bitCount__I__I(i)
  };
  hasNodes__Z() {
    return (this.sci_BitmapIndexedSetNode__f_nodeMap !== 0)
  };
  nodeArity__I() {
    const i = this.sci_BitmapIndexedSetNode__f_nodeMap;
    return $m_jl_Integer$().bitCount__I__I(i)
  };
  dataIndex__I__I(bitpos) {
    const i = (this.sci_BitmapIndexedSetNode__f_dataMap & (((-1) + bitpos) | 0));
    return $m_jl_Integer$().bitCount__I__I(i)
  };
  nodeIndex__I__I(bitpos) {
    const i = (this.sci_BitmapIndexedSetNode__f_nodeMap & (((-1) + bitpos) | 0));
    return $m_jl_Integer$().bitCount__I__I(i)
  };
  copyAndSetNode__I__sci_SetNode__sci_SetNode__sci_BitmapIndexedSetNode(bitpos, oldNode, newNode) {
    const idx = (((((-1) + this.sci_BitmapIndexedSetNode__f_content.u.length) | 0) - this.nodeIndex__I__I(bitpos)) | 0);
    const src = this.sci_BitmapIndexedSetNode__f_content;
    const dst = $newArrayObject($d_O.getArrayOf(), [src.u.length]);
    const length = src.u.length;
    $systemArraycopy(src, 0, dst, 0, length);
    dst.u[idx] = newNode;
    return new $c_sci_BitmapIndexedSetNode(this.sci_BitmapIndexedSetNode__f_dataMap, this.sci_BitmapIndexedSetNode__f_nodeMap, dst, this.sci_BitmapIndexedSetNode__f_originalHashes, ((((this.sci_BitmapIndexedSetNode__f_size - oldNode.size__I()) | 0) + newNode.size__I()) | 0), ((((this.sci_BitmapIndexedSetNode__f_cachedJavaKeySetHashCode - oldNode.cachedJavaKeySetHashCode__I()) | 0) + newNode.cachedJavaKeySetHashCode__I()) | 0))
  };
  copyAndInsertValue__I__O__I__I__sci_BitmapIndexedSetNode(bitpos, key, originalHash, elementHash) {
    const dataIx = this.dataIndex__I__I(bitpos);
    const src = this.sci_BitmapIndexedSetNode__f_content;
    const dst = $newArrayObject($d_O.getArrayOf(), [((1 + src.u.length) | 0)]);
    $systemArraycopy(src, 0, dst, 0, dataIx);
    dst.u[dataIx] = key;
    const destPos = ((1 + dataIx) | 0);
    const length = ((src.u.length - dataIx) | 0);
    $systemArraycopy(src, dataIx, dst, destPos, length);
    const dstHashes = this.insertElement__AI__I__I__AI(this.sci_BitmapIndexedSetNode__f_originalHashes, dataIx, originalHash);
    return new $c_sci_BitmapIndexedSetNode((this.sci_BitmapIndexedSetNode__f_dataMap | bitpos), this.sci_BitmapIndexedSetNode__f_nodeMap, dst, dstHashes, ((1 + this.sci_BitmapIndexedSetNode__f_size) | 0), ((this.sci_BitmapIndexedSetNode__f_cachedJavaKeySetHashCode + elementHash) | 0))
  };
  copyAndRemoveValue__I__I__sci_BitmapIndexedSetNode(bitpos, elementHash) {
    const dataIx = this.dataIndex__I__I(bitpos);
    const src = this.sci_BitmapIndexedSetNode__f_content;
    const dst = $newArrayObject($d_O.getArrayOf(), [(((-1) + src.u.length) | 0)]);
    $systemArraycopy(src, 0, dst, 0, dataIx);
    const srcPos = ((1 + dataIx) | 0);
    const length = (((-1) + ((src.u.length - dataIx) | 0)) | 0);
    $systemArraycopy(src, srcPos, dst, dataIx, length);
    const dstHashes = this.removeElement__AI__I__AI(this.sci_BitmapIndexedSetNode__f_originalHashes, dataIx);
    return new $c_sci_BitmapIndexedSetNode((this.sci_BitmapIndexedSetNode__f_dataMap ^ bitpos), this.sci_BitmapIndexedSetNode__f_nodeMap, dst, dstHashes, (((-1) + this.sci_BitmapIndexedSetNode__f_size) | 0), ((this.sci_BitmapIndexedSetNode__f_cachedJavaKeySetHashCode - elementHash) | 0))
  };
  copyAndMigrateFromInlineToNode__I__I__sci_SetNode__sci_BitmapIndexedSetNode(bitpos, elementHash, node) {
    const dataIx = this.dataIndex__I__I(bitpos);
    const idxNew = (((((-1) + this.sci_BitmapIndexedSetNode__f_content.u.length) | 0) - this.nodeIndex__I__I(bitpos)) | 0);
    const src = this.sci_BitmapIndexedSetNode__f_content;
    const dst = $newArrayObject($d_O.getArrayOf(), [src.u.length]);
    $systemArraycopy(src, 0, dst, 0, dataIx);
    const srcPos = ((1 + dataIx) | 0);
    const length = ((idxNew - dataIx) | 0);
    $systemArraycopy(src, srcPos, dst, dataIx, length);
    dst.u[idxNew] = node;
    const srcPos$1 = ((1 + idxNew) | 0);
    const destPos = ((1 + idxNew) | 0);
    const length$1 = (((-1) + ((src.u.length - idxNew) | 0)) | 0);
    $systemArraycopy(src, srcPos$1, dst, destPos, length$1);
    const dstHashes = this.removeElement__AI__I__AI(this.sci_BitmapIndexedSetNode__f_originalHashes, dataIx);
    return new $c_sci_BitmapIndexedSetNode((this.sci_BitmapIndexedSetNode__f_dataMap ^ bitpos), (this.sci_BitmapIndexedSetNode__f_nodeMap | bitpos), dst, dstHashes, (((((-1) + this.sci_BitmapIndexedSetNode__f_size) | 0) + node.size__I()) | 0), ((((this.sci_BitmapIndexedSetNode__f_cachedJavaKeySetHashCode - elementHash) | 0) + node.cachedJavaKeySetHashCode__I()) | 0))
  };
  migrateFromInlineToNodeInPlace__I__I__sci_SetNode__sci_BitmapIndexedSetNode(bitpos, keyHash, node) {
    const dataIx = this.dataIndex__I__I(bitpos);
    const idxNew = (((((-1) + this.sci_BitmapIndexedSetNode__f_content.u.length) | 0) - this.nodeIndex__I__I(bitpos)) | 0);
    const src = this.sci_BitmapIndexedSetNode__f_content;
    const srcPos = ((1 + dataIx) | 0);
    const dest = this.sci_BitmapIndexedSetNode__f_content;
    const length = ((idxNew - dataIx) | 0);
    $systemArraycopy(src, srcPos, dest, dataIx, length);
    this.sci_BitmapIndexedSetNode__f_content.u[idxNew] = node;
    this.sci_BitmapIndexedSetNode__f_dataMap = (this.sci_BitmapIndexedSetNode__f_dataMap ^ bitpos);
    this.sci_BitmapIndexedSetNode__f_nodeMap = (this.sci_BitmapIndexedSetNode__f_nodeMap | bitpos);
    this.sci_BitmapIndexedSetNode__f_originalHashes = this.removeElement__AI__I__AI(this.sci_BitmapIndexedSetNode__f_originalHashes, dataIx);
    this.sci_BitmapIndexedSetNode__f_size = (((((-1) + this.sci_BitmapIndexedSetNode__f_size) | 0) + node.size__I()) | 0);
    this.sci_BitmapIndexedSetNode__f_cachedJavaKeySetHashCode = ((((this.sci_BitmapIndexedSetNode__f_cachedJavaKeySetHashCode - keyHash) | 0) + node.cachedJavaKeySetHashCode__I()) | 0);
    return this
  };
  copyAndMigrateFromNodeToInline__I__I__sci_SetNode__sci_SetNode__sci_BitmapIndexedSetNode(bitpos, elementHash, oldNode, node) {
    const idxOld = (((((-1) + this.sci_BitmapIndexedSetNode__f_content.u.length) | 0) - this.nodeIndex__I__I(bitpos)) | 0);
    const dataIxNew = this.dataIndex__I__I(bitpos);
    const src = this.sci_BitmapIndexedSetNode__f_content;
    const dst = $newArrayObject($d_O.getArrayOf(), [src.u.length]);
    $systemArraycopy(src, 0, dst, 0, dataIxNew);
    dst.u[dataIxNew] = node.getPayload__I__O(0);
    const destPos = ((1 + dataIxNew) | 0);
    const length = ((idxOld - dataIxNew) | 0);
    $systemArraycopy(src, dataIxNew, dst, destPos, length);
    const srcPos = ((1 + idxOld) | 0);
    const destPos$1 = ((1 + idxOld) | 0);
    const length$1 = (((-1) + ((src.u.length - idxOld) | 0)) | 0);
    $systemArraycopy(src, srcPos, dst, destPos$1, length$1);
    const hash = node.getHash__I__I(0);
    const dstHashes = this.insertElement__AI__I__I__AI(this.sci_BitmapIndexedSetNode__f_originalHashes, dataIxNew, hash);
    return new $c_sci_BitmapIndexedSetNode((this.sci_BitmapIndexedSetNode__f_dataMap | bitpos), (this.sci_BitmapIndexedSetNode__f_nodeMap ^ bitpos), dst, dstHashes, ((1 + ((this.sci_BitmapIndexedSetNode__f_size - oldNode.size__I()) | 0)) | 0), ((((this.sci_BitmapIndexedSetNode__f_cachedJavaKeySetHashCode - oldNode.cachedJavaKeySetHashCode__I()) | 0) + node.cachedJavaKeySetHashCode__I()) | 0))
  };
  equals__O__Z(that) {
    if ((that instanceof $c_sci_BitmapIndexedSetNode)) {
      const x2 = that;
      if ((this === x2)) {
        return true
      } else {
        let $$x1;
        if (((((this.sci_BitmapIndexedSetNode__f_cachedJavaKeySetHashCode === x2.sci_BitmapIndexedSetNode__f_cachedJavaKeySetHashCode) && (this.sci_BitmapIndexedSetNode__f_nodeMap === x2.sci_BitmapIndexedSetNode__f_nodeMap)) && (this.sci_BitmapIndexedSetNode__f_dataMap === x2.sci_BitmapIndexedSetNode__f_dataMap)) && (this.sci_BitmapIndexedSetNode__f_size === x2.sci_BitmapIndexedSetNode__f_size))) {
          const a = this.sci_BitmapIndexedSetNode__f_originalHashes;
          const b = x2.sci_BitmapIndexedSetNode__f_originalHashes;
          $$x1 = $m_ju_Arrays$().equals__AI__AI__Z(a, b)
        } else {
          $$x1 = false
        };
        if ($$x1) {
          const a1 = this.sci_BitmapIndexedSetNode__f_content;
          const a2 = x2.sci_BitmapIndexedSetNode__f_content;
          const length = this.sci_BitmapIndexedSetNode__f_content.u.length;
          if ((a1 === a2)) {
            return true
          } else {
            let isEqual = true;
            let i = 0;
            while ((isEqual && (i < length))) {
              isEqual = $m_sr_BoxesRunTime$().equals__O__O__Z(a1.u[i], a2.u[i]);
              i = ((1 + i) | 0)
            };
            return isEqual
          }
        } else {
          return false
        }
      }
    } else {
      return false
    }
  };
  hashCode__I() {
    throw $ct_jl_UnsupportedOperationException__T__(new $c_jl_UnsupportedOperationException(), "Trie nodes do not support hashing.")
  };
  copy__sci_BitmapIndexedSetNode() {
    const contentClone = this.sci_BitmapIndexedSetNode__f_content.clone__O();
    const contentLength = contentClone.u.length;
    const i = this.sci_BitmapIndexedSetNode__f_dataMap;
    let i$1 = $m_jl_Integer$().bitCount__I__I(i);
    while ((i$1 < contentLength)) {
      contentClone.u[i$1] = contentClone.u[i$1].copy__sci_SetNode();
      i$1 = ((1 + i$1) | 0)
    };
    return new $c_sci_BitmapIndexedSetNode(this.sci_BitmapIndexedSetNode__f_dataMap, this.sci_BitmapIndexedSetNode__f_nodeMap, contentClone, this.sci_BitmapIndexedSetNode__f_originalHashes.clone__O(), this.sci_BitmapIndexedSetNode__f_size, this.sci_BitmapIndexedSetNode__f_cachedJavaKeySetHashCode)
  };
  copy__sci_SetNode() {
    return this.copy__sci_BitmapIndexedSetNode()
  };
  removed__O__I__I__I__sci_SetNode(element, originalHash, hash, shift) {
    return this.removed__O__I__I__I__sci_BitmapIndexedSetNode(element, originalHash, hash, shift)
  };
  updated__O__I__I__I__sci_SetNode(element, originalHash, hash, shift) {
    return this.updated__O__I__I__I__sci_BitmapIndexedSetNode(element, originalHash, hash, shift)
  };
}
function $isArrayOf_sci_BitmapIndexedSetNode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_BitmapIndexedSetNode)))
}
const $d_sci_BitmapIndexedSetNode = new $TypeData().initClass({
  sci_BitmapIndexedSetNode: 0
}, false, "scala.collection.immutable.BitmapIndexedSetNode", {
  sci_BitmapIndexedSetNode: 1,
  sci_SetNode: 1,
  sci_Node: 1,
  O: 1
});
$c_sci_BitmapIndexedSetNode.prototype.$classData = $d_sci_BitmapIndexedSetNode;
class $c_sci_HashCollisionSetNode extends $c_sci_SetNode {
  constructor(originalHash, hash, content) {
    super();
    this.sci_HashCollisionSetNode__f_originalHash = 0;
    this.sci_HashCollisionSetNode__f_hash = 0;
    this.sci_HashCollisionSetNode__f_content = null;
    this.sci_HashCollisionSetNode__f_originalHash = originalHash;
    this.sci_HashCollisionSetNode__f_hash = hash;
    this.sci_HashCollisionSetNode__f_content = content;
    $m_s_Predef$().require__Z__V((this.sci_HashCollisionSetNode__f_content.length__I() >= 2))
  };
  contains__O__I__I__I__Z(element, originalHash, hash, shift) {
    if ((this.sci_HashCollisionSetNode__f_hash === hash)) {
      const this$1 = this.sci_HashCollisionSetNode__f_content;
      return $f_sc_SeqOps__contains__O__Z(this$1, element)
    } else {
      return false
    }
  };
  updated__O__I__I__I__sci_SetNode(element, originalHash, hash, shift) {
    return (this.contains__O__I__I__I__Z(element, originalHash, hash, shift) ? this : new $c_sci_HashCollisionSetNode(originalHash, hash, this.sci_HashCollisionSetNode__f_content.appended__O__sci_Vector(element)))
  };
  removed__O__I__I__I__sci_SetNode(element, originalHash, hash, shift) {
    if ((!this.contains__O__I__I__I__Z(element, originalHash, hash, shift))) {
      return this
    } else {
      const this$1 = this.sci_HashCollisionSetNode__f_content;
      $m_sci_Vector$();
      const b = new $c_sci_VectorBuilder();
      const it = this$1.iterator__sc_Iterator();
      while (it.hasNext__Z()) {
        const elem = it.next__O();
        if (($m_sr_BoxesRunTime$().equals__O__O__Z(elem, element) !== true)) {
          b.addOne__O__sci_VectorBuilder(elem)
        }
      };
      const updatedContent = b.result__sci_Vector();
      const x1 = updatedContent.length__I();
      if ((x1 === 1)) {
        const $$x1 = $m_sci_Node$().bitposFrom__I__I($m_sci_Node$().maskFrom__I__I__I(hash, 0));
        const array = [updatedContent.apply__I__O(0)];
        const xs = new $c_sjsr_WrappedVarArgs(array);
        $m_s_reflect_ManifestFactory$AnyManifest$();
        const len = xs.length__I();
        const array$1 = $newArrayObject($d_O.getArrayOf(), [len]);
        const this$9 = new $c_sc_IndexedSeqView$Id(xs);
        const iterator = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$9);
        let i = 0;
        while (iterator.hasNext__Z()) {
          array$1.u[i] = iterator.next__O();
          i = ((1 + i) | 0)
        };
        return new $c_sci_BitmapIndexedSetNode($$x1, 0, array$1, $makeNativeArrayWrapper($d_I.getArrayOf(), [originalHash]), 1, hash)
      } else {
        return new $c_sci_HashCollisionSetNode(originalHash, hash, updatedContent)
      }
    }
  };
  hasNodes__Z() {
    return false
  };
  nodeArity__I() {
    return 0
  };
  getNode__I__sci_SetNode(index) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), "No sub-nodes present in hash-collision leaf node.")
  };
  hasPayload__Z() {
    return true
  };
  payloadArity__I() {
    return this.sci_HashCollisionSetNode__f_content.length__I()
  };
  getPayload__I__O(index) {
    return this.sci_HashCollisionSetNode__f_content.apply__I__O(index)
  };
  getHash__I__I(index) {
    return this.sci_HashCollisionSetNode__f_originalHash
  };
  size__I() {
    return this.sci_HashCollisionSetNode__f_content.length__I()
  };
  cachedJavaKeySetHashCode__I() {
    return $imul(this.sci_HashCollisionSetNode__f_content.length__I(), this.sci_HashCollisionSetNode__f_hash)
  };
  equals__O__Z(that) {
    if ((that instanceof $c_sci_HashCollisionSetNode)) {
      const x2 = that;
      if ((this === x2)) {
        return true
      } else {
        let $$x1;
        if ((this.sci_HashCollisionSetNode__f_hash === x2.sci_HashCollisionSetNode__f_hash)) {
          const this$1 = this.sci_HashCollisionSetNode__f_content;
          const $$x2 = this$1.length__I();
          const this$2 = x2.sci_HashCollisionSetNode__f_content;
          $$x1 = ($$x2 === this$2.length__I())
        } else {
          $$x1 = false
        };
        if ($$x1) {
          const this$3 = this.sci_HashCollisionSetNode__f_content;
          const eta$0$1 = x2.sci_HashCollisionSetNode__f_content;
          let res = true;
          const it = this$3.iterator__sc_Iterator();
          while ((res && it.hasNext__Z())) {
            const arg1 = it.next__O();
            res = $f_sc_SeqOps__contains__O__Z(eta$0$1, arg1)
          };
          return res
        } else {
          return false
        }
      }
    } else {
      return false
    }
  };
  hashCode__I() {
    throw $ct_jl_UnsupportedOperationException__T__(new $c_jl_UnsupportedOperationException(), "Trie nodes do not support hashing.")
  };
  copy__sci_SetNode() {
    return new $c_sci_HashCollisionSetNode(this.sci_HashCollisionSetNode__f_originalHash, this.sci_HashCollisionSetNode__f_hash, this.sci_HashCollisionSetNode__f_content)
  };
}
function $isArrayOf_sci_HashCollisionSetNode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_HashCollisionSetNode)))
}
const $d_sci_HashCollisionSetNode = new $TypeData().initClass({
  sci_HashCollisionSetNode: 0
}, false, "scala.collection.immutable.HashCollisionSetNode", {
  sci_HashCollisionSetNode: 1,
  sci_SetNode: 1,
  sci_Node: 1,
  O: 1
});
$c_sci_HashCollisionSetNode.prototype.$classData = $d_sci_HashCollisionSetNode;
class $c_sci_HashSet$ extends $c_O {
  constructor() {
    super();
    this.sci_HashSet$__f_EmptySet = null;
    $n_sci_HashSet$ = this;
    const this$1 = $m_sci_SetNode$();
    this.sci_HashSet$__f_EmptySet = new $c_sci_HashSet(this$1.sci_SetNode$__f_EmptySetNode)
  };
  from__sc_IterableOnce__sci_HashSet(source) {
    if ((source instanceof $c_sci_HashSet)) {
      const x2 = source;
      return x2
    } else if ((source.knownSize__I() === 0)) {
      return this.sci_HashSet$__f_EmptySet
    } else {
      const this$1 = new $c_sci_HashSetBuilder();
      const this$2 = this$1.addAll__sc_IterableOnce__sci_HashSetBuilder(source);
      return this$2.result__sci_HashSet()
    }
  };
  from__sc_IterableOnce__O(source) {
    return this.from__sc_IterableOnce__sci_HashSet(source)
  };
}
const $d_sci_HashSet$ = new $TypeData().initClass({
  sci_HashSet$: 0
}, false, "scala.collection.immutable.HashSet$", {
  sci_HashSet$: 1,
  O: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_HashSet$.prototype.$classData = $d_sci_HashSet$;
let $n_sci_HashSet$ = (void 0);
function $m_sci_HashSet$() {
  if ((!$n_sci_HashSet$)) {
    $n_sci_HashSet$ = new $c_sci_HashSet$()
  };
  return $n_sci_HashSet$
}
class $c_sci_LazyList$State$Cons extends $c_O {
  constructor(head, tail) {
    super();
    this.sci_LazyList$State$Cons__f_head = null;
    this.sci_LazyList$State$Cons__f_tail = null;
    this.sci_LazyList$State$Cons__f_head = head;
    this.sci_LazyList$State$Cons__f_tail = tail
  };
  head__O() {
    return this.sci_LazyList$State$Cons__f_head
  };
  tail__sci_LazyList() {
    return this.sci_LazyList$State$Cons__f_tail
  };
}
const $d_sci_LazyList$State$Cons = new $TypeData().initClass({
  sci_LazyList$State$Cons: 0
}, false, "scala.collection.immutable.LazyList$State$Cons", {
  sci_LazyList$State$Cons: 1,
  O: 1,
  sci_LazyList$State: 1,
  Ljava_io_Serializable: 1
});
$c_sci_LazyList$State$Cons.prototype.$classData = $d_sci_LazyList$State$Cons;
class $c_sci_LazyList$State$Empty$ extends $c_O {
  head__E() {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "head of empty lazy list")
  };
  tail__sci_LazyList() {
    throw $ct_jl_UnsupportedOperationException__T__(new $c_jl_UnsupportedOperationException(), "tail of empty lazy list")
  };
  head__O() {
    this.head__E()
  };
}
const $d_sci_LazyList$State$Empty$ = new $TypeData().initClass({
  sci_LazyList$State$Empty$: 0
}, false, "scala.collection.immutable.LazyList$State$Empty$", {
  sci_LazyList$State$Empty$: 1,
  O: 1,
  sci_LazyList$State: 1,
  Ljava_io_Serializable: 1
});
$c_sci_LazyList$State$Empty$.prototype.$classData = $d_sci_LazyList$State$Empty$;
let $n_sci_LazyList$State$Empty$ = (void 0);
function $m_sci_LazyList$State$Empty$() {
  if ((!$n_sci_LazyList$State$Empty$)) {
    $n_sci_LazyList$State$Empty$ = new $c_sci_LazyList$State$Empty$()
  };
  return $n_sci_LazyList$State$Empty$
}
class $c_sci_Map$ extends $c_O {
}
const $d_sci_Map$ = new $TypeData().initClass({
  sci_Map$: 0
}, false, "scala.collection.immutable.Map$", {
  sci_Map$: 1,
  O: 1,
  sc_MapFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Map$.prototype.$classData = $d_sci_Map$;
let $n_sci_Map$ = (void 0);
function $m_sci_Map$() {
  if ((!$n_sci_Map$)) {
    $n_sci_Map$ = new $c_sci_Map$()
  };
  return $n_sci_Map$
}
class $c_sci_Set$ extends $c_O {
  from__sc_IterableOnce__sci_Set(it) {
    if ($is_sci_SortedSet(it)) {
      const this$1 = new $c_sci_SetBuilderImpl();
      const this$2 = this$1.addAll__sc_IterableOnce__sci_SetBuilderImpl(it);
      return this$2.result__sci_Set()
    } else if ((it.knownSize__I() === 0)) {
      return $m_sci_Set$EmptySet$()
    } else if ($is_sci_Set(it)) {
      const x3 = it;
      return x3
    } else {
      const this$3 = new $c_sci_SetBuilderImpl();
      const this$4 = this$3.addAll__sc_IterableOnce__sci_SetBuilderImpl(it);
      return this$4.result__sci_Set()
    }
  };
  from__sc_IterableOnce__O(source) {
    return this.from__sc_IterableOnce__sci_Set(source)
  };
}
const $d_sci_Set$ = new $TypeData().initClass({
  sci_Set$: 0
}, false, "scala.collection.immutable.Set$", {
  sci_Set$: 1,
  O: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Set$.prototype.$classData = $d_sci_Set$;
let $n_sci_Set$ = (void 0);
function $m_sci_Set$() {
  if ((!$n_sci_Set$)) {
    $n_sci_Set$ = new $c_sci_Set$()
  };
  return $n_sci_Set$
}
function $is_scm_Builder(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scm_Builder)))
}
function $isArrayOf_scm_Builder(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_Builder)))
}
class $c_s_math_Equiv$ extends $c_O {
}
const $d_s_math_Equiv$ = new $TypeData().initClass({
  s_math_Equiv$: 0
}, false, "scala.math.Equiv$", {
  s_math_Equiv$: 1,
  O: 1,
  s_math_LowPriorityEquiv: 1,
  Ljava_io_Serializable: 1
});
$c_s_math_Equiv$.prototype.$classData = $d_s_math_Equiv$;
let $n_s_math_Equiv$ = (void 0);
function $m_s_math_Equiv$() {
  if ((!$n_s_math_Equiv$)) {
    $n_s_math_Equiv$ = new $c_s_math_Equiv$()
  };
  return $n_s_math_Equiv$
}
class $c_s_math_Ordering$ extends $c_O {
}
const $d_s_math_Ordering$ = new $TypeData().initClass({
  s_math_Ordering$: 0
}, false, "scala.math.Ordering$", {
  s_math_Ordering$: 1,
  O: 1,
  s_math_LowPriorityOrderingImplicits: 1,
  Ljava_io_Serializable: 1
});
$c_s_math_Ordering$.prototype.$classData = $d_s_math_Ordering$;
let $n_s_math_Ordering$ = (void 0);
function $m_s_math_Ordering$() {
  if ((!$n_s_math_Ordering$)) {
    $n_s_math_Ordering$ = new $c_s_math_Ordering$()
  };
  return $n_s_math_Ordering$
}
class $c_s_math_ScalaNumber {
}
function $isArrayOf_s_math_ScalaNumber(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_math_ScalaNumber)))
}
class $c_s_reflect_NoManifest$ extends $c_O {
  toString__T() {
    return "<?>"
  };
}
const $d_s_reflect_NoManifest$ = new $TypeData().initClass({
  s_reflect_NoManifest$: 0
}, false, "scala.reflect.NoManifest$", {
  s_reflect_NoManifest$: 1,
  O: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1
});
$c_s_reflect_NoManifest$.prototype.$classData = $d_s_reflect_NoManifest$;
let $n_s_reflect_NoManifest$ = (void 0);
function $m_s_reflect_NoManifest$() {
  if ((!$n_s_reflect_NoManifest$)) {
    $n_s_reflect_NoManifest$ = new $c_s_reflect_NoManifest$()
  };
  return $n_s_reflect_NoManifest$
}
const $d_sr_Nothing$ = new $TypeData().initClass({
  sr_Nothing$: 0
}, false, "scala.runtime.Nothing$", {
  sr_Nothing$: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
class $c_sjsr_AnonFunction0 extends $c_sr_AbstractFunction0 {
  constructor(f) {
    super();
    this.sjsr_AnonFunction0__f_f = null;
    this.sjsr_AnonFunction0__f_f = f
  };
  apply__O() {
    return (0, this.sjsr_AnonFunction0__f_f)()
  };
}
const $d_sjsr_AnonFunction0 = new $TypeData().initClass({
  sjsr_AnonFunction0: 0
}, false, "scala.scalajs.runtime.AnonFunction0", {
  sjsr_AnonFunction0: 1,
  sr_AbstractFunction0: 1,
  O: 1,
  F0: 1
});
$c_sjsr_AnonFunction0.prototype.$classData = $d_sjsr_AnonFunction0;
class $c_sjsr_AnonFunction1 extends $c_sr_AbstractFunction1 {
  constructor(f) {
    super();
    this.sjsr_AnonFunction1__f_f = null;
    this.sjsr_AnonFunction1__f_f = f
  };
  apply__O__O(arg1) {
    return (0, this.sjsr_AnonFunction1__f_f)(arg1)
  };
}
const $d_sjsr_AnonFunction1 = new $TypeData().initClass({
  sjsr_AnonFunction1: 0
}, false, "scala.scalajs.runtime.AnonFunction1", {
  sjsr_AnonFunction1: 1,
  sr_AbstractFunction1: 1,
  O: 1,
  F1: 1
});
$c_sjsr_AnonFunction1.prototype.$classData = $d_sjsr_AnonFunction1;
class $c_Lethmodel_ETHHolder extends $c_O {
  constructor(holdingsOf32Eth, status, minRoiAprToValidate, taxRate) {
    super();
    this.Lethmodel_ETHHolder__f_holdingsOf32Eth = 0;
    this.Lethmodel_ETHHolder__f_status = null;
    this.Lethmodel_ETHHolder__f_minRoiAprToValidate = 0.0;
    this.Lethmodel_ETHHolder__f_taxRate = 0.0;
    this.Lethmodel_ETHHolder__f_holdingsOf32Eth = holdingsOf32Eth;
    this.Lethmodel_ETHHolder__f_status = status;
    this.Lethmodel_ETHHolder__f_minRoiAprToValidate = minRoiAprToValidate;
    this.Lethmodel_ETHHolder__f_taxRate = taxRate
  };
  productPrefix__T() {
    return "ETHHolder"
  };
  productArity__I() {
    return 4
  };
  productElement__I__O(x$1) {
    switch (x$1) {
      case 0: {
        return this.Lethmodel_ETHHolder__f_holdingsOf32Eth;
        break
      }
      case 1: {
        return this.Lethmodel_ETHHolder__f_status;
        break
      }
      case 2: {
        return this.Lethmodel_ETHHolder__f_minRoiAprToValidate;
        break
      }
      case 3: {
        return this.Lethmodel_ETHHolder__f_taxRate;
        break
      }
      default: {
        return $m_sr_Statics$().ioobe__I__O(x$1)
      }
    }
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    let acc = (-889275714);
    const hash = acc;
    const data = $f_T__hashCode__I("ETHHolder");
    acc = $m_sr_Statics$().mix__I__I__I(hash, data);
    const hash$1 = acc;
    const data$1 = this.Lethmodel_ETHHolder__f_holdingsOf32Eth;
    acc = $m_sr_Statics$().mix__I__I__I(hash$1, data$1);
    const hash$2 = acc;
    const x = this.Lethmodel_ETHHolder__f_status;
    const data$2 = $m_sr_Statics$().anyHash__O__I(x);
    acc = $m_sr_Statics$().mix__I__I__I(hash$2, data$2);
    const hash$3 = acc;
    const dv = this.Lethmodel_ETHHolder__f_minRoiAprToValidate;
    const data$3 = $m_sr_Statics$().doubleHash__D__I(dv);
    acc = $m_sr_Statics$().mix__I__I__I(hash$3, data$3);
    const hash$4 = acc;
    const dv$1 = this.Lethmodel_ETHHolder__f_taxRate;
    const data$4 = $m_sr_Statics$().doubleHash__D__I(dv$1);
    acc = $m_sr_Statics$().mix__I__I__I(hash$4, data$4);
    const hash$5 = acc;
    return $m_sr_Statics$().finalizeHash__I__I__I(hash$5, 4)
  };
  toString__T() {
    return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_Lethmodel_ETHHolder)) {
      const ETHHolder$1 = x$1;
      if ((((this.Lethmodel_ETHHolder__f_holdingsOf32Eth === ETHHolder$1.Lethmodel_ETHHolder__f_holdingsOf32Eth) && (this.Lethmodel_ETHHolder__f_minRoiAprToValidate === ETHHolder$1.Lethmodel_ETHHolder__f_minRoiAprToValidate)) && (this.Lethmodel_ETHHolder__f_taxRate === ETHHolder$1.Lethmodel_ETHHolder__f_taxRate))) {
        const x = this.Lethmodel_ETHHolder__f_status;
        const x$2 = ETHHolder$1.Lethmodel_ETHHolder__f_status;
        return ((x === null) ? (x$2 === null) : x.equals__O__Z(x$2))
      } else {
        return false
      }
    } else {
      return false
    }
  };
}
function $isArrayOf_Lethmodel_ETHHolder(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lethmodel_ETHHolder)))
}
const $d_Lethmodel_ETHHolder = new $TypeData().initClass({
  Lethmodel_ETHHolder: 0
}, false, "ethmodel.ETHHolder", {
  Lethmodel_ETHHolder: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_Lethmodel_ETHHolder.prototype.$classData = $d_Lethmodel_ETHHolder;
class $c_Lethmodel_InitialConfig extends $c_O {
  constructor(totalEthSupply, ongoingConfig) {
    super();
    this.Lethmodel_InitialConfig__f_totalEthSupply = 0;
    this.Lethmodel_InitialConfig__f_ongoingConfig = null;
    this.Lethmodel_InitialConfig__f_totalEthSupply = totalEthSupply;
    this.Lethmodel_InitialConfig__f_ongoingConfig = ongoingConfig
  };
  productPrefix__T() {
    return "InitialConfig"
  };
  productArity__I() {
    return 2
  };
  productElement__I__O(x$1) {
    switch (x$1) {
      case 0: {
        return this.Lethmodel_InitialConfig__f_totalEthSupply;
        break
      }
      case 1: {
        return this.Lethmodel_InitialConfig__f_ongoingConfig;
        break
      }
      default: {
        return $m_sr_Statics$().ioobe__I__O(x$1)
      }
    }
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    let acc = (-889275714);
    const hash = acc;
    const data = $f_T__hashCode__I("InitialConfig");
    acc = $m_sr_Statics$().mix__I__I__I(hash, data);
    const hash$1 = acc;
    const data$1 = this.Lethmodel_InitialConfig__f_totalEthSupply;
    acc = $m_sr_Statics$().mix__I__I__I(hash$1, data$1);
    const hash$2 = acc;
    const x = this.Lethmodel_InitialConfig__f_ongoingConfig;
    const data$2 = $m_sr_Statics$().anyHash__O__I(x);
    acc = $m_sr_Statics$().mix__I__I__I(hash$2, data$2);
    const hash$3 = acc;
    return $m_sr_Statics$().finalizeHash__I__I__I(hash$3, 2)
  };
  toString__T() {
    return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_Lethmodel_InitialConfig)) {
      const InitialConfig$1 = x$1;
      if ((this.Lethmodel_InitialConfig__f_totalEthSupply === InitialConfig$1.Lethmodel_InitialConfig__f_totalEthSupply)) {
        const x = this.Lethmodel_InitialConfig__f_ongoingConfig;
        const x$2 = InitialConfig$1.Lethmodel_InitialConfig__f_ongoingConfig;
        return ((x === null) ? (x$2 === null) : x.equals__O__Z(x$2))
      } else {
        return false
      }
    } else {
      return false
    }
  };
  $js$exported$prop$totalEthSupply__O() {
    return this.Lethmodel_InitialConfig__f_totalEthSupply
  };
  $js$exported$prop$ongoingConfig__O() {
    return this.Lethmodel_InitialConfig__f_ongoingConfig
  };
  get "ongoingConfig"() {
    return this.$js$exported$prop$ongoingConfig__O()
  };
  get "totalEthSupply"() {
    return this.$js$exported$prop$totalEthSupply__O()
  };
}
function $isArrayOf_Lethmodel_InitialConfig(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lethmodel_InitialConfig)))
}
const $d_Lethmodel_InitialConfig = new $TypeData().initClass({
  Lethmodel_InitialConfig: 0
}, false, "ethmodel.InitialConfig", {
  Lethmodel_InitialConfig: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_Lethmodel_InitialConfig.prototype.$classData = $d_Lethmodel_InitialConfig;
class $c_Lethmodel_Metrics extends $c_O {
  constructor(totalEthSupply, numEthHolders, numValidators, numEthStaked, annualizedNetworkCostUsd, issuanceApr, inflationApr) {
    super();
    this.Lethmodel_Metrics__f_totalEthSupply = 0;
    this.Lethmodel_Metrics__f_numEthHolders = 0;
    this.Lethmodel_Metrics__f_numValidators = 0;
    this.Lethmodel_Metrics__f_numEthStaked = 0;
    this.Lethmodel_Metrics__f_annualizedNetworkCostUsd = 0.0;
    this.Lethmodel_Metrics__f_issuanceApr = 0.0;
    this.Lethmodel_Metrics__f_inflationApr = 0.0;
    this.Lethmodel_Metrics__f_totalEthSupply = totalEthSupply;
    this.Lethmodel_Metrics__f_numEthHolders = numEthHolders;
    this.Lethmodel_Metrics__f_numValidators = numValidators;
    this.Lethmodel_Metrics__f_numEthStaked = numEthStaked;
    this.Lethmodel_Metrics__f_annualizedNetworkCostUsd = annualizedNetworkCostUsd;
    this.Lethmodel_Metrics__f_issuanceApr = issuanceApr;
    this.Lethmodel_Metrics__f_inflationApr = inflationApr
  };
  productPrefix__T() {
    return "Metrics"
  };
  productArity__I() {
    return 7
  };
  productElement__I__O(x$1) {
    switch (x$1) {
      case 0: {
        return this.Lethmodel_Metrics__f_totalEthSupply;
        break
      }
      case 1: {
        return this.Lethmodel_Metrics__f_numEthHolders;
        break
      }
      case 2: {
        return this.Lethmodel_Metrics__f_numValidators;
        break
      }
      case 3: {
        return this.Lethmodel_Metrics__f_numEthStaked;
        break
      }
      case 4: {
        return this.Lethmodel_Metrics__f_annualizedNetworkCostUsd;
        break
      }
      case 5: {
        return this.Lethmodel_Metrics__f_issuanceApr;
        break
      }
      case 6: {
        return this.Lethmodel_Metrics__f_inflationApr;
        break
      }
      default: {
        return $m_sr_Statics$().ioobe__I__O(x$1)
      }
    }
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    let acc = (-889275714);
    const hash = acc;
    const data = $f_T__hashCode__I("Metrics");
    acc = $m_sr_Statics$().mix__I__I__I(hash, data);
    const hash$1 = acc;
    const data$1 = this.Lethmodel_Metrics__f_totalEthSupply;
    acc = $m_sr_Statics$().mix__I__I__I(hash$1, data$1);
    const hash$2 = acc;
    const data$2 = this.Lethmodel_Metrics__f_numEthHolders;
    acc = $m_sr_Statics$().mix__I__I__I(hash$2, data$2);
    const hash$3 = acc;
    const data$3 = this.Lethmodel_Metrics__f_numValidators;
    acc = $m_sr_Statics$().mix__I__I__I(hash$3, data$3);
    const hash$4 = acc;
    const data$4 = this.Lethmodel_Metrics__f_numEthStaked;
    acc = $m_sr_Statics$().mix__I__I__I(hash$4, data$4);
    const hash$5 = acc;
    const dv = this.Lethmodel_Metrics__f_annualizedNetworkCostUsd;
    const data$5 = $m_sr_Statics$().doubleHash__D__I(dv);
    acc = $m_sr_Statics$().mix__I__I__I(hash$5, data$5);
    const hash$6 = acc;
    const dv$1 = this.Lethmodel_Metrics__f_issuanceApr;
    const data$6 = $m_sr_Statics$().doubleHash__D__I(dv$1);
    acc = $m_sr_Statics$().mix__I__I__I(hash$6, data$6);
    const hash$7 = acc;
    const dv$2 = this.Lethmodel_Metrics__f_inflationApr;
    const data$7 = $m_sr_Statics$().doubleHash__D__I(dv$2);
    acc = $m_sr_Statics$().mix__I__I__I(hash$7, data$7);
    const hash$8 = acc;
    return $m_sr_Statics$().finalizeHash__I__I__I(hash$8, 7)
  };
  toString__T() {
    return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_Lethmodel_Metrics)) {
      const Metrics$1 = x$1;
      return (((((((this.Lethmodel_Metrics__f_totalEthSupply === Metrics$1.Lethmodel_Metrics__f_totalEthSupply) && (this.Lethmodel_Metrics__f_numEthHolders === Metrics$1.Lethmodel_Metrics__f_numEthHolders)) && (this.Lethmodel_Metrics__f_numValidators === Metrics$1.Lethmodel_Metrics__f_numValidators)) && (this.Lethmodel_Metrics__f_numEthStaked === Metrics$1.Lethmodel_Metrics__f_numEthStaked)) && (this.Lethmodel_Metrics__f_annualizedNetworkCostUsd === Metrics$1.Lethmodel_Metrics__f_annualizedNetworkCostUsd)) && (this.Lethmodel_Metrics__f_issuanceApr === Metrics$1.Lethmodel_Metrics__f_issuanceApr)) && (this.Lethmodel_Metrics__f_inflationApr === Metrics$1.Lethmodel_Metrics__f_inflationApr))
    } else {
      return false
    }
  };
  $js$exported$prop$totalEthSupply__O() {
    return this.Lethmodel_Metrics__f_totalEthSupply
  };
  $js$exported$prop$numEthHolders__O() {
    return this.Lethmodel_Metrics__f_numEthHolders
  };
  $js$exported$prop$numValidators__O() {
    return this.Lethmodel_Metrics__f_numValidators
  };
  $js$exported$prop$numEthStaked__O() {
    return this.Lethmodel_Metrics__f_numEthStaked
  };
  $js$exported$prop$annualizedNetworkCostUsd__O() {
    return this.Lethmodel_Metrics__f_annualizedNetworkCostUsd
  };
  $js$exported$prop$issuanceApr__O() {
    return this.Lethmodel_Metrics__f_issuanceApr
  };
  $js$exported$prop$inflationApr__O() {
    return this.Lethmodel_Metrics__f_inflationApr
  };
  get "inflationApr"() {
    return this.$js$exported$prop$inflationApr__O()
  };
  get "issuanceApr"() {
    return this.$js$exported$prop$issuanceApr__O()
  };
  get "annualizedNetworkCostUsd"() {
    return this.$js$exported$prop$annualizedNetworkCostUsd__O()
  };
  get "numEthStaked"() {
    return this.$js$exported$prop$numEthStaked__O()
  };
  get "numValidators"() {
    return this.$js$exported$prop$numValidators__O()
  };
  get "numEthHolders"() {
    return this.$js$exported$prop$numEthHolders__O()
  };
  get "totalEthSupply"() {
    return this.$js$exported$prop$totalEthSupply__O()
  };
}
function $isArrayOf_Lethmodel_Metrics(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lethmodel_Metrics)))
}
const $d_Lethmodel_Metrics = new $TypeData().initClass({
  Lethmodel_Metrics: 0
}, false, "ethmodel.Metrics", {
  Lethmodel_Metrics: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_Lethmodel_Metrics.prototype.$classData = $d_Lethmodel_Metrics;
class $c_Lethmodel_OngoingConfig extends $c_O {
  constructor(validator32EthFlatCostUsd, ethUsdPrice, annualizedTotalTransactionFeesUsd, transactionFeesBurned, ethHolderActionChance, ignoreTaxRate) {
    super();
    this.Lethmodel_OngoingConfig__f_validator32EthFlatCostUsd = 0;
    this.Lethmodel_OngoingConfig__f_ethUsdPrice = 0;
    this.Lethmodel_OngoingConfig__f_annualizedTotalTransactionFeesUsd = $L0;
    this.Lethmodel_OngoingConfig__f_transactionFeesBurned = false;
    this.Lethmodel_OngoingConfig__f_ethHolderActionChance = 0;
    this.Lethmodel_OngoingConfig__f_ignoreTaxRate = false;
    this.Lethmodel_OngoingConfig__f_validator32EthFlatCostUsd = validator32EthFlatCostUsd;
    this.Lethmodel_OngoingConfig__f_ethUsdPrice = ethUsdPrice;
    this.Lethmodel_OngoingConfig__f_annualizedTotalTransactionFeesUsd = annualizedTotalTransactionFeesUsd;
    this.Lethmodel_OngoingConfig__f_transactionFeesBurned = transactionFeesBurned;
    this.Lethmodel_OngoingConfig__f_ethHolderActionChance = ethHolderActionChance;
    this.Lethmodel_OngoingConfig__f_ignoreTaxRate = ignoreTaxRate
  };
  productPrefix__T() {
    return "OngoingConfig"
  };
  productArity__I() {
    return 6
  };
  productElement__I__O(x$1) {
    switch (x$1) {
      case 0: {
        return this.Lethmodel_OngoingConfig__f_validator32EthFlatCostUsd;
        break
      }
      case 1: {
        return this.Lethmodel_OngoingConfig__f_ethUsdPrice;
        break
      }
      case 2: {
        return this.Lethmodel_OngoingConfig__f_annualizedTotalTransactionFeesUsd;
        break
      }
      case 3: {
        return this.Lethmodel_OngoingConfig__f_transactionFeesBurned;
        break
      }
      case 4: {
        return this.Lethmodel_OngoingConfig__f_ethHolderActionChance;
        break
      }
      case 5: {
        return this.Lethmodel_OngoingConfig__f_ignoreTaxRate;
        break
      }
      default: {
        return $m_sr_Statics$().ioobe__I__O(x$1)
      }
    }
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    let acc = (-889275714);
    const hash = acc;
    const data = $f_T__hashCode__I("OngoingConfig");
    acc = $m_sr_Statics$().mix__I__I__I(hash, data);
    const hash$1 = acc;
    const data$1 = this.Lethmodel_OngoingConfig__f_validator32EthFlatCostUsd;
    acc = $m_sr_Statics$().mix__I__I__I(hash$1, data$1);
    const hash$2 = acc;
    const data$2 = this.Lethmodel_OngoingConfig__f_ethUsdPrice;
    acc = $m_sr_Statics$().mix__I__I__I(hash$2, data$2);
    const hash$3 = acc;
    const t = this.Lethmodel_OngoingConfig__f_annualizedTotalTransactionFeesUsd;
    const lo = t.RTLong__f_lo;
    const hi = t.RTLong__f_hi;
    const data$3 = $m_sr_Statics$().longHash__J__I(new $c_RTLong(lo, hi));
    acc = $m_sr_Statics$().mix__I__I__I(hash$3, data$3);
    const hash$4 = acc;
    const data$4 = (this.Lethmodel_OngoingConfig__f_transactionFeesBurned ? 1231 : 1237);
    acc = $m_sr_Statics$().mix__I__I__I(hash$4, data$4);
    const hash$5 = acc;
    const data$5 = this.Lethmodel_OngoingConfig__f_ethHolderActionChance;
    acc = $m_sr_Statics$().mix__I__I__I(hash$5, data$5);
    const hash$6 = acc;
    const data$6 = (this.Lethmodel_OngoingConfig__f_ignoreTaxRate ? 1231 : 1237);
    acc = $m_sr_Statics$().mix__I__I__I(hash$6, data$6);
    const hash$7 = acc;
    return $m_sr_Statics$().finalizeHash__I__I__I(hash$7, 6)
  };
  toString__T() {
    return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_Lethmodel_OngoingConfig)) {
      const OngoingConfig$1 = x$1;
      let $$x1;
      if (((this.Lethmodel_OngoingConfig__f_validator32EthFlatCostUsd === OngoingConfig$1.Lethmodel_OngoingConfig__f_validator32EthFlatCostUsd) && (this.Lethmodel_OngoingConfig__f_ethUsdPrice === OngoingConfig$1.Lethmodel_OngoingConfig__f_ethUsdPrice))) {
        const t = this.Lethmodel_OngoingConfig__f_annualizedTotalTransactionFeesUsd;
        const lo = t.RTLong__f_lo;
        const hi = t.RTLong__f_hi;
        const b = OngoingConfig$1.Lethmodel_OngoingConfig__f_annualizedTotalTransactionFeesUsd;
        $$x1 = ((lo === b.RTLong__f_lo) && (hi === b.RTLong__f_hi))
      } else {
        $$x1 = false
      };
      if ((($$x1 && (this.Lethmodel_OngoingConfig__f_transactionFeesBurned === OngoingConfig$1.Lethmodel_OngoingConfig__f_transactionFeesBurned)) && (this.Lethmodel_OngoingConfig__f_ethHolderActionChance === OngoingConfig$1.Lethmodel_OngoingConfig__f_ethHolderActionChance))) {
        return (this.Lethmodel_OngoingConfig__f_ignoreTaxRate === OngoingConfig$1.Lethmodel_OngoingConfig__f_ignoreTaxRate)
      } else {
        return false
      }
    } else {
      return false
    }
  };
  $js$exported$prop$validator32EthFlatCostUsd__O() {
    return this.Lethmodel_OngoingConfig__f_validator32EthFlatCostUsd
  };
  $js$exported$prop$ethUsdPrice__O() {
    return this.Lethmodel_OngoingConfig__f_ethUsdPrice
  };
  $js$exported$prop$annualizedTotalTransactionFeesUsd__O() {
    return this.Lethmodel_OngoingConfig__f_annualizedTotalTransactionFeesUsd
  };
  $js$exported$prop$transactionFeesBurned__O() {
    return this.Lethmodel_OngoingConfig__f_transactionFeesBurned
  };
  $js$exported$prop$ethHolderActionChance__O() {
    return this.Lethmodel_OngoingConfig__f_ethHolderActionChance
  };
  $js$exported$prop$ignoreTaxRate__O() {
    return this.Lethmodel_OngoingConfig__f_ignoreTaxRate
  };
  get "ignoreTaxRate"() {
    return this.$js$exported$prop$ignoreTaxRate__O()
  };
  get "ethHolderActionChance"() {
    return this.$js$exported$prop$ethHolderActionChance__O()
  };
  get "transactionFeesBurned"() {
    return this.$js$exported$prop$transactionFeesBurned__O()
  };
  get "annualizedTotalTransactionFeesUsd"() {
    return this.$js$exported$prop$annualizedTotalTransactionFeesUsd__O()
  };
  get "ethUsdPrice"() {
    return this.$js$exported$prop$ethUsdPrice__O()
  };
  get "validator32EthFlatCostUsd"() {
    return this.$js$exported$prop$validator32EthFlatCostUsd__O()
  };
}
function $isArrayOf_Lethmodel_OngoingConfig(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lethmodel_OngoingConfig)))
}
const $d_Lethmodel_OngoingConfig = new $TypeData().initClass({
  Lethmodel_OngoingConfig: 0
}, false, "ethmodel.OngoingConfig", {
  Lethmodel_OngoingConfig: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_Lethmodel_OngoingConfig.prototype.$classData = $d_Lethmodel_OngoingConfig;
class $c_Lethmodel_State extends $c_O {
  constructor(ongoingConfig, ethHolders, historicalMetrics) {
    super();
    this.Lethmodel_State__f_ongoingConfig = null;
    this.Lethmodel_State__f_ethHolders = null;
    this.Lethmodel_State__f_historicalMetrics = null;
    this.Lethmodel_State__f_metrics = null;
    this.Lethmodel_State__f_ongoingConfig = ongoingConfig;
    this.Lethmodel_State__f_ethHolders = ethHolders;
    this.Lethmodel_State__f_historicalMetrics = historicalMetrics;
    this.Lethmodel_State__f_metrics = $m_Lethmodel_State$().ethmodel$State$$deriveMetrics__Lethmodel_OngoingConfig__sci_List__Lethmodel_Metrics(ongoingConfig, ethHolders);
    const this$1 = this.Lethmodel_State__f_historicalMetrics;
    const elem = this.Lethmodel_State__f_metrics;
    this.Lethmodel_State__f_historicalMetrics = new $c_sci_$colon$colon(elem, this$1)
  };
  productPrefix__T() {
    return "State"
  };
  productArity__I() {
    return 3
  };
  productElement__I__O(x$1) {
    switch (x$1) {
      case 0: {
        return this.Lethmodel_State__f_ongoingConfig;
        break
      }
      case 1: {
        return this.Lethmodel_State__f_ethHolders;
        break
      }
      case 2: {
        return this.Lethmodel_State__f_historicalMetrics;
        break
      }
      default: {
        return $m_sr_Statics$().ioobe__I__O(x$1)
      }
    }
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    const this$2 = $m_s_util_hashing_MurmurHash3$();
    return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
  };
  toString__T() {
    return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_Lethmodel_State)) {
      const State$1 = x$1;
      const x = this.Lethmodel_State__f_ongoingConfig;
      const x$2 = State$1.Lethmodel_State__f_ongoingConfig;
      let $$x1;
      if (((x === null) ? (x$2 === null) : x.equals__O__Z(x$2))) {
        const x$3 = this.Lethmodel_State__f_ethHolders;
        const x$4 = State$1.Lethmodel_State__f_ethHolders;
        $$x1 = ((x$3 === null) ? (x$4 === null) : x$3.equals__O__Z(x$4))
      } else {
        $$x1 = false
      };
      if ($$x1) {
        const x$5 = this.Lethmodel_State__f_historicalMetrics;
        const x$6 = State$1.Lethmodel_State__f_historicalMetrics;
        return ((x$5 === null) ? (x$6 === null) : x$5.equals__O__Z(x$6))
      } else {
        return false
      }
    } else {
      return false
    }
  };
  $js$exported$prop$ongoingConfig__O() {
    return this.Lethmodel_State__f_ongoingConfig
  };
  $js$exported$prop$ethHolders__O() {
    return this.Lethmodel_State__f_ethHolders
  };
  $js$exported$prop$historicalMetrics__O() {
    return this.Lethmodel_State__f_historicalMetrics
  };
  $js$exported$prop$historicalMetrics__sci_List__O(x$1) {
    this.Lethmodel_State__f_historicalMetrics = x$1
  };
  $js$exported$prop$metrics__O() {
    return this.Lethmodel_State__f_metrics
  };
  get "metrics"() {
    return this.$js$exported$prop$metrics__O()
  };
  get "historicalMetrics"() {
    return this.$js$exported$prop$historicalMetrics__O()
  };
  set "historicalMetrics"(arg) {
    const prep0 = arg;
    this.$js$exported$prop$historicalMetrics__sci_List__O(prep0)
  };
  get "ethHolders"() {
    return this.$js$exported$prop$ethHolders__O()
  };
  get "ongoingConfig"() {
    return this.$js$exported$prop$ongoingConfig__O()
  };
}
function $isArrayOf_Lethmodel_State(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lethmodel_State)))
}
const $d_Lethmodel_State = new $TypeData().initClass({
  Lethmodel_State: 0
}, false, "ethmodel.State", {
  Lethmodel_State: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_Lethmodel_State.prototype.$classData = $d_Lethmodel_State;
const $f_jl_Byte__equals__O__Z = (function($thiz, that) {
  return Object.is($thiz, that)
});
const $f_jl_Byte__hashCode__I = (function($thiz) {
  return ($thiz | 0)
});
const $f_jl_Byte__toString__T = (function($thiz) {
  const b = ($thiz | 0);
  return ("" + b)
});
const $d_jl_Byte = new $TypeData().initClass({
  jl_Byte: 0
}, false, "java.lang.Byte", {
  jl_Byte: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), ((x) => $isByte(x)));
const $ct_jl_CloneNotSupportedException__ = (function($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz
});
class $c_jl_CloneNotSupportedException extends $c_jl_Exception {
}
const $d_jl_CloneNotSupportedException = new $TypeData().initClass({
  jl_CloneNotSupportedException: 0
}, false, "java.lang.CloneNotSupportedException", {
  jl_CloneNotSupportedException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_CloneNotSupportedException.prototype.$classData = $d_jl_CloneNotSupportedException;
const $f_jl_Double__equals__O__Z = (function($thiz, that) {
  return Object.is($thiz, that)
});
const $f_jl_Double__hashCode__I = (function($thiz) {
  const value = (+$thiz);
  return $m_jl_FloatingPointBits$().numberHashCode__D__I(value)
});
const $f_jl_Double__toString__T = (function($thiz) {
  const d = (+$thiz);
  return ("" + d)
});
function $isArrayOf_jl_Double(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Double)))
}
const $d_jl_Double = new $TypeData().initClass({
  jl_Double: 0
}, false, "java.lang.Double", {
  jl_Double: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), ((x) => ((typeof x) === "number")));
const $f_jl_Float__equals__O__Z = (function($thiz, that) {
  return Object.is($thiz, that)
});
const $f_jl_Float__hashCode__I = (function($thiz) {
  const value = (+$thiz);
  return $m_jl_FloatingPointBits$().numberHashCode__D__I(value)
});
const $f_jl_Float__toString__T = (function($thiz) {
  const f = (+$thiz);
  return ("" + f)
});
const $d_jl_Float = new $TypeData().initClass({
  jl_Float: 0
}, false, "java.lang.Float", {
  jl_Float: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), ((x) => ((typeof x) === "number")));
const $f_jl_Integer__equals__O__Z = (function($thiz, that) {
  return Object.is($thiz, that)
});
const $f_jl_Integer__hashCode__I = (function($thiz) {
  return ($thiz | 0)
});
const $f_jl_Integer__toString__T = (function($thiz) {
  const i = ($thiz | 0);
  return ("" + i)
});
const $d_jl_Integer = new $TypeData().initClass({
  jl_Integer: 0
}, false, "java.lang.Integer", {
  jl_Integer: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), ((x) => $isInt(x)));
const $f_jl_Long__equals__O__Z = (function($thiz, that) {
  if ((that instanceof $c_RTLong)) {
    const x2 = that;
    const t = $uJ($thiz);
    const lo = t.RTLong__f_lo;
    const hi = t.RTLong__f_hi;
    const b = $uJ(x2);
    return ((lo === b.RTLong__f_lo) && (hi === b.RTLong__f_hi))
  } else {
    return false
  }
});
const $f_jl_Long__hashCode__I = (function($thiz) {
  const t = $uJ($thiz);
  const lo = t.RTLong__f_lo;
  const hi = t.RTLong__f_hi;
  return (lo ^ hi)
});
const $f_jl_Long__toString__T = (function($thiz) {
  const t = $uJ($thiz);
  const lo = t.RTLong__f_lo;
  const hi = t.RTLong__f_hi;
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T(lo, hi)
});
function $isArrayOf_jl_Long(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Long)))
}
const $d_jl_Long = new $TypeData().initClass({
  jl_Long: 0
}, false, "java.lang.Long", {
  jl_Long: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), ((x) => (x instanceof $c_RTLong)));
class $c_jl_RuntimeException extends $c_jl_Exception {
}
const $f_jl_Short__equals__O__Z = (function($thiz, that) {
  return Object.is($thiz, that)
});
const $f_jl_Short__hashCode__I = (function($thiz) {
  return ($thiz | 0)
});
const $f_jl_Short__toString__T = (function($thiz) {
  const s = ($thiz | 0);
  return ("" + s)
});
const $d_jl_Short = new $TypeData().initClass({
  jl_Short: 0
}, false, "java.lang.Short", {
  jl_Short: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), ((x) => $isShort(x)));
const $f_T__hashCode__I = (function($thiz) {
  let res = 0;
  let mul = 1;
  let i = (((-1) + ($thiz.length | 0)) | 0);
  while ((i >= 0)) {
    const $$x1 = res;
    const index = i;
    res = (($$x1 + $imul((65535 & ($thiz.charCodeAt(index) | 0)), mul)) | 0);
    mul = $imul(31, mul);
    i = (((-1) + i) | 0)
  };
  return res
});
const $f_T__equals__O__Z = (function($thiz, that) {
  return ($thiz === that)
});
const $f_T__toString__T = (function($thiz) {
  return $thiz
});
function $isArrayOf_T(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.T)))
}
const $d_T = new $TypeData().initClass({
  T: 0
}, false, "java.lang.String", {
  T: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_CharSequence: 1
}, (void 0), (void 0), ((x) => ((typeof x) === "string")));
const $ct_jl_StringBuilder__ = (function($thiz) {
  $thiz.jl_StringBuilder__f_java$lang$StringBuilder$$content = "";
  return $thiz
});
const $ct_jl_StringBuilder__T__ = (function($thiz, str) {
  $ct_jl_StringBuilder__($thiz);
  if ((str === null)) {
    throw new $c_jl_NullPointerException()
  };
  $thiz.jl_StringBuilder__f_java$lang$StringBuilder$$content = str;
  return $thiz
});
class $c_jl_StringBuilder extends $c_O {
  constructor() {
    super();
    this.jl_StringBuilder__f_java$lang$StringBuilder$$content = null
  };
  append__AC__jl_StringBuilder(str) {
    const this$1 = $m_jl_String$();
    const count = str.u.length;
    const str$1 = this$1.new__AC__I__I__T(str, 0, count);
    this.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this.jl_StringBuilder__f_java$lang$StringBuilder$$content) + str$1);
    return this
  };
  toString__T() {
    return this.jl_StringBuilder__f_java$lang$StringBuilder$$content
  };
  length__I() {
    const this$1 = this.jl_StringBuilder__f_java$lang$StringBuilder$$content;
    return (this$1.length | 0)
  };
  charAt__I__C(index) {
    const this$1 = this.jl_StringBuilder__f_java$lang$StringBuilder$$content;
    return (65535 & (this$1.charCodeAt(index) | 0))
  };
}
const $d_jl_StringBuilder = new $TypeData().initClass({
  jl_StringBuilder: 0
}, false, "java.lang.StringBuilder", {
  jl_StringBuilder: 1,
  O: 1,
  jl_CharSequence: 1,
  jl_Appendable: 1,
  Ljava_io_Serializable: 1
});
$c_jl_StringBuilder.prototype.$classData = $d_jl_StringBuilder;
class $c_RTLong extends $c_jl_Number {
  constructor(lo, hi) {
    super();
    this.RTLong__f_lo = 0;
    this.RTLong__f_hi = 0;
    this.RTLong__f_lo = lo;
    this.RTLong__f_hi = hi
  };
  equals__O__Z(that) {
    if ((that instanceof $c_RTLong)) {
      const x2 = that;
      return ((this.RTLong__f_lo === x2.RTLong__f_lo) && (this.RTLong__f_hi === x2.RTLong__f_hi))
    } else {
      return false
    }
  };
  hashCode__I() {
    return (this.RTLong__f_lo ^ this.RTLong__f_hi)
  };
  toString__T() {
    return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T(this.RTLong__f_lo, this.RTLong__f_hi)
  };
  toInt__I() {
    return this.RTLong__f_lo
  };
  toDouble__D() {
    return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(this.RTLong__f_lo, this.RTLong__f_hi)
  };
  byteValue__B() {
    return ((this.RTLong__f_lo << 24) >> 24)
  };
  shortValue__S() {
    return ((this.RTLong__f_lo << 16) >> 16)
  };
  intValue__I() {
    return this.RTLong__f_lo
  };
  longValue__J() {
    return $uJ(this)
  };
  floatValue__F() {
    return $fround($m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(this.RTLong__f_lo, this.RTLong__f_hi))
  };
  doubleValue__D() {
    return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(this.RTLong__f_lo, this.RTLong__f_hi)
  };
  compareTo__jl_Long__I(that) {
    return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, that.RTLong__f_lo, that.RTLong__f_hi)
  };
  equals__RTLong__Z(b) {
    return ((this.RTLong__f_lo === b.RTLong__f_lo) && (this.RTLong__f_hi === b.RTLong__f_hi))
  };
  notEquals__RTLong__Z(b) {
    return (!((this.RTLong__f_lo === b.RTLong__f_lo) && (this.RTLong__f_hi === b.RTLong__f_hi)))
  };
  $less__RTLong__Z(b) {
    const ahi = this.RTLong__f_hi;
    const bhi = b.RTLong__f_hi;
    return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) < ((-2147483648) ^ b.RTLong__f_lo)) : (ahi < bhi))
  };
  $less$eq__RTLong__Z(b) {
    const ahi = this.RTLong__f_hi;
    const bhi = b.RTLong__f_hi;
    return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) <= ((-2147483648) ^ b.RTLong__f_lo)) : (ahi < bhi))
  };
  $greater__RTLong__Z(b) {
    const ahi = this.RTLong__f_hi;
    const bhi = b.RTLong__f_hi;
    return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) > ((-2147483648) ^ b.RTLong__f_lo)) : (ahi > bhi))
  };
  $greater$eq__RTLong__Z(b) {
    const ahi = this.RTLong__f_hi;
    const bhi = b.RTLong__f_hi;
    return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) >= ((-2147483648) ^ b.RTLong__f_lo)) : (ahi > bhi))
  };
  unary_$tilde__RTLong() {
    return new $c_RTLong((~this.RTLong__f_lo), (~this.RTLong__f_hi))
  };
  $bar__RTLong__RTLong(b) {
    return new $c_RTLong((this.RTLong__f_lo | b.RTLong__f_lo), (this.RTLong__f_hi | b.RTLong__f_hi))
  };
  $amp__RTLong__RTLong(b) {
    return new $c_RTLong((this.RTLong__f_lo & b.RTLong__f_lo), (this.RTLong__f_hi & b.RTLong__f_hi))
  };
  $up__RTLong__RTLong(b) {
    return new $c_RTLong((this.RTLong__f_lo ^ b.RTLong__f_lo), (this.RTLong__f_hi ^ b.RTLong__f_hi))
  };
  $less$less__I__RTLong(n) {
    return new $c_RTLong((((32 & n) === 0) ? (this.RTLong__f_lo << n) : 0), (((32 & n) === 0) ? (((((this.RTLong__f_lo >>> 1) | 0) >>> ((31 - n) | 0)) | 0) | (this.RTLong__f_hi << n)) : (this.RTLong__f_lo << n)))
  };
  $greater$greater$greater__I__RTLong(n) {
    return new $c_RTLong((((32 & n) === 0) ? (((this.RTLong__f_lo >>> n) | 0) | ((this.RTLong__f_hi << 1) << ((31 - n) | 0))) : ((this.RTLong__f_hi >>> n) | 0)), (((32 & n) === 0) ? ((this.RTLong__f_hi >>> n) | 0) : 0))
  };
  $greater$greater__I__RTLong(n) {
    return new $c_RTLong((((32 & n) === 0) ? (((this.RTLong__f_lo >>> n) | 0) | ((this.RTLong__f_hi << 1) << ((31 - n) | 0))) : (this.RTLong__f_hi >> n)), (((32 & n) === 0) ? (this.RTLong__f_hi >> n) : (this.RTLong__f_hi >> 31)))
  };
  unary_$minus__RTLong() {
    const lo = this.RTLong__f_lo;
    const hi = this.RTLong__f_hi;
    return new $c_RTLong(((-lo) | 0), ((lo !== 0) ? (~hi) : ((-hi) | 0)))
  };
  $plus__RTLong__RTLong(b) {
    const alo = this.RTLong__f_lo;
    const ahi = this.RTLong__f_hi;
    const bhi = b.RTLong__f_hi;
    const lo = ((alo + b.RTLong__f_lo) | 0);
    return new $c_RTLong(lo, ((((-2147483648) ^ lo) < ((-2147483648) ^ alo)) ? ((1 + ((ahi + bhi) | 0)) | 0) : ((ahi + bhi) | 0)))
  };
  $minus__RTLong__RTLong(b) {
    const alo = this.RTLong__f_lo;
    const ahi = this.RTLong__f_hi;
    const bhi = b.RTLong__f_hi;
    const lo = ((alo - b.RTLong__f_lo) | 0);
    return new $c_RTLong(lo, ((((-2147483648) ^ lo) > ((-2147483648) ^ alo)) ? (((-1) + ((ahi - bhi) | 0)) | 0) : ((ahi - bhi) | 0)))
  };
  $times__RTLong__RTLong(b) {
    const alo = this.RTLong__f_lo;
    const blo = b.RTLong__f_lo;
    const a0 = (65535 & alo);
    const a1 = ((alo >>> 16) | 0);
    const b0 = (65535 & blo);
    const b1 = ((blo >>> 16) | 0);
    const a0b0 = $imul(a0, b0);
    const a1b0 = $imul(a1, b0);
    const a0b1 = $imul(a0, b1);
    const lo = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
    const c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
    const hi = (((((((($imul(alo, b.RTLong__f_hi) + $imul(this.RTLong__f_hi, blo)) | 0) + $imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
    return new $c_RTLong(lo, hi)
  };
  $div__RTLong__RTLong(b) {
    const this$1 = $m_RTLong$();
    const lo = this$1.divideImpl__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, b.RTLong__f_lo, b.RTLong__f_hi);
    return new $c_RTLong(lo, this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn)
  };
  $percent__RTLong__RTLong(b) {
    const this$1 = $m_RTLong$();
    const lo = this$1.remainderImpl__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, b.RTLong__f_lo, b.RTLong__f_hi);
    return new $c_RTLong(lo, this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn)
  };
  compareTo__O__I(x$1) {
    const that = x$1;
    return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, that.RTLong__f_lo, that.RTLong__f_hi)
  };
}
function $isArrayOf_RTLong(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.RTLong)))
}
const $d_RTLong = new $TypeData().initClass({
  RTLong: 0
}, false, "org.scalajs.linker.runtime.RuntimeLong", {
  RTLong: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
});
$c_RTLong.prototype.$classData = $d_RTLong;
class $c_sc_AbstractIterator extends $c_O {
  iterator__sc_Iterator() {
    return this
  };
  isEmpty__Z() {
    return (!this.hasNext__Z())
  };
  drop__I__sc_Iterator(n) {
    return $f_sc_Iterator__drop__I__sc_Iterator(this, n)
  };
  toString__T() {
    return "<iterator>"
  };
  copyToArray__O__I__I__I(xs, start, len) {
    return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len)
  };
  addString__scm_StringBuilder__T__T__T__scm_StringBuilder(b, start, sep, end) {
    return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
  };
  knownSize__I() {
    return (-1)
  };
}
class $c_sc_Iterable$ extends $c_sc_IterableFactory$Delegate {
  constructor() {
    super();
    $ct_sc_IterableFactory$Delegate__sc_IterableFactory__(this, $m_sci_Iterable$())
  };
}
const $d_sc_Iterable$ = new $TypeData().initClass({
  sc_Iterable$: 0
}, false, "scala.collection.Iterable$", {
  sc_Iterable$: 1,
  sc_IterableFactory$Delegate: 1,
  O: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sc_Iterable$.prototype.$classData = $d_sc_Iterable$;
let $n_sc_Iterable$ = (void 0);
function $m_sc_Iterable$() {
  if ((!$n_sc_Iterable$)) {
    $n_sc_Iterable$ = new $c_sc_Iterable$()
  };
  return $n_sc_Iterable$
}
const $ct_sc_SeqFactory$Delegate__sc_SeqFactory__ = (function($thiz, delegate) {
  $thiz.sc_SeqFactory$Delegate__f_delegate = delegate;
  return $thiz
});
class $c_sc_SeqFactory$Delegate extends $c_O {
  constructor() {
    super();
    this.sc_SeqFactory$Delegate__f_delegate = null
  };
  from__sc_IterableOnce__sc_SeqOps(it) {
    return this.sc_SeqFactory$Delegate__f_delegate.from__sc_IterableOnce__O(it)
  };
  from__sc_IterableOnce__O(source) {
    return this.from__sc_IterableOnce__sc_SeqOps(source)
  };
}
const $f_sc_SeqOps__indexOf__O__I__I = (function($thiz, elem, from) {
  return $thiz.indexWhere__F1__I__I(new $c_sjsr_AnonFunction1(((this$1, elem$1) => ((x$1$2) => $m_sr_BoxesRunTime$().equals__O__O__Z(elem$1, x$1$2)))($thiz, elem)), from)
});
const $f_sc_SeqOps__contains__O__Z = (function($thiz, elem) {
  return $thiz.exists__F1__Z(new $c_sjsr_AnonFunction1(((this$1, elem$1) => ((x$3$2) => $m_sr_BoxesRunTime$().equals__O__O__Z(x$3$2, elem$1)))($thiz, elem)))
});
const $f_sc_SeqOps__isEmpty__Z = (function($thiz) {
  return ($thiz.lengthCompare__I__I(0) === 0)
});
const $f_sc_SeqOps__sameElements__sc_IterableOnce__Z = (function($thiz, that) {
  const thisKnownSize = $thiz.knownSize__I();
  let knownSizeDifference;
  if ((thisKnownSize !== (-1))) {
    const thatKnownSize = that.knownSize__I();
    knownSizeDifference = ((thatKnownSize !== (-1)) && (thisKnownSize !== thatKnownSize))
  } else {
    knownSizeDifference = false
  };
  if ((!knownSizeDifference)) {
    const this$1 = $thiz.iterator__sc_Iterator();
    return $f_sc_Iterator__sameElements__sc_IterableOnce__Z(this$1, that)
  } else {
    return false
  }
});
function $is_sc_SeqOps(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_SeqOps)))
}
function $isArrayOf_sc_SeqOps(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_SeqOps)))
}
class $c_sci_Iterable$ extends $c_sc_IterableFactory$Delegate {
  constructor() {
    super();
    $ct_sc_IterableFactory$Delegate__sc_IterableFactory__(this, $m_sci_List$())
  };
  from__sc_IterableOnce__sci_Iterable(it) {
    if ($is_sci_Iterable(it)) {
      const x2 = it;
      return x2
    } else {
      return $c_sc_IterableFactory$Delegate.prototype.from__sc_IterableOnce__O.call(this, it)
    }
  };
  from__sc_IterableOnce__O(it) {
    return this.from__sc_IterableOnce__sci_Iterable(it)
  };
}
const $d_sci_Iterable$ = new $TypeData().initClass({
  sci_Iterable$: 0
}, false, "scala.collection.immutable.Iterable$", {
  sci_Iterable$: 1,
  sc_IterableFactory$Delegate: 1,
  O: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Iterable$.prototype.$classData = $d_sci_Iterable$;
let $n_sci_Iterable$ = (void 0);
function $m_sci_Iterable$() {
  if ((!$n_sci_Iterable$)) {
    $n_sci_Iterable$ = new $c_sci_Iterable$()
  };
  return $n_sci_Iterable$
}
class $c_sci_LazyList$ extends $c_O {
  constructor() {
    super();
    this.sci_LazyList$__f__empty = null;
    this.sci_LazyList$__f_scala$collection$immutable$LazyList$$anyToMarker = null;
    $n_sci_LazyList$ = this;
    const state = new $c_sjsr_AnonFunction0(((this$1) => (() => $m_sci_LazyList$State$Empty$()))(this));
    this.sci_LazyList$__f__empty = new $c_sci_LazyList(state).force__sci_LazyList();
    this.sci_LazyList$__f_scala$collection$immutable$LazyList$$anyToMarker = new $c_sjsr_AnonFunction1(((this$2) => ((x$10$2) => $m_sr_Statics$PFMarker$()))(this))
  };
  scala$collection$immutable$LazyList$$dropImpl__sci_LazyList__I__sci_LazyList(ll, n) {
    const restRef = new $c_sr_ObjectRef(ll);
    const iRef = new $c_sr_IntRef(n);
    const state = new $c_sjsr_AnonFunction0(((this$3, restRef$1, iRef$1) => (() => {
      let rest = restRef$1.sr_ObjectRef__f_elem;
      let i = iRef$1.sr_IntRef__f_elem;
      while (((i > 0) && (!rest.isEmpty__Z()))) {
        const this$4 = rest;
        rest = this$4.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
        restRef$1.sr_ObjectRef__f_elem = rest;
        i = (((-1) + i) | 0);
        iRef$1.sr_IntRef__f_elem = i
      };
      return rest.scala$collection$immutable$LazyList$$state__sci_LazyList$State()
    }))(this, restRef, iRef));
    return new $c_sci_LazyList(state)
  };
  from__sc_IterableOnce__sci_LazyList(coll) {
    if ((coll instanceof $c_sci_LazyList)) {
      const x2 = coll;
      return x2
    } else if ((coll.knownSize__I() === 0)) {
      return this.sci_LazyList$__f__empty
    } else {
      const state = new $c_sjsr_AnonFunction0(((this$1, coll$1) => (() => $m_sci_LazyList$().scala$collection$immutable$LazyList$$stateFromIterator__sc_Iterator__sci_LazyList$State(coll$1.iterator__sc_Iterator())))(this, coll));
      return new $c_sci_LazyList(state)
    }
  };
  scala$collection$immutable$LazyList$$stateFromIterator__sc_Iterator__sci_LazyList$State(it) {
    if (it.hasNext__Z()) {
      const hd = it.next__O();
      const state = new $c_sjsr_AnonFunction0(((this$1, it$1) => (() => $m_sci_LazyList$().scala$collection$immutable$LazyList$$stateFromIterator__sc_Iterator__sci_LazyList$State(it$1)))(this, it));
      const tl = new $c_sci_LazyList(state);
      return new $c_sci_LazyList$State$Cons(hd, tl)
    } else {
      return $m_sci_LazyList$State$Empty$()
    }
  };
  from__sc_IterableOnce__O(source) {
    return this.from__sc_IterableOnce__sci_LazyList(source)
  };
}
const $d_sci_LazyList$ = new $TypeData().initClass({
  sci_LazyList$: 0
}, false, "scala.collection.immutable.LazyList$", {
  sci_LazyList$: 1,
  O: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_LazyList$.prototype.$classData = $d_sci_LazyList$;
let $n_sci_LazyList$ = (void 0);
function $m_sci_LazyList$() {
  if ((!$n_sci_LazyList$)) {
    $n_sci_LazyList$ = new $c_sci_LazyList$()
  };
  return $n_sci_LazyList$
}
class $c_sci_Stream$ extends $c_O {
  from__sc_IterableOnce__sci_Stream(coll) {
    if ((coll instanceof $c_sci_Stream)) {
      const x2 = coll;
      return x2
    } else {
      return this.fromIterator__sc_Iterator__sci_Stream(coll.iterator__sc_Iterator())
    }
  };
  fromIterator__sc_Iterator__sci_Stream(it) {
    return (it.hasNext__Z() ? new $c_sci_Stream$Cons(it.next__O(), new $c_sjsr_AnonFunction0(((this$1, it$1) => (() => $m_sci_Stream$().fromIterator__sc_Iterator__sci_Stream(it$1)))(this, it))) : $m_sci_Stream$Empty$())
  };
  from__sc_IterableOnce__O(source) {
    return this.from__sc_IterableOnce__sci_Stream(source)
  };
}
const $d_sci_Stream$ = new $TypeData().initClass({
  sci_Stream$: 0
}, false, "scala.collection.immutable.Stream$", {
  sci_Stream$: 1,
  O: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Stream$.prototype.$classData = $d_sci_Stream$;
let $n_sci_Stream$ = (void 0);
function $m_sci_Stream$() {
  if ((!$n_sci_Stream$)) {
    $n_sci_Stream$ = new $c_sci_Stream$()
  };
  return $n_sci_Stream$
}
class $c_sci_WrappedString$ extends $c_O {
  constructor() {
    super();
    this.sci_WrappedString$__f_empty = null;
    $n_sci_WrappedString$ = this;
    this.sci_WrappedString$__f_empty = new $c_sci_WrappedString("")
  };
  fromSpecific__sc_IterableOnce__sci_WrappedString(it) {
    const b = this.newBuilder__scm_Builder();
    const s = it.knownSize__I();
    if ((s >= 0)) {
      b.sizeHint__I__V(s)
    };
    b.addAll__sc_IterableOnce__scm_Growable(it);
    return b.result__O()
  };
  newBuilder__scm_Builder() {
    const this$2 = $ct_scm_StringBuilder__(new $c_scm_StringBuilder());
    const f = new $c_sjsr_AnonFunction1(((this$1) => ((x$2) => {
      const x = x$2;
      return new $c_sci_WrappedString(x)
    }))(this));
    return new $c_scm_Builder$$anon$1(this$2, f)
  };
}
const $d_sci_WrappedString$ = new $TypeData().initClass({
  sci_WrappedString$: 0
}, false, "scala.collection.immutable.WrappedString$", {
  sci_WrappedString$: 1,
  O: 1,
  sc_SpecificIterableFactory: 1,
  sc_Factory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_WrappedString$.prototype.$classData = $d_sci_WrappedString$;
let $n_sci_WrappedString$ = (void 0);
function $m_sci_WrappedString$() {
  if ((!$n_sci_WrappedString$)) {
    $n_sci_WrappedString$ = new $c_sci_WrappedString$()
  };
  return $n_sci_WrappedString$
}
class $c_scm_Builder$$anon$1 extends $c_O {
  constructor(outer, f$1) {
    super();
    this.scm_Builder$$anon$1__f_$outer = null;
    this.scm_Builder$$anon$1__f_f$1 = null;
    if ((outer === null)) {
      throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
    } else {
      this.scm_Builder$$anon$1__f_$outer = outer
    };
    this.scm_Builder$$anon$1__f_f$1 = f$1
  };
  addOne__O__scm_Builder$$anon$1(x) {
    const this$1 = this.scm_Builder$$anon$1__f_$outer;
    this$1.addOne__O__scm_Growable(x);
    return this
  };
  addAll__sc_IterableOnce__scm_Builder$$anon$1(xs) {
    const this$1 = this.scm_Builder$$anon$1__f_$outer;
    this$1.addAll__sc_IterableOnce__scm_Growable(xs);
    return this
  };
  sizeHint__I__V(size) {
    this.scm_Builder$$anon$1__f_$outer.sizeHint__I__V(size)
  };
  result__O() {
    return this.scm_Builder$$anon$1__f_f$1.apply__O__O(this.scm_Builder$$anon$1__f_$outer.result__O())
  };
  addAll__sc_IterableOnce__scm_Growable(xs) {
    return this.addAll__sc_IterableOnce__scm_Builder$$anon$1(xs)
  };
  addOne__O__scm_Growable(elem) {
    return this.addOne__O__scm_Builder$$anon$1(elem)
  };
}
const $d_scm_Builder$$anon$1 = new $TypeData().initClass({
  scm_Builder$$anon$1: 0
}, false, "scala.collection.mutable.Builder$$anon$1", {
  scm_Builder$$anon$1: 1,
  O: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1
});
$c_scm_Builder$$anon$1.prototype.$classData = $d_scm_Builder$$anon$1;
class $c_Lethmodel_ETHHolder$Status$CurrentlyJustHolding$ extends $c_Lethmodel_ETHHolder$Status {
  productPrefix__T() {
    return "CurrentlyJustHolding"
  };
  productArity__I() {
    return 0
  };
  productElement__I__O(x$1) {
    return $m_sr_Statics$().ioobe__I__O(x$1)
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    return 1227156401
  };
  toString__T() {
    return "CurrentlyJustHolding"
  };
}
const $d_Lethmodel_ETHHolder$Status$CurrentlyJustHolding$ = new $TypeData().initClass({
  Lethmodel_ETHHolder$Status$CurrentlyJustHolding$: 0
}, false, "ethmodel.ETHHolder$Status$CurrentlyJustHolding$", {
  Lethmodel_ETHHolder$Status$CurrentlyJustHolding$: 1,
  Lethmodel_ETHHolder$Status: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_Lethmodel_ETHHolder$Status$CurrentlyJustHolding$.prototype.$classData = $d_Lethmodel_ETHHolder$Status$CurrentlyJustHolding$;
let $n_Lethmodel_ETHHolder$Status$CurrentlyJustHolding$ = (void 0);
function $m_Lethmodel_ETHHolder$Status$CurrentlyJustHolding$() {
  if ((!$n_Lethmodel_ETHHolder$Status$CurrentlyJustHolding$)) {
    $n_Lethmodel_ETHHolder$Status$CurrentlyJustHolding$ = new $c_Lethmodel_ETHHolder$Status$CurrentlyJustHolding$()
  };
  return $n_Lethmodel_ETHHolder$Status$CurrentlyJustHolding$
}
class $c_Lethmodel_ETHHolder$Status$CurrentlyValidating extends $c_Lethmodel_ETHHolder$Status {
  constructor(annualizedRevenueUsd, annualizedExpensesUsd, roiApr) {
    super();
    this.Lethmodel_ETHHolder$Status$CurrentlyValidating__f_annualizedRevenueUsd = $L0;
    this.Lethmodel_ETHHolder$Status$CurrentlyValidating__f_annualizedExpensesUsd = $L0;
    this.Lethmodel_ETHHolder$Status$CurrentlyValidating__f_roiApr = 0.0;
    this.Lethmodel_ETHHolder$Status$CurrentlyValidating__f_annualizedRevenueUsd = annualizedRevenueUsd;
    this.Lethmodel_ETHHolder$Status$CurrentlyValidating__f_annualizedExpensesUsd = annualizedExpensesUsd;
    this.Lethmodel_ETHHolder$Status$CurrentlyValidating__f_roiApr = roiApr
  };
  productPrefix__T() {
    return "CurrentlyValidating"
  };
  productArity__I() {
    return 3
  };
  productElement__I__O(x$1) {
    switch (x$1) {
      case 0: {
        return this.Lethmodel_ETHHolder$Status$CurrentlyValidating__f_annualizedRevenueUsd;
        break
      }
      case 1: {
        return this.Lethmodel_ETHHolder$Status$CurrentlyValidating__f_annualizedExpensesUsd;
        break
      }
      case 2: {
        return this.Lethmodel_ETHHolder$Status$CurrentlyValidating__f_roiApr;
        break
      }
      default: {
        return $m_sr_Statics$().ioobe__I__O(x$1)
      }
    }
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    let acc = (-889275714);
    const hash = acc;
    const data = $f_T__hashCode__I("CurrentlyValidating");
    acc = $m_sr_Statics$().mix__I__I__I(hash, data);
    const hash$1 = acc;
    const t = this.Lethmodel_ETHHolder$Status$CurrentlyValidating__f_annualizedRevenueUsd;
    const lo = t.RTLong__f_lo;
    const hi = t.RTLong__f_hi;
    const data$1 = $m_sr_Statics$().longHash__J__I(new $c_RTLong(lo, hi));
    acc = $m_sr_Statics$().mix__I__I__I(hash$1, data$1);
    const hash$2 = acc;
    const t$1 = this.Lethmodel_ETHHolder$Status$CurrentlyValidating__f_annualizedExpensesUsd;
    const lo$1 = t$1.RTLong__f_lo;
    const hi$1 = t$1.RTLong__f_hi;
    const data$2 = $m_sr_Statics$().longHash__J__I(new $c_RTLong(lo$1, hi$1));
    acc = $m_sr_Statics$().mix__I__I__I(hash$2, data$2);
    const hash$3 = acc;
    const dv = this.Lethmodel_ETHHolder$Status$CurrentlyValidating__f_roiApr;
    const data$3 = $m_sr_Statics$().doubleHash__D__I(dv);
    acc = $m_sr_Statics$().mix__I__I__I(hash$3, data$3);
    const hash$4 = acc;
    return $m_sr_Statics$().finalizeHash__I__I__I(hash$4, 3)
  };
  toString__T() {
    return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_Lethmodel_ETHHolder$Status$CurrentlyValidating)) {
      const CurrentlyValidating$1 = x$1;
      const t = this.Lethmodel_ETHHolder$Status$CurrentlyValidating__f_annualizedRevenueUsd;
      const lo = t.RTLong__f_lo;
      const hi = t.RTLong__f_hi;
      const b = CurrentlyValidating$1.Lethmodel_ETHHolder$Status$CurrentlyValidating__f_annualizedRevenueUsd;
      let $$x1;
      if (((lo === b.RTLong__f_lo) && (hi === b.RTLong__f_hi))) {
        const t$1 = this.Lethmodel_ETHHolder$Status$CurrentlyValidating__f_annualizedExpensesUsd;
        const lo$1 = t$1.RTLong__f_lo;
        const hi$1 = t$1.RTLong__f_hi;
        const b$1 = CurrentlyValidating$1.Lethmodel_ETHHolder$Status$CurrentlyValidating__f_annualizedExpensesUsd;
        $$x1 = ((lo$1 === b$1.RTLong__f_lo) && (hi$1 === b$1.RTLong__f_hi))
      } else {
        $$x1 = false
      };
      if ($$x1) {
        return (this.Lethmodel_ETHHolder$Status$CurrentlyValidating__f_roiApr === CurrentlyValidating$1.Lethmodel_ETHHolder$Status$CurrentlyValidating__f_roiApr)
      } else {
        return false
      }
    } else {
      return false
    }
  };
}
function $isArrayOf_Lethmodel_ETHHolder$Status$CurrentlyValidating(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lethmodel_ETHHolder$Status$CurrentlyValidating)))
}
const $d_Lethmodel_ETHHolder$Status$CurrentlyValidating = new $TypeData().initClass({
  Lethmodel_ETHHolder$Status$CurrentlyValidating: 0
}, false, "ethmodel.ETHHolder$Status$CurrentlyValidating", {
  Lethmodel_ETHHolder$Status$CurrentlyValidating: 1,
  Lethmodel_ETHHolder$Status: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_Lethmodel_ETHHolder$Status$CurrentlyValidating.prototype.$classData = $d_Lethmodel_ETHHolder$Status$CurrentlyValidating;
const $ct_jl_ArithmeticException__T__ = (function($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
});
class $c_jl_ArithmeticException extends $c_jl_RuntimeException {
}
const $d_jl_ArithmeticException = new $TypeData().initClass({
  jl_ArithmeticException: 0
}, false, "java.lang.ArithmeticException", {
  jl_ArithmeticException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_ArithmeticException.prototype.$classData = $d_jl_ArithmeticException;
const $ct_jl_IllegalArgumentException__T__ = (function($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
});
const $ct_jl_IllegalArgumentException__ = (function($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz
});
class $c_jl_IllegalArgumentException extends $c_jl_RuntimeException {
}
const $d_jl_IllegalArgumentException = new $TypeData().initClass({
  jl_IllegalArgumentException: 0
}, false, "java.lang.IllegalArgumentException", {
  jl_IllegalArgumentException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_IllegalArgumentException.prototype.$classData = $d_jl_IllegalArgumentException;
const $ct_jl_IndexOutOfBoundsException__T__ = (function($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
});
class $c_jl_IndexOutOfBoundsException extends $c_jl_RuntimeException {
}
const $d_jl_IndexOutOfBoundsException = new $TypeData().initClass({
  jl_IndexOutOfBoundsException: 0
}, false, "java.lang.IndexOutOfBoundsException", {
  jl_IndexOutOfBoundsException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_IndexOutOfBoundsException.prototype.$classData = $d_jl_IndexOutOfBoundsException;
class $c_jl_NullPointerException extends $c_jl_RuntimeException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true)
  };
}
const $d_jl_NullPointerException = new $TypeData().initClass({
  jl_NullPointerException: 0
}, false, "java.lang.NullPointerException", {
  jl_NullPointerException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_NullPointerException.prototype.$classData = $d_jl_NullPointerException;
class $c_jl_SecurityException {
}
function $isArrayOf_jl_SecurityException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_SecurityException)))
}
const $ct_jl_UnsupportedOperationException__ = (function($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz
});
const $ct_jl_UnsupportedOperationException__T__ = (function($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
});
class $c_jl_UnsupportedOperationException extends $c_jl_RuntimeException {
}
const $d_jl_UnsupportedOperationException = new $TypeData().initClass({
  jl_UnsupportedOperationException: 0
}, false, "java.lang.UnsupportedOperationException", {
  jl_UnsupportedOperationException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_UnsupportedOperationException.prototype.$classData = $d_jl_UnsupportedOperationException;
const $ct_ju_NoSuchElementException__T__ = (function($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
});
const $ct_ju_NoSuchElementException__ = (function($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz
});
class $c_ju_NoSuchElementException extends $c_jl_RuntimeException {
}
const $d_ju_NoSuchElementException = new $TypeData().initClass({
  ju_NoSuchElementException: 0
}, false, "java.util.NoSuchElementException", {
  ju_NoSuchElementException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_ju_NoSuchElementException.prototype.$classData = $d_ju_NoSuchElementException;
const $p_s_MatchError__objString$lzycompute__T = (function($thiz) {
  if ((!$thiz.s_MatchError__f_bitmap$0)) {
    $thiz.s_MatchError__f_objString = (($thiz.s_MatchError__f_obj === null) ? "null" : $p_s_MatchError__liftedTree1$1__T($thiz));
    $thiz.s_MatchError__f_bitmap$0 = true
  };
  return $thiz.s_MatchError__f_objString
});
const $p_s_MatchError__objString__T = (function($thiz) {
  return ((!$thiz.s_MatchError__f_bitmap$0) ? $p_s_MatchError__objString$lzycompute__T($thiz) : $thiz.s_MatchError__f_objString)
});
const $p_s_MatchError__ofClass$1__T = (function($thiz) {
  const this$1 = $thiz.s_MatchError__f_obj;
  return ("of class " + $objectGetClass(this$1).getName__T())
});
const $p_s_MatchError__liftedTree1$1__T = (function($thiz) {
  try {
    return ((($dp_toString__T($thiz.s_MatchError__f_obj) + " (") + $p_s_MatchError__ofClass$1__T($thiz)) + ")")
  } catch (e) {
    const e$2 = $m_sjsr_package$().wrapJavaScriptException__O__jl_Throwable(e);
    if ((e$2 !== null)) {
      return ("an instance " + $p_s_MatchError__ofClass$1__T($thiz))
    } else {
      throw e
    }
  }
});
class $c_s_MatchError extends $c_jl_RuntimeException {
  constructor(obj) {
    super();
    this.s_MatchError__f_objString = null;
    this.s_MatchError__f_obj = null;
    this.s_MatchError__f_bitmap$0 = false;
    this.s_MatchError__f_obj = obj;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true)
  };
  getMessage__T() {
    return $p_s_MatchError__objString__T(this)
  };
}
const $d_s_MatchError = new $TypeData().initClass({
  s_MatchError: 0
}, false, "scala.MatchError", {
  s_MatchError: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_MatchError.prototype.$classData = $d_s_MatchError;
class $c_s_Option extends $c_O {
  isEmpty__Z() {
    return (this === $m_s_None$())
  };
  knownSize__I() {
    return (this.isEmpty__Z() ? 0 : 1)
  };
  iterator__sc_Iterator() {
    return (this.isEmpty__Z() ? $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty : ($m_sc_Iterator$(), this.get__E()))
  };
}
class $c_T2 extends $c_O {
  constructor(_1, _2) {
    super();
    this.T2__f__1 = null;
    this.T2__f__2 = null;
    this.T2__f__1 = _1;
    this.T2__f__2 = _2
  };
  productArity__I() {
    return 2
  };
  productElement__I__O(n) {
    return $f_s_Product2__productElement__I__O(this, n)
  };
  toString__T() {
    return (((("(" + this.T2__f__1) + ",") + this.T2__f__2) + ")")
  };
  productPrefix__T() {
    return "Tuple2"
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    const this$2 = $m_s_util_hashing_MurmurHash3$();
    return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_T2)) {
      const Tuple2$1 = x$1;
      return ($m_sr_BoxesRunTime$().equals__O__O__Z(this.T2__f__1, Tuple2$1.T2__f__1) && $m_sr_BoxesRunTime$().equals__O__O__Z(this.T2__f__2, Tuple2$1.T2__f__2))
    } else {
      return false
    }
  };
}
function $isArrayOf_T2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.T2)))
}
const $d_T2 = new $TypeData().initClass({
  T2: 0
}, false, "scala.Tuple2", {
  T2: 1,
  O: 1,
  s_Product2: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_T2.prototype.$classData = $d_T2;
class $c_sc_ClassTagSeqFactory$AnySeqDelegate extends $c_sc_ClassTagIterableFactory$AnyIterableDelegate {
  constructor(delegate) {
    super();
    $ct_sc_ClassTagIterableFactory$AnyIterableDelegate__sc_ClassTagIterableFactory__(this, delegate)
  };
}
const $d_sc_ClassTagSeqFactory$AnySeqDelegate = new $TypeData().initClass({
  sc_ClassTagSeqFactory$AnySeqDelegate: 0
}, false, "scala.collection.ClassTagSeqFactory$AnySeqDelegate", {
  sc_ClassTagSeqFactory$AnySeqDelegate: 1,
  sc_ClassTagIterableFactory$AnyIterableDelegate: 1,
  O: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1,
  sc_SeqFactory: 1
});
$c_sc_ClassTagSeqFactory$AnySeqDelegate.prototype.$classData = $d_sc_ClassTagSeqFactory$AnySeqDelegate;
const $f_sc_IndexedSeqOps__drop__I__O = (function($thiz, n) {
  return $thiz.fromSpecific__sc_IterableOnce__O(new $c_sc_IndexedSeqView$Drop($thiz, n))
});
const $f_sc_Iterable__toString__T = (function($thiz) {
  const start = ($thiz.className__T() + "(");
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, ", ", ")")
});
function $is_sc_Iterable(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_Iterable)))
}
function $isArrayOf_sc_Iterable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_Iterable)))
}
class $c_sc_Iterator$$anon$19 extends $c_sc_AbstractIterator {
  hasNext__Z() {
    return false
  };
  next__E() {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "next on empty iterator")
  };
  knownSize__I() {
    return 0
  };
  next__O() {
    this.next__E()
  };
}
const $d_sc_Iterator$$anon$19 = new $TypeData().initClass({
  sc_Iterator$$anon$19: 0
}, false, "scala.collection.Iterator$$anon$19", {
  sc_Iterator$$anon$19: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sc_Iterator$$anon$19.prototype.$classData = $d_sc_Iterator$$anon$19;
class $c_sc_Iterator$$anon$20 extends $c_sc_AbstractIterator {
  constructor(a$1) {
    super();
    this.sc_Iterator$$anon$20__f_consumed = false;
    this.sc_Iterator$$anon$20__f_a$1 = null;
    this.sc_Iterator$$anon$20__f_a$1 = a$1;
    this.sc_Iterator$$anon$20__f_consumed = false
  };
  hasNext__Z() {
    return (!this.sc_Iterator$$anon$20__f_consumed)
  };
  next__O() {
    if (this.sc_Iterator$$anon$20__f_consumed) {
      return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O()
    } else {
      this.sc_Iterator$$anon$20__f_consumed = true;
      return this.sc_Iterator$$anon$20__f_a$1
    }
  };
}
const $d_sc_Iterator$$anon$20 = new $TypeData().initClass({
  sc_Iterator$$anon$20: 0
}, false, "scala.collection.Iterator$$anon$20", {
  sc_Iterator$$anon$20: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sc_Iterator$$anon$20.prototype.$classData = $d_sc_Iterator$$anon$20;
class $c_sc_LinearSeqIterator extends $c_sc_AbstractIterator {
  constructor(coll) {
    super();
    this.sc_LinearSeqIterator__f_coll = null;
    this.sc_LinearSeqIterator__f_these = null;
    this.sc_LinearSeqIterator__f_coll = coll;
    this.sc_LinearSeqIterator__f_these = new $c_sc_LinearSeqIterator$LazyCell(this, new $c_sjsr_AnonFunction0(((this$1) => (() => this$1.sc_LinearSeqIterator__f_coll))(this)))
  };
  hasNext__Z() {
    const this$1 = this.sc_LinearSeqIterator__f_these.v__sc_LinearSeqOps();
    return (!this$1.isEmpty__Z())
  };
  next__O() {
    if ((!this.hasNext__Z())) {
      return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O()
    } else {
      const cur = this.sc_LinearSeqIterator__f_these.v__sc_LinearSeqOps();
      const result = cur.head__O();
      this.sc_LinearSeqIterator__f_these = new $c_sc_LinearSeqIterator$LazyCell(this, new $c_sjsr_AnonFunction0(((this$1, cur$1) => (() => cur$1.tail__O()))(this, cur)));
      return result
    }
  };
}
const $d_sc_LinearSeqIterator = new $TypeData().initClass({
  sc_LinearSeqIterator: 0
}, false, "scala.collection.LinearSeqIterator", {
  sc_LinearSeqIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sc_LinearSeqIterator.prototype.$classData = $d_sc_LinearSeqIterator;
const $p_sc_LinearSeqOps__loop$1__I__sc_LinearSeq__I__I = (function($thiz, i, xs, len$1) {
  while (true) {
    if ((i === len$1)) {
      return (xs.isEmpty__Z() ? 0 : 1)
    } else if (xs.isEmpty__Z()) {
      return (-1)
    } else {
      const temp$i = ((1 + i) | 0);
      const temp$xs = xs.tail__O();
      i = temp$i;
      xs = temp$xs
    }
  }
});
const $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z = (function($thiz, a, b) {
  while (true) {
    if ((a === b)) {
      return true
    } else {
      const this$1 = a;
      let $$x1;
      if ((!this$1.isEmpty__Z())) {
        const this$2 = b;
        $$x1 = (!this$2.isEmpty__Z())
      } else {
        $$x1 = false
      };
      if (($$x1 && $m_sr_BoxesRunTime$().equals__O__O__Z(a.head__O(), b.head__O()))) {
        const temp$a = a.tail__O();
        const temp$b = b.tail__O();
        a = temp$a;
        b = temp$b
      } else {
        return (a.isEmpty__Z() && b.isEmpty__Z())
      }
    }
  }
});
const $f_sc_LinearSeqOps__iterator__sc_Iterator = (function($thiz) {
  return (($thiz.knownSize__I() === 0) ? $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty : new $c_sc_LinearSeqIterator($thiz))
});
const $f_sc_LinearSeqOps__length__I = (function($thiz) {
  let these = $thiz;
  let len = 0;
  while (true) {
    const this$1 = these;
    if ((!this$1.isEmpty__Z())) {
      len = ((1 + len) | 0);
      these = these.tail__O()
    } else {
      break
    }
  };
  return len
});
const $f_sc_LinearSeqOps__lengthCompare__I__I = (function($thiz, len) {
  return ((len < 0) ? 1 : $p_sc_LinearSeqOps__loop$1__I__sc_LinearSeq__I__I($thiz, 0, $thiz, len))
});
const $f_sc_LinearSeqOps__apply__I__O = (function($thiz, n) {
  if ((n < 0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n))
  };
  const skipped = $thiz.drop__I__O(n);
  if (skipped.isEmpty__Z()) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n))
  };
  return skipped.head__O()
});
const $f_sc_LinearSeqOps__exists__F1__Z = (function($thiz, p) {
  let these = $thiz;
  while ((!these.isEmpty__Z())) {
    if ((!(!p.apply__O__O(these.head__O())))) {
      return true
    };
    these = these.tail__O()
  };
  return false
});
const $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z = (function($thiz, that) {
  if ($is_sc_LinearSeq(that)) {
    const x2 = that;
    return $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z($thiz, $thiz, x2)
  } else {
    return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that)
  }
});
const $f_sc_LinearSeqOps__indexWhere__F1__I__I = (function($thiz, p, from) {
  let i = ((from > 0) ? from : 0);
  let these = $thiz.drop__I__O(from);
  while (true) {
    const this$3 = these;
    if ((!this$3.isEmpty__Z())) {
      if ((!(!p.apply__O__O(these.head__O())))) {
        return i
      };
      i = ((1 + i) | 0);
      these = these.tail__O()
    } else {
      break
    }
  };
  return (-1)
});
function $is_sc_LinearSeqOps(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_LinearSeqOps)))
}
function $isArrayOf_sc_LinearSeqOps(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_LinearSeqOps)))
}
class $c_sc_StrictOptimizedLinearSeqOps$$anon$1 extends $c_sc_AbstractIterator {
  constructor(outer) {
    super();
    this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current = null;
    this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current = outer
  };
  hasNext__Z() {
    return (!this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current.isEmpty__Z())
  };
  next__O() {
    const r = this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current.head__O();
    this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current = this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current.tail__O();
    return r
  };
}
const $d_sc_StrictOptimizedLinearSeqOps$$anon$1 = new $TypeData().initClass({
  sc_StrictOptimizedLinearSeqOps$$anon$1: 0
}, false, "scala.collection.StrictOptimizedLinearSeqOps$$anon$1", {
  sc_StrictOptimizedLinearSeqOps$$anon$1: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype.$classData = $d_sc_StrictOptimizedLinearSeqOps$$anon$1;
const $p_sci_HashSetBuilder__isAliased__Z = (function($thiz) {
  return ($thiz.sci_HashSetBuilder__f_aliased !== null)
});
const $p_sci_HashSetBuilder__insertElement__AI__I__I__AI = (function($thiz, as, ix, elem) {
  if ((ix < 0)) {
    throw $ct_jl_ArrayIndexOutOfBoundsException__(new $c_jl_ArrayIndexOutOfBoundsException())
  };
  if ((ix > as.u.length)) {
    throw $ct_jl_ArrayIndexOutOfBoundsException__(new $c_jl_ArrayIndexOutOfBoundsException())
  };
  const result = $newArrayObject($d_I.getArrayOf(), [((1 + as.u.length) | 0)]);
  $systemArraycopy(as, 0, result, 0, ix);
  result.u[ix] = elem;
  const destPos = ((1 + ix) | 0);
  const length = ((as.u.length - ix) | 0);
  $systemArraycopy(as, ix, result, destPos, length);
  return result
});
const $p_sci_HashSetBuilder__insertValue__sci_BitmapIndexedSetNode__I__O__I__I__V = (function($thiz, bm, bitpos, key, originalHash, keyHash) {
  const dataIx = bm.dataIndex__I__I(bitpos);
  const src = bm.sci_BitmapIndexedSetNode__f_content;
  const dst = $newArrayObject($d_O.getArrayOf(), [((1 + src.u.length) | 0)]);
  $systemArraycopy(src, 0, dst, 0, dataIx);
  dst.u[dataIx] = key;
  const destPos = ((1 + dataIx) | 0);
  const length = ((src.u.length - dataIx) | 0);
  $systemArraycopy(src, dataIx, dst, destPos, length);
  const dstHashes = $p_sci_HashSetBuilder__insertElement__AI__I__I__AI($thiz, bm.sci_BitmapIndexedSetNode__f_originalHashes, dataIx, originalHash);
  bm.sci_BitmapIndexedSetNode__f_dataMap = (bm.sci_BitmapIndexedSetNode__f_dataMap | bitpos);
  bm.sci_BitmapIndexedSetNode__f_content = dst;
  bm.sci_BitmapIndexedSetNode__f_originalHashes = dstHashes;
  bm.sci_BitmapIndexedSetNode__f_size = ((1 + bm.sci_BitmapIndexedSetNode__f_size) | 0);
  bm.sci_BitmapIndexedSetNode__f_cachedJavaKeySetHashCode = ((bm.sci_BitmapIndexedSetNode__f_cachedJavaKeySetHashCode + keyHash) | 0)
});
const $p_sci_HashSetBuilder__setValue__sci_BitmapIndexedSetNode__I__O__V = (function($thiz, bm, bitpos, elem) {
  const dataIx = bm.dataIndex__I__I(bitpos);
  bm.sci_BitmapIndexedSetNode__f_content.u[dataIx] = elem
});
const $p_sci_HashSetBuilder__ensureUnaliased__V = (function($thiz) {
  if ($p_sci_HashSetBuilder__isAliased__Z($thiz)) {
    $p_sci_HashSetBuilder__copyElems__V($thiz)
  };
  $thiz.sci_HashSetBuilder__f_aliased = null
});
const $p_sci_HashSetBuilder__copyElems__V = (function($thiz) {
  $thiz.sci_HashSetBuilder__f_scala$collection$immutable$HashSetBuilder$$rootNode = $thiz.sci_HashSetBuilder__f_scala$collection$immutable$HashSetBuilder$$rootNode.copy__sci_BitmapIndexedSetNode()
});
class $c_sci_HashSetBuilder extends $c_O {
  constructor() {
    super();
    this.sci_HashSetBuilder__f_aliased = null;
    this.sci_HashSetBuilder__f_scala$collection$immutable$HashSetBuilder$$rootNode = null;
    this.sci_HashSetBuilder__f_scala$collection$immutable$HashSetBuilder$$rootNode = new $c_sci_BitmapIndexedSetNode(0, 0, $m_s_Array$EmptyArrays$().s_Array$EmptyArrays$__f_emptyObjectArray, $m_s_Array$EmptyArrays$().s_Array$EmptyArrays$__f_emptyIntArray, 0, 0)
  };
  sizeHint__I__V(size) {
    /*<skip>*/
  };
  update__sci_SetNode__O__I__I__I__V(setNode, element, originalHash, elementHash, shift) {
    if ((setNode instanceof $c_sci_BitmapIndexedSetNode)) {
      const x2 = setNode;
      const mask = $m_sci_Node$().maskFrom__I__I__I(elementHash, shift);
      const bitpos = $m_sci_Node$().bitposFrom__I__I(mask);
      if (((x2.sci_BitmapIndexedSetNode__f_dataMap & bitpos) !== 0)) {
        const index = $m_sci_Node$().indexFrom__I__I__I__I(x2.sci_BitmapIndexedSetNode__f_dataMap, mask, bitpos);
        const element0 = x2.getPayload__I__O(index);
        const element0UnimprovedHash = x2.getHash__I__I(index);
        if (((element0UnimprovedHash === originalHash) && $m_sr_BoxesRunTime$().equals__O__O__Z(element0, element))) {
          $p_sci_HashSetBuilder__setValue__sci_BitmapIndexedSetNode__I__O__V(this, x2, bitpos, element0)
        } else {
          const element0Hash = $m_sc_Hashing$().improve__I__I(element0UnimprovedHash);
          const subNodeNew = x2.mergeTwoKeyValPairs__O__I__I__O__I__I__I__sci_SetNode(element0, element0UnimprovedHash, element0Hash, element, originalHash, elementHash, ((5 + shift) | 0));
          x2.migrateFromInlineToNodeInPlace__I__I__sci_SetNode__sci_BitmapIndexedSetNode(bitpos, element0Hash, subNodeNew)
        }
      } else if (((x2.sci_BitmapIndexedSetNode__f_nodeMap & bitpos) !== 0)) {
        const index$2 = $m_sci_Node$().indexFrom__I__I__I__I(x2.sci_BitmapIndexedSetNode__f_nodeMap, mask, bitpos);
        const subNode = x2.getNode__I__sci_SetNode(index$2);
        const beforeSize = subNode.size__I();
        const beforeHashCode = subNode.cachedJavaKeySetHashCode__I();
        this.update__sci_SetNode__O__I__I__I__V(subNode, element, originalHash, elementHash, ((5 + shift) | 0));
        x2.sci_BitmapIndexedSetNode__f_size = ((x2.sci_BitmapIndexedSetNode__f_size + ((subNode.size__I() - beforeSize) | 0)) | 0);
        x2.sci_BitmapIndexedSetNode__f_cachedJavaKeySetHashCode = ((x2.sci_BitmapIndexedSetNode__f_cachedJavaKeySetHashCode + ((subNode.cachedJavaKeySetHashCode__I() - beforeHashCode) | 0)) | 0)
      } else {
        $p_sci_HashSetBuilder__insertValue__sci_BitmapIndexedSetNode__I__O__I__I__V(this, x2, bitpos, element, originalHash, elementHash)
      }
    } else if ((setNode instanceof $c_sci_HashCollisionSetNode)) {
      const x3 = setNode;
      const this$1 = x3.sci_HashCollisionSetNode__f_content;
      const index$3 = $f_sc_SeqOps__indexOf__O__I__I(this$1, element, 0);
      if ((index$3 < 0)) {
        x3.sci_HashCollisionSetNode__f_content = x3.sci_HashCollisionSetNode__f_content.appended__O__sci_Vector(element)
      } else {
        const this$2 = x3.sci_HashCollisionSetNode__f_content;
        x3.sci_HashCollisionSetNode__f_content = this$2.updateAt__I__O__sci_Vector(index$3, element)
      }
    } else {
      throw new $c_s_MatchError(setNode)
    }
  };
  result__sci_HashSet() {
    if ((this.sci_HashSetBuilder__f_scala$collection$immutable$HashSetBuilder$$rootNode.sci_BitmapIndexedSetNode__f_size === 0)) {
      const this$1 = $m_sci_HashSet$();
      return this$1.sci_HashSet$__f_EmptySet
    } else if ((this.sci_HashSetBuilder__f_aliased !== null)) {
      return this.sci_HashSetBuilder__f_aliased
    } else {
      this.sci_HashSetBuilder__f_aliased = new $c_sci_HashSet(this.sci_HashSetBuilder__f_scala$collection$immutable$HashSetBuilder$$rootNode);
      return this.sci_HashSetBuilder__f_aliased
    }
  };
  addOne__O__sci_HashSetBuilder(elem) {
    $p_sci_HashSetBuilder__ensureUnaliased__V(this);
    const h = $m_sr_Statics$().anyHash__O__I(elem);
    const im = $m_sc_Hashing$().improve__I__I(h);
    this.update__sci_SetNode__O__I__I__I__V(this.sci_HashSetBuilder__f_scala$collection$immutable$HashSetBuilder$$rootNode, elem, h, im, 0);
    return this
  };
  addAll__sc_IterableOnce__sci_HashSetBuilder(xs) {
    $p_sci_HashSetBuilder__ensureUnaliased__V(this);
    if ((xs instanceof $c_sci_HashSet)) {
      const x2 = xs;
      new $c_sci_HashSetBuilder$$anon$1(this, x2)
    } else {
      const it = xs.iterator__sc_Iterator();
      while (it.hasNext__Z()) {
        this.addOne__O__sci_HashSetBuilder(it.next__O())
      }
    };
    return this
  };
  addAll__sc_IterableOnce__scm_Growable(xs) {
    return this.addAll__sc_IterableOnce__sci_HashSetBuilder(xs)
  };
  addOne__O__scm_Growable(elem) {
    return this.addOne__O__sci_HashSetBuilder(elem)
  };
  result__O() {
    return this.result__sci_HashSet()
  };
}
const $d_sci_HashSetBuilder = new $TypeData().initClass({
  sci_HashSetBuilder: 0
}, false, "scala.collection.immutable.HashSetBuilder", {
  sci_HashSetBuilder: 1,
  O: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1
});
$c_sci_HashSetBuilder.prototype.$classData = $d_sci_HashSetBuilder;
class $c_sci_IndexedSeq$ extends $c_sc_SeqFactory$Delegate {
  constructor() {
    super();
    $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_sci_Vector$())
  };
  from__sc_IterableOnce__sci_IndexedSeq(it) {
    if ($is_sci_IndexedSeq(it)) {
      const x2 = it;
      return x2
    } else {
      return $c_sc_SeqFactory$Delegate.prototype.from__sc_IterableOnce__sc_SeqOps.call(this, it)
    }
  };
  from__sc_IterableOnce__O(source) {
    return this.from__sc_IterableOnce__sci_IndexedSeq(source)
  };
  from__sc_IterableOnce__sc_SeqOps(it) {
    return this.from__sc_IterableOnce__sci_IndexedSeq(it)
  };
}
const $d_sci_IndexedSeq$ = new $TypeData().initClass({
  sci_IndexedSeq$: 0
}, false, "scala.collection.immutable.IndexedSeq$", {
  sci_IndexedSeq$: 1,
  sc_SeqFactory$Delegate: 1,
  O: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_IndexedSeq$.prototype.$classData = $d_sci_IndexedSeq$;
let $n_sci_IndexedSeq$ = (void 0);
function $m_sci_IndexedSeq$() {
  if ((!$n_sci_IndexedSeq$)) {
    $n_sci_IndexedSeq$ = new $c_sci_IndexedSeq$()
  };
  return $n_sci_IndexedSeq$
}
class $c_sci_LazyList$LazyIterator extends $c_sc_AbstractIterator {
  constructor(lazyList) {
    super();
    this.sci_LazyList$LazyIterator__f_lazyList = null;
    this.sci_LazyList$LazyIterator__f_lazyList = lazyList
  };
  hasNext__Z() {
    return (!this.sci_LazyList$LazyIterator__f_lazyList.isEmpty__Z())
  };
  next__O() {
    if (this.sci_LazyList$LazyIterator__f_lazyList.isEmpty__Z()) {
      return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O()
    } else {
      const this$1 = this.sci_LazyList$LazyIterator__f_lazyList;
      const res = this$1.scala$collection$immutable$LazyList$$state__sci_LazyList$State().head__O();
      const this$2 = this.sci_LazyList$LazyIterator__f_lazyList;
      this.sci_LazyList$LazyIterator__f_lazyList = this$2.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
      return res
    }
  };
}
const $d_sci_LazyList$LazyIterator = new $TypeData().initClass({
  sci_LazyList$LazyIterator: 0
}, false, "scala.collection.immutable.LazyList$LazyIterator", {
  sci_LazyList$LazyIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sci_LazyList$LazyIterator.prototype.$classData = $d_sci_LazyList$LazyIterator;
class $c_sci_List$ extends $c_O {
  constructor() {
    super();
    this.sci_List$__f_partialNotApplied = null;
    $n_sci_List$ = this;
    this.sci_List$__f_partialNotApplied = new $c_sci_List$$anon$1()
  };
  from__sc_IterableOnce__sci_List(coll) {
    if ((coll instanceof $c_sci_List)) {
      const x2 = coll;
      return x2
    } else if ((coll.knownSize__I() === 0)) {
      return $m_sci_Nil$()
    } else if ((coll instanceof $c_scm_ListBuffer)) {
      const x3 = coll;
      return x3.toList__sci_List()
    } else {
      const this$2 = new $c_scm_ListBuffer();
      return this$2.addAll__sc_IterableOnce__scm_ListBuffer(coll).toList__sci_List()
    }
  };
  from__sc_IterableOnce__O(source) {
    return this.from__sc_IterableOnce__sci_List(source)
  };
}
const $d_sci_List$ = new $TypeData().initClass({
  sci_List$: 0
}, false, "scala.collection.immutable.List$", {
  sci_List$: 1,
  O: 1,
  sc_StrictOptimizedSeqFactory: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_List$.prototype.$classData = $d_sci_List$;
let $n_sci_List$ = (void 0);
function $m_sci_List$() {
  if ((!$n_sci_List$)) {
    $n_sci_List$ = new $c_sci_List$()
  };
  return $n_sci_List$
}
class $c_sci_Seq$ extends $c_sc_SeqFactory$Delegate {
  constructor() {
    super();
    $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_sci_List$())
  };
  from__sc_IterableOnce__sci_Seq(it) {
    if ($is_sci_Seq(it)) {
      const x2 = it;
      return x2
    } else {
      return $c_sc_SeqFactory$Delegate.prototype.from__sc_IterableOnce__sc_SeqOps.call(this, it)
    }
  };
  from__sc_IterableOnce__O(source) {
    return this.from__sc_IterableOnce__sci_Seq(source)
  };
  from__sc_IterableOnce__sc_SeqOps(it) {
    return this.from__sc_IterableOnce__sci_Seq(it)
  };
}
const $d_sci_Seq$ = new $TypeData().initClass({
  sci_Seq$: 0
}, false, "scala.collection.immutable.Seq$", {
  sci_Seq$: 1,
  sc_SeqFactory$Delegate: 1,
  O: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Seq$.prototype.$classData = $d_sci_Seq$;
let $n_sci_Seq$ = (void 0);
function $m_sci_Seq$() {
  if ((!$n_sci_Seq$)) {
    $n_sci_Seq$ = new $c_sci_Seq$()
  };
  return $n_sci_Seq$
}
class $c_sci_SetBuilderImpl extends $c_O {
  constructor() {
    super();
    this.sci_SetBuilderImpl__f_elems = null;
    this.sci_SetBuilderImpl__f_switchedToHashSetBuilder = false;
    this.sci_SetBuilderImpl__f_hashSetBuilder = null;
    this.sci_SetBuilderImpl__f_elems = $m_sci_Set$EmptySet$();
    this.sci_SetBuilderImpl__f_switchedToHashSetBuilder = false
  };
  sizeHint__I__V(size) {
    /*<skip>*/
  };
  result__sci_Set() {
    return (this.sci_SetBuilderImpl__f_switchedToHashSetBuilder ? this.sci_SetBuilderImpl__f_hashSetBuilder.result__sci_HashSet() : this.sci_SetBuilderImpl__f_elems)
  };
  addOne__O__sci_SetBuilderImpl(elem) {
    if (this.sci_SetBuilderImpl__f_switchedToHashSetBuilder) {
      this.sci_SetBuilderImpl__f_hashSetBuilder.addOne__O__sci_HashSetBuilder(elem)
    } else if ((this.sci_SetBuilderImpl__f_elems.size__I() < 4)) {
      const this$1 = this.sci_SetBuilderImpl__f_elems;
      this.sci_SetBuilderImpl__f_elems = this$1.incl__O__sci_SetOps(elem)
    } else if ((!this.sci_SetBuilderImpl__f_elems.contains__O__Z(elem))) {
      this.sci_SetBuilderImpl__f_switchedToHashSetBuilder = true;
      if ((this.sci_SetBuilderImpl__f_hashSetBuilder === null)) {
        this.sci_SetBuilderImpl__f_hashSetBuilder = new $c_sci_HashSetBuilder()
      };
      this.sci_SetBuilderImpl__f_elems.buildTo__scm_Builder__scm_Builder(this.sci_SetBuilderImpl__f_hashSetBuilder);
      this.sci_SetBuilderImpl__f_hashSetBuilder.addOne__O__sci_HashSetBuilder(elem)
    };
    return this
  };
  addAll__sc_IterableOnce__sci_SetBuilderImpl(xs) {
    return (this.sci_SetBuilderImpl__f_switchedToHashSetBuilder ? (this.sci_SetBuilderImpl__f_hashSetBuilder.addAll__sc_IterableOnce__sci_HashSetBuilder(xs), this) : $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs))
  };
  addAll__sc_IterableOnce__scm_Growable(xs) {
    return this.addAll__sc_IterableOnce__sci_SetBuilderImpl(xs)
  };
  addOne__O__scm_Growable(elem) {
    return this.addOne__O__sci_SetBuilderImpl(elem)
  };
  result__O() {
    return this.result__sci_Set()
  };
}
function $isArrayOf_sci_SetBuilderImpl(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_SetBuilderImpl)))
}
const $d_sci_SetBuilderImpl = new $TypeData().initClass({
  sci_SetBuilderImpl: 0
}, false, "scala.collection.immutable.SetBuilderImpl", {
  sci_SetBuilderImpl: 1,
  O: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1
});
$c_sci_SetBuilderImpl.prototype.$classData = $d_sci_SetBuilderImpl;
class $c_sci_SetHashIterator extends $c_sci_ChampBaseIterator {
  constructor(rootNode) {
    super();
    this.sci_SetHashIterator__f_hash = 0;
    $ct_sci_ChampBaseIterator__sci_Node__(this, rootNode);
    this.sci_SetHashIterator__f_hash = 0
  };
  iterator__sc_Iterator() {
    return this
  };
  isEmpty__Z() {
    return (!this.hasNext__Z())
  };
  drop__I__sc_Iterator(n) {
    return $f_sc_Iterator__drop__I__sc_Iterator(this, n)
  };
  toString__T() {
    return "<iterator>"
  };
  copyToArray__O__I__I__I(xs, start, len) {
    return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len)
  };
  addString__scm_StringBuilder__T__T__T__scm_StringBuilder(b, start, sep, end) {
    return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
  };
  knownSize__I() {
    return (-1)
  };
  hashCode__I() {
    return this.sci_SetHashIterator__f_hash
  };
  next__O() {
    if ((!this.hasNext__Z())) {
      throw $ct_ju_NoSuchElementException__(new $c_ju_NoSuchElementException())
    };
    this.sci_SetHashIterator__f_hash = this.sci_ChampBaseIterator__f_currentValueNode.getHash__I__I(this.sci_ChampBaseIterator__f_currentValueCursor);
    this.sci_ChampBaseIterator__f_currentValueCursor = ((1 + this.sci_ChampBaseIterator__f_currentValueCursor) | 0);
    return this
  };
}
const $d_sci_SetHashIterator = new $TypeData().initClass({
  sci_SetHashIterator: 0
}, false, "scala.collection.immutable.SetHashIterator", {
  sci_SetHashIterator: 1,
  sci_ChampBaseIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sci_SetHashIterator.prototype.$classData = $d_sci_SetHashIterator;
class $c_sci_SetIterator extends $c_sci_ChampBaseIterator {
  constructor(rootNode) {
    super();
    $ct_sci_ChampBaseIterator__sci_Node__(this, rootNode)
  };
  iterator__sc_Iterator() {
    return this
  };
  isEmpty__Z() {
    return (!this.hasNext__Z())
  };
  drop__I__sc_Iterator(n) {
    return $f_sc_Iterator__drop__I__sc_Iterator(this, n)
  };
  toString__T() {
    return "<iterator>"
  };
  copyToArray__O__I__I__I(xs, start, len) {
    return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len)
  };
  addString__scm_StringBuilder__T__T__T__scm_StringBuilder(b, start, sep, end) {
    return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
  };
  knownSize__I() {
    return (-1)
  };
  next__O() {
    if ((!this.hasNext__Z())) {
      throw $ct_ju_NoSuchElementException__(new $c_ju_NoSuchElementException())
    };
    const payload = this.sci_ChampBaseIterator__f_currentValueNode.getPayload__I__O(this.sci_ChampBaseIterator__f_currentValueCursor);
    this.sci_ChampBaseIterator__f_currentValueCursor = ((1 + this.sci_ChampBaseIterator__f_currentValueCursor) | 0);
    return payload
  };
}
const $d_sci_SetIterator = new $TypeData().initClass({
  sci_SetIterator: 0
}, false, "scala.collection.immutable.SetIterator", {
  sci_SetIterator: 1,
  sci_ChampBaseIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sci_SetIterator.prototype.$classData = $d_sci_SetIterator;
const $p_sci_Vector$__liftedTree1$1__I = (function($thiz) {
  try {
    const x = $m_jl_System$SystemProperties$().getProperty__T__T__T("scala.collection.immutable.Vector.defaultApplyPreferredMaxLength", "1024");
    const this$4 = $m_jl_Integer$();
    return this$4.parseInt__T__I__I(x, 10)
  } catch (e) {
    if ((e instanceof $c_jl_SecurityException)) {
      return 1024
    } else {
      throw e
    }
  }
});
class $c_sci_Vector$ extends $c_O {
  constructor() {
    super();
    this.sci_Vector$__f_NIL = null;
    this.sci_Vector$__f_scala$collection$immutable$Vector$$defaultApplyPreferredMaxLength = 0;
    $n_sci_Vector$ = this;
    this.sci_Vector$__f_NIL = new $c_sci_Vector(0, 0, 0);
    this.sci_Vector$__f_scala$collection$immutable$Vector$$defaultApplyPreferredMaxLength = $p_sci_Vector$__liftedTree1$1__I(this)
  };
  from__sc_IterableOnce__sci_Vector(it) {
    if ((it instanceof $c_sci_ArraySeq)) {
      const x2 = it;
      if ((x2.length__I() <= 32)) {
        if (x2.isEmpty__Z()) {
          return this.sci_Vector$__f_NIL
        } else {
          const unsafeArray = x2.unsafeArray__O();
          const len = $m_sr_ScalaRunTime$().array_length__O__I(unsafeArray);
          const v = new $c_sci_Vector(0, len, 0);
          const display0 = $newArrayObject($d_O.getArrayOf(), [len]);
          if ($isArrayOf_O(unsafeArray, 1)) {
            $systemArraycopy(unsafeArray, 0, display0, 0, len)
          } else {
            let i = 0;
            while ((i < len)) {
              display0.u[i] = $m_sr_ScalaRunTime$().array_apply__O__I__O(unsafeArray, i);
              i = ((1 + i) | 0)
            }
          };
          v.sci_Vector__f_display0 = display0;
          v.sci_Vector__f_depth = 1;
          return v
        }
      }
    };
    if ((it instanceof $c_sci_Vector)) {
      const x3 = it;
      return x3
    };
    const knownSize = it.knownSize__I();
    if ((knownSize === 0)) {
      return this.sci_Vector$__f_NIL
    } else if (((knownSize > 0) && (knownSize <= 32))) {
      const display0$2 = $newArrayObject($d_O.getArrayOf(), [knownSize]);
      const this$1 = it.iterator__sc_Iterator();
      $f_sc_IterableOnceOps__copyToArray__O__I__I(this$1, display0$2, 0);
      const v$2 = new $c_sci_Vector(0, knownSize, 0);
      v$2.sci_Vector__f_depth = 1;
      v$2.sci_Vector__f_display0 = display0$2;
      return v$2
    } else {
      const this$2 = new $c_sci_VectorBuilder();
      const this$3 = this$2.addAll__sc_IterableOnce__sci_VectorBuilder(it);
      return this$3.result__sci_Vector()
    }
  };
  scala$collection$immutable$Vector$$single__O__sci_Vector(elem) {
    const s = new $c_sci_Vector(0, 1, 0);
    s.sci_Vector__f_depth = 1;
    s.sci_Vector__f_display0 = $makeNativeArrayWrapper($d_O.getArrayOf(), [elem]);
    return s
  };
  from__sc_IterableOnce__O(source) {
    return this.from__sc_IterableOnce__sci_Vector(source)
  };
}
const $d_sci_Vector$ = new $TypeData().initClass({
  sci_Vector$: 0
}, false, "scala.collection.immutable.Vector$", {
  sci_Vector$: 1,
  O: 1,
  sc_StrictOptimizedSeqFactory: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Vector$.prototype.$classData = $d_sci_Vector$;
let $n_sci_Vector$ = (void 0);
function $m_sci_Vector$() {
  if ((!$n_sci_Vector$)) {
    $n_sci_Vector$ = new $c_sci_Vector$()
  };
  return $n_sci_Vector$
}
const $p_scm_ArrayBuffer$__growArray$1__J__I__I__AO__AO = (function($thiz, arrayLength$1, n$1, end$1, array$2) {
  const lo = (arrayLength$1.RTLong__f_lo << 1);
  const hi = (((arrayLength$1.RTLong__f_lo >>> 31) | 0) | (arrayLength$1.RTLong__f_hi << 1));
  const t = (((hi === 0) ? (((-2147483648) ^ lo) > (-2147483632)) : (hi > 0)) ? new $c_RTLong(lo, hi) : new $c_RTLong(16, 0));
  const lo$1 = t.RTLong__f_lo;
  const hi$1 = t.RTLong__f_hi;
  let newSize__lo = lo$1;
  let newSize__hi = hi$1;
  while (true) {
    const hi$2 = (n$1 >> 31);
    const b__lo = newSize__lo;
    const b__hi = newSize__hi;
    const bhi = b__hi;
    if (((hi$2 === bhi) ? (((-2147483648) ^ n$1) > ((-2147483648) ^ b__lo)) : (hi$2 > bhi))) {
      const this$4__lo = newSize__lo;
      const this$4__hi = newSize__hi;
      const lo$2 = (this$4__lo << 1);
      const hi$3 = (((this$4__lo >>> 31) | 0) | (this$4__hi << 1));
      const $$x1__lo = lo$2;
      const $$x1__hi = hi$3;
      newSize__lo = $$x1__lo;
      newSize__hi = $$x1__hi
    } else {
      break
    }
  };
  const this$5__lo = newSize__lo;
  const this$5__hi = newSize__hi;
  const ahi = this$5__hi;
  if (((ahi === 0) ? (((-2147483648) ^ this$5__lo) > (-1)) : (ahi > 0))) {
    if ((end$1 === 2147483647)) {
      throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O($ct_jl_Exception__T__(new $c_jl_Exception(), "Collections can not have more than 2147483647 elements"))
    };
    const $$x2__lo = 2147483647;
    const $$x2__hi = 0;
    newSize__lo = $$x2__lo;
    newSize__hi = $$x2__hi
  };
  const this$6__lo = newSize__lo;
  const this$6__hi = newSize__hi;
  const newArray = $newArrayObject($d_O.getArrayOf(), [this$6__lo]);
  $m_s_Array$().copy__O__I__O__I__I__V(array$2, 0, newArray, 0, end$1);
  return newArray
});
class $c_scm_ArrayBuffer$ extends $c_O {
  from__sc_IterableOnce__scm_ArrayBuffer(coll) {
    const k = coll.knownSize__I();
    if ((k >= 0)) {
      const array = $newArrayObject($d_O.getArrayOf(), [((k > 16) ? k : 16)]);
      const it = coll.iterator__sc_Iterator();
      const isEmpty = (k <= 0);
      const scala$collection$immutable$Range$$lastElement = (((-1) + k) | 0);
      if ((!isEmpty)) {
        let i = 0;
        while (true) {
          const v1 = i;
          array.u[v1] = it.next__O();
          if ((i === scala$collection$immutable$Range$$lastElement)) {
            break
          };
          i = ((1 + i) | 0)
        }
      };
      return $ct_scm_ArrayBuffer__AO__I__(new $c_scm_ArrayBuffer(), array, k)
    } else {
      const this$10 = $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer());
      return this$10.addAll__sc_IterableOnce__scm_ArrayBuffer(coll)
    }
  };
  scala$collection$mutable$ArrayBuffer$$ensureSize__AO__I__I__AO(array, end, n) {
    const value = array.u.length;
    const hi = (value >> 31);
    const hi$1 = (n >> 31);
    if (((hi$1 === hi) ? (((-2147483648) ^ n) <= ((-2147483648) ^ value)) : (hi$1 < hi))) {
      return array
    } else {
      return $p_scm_ArrayBuffer$__growArray$1__J__I__I__AO__AO(this, new $c_RTLong(value, hi), n, end, array)
    }
  };
  from__sc_IterableOnce__O(source) {
    return this.from__sc_IterableOnce__scm_ArrayBuffer(source)
  };
}
const $d_scm_ArrayBuffer$ = new $TypeData().initClass({
  scm_ArrayBuffer$: 0
}, false, "scala.collection.mutable.ArrayBuffer$", {
  scm_ArrayBuffer$: 1,
  O: 1,
  sc_StrictOptimizedSeqFactory: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ArrayBuffer$.prototype.$classData = $d_scm_ArrayBuffer$;
let $n_scm_ArrayBuffer$ = (void 0);
function $m_scm_ArrayBuffer$() {
  if ((!$n_scm_ArrayBuffer$)) {
    $n_scm_ArrayBuffer$ = new $c_scm_ArrayBuffer$()
  };
  return $n_scm_ArrayBuffer$
}
class $c_scm_IndexedSeq$ extends $c_sc_SeqFactory$Delegate {
  constructor() {
    super();
    $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_scm_ArrayBuffer$())
  };
}
const $d_scm_IndexedSeq$ = new $TypeData().initClass({
  scm_IndexedSeq$: 0
}, false, "scala.collection.mutable.IndexedSeq$", {
  scm_IndexedSeq$: 1,
  sc_SeqFactory$Delegate: 1,
  O: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_scm_IndexedSeq$.prototype.$classData = $d_scm_IndexedSeq$;
let $n_scm_IndexedSeq$ = (void 0);
function $m_scm_IndexedSeq$() {
  if ((!$n_scm_IndexedSeq$)) {
    $n_scm_IndexedSeq$ = new $c_scm_IndexedSeq$()
  };
  return $n_scm_IndexedSeq$
}
class $c_scm_ListBuffer$ extends $c_O {
  from__sc_IterableOnce__O(source) {
    const this$1 = new $c_scm_ListBuffer();
    return this$1.addAll__sc_IterableOnce__scm_ListBuffer(source)
  };
}
const $d_scm_ListBuffer$ = new $TypeData().initClass({
  scm_ListBuffer$: 0
}, false, "scala.collection.mutable.ListBuffer$", {
  scm_ListBuffer$: 1,
  O: 1,
  sc_StrictOptimizedSeqFactory: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ListBuffer$.prototype.$classData = $d_scm_ListBuffer$;
let $n_scm_ListBuffer$ = (void 0);
function $m_scm_ListBuffer$() {
  if ((!$n_scm_ListBuffer$)) {
    $n_scm_ListBuffer$ = new $c_scm_ListBuffer$()
  };
  return $n_scm_ListBuffer$
}
const $p_s_reflect_ClassTag__prettyprint$1__jl_Class__T = (function($thiz, clazz) {
  return (clazz.isArray__Z() ? (("Array[" + $p_s_reflect_ClassTag__prettyprint$1__jl_Class__T($thiz, clazz.getComponentType__jl_Class())) + "]") : clazz.getName__T())
});
const $f_s_reflect_ClassTag__equals__O__Z = (function($thiz, x) {
  if ($is_s_reflect_ClassTag(x)) {
    const x$2 = $thiz.runtimeClass__jl_Class();
    const x$3 = x.runtimeClass__jl_Class();
    return (x$2 === x$3)
  } else {
    return false
  }
});
function $is_s_reflect_ClassTag(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.s_reflect_ClassTag)))
}
function $isArrayOf_s_reflect_ClassTag(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_reflect_ClassTag)))
}
class $c_sr_ScalaRunTime$$anon$1 extends $c_sc_AbstractIterator {
  constructor(x$2) {
    super();
    this.sr_ScalaRunTime$$anon$1__f_c = 0;
    this.sr_ScalaRunTime$$anon$1__f_cmax = 0;
    this.sr_ScalaRunTime$$anon$1__f_x$2 = null;
    this.sr_ScalaRunTime$$anon$1__f_x$2 = x$2;
    this.sr_ScalaRunTime$$anon$1__f_c = 0;
    this.sr_ScalaRunTime$$anon$1__f_cmax = x$2.productArity__I()
  };
  hasNext__Z() {
    return (this.sr_ScalaRunTime$$anon$1__f_c < this.sr_ScalaRunTime$$anon$1__f_cmax)
  };
  next__O() {
    const result = this.sr_ScalaRunTime$$anon$1__f_x$2.productElement__I__O(this.sr_ScalaRunTime$$anon$1__f_c);
    this.sr_ScalaRunTime$$anon$1__f_c = ((1 + this.sr_ScalaRunTime$$anon$1__f_c) | 0);
    return result
  };
}
const $d_sr_ScalaRunTime$$anon$1 = new $TypeData().initClass({
  sr_ScalaRunTime$$anon$1: 0
}, false, "scala.runtime.ScalaRunTime$$anon$1", {
  sr_ScalaRunTime$$anon$1: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sr_ScalaRunTime$$anon$1.prototype.$classData = $d_sr_ScalaRunTime$$anon$1;
class $c_sjs_js_WrappedArray$ extends $c_O {
  from__sc_IterableOnce__sjs_js_WrappedArray(source) {
    const this$1 = $ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray());
    return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this$1, source).result__O()
  };
  from__sc_IterableOnce__O(source) {
    return this.from__sc_IterableOnce__sjs_js_WrappedArray(source)
  };
}
const $d_sjs_js_WrappedArray$ = new $TypeData().initClass({
  sjs_js_WrappedArray$: 0
}, false, "scala.scalajs.js.WrappedArray$", {
  sjs_js_WrappedArray$: 1,
  O: 1,
  sc_StrictOptimizedSeqFactory: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sjs_js_WrappedArray$.prototype.$classData = $d_sjs_js_WrappedArray$;
let $n_sjs_js_WrappedArray$ = (void 0);
function $m_sjs_js_WrappedArray$() {
  if ((!$n_sjs_js_WrappedArray$)) {
    $n_sjs_js_WrappedArray$ = new $c_sjs_js_WrappedArray$()
  };
  return $n_sjs_js_WrappedArray$
}
class $c_sjsr_WrappedVarArgs$ extends $c_O {
  from__sc_IterableOnce__sjsr_WrappedVarArgs(source) {
    const this$1 = this.newBuilder__scm_Builder();
    return this$1.addAll__sc_IterableOnce__scm_Growable(source).result__O()
  };
  newBuilder__scm_Builder() {
    const array = [];
    const this$4 = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array);
    const f = new $c_sjsr_AnonFunction1(((this$2) => ((x$1$2) => {
      const x$1 = x$1$2;
      return new $c_sjsr_WrappedVarArgs(x$1.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array)
    }))(this));
    return new $c_scm_Builder$$anon$1(this$4, f)
  };
  from__sc_IterableOnce__O(source) {
    return this.from__sc_IterableOnce__sjsr_WrappedVarArgs(source)
  };
}
const $d_sjsr_WrappedVarArgs$ = new $TypeData().initClass({
  sjsr_WrappedVarArgs$: 0
}, false, "scala.scalajs.runtime.WrappedVarArgs$", {
  sjsr_WrappedVarArgs$: 1,
  O: 1,
  sc_StrictOptimizedSeqFactory: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sjsr_WrappedVarArgs$.prototype.$classData = $d_sjsr_WrappedVarArgs$;
let $n_sjsr_WrappedVarArgs$ = (void 0);
function $m_sjsr_WrappedVarArgs$() {
  if ((!$n_sjsr_WrappedVarArgs$)) {
    $n_sjsr_WrappedVarArgs$ = new $c_sjsr_WrappedVarArgs$()
  };
  return $n_sjsr_WrappedVarArgs$
}
const $ct_jl_ArrayIndexOutOfBoundsException__T__ = (function($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
});
const $ct_jl_ArrayIndexOutOfBoundsException__ = (function($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz
});
class $c_jl_ArrayIndexOutOfBoundsException extends $c_jl_IndexOutOfBoundsException {
}
function $isArrayOf_jl_ArrayIndexOutOfBoundsException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_ArrayIndexOutOfBoundsException)))
}
const $d_jl_ArrayIndexOutOfBoundsException = new $TypeData().initClass({
  jl_ArrayIndexOutOfBoundsException: 0
}, false, "java.lang.ArrayIndexOutOfBoundsException", {
  jl_ArrayIndexOutOfBoundsException: 1,
  jl_IndexOutOfBoundsException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_ArrayIndexOutOfBoundsException.prototype.$classData = $d_jl_ArrayIndexOutOfBoundsException;
class $c_jl_NumberFormatException extends $c_jl_IllegalArgumentException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
const $d_jl_NumberFormatException = new $TypeData().initClass({
  jl_NumberFormatException: 0
}, false, "java.lang.NumberFormatException", {
  jl_NumberFormatException: 1,
  jl_IllegalArgumentException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_NumberFormatException.prototype.$classData = $d_jl_NumberFormatException;
class $c_jl_StringIndexOutOfBoundsException extends $c_jl_IndexOutOfBoundsException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true)
  };
}
const $d_jl_StringIndexOutOfBoundsException = new $TypeData().initClass({
  jl_StringIndexOutOfBoundsException: 0
}, false, "java.lang.StringIndexOutOfBoundsException", {
  jl_StringIndexOutOfBoundsException: 1,
  jl_IndexOutOfBoundsException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_StringIndexOutOfBoundsException.prototype.$classData = $d_jl_StringIndexOutOfBoundsException;
class $c_s_None$ extends $c_s_Option {
  get__E() {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "None.get")
  };
  productPrefix__T() {
    return "None"
  };
  productArity__I() {
    return 0
  };
  productElement__I__O(x$1) {
    return $m_sr_Statics$().ioobe__I__O(x$1)
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    return 2433880
  };
  toString__T() {
    return "None"
  };
}
const $d_s_None$ = new $TypeData().initClass({
  s_None$: 0
}, false, "scala.None$", {
  s_None$: 1,
  s_Option: 1,
  O: 1,
  sc_IterableOnce: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_s_None$.prototype.$classData = $d_s_None$;
let $n_s_None$ = (void 0);
function $m_s_None$() {
  if ((!$n_s_None$)) {
    $n_s_None$ = new $c_s_None$()
  };
  return $n_s_None$
}
class $c_sc_AbstractIterable extends $c_O {
  className__T() {
    return this.stringPrefix__T()
  };
  fromSpecific__sc_IterableOnce__sc_IterableOps(coll) {
    return this.iterableFactory__sc_IterableFactory().from__sc_IterableOnce__O(coll)
  };
  head__O() {
    return this.iterator__sc_Iterator().next__O()
  };
  drop__I__O(n) {
    return $f_sc_IterableOps__drop__I__O(this, n)
  };
  tail__O() {
    return $f_sc_IterableOps__tail__O(this)
  };
  forall__F1__Z(p) {
    return $f_sc_IterableOnceOps__forall__F1__Z(this, p)
  };
  exists__F1__Z(p) {
    return $f_sc_IterableOnceOps__exists__F1__Z(this, p)
  };
  isEmpty__Z() {
    return $f_sc_IterableOnceOps__isEmpty__Z(this)
  };
  addString__scm_StringBuilder__T__T__T__scm_StringBuilder(b, start, sep, end) {
    return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
  };
  knownSize__I() {
    return (-1)
  };
  fromSpecific__sc_IterableOnce__O(coll) {
    return this.fromSpecific__sc_IterableOnce__sc_IterableOps(coll)
  };
}
const $ct_sc_ArrayOps$ArrayIterator__O__ = (function($thiz, xs) {
  $thiz.sc_ArrayOps$ArrayIterator__f_xs = xs;
  $thiz.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
  $thiz.sc_ArrayOps$ArrayIterator__f_len = $m_sr_ScalaRunTime$().array_length__O__I($thiz.sc_ArrayOps$ArrayIterator__f_xs);
  return $thiz
});
class $c_sc_ArrayOps$ArrayIterator extends $c_sc_AbstractIterator {
  constructor() {
    super();
    this.sc_ArrayOps$ArrayIterator__f_xs = null;
    this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
    this.sc_ArrayOps$ArrayIterator__f_len = 0
  };
  knownSize__I() {
    return ((this.sc_ArrayOps$ArrayIterator__f_len - this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0)
  };
  hasNext__Z() {
    return (this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos < this.sc_ArrayOps$ArrayIterator__f_len)
  };
  next__O() {
    try {
      const r = $m_sr_ScalaRunTime$().array_apply__O__I__O(this.sc_ArrayOps$ArrayIterator__f_xs, this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
      this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
      return r
    } catch (e) {
      if ((e instanceof $c_jl_ArrayIndexOutOfBoundsException)) {
        return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O()
      } else {
        throw e
      }
    }
  };
  drop__I__sc_Iterator(n) {
    if ((n > 0)) {
      const a = $m_sr_ScalaRunTime$().array_length__O__I(this.sc_ArrayOps$ArrayIterator__f_xs);
      const b = ((this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos + n) | 0);
      this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((a < b) ? a : b)
    };
    return this
  };
}
const $d_sc_ArrayOps$ArrayIterator = new $TypeData().initClass({
  sc_ArrayOps$ArrayIterator: 0
}, false, "scala.collection.ArrayOps$ArrayIterator", {
  sc_ArrayOps$ArrayIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
});
$c_sc_ArrayOps$ArrayIterator.prototype.$classData = $d_sc_ArrayOps$ArrayIterator;
class $c_sc_IndexedSeqView$IndexedSeqViewIterator extends $c_sc_AbstractIterator {
  constructor(self) {
    super();
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_self = null;
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = 0;
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_remainder = 0;
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_self = self;
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = 0;
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_remainder = self.length__I()
  };
  knownSize__I() {
    return this.sc_IndexedSeqView$IndexedSeqViewIterator__f_remainder
  };
  hasNext__Z() {
    return (this.sc_IndexedSeqView$IndexedSeqViewIterator__f_remainder > 0)
  };
  next__O() {
    if (this.hasNext__Z()) {
      const r = this.sc_IndexedSeqView$IndexedSeqViewIterator__f_self.apply__I__O(this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current);
      this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = ((1 + this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current) | 0);
      this.sc_IndexedSeqView$IndexedSeqViewIterator__f_remainder = (((-1) + this.sc_IndexedSeqView$IndexedSeqViewIterator__f_remainder) | 0);
      return r
    } else {
      return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O()
    }
  };
  drop__I__sc_Iterator(n) {
    if ((n > 0)) {
      this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = ((this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current + n) | 0);
      const b = ((this.sc_IndexedSeqView$IndexedSeqViewIterator__f_remainder - n) | 0);
      this.sc_IndexedSeqView$IndexedSeqViewIterator__f_remainder = ((b < 0) ? 0 : b)
    };
    return this
  };
}
const $d_sc_IndexedSeqView$IndexedSeqViewIterator = new $TypeData().initClass({
  sc_IndexedSeqView$IndexedSeqViewIterator: 0
}, false, "scala.collection.IndexedSeqView$IndexedSeqViewIterator", {
  sc_IndexedSeqView$IndexedSeqViewIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
});
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.$classData = $d_sc_IndexedSeqView$IndexedSeqViewIterator;
function $is_sci_Iterable(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_Iterable)))
}
function $isArrayOf_sci_Iterable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Iterable)))
}
const $p_sci_VectorBuilder__advanceToNextBlockIfNecessary__V = (function($thiz) {
  if (($thiz.sci_VectorBuilder__f_lo >= $thiz.sci_VectorBuilder__f_display0.u.length)) {
    const newBlockIndex = ((32 + $thiz.sci_VectorBuilder__f_blockIndex) | 0);
    const xor = ($thiz.sci_VectorBuilder__f_blockIndex ^ newBlockIndex);
    $f_sci_VectorPointer__gotoNextBlockStartWritable__I__I__V($thiz, newBlockIndex, xor);
    $thiz.sci_VectorBuilder__f_blockIndex = newBlockIndex;
    $thiz.sci_VectorBuilder__f_lo = 0
  }
});
class $c_sci_VectorBuilder extends $c_O {
  constructor() {
    super();
    this.sci_VectorBuilder__f_blockIndex = 0;
    this.sci_VectorBuilder__f_lo = 0;
    this.sci_VectorBuilder__f_depth = 0;
    this.sci_VectorBuilder__f_display0 = null;
    this.sci_VectorBuilder__f_display1 = null;
    this.sci_VectorBuilder__f_display2 = null;
    this.sci_VectorBuilder__f_display3 = null;
    this.sci_VectorBuilder__f_display4 = null;
    this.sci_VectorBuilder__f_display5 = null;
    this.sci_VectorBuilder__f_display0 = $newArrayObject($d_O.getArrayOf(), [32]);
    this.sci_VectorBuilder__f_depth = 1;
    this.sci_VectorBuilder__f_blockIndex = 0;
    this.sci_VectorBuilder__f_lo = 0
  };
  sizeHint__I__V(size) {
    /*<skip>*/
  };
  depth__I() {
    return this.sci_VectorBuilder__f_depth
  };
  depth_$eq__I__V(x$1) {
    this.sci_VectorBuilder__f_depth = x$1
  };
  display0__AO() {
    return this.sci_VectorBuilder__f_display0
  };
  display0_$eq__AO__V(x$1) {
    this.sci_VectorBuilder__f_display0 = x$1
  };
  display1__AAO() {
    return this.sci_VectorBuilder__f_display1
  };
  display1_$eq__AAO__V(x$1) {
    this.sci_VectorBuilder__f_display1 = x$1
  };
  display2__AAAO() {
    return this.sci_VectorBuilder__f_display2
  };
  display2_$eq__AAAO__V(x$1) {
    this.sci_VectorBuilder__f_display2 = x$1
  };
  display3__AAAAO() {
    return this.sci_VectorBuilder__f_display3
  };
  display3_$eq__AAAAO__V(x$1) {
    this.sci_VectorBuilder__f_display3 = x$1
  };
  display4__AAAAAO() {
    return this.sci_VectorBuilder__f_display4
  };
  display4_$eq__AAAAAO__V(x$1) {
    this.sci_VectorBuilder__f_display4 = x$1
  };
  display5__AAAAAAO() {
    return this.sci_VectorBuilder__f_display5
  };
  display5_$eq__AAAAAAO__V(x$1) {
    this.sci_VectorBuilder__f_display5 = x$1
  };
  size__I() {
    return ((this.sci_VectorBuilder__f_blockIndex + this.sci_VectorBuilder__f_lo) | 0)
  };
  addOne__O__sci_VectorBuilder(elem) {
    $p_sci_VectorBuilder__advanceToNextBlockIfNecessary__V(this);
    this.sci_VectorBuilder__f_display0.u[this.sci_VectorBuilder__f_lo] = elem;
    this.sci_VectorBuilder__f_lo = ((1 + this.sci_VectorBuilder__f_lo) | 0);
    return this
  };
  addAll__sc_IterableOnce__sci_VectorBuilder(xs) {
    const it = xs.iterator__sc_Iterator();
    while (it.hasNext__Z()) {
      $p_sci_VectorBuilder__advanceToNextBlockIfNecessary__V(this);
      this.sci_VectorBuilder__f_lo = ((this.sci_VectorBuilder__f_lo + it.copyToArray__O__I__I__I(this.sci_VectorBuilder__f_display0, this.sci_VectorBuilder__f_lo, ((this.sci_VectorBuilder__f_display0.u.length - this.sci_VectorBuilder__f_lo) | 0))) | 0)
    };
    return this
  };
  result__sci_Vector() {
    const size = this.size__I();
    if ((size === 0)) {
      const this$1 = $m_sci_Vector$();
      return this$1.sci_Vector$__f_NIL
    };
    const s = new $c_sci_Vector(0, size, 0);
    const depth = this.sci_VectorBuilder__f_depth;
    $f_sci_VectorPointer__initFrom__sci_VectorPointer__I__V(s, this, depth);
    if ((this.sci_VectorBuilder__f_depth > 1)) {
      const xor = (((-1) + size) | 0);
      $f_sci_VectorPointer__gotoPos__I__I__V(s, 0, xor)
    };
    return s
  };
  result__O() {
    return this.result__sci_Vector()
  };
  addAll__sc_IterableOnce__scm_Growable(xs) {
    return this.addAll__sc_IterableOnce__sci_VectorBuilder(xs)
  };
  addOne__O__scm_Growable(elem) {
    return this.addOne__O__sci_VectorBuilder(elem)
  };
}
const $d_sci_VectorBuilder = new $TypeData().initClass({
  sci_VectorBuilder: 0
}, false, "scala.collection.immutable.VectorBuilder", {
  sci_VectorBuilder: 1,
  O: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1,
  sci_VectorPointer: 1
});
$c_sci_VectorBuilder.prototype.$classData = $d_sci_VectorBuilder;
const $p_sci_VectorIterator__advanceToNextBlockIfNecessary__V = (function($thiz) {
  if (($thiz.sci_VectorIterator__f_lo === $thiz.sci_VectorIterator__f_endLo)) {
    if (((($thiz.sci_VectorIterator__f_blockIndex + $thiz.sci_VectorIterator__f_lo) | 0) < $thiz.sci_VectorIterator__f_endIndex)) {
      const newBlockIndex = ((32 + $thiz.sci_VectorIterator__f_blockIndex) | 0);
      const xor = ($thiz.sci_VectorIterator__f_blockIndex ^ newBlockIndex);
      $f_sci_VectorPointer__gotoNextBlockStart__I__I__V($thiz, newBlockIndex, xor);
      $thiz.sci_VectorIterator__f_blockIndex = newBlockIndex;
      const a = (($thiz.sci_VectorIterator__f_endIndex - $thiz.sci_VectorIterator__f_blockIndex) | 0);
      $thiz.sci_VectorIterator__f_endLo = ((a < 32) ? a : 32);
      $thiz.sci_VectorIterator__f_lo = 0
    } else {
      $thiz.sci_VectorIterator__f__hasNext = false
    }
  }
});
class $c_sci_VectorIterator extends $c_sc_AbstractIterator {
  constructor(_startIndex, endIndex) {
    super();
    this.sci_VectorIterator__f_endIndex = 0;
    this.sci_VectorIterator__f_blockIndex = 0;
    this.sci_VectorIterator__f_lo = 0;
    this.sci_VectorIterator__f_endLo = 0;
    this.sci_VectorIterator__f__hasNext = false;
    this.sci_VectorIterator__f_depth = 0;
    this.sci_VectorIterator__f_display0 = null;
    this.sci_VectorIterator__f_display1 = null;
    this.sci_VectorIterator__f_display2 = null;
    this.sci_VectorIterator__f_display3 = null;
    this.sci_VectorIterator__f_display4 = null;
    this.sci_VectorIterator__f_display5 = null;
    this.sci_VectorIterator__f_endIndex = endIndex;
    this.sci_VectorIterator__f_blockIndex = ((-32) & _startIndex);
    this.sci_VectorIterator__f_lo = (31 & _startIndex);
    const a = ((this.sci_VectorIterator__f_endIndex - this.sci_VectorIterator__f_blockIndex) | 0);
    this.sci_VectorIterator__f_endLo = ((a < 32) ? a : 32);
    this.sci_VectorIterator__f__hasNext = (((this.sci_VectorIterator__f_blockIndex + this.sci_VectorIterator__f_lo) | 0) < this.sci_VectorIterator__f_endIndex)
  };
  depth__I() {
    return this.sci_VectorIterator__f_depth
  };
  depth_$eq__I__V(x$1) {
    this.sci_VectorIterator__f_depth = x$1
  };
  display0__AO() {
    return this.sci_VectorIterator__f_display0
  };
  display0_$eq__AO__V(x$1) {
    this.sci_VectorIterator__f_display0 = x$1
  };
  display1__AAO() {
    return this.sci_VectorIterator__f_display1
  };
  display1_$eq__AAO__V(x$1) {
    this.sci_VectorIterator__f_display1 = x$1
  };
  display2__AAAO() {
    return this.sci_VectorIterator__f_display2
  };
  display2_$eq__AAAO__V(x$1) {
    this.sci_VectorIterator__f_display2 = x$1
  };
  display3__AAAAO() {
    return this.sci_VectorIterator__f_display3
  };
  display3_$eq__AAAAO__V(x$1) {
    this.sci_VectorIterator__f_display3 = x$1
  };
  display4__AAAAAO() {
    return this.sci_VectorIterator__f_display4
  };
  display4_$eq__AAAAAO__V(x$1) {
    this.sci_VectorIterator__f_display4 = x$1
  };
  display5__AAAAAAO() {
    return this.sci_VectorIterator__f_display5
  };
  display5_$eq__AAAAAAO__V(x$1) {
    this.sci_VectorIterator__f_display5 = x$1
  };
  hasNext__Z() {
    return this.sci_VectorIterator__f__hasNext
  };
  drop__I__sc_Iterator(n) {
    if ((n > 0)) {
      const value = this.sci_VectorIterator__f_lo;
      const hi = (value >> 31);
      const hi$1 = (n >> 31);
      const lo = ((value + n) | 0);
      const hi$2 = ((((-2147483648) ^ lo) < ((-2147483648) ^ value)) ? ((1 + ((hi + hi$1) | 0)) | 0) : ((hi + hi$1) | 0));
      const value$1 = this.sci_VectorIterator__f_blockIndex;
      const hi$3 = (value$1 >> 31);
      const lo$1 = ((value$1 + lo) | 0);
      const hi$4 = ((((-2147483648) ^ lo$1) < ((-2147483648) ^ value$1)) ? ((1 + ((hi$3 + hi$2) | 0)) | 0) : ((hi$3 + hi$2) | 0));
      const value$2 = this.sci_VectorIterator__f_endIndex;
      const hi$5 = (value$2 >> 31);
      if (((hi$4 === hi$5) ? (((-2147483648) ^ lo$1) < ((-2147483648) ^ value$2)) : (hi$4 < hi$5))) {
        this.sci_VectorIterator__f_lo = lo;
        if ((this.sci_VectorIterator__f_lo >= 32)) {
          this.sci_VectorIterator__f_blockIndex = ((-32) & ((this.sci_VectorIterator__f_blockIndex + this.sci_VectorIterator__f_lo) | 0));
          const index = this.sci_VectorIterator__f_blockIndex;
          const depth = this.sci_VectorIterator__f_depth;
          $f_sci_VectorPointer__gotoNewBlockStart__I__I__V(this, index, depth);
          const a = ((this.sci_VectorIterator__f_endIndex - this.sci_VectorIterator__f_blockIndex) | 0);
          this.sci_VectorIterator__f_endLo = ((a < 32) ? a : 32);
          this.sci_VectorIterator__f_lo = (31 & this.sci_VectorIterator__f_lo)
        }
      } else {
        this.sci_VectorIterator__f__hasNext = false;
        this.sci_VectorIterator__f_endIndex = 0
      }
    };
    return this
  };
  next__O() {
    if ((!this.sci_VectorIterator__f__hasNext)) {
      throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "reached iterator end")
    };
    const res = this.sci_VectorIterator__f_display0.u[this.sci_VectorIterator__f_lo];
    this.sci_VectorIterator__f_lo = ((1 + this.sci_VectorIterator__f_lo) | 0);
    $p_sci_VectorIterator__advanceToNextBlockIfNecessary__V(this);
    return res
  };
  copyToArray__O__I__I__I(xs, start, len) {
    const xsLen = $m_sr_ScalaRunTime$().array_length__O__I(xs);
    const srcLen = this.remainingElementCount__I();
    const x = ((len < srcLen) ? len : srcLen);
    const y = ((xsLen - start) | 0);
    const x$1 = ((x < y) ? x : y);
    const totalToBeCopied = ((x$1 > 0) ? x$1 : 0);
    let totalCopied = 0;
    while ((this.sci_VectorIterator__f__hasNext && (totalCopied < totalToBeCopied))) {
      const _start = ((start + totalCopied) | 0);
      const srcLen$1 = ((this.sci_VectorIterator__f_endLo - this.sci_VectorIterator__f_lo) | 0);
      const len$1 = ((len - totalCopied) | 0);
      const x$2 = ((len$1 < srcLen$1) ? len$1 : srcLen$1);
      const y$1 = ((xsLen - _start) | 0);
      const x$3 = ((x$2 < y$1) ? x$2 : y$1);
      const toBeCopied = ((x$3 > 0) ? x$3 : 0);
      $m_s_Array$().copy__O__I__O__I__I__V(this.sci_VectorIterator__f_display0, this.sci_VectorIterator__f_lo, xs, _start, toBeCopied);
      totalCopied = ((totalCopied + toBeCopied) | 0);
      this.sci_VectorIterator__f_lo = ((this.sci_VectorIterator__f_lo + toBeCopied) | 0);
      $p_sci_VectorIterator__advanceToNextBlockIfNecessary__V(this)
    };
    return totalCopied
  };
  remainingElementCount__I() {
    const x = ((this.sci_VectorIterator__f_endIndex - ((this.sci_VectorIterator__f_blockIndex + this.sci_VectorIterator__f_lo) | 0)) | 0);
    return ((x > 0) ? x : 0)
  };
  knownSize__I() {
    return this.remainingElementCount__I()
  };
}
const $d_sci_VectorIterator = new $TypeData().initClass({
  sci_VectorIterator: 0
}, false, "scala.collection.immutable.VectorIterator", {
  sci_VectorIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  sci_VectorPointer: 1
});
$c_sci_VectorIterator.prototype.$classData = $d_sci_VectorIterator;
class $c_scm_ArraySeq$ extends $c_O {
  constructor() {
    super();
    this.scm_ArraySeq$__f_untagged = null;
    this.scm_ArraySeq$__f_EmptyArraySeq = null;
    $n_scm_ArraySeq$ = this;
    this.scm_ArraySeq$__f_untagged = new $c_sc_ClassTagSeqFactory$AnySeqDelegate(this);
    this.scm_ArraySeq$__f_EmptyArraySeq = new $c_scm_ArraySeq$ofRef($newArrayObject($d_O.getArrayOf(), [0]))
  };
  make__O__scm_ArraySeq(x) {
    if ((x === null)) {
      return null
    } else if ($isArrayOf_O(x, 1)) {
      const x3 = x;
      return new $c_scm_ArraySeq$ofRef(x3)
    } else if ($isArrayOf_I(x, 1)) {
      const x4 = x;
      return new $c_scm_ArraySeq$ofInt(x4)
    } else if ($isArrayOf_D(x, 1)) {
      const x5 = x;
      return new $c_scm_ArraySeq$ofDouble(x5)
    } else if ($isArrayOf_J(x, 1)) {
      const x6 = x;
      return new $c_scm_ArraySeq$ofLong(x6)
    } else if ($isArrayOf_F(x, 1)) {
      const x7 = x;
      return new $c_scm_ArraySeq$ofFloat(x7)
    } else if ($isArrayOf_C(x, 1)) {
      const x8 = x;
      return new $c_scm_ArraySeq$ofChar(x8)
    } else if ($isArrayOf_B(x, 1)) {
      const x9 = x;
      return new $c_scm_ArraySeq$ofByte(x9)
    } else if ($isArrayOf_S(x, 1)) {
      const x10 = x;
      return new $c_scm_ArraySeq$ofShort(x10)
    } else if ($isArrayOf_Z(x, 1)) {
      const x11 = x;
      return new $c_scm_ArraySeq$ofBoolean(x11)
    } else if ($isArrayOf_jl_Void(x, 1)) {
      const x12 = x;
      return new $c_scm_ArraySeq$ofUnit(x12)
    } else {
      throw new $c_s_MatchError(x)
    }
  };
}
const $d_scm_ArraySeq$ = new $TypeData().initClass({
  scm_ArraySeq$: 0
}, false, "scala.collection.mutable.ArraySeq$", {
  scm_ArraySeq$: 1,
  O: 1,
  sc_StrictOptimizedClassTagSeqFactory: 1,
  sc_ClassTagSeqFactory: 1,
  sc_ClassTagIterableFactory: 1,
  sc_EvidenceIterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ArraySeq$.prototype.$classData = $d_scm_ArraySeq$;
let $n_scm_ArraySeq$ = (void 0);
function $m_scm_ArraySeq$() {
  if ((!$n_scm_ArraySeq$)) {
    $n_scm_ArraySeq$ = new $c_scm_ArraySeq$()
  };
  return $n_scm_ArraySeq$
}
class $c_s_reflect_ClassTag$GenericClassTag extends $c_O {
  constructor(runtimeClass) {
    super();
    this.s_reflect_ClassTag$GenericClassTag__f_runtimeClass = null;
    this.s_reflect_ClassTag$GenericClassTag__f_runtimeClass = runtimeClass
  };
  equals__O__Z(x) {
    return $f_s_reflect_ClassTag__equals__O__Z(this, x)
  };
  hashCode__I() {
    const x = this.s_reflect_ClassTag$GenericClassTag__f_runtimeClass;
    return $m_sr_Statics$().anyHash__O__I(x)
  };
  toString__T() {
    return $p_s_reflect_ClassTag__prettyprint$1__jl_Class__T(this, this.s_reflect_ClassTag$GenericClassTag__f_runtimeClass)
  };
  runtimeClass__jl_Class() {
    return this.s_reflect_ClassTag$GenericClassTag__f_runtimeClass
  };
}
const $d_s_reflect_ClassTag$GenericClassTag = new $TypeData().initClass({
  s_reflect_ClassTag$GenericClassTag: 0
}, false, "scala.reflect.ClassTag$GenericClassTag", {
  s_reflect_ClassTag$GenericClassTag: 1,
  O: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ClassTag$GenericClassTag.prototype.$classData = $d_s_reflect_ClassTag$GenericClassTag;
class $c_sc_ArrayOps$ArrayIterator$mcB$sp extends $c_sc_ArrayOps$ArrayIterator {
  constructor(xs$mcB$sp) {
    super();
    this.sc_ArrayOps$ArrayIterator$mcB$sp__f_xs$mcB$sp = null;
    this.sc_ArrayOps$ArrayIterator$mcB$sp__f_xs$mcB$sp = xs$mcB$sp;
    $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcB$sp)
  };
  next$mcB$sp__B() {
    try {
      const r = this.sc_ArrayOps$ArrayIterator$mcB$sp__f_xs$mcB$sp.u[this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos];
      this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
      return r
    } catch (e) {
      if ((e instanceof $c_jl_ArrayIndexOutOfBoundsException)) {
        return ($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O() | 0)
      } else {
        throw e
      }
    }
  };
  next__O() {
    return this.next$mcB$sp__B()
  };
}
const $d_sc_ArrayOps$ArrayIterator$mcB$sp = new $TypeData().initClass({
  sc_ArrayOps$ArrayIterator$mcB$sp: 0
}, false, "scala.collection.ArrayOps$ArrayIterator$mcB$sp", {
  sc_ArrayOps$ArrayIterator$mcB$sp: 1,
  sc_ArrayOps$ArrayIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
});
$c_sc_ArrayOps$ArrayIterator$mcB$sp.prototype.$classData = $d_sc_ArrayOps$ArrayIterator$mcB$sp;
class $c_sc_ArrayOps$ArrayIterator$mcC$sp extends $c_sc_ArrayOps$ArrayIterator {
  constructor(xs$mcC$sp) {
    super();
    this.sc_ArrayOps$ArrayIterator$mcC$sp__f_xs$mcC$sp = null;
    this.sc_ArrayOps$ArrayIterator$mcC$sp__f_xs$mcC$sp = xs$mcC$sp;
    $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcC$sp)
  };
  next$mcC$sp__C() {
    try {
      const r = this.sc_ArrayOps$ArrayIterator$mcC$sp__f_xs$mcC$sp.u[this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos];
      this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
      return r
    } catch (e) {
      if ((e instanceof $c_jl_ArrayIndexOutOfBoundsException)) {
        return $uC($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O())
      } else {
        throw e
      }
    }
  };
  next__O() {
    return $bC(this.next$mcC$sp__C())
  };
}
const $d_sc_ArrayOps$ArrayIterator$mcC$sp = new $TypeData().initClass({
  sc_ArrayOps$ArrayIterator$mcC$sp: 0
}, false, "scala.collection.ArrayOps$ArrayIterator$mcC$sp", {
  sc_ArrayOps$ArrayIterator$mcC$sp: 1,
  sc_ArrayOps$ArrayIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
});
$c_sc_ArrayOps$ArrayIterator$mcC$sp.prototype.$classData = $d_sc_ArrayOps$ArrayIterator$mcC$sp;
class $c_sc_ArrayOps$ArrayIterator$mcD$sp extends $c_sc_ArrayOps$ArrayIterator {
  constructor(xs$mcD$sp) {
    super();
    this.sc_ArrayOps$ArrayIterator$mcD$sp__f_xs$mcD$sp = null;
    this.sc_ArrayOps$ArrayIterator$mcD$sp__f_xs$mcD$sp = xs$mcD$sp;
    $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcD$sp)
  };
  next$mcD$sp__D() {
    try {
      const r = this.sc_ArrayOps$ArrayIterator$mcD$sp__f_xs$mcD$sp.u[this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos];
      this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
      return r
    } catch (e) {
      if ((e instanceof $c_jl_ArrayIndexOutOfBoundsException)) {
        return (+$m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O())
      } else {
        throw e
      }
    }
  };
  next__O() {
    return this.next$mcD$sp__D()
  };
}
const $d_sc_ArrayOps$ArrayIterator$mcD$sp = new $TypeData().initClass({
  sc_ArrayOps$ArrayIterator$mcD$sp: 0
}, false, "scala.collection.ArrayOps$ArrayIterator$mcD$sp", {
  sc_ArrayOps$ArrayIterator$mcD$sp: 1,
  sc_ArrayOps$ArrayIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
});
$c_sc_ArrayOps$ArrayIterator$mcD$sp.prototype.$classData = $d_sc_ArrayOps$ArrayIterator$mcD$sp;
class $c_sc_ArrayOps$ArrayIterator$mcF$sp extends $c_sc_ArrayOps$ArrayIterator {
  constructor(xs$mcF$sp) {
    super();
    this.sc_ArrayOps$ArrayIterator$mcF$sp__f_xs$mcF$sp = null;
    this.sc_ArrayOps$ArrayIterator$mcF$sp__f_xs$mcF$sp = xs$mcF$sp;
    $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcF$sp)
  };
  next$mcF$sp__F() {
    try {
      const r = this.sc_ArrayOps$ArrayIterator$mcF$sp__f_xs$mcF$sp.u[this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos];
      this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
      return r
    } catch (e) {
      if ((e instanceof $c_jl_ArrayIndexOutOfBoundsException)) {
        return (+$m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O())
      } else {
        throw e
      }
    }
  };
  next__O() {
    return this.next$mcF$sp__F()
  };
}
const $d_sc_ArrayOps$ArrayIterator$mcF$sp = new $TypeData().initClass({
  sc_ArrayOps$ArrayIterator$mcF$sp: 0
}, false, "scala.collection.ArrayOps$ArrayIterator$mcF$sp", {
  sc_ArrayOps$ArrayIterator$mcF$sp: 1,
  sc_ArrayOps$ArrayIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
});
$c_sc_ArrayOps$ArrayIterator$mcF$sp.prototype.$classData = $d_sc_ArrayOps$ArrayIterator$mcF$sp;
class $c_sc_ArrayOps$ArrayIterator$mcI$sp extends $c_sc_ArrayOps$ArrayIterator {
  constructor(xs$mcI$sp) {
    super();
    this.sc_ArrayOps$ArrayIterator$mcI$sp__f_xs$mcI$sp = null;
    this.sc_ArrayOps$ArrayIterator$mcI$sp__f_xs$mcI$sp = xs$mcI$sp;
    $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcI$sp)
  };
  next$mcI$sp__I() {
    try {
      const r = this.sc_ArrayOps$ArrayIterator$mcI$sp__f_xs$mcI$sp.u[this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos];
      this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
      return r
    } catch (e) {
      if ((e instanceof $c_jl_ArrayIndexOutOfBoundsException)) {
        return ($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O() | 0)
      } else {
        throw e
      }
    }
  };
  next__O() {
    return this.next$mcI$sp__I()
  };
}
const $d_sc_ArrayOps$ArrayIterator$mcI$sp = new $TypeData().initClass({
  sc_ArrayOps$ArrayIterator$mcI$sp: 0
}, false, "scala.collection.ArrayOps$ArrayIterator$mcI$sp", {
  sc_ArrayOps$ArrayIterator$mcI$sp: 1,
  sc_ArrayOps$ArrayIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
});
$c_sc_ArrayOps$ArrayIterator$mcI$sp.prototype.$classData = $d_sc_ArrayOps$ArrayIterator$mcI$sp;
class $c_sc_ArrayOps$ArrayIterator$mcJ$sp extends $c_sc_ArrayOps$ArrayIterator {
  constructor(xs$mcJ$sp) {
    super();
    this.sc_ArrayOps$ArrayIterator$mcJ$sp__f_xs$mcJ$sp = null;
    this.sc_ArrayOps$ArrayIterator$mcJ$sp__f_xs$mcJ$sp = xs$mcJ$sp;
    $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcJ$sp)
  };
  next$mcJ$sp__J() {
    try {
      const t = this.sc_ArrayOps$ArrayIterator$mcJ$sp__f_xs$mcJ$sp.u[this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos];
      const lo = t.RTLong__f_lo;
      const hi = t.RTLong__f_hi;
      this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
      return new $c_RTLong(lo, hi)
    } catch (e) {
      if ((e instanceof $c_jl_ArrayIndexOutOfBoundsException)) {
        return $uJ($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O())
      } else {
        throw e
      }
    }
  };
  next__O() {
    return this.next$mcJ$sp__J()
  };
}
const $d_sc_ArrayOps$ArrayIterator$mcJ$sp = new $TypeData().initClass({
  sc_ArrayOps$ArrayIterator$mcJ$sp: 0
}, false, "scala.collection.ArrayOps$ArrayIterator$mcJ$sp", {
  sc_ArrayOps$ArrayIterator$mcJ$sp: 1,
  sc_ArrayOps$ArrayIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
});
$c_sc_ArrayOps$ArrayIterator$mcJ$sp.prototype.$classData = $d_sc_ArrayOps$ArrayIterator$mcJ$sp;
class $c_sc_ArrayOps$ArrayIterator$mcS$sp extends $c_sc_ArrayOps$ArrayIterator {
  constructor(xs$mcS$sp) {
    super();
    this.sc_ArrayOps$ArrayIterator$mcS$sp__f_xs$mcS$sp = null;
    this.sc_ArrayOps$ArrayIterator$mcS$sp__f_xs$mcS$sp = xs$mcS$sp;
    $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcS$sp)
  };
  next$mcS$sp__S() {
    try {
      const r = this.sc_ArrayOps$ArrayIterator$mcS$sp__f_xs$mcS$sp.u[this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos];
      this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
      return r
    } catch (e) {
      if ((e instanceof $c_jl_ArrayIndexOutOfBoundsException)) {
        return ($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O() | 0)
      } else {
        throw e
      }
    }
  };
  next__O() {
    return this.next$mcS$sp__S()
  };
}
const $d_sc_ArrayOps$ArrayIterator$mcS$sp = new $TypeData().initClass({
  sc_ArrayOps$ArrayIterator$mcS$sp: 0
}, false, "scala.collection.ArrayOps$ArrayIterator$mcS$sp", {
  sc_ArrayOps$ArrayIterator$mcS$sp: 1,
  sc_ArrayOps$ArrayIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
});
$c_sc_ArrayOps$ArrayIterator$mcS$sp.prototype.$classData = $d_sc_ArrayOps$ArrayIterator$mcS$sp;
class $c_sc_ArrayOps$ArrayIterator$mcV$sp extends $c_sc_ArrayOps$ArrayIterator {
  constructor(xs$mcV$sp) {
    super();
    this.sc_ArrayOps$ArrayIterator$mcV$sp__f_xs$mcV$sp = null;
    this.sc_ArrayOps$ArrayIterator$mcV$sp__f_xs$mcV$sp = xs$mcV$sp;
    $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcV$sp)
  };
  next$mcV$sp__V() {
    try {
      this.sc_ArrayOps$ArrayIterator$mcV$sp__f_xs$mcV$sp.u[this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos];
      this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0)
    } catch (e) {
      if ((e instanceof $c_jl_ArrayIndexOutOfBoundsException)) {
        $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O()
      } else {
        throw e
      }
    }
  };
  next__O() {
    this.next$mcV$sp__V()
  };
}
const $d_sc_ArrayOps$ArrayIterator$mcV$sp = new $TypeData().initClass({
  sc_ArrayOps$ArrayIterator$mcV$sp: 0
}, false, "scala.collection.ArrayOps$ArrayIterator$mcV$sp", {
  sc_ArrayOps$ArrayIterator$mcV$sp: 1,
  sc_ArrayOps$ArrayIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
});
$c_sc_ArrayOps$ArrayIterator$mcV$sp.prototype.$classData = $d_sc_ArrayOps$ArrayIterator$mcV$sp;
class $c_sc_ArrayOps$ArrayIterator$mcZ$sp extends $c_sc_ArrayOps$ArrayIterator {
  constructor(xs$mcZ$sp) {
    super();
    this.sc_ArrayOps$ArrayIterator$mcZ$sp__f_xs$mcZ$sp = null;
    this.sc_ArrayOps$ArrayIterator$mcZ$sp__f_xs$mcZ$sp = xs$mcZ$sp;
    $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcZ$sp)
  };
  next$mcZ$sp__Z() {
    try {
      const r = this.sc_ArrayOps$ArrayIterator$mcZ$sp__f_xs$mcZ$sp.u[this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos];
      this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
      return r
    } catch (e) {
      if ((e instanceof $c_jl_ArrayIndexOutOfBoundsException)) {
        return (!(!$m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O()))
      } else {
        throw e
      }
    }
  };
  next__O() {
    return this.next$mcZ$sp__Z()
  };
}
const $d_sc_ArrayOps$ArrayIterator$mcZ$sp = new $TypeData().initClass({
  sc_ArrayOps$ArrayIterator$mcZ$sp: 0
}, false, "scala.collection.ArrayOps$ArrayIterator$mcZ$sp", {
  sc_ArrayOps$ArrayIterator$mcZ$sp: 1,
  sc_ArrayOps$ArrayIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
});
$c_sc_ArrayOps$ArrayIterator$mcZ$sp.prototype.$classData = $d_sc_ArrayOps$ArrayIterator$mcZ$sp;
const $f_sc_View__toString__T = (function($thiz) {
  return ($thiz.className__T() + "(<not computed>)")
});
function $is_sc_View(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_View)))
}
function $isArrayOf_sc_View(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_View)))
}
class $c_s_reflect_AnyValManifest extends $c_O {
  constructor() {
    super();
    this.s_reflect_AnyValManifest__f_toString = null;
    this.s_reflect_AnyValManifest__f_hashCode = 0
  };
  toString__T() {
    return this.s_reflect_AnyValManifest__f_toString
  };
  equals__O__Z(that) {
    return (this === that)
  };
  hashCode__I() {
    return this.s_reflect_AnyValManifest__f_hashCode
  };
}
class $c_s_reflect_ManifestFactory$ClassTypeManifest extends $c_O {
  constructor() {
    super();
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_prefix = null;
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_runtimeClass1 = null;
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_typeArguments = null
  };
}
class $c_sjs_js_JavaScriptException extends $c_jl_RuntimeException {
  constructor(exception) {
    super();
    this.sjs_js_JavaScriptException__f_exception = null;
    this.sjs_js_JavaScriptException__f_exception = exception;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true)
  };
  getMessage__T() {
    return $dp_toString__T(this.sjs_js_JavaScriptException__f_exception)
  };
  fillInStackTrace__jl_Throwable() {
    this.setStackTraceStateInternal__O__(this.sjs_js_JavaScriptException__f_exception);
    return this
  };
  productPrefix__T() {
    return "JavaScriptException"
  };
  productArity__I() {
    return 1
  };
  productElement__I__O(x$1) {
    return ((x$1 === 0) ? this.sjs_js_JavaScriptException__f_exception : $m_sr_Statics$().ioobe__I__O(x$1))
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    const this$2 = $m_s_util_hashing_MurmurHash3$();
    return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_sjs_js_JavaScriptException)) {
      const JavaScriptException$1 = x$1;
      const x = this.sjs_js_JavaScriptException__f_exception;
      const y = JavaScriptException$1.sjs_js_JavaScriptException__f_exception;
      return $m_sr_BoxesRunTime$().equals__O__O__Z(x, y)
    } else {
      return false
    }
  };
  setStackTraceStateInternal__O__(e) {
    this.jl_Throwable__f_stackTraceStateInternal = e
  };
}
function $isArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sjs_js_JavaScriptException)))
}
const $d_sjs_js_JavaScriptException = new $TypeData().initClass({
  sjs_js_JavaScriptException: 0
}, false, "scala.scalajs.js.JavaScriptException", {
  sjs_js_JavaScriptException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  s_Product: 1,
  s_Equals: 1
});
$c_sjs_js_JavaScriptException.prototype.$classData = $d_sjs_js_JavaScriptException;
const $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq = (function($thiz, n, s) {
  while (true) {
    if (((n <= 0) || s.isEmpty__Z())) {
      return s
    } else {
      const temp$n = (((-1) + n) | 0);
      const temp$s = s.tail__O();
      n = temp$n;
      s = temp$s
    }
  }
});
class $c_s_reflect_ManifestFactory$BooleanManifest extends $c_s_reflect_AnyValManifest {
  runtimeClass__jl_Class() {
    return $d_Z.getClassOf()
  };
}
class $c_s_reflect_ManifestFactory$ByteManifest extends $c_s_reflect_AnyValManifest {
  runtimeClass__jl_Class() {
    return $d_B.getClassOf()
  };
}
class $c_s_reflect_ManifestFactory$CharManifest extends $c_s_reflect_AnyValManifest {
  runtimeClass__jl_Class() {
    return $d_C.getClassOf()
  };
}
class $c_s_reflect_ManifestFactory$DoubleManifest extends $c_s_reflect_AnyValManifest {
  runtimeClass__jl_Class() {
    return $d_D.getClassOf()
  };
}
class $c_s_reflect_ManifestFactory$FloatManifest extends $c_s_reflect_AnyValManifest {
  runtimeClass__jl_Class() {
    return $d_F.getClassOf()
  };
}
class $c_s_reflect_ManifestFactory$IntManifest extends $c_s_reflect_AnyValManifest {
  runtimeClass__jl_Class() {
    return $d_I.getClassOf()
  };
}
class $c_s_reflect_ManifestFactory$LongManifest extends $c_s_reflect_AnyValManifest {
  runtimeClass__jl_Class() {
    return $d_J.getClassOf()
  };
}
class $c_s_reflect_ManifestFactory$PhantomManifest extends $c_s_reflect_ManifestFactory$ClassTypeManifest {
  constructor() {
    super();
    this.s_reflect_ManifestFactory$PhantomManifest__f_toString = null;
    this.s_reflect_ManifestFactory$PhantomManifest__f_hashCode = 0
  };
  toString__T() {
    return this.s_reflect_ManifestFactory$PhantomManifest__f_toString
  };
  equals__O__Z(that) {
    return (this === that)
  };
  hashCode__I() {
    return this.s_reflect_ManifestFactory$PhantomManifest__f_hashCode
  };
}
class $c_s_reflect_ManifestFactory$ShortManifest extends $c_s_reflect_AnyValManifest {
  runtimeClass__jl_Class() {
    return $d_S.getClassOf()
  };
}
class $c_s_reflect_ManifestFactory$UnitManifest extends $c_s_reflect_AnyValManifest {
  runtimeClass__jl_Class() {
    return $d_V.getClassOf()
  };
}
class $c_sc_AbstractView extends $c_sc_AbstractIterable {
  iterableFactory__sc_IterableFactory() {
    return $m_sc_View$()
  };
  toString__T() {
    return $f_sc_View__toString__T(this)
  };
  stringPrefix__T() {
    return "View"
  };
}
const $f_sc_Set__equals__O__Z = (function($thiz, that) {
  if ($is_sc_Set(that)) {
    const x2 = that;
    return (($thiz === x2) || (($thiz.size__I() === x2.size__I()) && $thiz.subsetOf__sc_Set__Z(x2)))
  } else {
    return false
  }
});
function $is_sc_Set(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_Set)))
}
function $isArrayOf_sc_Set(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_Set)))
}
class $c_s_reflect_ManifestFactory$AnyManifest$ extends $c_s_reflect_ManifestFactory$PhantomManifest {
  constructor() {
    super();
    this.s_reflect_ManifestFactory$PhantomManifest__f_toString = "Any";
    const prefix = $m_s_None$();
    const typeArguments = $m_sci_Nil$();
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_prefix = prefix;
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_runtimeClass1 = $d_O.getClassOf();
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_typeArguments = typeArguments;
    this.s_reflect_ManifestFactory$PhantomManifest__f_hashCode = $systemIdentityHashCode(this)
  };
  runtimeClass__jl_Class() {
    return $d_O.getClassOf()
  };
}
const $d_s_reflect_ManifestFactory$AnyManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$AnyManifest$: 0
}, false, "scala.reflect.ManifestFactory$AnyManifest$", {
  s_reflect_ManifestFactory$AnyManifest$: 1,
  s_reflect_ManifestFactory$PhantomManifest: 1,
  s_reflect_ManifestFactory$ClassTypeManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$AnyManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$AnyManifest$;
let $n_s_reflect_ManifestFactory$AnyManifest$ = (void 0);
function $m_s_reflect_ManifestFactory$AnyManifest$() {
  if ((!$n_s_reflect_ManifestFactory$AnyManifest$)) {
    $n_s_reflect_ManifestFactory$AnyManifest$ = new $c_s_reflect_ManifestFactory$AnyManifest$()
  };
  return $n_s_reflect_ManifestFactory$AnyManifest$
}
class $c_s_reflect_ManifestFactory$BooleanManifest$ extends $c_s_reflect_ManifestFactory$BooleanManifest {
  constructor() {
    super();
    this.s_reflect_AnyValManifest__f_toString = "Boolean";
    this.s_reflect_AnyValManifest__f_hashCode = $systemIdentityHashCode(this)
  };
}
const $d_s_reflect_ManifestFactory$BooleanManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$BooleanManifest$: 0
}, false, "scala.reflect.ManifestFactory$BooleanManifest$", {
  s_reflect_ManifestFactory$BooleanManifest$: 1,
  s_reflect_ManifestFactory$BooleanManifest: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$BooleanManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$BooleanManifest$;
let $n_s_reflect_ManifestFactory$BooleanManifest$ = (void 0);
function $m_s_reflect_ManifestFactory$BooleanManifest$() {
  if ((!$n_s_reflect_ManifestFactory$BooleanManifest$)) {
    $n_s_reflect_ManifestFactory$BooleanManifest$ = new $c_s_reflect_ManifestFactory$BooleanManifest$()
  };
  return $n_s_reflect_ManifestFactory$BooleanManifest$
}
class $c_s_reflect_ManifestFactory$ByteManifest$ extends $c_s_reflect_ManifestFactory$ByteManifest {
  constructor() {
    super();
    this.s_reflect_AnyValManifest__f_toString = "Byte";
    this.s_reflect_AnyValManifest__f_hashCode = $systemIdentityHashCode(this)
  };
}
const $d_s_reflect_ManifestFactory$ByteManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$ByteManifest$: 0
}, false, "scala.reflect.ManifestFactory$ByteManifest$", {
  s_reflect_ManifestFactory$ByteManifest$: 1,
  s_reflect_ManifestFactory$ByteManifest: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$ByteManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$ByteManifest$;
let $n_s_reflect_ManifestFactory$ByteManifest$ = (void 0);
function $m_s_reflect_ManifestFactory$ByteManifest$() {
  if ((!$n_s_reflect_ManifestFactory$ByteManifest$)) {
    $n_s_reflect_ManifestFactory$ByteManifest$ = new $c_s_reflect_ManifestFactory$ByteManifest$()
  };
  return $n_s_reflect_ManifestFactory$ByteManifest$
}
class $c_s_reflect_ManifestFactory$CharManifest$ extends $c_s_reflect_ManifestFactory$CharManifest {
  constructor() {
    super();
    this.s_reflect_AnyValManifest__f_toString = "Char";
    this.s_reflect_AnyValManifest__f_hashCode = $systemIdentityHashCode(this)
  };
}
const $d_s_reflect_ManifestFactory$CharManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$CharManifest$: 0
}, false, "scala.reflect.ManifestFactory$CharManifest$", {
  s_reflect_ManifestFactory$CharManifest$: 1,
  s_reflect_ManifestFactory$CharManifest: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$CharManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$CharManifest$;
let $n_s_reflect_ManifestFactory$CharManifest$ = (void 0);
function $m_s_reflect_ManifestFactory$CharManifest$() {
  if ((!$n_s_reflect_ManifestFactory$CharManifest$)) {
    $n_s_reflect_ManifestFactory$CharManifest$ = new $c_s_reflect_ManifestFactory$CharManifest$()
  };
  return $n_s_reflect_ManifestFactory$CharManifest$
}
class $c_s_reflect_ManifestFactory$DoubleManifest$ extends $c_s_reflect_ManifestFactory$DoubleManifest {
  constructor() {
    super();
    this.s_reflect_AnyValManifest__f_toString = "Double";
    this.s_reflect_AnyValManifest__f_hashCode = $systemIdentityHashCode(this)
  };
}
const $d_s_reflect_ManifestFactory$DoubleManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$DoubleManifest$: 0
}, false, "scala.reflect.ManifestFactory$DoubleManifest$", {
  s_reflect_ManifestFactory$DoubleManifest$: 1,
  s_reflect_ManifestFactory$DoubleManifest: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$DoubleManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$DoubleManifest$;
let $n_s_reflect_ManifestFactory$DoubleManifest$ = (void 0);
function $m_s_reflect_ManifestFactory$DoubleManifest$() {
  if ((!$n_s_reflect_ManifestFactory$DoubleManifest$)) {
    $n_s_reflect_ManifestFactory$DoubleManifest$ = new $c_s_reflect_ManifestFactory$DoubleManifest$()
  };
  return $n_s_reflect_ManifestFactory$DoubleManifest$
}
class $c_s_reflect_ManifestFactory$FloatManifest$ extends $c_s_reflect_ManifestFactory$FloatManifest {
  constructor() {
    super();
    this.s_reflect_AnyValManifest__f_toString = "Float";
    this.s_reflect_AnyValManifest__f_hashCode = $systemIdentityHashCode(this)
  };
}
const $d_s_reflect_ManifestFactory$FloatManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$FloatManifest$: 0
}, false, "scala.reflect.ManifestFactory$FloatManifest$", {
  s_reflect_ManifestFactory$FloatManifest$: 1,
  s_reflect_ManifestFactory$FloatManifest: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$FloatManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$FloatManifest$;
let $n_s_reflect_ManifestFactory$FloatManifest$ = (void 0);
function $m_s_reflect_ManifestFactory$FloatManifest$() {
  if ((!$n_s_reflect_ManifestFactory$FloatManifest$)) {
    $n_s_reflect_ManifestFactory$FloatManifest$ = new $c_s_reflect_ManifestFactory$FloatManifest$()
  };
  return $n_s_reflect_ManifestFactory$FloatManifest$
}
class $c_s_reflect_ManifestFactory$IntManifest$ extends $c_s_reflect_ManifestFactory$IntManifest {
  constructor() {
    super();
    this.s_reflect_AnyValManifest__f_toString = "Int";
    this.s_reflect_AnyValManifest__f_hashCode = $systemIdentityHashCode(this)
  };
}
const $d_s_reflect_ManifestFactory$IntManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$IntManifest$: 0
}, false, "scala.reflect.ManifestFactory$IntManifest$", {
  s_reflect_ManifestFactory$IntManifest$: 1,
  s_reflect_ManifestFactory$IntManifest: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$IntManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$IntManifest$;
let $n_s_reflect_ManifestFactory$IntManifest$ = (void 0);
function $m_s_reflect_ManifestFactory$IntManifest$() {
  if ((!$n_s_reflect_ManifestFactory$IntManifest$)) {
    $n_s_reflect_ManifestFactory$IntManifest$ = new $c_s_reflect_ManifestFactory$IntManifest$()
  };
  return $n_s_reflect_ManifestFactory$IntManifest$
}
class $c_s_reflect_ManifestFactory$LongManifest$ extends $c_s_reflect_ManifestFactory$LongManifest {
  constructor() {
    super();
    this.s_reflect_AnyValManifest__f_toString = "Long";
    this.s_reflect_AnyValManifest__f_hashCode = $systemIdentityHashCode(this)
  };
}
const $d_s_reflect_ManifestFactory$LongManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$LongManifest$: 0
}, false, "scala.reflect.ManifestFactory$LongManifest$", {
  s_reflect_ManifestFactory$LongManifest$: 1,
  s_reflect_ManifestFactory$LongManifest: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$LongManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$LongManifest$;
let $n_s_reflect_ManifestFactory$LongManifest$ = (void 0);
function $m_s_reflect_ManifestFactory$LongManifest$() {
  if ((!$n_s_reflect_ManifestFactory$LongManifest$)) {
    $n_s_reflect_ManifestFactory$LongManifest$ = new $c_s_reflect_ManifestFactory$LongManifest$()
  };
  return $n_s_reflect_ManifestFactory$LongManifest$
}
class $c_s_reflect_ManifestFactory$NothingManifest$ extends $c_s_reflect_ManifestFactory$PhantomManifest {
  constructor() {
    super();
    this.s_reflect_ManifestFactory$PhantomManifest__f_toString = "Nothing";
    const prefix = $m_s_None$();
    const typeArguments = $m_sci_Nil$();
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_prefix = prefix;
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_runtimeClass1 = $d_sr_Nothing$.getClassOf();
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_typeArguments = typeArguments;
    this.s_reflect_ManifestFactory$PhantomManifest__f_hashCode = $systemIdentityHashCode(this)
  };
  runtimeClass__jl_Class() {
    return $d_sr_Nothing$.getClassOf()
  };
}
const $d_s_reflect_ManifestFactory$NothingManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$NothingManifest$: 0
}, false, "scala.reflect.ManifestFactory$NothingManifest$", {
  s_reflect_ManifestFactory$NothingManifest$: 1,
  s_reflect_ManifestFactory$PhantomManifest: 1,
  s_reflect_ManifestFactory$ClassTypeManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$NothingManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$NothingManifest$;
let $n_s_reflect_ManifestFactory$NothingManifest$ = (void 0);
function $m_s_reflect_ManifestFactory$NothingManifest$() {
  if ((!$n_s_reflect_ManifestFactory$NothingManifest$)) {
    $n_s_reflect_ManifestFactory$NothingManifest$ = new $c_s_reflect_ManifestFactory$NothingManifest$()
  };
  return $n_s_reflect_ManifestFactory$NothingManifest$
}
class $c_s_reflect_ManifestFactory$NullManifest$ extends $c_s_reflect_ManifestFactory$PhantomManifest {
  constructor() {
    super();
    this.s_reflect_ManifestFactory$PhantomManifest__f_toString = "Null";
    const prefix = $m_s_None$();
    const typeArguments = $m_sci_Nil$();
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_prefix = prefix;
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_runtimeClass1 = $d_sr_Null$.getClassOf();
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_typeArguments = typeArguments;
    this.s_reflect_ManifestFactory$PhantomManifest__f_hashCode = $systemIdentityHashCode(this)
  };
  runtimeClass__jl_Class() {
    return $d_sr_Null$.getClassOf()
  };
}
const $d_s_reflect_ManifestFactory$NullManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$NullManifest$: 0
}, false, "scala.reflect.ManifestFactory$NullManifest$", {
  s_reflect_ManifestFactory$NullManifest$: 1,
  s_reflect_ManifestFactory$PhantomManifest: 1,
  s_reflect_ManifestFactory$ClassTypeManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$NullManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$NullManifest$;
let $n_s_reflect_ManifestFactory$NullManifest$ = (void 0);
function $m_s_reflect_ManifestFactory$NullManifest$() {
  if ((!$n_s_reflect_ManifestFactory$NullManifest$)) {
    $n_s_reflect_ManifestFactory$NullManifest$ = new $c_s_reflect_ManifestFactory$NullManifest$()
  };
  return $n_s_reflect_ManifestFactory$NullManifest$
}
class $c_s_reflect_ManifestFactory$ObjectManifest$ extends $c_s_reflect_ManifestFactory$PhantomManifest {
  constructor() {
    super();
    this.s_reflect_ManifestFactory$PhantomManifest__f_toString = "Object";
    const prefix = $m_s_None$();
    const typeArguments = $m_sci_Nil$();
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_prefix = prefix;
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_runtimeClass1 = $d_O.getClassOf();
    this.s_reflect_ManifestFactory$ClassTypeManifest__f_typeArguments = typeArguments;
    this.s_reflect_ManifestFactory$PhantomManifest__f_hashCode = $systemIdentityHashCode(this)
  };
  runtimeClass__jl_Class() {
    return $d_O.getClassOf()
  };
}
const $d_s_reflect_ManifestFactory$ObjectManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$ObjectManifest$: 0
}, false, "scala.reflect.ManifestFactory$ObjectManifest$", {
  s_reflect_ManifestFactory$ObjectManifest$: 1,
  s_reflect_ManifestFactory$PhantomManifest: 1,
  s_reflect_ManifestFactory$ClassTypeManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$ObjectManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$ObjectManifest$;
let $n_s_reflect_ManifestFactory$ObjectManifest$ = (void 0);
function $m_s_reflect_ManifestFactory$ObjectManifest$() {
  if ((!$n_s_reflect_ManifestFactory$ObjectManifest$)) {
    $n_s_reflect_ManifestFactory$ObjectManifest$ = new $c_s_reflect_ManifestFactory$ObjectManifest$()
  };
  return $n_s_reflect_ManifestFactory$ObjectManifest$
}
class $c_s_reflect_ManifestFactory$ShortManifest$ extends $c_s_reflect_ManifestFactory$ShortManifest {
  constructor() {
    super();
    this.s_reflect_AnyValManifest__f_toString = "Short";
    this.s_reflect_AnyValManifest__f_hashCode = $systemIdentityHashCode(this)
  };
}
const $d_s_reflect_ManifestFactory$ShortManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$ShortManifest$: 0
}, false, "scala.reflect.ManifestFactory$ShortManifest$", {
  s_reflect_ManifestFactory$ShortManifest$: 1,
  s_reflect_ManifestFactory$ShortManifest: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$ShortManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$ShortManifest$;
let $n_s_reflect_ManifestFactory$ShortManifest$ = (void 0);
function $m_s_reflect_ManifestFactory$ShortManifest$() {
  if ((!$n_s_reflect_ManifestFactory$ShortManifest$)) {
    $n_s_reflect_ManifestFactory$ShortManifest$ = new $c_s_reflect_ManifestFactory$ShortManifest$()
  };
  return $n_s_reflect_ManifestFactory$ShortManifest$
}
class $c_s_reflect_ManifestFactory$UnitManifest$ extends $c_s_reflect_ManifestFactory$UnitManifest {
  constructor() {
    super();
    this.s_reflect_AnyValManifest__f_toString = "Unit";
    this.s_reflect_AnyValManifest__f_hashCode = $systemIdentityHashCode(this)
  };
}
const $d_s_reflect_ManifestFactory$UnitManifest$ = new $TypeData().initClass({
  s_reflect_ManifestFactory$UnitManifest$: 0
}, false, "scala.reflect.ManifestFactory$UnitManifest$", {
  s_reflect_ManifestFactory$UnitManifest$: 1,
  s_reflect_ManifestFactory$UnitManifest: 1,
  s_reflect_AnyValManifest: 1,
  O: 1,
  s_reflect_Manifest: 1,
  s_reflect_ClassTag: 1,
  s_reflect_ClassManifestDeprecatedApis: 1,
  s_reflect_OptManifest: 1,
  Ljava_io_Serializable: 1,
  s_Equals: 1
});
$c_s_reflect_ManifestFactory$UnitManifest$.prototype.$classData = $d_s_reflect_ManifestFactory$UnitManifest$;
let $n_s_reflect_ManifestFactory$UnitManifest$ = (void 0);
function $m_s_reflect_ManifestFactory$UnitManifest$() {
  if ((!$n_s_reflect_ManifestFactory$UnitManifest$)) {
    $n_s_reflect_ManifestFactory$UnitManifest$ = new $c_s_reflect_ManifestFactory$UnitManifest$()
  };
  return $n_s_reflect_ManifestFactory$UnitManifest$
}
const $f_sc_Seq__equals__O__Z = (function($thiz, o) {
  if (($thiz === o)) {
    return true
  } else if ($is_sc_Seq(o)) {
    const x2 = o;
    return ((x2 === $thiz) || (x2.canEqual__O__Z($thiz) && $thiz.sameElements__sc_IterableOnce__Z(x2)))
  } else {
    return false
  }
});
function $is_sc_Seq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_Seq)))
}
function $isArrayOf_sc_Seq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_Seq)))
}
class $c_sc_View$$anon$1 extends $c_sc_AbstractView {
  constructor(it$1) {
    super();
    this.sc_View$$anon$1__f_it$1 = null;
    this.sc_View$$anon$1__f_it$1 = it$1
  };
  iterator__sc_Iterator() {
    return this.sc_View$$anon$1__f_it$1.apply__O()
  };
}
const $d_sc_View$$anon$1 = new $TypeData().initClass({
  sc_View$$anon$1: 0
}, false, "scala.collection.View$$anon$1", {
  sc_View$$anon$1: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1
});
$c_sc_View$$anon$1.prototype.$classData = $d_sc_View$$anon$1;
const $ct_sc_View$Drop__sc_IterableOps__I__ = (function($thiz, underlying, n) {
  $thiz.sc_View$Drop__f_underlying = underlying;
  $thiz.sc_View$Drop__f_n = n;
  $thiz.sc_View$Drop__f_normN = ((n > 0) ? n : 0);
  return $thiz
});
class $c_sc_View$Drop extends $c_sc_AbstractView {
  constructor() {
    super();
    this.sc_View$Drop__f_underlying = null;
    this.sc_View$Drop__f_n = 0;
    this.sc_View$Drop__f_normN = 0
  };
  iterator__sc_Iterator() {
    return this.sc_View$Drop__f_underlying.iterator__sc_Iterator().drop__I__sc_Iterator(this.sc_View$Drop__f_n)
  };
  knownSize__I() {
    const size = this.sc_View$Drop__f_underlying.knownSize__I();
    if ((size >= 0)) {
      const x = ((size - this.sc_View$Drop__f_normN) | 0);
      return ((x > 0) ? x : 0)
    } else {
      return (-1)
    }
  };
  isEmpty__Z() {
    const this$1 = this.iterator__sc_Iterator();
    return (!this$1.hasNext__Z())
  };
}
const $d_sc_View$Drop = new $TypeData().initClass({
  sc_View$Drop: 0
}, false, "scala.collection.View$Drop", {
  sc_View$Drop: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1
});
$c_sc_View$Drop.prototype.$classData = $d_sc_View$Drop;
class $c_sc_AbstractSet extends $c_sc_AbstractIterable {
  equals__O__Z(that) {
    return $f_sc_Set__equals__O__Z(this, that)
  };
  hashCode__I() {
    const this$1 = $m_s_util_hashing_MurmurHash3$();
    return this$1.unorderedHash__sc_IterableOnce__I__I(this, this$1.s_util_hashing_MurmurHash3$__f_setSeed)
  };
  stringPrefix__T() {
    return "Set"
  };
  toString__T() {
    return $f_sc_Iterable__toString__T(this)
  };
  subsetOf__sc_Set__Z(that) {
    return this.forall__F1__Z(that)
  };
  apply__O__O(v1) {
    return this.contains__O__Z(v1)
  };
}
class $c_sc_AbstractSeq extends $c_sc_AbstractIterable {
  canEqual__O__Z(that) {
    return true
  };
  equals__O__Z(o) {
    return $f_sc_Seq__equals__O__Z(this, o)
  };
  hashCode__I() {
    return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this)
  };
  toString__T() {
    return $f_sc_Iterable__toString__T(this)
  };
  indexWhere__F1__I__I(p, from) {
    const this$1 = this.iterator__sc_Iterator();
    return $f_sc_Iterator__indexWhere__F1__I__I(this$1, p, from)
  };
  lengthCompare__I__I(len) {
    return $f_sc_IterableOps__sizeCompare__I__I(this, len)
  };
  isEmpty__Z() {
    return $f_sc_SeqOps__isEmpty__Z(this)
  };
  sameElements__sc_IterableOnce__Z(that) {
    return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z(this, that)
  };
}
class $c_sc_AbstractSeqView extends $c_sc_AbstractView {
  drop__I__sc_SeqView(n) {
    return $ct_sc_SeqView$Drop__sc_SeqOps__I__(new $c_sc_SeqView$Drop(), this, n)
  };
  stringPrefix__T() {
    return "SeqView"
  };
  indexWhere__F1__I__I(p, from) {
    const this$1 = this.iterator__sc_Iterator();
    return $f_sc_Iterator__indexWhere__F1__I__I(this$1, p, from)
  };
  lengthCompare__I__I(len) {
    return $f_sc_IterableOps__sizeCompare__I__I(this, len)
  };
  isEmpty__Z() {
    return $f_sc_SeqOps__isEmpty__Z(this)
  };
  drop__I__O(n) {
    return this.drop__I__sc_SeqView(n)
  };
}
function $is_sc_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_IndexedSeq)))
}
function $isArrayOf_sc_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_IndexedSeq)))
}
function $is_sc_LinearSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_LinearSeq)))
}
function $isArrayOf_sc_LinearSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_LinearSeq)))
}
function $is_sci_Set(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_Set)))
}
function $isArrayOf_sci_Set(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Set)))
}
const $ct_sc_SeqView$Drop__sc_SeqOps__I__ = (function($thiz, underlying, n) {
  $thiz.sc_SeqView$Drop__f_underlying = underlying;
  $ct_sc_View$Drop__sc_IterableOps__I__($thiz, underlying, n);
  return $thiz
});
class $c_sc_SeqView$Drop extends $c_sc_View$Drop {
  constructor() {
    super();
    this.sc_SeqView$Drop__f_underlying = null
  };
  drop__I__sc_SeqView(n) {
    return $ct_sc_SeqView$Drop__sc_SeqOps__I__(new $c_sc_SeqView$Drop(), this, n)
  };
  stringPrefix__T() {
    return "SeqView"
  };
  indexWhere__F1__I__I(p, from) {
    const this$1 = this.iterator__sc_Iterator();
    return $f_sc_Iterator__indexWhere__F1__I__I(this$1, p, from)
  };
  lengthCompare__I__I(len) {
    return $f_sc_IterableOps__sizeCompare__I__I(this, len)
  };
  isEmpty__Z() {
    return $f_sc_SeqOps__isEmpty__Z(this)
  };
  length__I() {
    const this$1 = this.sc_SeqView$Drop__f_underlying;
    const x = ((this$1.length__I() - this.sc_View$Drop__f_normN) | 0);
    return ((x > 0) ? x : 0)
  };
  apply__I__O(i) {
    return this.sc_SeqView$Drop__f_underlying.apply__I__O(((i + this.sc_View$Drop__f_normN) | 0))
  };
  drop__I__O(n) {
    return this.drop__I__sc_SeqView(n)
  };
}
const $d_sc_SeqView$Drop = new $TypeData().initClass({
  sc_SeqView$Drop: 0
}, false, "scala.collection.SeqView$Drop", {
  sc_SeqView$Drop: 1,
  sc_View$Drop: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1,
  sc_SeqView: 1,
  sc_SeqOps: 1
});
$c_sc_SeqView$Drop.prototype.$classData = $d_sc_SeqView$Drop;
const $ct_sc_SeqView$Id__sc_SeqOps__ = (function($thiz, underlying) {
  $thiz.sc_SeqView$Id__f_underlying = underlying;
  return $thiz
});
class $c_sc_SeqView$Id extends $c_sc_AbstractSeqView {
  constructor() {
    super();
    this.sc_SeqView$Id__f_underlying = null
  };
  apply__I__O(idx) {
    return this.sc_SeqView$Id__f_underlying.apply__I__O(idx)
  };
  length__I() {
    return this.sc_SeqView$Id__f_underlying.length__I()
  };
  iterator__sc_Iterator() {
    return this.sc_SeqView$Id__f_underlying.iterator__sc_Iterator()
  };
  knownSize__I() {
    return this.sc_SeqView$Id__f_underlying.knownSize__I()
  };
  isEmpty__Z() {
    return this.sc_SeqView$Id__f_underlying.isEmpty__Z()
  };
}
const $d_sc_SeqView$Id = new $TypeData().initClass({
  sc_SeqView$Id: 0
}, false, "scala.collection.SeqView$Id", {
  sc_SeqView$Id: 1,
  sc_AbstractSeqView: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1,
  sc_SeqView: 1,
  sc_SeqOps: 1
});
$c_sc_SeqView$Id.prototype.$classData = $d_sc_SeqView$Id;
function $is_sci_Seq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_Seq)))
}
function $isArrayOf_sci_Seq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Seq)))
}
class $c_sc_AbstractIndexedSeqView extends $c_sc_AbstractSeqView {
  iterator__sc_Iterator() {
    return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this)
  };
  stringPrefix__T() {
    return "IndexedSeqView"
  };
  lengthCompare__I__I(len) {
    const x = this.length__I();
    return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
  };
  knownSize__I() {
    return this.length__I()
  };
  drop__I__sc_SeqView(n) {
    return new $c_sc_IndexedSeqView$Drop(this, n)
  };
  drop__I__O(n) {
    return new $c_sc_IndexedSeqView$Drop(this, n)
  };
}
class $c_sci_AbstractSet extends $c_sc_AbstractSet {
  iterableFactory__sc_IterableFactory() {
    return $m_sci_Set$()
  };
}
class $c_sc_IndexedSeqView$Drop extends $c_sc_SeqView$Drop {
  constructor(underlying, n) {
    super();
    $ct_sc_SeqView$Drop__sc_SeqOps__I__(this, underlying, n)
  };
  iterator__sc_Iterator() {
    return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this)
  };
  stringPrefix__T() {
    return "IndexedSeqView"
  };
  lengthCompare__I__I(len) {
    const x = this.length__I();
    return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
  };
  knownSize__I() {
    return this.length__I()
  };
  drop__I__sc_SeqView(n) {
    return new $c_sc_IndexedSeqView$Drop(this, n)
  };
  drop__I__O(n) {
    return new $c_sc_IndexedSeqView$Drop(this, n)
  };
}
const $d_sc_IndexedSeqView$Drop = new $TypeData().initClass({
  sc_IndexedSeqView$Drop: 0
}, false, "scala.collection.IndexedSeqView$Drop", {
  sc_IndexedSeqView$Drop: 1,
  sc_SeqView$Drop: 1,
  sc_View$Drop: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1,
  sc_SeqView: 1,
  sc_SeqOps: 1,
  sc_IndexedSeqView: 1,
  sc_IndexedSeqOps: 1
});
$c_sc_IndexedSeqView$Drop.prototype.$classData = $d_sc_IndexedSeqView$Drop;
class $c_sc_IndexedSeqView$Id extends $c_sc_SeqView$Id {
  constructor(underlying) {
    super();
    $ct_sc_SeqView$Id__sc_SeqOps__(this, underlying)
  };
  iterator__sc_Iterator() {
    return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this)
  };
  stringPrefix__T() {
    return "IndexedSeqView"
  };
  lengthCompare__I__I(len) {
    const x = this.length__I();
    return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
  };
  knownSize__I() {
    return this.length__I()
  };
  drop__I__sc_SeqView(n) {
    return new $c_sc_IndexedSeqView$Drop(this, n)
  };
  drop__I__O(n) {
    return new $c_sc_IndexedSeqView$Drop(this, n)
  };
}
const $d_sc_IndexedSeqView$Id = new $TypeData().initClass({
  sc_IndexedSeqView$Id: 0
}, false, "scala.collection.IndexedSeqView$Id", {
  sc_IndexedSeqView$Id: 1,
  sc_SeqView$Id: 1,
  sc_AbstractSeqView: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1,
  sc_SeqView: 1,
  sc_SeqOps: 1,
  sc_IndexedSeqView: 1,
  sc_IndexedSeqOps: 1
});
$c_sc_IndexedSeqView$Id.prototype.$classData = $d_sc_IndexedSeqView$Id;
class $c_sci_AbstractSeq extends $c_sc_AbstractSeq {
}
class $c_scm_ArrayBufferView extends $c_sc_AbstractIndexedSeqView {
  constructor(array, length) {
    super();
    this.scm_ArrayBufferView__f_array = null;
    this.scm_ArrayBufferView__f_length = 0;
    this.scm_ArrayBufferView__f_array = array;
    this.scm_ArrayBufferView__f_length = length
  };
  length__I() {
    return this.scm_ArrayBufferView__f_length
  };
  apply__I__O(n) {
    if ((n < this.scm_ArrayBufferView__f_length)) {
      return this.scm_ArrayBufferView__f_array.u[n]
    } else {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((n + " is out of bounds (min 0, max ") + (((-1) + this.scm_ArrayBufferView__f_length) | 0)) + ")"))
    }
  };
  className__T() {
    return "ArrayBufferView"
  };
}
const $d_scm_ArrayBufferView = new $TypeData().initClass({
  scm_ArrayBufferView: 0
}, false, "scala.collection.mutable.ArrayBufferView", {
  scm_ArrayBufferView: 1,
  sc_AbstractIndexedSeqView: 1,
  sc_AbstractSeqView: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1,
  sc_SeqView: 1,
  sc_SeqOps: 1,
  sc_IndexedSeqView: 1,
  sc_IndexedSeqOps: 1
});
$c_scm_ArrayBufferView.prototype.$classData = $d_scm_ArrayBufferView;
const $f_sci_IndexedSeq__canEqual__O__Z = (function($thiz, that) {
  if ((!$is_sci_IndexedSeq(that))) {
    return true
  } else {
    const x2 = that;
    return ($thiz.length__I() === x2.length__I())
  }
});
const $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z = (function($thiz, o) {
  if ($is_sci_IndexedSeq(o)) {
    const x2 = o;
    if (($thiz === x2)) {
      return true
    } else {
      const length = $thiz.length__I();
      let equal = (length === x2.length__I());
      if (equal) {
        let index = 0;
        const a = $thiz.applyPreferredMaxLength__I();
        const b = x2.applyPreferredMaxLength__I();
        const preferredLength = ((a < b) ? a : b);
        const hi = (length >> 31);
        const hi$1 = (preferredLength >> 31);
        const lo = (preferredLength << 1);
        const hi$2 = (((preferredLength >>> 31) | 0) | (hi$1 << 1));
        let maxApplyCompare;
        if (((hi === hi$2) ? (((-2147483648) ^ length) > ((-2147483648) ^ lo)) : (hi > hi$2))) {
          maxApplyCompare = preferredLength
        } else {
          maxApplyCompare = length
        };
        while (((index < maxApplyCompare) && equal)) {
          equal = $m_sr_BoxesRunTime$().equals__O__O__Z($thiz.apply__I__O(index), x2.apply__I__O(index));
          index = ((1 + index) | 0)
        };
        if (((index < length) && equal)) {
          const thisIt = $thiz.iterator__sc_Iterator().drop__I__sc_Iterator(index);
          const thatIt = x2.iterator__sc_Iterator().drop__I__sc_Iterator(index);
          while ((equal && thisIt.hasNext__Z())) {
            equal = $m_sr_BoxesRunTime$().equals__O__O__Z(thisIt.next__O(), thatIt.next__O())
          }
        }
      };
      return equal
    }
  } else {
    return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, o)
  }
});
function $is_sci_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_IndexedSeq)))
}
function $isArrayOf_sci_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_IndexedSeq)))
}
class $c_sci_Set$EmptySet$ extends $c_sci_AbstractSet {
  size__I() {
    return 0
  };
  isEmpty__Z() {
    return true
  };
  knownSize__I() {
    return 0
  };
  subsetOf__sc_Set__Z(that) {
    return true
  };
  contains__O__Z(elem) {
    return false
  };
  iterator__sc_Iterator() {
    return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty
  };
  incl__O__sci_SetOps(elem) {
    return new $c_sci_Set$Set1(elem)
  };
}
const $d_sci_Set$EmptySet$ = new $TypeData().initClass({
  sci_Set$EmptySet$: 0
}, false, "scala.collection.immutable.Set$EmptySet$", {
  sci_Set$EmptySet$: 1,
  sci_AbstractSet: 1,
  sc_AbstractSet: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Set: 1,
  sc_SetOps: 1,
  F1: 1,
  s_Equals: 1,
  sci_Set: 1,
  sci_Iterable: 1,
  sci_SetOps: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Set$EmptySet$.prototype.$classData = $d_sci_Set$EmptySet$;
let $n_sci_Set$EmptySet$ = (void 0);
function $m_sci_Set$EmptySet$() {
  if ((!$n_sci_Set$EmptySet$)) {
    $n_sci_Set$EmptySet$ = new $c_sci_Set$EmptySet$()
  };
  return $n_sci_Set$EmptySet$
}
class $c_sc_StringView extends $c_sc_AbstractIndexedSeqView {
  constructor(s) {
    super();
    this.sc_StringView__f_s = null;
    this.sc_StringView__f_s = s
  };
  length__I() {
    const this$1 = this.sc_StringView__f_s;
    return (this$1.length | 0)
  };
  toString__T() {
    return (("StringView(" + this.sc_StringView__f_s) + ")")
  };
  productPrefix__T() {
    return "StringView"
  };
  productArity__I() {
    return 1
  };
  productElement__I__O(x$1) {
    return ((x$1 === 0) ? this.sc_StringView__f_s : $m_sr_Statics$().ioobe__I__O(x$1))
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    const this$2 = $m_s_util_hashing_MurmurHash3$();
    return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_sc_StringView)) {
      const StringView$1 = x$1;
      return (this.sc_StringView__f_s === StringView$1.sc_StringView__f_s)
    } else {
      return false
    }
  };
  apply__I__O(i) {
    const this$1 = this.sc_StringView__f_s;
    return $bC((65535 & (this$1.charCodeAt(i) | 0)))
  };
}
function $isArrayOf_sc_StringView(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_StringView)))
}
const $d_sc_StringView = new $TypeData().initClass({
  sc_StringView: 0
}, false, "scala.collection.StringView", {
  sc_StringView: 1,
  sc_AbstractIndexedSeqView: 1,
  sc_AbstractSeqView: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1,
  sc_SeqView: 1,
  sc_SeqOps: 1,
  sc_IndexedSeqView: 1,
  sc_IndexedSeqOps: 1,
  s_Product: 1,
  s_Equals: 1
});
$c_sc_StringView.prototype.$classData = $d_sc_StringView;
class $c_sci_Set$Set1 extends $c_sci_AbstractSet {
  constructor(elem1) {
    super();
    this.sci_Set$Set1__f_elem1 = null;
    this.sci_Set$Set1__f_elem1 = elem1
  };
  size__I() {
    return 1
  };
  isEmpty__Z() {
    return false
  };
  knownSize__I() {
    return 1
  };
  contains__O__Z(elem) {
    return $m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set1__f_elem1)
  };
  incl__O__sci_Set(elem) {
    return (this.contains__O__Z(elem) ? this : new $c_sci_Set$Set2(this.sci_Set$Set1__f_elem1, elem))
  };
  iterator__sc_Iterator() {
    $m_sc_Iterator$();
    const a = this.sci_Set$Set1__f_elem1;
    return new $c_sc_Iterator$$anon$20(a)
  };
  forall__F1__Z(p) {
    return (!(!p.apply__O__O(this.sci_Set$Set1__f_elem1)))
  };
  head__O() {
    return this.sci_Set$Set1__f_elem1
  };
  tail__O() {
    return $m_sci_Set$EmptySet$()
  };
  incl__O__sci_SetOps(elem) {
    return this.incl__O__sci_Set(elem)
  };
}
const $d_sci_Set$Set1 = new $TypeData().initClass({
  sci_Set$Set1: 0
}, false, "scala.collection.immutable.Set$Set1", {
  sci_Set$Set1: 1,
  sci_AbstractSet: 1,
  sc_AbstractSet: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Set: 1,
  sc_SetOps: 1,
  F1: 1,
  s_Equals: 1,
  sci_Set: 1,
  sci_Iterable: 1,
  sci_SetOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Set$Set1.prototype.$classData = $d_sci_Set$Set1;
class $c_sci_Set$Set2 extends $c_sci_AbstractSet {
  constructor(elem1, elem2) {
    super();
    this.sci_Set$Set2__f_elem1 = null;
    this.sci_Set$Set2__f_elem2 = null;
    this.sci_Set$Set2__f_elem1 = elem1;
    this.sci_Set$Set2__f_elem2 = elem2
  };
  size__I() {
    return 2
  };
  isEmpty__Z() {
    return false
  };
  knownSize__I() {
    return 2
  };
  contains__O__Z(elem) {
    return ($m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set2__f_elem1) || $m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set2__f_elem2))
  };
  incl__O__sci_Set(elem) {
    return (this.contains__O__Z(elem) ? this : new $c_sci_Set$Set3(this.sci_Set$Set2__f_elem1, this.sci_Set$Set2__f_elem2, elem))
  };
  iterator__sc_Iterator() {
    const rassoc$2 = this.sci_Set$Set2__f_elem1;
    const rassoc$1 = this.sci_Set$Set2__f_elem2;
    const this$1 = $m_sci_Nil$();
    const this$2 = new $c_sci_$colon$colon(rassoc$1, this$1);
    const this$3 = new $c_sci_$colon$colon(rassoc$2, this$2);
    return new $c_sc_StrictOptimizedLinearSeqOps$$anon$1(this$3)
  };
  forall__F1__Z(p) {
    return ((!(!p.apply__O__O(this.sci_Set$Set2__f_elem1))) && (!(!p.apply__O__O(this.sci_Set$Set2__f_elem2))))
  };
  head__O() {
    return this.sci_Set$Set2__f_elem1
  };
  tail__sci_Set() {
    return new $c_sci_Set$Set1(this.sci_Set$Set2__f_elem2)
  };
  tail__O() {
    return this.tail__sci_Set()
  };
  incl__O__sci_SetOps(elem) {
    return this.incl__O__sci_Set(elem)
  };
}
const $d_sci_Set$Set2 = new $TypeData().initClass({
  sci_Set$Set2: 0
}, false, "scala.collection.immutable.Set$Set2", {
  sci_Set$Set2: 1,
  sci_AbstractSet: 1,
  sc_AbstractSet: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Set: 1,
  sc_SetOps: 1,
  F1: 1,
  s_Equals: 1,
  sci_Set: 1,
  sci_Iterable: 1,
  sci_SetOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Set$Set2.prototype.$classData = $d_sci_Set$Set2;
class $c_sci_Set$Set3 extends $c_sci_AbstractSet {
  constructor(elem1, elem2, elem3) {
    super();
    this.sci_Set$Set3__f_elem1 = null;
    this.sci_Set$Set3__f_elem2 = null;
    this.sci_Set$Set3__f_elem3 = null;
    this.sci_Set$Set3__f_elem1 = elem1;
    this.sci_Set$Set3__f_elem2 = elem2;
    this.sci_Set$Set3__f_elem3 = elem3
  };
  size__I() {
    return 3
  };
  isEmpty__Z() {
    return false
  };
  knownSize__I() {
    return 3
  };
  contains__O__Z(elem) {
    return (($m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set3__f_elem1) || $m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set3__f_elem2)) || $m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set3__f_elem3))
  };
  incl__O__sci_Set(elem) {
    return (this.contains__O__Z(elem) ? this : new $c_sci_Set$Set4(this.sci_Set$Set3__f_elem1, this.sci_Set$Set3__f_elem2, this.sci_Set$Set3__f_elem3, elem))
  };
  iterator__sc_Iterator() {
    const rassoc$5 = this.sci_Set$Set3__f_elem1;
    const rassoc$4 = this.sci_Set$Set3__f_elem2;
    const rassoc$3 = this.sci_Set$Set3__f_elem3;
    const this$1 = $m_sci_Nil$();
    const this$2 = new $c_sci_$colon$colon(rassoc$3, this$1);
    const this$3 = new $c_sci_$colon$colon(rassoc$4, this$2);
    const this$4 = new $c_sci_$colon$colon(rassoc$5, this$3);
    return new $c_sc_StrictOptimizedLinearSeqOps$$anon$1(this$4)
  };
  forall__F1__Z(p) {
    return (((!(!p.apply__O__O(this.sci_Set$Set3__f_elem1))) && (!(!p.apply__O__O(this.sci_Set$Set3__f_elem2)))) && (!(!p.apply__O__O(this.sci_Set$Set3__f_elem3))))
  };
  head__O() {
    return this.sci_Set$Set3__f_elem1
  };
  tail__sci_Set() {
    return new $c_sci_Set$Set2(this.sci_Set$Set3__f_elem2, this.sci_Set$Set3__f_elem3)
  };
  tail__O() {
    return this.tail__sci_Set()
  };
  incl__O__sci_SetOps(elem) {
    return this.incl__O__sci_Set(elem)
  };
}
const $d_sci_Set$Set3 = new $TypeData().initClass({
  sci_Set$Set3: 0
}, false, "scala.collection.immutable.Set$Set3", {
  sci_Set$Set3: 1,
  sci_AbstractSet: 1,
  sc_AbstractSet: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Set: 1,
  sc_SetOps: 1,
  F1: 1,
  s_Equals: 1,
  sci_Set: 1,
  sci_Iterable: 1,
  sci_SetOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Set$Set3.prototype.$classData = $d_sci_Set$Set3;
class $c_sci_Set$Set4 extends $c_sci_AbstractSet {
  constructor(elem1, elem2, elem3, elem4) {
    super();
    this.sci_Set$Set4__f_elem1 = null;
    this.sci_Set$Set4__f_elem2 = null;
    this.sci_Set$Set4__f_elem3 = null;
    this.sci_Set$Set4__f_elem4 = null;
    this.sci_Set$Set4__f_elem1 = elem1;
    this.sci_Set$Set4__f_elem2 = elem2;
    this.sci_Set$Set4__f_elem3 = elem3;
    this.sci_Set$Set4__f_elem4 = elem4
  };
  size__I() {
    return 4
  };
  isEmpty__Z() {
    return false
  };
  knownSize__I() {
    return 4
  };
  contains__O__Z(elem) {
    return ((($m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set4__f_elem1) || $m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set4__f_elem2)) || $m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set4__f_elem3)) || $m_sr_BoxesRunTime$().equals__O__O__Z(elem, this.sci_Set$Set4__f_elem4))
  };
  incl__O__sci_Set(elem) {
    if (this.contains__O__Z(elem)) {
      return this
    } else {
      const this$1 = $m_sci_HashSet$();
      const this$2 = this$1.sci_HashSet$__f_EmptySet;
      const elem$1 = this.sci_Set$Set4__f_elem1;
      const this$3 = this$2.incl__O__sci_HashSet(elem$1);
      const elem$2 = this.sci_Set$Set4__f_elem2;
      const this$4 = this$3.incl__O__sci_HashSet(elem$2);
      const elem$3 = this.sci_Set$Set4__f_elem3;
      const this$5 = this$4.incl__O__sci_HashSet(elem$3);
      const elem$4 = this.sci_Set$Set4__f_elem4;
      const this$6 = this$5.incl__O__sci_HashSet(elem$4);
      return this$6.incl__O__sci_HashSet(elem)
    }
  };
  iterator__sc_Iterator() {
    const rassoc$9 = this.sci_Set$Set4__f_elem1;
    const rassoc$8 = this.sci_Set$Set4__f_elem2;
    const rassoc$7 = this.sci_Set$Set4__f_elem3;
    const rassoc$6 = this.sci_Set$Set4__f_elem4;
    const this$1 = $m_sci_Nil$();
    const this$2 = new $c_sci_$colon$colon(rassoc$6, this$1);
    const this$3 = new $c_sci_$colon$colon(rassoc$7, this$2);
    const this$4 = new $c_sci_$colon$colon(rassoc$8, this$3);
    const this$5 = new $c_sci_$colon$colon(rassoc$9, this$4);
    return new $c_sc_StrictOptimizedLinearSeqOps$$anon$1(this$5)
  };
  forall__F1__Z(p) {
    return ((((!(!p.apply__O__O(this.sci_Set$Set4__f_elem1))) && (!(!p.apply__O__O(this.sci_Set$Set4__f_elem2)))) && (!(!p.apply__O__O(this.sci_Set$Set4__f_elem3)))) && (!(!p.apply__O__O(this.sci_Set$Set4__f_elem4))))
  };
  head__O() {
    return this.sci_Set$Set4__f_elem1
  };
  tail__sci_Set() {
    return new $c_sci_Set$Set3(this.sci_Set$Set4__f_elem2, this.sci_Set$Set4__f_elem3, this.sci_Set$Set4__f_elem4)
  };
  buildTo__scm_Builder__scm_Builder(builder) {
    return builder.addOne__O__scm_Growable(this.sci_Set$Set4__f_elem1).addOne__O__scm_Growable(this.sci_Set$Set4__f_elem2).addOne__O__scm_Growable(this.sci_Set$Set4__f_elem3).addOne__O__scm_Growable(this.sci_Set$Set4__f_elem4)
  };
  tail__O() {
    return this.tail__sci_Set()
  };
  incl__O__sci_SetOps(elem) {
    return this.incl__O__sci_Set(elem)
  };
}
function $isArrayOf_sci_Set$Set4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Set$Set4)))
}
const $d_sci_Set$Set4 = new $TypeData().initClass({
  sci_Set$Set4: 0
}, false, "scala.collection.immutable.Set$Set4", {
  sci_Set$Set4: 1,
  sci_AbstractSet: 1,
  sc_AbstractSet: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Set: 1,
  sc_SetOps: 1,
  F1: 1,
  s_Equals: 1,
  sci_Set: 1,
  sci_Iterable: 1,
  sci_SetOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Set$Set4.prototype.$classData = $d_sci_Set$Set4;
function $is_sci_SortedSet(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_SortedSet)))
}
function $isArrayOf_sci_SortedSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_SortedSet)))
}
class $c_scm_AbstractSeq extends $c_sc_AbstractSeq {
}
const $p_sci_HashSet__newHashSetOrThis__sci_BitmapIndexedSetNode__sci_HashSet = (function($thiz, newRootNode) {
  return (($thiz.sci_HashSet__f_rootNode === newRootNode) ? $thiz : new $c_sci_HashSet(newRootNode))
});
class $c_sci_HashSet extends $c_sci_AbstractSet {
  constructor(rootNode) {
    super();
    this.sci_HashSet__f_rootNode = null;
    this.sci_HashSet__f_rootNode = rootNode
  };
  iterableFactory__sc_IterableFactory() {
    return $m_sci_HashSet$()
  };
  knownSize__I() {
    return this.sci_HashSet__f_rootNode.sci_BitmapIndexedSetNode__f_size
  };
  size__I() {
    return this.sci_HashSet__f_rootNode.sci_BitmapIndexedSetNode__f_size
  };
  isEmpty__Z() {
    return (this.sci_HashSet__f_rootNode.sci_BitmapIndexedSetNode__f_size === 0)
  };
  iterator__sc_Iterator() {
    return (this.isEmpty__Z() ? $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty : new $c_sci_SetIterator(this.sci_HashSet__f_rootNode))
  };
  contains__O__Z(element) {
    const elementUnimprovedHash = $m_sr_Statics$().anyHash__O__I(element);
    const elementHash = $m_sc_Hashing$().improve__I__I(elementUnimprovedHash);
    return this.sci_HashSet__f_rootNode.contains__O__I__I__I__Z(element, elementUnimprovedHash, elementHash, 0)
  };
  incl__O__sci_HashSet(element) {
    const elementUnimprovedHash = $m_sr_Statics$().anyHash__O__I(element);
    const elementHash = $m_sc_Hashing$().improve__I__I(elementUnimprovedHash);
    const newRootNode = this.sci_HashSet__f_rootNode.updated__O__I__I__I__sci_BitmapIndexedSetNode(element, elementUnimprovedHash, elementHash, 0);
    return $p_sci_HashSet__newHashSetOrThis__sci_BitmapIndexedSetNode__sci_HashSet(this, newRootNode)
  };
  excl__O__sci_HashSet(element) {
    const elementUnimprovedHash = $m_sr_Statics$().anyHash__O__I(element);
    const elementHash = $m_sc_Hashing$().improve__I__I(elementUnimprovedHash);
    const newRootNode = this.sci_HashSet__f_rootNode.removed__O__I__I__I__sci_BitmapIndexedSetNode(element, elementUnimprovedHash, elementHash, 0);
    return $p_sci_HashSet__newHashSetOrThis__sci_BitmapIndexedSetNode__sci_HashSet(this, newRootNode)
  };
  head__O() {
    return this.iterator__sc_Iterator().next__O()
  };
  equals__O__Z(that) {
    if ((that instanceof $c_sci_HashSet)) {
      const x2 = that;
      if ((this === x2)) {
        return true
      } else {
        const x = this.sci_HashSet__f_rootNode;
        const x$2 = x2.sci_HashSet__f_rootNode;
        return ((x === null) ? (x$2 === null) : x.equals__O__Z(x$2))
      }
    } else {
      return $f_sc_Set__equals__O__Z(this, that)
    }
  };
  className__T() {
    return "HashSet"
  };
  hashCode__I() {
    const it = new $c_sci_SetHashIterator(this.sci_HashSet__f_rootNode);
    const hash = $m_s_util_hashing_MurmurHash3$().unorderedHash__sc_IterableOnce__I__I(it, $m_s_util_hashing_MurmurHash3$().s_util_hashing_MurmurHash3$__f_setSeed);
    return hash
  };
  drop__I__O(n) {
    return $f_sc_IterableOps__drop__I__O(this, n)
  };
  tail__O() {
    const elem = this.iterator__sc_Iterator().next__O();
    return this.excl__O__sci_HashSet(elem)
  };
  incl__O__sci_SetOps(elem) {
    return this.incl__O__sci_HashSet(elem)
  };
}
function $isArrayOf_sci_HashSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_HashSet)))
}
const $d_sci_HashSet = new $TypeData().initClass({
  sci_HashSet: 0
}, false, "scala.collection.immutable.HashSet", {
  sci_HashSet: 1,
  sci_AbstractSet: 1,
  sc_AbstractSet: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Set: 1,
  sc_SetOps: 1,
  F1: 1,
  s_Equals: 1,
  sci_Set: 1,
  sci_Iterable: 1,
  sci_SetOps: 1,
  sci_StrictOptimizedSetOps: 1,
  sc_StrictOptimizedSetOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_HashSet.prototype.$classData = $d_sci_HashSet;
const $p_sci_LazyList__scala$collection$immutable$LazyList$$state$lzycompute__sci_LazyList$State = (function($thiz) {
  if ((!$thiz.sci_LazyList__f_bitmap$0)) {
    const res = $thiz.sci_LazyList__f_lazyState.apply__O();
    $thiz.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated = true;
    $thiz.sci_LazyList__f_lazyState = null;
    $thiz.sci_LazyList__f_scala$collection$immutable$LazyList$$state = res;
    $thiz.sci_LazyList__f_bitmap$0 = true
  };
  return $thiz.sci_LazyList__f_scala$collection$immutable$LazyList$$state
});
const $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder = (function($thiz, b, start, sep, end) {
  b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + start);
  if ((!$thiz.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated)) {
    b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (b.jl_StringBuilder__f_java$lang$StringBuilder$$content + "<not computed>")
  } else if ((!$thiz.isEmpty__Z())) {
    const obj = $thiz.scala$collection$immutable$LazyList$$state__sci_LazyList$State().head__O();
    b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj);
    let elem = null;
    elem = $thiz;
    const elem$1 = $thiz.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
    let elem$2 = null;
    elem$2 = elem$1;
    if (((elem !== elem$2) && ((!elem$2.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated) || (elem.scala$collection$immutable$LazyList$$state__sci_LazyList$State() !== elem$2.scala$collection$immutable$LazyList$$state__sci_LazyList$State())))) {
      elem = elem$2;
      if ((elem$2.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && (!elem$2.isEmpty__Z()))) {
        const this$3 = elem$2;
        elem$2 = this$3.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
        while ((((elem !== elem$2) && (elem$2.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && (!elem$2.isEmpty__Z()))) && (elem.scala$collection$immutable$LazyList$$state__sci_LazyList$State() !== elem$2.scala$collection$immutable$LazyList$$state__sci_LazyList$State()))) {
          b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
          const this$4 = elem;
          const obj$1 = this$4.scala$collection$immutable$LazyList$$state__sci_LazyList$State().head__O();
          b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$1);
          const this$5 = elem;
          elem = this$5.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
          const this$6 = elem$2;
          elem$2 = this$6.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
          if ((elem$2.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && (!elem$2.isEmpty__Z()))) {
            const this$7 = elem$2;
            elem$2 = this$7.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList()
          }
        }
      }
    };
    if ((!(elem$2.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && (!elem$2.isEmpty__Z())))) {
      while ((elem !== elem$2)) {
        b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
        const this$8 = elem;
        const obj$2 = this$8.scala$collection$immutable$LazyList$$state__sci_LazyList$State().head__O();
        b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$2);
        const this$9 = elem;
        elem = this$9.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList()
      };
      if ((!elem.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated)) {
        b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
        b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (b.jl_StringBuilder__f_java$lang$StringBuilder$$content + "<not computed>")
      }
    } else {
      let runner = $thiz;
      let k = 0;
      while (true) {
        const a = runner;
        const b$1 = elem$2;
        if ((!((a === b$1) || (a.scala$collection$immutable$LazyList$$state__sci_LazyList$State() === b$1.scala$collection$immutable$LazyList$$state__sci_LazyList$State())))) {
          const this$10 = runner;
          runner = this$10.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
          const this$11 = elem$2;
          elem$2 = this$11.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
          k = ((1 + k) | 0)
        } else {
          break
        }
      };
      const a$1 = elem;
      const b$2 = elem$2;
      if ((((a$1 === b$2) || (a$1.scala$collection$immutable$LazyList$$state__sci_LazyList$State() === b$2.scala$collection$immutable$LazyList$$state__sci_LazyList$State())) && (k > 0))) {
        b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
        const this$12 = elem;
        const obj$3 = this$12.scala$collection$immutable$LazyList$$state__sci_LazyList$State().head__O();
        b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$3);
        const this$13 = elem;
        elem = this$13.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList()
      };
      while (true) {
        const a$2 = elem;
        const b$3 = elem$2;
        if ((!((a$2 === b$3) || (a$2.scala$collection$immutable$LazyList$$state__sci_LazyList$State() === b$3.scala$collection$immutable$LazyList$$state__sci_LazyList$State())))) {
          b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
          const this$14 = elem;
          const obj$4 = this$14.scala$collection$immutable$LazyList$$state__sci_LazyList$State().head__O();
          b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$4);
          const this$15 = elem;
          elem = this$15.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList()
        } else {
          break
        }
      };
      b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
      b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (b.jl_StringBuilder__f_java$lang$StringBuilder$$content + "<cycle>")
    }
  };
  b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + end);
  return b
});
class $c_sci_LazyList extends $c_sci_AbstractSeq {
  constructor(lazyState) {
    super();
    this.sci_LazyList__f_scala$collection$immutable$LazyList$$state = null;
    this.sci_LazyList__f_lazyState = null;
    this.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated = false;
    this.sci_LazyList__f_bitmap$0 = false;
    this.sci_LazyList__f_lazyState = lazyState;
    this.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated = false
  };
  stringPrefix__T() {
    return "LinearSeq"
  };
  length__I() {
    return $f_sc_LinearSeqOps__length__I(this)
  };
  lengthCompare__I__I(len) {
    return $f_sc_LinearSeqOps__lengthCompare__I__I(this, len)
  };
  apply__I__O(n) {
    return $f_sc_LinearSeqOps__apply__I__O(this, n)
  };
  exists__F1__Z(p) {
    return $f_sc_LinearSeqOps__exists__F1__Z(this, p)
  };
  sameElements__sc_IterableOnce__Z(that) {
    return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that)
  };
  indexWhere__F1__I__I(p, from) {
    return $f_sc_LinearSeqOps__indexWhere__F1__I__I(this, p, from)
  };
  scala$collection$immutable$LazyList$$state__sci_LazyList$State() {
    return ((!this.sci_LazyList__f_bitmap$0) ? $p_sci_LazyList__scala$collection$immutable$LazyList$$state$lzycompute__sci_LazyList$State(this) : this.sci_LazyList__f_scala$collection$immutable$LazyList$$state)
  };
  isEmpty__Z() {
    return (this.scala$collection$immutable$LazyList$$state__sci_LazyList$State() === $m_sci_LazyList$State$Empty$())
  };
  knownSize__I() {
    return ((this.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && this.isEmpty__Z()) ? 0 : (-1))
  };
  head__O() {
    return this.scala$collection$immutable$LazyList$$state__sci_LazyList$State().head__O()
  };
  force__sci_LazyList() {
    let these = this;
    let those = this;
    if ((!these.isEmpty__Z())) {
      const this$1 = these;
      these = this$1.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList()
    };
    while ((those !== these)) {
      if (these.isEmpty__Z()) {
        return this
      };
      const this$2 = these;
      these = this$2.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
      if (these.isEmpty__Z()) {
        return this
      };
      const this$3 = these;
      these = this$3.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
      if ((these === those)) {
        return this
      };
      const this$4 = those;
      those = this$4.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList()
    };
    return this
  };
  iterator__sc_Iterator() {
    return ((this.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && this.isEmpty__Z()) ? $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty : new $c_sci_LazyList$LazyIterator(this))
  };
  className__T() {
    return "LazyList"
  };
  equals__O__Z(that) {
    return ((this === that) || $f_sc_Seq__equals__O__Z(this, that))
  };
  drop__I__sci_LazyList(n) {
    return ((n <= 0) ? this : ((this.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && this.isEmpty__Z()) ? $m_sci_LazyList$().sci_LazyList$__f__empty : $m_sci_LazyList$().scala$collection$immutable$LazyList$$dropImpl__sci_LazyList__I__sci_LazyList(this, n)))
  };
  addString__scm_StringBuilder__T__T__T__scm_StringBuilder(sb, start, sep, end) {
    this.force__sci_LazyList();
    $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder(this, sb.scm_StringBuilder__f_underlying, start, sep, end);
    return sb
  };
  toString__T() {
    return $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder(this, $ct_jl_StringBuilder__T__(new $c_jl_StringBuilder(), "LazyList"), "(", ", ", ")").jl_StringBuilder__f_java$lang$StringBuilder$$content
  };
  apply__O__O(v1) {
    const n = (v1 | 0);
    return $f_sc_LinearSeqOps__apply__I__O(this, n)
  };
  drop__I__O(n) {
    return this.drop__I__sci_LazyList(n)
  };
  tail__O() {
    return this.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList()
  };
  iterableFactory__sc_IterableFactory() {
    return $m_sci_LazyList$()
  };
}
function $isArrayOf_sci_LazyList(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_LazyList)))
}
const $d_sci_LazyList = new $TypeData().initClass({
  sci_LazyList: 0
}, false, "scala.collection.immutable.LazyList", {
  sci_LazyList: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_LinearSeq: 1,
  sc_LinearSeq: 1,
  sc_LinearSeqOps: 1,
  sci_LinearSeqOps: 1,
  Ljava_io_Serializable: 1
});
$c_sci_LazyList.prototype.$classData = $d_sci_LazyList;
const $p_sci_Stream__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder = (function($thiz, b, start, sep, end) {
  b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + start);
  if ((!$thiz.isEmpty__Z())) {
    const obj = $thiz.head__O();
    b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj);
    let elem = null;
    elem = $thiz;
    if ($thiz.tailDefined__Z()) {
      let scout = $thiz.tail__O();
      if ((elem !== scout)) {
        elem = scout;
        if (scout.tailDefined__Z()) {
          scout = scout.tail__O();
          while (((elem !== scout) && scout.tailDefined__Z())) {
            b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
            const obj$1 = elem.head__O();
            b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$1);
            elem = elem.tail__O();
            scout = scout.tail__O();
            if (scout.tailDefined__Z()) {
              scout = scout.tail__O()
            }
          }
        }
      };
      if ((!scout.tailDefined__Z())) {
        while ((elem !== scout)) {
          b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
          const obj$2 = elem.head__O();
          b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$2);
          elem = elem.tail__O()
        };
        const this$2 = elem;
        if ((!this$2.isEmpty__Z())) {
          b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
          const obj$3 = elem.head__O();
          b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$3)
        }
      } else {
        let runner = $thiz;
        let k = 0;
        while ((runner !== scout)) {
          runner = runner.tail__O();
          scout = scout.tail__O();
          k = ((1 + k) | 0)
        };
        if (((elem === scout) && (k > 0))) {
          b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
          const obj$4 = elem.head__O();
          b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$4);
          elem = elem.tail__O()
        };
        while ((elem !== scout)) {
          b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
          const obj$5 = elem.head__O();
          b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$5);
          elem = elem.tail__O()
        }
      }
    };
    const this$3 = elem;
    if ((!this$3.isEmpty__Z())) {
      if ((!elem.tailDefined__Z())) {
        b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
        b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (b.jl_StringBuilder__f_java$lang$StringBuilder$$content + "<not computed>")
      } else {
        b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
        b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (b.jl_StringBuilder__f_java$lang$StringBuilder$$content + "<cycle>")
      }
    }
  };
  b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + end);
  return b
});
class $c_sci_Stream extends $c_sci_AbstractSeq {
  stringPrefix__T() {
    return "LinearSeq"
  };
  iterator__sc_Iterator() {
    return $f_sc_LinearSeqOps__iterator__sc_Iterator(this)
  };
  length__I() {
    return $f_sc_LinearSeqOps__length__I(this)
  };
  lengthCompare__I__I(len) {
    return $f_sc_LinearSeqOps__lengthCompare__I__I(this, len)
  };
  apply__I__O(n) {
    return $f_sc_LinearSeqOps__apply__I__O(this, n)
  };
  exists__F1__Z(p) {
    return $f_sc_LinearSeqOps__exists__F1__Z(this, p)
  };
  sameElements__sc_IterableOnce__Z(that) {
    return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that)
  };
  indexWhere__F1__I__I(p, from) {
    return $f_sc_LinearSeqOps__indexWhere__F1__I__I(this, p, from)
  };
  className__T() {
    return "Stream"
  };
  equals__O__Z(that) {
    return ((this === that) || $f_sc_Seq__equals__O__Z(this, that))
  };
  addString__scm_StringBuilder__T__T__T__scm_StringBuilder(sb, start, sep, end) {
    this.force__sci_Stream();
    $p_sci_Stream__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder(this, sb.scm_StringBuilder__f_underlying, start, sep, end);
    return sb
  };
  toString__T() {
    return $p_sci_Stream__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder(this, $ct_jl_StringBuilder__T__(new $c_jl_StringBuilder(), "Stream"), "(", ", ", ")").jl_StringBuilder__f_java$lang$StringBuilder$$content
  };
  apply__O__O(v1) {
    const n = (v1 | 0);
    return $f_sc_LinearSeqOps__apply__I__O(this, n)
  };
  iterableFactory__sc_IterableFactory() {
    return $m_sci_Stream$()
  };
}
function $isArrayOf_sci_Stream(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Stream)))
}
class $c_sci_WrappedString extends $c_sci_AbstractSeq {
  constructor(self) {
    super();
    this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self = null;
    this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self = self
  };
  canEqual__O__Z(that) {
    return $f_sci_IndexedSeq__canEqual__O__Z(this, that)
  };
  stringPrefix__T() {
    return "IndexedSeq"
  };
  iterator__sc_Iterator() {
    const this$1 = new $c_sc_StringView(this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self);
    return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$1)
  };
  drop__I__O(n) {
    return $f_sc_IndexedSeqOps__drop__I__O(this, n)
  };
  lengthCompare__I__I(len) {
    const this$1 = this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self;
    const x = (this$1.length | 0);
    return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
  };
  knownSize__I() {
    const this$1 = this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self;
    return (this$1.length | 0)
  };
  length__I() {
    const this$1 = this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self;
    return (this$1.length | 0)
  };
  toString__T() {
    return this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self
  };
  sameElements__sc_IterableOnce__Z(o) {
    if ((o instanceof $c_sci_WrappedString)) {
      const x2 = o;
      return (this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self === x2.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self)
    } else {
      return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o)
    }
  };
  className__T() {
    return "WrappedString"
  };
  applyPreferredMaxLength__I() {
    return 2147483647
  };
  equals__O__Z(other) {
    if ((other instanceof $c_sci_WrappedString)) {
      const x2 = other;
      return (this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self === x2.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self)
    } else {
      return $f_sc_Seq__equals__O__Z(this, other)
    }
  };
  iterableFactory__sc_IterableFactory() {
    return $m_sci_IndexedSeq$()
  };
  fromSpecific__sc_IterableOnce__O(coll) {
    return $m_sci_WrappedString$().fromSpecific__sc_IterableOnce__sci_WrappedString(coll)
  };
  fromSpecific__sc_IterableOnce__sc_IterableOps(coll) {
    return $m_sci_WrappedString$().fromSpecific__sc_IterableOnce__sci_WrappedString(coll)
  };
  apply__O__O(v1) {
    const i = (v1 | 0);
    const this$1 = this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self;
    return $bC((65535 & (this$1.charCodeAt(i) | 0)))
  };
  apply__I__O(i) {
    const this$1 = this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self;
    return $bC((65535 & (this$1.charCodeAt(i) | 0)))
  };
}
function $isArrayOf_sci_WrappedString(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_WrappedString)))
}
const $d_sci_WrappedString = new $TypeData().initClass({
  sci_WrappedString: 0
}, false, "scala.collection.immutable.WrappedString", {
  sci_WrappedString: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  Ljava_io_Serializable: 1
});
$c_sci_WrappedString.prototype.$classData = $d_sci_WrappedString;
class $c_sjsr_WrappedVarArgs extends $c_O {
  constructor(array) {
    super();
    this.sjsr_WrappedVarArgs__f_scala$scalajs$runtime$WrappedVarArgs$$array = null;
    this.sjsr_WrappedVarArgs__f_scala$scalajs$runtime$WrappedVarArgs$$array = array
  };
  canEqual__O__Z(that) {
    return $f_sci_IndexedSeq__canEqual__O__Z(this, that)
  };
  sameElements__sc_IterableOnce__Z(o) {
    return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o)
  };
  applyPreferredMaxLength__I() {
    return $m_sci_IndexedSeqDefaults$().sci_IndexedSeqDefaults$__f_defaultApplyPreferredMaxLength
  };
  iterator__sc_Iterator() {
    const this$1 = new $c_sc_IndexedSeqView$Id(this);
    return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$1)
  };
  drop__I__O(n) {
    return $f_sc_IndexedSeqOps__drop__I__O(this, n)
  };
  lengthCompare__I__I(len) {
    const x = this.length__I();
    return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
  };
  knownSize__I() {
    return this.length__I()
  };
  equals__O__Z(o) {
    return $f_sc_Seq__equals__O__Z(this, o)
  };
  hashCode__I() {
    return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this)
  };
  toString__T() {
    return $f_sc_Iterable__toString__T(this)
  };
  indexWhere__F1__I__I(p, from) {
    const this$1 = new $c_sc_IndexedSeqView$Id(this);
    const this$2 = new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$1);
    return $f_sc_Iterator__indexWhere__F1__I__I(this$2, p, from)
  };
  isEmpty__Z() {
    return $f_sc_SeqOps__isEmpty__Z(this)
  };
  head__O() {
    const this$1 = new $c_sc_IndexedSeqView$Id(this);
    return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$1).next__O()
  };
  tail__O() {
    return $f_sc_IterableOps__tail__O(this)
  };
  exists__F1__Z(p) {
    return $f_sc_IterableOnceOps__exists__F1__Z(this, p)
  };
  addString__scm_StringBuilder__T__T__T__scm_StringBuilder(b, start, sep, end) {
    return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
  };
  length__I() {
    return (this.sjsr_WrappedVarArgs__f_scala$scalajs$runtime$WrappedVarArgs$$array.length | 0)
  };
  apply__I__O(idx) {
    return this.sjsr_WrappedVarArgs__f_scala$scalajs$runtime$WrappedVarArgs$$array[idx]
  };
  className__T() {
    return "WrappedVarArgs"
  };
  fromSpecific__sc_IterableOnce__O(coll) {
    const this$1 = $m_sjsr_WrappedVarArgs$();
    return this$1.from__sc_IterableOnce__sjsr_WrappedVarArgs(coll)
  };
  apply__O__O(v1) {
    return this.apply__I__O((v1 | 0))
  };
}
function $isArrayOf_sjsr_WrappedVarArgs(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sjsr_WrappedVarArgs)))
}
const $d_sjsr_WrappedVarArgs = new $TypeData().initClass({
  sjsr_WrappedVarArgs: 0
}, false, "scala.scalajs.runtime.WrappedVarArgs", {
  sjsr_WrappedVarArgs: 1,
  O: 1,
  sci_IndexedSeq: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_SeqOps: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_sjsr_WrappedVarArgs.prototype.$classData = $d_sjsr_WrappedVarArgs;
class $c_sci_Stream$Cons extends $c_sci_Stream {
  constructor(head, tl) {
    super();
    this.sci_Stream$Cons__f_head = null;
    this.sci_Stream$Cons__f_tlVal = null;
    this.sci_Stream$Cons__f_tlGen = null;
    this.sci_Stream$Cons__f_head = head;
    this.sci_Stream$Cons__f_tlGen = tl
  };
  head__O() {
    return this.sci_Stream$Cons__f_head
  };
  isEmpty__Z() {
    return false
  };
  tailDefined__Z() {
    return (this.sci_Stream$Cons__f_tlGen === null)
  };
  tail__sci_Stream() {
    if ((!this.tailDefined__Z())) {
      if ((!this.tailDefined__Z())) {
        this.sci_Stream$Cons__f_tlVal = this.sci_Stream$Cons__f_tlGen.apply__O();
        this.sci_Stream$Cons__f_tlGen = null
      }
    };
    return this.sci_Stream$Cons__f_tlVal
  };
  force__sci_Stream$Cons() {
    let these = this;
    let those = this;
    if ((!these.isEmpty__Z())) {
      these = these.tail__O()
    };
    while ((those !== these)) {
      if (these.isEmpty__Z()) {
        return this
      };
      these = these.tail__O();
      if (these.isEmpty__Z()) {
        return this
      };
      these = these.tail__O();
      if ((these === those)) {
        return this
      };
      those = those.tail__O()
    };
    return this
  };
  force__sci_Stream() {
    return this.force__sci_Stream$Cons()
  };
  tail__O() {
    return this.tail__sci_Stream()
  };
}
const $d_sci_Stream$Cons = new $TypeData().initClass({
  sci_Stream$Cons: 0
}, false, "scala.collection.immutable.Stream$Cons", {
  sci_Stream$Cons: 1,
  sci_Stream: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_LinearSeq: 1,
  sc_LinearSeq: 1,
  sc_LinearSeqOps: 1,
  sci_LinearSeqOps: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Stream$Cons.prototype.$classData = $d_sci_Stream$Cons;
class $c_sci_Stream$Empty$ extends $c_sci_Stream {
  isEmpty__Z() {
    return true
  };
  head__E() {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "head of empty stream")
  };
  tail__sci_Stream() {
    throw $ct_jl_UnsupportedOperationException__T__(new $c_jl_UnsupportedOperationException(), "tail of empty stream")
  };
  knownSize__I() {
    return 0
  };
  tailDefined__Z() {
    return false
  };
  force__sci_Stream() {
    return this
  };
  tail__O() {
    return this.tail__sci_Stream()
  };
  head__O() {
    this.head__E()
  };
}
const $d_sci_Stream$Empty$ = new $TypeData().initClass({
  sci_Stream$Empty$: 0
}, false, "scala.collection.immutable.Stream$Empty$", {
  sci_Stream$Empty$: 1,
  sci_Stream: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_LinearSeq: 1,
  sc_LinearSeq: 1,
  sc_LinearSeqOps: 1,
  sci_LinearSeqOps: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Stream$Empty$.prototype.$classData = $d_sci_Stream$Empty$;
let $n_sci_Stream$Empty$ = (void 0);
function $m_sci_Stream$Empty$() {
  if ((!$n_sci_Stream$Empty$)) {
    $n_sci_Stream$Empty$ = new $c_sci_Stream$Empty$()
  };
  return $n_sci_Stream$Empty$
}
class $c_scm_AbstractBuffer extends $c_scm_AbstractSeq {
  addAll__sc_IterableOnce__scm_Growable(xs) {
    return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs)
  };
}
class $c_sci_ArraySeq {
}
function $isArrayOf_sci_ArraySeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_ArraySeq)))
}
class $c_scm_ArraySeq extends $c_scm_AbstractSeq {
  stringPrefix__T() {
    return "IndexedSeq"
  };
  drop__I__O(n) {
    return $f_sc_IndexedSeqOps__drop__I__O(this, n)
  };
  lengthCompare__I__I(len) {
    const x = this.length__I();
    return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
  };
  knownSize__I() {
    return this.length__I()
  };
  fromSpecific__sc_IterableOnce__scm_ArraySeq(coll) {
    const evidence$1 = this.elemTag__s_reflect_ClassTag();
    let capacity = 0;
    let size = 0;
    let jsElems = null;
    const elementClass = evidence$1.runtimeClass__jl_Class();
    capacity = 0;
    size = 0;
    const isCharArrayBuilder = (elementClass === $d_C.getClassOf());
    jsElems = [];
    const s = coll.knownSize__I();
    const it = coll.iterator__sc_Iterator();
    while (it.hasNext__Z()) {
      const elem = it.next__O();
      const unboxedElem = (isCharArrayBuilder ? $uC(elem) : ((elem === null) ? elementClass.jl_Class__f_data.zero : elem));
      jsElems.push(unboxedElem)
    };
    const $$x1 = $m_scm_ArraySeq$();
    const elemRuntimeClass = ((elementClass === $d_V.getClassOf()) ? $d_jl_Void.getClassOf() : (((elementClass === $d_sr_Null$.getClassOf()) || (elementClass === $d_sr_Nothing$.getClassOf())) ? $d_O.getClassOf() : elementClass));
    return $$x1.make__O__scm_ArraySeq($makeNativeArrayWrapper(elemRuntimeClass.jl_Class__f_data.getArrayOf(), jsElems))
  };
  className__T() {
    return "ArraySeq"
  };
  equals__O__Z(other) {
    if ((other instanceof $c_scm_ArraySeq)) {
      const x2 = other;
      if (($m_sr_ScalaRunTime$().array_length__O__I(this.array__O()) !== $m_sr_ScalaRunTime$().array_length__O__I(x2.array__O()))) {
        return false
      }
    };
    return $f_sc_Seq__equals__O__Z(this, other)
  };
  fromSpecific__sc_IterableOnce__O(coll) {
    return this.fromSpecific__sc_IterableOnce__scm_ArraySeq(coll)
  };
  fromSpecific__sc_IterableOnce__sc_IterableOps(coll) {
    return this.fromSpecific__sc_IterableOnce__scm_ArraySeq(coll)
  };
  iterableFactory__sc_IterableFactory() {
    return $m_scm_ArraySeq$().scm_ArraySeq$__f_untagged
  };
}
function $isArrayOf_scm_ArraySeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArraySeq)))
}
const $p_sci_List__loop$2__I__sci_List__I__I = (function($thiz, i, xs, len$1) {
  while (true) {
    if ((i === len$1)) {
      return (xs.isEmpty__Z() ? 0 : 1)
    } else if (xs.isEmpty__Z()) {
      return (-1)
    } else {
      const temp$i = ((1 + i) | 0);
      const temp$xs = xs.tail__O();
      i = temp$i;
      xs = temp$xs
    }
  }
});
const $p_sci_List__listEq$1__sci_List__sci_List__Z = (function($thiz, a, b) {
  while (true) {
    if ((a === b)) {
      return true
    } else {
      const aEmpty = a.isEmpty__Z();
      const bEmpty = b.isEmpty__Z();
      if (((!(aEmpty || bEmpty)) && $m_sr_BoxesRunTime$().equals__O__O__Z(a.head__O(), b.head__O()))) {
        const temp$a = a.tail__O();
        const temp$b = b.tail__O();
        a = temp$a;
        b = temp$b
      } else {
        return (aEmpty && bEmpty)
      }
    }
  }
});
class $c_sci_List extends $c_sci_AbstractSeq {
  iterator__sc_Iterator() {
    return new $c_sc_StrictOptimizedLinearSeqOps$$anon$1(this)
  };
  stringPrefix__T() {
    return "LinearSeq"
  };
  apply__I__O(n) {
    return $f_sc_LinearSeqOps__apply__I__O(this, n)
  };
  sameElements__sc_IterableOnce__Z(that) {
    return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that)
  };
  indexWhere__F1__I__I(p, from) {
    return $f_sc_LinearSeqOps__indexWhere__F1__I__I(this, p, from)
  };
  isEmpty__Z() {
    return (this === $m_sci_Nil$())
  };
  length__I() {
    let these = this;
    let len = 0;
    while ((!these.isEmpty__Z())) {
      len = ((1 + len) | 0);
      these = these.tail__O()
    };
    return len
  };
  lengthCompare__I__I(len) {
    return ((len < 0) ? 1 : $p_sci_List__loop$2__I__sci_List__I__I(this, 0, this, len))
  };
  exists__F1__Z(p) {
    let these = this;
    while ((!these.isEmpty__Z())) {
      if ((!(!p.apply__O__O(these.head__O())))) {
        return true
      };
      these = these.tail__O()
    };
    return false
  };
  className__T() {
    return "List"
  };
  equals__O__Z(o) {
    if ((o instanceof $c_sci_List)) {
      const x2 = o;
      return $p_sci_List__listEq$1__sci_List__sci_List__Z(this, this, x2)
    } else {
      return $f_sc_Seq__equals__O__Z(this, o)
    }
  };
  apply__O__O(v1) {
    const n = (v1 | 0);
    return $f_sc_LinearSeqOps__apply__I__O(this, n)
  };
  drop__I__O(n) {
    return $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq(this, n, this)
  };
  iterableFactory__sc_IterableFactory() {
    return $m_sci_List$()
  };
}
function $isArrayOf_sci_List(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_List)))
}
const $p_sci_Vector__checkRangeConvert__I__I = (function($thiz, index) {
  const idx = ((index + $thiz.sci_Vector__f_startIndex) | 0);
  if (((index >= 0) && (idx < $thiz.sci_Vector__f_endIndex))) {
    return idx
  } else {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((index + " is out of bounds (min 0, max ") + (((-1) + $thiz.sci_Vector__f_endIndex) | 0)) + ")"))
  }
});
const $p_sci_Vector__getElem__I__I__O = (function($thiz, index, xor) {
  if ((xor < 32)) {
    return $thiz.sci_Vector__f_display0.u[(31 & index)]
  } else if ((xor < 1024)) {
    return $thiz.sci_Vector__f_display1.u[(31 & ((index >>> 5) | 0))].u[(31 & index)]
  } else if ((xor < 32768)) {
    return $thiz.sci_Vector__f_display2.u[(31 & ((index >>> 10) | 0))].u[(31 & ((index >>> 5) | 0))].u[(31 & index)]
  } else if ((xor < 1048576)) {
    return $thiz.sci_Vector__f_display3.u[(31 & ((index >>> 15) | 0))].u[(31 & ((index >>> 10) | 0))].u[(31 & ((index >>> 5) | 0))].u[(31 & index)]
  } else if ((xor < 33554432)) {
    return $thiz.sci_Vector__f_display4.u[(31 & ((index >>> 20) | 0))].u[(31 & ((index >>> 15) | 0))].u[(31 & ((index >>> 10) | 0))].u[(31 & ((index >>> 5) | 0))].u[(31 & index)]
  } else if ((xor < 1073741824)) {
    return $thiz.sci_Vector__f_display5.u[(31 & ((index >>> 25) | 0))].u[(31 & ((index >>> 20) | 0))].u[(31 & ((index >>> 15) | 0))].u[(31 & ((index >>> 10) | 0))].u[(31 & ((index >>> 5) | 0))].u[(31 & index)]
  } else {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException())
  }
});
const $p_sci_Vector__gotoPosWritable__I__I__I__V = (function($thiz, oldIndex, newIndex, xor) {
  if ($thiz.sci_Vector__f_dirty) {
    $f_sci_VectorPointer__gotoPosWritable1__I__I__I__V($thiz, oldIndex, newIndex, xor)
  } else {
    $f_sci_VectorPointer__gotoPosWritable0__I__I__V($thiz, newIndex, xor);
    $thiz.sci_Vector__f_dirty = true
  }
});
const $p_sci_Vector__gotoFreshPosWritable__I__I__I__V = (function($thiz, oldIndex, newIndex, xor) {
  if ($thiz.sci_Vector__f_dirty) {
    $f_sci_VectorPointer__gotoFreshPosWritable1__I__I__I__V($thiz, oldIndex, newIndex, xor)
  } else {
    $f_sci_VectorPointer__gotoFreshPosWritable0__I__I__I__V($thiz, oldIndex, newIndex, xor);
    $thiz.sci_Vector__f_dirty = true
  }
});
const $p_sci_Vector__shiftTopLevel__I__I__V = (function($thiz, oldLeft, newLeft) {
  const x1 = (((-1) + $thiz.sci_Vector__f_depth) | 0);
  switch (x1) {
    case 0: {
      const array = $thiz.sci_Vector__f_display0;
      $thiz.sci_Vector__f_display0 = $f_sci_VectorPointer__copyRange__AO__I__I__AO($thiz, array, oldLeft, newLeft);
      break
    }
    case 1: {
      const array$1 = $thiz.sci_Vector__f_display1;
      $thiz.sci_Vector__f_display1 = $f_sci_VectorPointer__copyRange__AO__I__I__AO($thiz, array$1, oldLeft, newLeft);
      break
    }
    case 2: {
      const array$2 = $thiz.sci_Vector__f_display2;
      $thiz.sci_Vector__f_display2 = $f_sci_VectorPointer__copyRange__AO__I__I__AO($thiz, array$2, oldLeft, newLeft);
      break
    }
    case 3: {
      const array$3 = $thiz.sci_Vector__f_display3;
      $thiz.sci_Vector__f_display3 = $f_sci_VectorPointer__copyRange__AO__I__I__AO($thiz, array$3, oldLeft, newLeft);
      break
    }
    case 4: {
      const array$4 = $thiz.sci_Vector__f_display4;
      $thiz.sci_Vector__f_display4 = $f_sci_VectorPointer__copyRange__AO__I__I__AO($thiz, array$4, oldLeft, newLeft);
      break
    }
    case 5: {
      const array$5 = $thiz.sci_Vector__f_display5;
      $thiz.sci_Vector__f_display5 = $f_sci_VectorPointer__copyRange__AO__I__I__AO($thiz, array$5, oldLeft, newLeft);
      break
    }
    default: {
      throw new $c_s_MatchError(x1)
    }
  }
});
const $p_sci_Vector__zeroLeft__AO__I__V = (function($thiz, array, index) {
  let i = 0;
  while ((i < index)) {
    array.u[i] = null;
    i = ((1 + i) | 0)
  }
});
const $p_sci_Vector__copyRight__AO__I__AO = (function($thiz, array, left) {
  const copy = array.clone__O();
  $m_ju_Arrays$().fill__AO__I__I__O__V(copy, 0, left, null);
  return copy
});
const $p_sci_Vector__cleanLeftEdge__I__V = (function($thiz, cutIndex) {
  if ((cutIndex < 32)) {
    $p_sci_Vector__zeroLeft__AO__I__V($thiz, $thiz.sci_Vector__f_display0, cutIndex)
  } else if ((cutIndex < 1024)) {
    $p_sci_Vector__zeroLeft__AO__I__V($thiz, $thiz.sci_Vector__f_display0, (31 & cutIndex));
    $thiz.sci_Vector__f_display1 = $p_sci_Vector__copyRight__AO__I__AO($thiz, $thiz.sci_Vector__f_display1, ((cutIndex >>> 5) | 0))
  } else if ((cutIndex < 32768)) {
    $p_sci_Vector__zeroLeft__AO__I__V($thiz, $thiz.sci_Vector__f_display0, (31 & cutIndex));
    $thiz.sci_Vector__f_display1 = $p_sci_Vector__copyRight__AO__I__AO($thiz, $thiz.sci_Vector__f_display1, (31 & ((cutIndex >>> 5) | 0)));
    $thiz.sci_Vector__f_display2 = $p_sci_Vector__copyRight__AO__I__AO($thiz, $thiz.sci_Vector__f_display2, ((cutIndex >>> 10) | 0))
  } else if ((cutIndex < 1048576)) {
    $p_sci_Vector__zeroLeft__AO__I__V($thiz, $thiz.sci_Vector__f_display0, (31 & cutIndex));
    $thiz.sci_Vector__f_display1 = $p_sci_Vector__copyRight__AO__I__AO($thiz, $thiz.sci_Vector__f_display1, (31 & ((cutIndex >>> 5) | 0)));
    $thiz.sci_Vector__f_display2 = $p_sci_Vector__copyRight__AO__I__AO($thiz, $thiz.sci_Vector__f_display2, (31 & ((cutIndex >>> 10) | 0)));
    $thiz.sci_Vector__f_display3 = $p_sci_Vector__copyRight__AO__I__AO($thiz, $thiz.sci_Vector__f_display3, ((cutIndex >>> 15) | 0))
  } else if ((cutIndex < 33554432)) {
    $p_sci_Vector__zeroLeft__AO__I__V($thiz, $thiz.sci_Vector__f_display0, (31 & cutIndex));
    $thiz.sci_Vector__f_display1 = $p_sci_Vector__copyRight__AO__I__AO($thiz, $thiz.sci_Vector__f_display1, (31 & ((cutIndex >>> 5) | 0)));
    $thiz.sci_Vector__f_display2 = $p_sci_Vector__copyRight__AO__I__AO($thiz, $thiz.sci_Vector__f_display2, (31 & ((cutIndex >>> 10) | 0)));
    $thiz.sci_Vector__f_display3 = $p_sci_Vector__copyRight__AO__I__AO($thiz, $thiz.sci_Vector__f_display3, (31 & ((cutIndex >>> 15) | 0)));
    $thiz.sci_Vector__f_display4 = $p_sci_Vector__copyRight__AO__I__AO($thiz, $thiz.sci_Vector__f_display4, ((cutIndex >>> 20) | 0))
  } else if ((cutIndex < 1073741824)) {
    $p_sci_Vector__zeroLeft__AO__I__V($thiz, $thiz.sci_Vector__f_display0, (31 & cutIndex));
    $thiz.sci_Vector__f_display1 = $p_sci_Vector__copyRight__AO__I__AO($thiz, $thiz.sci_Vector__f_display1, (31 & ((cutIndex >>> 5) | 0)));
    $thiz.sci_Vector__f_display2 = $p_sci_Vector__copyRight__AO__I__AO($thiz, $thiz.sci_Vector__f_display2, (31 & ((cutIndex >>> 10) | 0)));
    $thiz.sci_Vector__f_display3 = $p_sci_Vector__copyRight__AO__I__AO($thiz, $thiz.sci_Vector__f_display3, (31 & ((cutIndex >>> 15) | 0)));
    $thiz.sci_Vector__f_display4 = $p_sci_Vector__copyRight__AO__I__AO($thiz, $thiz.sci_Vector__f_display4, (31 & ((cutIndex >>> 20) | 0)));
    $thiz.sci_Vector__f_display5 = $p_sci_Vector__copyRight__AO__I__AO($thiz, $thiz.sci_Vector__f_display5, ((cutIndex >>> 25) | 0))
  } else {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException())
  }
});
const $p_sci_Vector__requiredDepth__I__I = (function($thiz, xor) {
  if ((xor < 32)) {
    return 1
  } else if ((xor < 1024)) {
    return 2
  } else if ((xor < 32768)) {
    return 3
  } else if ((xor < 1048576)) {
    return 4
  } else if ((xor < 33554432)) {
    return 5
  } else if ((xor < 1073741824)) {
    return 6
  } else {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException())
  }
});
const $p_sci_Vector__dropFront0__I__sci_Vector = (function($thiz, cutIndex) {
  const blockIndex = ((-32) & cutIndex);
  const xor = (cutIndex ^ (((-1) + $thiz.sci_Vector__f_endIndex) | 0));
  const d = $p_sci_Vector__requiredDepth__I__I($thiz, xor);
  const shift = (cutIndex & (~(((-1) + (1 << $imul(5, d))) | 0)));
  const s = new $c_sci_Vector(((cutIndex - shift) | 0), (($thiz.sci_Vector__f_endIndex - shift) | 0), ((blockIndex - shift) | 0));
  const depth = $thiz.sci_Vector__f_depth;
  $f_sci_VectorPointer__initFrom__sci_VectorPointer__I__V(s, $thiz, depth);
  s.sci_Vector__f_dirty = $thiz.sci_Vector__f_dirty;
  $p_sci_Vector__gotoPosWritable__I__I__I__V(s, $thiz.sci_Vector__f_focus, blockIndex, ($thiz.sci_Vector__f_focus ^ blockIndex));
  $f_sci_VectorPointer__preClean__I__V(s, d);
  $p_sci_Vector__cleanLeftEdge__I__V(s, ((cutIndex - shift) | 0));
  return s
});
class $c_sci_Vector extends $c_sci_AbstractSeq {
  constructor(startIndex, endIndex, focus) {
    super();
    this.sci_Vector__f_startIndex = 0;
    this.sci_Vector__f_endIndex = 0;
    this.sci_Vector__f_focus = 0;
    this.sci_Vector__f_dirty = false;
    this.sci_Vector__f_depth = 0;
    this.sci_Vector__f_display0 = null;
    this.sci_Vector__f_display1 = null;
    this.sci_Vector__f_display2 = null;
    this.sci_Vector__f_display3 = null;
    this.sci_Vector__f_display4 = null;
    this.sci_Vector__f_display5 = null;
    this.sci_Vector__f_startIndex = startIndex;
    this.sci_Vector__f_endIndex = endIndex;
    this.sci_Vector__f_focus = focus;
    this.sci_Vector__f_dirty = false
  };
  canEqual__O__Z(that) {
    return $f_sci_IndexedSeq__canEqual__O__Z(this, that)
  };
  sameElements__sc_IterableOnce__Z(o) {
    return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o)
  };
  stringPrefix__T() {
    return "IndexedSeq"
  };
  lengthCompare__I__I(len) {
    const x = this.length__I();
    return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
  };
  knownSize__I() {
    return this.length__I()
  };
  depth__I() {
    return this.sci_Vector__f_depth
  };
  depth_$eq__I__V(x$1) {
    this.sci_Vector__f_depth = x$1
  };
  display0__AO() {
    return this.sci_Vector__f_display0
  };
  display0_$eq__AO__V(x$1) {
    this.sci_Vector__f_display0 = x$1
  };
  display1__AAO() {
    return this.sci_Vector__f_display1
  };
  display1_$eq__AAO__V(x$1) {
    this.sci_Vector__f_display1 = x$1
  };
  display2__AAAO() {
    return this.sci_Vector__f_display2
  };
  display2_$eq__AAAO__V(x$1) {
    this.sci_Vector__f_display2 = x$1
  };
  display3__AAAAO() {
    return this.sci_Vector__f_display3
  };
  display3_$eq__AAAAO__V(x$1) {
    this.sci_Vector__f_display3 = x$1
  };
  display4__AAAAAO() {
    return this.sci_Vector__f_display4
  };
  display4_$eq__AAAAAO__V(x$1) {
    this.sci_Vector__f_display4 = x$1
  };
  display5__AAAAAAO() {
    return this.sci_Vector__f_display5
  };
  display5_$eq__AAAAAAO__V(x$1) {
    this.sci_Vector__f_display5 = x$1
  };
  length__I() {
    return ((this.sci_Vector__f_endIndex - this.sci_Vector__f_startIndex) | 0)
  };
  initIterator__sci_VectorIterator__V(s) {
    const depth = this.sci_Vector__f_depth;
    $f_sci_VectorPointer__initFrom__sci_VectorPointer__I__V(s, this, depth);
    if (this.sci_Vector__f_dirty) {
      const index = this.sci_Vector__f_focus;
      $f_sci_VectorPointer__stabilize__I__V(s, index)
    };
    if ((s.sci_VectorIterator__f_depth > 1)) {
      const index$1 = this.sci_Vector__f_startIndex;
      const xor = (this.sci_Vector__f_startIndex ^ this.sci_Vector__f_focus);
      $f_sci_VectorPointer__gotoPos__I__I__V(s, index$1, xor)
    }
  };
  iterator__sc_Iterator() {
    if ($f_sc_SeqOps__isEmpty__Z(this)) {
      return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty
    } else {
      const s = new $c_sci_VectorIterator(this.sci_Vector__f_startIndex, this.sci_Vector__f_endIndex);
      this.initIterator__sci_VectorIterator__V(s);
      return s
    }
  };
  apply__I__O(index) {
    const idx = $p_sci_Vector__checkRangeConvert__I__I(this, index);
    return $p_sci_Vector__getElem__I__I__O(this, idx, (idx ^ this.sci_Vector__f_focus))
  };
  drop__I__sci_Vector(n) {
    if ((n <= 0)) {
      return this
    } else if ((this.sci_Vector__f_startIndex < ((this.sci_Vector__f_endIndex - n) | 0))) {
      return $p_sci_Vector__dropFront0__I__sci_Vector(this, ((this.sci_Vector__f_startIndex + n) | 0))
    } else {
      const this$1 = $m_sci_Vector$();
      return this$1.sci_Vector$__f_NIL
    }
  };
  head__O() {
    if ($f_sc_SeqOps__isEmpty__Z(this)) {
      throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "empty.head")
    };
    return this.apply__I__O(0)
  };
  tail__sci_Vector() {
    if ($f_sc_SeqOps__isEmpty__Z(this)) {
      throw $ct_jl_UnsupportedOperationException__T__(new $c_jl_UnsupportedOperationException(), "empty.tail")
    };
    return this.drop__I__sci_Vector(1)
  };
  updateAt__I__O__sci_Vector(index, elem) {
    const idx = $p_sci_Vector__checkRangeConvert__I__I(this, index);
    const s = new $c_sci_Vector(this.sci_Vector__f_startIndex, this.sci_Vector__f_endIndex, idx);
    const depth = this.sci_Vector__f_depth;
    $f_sci_VectorPointer__initFrom__sci_VectorPointer__I__V(s, this, depth);
    s.sci_Vector__f_dirty = this.sci_Vector__f_dirty;
    $p_sci_Vector__gotoPosWritable__I__I__I__V(s, this.sci_Vector__f_focus, idx, (this.sci_Vector__f_focus ^ idx));
    s.sci_Vector__f_display0.u[(31 & idx)] = elem;
    return s
  };
  appended__O__sci_Vector(value) {
    const thisLength = this.length__I();
    let result;
    if (((this.sci_Vector__f_depth === 1) && (thisLength < 32))) {
      const s = new $c_sci_Vector(0, ((1 + thisLength) | 0), 0);
      s.sci_Vector__f_depth = 1;
      const newDisplay0 = $newArrayObject($d_O.getArrayOf(), [((1 + thisLength) | 0)]);
      const src = this.sci_Vector__f_display0;
      const srcPos = this.sci_Vector__f_startIndex;
      $systemArraycopy(src, srcPos, newDisplay0, 0, thisLength);
      newDisplay0.u[thisLength] = value;
      s.sci_Vector__f_display0 = newDisplay0;
      result = s
    } else if ((thisLength > 0)) {
      const blockIndex = ((-32) & this.sci_Vector__f_endIndex);
      const lo = (31 & this.sci_Vector__f_endIndex);
      if ((this.sci_Vector__f_endIndex !== blockIndex)) {
        const s$2 = new $c_sci_Vector(this.sci_Vector__f_startIndex, ((1 + this.sci_Vector__f_endIndex) | 0), blockIndex);
        const depth = this.sci_Vector__f_depth;
        $f_sci_VectorPointer__initFrom__sci_VectorPointer__I__V(s$2, this, depth);
        s$2.sci_Vector__f_dirty = this.sci_Vector__f_dirty;
        $p_sci_Vector__gotoPosWritable__I__I__I__V(s$2, this.sci_Vector__f_focus, blockIndex, (this.sci_Vector__f_focus ^ blockIndex));
        s$2.sci_Vector__f_display0.u[lo] = value;
        result = s$2
      } else {
        const shift = (this.sci_Vector__f_startIndex & (~(((-1) + (1 << $imul(5, (((-1) + this.sci_Vector__f_depth) | 0)))) | 0)));
        const shiftBlocks = ((this.sci_Vector__f_startIndex >>> $imul(5, (((-1) + this.sci_Vector__f_depth) | 0))) | 0);
        if ((shift !== 0)) {
          if ((this.sci_Vector__f_depth > 1)) {
            const newBlockIndex = ((blockIndex - shift) | 0);
            const newFocus = ((this.sci_Vector__f_focus - shift) | 0);
            const s$3 = new $c_sci_Vector(((this.sci_Vector__f_startIndex - shift) | 0), ((((1 + this.sci_Vector__f_endIndex) | 0) - shift) | 0), newBlockIndex);
            const depth$1 = this.sci_Vector__f_depth;
            $f_sci_VectorPointer__initFrom__sci_VectorPointer__I__V(s$3, this, depth$1);
            s$3.sci_Vector__f_dirty = this.sci_Vector__f_dirty;
            $p_sci_Vector__shiftTopLevel__I__I__V(s$3, shiftBlocks, 0);
            $p_sci_Vector__gotoFreshPosWritable__I__I__I__V(s$3, newFocus, newBlockIndex, (newFocus ^ newBlockIndex));
            s$3.sci_Vector__f_display0.u[lo] = value;
            result = s$3
          } else {
            const newBlockIndex$2 = (((-32) + blockIndex) | 0);
            const newFocus$2 = this.sci_Vector__f_focus;
            const s$4 = new $c_sci_Vector(((this.sci_Vector__f_startIndex - shift) | 0), ((((1 + this.sci_Vector__f_endIndex) | 0) - shift) | 0), newBlockIndex$2);
            const depth$2 = this.sci_Vector__f_depth;
            $f_sci_VectorPointer__initFrom__sci_VectorPointer__I__V(s$4, this, depth$2);
            s$4.sci_Vector__f_dirty = this.sci_Vector__f_dirty;
            $p_sci_Vector__shiftTopLevel__I__I__V(s$4, shiftBlocks, 0);
            $p_sci_Vector__gotoPosWritable__I__I__I__V(s$4, newFocus$2, newBlockIndex$2, (newFocus$2 ^ newBlockIndex$2));
            if ((s$4.sci_Vector__f_display0.u.length < ((31 - shift) | 0))) {
              const newDisplay0$2 = $newArrayObject($d_O.getArrayOf(), [((31 - shift) | 0)]);
              const xs = s$4.sci_Vector__f_display0;
              $m_sc_ArrayOps$().copyToArray$extension__O__O__I__I__I(xs, newDisplay0$2, 0, 2147483647);
              s$4.sci_Vector__f_display0 = newDisplay0$2
            };
            s$4.sci_Vector__f_display0.u[((32 - shift) | 0)] = value;
            result = s$4
          }
        } else {
          const newFocus$3 = this.sci_Vector__f_focus;
          const s$5 = new $c_sci_Vector(this.sci_Vector__f_startIndex, ((1 + this.sci_Vector__f_endIndex) | 0), blockIndex);
          const depth$3 = this.sci_Vector__f_depth;
          $f_sci_VectorPointer__initFrom__sci_VectorPointer__I__V(s$5, this, depth$3);
          s$5.sci_Vector__f_dirty = this.sci_Vector__f_dirty;
          $p_sci_Vector__gotoFreshPosWritable__I__I__I__V(s$5, newFocus$3, blockIndex, (newFocus$3 ^ blockIndex));
          s$5.sci_Vector__f_display0.u[lo] = value;
          result = s$5
        }
      }
    } else {
      result = $m_sci_Vector$().scala$collection$immutable$Vector$$single__O__sci_Vector(value)
    };
    return result
  };
  applyPreferredMaxLength__I() {
    return $m_sci_Vector$().sci_Vector$__f_scala$collection$immutable$Vector$$defaultApplyPreferredMaxLength
  };
  equals__O__Z(o) {
    if ((o instanceof $c_sci_Vector)) {
      const x2 = o;
      return ((this === x2) || ((this.length__I() === x2.length__I()) && (((((((((this.sci_Vector__f_startIndex === x2.sci_Vector__f_startIndex) && (this.sci_Vector__f_endIndex === x2.sci_Vector__f_endIndex)) && (this.sci_Vector__f_display0 === x2.sci_Vector__f_display0)) && (this.sci_Vector__f_display1 === x2.sci_Vector__f_display1)) && (this.sci_Vector__f_display2 === x2.sci_Vector__f_display2)) && (this.sci_Vector__f_display3 === x2.sci_Vector__f_display3)) && (this.sci_Vector__f_display4 === x2.sci_Vector__f_display4)) && (this.sci_Vector__f_display5 === x2.sci_Vector__f_display5)) || $f_sc_Seq__equals__O__Z(this, o))))
    } else {
      return $f_sc_Seq__equals__O__Z(this, o)
    }
  };
  className__T() {
    return "Vector"
  };
  tail__O() {
    return this.tail__sci_Vector()
  };
  drop__I__O(n) {
    return this.drop__I__sci_Vector(n)
  };
  apply__O__O(v1) {
    return this.apply__I__O((v1 | 0))
  };
  iterableFactory__sc_IterableFactory() {
    return $m_sci_Vector$()
  };
}
function $isArrayOf_sci_Vector(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Vector)))
}
const $d_sci_Vector = new $TypeData().initClass({
  sci_Vector: 0
}, false, "scala.collection.immutable.Vector", {
  sci_Vector: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  sci_VectorPointer: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Vector.prototype.$classData = $d_sci_Vector;
class $c_scm_ArraySeq$ofBoolean extends $c_scm_ArraySeq {
  constructor(array) {
    super();
    this.scm_ArraySeq$ofBoolean__f_array = null;
    this.scm_ArraySeq$ofBoolean__f_array = array
  };
  length__I() {
    return this.scm_ArraySeq$ofBoolean__f_array.u.length
  };
  hashCode__I() {
    const this$1 = $m_s_util_hashing_MurmurHash3$();
    const a = this.scm_ArraySeq$ofBoolean__f_array;
    return this$1.arrayHash$mZc$sp__AZ__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed)
  };
  equals__O__Z(that) {
    if ((that instanceof $c_scm_ArraySeq$ofBoolean)) {
      const x2 = that;
      const a = this.scm_ArraySeq$ofBoolean__f_array;
      const b = x2.scm_ArraySeq$ofBoolean__f_array;
      return $m_ju_Arrays$().equals__AZ__AZ__Z(a, b)
    } else {
      return $c_scm_ArraySeq.prototype.equals__O__Z.call(this, that)
    }
  };
  iterator__sc_Iterator() {
    return new $c_sc_ArrayOps$ArrayIterator$mcZ$sp(this.scm_ArraySeq$ofBoolean__f_array)
  };
  apply$mcZI$sp__I__Z(index) {
    return this.scm_ArraySeq$ofBoolean__f_array.u[index]
  };
  apply__O__O(v1) {
    const index = (v1 | 0);
    return this.apply$mcZI$sp__I__Z(index)
  };
  apply__I__O(i) {
    return this.apply$mcZI$sp__I__Z(i)
  };
  elemTag__s_reflect_ClassTag() {
    return $m_s_reflect_ManifestFactory$BooleanManifest$()
  };
  array__O() {
    return this.scm_ArraySeq$ofBoolean__f_array
  };
}
function $isArrayOf_scm_ArraySeq$ofBoolean(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArraySeq$ofBoolean)))
}
const $d_scm_ArraySeq$ofBoolean = new $TypeData().initClass({
  scm_ArraySeq$ofBoolean: 0
}, false, "scala.collection.mutable.ArraySeq$ofBoolean", {
  scm_ArraySeq$ofBoolean: 1,
  scm_ArraySeq: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ArraySeq$ofBoolean.prototype.$classData = $d_scm_ArraySeq$ofBoolean;
class $c_scm_ArraySeq$ofByte extends $c_scm_ArraySeq {
  constructor(array) {
    super();
    this.scm_ArraySeq$ofByte__f_array = null;
    this.scm_ArraySeq$ofByte__f_array = array
  };
  length__I() {
    return this.scm_ArraySeq$ofByte__f_array.u.length
  };
  apply__I__B(index) {
    return this.scm_ArraySeq$ofByte__f_array.u[index]
  };
  hashCode__I() {
    const this$1 = $m_s_util_hashing_MurmurHash3$();
    const a = this.scm_ArraySeq$ofByte__f_array;
    return this$1.arrayHash$mBc$sp__AB__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed)
  };
  equals__O__Z(that) {
    if ((that instanceof $c_scm_ArraySeq$ofByte)) {
      const x2 = that;
      const a = this.scm_ArraySeq$ofByte__f_array;
      const b = x2.scm_ArraySeq$ofByte__f_array;
      return $m_ju_Arrays$().equals__AB__AB__Z(a, b)
    } else {
      return $c_scm_ArraySeq.prototype.equals__O__Z.call(this, that)
    }
  };
  iterator__sc_Iterator() {
    return new $c_sc_ArrayOps$ArrayIterator$mcB$sp(this.scm_ArraySeq$ofByte__f_array)
  };
  apply__O__O(v1) {
    return this.apply__I__B((v1 | 0))
  };
  apply__I__O(i) {
    return this.apply__I__B(i)
  };
  elemTag__s_reflect_ClassTag() {
    return $m_s_reflect_ManifestFactory$ByteManifest$()
  };
  array__O() {
    return this.scm_ArraySeq$ofByte__f_array
  };
}
function $isArrayOf_scm_ArraySeq$ofByte(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArraySeq$ofByte)))
}
const $d_scm_ArraySeq$ofByte = new $TypeData().initClass({
  scm_ArraySeq$ofByte: 0
}, false, "scala.collection.mutable.ArraySeq$ofByte", {
  scm_ArraySeq$ofByte: 1,
  scm_ArraySeq: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ArraySeq$ofByte.prototype.$classData = $d_scm_ArraySeq$ofByte;
class $c_scm_ArraySeq$ofChar extends $c_scm_ArraySeq {
  constructor(array) {
    super();
    this.scm_ArraySeq$ofChar__f_array = null;
    this.scm_ArraySeq$ofChar__f_array = array
  };
  length__I() {
    return this.scm_ArraySeq$ofChar__f_array.u.length
  };
  apply__I__C(index) {
    return this.scm_ArraySeq$ofChar__f_array.u[index]
  };
  hashCode__I() {
    const this$1 = $m_s_util_hashing_MurmurHash3$();
    const a = this.scm_ArraySeq$ofChar__f_array;
    return this$1.arrayHash$mCc$sp__AC__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed)
  };
  equals__O__Z(that) {
    if ((that instanceof $c_scm_ArraySeq$ofChar)) {
      const x2 = that;
      const a = this.scm_ArraySeq$ofChar__f_array;
      const b = x2.scm_ArraySeq$ofChar__f_array;
      return $m_ju_Arrays$().equals__AC__AC__Z(a, b)
    } else {
      return $c_scm_ArraySeq.prototype.equals__O__Z.call(this, that)
    }
  };
  iterator__sc_Iterator() {
    return new $c_sc_ArrayOps$ArrayIterator$mcC$sp(this.scm_ArraySeq$ofChar__f_array)
  };
  addString__scm_StringBuilder__T__T__T__scm_StringBuilder(sb, start, sep, end) {
    const jsb = sb.scm_StringBuilder__f_underlying;
    if (((start.length | 0) !== 0)) {
      jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content) + start)
    };
    const len = this.scm_ArraySeq$ofChar__f_array.u.length;
    if ((len !== 0)) {
      if ((sep === "")) {
        jsb.append__AC__jl_StringBuilder(this.scm_ArraySeq$ofChar__f_array)
      } else {
        jsb.length__I();
        (end.length | 0);
        (sep.length | 0);
        const c = this.scm_ArraySeq$ofChar__f_array.u[0];
        const str = String.fromCharCode(c);
        jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content) + str);
        let i = 1;
        while ((i < len)) {
          jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
          const c$1 = this.scm_ArraySeq$ofChar__f_array.u[i];
          const str$1 = String.fromCharCode(c$1);
          jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content) + str$1);
          i = ((1 + i) | 0)
        }
      }
    };
    if (((end.length | 0) !== 0)) {
      jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content) + end)
    };
    return sb
  };
  apply__O__O(v1) {
    return $bC(this.apply__I__C((v1 | 0)))
  };
  apply__I__O(i) {
    return $bC(this.apply__I__C(i))
  };
  elemTag__s_reflect_ClassTag() {
    return $m_s_reflect_ManifestFactory$CharManifest$()
  };
  array__O() {
    return this.scm_ArraySeq$ofChar__f_array
  };
}
function $isArrayOf_scm_ArraySeq$ofChar(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArraySeq$ofChar)))
}
const $d_scm_ArraySeq$ofChar = new $TypeData().initClass({
  scm_ArraySeq$ofChar: 0
}, false, "scala.collection.mutable.ArraySeq$ofChar", {
  scm_ArraySeq$ofChar: 1,
  scm_ArraySeq: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ArraySeq$ofChar.prototype.$classData = $d_scm_ArraySeq$ofChar;
class $c_scm_ArraySeq$ofDouble extends $c_scm_ArraySeq {
  constructor(array) {
    super();
    this.scm_ArraySeq$ofDouble__f_array = null;
    this.scm_ArraySeq$ofDouble__f_array = array
  };
  length__I() {
    return this.scm_ArraySeq$ofDouble__f_array.u.length
  };
  hashCode__I() {
    const this$1 = $m_s_util_hashing_MurmurHash3$();
    const a = this.scm_ArraySeq$ofDouble__f_array;
    return this$1.arrayHash$mDc$sp__AD__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed)
  };
  equals__O__Z(that) {
    if ((that instanceof $c_scm_ArraySeq$ofDouble)) {
      const x2 = that;
      const a = this.scm_ArraySeq$ofDouble__f_array;
      const b = x2.scm_ArraySeq$ofDouble__f_array;
      return $m_ju_Arrays$().equals__AD__AD__Z(a, b)
    } else {
      return $c_scm_ArraySeq.prototype.equals__O__Z.call(this, that)
    }
  };
  iterator__sc_Iterator() {
    return new $c_sc_ArrayOps$ArrayIterator$mcD$sp(this.scm_ArraySeq$ofDouble__f_array)
  };
  apply$mcDI$sp__I__D(index) {
    return this.scm_ArraySeq$ofDouble__f_array.u[index]
  };
  apply__O__O(v1) {
    const index = (v1 | 0);
    return this.apply$mcDI$sp__I__D(index)
  };
  apply__I__O(i) {
    return this.apply$mcDI$sp__I__D(i)
  };
  elemTag__s_reflect_ClassTag() {
    return $m_s_reflect_ManifestFactory$DoubleManifest$()
  };
  array__O() {
    return this.scm_ArraySeq$ofDouble__f_array
  };
}
function $isArrayOf_scm_ArraySeq$ofDouble(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArraySeq$ofDouble)))
}
const $d_scm_ArraySeq$ofDouble = new $TypeData().initClass({
  scm_ArraySeq$ofDouble: 0
}, false, "scala.collection.mutable.ArraySeq$ofDouble", {
  scm_ArraySeq$ofDouble: 1,
  scm_ArraySeq: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ArraySeq$ofDouble.prototype.$classData = $d_scm_ArraySeq$ofDouble;
class $c_scm_ArraySeq$ofFloat extends $c_scm_ArraySeq {
  constructor(array) {
    super();
    this.scm_ArraySeq$ofFloat__f_array = null;
    this.scm_ArraySeq$ofFloat__f_array = array
  };
  length__I() {
    return this.scm_ArraySeq$ofFloat__f_array.u.length
  };
  hashCode__I() {
    const this$1 = $m_s_util_hashing_MurmurHash3$();
    const a = this.scm_ArraySeq$ofFloat__f_array;
    return this$1.arrayHash$mFc$sp__AF__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed)
  };
  equals__O__Z(that) {
    if ((that instanceof $c_scm_ArraySeq$ofFloat)) {
      const x2 = that;
      const a = this.scm_ArraySeq$ofFloat__f_array;
      const b = x2.scm_ArraySeq$ofFloat__f_array;
      return $m_ju_Arrays$().equals__AF__AF__Z(a, b)
    } else {
      return $c_scm_ArraySeq.prototype.equals__O__Z.call(this, that)
    }
  };
  iterator__sc_Iterator() {
    return new $c_sc_ArrayOps$ArrayIterator$mcF$sp(this.scm_ArraySeq$ofFloat__f_array)
  };
  apply$mcFI$sp__I__F(index) {
    return this.scm_ArraySeq$ofFloat__f_array.u[index]
  };
  apply__O__O(v1) {
    const index = (v1 | 0);
    return this.apply$mcFI$sp__I__F(index)
  };
  apply__I__O(i) {
    return this.apply$mcFI$sp__I__F(i)
  };
  elemTag__s_reflect_ClassTag() {
    return $m_s_reflect_ManifestFactory$FloatManifest$()
  };
  array__O() {
    return this.scm_ArraySeq$ofFloat__f_array
  };
}
function $isArrayOf_scm_ArraySeq$ofFloat(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArraySeq$ofFloat)))
}
const $d_scm_ArraySeq$ofFloat = new $TypeData().initClass({
  scm_ArraySeq$ofFloat: 0
}, false, "scala.collection.mutable.ArraySeq$ofFloat", {
  scm_ArraySeq$ofFloat: 1,
  scm_ArraySeq: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ArraySeq$ofFloat.prototype.$classData = $d_scm_ArraySeq$ofFloat;
class $c_scm_ArraySeq$ofInt extends $c_scm_ArraySeq {
  constructor(array) {
    super();
    this.scm_ArraySeq$ofInt__f_array = null;
    this.scm_ArraySeq$ofInt__f_array = array
  };
  length__I() {
    return this.scm_ArraySeq$ofInt__f_array.u.length
  };
  hashCode__I() {
    const this$1 = $m_s_util_hashing_MurmurHash3$();
    const a = this.scm_ArraySeq$ofInt__f_array;
    return this$1.arrayHash$mIc$sp__AI__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed)
  };
  equals__O__Z(that) {
    if ((that instanceof $c_scm_ArraySeq$ofInt)) {
      const x2 = that;
      const a = this.scm_ArraySeq$ofInt__f_array;
      const b = x2.scm_ArraySeq$ofInt__f_array;
      return $m_ju_Arrays$().equals__AI__AI__Z(a, b)
    } else {
      return $c_scm_ArraySeq.prototype.equals__O__Z.call(this, that)
    }
  };
  iterator__sc_Iterator() {
    return new $c_sc_ArrayOps$ArrayIterator$mcI$sp(this.scm_ArraySeq$ofInt__f_array)
  };
  apply$mcII$sp__I__I(index) {
    return this.scm_ArraySeq$ofInt__f_array.u[index]
  };
  apply__O__O(v1) {
    const index = (v1 | 0);
    return this.apply$mcII$sp__I__I(index)
  };
  apply__I__O(i) {
    return this.apply$mcII$sp__I__I(i)
  };
  elemTag__s_reflect_ClassTag() {
    return $m_s_reflect_ManifestFactory$IntManifest$()
  };
  array__O() {
    return this.scm_ArraySeq$ofInt__f_array
  };
}
function $isArrayOf_scm_ArraySeq$ofInt(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArraySeq$ofInt)))
}
const $d_scm_ArraySeq$ofInt = new $TypeData().initClass({
  scm_ArraySeq$ofInt: 0
}, false, "scala.collection.mutable.ArraySeq$ofInt", {
  scm_ArraySeq$ofInt: 1,
  scm_ArraySeq: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ArraySeq$ofInt.prototype.$classData = $d_scm_ArraySeq$ofInt;
class $c_scm_ArraySeq$ofLong extends $c_scm_ArraySeq {
  constructor(array) {
    super();
    this.scm_ArraySeq$ofLong__f_array = null;
    this.scm_ArraySeq$ofLong__f_array = array
  };
  length__I() {
    return this.scm_ArraySeq$ofLong__f_array.u.length
  };
  hashCode__I() {
    const this$1 = $m_s_util_hashing_MurmurHash3$();
    const a = this.scm_ArraySeq$ofLong__f_array;
    return this$1.arrayHash$mJc$sp__AJ__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed)
  };
  equals__O__Z(that) {
    if ((that instanceof $c_scm_ArraySeq$ofLong)) {
      const x2 = that;
      const a = this.scm_ArraySeq$ofLong__f_array;
      const b = x2.scm_ArraySeq$ofLong__f_array;
      return $m_ju_Arrays$().equals__AJ__AJ__Z(a, b)
    } else {
      return $c_scm_ArraySeq.prototype.equals__O__Z.call(this, that)
    }
  };
  iterator__sc_Iterator() {
    return new $c_sc_ArrayOps$ArrayIterator$mcJ$sp(this.scm_ArraySeq$ofLong__f_array)
  };
  apply$mcJI$sp__I__J(index) {
    return this.scm_ArraySeq$ofLong__f_array.u[index]
  };
  apply__O__O(v1) {
    const index = (v1 | 0);
    return this.apply$mcJI$sp__I__J(index)
  };
  apply__I__O(i) {
    return this.apply$mcJI$sp__I__J(i)
  };
  elemTag__s_reflect_ClassTag() {
    return $m_s_reflect_ManifestFactory$LongManifest$()
  };
  array__O() {
    return this.scm_ArraySeq$ofLong__f_array
  };
}
function $isArrayOf_scm_ArraySeq$ofLong(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArraySeq$ofLong)))
}
const $d_scm_ArraySeq$ofLong = new $TypeData().initClass({
  scm_ArraySeq$ofLong: 0
}, false, "scala.collection.mutable.ArraySeq$ofLong", {
  scm_ArraySeq$ofLong: 1,
  scm_ArraySeq: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ArraySeq$ofLong.prototype.$classData = $d_scm_ArraySeq$ofLong;
const $p_scm_ArraySeq$ofRef__elemTag$lzycompute__s_reflect_ClassTag = (function($thiz) {
  if ((!$thiz.scm_ArraySeq$ofRef__f_bitmap$0)) {
    const $$x1 = $m_s_reflect_ClassTag$();
    const this$1 = $thiz.scm_ArraySeq$ofRef__f_array;
    $thiz.scm_ArraySeq$ofRef__f_elemTag = $$x1.apply__jl_Class__s_reflect_ClassTag($objectGetClass(this$1).getComponentType__jl_Class());
    $thiz.scm_ArraySeq$ofRef__f_bitmap$0 = true
  };
  return $thiz.scm_ArraySeq$ofRef__f_elemTag
});
class $c_scm_ArraySeq$ofRef extends $c_scm_ArraySeq {
  constructor(array) {
    super();
    this.scm_ArraySeq$ofRef__f_elemTag = null;
    this.scm_ArraySeq$ofRef__f_array = null;
    this.scm_ArraySeq$ofRef__f_bitmap$0 = false;
    this.scm_ArraySeq$ofRef__f_array = array
  };
  elemTag__s_reflect_ClassTag() {
    return ((!this.scm_ArraySeq$ofRef__f_bitmap$0) ? $p_scm_ArraySeq$ofRef__elemTag$lzycompute__s_reflect_ClassTag(this) : this.scm_ArraySeq$ofRef__f_elemTag)
  };
  length__I() {
    return this.scm_ArraySeq$ofRef__f_array.u.length
  };
  apply__I__O(index) {
    return this.scm_ArraySeq$ofRef__f_array.u[index]
  };
  hashCode__I() {
    const this$1 = $m_s_util_hashing_MurmurHash3$();
    const a = this.scm_ArraySeq$ofRef__f_array;
    return this$1.arrayHash__O__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed)
  };
  equals__O__Z(that) {
    if ((that instanceof $c_scm_ArraySeq$ofRef)) {
      const x2 = that;
      return $m_s_Array$().equals__AO__AO__Z(this.scm_ArraySeq$ofRef__f_array, x2.scm_ArraySeq$ofRef__f_array)
    } else {
      return $c_scm_ArraySeq.prototype.equals__O__Z.call(this, that)
    }
  };
  iterator__sc_Iterator() {
    return $ct_sc_ArrayOps$ArrayIterator__O__(new $c_sc_ArrayOps$ArrayIterator(), this.scm_ArraySeq$ofRef__f_array)
  };
  apply__O__O(v1) {
    return this.apply__I__O((v1 | 0))
  };
  array__O() {
    return this.scm_ArraySeq$ofRef__f_array
  };
}
function $isArrayOf_scm_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArraySeq$ofRef)))
}
const $d_scm_ArraySeq$ofRef = new $TypeData().initClass({
  scm_ArraySeq$ofRef: 0
}, false, "scala.collection.mutable.ArraySeq$ofRef", {
  scm_ArraySeq$ofRef: 1,
  scm_ArraySeq: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ArraySeq$ofRef.prototype.$classData = $d_scm_ArraySeq$ofRef;
class $c_scm_ArraySeq$ofShort extends $c_scm_ArraySeq {
  constructor(array) {
    super();
    this.scm_ArraySeq$ofShort__f_array = null;
    this.scm_ArraySeq$ofShort__f_array = array
  };
  length__I() {
    return this.scm_ArraySeq$ofShort__f_array.u.length
  };
  apply__I__S(index) {
    return this.scm_ArraySeq$ofShort__f_array.u[index]
  };
  hashCode__I() {
    const this$1 = $m_s_util_hashing_MurmurHash3$();
    const a = this.scm_ArraySeq$ofShort__f_array;
    return this$1.arrayHash$mSc$sp__AS__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed)
  };
  equals__O__Z(that) {
    if ((that instanceof $c_scm_ArraySeq$ofShort)) {
      const x2 = that;
      const a = this.scm_ArraySeq$ofShort__f_array;
      const b = x2.scm_ArraySeq$ofShort__f_array;
      return $m_ju_Arrays$().equals__AS__AS__Z(a, b)
    } else {
      return $c_scm_ArraySeq.prototype.equals__O__Z.call(this, that)
    }
  };
  iterator__sc_Iterator() {
    return new $c_sc_ArrayOps$ArrayIterator$mcS$sp(this.scm_ArraySeq$ofShort__f_array)
  };
  apply__O__O(v1) {
    return this.apply__I__S((v1 | 0))
  };
  apply__I__O(i) {
    return this.apply__I__S(i)
  };
  elemTag__s_reflect_ClassTag() {
    return $m_s_reflect_ManifestFactory$ShortManifest$()
  };
  array__O() {
    return this.scm_ArraySeq$ofShort__f_array
  };
}
function $isArrayOf_scm_ArraySeq$ofShort(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArraySeq$ofShort)))
}
const $d_scm_ArraySeq$ofShort = new $TypeData().initClass({
  scm_ArraySeq$ofShort: 0
}, false, "scala.collection.mutable.ArraySeq$ofShort", {
  scm_ArraySeq$ofShort: 1,
  scm_ArraySeq: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ArraySeq$ofShort.prototype.$classData = $d_scm_ArraySeq$ofShort;
class $c_scm_ArraySeq$ofUnit extends $c_scm_ArraySeq {
  constructor(array) {
    super();
    this.scm_ArraySeq$ofUnit__f_array = null;
    this.scm_ArraySeq$ofUnit__f_array = array
  };
  length__I() {
    return this.scm_ArraySeq$ofUnit__f_array.u.length
  };
  hashCode__I() {
    const this$1 = $m_s_util_hashing_MurmurHash3$();
    const a = this.scm_ArraySeq$ofUnit__f_array;
    return this$1.arrayHash$mVc$sp__Ajl_Void__I__I(a, this$1.s_util_hashing_MurmurHash3$__f_seqSeed)
  };
  equals__O__Z(that) {
    if ((that instanceof $c_scm_ArraySeq$ofUnit)) {
      const x2 = that;
      return (this.scm_ArraySeq$ofUnit__f_array.u.length === x2.scm_ArraySeq$ofUnit__f_array.u.length)
    } else {
      return $c_scm_ArraySeq.prototype.equals__O__Z.call(this, that)
    }
  };
  iterator__sc_Iterator() {
    return new $c_sc_ArrayOps$ArrayIterator$mcV$sp(this.scm_ArraySeq$ofUnit__f_array)
  };
  apply$mcVI$sp__I__V(index) {
    this.scm_ArraySeq$ofUnit__f_array.u[index]
  };
  apply__O__O(v1) {
    const index = (v1 | 0);
    this.apply$mcVI$sp__I__V(index)
  };
  apply__I__O(i) {
    this.apply$mcVI$sp__I__V(i)
  };
  elemTag__s_reflect_ClassTag() {
    return $m_s_reflect_ManifestFactory$UnitManifest$()
  };
  array__O() {
    return this.scm_ArraySeq$ofUnit__f_array
  };
}
function $isArrayOf_scm_ArraySeq$ofUnit(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArraySeq$ofUnit)))
}
const $d_scm_ArraySeq$ofUnit = new $TypeData().initClass({
  scm_ArraySeq$ofUnit: 0
}, false, "scala.collection.mutable.ArraySeq$ofUnit", {
  scm_ArraySeq$ofUnit: 1,
  scm_ArraySeq: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ArraySeq$ofUnit.prototype.$classData = $d_scm_ArraySeq$ofUnit;
class $c_sci_$colon$colon extends $c_sci_List {
  constructor(head, next) {
    super();
    this.sci_$colon$colon__f_head = null;
    this.sci_$colon$colon__f_next = null;
    this.sci_$colon$colon__f_head = head;
    this.sci_$colon$colon__f_next = next
  };
  head__O() {
    return this.sci_$colon$colon__f_head
  };
  productPrefix__T() {
    return "::"
  };
  productArity__I() {
    return 2
  };
  productElement__I__O(x$1) {
    switch (x$1) {
      case 0: {
        return this.sci_$colon$colon__f_head;
        break
      }
      case 1: {
        return this.sci_$colon$colon__f_next;
        break
      }
      default: {
        return $m_sr_Statics$().ioobe__I__O(x$1)
      }
    }
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  tail__O() {
    return this.sci_$colon$colon__f_next
  };
}
const $d_sci_$colon$colon = new $TypeData().initClass({
  sci_$colon$colon: 0
}, false, "scala.collection.immutable.$colon$colon", {
  sci_$colon$colon: 1,
  sci_List: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_LinearSeq: 1,
  sc_LinearSeq: 1,
  sc_LinearSeqOps: 1,
  sci_LinearSeqOps: 1,
  sc_StrictOptimizedLinearSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1,
  s_Product: 1
});
$c_sci_$colon$colon.prototype.$classData = $d_sci_$colon$colon;
class $c_sci_Nil$ extends $c_sci_List {
  constructor() {
    super();
    this.sci_Nil$__f_EmptyUnzip = null;
    $n_sci_Nil$ = this;
    this.sci_Nil$__f_EmptyUnzip = new $c_T2($m_sci_Nil$(), $m_sci_Nil$())
  };
  head__E() {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "head of empty list")
  };
  tail__E() {
    throw $ct_jl_UnsupportedOperationException__T__(new $c_jl_UnsupportedOperationException(), "tail of empty list")
  };
  knownSize__I() {
    return 0
  };
  iterator__sc_Iterator() {
    return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty
  };
  productPrefix__T() {
    return "Nil"
  };
  productArity__I() {
    return 0
  };
  productElement__I__O(x$1) {
    return $m_sr_Statics$().ioobe__I__O(x$1)
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  tail__O() {
    this.tail__E()
  };
  head__O() {
    this.head__E()
  };
}
const $d_sci_Nil$ = new $TypeData().initClass({
  sci_Nil$: 0
}, false, "scala.collection.immutable.Nil$", {
  sci_Nil$: 1,
  sci_List: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_LinearSeq: 1,
  sc_LinearSeq: 1,
  sc_LinearSeqOps: 1,
  sci_LinearSeqOps: 1,
  sc_StrictOptimizedLinearSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1,
  s_Product: 1
});
$c_sci_Nil$.prototype.$classData = $d_sci_Nil$;
let $n_sci_Nil$ = (void 0);
function $m_sci_Nil$() {
  if ((!$n_sci_Nil$)) {
    $n_sci_Nil$ = new $c_sci_Nil$()
  };
  return $n_sci_Nil$
}
const $ct_scm_StringBuilder__jl_StringBuilder__ = (function($thiz, underlying) {
  $thiz.scm_StringBuilder__f_underlying = underlying;
  return $thiz
});
const $ct_scm_StringBuilder__ = (function($thiz) {
  $ct_scm_StringBuilder__jl_StringBuilder__($thiz, $ct_jl_StringBuilder__(new $c_jl_StringBuilder()));
  return $thiz
});
class $c_scm_StringBuilder extends $c_scm_AbstractSeq {
  constructor() {
    super();
    this.scm_StringBuilder__f_underlying = null
  };
  stringPrefix__T() {
    return "IndexedSeq"
  };
  iterator__sc_Iterator() {
    const this$1 = new $c_sc_IndexedSeqView$Id(this);
    return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$1)
  };
  drop__I__O(n) {
    return $f_sc_IndexedSeqOps__drop__I__O(this, n)
  };
  lengthCompare__I__I(len) {
    const x = this.scm_StringBuilder__f_underlying.length__I();
    return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
  };
  sizeHint__I__V(size) {
    /*<skip>*/
  };
  addAll__sc_IterableOnce__scm_Growable(xs) {
    return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs)
  };
  length__I() {
    return this.scm_StringBuilder__f_underlying.length__I()
  };
  knownSize__I() {
    return this.scm_StringBuilder__f_underlying.length__I()
  };
  addOne__C__scm_StringBuilder(x) {
    const this$1 = this.scm_StringBuilder__f_underlying;
    const str = String.fromCharCode(x);
    this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content) + str);
    return this
  };
  toString__T() {
    return this.scm_StringBuilder__f_underlying.jl_StringBuilder__f_java$lang$StringBuilder$$content
  };
  appendAll__sc_IterableOnce__scm_StringBuilder(xs) {
    if ((xs instanceof $c_sci_WrappedString)) {
      const x2 = xs;
      const this$3 = this.scm_StringBuilder__f_underlying;
      $m_sci_WrappedString$();
      const str = x2.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self;
      this$3.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$3.jl_StringBuilder__f_java$lang$StringBuilder$$content) + str)
    } else if ((xs instanceof $c_scm_ArraySeq$ofChar)) {
      const x3 = xs;
      this.scm_StringBuilder__f_underlying.append__AC__jl_StringBuilder(x3.scm_ArraySeq$ofChar__f_array)
    } else if ((xs instanceof $c_scm_StringBuilder)) {
      const x4 = xs;
      const this$4 = this.scm_StringBuilder__f_underlying;
      const s = x4.scm_StringBuilder__f_underlying;
      this$4.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$4.jl_StringBuilder__f_java$lang$StringBuilder$$content) + s)
    } else {
      const ks = xs.knownSize__I();
      if ((ks !== 0)) {
        const b = this.scm_StringBuilder__f_underlying;
        if ((ks > 0)) {
          b.length__I()
        };
        const it = xs.iterator__sc_Iterator();
        while (it.hasNext__Z()) {
          const c = $uC(it.next__O());
          const str$1 = String.fromCharCode(c);
          b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + str$1)
        }
      }
    };
    return this
  };
  iterableFactory__sc_IterableFactory() {
    return $m_scm_IndexedSeq$()
  };
  result__O() {
    return this.scm_StringBuilder__f_underlying.jl_StringBuilder__f_java$lang$StringBuilder$$content
  };
  addOne__O__scm_Growable(elem) {
    return this.addOne__C__scm_StringBuilder($uC(elem))
  };
  fromSpecific__sc_IterableOnce__O(coll) {
    return $ct_scm_StringBuilder__(new $c_scm_StringBuilder()).appendAll__sc_IterableOnce__scm_StringBuilder(coll)
  };
  fromSpecific__sc_IterableOnce__sc_IterableOps(coll) {
    return $ct_scm_StringBuilder__(new $c_scm_StringBuilder()).appendAll__sc_IterableOnce__scm_StringBuilder(coll)
  };
  apply__O__O(v1) {
    const i = (v1 | 0);
    return $bC(this.scm_StringBuilder__f_underlying.charAt__I__C(i))
  };
  apply__I__O(i) {
    return $bC(this.scm_StringBuilder__f_underlying.charAt__I__C(i))
  };
}
function $isArrayOf_scm_StringBuilder(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_StringBuilder)))
}
const $d_scm_StringBuilder = new $TypeData().initClass({
  scm_StringBuilder: 0
}, false, "scala.collection.mutable.StringBuilder", {
  scm_StringBuilder: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  jl_CharSequence: 1,
  Ljava_io_Serializable: 1
});
$c_scm_StringBuilder.prototype.$classData = $d_scm_StringBuilder;
const $p_scm_ListBuffer__copyElems__V = (function($thiz) {
  const this$2 = new $c_scm_ListBuffer();
  const buf = this$2.addAll__sc_IterableOnce__scm_ListBuffer($thiz);
  $thiz.scm_ListBuffer__f_first = buf.scm_ListBuffer__f_first;
  $thiz.scm_ListBuffer__f_last0 = buf.scm_ListBuffer__f_last0;
  $thiz.scm_ListBuffer__f_aliased = false
});
const $p_scm_ListBuffer__ensureUnaliased__V = (function($thiz) {
  if ($thiz.scm_ListBuffer__f_aliased) {
    $p_scm_ListBuffer__copyElems__V($thiz)
  }
});
class $c_scm_ListBuffer extends $c_scm_AbstractBuffer {
  constructor() {
    super();
    this.scm_ListBuffer__f_first = null;
    this.scm_ListBuffer__f_last0 = null;
    this.scm_ListBuffer__f_aliased = false;
    this.scm_ListBuffer__f_len = 0;
    this.scm_ListBuffer__f_first = $m_sci_Nil$();
    this.scm_ListBuffer__f_last0 = null;
    this.scm_ListBuffer__f_aliased = false;
    this.scm_ListBuffer__f_len = 0
  };
  sizeHint__I__V(size) {
    /*<skip>*/
  };
  iterator__sc_Iterator() {
    return this.scm_ListBuffer__f_first.iterator__sc_Iterator()
  };
  apply__I__O(i) {
    const this$1 = this.scm_ListBuffer__f_first;
    return $f_sc_LinearSeqOps__apply__I__O(this$1, i)
  };
  length__I() {
    return this.scm_ListBuffer__f_len
  };
  knownSize__I() {
    return this.scm_ListBuffer__f_len
  };
  isEmpty__Z() {
    return (this.scm_ListBuffer__f_len === 0)
  };
  toList__sci_List() {
    this.scm_ListBuffer__f_aliased = (!this.isEmpty__Z());
    return this.scm_ListBuffer__f_first
  };
  addOne__O__scm_ListBuffer(elem) {
    $p_scm_ListBuffer__ensureUnaliased__V(this);
    const last1 = new $c_sci_$colon$colon(elem, $m_sci_Nil$());
    if ((this.scm_ListBuffer__f_len === 0)) {
      this.scm_ListBuffer__f_first = last1
    } else {
      this.scm_ListBuffer__f_last0.sci_$colon$colon__f_next = last1
    };
    this.scm_ListBuffer__f_last0 = last1;
    this.scm_ListBuffer__f_len = ((1 + this.scm_ListBuffer__f_len) | 0);
    return this
  };
  addAll__sc_IterableOnce__scm_ListBuffer(xs) {
    const it = xs.iterator__sc_Iterator();
    if (it.hasNext__Z()) {
      $p_scm_ListBuffer__ensureUnaliased__V(this);
      const last1 = new $c_sci_$colon$colon(it.next__O(), $m_sci_Nil$());
      if ((this.scm_ListBuffer__f_len === 0)) {
        this.scm_ListBuffer__f_first = last1
      } else {
        this.scm_ListBuffer__f_last0.sci_$colon$colon__f_next = last1
      };
      this.scm_ListBuffer__f_last0 = last1;
      this.scm_ListBuffer__f_len = ((1 + this.scm_ListBuffer__f_len) | 0);
      while (it.hasNext__Z()) {
        const last1$2 = new $c_sci_$colon$colon(it.next__O(), $m_sci_Nil$());
        this.scm_ListBuffer__f_last0.sci_$colon$colon__f_next = last1$2;
        this.scm_ListBuffer__f_last0 = last1$2;
        this.scm_ListBuffer__f_len = ((1 + this.scm_ListBuffer__f_len) | 0)
      }
    };
    return this
  };
  stringPrefix__T() {
    return "ListBuffer"
  };
  addAll__sc_IterableOnce__scm_Growable(xs) {
    return this.addAll__sc_IterableOnce__scm_ListBuffer(xs)
  };
  addOne__O__scm_Growable(elem) {
    return this.addOne__O__scm_ListBuffer(elem)
  };
  result__O() {
    return this.toList__sci_List()
  };
  apply__O__O(v1) {
    const i = (v1 | 0);
    const this$1 = this.scm_ListBuffer__f_first;
    return $f_sc_LinearSeqOps__apply__I__O(this$1, i)
  };
  iterableFactory__sc_IterableFactory() {
    return $m_scm_ListBuffer$()
  };
}
function $isArrayOf_scm_ListBuffer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ListBuffer)))
}
const $d_scm_ListBuffer = new $TypeData().initClass({
  scm_ListBuffer: 0
}, false, "scala.collection.mutable.ListBuffer", {
  scm_ListBuffer: 1,
  scm_AbstractBuffer: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_Buffer: 1,
  scm_Growable: 1,
  scm_Clearable: 1,
  scm_Shrinkable: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ListBuffer.prototype.$classData = $d_scm_ListBuffer;
const $ct_scm_ArrayBuffer__AO__I__ = (function($thiz, initialElements, initialSize) {
  $thiz.scm_ArrayBuffer__f_array = initialElements;
  $thiz.scm_ArrayBuffer__f_size0 = initialSize;
  return $thiz
});
const $ct_scm_ArrayBuffer__ = (function($thiz) {
  $ct_scm_ArrayBuffer__AO__I__($thiz, $newArrayObject($d_O.getArrayOf(), [16]), 0);
  return $thiz
});
class $c_scm_ArrayBuffer extends $c_scm_AbstractBuffer {
  constructor() {
    super();
    this.scm_ArrayBuffer__f_array = null;
    this.scm_ArrayBuffer__f_size0 = 0
  };
  iterator__sc_Iterator() {
    const this$1 = new $c_scm_ArrayBufferView(this.scm_ArrayBuffer__f_array, this.scm_ArrayBuffer__f_size0);
    return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$1)
  };
  drop__I__O(n) {
    return $f_sc_IndexedSeqOps__drop__I__O(this, n)
  };
  lengthCompare__I__I(len) {
    const x = this.scm_ArrayBuffer__f_size0;
    return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
  };
  knownSize__I() {
    return this.scm_ArrayBuffer__f_size0
  };
  ensureSize__I__V(n) {
    this.scm_ArrayBuffer__f_array = $m_scm_ArrayBuffer$().scala$collection$mutable$ArrayBuffer$$ensureSize__AO__I__I__AO(this.scm_ArrayBuffer__f_array, this.scm_ArrayBuffer__f_size0, n)
  };
  apply__I__O(n) {
    const hi = ((1 + n) | 0);
    if ((n < 0)) {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((n + " is out of bounds (min 0, max ") + (((-1) + this.scm_ArrayBuffer__f_size0) | 0)) + ")"))
    };
    if ((hi > this.scm_ArrayBuffer__f_size0)) {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((hi + " is out of bounds (min 0, max ") + (((-1) + this.scm_ArrayBuffer__f_size0) | 0)) + ")"))
    };
    return this.scm_ArrayBuffer__f_array.u[n]
  };
  update__I__O__V(index, elem) {
    const hi = ((1 + index) | 0);
    if ((index < 0)) {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((index + " is out of bounds (min 0, max ") + (((-1) + this.scm_ArrayBuffer__f_size0) | 0)) + ")"))
    };
    if ((hi > this.scm_ArrayBuffer__f_size0)) {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((hi + " is out of bounds (min 0, max ") + (((-1) + this.scm_ArrayBuffer__f_size0) | 0)) + ")"))
    };
    this.scm_ArrayBuffer__f_array.u[index] = elem
  };
  length__I() {
    return this.scm_ArrayBuffer__f_size0
  };
  addOne__O__scm_ArrayBuffer(elem) {
    const i = this.scm_ArrayBuffer__f_size0;
    this.ensureSize__I__V(((1 + this.scm_ArrayBuffer__f_size0) | 0));
    this.scm_ArrayBuffer__f_size0 = ((1 + this.scm_ArrayBuffer__f_size0) | 0);
    this.update__I__O__V(i, elem);
    return this
  };
  addAll__sc_IterableOnce__scm_ArrayBuffer(elems) {
    if ((elems instanceof $c_scm_ArrayBuffer)) {
      const x2 = elems;
      this.ensureSize__I__V(((this.scm_ArrayBuffer__f_size0 + x2.scm_ArrayBuffer__f_size0) | 0));
      $m_s_Array$().copy__O__I__O__I__I__V(x2.scm_ArrayBuffer__f_array, 0, this.scm_ArrayBuffer__f_array, this.scm_ArrayBuffer__f_size0, x2.scm_ArrayBuffer__f_size0);
      this.scm_ArrayBuffer__f_size0 = ((this.scm_ArrayBuffer__f_size0 + x2.scm_ArrayBuffer__f_size0) | 0)
    } else {
      $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems)
    };
    return this
  };
  stringPrefix__T() {
    return "ArrayBuffer"
  };
  copyToArray__O__I__I__I(xs, start, len) {
    const srcLen = this.scm_ArrayBuffer__f_size0;
    const destLen = $m_sr_ScalaRunTime$().array_length__O__I(xs);
    const x = ((len < srcLen) ? len : srcLen);
    const y = ((destLen - start) | 0);
    const x$1 = ((x < y) ? x : y);
    const copied = ((x$1 > 0) ? x$1 : 0);
    if ((copied > 0)) {
      $m_s_Array$().copy__O__I__O__I__I__V(this.scm_ArrayBuffer__f_array, 0, xs, start, copied)
    };
    return copied
  };
  addOne__O__scm_Growable(elem) {
    return this.addOne__O__scm_ArrayBuffer(elem)
  };
  iterableFactory__sc_IterableFactory() {
    return $m_scm_ArrayBuffer$()
  };
  apply__O__O(v1) {
    return this.apply__I__O((v1 | 0))
  };
}
function $isArrayOf_scm_ArrayBuffer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArrayBuffer)))
}
const $d_scm_ArrayBuffer = new $TypeData().initClass({
  scm_ArrayBuffer: 0
}, false, "scala.collection.mutable.ArrayBuffer", {
  scm_ArrayBuffer: 1,
  scm_AbstractBuffer: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_Buffer: 1,
  scm_Growable: 1,
  scm_Clearable: 1,
  scm_Shrinkable: 1,
  scm_IndexedBuffer: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ArrayBuffer.prototype.$classData = $d_scm_ArrayBuffer;
const $ct_sjs_js_WrappedArray__sjs_js_Array__ = (function($thiz, array) {
  $thiz.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array = array;
  return $thiz
});
const $ct_sjs_js_WrappedArray__ = (function($thiz) {
  $ct_sjs_js_WrappedArray__sjs_js_Array__($thiz, []);
  return $thiz
});
class $c_sjs_js_WrappedArray extends $c_scm_AbstractBuffer {
  constructor() {
    super();
    this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array = null
  };
  sizeHint__I__V(size) {
    /*<skip>*/
  };
  stringPrefix__T() {
    return "IndexedSeq"
  };
  iterator__sc_Iterator() {
    const this$1 = new $c_sc_IndexedSeqView$Id(this);
    return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$1)
  };
  drop__I__O(n) {
    return $f_sc_IndexedSeqOps__drop__I__O(this, n)
  };
  lengthCompare__I__I(len) {
    const x = (this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.length | 0);
    return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
  };
  apply__I__O(index) {
    return this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array[index]
  };
  length__I() {
    return (this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.length | 0)
  };
  knownSize__I() {
    return (this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.length | 0)
  };
  className__T() {
    return "WrappedArray"
  };
  result__O() {
    return this
  };
  addOne__O__scm_Growable(elem) {
    this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.push(elem);
    return this
  };
  apply__O__O(v1) {
    const index = (v1 | 0);
    return this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array[index]
  };
  iterableFactory__sc_IterableFactory() {
    return $m_sjs_js_WrappedArray$()
  };
}
function $isArrayOf_sjs_js_WrappedArray(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sjs_js_WrappedArray)))
}
const $d_sjs_js_WrappedArray = new $TypeData().initClass({
  sjs_js_WrappedArray: 0
}, false, "scala.scalajs.js.WrappedArray", {
  sjs_js_WrappedArray: 1,
  scm_AbstractBuffer: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_Buffer: 1,
  scm_Growable: 1,
  scm_Clearable: 1,
  scm_Shrinkable: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  scm_IndexedBuffer: 1,
  scm_Builder: 1,
  Ljava_io_Serializable: 1
});
$c_sjs_js_WrappedArray.prototype.$classData = $d_sjs_js_WrappedArray;
$L0 = new $c_RTLong(0, 0);
let $e_Simulation = (function() {
  return new $c_Lethmodel_Simulation()
});
export { $e_Simulation as Simulation };
//# sourceMappingURL=ethmodel-opt.js.map
