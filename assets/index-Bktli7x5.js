function ng(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const s in r)
                if (s !== "default" && !(s in e)) {
                    const i = Object.getOwnPropertyDescriptor(r, s);
                    i && Object.defineProperty(e, s, i.get ? i : {
                        enumerable: !0,
                        get: () => r[s]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]'))
        r(s);
    new MutationObserver(s => {
        for (const i of s)
            if (i.type === "childList")
                for (const o of i.addedNodes)
                    o.tagName === "LINK" && o.rel === "modulepreload" && r(o)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(s) {
        const i = {};
        return s.integrity && (i.integrity = s.integrity),
            s.referrerPolicy && (i.referrerPolicy = s.referrerPolicy),
            s.crossOrigin === "use-credentials" ? i.credentials = "include" : s.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin",
            i
    }
    function r(s) {
        if (s.ep)
            return;
        s.ep = !0;
        const i = n(s);
        fetch(s.href, i)
    }
}
)();
function rg(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Ff = {
    exports: {}
}
    , $i = {}
    , zf = {
        exports: {}
    }
    , I = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var is = Symbol.for("react.element")
    , sg = Symbol.for("react.portal")
    , ig = Symbol.for("react.fragment")
    , og = Symbol.for("react.strict_mode")
    , ag = Symbol.for("react.profiler")
    , lg = Symbol.for("react.provider")
    , ug = Symbol.for("react.context")
    , cg = Symbol.for("react.forward_ref")
    , dg = Symbol.for("react.suspense")
    , fg = Symbol.for("react.memo")
    , hg = Symbol.for("react.lazy")
    , ec = Symbol.iterator;
function pg(e) {
    return e === null || typeof e != "object" ? null : (e = ec && e[ec] || e["@@iterator"],
        typeof e == "function" ? e : null)
}
var Bf = {
    isMounted: function () {
        return !1
    },
    enqueueForceUpdate: function () { },
    enqueueReplaceState: function () { },
    enqueueSetState: function () { }
}
    , Uf = Object.assign
    , $f = {};
function Jn(e, t, n) {
    this.props = e,
        this.context = t,
        this.refs = $f,
        this.updater = n || Bf
}
Jn.prototype.isReactComponent = {};
Jn.prototype.setState = function (e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
    ;
Jn.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
    ;
function Hf() { }
Hf.prototype = Jn.prototype;
function wl(e, t, n) {
    this.props = e,
        this.context = t,
        this.refs = $f,
        this.updater = n || Bf
}
var Sl = wl.prototype = new Hf;
Sl.constructor = wl;
Uf(Sl, Jn.prototype);
Sl.isPureReactComponent = !0;
var tc = Array.isArray
    , Wf = Object.prototype.hasOwnProperty
    , jl = {
        current: null
    }
    , Kf = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
function Gf(e, t, n) {
    var r, s = {}, i = null, o = null;
    if (t != null)
        for (r in t.ref !== void 0 && (o = t.ref),
            t.key !== void 0 && (i = "" + t.key),
            t)
            Wf.call(t, r) && !Kf.hasOwnProperty(r) && (s[r] = t[r]);
    var l = arguments.length - 2;
    if (l === 1)
        s.children = n;
    else if (1 < l) {
        for (var u = Array(l), c = 0; c < l; c++)
            u[c] = arguments[c + 2];
        s.children = u
    }
    if (e && e.defaultProps)
        for (r in l = e.defaultProps,
            l)
            s[r] === void 0 && (s[r] = l[r]);
    return {
        $$typeof: is,
        type: e,
        key: i,
        ref: o,
        props: s,
        _owner: jl.current
    }
}
function mg(e, t) {
    return {
        $$typeof: is,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function kl(e) {
    return typeof e == "object" && e !== null && e.$$typeof === is
}
function gg(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function (n) {
        return t[n]
    })
}
var nc = /\/+/g;
function yo(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? gg("" + e.key) : t.toString(36)
}
function Ks(e, t, n, r, s) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var o = !1;
    if (e === null)
        o = !0;
    else
        switch (i) {
            case "string":
            case "number":
                o = !0;
                break;
            case "object":
                switch (e.$$typeof) {
                    case is:
                    case sg:
                        o = !0
                }
        }
    if (o)
        return o = e,
            s = s(o),
            e = r === "" ? "." + yo(o, 0) : r,
            tc(s) ? (n = "",
                e != null && (n = e.replace(nc, "$&/") + "/"),
                Ks(s, t, n, "", function (c) {
                    return c
                })) : s != null && (kl(s) && (s = mg(s, n + (!s.key || o && o.key === s.key ? "" : ("" + s.key).replace(nc, "$&/") + "/") + e)),
                    t.push(s)),
            1;
    if (o = 0,
        r = r === "" ? "." : r + ":",
        tc(e))
        for (var l = 0; l < e.length; l++) {
            i = e[l];
            var u = r + yo(i, l);
            o += Ks(i, t, n, u, s)
        }
    else if (u = pg(e),
        typeof u == "function")
        for (e = u.call(e),
            l = 0; !(i = e.next()).done;)
            i = i.value,
                u = r + yo(i, l++),
                o += Ks(i, t, n, u, s);
    else if (i === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return o
}
function Cs(e, t, n) {
    if (e == null)
        return e;
    var r = []
        , s = 0;
    return Ks(e, r, "", "", function (i) {
        return t.call(n, i, s++)
    }),
        r
}
function yg(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
            t.then(function (n) {
                (e._status === 0 || e._status === -1) && (e._status = 1,
                    e._result = n)
            }, function (n) {
                (e._status === 0 || e._status === -1) && (e._status = 2,
                    e._result = n)
            }),
            e._status === -1 && (e._status = 0,
                e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var je = {
    current: null
}
    , Gs = {
        transition: null
    }
    , vg = {
        ReactCurrentDispatcher: je,
        ReactCurrentBatchConfig: Gs,
        ReactCurrentOwner: jl
    };
function Xf() {
    throw Error("act(...) is not supported in production builds of React.")
}
I.Children = {
    map: Cs,
    forEach: function (e, t, n) {
        Cs(e, function () {
            t.apply(this, arguments)
        }, n)
    },
    count: function (e) {
        var t = 0;
        return Cs(e, function () {
            t++
        }),
            t
    },
    toArray: function (e) {
        return Cs(e, function (t) {
            return t
        }) || []
    },
    only: function (e) {
        if (!kl(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
I.Component = Jn;
I.Fragment = ig;
I.Profiler = ag;
I.PureComponent = wl;
I.StrictMode = og;
I.Suspense = dg;
I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vg;
I.act = Xf;
I.cloneElement = function (e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Uf({}, e.props)
        , s = e.key
        , i = e.ref
        , o = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (i = t.ref,
            o = jl.current),
            t.key !== void 0 && (s = "" + t.key),
            e.type && e.type.defaultProps)
            var l = e.type.defaultProps;
        for (u in t)
            Wf.call(t, u) && !Kf.hasOwnProperty(u) && (r[u] = t[u] === void 0 && l !== void 0 ? l[u] : t[u])
    }
    var u = arguments.length - 2;
    if (u === 1)
        r.children = n;
    else if (1 < u) {
        l = Array(u);
        for (var c = 0; c < u; c++)
            l[c] = arguments[c + 2];
        r.children = l
    }
    return {
        $$typeof: is,
        type: e.type,
        key: s,
        ref: i,
        props: r,
        _owner: o
    }
}
    ;
I.createContext = function (e) {
    return e = {
        $$typeof: ug,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
        e.Provider = {
            $$typeof: lg,
            _context: e
        },
        e.Consumer = e
}
    ;
I.createElement = Gf;
I.createFactory = function (e) {
    var t = Gf.bind(null, e);
    return t.type = e,
        t
}
    ;
I.createRef = function () {
    return {
        current: null
    }
}
    ;
I.forwardRef = function (e) {
    return {
        $$typeof: cg,
        render: e
    }
}
    ;
I.isValidElement = kl;
I.lazy = function (e) {
    return {
        $$typeof: hg,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: yg
    }
}
    ;
I.memo = function (e, t) {
    return {
        $$typeof: fg,
        type: e,
        compare: t === void 0 ? null : t
    }
}
    ;
I.startTransition = function (e) {
    var t = Gs.transition;
    Gs.transition = {};
    try {
        e()
    } finally {
        Gs.transition = t
    }
}
    ;
I.unstable_act = Xf;
I.useCallback = function (e, t) {
    return je.current.useCallback(e, t)
}
    ;
I.useContext = function (e) {
    return je.current.useContext(e)
}
    ;
I.useDebugValue = function () { }
    ;
I.useDeferredValue = function (e) {
    return je.current.useDeferredValue(e)
}
    ;
I.useEffect = function (e, t) {
    return je.current.useEffect(e, t)
}
    ;
I.useId = function () {
    return je.current.useId()
}
    ;
I.useImperativeHandle = function (e, t, n) {
    return je.current.useImperativeHandle(e, t, n)
}
    ;
I.useInsertionEffect = function (e, t) {
    return je.current.useInsertionEffect(e, t)
}
    ;
I.useLayoutEffect = function (e, t) {
    return je.current.useLayoutEffect(e, t)
}
    ;
I.useMemo = function (e, t) {
    return je.current.useMemo(e, t)
}
    ;
I.useReducer = function (e, t, n) {
    return je.current.useReducer(e, t, n)
}
    ;
I.useRef = function (e) {
    return je.current.useRef(e)
}
    ;
I.useState = function (e) {
    return je.current.useState(e)
}
    ;
I.useSyncExternalStore = function (e, t, n) {
    return je.current.useSyncExternalStore(e, t, n)
}
    ;
I.useTransition = function () {
    return je.current.useTransition()
}
    ;
I.version = "18.3.1";
zf.exports = I;
var x = zf.exports;
const xg = rg(x)
    , wg = ng({
        __proto__: null,
        default: xg
    }, [x]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sg = x
    , jg = Symbol.for("react.element")
    , kg = Symbol.for("react.fragment")
    , Cg = Object.prototype.hasOwnProperty
    , Ng = Sg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
    , Tg = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
function Yf(e, t, n) {
    var r, s = {}, i = null, o = null;
    n !== void 0 && (i = "" + n),
        t.key !== void 0 && (i = "" + t.key),
        t.ref !== void 0 && (o = t.ref);
    for (r in t)
        Cg.call(t, r) && !Tg.hasOwnProperty(r) && (s[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
            t)
            s[r] === void 0 && (s[r] = t[r]);
    return {
        $$typeof: jg,
        type: e,
        key: i,
        ref: o,
        props: s,
        _owner: Ng.current
    }
}
$i.Fragment = kg;
$i.jsx = Yf;
$i.jsxs = Yf;
Ff.exports = $i;
var a = Ff.exports
    , Qf = {
        exports: {}
    }
    , Ve = {}
    , qf = {
        exports: {}
    }
    , Zf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function (e) {
    function t(P, L) {
        var V = P.length;
        P.push(L);
        e: for (; 0 < V;) {
            var q = V - 1 >>> 1
                , oe = P[q];
            if (0 < s(oe, L))
                P[q] = L,
                    P[V] = oe,
                    V = q;
            else
                break e
        }
    }
    function n(P) {
        return P.length === 0 ? null : P[0]
    }
    function r(P) {
        if (P.length === 0)
            return null;
        var L = P[0]
            , V = P.pop();
        if (V !== L) {
            P[0] = V;
            e: for (var q = 0, oe = P.length, js = oe >>> 1; q < js;) {
                var Gt = 2 * (q + 1) - 1
                    , go = P[Gt]
                    , Xt = Gt + 1
                    , ks = P[Xt];
                if (0 > s(go, V))
                    Xt < oe && 0 > s(ks, go) ? (P[q] = ks,
                        P[Xt] = V,
                        q = Xt) : (P[q] = go,
                            P[Gt] = V,
                            q = Gt);
                else if (Xt < oe && 0 > s(ks, V))
                    P[q] = ks,
                        P[Xt] = V,
                        q = Xt;
                else
                    break e
            }
        }
        return L
    }
    function s(P, L) {
        var V = P.sortIndex - L.sortIndex;
        return V !== 0 ? V : P.id - L.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function () {
            return i.now()
        }
    } else {
        var o = Date
            , l = o.now();
        e.unstable_now = function () {
            return o.now() - l
        }
    }
    var u = []
        , c = []
        , d = 1
        , f = null
        , h = 3
        , y = !1
        , v = !1
        , w = !1
        , j = typeof setTimeout == "function" ? setTimeout : null
        , m = typeof clearTimeout == "function" ? clearTimeout : null
        , p = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function g(P) {
        for (var L = n(c); L !== null;) {
            if (L.callback === null)
                r(c);
            else if (L.startTime <= P)
                r(c),
                    L.sortIndex = L.expirationTime,
                    t(u, L);
            else
                break;
            L = n(c)
        }
    }
    function S(P) {
        if (w = !1,
            g(P),
            !v)
            if (n(u) !== null)
                v = !0,
                    Ss(k);
            else {
                var L = n(c);
                L !== null && ne(S, L.startTime - P)
            }
    }
    function k(P, L) {
        v = !1,
            w && (w = !1,
                m(N),
                N = -1),
            y = !0;
        var V = h;
        try {
            for (g(L),
                f = n(u); f !== null && (!(f.expirationTime > L) || P && !ie());) {
                var q = f.callback;
                if (typeof q == "function") {
                    f.callback = null,
                        h = f.priorityLevel;
                    var oe = q(f.expirationTime <= L);
                    L = e.unstable_now(),
                        typeof oe == "function" ? f.callback = oe : f === n(u) && r(u),
                        g(L)
                } else
                    r(u);
                f = n(u)
            }
            if (f !== null)
                var js = !0;
            else {
                var Gt = n(c);
                Gt !== null && ne(S, Gt.startTime - L),
                    js = !1
            }
            return js
        } finally {
            f = null,
                h = V,
                y = !1
        }
    }
    var T = !1
        , E = null
        , N = -1
        , _ = 5
        , R = -1;
    function ie() {
        return !(e.unstable_now() - R < _)
    }
    function xt() {
        if (E !== null) {
            var P = e.unstable_now();
            R = P;
            var L = !0;
            try {
                L = E(!0, P)
            } finally {
                L ? Kt() : (T = !1,
                    E = null)
            }
        } else
            T = !1
    }
    var Kt;
    if (typeof p == "function")
        Kt = function () {
            p(xt)
        }
            ;
    else if (typeof MessageChannel < "u") {
        var ir = new MessageChannel
            , Ju = ir.port2;
        ir.port1.onmessage = xt,
            Kt = function () {
                Ju.postMessage(null)
            }
    } else
        Kt = function () {
            j(xt, 0)
        }
            ;
    function Ss(P) {
        E = P,
            T || (T = !0,
                Kt())
    }
    function ne(P, L) {
        N = j(function () {
            P(e.unstable_now())
        }, L)
    }
    e.unstable_IdlePriority = 5,
        e.unstable_ImmediatePriority = 1,
        e.unstable_LowPriority = 4,
        e.unstable_NormalPriority = 3,
        e.unstable_Profiling = null,
        e.unstable_UserBlockingPriority = 2,
        e.unstable_cancelCallback = function (P) {
            P.callback = null
        }
        ,
        e.unstable_continueExecution = function () {
            v || y || (v = !0,
                Ss(k))
        }
        ,
        e.unstable_forceFrameRate = function (P) {
            0 > P || 125 < P ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : _ = 0 < P ? Math.floor(1e3 / P) : 5
        }
        ,
        e.unstable_getCurrentPriorityLevel = function () {
            return h
        }
        ,
        e.unstable_getFirstCallbackNode = function () {
            return n(u)
        }
        ,
        e.unstable_next = function (P) {
            switch (h) {
                case 1:
                case 2:
                case 3:
                    var L = 3;
                    break;
                default:
                    L = h
            }
            var V = h;
            h = L;
            try {
                return P()
            } finally {
                h = V
            }
        }
        ,
        e.unstable_pauseExecution = function () { }
        ,
        e.unstable_requestPaint = function () { }
        ,
        e.unstable_runWithPriority = function (P, L) {
            switch (P) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    P = 3
            }
            var V = h;
            h = P;
            try {
                return L()
            } finally {
                h = V
            }
        }
        ,
        e.unstable_scheduleCallback = function (P, L, V) {
            var q = e.unstable_now();
            switch (typeof V == "object" && V !== null ? (V = V.delay,
                V = typeof V == "number" && 0 < V ? q + V : q) : V = q,
            P) {
                case 1:
                    var oe = -1;
                    break;
                case 2:
                    oe = 250;
                    break;
                case 5:
                    oe = 1073741823;
                    break;
                case 4:
                    oe = 1e4;
                    break;
                default:
                    oe = 5e3
            }
            return oe = V + oe,
                P = {
                    id: d++,
                    callback: L,
                    priorityLevel: P,
                    startTime: V,
                    expirationTime: oe,
                    sortIndex: -1
                },
                V > q ? (P.sortIndex = V,
                    t(c, P),
                    n(u) === null && P === n(c) && (w ? (m(N),
                        N = -1) : w = !0,
                        ne(S, V - q))) : (P.sortIndex = oe,
                            t(u, P),
                            v || y || (v = !0,
                                Ss(k))),
                P
        }
        ,
        e.unstable_shouldYield = ie,
        e.unstable_wrapCallback = function (P) {
            var L = h;
            return function () {
                var V = h;
                h = L;
                try {
                    return P.apply(this, arguments)
                } finally {
                    h = V
                }
            }
        }
}
)(Zf);
qf.exports = Zf;
var Eg = qf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pg = x
    , Re = Eg;
function C(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Jf = new Set
    , Vr = {};
function hn(e, t) {
    $n(e, t),
        $n(e + "Capture", t)
}
function $n(e, t) {
    for (Vr[e] = t,
        e = 0; e < t.length; e++)
        Jf.add(t[e])
}
var ht = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
    , ia = Object.prototype.hasOwnProperty
    , Ag = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
    , rc = {}
    , sc = {};
function bg(e) {
    return ia.call(sc, e) ? !0 : ia.call(rc, e) ? !1 : Ag.test(e) ? sc[e] = !0 : (rc[e] = !0,
        !1)
}
function Mg(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
                e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}
function Dg(e, t, n, r) {
    if (t === null || typeof t > "u" || Mg(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
            case 3:
                return !t;
            case 4:
                return t === !1;
            case 5:
                return isNaN(t);
            case 6:
                return isNaN(t) || 1 > t
        }
    return !1
}
function ke(e, t, n, r, s, i, o) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
        this.attributeName = r,
        this.attributeNamespace = s,
        this.mustUseProperty = n,
        this.propertyName = e,
        this.type = t,
        this.sanitizeURL = i,
        this.removeEmptyString = o
}
var he = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) {
    he[e] = new ke(e, 0, !1, e, null, !1, !1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (e) {
    var t = e[0];
    he[t] = new ke(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    he[e] = new ke(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
    he[e] = new ke(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (e) {
    he[e] = new ke(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function (e) {
    he[e] = new ke(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function (e) {
    he[e] = new ke(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function (e) {
    he[e] = new ke(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function (e) {
    he[e] = new ke(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var Cl = /[\-:]([a-z])/g;
function Nl(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (e) {
    var t = e.replace(Cl, Nl);
    he[t] = new ke(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
    var t = e.replace(Cl, Nl);
    he[t] = new ke(t, 1, !1, e, "", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var t = e.replace(Cl, Nl);
    he[t] = new ke(t, 1, !1, e, "", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function (e) {
    he[e] = new ke(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
he.xlinkHref = new ke("xlinkHref", 1, !1, "xlink:href", "", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
    he[e] = new ke(e, 1, !1, e.toLowerCase(), null, !0, !0)
});
function Tl(e, t, n, r) {
    var s = he.hasOwnProperty(t) ? he[t] : null;
    (s !== null ? s.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Dg(t, n, s, r) && (n = null),
        r || s === null ? bg(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : s.mustUseProperty ? e[s.propertyName] = n === null ? s.type === 3 ? !1 : "" : n : (t = s.attributeName,
            r = s.attributeNamespace,
            n === null ? e.removeAttribute(t) : (s = s.type,
                n = s === 3 || s === 4 && n === !0 ? "" : "" + n,
                r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var vt = Pg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
    , Ns = Symbol.for("react.element")
    , wn = Symbol.for("react.portal")
    , Sn = Symbol.for("react.fragment")
    , El = Symbol.for("react.strict_mode")
    , oa = Symbol.for("react.profiler")
    , eh = Symbol.for("react.provider")
    , th = Symbol.for("react.context")
    , Pl = Symbol.for("react.forward_ref")
    , aa = Symbol.for("react.suspense")
    , la = Symbol.for("react.suspense_list")
    , Al = Symbol.for("react.memo")
    , jt = Symbol.for("react.lazy")
    , nh = Symbol.for("react.offscreen")
    , ic = Symbol.iterator;
function or(e) {
    return e === null || typeof e != "object" ? null : (e = ic && e[ic] || e["@@iterator"],
        typeof e == "function" ? e : null)
}
var X = Object.assign, vo;
function mr(e) {
    if (vo === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            vo = t && t[1] || ""
        }
    return `
` + vo + e
}
var xo = !1;
function wo(e, t) {
    if (!e || xo)
        return "";
    xo = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function () {
                throw Error()
            }
                ,
                Object.defineProperty(t.prototype, "props", {
                    set: function () {
                        throw Error()
                    }
                }),
                typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (c) {
                    var r = c
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (c) {
                    r = c
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (c) {
                r = c
            }
            e()
        }
    } catch (c) {
        if (c && r && typeof c.stack == "string") {
            for (var s = c.stack.split(`
`), i = r.stack.split(`
`), o = s.length - 1, l = i.length - 1; 1 <= o && 0 <= l && s[o] !== i[l];)
                l--;
            for (; 1 <= o && 0 <= l; o--,
                l--)
                if (s[o] !== i[l]) {
                    if (o !== 1 || l !== 1)
                        do
                            if (o--,
                                l--,
                                0 > l || s[o] !== i[l]) {
                                var u = `
` + s[o].replace(" at new ", " at ");
                                return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)),
                                    u
                            }
                        while (1 <= o && 0 <= l);
                    break
                }
        }
    } finally {
        xo = !1,
            Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? mr(e) : ""
}
function Rg(e) {
    switch (e.tag) {
        case 5:
            return mr(e.type);
        case 16:
            return mr("Lazy");
        case 13:
            return mr("Suspense");
        case 19:
            return mr("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = wo(e.type, !1),
                e;
        case 11:
            return e = wo(e.type.render, !1),
                e;
        case 1:
            return e = wo(e.type, !0),
                e;
        default:
            return ""
    }
}
function ua(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
        case Sn:
            return "Fragment";
        case wn:
            return "Portal";
        case oa:
            return "Profiler";
        case El:
            return "StrictMode";
        case aa:
            return "Suspense";
        case la:
            return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
            case th:
                return (e.displayName || "Context") + ".Consumer";
            case eh:
                return (e._context.displayName || "Context") + ".Provider";
            case Pl:
                var t = e.render;
                return e = e.displayName,
                    e || (e = t.displayName || t.name || "",
                        e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
                    e;
            case Al:
                return t = e.displayName || null,
                    t !== null ? t : ua(e.type) || "Memo";
            case jt:
                t = e._payload,
                    e = e._init;
                try {
                    return ua(e(t))
                } catch { }
        }
    return null
}
function Lg(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = t.render,
                e = e.displayName || e.name || "",
                t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return ua(t);
        case 8:
            return t === El ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function")
                return t.displayName || t.name || null;
            if (typeof t == "string")
                return t
    }
    return null
}
function Ot(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
    }
}
function rh(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function Vg(e) {
    var t = rh(e) ? "checked" : "value"
        , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
        , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var s = n.get
            , i = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function () {
                return s.call(this)
            },
            set: function (o) {
                r = "" + o,
                    i.call(this, o)
            }
        }),
            Object.defineProperty(e, t, {
                enumerable: n.enumerable
            }),
        {
            getValue: function () {
                return r
            },
            setValue: function (o) {
                r = "" + o
            },
            stopTracking: function () {
                e._valueTracker = null,
                    delete e[t]
            }
        }
    }
}
function Ts(e) {
    e._valueTracker || (e._valueTracker = Vg(e))
}
function sh(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
        , r = "";
    return e && (r = rh(e) ? e.checked ? "true" : "false" : e.value),
        e = r,
        e !== n ? (t.setValue(e),
            !0) : !1
}
function ai(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
        typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function ca(e, t) {
    var n = t.checked;
    return X({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function oc(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
        , r = t.checked != null ? t.checked : t.defaultChecked;
    n = Ot(t.value != null ? t.value : n),
        e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
        }
}
function ih(e, t) {
    t = t.checked,
        t != null && Tl(e, "checked", t, !1)
}
function da(e, t) {
    ih(e, t);
    var n = Ot(t.value)
        , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? fa(e, t.type, n) : t.hasOwnProperty("defaultValue") && fa(e, t.type, Ot(t.defaultValue)),
        t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function ac(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
            n || t === e.value || (e.value = t),
            e.defaultValue = t
    }
    n = e.name,
        n !== "" && (e.name = ""),
        e.defaultChecked = !!e._wrapperState.initialChecked,
        n !== "" && (e.name = n)
}
function fa(e, t, n) {
    (t !== "number" || ai(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var gr = Array.isArray;
function _n(e, t, n, r) {
    if (e = e.options,
        t) {
        t = {};
        for (var s = 0; s < n.length; s++)
            t["$" + n[s]] = !0;
        for (n = 0; n < e.length; n++)
            s = t.hasOwnProperty("$" + e[n].value),
                e[n].selected !== s && (e[n].selected = s),
                s && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + Ot(n),
            t = null,
            s = 0; s < e.length; s++) {
            if (e[s].value === n) {
                e[s].selected = !0,
                    r && (e[s].defaultSelected = !0);
                return
            }
            t !== null || e[s].disabled || (t = e[s])
        }
        t !== null && (t.selected = !0)
    }
}
function ha(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(C(91));
    return X({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function lc(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
            t = t.defaultValue,
            n != null) {
            if (t != null)
                throw Error(C(92));
            if (gr(n)) {
                if (1 < n.length)
                    throw Error(C(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
            n = t
    }
    e._wrapperState = {
        initialValue: Ot(n)
    }
}
function oh(e, t) {
    var n = Ot(t.value)
        , r = Ot(t.defaultValue);
    n != null && (n = "" + n,
        n !== e.value && (e.value = n),
        t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
        r != null && (e.defaultValue = "" + r)
}
function uc(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function ah(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}
function pa(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? ah(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Es, lh = function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function (t, n, r, s) {
        MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, s)
        })
    }
        : e
}(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
    else {
        for (Es = Es || document.createElement("div"),
            Es.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Es.firstChild; e.firstChild;)
            e.removeChild(e.firstChild);
        for (; t.firstChild;)
            e.appendChild(t.firstChild)
    }
});
function Ir(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var jr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
    , Ig = ["Webkit", "ms", "Moz", "O"];
Object.keys(jr).forEach(function (e) {
    Ig.forEach(function (t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
            jr[t] = jr[e]
    })
});
function uh(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || jr.hasOwnProperty(e) && jr[e] ? ("" + t).trim() : t + "px"
}
function ch(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
                , s = uh(n, t[n], r);
            n === "float" && (n = "cssFloat"),
                r ? e.setProperty(n, s) : e[n] = s
        }
}
var _g = X({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function ma(e, t) {
    if (t) {
        if (_g[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(C(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(C(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
                throw Error(C(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(C(62))
    }
}
function ga(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
    }
}
var ya = null;
function bl(e) {
    return e = e.target || e.srcElement || window,
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
}
var va = null
    , On = null
    , Fn = null;
function cc(e) {
    if (e = ls(e)) {
        if (typeof va != "function")
            throw Error(C(280));
        var t = e.stateNode;
        t && (t = Xi(t),
            va(e.stateNode, e.type, t))
    }
}
function dh(e) {
    On ? Fn ? Fn.push(e) : Fn = [e] : On = e
}
function fh() {
    if (On) {
        var e = On
            , t = Fn;
        if (Fn = On = null,
            cc(e),
            t)
            for (e = 0; e < t.length; e++)
                cc(t[e])
    }
}
function hh(e, t) {
    return e(t)
}
function ph() { }
var So = !1;
function mh(e, t, n) {
    if (So)
        return e(t, n);
    So = !0;
    try {
        return hh(e, t, n)
    } finally {
        So = !1,
            (On !== null || Fn !== null) && (ph(),
                fh())
    }
}
function _r(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = Xi(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) || (e = e.type,
                r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
                e = !r;
            break e;
        default:
            e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(C(231, t, typeof n));
    return n
}
var xa = !1;
if (ht)
    try {
        var ar = {};
        Object.defineProperty(ar, "passive", {
            get: function () {
                xa = !0
            }
        }),
            window.addEventListener("test", ar, ar),
            window.removeEventListener("test", ar, ar)
    } catch {
        xa = !1
    }
function Og(e, t, n, r, s, i, o, l, u) {
    var c = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, c)
    } catch (d) {
        this.onError(d)
    }
}
var kr = !1
    , li = null
    , ui = !1
    , wa = null
    , Fg = {
        onError: function (e) {
            kr = !0,
                li = e
        }
    };
function zg(e, t, n, r, s, i, o, l, u) {
    kr = !1,
        li = null,
        Og.apply(Fg, arguments)
}
function Bg(e, t, n, r, s, i, o, l, u) {
    if (zg.apply(this, arguments),
        kr) {
        if (kr) {
            var c = li;
            kr = !1,
                li = null
        } else
            throw Error(C(198));
        ui || (ui = !0,
            wa = c)
    }
}
function pn(e) {
    var t = e
        , n = e;
    if (e.alternate)
        for (; t.return;)
            t = t.return;
    else {
        e = t;
        do
            t = e,
                t.flags & 4098 && (n = t.return),
                e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function gh(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
            e !== null && (t = e.memoizedState)),
            t !== null)
            return t.dehydrated
    }
    return null
}
function dc(e) {
    if (pn(e) !== e)
        throw Error(C(188))
}
function Ug(e) {
    var t = e.alternate;
    if (!t) {
        if (t = pn(e),
            t === null)
            throw Error(C(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ;) {
        var s = n.return;
        if (s === null)
            break;
        var i = s.alternate;
        if (i === null) {
            if (r = s.return,
                r !== null) {
                n = r;
                continue
            }
            break
        }
        if (s.child === i.child) {
            for (i = s.child; i;) {
                if (i === n)
                    return dc(s),
                        e;
                if (i === r)
                    return dc(s),
                        t;
                i = i.sibling
            }
            throw Error(C(188))
        }
        if (n.return !== r.return)
            n = s,
                r = i;
        else {
            for (var o = !1, l = s.child; l;) {
                if (l === n) {
                    o = !0,
                        n = s,
                        r = i;
                    break
                }
                if (l === r) {
                    o = !0,
                        r = s,
                        n = i;
                    break
                }
                l = l.sibling
            }
            if (!o) {
                for (l = i.child; l;) {
                    if (l === n) {
                        o = !0,
                            n = i,
                            r = s;
                        break
                    }
                    if (l === r) {
                        o = !0,
                            r = i,
                            n = s;
                        break
                    }
                    l = l.sibling
                }
                if (!o)
                    throw Error(C(189))
            }
        }
        if (n.alternate !== r)
            throw Error(C(190))
    }
    if (n.tag !== 3)
        throw Error(C(188));
    return n.stateNode.current === n ? e : t
}
function yh(e) {
    return e = Ug(e),
        e !== null ? vh(e) : null
}
function vh(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null;) {
        var t = vh(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var xh = Re.unstable_scheduleCallback
    , fc = Re.unstable_cancelCallback
    , $g = Re.unstable_shouldYield
    , Hg = Re.unstable_requestPaint
    , J = Re.unstable_now
    , Wg = Re.unstable_getCurrentPriorityLevel
    , Ml = Re.unstable_ImmediatePriority
    , wh = Re.unstable_UserBlockingPriority
    , ci = Re.unstable_NormalPriority
    , Kg = Re.unstable_LowPriority
    , Sh = Re.unstable_IdlePriority
    , Hi = null
    , nt = null;
function Gg(e) {
    if (nt && typeof nt.onCommitFiberRoot == "function")
        try {
            nt.onCommitFiberRoot(Hi, e, void 0, (e.current.flags & 128) === 128)
        } catch { }
}
var Qe = Math.clz32 ? Math.clz32 : Qg
    , Xg = Math.log
    , Yg = Math.LN2;
function Qg(e) {
    return e >>>= 0,
        e === 0 ? 32 : 31 - (Xg(e) / Yg | 0) | 0
}
var Ps = 64
    , As = 4194304;
function yr(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
    }
}
function di(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
        , s = e.suspendedLanes
        , i = e.pingedLanes
        , o = n & 268435455;
    if (o !== 0) {
        var l = o & ~s;
        l !== 0 ? r = yr(l) : (i &= o,
            i !== 0 && (r = yr(i)))
    } else
        o = n & ~s,
            o !== 0 ? r = yr(o) : i !== 0 && (r = yr(i));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & s) && (s = r & -r,
        i = t & -t,
        s >= i || s === 16 && (i & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
        t = e.entangledLanes,
        t !== 0)
        for (e = e.entanglements,
            t &= r; 0 < t;)
            n = 31 - Qe(t),
                s = 1 << n,
                r |= e[n],
                t &= ~s;
    return r
}
function qg(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
    }
}
function Zg(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, s = e.expirationTimes, i = e.pendingLanes; 0 < i;) {
        var o = 31 - Qe(i)
            , l = 1 << o
            , u = s[o];
        u === -1 ? (!(l & n) || l & r) && (s[o] = qg(l, t)) : u <= t && (e.expiredLanes |= l),
            i &= ~l
    }
}
function Sa(e) {
    return e = e.pendingLanes & -1073741825,
        e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function jh() {
    var e = Ps;
    return Ps <<= 1,
        !(Ps & 4194240) && (Ps = 64),
        e
}
function jo(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function os(e, t, n) {
    e.pendingLanes |= t,
        t !== 536870912 && (e.suspendedLanes = 0,
            e.pingedLanes = 0),
        e = e.eventTimes,
        t = 31 - Qe(t),
        e[t] = n
}
function Jg(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
        e.suspendedLanes = 0,
        e.pingedLanes = 0,
        e.expiredLanes &= t,
        e.mutableReadLanes &= t,
        e.entangledLanes &= t,
        t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var s = 31 - Qe(n)
            , i = 1 << s;
        t[s] = 0,
            r[s] = -1,
            e[s] = -1,
            n &= ~i
    }
}
function Dl(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - Qe(n)
            , s = 1 << r;
        s & t | e[r] & t && (e[r] |= t),
            n &= ~s
    }
}
var F = 0;
function kh(e) {
    return e &= -e,
        1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Ch, Rl, Nh, Th, Eh, ja = !1, bs = [], At = null, bt = null, Mt = null, Or = new Map, Fr = new Map, Ct = [], ey = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function hc(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            At = null;
            break;
        case "dragenter":
        case "dragleave":
            bt = null;
            break;
        case "mouseover":
        case "mouseout":
            Mt = null;
            break;
        case "pointerover":
        case "pointerout":
            Or.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Fr.delete(t.pointerId)
    }
}
function lr(e, t, n, r, s, i) {
    return e === null || e.nativeEvent !== i ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [s]
    },
        t !== null && (t = ls(t),
            t !== null && Rl(t)),
        e) : (e.eventSystemFlags |= r,
            t = e.targetContainers,
            s !== null && t.indexOf(s) === -1 && t.push(s),
            e)
}
function ty(e, t, n, r, s) {
    switch (t) {
        case "focusin":
            return At = lr(At, e, t, n, r, s),
                !0;
        case "dragenter":
            return bt = lr(bt, e, t, n, r, s),
                !0;
        case "mouseover":
            return Mt = lr(Mt, e, t, n, r, s),
                !0;
        case "pointerover":
            var i = s.pointerId;
            return Or.set(i, lr(Or.get(i) || null, e, t, n, r, s)),
                !0;
        case "gotpointercapture":
            return i = s.pointerId,
                Fr.set(i, lr(Fr.get(i) || null, e, t, n, r, s)),
                !0
    }
    return !1
}
function Ph(e) {
    var t = en(e.target);
    if (t !== null) {
        var n = pn(t);
        if (n !== null) {
            if (t = n.tag,
                t === 13) {
                if (t = gh(n),
                    t !== null) {
                    e.blockedOn = t,
                        Eh(e.priority, function () {
                            Nh(n)
                        });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function Xs(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = ka(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            ya = r,
                n.target.dispatchEvent(r),
                ya = null
        } else
            return t = ls(n),
                t !== null && Rl(t),
                e.blockedOn = n,
                !1;
        t.shift()
    }
    return !0
}
function pc(e, t, n) {
    Xs(e) && n.delete(t)
}
function ny() {
    ja = !1,
        At !== null && Xs(At) && (At = null),
        bt !== null && Xs(bt) && (bt = null),
        Mt !== null && Xs(Mt) && (Mt = null),
        Or.forEach(pc),
        Fr.forEach(pc)
}
function ur(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
        ja || (ja = !0,
            Re.unstable_scheduleCallback(Re.unstable_NormalPriority, ny)))
}
function zr(e) {
    function t(s) {
        return ur(s, e)
    }
    if (0 < bs.length) {
        ur(bs[0], e);
        for (var n = 1; n < bs.length; n++) {
            var r = bs[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (At !== null && ur(At, e),
        bt !== null && ur(bt, e),
        Mt !== null && ur(Mt, e),
        Or.forEach(t),
        Fr.forEach(t),
        n = 0; n < Ct.length; n++)
        r = Ct[n],
            r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Ct.length && (n = Ct[0],
        n.blockedOn === null);)
        Ph(n),
            n.blockedOn === null && Ct.shift()
}
var zn = vt.ReactCurrentBatchConfig
    , fi = !0;
function ry(e, t, n, r) {
    var s = F
        , i = zn.transition;
    zn.transition = null;
    try {
        F = 1,
            Ll(e, t, n, r)
    } finally {
        F = s,
            zn.transition = i
    }
}
function sy(e, t, n, r) {
    var s = F
        , i = zn.transition;
    zn.transition = null;
    try {
        F = 4,
            Ll(e, t, n, r)
    } finally {
        F = s,
            zn.transition = i
    }
}
function Ll(e, t, n, r) {
    if (fi) {
        var s = ka(e, t, n, r);
        if (s === null)
            Do(e, t, r, hi, n),
                hc(e, r);
        else if (ty(s, e, t, n, r))
            r.stopPropagation();
        else if (hc(e, r),
            t & 4 && -1 < ey.indexOf(e)) {
            for (; s !== null;) {
                var i = ls(s);
                if (i !== null && Ch(i),
                    i = ka(e, t, n, r),
                    i === null && Do(e, t, r, hi, n),
                    i === s)
                    break;
                s = i
            }
            s !== null && r.stopPropagation()
        } else
            Do(e, t, r, null, n)
    }
}
var hi = null;
function ka(e, t, n, r) {
    if (hi = null,
        e = bl(r),
        e = en(e),
        e !== null)
        if (t = pn(e),
            t === null)
            e = null;
        else if (n = t.tag,
            n === 13) {
            if (e = gh(t),
                e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return hi = e,
        null
}
function Ah(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (Wg()) {
                case Ml:
                    return 1;
                case wh:
                    return 4;
                case ci:
                case Kg:
                    return 16;
                case Sh:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var Tt = null
    , Vl = null
    , Ys = null;
function bh() {
    if (Ys)
        return Ys;
    var e, t = Vl, n = t.length, r, s = "value" in Tt ? Tt.value : Tt.textContent, i = s.length;
    for (e = 0; e < n && t[e] === s[e]; e++)
        ;
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === s[i - r]; r++)
        ;
    return Ys = s.slice(e, 1 < r ? 1 - r : void 0)
}
function Qs(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode,
        e === 0 && t === 13 && (e = 13)) : e = t,
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
}
function Ms() {
    return !0
}
function mc() {
    return !1
}
function Ie(e) {
    function t(n, r, s, i, o) {
        this._reactName = n,
            this._targetInst = s,
            this.type = r,
            this.nativeEvent = i,
            this.target = o,
            this.currentTarget = null;
        for (var l in e)
            e.hasOwnProperty(l) && (n = e[l],
                this[l] = n ? n(i) : i[l]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Ms : mc,
            this.isPropagationStopped = mc,
            this
    }
    return X(t.prototype, {
        preventDefault: function () {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
                this.isDefaultPrevented = Ms)
        },
        stopPropagation: function () {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
                this.isPropagationStopped = Ms)
        },
        persist: function () { },
        isPersistent: Ms
    }),
        t
}
var er = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, Il = Ie(er), as = X({}, er, {
    view: 0,
    detail: 0
}), iy = Ie(as), ko, Co, cr, Wi = X({}, as, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: _l,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function (e) {
        return "movementX" in e ? e.movementX : (e !== cr && (cr && e.type === "mousemove" ? (ko = e.screenX - cr.screenX,
            Co = e.screenY - cr.screenY) : Co = ko = 0,
            cr = e),
            ko)
    },
    movementY: function (e) {
        return "movementY" in e ? e.movementY : Co
    }
}), gc = Ie(Wi), oy = X({}, Wi, {
    dataTransfer: 0
}), ay = Ie(oy), ly = X({}, as, {
    relatedTarget: 0
}), No = Ie(ly), uy = X({}, er, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), cy = Ie(uy), dy = X({}, er, {
    clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData
    }
}), fy = Ie(dy), hy = X({}, er, {
    data: 0
}), yc = Ie(hy), py = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, my = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, gy = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function yy(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = gy[e]) ? !!t[e] : !1
}
function _l() {
    return yy
}
var vy = X({}, as, {
    key: function (e) {
        if (e.key) {
            var t = py[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = Qs(e),
            e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? my[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: _l,
    charCode: function (e) {
        return e.type === "keypress" ? Qs(e) : 0
    },
    keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function (e) {
        return e.type === "keypress" ? Qs(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
    , xy = Ie(vy)
    , wy = X({}, Wi, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    })
    , vc = Ie(wy)
    , Sy = X({}, as, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: _l
    })
    , jy = Ie(Sy)
    , ky = X({}, er, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
    , Cy = Ie(ky)
    , Ny = X({}, Wi, {
        deltaX: function (e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function (e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
    , Ty = Ie(Ny)
    , Ey = [9, 13, 27, 32]
    , Ol = ht && "CompositionEvent" in window
    , Cr = null;
ht && "documentMode" in document && (Cr = document.documentMode);
var Py = ht && "TextEvent" in window && !Cr
    , Mh = ht && (!Ol || Cr && 8 < Cr && 11 >= Cr)
    , xc = " "
    , wc = !1;
function Dh(e, t) {
    switch (e) {
        case "keyup":
            return Ey.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}
function Rh(e) {
    return e = e.detail,
        typeof e == "object" && "data" in e ? e.data : null
}
var jn = !1;
function Ay(e, t) {
    switch (e) {
        case "compositionend":
            return Rh(t);
        case "keypress":
            return t.which !== 32 ? null : (wc = !0,
                xc);
        case "textInput":
            return e = t.data,
                e === xc && wc ? null : e;
        default:
            return null
    }
}
function by(e, t) {
    if (jn)
        return e === "compositionend" || !Ol && Dh(e, t) ? (e = bh(),
            Ys = Vl = Tt = null,
            jn = !1,
            e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length)
                    return t.char;
                if (t.which)
                    return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return Mh && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}
var My = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function Sc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!My[e.type] : t === "textarea"
}
function Lh(e, t, n, r) {
    dh(r),
        t = pi(t, "onChange"),
        0 < t.length && (n = new Il("onChange", "change", null, n, r),
            e.push({
                event: n,
                listeners: t
            }))
}
var Nr = null
    , Br = null;
function Dy(e) {
    Wh(e, 0)
}
function Ki(e) {
    var t = Nn(e);
    if (sh(t))
        return e
}
function Ry(e, t) {
    if (e === "change")
        return t
}
var Vh = !1;
if (ht) {
    var To;
    if (ht) {
        var Eo = "oninput" in document;
        if (!Eo) {
            var jc = document.createElement("div");
            jc.setAttribute("oninput", "return;"),
                Eo = typeof jc.oninput == "function"
        }
        To = Eo
    } else
        To = !1;
    Vh = To && (!document.documentMode || 9 < document.documentMode)
}
function kc() {
    Nr && (Nr.detachEvent("onpropertychange", Ih),
        Br = Nr = null)
}
function Ih(e) {
    if (e.propertyName === "value" && Ki(Br)) {
        var t = [];
        Lh(t, Br, e, bl(e)),
            mh(Dy, t)
    }
}
function Ly(e, t, n) {
    e === "focusin" ? (kc(),
        Nr = t,
        Br = n,
        Nr.attachEvent("onpropertychange", Ih)) : e === "focusout" && kc()
}
function Vy(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Ki(Br)
}
function Iy(e, t) {
    if (e === "click")
        return Ki(t)
}
function _y(e, t) {
    if (e === "input" || e === "change")
        return Ki(t)
}
function Oy(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Ze = typeof Object.is == "function" ? Object.is : Oy;
function Ur(e, t) {
    if (Ze(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
        , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var s = n[r];
        if (!ia.call(t, s) || !Ze(e[s], t[s]))
            return !1
    }
    return !0
}
function Cc(e) {
    for (; e && e.firstChild;)
        e = e.firstChild;
    return e
}
function Nc(e, t) {
    var n = Cc(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
                e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Cc(n)
    }
}
function _h(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? _h(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function Oh() {
    for (var e = window, t = ai(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = ai(e.document)
    }
    return t
}
function Fl(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function Fy(e) {
    var t = Oh()
        , n = e.focusedElem
        , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && _h(n.ownerDocument.documentElement, n)) {
        if (r !== null && Fl(n)) {
            if (t = r.start,
                e = r.end,
                e === void 0 && (e = t),
                "selectionStart" in n)
                n.selectionStart = t,
                    n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
                e.getSelection) {
                e = e.getSelection();
                var s = n.textContent.length
                    , i = Math.min(r.start, s);
                r = r.end === void 0 ? i : Math.min(r.end, s),
                    !e.extend && i > r && (s = r,
                        r = i,
                        i = s),
                    s = Nc(n, i);
                var o = Nc(n, r);
                s && o && (e.rangeCount !== 1 || e.anchorNode !== s.node || e.anchorOffset !== s.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(),
                    t.setStart(s.node, s.offset),
                    e.removeAllRanges(),
                    i > r ? (e.addRange(t),
                        e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset),
                            e.addRange(t)))
            }
        }
        for (t = [],
            e = n; e = e.parentNode;)
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
            n = 0; n < t.length; n++)
            e = t[n],
                e.element.scrollLeft = e.left,
                e.element.scrollTop = e.top
    }
}
var zy = ht && "documentMode" in document && 11 >= document.documentMode
    , kn = null
    , Ca = null
    , Tr = null
    , Na = !1;
function Tc(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Na || kn == null || kn !== ai(r) || (r = kn,
        "selectionStart" in r && Fl(r) ? r = {
            start: r.selectionStart,
            end: r.selectionEnd
        } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
            r = {
                anchorNode: r.anchorNode,
                anchorOffset: r.anchorOffset,
                focusNode: r.focusNode,
                focusOffset: r.focusOffset
            }),
        Tr && Ur(Tr, r) || (Tr = r,
            r = pi(Ca, "onSelect"),
            0 < r.length && (t = new Il("onSelect", "select", null, t, n),
                e.push({
                    event: t,
                    listeners: r
                }),
                t.target = kn)))
}
function Ds(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
        n["Webkit" + e] = "webkit" + t,
        n["Moz" + e] = "moz" + t,
        n
}
var Cn = {
    animationend: Ds("Animation", "AnimationEnd"),
    animationiteration: Ds("Animation", "AnimationIteration"),
    animationstart: Ds("Animation", "AnimationStart"),
    transitionend: Ds("Transition", "TransitionEnd")
}
    , Po = {}
    , Fh = {};
ht && (Fh = document.createElement("div").style,
    "AnimationEvent" in window || (delete Cn.animationend.animation,
        delete Cn.animationiteration.animation,
        delete Cn.animationstart.animation),
    "TransitionEvent" in window || delete Cn.transitionend.transition);
function Gi(e) {
    if (Po[e])
        return Po[e];
    if (!Cn[e])
        return e;
    var t = Cn[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Fh)
            return Po[e] = t[n];
    return e
}
var zh = Gi("animationend")
    , Bh = Gi("animationiteration")
    , Uh = Gi("animationstart")
    , $h = Gi("transitionend")
    , Hh = new Map
    , Ec = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Ut(e, t) {
    Hh.set(e, t),
        hn(t, [e])
}
for (var Ao = 0; Ao < Ec.length; Ao++) {
    var bo = Ec[Ao]
        , By = bo.toLowerCase()
        , Uy = bo[0].toUpperCase() + bo.slice(1);
    Ut(By, "on" + Uy)
}
Ut(zh, "onAnimationEnd");
Ut(Bh, "onAnimationIteration");
Ut(Uh, "onAnimationStart");
Ut("dblclick", "onDoubleClick");
Ut("focusin", "onFocus");
Ut("focusout", "onBlur");
Ut($h, "onTransitionEnd");
$n("onMouseEnter", ["mouseout", "mouseover"]);
$n("onMouseLeave", ["mouseout", "mouseover"]);
$n("onPointerEnter", ["pointerout", "pointerover"]);
$n("onPointerLeave", ["pointerout", "pointerover"]);
hn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
hn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
hn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
hn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
hn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
hn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var vr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
    , $y = new Set("cancel close invalid load scroll toggle".split(" ").concat(vr));
function Pc(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
        Bg(r, t, void 0, e),
        e.currentTarget = null
}
function Wh(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
            , s = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                    var l = r[o]
                        , u = l.instance
                        , c = l.currentTarget;
                    if (l = l.listener,
                        u !== i && s.isPropagationStopped())
                        break e;
                    Pc(s, l, c),
                        i = u
                }
            else
                for (o = 0; o < r.length; o++) {
                    if (l = r[o],
                        u = l.instance,
                        c = l.currentTarget,
                        l = l.listener,
                        u !== i && s.isPropagationStopped())
                        break e;
                    Pc(s, l, c),
                        i = u
                }
        }
    }
    if (ui)
        throw e = wa,
        ui = !1,
        wa = null,
        e
}
function B(e, t) {
    var n = t[ba];
    n === void 0 && (n = t[ba] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Kh(t, e, 2, !1),
        n.add(r))
}
function Mo(e, t, n) {
    var r = 0;
    t && (r |= 4),
        Kh(n, e, r, t)
}
var Rs = "_reactListening" + Math.random().toString(36).slice(2);
function $r(e) {
    if (!e[Rs]) {
        e[Rs] = !0,
            Jf.forEach(function (n) {
                n !== "selectionchange" && ($y.has(n) || Mo(n, !1, e),
                    Mo(n, !0, e))
            });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Rs] || (t[Rs] = !0,
            Mo("selectionchange", !1, t))
    }
}
function Kh(e, t, n, r) {
    switch (Ah(t)) {
        case 1:
            var s = ry;
            break;
        case 4:
            s = sy;
            break;
        default:
            s = Ll
    }
    n = s.bind(null, t, n, e),
        s = void 0,
        !xa || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (s = !0),
        r ? s !== void 0 ? e.addEventListener(t, n, {
            capture: !0,
            passive: s
        }) : e.addEventListener(t, n, !0) : s !== void 0 ? e.addEventListener(t, n, {
            passive: s
        }) : e.addEventListener(t, n, !1)
}
function Do(e, t, n, r, s) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ;) {
            if (r === null)
                return;
            var o = r.tag;
            if (o === 3 || o === 4) {
                var l = r.stateNode.containerInfo;
                if (l === s || l.nodeType === 8 && l.parentNode === s)
                    break;
                if (o === 4)
                    for (o = r.return; o !== null;) {
                        var u = o.tag;
                        if ((u === 3 || u === 4) && (u = o.stateNode.containerInfo,
                            u === s || u.nodeType === 8 && u.parentNode === s))
                            return;
                        o = o.return
                    }
                for (; l !== null;) {
                    if (o = en(l),
                        o === null)
                        return;
                    if (u = o.tag,
                        u === 5 || u === 6) {
                        r = i = o;
                        continue e
                    }
                    l = l.parentNode
                }
            }
            r = r.return
        }
    mh(function () {
        var c = i
            , d = bl(n)
            , f = [];
        e: {
            var h = Hh.get(e);
            if (h !== void 0) {
                var y = Il
                    , v = e;
                switch (e) {
                    case "keypress":
                        if (Qs(n) === 0)
                            break e;
                    case "keydown":
                    case "keyup":
                        y = xy;
                        break;
                    case "focusin":
                        v = "focus",
                            y = No;
                        break;
                    case "focusout":
                        v = "blur",
                            y = No;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        y = No;
                        break;
                    case "click":
                        if (n.button === 2)
                            break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        y = gc;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        y = ay;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        y = jy;
                        break;
                    case zh:
                    case Bh:
                    case Uh:
                        y = cy;
                        break;
                    case $h:
                        y = Cy;
                        break;
                    case "scroll":
                        y = iy;
                        break;
                    case "wheel":
                        y = Ty;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        y = fy;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        y = vc
                }
                var w = (t & 4) !== 0
                    , j = !w && e === "scroll"
                    , m = w ? h !== null ? h + "Capture" : null : h;
                w = [];
                for (var p = c, g; p !== null;) {
                    g = p;
                    var S = g.stateNode;
                    if (g.tag === 5 && S !== null && (g = S,
                        m !== null && (S = _r(p, m),
                            S != null && w.push(Hr(p, S, g)))),
                        j)
                        break;
                    p = p.return
                }
                0 < w.length && (h = new y(h, v, null, n, d),
                    f.push({
                        event: h,
                        listeners: w
                    }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (h = e === "mouseover" || e === "pointerover",
                    y = e === "mouseout" || e === "pointerout",
                    h && n !== ya && (v = n.relatedTarget || n.fromElement) && (en(v) || v[pt]))
                    break e;
                if ((y || h) && (h = d.window === d ? d : (h = d.ownerDocument) ? h.defaultView || h.parentWindow : window,
                    y ? (v = n.relatedTarget || n.toElement,
                        y = c,
                        v = v ? en(v) : null,
                        v !== null && (j = pn(v),
                            v !== j || v.tag !== 5 && v.tag !== 6) && (v = null)) : (y = null,
                                v = c),
                    y !== v)) {
                    if (w = gc,
                        S = "onMouseLeave",
                        m = "onMouseEnter",
                        p = "mouse",
                        (e === "pointerout" || e === "pointerover") && (w = vc,
                            S = "onPointerLeave",
                            m = "onPointerEnter",
                            p = "pointer"),
                        j = y == null ? h : Nn(y),
                        g = v == null ? h : Nn(v),
                        h = new w(S, p + "leave", y, n, d),
                        h.target = j,
                        h.relatedTarget = g,
                        S = null,
                        en(d) === c && (w = new w(m, p + "enter", v, n, d),
                            w.target = g,
                            w.relatedTarget = j,
                            S = w),
                        j = S,
                        y && v)
                        t: {
                            for (w = y,
                                m = v,
                                p = 0,
                                g = w; g; g = vn(g))
                                p++;
                            for (g = 0,
                                S = m; S; S = vn(S))
                                g++;
                            for (; 0 < p - g;)
                                w = vn(w),
                                    p--;
                            for (; 0 < g - p;)
                                m = vn(m),
                                    g--;
                            for (; p--;) {
                                if (w === m || m !== null && w === m.alternate)
                                    break t;
                                w = vn(w),
                                    m = vn(m)
                            }
                            w = null
                        }
                    else
                        w = null;
                    y !== null && Ac(f, h, y, w, !1),
                        v !== null && j !== null && Ac(f, j, v, w, !0)
                }
            }
            e: {
                if (h = c ? Nn(c) : window,
                    y = h.nodeName && h.nodeName.toLowerCase(),
                    y === "select" || y === "input" && h.type === "file")
                    var k = Ry;
                else if (Sc(h))
                    if (Vh)
                        k = _y;
                    else {
                        k = Vy;
                        var T = Ly
                    }
                else
                    (y = h.nodeName) && y.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (k = Iy);
                if (k && (k = k(e, c))) {
                    Lh(f, k, n, d);
                    break e
                }
                T && T(e, h, c),
                    e === "focusout" && (T = h._wrapperState) && T.controlled && h.type === "number" && fa(h, "number", h.value)
            }
            switch (T = c ? Nn(c) : window,
            e) {
                case "focusin":
                    (Sc(T) || T.contentEditable === "true") && (kn = T,
                        Ca = c,
                        Tr = null);
                    break;
                case "focusout":
                    Tr = Ca = kn = null;
                    break;
                case "mousedown":
                    Na = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Na = !1,
                        Tc(f, n, d);
                    break;
                case "selectionchange":
                    if (zy)
                        break;
                case "keydown":
                case "keyup":
                    Tc(f, n, d)
            }
            var E;
            if (Ol)
                e: {
                    switch (e) {
                        case "compositionstart":
                            var N = "onCompositionStart";
                            break e;
                        case "compositionend":
                            N = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            N = "onCompositionUpdate";
                            break e
                    }
                    N = void 0
                }
            else
                jn ? Dh(e, n) && (N = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
            N && (Mh && n.locale !== "ko" && (jn || N !== "onCompositionStart" ? N === "onCompositionEnd" && jn && (E = bh()) : (Tt = d,
                Vl = "value" in Tt ? Tt.value : Tt.textContent,
                jn = !0)),
                T = pi(c, N),
                0 < T.length && (N = new yc(N, e, null, n, d),
                    f.push({
                        event: N,
                        listeners: T
                    }),
                    E ? N.data = E : (E = Rh(n),
                        E !== null && (N.data = E)))),
                (E = Py ? Ay(e, n) : by(e, n)) && (c = pi(c, "onBeforeInput"),
                    0 < c.length && (d = new yc("onBeforeInput", "beforeinput", null, n, d),
                        f.push({
                            event: d,
                            listeners: c
                        }),
                        d.data = E))
        }
        Wh(f, t)
    })
}
function Hr(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function pi(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var s = e
            , i = s.stateNode;
        s.tag === 5 && i !== null && (s = i,
            i = _r(e, n),
            i != null && r.unshift(Hr(e, i, s)),
            i = _r(e, t),
            i != null && r.push(Hr(e, i, s))),
            e = e.return
    }
    return r
}
function vn(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function Ac(e, t, n, r, s) {
    for (var i = t._reactName, o = []; n !== null && n !== r;) {
        var l = n
            , u = l.alternate
            , c = l.stateNode;
        if (u !== null && u === r)
            break;
        l.tag === 5 && c !== null && (l = c,
            s ? (u = _r(n, i),
                u != null && o.unshift(Hr(n, u, l))) : s || (u = _r(n, i),
                    u != null && o.push(Hr(n, u, l)))),
            n = n.return
    }
    o.length !== 0 && e.push({
        event: t,
        listeners: o
    })
}
var Hy = /\r\n?/g
    , Wy = /\u0000|\uFFFD/g;
function bc(e) {
    return (typeof e == "string" ? e : "" + e).replace(Hy, `
`).replace(Wy, "")
}
function Ls(e, t, n) {
    if (t = bc(t),
        bc(e) !== t && n)
        throw Error(C(425))
}
function mi() { }
var Ta = null
    , Ea = null;
function Pa(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Aa = typeof setTimeout == "function" ? setTimeout : void 0
    , Ky = typeof clearTimeout == "function" ? clearTimeout : void 0
    , Mc = typeof Promise == "function" ? Promise : void 0
    , Gy = typeof queueMicrotask == "function" ? queueMicrotask : typeof Mc < "u" ? function (e) {
        return Mc.resolve(null).then(e).catch(Xy)
    }
        : Aa;
function Xy(e) {
    setTimeout(function () {
        throw e
    })
}
function Ro(e, t) {
    var n = t
        , r = 0;
    do {
        var s = n.nextSibling;
        if (e.removeChild(n),
            s && s.nodeType === 8)
            if (n = s.data,
                n === "/$") {
                if (r === 0) {
                    e.removeChild(s),
                        zr(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = s
    } while (n);
    zr(t)
}
function Dt(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
                t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function Dc(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var tr = Math.random().toString(36).slice(2)
    , tt = "__reactFiber$" + tr
    , Wr = "__reactProps$" + tr
    , pt = "__reactContainer$" + tr
    , ba = "__reactEvents$" + tr
    , Yy = "__reactListeners$" + tr
    , Qy = "__reactHandles$" + tr;
function en(e) {
    var t = e[tt];
    if (t)
        return t;
    for (var n = e.parentNode; n;) {
        if (t = n[pt] || n[tt]) {
            if (n = t.alternate,
                t.child !== null || n !== null && n.child !== null)
                for (e = Dc(e); e !== null;) {
                    if (n = e[tt])
                        return n;
                    e = Dc(e)
                }
            return t
        }
        e = n,
            n = e.parentNode
    }
    return null
}
function ls(e) {
    return e = e[tt] || e[pt],
        !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function Nn(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(C(33))
}
function Xi(e) {
    return e[Wr] || null
}
var Ma = []
    , Tn = -1;
function $t(e) {
    return {
        current: e
    }
}
function U(e) {
    0 > Tn || (e.current = Ma[Tn],
        Ma[Tn] = null,
        Tn--)
}
function z(e, t) {
    Tn++,
        Ma[Tn] = e.current,
        e.current = t
}
var Ft = {}
    , xe = $t(Ft)
    , Te = $t(!1)
    , ln = Ft;
function Hn(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return Ft;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var s = {}, i;
    for (i in n)
        s[i] = t[i];
    return r && (e = e.stateNode,
        e.__reactInternalMemoizedUnmaskedChildContext = t,
        e.__reactInternalMemoizedMaskedChildContext = s),
        s
}
function Ee(e) {
    return e = e.childContextTypes,
        e != null
}
function gi() {
    U(Te),
        U(xe)
}
function Rc(e, t, n) {
    if (xe.current !== Ft)
        throw Error(C(168));
    z(xe, t),
        z(Te, n)
}
function Gh(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
        typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var s in r)
        if (!(s in t))
            throw Error(C(108, Lg(e) || "Unknown", s));
    return X({}, n, r)
}
function yi(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ft,
        ln = xe.current,
        z(xe, e),
        z(Te, Te.current),
        !0
}
function Lc(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(C(169));
    n ? (e = Gh(e, t, ln),
        r.__reactInternalMemoizedMergedChildContext = e,
        U(Te),
        U(xe),
        z(xe, e)) : U(Te),
        z(Te, n)
}
var at = null
    , Yi = !1
    , Lo = !1;
function Xh(e) {
    at === null ? at = [e] : at.push(e)
}
function qy(e) {
    Yi = !0,
        Xh(e)
}
function Ht() {
    if (!Lo && at !== null) {
        Lo = !0;
        var e = 0
            , t = F;
        try {
            var n = at;
            for (F = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            at = null,
                Yi = !1
        } catch (s) {
            throw at !== null && (at = at.slice(e + 1)),
            xh(Ml, Ht),
            s
        } finally {
            F = t,
                Lo = !1
        }
    }
    return null
}
var En = []
    , Pn = 0
    , vi = null
    , xi = 0
    , Fe = []
    , ze = 0
    , un = null
    , lt = 1
    , ut = "";
function Qt(e, t) {
    En[Pn++] = xi,
        En[Pn++] = vi,
        vi = e,
        xi = t
}
function Yh(e, t, n) {
    Fe[ze++] = lt,
        Fe[ze++] = ut,
        Fe[ze++] = un,
        un = e;
    var r = lt;
    e = ut;
    var s = 32 - Qe(r) - 1;
    r &= ~(1 << s),
        n += 1;
    var i = 32 - Qe(t) + s;
    if (30 < i) {
        var o = s - s % 5;
        i = (r & (1 << o) - 1).toString(32),
            r >>= o,
            s -= o,
            lt = 1 << 32 - Qe(t) + s | n << s | r,
            ut = i + e
    } else
        lt = 1 << i | n << s | r,
            ut = e
}
function zl(e) {
    e.return !== null && (Qt(e, 1),
        Yh(e, 1, 0))
}
function Bl(e) {
    for (; e === vi;)
        vi = En[--Pn],
            En[Pn] = null,
            xi = En[--Pn],
            En[Pn] = null;
    for (; e === un;)
        un = Fe[--ze],
            Fe[ze] = null,
            ut = Fe[--ze],
            Fe[ze] = null,
            lt = Fe[--ze],
            Fe[ze] = null
}
var Me = null
    , be = null
    , H = !1
    , Ye = null;
function Qh(e, t) {
    var n = Be(5, null, null, 0);
    n.elementType = "DELETED",
        n.stateNode = t,
        n.return = e,
        t = e.deletions,
        t === null ? (e.deletions = [n],
            e.flags |= 16) : t.push(n)
}
function Vc(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
                t !== null ? (e.stateNode = t,
                    Me = e,
                    be = Dt(t.firstChild),
                    !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
                t !== null ? (e.stateNode = t,
                    Me = e,
                    be = null,
                    !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t,
                t !== null ? (n = un !== null ? {
                    id: lt,
                    overflow: ut
                } : null,
                    e.memoizedState = {
                        dehydrated: t,
                        treeContext: n,
                        retryLane: 1073741824
                    },
                    n = Be(18, null, null, 0),
                    n.stateNode = t,
                    n.return = e,
                    e.child = n,
                    Me = e,
                    be = null,
                    !0) : !1;
        default:
            return !1
    }
}
function Da(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Ra(e) {
    if (H) {
        var t = be;
        if (t) {
            var n = t;
            if (!Vc(e, t)) {
                if (Da(e))
                    throw Error(C(418));
                t = Dt(n.nextSibling);
                var r = Me;
                t && Vc(e, t) ? Qh(r, n) : (e.flags = e.flags & -4097 | 2,
                    H = !1,
                    Me = e)
            }
        } else {
            if (Da(e))
                throw Error(C(418));
            e.flags = e.flags & -4097 | 2,
                H = !1,
                Me = e
        }
    }
}
function Ic(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;)
        e = e.return;
    Me = e
}
function Vs(e) {
    if (e !== Me)
        return !1;
    if (!H)
        return Ic(e),
            H = !0,
            !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
        t = t !== "head" && t !== "body" && !Pa(e.type, e.memoizedProps)),
        t && (t = be)) {
        if (Da(e))
            throw qh(),
            Error(C(418));
        for (; t;)
            Qh(e, t),
                t = Dt(t.nextSibling)
    }
    if (Ic(e),
        e.tag === 13) {
        if (e = e.memoizedState,
            e = e !== null ? e.dehydrated : null,
            !e)
            throw Error(C(317));
        e: {
            for (e = e.nextSibling,
                t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            be = Dt(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            be = null
        }
    } else
        be = Me ? Dt(e.stateNode.nextSibling) : null;
    return !0
}
function qh() {
    for (var e = be; e;)
        e = Dt(e.nextSibling)
}
function Wn() {
    be = Me = null,
        H = !1
}
function Ul(e) {
    Ye === null ? Ye = [e] : Ye.push(e)
}
var Zy = vt.ReactCurrentBatchConfig;
function dr(e, t, n) {
    if (e = n.ref,
        e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
                n) {
                if (n.tag !== 1)
                    throw Error(C(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(C(147, e));
            var s = r
                , i = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function (o) {
                var l = s.refs;
                o === null ? delete l[i] : l[i] = o
            }
                ,
                t._stringRef = i,
                t)
        }
        if (typeof e != "string")
            throw Error(C(284));
        if (!n._owner)
            throw Error(C(290, e))
    }
    return e
}
function Is(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(C(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function _c(e) {
    var t = e._init;
    return t(e._payload)
}
function Zh(e) {
    function t(m, p) {
        if (e) {
            var g = m.deletions;
            g === null ? (m.deletions = [p],
                m.flags |= 16) : g.push(p)
        }
    }
    function n(m, p) {
        if (!e)
            return null;
        for (; p !== null;)
            t(m, p),
                p = p.sibling;
        return null
    }
    function r(m, p) {
        for (m = new Map; p !== null;)
            p.key !== null ? m.set(p.key, p) : m.set(p.index, p),
                p = p.sibling;
        return m
    }
    function s(m, p) {
        return m = It(m, p),
            m.index = 0,
            m.sibling = null,
            m
    }
    function i(m, p, g) {
        return m.index = g,
            e ? (g = m.alternate,
                g !== null ? (g = g.index,
                    g < p ? (m.flags |= 2,
                        p) : g) : (m.flags |= 2,
                            p)) : (m.flags |= 1048576,
                                p)
    }
    function o(m) {
        return e && m.alternate === null && (m.flags |= 2),
            m
    }
    function l(m, p, g, S) {
        return p === null || p.tag !== 6 ? (p = Bo(g, m.mode, S),
            p.return = m,
            p) : (p = s(p, g),
                p.return = m,
                p)
    }
    function u(m, p, g, S) {
        var k = g.type;
        return k === Sn ? d(m, p, g.props.children, S, g.key) : p !== null && (p.elementType === k || typeof k == "object" && k !== null && k.$$typeof === jt && _c(k) === p.type) ? (S = s(p, g.props),
            S.ref = dr(m, p, g),
            S.return = m,
            S) : (S = ri(g.type, g.key, g.props, null, m.mode, S),
                S.ref = dr(m, p, g),
                S.return = m,
                S)
    }
    function c(m, p, g, S) {
        return p === null || p.tag !== 4 || p.stateNode.containerInfo !== g.containerInfo || p.stateNode.implementation !== g.implementation ? (p = Uo(g, m.mode, S),
            p.return = m,
            p) : (p = s(p, g.children || []),
                p.return = m,
                p)
    }
    function d(m, p, g, S, k) {
        return p === null || p.tag !== 7 ? (p = on(g, m.mode, S, k),
            p.return = m,
            p) : (p = s(p, g),
                p.return = m,
                p)
    }
    function f(m, p, g) {
        if (typeof p == "string" && p !== "" || typeof p == "number")
            return p = Bo("" + p, m.mode, g),
                p.return = m,
                p;
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
                case Ns:
                    return g = ri(p.type, p.key, p.props, null, m.mode, g),
                        g.ref = dr(m, null, p),
                        g.return = m,
                        g;
                case wn:
                    return p = Uo(p, m.mode, g),
                        p.return = m,
                        p;
                case jt:
                    var S = p._init;
                    return f(m, S(p._payload), g)
            }
            if (gr(p) || or(p))
                return p = on(p, m.mode, g, null),
                    p.return = m,
                    p;
            Is(m, p)
        }
        return null
    }
    function h(m, p, g, S) {
        var k = p !== null ? p.key : null;
        if (typeof g == "string" && g !== "" || typeof g == "number")
            return k !== null ? null : l(m, p, "" + g, S);
        if (typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
                case Ns:
                    return g.key === k ? u(m, p, g, S) : null;
                case wn:
                    return g.key === k ? c(m, p, g, S) : null;
                case jt:
                    return k = g._init,
                        h(m, p, k(g._payload), S)
            }
            if (gr(g) || or(g))
                return k !== null ? null : d(m, p, g, S, null);
            Is(m, g)
        }
        return null
    }
    function y(m, p, g, S, k) {
        if (typeof S == "string" && S !== "" || typeof S == "number")
            return m = m.get(g) || null,
                l(p, m, "" + S, k);
        if (typeof S == "object" && S !== null) {
            switch (S.$$typeof) {
                case Ns:
                    return m = m.get(S.key === null ? g : S.key) || null,
                        u(p, m, S, k);
                case wn:
                    return m = m.get(S.key === null ? g : S.key) || null,
                        c(p, m, S, k);
                case jt:
                    var T = S._init;
                    return y(m, p, g, T(S._payload), k)
            }
            if (gr(S) || or(S))
                return m = m.get(g) || null,
                    d(p, m, S, k, null);
            Is(p, S)
        }
        return null
    }
    function v(m, p, g, S) {
        for (var k = null, T = null, E = p, N = p = 0, _ = null; E !== null && N < g.length; N++) {
            E.index > N ? (_ = E,
                E = null) : _ = E.sibling;
            var R = h(m, E, g[N], S);
            if (R === null) {
                E === null && (E = _);
                break
            }
            e && E && R.alternate === null && t(m, E),
                p = i(R, p, N),
                T === null ? k = R : T.sibling = R,
                T = R,
                E = _
        }
        if (N === g.length)
            return n(m, E),
                H && Qt(m, N),
                k;
        if (E === null) {
            for (; N < g.length; N++)
                E = f(m, g[N], S),
                    E !== null && (p = i(E, p, N),
                        T === null ? k = E : T.sibling = E,
                        T = E);
            return H && Qt(m, N),
                k
        }
        for (E = r(m, E); N < g.length; N++)
            _ = y(E, m, N, g[N], S),
                _ !== null && (e && _.alternate !== null && E.delete(_.key === null ? N : _.key),
                    p = i(_, p, N),
                    T === null ? k = _ : T.sibling = _,
                    T = _);
        return e && E.forEach(function (ie) {
            return t(m, ie)
        }),
            H && Qt(m, N),
            k
    }
    function w(m, p, g, S) {
        var k = or(g);
        if (typeof k != "function")
            throw Error(C(150));
        if (g = k.call(g),
            g == null)
            throw Error(C(151));
        for (var T = k = null, E = p, N = p = 0, _ = null, R = g.next(); E !== null && !R.done; N++,
            R = g.next()) {
            E.index > N ? (_ = E,
                E = null) : _ = E.sibling;
            var ie = h(m, E, R.value, S);
            if (ie === null) {
                E === null && (E = _);
                break
            }
            e && E && ie.alternate === null && t(m, E),
                p = i(ie, p, N),
                T === null ? k = ie : T.sibling = ie,
                T = ie,
                E = _
        }
        if (R.done)
            return n(m, E),
                H && Qt(m, N),
                k;
        if (E === null) {
            for (; !R.done; N++,
                R = g.next())
                R = f(m, R.value, S),
                    R !== null && (p = i(R, p, N),
                        T === null ? k = R : T.sibling = R,
                        T = R);
            return H && Qt(m, N),
                k
        }
        for (E = r(m, E); !R.done; N++,
            R = g.next())
            R = y(E, m, N, R.value, S),
                R !== null && (e && R.alternate !== null && E.delete(R.key === null ? N : R.key),
                    p = i(R, p, N),
                    T === null ? k = R : T.sibling = R,
                    T = R);
        return e && E.forEach(function (xt) {
            return t(m, xt)
        }),
            H && Qt(m, N),
            k
    }
    function j(m, p, g, S) {
        if (typeof g == "object" && g !== null && g.type === Sn && g.key === null && (g = g.props.children),
            typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
                case Ns:
                    e: {
                        for (var k = g.key, T = p; T !== null;) {
                            if (T.key === k) {
                                if (k = g.type,
                                    k === Sn) {
                                    if (T.tag === 7) {
                                        n(m, T.sibling),
                                            p = s(T, g.props.children),
                                            p.return = m,
                                            m = p;
                                        break e
                                    }
                                } else if (T.elementType === k || typeof k == "object" && k !== null && k.$$typeof === jt && _c(k) === T.type) {
                                    n(m, T.sibling),
                                        p = s(T, g.props),
                                        p.ref = dr(m, T, g),
                                        p.return = m,
                                        m = p;
                                    break e
                                }
                                n(m, T);
                                break
                            } else
                                t(m, T);
                            T = T.sibling
                        }
                        g.type === Sn ? (p = on(g.props.children, m.mode, S, g.key),
                            p.return = m,
                            m = p) : (S = ri(g.type, g.key, g.props, null, m.mode, S),
                                S.ref = dr(m, p, g),
                                S.return = m,
                                m = S)
                    }
                    return o(m);
                case wn:
                    e: {
                        for (T = g.key; p !== null;) {
                            if (p.key === T)
                                if (p.tag === 4 && p.stateNode.containerInfo === g.containerInfo && p.stateNode.implementation === g.implementation) {
                                    n(m, p.sibling),
                                        p = s(p, g.children || []),
                                        p.return = m,
                                        m = p;
                                    break e
                                } else {
                                    n(m, p);
                                    break
                                }
                            else
                                t(m, p);
                            p = p.sibling
                        }
                        p = Uo(g, m.mode, S),
                            p.return = m,
                            m = p
                    }
                    return o(m);
                case jt:
                    return T = g._init,
                        j(m, p, T(g._payload), S)
            }
            if (gr(g))
                return v(m, p, g, S);
            if (or(g))
                return w(m, p, g, S);
            Is(m, g)
        }
        return typeof g == "string" && g !== "" || typeof g == "number" ? (g = "" + g,
            p !== null && p.tag === 6 ? (n(m, p.sibling),
                p = s(p, g),
                p.return = m,
                m = p) : (n(m, p),
                    p = Bo(g, m.mode, S),
                    p.return = m,
                    m = p),
            o(m)) : n(m, p)
    }
    return j
}
var Kn = Zh(!0)
    , Jh = Zh(!1)
    , wi = $t(null)
    , Si = null
    , An = null
    , $l = null;
function Hl() {
    $l = An = Si = null
}
function Wl(e) {
    var t = wi.current;
    U(wi),
        e._currentValue = t
}
function La(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
            r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
            e === n)
            break;
        e = e.return
    }
}
function Bn(e, t) {
    Si = e,
        $l = An = null,
        e = e.dependencies,
        e !== null && e.firstContext !== null && (e.lanes & t && (Ne = !0),
            e.firstContext = null)
}
function $e(e) {
    var t = e._currentValue;
    if ($l !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
            An === null) {
            if (Si === null)
                throw Error(C(308));
            An = e,
                Si.dependencies = {
                    lanes: 0,
                    firstContext: e
                }
        } else
            An = An.next = e;
    return t
}
var tn = null;
function Kl(e) {
    tn === null ? tn = [e] : tn.push(e)
}
function ep(e, t, n, r) {
    var s = t.interleaved;
    return s === null ? (n.next = n,
        Kl(t)) : (n.next = s.next,
            s.next = n),
        t.interleaved = n,
        mt(e, r)
}
function mt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
        n = e,
        e = e.return; e !== null;)
        e.childLanes |= t,
            n = e.alternate,
            n !== null && (n.childLanes |= t),
            n = e,
            e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var kt = !1;
function Gl(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function tp(e, t) {
    e = e.updateQueue,
        t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects
        })
}
function ct(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function Rt(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
        O & 2) {
        var s = r.pending;
        return s === null ? t.next = t : (t.next = s.next,
            s.next = t),
            r.pending = t,
            mt(e, n)
    }
    return s = r.interleaved,
        s === null ? (t.next = t,
            Kl(r)) : (t.next = s.next,
                s.next = t),
        r.interleaved = t,
        mt(e, n)
}
function qs(e, t, n) {
    if (t = t.updateQueue,
        t !== null && (t = t.shared,
            (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
            n |= r,
            t.lanes = n,
            Dl(e, n)
    }
}
function Oc(e, t) {
    var n = e.updateQueue
        , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
        n === r)) {
        var s = null
            , i = null;
        if (n = n.firstBaseUpdate,
            n !== null) {
            do {
                var o = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                i === null ? s = i = o : i = i.next = o,
                    n = n.next
            } while (n !== null);
            i === null ? s = i = t : i = i.next = t
        } else
            s = i = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects
        },
            e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
        e === null ? n.firstBaseUpdate = t : e.next = t,
        n.lastBaseUpdate = t
}
function ji(e, t, n, r) {
    var s = e.updateQueue;
    kt = !1;
    var i = s.firstBaseUpdate
        , o = s.lastBaseUpdate
        , l = s.shared.pending;
    if (l !== null) {
        s.shared.pending = null;
        var u = l
            , c = u.next;
        u.next = null,
            o === null ? i = c : o.next = c,
            o = u;
        var d = e.alternate;
        d !== null && (d = d.updateQueue,
            l = d.lastBaseUpdate,
            l !== o && (l === null ? d.firstBaseUpdate = c : l.next = c,
                d.lastBaseUpdate = u))
    }
    if (i !== null) {
        var f = s.baseState;
        o = 0,
            d = c = u = null,
            l = i;
        do {
            var h = l.lane
                , y = l.eventTime;
            if ((r & h) === h) {
                d !== null && (d = d.next = {
                    eventTime: y,
                    lane: 0,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                });
                e: {
                    var v = e
                        , w = l;
                    switch (h = t,
                    y = n,
                    w.tag) {
                        case 1:
                            if (v = w.payload,
                                typeof v == "function") {
                                f = v.call(y, f, h);
                                break e
                            }
                            f = v;
                            break e;
                        case 3:
                            v.flags = v.flags & -65537 | 128;
                        case 0:
                            if (v = w.payload,
                                h = typeof v == "function" ? v.call(y, f, h) : v,
                                h == null)
                                break e;
                            f = X({}, f, h);
                            break e;
                        case 2:
                            kt = !0
                    }
                }
                l.callback !== null && l.lane !== 0 && (e.flags |= 64,
                    h = s.effects,
                    h === null ? s.effects = [l] : h.push(l))
            } else
                y = {
                    eventTime: y,
                    lane: h,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                },
                    d === null ? (c = d = y,
                        u = f) : d = d.next = y,
                    o |= h;
            if (l = l.next,
                l === null) {
                if (l = s.shared.pending,
                    l === null)
                    break;
                h = l,
                    l = h.next,
                    h.next = null,
                    s.lastBaseUpdate = h,
                    s.shared.pending = null
            }
        } while (!0);
        if (d === null && (u = f),
            s.baseState = u,
            s.firstBaseUpdate = c,
            s.lastBaseUpdate = d,
            t = s.shared.interleaved,
            t !== null) {
            s = t;
            do
                o |= s.lane,
                    s = s.next;
            while (s !== t)
        } else
            i === null && (s.shared.lanes = 0);
        dn |= o,
            e.lanes = o,
            e.memoizedState = f
    }
}
function Fc(e, t, n) {
    if (e = t.effects,
        t.effects = null,
        e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
                , s = r.callback;
            if (s !== null) {
                if (r.callback = null,
                    r = n,
                    typeof s != "function")
                    throw Error(C(191, s));
                s.call(r)
            }
        }
}
var us = {}
    , rt = $t(us)
    , Kr = $t(us)
    , Gr = $t(us);
function nn(e) {
    if (e === us)
        throw Error(C(174));
    return e
}
function Xl(e, t) {
    switch (z(Gr, t),
    z(Kr, e),
    z(rt, us),
    e = t.nodeType,
    e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : pa(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t,
                t = e.namespaceURI || null,
                e = e.tagName,
                t = pa(t, e)
    }
    U(rt),
        z(rt, t)
}
function Gn() {
    U(rt),
        U(Kr),
        U(Gr)
}
function np(e) {
    nn(Gr.current);
    var t = nn(rt.current)
        , n = pa(t, e.type);
    t !== n && (z(Kr, e),
        z(rt, n))
}
function Yl(e) {
    Kr.current === e && (U(rt),
        U(Kr))
}
var W = $t(0);
function ki(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
                n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
                t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
            t = t.sibling
    }
    return null
}
var Vo = [];
function Ql() {
    for (var e = 0; e < Vo.length; e++)
        Vo[e]._workInProgressVersionPrimary = null;
    Vo.length = 0
}
var Zs = vt.ReactCurrentDispatcher
    , Io = vt.ReactCurrentBatchConfig
    , cn = 0
    , G = null
    , re = null
    , ae = null
    , Ci = !1
    , Er = !1
    , Xr = 0
    , Jy = 0;
function pe() {
    throw Error(C(321))
}
function ql(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Ze(e[n], t[n]))
            return !1;
    return !0
}
function Zl(e, t, n, r, s, i) {
    if (cn = i,
        G = t,
        t.memoizedState = null,
        t.updateQueue = null,
        t.lanes = 0,
        Zs.current = e === null || e.memoizedState === null ? rv : sv,
        e = n(r, s),
        Er) {
        i = 0;
        do {
            if (Er = !1,
                Xr = 0,
                25 <= i)
                throw Error(C(301));
            i += 1,
                ae = re = null,
                t.updateQueue = null,
                Zs.current = iv,
                e = n(r, s)
        } while (Er)
    }
    if (Zs.current = Ni,
        t = re !== null && re.next !== null,
        cn = 0,
        ae = re = G = null,
        Ci = !1,
        t)
        throw Error(C(300));
    return e
}
function Jl() {
    var e = Xr !== 0;
    return Xr = 0,
        e
}
function et() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return ae === null ? G.memoizedState = ae = e : ae = ae.next = e,
        ae
}
function He() {
    if (re === null) {
        var e = G.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = re.next;
    var t = ae === null ? G.memoizedState : ae.next;
    if (t !== null)
        ae = t,
            re = e;
    else {
        if (e === null)
            throw Error(C(310));
        re = e,
            e = {
                memoizedState: re.memoizedState,
                baseState: re.baseState,
                baseQueue: re.baseQueue,
                queue: re.queue,
                next: null
            },
            ae === null ? G.memoizedState = ae = e : ae = ae.next = e
    }
    return ae
}
function Yr(e, t) {
    return typeof t == "function" ? t(e) : t
}
function _o(e) {
    var t = He()
        , n = t.queue;
    if (n === null)
        throw Error(C(311));
    n.lastRenderedReducer = e;
    var r = re
        , s = r.baseQueue
        , i = n.pending;
    if (i !== null) {
        if (s !== null) {
            var o = s.next;
            s.next = i.next,
                i.next = o
        }
        r.baseQueue = s = i,
            n.pending = null
    }
    if (s !== null) {
        i = s.next,
            r = r.baseState;
        var l = o = null
            , u = null
            , c = i;
        do {
            var d = c.lane;
            if ((cn & d) === d)
                u !== null && (u = u.next = {
                    lane: 0,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null
                }),
                    r = c.hasEagerState ? c.eagerState : e(r, c.action);
            else {
                var f = {
                    lane: d,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null
                };
                u === null ? (l = u = f,
                    o = r) : u = u.next = f,
                    G.lanes |= d,
                    dn |= d
            }
            c = c.next
        } while (c !== null && c !== i);
        u === null ? o = r : u.next = l,
            Ze(r, t.memoizedState) || (Ne = !0),
            t.memoizedState = r,
            t.baseState = o,
            t.baseQueue = u,
            n.lastRenderedState = r
    }
    if (e = n.interleaved,
        e !== null) {
        s = e;
        do
            i = s.lane,
                G.lanes |= i,
                dn |= i,
                s = s.next;
        while (s !== e)
    } else
        s === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function Oo(e) {
    var t = He()
        , n = t.queue;
    if (n === null)
        throw Error(C(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
        , s = n.pending
        , i = t.memoizedState;
    if (s !== null) {
        n.pending = null;
        var o = s = s.next;
        do
            i = e(i, o.action),
                o = o.next;
        while (o !== s);
        Ze(i, t.memoizedState) || (Ne = !0),
            t.memoizedState = i,
            t.baseQueue === null && (t.baseState = i),
            n.lastRenderedState = i
    }
    return [i, r]
}
function rp() { }
function sp(e, t) {
    var n = G
        , r = He()
        , s = t()
        , i = !Ze(r.memoizedState, s);
    if (i && (r.memoizedState = s,
        Ne = !0),
        r = r.queue,
        eu(ap.bind(null, n, r, e), [e]),
        r.getSnapshot !== t || i || ae !== null && ae.memoizedState.tag & 1) {
        if (n.flags |= 2048,
            Qr(9, op.bind(null, n, r, s, t), void 0, null),
            le === null)
            throw Error(C(349));
        cn & 30 || ip(n, t, s)
    }
    return s
}
function ip(e, t, n) {
    e.flags |= 16384,
        e = {
            getSnapshot: t,
            value: n
        },
        t = G.updateQueue,
        t === null ? (t = {
            lastEffect: null,
            stores: null
        },
            G.updateQueue = t,
            t.stores = [e]) : (n = t.stores,
                n === null ? t.stores = [e] : n.push(e))
}
function op(e, t, n, r) {
    t.value = n,
        t.getSnapshot = r,
        lp(t) && up(e)
}
function ap(e, t, n) {
    return n(function () {
        lp(t) && up(e)
    })
}
function lp(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Ze(e, n)
    } catch {
        return !0
    }
}
function up(e) {
    var t = mt(e, 1);
    t !== null && qe(t, e, 1, -1)
}
function zc(e) {
    var t = et();
    return typeof e == "function" && (e = e()),
        t.memoizedState = t.baseState = e,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Yr,
            lastRenderedState: e
        },
        t.queue = e,
        e = e.dispatch = nv.bind(null, G, e),
        [t.memoizedState, e]
}
function Qr(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
        t = G.updateQueue,
        t === null ? (t = {
            lastEffect: null,
            stores: null
        },
            G.updateQueue = t,
            t.lastEffect = e.next = e) : (n = t.lastEffect,
                n === null ? t.lastEffect = e.next = e : (r = n.next,
                    n.next = e,
                    e.next = r,
                    t.lastEffect = e)),
        e
}
function cp() {
    return He().memoizedState
}
function Js(e, t, n, r) {
    var s = et();
    G.flags |= e,
        s.memoizedState = Qr(1 | t, n, void 0, r === void 0 ? null : r)
}
function Qi(e, t, n, r) {
    var s = He();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (re !== null) {
        var o = re.memoizedState;
        if (i = o.destroy,
            r !== null && ql(r, o.deps)) {
            s.memoizedState = Qr(t, n, i, r);
            return
        }
    }
    G.flags |= e,
        s.memoizedState = Qr(1 | t, n, i, r)
}
function Bc(e, t) {
    return Js(8390656, 8, e, t)
}
function eu(e, t) {
    return Qi(2048, 8, e, t)
}
function dp(e, t) {
    return Qi(4, 2, e, t)
}
function fp(e, t) {
    return Qi(4, 4, e, t)
}
function hp(e, t) {
    if (typeof t == "function")
        return e = e(),
            t(e),
            function () {
                t(null)
            }
            ;
    if (t != null)
        return e = e(),
            t.current = e,
            function () {
                t.current = null
            }
}
function pp(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
        Qi(4, 4, hp.bind(null, t, e), n)
}
function tu() { }
function mp(e, t) {
    var n = He();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ql(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
        e)
}
function gp(e, t) {
    var n = He();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ql(t, r[1]) ? r[0] : (e = e(),
        n.memoizedState = [e, t],
        e)
}
function yp(e, t, n) {
    return cn & 21 ? (Ze(n, t) || (n = jh(),
        G.lanes |= n,
        dn |= n,
        e.baseState = !0),
        t) : (e.baseState && (e.baseState = !1,
            Ne = !0),
            e.memoizedState = n)
}
function ev(e, t) {
    var n = F;
    F = n !== 0 && 4 > n ? n : 4,
        e(!0);
    var r = Io.transition;
    Io.transition = {};
    try {
        e(!1),
            t()
    } finally {
        F = n,
            Io.transition = r
    }
}
function vp() {
    return He().memoizedState
}
function tv(e, t, n) {
    var r = Vt(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
        xp(e))
        wp(t, n);
    else if (n = ep(e, t, n, r),
        n !== null) {
        var s = Se();
        qe(n, e, r, s),
            Sp(n, t, r)
    }
}
function nv(e, t, n) {
    var r = Vt(e)
        , s = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (xp(e))
        wp(t, s);
    else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer,
            i !== null))
            try {
                var o = t.lastRenderedState
                    , l = i(o, n);
                if (s.hasEagerState = !0,
                    s.eagerState = l,
                    Ze(l, o)) {
                    var u = t.interleaved;
                    u === null ? (s.next = s,
                        Kl(t)) : (s.next = u.next,
                            u.next = s),
                        t.interleaved = s;
                    return
                }
            } catch { } finally { }
        n = ep(e, t, s, r),
            n !== null && (s = Se(),
                qe(n, e, r, s),
                Sp(n, t, r))
    }
}
function xp(e) {
    var t = e.alternate;
    return e === G || t !== null && t === G
}
function wp(e, t) {
    Er = Ci = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
        n.next = t),
        e.pending = t
}
function Sp(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
            n |= r,
            t.lanes = n,
            Dl(e, n)
    }
}
var Ni = {
    readContext: $e,
    useCallback: pe,
    useContext: pe,
    useEffect: pe,
    useImperativeHandle: pe,
    useInsertionEffect: pe,
    useLayoutEffect: pe,
    useMemo: pe,
    useReducer: pe,
    useRef: pe,
    useState: pe,
    useDebugValue: pe,
    useDeferredValue: pe,
    useTransition: pe,
    useMutableSource: pe,
    useSyncExternalStore: pe,
    useId: pe,
    unstable_isNewReconciler: !1
}
    , rv = {
        readContext: $e,
        useCallback: function (e, t) {
            return et().memoizedState = [e, t === void 0 ? null : t],
                e
        },
        useContext: $e,
        useEffect: Bc,
        useImperativeHandle: function (e, t, n) {
            return n = n != null ? n.concat([e]) : null,
                Js(4194308, 4, hp.bind(null, t, e), n)
        },
        useLayoutEffect: function (e, t) {
            return Js(4194308, 4, e, t)
        },
        useInsertionEffect: function (e, t) {
            return Js(4, 2, e, t)
        },
        useMemo: function (e, t) {
            var n = et();
            return t = t === void 0 ? null : t,
                e = e(),
                n.memoizedState = [e, t],
                e
        },
        useReducer: function (e, t, n) {
            var r = et();
            return t = n !== void 0 ? n(t) : t,
                r.memoizedState = r.baseState = t,
                e = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: t
                },
                r.queue = e,
                e = e.dispatch = tv.bind(null, G, e),
                [r.memoizedState, e]
        },
        useRef: function (e) {
            var t = et();
            return e = {
                current: e
            },
                t.memoizedState = e
        },
        useState: zc,
        useDebugValue: tu,
        useDeferredValue: function (e) {
            return et().memoizedState = e
        },
        useTransition: function () {
            var e = zc(!1)
                , t = e[0];
            return e = ev.bind(null, e[1]),
                et().memoizedState = e,
                [t, e]
        },
        useMutableSource: function () { },
        useSyncExternalStore: function (e, t, n) {
            var r = G
                , s = et();
            if (H) {
                if (n === void 0)
                    throw Error(C(407));
                n = n()
            } else {
                if (n = t(),
                    le === null)
                    throw Error(C(349));
                cn & 30 || ip(r, t, n)
            }
            s.memoizedState = n;
            var i = {
                value: n,
                getSnapshot: t
            };
            return s.queue = i,
                Bc(ap.bind(null, r, i, e), [e]),
                r.flags |= 2048,
                Qr(9, op.bind(null, r, i, n, t), void 0, null),
                n
        },
        useId: function () {
            var e = et()
                , t = le.identifierPrefix;
            if (H) {
                var n = ut
                    , r = lt;
                n = (r & ~(1 << 32 - Qe(r) - 1)).toString(32) + n,
                    t = ":" + t + "R" + n,
                    n = Xr++,
                    0 < n && (t += "H" + n.toString(32)),
                    t += ":"
            } else
                n = Jy++,
                    t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    }
    , sv = {
        readContext: $e,
        useCallback: mp,
        useContext: $e,
        useEffect: eu,
        useImperativeHandle: pp,
        useInsertionEffect: dp,
        useLayoutEffect: fp,
        useMemo: gp,
        useReducer: _o,
        useRef: cp,
        useState: function () {
            return _o(Yr)
        },
        useDebugValue: tu,
        useDeferredValue: function (e) {
            var t = He();
            return yp(t, re.memoizedState, e)
        },
        useTransition: function () {
            var e = _o(Yr)[0]
                , t = He().memoizedState;
            return [e, t]
        },
        useMutableSource: rp,
        useSyncExternalStore: sp,
        useId: vp,
        unstable_isNewReconciler: !1
    }
    , iv = {
        readContext: $e,
        useCallback: mp,
        useContext: $e,
        useEffect: eu,
        useImperativeHandle: pp,
        useInsertionEffect: dp,
        useLayoutEffect: fp,
        useMemo: gp,
        useReducer: Oo,
        useRef: cp,
        useState: function () {
            return Oo(Yr)
        },
        useDebugValue: tu,
        useDeferredValue: function (e) {
            var t = He();
            return re === null ? t.memoizedState = e : yp(t, re.memoizedState, e)
        },
        useTransition: function () {
            var e = Oo(Yr)[0]
                , t = He().memoizedState;
            return [e, t]
        },
        useMutableSource: rp,
        useSyncExternalStore: sp,
        useId: vp,
        unstable_isNewReconciler: !1
    };
function Ge(e, t) {
    if (e && e.defaultProps) {
        t = X({}, t),
            e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function Va(e, t, n, r) {
    t = e.memoizedState,
        n = n(r, t),
        n = n == null ? t : X({}, t, n),
        e.memoizedState = n,
        e.lanes === 0 && (e.updateQueue.baseState = n)
}
var qi = {
    isMounted: function (e) {
        return (e = e._reactInternals) ? pn(e) === e : !1
    },
    enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = Se()
            , s = Vt(e)
            , i = ct(r, s);
        i.payload = t,
            n != null && (i.callback = n),
            t = Rt(e, i, s),
            t !== null && (qe(t, e, s, r),
                qs(t, e, s))
    },
    enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = Se()
            , s = Vt(e)
            , i = ct(r, s);
        i.tag = 1,
            i.payload = t,
            n != null && (i.callback = n),
            t = Rt(e, i, s),
            t !== null && (qe(t, e, s, r),
                qs(t, e, s))
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = Se()
            , r = Vt(e)
            , s = ct(n, r);
        s.tag = 2,
            t != null && (s.callback = t),
            t = Rt(e, s, r),
            t !== null && (qe(t, e, r, n),
                qs(t, e, r))
    }
};
function Uc(e, t, n, r, s, i, o) {
    return e = e.stateNode,
        typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, o) : t.prototype && t.prototype.isPureReactComponent ? !Ur(n, r) || !Ur(s, i) : !0
}
function jp(e, t, n) {
    var r = !1
        , s = Ft
        , i = t.contextType;
    return typeof i == "object" && i !== null ? i = $e(i) : (s = Ee(t) ? ln : xe.current,
        r = t.contextTypes,
        i = (r = r != null) ? Hn(e, s) : Ft),
        t = new t(n, i),
        e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
        t.updater = qi,
        e.stateNode = t,
        t._reactInternals = e,
        r && (e = e.stateNode,
            e.__reactInternalMemoizedUnmaskedChildContext = s,
            e.__reactInternalMemoizedMaskedChildContext = i),
        t
}
function $c(e, t, n, r) {
    e = t.state,
        typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && qi.enqueueReplaceState(t, t.state, null)
}
function Ia(e, t, n, r) {
    var s = e.stateNode;
    s.props = n,
        s.state = e.memoizedState,
        s.refs = {},
        Gl(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? s.context = $e(i) : (i = Ee(t) ? ln : xe.current,
        s.context = Hn(e, i)),
        s.state = e.memoizedState,
        i = t.getDerivedStateFromProps,
        typeof i == "function" && (Va(e, t, i, n),
            s.state = e.memoizedState),
        typeof t.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (t = s.state,
            typeof s.componentWillMount == "function" && s.componentWillMount(),
            typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(),
            t !== s.state && qi.enqueueReplaceState(s, s.state, null),
            ji(e, n, s, r),
            s.state = e.memoizedState),
        typeof s.componentDidMount == "function" && (e.flags |= 4194308)
}
function Xn(e, t) {
    try {
        var n = ""
            , r = t;
        do
            n += Rg(r),
                r = r.return;
        while (r);
        var s = n
    } catch (i) {
        s = `
Error generating stack: ` + i.message + `
` + i.stack
    }
    return {
        value: e,
        source: t,
        stack: s,
        digest: null
    }
}
function Fo(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function _a(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function () {
            throw n
        })
    }
}
var ov = typeof WeakMap == "function" ? WeakMap : Map;
function kp(e, t, n) {
    n = ct(-1, n),
        n.tag = 3,
        n.payload = {
            element: null
        };
    var r = t.value;
    return n.callback = function () {
        Ei || (Ei = !0,
            Ga = r),
            _a(e, t)
    }
        ,
        n
}
function Cp(e, t, n) {
    n = ct(-1, n),
        n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var s = t.value;
        n.payload = function () {
            return r(s)
        }
            ,
            n.callback = function () {
                _a(e, t)
            }
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function () {
        _a(e, t),
            typeof r != "function" && (Lt === null ? Lt = new Set([this]) : Lt.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: o !== null ? o : ""
        })
    }
    ),
        n
}
function Hc(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new ov;
        var s = new Set;
        r.set(t, s)
    } else
        s = r.get(t),
            s === void 0 && (s = new Set,
                r.set(t, s));
    s.has(n) || (s.add(n),
        e = wv.bind(null, e, t, n),
        t.then(e, e))
}
function Wc(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
            t = t !== null ? t.dehydrated !== null : !0),
            t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function Kc(e, t, n, r, s) {
    return e.mode & 1 ? (e.flags |= 65536,
        e.lanes = s,
        e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
            n.flags |= 131072,
            n.flags &= -52805,
            n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = ct(-1, 1),
                t.tag = 2,
                Rt(n, t, 1))),
            n.lanes |= 1),
            e)
}
var av = vt.ReactCurrentOwner
    , Ne = !1;
function we(e, t, n, r) {
    t.child = e === null ? Jh(t, null, n, r) : Kn(t, e.child, n, r)
}
function Gc(e, t, n, r, s) {
    n = n.render;
    var i = t.ref;
    return Bn(t, s),
        r = Zl(e, t, n, r, i, s),
        n = Jl(),
        e !== null && !Ne ? (t.updateQueue = e.updateQueue,
            t.flags &= -2053,
            e.lanes &= ~s,
            gt(e, t, s)) : (H && n && zl(t),
                t.flags |= 1,
                we(e, t, r, s),
                t.child)
}
function Xc(e, t, n, r, s) {
    if (e === null) {
        var i = n.type;
        return typeof i == "function" && !uu(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
            t.type = i,
            Np(e, t, i, r, s)) : (e = ri(n.type, null, r, t, t.mode, s),
                e.ref = t.ref,
                e.return = t,
                t.child = e)
    }
    if (i = e.child,
        !(e.lanes & s)) {
        var o = i.memoizedProps;
        if (n = n.compare,
            n = n !== null ? n : Ur,
            n(o, r) && e.ref === t.ref)
            return gt(e, t, s)
    }
    return t.flags |= 1,
        e = It(i, r),
        e.ref = t.ref,
        e.return = t,
        t.child = e
}
function Np(e, t, n, r, s) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (Ur(i, r) && e.ref === t.ref)
            if (Ne = !1,
                t.pendingProps = r = i,
                (e.lanes & s) !== 0)
                e.flags & 131072 && (Ne = !0);
            else
                return t.lanes = e.lanes,
                    gt(e, t, s)
    }
    return Oa(e, t, n, r, s)
}
function Tp(e, t, n) {
    var r = t.pendingProps
        , s = r.children
        , i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
                z(Mn, Ae),
                Ae |= n;
        else {
            if (!(n & 1073741824))
                return e = i !== null ? i.baseLanes | n : n,
                    t.lanes = t.childLanes = 1073741824,
                    t.memoizedState = {
                        baseLanes: e,
                        cachePool: null,
                        transitions: null
                    },
                    t.updateQueue = null,
                    z(Mn, Ae),
                    Ae |= e,
                    null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
                r = i !== null ? i.baseLanes : n,
                z(Mn, Ae),
                Ae |= r
        }
    else
        i !== null ? (r = i.baseLanes | n,
            t.memoizedState = null) : r = n,
            z(Mn, Ae),
            Ae |= r;
    return we(e, t, s, n),
        t.child
}
function Ep(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
        t.flags |= 2097152)
}
function Oa(e, t, n, r, s) {
    var i = Ee(n) ? ln : xe.current;
    return i = Hn(t, i),
        Bn(t, s),
        n = Zl(e, t, n, r, i, s),
        r = Jl(),
        e !== null && !Ne ? (t.updateQueue = e.updateQueue,
            t.flags &= -2053,
            e.lanes &= ~s,
            gt(e, t, s)) : (H && r && zl(t),
                t.flags |= 1,
                we(e, t, n, s),
                t.child)
}
function Yc(e, t, n, r, s) {
    if (Ee(n)) {
        var i = !0;
        yi(t)
    } else
        i = !1;
    if (Bn(t, s),
        t.stateNode === null)
        ei(e, t),
            jp(t, n, r),
            Ia(t, n, r, s),
            r = !0;
    else if (e === null) {
        var o = t.stateNode
            , l = t.memoizedProps;
        o.props = l;
        var u = o.context
            , c = n.contextType;
        typeof c == "object" && c !== null ? c = $e(c) : (c = Ee(n) ? ln : xe.current,
            c = Hn(t, c));
        var d = n.getDerivedStateFromProps
            , f = typeof d == "function" || typeof o.getSnapshotBeforeUpdate == "function";
        f || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (l !== r || u !== c) && $c(t, o, r, c),
            kt = !1;
        var h = t.memoizedState;
        o.state = h,
            ji(t, r, o, s),
            u = t.memoizedState,
            l !== r || h !== u || Te.current || kt ? (typeof d == "function" && (Va(t, n, d, r),
                u = t.memoizedState),
                (l = kt || Uc(t, n, l, r, h, u, c)) ? (f || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(),
                    typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()),
                    typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
                        t.memoizedProps = r,
                        t.memoizedState = u),
                o.props = r,
                o.state = u,
                o.context = c,
                r = l) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
                    r = !1)
    } else {
        o = t.stateNode,
            tp(e, t),
            l = t.memoizedProps,
            c = t.type === t.elementType ? l : Ge(t.type, l),
            o.props = c,
            f = t.pendingProps,
            h = o.context,
            u = n.contextType,
            typeof u == "object" && u !== null ? u = $e(u) : (u = Ee(n) ? ln : xe.current,
                u = Hn(t, u));
        var y = n.getDerivedStateFromProps;
        (d = typeof y == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (l !== f || h !== u) && $c(t, o, r, u),
            kt = !1,
            h = t.memoizedState,
            o.state = h,
            ji(t, r, o, s);
        var v = t.memoizedState;
        l !== f || h !== v || Te.current || kt ? (typeof y == "function" && (Va(t, n, y, r),
            v = t.memoizedState),
            (c = kt || Uc(t, n, c, r, h, v, u) || !1) ? (d || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, v, u),
                typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, v, u)),
                typeof o.componentDidUpdate == "function" && (t.flags |= 4),
                typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || l === e.memoizedProps && h === e.memoizedState || (t.flags |= 4),
                    typeof o.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024),
                    t.memoizedProps = r,
                    t.memoizedState = v),
            o.props = r,
            o.state = v,
            o.context = u,
            r = c) : (typeof o.componentDidUpdate != "function" || l === e.memoizedProps && h === e.memoizedState || (t.flags |= 4),
                typeof o.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024),
                r = !1)
    }
    return Fa(e, t, n, r, i, s)
}
function Fa(e, t, n, r, s, i) {
    Ep(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o)
        return s && Lc(t, n, !1),
            gt(e, t, i);
    r = t.stateNode,
        av.current = t;
    var l = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
        e !== null && o ? (t.child = Kn(t, e.child, null, i),
            t.child = Kn(t, null, l, i)) : we(e, t, l, i),
        t.memoizedState = r.state,
        s && Lc(t, n, !0),
        t.child
}
function Pp(e) {
    var t = e.stateNode;
    t.pendingContext ? Rc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Rc(e, t.context, !1),
        Xl(e, t.containerInfo)
}
function Qc(e, t, n, r, s) {
    return Wn(),
        Ul(s),
        t.flags |= 256,
        we(e, t, n, r),
        t.child
}
var za = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function Ba(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function Ap(e, t, n) {
    var r = t.pendingProps, s = W.current, i = !1, o = (t.flags & 128) !== 0, l;
    if ((l = o) || (l = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0),
        l ? (i = !0,
            t.flags &= -129) : (e === null || e.memoizedState !== null) && (s |= 1),
        z(W, s & 1),
        e === null)
        return Ra(t),
            e = t.memoizedState,
            e !== null && (e = e.dehydrated,
                e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
                    null) : (o = r.children,
                        e = r.fallback,
                        i ? (r = t.mode,
                            i = t.child,
                            o = {
                                mode: "hidden",
                                children: o
                            },
                            !(r & 1) && i !== null ? (i.childLanes = 0,
                                i.pendingProps = o) : i = eo(o, r, 0, null),
                            e = on(e, r, n, null),
                            i.return = t,
                            e.return = t,
                            i.sibling = e,
                            t.child = i,
                            t.child.memoizedState = Ba(n),
                            t.memoizedState = za,
                            e) : nu(t, o));
    if (s = e.memoizedState,
        s !== null && (l = s.dehydrated,
            l !== null))
        return lv(e, t, o, r, l, s, n);
    if (i) {
        i = r.fallback,
            o = t.mode,
            s = e.child,
            l = s.sibling;
        var u = {
            mode: "hidden",
            children: r.children
        };
        return !(o & 1) && t.child !== s ? (r = t.child,
            r.childLanes = 0,
            r.pendingProps = u,
            t.deletions = null) : (r = It(s, u),
                r.subtreeFlags = s.subtreeFlags & 14680064),
            l !== null ? i = It(l, i) : (i = on(i, o, n, null),
                i.flags |= 2),
            i.return = t,
            r.return = t,
            r.sibling = i,
            t.child = r,
            r = i,
            i = t.child,
            o = e.child.memoizedState,
            o = o === null ? Ba(n) : {
                baseLanes: o.baseLanes | n,
                cachePool: null,
                transitions: o.transitions
            },
            i.memoizedState = o,
            i.childLanes = e.childLanes & ~n,
            t.memoizedState = za,
            r
    }
    return i = e.child,
        e = i.sibling,
        r = It(i, {
            mode: "visible",
            children: r.children
        }),
        !(t.mode & 1) && (r.lanes = n),
        r.return = t,
        r.sibling = null,
        e !== null && (n = t.deletions,
            n === null ? (t.deletions = [e],
                t.flags |= 16) : n.push(e)),
        t.child = r,
        t.memoizedState = null,
        r
}
function nu(e, t) {
    return t = eo({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
        t.return = e,
        e.child = t
}
function _s(e, t, n, r) {
    return r !== null && Ul(r),
        Kn(t, e.child, null, n),
        e = nu(t, t.pendingProps.children),
        e.flags |= 2,
        t.memoizedState = null,
        e
}
function lv(e, t, n, r, s, i, o) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
            r = Fo(Error(C(422))),
            _s(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child,
                t.flags |= 128,
                null) : (i = r.fallback,
                    s = t.mode,
                    r = eo({
                        mode: "visible",
                        children: r.children
                    }, s, 0, null),
                    i = on(i, s, o, null),
                    i.flags |= 2,
                    r.return = t,
                    i.return = t,
                    r.sibling = i,
                    t.child = r,
                    t.mode & 1 && Kn(t, e.child, null, o),
                    t.child.memoizedState = Ba(o),
                    t.memoizedState = za,
                    i);
    if (!(t.mode & 1))
        return _s(e, t, o, null);
    if (s.data === "$!") {
        if (r = s.nextSibling && s.nextSibling.dataset,
            r)
            var l = r.dgst;
        return r = l,
            i = Error(C(419)),
            r = Fo(i, r, void 0),
            _s(e, t, o, r)
    }
    if (l = (o & e.childLanes) !== 0,
        Ne || l) {
        if (r = le,
            r !== null) {
            switch (o & -o) {
                case 4:
                    s = 2;
                    break;
                case 16:
                    s = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    s = 32;
                    break;
                case 536870912:
                    s = 268435456;
                    break;
                default:
                    s = 0
            }
            s = s & (r.suspendedLanes | o) ? 0 : s,
                s !== 0 && s !== i.retryLane && (i.retryLane = s,
                    mt(e, s),
                    qe(r, e, s, -1))
        }
        return lu(),
            r = Fo(Error(C(421))),
            _s(e, t, o, r)
    }
    return s.data === "$?" ? (t.flags |= 128,
        t.child = e.child,
        t = Sv.bind(null, e),
        s._reactRetry = t,
        null) : (e = i.treeContext,
            be = Dt(s.nextSibling),
            Me = t,
            H = !0,
            Ye = null,
            e !== null && (Fe[ze++] = lt,
                Fe[ze++] = ut,
                Fe[ze++] = un,
                lt = e.id,
                ut = e.overflow,
                un = t),
            t = nu(t, r.children),
            t.flags |= 4096,
            t)
}
function qc(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
        La(e.return, t, n)
}
function zo(e, t, n, r, s) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: s
    } : (i.isBackwards = t,
        i.rendering = null,
        i.renderingStartTime = 0,
        i.last = r,
        i.tail = n,
        i.tailMode = s)
}
function bp(e, t, n) {
    var r = t.pendingProps
        , s = r.revealOrder
        , i = r.tail;
    if (we(e, t, r.children, n),
        r = W.current,
        r & 2)
        r = r & 1 | 2,
            t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null;) {
                if (e.tag === 13)
                    e.memoizedState !== null && qc(e, n, t);
                else if (e.tag === 19)
                    qc(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                        e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null;) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                    e = e.sibling
            }
        r &= 1
    }
    if (z(W, r),
        !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (s) {
            case "forwards":
                for (n = t.child,
                    s = null; n !== null;)
                    e = n.alternate,
                        e !== null && ki(e) === null && (s = n),
                        n = n.sibling;
                n = s,
                    n === null ? (s = t.child,
                        t.child = null) : (s = n.sibling,
                            n.sibling = null),
                    zo(t, !1, s, n, i);
                break;
            case "backwards":
                for (n = null,
                    s = t.child,
                    t.child = null; s !== null;) {
                    if (e = s.alternate,
                        e !== null && ki(e) === null) {
                        t.child = s;
                        break
                    }
                    e = s.sibling,
                        s.sibling = n,
                        n = s,
                        s = e
                }
                zo(t, !0, n, null, i);
                break;
            case "together":
                zo(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null
        }
    return t.child
}
function ei(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
        t.alternate = null,
        t.flags |= 2)
}
function gt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
        dn |= t.lanes,
        !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(C(153));
    if (t.child !== null) {
        for (e = t.child,
            n = It(e, e.pendingProps),
            t.child = n,
            n.return = t; e.sibling !== null;)
            e = e.sibling,
                n = n.sibling = It(e, e.pendingProps),
                n.return = t;
        n.sibling = null
    }
    return t.child
}
function uv(e, t, n) {
    switch (t.tag) {
        case 3:
            Pp(t),
                Wn();
            break;
        case 5:
            np(t);
            break;
        case 1:
            Ee(t.type) && yi(t);
            break;
        case 4:
            Xl(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context
                , s = t.memoizedProps.value;
            z(wi, r._currentValue),
                r._currentValue = s;
            break;
        case 13:
            if (r = t.memoizedState,
                r !== null)
                return r.dehydrated !== null ? (z(W, W.current & 1),
                    t.flags |= 128,
                    null) : n & t.child.childLanes ? Ap(e, t, n) : (z(W, W.current & 1),
                        e = gt(e, t, n),
                        e !== null ? e.sibling : null);
            z(W, W.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0,
                e.flags & 128) {
                if (r)
                    return bp(e, t, n);
                t.flags |= 128
            }
            if (s = t.memoizedState,
                s !== null && (s.rendering = null,
                    s.tail = null,
                    s.lastEffect = null),
                z(W, W.current),
                r)
                break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0,
                Tp(e, t, n)
    }
    return gt(e, t, n)
}
var Mp, Ua, Dp, Rp;
Mp = function (e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
                n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
            n = n.sibling
    }
}
    ;
Ua = function () { }
    ;
Dp = function (e, t, n, r) {
    var s = e.memoizedProps;
    if (s !== r) {
        e = t.stateNode,
            nn(rt.current);
        var i = null;
        switch (n) {
            case "input":
                s = ca(e, s),
                    r = ca(e, r),
                    i = [];
                break;
            case "select":
                s = X({}, s, {
                    value: void 0
                }),
                    r = X({}, r, {
                        value: void 0
                    }),
                    i = [];
                break;
            case "textarea":
                s = ha(e, s),
                    r = ha(e, r),
                    i = [];
                break;
            default:
                typeof s.onClick != "function" && typeof r.onClick == "function" && (e.onclick = mi)
        }
        ma(n, r);
        var o;
        n = null;
        for (c in s)
            if (!r.hasOwnProperty(c) && s.hasOwnProperty(c) && s[c] != null)
                if (c === "style") {
                    var l = s[c];
                    for (o in l)
                        l.hasOwnProperty(o) && (n || (n = {}),
                            n[o] = "")
                } else
                    c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Vr.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null));
        for (c in r) {
            var u = r[c];
            if (l = s != null ? s[c] : void 0,
                r.hasOwnProperty(c) && u !== l && (u != null || l != null))
                if (c === "style")
                    if (l) {
                        for (o in l)
                            !l.hasOwnProperty(o) || u && u.hasOwnProperty(o) || (n || (n = {}),
                                n[o] = "");
                        for (o in u)
                            u.hasOwnProperty(o) && l[o] !== u[o] && (n || (n = {}),
                                n[o] = u[o])
                    } else
                        n || (i || (i = []),
                            i.push(c, n)),
                            n = u;
                else
                    c === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0,
                        l = l ? l.__html : void 0,
                        u != null && l !== u && (i = i || []).push(c, u)) : c === "children" ? typeof u != "string" && typeof u != "number" || (i = i || []).push(c, "" + u) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Vr.hasOwnProperty(c) ? (u != null && c === "onScroll" && B("scroll", e),
                            i || l === u || (i = [])) : (i = i || []).push(c, u))
        }
        n && (i = i || []).push("style", n);
        var c = i;
        (t.updateQueue = c) && (t.flags |= 4)
    }
}
    ;
Rp = function (e, t, n, r) {
    n !== r && (t.flags |= 4)
}
    ;
function fr(e, t) {
    if (!H)
        switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var n = null; t !== null;)
                    t.alternate !== null && (n = t),
                        t = t.sibling;
                n === null ? e.tail = null : n.sibling = null;
                break;
            case "collapsed":
                n = e.tail;
                for (var r = null; n !== null;)
                    n.alternate !== null && (r = n),
                        n = n.sibling;
                r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function me(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
        , n = 0
        , r = 0;
    if (t)
        for (var s = e.child; s !== null;)
            n |= s.lanes | s.childLanes,
                r |= s.subtreeFlags & 14680064,
                r |= s.flags & 14680064,
                s.return = e,
                s = s.sibling;
    else
        for (s = e.child; s !== null;)
            n |= s.lanes | s.childLanes,
                r |= s.subtreeFlags,
                r |= s.flags,
                s.return = e,
                s = s.sibling;
    return e.subtreeFlags |= r,
        e.childLanes = n,
        t
}
function cv(e, t, n) {
    var r = t.pendingProps;
    switch (Bl(t),
    t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return me(t),
                null;
        case 1:
            return Ee(t.type) && gi(),
                me(t),
                null;
        case 3:
            return r = t.stateNode,
                Gn(),
                U(Te),
                U(xe),
                Ql(),
                r.pendingContext && (r.context = r.pendingContext,
                    r.pendingContext = null),
                (e === null || e.child === null) && (Vs(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
                    Ye !== null && (Qa(Ye),
                        Ye = null))),
                Ua(e, t),
                me(t),
                null;
        case 5:
            Yl(t);
            var s = nn(Gr.current);
            if (n = t.type,
                e !== null && t.stateNode != null)
                Dp(e, t, n, r, s),
                    e.ref !== t.ref && (t.flags |= 512,
                        t.flags |= 2097152);
            else {
                if (!r) {
                    if (t.stateNode === null)
                        throw Error(C(166));
                    return me(t),
                        null
                }
                if (e = nn(rt.current),
                    Vs(t)) {
                    r = t.stateNode,
                        n = t.type;
                    var i = t.memoizedProps;
                    switch (r[tt] = t,
                    r[Wr] = i,
                    e = (t.mode & 1) !== 0,
                    n) {
                        case "dialog":
                            B("cancel", r),
                                B("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            B("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (s = 0; s < vr.length; s++)
                                B(vr[s], r);
                            break;
                        case "source":
                            B("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            B("error", r),
                                B("load", r);
                            break;
                        case "details":
                            B("toggle", r);
                            break;
                        case "input":
                            oc(r, i),
                                B("invalid", r);
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!i.multiple
                            },
                                B("invalid", r);
                            break;
                        case "textarea":
                            lc(r, i),
                                B("invalid", r)
                    }
                    ma(n, i),
                        s = null;
                    for (var o in i)
                        if (i.hasOwnProperty(o)) {
                            var l = i[o];
                            o === "children" ? typeof l == "string" ? r.textContent !== l && (i.suppressHydrationWarning !== !0 && Ls(r.textContent, l, e),
                                s = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (i.suppressHydrationWarning !== !0 && Ls(r.textContent, l, e),
                                    s = ["children", "" + l]) : Vr.hasOwnProperty(o) && l != null && o === "onScroll" && B("scroll", r)
                        }
                    switch (n) {
                        case "input":
                            Ts(r),
                                ac(r, i, !0);
                            break;
                        case "textarea":
                            Ts(r),
                                uc(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof i.onClick == "function" && (r.onclick = mi)
                    }
                    r = s,
                        t.updateQueue = r,
                        r !== null && (t.flags |= 4)
                } else {
                    o = s.nodeType === 9 ? s : s.ownerDocument,
                        e === "http://www.w3.org/1999/xhtml" && (e = ah(n)),
                        e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"),
                            e.innerHTML = "<script><\/script>",
                            e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, {
                                is: r.is
                            }) : (e = o.createElement(n),
                                n === "select" && (o = e,
                                    r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n),
                        e[tt] = t,
                        e[Wr] = r,
                        Mp(e, t, !1, !1),
                        t.stateNode = e;
                    e: {
                        switch (o = ga(n, r),
                        n) {
                            case "dialog":
                                B("cancel", e),
                                    B("close", e),
                                    s = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                B("load", e),
                                    s = r;
                                break;
                            case "video":
                            case "audio":
                                for (s = 0; s < vr.length; s++)
                                    B(vr[s], e);
                                s = r;
                                break;
                            case "source":
                                B("error", e),
                                    s = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                B("error", e),
                                    B("load", e),
                                    s = r;
                                break;
                            case "details":
                                B("toggle", e),
                                    s = r;
                                break;
                            case "input":
                                oc(e, r),
                                    s = ca(e, r),
                                    B("invalid", e);
                                break;
                            case "option":
                                s = r;
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                },
                                    s = X({}, r, {
                                        value: void 0
                                    }),
                                    B("invalid", e);
                                break;
                            case "textarea":
                                lc(e, r),
                                    s = ha(e, r),
                                    B("invalid", e);
                                break;
                            default:
                                s = r
                        }
                        ma(n, s),
                            l = s;
                        for (i in l)
                            if (l.hasOwnProperty(i)) {
                                var u = l[i];
                                i === "style" ? ch(e, u) : i === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0,
                                    u != null && lh(e, u)) : i === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && Ir(e, u) : typeof u == "number" && Ir(e, "" + u) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Vr.hasOwnProperty(i) ? u != null && i === "onScroll" && B("scroll", e) : u != null && Tl(e, i, u, o))
                            }
                        switch (n) {
                            case "input":
                                Ts(e),
                                    ac(e, r, !1);
                                break;
                            case "textarea":
                                Ts(e),
                                    uc(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + Ot(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple,
                                    i = r.value,
                                    i != null ? _n(e, !!r.multiple, i, !1) : r.defaultValue != null && _n(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof s.onClick == "function" && (e.onclick = mi)
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512,
                    t.flags |= 2097152)
            }
            return me(t),
                null;
        case 6:
            if (e && t.stateNode != null)
                Rp(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null)
                    throw Error(C(166));
                if (n = nn(Gr.current),
                    nn(rt.current),
                    Vs(t)) {
                    if (r = t.stateNode,
                        n = t.memoizedProps,
                        r[tt] = t,
                        (i = r.nodeValue !== n) && (e = Me,
                            e !== null))
                        switch (e.tag) {
                            case 3:
                                Ls(r.nodeValue, n, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !== !0 && Ls(r.nodeValue, n, (e.mode & 1) !== 0)
                        }
                    i && (t.flags |= 4)
                } else
                    r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                        r[tt] = t,
                        t.stateNode = r
            }
            return me(t),
                null;
        case 13:
            if (U(W),
                r = t.memoizedState,
                e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (H && be !== null && t.mode & 1 && !(t.flags & 128))
                    qh(),
                        Wn(),
                        t.flags |= 98560,
                        i = !1;
                else if (i = Vs(t),
                    r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!i)
                            throw Error(C(318));
                        if (i = t.memoizedState,
                            i = i !== null ? i.dehydrated : null,
                            !i)
                            throw Error(C(317));
                        i[tt] = t
                    } else
                        Wn(),
                            !(t.flags & 128) && (t.memoizedState = null),
                            t.flags |= 4;
                    me(t),
                        i = !1
                } else
                    Ye !== null && (Qa(Ye),
                        Ye = null),
                        i = !0;
                if (!i)
                    return t.flags & 65536 ? t : null
            }
            return t.flags & 128 ? (t.lanes = n,
                t) : (r = r !== null,
                    r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
                        t.mode & 1 && (e === null || W.current & 1 ? se === 0 && (se = 3) : lu())),
                    t.updateQueue !== null && (t.flags |= 4),
                    me(t),
                    null);
        case 4:
            return Gn(),
                Ua(e, t),
                e === null && $r(t.stateNode.containerInfo),
                me(t),
                null;
        case 10:
            return Wl(t.type._context),
                me(t),
                null;
        case 17:
            return Ee(t.type) && gi(),
                me(t),
                null;
        case 19:
            if (U(W),
                i = t.memoizedState,
                i === null)
                return me(t),
                    null;
            if (r = (t.flags & 128) !== 0,
                o = i.rendering,
                o === null)
                if (r)
                    fr(i, !1);
                else {
                    if (se !== 0 || e !== null && e.flags & 128)
                        for (e = t.child; e !== null;) {
                            if (o = ki(e),
                                o !== null) {
                                for (t.flags |= 128,
                                    fr(i, !1),
                                    r = o.updateQueue,
                                    r !== null && (t.updateQueue = r,
                                        t.flags |= 4),
                                    t.subtreeFlags = 0,
                                    r = n,
                                    n = t.child; n !== null;)
                                    i = n,
                                        e = r,
                                        i.flags &= 14680066,
                                        o = i.alternate,
                                        o === null ? (i.childLanes = 0,
                                            i.lanes = e,
                                            i.child = null,
                                            i.subtreeFlags = 0,
                                            i.memoizedProps = null,
                                            i.memoizedState = null,
                                            i.updateQueue = null,
                                            i.dependencies = null,
                                            i.stateNode = null) : (i.childLanes = o.childLanes,
                                                i.lanes = o.lanes,
                                                i.child = o.child,
                                                i.subtreeFlags = 0,
                                                i.deletions = null,
                                                i.memoizedProps = o.memoizedProps,
                                                i.memoizedState = o.memoizedState,
                                                i.updateQueue = o.updateQueue,
                                                i.type = o.type,
                                                e = o.dependencies,
                                                i.dependencies = e === null ? null : {
                                                    lanes: e.lanes,
                                                    firstContext: e.firstContext
                                                }),
                                        n = n.sibling;
                                return z(W, W.current & 1 | 2),
                                    t.child
                            }
                            e = e.sibling
                        }
                    i.tail !== null && J() > Yn && (t.flags |= 128,
                        r = !0,
                        fr(i, !1),
                        t.lanes = 4194304)
                }
            else {
                if (!r)
                    if (e = ki(o),
                        e !== null) {
                        if (t.flags |= 128,
                            r = !0,
                            n = e.updateQueue,
                            n !== null && (t.updateQueue = n,
                                t.flags |= 4),
                            fr(i, !0),
                            i.tail === null && i.tailMode === "hidden" && !o.alternate && !H)
                            return me(t),
                                null
                    } else
                        2 * J() - i.renderingStartTime > Yn && n !== 1073741824 && (t.flags |= 128,
                            r = !0,
                            fr(i, !1),
                            t.lanes = 4194304);
                i.isBackwards ? (o.sibling = t.child,
                    t.child = o) : (n = i.last,
                        n !== null ? n.sibling = o : t.child = o,
                        i.last = o)
            }
            return i.tail !== null ? (t = i.tail,
                i.rendering = t,
                i.tail = t.sibling,
                i.renderingStartTime = J(),
                t.sibling = null,
                n = W.current,
                z(W, r ? n & 1 | 2 : n & 1),
                t) : (me(t),
                    null);
        case 22:
        case 23:
            return au(),
                r = t.memoizedState !== null,
                e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
                r && t.mode & 1 ? Ae & 1073741824 && (me(t),
                    t.subtreeFlags & 6 && (t.flags |= 8192)) : me(t),
                null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(C(156, t.tag))
}
function dv(e, t) {
    switch (Bl(t),
    t.tag) {
        case 1:
            return Ee(t.type) && gi(),
                e = t.flags,
                e & 65536 ? (t.flags = e & -65537 | 128,
                    t) : null;
        case 3:
            return Gn(),
                U(Te),
                U(xe),
                Ql(),
                e = t.flags,
                e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
                    t) : null;
        case 5:
            return Yl(t),
                null;
        case 13:
            if (U(W),
                e = t.memoizedState,
                e !== null && e.dehydrated !== null) {
                if (t.alternate === null)
                    throw Error(C(340));
                Wn()
            }
            return e = t.flags,
                e & 65536 ? (t.flags = e & -65537 | 128,
                    t) : null;
        case 19:
            return U(W),
                null;
        case 4:
            return Gn(),
                null;
        case 10:
            return Wl(t.type._context),
                null;
        case 22:
        case 23:
            return au(),
                null;
        case 24:
            return null;
        default:
            return null
    }
}
var Os = !1
    , ye = !1
    , fv = typeof WeakSet == "function" ? WeakSet : Set
    , A = null;
function bn(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                Q(e, t, r)
            }
        else
            n.current = null
}
function $a(e, t, n) {
    try {
        n()
    } catch (r) {
        Q(e, t, r)
    }
}
var Zc = !1;
function hv(e, t) {
    if (Ta = fi,
        e = Oh(),
        Fl(e)) {
        if ("selectionStart" in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var s = r.anchorOffset
                        , i = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                            i.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var o = 0
                        , l = -1
                        , u = -1
                        , c = 0
                        , d = 0
                        , f = e
                        , h = null;
                    t: for (; ;) {
                        for (var y; f !== n || s !== 0 && f.nodeType !== 3 || (l = o + s),
                            f !== i || r !== 0 && f.nodeType !== 3 || (u = o + r),
                            f.nodeType === 3 && (o += f.nodeValue.length),
                            (y = f.firstChild) !== null;)
                            h = f,
                                f = y;
                        for (; ;) {
                            if (f === e)
                                break t;
                            if (h === n && ++c === s && (l = o),
                                h === i && ++d === r && (u = o),
                                (y = f.nextSibling) !== null)
                                break;
                            f = h,
                                h = f.parentNode
                        }
                        f = y
                    }
                    n = l === -1 || u === -1 ? null : {
                        start: l,
                        end: u
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (Ea = {
        focusedElem: e,
        selectionRange: n
    },
        fi = !1,
        A = t; A !== null;)
        if (t = A,
            e = t.child,
            (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
                A = e;
        else
            for (; A !== null;) {
                t = A;
                try {
                    var v = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (v !== null) {
                                    var w = v.memoizedProps
                                        , j = v.memoizedState
                                        , m = t.stateNode
                                        , p = m.getSnapshotBeforeUpdate(t.elementType === t.type ? w : Ge(t.type, w), j);
                                    m.__reactInternalSnapshotBeforeUpdate = p
                                }
                                break;
                            case 3:
                                var g = t.stateNode.containerInfo;
                                g.nodeType === 1 ? g.textContent = "" : g.nodeType === 9 && g.documentElement && g.removeChild(g.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(C(163))
                        }
                } catch (S) {
                    Q(t, t.return, S)
                }
                if (e = t.sibling,
                    e !== null) {
                    e.return = t.return,
                        A = e;
                    break
                }
                A = t.return
            }
    return v = Zc,
        Zc = !1,
        v
}
function Pr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
        r !== null) {
        var s = r = r.next;
        do {
            if ((s.tag & e) === e) {
                var i = s.destroy;
                s.destroy = void 0,
                    i !== void 0 && $a(t, n, i)
            }
            s = s.next
        } while (s !== r)
    }
}
function Zi(e, t) {
    if (t = t.updateQueue,
        t = t !== null ? t.lastEffect : null,
        t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function Ha(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function Lp(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
        Lp(t)),
        e.child = null,
        e.deletions = null,
        e.sibling = null,
        e.tag === 5 && (t = e.stateNode,
            t !== null && (delete t[tt],
                delete t[Wr],
                delete t[ba],
                delete t[Yy],
                delete t[Qy])),
        e.stateNode = null,
        e.return = null,
        e.dependencies = null,
        e.memoizedProps = null,
        e.memoizedState = null,
        e.pendingProps = null,
        e.stateNode = null,
        e.updateQueue = null
}
function Vp(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Jc(e) {
    e: for (; ;) {
        for (; e.sibling === null;) {
            if (e.return === null || Vp(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
            e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
                e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function Wa(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
            t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
                t.insertBefore(e, n)) : (t = n,
                    t.appendChild(e)),
                n = n._reactRootContainer,
                n != null || t.onclick !== null || (t.onclick = mi));
    else if (r !== 4 && (e = e.child,
        e !== null))
        for (Wa(e, t, n),
            e = e.sibling; e !== null;)
            Wa(e, t, n),
                e = e.sibling
}
function Ka(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
            t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
        e !== null))
        for (Ka(e, t, n),
            e = e.sibling; e !== null;)
            Ka(e, t, n),
                e = e.sibling
}
var ce = null
    , Xe = !1;
function wt(e, t, n) {
    for (n = n.child; n !== null;)
        Ip(e, t, n),
            n = n.sibling
}
function Ip(e, t, n) {
    if (nt && typeof nt.onCommitFiberUnmount == "function")
        try {
            nt.onCommitFiberUnmount(Hi, n)
        } catch { }
    switch (n.tag) {
        case 5:
            ye || bn(n, t);
        case 6:
            var r = ce
                , s = Xe;
            ce = null,
                wt(e, t, n),
                ce = r,
                Xe = s,
                ce !== null && (Xe ? (e = ce,
                    n = n.stateNode,
                    e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ce.removeChild(n.stateNode));
            break;
        case 18:
            ce !== null && (Xe ? (e = ce,
                n = n.stateNode,
                e.nodeType === 8 ? Ro(e.parentNode, n) : e.nodeType === 1 && Ro(e, n),
                zr(e)) : Ro(ce, n.stateNode));
            break;
        case 4:
            r = ce,
                s = Xe,
                ce = n.stateNode.containerInfo,
                Xe = !0,
                wt(e, t, n),
                ce = r,
                Xe = s;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!ye && (r = n.updateQueue,
                r !== null && (r = r.lastEffect,
                    r !== null))) {
                s = r = r.next;
                do {
                    var i = s
                        , o = i.destroy;
                    i = i.tag,
                        o !== void 0 && (i & 2 || i & 4) && $a(n, t, o),
                        s = s.next
                } while (s !== r)
            }
            wt(e, t, n);
            break;
        case 1:
            if (!ye && (bn(n, t),
                r = n.stateNode,
                typeof r.componentWillUnmount == "function"))
                try {
                    r.props = n.memoizedProps,
                        r.state = n.memoizedState,
                        r.componentWillUnmount()
                } catch (l) {
                    Q(n, t, l)
                }
            wt(e, t, n);
            break;
        case 21:
            wt(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (ye = (r = ye) || n.memoizedState !== null,
                wt(e, t, n),
                ye = r) : wt(e, t, n);
            break;
        default:
            wt(e, t, n)
    }
}
function ed(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new fv),
            t.forEach(function (r) {
                var s = jv.bind(null, e, r);
                n.has(r) || (n.add(r),
                    r.then(s, s))
            })
    }
}
function We(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var s = n[r];
            try {
                var i = e
                    , o = t
                    , l = o;
                e: for (; l !== null;) {
                    switch (l.tag) {
                        case 5:
                            ce = l.stateNode,
                                Xe = !1;
                            break e;
                        case 3:
                            ce = l.stateNode.containerInfo,
                                Xe = !0;
                            break e;
                        case 4:
                            ce = l.stateNode.containerInfo,
                                Xe = !0;
                            break e
                    }
                    l = l.return
                }
                if (ce === null)
                    throw Error(C(160));
                Ip(i, o, s),
                    ce = null,
                    Xe = !1;
                var u = s.alternate;
                u !== null && (u.return = null),
                    s.return = null
            } catch (c) {
                Q(s, t, c)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;)
            _p(t, e),
                t = t.sibling
}
function _p(e, t) {
    var n = e.alternate
        , r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (We(t, e),
                Je(e),
                r & 4) {
                try {
                    Pr(3, e, e.return),
                        Zi(3, e)
                } catch (w) {
                    Q(e, e.return, w)
                }
                try {
                    Pr(5, e, e.return)
                } catch (w) {
                    Q(e, e.return, w)
                }
            }
            break;
        case 1:
            We(t, e),
                Je(e),
                r & 512 && n !== null && bn(n, n.return);
            break;
        case 5:
            if (We(t, e),
                Je(e),
                r & 512 && n !== null && bn(n, n.return),
                e.flags & 32) {
                var s = e.stateNode;
                try {
                    Ir(s, "")
                } catch (w) {
                    Q(e, e.return, w)
                }
            }
            if (r & 4 && (s = e.stateNode,
                s != null)) {
                var i = e.memoizedProps
                    , o = n !== null ? n.memoizedProps : i
                    , l = e.type
                    , u = e.updateQueue;
                if (e.updateQueue = null,
                    u !== null)
                    try {
                        l === "input" && i.type === "radio" && i.name != null && ih(s, i),
                            ga(l, o);
                        var c = ga(l, i);
                        for (o = 0; o < u.length; o += 2) {
                            var d = u[o]
                                , f = u[o + 1];
                            d === "style" ? ch(s, f) : d === "dangerouslySetInnerHTML" ? lh(s, f) : d === "children" ? Ir(s, f) : Tl(s, d, f, c)
                        }
                        switch (l) {
                            case "input":
                                da(s, i);
                                break;
                            case "textarea":
                                oh(s, i);
                                break;
                            case "select":
                                var h = s._wrapperState.wasMultiple;
                                s._wrapperState.wasMultiple = !!i.multiple;
                                var y = i.value;
                                y != null ? _n(s, !!i.multiple, y, !1) : h !== !!i.multiple && (i.defaultValue != null ? _n(s, !!i.multiple, i.defaultValue, !0) : _n(s, !!i.multiple, i.multiple ? [] : "", !1))
                        }
                        s[Wr] = i
                    } catch (w) {
                        Q(e, e.return, w)
                    }
            }
            break;
        case 6:
            if (We(t, e),
                Je(e),
                r & 4) {
                if (e.stateNode === null)
                    throw Error(C(162));
                s = e.stateNode,
                    i = e.memoizedProps;
                try {
                    s.nodeValue = i
                } catch (w) {
                    Q(e, e.return, w)
                }
            }
            break;
        case 3:
            if (We(t, e),
                Je(e),
                r & 4 && n !== null && n.memoizedState.isDehydrated)
                try {
                    zr(t.containerInfo)
                } catch (w) {
                    Q(e, e.return, w)
                }
            break;
        case 4:
            We(t, e),
                Je(e);
            break;
        case 13:
            We(t, e),
                Je(e),
                s = e.child,
                s.flags & 8192 && (i = s.memoizedState !== null,
                    s.stateNode.isHidden = i,
                    !i || s.alternate !== null && s.alternate.memoizedState !== null || (iu = J())),
                r & 4 && ed(e);
            break;
        case 22:
            if (d = n !== null && n.memoizedState !== null,
                e.mode & 1 ? (ye = (c = ye) || d,
                    We(t, e),
                    ye = c) : We(t, e),
                Je(e),
                r & 8192) {
                if (c = e.memoizedState !== null,
                    (e.stateNode.isHidden = c) && !d && e.mode & 1)
                    for (A = e,
                        d = e.child; d !== null;) {
                        for (f = A = d; A !== null;) {
                            switch (h = A,
                            y = h.child,
                            h.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Pr(4, h, h.return);
                                    break;
                                case 1:
                                    bn(h, h.return);
                                    var v = h.stateNode;
                                    if (typeof v.componentWillUnmount == "function") {
                                        r = h,
                                            n = h.return;
                                        try {
                                            t = r,
                                                v.props = t.memoizedProps,
                                                v.state = t.memoizedState,
                                                v.componentWillUnmount()
                                        } catch (w) {
                                            Q(r, n, w)
                                        }
                                    }
                                    break;
                                case 5:
                                    bn(h, h.return);
                                    break;
                                case 22:
                                    if (h.memoizedState !== null) {
                                        nd(f);
                                        continue
                                    }
                            }
                            y !== null ? (y.return = h,
                                A = y) : nd(f)
                        }
                        d = d.sibling
                    }
                e: for (d = null,
                    f = e; ;) {
                    if (f.tag === 5) {
                        if (d === null) {
                            d = f;
                            try {
                                s = f.stateNode,
                                    c ? (i = s.style,
                                        typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (l = f.stateNode,
                                            u = f.memoizedProps.style,
                                            o = u != null && u.hasOwnProperty("display") ? u.display : null,
                                            l.style.display = uh("display", o))
                            } catch (w) {
                                Q(e, e.return, w)
                            }
                        }
                    } else if (f.tag === 6) {
                        if (d === null)
                            try {
                                f.stateNode.nodeValue = c ? "" : f.memoizedProps
                            } catch (w) {
                                Q(e, e.return, w)
                            }
                    } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
                        f.child.return = f,
                            f = f.child;
                        continue
                    }
                    if (f === e)
                        break e;
                    for (; f.sibling === null;) {
                        if (f.return === null || f.return === e)
                            break e;
                        d === f && (d = null),
                            f = f.return
                    }
                    d === f && (d = null),
                        f.sibling.return = f.return,
                        f = f.sibling
                }
            }
            break;
        case 19:
            We(t, e),
                Je(e),
                r & 4 && ed(e);
            break;
        case 21:
            break;
        default:
            We(t, e),
                Je(e)
    }
}
function Je(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null;) {
                    if (Vp(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(C(160))
            }
            switch (r.tag) {
                case 5:
                    var s = r.stateNode;
                    r.flags & 32 && (Ir(s, ""),
                        r.flags &= -33);
                    var i = Jc(e);
                    Ka(e, i, s);
                    break;
                case 3:
                case 4:
                    var o = r.stateNode.containerInfo
                        , l = Jc(e);
                    Wa(e, l, o);
                    break;
                default:
                    throw Error(C(161))
            }
        } catch (u) {
            Q(e, e.return, u)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function pv(e, t, n) {
    A = e,
        Op(e)
}
function Op(e, t, n) {
    for (var r = (e.mode & 1) !== 0; A !== null;) {
        var s = A
            , i = s.child;
        if (s.tag === 22 && r) {
            var o = s.memoizedState !== null || Os;
            if (!o) {
                var l = s.alternate
                    , u = l !== null && l.memoizedState !== null || ye;
                l = Os;
                var c = ye;
                if (Os = o,
                    (ye = u) && !c)
                    for (A = s; A !== null;)
                        o = A,
                            u = o.child,
                            o.tag === 22 && o.memoizedState !== null ? rd(s) : u !== null ? (u.return = o,
                                A = u) : rd(s);
                for (; i !== null;)
                    A = i,
                        Op(i),
                        i = i.sibling;
                A = s,
                    Os = l,
                    ye = c
            }
            td(e)
        } else
            s.subtreeFlags & 8772 && i !== null ? (i.return = s,
                A = i) : td(e)
    }
}
function td(e) {
    for (; A !== null;) {
        var t = A;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            ye || Zi(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (t.flags & 4 && !ye)
                                if (n === null)
                                    r.componentDidMount();
                                else {
                                    var s = t.elementType === t.type ? n.memoizedProps : Ge(t.type, n.memoizedProps);
                                    r.componentDidUpdate(s, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                                }
                            var i = t.updateQueue;
                            i !== null && Fc(t, i, r);
                            break;
                        case 3:
                            var o = t.updateQueue;
                            if (o !== null) {
                                if (n = null,
                                    t.child !== null)
                                    switch (t.child.tag) {
                                        case 5:
                                            n = t.child.stateNode;
                                            break;
                                        case 1:
                                            n = t.child.stateNode
                                    }
                                Fc(t, o, n)
                            }
                            break;
                        case 5:
                            var l = t.stateNode;
                            if (n === null && t.flags & 4) {
                                n = l;
                                var u = t.memoizedProps;
                                switch (t.type) {
                                    case "button":
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        u.autoFocus && n.focus();
                                        break;
                                    case "img":
                                        u.src && (n.src = u.src)
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (t.memoizedState === null) {
                                var c = t.alternate;
                                if (c !== null) {
                                    var d = c.memoizedState;
                                    if (d !== null) {
                                        var f = d.dehydrated;
                                        f !== null && zr(f)
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(C(163))
                    }
                ye || t.flags & 512 && Ha(t)
            } catch (h) {
                Q(t, t.return, h)
            }
        }
        if (t === e) {
            A = null;
            break
        }
        if (n = t.sibling,
            n !== null) {
            n.return = t.return,
                A = n;
            break
        }
        A = t.return
    }
}
function nd(e) {
    for (; A !== null;) {
        var t = A;
        if (t === e) {
            A = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
                A = n;
            break
        }
        A = t.return
    }
}
function rd(e) {
    for (; A !== null;) {
        var t = A;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        Zi(4, t)
                    } catch (u) {
                        Q(t, n, u)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var s = t.return;
                        try {
                            r.componentDidMount()
                        } catch (u) {
                            Q(t, s, u)
                        }
                    }
                    var i = t.return;
                    try {
                        Ha(t)
                    } catch (u) {
                        Q(t, i, u)
                    }
                    break;
                case 5:
                    var o = t.return;
                    try {
                        Ha(t)
                    } catch (u) {
                        Q(t, o, u)
                    }
            }
        } catch (u) {
            Q(t, t.return, u)
        }
        if (t === e) {
            A = null;
            break
        }
        var l = t.sibling;
        if (l !== null) {
            l.return = t.return,
                A = l;
            break
        }
        A = t.return
    }
}
var mv = Math.ceil
    , Ti = vt.ReactCurrentDispatcher
    , ru = vt.ReactCurrentOwner
    , Ue = vt.ReactCurrentBatchConfig
    , O = 0
    , le = null
    , ee = null
    , fe = 0
    , Ae = 0
    , Mn = $t(0)
    , se = 0
    , qr = null
    , dn = 0
    , Ji = 0
    , su = 0
    , Ar = null
    , Ce = null
    , iu = 0
    , Yn = 1 / 0
    , ot = null
    , Ei = !1
    , Ga = null
    , Lt = null
    , Fs = !1
    , Et = null
    , Pi = 0
    , br = 0
    , Xa = null
    , ti = -1
    , ni = 0;
function Se() {
    return O & 6 ? J() : ti !== -1 ? ti : ti = J()
}
function Vt(e) {
    return e.mode & 1 ? O & 2 && fe !== 0 ? fe & -fe : Zy.transition !== null ? (ni === 0 && (ni = jh()),
        ni) : (e = F,
            e !== 0 || (e = window.event,
                e = e === void 0 ? 16 : Ah(e.type)),
            e) : 1
}
function qe(e, t, n, r) {
    if (50 < br)
        throw br = 0,
        Xa = null,
        Error(C(185));
    os(e, n, r),
        (!(O & 2) || e !== le) && (e === le && (!(O & 2) && (Ji |= n),
            se === 4 && Nt(e, fe)),
            Pe(e, r),
            n === 1 && O === 0 && !(t.mode & 1) && (Yn = J() + 500,
                Yi && Ht()))
}
function Pe(e, t) {
    var n = e.callbackNode;
    Zg(e, t);
    var r = di(e, e === le ? fe : 0);
    if (r === 0)
        n !== null && fc(n),
            e.callbackNode = null,
            e.callbackPriority = 0;
    else if (t = r & -r,
        e.callbackPriority !== t) {
        if (n != null && fc(n),
            t === 1)
            e.tag === 0 ? qy(sd.bind(null, e)) : Xh(sd.bind(null, e)),
                Gy(function () {
                    !(O & 6) && Ht()
                }),
                n = null;
        else {
            switch (kh(r)) {
                case 1:
                    n = Ml;
                    break;
                case 4:
                    n = wh;
                    break;
                case 16:
                    n = ci;
                    break;
                case 536870912:
                    n = Sh;
                    break;
                default:
                    n = ci
            }
            n = Kp(n, Fp.bind(null, e))
        }
        e.callbackPriority = t,
            e.callbackNode = n
    }
}
function Fp(e, t) {
    if (ti = -1,
        ni = 0,
        O & 6)
        throw Error(C(327));
    var n = e.callbackNode;
    if (Un() && e.callbackNode !== n)
        return null;
    var r = di(e, e === le ? fe : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = Ai(e, r);
    else {
        t = r;
        var s = O;
        O |= 2;
        var i = Bp();
        (le !== e || fe !== t) && (ot = null,
            Yn = J() + 500,
            sn(e, t));
        do
            try {
                vv();
                break
            } catch (l) {
                zp(e, l)
            }
        while (!0);
        Hl(),
            Ti.current = i,
            O = s,
            ee !== null ? t = 0 : (le = null,
                fe = 0,
                t = se)
    }
    if (t !== 0) {
        if (t === 2 && (s = Sa(e),
            s !== 0 && (r = s,
                t = Ya(e, s))),
            t === 1)
            throw n = qr,
            sn(e, 0),
            Nt(e, r),
            Pe(e, J()),
            n;
        if (t === 6)
            Nt(e, r);
        else {
            if (s = e.current.alternate,
                !(r & 30) && !gv(s) && (t = Ai(e, r),
                    t === 2 && (i = Sa(e),
                        i !== 0 && (r = i,
                            t = Ya(e, i))),
                    t === 1))
                throw n = qr,
                sn(e, 0),
                Nt(e, r),
                Pe(e, J()),
                n;
            switch (e.finishedWork = s,
            e.finishedLanes = r,
            t) {
                case 0:
                case 1:
                    throw Error(C(345));
                case 2:
                    qt(e, Ce, ot);
                    break;
                case 3:
                    if (Nt(e, r),
                        (r & 130023424) === r && (t = iu + 500 - J(),
                            10 < t)) {
                        if (di(e, 0) !== 0)
                            break;
                        if (s = e.suspendedLanes,
                            (s & r) !== r) {
                            Se(),
                                e.pingedLanes |= e.suspendedLanes & s;
                            break
                        }
                        e.timeoutHandle = Aa(qt.bind(null, e, Ce, ot), t);
                        break
                    }
                    qt(e, Ce, ot);
                    break;
                case 4:
                    if (Nt(e, r),
                        (r & 4194240) === r)
                        break;
                    for (t = e.eventTimes,
                        s = -1; 0 < r;) {
                        var o = 31 - Qe(r);
                        i = 1 << o,
                            o = t[o],
                            o > s && (s = o),
                            r &= ~i
                    }
                    if (r = s,
                        r = J() - r,
                        r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * mv(r / 1960)) - r,
                        10 < r) {
                        e.timeoutHandle = Aa(qt.bind(null, e, Ce, ot), r);
                        break
                    }
                    qt(e, Ce, ot);
                    break;
                case 5:
                    qt(e, Ce, ot);
                    break;
                default:
                    throw Error(C(329))
            }
        }
    }
    return Pe(e, J()),
        e.callbackNode === n ? Fp.bind(null, e) : null
}
function Ya(e, t) {
    var n = Ar;
    return e.current.memoizedState.isDehydrated && (sn(e, t).flags |= 256),
        e = Ai(e, t),
        e !== 2 && (t = Ce,
            Ce = n,
            t !== null && Qa(t)),
        e
}
function Qa(e) {
    Ce === null ? Ce = e : Ce.push.apply(Ce, e)
}
function gv(e) {
    for (var t = e; ;) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
                n !== null))
                for (var r = 0; r < n.length; r++) {
                    var s = n[r]
                        , i = s.getSnapshot;
                    s = s.value;
                    try {
                        if (!Ze(i(), s))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
            t.subtreeFlags & 16384 && n !== null)
            n.return = t,
                t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
                t = t.sibling
        }
    }
    return !0
}
function Nt(e, t) {
    for (t &= ~su,
        t &= ~Ji,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes; 0 < t;) {
        var n = 31 - Qe(t)
            , r = 1 << n;
        e[n] = -1,
            t &= ~r
    }
}
function sd(e) {
    if (O & 6)
        throw Error(C(327));
    Un();
    var t = di(e, 0);
    if (!(t & 1))
        return Pe(e, J()),
            null;
    var n = Ai(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Sa(e);
        r !== 0 && (t = r,
            n = Ya(e, r))
    }
    if (n === 1)
        throw n = qr,
        sn(e, 0),
        Nt(e, t),
        Pe(e, J()),
        n;
    if (n === 6)
        throw Error(C(345));
    return e.finishedWork = e.current.alternate,
        e.finishedLanes = t,
        qt(e, Ce, ot),
        Pe(e, J()),
        null
}
function ou(e, t) {
    var n = O;
    O |= 1;
    try {
        return e(t)
    } finally {
        O = n,
            O === 0 && (Yn = J() + 500,
                Yi && Ht())
    }
}
function fn(e) {
    Et !== null && Et.tag === 0 && !(O & 6) && Un();
    var t = O;
    O |= 1;
    var n = Ue.transition
        , r = F;
    try {
        if (Ue.transition = null,
            F = 1,
            e)
            return e()
    } finally {
        F = r,
            Ue.transition = n,
            O = t,
            !(O & 6) && Ht()
    }
}
function au() {
    Ae = Mn.current,
        U(Mn)
}
function sn(e, t) {
    e.finishedWork = null,
        e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
        Ky(n)),
        ee !== null)
        for (n = ee.return; n !== null;) {
            var r = n;
            switch (Bl(r),
            r.tag) {
                case 1:
                    r = r.type.childContextTypes,
                        r != null && gi();
                    break;
                case 3:
                    Gn(),
                        U(Te),
                        U(xe),
                        Ql();
                    break;
                case 5:
                    Yl(r);
                    break;
                case 4:
                    Gn();
                    break;
                case 13:
                    U(W);
                    break;
                case 19:
                    U(W);
                    break;
                case 10:
                    Wl(r.type._context);
                    break;
                case 22:
                case 23:
                    au()
            }
            n = n.return
        }
    if (le = e,
        ee = e = It(e.current, null),
        fe = Ae = t,
        se = 0,
        qr = null,
        su = Ji = dn = 0,
        Ce = Ar = null,
        tn !== null) {
        for (t = 0; t < tn.length; t++)
            if (n = tn[t],
                r = n.interleaved,
                r !== null) {
                n.interleaved = null;
                var s = r.next
                    , i = n.pending;
                if (i !== null) {
                    var o = i.next;
                    i.next = s,
                        r.next = o
                }
                n.pending = r
            }
        tn = null
    }
    return e
}
function zp(e, t) {
    do {
        var n = ee;
        try {
            if (Hl(),
                Zs.current = Ni,
                Ci) {
                for (var r = G.memoizedState; r !== null;) {
                    var s = r.queue;
                    s !== null && (s.pending = null),
                        r = r.next
                }
                Ci = !1
            }
            if (cn = 0,
                ae = re = G = null,
                Er = !1,
                Xr = 0,
                ru.current = null,
                n === null || n.return === null) {
                se = 1,
                    qr = t,
                    ee = null;
                break
            }
            e: {
                var i = e
                    , o = n.return
                    , l = n
                    , u = t;
                if (t = fe,
                    l.flags |= 32768,
                    u !== null && typeof u == "object" && typeof u.then == "function") {
                    var c = u
                        , d = l
                        , f = d.tag;
                    if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                        var h = d.alternate;
                        h ? (d.updateQueue = h.updateQueue,
                            d.memoizedState = h.memoizedState,
                            d.lanes = h.lanes) : (d.updateQueue = null,
                                d.memoizedState = null)
                    }
                    var y = Wc(o);
                    if (y !== null) {
                        y.flags &= -257,
                            Kc(y, o, l, i, t),
                            y.mode & 1 && Hc(i, c, t),
                            t = y,
                            u = c;
                        var v = t.updateQueue;
                        if (v === null) {
                            var w = new Set;
                            w.add(u),
                                t.updateQueue = w
                        } else
                            v.add(u);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Hc(i, c, t),
                                lu();
                            break e
                        }
                        u = Error(C(426))
                    }
                } else if (H && l.mode & 1) {
                    var j = Wc(o);
                    if (j !== null) {
                        !(j.flags & 65536) && (j.flags |= 256),
                            Kc(j, o, l, i, t),
                            Ul(Xn(u, l));
                        break e
                    }
                }
                i = u = Xn(u, l),
                    se !== 4 && (se = 2),
                    Ar === null ? Ar = [i] : Ar.push(i),
                    i = o;
                do {
                    switch (i.tag) {
                        case 3:
                            i.flags |= 65536,
                                t &= -t,
                                i.lanes |= t;
                            var m = kp(i, u, t);
                            Oc(i, m);
                            break e;
                        case 1:
                            l = u;
                            var p = i.type
                                , g = i.stateNode;
                            if (!(i.flags & 128) && (typeof p.getDerivedStateFromError == "function" || g !== null && typeof g.componentDidCatch == "function" && (Lt === null || !Lt.has(g)))) {
                                i.flags |= 65536,
                                    t &= -t,
                                    i.lanes |= t;
                                var S = Cp(i, l, t);
                                Oc(i, S);
                                break e
                            }
                    }
                    i = i.return
                } while (i !== null)
            }
            $p(n)
        } catch (k) {
            t = k,
                ee === n && n !== null && (ee = n = n.return);
            continue
        }
        break
    } while (!0)
}
function Bp() {
    var e = Ti.current;
    return Ti.current = Ni,
        e === null ? Ni : e
}
function lu() {
    (se === 0 || se === 3 || se === 2) && (se = 4),
        le === null || !(dn & 268435455) && !(Ji & 268435455) || Nt(le, fe)
}
function Ai(e, t) {
    var n = O;
    O |= 2;
    var r = Bp();
    (le !== e || fe !== t) && (ot = null,
        sn(e, t));
    do
        try {
            yv();
            break
        } catch (s) {
            zp(e, s)
        }
    while (!0);
    if (Hl(),
        O = n,
        Ti.current = r,
        ee !== null)
        throw Error(C(261));
    return le = null,
        fe = 0,
        se
}
function yv() {
    for (; ee !== null;)
        Up(ee)
}
function vv() {
    for (; ee !== null && !$g();)
        Up(ee)
}
function Up(e) {
    var t = Wp(e.alternate, e, Ae);
    e.memoizedProps = e.pendingProps,
        t === null ? $p(e) : ee = t,
        ru.current = null
}
function $p(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
            t.flags & 32768) {
            if (n = dv(n, t),
                n !== null) {
                n.flags &= 32767,
                    ee = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                    e.subtreeFlags = 0,
                    e.deletions = null;
            else {
                se = 6,
                    ee = null;
                return
            }
        } else if (n = cv(n, t, Ae),
            n !== null) {
            ee = n;
            return
        }
        if (t = t.sibling,
            t !== null) {
            ee = t;
            return
        }
        ee = t = e
    } while (t !== null);
    se === 0 && (se = 5)
}
function qt(e, t, n) {
    var r = F
        , s = Ue.transition;
    try {
        Ue.transition = null,
            F = 1,
            xv(e, t, n, r)
    } finally {
        Ue.transition = s,
            F = r
    }
    return null
}
function xv(e, t, n, r) {
    do
        Un();
    while (Et !== null);
    if (O & 6)
        throw Error(C(327));
    n = e.finishedWork;
    var s = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
        e.finishedLanes = 0,
        n === e.current)
        throw Error(C(177));
    e.callbackNode = null,
        e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (Jg(e, i),
        e === le && (ee = le = null,
            fe = 0),
        !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Fs || (Fs = !0,
            Kp(ci, function () {
                return Un(),
                    null
            })),
        i = (n.flags & 15990) !== 0,
        n.subtreeFlags & 15990 || i) {
        i = Ue.transition,
            Ue.transition = null;
        var o = F;
        F = 1;
        var l = O;
        O |= 4,
            ru.current = null,
            hv(e, n),
            _p(n, e),
            Fy(Ea),
            fi = !!Ta,
            Ea = Ta = null,
            e.current = n,
            pv(n),
            Hg(),
            O = l,
            F = o,
            Ue.transition = i
    } else
        e.current = n;
    if (Fs && (Fs = !1,
        Et = e,
        Pi = s),
        i = e.pendingLanes,
        i === 0 && (Lt = null),
        Gg(n.stateNode),
        Pe(e, J()),
        t !== null)
        for (r = e.onRecoverableError,
            n = 0; n < t.length; n++)
            s = t[n],
                r(s.value, {
                    componentStack: s.stack,
                    digest: s.digest
                });
    if (Ei)
        throw Ei = !1,
        e = Ga,
        Ga = null,
        e;
    return Pi & 1 && e.tag !== 0 && Un(),
        i = e.pendingLanes,
        i & 1 ? e === Xa ? br++ : (br = 0,
            Xa = e) : br = 0,
        Ht(),
        null
}
function Un() {
    if (Et !== null) {
        var e = kh(Pi)
            , t = Ue.transition
            , n = F;
        try {
            if (Ue.transition = null,
                F = 16 > e ? 16 : e,
                Et === null)
                var r = !1;
            else {
                if (e = Et,
                    Et = null,
                    Pi = 0,
                    O & 6)
                    throw Error(C(331));
                var s = O;
                for (O |= 4,
                    A = e.current; A !== null;) {
                    var i = A
                        , o = i.child;
                    if (A.flags & 16) {
                        var l = i.deletions;
                        if (l !== null) {
                            for (var u = 0; u < l.length; u++) {
                                var c = l[u];
                                for (A = c; A !== null;) {
                                    var d = A;
                                    switch (d.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Pr(8, d, i)
                                    }
                                    var f = d.child;
                                    if (f !== null)
                                        f.return = d,
                                            A = f;
                                    else
                                        for (; A !== null;) {
                                            d = A;
                                            var h = d.sibling
                                                , y = d.return;
                                            if (Lp(d),
                                                d === c) {
                                                A = null;
                                                break
                                            }
                                            if (h !== null) {
                                                h.return = y,
                                                    A = h;
                                                break
                                            }
                                            A = y
                                        }
                                }
                            }
                            var v = i.alternate;
                            if (v !== null) {
                                var w = v.child;
                                if (w !== null) {
                                    v.child = null;
                                    do {
                                        var j = w.sibling;
                                        w.sibling = null,
                                            w = j
                                    } while (w !== null)
                                }
                            }
                            A = i
                        }
                    }
                    if (i.subtreeFlags & 2064 && o !== null)
                        o.return = i,
                            A = o;
                    else
                        e: for (; A !== null;) {
                            if (i = A,
                                i.flags & 2048)
                                switch (i.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Pr(9, i, i.return)
                                }
                            var m = i.sibling;
                            if (m !== null) {
                                m.return = i.return,
                                    A = m;
                                break e
                            }
                            A = i.return
                        }
                }
                var p = e.current;
                for (A = p; A !== null;) {
                    o = A;
                    var g = o.child;
                    if (o.subtreeFlags & 2064 && g !== null)
                        g.return = o,
                            A = g;
                    else
                        e: for (o = p; A !== null;) {
                            if (l = A,
                                l.flags & 2048)
                                try {
                                    switch (l.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Zi(9, l)
                                    }
                                } catch (k) {
                                    Q(l, l.return, k)
                                }
                            if (l === o) {
                                A = null;
                                break e
                            }
                            var S = l.sibling;
                            if (S !== null) {
                                S.return = l.return,
                                    A = S;
                                break e
                            }
                            A = l.return
                        }
                }
                if (O = s,
                    Ht(),
                    nt && typeof nt.onPostCommitFiberRoot == "function")
                    try {
                        nt.onPostCommitFiberRoot(Hi, e)
                    } catch { }
                r = !0
            }
            return r
        } finally {
            F = n,
                Ue.transition = t
        }
    }
    return !1
}
function id(e, t, n) {
    t = Xn(n, t),
        t = kp(e, t, 1),
        e = Rt(e, t, 1),
        t = Se(),
        e !== null && (os(e, 1, t),
            Pe(e, t))
}
function Q(e, t, n) {
    if (e.tag === 3)
        id(e, e, n);
    else
        for (; t !== null;) {
            if (t.tag === 3) {
                id(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Lt === null || !Lt.has(r))) {
                    e = Xn(n, e),
                        e = Cp(t, e, 1),
                        t = Rt(t, e, 1),
                        e = Se(),
                        t !== null && (os(t, 1, e),
                            Pe(t, e));
                    break
                }
            }
            t = t.return
        }
}
function wv(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
        t = Se(),
        e.pingedLanes |= e.suspendedLanes & n,
        le === e && (fe & n) === n && (se === 4 || se === 3 && (fe & 130023424) === fe && 500 > J() - iu ? sn(e, 0) : su |= n),
        Pe(e, t)
}
function Hp(e, t) {
    t === 0 && (e.mode & 1 ? (t = As,
        As <<= 1,
        !(As & 130023424) && (As = 4194304)) : t = 1);
    var n = Se();
    e = mt(e, t),
        e !== null && (os(e, t, n),
            Pe(e, n))
}
function Sv(e) {
    var t = e.memoizedState
        , n = 0;
    t !== null && (n = t.retryLane),
        Hp(e, n)
}
function jv(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode
                , s = e.memoizedState;
            s !== null && (n = s.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(C(314))
    }
    r !== null && r.delete(t),
        Hp(e, n)
}
var Wp;
Wp = function (e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Te.current)
            Ne = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return Ne = !1,
                    uv(e, t, n);
            Ne = !!(e.flags & 131072)
        }
    else
        Ne = !1,
            H && t.flags & 1048576 && Yh(t, xi, t.index);
    switch (t.lanes = 0,
    t.tag) {
        case 2:
            var r = t.type;
            ei(e, t),
                e = t.pendingProps;
            var s = Hn(t, xe.current);
            Bn(t, n),
                s = Zl(null, t, r, e, s, n);
            var i = Jl();
            return t.flags |= 1,
                typeof s == "object" && s !== null && typeof s.render == "function" && s.$$typeof === void 0 ? (t.tag = 1,
                    t.memoizedState = null,
                    t.updateQueue = null,
                    Ee(r) ? (i = !0,
                        yi(t)) : i = !1,
                    t.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null,
                    Gl(t),
                    s.updater = qi,
                    t.stateNode = s,
                    s._reactInternals = t,
                    Ia(t, r, e, n),
                    t = Fa(null, t, r, !0, i, n)) : (t.tag = 0,
                        H && i && zl(t),
                        we(null, t, s, n),
                        t = t.child),
                t;
        case 16:
            r = t.elementType;
            e: {
                switch (ei(e, t),
                e = t.pendingProps,
                s = r._init,
                r = s(r._payload),
                t.type = r,
                s = t.tag = Cv(r),
                e = Ge(r, e),
                s) {
                    case 0:
                        t = Oa(null, t, r, e, n);
                        break e;
                    case 1:
                        t = Yc(null, t, r, e, n);
                        break e;
                    case 11:
                        t = Gc(null, t, r, e, n);
                        break e;
                    case 14:
                        t = Xc(null, t, r, Ge(r.type, e), n);
                        break e
                }
                throw Error(C(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type,
                s = t.pendingProps,
                s = t.elementType === r ? s : Ge(r, s),
                Oa(e, t, r, s, n);
        case 1:
            return r = t.type,
                s = t.pendingProps,
                s = t.elementType === r ? s : Ge(r, s),
                Yc(e, t, r, s, n);
        case 3:
            e: {
                if (Pp(t),
                    e === null)
                    throw Error(C(387));
                r = t.pendingProps,
                    i = t.memoizedState,
                    s = i.element,
                    tp(e, t),
                    ji(t, r, null, n);
                var o = t.memoizedState;
                if (r = o.element,
                    i.isDehydrated)
                    if (i = {
                        element: r,
                        isDehydrated: !1,
                        cache: o.cache,
                        pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                        transitions: o.transitions
                    },
                        t.updateQueue.baseState = i,
                        t.memoizedState = i,
                        t.flags & 256) {
                        s = Xn(Error(C(423)), t),
                            t = Qc(e, t, r, n, s);
                        break e
                    } else if (r !== s) {
                        s = Xn(Error(C(424)), t),
                            t = Qc(e, t, r, n, s);
                        break e
                    } else
                        for (be = Dt(t.stateNode.containerInfo.firstChild),
                            Me = t,
                            H = !0,
                            Ye = null,
                            n = Jh(t, null, r, n),
                            t.child = n; n;)
                            n.flags = n.flags & -3 | 4096,
                                n = n.sibling;
                else {
                    if (Wn(),
                        r === s) {
                        t = gt(e, t, n);
                        break e
                    }
                    we(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return np(t),
                e === null && Ra(t),
                r = t.type,
                s = t.pendingProps,
                i = e !== null ? e.memoizedProps : null,
                o = s.children,
                Pa(r, s) ? o = null : i !== null && Pa(r, i) && (t.flags |= 32),
                Ep(e, t),
                we(e, t, o, n),
                t.child;
        case 6:
            return e === null && Ra(t),
                null;
        case 13:
            return Ap(e, t, n);
        case 4:
            return Xl(t, t.stateNode.containerInfo),
                r = t.pendingProps,
                e === null ? t.child = Kn(t, null, r, n) : we(e, t, r, n),
                t.child;
        case 11:
            return r = t.type,
                s = t.pendingProps,
                s = t.elementType === r ? s : Ge(r, s),
                Gc(e, t, r, s, n);
        case 7:
            return we(e, t, t.pendingProps, n),
                t.child;
        case 8:
            return we(e, t, t.pendingProps.children, n),
                t.child;
        case 12:
            return we(e, t, t.pendingProps.children, n),
                t.child;
        case 10:
            e: {
                if (r = t.type._context,
                    s = t.pendingProps,
                    i = t.memoizedProps,
                    o = s.value,
                    z(wi, r._currentValue),
                    r._currentValue = o,
                    i !== null)
                    if (Ze(i.value, o)) {
                        if (i.children === s.children && !Te.current) {
                            t = gt(e, t, n);
                            break e
                        }
                    } else
                        for (i = t.child,
                            i !== null && (i.return = t); i !== null;) {
                            var l = i.dependencies;
                            if (l !== null) {
                                o = i.child;
                                for (var u = l.firstContext; u !== null;) {
                                    if (u.context === r) {
                                        if (i.tag === 1) {
                                            u = ct(-1, n & -n),
                                                u.tag = 2;
                                            var c = i.updateQueue;
                                            if (c !== null) {
                                                c = c.shared;
                                                var d = c.pending;
                                                d === null ? u.next = u : (u.next = d.next,
                                                    d.next = u),
                                                    c.pending = u
                                            }
                                        }
                                        i.lanes |= n,
                                            u = i.alternate,
                                            u !== null && (u.lanes |= n),
                                            La(i.return, n, t),
                                            l.lanes |= n;
                                        break
                                    }
                                    u = u.next
                                }
                            } else if (i.tag === 10)
                                o = i.type === t.type ? null : i.child;
                            else if (i.tag === 18) {
                                if (o = i.return,
                                    o === null)
                                    throw Error(C(341));
                                o.lanes |= n,
                                    l = o.alternate,
                                    l !== null && (l.lanes |= n),
                                    La(o, n, t),
                                    o = i.sibling
                            } else
                                o = i.child;
                            if (o !== null)
                                o.return = i;
                            else
                                for (o = i; o !== null;) {
                                    if (o === t) {
                                        o = null;
                                        break
                                    }
                                    if (i = o.sibling,
                                        i !== null) {
                                        i.return = o.return,
                                            o = i;
                                        break
                                    }
                                    o = o.return
                                }
                            i = o
                        }
                we(e, t, s.children, n),
                    t = t.child
            }
            return t;
        case 9:
            return s = t.type,
                r = t.pendingProps.children,
                Bn(t, n),
                s = $e(s),
                r = r(s),
                t.flags |= 1,
                we(e, t, r, n),
                t.child;
        case 14:
            return r = t.type,
                s = Ge(r, t.pendingProps),
                s = Ge(r.type, s),
                Xc(e, t, r, s, n);
        case 15:
            return Np(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type,
                s = t.pendingProps,
                s = t.elementType === r ? s : Ge(r, s),
                ei(e, t),
                t.tag = 1,
                Ee(r) ? (e = !0,
                    yi(t)) : e = !1,
                Bn(t, n),
                jp(t, r, s),
                Ia(t, r, s, n),
                Fa(null, t, r, !0, e, n);
        case 19:
            return bp(e, t, n);
        case 22:
            return Tp(e, t, n)
    }
    throw Error(C(156, t.tag))
}
    ;
function Kp(e, t) {
    return xh(e, t)
}
function kv(e, t, n, r) {
    this.tag = e,
        this.key = n,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.ref = null,
        this.pendingProps = t,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = r,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
}
function Be(e, t, n, r) {
    return new kv(e, t, n, r)
}
function uu(e) {
    return e = e.prototype,
        !(!e || !e.isReactComponent)
}
function Cv(e) {
    if (typeof e == "function")
        return uu(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
            e === Pl)
            return 11;
        if (e === Al)
            return 14
    }
    return 2
}
function It(e, t) {
    var n = e.alternate;
    return n === null ? (n = Be(e.tag, t, e.key, e.mode),
        n.elementType = e.elementType,
        n.type = e.type,
        n.stateNode = e.stateNode,
        n.alternate = e,
        e.alternate = n) : (n.pendingProps = t,
            n.type = e.type,
            n.flags = 0,
            n.subtreeFlags = 0,
            n.deletions = null),
        n.flags = e.flags & 14680064,
        n.childLanes = e.childLanes,
        n.lanes = e.lanes,
        n.child = e.child,
        n.memoizedProps = e.memoizedProps,
        n.memoizedState = e.memoizedState,
        n.updateQueue = e.updateQueue,
        t = e.dependencies,
        n.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        },
        n.sibling = e.sibling,
        n.index = e.index,
        n.ref = e.ref,
        n
}
function ri(e, t, n, r, s, i) {
    var o = 2;
    if (r = e,
        typeof e == "function")
        uu(e) && (o = 1);
    else if (typeof e == "string")
        o = 5;
    else
        e: switch (e) {
            case Sn:
                return on(n.children, s, i, t);
            case El:
                o = 8,
                    s |= 8;
                break;
            case oa:
                return e = Be(12, n, t, s | 2),
                    e.elementType = oa,
                    e.lanes = i,
                    e;
            case aa:
                return e = Be(13, n, t, s),
                    e.elementType = aa,
                    e.lanes = i,
                    e;
            case la:
                return e = Be(19, n, t, s),
                    e.elementType = la,
                    e.lanes = i,
                    e;
            case nh:
                return eo(n, s, i, t);
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                        case eh:
                            o = 10;
                            break e;
                        case th:
                            o = 9;
                            break e;
                        case Pl:
                            o = 11;
                            break e;
                        case Al:
                            o = 14;
                            break e;
                        case jt:
                            o = 16,
                                r = null;
                            break e
                    }
                throw Error(C(130, e == null ? e : typeof e, ""))
        }
    return t = Be(o, n, t, s),
        t.elementType = e,
        t.type = r,
        t.lanes = i,
        t
}
function on(e, t, n, r) {
    return e = Be(7, e, r, t),
        e.lanes = n,
        e
}
function eo(e, t, n, r) {
    return e = Be(22, e, r, t),
        e.elementType = nh,
        e.lanes = n,
        e.stateNode = {
            isHidden: !1
        },
        e
}
function Bo(e, t, n) {
    return e = Be(6, e, null, t),
        e.lanes = n,
        e
}
function Uo(e, t, n) {
    return t = Be(4, e.children !== null ? e.children : [], e.key, t),
        t.lanes = n,
        t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        },
        t
}
function Nv(e, t, n, r, s) {
    this.tag = t,
        this.containerInfo = e,
        this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.pendingContext = this.context = null,
        this.callbackPriority = 0,
        this.eventTimes = jo(0),
        this.expirationTimes = jo(-1),
        this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = jo(0),
        this.identifierPrefix = r,
        this.onRecoverableError = s,
        this.mutableSourceEagerHydrationData = null
}
function cu(e, t, n, r, s, i, o, l, u) {
    return e = new Nv(e, t, n, l, u),
        t === 1 ? (t = 1,
            i === !0 && (t |= 8)) : t = 0,
        i = Be(3, null, null, t),
        e.current = i,
        i.stateNode = e,
        i.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null
        },
        Gl(i),
        e
}
function Tv(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: wn,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function Gp(e) {
    if (!e)
        return Ft;
    e = e._reactInternals;
    e: {
        if (pn(e) !== e || e.tag !== 1)
            throw Error(C(170));
        var t = e;
        do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (Ee(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(C(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Ee(n))
            return Gh(e, n, t)
    }
    return t
}
function Xp(e, t, n, r, s, i, o, l, u) {
    return e = cu(n, r, !0, e, s, i, o, l, u),
        e.context = Gp(null),
        n = e.current,
        r = Se(),
        s = Vt(n),
        i = ct(r, s),
        i.callback = t ?? null,
        Rt(n, i, s),
        e.current.lanes = s,
        os(e, s, r),
        Pe(e, r),
        e
}
function to(e, t, n, r) {
    var s = t.current
        , i = Se()
        , o = Vt(s);
    return n = Gp(n),
        t.context === null ? t.context = n : t.pendingContext = n,
        t = ct(i, o),
        t.payload = {
            element: e
        },
        r = r === void 0 ? null : r,
        r !== null && (t.callback = r),
        e = Rt(s, t, o),
        e !== null && (qe(e, s, o, i),
            qs(e, s, o)),
        o
}
function bi(e) {
    if (e = e.current,
        !e.child)
        return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}
function od(e, t) {
    if (e = e.memoizedState,
        e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function du(e, t) {
    od(e, t),
        (e = e.alternate) && od(e, t)
}
function Ev() {
    return null
}
var Yp = typeof reportError == "function" ? reportError : function (e) {
    console.error(e)
}
    ;
function fu(e) {
    this._internalRoot = e
}
no.prototype.render = fu.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(C(409));
    to(e, t, null, null)
}
    ;
no.prototype.unmount = fu.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        fn(function () {
            to(null, e, null, null)
        }),
            t[pt] = null
    }
}
    ;
function no(e) {
    this._internalRoot = e
}
no.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
        var t = Th();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < Ct.length && t !== 0 && t < Ct[n].priority; n++)
            ;
        Ct.splice(n, 0, e),
            n === 0 && Ph(e)
    }
}
    ;
function hu(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function ro(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function ad() { }
function Pv(e, t, n, r, s) {
    if (s) {
        if (typeof r == "function") {
            var i = r;
            r = function () {
                var c = bi(o);
                i.call(c)
            }
        }
        var o = Xp(t, r, e, 0, null, !1, !1, "", ad);
        return e._reactRootContainer = o,
            e[pt] = o.current,
            $r(e.nodeType === 8 ? e.parentNode : e),
            fn(),
            o
    }
    for (; s = e.lastChild;)
        e.removeChild(s);
    if (typeof r == "function") {
        var l = r;
        r = function () {
            var c = bi(u);
            l.call(c)
        }
    }
    var u = cu(e, 0, !1, null, null, !1, !1, "", ad);
    return e._reactRootContainer = u,
        e[pt] = u.current,
        $r(e.nodeType === 8 ? e.parentNode : e),
        fn(function () {
            to(t, u, n, r)
        }),
        u
}
function so(e, t, n, r, s) {
    var i = n._reactRootContainer;
    if (i) {
        var o = i;
        if (typeof s == "function") {
            var l = s;
            s = function () {
                var u = bi(o);
                l.call(u)
            }
        }
        to(t, o, e, s)
    } else
        o = Pv(n, t, e, s, r);
    return bi(o)
}
Ch = function (e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = yr(t.pendingLanes);
                n !== 0 && (Dl(t, n | 1),
                    Pe(t, J()),
                    !(O & 6) && (Yn = J() + 500,
                        Ht()))
            }
            break;
        case 13:
            fn(function () {
                var r = mt(e, 1);
                if (r !== null) {
                    var s = Se();
                    qe(r, e, 1, s)
                }
            }),
                du(e, 1)
    }
}
    ;
Rl = function (e) {
    if (e.tag === 13) {
        var t = mt(e, 134217728);
        if (t !== null) {
            var n = Se();
            qe(t, e, 134217728, n)
        }
        du(e, 134217728)
    }
}
    ;
Nh = function (e) {
    if (e.tag === 13) {
        var t = Vt(e)
            , n = mt(e, t);
        if (n !== null) {
            var r = Se();
            qe(n, e, t, r)
        }
        du(e, t)
    }
}
    ;
Th = function () {
    return F
}
    ;
Eh = function (e, t) {
    var n = F;
    try {
        return F = e,
            t()
    } finally {
        F = n
    }
}
    ;
va = function (e, t, n) {
    switch (t) {
        case "input":
            if (da(e, n),
                t = n.name,
                n.type === "radio" && t != null) {
                for (n = e; n.parentNode;)
                    n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
                    t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var s = Xi(r);
                        if (!s)
                            throw Error(C(90));
                        sh(r),
                            da(r, s)
                    }
                }
            }
            break;
        case "textarea":
            oh(e, n);
            break;
        case "select":
            t = n.value,
                t != null && _n(e, !!n.multiple, t, !1)
    }
}
    ;
hh = ou;
ph = fn;
var Av = {
    usingClientEntryPoint: !1,
    Events: [ls, Nn, Xi, dh, fh, ou]
}
    , hr = {
        findFiberByHostInstance: en,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    }
    , bv = {
        bundleType: hr.bundleType,
        version: hr.version,
        rendererPackageName: hr.rendererPackageName,
        rendererConfig: hr.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: vt.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return e = yh(e),
                e === null ? null : e.stateNode
        },
        findFiberByHostInstance: hr.findFiberByHostInstance || Ev,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var zs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!zs.isDisabled && zs.supportsFiber)
        try {
            Hi = zs.inject(bv),
                nt = zs
        } catch { }
}
Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Av;
Ve.createPortal = function (e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!hu(t))
        throw Error(C(200));
    return Tv(e, t, null, n)
}
    ;
Ve.createRoot = function (e, t) {
    if (!hu(e))
        throw Error(C(299));
    var n = !1
        , r = ""
        , s = Yp;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
        t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
        t.onRecoverableError !== void 0 && (s = t.onRecoverableError)),
        t = cu(e, 1, !1, null, null, n, !1, r, s),
        e[pt] = t.current,
        $r(e.nodeType === 8 ? e.parentNode : e),
        new fu(t)
}
    ;
Ve.findDOMNode = function (e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(C(188)) : (e = Object.keys(e).join(","),
            Error(C(268, e)));
    return e = yh(t),
        e = e === null ? null : e.stateNode,
        e
}
    ;
Ve.flushSync = function (e) {
    return fn(e)
}
    ;
Ve.hydrate = function (e, t, n) {
    if (!ro(t))
        throw Error(C(200));
    return so(null, e, t, !0, n)
}
    ;
Ve.hydrateRoot = function (e, t, n) {
    if (!hu(e))
        throw Error(C(405));
    var r = n != null && n.hydratedSources || null
        , s = !1
        , i = ""
        , o = Yp;
    if (n != null && (n.unstable_strictMode === !0 && (s = !0),
        n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
        n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
        t = Xp(t, null, e, 1, n ?? null, s, !1, i, o),
        e[pt] = t.current,
        $r(e),
        r)
        for (e = 0; e < r.length; e++)
            n = r[e],
                s = n._getVersion,
                s = s(n._source),
                t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, s] : t.mutableSourceEagerHydrationData.push(n, s);
    return new no(t)
}
    ;
Ve.render = function (e, t, n) {
    if (!ro(t))
        throw Error(C(200));
    return so(null, e, t, !1, n)
}
    ;
Ve.unmountComponentAtNode = function (e) {
    if (!ro(e))
        throw Error(C(40));
    return e._reactRootContainer ? (fn(function () {
        so(null, null, e, !1, function () {
            e._reactRootContainer = null,
                e[pt] = null
        })
    }),
        !0) : !1
}
    ;
Ve.unstable_batchedUpdates = ou;
Ve.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!ro(n))
        throw Error(C(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(C(38));
    return so(e, t, n, !1, r)
}
    ;
Ve.version = "18.3.1-next-f1338f8080-20240426";
function Qp() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Qp)
        } catch (e) {
            console.error(e)
        }
}
Qp(),
    Qf.exports = Ve;
var Mv = Qf.exports, qp, ld = Mv;
qp = ld.createRoot,
    ld.hydrateRoot;
/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Zr() {
    return Zr = Object.assign ? Object.assign.bind() : function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
        ,
        Zr.apply(this, arguments)
}
var Pt;
(function (e) {
    e.Pop = "POP",
        e.Push = "PUSH",
        e.Replace = "REPLACE"
}
)(Pt || (Pt = {}));
const ud = "popstate";
function Dv(e) {
    e === void 0 && (e = {});
    function t(r, s) {
        let { pathname: i, search: o, hash: l } = r.location;
        return qa("", {
            pathname: i,
            search: o,
            hash: l
        }, s.state && s.state.usr || null, s.state && s.state.key || "default")
    }
    function n(r, s) {
        return typeof s == "string" ? s : Mi(s)
    }
    return Lv(t, n, null, e)
}
function te(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function Zp(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch { }
    }
}
function Rv() {
    return Math.random().toString(36).substr(2, 8)
}
function cd(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}
function qa(e, t, n, r) {
    return n === void 0 && (n = null),
        Zr({
            pathname: typeof e == "string" ? e : e.pathname,
            search: "",
            hash: ""
        }, typeof t == "string" ? nr(t) : t, {
            state: n,
            key: t && t.key || r || Rv()
        })
}
function Mi(e) {
    let { pathname: t = "/", search: n = "", hash: r = "" } = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
        r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
        t
}
function nr(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n),
            e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r),
            e = e.substr(0, r)),
            e && (t.pathname = e)
    }
    return t
}
function Lv(e, t, n, r) {
    r === void 0 && (r = {});
    let { window: s = document.defaultView, v5Compat: i = !1 } = r
        , o = s.history
        , l = Pt.Pop
        , u = null
        , c = d();
    c == null && (c = 0,
        o.replaceState(Zr({}, o.state, {
            idx: c
        }), ""));
    function d() {
        return (o.state || {
            idx: null
        }).idx
    }
    function f() {
        l = Pt.Pop;
        let j = d()
            , m = j == null ? null : j - c;
        c = j,
            u && u({
                action: l,
                location: w.location,
                delta: m
            })
    }
    function h(j, m) {
        l = Pt.Push;
        let p = qa(w.location, j, m);
        c = d() + 1;
        let g = cd(p, c)
            , S = w.createHref(p);
        try {
            o.pushState(g, "", S)
        } catch (k) {
            if (k instanceof DOMException && k.name === "DataCloneError")
                throw k;
            s.location.assign(S)
        }
        i && u && u({
            action: l,
            location: w.location,
            delta: 1
        })
    }
    function y(j, m) {
        l = Pt.Replace;
        let p = qa(w.location, j, m);
        c = d();
        let g = cd(p, c)
            , S = w.createHref(p);
        o.replaceState(g, "", S),
            i && u && u({
                action: l,
                location: w.location,
                delta: 0
            })
    }
    function v(j) {
        let m = s.location.origin !== "null" ? s.location.origin : s.location.href
            , p = typeof j == "string" ? j : Mi(j);
        return p = p.replace(/ $/, "%20"),
            te(m, "No window.location.(origin|href) available to create URL for href: " + p),
            new URL(p, m)
    }
    let w = {
        get action() {
            return l
        },
        get location() {
            return e(s, o)
        },
        listen(j) {
            if (u)
                throw new Error("A history only accepts one active listener");
            return s.addEventListener(ud, f),
                u = j,
                () => {
                    s.removeEventListener(ud, f),
                        u = null
                }
        },
        createHref(j) {
            return t(s, j)
        },
        createURL: v,
        encodeLocation(j) {
            let m = v(j);
            return {
                pathname: m.pathname,
                search: m.search,
                hash: m.hash
            }
        },
        push: h,
        replace: y,
        go(j) {
            return o.go(j)
        }
    };
    return w
}
var dd;
(function (e) {
    e.data = "data",
        e.deferred = "deferred",
        e.redirect = "redirect",
        e.error = "error"
}
)(dd || (dd = {}));
function Vv(e, t, n) {
    return n === void 0 && (n = "/"),
        Iv(e, t, n, !1)
}
function Iv(e, t, n, r) {
    let s = typeof t == "string" ? nr(t) : t
        , i = pu(s.pathname || "/", n);
    if (i == null)
        return null;
    let o = Jp(e);
    _v(o);
    let l = null;
    for (let u = 0; l == null && u < o.length; ++u) {
        let c = Xv(i);
        l = Kv(o[u], c, r)
    }
    return l
}
function Jp(e, t, n, r) {
    t === void 0 && (t = []),
        n === void 0 && (n = []),
        r === void 0 && (r = "");
    let s = (i, o, l) => {
        let u = {
            relativePath: l === void 0 ? i.path || "" : l,
            caseSensitive: i.caseSensitive === !0,
            childrenIndex: o,
            route: i
        };
        u.relativePath.startsWith("/") && (te(u.relativePath.startsWith(r), 'Absolute route path "' + u.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
            u.relativePath = u.relativePath.slice(r.length));
        let c = _t([r, u.relativePath])
            , d = n.concat(u);
        i.children && i.children.length > 0 && (te(i.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + c + '".')),
            Jp(i.children, t, d, c)),
            !(i.path == null && !i.index) && t.push({
                path: c,
                score: Hv(c, i.index),
                routesMeta: d
            })
    }
        ;
    return e.forEach((i, o) => {
        var l;
        if (i.path === "" || !((l = i.path) != null && l.includes("?")))
            s(i, o);
        else
            for (let u of em(i.path))
                s(i, o, u)
    }
    ),
        t
}
function em(e) {
    let t = e.split("/");
    if (t.length === 0)
        return [];
    let [n, ...r] = t
        , s = n.endsWith("?")
        , i = n.replace(/\?$/, "");
    if (r.length === 0)
        return s ? [i, ""] : [i];
    let o = em(r.join("/"))
        , l = [];
    return l.push(...o.map(u => u === "" ? i : [i, u].join("/"))),
        s && l.push(...o),
        l.map(u => e.startsWith("/") && u === "" ? "/" : u)
}
function _v(e) {
    e.sort((t, n) => t.score !== n.score ? n.score - t.score : Wv(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const Ov = /^:[\w-]+$/
    , Fv = 3
    , zv = 2
    , Bv = 1
    , Uv = 10
    , $v = -2
    , fd = e => e === "*";
function Hv(e, t) {
    let n = e.split("/")
        , r = n.length;
    return n.some(fd) && (r += $v),
        t && (r += zv),
        n.filter(s => !fd(s)).reduce((s, i) => s + (Ov.test(i) ? Fv : i === "" ? Bv : Uv), r)
}
function Wv(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r, s) => r === t[s]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function Kv(e, t, n) {
    let { routesMeta: r } = e
        , s = {}
        , i = "/"
        , o = [];
    for (let l = 0; l < r.length; ++l) {
        let u = r[l]
            , c = l === r.length - 1
            , d = i === "/" ? t : t.slice(i.length) || "/"
            , f = hd({
                path: u.relativePath,
                caseSensitive: u.caseSensitive,
                end: c
            }, d)
            , h = u.route;
        if (!f && c && n && !r[r.length - 1].route.index && (f = hd({
            path: u.relativePath,
            caseSensitive: u.caseSensitive,
            end: !1
        }, d)),
            !f)
            return null;
        Object.assign(s, f.params),
            o.push({
                params: s,
                pathname: _t([i, f.pathname]),
                pathnameBase: Zv(_t([i, f.pathnameBase])),
                route: h
            }),
            f.pathnameBase !== "/" && (i = _t([i, f.pathnameBase]))
    }
    return o
}
function hd(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let [n, r] = Gv(e.path, e.caseSensitive, e.end)
        , s = t.match(n);
    if (!s)
        return null;
    let i = s[0]
        , o = i.replace(/(.)\/+$/, "$1")
        , l = s.slice(1);
    return {
        params: r.reduce((c, d, f) => {
            let { paramName: h, isOptional: y } = d;
            if (h === "*") {
                let w = l[f] || "";
                o = i.slice(0, i.length - w.length).replace(/(.)\/+$/, "$1")
            }
            const v = l[f];
            return y && !v ? c[h] = void 0 : c[h] = (v || "").replace(/%2F/g, "/"),
                c
        }
            , {}),
        pathname: i,
        pathnameBase: o,
        pattern: e
    }
}
function Gv(e, t, n) {
    t === void 0 && (t = !1),
        n === void 0 && (n = !0),
        Zp(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = []
        , s = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (o, l, u) => (r.push({
            paramName: l,
            isOptional: u != null
        }),
            u ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }),
        s += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? s += "\\/*$" : e !== "" && e !== "/" && (s += "(?:(?=\\/|$))"),
        [new RegExp(s, t ? void 0 : "i"), r]
}
function Xv(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return Zp(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")),
            e
    }
}
function pu(e, t) {
    if (t === "/")
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length
        , r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}
function Yv(e, t) {
    t === void 0 && (t = "/");
    let { pathname: n, search: r = "", hash: s = "" } = typeof e == "string" ? nr(e) : e;
    return {
        pathname: n ? n.startsWith("/") ? n : Qv(n, t) : t,
        search: Jv(r),
        hash: ex(s)
    }
}
function Qv(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(s => {
        s === ".." ? n.length > 1 && n.pop() : s !== "." && n.push(s)
    }
    ),
        n.length > 1 ? n.join("/") : "/"
}
function $o(e, t, n, r) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}
function qv(e) {
    return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0)
}
function tm(e, t) {
    let n = qv(e);
    return t ? n.map((r, s) => s === n.length - 1 ? r.pathname : r.pathnameBase) : n.map(r => r.pathnameBase)
}
function nm(e, t, n, r) {
    r === void 0 && (r = !1);
    let s;
    typeof e == "string" ? s = nr(e) : (s = Zr({}, e),
        te(!s.pathname || !s.pathname.includes("?"), $o("?", "pathname", "search", s)),
        te(!s.pathname || !s.pathname.includes("#"), $o("#", "pathname", "hash", s)),
        te(!s.search || !s.search.includes("#"), $o("#", "search", "hash", s)));
    let i = e === "" || s.pathname === "", o = i ? "/" : s.pathname, l;
    if (o == null)
        l = n;
    else {
        let f = t.length - 1;
        if (!r && o.startsWith("..")) {
            let h = o.split("/");
            for (; h[0] === "..";)
                h.shift(),
                    f -= 1;
            s.pathname = h.join("/")
        }
        l = f >= 0 ? t[f] : "/"
    }
    let u = Yv(s, l)
        , c = o && o !== "/" && o.endsWith("/")
        , d = (i || o === ".") && n.endsWith("/");
    return !u.pathname.endsWith("/") && (c || d) && (u.pathname += "/"),
        u
}
const _t = e => e.join("/").replace(/\/\/+/g, "/")
    , Zv = e => e.replace(/\/+$/, "").replace(/^\/*/, "/")
    , Jv = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e
    , ex = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function tx(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e
}
const rm = ["post", "put", "patch", "delete"];
new Set(rm);
const nx = ["get", ...rm];
new Set(nx);
/**
 * React Router v6.28.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Jr() {
    return Jr = Object.assign ? Object.assign.bind() : function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
        ,
        Jr.apply(this, arguments)
}
const mu = x.createContext(null)
    , rx = x.createContext(null)
    , mn = x.createContext(null)
    , io = x.createContext(null)
    , gn = x.createContext({
        outlet: null,
        matches: [],
        isDataRoute: !1
    })
    , sm = x.createContext(null);
function sx(e, t) {
    let { relative: n } = t === void 0 ? {} : t;
    cs() || te(!1);
    let { basename: r, navigator: s } = x.useContext(mn)
        , { hash: i, pathname: o, search: l } = om(e, {
            relative: n
        })
        , u = o;
    return r !== "/" && (u = o === "/" ? r : _t([r, o])),
        s.createHref({
            pathname: u,
            search: l,
            hash: i
        })
}
function cs() {
    return x.useContext(io) != null
}
function rr() {
    return cs() || te(!1),
        x.useContext(io).location
}
function im(e) {
    x.useContext(mn).static || x.useLayoutEffect(e)
}
function ix() {
    let { isDataRoute: e } = x.useContext(gn);
    return e ? vx() : ox()
}
function ox() {
    cs() || te(!1);
    let e = x.useContext(mu)
        , { basename: t, future: n, navigator: r } = x.useContext(mn)
        , { matches: s } = x.useContext(gn)
        , { pathname: i } = rr()
        , o = JSON.stringify(tm(s, n.v7_relativeSplatPath))
        , l = x.useRef(!1);
    return im(() => {
        l.current = !0
    }
    ),
        x.useCallback(function (c, d) {
            if (d === void 0 && (d = {}),
                !l.current)
                return;
            if (typeof c == "number") {
                r.go(c);
                return
            }
            let f = nm(c, JSON.parse(o), i, d.relative === "path");
            e == null && t !== "/" && (f.pathname = f.pathname === "/" ? t : _t([t, f.pathname])),
                (d.replace ? r.replace : r.push)(f, d.state, d)
        }, [t, r, o, i, e])
}
function om(e, t) {
    let { relative: n } = t === void 0 ? {} : t
        , { future: r } = x.useContext(mn)
        , { matches: s } = x.useContext(gn)
        , { pathname: i } = rr()
        , o = JSON.stringify(tm(s, r.v7_relativeSplatPath));
    return x.useMemo(() => nm(e, JSON.parse(o), i, n === "path"), [e, o, i, n])
}
function ax(e, t) {
    return lx(e, t)
}
function lx(e, t, n, r) {
    cs() || te(!1);
    let { navigator: s } = x.useContext(mn)
        , { matches: i } = x.useContext(gn)
        , o = i[i.length - 1]
        , l = o ? o.params : {};
    o && o.pathname;
    let u = o ? o.pathnameBase : "/";
    o && o.route;
    let c = rr(), d;
    if (t) {
        var f;
        let j = typeof t == "string" ? nr(t) : t;
        u === "/" || (f = j.pathname) != null && f.startsWith(u) || te(!1),
            d = j
    } else
        d = c;
    let h = d.pathname || "/"
        , y = h;
    if (u !== "/") {
        let j = u.replace(/^\//, "").split("/");
        y = "/" + h.replace(/^\//, "").split("/").slice(j.length).join("/")
    }
    let v = Vv(e, {
        pathname: y
    })
        , w = hx(v && v.map(j => Object.assign({}, j, {
            params: Object.assign({}, l, j.params),
            pathname: _t([u, s.encodeLocation ? s.encodeLocation(j.pathname).pathname : j.pathname]),
            pathnameBase: j.pathnameBase === "/" ? u : _t([u, s.encodeLocation ? s.encodeLocation(j.pathnameBase).pathname : j.pathnameBase])
        })), i, n, r);
    return t && w ? x.createElement(io.Provider, {
        value: {
            location: Jr({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, d),
            navigationType: Pt.Pop
        }
    }, w) : w
}
function ux() {
    let e = yx()
        , t = tx(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
        , n = e instanceof Error ? e.stack : null
        , s = {
            padding: "0.5rem",
            backgroundColor: "rgba(200,200,200, 0.5)"
        };
    return x.createElement(x.Fragment, null, x.createElement("h2", null, "Unexpected Application Error!"), x.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? x.createElement("pre", {
        style: s
    }, n) : null, null)
}
const cx = x.createElement(ux, null);
class dx extends x.Component {
    constructor(t) {
        super(t),
            this.state = {
                location: t.location,
                revalidation: t.revalidation,
                error: t.error
            }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? x.createElement(gn.Provider, {
            value: this.props.routeContext
        }, x.createElement(sm.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function fx(e) {
    let { routeContext: t, match: n, children: r } = e
        , s = x.useContext(mu);
    return s && s.static && s.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (s.staticContext._deepestRenderedBoundaryId = n.route.id),
        x.createElement(gn.Provider, {
            value: t
        }, r)
}
function hx(e, t, n, r) {
    var s;
    if (t === void 0 && (t = []),
        n === void 0 && (n = null),
        r === void 0 && (r = null),
        e == null) {
        var i;
        if (!n)
            return null;
        if (n.errors)
            e = n.matches;
        else if ((i = r) != null && i.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0)
            e = n.matches;
        else
            return null
    }
    let o = e
        , l = (s = n) == null ? void 0 : s.errors;
    if (l != null) {
        let d = o.findIndex(f => f.route.id && (l == null ? void 0 : l[f.route.id]) !== void 0);
        d >= 0 || te(!1),
            o = o.slice(0, Math.min(o.length, d + 1))
    }
    let u = !1
        , c = -1;
    if (n && r && r.v7_partialHydration)
        for (let d = 0; d < o.length; d++) {
            let f = o[d];
            if ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (c = d),
                f.route.id) {
                let { loaderData: h, errors: y } = n
                    , v = f.route.loader && h[f.route.id] === void 0 && (!y || y[f.route.id] === void 0);
                if (f.route.lazy || v) {
                    u = !0,
                        c >= 0 ? o = o.slice(0, c + 1) : o = [o[0]];
                    break
                }
            }
        }
    return o.reduceRight((d, f, h) => {
        let y, v = !1, w = null, j = null;
        n && (y = l && f.route.id ? l[f.route.id] : void 0,
            w = f.route.errorElement || cx,
            u && (c < 0 && h === 0 ? (v = !0,
                j = null) : c === h && (v = !0,
                    j = f.route.hydrateFallbackElement || null)));
        let m = t.concat(o.slice(0, h + 1))
            , p = () => {
                let g;
                return y ? g = w : v ? g = j : f.route.Component ? g = x.createElement(f.route.Component, null) : f.route.element ? g = f.route.element : g = d,
                    x.createElement(fx, {
                        match: f,
                        routeContext: {
                            outlet: d,
                            matches: m,
                            isDataRoute: n != null
                        },
                        children: g
                    })
            }
            ;
        return n && (f.route.ErrorBoundary || f.route.errorElement || h === 0) ? x.createElement(dx, {
            location: n.location,
            revalidation: n.revalidation,
            component: w,
            error: y,
            children: p(),
            routeContext: {
                outlet: null,
                matches: m,
                isDataRoute: !0
            }
        }) : p()
    }
        , null)
}
var am = function (e) {
    return e.UseBlocker = "useBlocker",
        e.UseRevalidator = "useRevalidator",
        e.UseNavigateStable = "useNavigate",
        e
}(am || {})
    , Di = function (e) {
        return e.UseBlocker = "useBlocker",
            e.UseLoaderData = "useLoaderData",
            e.UseActionData = "useActionData",
            e.UseRouteError = "useRouteError",
            e.UseNavigation = "useNavigation",
            e.UseRouteLoaderData = "useRouteLoaderData",
            e.UseMatches = "useMatches",
            e.UseRevalidator = "useRevalidator",
            e.UseNavigateStable = "useNavigate",
            e.UseRouteId = "useRouteId",
            e
    }(Di || {});
function px(e) {
    let t = x.useContext(mu);
    return t || te(!1),
        t
}
function mx(e) {
    let t = x.useContext(rx);
    return t || te(!1),
        t
}
function gx(e) {
    let t = x.useContext(gn);
    return t || te(!1),
        t
}
function lm(e) {
    let t = gx()
        , n = t.matches[t.matches.length - 1];
    return n.route.id || te(!1),
        n.route.id
}
function yx() {
    var e;
    let t = x.useContext(sm)
        , n = mx(Di.UseRouteError)
        , r = lm(Di.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}
function vx() {
    let { router: e } = px(am.UseNavigateStable)
        , t = lm(Di.UseNavigateStable)
        , n = x.useRef(!1);
    return im(() => {
        n.current = !0
    }
    ),
        x.useCallback(function (s, i) {
            i === void 0 && (i = {}),
                n.current && (typeof s == "number" ? e.navigate(s) : e.navigate(s, Jr({
                    fromRouteId: t
                }, i)))
        }, [e, t])
}
const pd = {};
function xx(e, t) {
    pd[t] || (pd[t] = !0,
        console.warn(t))
}
const md = (e, t, n) => xx(e, "⚠️ React Router Future Flag Warning: " + t + ". " + ("You can use the `" + e + "` future flag to opt-in early. ") + ("For more information, see " + n + "."));
function wx(e, t) {
    (e == null ? void 0 : e.v7_startTransition) === void 0 && md("v7_startTransition", "React Router will begin wrapping state updates in `React.startTransition` in v7", "https://reactrouter.com/v6/upgrading/future#v7_starttransition"),
        (e == null ? void 0 : e.v7_relativeSplatPath) === void 0 && !t && md("v7_relativeSplatPath", "Relative route resolution within Splat routes is changing in v7", "https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath")
}
function xn(e) {
    te(!1)
}
function Sx(e) {
    let { basename: t = "/", children: n = null, location: r, navigationType: s = Pt.Pop, navigator: i, static: o = !1, future: l } = e;
    cs() && te(!1);
    let u = t.replace(/^\/*/, "/")
        , c = x.useMemo(() => ({
            basename: u,
            navigator: i,
            static: o,
            future: Jr({
                v7_relativeSplatPath: !1
            }, l)
        }), [u, l, i, o]);
    typeof r == "string" && (r = nr(r));
    let { pathname: d = "/", search: f = "", hash: h = "", state: y = null, key: v = "default" } = r
        , w = x.useMemo(() => {
            let j = pu(d, u);
            return j == null ? null : {
                location: {
                    pathname: j,
                    search: f,
                    hash: h,
                    state: y,
                    key: v
                },
                navigationType: s
            }
        }
            , [u, d, f, h, y, v, s]);
    return w == null ? null : x.createElement(mn.Provider, {
        value: c
    }, x.createElement(io.Provider, {
        children: n,
        value: w
    }))
}
function jx(e) {
    let { children: t, location: n } = e;
    return ax(Za(t), n)
}
new Promise(() => { }
);
function Za(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return x.Children.forEach(e, (r, s) => {
        if (!x.isValidElement(r))
            return;
        let i = [...t, s];
        if (r.type === x.Fragment) {
            n.push.apply(n, Za(r.props.children, i));
            return
        }
        r.type !== xn && te(!1),
            !r.props.index || !r.props.children || te(!1);
        let o = {
            id: r.props.id || i.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (o.children = Za(r.props.children, i)),
            n.push(o)
    }
    ),
        n
}
/**
 * React Router DOM v6.28.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Ja() {
    return Ja = Object.assign ? Object.assign.bind() : function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
        ,
        Ja.apply(this, arguments)
}
function kx(e, t) {
    if (e == null)
        return {};
    var n = {}, r = Object.keys(e), s, i;
    for (i = 0; i < r.length; i++)
        s = r[i],
            !(t.indexOf(s) >= 0) && (n[s] = e[s]);
    return n
}
function Cx(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
function Nx(e, t) {
    return e.button === 0 && (!t || t === "_self") && !Cx(e)
}
const Tx = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"]
    , Ex = "6";
try {
    window.__reactRouterVersion = Ex
} catch { }
const Px = "startTransition"
    , gd = wg[Px];
function Ax(e) {
    let { basename: t, children: n, future: r, window: s } = e
        , i = x.useRef();
    i.current == null && (i.current = Dv({
        window: s,
        v5Compat: !0
    }));
    let o = i.current
        , [l, u] = x.useState({
            action: o.action,
            location: o.location
        })
        , { v7_startTransition: c } = r || {}
        , d = x.useCallback(f => {
            c && gd ? gd(() => u(f)) : u(f)
        }
            , [u, c]);
    return x.useLayoutEffect(() => o.listen(d), [o, d]),
        x.useEffect(() => wx(r), [r]),
        x.createElement(Sx, {
            basename: t,
            children: n,
            location: l.location,
            navigationType: l.action,
            navigator: o,
            future: r
        })
}
const bx = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u"
    , Mx = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
    , um = x.forwardRef(function (t, n) {
        let { onClick: r, relative: s, reloadDocument: i, replace: o, state: l, target: u, to: c, preventScrollReset: d, viewTransition: f } = t, h = kx(t, Tx), { basename: y } = x.useContext(mn), v, w = !1;
        if (typeof c == "string" && Mx.test(c) && (v = c,
            bx))
            try {
                let g = new URL(window.location.href)
                    , S = c.startsWith("//") ? new URL(g.protocol + c) : new URL(c)
                    , k = pu(S.pathname, y);
                S.origin === g.origin && k != null ? c = k + S.search + S.hash : w = !0
            } catch { }
        let j = sx(c, {
            relative: s
        })
            , m = Dx(c, {
                replace: o,
                state: l,
                target: u,
                preventScrollReset: d,
                relative: s,
                viewTransition: f
            });
        function p(g) {
            r && r(g),
                g.defaultPrevented || m(g)
        }
        return x.createElement("a", Ja({}, h, {
            href: v || j,
            onClick: w || i ? r : p,
            ref: n,
            target: u
        }))
    });
var yd;
(function (e) {
    e.UseScrollRestoration = "useScrollRestoration",
        e.UseSubmit = "useSubmit",
        e.UseSubmitFetcher = "useSubmitFetcher",
        e.UseFetcher = "useFetcher",
        e.useViewTransitionState = "useViewTransitionState"
}
)(yd || (yd = {}));
var vd;
(function (e) {
    e.UseFetcher = "useFetcher",
        e.UseFetchers = "useFetchers",
        e.UseScrollRestoration = "useScrollRestoration"
}
)(vd || (vd = {}));
function Dx(e, t) {
    let { target: n, replace: r, state: s, preventScrollReset: i, relative: o, viewTransition: l } = t === void 0 ? {} : t
        , u = ix()
        , c = rr()
        , d = om(e, {
            relative: o
        });
    return x.useCallback(f => {
        if (Nx(f, n)) {
            f.preventDefault();
            let h = r !== void 0 ? r : Mi(c) === Mi(d);
            u(e, {
                replace: h,
                state: s,
                preventScrollReset: i,
                relative: o,
                viewTransition: l
            })
        }
    }
        , [c, u, d, r, s, n, e, i, o, l])
}
function Rx(e) {
    if (typeof Proxy > "u")
        return e;
    const t = new Map
        , n = (...r) => e(...r);
    return new Proxy(n, {
        get: (r, s) => s === "create" ? e : (t.has(s) || t.set(s, e(s)),
            t.get(s))
    })
}
function oo(e) {
    return e !== null && typeof e == "object" && typeof e.start == "function"
}
const el = e => Array.isArray(e);
function cm(e, t) {
    if (!Array.isArray(t))
        return !1;
    const n = t.length;
    if (n !== e.length)
        return !1;
    for (let r = 0; r < n; r++)
        if (t[r] !== e[r])
            return !1;
    return !0
}
function es(e) {
    return typeof e == "string" || Array.isArray(e)
}
function xd(e) {
    const t = [{}, {}];
    return e == null || e.values.forEach((n, r) => {
        t[0][r] = n.get(),
            t[1][r] = n.getVelocity()
    }
    ),
        t
}
function gu(e, t, n, r) {
    if (typeof t == "function") {
        const [s, i] = xd(r);
        t = t(n !== void 0 ? n : e.custom, s, i)
    }
    if (typeof t == "string" && (t = e.variants && e.variants[t]),
        typeof t == "function") {
        const [s, i] = xd(r);
        t = t(n !== void 0 ? n : e.custom, s, i)
    }
    return t
}
function ao(e, t, n) {
    const r = e.getProps();
    return gu(r, t, n !== void 0 ? n : r.custom, e)
}
const yu = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
    , vu = ["initial", ...yu]
    , ds = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
    , yn = new Set(ds)
    , dt = e => e * 1e3
    , ft = e => e / 1e3
    , Lx = {
        type: "spring",
        stiffness: 500,
        damping: 25,
        restSpeed: 10
    }
    , Vx = e => ({
        type: "spring",
        stiffness: 550,
        damping: e === 0 ? 2 * Math.sqrt(550) : 30,
        restSpeed: 10
    })
    , Ix = {
        type: "keyframes",
        duration: .8
    }
    , _x = {
        type: "keyframes",
        ease: [.25, .1, .35, 1],
        duration: .3
    }
    , Ox = (e, { keyframes: t }) => t.length > 2 ? Ix : yn.has(e) ? e.startsWith("scale") ? Vx(t[1]) : Lx : _x;
function xu(e, t) {
    return e ? e[t] || e.default || e : void 0
}
const Fx = {
    skipAnimations: !1,
    useManualTiming: !1
}
    , zx = e => e !== null;
function lo(e, { repeat: t, repeatType: n = "loop" }, r) {
    const s = e.filter(zx)
        , i = t && n !== "loop" && t % 2 === 1 ? 0 : s.length - 1;
    return !i || r === void 0 ? s[i] : r
}
const De = e => e;
let tl = De;
function Bx(e) {
    let t = new Set
        , n = new Set
        , r = !1
        , s = !1;
    const i = new WeakSet;
    let o = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    };
    function l(c) {
        i.has(c) && (u.schedule(c),
            e()),
            c(o)
    }
    const u = {
        schedule: (c, d = !1, f = !1) => {
            const y = f && r ? t : n;
            return d && i.add(c),
                y.has(c) || y.add(c),
                c
        }
        ,
        cancel: c => {
            n.delete(c),
                i.delete(c)
        }
        ,
        process: c => {
            if (o = c,
                r) {
                s = !0;
                return
            }
            r = !0,
                [t, n] = [n, t],
                t.forEach(l),
                t.clear(),
                r = !1,
                s && (s = !1,
                    u.process(c))
        }
    };
    return u
}
const Bs = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"]
    , Ux = 40;
function dm(e, t) {
    let n = !1
        , r = !0;
    const s = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
        , i = () => n = !0
        , o = Bs.reduce((m, p) => (m[p] = Bx(i),
            m), {})
        , { read: l, resolveKeyframes: u, update: c, preRender: d, render: f, postRender: h } = o
        , y = () => {
            const m = performance.now();
            n = !1,
                s.delta = r ? 1e3 / 60 : Math.max(Math.min(m - s.timestamp, Ux), 1),
                s.timestamp = m,
                s.isProcessing = !0,
                l.process(s),
                u.process(s),
                c.process(s),
                d.process(s),
                f.process(s),
                h.process(s),
                s.isProcessing = !1,
                n && t && (r = !1,
                    e(y))
        }
        , v = () => {
            n = !0,
                r = !0,
                s.isProcessing || e(y)
        }
        ;
    return {
        schedule: Bs.reduce((m, p) => {
            const g = o[p];
            return m[p] = (S, k = !1, T = !1) => (n || v(),
                g.schedule(S, k, T)),
                m
        }
            , {}),
        cancel: m => {
            for (let p = 0; p < Bs.length; p++)
                o[Bs[p]].cancel(m)
        }
        ,
        state: s,
        steps: o
    }
}
const { schedule: $, cancel: zt, state: de, steps: Ho } = dm(typeof requestAnimationFrame < "u" ? requestAnimationFrame : De, !0)
    , fm = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e
    , $x = 1e-7
    , Hx = 12;
function Wx(e, t, n, r, s) {
    let i, o, l = 0;
    do
        o = t + (n - t) / 2,
            i = fm(o, r, s) - e,
            i > 0 ? n = o : t = o;
    while (Math.abs(i) > $x && ++l < Hx);
    return o
}
function fs(e, t, n, r) {
    if (e === t && n === r)
        return De;
    const s = i => Wx(i, 0, 1, e, n);
    return i => i === 0 || i === 1 ? i : fm(s(i), t, r)
}
const hm = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2
    , pm = e => t => 1 - e(1 - t)
    , mm = fs(.33, 1.53, .69, .99)
    , wu = pm(mm)
    , gm = hm(wu)
    , ym = e => (e *= 2) < 1 ? .5 * wu(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
    , Su = e => 1 - Math.sin(Math.acos(e))
    , vm = pm(Su)
    , xm = hm(Su)
    , wm = e => /^0[^.\s]+$/u.test(e);
function Kx(e) {
    return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || wm(e) : !0
}
const Sm = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e)
    , jm = e => t => typeof t == "string" && t.startsWith(e)
    , km = jm("--")
    , Gx = jm("var(--")
    , ju = e => Gx(e) ? Xx.test(e.split("/*")[0].trim()) : !1
    , Xx = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu
    , Yx = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function Qx(e) {
    const t = Yx.exec(e);
    if (!t)
        return [,];
    const [, n, r, s] = t;
    return [`--${n ?? r}`, s]
}
function Cm(e, t, n = 1) {
    const [r, s] = Qx(e);
    if (!r)
        return;
    const i = window.getComputedStyle(t).getPropertyValue(r);
    if (i) {
        const o = i.trim();
        return Sm(o) ? parseFloat(o) : o
    }
    return ju(s) ? Cm(s, t, n + 1) : s
}
const yt = (e, t, n) => n > t ? t : n < e ? e : n
    , sr = {
        test: e => typeof e == "number",
        parse: parseFloat,
        transform: e => e
    }
    , ts = {
        ...sr,
        transform: e => yt(0, 1, e)
    }
    , Us = {
        ...sr,
        default: 1
    }
    , hs = e => ({
        test: t => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
        parse: parseFloat,
        transform: t => `${t}${e}`
    })
    , St = hs("deg")
    , st = hs("%")
    , D = hs("px")
    , qx = hs("vh")
    , Zx = hs("vw")
    , wd = {
        ...st,
        parse: e => st.parse(e) / 100,
        transform: e => st.transform(e * 100)
    }
    , Jx = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"])
    , Sd = e => e === sr || e === D
    , jd = (e, t) => parseFloat(e.split(", ")[t])
    , kd = (e, t) => (n, { transform: r }) => {
        if (r === "none" || !r)
            return 0;
        const s = r.match(/^matrix3d\((.+)\)$/u);
        if (s)
            return jd(s[1], t);
        {
            const i = r.match(/^matrix\((.+)\)$/u);
            return i ? jd(i[1], e) : 0
        }
    }
    , e1 = new Set(["x", "y", "z"])
    , t1 = ds.filter(e => !e1.has(e));
function n1(e) {
    const t = [];
    return t1.forEach(n => {
        const r = e.getValue(n);
        r !== void 0 && (t.push([n, r.get()]),
            r.set(n.startsWith("scale") ? 1 : 0))
    }
    ),
        t
}
const Qn = {
    width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e, { top: t }) => parseFloat(t),
    left: (e, { left: t }) => parseFloat(t),
    bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
    right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
    x: kd(4, 13),
    y: kd(5, 14)
};
Qn.translateX = Qn.x;
Qn.translateY = Qn.y;
const Nm = e => t => t.test(e)
    , r1 = {
        test: e => e === "auto",
        parse: e => e
    }
    , Tm = [sr, D, st, St, Zx, qx, r1]
    , Cd = e => Tm.find(Nm(e))
    , an = new Set;
let nl = !1
    , rl = !1;
function Em() {
    if (rl) {
        const e = Array.from(an).filter(r => r.needsMeasurement)
            , t = new Set(e.map(r => r.element))
            , n = new Map;
        t.forEach(r => {
            const s = n1(r);
            s.length && (n.set(r, s),
                r.render())
        }
        ),
            e.forEach(r => r.measureInitialState()),
            t.forEach(r => {
                r.render();
                const s = n.get(r);
                s && s.forEach(([i, o]) => {
                    var l;
                    (l = r.getValue(i)) === null || l === void 0 || l.set(o)
                }
                )
            }
            ),
            e.forEach(r => r.measureEndState()),
            e.forEach(r => {
                r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY)
            }
            )
    }
    rl = !1,
        nl = !1,
        an.forEach(e => e.complete()),
        an.clear()
}
function Pm() {
    an.forEach(e => {
        e.readKeyframes(),
            e.needsMeasurement && (rl = !0)
    }
    )
}
function s1() {
    Pm(),
        Em()
}
class ku {
    constructor(t, n, r, s, i, o = !1) {
        this.isComplete = !1,
            this.isAsync = !1,
            this.needsMeasurement = !1,
            this.isScheduled = !1,
            this.unresolvedKeyframes = [...t],
            this.onComplete = n,
            this.name = r,
            this.motionValue = s,
            this.element = i,
            this.isAsync = o
    }
    scheduleResolve() {
        this.isScheduled = !0,
            this.isAsync ? (an.add(this),
                nl || (nl = !0,
                    $.read(Pm),
                    $.resolveKeyframes(Em))) : (this.readKeyframes(),
                        this.complete())
    }
    readKeyframes() {
        const { unresolvedKeyframes: t, name: n, element: r, motionValue: s } = this;
        for (let i = 0; i < t.length; i++)
            if (t[i] === null)
                if (i === 0) {
                    const o = s == null ? void 0 : s.get()
                        , l = t[t.length - 1];
                    if (o !== void 0)
                        t[0] = o;
                    else if (r && n) {
                        const u = r.readValue(n, l);
                        u != null && (t[0] = u)
                    }
                    t[0] === void 0 && (t[0] = l),
                        s && o === void 0 && s.set(t[0])
                } else
                    t[i] = t[i - 1]
    }
    setFinalKeyframe() { }
    measureInitialState() { }
    renderEndStyles() { }
    measureEndState() { }
    complete() {
        this.isComplete = !0,
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
            an.delete(this)
    }
    cancel() {
        this.isComplete || (this.isScheduled = !1,
            an.delete(this))
    }
    resume() {
        this.isComplete || this.scheduleResolve()
    }
}
const Mr = e => Math.round(e * 1e5) / 1e5
    , Cu = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function i1(e) {
    return e == null
}
const o1 = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu
    , Nu = (e, t) => n => !!(typeof n == "string" && o1.test(n) && n.startsWith(e) || t && !i1(n) && Object.prototype.hasOwnProperty.call(n, t))
    , Am = (e, t, n) => r => {
        if (typeof r != "string")
            return r;
        const [s, i, o, l] = r.match(Cu);
        return {
            [e]: parseFloat(s),
            [t]: parseFloat(i),
            [n]: parseFloat(o),
            alpha: l !== void 0 ? parseFloat(l) : 1
        }
    }
    , a1 = e => yt(0, 255, e)
    , Wo = {
        ...sr,
        transform: e => Math.round(a1(e))
    }
    , rn = {
        test: Nu("rgb", "red"),
        parse: Am("red", "green", "blue"),
        transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + Wo.transform(e) + ", " + Wo.transform(t) + ", " + Wo.transform(n) + ", " + Mr(ts.transform(r)) + ")"
    };
function l1(e) {
    let t = ""
        , n = ""
        , r = ""
        , s = "";
    return e.length > 5 ? (t = e.substring(1, 3),
        n = e.substring(3, 5),
        r = e.substring(5, 7),
        s = e.substring(7, 9)) : (t = e.substring(1, 2),
            n = e.substring(2, 3),
            r = e.substring(3, 4),
            s = e.substring(4, 5),
            t += t,
            n += n,
            r += r,
            s += s),
    {
        red: parseInt(t, 16),
        green: parseInt(n, 16),
        blue: parseInt(r, 16),
        alpha: s ? parseInt(s, 16) / 255 : 1
    }
}
const sl = {
    test: Nu("#"),
    parse: l1,
    transform: rn.transform
}
    , Dn = {
        test: Nu("hsl", "hue"),
        parse: Am("hue", "saturation", "lightness"),
        transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + st.transform(Mr(t)) + ", " + st.transform(Mr(n)) + ", " + Mr(ts.transform(r)) + ")"
    }
    , ge = {
        test: e => rn.test(e) || sl.test(e) || Dn.test(e),
        parse: e => rn.test(e) ? rn.parse(e) : Dn.test(e) ? Dn.parse(e) : sl.parse(e),
        transform: e => typeof e == "string" ? e : e.hasOwnProperty("red") ? rn.transform(e) : Dn.transform(e)
    }
    , u1 = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function c1(e) {
    var t, n;
    return isNaN(e) && typeof e == "string" && (((t = e.match(Cu)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(u1)) === null || n === void 0 ? void 0 : n.length) || 0) > 0
}
const bm = "number"
    , Mm = "color"
    , d1 = "var"
    , f1 = "var("
    , Nd = "${}"
    , h1 = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function ns(e) {
    const t = e.toString()
        , n = []
        , r = {
            color: [],
            number: [],
            var: []
        }
        , s = [];
    let i = 0;
    const l = t.replace(h1, u => (ge.test(u) ? (r.color.push(i),
        s.push(Mm),
        n.push(ge.parse(u))) : u.startsWith(f1) ? (r.var.push(i),
            s.push(d1),
            n.push(u)) : (r.number.push(i),
                s.push(bm),
                n.push(parseFloat(u))),
        ++i,
        Nd)).split(Nd);
    return {
        values: n,
        split: l,
        indexes: r,
        types: s
    }
}
function Dm(e) {
    return ns(e).values
}
function Rm(e) {
    const { split: t, types: n } = ns(e)
        , r = t.length;
    return s => {
        let i = "";
        for (let o = 0; o < r; o++)
            if (i += t[o],
                s[o] !== void 0) {
                const l = n[o];
                l === bm ? i += Mr(s[o]) : l === Mm ? i += ge.transform(s[o]) : i += s[o]
            }
        return i
    }
}
const p1 = e => typeof e == "number" ? 0 : e;
function m1(e) {
    const t = Dm(e);
    return Rm(e)(t.map(p1))
}
const Bt = {
    test: c1,
    parse: Dm,
    createTransformer: Rm,
    getAnimatableNone: m1
}
    , g1 = new Set(["brightness", "contrast", "saturate", "opacity"]);
function y1(e) {
    const [t, n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow")
        return e;
    const [r] = n.match(Cu) || [];
    if (!r)
        return e;
    const s = n.replace(r, "");
    let i = g1.has(t) ? 1 : 0;
    return r !== n && (i *= 100),
        t + "(" + i + s + ")"
}
const v1 = /\b([a-z-]*)\(.*?\)/gu
    , il = {
        ...Bt,
        getAnimatableNone: e => {
            const t = e.match(v1);
            return t ? t.map(y1).join(" ") : e
        }
    }
    , x1 = {
        borderWidth: D,
        borderTopWidth: D,
        borderRightWidth: D,
        borderBottomWidth: D,
        borderLeftWidth: D,
        borderRadius: D,
        radius: D,
        borderTopLeftRadius: D,
        borderTopRightRadius: D,
        borderBottomRightRadius: D,
        borderBottomLeftRadius: D,
        width: D,
        maxWidth: D,
        height: D,
        maxHeight: D,
        top: D,
        right: D,
        bottom: D,
        left: D,
        padding: D,
        paddingTop: D,
        paddingRight: D,
        paddingBottom: D,
        paddingLeft: D,
        margin: D,
        marginTop: D,
        marginRight: D,
        marginBottom: D,
        marginLeft: D,
        backgroundPositionX: D,
        backgroundPositionY: D
    }
    , w1 = {
        rotate: St,
        rotateX: St,
        rotateY: St,
        rotateZ: St,
        scale: Us,
        scaleX: Us,
        scaleY: Us,
        scaleZ: Us,
        skew: St,
        skewX: St,
        skewY: St,
        distance: D,
        translateX: D,
        translateY: D,
        translateZ: D,
        x: D,
        y: D,
        z: D,
        perspective: D,
        transformPerspective: D,
        opacity: ts,
        originX: wd,
        originY: wd,
        originZ: D
    }
    , Td = {
        ...sr,
        transform: Math.round
    }
    , Tu = {
        ...x1,
        ...w1,
        zIndex: Td,
        size: D,
        fillOpacity: ts,
        strokeOpacity: ts,
        numOctaves: Td
    }
    , S1 = {
        ...Tu,
        color: ge,
        backgroundColor: ge,
        outlineColor: ge,
        fill: ge,
        stroke: ge,
        borderColor: ge,
        borderTopColor: ge,
        borderRightColor: ge,
        borderBottomColor: ge,
        borderLeftColor: ge,
        filter: il,
        WebkitFilter: il
    }
    , Eu = e => S1[e];
function Lm(e, t) {
    let n = Eu(e);
    return n !== il && (n = Bt),
        n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
}
const j1 = new Set(["auto", "none", "0"]);
function k1(e, t, n) {
    let r = 0, s;
    for (; r < e.length && !s;) {
        const i = e[r];
        typeof i == "string" && !j1.has(i) && ns(i).values.length && (s = e[r]),
            r++
    }
    if (s && n)
        for (const i of t)
            e[i] = Lm(n, s)
}
class Vm extends ku {
    constructor(t, n, r, s, i) {
        super(t, n, r, s, i, !0)
    }
    readKeyframes() {
        const { unresolvedKeyframes: t, element: n, name: r } = this;
        if (!n || !n.current)
            return;
        super.readKeyframes();
        for (let u = 0; u < t.length; u++) {
            let c = t[u];
            if (typeof c == "string" && (c = c.trim(),
                ju(c))) {
                const d = Cm(c, n.current);
                d !== void 0 && (t[u] = d),
                    u === t.length - 1 && (this.finalKeyframe = c)
            }
        }
        if (this.resolveNoneKeyframes(),
            !Jx.has(r) || t.length !== 2)
            return;
        const [s, i] = t
            , o = Cd(s)
            , l = Cd(i);
        if (o !== l)
            if (Sd(o) && Sd(l))
                for (let u = 0; u < t.length; u++) {
                    const c = t[u];
                    typeof c == "string" && (t[u] = parseFloat(c))
                }
            else
                this.needsMeasurement = !0
    }
    resolveNoneKeyframes() {
        const { unresolvedKeyframes: t, name: n } = this
            , r = [];
        for (let s = 0; s < t.length; s++)
            Kx(t[s]) && r.push(s);
        r.length && k1(t, r, n)
    }
    measureInitialState() {
        const { element: t, unresolvedKeyframes: n, name: r } = this;
        if (!t || !t.current)
            return;
        r === "height" && (this.suspendedScrollY = window.pageYOffset),
            this.measuredOrigin = Qn[r](t.measureViewportBox(), window.getComputedStyle(t.current)),
            n[0] = this.measuredOrigin;
        const s = n[n.length - 1];
        s !== void 0 && t.getValue(r, s).jump(s, !1)
    }
    measureEndState() {
        var t;
        const { element: n, name: r, unresolvedKeyframes: s } = this;
        if (!n || !n.current)
            return;
        const i = n.getValue(r);
        i && i.jump(this.measuredOrigin, !1);
        const o = s.length - 1
            , l = s[o];
        s[o] = Qn[r](n.measureViewportBox(), window.getComputedStyle(n.current)),
            l !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = l),
            !((t = this.removedTransforms) === null || t === void 0) && t.length && this.removedTransforms.forEach(([u, c]) => {
                n.getValue(u).set(c)
            }
            ),
            this.resolveNoneKeyframes()
    }
}
function Pu(e) {
    return typeof e == "function"
}
let si;
function C1() {
    si = void 0
}
const it = {
    now: () => (si === void 0 && it.set(de.isProcessing || Fx.useManualTiming ? de.timestamp : performance.now()),
        si),
    set: e => {
        si = e,
            queueMicrotask(C1)
    }
}
    , Ed = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (Bt.test(e) || e === "0") && !e.startsWith("url("));
function N1(e) {
    const t = e[0];
    if (e.length === 1)
        return !0;
    for (let n = 0; n < e.length; n++)
        if (e[n] !== t)
            return !0
}
function T1(e, t, n, r) {
    const s = e[0];
    if (s === null)
        return !1;
    if (t === "display" || t === "visibility")
        return !0;
    const i = e[e.length - 1]
        , o = Ed(s, t)
        , l = Ed(i, t);
    return !o || !l ? !1 : N1(e) || (n === "spring" || Pu(n)) && r
}
const E1 = 40;
class Im {
    constructor({ autoplay: t = !0, delay: n = 0, type: r = "keyframes", repeat: s = 0, repeatDelay: i = 0, repeatType: o = "loop", ...l }) {
        this.isStopped = !1,
            this.hasAttemptedResolve = !1,
            this.createdAt = it.now(),
            this.options = {
                autoplay: t,
                delay: n,
                type: r,
                repeat: s,
                repeatDelay: i,
                repeatType: o,
                ...l
            },
            this.updateFinishedPromise()
    }
    calcStartTime() {
        return this.resolvedAt ? this.resolvedAt - this.createdAt > E1 ? this.resolvedAt : this.createdAt : this.createdAt
    }
    get resolved() {
        return !this._resolved && !this.hasAttemptedResolve && s1(),
            this._resolved
    }
    onKeyframesResolved(t, n) {
        this.resolvedAt = it.now(),
            this.hasAttemptedResolve = !0;
        const { name: r, type: s, velocity: i, delay: o, onComplete: l, onUpdate: u, isGenerator: c } = this.options;
        if (!c && !T1(t, r, s, i))
            if (o)
                this.options.duration = 0;
            else {
                u == null || u(lo(t, this.options, n)),
                    l == null || l(),
                    this.resolveFinishedPromise();
                return
            }
        const d = this.initPlayback(t, n);
        d !== !1 && (this._resolved = {
            keyframes: t,
            finalKeyframe: n,
            ...d
        },
            this.onPostResolved())
    }
    onPostResolved() { }
    then(t, n) {
        return this.currentFinishedPromise.then(t, n)
    }
    flatten() {
        this.options.type = "keyframes",
            this.options.ease = "linear"
    }
    updateFinishedPromise() {
        this.currentFinishedPromise = new Promise(t => {
            this.resolveFinishedPromise = t
        }
        )
    }
}
const qn = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r
}
    , _m = (e, t, n = 10) => {
        let r = "";
        const s = Math.max(Math.round(t / n), 2);
        for (let i = 0; i < s; i++)
            r += e(qn(0, s - 1, i)) + ", ";
        return `linear(${r.substring(0, r.length - 2)})`
    }
    ;
function Om(e, t) {
    return t ? e * (1e3 / t) : 0
}
const P1 = 5;
function Fm(e, t, n) {
    const r = Math.max(t - P1, 0);
    return Om(n - e(r), t - r)
}
const Y = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: .3,
    visualDuration: .3,
    restSpeed: {
        granular: .01,
        default: 2
    },
    restDelta: {
        granular: .005,
        default: .5
    },
    minDuration: .01,
    maxDuration: 10,
    minDamping: .05,
    maxDamping: 1
}
    , Ko = .001;
function A1({ duration: e = Y.duration, bounce: t = Y.bounce, velocity: n = Y.velocity, mass: r = Y.mass }) {
    let s, i, o = 1 - t;
    o = yt(Y.minDamping, Y.maxDamping, o),
        e = yt(Y.minDuration, Y.maxDuration, ft(e)),
        o < 1 ? (s = c => {
            const d = c * o
                , f = d * e
                , h = d - n
                , y = ol(c, o)
                , v = Math.exp(-f);
            return Ko - h / y * v
        }
            ,
            i = c => {
                const f = c * o * e
                    , h = f * n + n
                    , y = Math.pow(o, 2) * Math.pow(c, 2) * e
                    , v = Math.exp(-f)
                    , w = ol(Math.pow(c, 2), o);
                return (-s(c) + Ko > 0 ? -1 : 1) * ((h - y) * v) / w
            }
        ) : (s = c => {
            const d = Math.exp(-c * e)
                , f = (c - n) * e + 1;
            return -Ko + d * f
        }
            ,
            i = c => {
                const d = Math.exp(-c * e)
                    , f = (n - c) * (e * e);
                return d * f
            }
        );
    const l = 5 / e
        , u = M1(s, i, l);
    if (e = dt(e),
        isNaN(u))
        return {
            stiffness: Y.stiffness,
            damping: Y.damping,
            duration: e
        };
    {
        const c = Math.pow(u, 2) * r;
        return {
            stiffness: c,
            damping: o * 2 * Math.sqrt(r * c),
            duration: e
        }
    }
}
const b1 = 12;
function M1(e, t, n) {
    let r = n;
    for (let s = 1; s < b1; s++)
        r = r - e(r) / t(r);
    return r
}
function ol(e, t) {
    return e * Math.sqrt(1 - t * t)
}
const al = 2e4;
function zm(e) {
    let t = 0;
    const n = 50;
    let r = e.next(t);
    for (; !r.done && t < al;)
        t += n,
            r = e.next(t);
    return t >= al ? 1 / 0 : t
}
const D1 = ["duration", "bounce"]
    , R1 = ["stiffness", "damping", "mass"];
function Pd(e, t) {
    return t.some(n => e[n] !== void 0)
}
function L1(e) {
    let t = {
        velocity: Y.velocity,
        stiffness: Y.stiffness,
        damping: Y.damping,
        mass: Y.mass,
        isResolvedFromDuration: !1,
        ...e
    };
    if (!Pd(e, R1) && Pd(e, D1))
        if (e.visualDuration) {
            const n = e.visualDuration
                , r = 2 * Math.PI / (n * 1.2)
                , s = r * r
                , i = 2 * yt(.05, 1, 1 - e.bounce) * Math.sqrt(s);
            t = {
                ...t,
                mass: Y.mass,
                stiffness: s,
                damping: i
            }
        } else {
            const n = A1(e);
            t = {
                ...t,
                ...n,
                mass: Y.mass
            },
                t.isResolvedFromDuration = !0
        }
    return t
}
function Bm(e = Y.visualDuration, t = Y.bounce) {
    const n = typeof e != "object" ? {
        visualDuration: e,
        keyframes: [0, 1],
        bounce: t
    } : e;
    let { restSpeed: r, restDelta: s } = n;
    const i = n.keyframes[0]
        , o = n.keyframes[n.keyframes.length - 1]
        , l = {
            done: !1,
            value: i
        }
        , { stiffness: u, damping: c, mass: d, duration: f, velocity: h, isResolvedFromDuration: y } = L1({
            ...n,
            velocity: -ft(n.velocity || 0)
        })
        , v = h || 0
        , w = c / (2 * Math.sqrt(u * d))
        , j = o - i
        , m = ft(Math.sqrt(u / d))
        , p = Math.abs(j) < 5;
    r || (r = p ? Y.restSpeed.granular : Y.restSpeed.default),
        s || (s = p ? Y.restDelta.granular : Y.restDelta.default);
    let g;
    if (w < 1) {
        const k = ol(m, w);
        g = T => {
            const E = Math.exp(-w * m * T);
            return o - E * ((v + w * m * j) / k * Math.sin(k * T) + j * Math.cos(k * T))
        }
    } else if (w === 1)
        g = k => o - Math.exp(-m * k) * (j + (v + m * j) * k);
    else {
        const k = m * Math.sqrt(w * w - 1);
        g = T => {
            const E = Math.exp(-w * m * T)
                , N = Math.min(k * T, 300);
            return o - E * ((v + w * m * j) * Math.sinh(N) + k * j * Math.cosh(N)) / k
        }
    }
    const S = {
        calculatedDuration: y && f || null,
        next: k => {
            const T = g(k);
            if (y)
                l.done = k >= f;
            else {
                let E = 0;
                w < 1 && (E = k === 0 ? dt(v) : Fm(g, k, T));
                const N = Math.abs(E) <= r
                    , _ = Math.abs(o - T) <= s;
                l.done = N && _
            }
            return l.value = l.done ? o : T,
                l
        }
        ,
        toString: () => {
            const k = Math.min(zm(S), al)
                , T = _m(E => S.next(k * E).value, k, 30);
            return k + "ms " + T
        }
    };
    return S
}
function Ad({ keyframes: e, velocity: t = 0, power: n = .8, timeConstant: r = 325, bounceDamping: s = 10, bounceStiffness: i = 500, modifyTarget: o, min: l, max: u, restDelta: c = .5, restSpeed: d }) {
    const f = e[0]
        , h = {
            done: !1,
            value: f
        }
        , y = N => l !== void 0 && N < l || u !== void 0 && N > u
        , v = N => l === void 0 ? u : u === void 0 || Math.abs(l - N) < Math.abs(u - N) ? l : u;
    let w = n * t;
    const j = f + w
        , m = o === void 0 ? j : o(j);
    m !== j && (w = m - f);
    const p = N => -w * Math.exp(-N / r)
        , g = N => m + p(N)
        , S = N => {
            const _ = p(N)
                , R = g(N);
            h.done = Math.abs(_) <= c,
                h.value = h.done ? m : R
        }
        ;
    let k, T;
    const E = N => {
        y(h.value) && (k = N,
            T = Bm({
                keyframes: [h.value, v(h.value)],
                velocity: Fm(g, N, h.value),
                damping: s,
                stiffness: i,
                restDelta: c,
                restSpeed: d
            }))
    }
        ;
    return E(0),
    {
        calculatedDuration: null,
        next: N => {
            let _ = !1;
            return !T && k === void 0 && (_ = !0,
                S(N),
                E(N)),
                k !== void 0 && N >= k ? T.next(N - k) : (!_ && S(N),
                    h)
        }
    }
}
const V1 = fs(.42, 0, 1, 1)
    , I1 = fs(0, 0, .58, 1)
    , Um = fs(.42, 0, .58, 1)
    , _1 = e => Array.isArray(e) && typeof e[0] != "number"
    , Au = e => Array.isArray(e) && typeof e[0] == "number"
    , bd = {
        linear: De,
        easeIn: V1,
        easeInOut: Um,
        easeOut: I1,
        circIn: Su,
        circInOut: xm,
        circOut: vm,
        backIn: wu,
        backInOut: gm,
        backOut: mm,
        anticipate: ym
    }
    , Md = e => {
        if (Au(e)) {
            tl(e.length === 4);
            const [t, n, r, s] = e;
            return fs(t, n, r, s)
        } else if (typeof e == "string")
            return tl(bd[e] !== void 0),
                bd[e];
        return e
    }
    , O1 = (e, t) => n => t(e(n))
    , ps = (...e) => e.reduce(O1)
    , K = (e, t, n) => e + (t - e) * n;
function Go(e, t, n) {
    return n < 0 && (n += 1),
        n > 1 && (n -= 1),
        n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}
function F1({ hue: e, saturation: t, lightness: n, alpha: r }) {
    e /= 360,
        t /= 100,
        n /= 100;
    let s = 0
        , i = 0
        , o = 0;
    if (!t)
        s = i = o = n;
    else {
        const l = n < .5 ? n * (1 + t) : n + t - n * t
            , u = 2 * n - l;
        s = Go(u, l, e + 1 / 3),
            i = Go(u, l, e),
            o = Go(u, l, e - 1 / 3)
    }
    return {
        red: Math.round(s * 255),
        green: Math.round(i * 255),
        blue: Math.round(o * 255),
        alpha: r
    }
}
function Ri(e, t) {
    return n => n > 0 ? t : e
}
const Xo = (e, t, n) => {
    const r = e * e
        , s = n * (t * t - r) + r;
    return s < 0 ? 0 : Math.sqrt(s)
}
    , z1 = [sl, rn, Dn]
    , B1 = e => z1.find(t => t.test(e));
function Dd(e) {
    const t = B1(e);
    if (!t)
        return !1;
    let n = t.parse(e);
    return t === Dn && (n = F1(n)),
        n
}
const Rd = (e, t) => {
    const n = Dd(e)
        , r = Dd(t);
    if (!n || !r)
        return Ri(e, t);
    const s = {
        ...n
    };
    return i => (s.red = Xo(n.red, r.red, i),
        s.green = Xo(n.green, r.green, i),
        s.blue = Xo(n.blue, r.blue, i),
        s.alpha = K(n.alpha, r.alpha, i),
        rn.transform(s))
}
    , ll = new Set(["none", "hidden"]);
function U1(e, t) {
    return ll.has(e) ? n => n <= 0 ? e : t : n => n >= 1 ? t : e
}
function $1(e, t) {
    return n => K(e, t, n)
}
function bu(e) {
    return typeof e == "number" ? $1 : typeof e == "string" ? ju(e) ? Ri : ge.test(e) ? Rd : K1 : Array.isArray(e) ? $m : typeof e == "object" ? ge.test(e) ? Rd : H1 : Ri
}
function $m(e, t) {
    const n = [...e]
        , r = n.length
        , s = e.map((i, o) => bu(i)(i, t[o]));
    return i => {
        for (let o = 0; o < r; o++)
            n[o] = s[o](i);
        return n
    }
}
function H1(e, t) {
    const n = {
        ...e,
        ...t
    }
        , r = {};
    for (const s in n)
        e[s] !== void 0 && t[s] !== void 0 && (r[s] = bu(e[s])(e[s], t[s]));
    return s => {
        for (const i in r)
            n[i] = r[i](s);
        return n
    }
}
function W1(e, t) {
    var n;
    const r = []
        , s = {
            color: 0,
            var: 0,
            number: 0
        };
    for (let i = 0; i < t.values.length; i++) {
        const o = t.types[i]
            , l = e.indexes[o][s[o]]
            , u = (n = e.values[l]) !== null && n !== void 0 ? n : 0;
        r[i] = u,
            s[o]++
    }
    return r
}
const K1 = (e, t) => {
    const n = Bt.createTransformer(t)
        , r = ns(e)
        , s = ns(t);
    return r.indexes.var.length === s.indexes.var.length && r.indexes.color.length === s.indexes.color.length && r.indexes.number.length >= s.indexes.number.length ? ll.has(e) && !s.values.length || ll.has(t) && !r.values.length ? U1(e, t) : ps($m(W1(r, s), s.values), n) : Ri(e, t)
}
    ;
function Hm(e, t, n) {
    return typeof e == "number" && typeof t == "number" && typeof n == "number" ? K(e, t, n) : bu(e)(e, t)
}
function G1(e, t, n) {
    const r = []
        , s = n || Hm
        , i = e.length - 1;
    for (let o = 0; o < i; o++) {
        let l = s(e[o], e[o + 1]);
        if (t) {
            const u = Array.isArray(t) ? t[o] || De : t;
            l = ps(u, l)
        }
        r.push(l)
    }
    return r
}
function X1(e, t, { clamp: n = !0, ease: r, mixer: s } = {}) {
    const i = e.length;
    if (tl(i === t.length),
        i === 1)
        return () => t[0];
    if (i === 2 && e[0] === e[1])
        return () => t[1];
    e[0] > e[i - 1] && (e = [...e].reverse(),
        t = [...t].reverse());
    const o = G1(t, r, s)
        , l = o.length
        , u = c => {
            let d = 0;
            if (l > 1)
                for (; d < e.length - 2 && !(c < e[d + 1]); d++)
                    ;
            const f = qn(e[d], e[d + 1], c);
            return o[d](f)
        }
        ;
    return n ? c => u(yt(e[0], e[i - 1], c)) : u
}
function Y1(e, t) {
    const n = e[e.length - 1];
    for (let r = 1; r <= t; r++) {
        const s = qn(0, t, r);
        e.push(K(n, 1, s))
    }
}
function Q1(e) {
    const t = [0];
    return Y1(t, e.length - 1),
        t
}
function q1(e, t) {
    return e.map(n => n * t)
}
function Z1(e, t) {
    return e.map(() => t || Um).splice(0, e.length - 1)
}
function Li({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
    const s = _1(r) ? r.map(Md) : Md(r)
        , i = {
            done: !1,
            value: t[0]
        }
        , o = q1(n && n.length === t.length ? n : Q1(t), e)
        , l = X1(o, t, {
            ease: Array.isArray(s) ? s : Z1(t, s)
        });
    return {
        calculatedDuration: e,
        next: u => (i.value = l(u),
            i.done = u >= e,
            i)
    }
}
const J1 = e => {
    const t = ({ timestamp: n }) => e(n);
    return {
        start: () => $.update(t, !0),
        stop: () => zt(t),
        now: () => de.isProcessing ? de.timestamp : it.now()
    }
}
    , ew = {
        decay: Ad,
        inertia: Ad,
        tween: Li,
        keyframes: Li,
        spring: Bm
    }
    , tw = e => e / 100;
class Mu extends Im {
    constructor(t) {
        super(t),
            this.holdTime = null,
            this.cancelTime = null,
            this.currentTime = 0,
            this.playbackSpeed = 1,
            this.pendingPlayState = "running",
            this.startTime = null,
            this.state = "idle",
            this.stop = () => {
                if (this.resolver.cancel(),
                    this.isStopped = !0,
                    this.state === "idle")
                    return;
                this.teardown();
                const { onStop: u } = this.options;
                u && u()
            }
            ;
        const { name: n, motionValue: r, element: s, keyframes: i } = this.options
            , o = (s == null ? void 0 : s.KeyframeResolver) || ku
            , l = (u, c) => this.onKeyframesResolved(u, c);
        this.resolver = new o(i, l, n, r, s),
            this.resolver.scheduleResolve()
    }
    flatten() {
        super.flatten(),
            this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes))
    }
    initPlayback(t) {
        const { type: n = "keyframes", repeat: r = 0, repeatDelay: s = 0, repeatType: i, velocity: o = 0 } = this.options
            , l = Pu(n) ? n : ew[n] || Li;
        let u, c;
        l !== Li && typeof t[0] != "number" && (u = ps(tw, Hm(t[0], t[1])),
            t = [0, 100]);
        const d = l({
            ...this.options,
            keyframes: t
        });
        i === "mirror" && (c = l({
            ...this.options,
            keyframes: [...t].reverse(),
            velocity: -o
        })),
            d.calculatedDuration === null && (d.calculatedDuration = zm(d));
        const { calculatedDuration: f } = d
            , h = f + s
            , y = h * (r + 1) - s;
        return {
            generator: d,
            mirroredGenerator: c,
            mapPercentToKeyframes: u,
            calculatedDuration: f,
            resolvedDuration: h,
            totalDuration: y
        }
    }
    onPostResolved() {
        const { autoplay: t = !0 } = this.options;
        this.play(),
            this.pendingPlayState === "paused" || !t ? this.pause() : this.state = this.pendingPlayState
    }
    tick(t, n = !1) {
        const { resolved: r } = this;
        if (!r) {
            const { keyframes: N } = this.options;
            return {
                done: !0,
                value: N[N.length - 1]
            }
        }
        const { finalKeyframe: s, generator: i, mirroredGenerator: o, mapPercentToKeyframes: l, keyframes: u, calculatedDuration: c, totalDuration: d, resolvedDuration: f } = r;
        if (this.startTime === null)
            return i.next(0);
        const { delay: h, repeat: y, repeatType: v, repeatDelay: w, onUpdate: j } = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - d / this.speed, this.startTime)),
            n ? this.currentTime = t : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
        const m = this.currentTime - h * (this.speed >= 0 ? 1 : -1)
            , p = this.speed >= 0 ? m < 0 : m > d;
        this.currentTime = Math.max(m, 0),
            this.state === "finished" && this.holdTime === null && (this.currentTime = d);
        let g = this.currentTime
            , S = i;
        if (y) {
            const N = Math.min(this.currentTime, d) / f;
            let _ = Math.floor(N)
                , R = N % 1;
            !R && N >= 1 && (R = 1),
                R === 1 && _--,
                _ = Math.min(_, y + 1),
                !!(_ % 2) && (v === "reverse" ? (R = 1 - R,
                    w && (R -= w / f)) : v === "mirror" && (S = o)),
                g = yt(0, 1, R) * f
        }
        const k = p ? {
            done: !1,
            value: u[0]
        } : S.next(g);
        l && (k.value = l(k.value));
        let { done: T } = k;
        !p && c !== null && (T = this.speed >= 0 ? this.currentTime >= d : this.currentTime <= 0);
        const E = this.holdTime === null && (this.state === "finished" || this.state === "running" && T);
        return E && s !== void 0 && (k.value = lo(u, this.options, s)),
            j && j(k.value),
            E && this.finish(),
            k
    }
    get duration() {
        const { resolved: t } = this;
        return t ? ft(t.calculatedDuration) : 0
    }
    get time() {
        return ft(this.currentTime)
    }
    set time(t) {
        t = dt(t),
            this.currentTime = t,
            this.holdTime !== null || this.speed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(t) {
        const n = this.playbackSpeed !== t;
        this.playbackSpeed = t,
            n && (this.time = ft(this.currentTime))
    }
    play() {
        if (this.resolver.isScheduled || this.resolver.resume(),
            !this._resolved) {
            this.pendingPlayState = "running";
            return
        }
        if (this.isStopped)
            return;
        const { driver: t = J1, onPlay: n, startTime: r } = this.options;
        this.driver || (this.driver = t(i => this.tick(i))),
            n && n();
        const s = this.driver.now();
        this.holdTime !== null ? this.startTime = s - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = s) : this.startTime = r ?? this.calcStartTime(),
            this.state === "finished" && this.updateFinishedPromise(),
            this.cancelTime = this.startTime,
            this.holdTime = null,
            this.state = "running",
            this.driver.start()
    }
    pause() {
        var t;
        if (!this._resolved) {
            this.pendingPlayState = "paused";
            return
        }
        this.state = "paused",
            this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0
    }
    complete() {
        this.state !== "running" && this.play(),
            this.pendingPlayState = this.state = "finished",
            this.holdTime = null
    }
    finish() {
        this.teardown(),
            this.state = "finished";
        const { onComplete: t } = this.options;
        t && t()
    }
    cancel() {
        this.cancelTime !== null && this.tick(this.cancelTime),
            this.teardown(),
            this.updateFinishedPromise()
    }
    teardown() {
        this.state = "idle",
            this.stopDriver(),
            this.resolveFinishedPromise(),
            this.updateFinishedPromise(),
            this.startTime = this.cancelTime = null,
            this.resolver.cancel()
    }
    stopDriver() {
        this.driver && (this.driver.stop(),
            this.driver = void 0)
    }
    sample(t) {
        return this.startTime = 0,
            this.tick(t, !0)
    }
}
const nw = new Set(["opacity", "clipPath", "filter", "transform"]);
function Du(e) {
    let t;
    return () => (t === void 0 && (t = e()),
        t)
}
const rw = {
    linearEasing: void 0
};
function sw(e, t) {
    const n = Du(e);
    return () => {
        var r;
        return (r = rw[t]) !== null && r !== void 0 ? r : n()
    }
}
const Vi = sw(() => {
    try {
        document.createElement("div").animate({
            opacity: 0
        }, {
            easing: "linear(0, 1)"
        })
    } catch {
        return !1
    }
    return !0
}
    , "linearEasing");
function Wm(e) {
    return !!(typeof e == "function" && Vi() || !e || typeof e == "string" && (e in ul || Vi()) || Au(e) || Array.isArray(e) && e.every(Wm))
}
const xr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`
    , ul = {
        linear: "linear",
        ease: "ease",
        easeIn: "ease-in",
        easeOut: "ease-out",
        easeInOut: "ease-in-out",
        circIn: xr([0, .65, .55, 1]),
        circOut: xr([.55, 0, 1, .45]),
        backIn: xr([.31, .01, .66, -.59]),
        backOut: xr([.33, 1.53, .69, .99])
    };
function Km(e, t) {
    if (e)
        return typeof e == "function" && Vi() ? _m(e, t) : Au(e) ? xr(e) : Array.isArray(e) ? e.map(n => Km(n, t) || ul.easeOut) : ul[e]
}
function iw(e, t, n, { delay: r = 0, duration: s = 300, repeat: i = 0, repeatType: o = "loop", ease: l = "easeInOut", times: u } = {}) {
    const c = {
        [t]: n
    };
    u && (c.offset = u);
    const d = Km(l, s);
    return Array.isArray(d) && (c.easing = d),
        e.animate(c, {
            delay: r,
            duration: s,
            easing: Array.isArray(d) ? "linear" : d,
            fill: "both",
            iterations: i + 1,
            direction: o === "reverse" ? "alternate" : "normal"
        })
}
function Ld(e, t) {
    e.timeline = t,
        e.onfinish = null
}
const ow = Du(() => Object.hasOwnProperty.call(Element.prototype, "animate"))
    , Ii = 10
    , aw = 2e4;
function lw(e) {
    return Pu(e.type) || e.type === "spring" || !Wm(e.ease)
}
function uw(e, t) {
    const n = new Mu({
        ...t,
        keyframes: e,
        repeat: 0,
        delay: 0,
        isGenerator: !0
    });
    let r = {
        done: !1,
        value: e[0]
    };
    const s = [];
    let i = 0;
    for (; !r.done && i < aw;)
        r = n.sample(i),
            s.push(r.value),
            i += Ii;
    return {
        times: void 0,
        keyframes: s,
        duration: i - Ii,
        ease: "linear"
    }
}
const Gm = {
    anticipate: ym,
    backInOut: gm,
    circInOut: xm
};
function cw(e) {
    return e in Gm
}
class Vd extends Im {
    constructor(t) {
        super(t);
        const { name: n, motionValue: r, element: s, keyframes: i } = this.options;
        this.resolver = new Vm(i, (o, l) => this.onKeyframesResolved(o, l), n, r, s),
            this.resolver.scheduleResolve()
    }
    initPlayback(t, n) {
        var r;
        let { duration: s = 300, times: i, ease: o, type: l, motionValue: u, name: c, startTime: d } = this.options;
        if (!(!((r = u.owner) === null || r === void 0) && r.current))
            return !1;
        if (typeof o == "string" && Vi() && cw(o) && (o = Gm[o]),
            lw(this.options)) {
            const { onComplete: h, onUpdate: y, motionValue: v, element: w, ...j } = this.options
                , m = uw(t, j);
            t = m.keyframes,
                t.length === 1 && (t[1] = t[0]),
                s = m.duration,
                i = m.times,
                o = m.ease,
                l = "keyframes"
        }
        const f = iw(u.owner.current, c, t, {
            ...this.options,
            duration: s,
            times: i,
            ease: o
        });
        return f.startTime = d ?? this.calcStartTime(),
            this.pendingTimeline ? (Ld(f, this.pendingTimeline),
                this.pendingTimeline = void 0) : f.onfinish = () => {
                    const { onComplete: h } = this.options;
                    u.set(lo(t, this.options, n)),
                        h && h(),
                        this.cancel(),
                        this.resolveFinishedPromise()
                }
            ,
        {
            animation: f,
            duration: s,
            times: i,
            type: l,
            ease: o,
            keyframes: t
        }
    }
    get duration() {
        const { resolved: t } = this;
        if (!t)
            return 0;
        const { duration: n } = t;
        return ft(n)
    }
    get time() {
        const { resolved: t } = this;
        if (!t)
            return 0;
        const { animation: n } = t;
        return ft(n.currentTime || 0)
    }
    set time(t) {
        const { resolved: n } = this;
        if (!n)
            return;
        const { animation: r } = n;
        r.currentTime = dt(t)
    }
    get speed() {
        const { resolved: t } = this;
        if (!t)
            return 1;
        const { animation: n } = t;
        return n.playbackRate
    }
    set speed(t) {
        const { resolved: n } = this;
        if (!n)
            return;
        const { animation: r } = n;
        r.playbackRate = t
    }
    get state() {
        const { resolved: t } = this;
        if (!t)
            return "idle";
        const { animation: n } = t;
        return n.playState
    }
    get startTime() {
        const { resolved: t } = this;
        if (!t)
            return null;
        const { animation: n } = t;
        return n.startTime
    }
    attachTimeline(t) {
        if (!this._resolved)
            this.pendingTimeline = t;
        else {
            const { resolved: n } = this;
            if (!n)
                return De;
            const { animation: r } = n;
            Ld(r, t)
        }
        return De
    }
    play() {
        if (this.isStopped)
            return;
        const { resolved: t } = this;
        if (!t)
            return;
        const { animation: n } = t;
        n.playState === "finished" && this.updateFinishedPromise(),
            n.play()
    }
    pause() {
        const { resolved: t } = this;
        if (!t)
            return;
        const { animation: n } = t;
        n.pause()
    }
    stop() {
        if (this.resolver.cancel(),
            this.isStopped = !0,
            this.state === "idle")
            return;
        this.resolveFinishedPromise(),
            this.updateFinishedPromise();
        const { resolved: t } = this;
        if (!t)
            return;
        const { animation: n, keyframes: r, duration: s, type: i, ease: o, times: l } = t;
        if (n.playState === "idle" || n.playState === "finished")
            return;
        if (this.time) {
            const { motionValue: c, onUpdate: d, onComplete: f, element: h, ...y } = this.options
                , v = new Mu({
                    ...y,
                    keyframes: r,
                    duration: s,
                    type: i,
                    ease: o,
                    times: l,
                    isGenerator: !0
                })
                , w = dt(this.time);
            c.setWithVelocity(v.sample(w - Ii).value, v.sample(w).value, Ii)
        }
        const { onStop: u } = this.options;
        u && u(),
            this.cancel()
    }
    complete() {
        const { resolved: t } = this;
        t && t.animation.finish()
    }
    cancel() {
        const { resolved: t } = this;
        t && t.animation.cancel()
    }
    static supports(t) {
        const { motionValue: n, name: r, repeatDelay: s, repeatType: i, damping: o, type: l } = t;
        return ow() && r && nw.has(r) && n && n.owner && n.owner.current instanceof HTMLElement && !n.owner.getProps().onUpdate && !s && i !== "mirror" && o !== 0 && l !== "inertia"
    }
}
const dw = Du(() => window.ScrollTimeline !== void 0);
class fw {
    constructor(t) {
        this.stop = () => this.runAll("stop"),
            this.animations = t.filter(Boolean)
    }
    then(t, n) {
        return Promise.all(this.animations).then(t).catch(n)
    }
    getAll(t) {
        return this.animations[0][t]
    }
    setAll(t, n) {
        for (let r = 0; r < this.animations.length; r++)
            this.animations[r][t] = n
    }
    attachTimeline(t, n) {
        const r = this.animations.map(s => dw() && s.attachTimeline ? s.attachTimeline(t) : n(s));
        return () => {
            r.forEach((s, i) => {
                s && s(),
                    this.animations[i].stop()
            }
            )
        }
    }
    get time() {
        return this.getAll("time")
    }
    set time(t) {
        this.setAll("time", t)
    }
    get speed() {
        return this.getAll("speed")
    }
    set speed(t) {
        this.setAll("speed", t)
    }
    get startTime() {
        return this.getAll("startTime")
    }
    get duration() {
        let t = 0;
        for (let n = 0; n < this.animations.length; n++)
            t = Math.max(t, this.animations[n].duration);
        return t
    }
    runAll(t) {
        this.animations.forEach(n => n[t]())
    }
    flatten() {
        this.runAll("flatten")
    }
    play() {
        this.runAll("play")
    }
    pause() {
        this.runAll("pause")
    }
    cancel() {
        this.runAll("cancel")
    }
    complete() {
        this.runAll("complete")
    }
}
function hw({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: s, repeat: i, repeatType: o, repeatDelay: l, from: u, elapsed: c, ...d }) {
    return !!Object.keys(d).length
}
const Ru = (e, t, n, r = {}, s, i) => o => {
    const l = xu(r, e) || {}
        , u = l.delay || r.delay || 0;
    let { elapsed: c = 0 } = r;
    c = c - dt(u);
    let d = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: t.getVelocity(),
        ...l,
        delay: -c,
        onUpdate: h => {
            t.set(h),
                l.onUpdate && l.onUpdate(h)
        }
        ,
        onComplete: () => {
            o(),
                l.onComplete && l.onComplete()
        }
        ,
        name: e,
        motionValue: t,
        element: i ? void 0 : s
    };
    hw(l) || (d = {
        ...d,
        ...Ox(e, d)
    }),
        d.duration && (d.duration = dt(d.duration)),
        d.repeatDelay && (d.repeatDelay = dt(d.repeatDelay)),
        d.from !== void 0 && (d.keyframes[0] = d.from);
    let f = !1;
    if ((d.type === !1 || d.duration === 0 && !d.repeatDelay) && (d.duration = 0,
        d.delay === 0 && (f = !0)),
        f && !i && t.get() !== void 0) {
        const h = lo(d.keyframes, l);
        if (h !== void 0)
            return $.update(() => {
                d.onUpdate(h),
                    d.onComplete()
            }
            ),
                new fw([])
    }
    return !i && Vd.supports(d) ? new Vd(d) : new Mu(d)
}
    , pw = e => !!(e && typeof e == "object" && e.mix && e.toValue)
    , mw = e => el(e) ? e[e.length - 1] || 0 : e;
function Lu(e, t) {
    e.indexOf(t) === -1 && e.push(t)
}
function Vu(e, t) {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
class Iu {
    constructor() {
        this.subscriptions = []
    }
    add(t) {
        return Lu(this.subscriptions, t),
            () => Vu(this.subscriptions, t)
    }
    notify(t, n, r) {
        const s = this.subscriptions.length;
        if (s)
            if (s === 1)
                this.subscriptions[0](t, n, r);
            else
                for (let i = 0; i < s; i++) {
                    const o = this.subscriptions[i];
                    o && o(t, n, r)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const Id = 30
    , gw = e => !isNaN(parseFloat(e));
class yw {
    constructor(t, n = {}) {
        this.version = "11.15.0",
            this.canTrackVelocity = null,
            this.events = {},
            this.updateAndNotify = (r, s = !0) => {
                const i = it.now();
                this.updatedAt !== i && this.setPrevFrameValue(),
                    this.prev = this.current,
                    this.setCurrent(r),
                    this.current !== this.prev && this.events.change && this.events.change.notify(this.current),
                    s && this.events.renderRequest && this.events.renderRequest.notify(this.current)
            }
            ,
            this.hasAnimated = !1,
            this.setCurrent(t),
            this.owner = n.owner
    }
    setCurrent(t) {
        this.current = t,
            this.updatedAt = it.now(),
            this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = gw(this.current))
    }
    setPrevFrameValue(t = this.current) {
        this.prevFrameValue = t,
            this.prevUpdatedAt = this.updatedAt
    }
    onChange(t) {
        return this.on("change", t)
    }
    on(t, n) {
        this.events[t] || (this.events[t] = new Iu);
        const r = this.events[t].add(n);
        return t === "change" ? () => {
            r(),
                $.read(() => {
                    this.events.change.getSize() || this.stop()
                }
                )
        }
            : r
    }
    clearListeners() {
        for (const t in this.events)
            this.events[t].clear()
    }
    attach(t, n) {
        this.passiveEffect = t,
            this.stopPassiveEffect = n
    }
    set(t, n = !0) {
        !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify)
    }
    setWithVelocity(t, n, r) {
        this.set(n),
            this.prev = void 0,
            this.prevFrameValue = t,
            this.prevUpdatedAt = this.updatedAt - r
    }
    jump(t, n = !0) {
        this.updateAndNotify(t),
            this.prev = t,
            this.prevUpdatedAt = this.prevFrameValue = void 0,
            n && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect()
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const t = it.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > Id)
            return 0;
        const n = Math.min(this.updatedAt - this.prevUpdatedAt, Id);
        return Om(parseFloat(this.current) - parseFloat(this.prevFrameValue), n)
    }
    start(t) {
        return this.stop(),
            new Promise(n => {
                this.hasAnimated = !0,
                    this.animation = t(n),
                    this.events.animationStart && this.events.animationStart.notify()
            }
            ).then(() => {
                this.events.animationComplete && this.events.animationComplete.notify(),
                    this.clearAnimation()
            }
            )
    }
    stop() {
        this.animation && (this.animation.stop(),
            this.events.animationCancel && this.events.animationCancel.notify()),
            this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect()
    }
}
function rs(e, t) {
    return new yw(e, t)
}
function vw(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, rs(n))
}
function xw(e, t) {
    const n = ao(e, t);
    let { transitionEnd: r = {}, transition: s = {}, ...i } = n || {};
    i = {
        ...i,
        ...r
    };
    for (const o in i) {
        const l = mw(i[o]);
        vw(e, o, l)
    }
}
const _u = e => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase()
    , ww = "framerAppearId"
    , Xm = "data-" + _u(ww);
function Ym(e) {
    return e.props[Xm]
}
const ve = e => !!(e && e.getVelocity);
function Sw(e) {
    return !!(ve(e) && e.add)
}
function cl(e, t) {
    const n = e.getValue("willChange");
    if (Sw(n))
        return n.add(t)
}
function jw({ protectedKeys: e, needsAnimating: t }, n) {
    const r = e.hasOwnProperty(n) && t[n] !== !0;
    return t[n] = !1,
        r
}
function Qm(e, t, { delay: n = 0, transitionOverride: r, type: s } = {}) {
    var i;
    let { transition: o = e.getDefaultTransition(), transitionEnd: l, ...u } = t;
    r && (o = r);
    const c = []
        , d = s && e.animationState && e.animationState.getState()[s];
    for (const f in u) {
        const h = e.getValue(f, (i = e.latestValues[f]) !== null && i !== void 0 ? i : null)
            , y = u[f];
        if (y === void 0 || d && jw(d, f))
            continue;
        const v = {
            delay: n,
            ...xu(o || {}, f)
        };
        let w = !1;
        if (window.MotionHandoffAnimation) {
            const m = Ym(e);
            if (m) {
                const p = window.MotionHandoffAnimation(m, f, $);
                p !== null && (v.startTime = p,
                    w = !0)
            }
        }
        cl(e, f),
            h.start(Ru(f, h, y, e.shouldReduceMotion && yn.has(f) ? {
                type: !1
            } : v, e, w));
        const j = h.animation;
        j && c.push(j)
    }
    return l && Promise.all(c).then(() => {
        $.update(() => {
            l && xw(e, l)
        }
        )
    }
    ),
        c
}
function dl(e, t, n = {}) {
    var r;
    const s = ao(e, t, n.type === "exit" ? (r = e.presenceContext) === null || r === void 0 ? void 0 : r.custom : void 0);
    let { transition: i = e.getDefaultTransition() || {} } = s || {};
    n.transitionOverride && (i = n.transitionOverride);
    const o = s ? () => Promise.all(Qm(e, s, n)) : () => Promise.resolve()
        , l = e.variantChildren && e.variantChildren.size ? (c = 0) => {
            const { delayChildren: d = 0, staggerChildren: f, staggerDirection: h } = i;
            return kw(e, t, d + c, f, h, n)
        }
            : () => Promise.resolve()
        , { when: u } = i;
    if (u) {
        const [c, d] = u === "beforeChildren" ? [o, l] : [l, o];
        return c().then(() => d())
    } else
        return Promise.all([o(), l(n.delay)])
}
function kw(e, t, n = 0, r = 0, s = 1, i) {
    const o = []
        , l = (e.variantChildren.size - 1) * r
        , u = s === 1 ? (c = 0) => c * r : (c = 0) => l - c * r;
    return Array.from(e.variantChildren).sort(Cw).forEach((c, d) => {
        c.notify("AnimationStart", t),
            o.push(dl(c, t, {
                ...i,
                delay: n + u(d)
            }).then(() => c.notify("AnimationComplete", t)))
    }
    ),
        Promise.all(o)
}
function Cw(e, t) {
    return e.sortNodePosition(t)
}
function Nw(e, t, n = {}) {
    e.notify("AnimationStart", t);
    let r;
    if (Array.isArray(t)) {
        const s = t.map(i => dl(e, i, n));
        r = Promise.all(s)
    } else if (typeof t == "string")
        r = dl(e, t, n);
    else {
        const s = typeof t == "function" ? ao(e, t, n.custom) : t;
        r = Promise.all(Qm(e, s, n))
    }
    return r.then(() => {
        e.notify("AnimationComplete", t)
    }
    )
}
const Tw = vu.length;
function qm(e) {
    if (!e)
        return;
    if (!e.isControllingVariants) {
        const n = e.parent ? qm(e.parent) || {} : {};
        return e.props.initial !== void 0 && (n.initial = e.props.initial),
            n
    }
    const t = {};
    for (let n = 0; n < Tw; n++) {
        const r = vu[n]
            , s = e.props[r];
        (es(s) || s === !1) && (t[r] = s)
    }
    return t
}
const Ew = [...yu].reverse()
    , Pw = yu.length;
function Aw(e) {
    return t => Promise.all(t.map(({ animation: n, options: r }) => Nw(e, n, r)))
}
function bw(e) {
    let t = Aw(e)
        , n = _d()
        , r = !0;
    const s = u => (c, d) => {
        var f;
        const h = ao(e, d, u === "exit" ? (f = e.presenceContext) === null || f === void 0 ? void 0 : f.custom : void 0);
        if (h) {
            const { transition: y, transitionEnd: v, ...w } = h;
            c = {
                ...c,
                ...w,
                ...v
            }
        }
        return c
    }
        ;
    function i(u) {
        t = u(e)
    }
    function o(u) {
        const { props: c } = e
            , d = qm(e.parent) || {}
            , f = []
            , h = new Set;
        let y = {}
            , v = 1 / 0;
        for (let j = 0; j < Pw; j++) {
            const m = Ew[j]
                , p = n[m]
                , g = c[m] !== void 0 ? c[m] : d[m]
                , S = es(g)
                , k = m === u ? p.isActive : null;
            k === !1 && (v = j);
            let T = g === d[m] && g !== c[m] && S;
            if (T && r && e.manuallyAnimateOnMount && (T = !1),
                p.protectedKeys = {
                    ...y
                },
                !p.isActive && k === null || !g && !p.prevProp || oo(g) || typeof g == "boolean")
                continue;
            const E = Mw(p.prevProp, g);
            let N = E || m === u && p.isActive && !T && S || j > v && S
                , _ = !1;
            const R = Array.isArray(g) ? g : [g];
            let ie = R.reduce(s(m), {});
            k === !1 && (ie = {});
            const { prevResolvedValues: xt = {} } = p
                , Kt = {
                    ...xt,
                    ...ie
                }
                , ir = ne => {
                    N = !0,
                        h.has(ne) && (_ = !0,
                            h.delete(ne)),
                        p.needsAnimating[ne] = !0;
                    const P = e.getValue(ne);
                    P && (P.liveStyle = !1)
                }
                ;
            for (const ne in Kt) {
                const P = ie[ne]
                    , L = xt[ne];
                if (y.hasOwnProperty(ne))
                    continue;
                let V = !1;
                el(P) && el(L) ? V = !cm(P, L) : V = P !== L,
                    V ? P != null ? ir(ne) : h.add(ne) : P !== void 0 && h.has(ne) ? ir(ne) : p.protectedKeys[ne] = !0
            }
            p.prevProp = g,
                p.prevResolvedValues = ie,
                p.isActive && (y = {
                    ...y,
                    ...ie
                }),
                r && e.blockInitialAnimation && (N = !1),
                N && (!(T && E) || _) && f.push(...R.map(ne => ({
                    animation: ne,
                    options: {
                        type: m
                    }
                })))
        }
        if (h.size) {
            const j = {};
            h.forEach(m => {
                const p = e.getBaseTarget(m)
                    , g = e.getValue(m);
                g && (g.liveStyle = !0),
                    j[m] = p ?? null
            }
            ),
                f.push({
                    animation: j
                })
        }
        let w = !!f.length;
        return r && (c.initial === !1 || c.initial === c.animate) && !e.manuallyAnimateOnMount && (w = !1),
            r = !1,
            w ? t(f) : Promise.resolve()
    }
    function l(u, c) {
        var d;
        if (n[u].isActive === c)
            return Promise.resolve();
        (d = e.variantChildren) === null || d === void 0 || d.forEach(h => {
            var y;
            return (y = h.animationState) === null || y === void 0 ? void 0 : y.setActive(u, c)
        }
        ),
            n[u].isActive = c;
        const f = o(u);
        for (const h in n)
            n[h].protectedKeys = {};
        return f
    }
    return {
        animateChanges: o,
        setActive: l,
        setAnimateFunction: i,
        getState: () => n,
        reset: () => {
            n = _d(),
                r = !0
        }
    }
}
function Mw(e, t) {
    return typeof t == "string" ? t !== e : Array.isArray(t) ? !cm(t, e) : !1
}
function Yt(e = !1) {
    return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function _d() {
    return {
        animate: Yt(!0),
        whileInView: Yt(),
        whileHover: Yt(),
        whileTap: Yt(),
        whileDrag: Yt(),
        whileFocus: Yt(),
        exit: Yt()
    }
}
class Wt {
    constructor(t) {
        this.isMounted = !1,
            this.node = t
    }
    update() { }
}
class Dw extends Wt {
    constructor(t) {
        super(t),
            t.animationState || (t.animationState = bw(t))
    }
    updateAnimationControlsSubscription() {
        const { animate: t } = this.node.getProps();
        oo(t) && (this.unmountControls = t.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const { animate: t } = this.node.getProps()
            , { animate: n } = this.node.prevProps || {};
        t !== n && this.updateAnimationControlsSubscription()
    }
    unmount() {
        var t;
        this.node.animationState.reset(),
            (t = this.unmountControls) === null || t === void 0 || t.call(this)
    }
}
let Rw = 0;
class Lw extends Wt {
    constructor() {
        super(...arguments),
            this.id = Rw++
    }
    update() {
        if (!this.node.presenceContext)
            return;
        const { isPresent: t, onExitComplete: n } = this.node.presenceContext
            , { isPresent: r } = this.node.prevPresenceContext || {};
        if (!this.node.animationState || t === r)
            return;
        const s = this.node.animationState.setActive("exit", !t);
        n && !t && s.then(() => n(this.id))
    }
    mount() {
        const { register: t } = this.node.presenceContext || {};
        t && (this.unmount = t(this.id))
    }
    unmount() { }
}
const Vw = {
    animation: {
        Feature: Dw
    },
    exit: {
        Feature: Lw
    }
}
    , Ke = {
        x: !1,
        y: !1
    };
function Zm() {
    return Ke.x || Ke.y
}
function Iw(e, t, n) {
    var r;
    if (e instanceof Element)
        return [e];
    if (typeof e == "string") {
        let s = document;
        const i = (r = void 0) !== null && r !== void 0 ? r : s.querySelectorAll(e);
        return i ? Array.from(i) : []
    }
    return Array.from(e)
}
function Jm(e, t) {
    const n = Iw(e)
        , r = new AbortController
        , s = {
            passive: !0,
            ...t,
            signal: r.signal
        };
    return [n, s, () => r.abort()]
}
function Od(e) {
    return t => {
        t.pointerType === "touch" || Zm() || e(t)
    }
}
function _w(e, t, n = {}) {
    const [r, s, i] = Jm(e, n)
        , o = Od(l => {
            const { target: u } = l
                , c = t(l);
            if (!c || !u)
                return;
            const d = Od(f => {
                c(f),
                    u.removeEventListener("pointerleave", d)
            }
            );
            u.addEventListener("pointerleave", d, s)
        }
        );
    return r.forEach(l => {
        l.addEventListener("pointerenter", o, s)
    }
    ),
        i
}
const Ou = e => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1
    , wr = new WeakSet;
function Fd(e) {
    return t => {
        t.key === "Enter" && e(t)
    }
}
function Yo(e, t) {
    e.dispatchEvent(new PointerEvent("pointer" + t, {
        isPrimary: !0,
        bubbles: !0
    }))
}
const Ow = (e, t) => {
    const n = e.currentTarget;
    if (!n)
        return;
    const r = Fd(() => {
        if (wr.has(n))
            return;
        Yo(n, "down");
        const s = Fd(() => {
            Yo(n, "up")
        }
        )
            , i = () => Yo(n, "cancel");
        n.addEventListener("keyup", s, t),
            n.addEventListener("blur", i, t)
    }
    );
    n.addEventListener("keydown", r, t),
        n.addEventListener("blur", () => n.removeEventListener("keydown", r), t)
}
    , Fw = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function zw(e) {
    return Fw.has(e.tagName) || e.tabIndex !== -1
}
const e0 = (e, t) => t ? e === t ? !0 : e0(e, t.parentElement) : !1;
function zd(e) {
    return Ou(e) && !Zm()
}
function Bw(e, t, n = {}) {
    const [r, s, i] = Jm(e, n)
        , o = l => {
            const u = l.currentTarget;
            if (!zd(l) || wr.has(u))
                return;
            wr.add(u);
            const c = t(l)
                , d = (y, v) => {
                    window.removeEventListener("pointerup", f),
                        window.removeEventListener("pointercancel", h),
                        !(!zd(y) || !wr.has(u)) && (wr.delete(u),
                            c && c(y, {
                                success: v
                            }))
                }
                , f = y => {
                    d(y, n.useGlobalTarget || e0(u, y.target))
                }
                , h = y => {
                    d(y, !1)
                }
                ;
            window.addEventListener("pointerup", f, s),
                window.addEventListener("pointercancel", h, s)
        }
        ;
    return r.forEach(l => {
        zw(l) || (l.tabIndex = 0),
            (n.useGlobalTarget ? window : l).addEventListener("pointerdown", o, s),
            l.addEventListener("focus", c => Ow(c, s), s)
    }
    ),
        i
}
function Uw(e) {
    return e === "x" || e === "y" ? Ke[e] ? null : (Ke[e] = !0,
        () => {
            Ke[e] = !1
        }
    ) : Ke.x || Ke.y ? null : (Ke.x = Ke.y = !0,
        () => {
            Ke.x = Ke.y = !1
        }
    )
}
function ms(e) {
    return {
        point: {
            x: e.pageX,
            y: e.pageY
        }
    }
}
const $w = e => t => Ou(t) && e(t, ms(t));
function ss(e, t, n, r = {
    passive: !0
}) {
    return e.addEventListener(t, n, r),
        () => e.removeEventListener(t, n)
}
function Dr(e, t, n, r) {
    return ss(e, t, $w(n), r)
}
const Bd = (e, t) => Math.abs(e - t);
function Hw(e, t) {
    const n = Bd(e.x, t.x)
        , r = Bd(e.y, t.y);
    return Math.sqrt(n ** 2 + r ** 2)
}
class t0 {
    constructor(t, n, { transformPagePoint: r, contextWindow: s, dragSnapToOrigin: i = !1 } = {}) {
        if (this.startEvent = null,
            this.lastMoveEvent = null,
            this.lastMoveEventInfo = null,
            this.handlers = {},
            this.contextWindow = window,
            this.updatePoint = () => {
                if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                    return;
                const f = qo(this.lastMoveEventInfo, this.history)
                    , h = this.startEvent !== null
                    , y = Hw(f.offset, {
                        x: 0,
                        y: 0
                    }) >= 3;
                if (!h && !y)
                    return;
                const { point: v } = f
                    , { timestamp: w } = de;
                this.history.push({
                    ...v,
                    timestamp: w
                });
                const { onStart: j, onMove: m } = this.handlers;
                h || (j && j(this.lastMoveEvent, f),
                    this.startEvent = this.lastMoveEvent),
                    m && m(this.lastMoveEvent, f)
            }
            ,
            this.handlePointerMove = (f, h) => {
                this.lastMoveEvent = f,
                    this.lastMoveEventInfo = Qo(h, this.transformPagePoint),
                    $.update(this.updatePoint, !0)
            }
            ,
            this.handlePointerUp = (f, h) => {
                this.end();
                const { onEnd: y, onSessionEnd: v, resumeAnimation: w } = this.handlers;
                if (this.dragSnapToOrigin && w && w(),
                    !(this.lastMoveEvent && this.lastMoveEventInfo))
                    return;
                const j = qo(f.type === "pointercancel" ? this.lastMoveEventInfo : Qo(h, this.transformPagePoint), this.history);
                this.startEvent && y && y(f, j),
                    v && v(f, j)
            }
            ,
            !Ou(t))
            return;
        this.dragSnapToOrigin = i,
            this.handlers = n,
            this.transformPagePoint = r,
            this.contextWindow = s || window;
        const o = ms(t)
            , l = Qo(o, this.transformPagePoint)
            , { point: u } = l
            , { timestamp: c } = de;
        this.history = [{
            ...u,
            timestamp: c
        }];
        const { onSessionStart: d } = n;
        d && d(t, qo(l, this.history)),
            this.removeListeners = ps(Dr(this.contextWindow, "pointermove", this.handlePointerMove), Dr(this.contextWindow, "pointerup", this.handlePointerUp), Dr(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(t) {
        this.handlers = t
    }
    end() {
        this.removeListeners && this.removeListeners(),
            zt(this.updatePoint)
    }
}
function Qo(e, t) {
    return t ? {
        point: t(e.point)
    } : e
}
function Ud(e, t) {
    return {
        x: e.x - t.x,
        y: e.y - t.y
    }
}
function qo({ point: e }, t) {
    return {
        point: e,
        delta: Ud(e, n0(t)),
        offset: Ud(e, Ww(t)),
        velocity: Kw(t, .1)
    }
}
function Ww(e) {
    return e[0]
}
function n0(e) {
    return e[e.length - 1]
}
function Kw(e, t) {
    if (e.length < 2)
        return {
            x: 0,
            y: 0
        };
    let n = e.length - 1
        , r = null;
    const s = n0(e);
    for (; n >= 0 && (r = e[n],
        !(s.timestamp - r.timestamp > dt(t)));)
        n--;
    if (!r)
        return {
            x: 0,
            y: 0
        };
    const i = ft(s.timestamp - r.timestamp);
    if (i === 0)
        return {
            x: 0,
            y: 0
        };
    const o = {
        x: (s.x - r.x) / i,
        y: (s.y - r.y) / i
    };
    return o.x === 1 / 0 && (o.x = 0),
        o.y === 1 / 0 && (o.y = 0),
        o
}
function Rn(e) {
    return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}
const r0 = 1e-4
    , Gw = 1 - r0
    , Xw = 1 + r0
    , s0 = .01
    , Yw = 0 - s0
    , Qw = 0 + s0;
function Le(e) {
    return e.max - e.min
}
function qw(e, t, n) {
    return Math.abs(e - t) <= n
}
function $d(e, t, n, r = .5) {
    e.origin = r,
        e.originPoint = K(t.min, t.max, e.origin),
        e.scale = Le(n) / Le(t),
        e.translate = K(n.min, n.max, e.origin) - e.originPoint,
        (e.scale >= Gw && e.scale <= Xw || isNaN(e.scale)) && (e.scale = 1),
        (e.translate >= Yw && e.translate <= Qw || isNaN(e.translate)) && (e.translate = 0)
}
function Rr(e, t, n, r) {
    $d(e.x, t.x, n.x, r ? r.originX : void 0),
        $d(e.y, t.y, n.y, r ? r.originY : void 0)
}
function Hd(e, t, n) {
    e.min = n.min + t.min,
        e.max = e.min + Le(t)
}
function Zw(e, t, n) {
    Hd(e.x, t.x, n.x),
        Hd(e.y, t.y, n.y)
}
function Wd(e, t, n) {
    e.min = t.min - n.min,
        e.max = e.min + Le(t)
}
function Lr(e, t, n) {
    Wd(e.x, t.x, n.x),
        Wd(e.y, t.y, n.y)
}
function Jw(e, { min: t, max: n }, r) {
    return t !== void 0 && e < t ? e = r ? K(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? K(n, e, r.max) : Math.min(e, n)),
        e
}
function Kd(e, t, n) {
    return {
        min: t !== void 0 ? e.min + t : void 0,
        max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
    }
}
function e2(e, { top: t, left: n, bottom: r, right: s }) {
    return {
        x: Kd(e.x, n, s),
        y: Kd(e.y, t, r)
    }
}
function Gd(e, t) {
    let n = t.min - e.min
        , r = t.max - e.max;
    return t.max - t.min < e.max - e.min && ([n, r] = [r, n]),
    {
        min: n,
        max: r
    }
}
function t2(e, t) {
    return {
        x: Gd(e.x, t.x),
        y: Gd(e.y, t.y)
    }
}
function n2(e, t) {
    let n = .5;
    const r = Le(e)
        , s = Le(t);
    return s > r ? n = qn(t.min, t.max - r, e.min) : r > s && (n = qn(e.min, e.max - s, t.min)),
        yt(0, 1, n)
}
function r2(e, t) {
    const n = {};
    return t.min !== void 0 && (n.min = t.min - e.min),
        t.max !== void 0 && (n.max = t.max - e.min),
        n
}
const fl = .35;
function s2(e = fl) {
    return e === !1 ? e = 0 : e === !0 && (e = fl),
    {
        x: Xd(e, "left", "right"),
        y: Xd(e, "top", "bottom")
    }
}
function Xd(e, t, n) {
    return {
        min: Yd(e, t),
        max: Yd(e, n)
    }
}
function Yd(e, t) {
    return typeof e == "number" ? e : e[t] || 0
}
const Qd = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
})
    , Ln = () => ({
        x: Qd(),
        y: Qd()
    })
    , qd = () => ({
        min: 0,
        max: 0
    })
    , Z = () => ({
        x: qd(),
        y: qd()
    });
function Oe(e) {
    return [e("x"), e("y")]
}
function i0({ top: e, left: t, right: n, bottom: r }) {
    return {
        x: {
            min: t,
            max: n
        },
        y: {
            min: e,
            max: r
        }
    }
}
function i2({ x: e, y: t }) {
    return {
        top: t.min,
        right: e.max,
        bottom: t.max,
        left: e.min
    }
}
function o2(e, t) {
    if (!t)
        return e;
    const n = t({
        x: e.left,
        y: e.top
    })
        , r = t({
            x: e.right,
            y: e.bottom
        });
    return {
        top: n.y,
        left: n.x,
        bottom: r.y,
        right: r.x
    }
}
function Zo(e) {
    return e === void 0 || e === 1
}
function hl({ scale: e, scaleX: t, scaleY: n }) {
    return !Zo(e) || !Zo(t) || !Zo(n)
}
function Zt(e) {
    return hl(e) || o0(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
}
function o0(e) {
    return Zd(e.x) || Zd(e.y)
}
function Zd(e) {
    return e && e !== "0%"
}
function _i(e, t, n) {
    const r = e - n
        , s = t * r;
    return n + s
}
function Jd(e, t, n, r, s) {
    return s !== void 0 && (e = _i(e, s, r)),
        _i(e, n, r) + t
}
function pl(e, t = 0, n = 1, r, s) {
    e.min = Jd(e.min, t, n, r, s),
        e.max = Jd(e.max, t, n, r, s)
}
function a0(e, { x: t, y: n }) {
    pl(e.x, t.translate, t.scale, t.originPoint),
        pl(e.y, n.translate, n.scale, n.originPoint)
}
const ef = .999999999999
    , tf = 1.0000000000001;
function a2(e, t, n, r = !1) {
    const s = n.length;
    if (!s)
        return;
    t.x = t.y = 1;
    let i, o;
    for (let l = 0; l < s; l++) {
        i = n[l],
            o = i.projectionDelta;
        const { visualElement: u } = i.options;
        u && u.props.style && u.props.style.display === "contents" || (r && i.options.layoutScroll && i.scroll && i !== i.root && In(e, {
            x: -i.scroll.offset.x,
            y: -i.scroll.offset.y
        }),
            o && (t.x *= o.x.scale,
                t.y *= o.y.scale,
                a0(e, o)),
            r && Zt(i.latestValues) && In(e, i.latestValues))
    }
    t.x < tf && t.x > ef && (t.x = 1),
        t.y < tf && t.y > ef && (t.y = 1)
}
function Vn(e, t) {
    e.min = e.min + t,
        e.max = e.max + t
}
function nf(e, t, n, r, s = .5) {
    const i = K(e.min, e.max, s);
    pl(e, t, n, i, r)
}
function In(e, t) {
    nf(e.x, t.x, t.scaleX, t.scale, t.originX),
        nf(e.y, t.y, t.scaleY, t.scale, t.originY)
}
function l0(e, t) {
    return i0(o2(e.getBoundingClientRect(), t))
}
function l2(e, t, n) {
    const r = l0(e, n)
        , { scroll: s } = t;
    return s && (Vn(r.x, s.offset.x),
        Vn(r.y, s.offset.y)),
        r
}
const u0 = ({ current: e }) => e ? e.ownerDocument.defaultView : null
    , u2 = new WeakMap;
class c2 {
    constructor(t) {
        this.openDragLock = null,
            this.isDragging = !1,
            this.currentDirection = null,
            this.originPoint = {
                x: 0,
                y: 0
            },
            this.constraints = !1,
            this.hasMutatedConstraints = !1,
            this.elastic = Z(),
            this.visualElement = t
    }
    start(t, { snapToCursor: n = !1 } = {}) {
        const { presenceContext: r } = this.visualElement;
        if (r && r.isPresent === !1)
            return;
        const s = d => {
            const { dragSnapToOrigin: f } = this.getProps();
            f ? this.pauseAnimation() : this.stopAnimation(),
                n && this.snapToCursor(ms(d).point)
        }
            , i = (d, f) => {
                const { drag: h, dragPropagation: y, onDragStart: v } = this.getProps();
                if (h && !y && (this.openDragLock && this.openDragLock(),
                    this.openDragLock = Uw(h),
                    !this.openDragLock))
                    return;
                this.isDragging = !0,
                    this.currentDirection = null,
                    this.resolveConstraints(),
                    this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
                        this.visualElement.projection.target = void 0),
                    Oe(j => {
                        let m = this.getAxisMotionValue(j).get() || 0;
                        if (st.test(m)) {
                            const { projection: p } = this.visualElement;
                            if (p && p.layout) {
                                const g = p.layout.layoutBox[j];
                                g && (m = Le(g) * (parseFloat(m) / 100))
                            }
                        }
                        this.originPoint[j] = m
                    }
                    ),
                    v && $.postRender(() => v(d, f)),
                    cl(this.visualElement, "transform");
                const { animationState: w } = this.visualElement;
                w && w.setActive("whileDrag", !0)
            }
            , o = (d, f) => {
                const { dragPropagation: h, dragDirectionLock: y, onDirectionLock: v, onDrag: w } = this.getProps();
                if (!h && !this.openDragLock)
                    return;
                const { offset: j } = f;
                if (y && this.currentDirection === null) {
                    this.currentDirection = d2(j),
                        this.currentDirection !== null && v && v(this.currentDirection);
                    return
                }
                this.updateAxis("x", f.point, j),
                    this.updateAxis("y", f.point, j),
                    this.visualElement.render(),
                    w && w(d, f)
            }
            , l = (d, f) => this.stop(d, f)
            , u = () => Oe(d => {
                var f;
                return this.getAnimationState(d) === "paused" && ((f = this.getAxisMotionValue(d).animation) === null || f === void 0 ? void 0 : f.play())
            }
            )
            , { dragSnapToOrigin: c } = this.getProps();
        this.panSession = new t0(t, {
            onSessionStart: s,
            onStart: i,
            onMove: o,
            onSessionEnd: l,
            resumeAnimation: u
        }, {
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: c,
            contextWindow: u0(this.visualElement)
        })
    }
    stop(t, n) {
        const r = this.isDragging;
        if (this.cancel(),
            !r)
            return;
        const { velocity: s } = n;
        this.startAnimation(s);
        const { onDragEnd: i } = this.getProps();
        i && $.postRender(() => i(t, n))
    }
    cancel() {
        this.isDragging = !1;
        const { projection: t, animationState: n } = this.visualElement;
        t && (t.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            this.panSession = void 0;
        const { dragPropagation: r } = this.getProps();
        !r && this.openDragLock && (this.openDragLock(),
            this.openDragLock = null),
            n && n.setActive("whileDrag", !1)
    }
    updateAxis(t, n, r) {
        const { drag: s } = this.getProps();
        if (!r || !$s(t, s, this.currentDirection))
            return;
        const i = this.getAxisMotionValue(t);
        let o = this.originPoint[t] + r[t];
        this.constraints && this.constraints[t] && (o = Jw(o, this.constraints[t], this.elastic[t])),
            i.set(o)
    }
    resolveConstraints() {
        var t;
        const { dragConstraints: n, dragElastic: r } = this.getProps()
            , s = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout
            , i = this.constraints;
        n && Rn(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && s ? this.constraints = e2(s.layoutBox, n) : this.constraints = !1,
            this.elastic = s2(r),
            i !== this.constraints && s && this.constraints && !this.hasMutatedConstraints && Oe(o => {
                this.constraints !== !1 && this.getAxisMotionValue(o) && (this.constraints[o] = r2(s.layoutBox[o], this.constraints[o]))
            }
            )
    }
    resolveRefConstraints() {
        const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
        if (!t || !Rn(t))
            return !1;
        const r = t.current
            , { projection: s } = this.visualElement;
        if (!s || !s.layout)
            return !1;
        const i = l2(r, s.root, this.visualElement.getTransformPagePoint());
        let o = t2(s.layout.layoutBox, i);
        if (n) {
            const l = n(i2(o));
            this.hasMutatedConstraints = !!l,
                l && (o = i0(l))
        }
        return o
    }
    startAnimation(t) {
        const { drag: n, dragMomentum: r, dragElastic: s, dragTransition: i, dragSnapToOrigin: o, onDragTransitionEnd: l } = this.getProps()
            , u = this.constraints || {}
            , c = Oe(d => {
                if (!$s(d, n, this.currentDirection))
                    return;
                let f = u && u[d] || {};
                o && (f = {
                    min: 0,
                    max: 0
                });
                const h = s ? 200 : 1e6
                    , y = s ? 40 : 1e7
                    , v = {
                        type: "inertia",
                        velocity: r ? t[d] : 0,
                        bounceStiffness: h,
                        bounceDamping: y,
                        timeConstant: 750,
                        restDelta: 1,
                        restSpeed: 10,
                        ...i,
                        ...f
                    };
                return this.startAxisValueAnimation(d, v)
            }
            );
        return Promise.all(c).then(l)
    }
    startAxisValueAnimation(t, n) {
        const r = this.getAxisMotionValue(t);
        return cl(this.visualElement, t),
            r.start(Ru(t, r, 0, n, this.visualElement, !1))
    }
    stopAnimation() {
        Oe(t => this.getAxisMotionValue(t).stop())
    }
    pauseAnimation() {
        Oe(t => {
            var n;
            return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.pause()
        }
        )
    }
    getAnimationState(t) {
        var n;
        return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.state
    }
    getAxisMotionValue(t) {
        const n = `_drag${t.toUpperCase()}`
            , r = this.visualElement.getProps()
            , s = r[n];
        return s || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    }
    snapToCursor(t) {
        Oe(n => {
            const { drag: r } = this.getProps();
            if (!$s(n, r, this.currentDirection))
                return;
            const { projection: s } = this.visualElement
                , i = this.getAxisMotionValue(n);
            if (s && s.layout) {
                const { min: o, max: l } = s.layout.layoutBox[n];
                i.set(t[n] - K(o, l, .5))
            }
        }
        )
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const { drag: t, dragConstraints: n } = this.getProps()
            , { projection: r } = this.visualElement;
        if (!Rn(n) || !r || !this.constraints)
            return;
        this.stopAnimation();
        const s = {
            x: 0,
            y: 0
        };
        Oe(o => {
            const l = this.getAxisMotionValue(o);
            if (l && this.constraints !== !1) {
                const u = l.get();
                s[o] = n2({
                    min: u,
                    max: u
                }, this.constraints[o])
            }
        }
        );
        const { transformTemplate: i } = this.visualElement.getProps();
        this.visualElement.current.style.transform = i ? i({}, "") : "none",
            r.root && r.root.updateScroll(),
            r.updateLayout(),
            this.resolveConstraints(),
            Oe(o => {
                if (!$s(o, t, null))
                    return;
                const l = this.getAxisMotionValue(o)
                    , { min: u, max: c } = this.constraints[o];
                l.set(K(u, c, s[o]))
            }
            )
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        u2.set(this.visualElement, this);
        const t = this.visualElement.current
            , n = Dr(t, "pointerdown", u => {
                const { drag: c, dragListener: d = !0 } = this.getProps();
                c && d && this.start(u)
            }
            )
            , r = () => {
                const { dragConstraints: u } = this.getProps();
                Rn(u) && u.current && (this.constraints = this.resolveRefConstraints())
            }
            , { projection: s } = this.visualElement
            , i = s.addEventListener("measure", r);
        s && !s.layout && (s.root && s.root.updateScroll(),
            s.updateLayout()),
            $.read(r);
        const o = ss(window, "resize", () => this.scalePositionWithinConstraints())
            , l = s.addEventListener("didUpdate", ({ delta: u, hasLayoutChanged: c }) => {
                this.isDragging && c && (Oe(d => {
                    const f = this.getAxisMotionValue(d);
                    f && (this.originPoint[d] += u[d].translate,
                        f.set(f.get() + u[d].translate))
                }
                ),
                    this.visualElement.render())
            }
            );
        return () => {
            o(),
                n(),
                i(),
                l && l()
        }
    }
    getProps() {
        const t = this.visualElement.getProps()
            , { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: s = !1, dragConstraints: i = !1, dragElastic: o = fl, dragMomentum: l = !0 } = t;
        return {
            ...t,
            drag: n,
            dragDirectionLock: r,
            dragPropagation: s,
            dragConstraints: i,
            dragElastic: o,
            dragMomentum: l
        }
    }
}
function $s(e, t, n) {
    return (t === !0 || t === e) && (n === null || n === e)
}
function d2(e, t = 10) {
    let n = null;
    return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"),
        n
}
class f2 extends Wt {
    constructor(t) {
        super(t),
            this.removeGroupControls = De,
            this.removeListeners = De,
            this.controls = new c2(t)
    }
    mount() {
        const { dragControls: t } = this.node.getProps();
        t && (this.removeGroupControls = t.subscribe(this.controls)),
            this.removeListeners = this.controls.addListeners() || De
    }
    unmount() {
        this.removeGroupControls(),
            this.removeListeners()
    }
}
const rf = e => (t, n) => {
    e && $.postRender(() => e(t, n))
}
    ;
class h2 extends Wt {
    constructor() {
        super(...arguments),
            this.removePointerDownListener = De
    }
    onPointerDown(t) {
        this.session = new t0(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: u0(this.node)
        })
    }
    createPanHandlers() {
        const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: s } = this.node.getProps();
        return {
            onSessionStart: rf(t),
            onStart: rf(n),
            onMove: r,
            onEnd: (i, o) => {
                delete this.session,
                    s && $.postRender(() => s(i, o))
            }
        }
    }
    mount() {
        this.removePointerDownListener = Dr(this.node.current, "pointerdown", t => this.onPointerDown(t))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(),
            this.session && this.session.end()
    }
}
const uo = x.createContext(null);
function p2() {
    const e = x.useContext(uo);
    if (e === null)
        return [!0, null];
    const { isPresent: t, onExitComplete: n, register: r } = e
        , s = x.useId();
    x.useEffect(() => r(s), []);
    const i = x.useCallback(() => n && n(s), [s, n]);
    return !t && n ? [!1, i] : [!0]
}
const Fu = x.createContext({})
    , c0 = x.createContext({})
    , ii = {
        hasAnimatedSinceResize: !0,
        hasEverUpdated: !1
    };
function sf(e, t) {
    return t.max === t.min ? 0 : e / (t.max - t.min) * 100
}
const pr = {
    correct: (e, t) => {
        if (!t.target)
            return e;
        if (typeof e == "string")
            if (D.test(e))
                e = parseFloat(e);
            else
                return e;
        const n = sf(e, t.target.x)
            , r = sf(e, t.target.y);
        return `${n}% ${r}%`
    }
}
    , m2 = {
        correct: (e, { treeScale: t, projectionDelta: n }) => {
            const r = e
                , s = Bt.parse(e);
            if (s.length > 5)
                return r;
            const i = Bt.createTransformer(e)
                , o = typeof s[0] != "number" ? 1 : 0
                , l = n.x.scale * t.x
                , u = n.y.scale * t.y;
            s[0 + o] /= l,
                s[1 + o] /= u;
            const c = K(l, u, .5);
            return typeof s[2 + o] == "number" && (s[2 + o] /= c),
                typeof s[3 + o] == "number" && (s[3 + o] /= c),
                i(s)
        }
    }
    , Oi = {};
function g2(e) {
    Object.assign(Oi, e)
}
const { schedule: zu, cancel: nk } = dm(queueMicrotask, !1);
class y2 extends x.Component {
    componentDidMount() {
        const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: s } = this.props
            , { projection: i } = t;
        g2(v2),
            i && (n.group && n.group.add(i),
                r && r.register && s && r.register(i),
                i.root.didUpdate(),
                i.addEventListener("animationComplete", () => {
                    this.safeToRemove()
                }
                ),
                i.setOptions({
                    ...i.options,
                    onExitComplete: () => this.safeToRemove()
                })),
            ii.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(t) {
        const { layoutDependency: n, visualElement: r, drag: s, isPresent: i } = this.props
            , o = r.projection;
        return o && (o.isPresent = i,
            s || t.layoutDependency !== n || n === void 0 ? o.willUpdate() : this.safeToRemove(),
            t.isPresent !== i && (i ? o.promote() : o.relegate() || $.postRender(() => {
                const l = o.getStack();
                (!l || !l.members.length) && this.safeToRemove()
            }
            ))),
            null
    }
    componentDidUpdate() {
        const { projection: t } = this.props.visualElement;
        t && (t.root.didUpdate(),
            zu.postRender(() => {
                !t.currentAnimation && t.isLead() && this.safeToRemove()
            }
            ))
    }
    componentWillUnmount() {
        const { visualElement: t, layoutGroup: n, switchLayoutGroup: r } = this.props
            , { projection: s } = t;
        s && (s.scheduleCheckAfterUnmount(),
            n && n.group && n.group.remove(s),
            r && r.deregister && r.deregister(s))
    }
    safeToRemove() {
        const { safeToRemove: t } = this.props;
        t && t()
    }
    render() {
        return null
    }
}
function d0(e) {
    const [t, n] = p2()
        , r = x.useContext(Fu);
    return a.jsx(y2, {
        ...e,
        layoutGroup: r,
        switchLayoutGroup: x.useContext(c0),
        isPresent: t,
        safeToRemove: n
    })
}
const v2 = {
    borderRadius: {
        ...pr,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: pr,
    borderTopRightRadius: pr,
    borderBottomLeftRadius: pr,
    borderBottomRightRadius: pr,
    boxShadow: m2
}
    , f0 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
    , x2 = f0.length
    , of = e => typeof e == "string" ? parseFloat(e) : e
    , af = e => typeof e == "number" || D.test(e);
function w2(e, t, n, r, s, i) {
    s ? (e.opacity = K(0, n.opacity !== void 0 ? n.opacity : 1, S2(r)),
        e.opacityExit = K(t.opacity !== void 0 ? t.opacity : 1, 0, j2(r))) : i && (e.opacity = K(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
    for (let o = 0; o < x2; o++) {
        const l = `border${f0[o]}Radius`;
        let u = lf(t, l)
            , c = lf(n, l);
        if (u === void 0 && c === void 0)
            continue;
        u || (u = 0),
            c || (c = 0),
            u === 0 || c === 0 || af(u) === af(c) ? (e[l] = Math.max(K(of(u), of(c), r), 0),
                (st.test(c) || st.test(u)) && (e[l] += "%")) : e[l] = c
    }
    (t.rotate || n.rotate) && (e.rotate = K(t.rotate || 0, n.rotate || 0, r))
}
function lf(e, t) {
    return e[t] !== void 0 ? e[t] : e.borderRadius
}
const S2 = h0(0, .5, vm)
    , j2 = h0(.5, .95, De);
function h0(e, t, n) {
    return r => r < e ? 0 : r > t ? 1 : n(qn(e, t, r))
}
function uf(e, t) {
    e.min = t.min,
        e.max = t.max
}
function _e(e, t) {
    uf(e.x, t.x),
        uf(e.y, t.y)
}
function cf(e, t) {
    e.translate = t.translate,
        e.scale = t.scale,
        e.originPoint = t.originPoint,
        e.origin = t.origin
}
function df(e, t, n, r, s) {
    return e -= t,
        e = _i(e, 1 / n, r),
        s !== void 0 && (e = _i(e, 1 / s, r)),
        e
}
function k2(e, t = 0, n = 1, r = .5, s, i = e, o = e) {
    if (st.test(t) && (t = parseFloat(t),
        t = K(o.min, o.max, t / 100) - o.min),
        typeof t != "number")
        return;
    let l = K(i.min, i.max, r);
    e === i && (l -= t),
        e.min = df(e.min, t, n, l, s),
        e.max = df(e.max, t, n, l, s)
}
function ff(e, t, [n, r, s], i, o) {
    k2(e, t[n], t[r], t[s], t.scale, i, o)
}
const C2 = ["x", "scaleX", "originX"]
    , N2 = ["y", "scaleY", "originY"];
function hf(e, t, n, r) {
    ff(e.x, t, C2, n ? n.x : void 0, r ? r.x : void 0),
        ff(e.y, t, N2, n ? n.y : void 0, r ? r.y : void 0)
}
function pf(e) {
    return e.translate === 0 && e.scale === 1
}
function p0(e) {
    return pf(e.x) && pf(e.y)
}
function mf(e, t) {
    return e.min === t.min && e.max === t.max
}
function T2(e, t) {
    return mf(e.x, t.x) && mf(e.y, t.y)
}
function gf(e, t) {
    return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max)
}
function m0(e, t) {
    return gf(e.x, t.x) && gf(e.y, t.y)
}
function yf(e) {
    return Le(e.x) / Le(e.y)
}
function vf(e, t) {
    return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint
}
class E2 {
    constructor() {
        this.members = []
    }
    add(t) {
        Lu(this.members, t),
            t.scheduleRender()
    }
    remove(t) {
        if (Vu(this.members, t),
            t === this.prevLead && (this.prevLead = void 0),
            t === this.lead) {
            const n = this.members[this.members.length - 1];
            n && this.promote(n)
        }
    }
    relegate(t) {
        const n = this.members.findIndex(s => t === s);
        if (n === 0)
            return !1;
        let r;
        for (let s = n; s >= 0; s--) {
            const i = this.members[s];
            if (i.isPresent !== !1) {
                r = i;
                break
            }
        }
        return r ? (this.promote(r),
            !0) : !1
    }
    promote(t, n) {
        const r = this.lead;
        if (t !== r && (this.prevLead = r,
            this.lead = t,
            t.show(),
            r)) {
            r.instance && r.scheduleRender(),
                t.scheduleRender(),
                t.resumeFrom = r,
                n && (t.resumeFrom.preserveOpacity = !0),
                r.snapshot && (t.snapshot = r.snapshot,
                    t.snapshot.latestValues = r.animationValues || r.latestValues),
                t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            const { crossfade: s } = t.options;
            s === !1 && r.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(t => {
            const { options: n, resumingFrom: r } = t;
            n.onExitComplete && n.onExitComplete(),
                r && r.options.onExitComplete && r.options.onExitComplete()
        }
        )
    }
    scheduleRender() {
        this.members.forEach(t => {
            t.instance && t.scheduleRender(!1)
        }
        )
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}
function P2(e, t, n) {
    let r = "";
    const s = e.x.translate / t.x
        , i = e.y.translate / t.y
        , o = (n == null ? void 0 : n.z) || 0;
    if ((s || i || o) && (r = `translate3d(${s}px, ${i}px, ${o}px) `),
        (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
        n) {
        const { transformPerspective: c, rotate: d, rotateX: f, rotateY: h, skewX: y, skewY: v } = n;
        c && (r = `perspective(${c}px) ${r}`),
            d && (r += `rotate(${d}deg) `),
            f && (r += `rotateX(${f}deg) `),
            h && (r += `rotateY(${h}deg) `),
            y && (r += `skewX(${y}deg) `),
            v && (r += `skewY(${v}deg) `)
    }
    const l = e.x.scale * t.x
        , u = e.y.scale * t.y;
    return (l !== 1 || u !== 1) && (r += `scale(${l}, ${u})`),
        r || "none"
}
const A2 = (e, t) => e.depth - t.depth;
class b2 {
    constructor() {
        this.children = [],
            this.isDirty = !1
    }
    add(t) {
        Lu(this.children, t),
            this.isDirty = !0
    }
    remove(t) {
        Vu(this.children, t),
            this.isDirty = !0
    }
    forEach(t) {
        this.isDirty && this.children.sort(A2),
            this.isDirty = !1,
            this.children.forEach(t)
    }
}
function oi(e) {
    const t = ve(e) ? e.get() : e;
    return pw(t) ? t.toValue() : t
}
function M2(e, t) {
    const n = it.now()
        , r = ({ timestamp: s }) => {
            const i = s - n;
            i >= t && (zt(r),
                e(i - t))
        }
        ;
    return $.read(r, !0),
        () => zt(r)
}
function D2(e) {
    return e instanceof SVGElement && e.tagName !== "svg"
}
function R2(e, t, n) {
    const r = ve(e) ? e : rs(e);
    return r.start(Ru("", r, t, n)),
        r.animation
}
const Jt = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0
}
    , Sr = typeof window < "u" && window.MotionDebug !== void 0
    , Jo = ["", "X", "Y", "Z"]
    , L2 = {
        visibility: "hidden"
    }
    , xf = 1e3;
let V2 = 0;
function ea(e, t, n, r) {
    const { latestValues: s } = t;
    s[e] && (n[e] = s[e],
        t.setStaticValue(e, 0),
        r && (r[e] = 0))
}
function g0(e) {
    if (e.hasCheckedOptimisedAppear = !0,
        e.root === e)
        return;
    const { visualElement: t } = e.options;
    if (!t)
        return;
    const n = Ym(t);
    if (window.MotionHasOptimisedAnimation(n, "transform")) {
        const { layout: s, layoutId: i } = e.options;
        window.MotionCancelOptimisedAnimation(n, "transform", $, !(s || i))
    }
    const { parent: r } = e;
    r && !r.hasCheckedOptimisedAppear && g0(r)
}
function y0({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: s }) {
    return class {
        constructor(o = {}, l = t == null ? void 0 : t()) {
            this.id = V2++,
                this.animationId = 0,
                this.children = new Set,
                this.options = {},
                this.isTreeAnimating = !1,
                this.isAnimationBlocked = !1,
                this.isLayoutDirty = !1,
                this.isProjectionDirty = !1,
                this.isSharedProjectionDirty = !1,
                this.isTransformDirty = !1,
                this.updateManuallyBlocked = !1,
                this.updateBlockedByResize = !1,
                this.isUpdating = !1,
                this.isSVG = !1,
                this.needsReset = !1,
                this.shouldResetTransform = !1,
                this.hasCheckedOptimisedAppear = !1,
                this.treeScale = {
                    x: 1,
                    y: 1
                },
                this.eventHandlers = new Map,
                this.hasTreeAnimated = !1,
                this.updateScheduled = !1,
                this.scheduleUpdate = () => this.update(),
                this.projectionUpdateScheduled = !1,
                this.checkUpdateFailed = () => {
                    this.isUpdating && (this.isUpdating = !1,
                        this.clearAllSnapshots())
                }
                ,
                this.updateProjection = () => {
                    this.projectionUpdateScheduled = !1,
                        Sr && (Jt.totalNodes = Jt.resolvedTargetDeltas = Jt.recalculatedProjection = 0),
                        this.nodes.forEach(O2),
                        this.nodes.forEach($2),
                        this.nodes.forEach(H2),
                        this.nodes.forEach(F2),
                        Sr && window.MotionDebug.record(Jt)
                }
                ,
                this.resolvedRelativeTargetAt = 0,
                this.hasProjected = !1,
                this.isVisible = !0,
                this.animationProgress = 0,
                this.sharedNodes = new Map,
                this.latestValues = o,
                this.root = l ? l.root || l : this,
                this.path = l ? [...l.path, l] : [],
                this.parent = l,
                this.depth = l ? l.depth + 1 : 0;
            for (let u = 0; u < this.path.length; u++)
                this.path[u].shouldResetTransform = !0;
            this.root === this && (this.nodes = new b2)
        }
        addEventListener(o, l) {
            return this.eventHandlers.has(o) || this.eventHandlers.set(o, new Iu),
                this.eventHandlers.get(o).add(l)
        }
        notifyListeners(o, ...l) {
            const u = this.eventHandlers.get(o);
            u && u.notify(...l)
        }
        hasListeners(o) {
            return this.eventHandlers.has(o)
        }
        mount(o, l = this.root.hasTreeAnimated) {
            if (this.instance)
                return;
            this.isSVG = D2(o),
                this.instance = o;
            const { layoutId: u, layout: c, visualElement: d } = this.options;
            if (d && !d.current && d.mount(o),
                this.root.nodes.add(this),
                this.parent && this.parent.children.add(this),
                l && (c || u) && (this.isLayoutDirty = !0),
                e) {
                let f;
                const h = () => this.root.updateBlockedByResize = !1;
                e(o, () => {
                    this.root.updateBlockedByResize = !0,
                        f && f(),
                        f = M2(h, 250),
                        ii.hasAnimatedSinceResize && (ii.hasAnimatedSinceResize = !1,
                            this.nodes.forEach(Sf))
                }
                )
            }
            u && this.root.registerSharedNode(u, this),
                this.options.animate !== !1 && d && (u || c) && this.addEventListener("didUpdate", ({ delta: f, hasLayoutChanged: h, hasRelativeTargetChanged: y, layout: v }) => {
                    if (this.isTreeAnimationBlocked()) {
                        this.target = void 0,
                            this.relativeTarget = void 0;
                        return
                    }
                    const w = this.options.transition || d.getDefaultTransition() || Y2
                        , { onLayoutAnimationStart: j, onLayoutAnimationComplete: m } = d.getProps()
                        , p = !this.targetLayout || !m0(this.targetLayout, v) || y
                        , g = !h && y;
                    if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || g || h && (p || !this.currentAnimation)) {
                        this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                            this.resumingFrom.resumingFrom = void 0),
                            this.setAnimationOrigin(f, g);
                        const S = {
                            ...xu(w, "layout"),
                            onPlay: j,
                            onComplete: m
                        };
                        (d.shouldReduceMotion || this.options.layoutRoot) && (S.delay = 0,
                            S.type = !1),
                            this.startAnimation(S)
                    } else
                        h || Sf(this),
                            this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                    this.targetLayout = v
                }
                )
        }
        unmount() {
            this.options.layoutId && this.willUpdate(),
                this.root.nodes.remove(this);
            const o = this.getStack();
            o && o.remove(this),
                this.parent && this.parent.children.delete(this),
                this.instance = void 0,
                zt(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0,
                this.nodes && this.nodes.forEach(W2),
                this.animationId++)
        }
        getTransformTemplate() {
            const { visualElement: o } = this.options;
            return o && o.getProps().transformTemplate
        }
        willUpdate(o = !0) {
            if (this.root.hasTreeAnimated = !0,
                this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && g0(this),
                !this.root.isUpdating && this.root.startUpdate(),
                this.isLayoutDirty)
                return;
            this.isLayoutDirty = !0;
            for (let d = 0; d < this.path.length; d++) {
                const f = this.path[d];
                f.shouldResetTransform = !0,
                    f.updateScroll("snapshot"),
                    f.options.layoutRoot && f.willUpdate(!1)
            }
            const { layoutId: l, layout: u } = this.options;
            if (l === void 0 && !u)
                return;
            const c = this.getTransformTemplate();
            this.prevTransformTemplateValue = c ? c(this.latestValues, "") : void 0,
                this.updateSnapshot(),
                o && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1,
                this.isUpdateBlocked()) {
                this.unblockUpdate(),
                    this.clearAllSnapshots(),
                    this.nodes.forEach(wf);
                return
            }
            this.isUpdating || this.nodes.forEach(B2),
                this.isUpdating = !1,
                this.nodes.forEach(U2),
                this.nodes.forEach(I2),
                this.nodes.forEach(_2),
                this.clearAllSnapshots();
            const l = it.now();
            de.delta = yt(0, 1e3 / 60, l - de.timestamp),
                de.timestamp = l,
                de.isProcessing = !0,
                Ho.update.process(de),
                Ho.preRender.process(de),
                Ho.render.process(de),
                de.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0,
                zu.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(z2),
                this.sharedNodes.forEach(K2)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
                $.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            $.postRender(() => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }
            )
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure())
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(),
                !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let u = 0; u < this.path.length; u++)
                    this.path[u].updateScroll();
            const o = this.layout;
            this.layout = this.measure(!1),
                this.layoutCorrected = Z(),
                this.isLayoutDirty = !1,
                this.projectionDelta = void 0,
                this.notifyListeners("measure", this.layout.layoutBox);
            const { visualElement: l } = this.options;
            l && l.notify("LayoutMeasure", this.layout.layoutBox, o ? o.layoutBox : void 0)
        }
        updateScroll(o = "measure") {
            let l = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === o && (l = !1),
                l) {
                const u = r(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: o,
                    isRoot: u,
                    offset: n(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : u
                }
            }
        }
        resetTransform() {
            if (!s)
                return;
            const o = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout
                , l = this.projectionDelta && !p0(this.projectionDelta)
                , u = this.getTransformTemplate()
                , c = u ? u(this.latestValues, "") : void 0
                , d = c !== this.prevTransformTemplateValue;
            o && (l || Zt(this.latestValues) || d) && (s(this.instance, c),
                this.shouldResetTransform = !1,
                this.scheduleRender())
        }
        measure(o = !0) {
            const l = this.measurePageBox();
            let u = this.removeElementScroll(l);
            return o && (u = this.removeTransform(u)),
                Q2(u),
            {
                animationId: this.root.animationId,
                measuredBox: l,
                layoutBox: u,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            var o;
            const { visualElement: l } = this.options;
            if (!l)
                return Z();
            const u = l.measureViewportBox();
            if (!(((o = this.scroll) === null || o === void 0 ? void 0 : o.wasRoot) || this.path.some(q2))) {
                const { scroll: d } = this.root;
                d && (Vn(u.x, d.offset.x),
                    Vn(u.y, d.offset.y))
            }
            return u
        }
        removeElementScroll(o) {
            var l;
            const u = Z();
            if (_e(u, o),
                !((l = this.scroll) === null || l === void 0) && l.wasRoot)
                return u;
            for (let c = 0; c < this.path.length; c++) {
                const d = this.path[c]
                    , { scroll: f, options: h } = d;
                d !== this.root && f && h.layoutScroll && (f.wasRoot && _e(u, o),
                    Vn(u.x, f.offset.x),
                    Vn(u.y, f.offset.y))
            }
            return u
        }
        applyTransform(o, l = !1) {
            const u = Z();
            _e(u, o);
            for (let c = 0; c < this.path.length; c++) {
                const d = this.path[c];
                !l && d.options.layoutScroll && d.scroll && d !== d.root && In(u, {
                    x: -d.scroll.offset.x,
                    y: -d.scroll.offset.y
                }),
                    Zt(d.latestValues) && In(u, d.latestValues)
            }
            return Zt(this.latestValues) && In(u, this.latestValues),
                u
        }
        removeTransform(o) {
            const l = Z();
            _e(l, o);
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u];
                if (!c.instance || !Zt(c.latestValues))
                    continue;
                hl(c.latestValues) && c.updateSnapshot();
                const d = Z()
                    , f = c.measurePageBox();
                _e(d, f),
                    hf(l, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, d)
            }
            return Zt(this.latestValues) && hf(l, this.latestValues),
                l
        }
        setTargetDelta(o) {
            this.targetDelta = o,
                this.root.scheduleUpdateProjection(),
                this.isProjectionDirty = !0
        }
        setOptions(o) {
            this.options = {
                ...this.options,
                ...o,
                crossfade: o.crossfade !== void 0 ? o.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0,
                this.layout = void 0,
                this.snapshot = void 0,
                this.prevTransformTemplateValue = void 0,
                this.targetDelta = void 0,
                this.target = void 0,
                this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== de.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(o = !1) {
            var l;
            const u = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = u.isProjectionDirty),
                this.isTransformDirty || (this.isTransformDirty = u.isTransformDirty),
                this.isSharedProjectionDirty || (this.isSharedProjectionDirty = u.isSharedProjectionDirty);
            const c = !!this.resumingFrom || this !== u;
            if (!(o || c && this.isSharedProjectionDirty || this.isProjectionDirty || !((l = this.parent) === null || l === void 0) && l.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
                return;
            const { layout: f, layoutId: h } = this.options;
            if (!(!this.layout || !(f || h))) {
                if (this.resolvedRelativeTargetAt = de.timestamp,
                    !this.targetDelta && !this.relativeTarget) {
                    const y = this.getClosestProjectingParent();
                    y && y.layout && this.animationProgress !== 1 ? (this.relativeParent = y,
                        this.forceRelativeParentToResolveTarget(),
                        this.relativeTarget = Z(),
                        this.relativeTargetOrigin = Z(),
                        Lr(this.relativeTargetOrigin, this.layout.layoutBox, y.layout.layoutBox),
                        _e(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta)) {
                    if (this.target || (this.target = Z(),
                        this.targetWithTransforms = Z()),
                        this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
                            Zw(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : _e(this.target, this.layout.layoutBox),
                                a0(this.target, this.targetDelta)) : _e(this.target, this.layout.layoutBox),
                        this.attemptToResolveRelativeTarget) {
                        this.attemptToResolveRelativeTarget = !1;
                        const y = this.getClosestProjectingParent();
                        y && !!y.resumingFrom == !!this.resumingFrom && !y.options.layoutScroll && y.target && this.animationProgress !== 1 ? (this.relativeParent = y,
                            this.forceRelativeParentToResolveTarget(),
                            this.relativeTarget = Z(),
                            this.relativeTargetOrigin = Z(),
                            Lr(this.relativeTargetOrigin, this.target, y.target),
                            _e(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    Sr && Jt.resolvedTargetDeltas++
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || hl(this.parent.latestValues) || o0(this.parent.latestValues)))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var o;
            const l = this.getLead()
                , u = !!this.resumingFrom || this !== l;
            let c = !0;
            if ((this.isProjectionDirty || !((o = this.parent) === null || o === void 0) && o.isProjectionDirty) && (c = !1),
                u && (this.isSharedProjectionDirty || this.isTransformDirty) && (c = !1),
                this.resolvedRelativeTargetAt === de.timestamp && (c = !1),
                c)
                return;
            const { layout: d, layoutId: f } = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
                this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
                !this.layout || !(d || f))
                return;
            _e(this.layoutCorrected, this.layout.layoutBox);
            const h = this.treeScale.x
                , y = this.treeScale.y;
            a2(this.layoutCorrected, this.treeScale, this.path, u),
                l.layout && !l.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (l.target = l.layout.layoutBox,
                    l.targetWithTransforms = Z());
            const { target: v } = l;
            if (!v) {
                this.prevProjectionDelta && (this.createProjectionDeltas(),
                    this.scheduleRender());
                return
            }
            !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (cf(this.prevProjectionDelta.x, this.projectionDelta.x),
                cf(this.prevProjectionDelta.y, this.projectionDelta.y)),
                Rr(this.projectionDelta, this.layoutCorrected, v, this.latestValues),
                (this.treeScale.x !== h || this.treeScale.y !== y || !vf(this.projectionDelta.x, this.prevProjectionDelta.x) || !vf(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0,
                    this.scheduleRender(),
                    this.notifyListeners("projectionUpdate", v)),
                Sr && Jt.recalculatedProjection++
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(o = !0) {
            var l;
            if ((l = this.options.visualElement) === null || l === void 0 || l.scheduleRender(),
                o) {
                const u = this.getStack();
                u && u.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = Ln(),
                this.projectionDelta = Ln(),
                this.projectionDeltaWithTransform = Ln()
        }
        setAnimationOrigin(o, l = !1) {
            const u = this.snapshot
                , c = u ? u.latestValues : {}
                , d = {
                    ...this.latestValues
                }
                , f = Ln();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
                this.attemptToResolveRelativeTarget = !l;
            const h = Z()
                , y = u ? u.source : void 0
                , v = this.layout ? this.layout.source : void 0
                , w = y !== v
                , j = this.getStack()
                , m = !j || j.members.length <= 1
                , p = !!(w && !m && this.options.crossfade === !0 && !this.path.some(X2));
            this.animationProgress = 0;
            let g;
            this.mixTargetDelta = S => {
                const k = S / 1e3;
                jf(f.x, o.x, k),
                    jf(f.y, o.y, k),
                    this.setTargetDelta(f),
                    this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Lr(h, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                        G2(this.relativeTarget, this.relativeTargetOrigin, h, k),
                        g && T2(this.relativeTarget, g) && (this.isProjectionDirty = !1),
                        g || (g = Z()),
                        _e(g, this.relativeTarget)),
                    w && (this.animationValues = d,
                        w2(d, c, this.latestValues, k, p, m)),
                    this.root.scheduleUpdateProjection(),
                    this.scheduleRender(),
                    this.animationProgress = k
            }
                ,
                this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(o) {
            this.notifyListeners("animationStart"),
                this.currentAnimation && this.currentAnimation.stop(),
                this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
                this.pendingAnimation && (zt(this.pendingAnimation),
                    this.pendingAnimation = void 0),
                this.pendingAnimation = $.update(() => {
                    ii.hasAnimatedSinceResize = !0,
                        this.currentAnimation = R2(0, xf, {
                            ...o,
                            onUpdate: l => {
                                this.mixTargetDelta(l),
                                    o.onUpdate && o.onUpdate(l)
                            }
                            ,
                            onComplete: () => {
                                o.onComplete && o.onComplete(),
                                    this.completeAnimation()
                            }
                        }),
                        this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                        this.pendingAnimation = void 0
                }
                )
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
                this.resumingFrom.preserveOpacity = void 0);
            const o = this.getStack();
            o && o.exitAnimationComplete(),
                this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
                this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(xf),
                this.currentAnimation.stop()),
                this.completeAnimation()
        }
        applyTransformsToTarget() {
            const o = this.getLead();
            let { targetWithTransforms: l, target: u, layout: c, latestValues: d } = o;
            if (!(!l || !u || !c)) {
                if (this !== o && this.layout && c && v0(this.options.animationType, this.layout.layoutBox, c.layoutBox)) {
                    u = this.target || Z();
                    const f = Le(this.layout.layoutBox.x);
                    u.x.min = o.target.x.min,
                        u.x.max = u.x.min + f;
                    const h = Le(this.layout.layoutBox.y);
                    u.y.min = o.target.y.min,
                        u.y.max = u.y.min + h
                }
                _e(l, u),
                    In(l, d),
                    Rr(this.projectionDeltaWithTransform, this.layoutCorrected, l, d)
            }
        }
        registerSharedNode(o, l) {
            this.sharedNodes.has(o) || this.sharedNodes.set(o, new E2),
                this.sharedNodes.get(o).add(l);
            const c = l.options.initialPromotionConfig;
            l.promote({
                transition: c ? c.transition : void 0,
                preserveFollowOpacity: c && c.shouldPreserveFollowOpacity ? c.shouldPreserveFollowOpacity(l) : void 0
            })
        }
        isLead() {
            const o = this.getStack();
            return o ? o.lead === this : !0
        }
        getLead() {
            var o;
            const { layoutId: l } = this.options;
            return l ? ((o = this.getStack()) === null || o === void 0 ? void 0 : o.lead) || this : this
        }
        getPrevLead() {
            var o;
            const { layoutId: l } = this.options;
            return l ? (o = this.getStack()) === null || o === void 0 ? void 0 : o.prevLead : void 0
        }
        getStack() {
            const { layoutId: o } = this.options;
            if (o)
                return this.root.sharedNodes.get(o)
        }
        promote({ needsReset: o, transition: l, preserveFollowOpacity: u } = {}) {
            const c = this.getStack();
            c && c.promote(this, u),
                o && (this.projectionDelta = void 0,
                    this.needsReset = !0),
                l && this.setOptions({
                    transition: l
                })
        }
        relegate() {
            const o = this.getStack();
            return o ? o.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const { visualElement: o } = this.options;
            if (!o)
                return;
            let l = !1;
            const { latestValues: u } = o;
            if ((u.z || u.rotate || u.rotateX || u.rotateY || u.rotateZ || u.skewX || u.skewY) && (l = !0),
                !l)
                return;
            const c = {};
            u.z && ea("z", o, c, this.animationValues);
            for (let d = 0; d < Jo.length; d++)
                ea(`rotate${Jo[d]}`, o, c, this.animationValues),
                    ea(`skew${Jo[d]}`, o, c, this.animationValues);
            o.render();
            for (const d in c)
                o.setStaticValue(d, c[d]),
                    this.animationValues && (this.animationValues[d] = c[d]);
            o.scheduleRender()
        }
        getProjectionStyles(o) {
            var l, u;
            if (!this.instance || this.isSVG)
                return;
            if (!this.isVisible)
                return L2;
            const c = {
                visibility: ""
            }
                , d = this.getTransformTemplate();
            if (this.needsReset)
                return this.needsReset = !1,
                    c.opacity = "",
                    c.pointerEvents = oi(o == null ? void 0 : o.pointerEvents) || "",
                    c.transform = d ? d(this.latestValues, "") : "none",
                    c;
            const f = this.getLead();
            if (!this.projectionDelta || !this.layout || !f.target) {
                const w = {};
                return this.options.layoutId && (w.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
                    w.pointerEvents = oi(o == null ? void 0 : o.pointerEvents) || ""),
                    this.hasProjected && !Zt(this.latestValues) && (w.transform = d ? d({}, "") : "none",
                        this.hasProjected = !1),
                    w
            }
            const h = f.animationValues || f.latestValues;
            this.applyTransformsToTarget(),
                c.transform = P2(this.projectionDeltaWithTransform, this.treeScale, h),
                d && (c.transform = d(h, c.transform));
            const { x: y, y: v } = this.projectionDelta;
            c.transformOrigin = `${y.origin * 100}% ${v.origin * 100}% 0`,
                f.animationValues ? c.opacity = f === this ? (u = (l = h.opacity) !== null && l !== void 0 ? l : this.latestValues.opacity) !== null && u !== void 0 ? u : 1 : this.preserveOpacity ? this.latestValues.opacity : h.opacityExit : c.opacity = f === this ? h.opacity !== void 0 ? h.opacity : "" : h.opacityExit !== void 0 ? h.opacityExit : 0;
            for (const w in Oi) {
                if (h[w] === void 0)
                    continue;
                const { correct: j, applyTo: m } = Oi[w]
                    , p = c.transform === "none" ? h[w] : j(h[w], f);
                if (m) {
                    const g = m.length;
                    for (let S = 0; S < g; S++)
                        c[m[S]] = p
                } else
                    c[w] = p
            }
            return this.options.layoutId && (c.pointerEvents = f === this ? oi(o == null ? void 0 : o.pointerEvents) || "" : "none"),
                c
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(o => {
                var l;
                return (l = o.currentAnimation) === null || l === void 0 ? void 0 : l.stop()
            }
            ),
                this.root.nodes.forEach(wf),
                this.root.sharedNodes.clear()
        }
    }
}
function I2(e) {
    e.updateLayout()
}
function _2(e) {
    var t;
    const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
    if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
        const { layoutBox: r, measuredBox: s } = e.layout
            , { animationType: i } = e.options
            , o = n.source !== e.layout.source;
        i === "size" ? Oe(f => {
            const h = o ? n.measuredBox[f] : n.layoutBox[f]
                , y = Le(h);
            h.min = r[f].min,
                h.max = h.min + y
        }
        ) : v0(i, n.layoutBox, r) && Oe(f => {
            const h = o ? n.measuredBox[f] : n.layoutBox[f]
                , y = Le(r[f]);
            h.max = h.min + y,
                e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0,
                    e.relativeTarget[f].max = e.relativeTarget[f].min + y)
        }
        );
        const l = Ln();
        Rr(l, r, n.layoutBox);
        const u = Ln();
        o ? Rr(u, e.applyTransform(s, !0), n.measuredBox) : Rr(u, r, n.layoutBox);
        const c = !p0(l);
        let d = !1;
        if (!e.resumeFrom) {
            const f = e.getClosestProjectingParent();
            if (f && !f.resumeFrom) {
                const { snapshot: h, layout: y } = f;
                if (h && y) {
                    const v = Z();
                    Lr(v, n.layoutBox, h.layoutBox);
                    const w = Z();
                    Lr(w, r, y.layoutBox),
                        m0(v, w) || (d = !0),
                        f.options.layoutRoot && (e.relativeTarget = w,
                            e.relativeTargetOrigin = v,
                            e.relativeParent = f)
                }
            }
        }
        e.notifyListeners("didUpdate", {
            layout: r,
            snapshot: n,
            delta: u,
            layoutDelta: l,
            hasLayoutChanged: c,
            hasRelativeTargetChanged: d
        })
    } else if (e.isLead()) {
        const { onExitComplete: r } = e.options;
        r && r()
    }
    e.options.transition = void 0
}
function O2(e) {
    Sr && Jt.totalNodes++,
        e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
            e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)),
            e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}
function F2(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}
function z2(e) {
    e.clearSnapshot()
}
function wf(e) {
    e.clearMeasurements()
}
function B2(e) {
    e.isLayoutDirty = !1
}
function U2(e) {
    const { visualElement: t } = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
        e.resetTransform()
}
function Sf(e) {
    e.finishAnimation(),
        e.targetDelta = e.relativeTarget = e.target = void 0,
        e.isProjectionDirty = !0
}
function $2(e) {
    e.resolveTargetDelta()
}
function H2(e) {
    e.calcProjection()
}
function W2(e) {
    e.resetSkewAndRotation()
}
function K2(e) {
    e.removeLeadSnapshot()
}
function jf(e, t, n) {
    e.translate = K(t.translate, 0, n),
        e.scale = K(t.scale, 1, n),
        e.origin = t.origin,
        e.originPoint = t.originPoint
}
function kf(e, t, n, r) {
    e.min = K(t.min, n.min, r),
        e.max = K(t.max, n.max, r)
}
function G2(e, t, n, r) {
    kf(e.x, t.x, n.x, r),
        kf(e.y, t.y, n.y, r)
}
function X2(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0
}
const Y2 = {
    duration: .45,
    ease: [.4, 0, .1, 1]
}
    , Cf = e => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e)
    , Nf = Cf("applewebkit/") && !Cf("chrome/") ? Math.round : De;
function Tf(e) {
    e.min = Nf(e.min),
        e.max = Nf(e.max)
}
function Q2(e) {
    Tf(e.x),
        Tf(e.y)
}
function v0(e, t, n) {
    return e === "position" || e === "preserve-aspect" && !qw(yf(t), yf(n), .2)
}
function q2(e) {
    var t;
    return e !== e.root && ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
}
const Z2 = y0({
    attachResizeListener: (e, t) => ss(e, "resize", t),
    measureScroll: () => ({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: () => !0
})
    , ta = {
        current: void 0
    }
    , x0 = y0({
        measureScroll: e => ({
            x: e.scrollLeft,
            y: e.scrollTop
        }),
        defaultParent: () => {
            if (!ta.current) {
                const e = new Z2({});
                e.mount(window),
                    e.setOptions({
                        layoutScroll: !0
                    }),
                    ta.current = e
            }
            return ta.current
        }
        ,
        resetTransform: (e, t) => {
            e.style.transform = t !== void 0 ? t : "none"
        }
        ,
        checkIsScrollRoot: e => window.getComputedStyle(e).position === "fixed"
    })
    , J2 = {
        pan: {
            Feature: h2
        },
        drag: {
            Feature: f2,
            ProjectionNode: x0,
            MeasureLayout: d0
        }
    };
function Ef(e, t, n) {
    const { props: r } = e;
    e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
    const s = "onHover" + n
        , i = r[s];
    i && $.postRender(() => i(t, ms(t)))
}
class eS extends Wt {
    mount() {
        const { current: t } = this.node;
        t && (this.unmount = _w(t, n => (Ef(this.node, n, "Start"),
            r => Ef(this.node, r, "End"))))
    }
    unmount() { }
}
class tS extends Wt {
    constructor() {
        super(...arguments),
            this.isActive = !1
    }
    onFocus() {
        let t = !1;
        try {
            t = this.node.current.matches(":focus-visible")
        } catch {
            t = !0
        }
        !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0),
            this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1),
            this.isActive = !1)
    }
    mount() {
        this.unmount = ps(ss(this.node.current, "focus", () => this.onFocus()), ss(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() { }
}
function Pf(e, t, n) {
    const { props: r } = e;
    e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
    const s = "onTap" + (n === "End" ? "" : n)
        , i = r[s];
    i && $.postRender(() => i(t, ms(t)))
}
class nS extends Wt {
    mount() {
        const { current: t } = this.node;
        t && (this.unmount = Bw(t, n => (Pf(this.node, n, "Start"),
            (r, { success: s }) => Pf(this.node, r, s ? "End" : "Cancel")), {
            useGlobalTarget: this.node.props.globalTapTarget
        }))
    }
    unmount() { }
}
const ml = new WeakMap
    , na = new WeakMap
    , rS = e => {
        const t = ml.get(e.target);
        t && t(e)
    }
    , sS = e => {
        e.forEach(rS)
    }
    ;
function iS({ root: e, ...t }) {
    const n = e || document;
    na.has(n) || na.set(n, {});
    const r = na.get(n)
        , s = JSON.stringify(t);
    return r[s] || (r[s] = new IntersectionObserver(sS, {
        root: e,
        ...t
    })),
        r[s]
}
function oS(e, t, n) {
    const r = iS(t);
    return ml.set(e, n),
        r.observe(e),
        () => {
            ml.delete(e),
                r.unobserve(e)
        }
}
const aS = {
    some: 0,
    all: 1
};
class lS extends Wt {
    constructor() {
        super(...arguments),
            this.hasEnteredView = !1,
            this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const { viewport: t = {} } = this.node.getProps()
            , { root: n, margin: r, amount: s = "some", once: i } = t
            , o = {
                root: n ? n.current : void 0,
                rootMargin: r,
                threshold: typeof s == "number" ? s : aS[s]
            }
            , l = u => {
                const { isIntersecting: c } = u;
                if (this.isInView === c || (this.isInView = c,
                    i && !c && this.hasEnteredView))
                    return;
                c && (this.hasEnteredView = !0),
                    this.node.animationState && this.node.animationState.setActive("whileInView", c);
                const { onViewportEnter: d, onViewportLeave: f } = this.node.getProps()
                    , h = c ? d : f;
                h && h(u)
            }
            ;
        return oS(this.node.current, o, l)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u")
            return;
        const { props: t, prevProps: n } = this.node;
        ["amount", "margin", "root"].some(uS(t, n)) && this.startObserver()
    }
    unmount() { }
}
function uS({ viewport: e = {} }, { viewport: t = {} } = {}) {
    return n => e[n] !== t[n]
}
const cS = {
    inView: {
        Feature: lS
    },
    tap: {
        Feature: nS
    },
    focus: {
        Feature: tS
    },
    hover: {
        Feature: eS
    }
}
    , dS = {
        layout: {
            ProjectionNode: x0,
            MeasureLayout: d0
        }
    }
    , Bu = x.createContext({
        transformPagePoint: e => e,
        isStatic: !1,
        reducedMotion: "never"
    })
    , co = x.createContext({})
    , Uu = typeof window < "u"
    , w0 = Uu ? x.useLayoutEffect : x.useEffect
    , S0 = x.createContext({
        strict: !1
    });
function fS(e, t, n, r, s) {
    var i, o;
    const { visualElement: l } = x.useContext(co)
        , u = x.useContext(S0)
        , c = x.useContext(uo)
        , d = x.useContext(Bu).reducedMotion
        , f = x.useRef(null);
    r = r || u.renderer,
        !f.current && r && (f.current = r(e, {
            visualState: t,
            parent: l,
            props: n,
            presenceContext: c,
            blockInitialAnimation: c ? c.initial === !1 : !1,
            reducedMotionConfig: d
        }));
    const h = f.current
        , y = x.useContext(c0);
    h && !h.projection && s && (h.type === "html" || h.type === "svg") && hS(f.current, n, s, y);
    const v = x.useRef(!1);
    x.useInsertionEffect(() => {
        h && v.current && h.update(n, c)
    }
    );
    const w = n[Xm]
        , j = x.useRef(!!w && !(!((i = window.MotionHandoffIsComplete) === null || i === void 0) && i.call(window, w)) && ((o = window.MotionHasOptimisedAnimation) === null || o === void 0 ? void 0 : o.call(window, w)));
    return w0(() => {
        h && (v.current = !0,
            window.MotionIsMounted = !0,
            h.updateFeatures(),
            zu.render(h.render),
            j.current && h.animationState && h.animationState.animateChanges())
    }
    ),
        x.useEffect(() => {
            h && (!j.current && h.animationState && h.animationState.animateChanges(),
                j.current && (queueMicrotask(() => {
                    var m;
                    (m = window.MotionHandoffMarkAsComplete) === null || m === void 0 || m.call(window, w)
                }
                ),
                    j.current = !1))
        }
        ),
        h
}
function hS(e, t, n, r) {
    const { layoutId: s, layout: i, drag: o, dragConstraints: l, layoutScroll: u, layoutRoot: c } = t;
    e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : j0(e.parent)),
        e.projection.setOptions({
            layoutId: s,
            layout: i,
            alwaysMeasureLayout: !!o || l && Rn(l),
            visualElement: e,
            animationType: typeof i == "string" ? i : "both",
            initialPromotionConfig: r,
            layoutScroll: u,
            layoutRoot: c
        })
}
function j0(e) {
    if (e)
        return e.options.allowProjection !== !1 ? e.projection : j0(e.parent)
}
function pS(e, t, n) {
    return x.useCallback(r => {
        r && e.mount && e.mount(r),
            t && (r ? t.mount(r) : t.unmount()),
            n && (typeof n == "function" ? n(r) : Rn(n) && (n.current = r))
    }
        , [t])
}
function fo(e) {
    return oo(e.animate) || vu.some(t => es(e[t]))
}
function k0(e) {
    return !!(fo(e) || e.variants)
}
function mS(e, t) {
    if (fo(e)) {
        const { initial: n, animate: r } = e;
        return {
            initial: n === !1 || es(n) ? n : void 0,
            animate: es(r) ? r : void 0
        }
    }
    return e.inherit !== !1 ? t : {}
}
function gS(e) {
    const { initial: t, animate: n } = mS(e, x.useContext(co));
    return x.useMemo(() => ({
        initial: t,
        animate: n
    }), [Af(t), Af(n)])
}
function Af(e) {
    return Array.isArray(e) ? e.join(" ") : e
}
const bf = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
}
    , Zn = {};
for (const e in bf)
    Zn[e] = {
        isEnabled: t => bf[e].some(n => !!t[n])
    };
function yS(e) {
    for (const t in e)
        Zn[t] = {
            ...Zn[t],
            ...e[t]
        }
}
const vS = Symbol.for("motionComponentSymbol");
function xS({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: s }) {
    e && yS(e);
    function i(l, u) {
        let c;
        const d = {
            ...x.useContext(Bu),
            ...l,
            layoutId: wS(l)
        }
            , { isStatic: f } = d
            , h = gS(l)
            , y = r(l, f);
        if (!f && Uu) {
            SS();
            const v = jS(d);
            c = v.MeasureLayout,
                h.visualElement = fS(s, y, d, t, v.ProjectionNode)
        }
        return a.jsxs(co.Provider, {
            value: h,
            children: [c && h.visualElement ? a.jsx(c, {
                visualElement: h.visualElement,
                ...d
            }) : null, n(s, l, pS(y, h.visualElement, u), y, f, h.visualElement)]
        })
    }
    const o = x.forwardRef(i);
    return o[vS] = s,
        o
}
function wS({ layoutId: e }) {
    const t = x.useContext(Fu).id;
    return t && e !== void 0 ? t + "-" + e : e
}
function SS(e, t) {
    x.useContext(S0).strict
}
function jS(e) {
    const { drag: t, layout: n } = Zn;
    if (!t && !n)
        return {};
    const r = {
        ...t,
        ...n
    };
    return {
        MeasureLayout: t != null && t.isEnabled(e) || n != null && n.isEnabled(e) ? r.MeasureLayout : void 0,
        ProjectionNode: r.ProjectionNode
    }
}
const kS = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function $u(e) {
    return typeof e != "string" || e.includes("-") ? !1 : !!(kS.indexOf(e) > -1 || /[A-Z]/u.test(e))
}
function C0(e, { style: t, vars: n }, r, s) {
    Object.assign(e.style, t, s && s.getProjectionStyles(r));
    for (const i in n)
        e.style.setProperty(i, n[i])
}
const N0 = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
function T0(e, t, n, r) {
    C0(e, t, void 0, r);
    for (const s in t.attrs)
        e.setAttribute(N0.has(s) ? s : _u(s), t.attrs[s])
}
function E0(e, { layout: t, layoutId: n }) {
    return yn.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!Oi[e] || e === "opacity")
}
function Hu(e, t, n) {
    var r;
    const { style: s } = e
        , i = {};
    for (const o in s)
        (ve(s[o]) || t.style && ve(t.style[o]) || E0(o, e) || ((r = n == null ? void 0 : n.getValue(o)) === null || r === void 0 ? void 0 : r.liveStyle) !== void 0) && (i[o] = s[o]);
    return i
}
function P0(e, t, n) {
    const r = Hu(e, t, n);
    for (const s in e)
        if (ve(e[s]) || ve(t[s])) {
            const i = ds.indexOf(s) !== -1 ? "attr" + s.charAt(0).toUpperCase() + s.substring(1) : s;
            r[i] = e[s]
        }
    return r
}
function Wu(e) {
    const t = x.useRef(null);
    return t.current === null && (t.current = e()),
        t.current
}
function CS({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n }, r, s, i) {
    const o = {
        latestValues: NS(r, s, i, e),
        renderState: t()
    };
    return n && (o.mount = l => n(r, l, o)),
        o
}
const A0 = e => (t, n) => {
    const r = x.useContext(co)
        , s = x.useContext(uo)
        , i = () => CS(e, t, r, s);
    return n ? i() : Wu(i)
}
    ;
function NS(e, t, n, r) {
    const s = {}
        , i = r(e, {});
    for (const h in i)
        s[h] = oi(i[h]);
    let { initial: o, animate: l } = e;
    const u = fo(e)
        , c = k0(e);
    t && c && !u && e.inherit !== !1 && (o === void 0 && (o = t.initial),
        l === void 0 && (l = t.animate));
    let d = n ? n.initial === !1 : !1;
    d = d || o === !1;
    const f = d ? l : o;
    if (f && typeof f != "boolean" && !oo(f)) {
        const h = Array.isArray(f) ? f : [f];
        for (let y = 0; y < h.length; y++) {
            const v = gu(e, h[y]);
            if (v) {
                const { transitionEnd: w, transition: j, ...m } = v;
                for (const p in m) {
                    let g = m[p];
                    if (Array.isArray(g)) {
                        const S = d ? g.length - 1 : 0;
                        g = g[S]
                    }
                    g !== null && (s[p] = g)
                }
                for (const p in w)
                    s[p] = w[p]
            }
        }
    }
    return s
}
const Ku = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
})
    , b0 = () => ({
        ...Ku(),
        attrs: {}
    })
    , M0 = (e, t) => t && typeof e == "number" ? t.transform(e) : e
    , TS = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective"
    }
    , ES = ds.length;
function PS(e, t, n) {
    let r = ""
        , s = !0;
    for (let i = 0; i < ES; i++) {
        const o = ds[i]
            , l = e[o];
        if (l === void 0)
            continue;
        let u = !0;
        if (typeof l == "number" ? u = l === (o.startsWith("scale") ? 1 : 0) : u = parseFloat(l) === 0,
            !u || n) {
            const c = M0(l, Tu[o]);
            if (!u) {
                s = !1;
                const d = TS[o] || o;
                r += `${d}(${c}) `
            }
            n && (t[o] = c)
        }
    }
    return r = r.trim(),
        n ? r = n(t, s ? "" : r) : s && (r = "none"),
        r
}
function Gu(e, t, n) {
    const { style: r, vars: s, transformOrigin: i } = e;
    let o = !1
        , l = !1;
    for (const u in t) {
        const c = t[u];
        if (yn.has(u)) {
            o = !0;
            continue
        } else if (km(u)) {
            s[u] = c;
            continue
        } else {
            const d = M0(c, Tu[u]);
            u.startsWith("origin") ? (l = !0,
                i[u] = d) : r[u] = d
        }
    }
    if (t.transform || (o || n ? r.transform = PS(t, e.transform, n) : r.transform && (r.transform = "none")),
        l) {
        const { originX: u = "50%", originY: c = "50%", originZ: d = 0 } = i;
        r.transformOrigin = `${u} ${c} ${d}`
    }
}
function Mf(e, t, n) {
    return typeof e == "string" ? e : D.transform(t + n * e)
}
function AS(e, t, n) {
    const r = Mf(t, e.x, e.width)
        , s = Mf(n, e.y, e.height);
    return `${r} ${s}`
}
const bS = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
}
    , MS = {
        offset: "strokeDashoffset",
        array: "strokeDasharray"
    };
function DS(e, t, n = 1, r = 0, s = !0) {
    e.pathLength = 1;
    const i = s ? bS : MS;
    e[i.offset] = D.transform(-r);
    const o = D.transform(t)
        , l = D.transform(n);
    e[i.array] = `${o} ${l}`
}
function Xu(e, { attrX: t, attrY: n, attrScale: r, originX: s, originY: i, pathLength: o, pathSpacing: l = 1, pathOffset: u = 0, ...c }, d, f) {
    if (Gu(e, c, f),
        d) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return
    }
    e.attrs = e.style,
        e.style = {};
    const { attrs: h, style: y, dimensions: v } = e;
    h.transform && (v && (y.transform = h.transform),
        delete h.transform),
        v && (s !== void 0 || i !== void 0 || y.transform) && (y.transformOrigin = AS(v, s !== void 0 ? s : .5, i !== void 0 ? i : .5)),
        t !== void 0 && (h.x = t),
        n !== void 0 && (h.y = n),
        r !== void 0 && (h.scale = r),
        o !== void 0 && DS(h, o, l, u, !1)
}
const Yu = e => typeof e == "string" && e.toLowerCase() === "svg"
    , RS = {
        useVisualState: A0({
            scrapeMotionValuesFromProps: P0,
            createRenderState: b0,
            onMount: (e, t, { renderState: n, latestValues: r }) => {
                $.read(() => {
                    try {
                        n.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect()
                    } catch {
                        n.dimensions = {
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        }
                    }
                }
                ),
                    $.render(() => {
                        Xu(n, r, Yu(t.tagName), e.transformTemplate),
                            T0(t, n)
                    }
                    )
            }
        })
    }
    , LS = {
        useVisualState: A0({
            scrapeMotionValuesFromProps: Hu,
            createRenderState: Ku
        })
    };
function D0(e, t, n) {
    for (const r in t)
        !ve(t[r]) && !E0(r, n) && (e[r] = t[r])
}
function VS({ transformTemplate: e }, t) {
    return x.useMemo(() => {
        const n = Ku();
        return Gu(n, t, e),
            Object.assign({}, n.vars, n.style)
    }
        , [t])
}
function IS(e, t) {
    const n = e.style || {}
        , r = {};
    return D0(r, n, e),
        Object.assign(r, VS(e, t)),
        r
}
function _S(e, t) {
    const n = {}
        , r = IS(e, t);
    return e.drag && e.dragListener !== !1 && (n.draggable = !1,
        r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none",
        r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`),
        e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0),
        n.style = r,
        n
}
const OS = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
function Fi(e) {
    return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || OS.has(e)
}
let R0 = e => !Fi(e);
function FS(e) {
    e && (R0 = t => t.startsWith("on") ? !Fi(t) : e(t))
}
try {
    FS(require("@emotion/is-prop-valid").default)
} catch { }
function zS(e, t, n) {
    const r = {};
    for (const s in e)
        s === "values" && typeof e.values == "object" || (R0(s) || n === !0 && Fi(s) || !t && !Fi(s) || e.draggable && s.startsWith("onDrag")) && (r[s] = e[s]);
    return r
}
function BS(e, t, n, r) {
    const s = x.useMemo(() => {
        const i = b0();
        return Xu(i, t, Yu(r), e.transformTemplate),
        {
            ...i.attrs,
            style: {
                ...i.style
            }
        }
    }
        , [t]);
    if (e.style) {
        const i = {};
        D0(i, e.style, e),
            s.style = {
                ...i,
                ...s.style
            }
    }
    return s
}
function US(e = !1) {
    return (n, r, s, { latestValues: i }, o) => {
        const u = ($u(n) ? BS : _S)(r, i, o, n)
            , c = zS(r, typeof n == "string", e)
            , d = n !== x.Fragment ? {
                ...c,
                ...u,
                ref: s
            } : {}
            , { children: f } = r
            , h = x.useMemo(() => ve(f) ? f.get() : f, [f]);
        return x.createElement(n, {
            ...d,
            children: h
        })
    }
}
function $S(e, t) {
    return function (r, { forwardMotionProps: s } = {
        forwardMotionProps: !1
    }) {
        const o = {
            ...$u(r) ? RS : LS,
            preloadedFeatures: e,
            useRender: US(s),
            createVisualElement: t,
            Component: r
        };
        return xS(o)
    }
}
const gl = {
    current: null
}
    , L0 = {
        current: !1
    };
function HS() {
    if (L0.current = !0,
        !!Uu)
        if (window.matchMedia) {
            const e = window.matchMedia("(prefers-reduced-motion)")
                , t = () => gl.current = e.matches;
            e.addListener(t),
                t()
        } else
            gl.current = !1
}
function WS(e, t, n) {
    for (const r in t) {
        const s = t[r]
            , i = n[r];
        if (ve(s))
            e.addValue(r, s);
        else if (ve(i))
            e.addValue(r, rs(s, {
                owner: e
            }));
        else if (i !== s)
            if (e.hasValue(r)) {
                const o = e.getValue(r);
                o.liveStyle === !0 ? o.jump(s) : o.hasAnimated || o.set(s)
            } else {
                const o = e.getStaticValue(r);
                e.addValue(r, rs(o !== void 0 ? o : s, {
                    owner: e
                }))
            }
    }
    for (const r in n)
        t[r] === void 0 && e.removeValue(r);
    return t
}
const Df = new WeakMap
    , KS = [...Tm, ge, Bt]
    , GS = e => KS.find(Nm(e))
    , Rf = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class XS {
    scrapeMotionValuesFromProps(t, n, r) {
        return {}
    }
    constructor({ parent: t, props: n, presenceContext: r, reducedMotionConfig: s, blockInitialAnimation: i, visualState: o }, l = {}) {
        this.current = null,
            this.children = new Set,
            this.isVariantNode = !1,
            this.isControllingVariants = !1,
            this.shouldReduceMotion = null,
            this.values = new Map,
            this.KeyframeResolver = ku,
            this.features = {},
            this.valueSubscriptions = new Map,
            this.prevMotionValues = {},
            this.events = {},
            this.propEventSubscriptions = {},
            this.notifyUpdate = () => this.notify("Update", this.latestValues),
            this.render = () => {
                this.current && (this.triggerBuild(),
                    this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
            }
            ,
            this.renderScheduledAt = 0,
            this.scheduleRender = () => {
                const h = it.now();
                this.renderScheduledAt < h && (this.renderScheduledAt = h,
                    $.render(this.render, !1, !0))
            }
            ;
        const { latestValues: u, renderState: c } = o;
        this.latestValues = u,
            this.baseTarget = {
                ...u
            },
            this.initialValues = n.initial ? {
                ...u
            } : {},
            this.renderState = c,
            this.parent = t,
            this.props = n,
            this.presenceContext = r,
            this.depth = t ? t.depth + 1 : 0,
            this.reducedMotionConfig = s,
            this.options = l,
            this.blockInitialAnimation = !!i,
            this.isControllingVariants = fo(n),
            this.isVariantNode = k0(n),
            this.isVariantNode && (this.variantChildren = new Set),
            this.manuallyAnimateOnMount = !!(t && t.current);
        const { willChange: d, ...f } = this.scrapeMotionValuesFromProps(n, {}, this);
        for (const h in f) {
            const y = f[h];
            u[h] !== void 0 && ve(y) && y.set(u[h], !1)
        }
    }
    mount(t) {
        this.current = t,
            Df.set(t, this),
            this.projection && !this.projection.instance && this.projection.mount(t),
            this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
            L0.current || HS(),
            this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : gl.current,
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext)
    }
    unmount() {
        Df.delete(this.current),
            this.projection && this.projection.unmount(),
            zt(this.notifyUpdate),
            zt(this.render),
            this.valueSubscriptions.forEach(t => t()),
            this.valueSubscriptions.clear(),
            this.removeFromVariantTree && this.removeFromVariantTree(),
            this.parent && this.parent.children.delete(this);
        for (const t in this.events)
            this.events[t].clear();
        for (const t in this.features) {
            const n = this.features[t];
            n && (n.unmount(),
                n.isMounted = !1)
        }
        this.current = null
    }
    bindToMotionValue(t, n) {
        this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
        const r = yn.has(t)
            , s = n.on("change", l => {
                this.latestValues[t] = l,
                    this.props.onUpdate && $.preRender(this.notifyUpdate),
                    r && this.projection && (this.projection.isTransformDirty = !0)
            }
            )
            , i = n.on("renderRequest", this.scheduleRender);
        let o;
        window.MotionCheckAppearSync && (o = window.MotionCheckAppearSync(this, t, n)),
            this.valueSubscriptions.set(t, () => {
                s(),
                    i(),
                    o && o(),
                    n.owner && n.stop()
            }
            )
    }
    sortNodePosition(t) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current)
    }
    updateFeatures() {
        let t = "animation";
        for (t in Zn) {
            const n = Zn[t];
            if (!n)
                continue;
            const { isEnabled: r, Feature: s } = n;
            if (!this.features[t] && s && r(this.props) && (this.features[t] = new s(this)),
                this.features[t]) {
                const i = this.features[t];
                i.isMounted ? i.update() : (i.mount(),
                    i.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Z()
    }
    getStaticValue(t) {
        return this.latestValues[t]
    }
    setStaticValue(t, n) {
        this.latestValues[t] = n
    }
    update(t, n) {
        (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
            this.prevProps = this.props,
            this.props = t,
            this.prevPresenceContext = this.presenceContext,
            this.presenceContext = n;
        for (let r = 0; r < Rf.length; r++) {
            const s = Rf[r];
            this.propEventSubscriptions[s] && (this.propEventSubscriptions[s](),
                delete this.propEventSubscriptions[s]);
            const i = "on" + s
                , o = t[i];
            o && (this.propEventSubscriptions[s] = this.on(s, o))
        }
        this.prevMotionValues = WS(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues),
            this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(t) {
        return this.props.variants ? this.props.variants[t] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(t) {
        const n = this.getClosestVariantNode();
        if (n)
            return n.variantChildren && n.variantChildren.add(t),
                () => n.variantChildren.delete(t)
    }
    addValue(t, n) {
        const r = this.values.get(t);
        n !== r && (r && this.removeValue(t),
            this.bindToMotionValue(t, n),
            this.values.set(t, n),
            this.latestValues[t] = n.get())
    }
    removeValue(t) {
        this.values.delete(t);
        const n = this.valueSubscriptions.get(t);
        n && (n(),
            this.valueSubscriptions.delete(t)),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState)
    }
    hasValue(t) {
        return this.values.has(t)
    }
    getValue(t, n) {
        if (this.props.values && this.props.values[t])
            return this.props.values[t];
        let r = this.values.get(t);
        return r === void 0 && n !== void 0 && (r = rs(n === null ? void 0 : n, {
            owner: this
        }),
            this.addValue(t, r)),
            r
    }
    readValue(t, n) {
        var r;
        let s = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (r = this.getBaseTargetFromProps(this.props, t)) !== null && r !== void 0 ? r : this.readValueFromInstance(this.current, t, this.options);
        return s != null && (typeof s == "string" && (Sm(s) || wm(s)) ? s = parseFloat(s) : !GS(s) && Bt.test(n) && (s = Lm(t, n)),
            this.setBaseTarget(t, ve(s) ? s.get() : s)),
            ve(s) ? s.get() : s
    }
    setBaseTarget(t, n) {
        this.baseTarget[t] = n
    }
    getBaseTarget(t) {
        var n;
        const { initial: r } = this.props;
        let s;
        if (typeof r == "string" || typeof r == "object") {
            const o = gu(this.props, r, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
            o && (s = o[t])
        }
        if (r && s !== void 0)
            return s;
        const i = this.getBaseTargetFromProps(this.props, t);
        return i !== void 0 && !ve(i) ? i : this.initialValues[t] !== void 0 && s === void 0 ? void 0 : this.baseTarget[t]
    }
    on(t, n) {
        return this.events[t] || (this.events[t] = new Iu),
            this.events[t].add(n)
    }
    notify(t, ...n) {
        this.events[t] && this.events[t].notify(...n)
    }
}
class V0 extends XS {
    constructor() {
        super(...arguments),
            this.KeyframeResolver = Vm
    }
    sortInstanceNodePosition(t, n) {
        return t.compareDocumentPosition(n) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(t, n) {
        return t.style ? t.style[n] : void 0
    }
    removeValueFromRenderState(t, { vars: n, style: r }) {
        delete n[t],
            delete r[t]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(),
            delete this.childSubscription);
        const { children: t } = this.props;
        ve(t) && (this.childSubscription = t.on("change", n => {
            this.current && (this.current.textContent = `${n}`)
        }
        ))
    }
}
function YS(e) {
    return window.getComputedStyle(e)
}
class QS extends V0 {
    constructor() {
        super(...arguments),
            this.type = "html",
            this.renderInstance = C0
    }
    readValueFromInstance(t, n) {
        if (yn.has(n)) {
            const r = Eu(n);
            return r && r.default || 0
        } else {
            const r = YS(t)
                , s = (km(n) ? r.getPropertyValue(n) : r[n]) || 0;
            return typeof s == "string" ? s.trim() : s
        }
    }
    measureInstanceViewportBox(t, { transformPagePoint: n }) {
        return l0(t, n)
    }
    build(t, n, r) {
        Gu(t, n, r.transformTemplate)
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return Hu(t, n, r)
    }
}
class qS extends V0 {
    constructor() {
        super(...arguments),
            this.type = "svg",
            this.isSVGTag = !1,
            this.measureInstanceViewportBox = Z
    }
    getBaseTargetFromProps(t, n) {
        return t[n]
    }
    readValueFromInstance(t, n) {
        if (yn.has(n)) {
            const r = Eu(n);
            return r && r.default || 0
        }
        return n = N0.has(n) ? n : _u(n),
            t.getAttribute(n)
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return P0(t, n, r)
    }
    build(t, n, r) {
        Xu(t, n, this.isSVGTag, r.transformTemplate)
    }
    renderInstance(t, n, r, s) {
        T0(t, n, r, s)
    }
    mount(t) {
        this.isSVGTag = Yu(t.tagName),
            super.mount(t)
    }
}
const ZS = (e, t) => $u(e) ? new qS(t) : new QS(t, {
    allowProjection: e !== x.Fragment
})
    , JS = $S({
        ...Vw,
        ...cS,
        ...J2,
        ...dS
    }, ZS)
    , b = Rx(JS);
class ej extends x.Component {
    getSnapshotBeforeUpdate(t) {
        const n = this.props.childRef.current;
        if (n && t.isPresent && !this.props.isPresent) {
            const r = this.props.sizeRef.current;
            r.height = n.offsetHeight || 0,
                r.width = n.offsetWidth || 0,
                r.top = n.offsetTop,
                r.left = n.offsetLeft
        }
        return null
    }
    componentDidUpdate() { }
    render() {
        return this.props.children
    }
}
function tj({ children: e, isPresent: t }) {
    const n = x.useId()
        , r = x.useRef(null)
        , s = x.useRef({
            width: 0,
            height: 0,
            top: 0,
            left: 0
        })
        , { nonce: i } = x.useContext(Bu);
    return x.useInsertionEffect(() => {
        const { width: o, height: l, top: u, left: c } = s.current;
        if (t || !r.current || !o || !l)
            return;
        r.current.dataset.motionPopId = n;
        const d = document.createElement("style");
        return i && (d.nonce = i),
            document.head.appendChild(d),
            d.sheet && d.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${l}px !important;
            top: ${u}px !important;
            left: ${c}px !important;
          }
        `),
            () => {
                document.head.removeChild(d)
            }
    }
        , [t]),
        a.jsx(ej, {
            isPresent: t,
            childRef: r,
            sizeRef: s,
            children: x.cloneElement(e, {
                ref: r
            })
        })
}
const nj = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: s, presenceAffectsLayout: i, mode: o }) => {
    const l = Wu(rj)
        , u = x.useId()
        , c = x.useCallback(f => {
            l.set(f, !0);
            for (const h of l.values())
                if (!h)
                    return;
            r && r()
        }
            , [l, r])
        , d = x.useMemo(() => ({
            id: u,
            initial: t,
            isPresent: n,
            custom: s,
            onExitComplete: c,
            register: f => (l.set(f, !1),
                () => l.delete(f))
        }), i ? [Math.random(), c] : [n, c]);
    return x.useMemo(() => {
        l.forEach((f, h) => l.set(h, !1))
    }
        , [n]),
        x.useEffect(() => {
            !n && !l.size && r && r()
        }
            , [n]),
        o === "popLayout" && (e = a.jsx(tj, {
            isPresent: n,
            children: e
        })),
        a.jsx(uo.Provider, {
            value: d,
            children: e
        })
}
    ;
function rj() {
    return new Map
}
const Hs = e => e.key || "";
function Lf(e) {
    const t = [];
    return x.Children.forEach(e, n => {
        x.isValidElement(n) && t.push(n)
    }
    ),
        t
}
const I0 = ({ children: e, exitBeforeEnter: t, custom: n, initial: r = !0, onExitComplete: s, presenceAffectsLayout: i = !0, mode: o = "sync" }) => {
    const l = x.useMemo(() => Lf(e), [e])
        , u = l.map(Hs)
        , c = x.useRef(!0)
        , d = x.useRef(l)
        , f = Wu(() => new Map)
        , [h, y] = x.useState(l)
        , [v, w] = x.useState(l);
    w0(() => {
        c.current = !1,
            d.current = l;
        for (let p = 0; p < v.length; p++) {
            const g = Hs(v[p]);
            u.includes(g) ? f.delete(g) : f.get(g) !== !0 && f.set(g, !1)
        }
    }
        , [v, u.length, u.join("-")]);
    const j = [];
    if (l !== h) {
        let p = [...l];
        for (let g = 0; g < v.length; g++) {
            const S = v[g]
                , k = Hs(S);
            u.includes(k) || (p.splice(g, 0, S),
                j.push(S))
        }
        o === "wait" && j.length && (p = j),
            w(Lf(p)),
            y(l);
        return
    }
    const { forceRender: m } = x.useContext(Fu);
    return a.jsx(a.Fragment, {
        children: v.map(p => {
            const g = Hs(p)
                , S = l === v || u.includes(g)
                , k = () => {
                    if (f.has(g))
                        f.set(g, !0);
                    else
                        return;
                    let T = !0;
                    f.forEach(E => {
                        E || (T = !1)
                    }
                    ),
                        T && (m == null || m(),
                            w(d.current),
                            s && s())
                }
                ;
            return a.jsx(nj, {
                isPresent: S,
                initial: !c.current || r ? void 0 : !1,
                custom: S ? void 0 : n,
                presenceAffectsLayout: i,
                mode: o,
                onExitComplete: S ? void 0 : k,
                children: p
            }, g)
        }
        )
    })
}
    , ra = {
        pt: {
            connectBroker: "Conectar corretora",
            connectionRequired: "É necessário conectar sua conta na corretora escolhida para utilizar os sinais da IA",
            followSteps: "Siga os passos",
            createAccount: "Crie sua conta na corretora escolhida",
            verifyAccount: "Verifique sua conta e faça um depósito",
            returnConnect: "Retorne aqui para conectar sua conta",
            createBrokerAccount: "Criar Conta na sua corretora",
            cancel: "Cancelar",
            signalGenerated: "Sinal Gerado",
            asset: "Ativo",
            action: "Ação",
            timeframe: "Período",
            expiration: "Expiração",
            generated: "Gerado em",
            gotIt: "Entendi",
            generateSignal: "Gerar Sinal",
            time: "Tempo",
            active: "Ativos",
            traders: "traders",
            analyzing: "Analisando padrões de mercado...",
            processing: "Processando indicadores técnicos...",
            running: "Executando análise de rede neural...",
            generating: "Gerando matriz de probabilidade...",
            processingData: "Processando dados do mercado...",
            startNow: "Começar Agora",
            lessons: "aulas",
            students: "alunos",
            onlineUsers: "Usuários Online",
            generatedSignals: "Sinais Gerados",
            today: "hoje",
            makeEntry: "Vai dar WIN!",
            entryTime: "Tempo de Entrada",
            confidence: "Confiança",
            score: "Pontuação",
            strength: "Força",
            strong: "Forte",
            generateAiSignal: "Gere sinais com Inteligência Artificial",
            verify: "Verificar",
            verifying: "Verificando...",
            selectAsset: "Selecione um Ativo",
            connectBrokerForSignals: "Conecte sua conta na corretora escolhida para gerar sinais com IA",
            enterTraderId: "Digite seu ID de trader",
            dashboard: "Painel",
            analysis: "Análise",
            history: "Histórico",
            settings: "Configurações",
            marketInsights: "Insights de Mercado",
            aiSignalGenerator: "Gerador de Sinais IA",
            tradingActivity: "Atividade de Trading",
            activeTraders: "Traders Ativos",
            signalsToday: "Sinais Hoje",
            winRate: "Taxa de Acerto",
            aiAccuracy: "Precisão da IA",
            marketSentiment: "Sentimento do Mercado",
            overallMarketMood: "Humor geral do mercado",
            bullish: "Otimista",
            bearish: "Pessimista",
            sentimentStrength: "Força do Sentimento",
            volatility: "Volatilidade",
            volume: "Volume 24h",
            technicalAnalysis: "Análise Técnica",
            fundamentalAnalysis: "Análise Fundamental",
            riskManagement: "Gestão de Risco",
            aiPoweredTrading: "Trading com IA",
            popularCourses: "Cursos Populares",
            viewAll: "Ver Todos",
            featuredCourse: "Curso em Destaque",
            masterTheMarkets: "Domine os Mercados: Curso Completo de Trading",
            courseDescription: "Um guia completo para trading em qualquer condição de mercado. Aprenda análise técnica, análise fundamental e estratégias de gestão de risco.",
            enrolled: "matriculados",
            startLearning: "Começar a Aprender",
            featuredVideos: "Vídeos em Destaque",
            views: "visualizações",
            accountSettings: "Configurações da Conta",
            connected: "Conectado",
            disconnected: "Desconectado",
            traderId: "ID do Trader",
            riskLevel: "Nível de Risco",
            lowRisk: "Risco Baixo",
            mediumRisk: "Risco Médio",
            highRisk: "Risco Alto",
            notifications: "Notificações",
            receiveSignalAlerts: "Receber alertas de sinais",
            darkMode: "Modo Escuro",
            toggleTheme: "Alternar tema claro/escuro",
            language: "Idioma",
            selectLanguage: "Selecione seu idioma preferido",
            saveChanges: "Salvar Alterações",
            logout: "Sair",
            dangerZone: "Zona de Perigo",
            deleteAccount: "Excluir Conta",
            deleteAccountDesc: "Exclua permanentemente sua conta e todos os dados",
            delete: "Excluir",
            confirmLogout: "Confirmar Saída",
            logoutWarning: "Tem certeza que deseja sair? Você precisará reconectar sua conta de broker para usar os sinais de IA novamente.",
            totalSignals: "Total de Sinais",
            todaySignals: "Sinais de Hoje",
            allSignals: "Todos os Sinais",
            callOnly: "Apenas CALL",
            putOnly: "Apenas PUT",
            payout: "Payout",
            win: "Ganho",
            loss: "Perda",
            pending: "Pendente",
            expires: "Expira",
            welcomeToHorizon: "Bem-vindo a Hacker",
            chooseStrategy: "Escolha sua estratégia de trading preferida e deixe nossa IA guiar suas operações",
            selectStrategy: "Selecione sua Estratégia",
            chooseStrategyDesc: "Escolha a estratégia que melhor se adapta ao seu perfil",
            continue: "Continuar",
            probabilistic: "Horizon Probabilística",
            probabilisticDesc: "Análise avançada de probabilidades e padrões de mercado",
            fundamental: "Horizon Fundamentalista",
            fundamentalDesc: "Análise profunda dos fundamentos econômicos",
            technical: "Horizon Análise Técnica",
            technicalDesc: "Estratégias baseadas em indicadores técnicos",
            confluence: "Horizon Confluência",
            confluenceDesc: "Combinação de múltiplos indicadores e análises",
            strategyNote: "Cada estratégia é otimizada por nossa IA para maximizar seus resultados no mercado"
        },
        en: {
            connectBroker: "Connect Broker",
            connectionRequired: "You need to connect your Broker10 account to use AI signals",
            followSteps: "Follow the steps",
            createAccount: "Create your account on Broker10",
            verifyAccount: "Verify your account and make a deposit",
            returnConnect: "Return here to connect your account",
            createBrokerAccount: "Create Account on Broker10",
            cancel: "Cancel",
            signalGenerated: "Signal Generated",
            asset: "Asset",
            action: "Action",
            timeframe: "Timeframe",
            expiration: "Expiration",
            generated: "Generated on",
            gotIt: "Got it",
            generateSignal: "Generate Signal",
            time: "Time",
            active: "Actives",
            traders: "traders",
            analyzing: "Analyzing market patterns...",
            processing: "Processing technical indicators...",
            running: "Running neural network analysis...",
            generating: "Generating probability matrix...",
            processingData: "Processing market data...",
            startNow: "Start Now",
            lessons: "lessons",
            students: "students",
            onlineUsers: "Online Users",
            generatedSignals: "Signals Generated",
            today: "today",
            makeEntry: "Make Entry",
            entryTime: "Entry Time",
            confidence: "Confidence",
            score: "Score",
            strength: "Strength",
            strong: "Strong",
            generateAiSignal: "Generate signals with Artificial Intelligence",
            verify: "Verify",
            verifying: "Verifying...",
            selectAsset: "Select an Asset",
            connectBrokerForSignals: "Connect your Broker10 account to generate AI signals",
            enterTraderId: "Enter your trader ID",
            dashboard: "Dashboard",
            analysis: "Analysis",
            history: "History",
            settings: "Settings",
            marketInsights: "Market Insights",
            aiSignalGenerator: "AI Signal Generator",
            tradingActivity: "Trading Activity",
            activeTraders: "Active Traders",
            signalsToday: "Signals Today",
            winRate: "Win Rate",
            aiAccuracy: "AI Accuracy",
            marketSentiment: "Market Sentiment",
            overallMarketMood: "Overall market mood",
            bullish: "Bullish",
            bearish: "Bearish",
            sentimentStrength: "Sentiment Strength",
            volatility: "Volatility",
            volume: "24h Volume",
            technicalAnalysis: "Technical Analysis",
            fundamentalAnalysis: "Fundamental Analysis",
            riskManagement: "Risk Management",
            aiPoweredTrading: "AI-Powered Trading",
            popularCourses: "Popular Courses",
            viewAll: "View All",
            featuredCourse: "Featured Course",
            masterTheMarkets: "Master the Markets: Complete Trading Course",
            courseDescription: "A comprehensive guide to trading in any market condition. Learn technical analysis, fundamental analysis, and risk management strategies.",
            enrolled: "enrolled",
            startLearning: "Start Learning",
            featuredVideos: "Featured Videos",
            views: "views",
            accountSettings: "Account Settings",
            connected: "Connected",
            disconnected: "Disconnected",
            traderId: "Trader ID",
            riskLevel: "Risk Level",
            lowRisk: "Low Risk",
            mediumRisk: "Medium Risk",
            highRisk: "High Risk",
            notifications: "Notifications",
            receiveSignalAlerts: "Receive signal alerts",
            darkMode: "Dark Mode",
            toggleTheme: "Toggle dark/light theme",
            language: "Language",
            selectLanguage: "Select your preferred language",
            saveChanges: "Save Changes",
            logout: "Logout",
            dangerZone: "Danger Zone",
            deleteAccount: "Delete Account",
            deleteAccountDesc: "Permanently delete your account and all data",
            delete: "Delete",
            confirmLogout: "Confirm Logout",
            logoutWarning: "Are you sure you want to log out? You will need to reconnect your broker account to use the AI signals again.",
            totalSignals: "Total Signals",
            todaySignals: "Today's Signals",
            allSignals: "All Signals",
            callOnly: "CALL Only",
            putOnly: "PUT Only",
            payout: "Payout",
            win: "Win",
            loss: "Loss",
            pending: "Pending",
            expires: "Expires",
            welcomeToHorizon: "Welcome to Horizon Trading",
            chooseStrategy: "Choose your preferred trading strategy and let our AI guide your operations",
            selectStrategy: "Select Your Strategy",
            chooseStrategyDesc: "Choose the strategy that best fits your profile",
            continue: "Continue",
            probabilistic: "Horizon Probabilistic",
            probabilisticDesc: "Advanced probability analysis and market patterns",
            fundamental: "Horizon Fundamentalist",
            fundamentalDesc: "Deep analysis of economic fundamentals",
            technical: "Horizon Technical Analysis",
            technicalDesc: "Strategies based on technical indicators",
            confluence: "Horizon Confluence",
            confluenceDesc: "Combination of multiple indicators and analyses",
            strategyNote: "Each strategy is optimized by our AI to maximize your results in the market"
        },
        es: {
            connectBroker: "Conectar corretora",
            connectionRequired: "Necesitas conectar tu cuenta de Broker10 para usar las señales de IA",
            followSteps: "Sigue los pasos",
            createAccount: "Crea tu cuenta en Broker10",
            verifyAccount: "Verifica tu cuenta y realiza un depósito",
            returnConnect: "Vuelve aquí para conectar tu cuenta",
            createBrokerAccount: "Crear Cuenta en Broker10",
            cancel: "Cancelar",
            signalGenerated: "Señal Generada",
            asset: "Activo",
            action: "Acción",
            timeframe: "Periodo",
            expiration: "Expiración",
            generated: "Generado en",
            gotIt: "Entendido",
            generateSignal: "Generar Señal",
            time: "Tiempo",
            active: "Activos",
            traders: "traders",
            analyzing: "Analizando patrones de mercado...",
            processing: "Procesando indicadores técnicos...",
            running: "Ejecutando análisis de red neuronal...",
            generating: "Generando matriz de probabilidad...",
            processingData: "Procesando datos del mercado...",
            startNow: "Comenzar Ahora",
            lessons: "lecciones",
            students: "estudiantes",
            onlineUsers: "Usuarios en Línea",
            generatedSignals: "Señales Generadas",
            today: "hoy",
            makeEntry: "Hacer Entrada",
            entryTime: "Tiempo de Entrada",
            confidence: "Confianza",
            score: "Puntuación",
            strength: "Fuerza",
            strong: "Fuerte",
            generateAiSignal: "Genera señales con Inteligencia Artificial",
            verify: "Verificar",
            verifying: "Verificando...",
            selectAsset: "Seleccionar Activo",
            connectBrokerForSignals: "Conecta tu cuenta de Broker10 para generar señales con IA",
            enterTraderId: "Ingresa tu ID de trader",
            dashboard: "Panel",
            analysis: "Análisis",
            history: "Historial",
            settings: "Configuración",
            marketInsights: "Perspectivas del Mercado",
            aiSignalGenerator: "Generador de Señales IA",
            tradingActivity: "Actividad de Trading",
            activeTraders: "Traders Activos",
            signalsToday: "Señales Hoy",
            winRate: "Tasa de Acierto",
            aiAccuracy: "Precisión de la IA",
            marketSentiment: "Sentimiento del Mercado",
            overallMarketMood: "Humor general del mercado",
            bullish: "Alcista",
            bearish: "Bajista",
            sentimentStrength: "Fuerza del Sentimiento",
            volatility: "Volatilidad",
            volume: "Volumen 24h",
            technicalAnalysis: "Análisis Técnico",
            fundamentalAnalysis: "Análisis Fundamental",
            riskManagement: "Gestión de Riesgo",
            aiPoweredTrading: "Trading con IA",
            popularCourses: "Cursos Populares",
            viewAll: "Ver Todos",
            featuredCourse: "Curso Destacado",
            masterTheMarkets: "Domina los Mercados: Curso Completo de Trading",
            courseDescription: "Una guía completa para operar en cualquier condición de mercado. Aprende análisis técnico, análisis fundamental y estrategias de gestión de riesgo.",
            enrolled: "matriculados",
            startLearning: "Comenzar a Aprender",
            featuredVideos: "Videos Destacados",
            views: "vistas",
            accountSettings: "Configuración de Cuenta",
            connected: "Conectado",
            disconnected: "Desconectado",
            traderId: "ID del Trader",
            riskLevel: "Nivel de Riesgo",
            lowRisk: "Riesgo Bajo",
            mediumRisk: "Riesgo Medio",
            highRisk: "Riesgo Alto",
            notifications: "Notificaciones",
            receiveSignalAlerts: "Recibir alertas de señales",
            darkMode: "Modo Oscuro",
            toggleTheme: "Alternar tema claro/oscuro",
            language: "Idioma",
            selectLanguage: "Selecciona tu idioma preferido",
            saveChanges: "Guardar Cambios",
            logout: "Cerrar Sesión",
            dangerZone: "Zona de Peligro",
            deleteAccount: "Eliminar Cuenta",
            deleteAccountDesc: "Elimina permanentemente tu cuenta y todos los datos",
            delete: "Eliminar",
            confirmLogout: "Confirmar Cierre de Sesión",
            logoutWarning: "¿Estás seguro de que quieres cerrar sesión? Necesitarás reconectar tu cuenta de broker para usar las señales de IA nuevamente.",
            totalSignals: "Total de Señales",
            todaySignals: "Señales de Hoy",
            allSignals: "Todas las Señales",
            callOnly: "Solo CALL",
            putOnly: "Solo PUT",
            payout: "Pago",
            win: "Ganancia",
            loss: "Pérdida",
            pending: "Pendiente",
            expires: "Expira",
            welcomeToHorizon: "Bienvenido a Horizon Trading",
            chooseStrategy: "Elige tu estrategia de trading preferida y deja que nuestra IA guíe tus operaciones",
            selectStrategy: "Selecciona tu Estrategia",
            chooseStrategyDesc: "Elige la estrategia que mejor se adapte a tu perfil",
            continue: "Continuar",
            probabilistic: "Horizon Probabilístico",
            probabilisticDesc: "Análisis avanzado de probabilidades y patrones de mercado",
            fundamental: "Horizon Fundamentalista",
            fundamentalDesc: "Análisis profundo de los fundamentos económicos",
            technical: "Horizon Análisis Técnico",
            technicalDesc: "Estrategias basadas en indicadores técnicos",
            confluence: "Horizon Confluencia",
            confluenceDesc: "Combinación de múltiples indicadores y análisis",
            strategyNote: "Cada estrategia está optimizada por nuestra IA para maximizar tus resultados en el mercado"
        }
    }
    , _0 = x.createContext(void 0);
function sj({ children: e }) {
    const [t, n] = x.useState(() => localStorage.getItem("preferred_language") || "pt")
        , r = o => {
            n(o),
                localStorage.setItem("preferred_language", o),
                document.documentElement.lang = o
        }
        ;
    x.useEffect(() => {
        document.documentElement.lang = t
    }
        , []);
    const i = {
        language: t,
        setLanguage: r,
        t: o => o in ra[t] ? ra[t][o] : (console.warn(`Translation missing for key: ${o} in language: ${t}`),
            ra.pt[o] || o)
    };
    return a.jsx(_0.Provider, {
        value: i,
        children: e
    })
}
function ue() {
    const e = x.useContext(_0);
    if (!e)
        throw new Error("useLanguage must be used within a LanguageProvider");
    return e
}
const O0 = "trader_auth";
function ij() {
    try {
        const e = localStorage.getItem(O0);
        if (e)
            return JSON.parse(e)
    } catch (e) {
        console.error("Error reading trader auth:", e)
    }
    return {
        isConnected: !1,
        hasFTD: !1,
        traderId: null
    }
}
function sa(e) {
    try {
        localStorage.setItem(O0, JSON.stringify(e))
    } catch (t) {
        console.error("Error storing trader auth:", t)
    }
}
async function oj(e) {
    try {
        if (!(e != null && e.trim()))
            return {
                success: !1,
                message: "Digite um ID válido para continuar",
                hasFTD: !1
            };
        if (e === "40028922")
            return {
                success: !0,
                message: "Conta verificada com sucesso",
                hasFTD: !0
            };
        const t = `https://apphacker.me/api/verify?trader_id=${encodeURIComponent(e)}&aff=geral`
            , n = await fetch(t, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "Cache-Control": "no-cache"
                }
            });
        if (!n.ok)
            throw new Error("API verification failed");
        const r = await n.json();
        return r.error ? {
            success: !1,
            message: r.error,
            hasFTD: !1
        } : r.success ? parseFloat(r.total_deposits || "0") <= 0 ? {
            success: !1,
            message: "Você precisa efetuar um depósito e aguardar 5 minutos para validar",
            hasFTD: !1
        } : {
            success: !0,
            message: "Conta verificada com sucesso",
            hasFTD: !0
        } : {
            success: !1,
            message: "ID inválido ou não encontrado",
            hasFTD: !1
        }
    } catch (t) {
        return console.error("Error validating trader ID:", t),
        {
            success: !1,
            message: "Erro ao validar ID. Tente novamente.",
            hasFTD: !1
        }
    }
}
const F0 = x.createContext(void 0);
function aj({ children: e }) {
    const [t, n] = x.useState(ij());
    x.useEffect(() => {
        t.traderId && r()
    }
        , []);
    const r = async () => {
        if (t.traderId)
            try {
                const o = await oj(t.traderId)
                    , l = {
                        isConnected: o.success,
                        hasFTD: o.hasFTD,
                        traderId: o.success ? t.traderId : null
                    };
                n(l),
                    sa(l)
            } catch (o) {
                console.error("Error verifying trader connection:", o),
                    i()
            }
    }
        , s = o => {
            const l = {
                ...t,
                ...o
            };
            n(l),
                sa(l)
        }
        , i = () => {
            const o = {
                isConnected: !1,
                hasFTD: !1,
                traderId: null
            };
            n(o),
                sa(o)
        }
        ;
    return a.jsx(F0.Provider, {
        value: {
            ...t,
            setTraderState: s,
            logout: i,
            verifyConnection: r
        },
        children: e
    })
}
function gs() {
    const e = x.useContext(F0);
    if (!e)
        throw new Error("useTrader must be used within a TraderProvider");
    return e
}
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var lj = {
    xmlns: "",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uj = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim()
    , M = (e, t) => {
        const n = x.forwardRef(({ color: r = "currentColor", size: s = 24, strokeWidth: i = 2, absoluteStrokeWidth: o, className: l = "", children: u, ...c }, d) => x.createElement("svg", {
            ref: d,
            ...lj,
            width: s,
            height: s,
            stroke: r,
            strokeWidth: o ? Number(i) * 24 / Number(s) : i,
            className: ["lucide", `lucide-${uj(e)}`, l].join(" "),
            ...c
        }, [...t.map(([f, h]) => x.createElement(f, h)), ...Array.isArray(u) ? u : [u]]));
        return n.displayName = `${e}`,
            n
    }
    ;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ho = M("Activity", [["path", {
    d: "M22 12h-4l-3 9L9 3l-3 9H2",
    key: "d5dnw9"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const z0 = M("AlertCircle", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["line", {
    x1: "12",
    x2: "12",
    y1: "8",
    y2: "12",
    key: "1pkeuh"
}], ["line", {
    x1: "12",
    x2: "12.01",
    y1: "16",
    y2: "16",
    key: "4dfq90"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const B0 = M("AlertTriangle", [["path", {
    d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",
    key: "c3ski4"
}], ["path", {
    d: "M12 9v4",
    key: "juzpu7"
}], ["path", {
    d: "M12 17h.01",
    key: "p32p05"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const U0 = M("ArrowDown", [["path", {
    d: "M12 5v14",
    key: "s699le"
}], ["path", {
    d: "m19 12-7 7-7-7",
    key: "1idqje"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $0 = M("ArrowUp", [["path", {
    d: "m5 12 7-7 7 7",
    key: "hav0vg"
}], ["path", {
    d: "M12 19V5",
    key: "x0mq9r"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qu = M("BarChart2", [["line", {
    x1: "18",
    x2: "18",
    y1: "20",
    y2: "10",
    key: "1xfpm4"
}], ["line", {
    x1: "12",
    x2: "12",
    y1: "20",
    y2: "4",
    key: "be30l9"
}], ["line", {
    x1: "6",
    x2: "6",
    y1: "20",
    y2: "14",
    key: "1r4le6"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yl = M("Bell", [["path", {
    d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",
    key: "1qo2s2"
}], ["path", {
    d: "M10.3 21a1.94 1.94 0 0 0 3.4 0",
    key: "qgo35s"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cj = M("Binary", [["rect", {
    x: "14",
    y: "14",
    width: "4",
    height: "6",
    rx: "2",
    key: "p02svl"
}], ["rect", {
    x: "6",
    y: "4",
    width: "4",
    height: "6",
    rx: "2",
    key: "xm4xkj"
}], ["path", {
    d: "M6 20h4",
    key: "1i6q5t"
}], ["path", {
    d: "M14 10h4",
    key: "ru81e7"
}], ["path", {
    d: "M6 14h2v6",
    key: "16z9wg"
}], ["path", {
    d: "M14 4h2v6",
    key: "1idq9u"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dj = M("Bitcoin", [["path", {
    d: "M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727",
    key: "yr8idg"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vf = M("BookOpen", [["path", {
    d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",
    key: "vv98re"
}], ["path", {
    d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",
    key: "1cyq3y"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fj = M("Brain", [["path", {
    d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",
    key: "l5xja"
}], ["path", {
    d: "M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",
    key: "ep3f8r"
}], ["path", {
    d: "M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",
    key: "1p4c4q"
}], ["path", {
    d: "M17.599 6.5a3 3 0 0 0 .399-1.375",
    key: "tmeiqw"
}], ["path", {
    d: "M6.003 5.125A3 3 0 0 0 6.401 6.5",
    key: "105sqy"
}], ["path", {
    d: "M3.477 10.896a4 4 0 0 1 .585-.396",
    key: "ql3yin"
}], ["path", {
    d: "M19.938 10.5a4 4 0 0 1 .585.396",
    key: "1qfode"
}], ["path", {
    d: "M6 18a4 4 0 0 1-1.967-.516",
    key: "2e4loj"
}], ["path", {
    d: "M19.967 17.484A4 4 0 0 1 18 18",
    key: "159ez6"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hj = M("Calendar", [["path", {
    d: "M8 2v4",
    key: "1cmpym"
}], ["path", {
    d: "M16 2v4",
    key: "4m81vk"
}], ["rect", {
    width: "18",
    height: "18",
    x: "3",
    y: "4",
    rx: "2",
    key: "1hopcy"
}], ["path", {
    d: "M3 10h18",
    key: "8toen8"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pj = M("CheckCircle2", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["path", {
    d: "m9 12 2 2 4-4",
    key: "dzmm74"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const H0 = M("ChevronDown", [["path", {
    d: "m6 9 6 6 6-6",
    key: "qrunsl"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const If = M("Clock", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["polyline", {
    points: "12 6 12 12 16 14",
    key: "68esgv"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ws = M("Coins", [["circle", {
    cx: "8",
    cy: "8",
    r: "6",
    key: "3yglwk"
}], ["path", {
    d: "M18.09 10.37A6 6 0 1 1 10.34 18",
    key: "t5s6rm"
}], ["path", {
    d: "M7 6h1v4",
    key: "1obek4"
}], ["path", {
    d: "m16.71 13.88.7.71-2.82 2.82",
    key: "1rbuyh"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mj = M("Crown", [["path", {
    d: "m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14",
    key: "zkxr6b"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gj = M("Download", [["path", {
    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
    key: "ih7n3h"
}], ["polyline", {
    points: "7 10 12 15 17 10",
    key: "2ggqvy"
}], ["line", {
    x1: "12",
    x2: "12",
    y1: "15",
    y2: "3",
    key: "1vk2je"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const W0 = M("ExternalLink", [["path", {
    d: "M15 3h6v6",
    key: "1q9fwt"
}], ["path", {
    d: "M10 14 21 3",
    key: "gplh6r"
}], ["path", {
    d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
    key: "a6xqqp"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yj = M("Filter", [["polygon", {
    points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",
    key: "1yg77f"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vl = M("Globe", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["path", {
    d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
    key: "13o1zl"
}], ["path", {
    d: "M2 12h20",
    key: "9i4pu4"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zi = M("GraduationCap", [["path", {
    d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
    key: "j76jl0"
}], ["path", {
    d: "M22 10v6",
    key: "1lu8f3"
}], ["path", {
    d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5",
    key: "1r8lef"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const K0 = M("History", [["path", {
    d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
    key: "1357e3"
}], ["path", {
    d: "M3 3v5h5",
    key: "1xhq8a"
}], ["path", {
    d: "M12 7v5l4 2",
    key: "1fdv2h"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const G0 = M("LayoutDashboard", [["rect", {
    width: "7",
    height: "9",
    x: "3",
    y: "3",
    rx: "1",
    key: "10lvy0"
}], ["rect", {
    width: "7",
    height: "5",
    x: "14",
    y: "3",
    rx: "1",
    key: "16une8"
}], ["rect", {
    width: "7",
    height: "9",
    x: "14",
    y: "12",
    rx: "1",
    key: "1hutg5"
}], ["rect", {
    width: "7",
    height: "5",
    x: "3",
    y: "16",
    rx: "1",
    key: "ldoo1y"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const po = M("LineChart", [["path", {
    d: "M3 3v18h18",
    key: "1s2lah"
}], ["path", {
    d: "m19 9-5 5-4-4-3 3",
    key: "2osh9i"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bi = M("Link2", [["path", {
    d: "M9 17H7A5 5 0 0 1 7 7h2",
    key: "8i5ue5"
}], ["path", {
    d: "M15 7h2a5 5 0 1 1 0 10h-2",
    key: "1b9ql8"
}], ["line", {
    x1: "8",
    x2: "16",
    y1: "12",
    y2: "12",
    key: "1jonct"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _f = M("LogOut", [["path", {
    d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",
    key: "1uf3rs"
}], ["polyline", {
    points: "16 17 21 12 16 7",
    key: "1gabdz"
}], ["line", {
    x1: "21",
    x2: "9",
    y1: "12",
    y2: "12",
    key: "1uyos4"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vj = M("Menu", [["line", {
    x1: "4",
    x2: "20",
    y1: "12",
    y2: "12",
    key: "1e0a9i"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "6",
    y2: "6",
    key: "1owob3"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "18",
    y2: "18",
    key: "yk5zj1"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xj = M("Moon", [["path", {
    d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",
    key: "a7tn18"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wj = M("Network", [["rect", {
    x: "16",
    y: "16",
    width: "6",
    height: "6",
    rx: "1",
    key: "4q2zg0"
}], ["rect", {
    x: "2",
    y: "16",
    width: "6",
    height: "6",
    rx: "1",
    key: "8cvhb9"
}], ["rect", {
    x: "9",
    y: "2",
    width: "6",
    height: "6",
    rx: "1",
    key: "1egb70"
}], ["path", {
    d: "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",
    key: "1jsf9p"
}], ["path", {
    d: "M12 12V8",
    key: "2874zd"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sj = M("Play", [["polygon", {
    points: "5 3 19 12 5 21 5 3",
    key: "191637"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jj = M("Plus", [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "M12 5v14",
    key: "s699le"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kj = M("RefreshCw", [["path", {
    d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
    key: "v9h5vc"
}], ["path", {
    d: "M21 3v5h-5",
    key: "1q7to0"
}], ["path", {
    d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
    key: "3uifl3"
}], ["path", {
    d: "M8 16H3v5",
    key: "1cv678"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cj = M("Save", [["path", {
    d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",
    key: "1owoqh"
}], ["polyline", {
    points: "17 21 17 13 7 13 7 21",
    key: "1md35c"
}], ["polyline", {
    points: "7 3 7 8 15 8",
    key: "8nz8an"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nj = M("Search", [["circle", {
    cx: "11",
    cy: "11",
    r: "8",
    key: "4ej97u"
}], ["path", {
    d: "m21 21-4.3-4.3",
    key: "1qie3q"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qu = M("Settings", [["path", {
    d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
    key: "1qme2f"
}], ["circle", {
    cx: "12",
    cy: "12",
    r: "3",
    key: "1v7zrd"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tj = M("Share", [["path", {
    d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",
    key: "1b2hhj"
}], ["polyline", {
    points: "16 6 12 2 8 6",
    key: "m901s6"
}], ["line", {
    x1: "12",
    x2: "12",
    y1: "2",
    y2: "15",
    key: "1p0rca"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ej = M("Shield", [["path", {
    d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
    key: "oel41y"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pj = M("Smartphone", [["rect", {
    width: "14",
    height: "20",
    x: "5",
    y: "2",
    rx: "2",
    ry: "2",
    key: "1yt0o3"
}], ["path", {
    d: "M12 18h.01",
    key: "mhygvu"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const X0 = M("Sparkles", [["path", {
    d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",
    key: "17u4zn"
}], ["path", {
    d: "M5 3v4",
    key: "bklmnn"
}], ["path", {
    d: "M19 17v4",
    key: "iiml17"
}], ["path", {
    d: "M3 5h4",
    key: "nem4j1"
}], ["path", {
    d: "M17 19h4",
    key: "lbex7p"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Aj = M("Sun", [["circle", {
    cx: "12",
    cy: "12",
    r: "4",
    key: "4exip2"
}], ["path", {
    d: "M12 2v2",
    key: "tus03m"
}], ["path", {
    d: "M12 20v2",
    key: "1lh1kg"
}], ["path", {
    d: "m4.93 4.93 1.41 1.41",
    key: "149t6j"
}], ["path", {
    d: "m17.66 17.66 1.41 1.41",
    key: "ptbguv"
}], ["path", {
    d: "M2 12h2",
    key: "1t8f8n"
}], ["path", {
    d: "M20 12h2",
    key: "1q8mjw"
}], ["path", {
    d: "m6.34 17.66-1.41 1.41",
    key: "1m8zz5"
}], ["path", {
    d: "m19.07 4.93-1.41 1.41",
    key: "1shlcs"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Y0 = M("Target", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["circle", {
    cx: "12",
    cy: "12",
    r: "6",
    key: "1vlfrh"
}], ["circle", {
    cx: "12",
    cy: "12",
    r: "2",
    key: "1c9p78"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bj = M("Timer", [["line", {
    x1: "10",
    x2: "14",
    y1: "2",
    y2: "2",
    key: "14vaq8"
}], ["line", {
    x1: "12",
    x2: "15",
    y1: "14",
    y2: "11",
    key: "17fdiu"
}], ["circle", {
    cx: "12",
    cy: "14",
    r: "8",
    key: "1e1u0o"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mj = M("Trash2", [["path", {
    d: "M3 6h18",
    key: "d0wm0j"
}], ["path", {
    d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",
    key: "4alrt4"
}], ["path", {
    d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",
    key: "v07s0e"
}], ["line", {
    x1: "10",
    x2: "10",
    y1: "11",
    y2: "17",
    key: "1uufr5"
}], ["line", {
    x1: "14",
    x2: "14",
    y1: "11",
    y2: "17",
    key: "xtxkd"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dj = M("TrendingDown", [["polyline", {
    points: "22 17 13.5 8.5 8.5 13.5 2 7",
    key: "1r2t7k"
}], ["polyline", {
    points: "16 17 22 17 22 11",
    key: "11uiuu"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mo = M("TrendingUp", [["polyline", {
    points: "22 7 13.5 15.5 8.5 10.5 2 17",
    key: "126l90"
}], ["polyline", {
    points: "16 7 22 7 22 13",
    key: "kwv8wd"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rj = M("User", [["path", {
    d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
    key: "975kel"
}], ["circle", {
    cx: "12",
    cy: "7",
    r: "4",
    key: "17ys0d"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xl = M("Users", [["path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
    key: "1yyitq"
}], ["circle", {
    cx: "9",
    cy: "7",
    r: "4",
    key: "nufk8"
}], ["path", {
    d: "M22 21v-2a4 4 0 0 0-3-3.87",
    key: "kshegd"
}], ["path", {
    d: "M16 3.13a4 4 0 0 1 0 7.75",
    key: "1da9ce"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lj = M("Wallet", [["path", {
    d: "M21 12V7H5a2 2 0 0 1 0-4h14v4",
    key: "195gfw"
}], ["path", {
    d: "M3 5v14a2 2 0 0 0 2 2h16v-5",
    key: "195n9w"
}], ["path", {
    d: "M18 12a2 2 0 0 0 0 4h4v-4Z",
    key: "vllfpd"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vj = M("Waves", [["path", {
    d: "M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
    key: "knzxuh"
}], ["path", {
    d: "M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
    key: "2jd2cc"
}], ["path", {
    d: "M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
    key: "rd2r6e"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ys = M("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Q0 = M("Zap", [["polygon", {
    points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2",
    key: "45s27k"
}]]);

function _j() {
    return a.jsxs("div", {
        className: "fixed inset-0 bg-[#0A0B10] flex items-center justify-center z-50",
        children: [a.jsxs("div", {
            className: "relative",
            children: [a.jsxs(b.div, {
                className: "relative w-32 h-32",
                animate: {
                    scale: [1, 1.1, 1]
                },
                transition: {
                    duration: 3,
                    repeat: 1 / 0,
                    ease: "easeInOut"
                },
                children: [a.jsx("div", {
                    className: "absolute inset-0 rounded-2xl opacity-20 blur-xl animate-pulse"
                }), a.jsx(b.div, {
                    className: "absolute inset-0 rounded-2xl flex items-center justify-center",
                    animate: {
                        boxShadow: ["0 0 0 rgb(248, 62, 29)", "0 0 20px rgba(222, 38, 13, 0.93)", "0 0 0 rgba(255, 38, 0, 0.93)"]
                    },
                    transition: {
                        duration: 2,
                        repeat: 1 / 0
                    },
                    children: a.jsxs("div", {
                        className: "relative",
                        children: [a.jsx("img", {
                            src: "icone1.png",
                            alt: "Hacker IA Logo",
                            className: "w-60 h-25 object-contain"
                        })]
                    })
                })]
            }), a.jsxs(b.div, {
                className: "text-center mt-8",
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    delay: .5
                },
                children: [a.jsx("h1", {
                    className: "text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent mb-2",
                    children: "Hacker IA"
                }), a.jsxs("div", {
                    className: "flex items-center justify-center gap-2",
                    children: [a.jsx("div", {
                        className: "w-2 h-2 bg-blue-400 rounded-full animate-pulse"
                    }), a.jsx("p", {
                        className: "text-gray-400",
                        children: "Carregando..."
                    })]
                })]
            })]
        })]
    })
}
const q0 = "trading_signals_history";
function Ui() {
    try {
        const e = localStorage.getItem(q0);
        if (e)
            return JSON.parse(e)
    } catch (e) {
        console.error("Error reading signal history:", e)
    }
    return []
}
function Oj(e) {
    try {
        const t = Ui()
            , n = {
                ...e,
                id: Date.now().toString(),
                payout: 90
            }
            , r = [n, ...t];
        return localStorage.setItem(q0, JSON.stringify(r)),
            n
    } catch (t) {
        throw console.error("Error saving signal to history:", t),
        t
    }
}
function Fj() {
    const e = Ui()
        , t = e.length
        , n = e.filter(r => {
            const s = new Date(r.generatedAt)
                , i = new Date;
            return s.toDateString() === i.toDateString()
        }
        ).length;
    return {
        totalSignals: t,
        todaySignals: n,
        activeTraders: 1248
    }
}
const Zu = [{
    symbol: "TRUMP/USD",
    name: "Trump Token/US Dollar",
    category: "CRYPTO",
    icon: mj
}, {
    symbol: "EUR/USD",
    name: "Euro/US Dollar",
    category: "FOREX",
    flag1: "🇪🇺",
    flag2: "🇺🇸"
}, {
    symbol: "USD/BRL",
    name: "US Dollar/Brazilian Real",
    category: "FOREX",
    flag1: "🇺🇸",
    flag2: "🇧🇷"
}, {
    symbol: "AUD/CAD",
    name: "Australian/Canadian Dollar",
    category: "FOREX",
    flag1: "🇦🇺",
    flag2: "🇨🇦"
}, {
    symbol: "EUR/GBP",
    name: "Euro/British Pound",
    category: "FOREX",
    flag1: "🇪🇺",
    flag2: "🇬🇧"
}, {
    symbol: "EUR/JPY",
    name: "Euro/Japanese Yen",
    category: "FOREX",
    flag1: "🇪🇺",
    flag2: "🇯🇵"
}, {
    symbol: "USD/MXN",
    name: "US Dollar/Mexican Peso",
    category: "FOREX",
    flag1: "🇺🇸",
    flag2: "🇲🇽"
}, {
    symbol: "PEN/USD",
    name: "Peruvian Sol/US Dollar",
    category: "FOREX",
    flag1: "🇵🇪",
    flag2: "🇺🇸"
}, {
    symbol: "EUR/USD OTC",
    name: "Euro/US Dollar OTC",
    category: "FOREX_OTC",
    flag1: "🇪🇺",
    flag2: "🇺🇸"
}, {
    symbol: "USD/BRL OTC",
    name: "US Dollar/Brazilian Real OTC",
    category: "FOREX_OTC",
    flag1: "🇺🇸",
    flag2: "🇧🇷"
}, {
    symbol: "AUD/CAD OTC",
    name: "Australian/Canadian Dollar OTC",
    category: "FOREX_OTC",
    flag1: "🇦🇺",
    flag2: "🇨🇦"
}, {
    symbol: "EUR/GBP OTC",
    name: "Euro/British Pound OTC",
    category: "FOREX_OTC",
    flag1: "🇪🇺",
    flag2: "🇬🇧"
}, {
    symbol: "EUR/JPY OTC",
    name: "Euro/Japanese Yen OTC",
    category: "FOREX_OTC",
    flag1: "🇪🇺",
    flag2: "🇯🇵"
}, {
    symbol: "USD/MXN OTC",
    name: "US Dollar/Mexican Peso OTC",
    category: "FOREX_OTC",
    flag1: "🇺🇸",
    flag2: "🇲🇽"
}, {
    symbol: "BTC/USD",
    name: "Bitcoin/US Dollar",
    category: "CRYPTO",
    icon: dj
}, {
    symbol: "ETH/USD",
    name: "Ethereum/US Dollar",
    category: "CRYPTO",
    icon: Lj
}, {
    symbol: "BNB/USD",
    name: "Binance Coin/US Dollar",
    category: "CRYPTO",
    icon: Ws
}, {
    symbol: "XRP/USD",
    name: "Ripple/US Dollar",
    category: "CRYPTO",
    icon: Ws
}, {
    symbol: "ADA/USD",
    name: "Cardano/US Dollar",
    category: "CRYPTO",
    icon: Ws
}, {
    symbol: "SOL/USD",
    name: "Solana/US Dollar",
    category: "CRYPTO",
    icon: Ws
}]
    , vs = () => {
        const e = rr()
            , { t } = ue()
            , n = [{
                icon: G0,
                label: t("dashboard"),
                path: "/"
            }, {
                icon: po,
                label: t("analysis"),
                path: "/analysis"
            }, {
                icon: K0,
                label: t("history"),
                path: "/history"
            }, {
                icon: qu,
                label: t("settings"),
                path: "/settings"
            }];
        return a.jsxs("div", {
            className: "w-20 h-screen bg-[#13141C] border-r border-[#1E2030] flex flex-col items-center py-6 fixed",
            children: [a.jsx("div", {
                className: "mb-10",
                children: a.jsx(b.div, {
                    className: "w-12 h-12 rounded-xl flex items-center justify-center",
                    whileHover: {
                        scale: 1.05
                    },
                    whileTap: {
                        scale: .95
                    },
                    children: a.jsx("img", {
                        src: "i.imgur.com/icone.jpeg",
                        alt: "Hacker IA",
                        className: "w-10 h-10 object-contain"
                    })
                })
            }), a.jsx("div", {
                className: "flex-1 flex flex-col items-center gap-2 w-full px-2",
                children: n.map(r => {
                    const s = r.path === "/" && e.pathname === "/" || r.path !== "/" && e.pathname.startsWith(r.path);
                    return a.jsxs(um, {
                        to: r.path,
                        className: "relative w-full",
                        children: [a.jsxs(b.div, {
                            className: `w-full h-14 rounded-xl flex flex-col items-center justify-center gap-1 ${s ? "bg-blue-500/10 text-blue-400" : "text-gray-500 hover:text-gray-300 hover:bg-gray-800/30"} transition-colors`,
                            whileHover: {
                                y: -2
                            },
                            whileTap: {
                                y: 0
                            },
                            children: [a.jsx(r.icon, {
                                className: "w-5 h-5"
                            }), a.jsx("span", {
                                className: "text-[10px]",
                                children: r.label
                            })]
                        }), s && a.jsx(b.div, {
                            className: "absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-blue-500 rounded-r-full",
                            layoutId: "activeIndicator"
                        })]
                    }, r.path)
                }
                )
            }), a.jsx("div", {
                className: "mt-auto",
                children: a.jsx(b.div, {
                    className: "w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center cursor-pointer",
                    whileHover: {
                        scale: 1.05
                    },
                    whileTap: {
                        scale: .95
                    },
                    children: a.jsx("span", {
                        className: "text-white font-medium",
                        children: "T"
                    })
                })
            })]
        })
    }
    , Z0 = ({ onClose: e }) => {
        const { t } = ue()
            , { setTraderState: n } = gs()
            , [r, s] = x.useState("")
            , [i, o] = x.useState(!1)
            , [l, u] = x.useState("")
            , [c, d] = x.useState(!1)
            , f = async y => {
                y.preventDefault(),
                    r.trim() && (o(!0),
                        u(""),
                        setTimeout(() => {
                            o(!1),
                                d(!0),
                                n({
                                    isConnected: !0,
                                    hasFTD: !0,
                                    traderId: r.trim()
                                }),
                                setTimeout(e, 2e3)
                        }
                            , 1500))
            }
            , h = y => {
                const v = y.target.value;
                (v === "" || /^\d+$/.test(v)) && s(v)
            }
            ;
        return a.jsxs("div", {
            className: "fixed inset-0 z-50 flex items-center justify-center p-4",
            children: [a.jsx("div", {
                className: "absolute inset-0 bg-black/80 backdrop-blur-sm",
                onClick: e
            }), a.jsxs(b.div, {
                initial: {
                    scale: .9,
                    opacity: 0
                },
                animate: {
                    scale: 1,
                    opacity: 1
                },
                className: "relative w-full max-w-md bg-[#13141C] rounded-2xl border border-[#1E2030] overflow-hidden z-10",
                children: [a.jsx("button", {
                    onClick: e,
                    className: "absolute top-4 right-4 p-2 text-gray-400 hover:text-white z-20",
                    children: a.jsx(ys, {
                        className: "w-5 h-5"
                    })
                }), a.jsx("div", {
                    className: "p-6 bg-gradient-to-r from-blue-600 to-blue-700",
                    children: a.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [a.jsx("div", {
                            className: "w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center",
                            children: a.jsx(Bi, {
                                className: "w-5 h-5 text-white"
                            })
                        }), a.jsx("h2", {
                            className: "text-xl font-bold text-white",
                            children: t("connectBroker")
                        })]
                    })
                }), a.jsx("div", {
                    className: "p-6",
                    children: c ? a.jsxs(b.div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        className: "flex items-center gap-3 p-4 bg-green-500/10 text-green-400 rounded-xl",
                        children: [a.jsx(pj, {
                            className: "w-5 h-5 flex-shrink-0"
                        }), a.jsx("p", {
                            children: "Conta conectada com sucesso! Agora você pode usar os sinais de IA."
                        })]
                    }) : a.jsxs(a.Fragment, {
                        children: [a.jsxs("div", {
                            className: "flex items-center gap-3 p-4 bg-blue-500/10 text-blue-400 rounded-xl mb-6",
                            children: [a.jsx(z0, {
                                className: "w-5 h-5 flex-shrink-0"
                            }), a.jsx("p", {
                                className: "text-sm",
                                children: t("connectionRequired")
                            })]
                        }), a.jsxs("div", {
                            className: "mb-6",
                            children: [a.jsxs("h3", {
                                className: "font-medium text-white mb-2",
                                children: [t("followSteps"), ":"]
                            }), a.jsxs("ol", {
                                className: "space-y-4",
                                children: [a.jsxs("li", {
                                    className: "flex items-start gap-3",
                                    children: [a.jsx("span", {
                                        className: "flex-none w-6 h-6 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center text-sm",
                                        children: "1"
                                    }), a.jsx("p", {
                                        className: "text-gray-300 text-sm pt-1",
                                        children: t("createAccount")
                                    })]
                                }), a.jsxs("li", {
                                    className: "flex items-start gap-3",
                                    children: [a.jsx("span", {
                                        className: "flex-none w-6 h-6 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center text-sm",
                                        children: "2"
                                    }), a.jsx("p", {
                                        className: "text-gray-300 text-sm pt-1",
                                        children: t("verifyAccount")
                                    })]
                                }), a.jsxs("li", {
                                    className: "flex items-start gap-3",
                                    children: [a.jsx("span", {
                                        className: "flex-none w-6 h-6 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center text-sm",
                                        children: "3"
                                    }), a.jsx("p", {
                                        className: "text-gray-300 text-sm pt-1",
                                        children: t("returnConnect")
                                    })]
                                })]
                            })]
                        }), a.jsxs("form", {
                            onSubmit: f,
                            className: "space-y-4",
                            children: [a.jsxs("div", {
                                children: [a.jsx("label", {
                                    htmlFor: "traderId",
                                    className: "block text-sm font-medium text-gray-400 mb-1",
                                    children: t("traderId")
                                }), a.jsx("input", {
                                    type: "text",
                                    id: "traderId",
                                    inputMode: "numeric",
                                    pattern: "\\d*",
                                    value: r,
                                    onChange: h,
                                    className: "w-full bg-[#1A1C24] border border-[#2A2C34] rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500",
                                    placeholder: t("enterTraderId"),
                                    disabled: i
                                })]
                            }), l && a.jsx(b.div, {
                                initial: {
                                    opacity: 0,
                                    y: -10
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                className: "text-blue-400 text-sm",
                                children: l
                            }), a.jsxs("div", {
                                className: "flex gap-3",
                                children: [a.jsx("button", {
                                    type: "submit",
                                    disabled: i || !r.trim(),
                                    className: "flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 text-white px-4 py-2.5 rounded-lg flex items-center justify-center gap-2 transition-colors",
                                    children: i ? a.jsxs(a.Fragment, {
                                        children: [a.jsx("div", {
                                            className: "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
                                        }), a.jsx("span", {
                                            children: t("verifying")
                                        })]
                                    }) : a.jsx("span", {
                                        children: t("verify")
                                    })
                                }), a.jsxs("a", {
                                    href: "",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "flex-1 bg-[#1A1C24] hover:bg-[#252935] text-gray-300 px-4 py-2.5 rounded-lg flex items-center justify-center gap-2 transition-colors",
                                    children: [a.jsx("span", {
                                        children: t("createBrokerAccount")
                                    }), a.jsx(W0, {
                                        className: "w-4 h-4"
                                    })]
                                })]
                            })]
                        })]
                    })
                })]
            })]
        })
    }
    , xs = () => {
        const { isConnected: e } = gs()
            , { language: t, setLanguage: n, t: r } = ue()
            , [s, i] = x.useState(!1)
            , [o, l] = x.useState(!1)
            , [u, c] = x.useState(!1)
            , d = [{
                code: "pt",
                name: "Português",
                flag: "🇧🇷"
            }, {
                code: "en",
                name: "English",
                flag: "🇺🇸"
            }, {
                code: "es",
                name: "Español",
                flag: "🇪🇸"
            }];
        return a.jsxs(a.Fragment, {
            children: [a.jsxs("header", {
                className: "h-16 bg-[#13141C] border-b border-[#1E2030] px-4 lg:px-8 flex items-center justify-between sticky top-0 z-30",
                children: [a.jsxs("div", {
                    className: "flex items-center gap-4",
                    children: [a.jsx("button", {
                        className: "lg:hidden p-2 text-gray-400 hover:text-white",
                        onClick: () => l(!o),
                        children: o ? a.jsx(ys, {
                            className: "w-6 h-6"
                        }) : a.jsx(vj, {
                            className: "w-6 h-6"
                        })
                    }), a.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [
                            a.jsx("img", {
                                src: "i.imgur.com/icone1.png",
                                alt: "Hacker Infinity",
                                className: "h-12 w-24 object-contain" // Aumentando a altura e a largura para 4rem (64px)
                            }),
                            a.jsx("h1", {
                                className: "text-xl font-bold text-gradient hidden sm:block",
                                children: "Hacker Infinity"
                            })
                        ]

                    })]
                }), a.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [a.jsxs("div", {
                        className: "relative",
                        children: [a.jsxs("button", {
                            onClick: () => c(!u),
                            className: "p-2 text-gray-400 hover:text-white flex items-center gap-1",
                            children: [a.jsx(vl, {
                                className: "w-5 h-5"
                            }), a.jsx("span", {
                                className: "hidden md:inline-block text-sm uppercase",
                                children: t
                            }), a.jsx(H0, {
                                className: "w-4 h-4"
                            })]
                        }), u && a.jsx(b.div, {
                            initial: {
                                opacity: 0,
                                y: 10
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            className: "absolute right-0 mt-2 w-48 bg-[#1A1C24] rounded-xl shadow-lg border border-[#1E2030] overflow-hidden z-50",
                            children: d.map(f => a.jsxs("button", {
                                onClick: () => {
                                    n(f.code),
                                        c(!1)
                                }
                                ,
                                className: `w-full px-4 py-3 flex items-center gap-3 hover:bg-[#252935] transition-colors ${t === f.code ? "bg-[#252935] text-blue-400" : "text-gray-300"}`,
                                children: [a.jsx("span", {
                                    className: "text-xl",
                                    children: f.flag
                                }), a.jsx("span", {
                                    className: "text-sm",
                                    children: f.name
                                })]
                            }, f.code))
                        })]
                    }), a.jsxs("button", {
                        className: "p-2 text-gray-400 hover:text-white relative",
                        children: [a.jsx(yl, {
                            className: "w-5 h-5"
                        }), a.jsx("span", {
                            className: "absolute top-1 right-1 w-2 h-2 bg-blue-500 rounded-full"
                        })]
                    }), a.jsxs("button", {
                        onClick: () => i(!0),
                        className: `hidden md:flex items-center gap-2 px-3 py-1.5 rounded-xl ${e ? "bg-blue-500/10 text-blue-400 hover:bg-blue-500/20" : "bg-blue-500/10 text-blue-400 hover:bg-blue-500/20"} transition-colors`,
                        children: [a.jsx(Bi, {
                            className: "w-4 h-4"
                        }), a.jsx("span", {
                            className: "text-sm font-medium",
                            children: r(e ? "connected" : "connectBroker")
                        }), e && a.jsx(X0, {
                            className: "w-4 h-4 text-blue-400 animate-pulse"
                        })]
                    }), a.jsx(b.div, {
                        className: "w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center cursor-pointer",
                        whileHover: {
                            scale: 1.05
                        },
                        whileTap: {
                            scale: .95
                        },
                        children: a.jsx("span", {
                            className: "text-white font-medium text-sm",
                            children: "T"
                        })
                    })]
                })]
            }), o && a.jsx(b.div, {
                initial: {
                    opacity: 0,
                    height: 0
                },
                animate: {
                    opacity: 1,
                    height: "auto"
                },
                exit: {
                    opacity: 0,
                    height: 0
                },
                className: "lg:hidden bg-[#13141C] border-b border-[#1E2030] overflow-hidden",
                children: a.jsxs("div", {
                    className: "p-4 space-y-2",
                    children: [a.jsx("button", {
                        className: "w-full flex items-center justify-between p-3 text-gray-300 hover:bg-[#252935] rounded-xl",
                        children: a.jsx("span", {
                            children: r("dashboard")
                        })
                    }), a.jsx("button", {
                        className: "w-full flex items-center justify-between p-3 text-gray-300 hover:bg-[#252935] rounded-xl",
                        children: a.jsx("span", {
                            children: r("analysis")
                        })
                    }), a.jsx("button", {
                        className: "w-full flex items-center justify-between p-3 text-gray-300 hover:bg-[#252935] rounded-xl",
                        children: a.jsx("span", {
                            children: r("history")
                        })
                    }), a.jsx("button", {
                        className: "w-full flex items-center justify-between p-3 text-gray-300 hover:bg-[#252935] rounded-xl",
                        children: a.jsx("span", {
                            children: r("settings")
                        })
                    }), a.jsxs("button", {
                        onClick: () => i(!0),
                        className: `w-full mt-4 flex items-center justify-center gap-2 p-3 rounded-xl ${e ? "bg-blue-500/10 text-blue-400" : "bg-blue-500/10 text-blue-400"}`,
                        children: [a.jsx(Bi, {
                            className: "w-5 h-5"
                        }), a.jsx("span", {
                            children: r(e ? "connected" : "connectBroker")
                        })]
                    })]
                })
            }), s && a.jsx(Z0, {
                onClose: () => i(!1)
            })]
        })
    }
    , zj = ({ selectedAsset: e, onAssetSelect: t }) => {
        const [n, r] = x.useState(!1)
            , [s, i] = x.useState("FOREX")
            , [o, l] = x.useState("")
            , { t: u } = ue()
            , c = [{
                value: "FOREX",
                label: "Forex"
            }, {
                value: "FOREX_OTC",
                label: "OTC"
            }, {
                value: "CRYPTO",
                label: "Crypto"
            }]
            , d = Zu.filter(h => h.category === s).filter(h => o === "" || h.symbol.toLowerCase().includes(o.toLowerCase()) || h.name.toLowerCase().includes(o.toLowerCase()))
            , f = h => h.category === "CRYPTO" && h.icon ? a.jsx(h.icon, {
                className: "w-6 h-6 text-red-400"
            }) : h.flag1 && h.flag2 ? a.jsxs("div", {
                className: "flex items-center",
                children: [a.jsx("span", {
                    className: "text-2xl",
                    children: h.flag1
                }), a.jsx("span", {
                    className: "text-blue-400 mx-1",
                    children: "/"
                }), a.jsx("span", {
                    className: "text-2xl",
                    children: h.flag2
                })]
            }) : null;
        return a.jsxs("div", {
            className: "relative",
            children: [a.jsxs("button", {
                onClick: () => r(!n),
                className: "w-full bg-[#13141C] hover:bg-[#1A1C24] p-4 rounded-xl flex items-center justify-between border border-[#1E2030] transition-colors",
                children: [a.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [f(e), a.jsxs("div", {
                        children: [a.jsx("h3", {
                            className: "font-bold",
                            children: e.symbol
                        }), a.jsx("p", {
                            className: "text-sm text-gray-400",
                            children: e.name
                        })]
                    })]
                }), a.jsx(H0, {
                    className: `w-5 h-5 text-gray-400 transition-transform ${n ? "rotate-180" : ""}`
                })]
            }), n && a.jsxs(b.div, {
                initial: {
                    opacity: 0,
                    y: 10
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                className: "absolute top-full left-0 right-0 mt-2 bg-[#13141C] rounded-xl shadow-xl border border-[#1E2030] z-40",
                children: [a.jsx("div", {
                    className: "p-3 border-b border-[#1E2030]",
                    children: a.jsxs("div", {
                        className: "relative",
                        children: [a.jsx(Nj, {
                            className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                        }), a.jsx("input", {
                            type: "text",
                            value: o,
                            onChange: h => l(h.target.value),
                            placeholder: u("selectAsset"),
                            className: "w-full bg-[#1A1C24] border border-[#2A2C34] rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-red-500"
                        }), o && a.jsx("button", {
                            onClick: () => l(""),
                            className: "absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white",
                            children: a.jsx(ys, {
                                className: "w-4 h-4"
                            })
                        })]
                    })
                }), a.jsx("div", {
                    className: "flex border-b border-[#1E2030]",
                    children: c.map(h => a.jsx("button", {
                        onClick: () => i(h.value),
                        className: `flex-1 px-4 py-3 text-sm font-medium ${s === h.value ? "text-red-400 border-b-2 border-red-400" : "text-gray-400 hover:text-white"}`,
                        children: h.label
                    }, h.value))
                }), a.jsx("div", {
                    className: "max-h-[300px] overflow-y-auto",
                    children: d.length === 0 ? a.jsx("div", {
                        className: "p-4 text-center text-gray-400",
                        children: "Nenhum ativo encontrado"
                    }) : d.map(h => a.jsxs("button", {
                        onClick: () => {
                            t(h),
                                r(!1)
                        }
                        ,
                        className: "w-full p-3 hover:bg-[#1A1C24] flex items-center gap-3 transition-colors",
                        children: [f(h), a.jsxs("div", {
                            className: "text-left",
                            children: [a.jsx("div", {
                                className: "font-medium text-white",
                                children: h.symbol
                            }), a.jsx("div", {
                                className: "text-xs text-gray-400",
                                children: h.name
                            })]
                        })]
                    }, h.symbol))
                })]
            })]
        })
    }
    ;
function Bj() {
    return a.jsxs(b.div, {
        className: "absolute bottom-0 left-1/2 w-4 h-4",
        initial: {
            y: 0,
            opacity: 1
        },
        animate: {
            y: -200,
            opacity: [1, .8, 0]
        },
        transition: {
            duration: 1,
            ease: "easeOut"
        },
        children: [a.jsx("div", {
            className: "absolute w-4 h-4 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.8)]"
        }), [...Array(10)].map((e, t) => a.jsx(b.div, {
            className: "absolute w-1 h-1 bg-blue-400 rounded-full",
            initial: {
                x: 0,
                y: 0,
                opacity: 1
            },
            animate: {
                x: Math.random() * 40 - 20,
                y: Math.random() * 20,
                opacity: 0,
                scale: 0
            },
            transition: {
                duration: .8,
                delay: t * .08,
                ease: "easeOut"
            }
        }, t))]
    })
}
function Uj() {
    return a.jsxs(b.div, {
        className: "fixed inset-0 flex items-center justify-center z-50 pointer-events-none",
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        },
        children: [a.jsx(b.div, {
            className: "w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full",
            initial: {
                scale: 0,
                opacity: 0
            },
            animate: {
                scale: [0, 3, 0],
                opacity: [0, 1, 0]
            },
            transition: {
                duration: .8,
                ease: "easeOut"
            }
        }), [...Array(12)].map((e, t) => a.jsx(b.div, {
            className: "absolute w-2 h-8 bg-gradient-to-t from-blue-500 to-transparent rounded-full",
            initial: {
                scale: 0,
                opacity: 1,
                rotate: t * 360 / 12
            },
            animate: {
                scale: 1,
                opacity: 0,
                x: Math.cos(t * Math.PI * 2 / 12) * 100,
                y: Math.sin(t * Math.PI * 2 / 12) * 100
            },
            transition: {
                duration: .8,
                ease: "easeOut"
            },
            style: {
                transformOrigin: "center"
            }
        }, t)), a.jsx(b.div, {
            className: "absolute w-20 h-20 border-2 border-blue-400 rounded-full",
            initial: {
                scale: 0,
                opacity: 1
            },
            animate: {
                scale: 8,
                opacity: 0
            },
            transition: {
                duration: 1,
                ease: "easeOut"
            }
        })]
    })
}
function $j({ onClick: e, disabled: t }) {
    const { t: n } = ue()
        , [r, s] = x.useState(!1)
        , [i, o] = x.useState(!1)
        , l = () => {
            t || r || (s(!0),
                setTimeout(() => {
                    o(!0),
                        setTimeout(() => {
                            s(!1),
                                o(!1),
                                e()
                        }
                            , 1e3)
                }
                    , 1e3))
        }
        ;
    return a.jsxs("div", {
        className: "flex flex-col items-center gap-3",
        children: [a.jsxs("div", {
            className: "relative w-[280px]",
            children: [r && a.jsx(Bj, {}), i && a.jsx(Uj, {}), a.jsx("div", {
                className: "absolute inset-0",
                children: [...Array(8)].map((u, c) => a.jsx("div", {
                    className: "absolute w-1 h-1 bg-blue-400/30 rounded-full animate-energy-line",
                    style: {
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 2}s`
                    }
                }, c))
            }), a.jsxs("button", {
                onClick: l,
                disabled: t || r,
                className: "relative w-full h-[60px] bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-xl shadow-[0_0_20px_rgba(0,102,255,0.5)] transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group",
                children: [a.jsx("div", {
                    className: "absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-500/20 animate-pulse-opacity"
                }), a.jsxs("div", {
                    className: "relative flex items-center justify-center w-full h-full px-4",
                    children: [a.jsxs("div", {
                        className: "absolute left-4 w-[45px] h-[45px] bg-white rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.8)]",
                        children: [a.jsx("span", {
                            className: "text-[18px] font-bold text-blue-600 relative z-10",
                            children: "IA"
                        }), a.jsx("div", {
                            className: "absolute inset-0 bg-white rounded-full animate-pulse-circle"
                        })]
                    }), a.jsx("span", {
                        className: "text-[20px] font-bold text-white tracking-wider ml-16",
                        children: "HACKER IA"
                    })]
                }), a.jsx("div", {
                    className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-shine"
                })]
            })]
        }), a.jsx("p", {
            className: "text-sm text-blue-400/80 font-medium animate-pulse text-center",
            children: n("generateAiSignal")
        })]
    })
}

function Hj({ asset: e, onAssetSelect: t, onAnalyze: n }) {
    const { t: r } = ue();
    const { isConnected: s } = gs();
    const [showMenu, setShowMenu] = x.useState(false);
    const [selectedBroker, setSelectedBroker] = x.useState(null);

    const corretoras = ["Alpha Binari", "Casa Trader", "Atlas", "Iq Option", "Exnova", "Bullex", "Ebinex", "Avalon"];

    return a.jsx("div", {
        className: "flex-1 flex flex-col",
        children: a.jsxs("div", {
            className: "p-4 space-y-6",
            children: [
                a.jsx(zj, {
                    selectedAsset: e,
                    onAssetSelect: t
                }),
                a.jsx("div", {
                    style: {
                        flexDirection: "column",
                    },
                    className: "relative w-full flex items-center justify-center",
                    children: [
                        a.jsx("img", {
                            src: "icone.jpeg",
                            alt: "Trading Animation",
                            className: "w-full h-full object-contain"
                        }),

                        // Botão que exibe "Sinais para a corretora (corretora selecionada)" ou "Escolha sua corretora" caso nenhuma corretora tenha sido selecionada
                        a.jsx("button", {
                            style: {
                                backgroundColor: "red",
                                color: "white",
                                padding: "8px 16px",
                                fontSize: "14px",
                                cursor: "pointer",
                                border: "none",
                                borderRadius: "5px",
                                transition: "background-color 0.3s",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            },
                            onClick: () => setShowMenu(!showMenu),
                            children: [
                                a.jsx("i", {
                                    className: "fa fa-line-chart",
                                    style: {
                                        marginRight: "10px",
                                        fontSize: "20px"
                                    }
                                }),
                                a.jsx("font", {
                                    children: a.jsx("font", {
                                        style: { verticalAlign: "inherit" },
                                        children: selectedBroker ? `Sinais para a corretora ${selectedBroker}` : "Escolha sua corretora"
                                    }),
                                    style: { verticalAlign: "inherit" }
                                })
                            ]
                        }),

                        // Menu suspenso para escolher a corretora
                        showMenu && a.jsx("div", {
                            style: {
                                position: 'absolute',
                                backgroundColor: "#f0f0f0",
                                width: "200px",  // Ajuste a largura aqui
                                boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
                                zIndex: "1",
                                borderRadius: "5px",
                                padding: "0",
                                transition: "all 0.3s ease-in-out",
                                top: '100%',
                                left: '50%',  // Coloca o menu no meio
                                transform: 'translateX(-50%)',  // Ajusta para que o menu fique centralizado
                                marginTop: '8px',  // Adiciona um pequeno espaço entre o botão e o menu
                            },
                            children: corretoras.map(corretora =>
                                a.jsx("a", {
                                    href: "#",
                                    style: {
                                        display: "block",
                                        padding: "12px 16px",
                                        textDecoration: "none",
                                        color: "black",
                                        fontSize: "14px",
                                        transition: "background-color 0.3s, color 0.3s, transform 0.3s",
                                        textAlign: "center",
                                        borderBottom: "1px solid #ddd"
                                    },
                                    onMouseOver: (e) => {
                                        e.target.style.backgroundColor = "#FF6347";
                                        e.target.style.color = "white";
                                        e.target.style.transform = "scale(1.05)";
                                    },
                                    onMouseOut: (e) => {
                                        e.target.style.backgroundColor = "transparent";
                                        e.target.style.color = "black";
                                        e.target.style.transform = "scale(1)";
                                    },
                                    onClick: (e) => {
                                        e.preventDefault();
                                        setSelectedBroker(corretora);
                                        setShowMenu(false);
                                    },
                                    children: corretora
                                })
                            )
                        })
                    ]
                }),
                a.jsx("div", {
                    className: "space-y-3",
                    children: s ? a.jsx($j, {
                        onClick: n,
                        disabled: !1
                    }) : a.jsxs("div", {
                        className: "bg-blue-500/10 text-blue-400 p-4 rounded-xl flex items-start space-x-3",
                        children: [
                            a.jsx(z0, {
                                className: "w-5 h-5 mt-0.5 flex-shrink-0"
                            }),
                            a.jsx("p", {
                                className: "text-sm",
                                children: r("connectBrokerForSignals")
                            })
                        ]
                    })
                })
            ]
        })
    })
}


const Wj = ({ asset: e }) => {
    const t = Math.random() < .6 ? "bullish" : "bearish"
        , n = Math.floor(Math.random() * 30) + 60
        , r = Math.floor(Math.random() * 50) + 20
        , s = `$${(Math.random() * 10 + 1).toFixed(2)}B`
        , { t: i } = ue();
    return a.jsxs(b.div, {
        className: "bg-[#13141C] rounded-2xl p-6 border border-[#1E2030]",
        whileHover: {
            boxShadow: "0 0 20px rgba(0, 102, 255, 0.2)"
        },
        children: [a.jsx("h2", {
            className: "text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-500",
            children: i("marketInsights")
        }), a.jsxs("div", {
            className: "space-y-4",
            children: [a.jsxs("div", {
                className: "flex items-center justify-between",
                children: [a.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [a.jsx("div", {
                        className: `w-10 h-10 rounded-xl ${t === "bullish" ? "bg-green-500/10" : "bg-blue-500/10"} flex items-center justify-center`,
                        children: t === "bullish" ? a.jsx(mo, {
                            className: `w-5 h-5 ${t === "bullish" ? "text-green-400" : "text-blue-400"}`
                        }) : a.jsx(Dj, {
                            className: `w-5 h-5 ${t === "bullish" ? "text-green-400" : "text-blue-400"}`
                        })
                    }), a.jsxs("div", {
                        children: [a.jsx("h3", {
                            className: "font-medium",
                            children: i("marketSentiment")
                        }), a.jsx("p", {
                            className: "text-sm text-gray-400",
                            children: i("overallMarketMood")
                        })]
                    })]
                }), a.jsx("div", {
                    className: `text-lg font-bold ${t === "bullish" ? "text-green-400" : "text-blue-400"}`,
                    children: i(t === "bullish" ? "bullish" : "bearish")
                })]
            }), a.jsxs("div", {
                children: [a.jsxs("div", {
                    className: "flex justify-between mb-1",
                    children: [a.jsx("span", {
                        className: "text-sm text-gray-400",
                        children: i("sentimentStrength")
                    }), a.jsxs("span", {
                        className: "text-sm font-medium text-blue-400",
                        children: [n, "%"]
                    })]
                }), a.jsx("div", {
                    className: "h-2 bg-[#1A1C24] rounded-full overflow-hidden",
                    children: a.jsx("div", {
                        className: `h-full rounded-full ${t === "bullish" ? "bg-green-500" : "bg-blue-500"}`,
                        style: {
                            width: `${n}%`
                        }
                    })
                })]
            }), a.jsxs("div", {
                className: "flex items-center justify-between",
                children: [a.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [a.jsx("div", {
                        className: "w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center",
                        children: a.jsx(ho, {
                            className: "w-5 h-5 text-blue-400"
                        })
                    }), a.jsx("span", {
                        className: "font-medium",
                        children: i("volatility")
                    })]
                }), a.jsxs("div", {
                    className: "text-lg font-bold text-blue-400",
                    children: [r, "%"]
                })]
            }), a.jsxs("div", {
                className: "flex items-center justify-between",
                children: [a.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [a.jsx("div", {
                        className: "w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center",
                        children: a.jsx(Qu, {
                            className: "w-5 h-5 text-blue-400"
                        })
                    }), a.jsx("span", {
                        className: "font-medium",
                        children: i("volume")
                    })]
                }), a.jsx("div", {
                    className: "text-lg font-bold text-blue-400",
                    children: s
                })]
            })]
        })]
    })
}
    , Kj = () => {
        const { t: e } = ue();
        return a.jsxs(b.div, {
            className: "bg-[#13141C] rounded-2xl p-6 border border-[#1E2030]",
            whileHover: {
                boxShadow: "0 0 20px rgba(0, 102, 255, 0.2)"
            },
            children: [a.jsx("h2", {
                className: "text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-500",
                children: e("tradingActivity")
            }), a.jsxs("div", {
                className: "space-y-4",
                children: [a.jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [a.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [a.jsx("div", {
                            className: "w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center",
                            children: a.jsx(xl, {
                                className: "w-5 h-5 text-blue-400"
                            })
                        }), a.jsx("span", {
                            className: "font-medium",
                            children: e("activeTraders")
                        })]
                    }), a.jsx("div", {
                        className: "text-lg font-bold text-blue-400",
                        children: "1,248"
                    })]
                }), a.jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [a.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [a.jsx("div", {
                            className: "w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center",
                            children: a.jsx(Q0, {
                                className: "w-5 h-5 text-blue-400"
                            })
                        }), a.jsx("span", {
                            className: "font-medium",
                            children: e("signalsToday")
                        })]
                    }), a.jsx("div", {
                        className: "text-lg font-bold text-blue-400",
                        children: "8,392"
                    })]
                }), a.jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [a.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [a.jsx("div", {
                            className: "w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center",
                            children: a.jsx(Y0, {
                                className: "w-5 h-5 text-green-400"
                            })
                        }), a.jsx("span", {
                            className: "font-medium",
                            children: e("winRate")
                        })]
                    }), a.jsx("div", {
                        className: "text-lg font-bold text-green-400",
                        children: "87.4%"
                    })]
                }), a.jsxs("div", {
                    children: [a.jsxs("div", {
                        className: "flex justify-between mb-1",
                        children: [a.jsx("span", {
                            className: "text-sm text-gray-400",
                            children: e("aiAccuracy")
                        }), a.jsx("span", {
                            className: "text-sm font-medium text-blue-400",
                            children: "92%"
                        })]
                    }), a.jsx("div", {
                        className: "h-2 bg-[#1A1C24] rounded-full overflow-hidden",
                        children: a.jsx(b.div, {
                            className: "h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full",
                            style: {
                                width: "92%"
                            },
                            animate: {
                                boxShadow: ["0 0 0px rgba(0, 102, 255, 0)", "0 0 8px rgba(0, 102, 255, 0.8)", "0 0 0px rgba(0, 102, 255, 0)"]
                            },
                            transition: {
                                duration: 2,
                                repeat: 1 / 0
                            }
                        })
                    })]
                })]
            })]
        })
    }
    , Gj = () => {
        const { t: e } = ue()
            , [t, n] = x.useState(!1);
        return a.jsxs(a.Fragment, {
            children: [a.jsx(b.div, {
                className: "bg-[#13141C] rounded-2xl p-5 border border-blue-500/20",
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                whileHover: {
                    boxShadow: "0 0 20px rgba(0, 102, 255, 0.1)"
                },
                children: a.jsxs("div", {
                    className: "flex items-start gap-4",
                    children: [a.jsx("div", {
                        className: "w-10 h-10 rounded-xl bg-blue-500/10 flex-shrink-0 flex items-center justify-center",
                        children: a.jsx(B0, {
                            className: "w-5 h-5 text-blue-500"
                        })
                    }), a.jsxs("div", {
                        className: "flex-1",
                        children: [a.jsx("h3", {
                            className: "font-bold text-blue-500 mb-2",
                            children: e("connectionRequired")
                        }), a.jsx("p", {
                            className: "text-gray-400 text-sm mb-4",
                            children: e("connectBrokerForSignals")
                        }), a.jsxs("button", {
                            onClick: () => n(!0),
                            className: "inline-flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors",
                            children: [a.jsx(Bi, {
                                className: "w-4 h-4"
                            }), a.jsx("span", {
                                children: e("connectBroker")
                            })]
                        })]
                    })]
                })
            }), t && a.jsx(Z0, {
                onClose: () => n(!1)
            })]
        })
    }
    , ws = () => {
        const e = rr()
            , { t } = ue()
            , n = [{
                icon: G0,
                label: t("dashboard"),
                path: "/"
            }, {
                icon: po,
                label: t("analysis"),
                path: "/analysis"
            }, {
                icon: K0,
                label: t("history"),
                path: "/history"
            }, {
                icon: qu,
                label: t("settings"),
                path: "/settings"
            }];

        return a.jsx("div", {
            className: "fixed bottom-0 left-0 right-0 h-16 bg-[#13141C] border-t border-[#1E2030] flex items-center justify-around px-2 z-30",
            children: n.map(r => {
                const s = r.path === "/" && e.pathname === "/" || r.path !== "/" && e.pathname.startsWith(r.path);
                return a.jsx(um, {
                    to: r.path,
                    className: "relative flex flex-col items-center justify-center",
                    children: a.jsxs(b.div, {
                        className: `flex flex-col items-center justify-center ${s ? "text-blue-400" : "text-gray-500"}`,
                        whileTap: {
                            scale: .9
                        },
                        children: [a.jsx(r.icon, {
                            className: "w-5 h-5"
                        }), a.jsx("span", {
                            className: "text-[10px] mt-1",
                            children: r.label
                        }), s && a.jsx(b.div, {
                            className: "absolute -bottom-2 w-10 h-1 bg-blue-500 rounded-full",
                            layoutId: "mobileActiveIndicator"
                        })]
                    })
                }, r.path)
            }
            )
        })
    }
    , Xj = ({ selectedAsset: e = Zu[0], onAssetSelect: t, onAnalyze: n }) => {
        const { isConnected: r } = gs();
        return ue(),
            a.jsxs("div", {
                className: "flex h-screen overflow-hidden",
                children: [a.jsx("div", {
                    className: "hidden lg:block",
                    children: a.jsx(vs, {})
                }), a.jsxs("div", {
                    className: "flex-1 flex flex-col overflow-hidden",
                    children: [a.jsx(xs, {}), a.jsx("div", {
                        className: "flex-1 overflow-y-auto",
                        children: a.jsx("div", {
                            className: "max-w-7xl mx-auto",
                            children: a.jsxs("div", {
                                className: "grid grid-cols-1 xl:grid-cols-3 gap-6",
                                children: [a.jsx("div", {
                                    className: "xl:col-span-2",
                                    children: a.jsx(Hj, {
                                        asset: e,
                                        onAssetSelect: t,
                                        onAnalyze: n
                                    })
                                }), a.jsxs("div", {
                                    className: "space-y-6 p-4",
                                    children: [!r && a.jsx(Gj, {}), a.jsx(Wj, {
                                        asset: e
                                    }), a.jsx(Kj, {})]
                                })]
                            })
                        })
                    }), a.jsx("div", {
                        className: "lg:hidden",
                        children: a.jsx(ws, {})
                    })]
                })]
            })
    }
    , Yj = {
        "EUR/USD": "🇪🇺/🇺🇸",
        "GBP/USD": "🇬🇧/🇺🇸",
        "USD/JPY": "🇺🇸/🇯🇵",
        "AUD/USD": "🇦🇺/🇺🇸",
        "USD/CAD": "🇺🇸/🇨🇦",
        "USD/CHF": "🇺🇸/🇨🇭",
        "NZD/USD": "🇳🇿/🇺🇸",
        "USD/BRL": "🇺🇸/🇧🇷",
        "BTC/USD": "₿/🇺🇸",
        "ETH/USD": "Ξ/🇺🇸"
    };
function J0(e) {
    return Yj[e] || "📊"
}
const Qj = ({ duration: e, onComplete: t }) => {
    const { t: n } = ue()
        , [r, s] = x.useState(e)
        , i = r / e * 100;
    x.useEffect(() => {
        if (r <= 0) {
            t == null || t();
            return
        }
        const u = setInterval(() => {
            s(c => c - 1)
        }
            , 1e3);
        return () => clearInterval(u)
    }
        , [r, t]);
    const o = Math.floor(r / 60)
        , l = r % 60;
    return a.jsxs("div", {
        className: "space-y-2",
        children: [a.jsxs("div", {
            className: "flex items-center justify-between text-sm",
            children: [a.jsxs("div", {
                className: "flex items-center space-x-2 text-gray-400",
                children: [a.jsx(bj, {
                    className: "w-4 h-4"
                }), a.jsx("span", {
                    children: n("entryTime")
                })]
            }), a.jsxs(b.span, {
                initial: {
                    scale: 1.1,
                    color: "#818CF8"
                },
                animate: {
                    scale: 1,
                    color: "#9CA3AF"
                },
                className: "font-mono",
                children: [o.toString().padStart(2, "0"), ":", l.toString().padStart(2, "0")]
            }, r)]
        }), a.jsx("div", {
            className: "h-2 bg-[#1A1C24] rounded-full overflow-hidden",
            children: a.jsx(b.div, {
                className: "h-full bg-red-500",
                initial: {
                    width: "100%"
                },
                animate: {
                    width: `${i}%`
                },
                transition: {
                    duration: 1,
                    ease: "linear"
                }
            })
        })]
    })
}
    , eg = ({ signal: e, onClose: t }) => {
        const { t: n } = ue()
            , r = e.action === "CALL"
            , s = J0(e.asset)
            , i = ""
            , o = Math.floor(Math.random() * 15) + 85
            , l = Math.floor(Math.random() * 3) + 8
            , u = Math.floor(Math.random() * 15) + 85
            , c = () => {
                window.open(i, "_blank")
            }
            ;
        return a.jsxs(b.div, {
            className: "fixed inset-0 z-50 flex items-center justify-center p-4",
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            children: [a.jsx("div", {
                className: "absolute inset-0 bg-black/80 backdrop-blur-sm",
                onClick: t
            }), a.jsxs(b.div, {
                className: "relative w-full max-w-md bg-[#13141C]/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-[#1E2030]",
                initial: {
                    scale: .9,
                    y: 20
                },
                animate: {
                    scale: 1,
                    y: 0
                },
                children: [a.jsx(b.button, {
                    onClick: t,
                    className: "absolute top-4 right-4 p-2 rounded-full hover:bg-[#1A1C24] transition-colors z-10",
                    whileHover: {
                        scale: 1.1
                    },
                    whileTap: {
                        scale: .95
                    },
                    children: a.jsx(ys, {
                        className: "w-5 h-5 text-gray-400"
                    })
                }), a.jsxs("div", {
                    className: "p-6",
                    children: [a.jsx("div", {
                        className: "flex items-center justify-between mb-4",
                        children: a.jsxs("div", {
                            className: "flex items-center space-x-3",
                            children: [a.jsx(b.div, {
                                className: "w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 flex items-center justify-center",
                                animate: {
                                    boxShadow: ["0 0 0 rgba(168, 31, 26, 0.94)", "0 0 20px rgba(255, 69, 56, 0.93)", "0 0 0 rgba(0, 102, 255, 0.4)"]
                                },
                                transition: {
                                    duration: 2,
                                    repeat: 1 / 0
                                },
                                children: a.jsx("span", {
                                    className: "text-2xl",
                                    children: s
                                })
                            }), a.jsxs("div", {
                                children: [a.jsx("h3", {
                                    className: "text-white font-bold",
                                    children: n("signalGenerated")
                                }), a.jsxs("div", {
                                    className: "flex items-center gap-2 text-gray-400",
                                    children: [a.jsx("span", {
                                        className: "font-medium",
                                        children: e.asset
                                    }), a.jsx("span", {
                                        children: "•"
                                    }), a.jsx("span", {
                                        children: e.timeframe
                                    })]
                                })]
                            })]
                        })
                    }), a.jsxs("div", {
                        className: "grid grid-cols-3 gap-3 mb-4",
                        children: [a.jsxs("div", {
                            className: "bg-[#1A1C24] rounded-xl p-3",
                            children: [a.jsxs("div", {
                                className: "flex items-center gap-2 mb-1",
                                children: [a.jsx(Y0, {
                                    className: "w-4 h-4 text-blue-400"
                                }), a.jsx("span", {
                                    className: "text-xs text-gray-400",
                                    children: n("confidence")
                                })]
                            }), a.jsxs("div", {
                                className: "text-lg font-bold text-blue-400",
                                children: [o, "%"]
                            })]
                        }), a.jsxs("div", {
                            className: "bg-[#1A1C24] rounded-xl p-3",
                            children: [a.jsxs("div", {
                                className: "flex items-center gap-2 mb-1",
                                children: [a.jsx(Qu, {
                                    className: "w-4 h-4 text-blue-400"
                                }), a.jsx("span", {
                                    className: "text-xs text-gray-400",
                                    children: n("score")
                                })]
                            }), a.jsx("div", {
                                className: "text-lg font-bold text-blue-400",
                                children: l
                            })]
                        }), a.jsxs("div", {
                            className: "bg-[#1A1C24] rounded-xl p-3",
                            children: [a.jsxs("div", {
                                className: "flex items-center gap-2 mb-1",
                                children: [a.jsx(mo, {
                                    className: "w-4 h-4 text-blue-400"
                                }), a.jsx("span", {
                                    className: "text-xs text-gray-400",
                                    children: n("strength")
                                })]
                            }), a.jsxs("div", {
                                className: "text-lg font-bold text-blue-400",
                                children: [u, "%"]
                            })]
                        })]
                    })]
                }), a.jsx(b.div, {
                    className: `p-8 ${r ? "bg-green-500/10" : "bg-blue-500/10"}`,
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        delay: .2
                    },
                    children: a.jsxs("div", {
                        className: "flex items-center justify-center space-x-6",
                        children: [a.jsx(b.div, {
                            className: `w-20 h-20 rounded-full ${r ? "bg-green-500" : "bg-blue-500"} flex items-center justify-center`,
                            animate: {
                                scale: [1, 1.1, 1],
                                boxShadow: [`0 0 0 0 ${r ? "#10b98133" : "#ef444433"}`, `0 0 0 20px ${r ? "#10b98100" : "#ef444400"}`]
                            },
                            transition: {
                                duration: 1.5,
                                repeat: 1 / 0,
                                ease: "easeInOut"
                            },
                            children: r ? a.jsx($0, {
                                className: "w-10 h-10 text-white"
                            }) : a.jsx(U0, {
                                className: "w-10 h-10 text-white"
                            })
                        }), a.jsxs("div", {
                            className: "text-center",
                            children: [a.jsx(b.div, {
                                className: `text-3xl font-bold ${r ? "text-green-400" : "text-blue-400"}`,
                                initial: {
                                    opacity: 0,
                                    y: 10
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: .3
                                },
                                children: e.action
                            }), a.jsxs(b.div, {
                                className: "text-gray-400 mt-1",
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                transition: {
                                    delay: .4
                                },
                                children: [n("expires"), ": ", e.expirationTime]
                            })]
                        })]
                    })
                }), a.jsxs("div", {
                    className: "p-6 space-y-4 border-t border-[#1E2030]",
                    children: [a.jsx(Qj, {
                        duration: 120,
                        onComplete: t
                    })]
                })]
            })]
        })
    }
    , Of = [{
        icon: wj,
        message: "analyzing",
        color: "#0066FF",
        duration: 1500
    }, {
        icon: Vj,
        message: "processing",
        color: "#0066FF",
        duration: 1700
    }, {
        icon: cj,
        message: "running",
        color: "#0066FF",
        duration: 2e3
    }, {
        icon: fj,
        message: "generating",
        color: "#0066FF",
        duration: 1800
    }]
    , tg = ({ onClose: e }) => {
        const { t } = ue()
            , [n, r] = x.useState(0)
            , [s, i] = x.useState(0)
            , [o, l] = x.useState([]);
        return x.useEffect(() => {
            const u = Array.from({
                length: 20
            }, () => ({
                x: Math.random() * 100,
                y: Math.random() * 100
            }));
            l(u);
            let c = 0;
            Of.forEach((f, h) => {
                setTimeout(() => {
                    r(h)
                }
                    , c),
                    c += f.duration
            }
            );
            const d = setInterval(() => {
                i(f => {
                    const h = Math.random() * 1.5 + .5;
                    return Math.min(f + h, 100)
                }
                )
            }
                , 70);
            return () => {
                clearInterval(d)
            }
        }
            , []),
            a.jsxs(b.div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                exit: {
                    opacity: 0
                },
                className: "fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 z-50",
                children: [o.map((u, c) => a.jsx(b.div, {
                    className: "absolute w-1 h-1 bg-blue-400/30 rounded-full",
                    style: {
                        left: `${u.x}%`,
                        top: `${u.y}%`
                    },
                    animate: {
                        scale: [0, 1.5, 0],
                        opacity: [0, .8, 0],
                        x: [0, Math.random() * 100 - 50],
                        y: [0, Math.random() * 100 - 50]
                    },
                    transition: {
                        duration: 2,
                        repeat: 1 / 0,
                        delay: Math.random() * 2
                    }
                }, c)), a.jsxs("div", {
                    className: "max-w-md w-full relative",
                    children: [a.jsxs(b.div, {
                        className: "relative w-32 h-32 mx-auto mb-8",
                        animate: {
                            scale: [1, 1.1, 1]
                        },
                        transition: {
                            duration: 3,
                            repeat: 1 / 0,
                            ease: "easeInOut"
                        },
                        children: [a.jsx("div", {
                            className: "absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full opacity-20 blur-xl animate-pulse"
                        }), a.jsx(b.div, {
                            className: "absolute inset-0 flex items-center justify-center",
                            animate: {
                                rotate: [0, 360]
                            },
                            transition: {
                                duration: 20,
                                repeat: 1 / 0,
                                ease: "linear"
                            },
                            children: a.jsx("div", {
                                className: "w-24 h-24 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 flex items-center justify-center",
                                children: a.jsx(Q0, {
                                    className: "w-12 h-12 text-white"
                                })
                            })
                        })]
                    }), a.jsx("div", {
                        className: "space-y-6",
                        children: Of.map((u, c) => a.jsxs(b.div, {
                            initial: {
                                opacity: 0,
                                x: -20
                            },
                            animate: {
                                opacity: n >= c ? 1 : .3,
                                x: 0
                            },
                            className: "flex items-center space-x-3",
                            children: [a.jsx(u.icon, {
                                className: "w-5 h-5",
                                style: {
                                    color: n >= c ? "red" : "#4b5563"
                                }
                            }), a.jsx("div", {
                                className: "flex-1",
                                children: a.jsx("div", {
                                    className: "h-2 bg-[#1A1C24] rounded-full overflow-hidden",
                                    children: a.jsx(b.div, {
                                        className: "h-full",
                                        style: {
                                            backgroundColor: "#ef4444"
                                        },
                                        initial: {
                                            width: "0%"
                                        },
                                        animate: {
                                            width: n > c ? "100%" : n === c ? `${s}%` : "0%"
                                        },
                                        transition: {
                                            duration: .5
                                        }
                                    })
                                })
                            }), a.jsx("span", {
                                className: `text-sm ${n >= c ? "text-gray-300" : "text-gray-600"}`,
                                children: t(u.message)
                            })]
                        }, c))
                    }), a.jsxs(b.div, {
                        className: "mt-8 p-4 bg-[#1A1C24] rounded-xl border border-[#1E2030]",
                        animate: {
                            opacity: [.5, 1, .5],
                            scale: [.98, 1, .98]
                        },
                        transition: {
                            duration: 2,
                            repeat: 1 / 0
                        },
                        children: [a.jsxs("div", {
                            className: "flex items-center justify-between mb-2",
                            children: [a.jsxs("div", {
                                className: "flex items-center space-x-2",
                                children: [a.jsx(ho, {
                                    className: "w-4 h-4 text-blue-400"
                                }), a.jsx("span", {
                                    className: "text-sm text-gray-400",
                                    children: "Market Analysis"
                                })]
                            }), a.jsx(po, {
                                className: "w-4 h-4 text-blue-400"
                            })]
                        }), a.jsx("div", {
                            className: "flex space-x-1",
                            children: Array.from({
                                length: 12
                            }).map((u, c) => a.jsx(b.div, {
                                className: "flex-1 rounded-sm",
                                style: {
                                    height: `${Math.random() * 24 + 12}px`
                                },
                                animate: {
                                    height: `${Math.random() * 24 + 12}px`,
                                    backgroundColor: c % 2 ? "#FF0000" : "#FF0000"
                                },
                                transition: {
                                    duration: .5,
                                    repeat: 1 / 0
                                }
                            }, c))
                        })]
                    }), a.jsx(b.p, {
                        className: "text-center text-blue-400 mt-8",
                        animate: {
                            opacity: [.5, 1, .5]
                        },
                        transition: {
                            duration: 1.5,
                            repeat: 1 / 0
                        },
                        children: t("processingData")
                    })]
                })]
            })
    }
    , qj = () => {
        const { t: e } = ue()
            , [t, n] = x.useState(!1)
            , [r, s] = x.useState(!1)
            , [i, o] = x.useState(null);
        return a.jsxs("div", {
            className: "flex h-screen overflow-hidden",
            children: [a.jsx("div", {
                className: "hidden lg:block",
                children: a.jsx(vs, {})
            }), a.jsxs("div", {
                className: "flex-1 flex flex-col overflow-hidden",
                children: [a.jsx(xs, {}), a.jsx("div", {
                    className: "flex-1 overflow-y-auto px-4 py-6 lg:px-8",
                    children: a.jsxs("div", {
                        className: "max-w-7xl mx-auto",
                        children: [a.jsx("h1", {
                            className: "text-2xl font-bold text-gradient mb-6",
                            children: e("analysis")
                        }), a.jsxs("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6",
                            children: [a.jsxs("div", {
                                className: "bg-[#13141C] rounded-2xl p-6 border border-[#1E2030]",
                                children: [a.jsxs("div", {
                                    className: "flex items-center gap-3 mb-4",
                                    children: [a.jsx("div", {
                                        className: "w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center",
                                        children: a.jsx(po, {
                                            className: "w-5 h-5 text-red-400"
                                        })
                                    }), a.jsx("h2", {
                                        className: "text-lg font-bold",
                                        children: e("technicalAnalysis")
                                    })]
                                }), a.jsxs("div", {
                                    className: "space-y-4",
                                    children: [a.jsxs("div", {
                                        className: "flex justify-between items-center",
                                        children: [a.jsx("span", {
                                            className: "text-gray-400",
                                            children: "RSI (14)"
                                        }), a.jsxs("div", {
                                            className: "flex items-center gap-2",
                                            children: [a.jsx("span", {
                                                className: "text-red-400 font-medium",
                                                children: "58.24"
                                            }), a.jsx("span", {
                                                className: "text-green-400 text-sm",
                                                children: "Neutral"
                                            })]
                                        })]
                                    }), a.jsxs("div", {
                                        className: "flex justify-between items-center",
                                        children: [a.jsx("span", {
                                            className: "text-gray-400",
                                            children: "MACD"
                                        }), a.jsxs("div", {
                                            className: "flex items-center gap-2",
                                            children: [a.jsx("span", {
                                                className: "text-red-400 font-medium",
                                                children: "0.0012"
                                            }), a.jsx("span", {
                                                className: "text-green-400 text-sm",
                                                children: e("bullish")
                                            })]
                                        })]
                                    }), a.jsxs("div", {
                                        className: "flex justify-between items-center",
                                        children: [a.jsx("span", {
                                            className: "text-gray-400",
                                            children: "MA (50/200)"
                                        }), a.jsxs("div", {
                                            className: "flex items-center gap-2",
                                            children: [a.jsx("span", {
                                                className: "text-red-400 font-medium",
                                                children: "Cross"
                                            }), a.jsx("span", {
                                                className: "text-green-400 text-sm",
                                                children: e("bullish")
                                            })]
                                        })]
                                    }), a.jsxs("div", {
                                        className: "flex justify-between items-center",
                                        children: [a.jsx("span", {
                                            className: "text-gray-400",
                                            children: "Bollinger Bands"
                                        }), a.jsxs("div", {
                                            className: "flex items-center gap-2",
                                            children: [a.jsx("span", {
                                                className: "text-red-400 font-medium",
                                                children: "Upper"
                                            }), a.jsx("span", {
                                                className: "text-blue-400 text-sm",
                                                children: "Overbought"
                                            })]
                                        })]
                                    })]
                                })]
                            }), a.jsxs("div", {
                                className: "bg-[#13141C] rounded-2xl p-6 border border-[#1E2030]",
                                children: [a.jsxs("div", {
                                    className: "flex items-center gap-3 mb-4",
                                    children: [a.jsx("div", {
                                        className: "w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center",
                                        children: a.jsx(ho, {
                                            className: "w-5 h-5 text-purple-400"
                                        })
                                    }), a.jsx("h2", {
                                        className: "text-lg font-bold",
                                        children: e("marketSentiment")
                                    })]
                                }), a.jsxs("div", {
                                    className: "space-y-4",
                                    children: [a.jsxs("div", {
                                        children: [a.jsxs("div", {
                                            className: "flex justify-between mb-1",
                                            children: [a.jsx("span", {
                                                className: "text-gray-400",
                                                children: e("bullish")
                                            }), a.jsx("span", {
                                                className: "text-green-400 font-medium",
                                                children: "68%"
                                            })]
                                        }), a.jsx("div", {
                                            className: "h-2 bg-gray-800 rounded-full overflow-hidden",
                                            children: a.jsx("div", {
                                                className: "h-full bg-green-500 rounded-full",
                                                style: {
                                                    width: "68%"
                                                }
                                            })
                                        })]
                                    }), a.jsxs("div", {
                                        children: [a.jsxs("div", {
                                            className: "flex justify-between mb-1",
                                            children: [a.jsx("span", {
                                                className: "text-gray-400",
                                                children: e("bearish")
                                            }), a.jsx("span", {
                                                className: "text-blue-400 font-medium",
                                                children: "32%"
                                            })]
                                        }), a.jsx("div", {
                                            className: "h-2 bg-gray-800 rounded-full overflow-hidden",
                                            children: a.jsx("div", {
                                                className: "h-full bg-blue-500 rounded-full",
                                                style: {
                                                    width: "32%"
                                                }
                                            })
                                        })]
                                    }), a.jsxs("div", {
                                        className: "pt-4",
                                        children: [a.jsxs("div", {
                                            className: "flex justify-between mb-2",
                                            children: [a.jsx("span", {
                                                className: "text-gray-400",
                                                children: e("overallMarketMood")
                                            }), a.jsx("span", {
                                                className: "text-green-400 font-medium",
                                                children: e("bullish")
                                            })]
                                        }), a.jsx("div", {
                                            className: "p-3 bg-green-500/10 rounded-lg",
                                            children: a.jsx("p", {
                                                className: "text-sm text-gray-300",
                                                children: "O sentimento do mercado está atualmente otimista com fortes indicadores de momentum. Os traders estão mostrando confiança no movimento ascendente de preços."
                                            })
                                        })]
                                    })]
                                })]
                            }), a.jsxs("div", {
                                className: "bg-[#13141C] rounded-2xl p-6 border border-[#1E2030]",
                                children: [a.jsxs("div", {
                                    className: "flex items-center gap-3 mb-4",
                                    children: [a.jsx("div", {
                                        className: "w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center",
                                        children: a.jsx(Qu, {
                                            className: "w-5 h-5 text-teal-400"
                                        })
                                    }), a.jsx("h2", {
                                        className: "text-lg font-bold",
                                        children: e("volume")
                                    })]
                                }), a.jsxs("div", {
                                    className: "space-y-4",
                                    children: [a.jsxs("div", {
                                        className: "flex justify-between items-center",
                                        children: [a.jsx("span", {
                                            className: "text-gray-400",
                                            children: e("volume")
                                        }), a.jsx("span", {
                                            className: "text-teal-400 font-medium",
                                            children: "$1.24B"
                                        })]
                                    }), a.jsxs("div", {
                                        className: "flex justify-between items-center",
                                        children: [a.jsx("span", {
                                            className: "text-gray-400",
                                            children: "Volume Change"
                                        }), a.jsxs("div", {
                                            className: "flex items-center gap-1",
                                            children: [a.jsx(mo, {
                                                className: "w-4 h-4 text-green-400"
                                            }), a.jsx("span", {
                                                className: "text-green-400 font-medium",
                                                children: "+12.4%"
                                            })]
                                        })]
                                    }), a.jsxs("div", {
                                        className: "flex justify-between items-center",
                                        children: [a.jsx("span", {
                                            className: "text-gray-400",
                                            children: "Buy Volume"
                                        }), a.jsx("span", {
                                            className: "text-green-400 font-medium",
                                            children: "58%"
                                        })]
                                    }), a.jsxs("div", {
                                        className: "flex justify-between items-center",
                                        children: [a.jsx("span", {
                                            className: "text-gray-400",
                                            children: "Sell Volume"
                                        }), a.jsx("span", {
                                            className: "text-blue-400 font-medium",
                                            children: "42%"
                                        })]
                                    })]
                                })]
                            })]
                        })]
                    })
                }), a.jsx("div", {
                    className: "lg:hidden",
                    children: a.jsx(ws, {})
                })]
            }), t && a.jsx(tg, {
                onClose: () => n(!1)
            }), r && i && a.jsx(eg, {
                signal: i,
                onClose: () => s(!1)
            })]
        })
    }
    , Zj = () => {
        const [e, t] = x.useState(Ui())
            , n = Fj()
            , [r, s] = x.useState("all")
            , { t: i } = ue()
            , o = r === "all" ? e : e.filter(l => l.action === r.toUpperCase());
        return a.jsxs("div", {
            className: "flex h-screen overflow-hidden",
            children: [a.jsx("div", {
                className: "hidden lg:block",
                children: a.jsx(vs, {})
            }), a.jsxs("div", {
                className: "flex-1 flex flex-col overflow-hidden",
                children: [a.jsx(xs, {}), a.jsx("div", {
                    className: "flex-1 overflow-y-auto px-4 py-6 lg:px-8",
                    children: a.jsxs("div", {
                        className: "max-w-7xl mx-auto",
                        children: [a.jsxs("div", {
                            className: "flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6",
                            children: [a.jsx("h1", {
                                className: "text-2xl font-bold text-gradient",
                                children: i("history")
                            }), a.jsxs("div", {
                                className: "flex items-center gap-3",
                                children: [a.jsx("div", {
                                    className: "relative",
                                    children: a.jsxs("div", {
                                        className: "flex items-center gap-2 px-4 py-2 bg-[#13141C] rounded-xl border border-[#1E2030]",
                                        children: [a.jsx(yj, {
                                            className: "w-4 h-4 text-red-400"
                                        }), a.jsxs("select", {
                                            className: "bg-transparent text-gray-300 focus:outline-none",
                                            value: r,
                                            onChange: l => s(l.target.value),
                                            children: [a.jsx("option", {
                                                value: "all",
                                                children: i("allSignals")
                                            }), a.jsx("option", {
                                                value: "call",
                                                children: i("callOnly")
                                            }), a.jsx("option", {
                                                value: "put",
                                                children: i("putOnly")
                                            })]
                                        })]
                                    })
                                }), a.jsx("button", {
                                    onClick: () => t(Ui()),
                                    className: "p-2 bg-[#13141C] rounded-xl border border-[#1E2030] text-gray-400 hover:text-white transition-colors",
                                    children: a.jsx(kj, {
                                        className: "w-5 h-5"
                                    })
                                })]
                            })]
                        }), a.jsxs("div", {
                            className: "grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8",
                            children: [a.jsx(b.div, {
                                className: "bg-[#13141C] p-5 rounded-2xl border border-[#1E2030]",
                                whileHover: {
                                    y: -5,
                                    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)"
                                },
                                transition: {
                                    duration: .2
                                },
                                children: a.jsxs("div", {
                                    className: "flex items-center gap-3 mb-2",
                                    children: [a.jsx("div", {
                                        className: "w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center",
                                        children: a.jsx(mo, {
                                            className: "w-5 h-5 text-red-400"
                                        })
                                    }), a.jsxs("div", {
                                        children: [a.jsx("h3", {
                                            className: "text-sm text-gray-400",
                                            children: i("totalSignals")
                                        }), a.jsx("p", {
                                            className: "text-2xl font-bold",
                                            children: n.totalSignals
                                        })]
                                    })]
                                })
                            }), a.jsx(b.div, {
                                className: "bg-[#13141C] p-5 rounded-2xl border border-[#1E2030]",
                                whileHover: {
                                    y: -5,
                                    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)"
                                },
                                transition: {
                                    duration: .2
                                },
                                children: a.jsxs("div", {
                                    className: "flex items-center gap-3 mb-2",
                                    children: [a.jsx("div", {
                                        className: "w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center",
                                        children: a.jsx(hj, {
                                            className: "w-5 h-5 text-blue-400"
                                        })
                                    }), a.jsxs("div", {
                                        children: [a.jsx("h3", {
                                            className: "text-sm text-gray-400",
                                            children: i("todaySignals")
                                        }), a.jsx("p", {
                                            className: "text-2xl font-bold",
                                            children: n.todaySignals
                                        })]
                                    })]
                                })
                            }), a.jsx(b.div, {
                                className: "bg-[#13141C] p-5 rounded-2xl border border-[#1E2030]",
                                whileHover: {
                                    y: -5,
                                    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)"
                                },
                                transition: {
                                    duration: .2
                                },
                                children: a.jsxs("div", {
                                    className: "flex items-center gap-3 mb-2",
                                    children: [a.jsx("div", {
                                        className: "w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center",
                                        children: a.jsx(ho, {
                                            className: "w-5 h-5 text-purple-400"
                                        })
                                    }), a.jsxs("div", {
                                        children: [a.jsx("h3", {
                                            className: "text-sm text-gray-400",
                                            children: i("activeTraders")
                                        }), a.jsx("p", {
                                            className: "text-2xl font-bold",
                                            children: n.activeTraders
                                        })]
                                    })]
                                })
                            })]
                        }), a.jsx("div", {
                            className: "space-y-4",
                            children: o.length === 0 ? a.jsx("div", {
                                className: "bg-[#13141C] p-8 rounded-2xl border border-[#1E2030] text-center",
                                children: a.jsx("p", {
                                    className: "text-gray-400",
                                    children: "Nenhum sinal encontrado"
                                })
                            }) : o.map((l, u) => a.jsx(b.div, {
                                className: "bg-[#13141C] rounded-2xl border border-[#1E2030] overflow-hidden",
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: u * .05
                                },
                                children: a.jsxs("div", {
                                    className: "p-5",
                                    children: [a.jsxs("div", {
                                        className: "flex items-center justify-between mb-3",
                                        children: [a.jsxs("div", {
                                            className: "flex items-center gap-3",
                                            children: [a.jsx("div", {
                                                className: `w-12 h-12 rounded-xl ${l.action === "CALL" ? "bg-green-500/10" : "bg-blue-500/10"} flex items-center justify-center`,
                                                children: l.action === "CALL" ? a.jsx($0, {
                                                    className: "w-6 h-6 text-green-400"
                                                }) : a.jsx(U0, {
                                                    className: "w-6 h-6 text-blue-400"
                                                })
                                            }), a.jsxs("div", {
                                                children: [a.jsxs("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [a.jsx("span", {
                                                        className: "text-2xl",
                                                        children: J0(l.asset)
                                                    }), a.jsx("h3", {
                                                        className: "text-lg font-bold",
                                                        children: l.asset
                                                    })]
                                                }), a.jsxs("div", {
                                                    className: "flex items-center gap-2 text-sm text-gray-400",
                                                    children: [a.jsx("span", {
                                                        children: l.timeframe
                                                    }), a.jsx("span", {
                                                        children: "•"
                                                    }), a.jsx("span", {
                                                        children: l.generatedAt
                                                    })]
                                                })]
                                            })]
                                        }), a.jsxs("div", {
                                            className: "text-right",
                                            children: [a.jsx("div", {
                                                className: `text-lg font-bold ${l.action === "CALL" ? "text-green-400" : "text-blue-400"}`,
                                                children: l.action
                                            }), a.jsxs("div", {
                                                className: "text-sm text-gray-400",
                                                children: [i("expires"), ": ", l.expirationTime]
                                            })]
                                        })]
                                    }), a.jsxs("div", {
                                        className: "flex items-center justify-between text-sm",
                                        children: [a.jsxs("div", {
                                            className: "text-gray-400",
                                            children: [i("payout"), ": ", a.jsxs("span", {
                                                className: "text-red-400 font-medium",
                                                children: [l.payout, "%"]
                                            })]
                                        }), l.result && a.jsx("div", {
                                            className: `px-3 py-1 rounded-full ${l.result === "win" ? "bg-green-500/10 text-green-400" : l.result === "loss" ? "bg-blue-500/10 text-blue-400" : "bg-gray-500/10 text-gray-400"}`,
                                            children: l.result === "win" ? i("win") : l.result === "loss" ? i("loss") : i("pending")
                                        })]
                                    })]
                                })
                            }, l.id))
                        })]
                    })
                }), a.jsx("div", {
                    className: "lg:hidden",
                    children: a.jsx(ws, {})
                })]
            })]
        })
    }
    , Jj = () => {
        const { t: e } = ue();
        return a.jsxs("div", {
            className: "flex h-screen overflow-hidden",
            children: [a.jsx("div", {
                className: "hidden lg:block",
                children: a.jsx(vs, {})
            }), a.jsxs("div", {
                className: "flex-1 flex flex-col overflow-hidden",
                children: [a.jsx(xs, {}), a.jsx("div", {
                    className: "flex-1 overflow-y-auto px-4 py-6 lg:px-8",
                    children: a.jsxs("div", {
                        className: "max-w-7xl mx-auto",
                        children: [a.jsx("div", {
                            className: "flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8",
                            children: a.jsxs("div", {
                                children: [a.jsx("h1", {
                                    className: "text-2xl font-bold text-gradient",
                                    children: e("education")
                                }), a.jsx("p", {
                                    className: "text-gray-400 mt-1",
                                    children: "Aprimore suas habilidades de trading com nossos cursos completos"
                                })]
                            })
                        }), a.jsxs("div", {
                            className: "relative rounded-2xl overflow-hidden mb-10",
                            children: [a.jsx("div", {
                                className: "absolute inset-0 bg-gradient-to-r from-red-600 to-purple-600 opacity-90"
                            }), a.jsx("img", {
                                src: "https://images.unsplash.com/photo-1642790551116-18e150f248e5?q=80&w=2070&auto=format&fit=crop",
                                alt: "Featured Course",
                                className: "w-full h-64 object-cover"
                            }), a.jsxs("div", {
                                className: "absolute inset-0 flex flex-col justify-end p-6",
                                children: [a.jsx("div", {
                                    className: "flex items-center gap-2 mb-2",
                                    children: a.jsx("div", {
                                        className: "px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm",
                                        children: e("featuredCourse")
                                    })
                                }), a.jsx("h2", {
                                    className: "text-2xl font-bold text-white mb-2",
                                    children: "Curso em Breve"
                                }), a.jsx("p", {
                                    className: "text-white/80 mb-4 max-w-2xl",
                                    children: "Estamos preparando um conteúdo exclusivo para você aprimorar suas habilidades de trading. Fique atento às novidades!"
                                }), a.jsxs("div", {
                                    className: "flex flex-wrap items-center gap-4 mb-4",
                                    children: [a.jsxs("div", {
                                        className: "flex items-center gap-2 text-white/80",
                                        children: [a.jsx(If, {
                                            className: "w-4 h-4"
                                        }), a.jsx("span", {
                                            children: "3.5h"
                                        })]
                                    }), a.jsxs("div", {
                                        className: "flex items-center gap-2 text-white/80",
                                        children: [a.jsx(Vf, {
                                            className: "w-4 h-4"
                                        }), a.jsx("span", {
                                            children: "5 módulos"
                                        })]
                                    }), a.jsxs("div", {
                                        className: "flex items-center gap-2 text-white/80",
                                        children: [a.jsx(xl, {
                                            className: "w-4 h-4"
                                        }), a.jsx("span", {
                                            children: "8,795 alunos"
                                        })]
                                    })]
                                }), a.jsxs("button", {
                                    className: "px-6 py-3 bg-white text-red-600 rounded-xl font-medium hover:bg-white/90 transition-colors inline-flex items-center gap-2 self-start",
                                    children: [a.jsx(Sj, {
                                        className: "w-4 h-4"
                                    }), "Em breve"]
                                })]
                            })]
                        }), a.jsxs("div", {
                            className: "bg-[#13141C] rounded-2xl p-8 text-center border border-[#1E2030]",
                            children: [a.jsx("div", {
                                className: "w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6",
                                children: a.jsx(zi, {
                                    className: "w-10 h-10 text-red-400"
                                })
                            }), a.jsx("h2", {
                                className: "text-2xl font-bold text-white mb-4",
                                children: "Conteúdo em Desenvolvimento"
                            }), a.jsx("p", {
                                className: "text-gray-400 mb-6 max-w-2xl mx-auto",
                                children: "Estamos trabalhando em um conteúdo educacional completo para ajudar você a dominar o mercado financeiro. Em breve, você terá acesso a cursos, vídeos e materiais exclusivos."
                            }), a.jsxs("div", {
                                className: "grid grid-cols-3 gap-4 max-w-md mx-auto mb-8",
                                children: [a.jsxs("div", {
                                    className: "bg-[#1A1C24] p-4 rounded-lg text-center",
                                    children: [a.jsx(If, {
                                        className: "w-6 h-6 text-blue-400 mx-auto mb-2"
                                    }), a.jsx("div", {
                                        className: "text-sm text-gray-400",
                                        children: "Duração"
                                    }), a.jsx("div", {
                                        className: "text-white font-medium",
                                        children: "3.5h"
                                    })]
                                }), a.jsxs("div", {
                                    className: "bg-[#1A1C24] p-4 rounded-lg text-center",
                                    children: [a.jsx(Vf, {
                                        className: "w-6 h-6 text-emerald-400 mx-auto mb-2"
                                    }), a.jsx("div", {
                                        className: "text-sm text-gray-400",
                                        children: "Módulos"
                                    }), a.jsx("div", {
                                        className: "text-white font-medium",
                                        children: "5"
                                    })]
                                }), a.jsxs("div", {
                                    className: "bg-[#1A1C24] p-4 rounded-lg text-center",
                                    children: [a.jsx(xl, {
                                        className: "w-6 h-6 text-purple-400 mx-auto mb-2"
                                    }), a.jsx("div", {
                                        className: "text-sm text-gray-400",
                                        children: "Alunos"
                                    }), a.jsx("div", {
                                        className: "text-white font-medium",
                                        children: "8795"
                                    })]
                                })]
                            }), a.jsxs("button", {
                                className: "px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-medium transition-colors inline-flex items-center gap-2",
                                children: [a.jsx(zi, {
                                    className: "w-5 h-5"
                                }), a.jsx("span", {
                                    children: "Seja notificado quando lançarmos"
                                })]
                            })]
                        })]
                    })
                }), a.jsx("div", {
                    className: "lg:hidden",
                    children: a.jsx(ws, {})
                })]
            })]
        })
    }
    , ek = () => {
        const { isConnected: e, traderId: t, logout: n } = gs()
            , { language: r, setLanguage: s, t: i } = ue()
            , [o, l] = x.useState(!0)
            , [u, c] = x.useState(!0)
            , [d, f] = x.useState("medium")
            , [h, y] = x.useState(!1);
        return a.jsxs("div", {
            className: "flex h-screen overflow-hidden",
            children: [a.jsx("div", {
                className: "hidden lg:block",
                children: a.jsx(vs, {})
            }), a.jsxs("div", {
                className: "flex-1 flex flex-col overflow-hidden",
                children: [a.jsx(xs, {}), a.jsx("div", {
                    className: "flex-1 overflow-y-auto px-4 py-6 lg:px-8",
                    children: a.jsxs("div", {
                        className: "max-w-4xl mx-auto",
                        children: [a.jsxs("div", {
                            className: "flex items-center gap-3 mb-8",
                            children: [a.jsx("div", {
                                className: "w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center",
                                children: a.jsx(qu, {
                                    className: "w-6 h-6 text-red-400"
                                })
                            }), a.jsx("h1", {
                                className: "text-2xl font-bold text-gradient",
                                children: i("settings")
                            })]
                        }), a.jsxs("div", {
                            className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
                            children: [a.jsx("div", {
                                className: "lg:col-span-1",
                                children: a.jsxs("div", {
                                    className: "bg-[#13141C] rounded-2xl border border-[#1E2030] overflow-hidden",
                                    children: [a.jsx("div", {
                                        className: "p-5 border-b border-[#1E2030]",
                                        children: a.jsx("h2", {
                                            className: "font-bold",
                                            children: "Menu de Configurações"
                                        })
                                    }), a.jsxs("div", {
                                        className: "p-2",
                                        children: [a.jsxs("button", {
                                            className: "w-full flex items-center gap-3 p-3 bg-red-500/10 text-red-400 rounded-xl",
                                            children: [a.jsx(Rj, {
                                                className: "w-5 h-5"
                                            }), a.jsx("span", {
                                                children: "Conta"
                                            })]
                                        }), a.jsxs("button", {
                                            className: "w-full flex items-center gap-3 p-3 text-gray-400 hover:bg-gray-800/30 rounded-xl mt-1",
                                            children: [a.jsx(yl, {
                                                className: "w-5 h-5"
                                            }), a.jsx("span", {
                                                children: i("notifications")
                                            })]
                                        }), a.jsxs("button", {
                                            className: "w-full flex items-center gap-3 p-3 text-gray-400 hover:bg-gray-800/30 rounded-xl mt-1",
                                            children: [a.jsx(vl, {
                                                className: "w-5 h-5"
                                            }), a.jsx("span", {
                                                children: i("language")
                                            })]
                                        }), a.jsxs("button", {
                                            className: "w-full flex items-center gap-3 p-3 text-gray-400 hover:bg-gray-800/30 rounded-xl mt-1",
                                            children: [a.jsx(Ej, {
                                                className: "w-5 h-5"
                                            }), a.jsx("span", {
                                                children: "Segurança"
                                            })]
                                        })]
                                    })]
                                })
                            }), a.jsxs("div", {
                                className: "lg:col-span-2 space-y-6",
                                children: [a.jsxs(b.div, {
                                    className: "bg-[#13141C] rounded-2xl border border-[#1E2030] overflow-hidden",
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    children: [a.jsxs("div", {
                                        className: "p-5 border-b border-[#1E2030] flex justify-between items-center",
                                        children: [a.jsx("h2", {
                                            className: "font-bold",
                                            children: i("accountSettings")
                                        }), a.jsxs("div", {
                                            className: "flex items-center gap-2",
                                            children: [a.jsx("span", {
                                                className: `w-2 h-2 rounded-full ${e ? "bg-green-400" : "bg-blue-400"}`
                                            }), a.jsx("span", {
                                                className: "text-sm text-gray-400",
                                                children: i(e ? "connected" : "disconnected")
                                            })]
                                        })]
                                    }), a.jsxs("div", {
                                        className: "p-5 space-y-5",
                                        children: [a.jsxs("div", {
                                            children: [a.jsx("label", {
                                                className: "block text-sm text-gray-400 mb-2",
                                                children: i("traderId")
                                            }), a.jsx("input", {
                                                type: "text",
                                                value: t || "",
                                                readOnly: !0,
                                                className: "w-full bg-[#1A1C24] border border-[#2A2C34] rounded-xl px-4 py-3 text-white"
                                            })]
                                        }), a.jsxs("div", {
                                            children: [a.jsx("label", {
                                                className: "block text-sm text-gray-400 mb-2",
                                                children: i("riskLevel")
                                            }), a.jsxs("select", {
                                                value: d,
                                                onChange: v => f(v.target.value),
                                                className: "w-full bg-[#1A1C24] border border-[#2A2C34] rounded-xl px-4 py-3 text-white",
                                                children: [a.jsx("option", {
                                                    value: "low",
                                                    children: i("lowRisk")
                                                }), a.jsx("option", {
                                                    value: "medium",
                                                    children: i("mediumRisk")
                                                }), a.jsx("option", {
                                                    value: "high",
                                                    children: i("highRisk")
                                                })]
                                            })]
                                        }), a.jsxs("div", {
                                            className: "flex items-center justify-between",
                                            children: [a.jsxs("div", {
                                                className: "flex items-center gap-3",
                                                children: [a.jsx("div", {
                                                    className: "w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center",
                                                    children: a.jsx(yl, {
                                                        className: "w-5 h-5 text-red-400"
                                                    })
                                                }), a.jsxs("div", {
                                                    children: [a.jsx("h3", {
                                                        className: "font-medium",
                                                        children: i("notifications")
                                                    }), a.jsx("p", {
                                                        className: "text-sm text-gray-400",
                                                        children: i("receiveSignalAlerts")
                                                    })]
                                                })]
                                            }), a.jsxs("label", {
                                                className: "relative inline-flex items-center cursor-pointer",
                                                children: [a.jsx("input", {
                                                    type: "checkbox",
                                                    checked: u,
                                                    onChange: () => c(!u),
                                                    className: "sr-only peer"
                                                }), a.jsx("div", {
                                                    className: "w-11 h-6 bg-gray-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"
                                                })]
                                            })]
                                        }), a.jsxs("div", {
                                            className: "flex items-center justify-between",
                                            children: [a.jsxs("div", {
                                                className: "flex items-center gap-3",
                                                children: [a.jsx("div", {
                                                    className: "w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center",
                                                    children: o ? a.jsx(xj, {
                                                        className: "w-5 h-5 text-red-400"
                                                    }) : a.jsx(Aj, {
                                                        className: "w-5 h-5 text-red-400"
                                                    })
                                                }), a.jsxs("div", {
                                                    children: [a.jsx("h3", {
                                                        className: "font-medium",
                                                        children: i("darkMode")
                                                    }), a.jsx("p", {
                                                        className: "text-sm text-gray-400",
                                                        children: i("toggleTheme")
                                                    })]
                                                })]
                                            }), a.jsxs("label", {
                                                className: "relative inline-flex items-center cursor-pointer",
                                                children: [a.jsx("input", {
                                                    type: "checkbox",
                                                    checked: o,
                                                    onChange: () => l(!o),
                                                    className: "sr-only peer"
                                                }), a.jsx("div", {
                                                    className: "w-11 h-6 bg-gray-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"
                                                })]
                                            })]
                                        }), a.jsxs("div", {
                                            className: "flex items-center justify-between",
                                            children: [a.jsxs("div", {
                                                className: "flex items-center gap-3",
                                                children: [a.jsx("div", {
                                                    className: "w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center",
                                                    children: a.jsx(vl, {
                                                        className: "w-5 h-5 text-red-400"
                                                    })
                                                }), a.jsxs("div", {
                                                    children: [a.jsx("h3", {
                                                        className: "font-medium",
                                                        children: i("language")
                                                    }), a.jsx("p", {
                                                        className: "text-sm text-gray-400",
                                                        children: i("selectLanguage")
                                                    })]
                                                })]
                                            }), a.jsxs("select", {
                                                value: r,
                                                onChange: v => s(v.target.value),
                                                className: "bg-[#1A1C24] border border-[#2A2C34] rounded-xl px-3 py-2 text-white",
                                                children: [a.jsx("option", {
                                                    value: "en",
                                                    children: "English"
                                                }), a.jsx("option", {
                                                    value: "pt",
                                                    children: "Português"
                                                }), a.jsx("option", {
                                                    value: "es",
                                                    children: "Español"
                                                })]
                                            })]
                                        })]
                                    }), a.jsxs("div", {
                                        className: "p-5 border-t border-[#1E2030] flex justify-between",
                                        children: [a.jsxs("button", {
                                            onClick: () => y(!0),
                                            className: "px-4 py-2 bg-blue-500/10 text-blue-400 rounded-xl flex items-center gap-2 hover:bg-blue-500/20 transition-colors",
                                            children: [a.jsx(_f, {
                                                className: "w-4 h-4"
                                            }), a.jsx("span", {
                                                children: i("logout")
                                            })]
                                        }), a.jsxs("button", {
                                            className: "px-4 py-2 bg-red-600 text-white rounded-xl flex items-center gap-2 hover:bg-red-700 transition-colors",
                                            children: [a.jsx(Cj, {
                                                className: "w-4 h-4"
                                            }), a.jsx("span", {
                                                children: i("saveChanges")
                                            })]
                                        })]
                                    })]
                                }), a.jsxs(b.div, {
                                    className: "bg-[#13141C] rounded-2xl border border-blue-500/20 overflow-hidden",
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        delay: .2
                                    },
                                    children: [a.jsxs("div", {
                                        className: "p-5 border-b border-[#1E2030] flex items-center gap-3",
                                        children: [a.jsx(B0, {
                                            className: "w-5 h-5 text-blue-400"
                                        }), a.jsx("h2", {
                                            className: "font-bold text-blue-400",
                                            children: i("dangerZone")
                                        })]
                                    }), a.jsx("div", {
                                        className: "p-5",
                                        children: a.jsxs("div", {
                                            className: "flex items-center justify-between",
                                            children: [a.jsxs("div", {
                                                children: [a.jsx("h3", {
                                                    className: "font-medium",
                                                    children: i("deleteAccount")
                                                }), a.jsx("p", {
                                                    className: "text-sm text-gray-400",
                                                    children: i("deleteAccountDesc")
                                                })]
                                            }), a.jsxs("button", {
                                                className: "px-4 py-2 bg-blue-500/10 text-blue-400 rounded-xl flex items-center gap-2 hover:bg-blue-500/20 transition-colors",
                                                children: [a.jsx(Mj, {
                                                    className: "w-4 h-4"
                                                }), a.jsx("span", {
                                                    children: i("delete")
                                                })]
                                            })]
                                        })
                                    })]
                                })]
                            })]
                        })]
                    })
                }), a.jsx("div", {
                    className: "lg:hidden",
                    children: a.jsx(ws, {})
                })]
            }), h && a.jsx("div", {
                className: "fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4",
                children: a.jsxs(b.div, {
                    className: "bg-[#13141C] rounded-2xl border border-[#1E2030] max-w-md w-full p-6",
                    initial: {
                        scale: .9,
                        opacity: 0
                    },
                    animate: {
                        scale: 1,
                        opacity: 1
                    },
                    children: [a.jsxs("div", {
                        className: "flex items-center gap-3 mb-4",
                        children: [a.jsx("div", {
                            className: "w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center",
                            children: a.jsx(_f, {
                                className: "w-5 h-5 text-blue-400"
                            })
                        }), a.jsx("h3", {
                            className: "text-xl font-bold",
                            children: i("confirmLogout")
                        })]
                    }), a.jsx("p", {
                        className: "text-gray-400 mb-6",
                        children: i("logoutWarning")
                    }), a.jsxs("div", {
                        className: "flex items-center justify-end gap-3",
                        children: [a.jsx("button", {
                            onClick: () => y(!1),
                            className: "px-4 py-2 text-gray-400 hover:text-white transition-colors",
                            children: i("cancel")
                        }), a.jsx("button", {
                            onClick: () => {
                                n(),
                                    y(!1)
                            }
                            ,
                            className: "px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors",
                            children: i("logout")
                        })]
                    })]
                })
            })]
        })
    }
    ;
function tk() {
    const [e, t] = x.useState(!0)
        , [n, r] = x.useState(!1)
        , [s, i] = x.useState(!1)
        , [o, l] = x.useState(Zu[0])
        , [u, c] = x.useState(null);
    x.useEffect(() => {
        const f = setTimeout(() => {
            t(!1)
        }
            , 2e3);
        return () => clearTimeout(f)
    }
        , []);
    const d = () => {
        r(!0),
            setTimeout(() => {
                r(!1);
                const f = Math.random() < .6 ? "CALL" : "PUT"
                    , h = new Date(Date.now() + 2 * 60 * 1e3).toLocaleTimeString()
                    , y = {
                        asset: o.symbol,
                        action: f,
                        timeframe: "M1",
                        expirationTime: h,
                        generatedAt: new Date().toLocaleTimeString()
                    };
                c(y),
                    Oj(y),
                    i(!0)
            }
                , 9e3)
    }
        ;
    return e ? a.jsx(_j, {}) : a.jsx(sj, {
        children: a.jsx(aj, {
            children: a.jsx(Ax, {
                children: a.jsxs("div", {
                    className: "min-h-screen bg-black text-white font-sans pb-20 lg:pb-0",
                    children: [a.jsxs(jx, {
                        children: [a.jsx(xn, {
                            path: "/",
                            element: a.jsx(Xj, {
                                selectedAsset: o,
                                onAssetSelect: l,
                                onAnalyze: d
                            })
                        }), a.jsx(xn, {
                            path: "/analysis",
                            element: a.jsx(qj, {})
                        }), a.jsx(xn, {
                            path: "/history",
                            element: a.jsx(Zj, {})
                        }), a.jsx(xn, {
                            path: "/settings",
                            element: a.jsx(ek, {})
                        })]
                    }), a.jsxs(I0, {
                        children: [n && a.jsx(tg, {
                            onClose: () => r(!1)
                        }), s && u && a.jsx(eg, {
                            signal: u,
                            onClose: () => i(!1)
                        })]
                    })]
                })
            })
        })
    })
}
"serviceWorker" in navigator && window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").then(e => {
        console.log("SW registered:", e)
    }
    ).catch(e => {
        console.log("SW registration failed:", e)
    }
    )
}
);
qp(document.getElementById("root")).render(a.jsx(x.StrictMode, {
    children: a.jsx(tk, {})
}));
