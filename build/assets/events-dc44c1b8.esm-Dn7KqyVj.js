import {W as e, a1 as t, O as n, P as r, k as l, h as a, aN as o, j as i, aO as u, aP as s, an as c, S as f, aw as d, aQ as p, aR as m, C as h, R as g, ad as v, c as b, V as y, q as S} from "./three.module-uFtjsCt7.js";
import {b as w, g as k, R as z, d as C, r as P, j as x} from "./app-CWVuyR8b.js";
var E, j, N = {
    exports: {}
}, _ = {};
var L, T, I, R, M = (j || (j = 1,
N.exports = (E || (E = 1,
_.ConcurrentRoot = 1,
_.ContinuousEventPriority = 8,
_.DefaultEventPriority = 32,
_.DiscreteEventPriority = 2,
_.IdleEventPriority = 268435456,
_.LegacyRoot = 0,
_.NoEventPriority = 0),
_)),
N.exports), F = {
    exports: {}
}, O = {}, D = {
    exports: {}
}, U = {};
function H() {
    return T || (T = 1,
    D.exports = function() {
        if (L)
            return U;
        L = 1;
        var e = w()
          , t = "function" == typeof Object.is ? Object.is : function(e, t) {
            return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
        }
          , n = e.useState
          , r = e.useEffect
          , l = e.useLayoutEffect
          , a = e.useDebugValue;
        function o(e) {
            var n = e.getSnapshot;
            e = e.value;
            try {
                var r = n();
                return !t(e, r)
            } catch (l) {
                return !0
            }
        }
        var i = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function(e, t) {
            return t()
        }
        : function(e, t) {
            var i = t()
              , u = n({
                inst: {
                    value: i,
                    getSnapshot: t
                }
            })
              , s = u[0].inst
              , c = u[1];
            return l(function() {
                s.value = i,
                s.getSnapshot = t,
                o(s) && c({
                    inst: s
                })
            }, [e, i, t]),
            r(function() {
                return o(s) && c({
                    inst: s
                }),
                e(function() {
                    o(s) && c({
                        inst: s
                    })
                })
            }, [e]),
            a(i),
            i
        }
        ;
        return U.useSyncExternalStore = void 0 !== e.useSyncExternalStore ? e.useSyncExternalStore : i,
        U
    }()),
    D.exports
}
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const A = k((R || (R = 1,
F.exports = function() {
    if (I)
        return O;
    I = 1;
    var e = w()
      , t = H()
      , n = "function" == typeof Object.is ? Object.is : function(e, t) {
        return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
    }
      , r = t.useSyncExternalStore
      , l = e.useRef
      , a = e.useEffect
      , o = e.useMemo
      , i = e.useDebugValue;
    return O.useSyncExternalStoreWithSelector = function(e, t, u, s, c) {
        var f = l(null);
        if (null === f.current) {
            var d = {
                hasValue: !1,
                value: null
            };
            f.current = d
        } else
            d = f.current;
        f = o(function() {
            function e(e) {
                if (!a) {
                    if (a = !0,
                    r = e,
                    e = s(e),
                    void 0 !== c && d.hasValue) {
                        var t = d.value;
                        if (c(t, e))
                            return l = t
                    }
                    return l = e
                }
                if (t = l,
                n(r, e))
                    return t;
                var o = s(e);
                return void 0 !== c && c(t, o) ? (r = e,
                t) : (r = e,
                l = o)
            }
            var r, l, a = !1, o = void 0 === u ? null : u;
            return [function() {
                return e(t())
            }
            , null === o ? void 0 : function() {
                return e(o())
            }
            ]
        }, [t, u, s, c]);
        var p = r(e, f[0], f[1]);
        return a(function() {
            d.hasValue = !0,
            d.value = p
        }, [p]),
        i(p),
        p
    }
    ,
    O
}()),
F.exports))
  , Q = e => {
    let t;
    const n = new Set
      , r = (e, r) => {
        const l = "function" == typeof e ? e(t) : e;
        if (!Object.is(l, t)) {
            const e = t;
            t = (null != r ? r : "object" != typeof l || null === l) ? l : Object.assign({}, t, l),
            n.forEach(n => n(t, e))
        }
    }
      , l = () => t
      , a = {
        setState: r,
        getState: l,
        getInitialState: () => o,
        subscribe: e => (n.add(e),
        () => n.delete(e))
    }
      , o = t = e(r, l, a);
    return a
}
  , {useSyncExternalStoreWithSelector: $} = A
  , V = e => e;
const W = (e, t) => {
    const n = (e => e ? Q(e) : Q)(e)
      , r = (e, r=t) => function(e, t=V, n) {
        const r = $(e.subscribe, e.getState, e.getInitialState, t, n);
        return z.useDebugValue(r),
        r
    }(n, e, r);
    return Object.assign(r, n),
    r
}
  , B = (e, t) => e ? W(e, t) : W;
var q, Y, G = {
    exports: {}
}, X = {
    exports: {}
};
function K() {
    return q || (q = 1,
    (e = X).exports = function(e) {
        function t(e, t, n, r) {
            return new Pl(e,t,n,r)
        }
        function n() {}
        function r(e) {
            var t = "https://react.dev/errors/" + e;
            if (1 < arguments.length) {
                t += "?args[]=" + encodeURIComponent(arguments[1]);
                for (var n = 2; n < arguments.length; n++)
                    t += "&args[]=" + encodeURIComponent(arguments[n])
            }
            return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
        }
        function l(e) {
            return null === e || "object" != typeof e ? null : "function" == typeof (e = sa && e[sa] || e["@@iterator"]) ? e : null
        }
        function a(e) {
            if (null == e)
                return null;
            if ("function" == typeof e)
                return e.$$typeof === ca ? null : e.displayName || e.name || null;
            if ("string" == typeof e)
                return e;
            switch (e) {
            case Xl:
                return "Fragment";
            case Gl:
                return "Portal";
            case Zl:
                return "Profiler";
            case Kl:
                return "StrictMode";
            case ra:
                return "Suspense";
            case la:
                return "SuspenseList"
            }
            if ("object" == typeof e)
                switch (e.$$typeof) {
                case ta:
                    return (e.displayName || "Context") + ".Provider";
                case ea:
                    return (e._context.displayName || "Context") + ".Consumer";
                case na:
                    var t = e.render;
                    return (e = e.displayName) || (e = "" !== (e = t.displayName || t.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"),
                    e;
                case aa:
                    return null !== (t = e.displayName || null) ? t : a(e.type) || "Memo";
                case oa:
                    t = e._payload,
                    e = e._init;
                    try {
                        return a(e(t))
                    } catch (n) {}
                }
            return null
        }
        function o(e) {
            if (void 0 === Al)
                try {
                    throw Error()
                } catch (n) {
                    var t = n.stack.trim().match(/\n( *(at )?)/);
                    Al = t && t[1] || "",
                    Ql = -1 < n.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : ""
                }
            return "\n" + Al + e + Ql
        }
        function i(e, t) {
            if (!e || da)
                return "";
            da = !0;
            var n = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            try {
                var r = {
                    DetermineComponentFrameRoot: function() {
                        try {
                            if (t) {
                                var n = function() {
                                    throw Error()
                                };
                                if (Object.defineProperty(n.prototype, "props", {
                                    set: function() {
                                        throw Error()
                                    }
                                }),
                                "object" == typeof Reflect && Reflect.construct) {
                                    try {
                                        Reflect.construct(n, [])
                                    } catch (l) {
                                        var r = l
                                    }
                                    Reflect.construct(e, [], n)
                                } else {
                                    try {
                                        n.call()
                                    } catch (a) {
                                        r = a
                                    }
                                    e.call(n.prototype)
                                }
                            } else {
                                try {
                                    throw Error()
                                } catch (o) {
                                    r = o
                                }
                                (n = e()) && "function" == typeof n.catch && n.catch(function() {})
                            }
                        } catch (i) {
                            if (i && r && "string" == typeof i.stack)
                                return [i.stack, r.stack]
                        }
                        return [null, null]
                    }
                };
                r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
                var l = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, "name");
                l && l.configurable && Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
                    value: "DetermineComponentFrameRoot"
                });
                var a = r.DetermineComponentFrameRoot()
                  , i = a[0]
                  , u = a[1];
                if (i && u) {
                    var s = i.split("\n")
                      , c = u.split("\n");
                    for (l = r = 0; r < s.length && !s[r].includes("DetermineComponentFrameRoot"); )
                        r++;
                    for (; l < c.length && !c[l].includes("DetermineComponentFrameRoot"); )
                        l++;
                    if (r === s.length || l === c.length)
                        for (r = s.length - 1,
                        l = c.length - 1; 1 <= r && 0 <= l && s[r] !== c[l]; )
                            l--;
                    for (; 1 <= r && 0 <= l; r--,
                    l--)
                        if (s[r] !== c[l]) {
                            if (1 !== r || 1 !== l)
                                do {
                                    if (r--,
                                    0 > --l || s[r] !== c[l]) {
                                        var f = "\n" + s[r].replace(" at new ", " at ");
                                        return e.displayName && f.includes("<anonymous>") && (f = f.replace("<anonymous>", e.displayName)),
                                        f
                                    }
                                } while (1 <= r && 0 <= l);
                            break
                        }
                }
            } finally {
                da = !1,
                Error.prepareStackTrace = n
            }
            return (n = e ? e.displayName || e.name : "") ? o(n) : ""
        }
        function u(e) {
            switch (e.tag) {
            case 26:
            case 27:
            case 5:
                return o(e.type);
            case 16:
                return o("Lazy");
            case 13:
                return o("Suspense");
            case 19:
                return o("SuspenseList");
            case 0:
            case 15:
                return e = i(e.type, !1);
            case 11:
                return e = i(e.type.render, !1);
            case 1:
                return e = i(e.type, !0);
            default:
                return ""
            }
        }
        function s(e) {
            try {
                var t = "";
                do {
                    t += u(e),
                    e = e.return
                } while (e);
                return t
            } catch (n) {
                return "\nError generating stack: " + n.message + "\n" + n.stack
            }
        }
        function c(e) {
            var t = e
              , n = e;
            if (e.alternate)
                for (; t.return; )
                    t = t.return;
            else {
                e = t;
                do {
                    !!(4098 & (t = e).flags) && (n = t.return),
                    e = t.return
                } while (e)
            }
            return 3 === t.tag ? n : null
        }
        function f(e) {
            if (c(e) !== e)
                throw Error(r(188))
        }
        function d(e) {
            var t = e.alternate;
            if (!t) {
                if (null === (t = c(e)))
                    throw Error(r(188));
                return t !== e ? null : e
            }
            for (var n = e, l = t; ; ) {
                var a = n.return;
                if (null === a)
                    break;
                var o = a.alternate;
                if (null === o) {
                    if (null !== (l = a.return)) {
                        n = l;
                        continue
                    }
                    break
                }
                if (a.child === o.child) {
                    for (o = a.child; o; ) {
                        if (o === n)
                            return f(a),
                            e;
                        if (o === l)
                            return f(a),
                            t;
                        o = o.sibling
                    }
                    throw Error(r(188))
                }
                if (n.return !== l.return)
                    n = a,
                    l = o;
                else {
                    for (var i = !1, u = a.child; u; ) {
                        if (u === n) {
                            i = !0,
                            n = a,
                            l = o;
                            break
                        }
                        if (u === l) {
                            i = !0,
                            l = a,
                            n = o;
                            break
                        }
                        u = u.sibling
                    }
                    if (!i) {
                        for (u = o.child; u; ) {
                            if (u === n) {
                                i = !0,
                                n = o,
                                l = a;
                                break
                            }
                            if (u === l) {
                                i = !0,
                                l = o,
                                n = a;
                                break
                            }
                            u = u.sibling
                        }
                        if (!i)
                            throw Error(r(189))
                    }
                }
                if (n.alternate !== l)
                    throw Error(r(190))
            }
            if (3 !== n.tag)
                throw Error(r(188));
            return n.stateNode.current === n ? e : t
        }
        function p(e) {
            var t = e.tag;
            if (5 === t || 26 === t || 27 === t || 6 === t)
                return e;
            for (e = e.child; null !== e; ) {
                if (null !== (t = p(e)))
                    return t;
                e = e.sibling
            }
            return null
        }
        function m(e) {
            var t = e.tag;
            if (5 === t || 26 === t || 27 === t || 6 === t)
                return e;
            for (e = e.child; null !== e; ) {
                if (4 !== e.tag && null !== (t = m(e)))
                    return t;
                e = e.sibling
            }
            return null
        }
        function h(e) {
            return {
                current: e
            }
        }
        function g(e) {
            0 > yi || (e.current = bi[yi],
            bi[yi] = null,
            yi--)
        }
        function v(e, t) {
            yi++,
            bi[yi] = e.current,
            e.current = t
        }
        function b(e) {
            var t = 42 & e;
            if (0 !== t)
                return t;
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
                return 64;
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
                return 4194176 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return 62914560 & e;
            case 67108864:
                return 67108864;
            case 134217728:
                return 134217728;
            case 268435456:
                return 268435456;
            case 536870912:
                return 536870912;
            case 1073741824:
                return 0;
            default:
                return e
            }
        }
        function y(e, t) {
            var n = e.pendingLanes;
            if (0 === n)
                return 0;
            var r = 0
              , l = e.suspendedLanes
              , a = e.pingedLanes
              , o = e.warmLanes;
            e = 0 !== e.finishedLanes;
            var i = 134217727 & n;
            return 0 !== i ? 0 !== (n = i & ~l) ? r = b(n) : 0 !== (a &= i) ? r = b(a) : e || 0 !== (o = i & ~o) && (r = b(o)) : 0 !== (i = n & ~l) ? r = b(i) : 0 !== a ? r = b(a) : e || 0 !== (o = n & ~o) && (r = b(o)),
            0 === r ? 0 : 0 !== t && t !== r && 0 === (t & l) && ((l = r & -r) >= (o = t & -t) || 32 === l && 4194176 & o) ? t : r
        }
        function S(e, t) {
            return 0 === (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t)
        }
        function k(e, t) {
            switch (e) {
            case 1:
            case 2:
            case 4:
            case 8:
                return t + 250;
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
            default:
                return -1
            }
        }
        function z() {
            var e = Ci;
            return !(4194176 & (Ci <<= 1)) && (Ci = 128),
            e
        }
        function P() {
            var e = Pi;
            return !(62914560 & (Pi <<= 1)) && (Pi = 4194304),
            e
        }
        function x(e) {
            for (var t = [], n = 0; 31 > n; n++)
                t.push(e);
            return t
        }
        function E(e, t) {
            e.pendingLanes |= t,
            268435456 !== t && (e.suspendedLanes = 0,
            e.pingedLanes = 0,
            e.warmLanes = 0)
        }
        function j(e, t, n) {
            e.pendingLanes |= t,
            e.suspendedLanes &= ~t;
            var r = 31 - wi(t);
            e.entangledLanes |= t,
            e.entanglements[r] = 1073741824 | e.entanglements[r] | 4194218 & n
        }
        function N(e, t) {
            var n = e.entangledLanes |= t;
            for (e = e.entanglements; n; ) {
                var r = 31 - wi(n)
                  , l = 1 << r;
                l & t | e[r] & t && (e[r] |= t),
                n &= ~l
            }
        }
        function _(e) {
            return 2 < (e &= -e) ? 8 < e ? 134217727 & e ? 32 : 268435456 : 8 : 2
        }
        function L(e) {
            if ("function" == typeof Mi && Fi(e),
            Di && "function" == typeof Di.setStrictMode)
                try {
                    Di.setStrictMode(Oi, e)
                } catch (t) {}
        }
        function T(e, t) {
            if ("object" == typeof e && null !== e) {
                var n = Hi.get(e);
                return void 0 !== n ? n : (t = {
                    value: e,
                    source: t,
                    stack: s(t)
                },
                Hi.set(e, t),
                t)
            }
            return {
                value: e,
                source: t,
                stack: s(t)
            }
        }
        function I(e, t) {
            Ai[Qi++] = Vi,
            Ai[Qi++] = $i,
            $i = e,
            Vi = t
        }
        function R(e, t, n) {
            Wi[Bi++] = Yi,
            Wi[Bi++] = Gi,
            Wi[Bi++] = qi,
            qi = e;
            var r = Yi;
            e = Gi;
            var l = 32 - wi(r) - 1;
            r &= ~(1 << l),
            n += 1;
            var a = 32 - wi(t) + l;
            if (30 < a) {
                var o = l - l % 5;
                a = (r & (1 << o) - 1).toString(32),
                r >>= o,
                l -= o,
                Yi = 1 << 32 - wi(t) + l | n << l | r,
                Gi = a + e
            } else
                Yi = 1 << a | n << l | r,
                Gi = e
        }
        function M(e) {
            null !== e.return && (I(e, 1),
            R(e, 1, 0))
        }
        function F(e) {
            for (; e === $i; )
                $i = Ai[--Qi],
                Ai[Qi] = null,
                Vi = Ai[--Qi],
                Ai[Qi] = null;
            for (; e === qi; )
                qi = Wi[--Bi],
                Wi[Bi] = null,
                Gi = Wi[--Bi],
                Wi[Bi] = null,
                Yi = Wi[--Bi],
                Wi[Bi] = null
        }
        function O(e, t) {
            v(Zi, t),
            v(Ki, e),
            v(Xi, null),
            e = ba(t),
            g(Xi),
            v(Xi, e)
        }
        function D() {
            g(Xi),
            g(Ki),
            g(Zi)
        }
        function U(e) {
            null !== e.memoizedState && v(Ji, e);
            var t = Xi.current
              , n = ya(t, e.type);
            t !== n && (v(Ki, e),
            v(Xi, n))
        }
        function H(e) {
            Ki.current === e && (g(Xi),
            g(Ki)),
            Ji.current === e && (g(Ji),
            _a ? qa._currentValue = Ba : qa._currentValue2 = Ba)
        }
        function A(e) {
            throw B(T(Error(r(418, "")), e)),
            au
        }
        function Q(e, t) {
            if (!Ia)
                throw Error(r(175));
            Ao(e.stateNode, e.type, e.memoizedProps, t, e) || A(e)
        }
        function $(e) {
            for (eu = e.return; eu; )
                switch (eu.tag) {
                case 3:
                case 27:
                    return void (lu = !0);
                case 5:
                case 13:
                    return void (lu = !1);
                default:
                    eu = eu.return
                }
        }
        function V(e) {
            if (!Ia || e !== eu)
                return !1;
            if (!nu)
                return $(e),
                nu = !0,
                !1;
            var t = !1;
            if (di ? 3 !== e.tag && 27 !== e.tag && (5 !== e.tag || Go(e.type) && !Pa(e.type, e.memoizedProps)) && (t = !0) : 3 !== e.tag && (5 !== e.tag || Go(e.type) && !Pa(e.type, e.memoizedProps)) && (t = !0),
            t && tu && A(e),
            $(e),
            13 === e.tag) {
                if (!Ia)
                    throw Error(r(316));
                if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
                    throw Error(r(317));
                tu = Vo(e)
            } else
                tu = eu ? Ro(e.stateNode) : null;
            return !0
        }
        function W() {
            Ia && (tu = eu = null,
            nu = !1)
        }
        function B(e) {
            null === ru ? ru = [e] : ru.push(e)
        }
        function q() {
            for (var e = iu, t = uu = iu = 0; t < e; ) {
                var n = ou[t];
                ou[t++] = null;
                var r = ou[t];
                ou[t++] = null;
                var l = ou[t];
                ou[t++] = null;
                var a = ou[t];
                if (ou[t++] = null,
                null !== r && null !== l) {
                    var o = r.pending;
                    null === o ? l.next = l : (l.next = o.next,
                    o.next = l),
                    r.pending = l
                }
                0 !== a && K(n, l, a)
            }
        }
        function Y(e, t, n, r) {
            ou[iu++] = e,
            ou[iu++] = t,
            ou[iu++] = n,
            ou[iu++] = r,
            uu |= r,
            e.lanes |= r,
            null !== (e = e.alternate) && (e.lanes |= r)
        }
        function G(e, t, n, r) {
            return Y(e, t, n, r),
            Z(e)
        }
        function X(e, t) {
            return Y(e, null, null, t),
            Z(e)
        }
        function K(e, t, n) {
            e.lanes |= n;
            var r = e.alternate;
            null !== r && (r.lanes |= n);
            for (var l = !1, a = e.return; null !== a; )
                a.childLanes |= n,
                null !== (r = a.alternate) && (r.childLanes |= n),
                22 === a.tag && (null === (e = a.stateNode) || 1 & e._visibility || (l = !0)),
                e = a,
                a = a.return;
            l && null !== t && 3 === e.tag && (a = e.stateNode,
            l = 31 - wi(n),
            null === (e = (a = a.hiddenUpdates)[l]) ? a[l] = [t] : e.push(t),
            t.lane = 536870912 | n)
        }
        function Z(e) {
            if (50 < rc)
                throw rc = 0,
                lc = null,
                Error(r(185));
            for (var t = e.return; null !== t; )
                t = (e = t).return;
            return 3 === e.tag ? e.stateNode : null
        }
        function J(e) {
            var t;
            e !== cu && null === e.next && (null === cu ? su = cu = e : cu = cu.next = e),
            du = !0,
            fu || (fu = !0,
            t = te,
            Ga ? Xa(function() {
                6 & Ns ? xi(Li, t) : t()
            }) : xi(Li, t))
        }
        function ee(e, t) {
            if (!pu && du) {
                pu = !0;
                do {
                    for (var n = !1, r = su; null !== r; ) {
                        if (0 !== e) {
                            var l = r.pendingLanes;
                            if (0 === l)
                                var a = 0;
                            else {
                                var o = r.suspendedLanes
                                  , i = r.pingedLanes;
                                a = (1 << 31 - wi(42 | e) + 1) - 1,
                                a = 201326677 & (a &= l & ~(o & ~i)) ? 201326677 & a | 1 : a ? 2 | a : 0
                            }
                            0 !== a && (n = !0,
                            le(r, a))
                        } else
                            a = Ts,
                            !(3 & (a = y(r, r === _s ? a : 0))) || S(r, a) || (n = !0,
                            le(r, a));
                        r = r.next
                    }
                } while (n);
                pu = !1
            }
        }
        function te() {
            du = fu = !1;
            var e = 0;
            0 !== mu && (Ua() && (e = mu),
            mu = 0);
            for (var t = _i(), n = null, r = su; null !== r; ) {
                var l = r.next
                  , a = ne(r, t);
                0 === a ? (r.next = null,
                null === n ? su = l : n.next = l,
                null === l && (cu = n)) : (n = r,
                (0 !== e || 3 & a) && (du = !0)),
                r = l
            }
            ee(e)
        }
        function ne(e, t) {
            for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, a = -62914561 & e.pendingLanes; 0 < a; ) {
                var o = 31 - wi(a)
                  , i = 1 << o
                  , u = l[o];
                -1 === u ? 0 !== (i & n) && 0 === (i & r) || (l[o] = k(i, t)) : u <= t && (e.expiredLanes |= i),
                a &= ~i
            }
            if (n = Ts,
            n = y(e, e === (t = _s) ? n : 0),
            r = e.callbackNode,
            0 === n || e === t && 2 === Is || null !== e.cancelPendingCommit)
                return null !== r && null !== r && Ei(r),
                e.callbackNode = null,
                e.callbackPriority = 0;
            if (!(3 & n) || S(e, n)) {
                if ((t = n & -n) === e.callbackPriority)
                    return t;
                switch (null !== r && Ei(r),
                _(n)) {
                case 2:
                case 8:
                    n = Ti;
                    break;
                case 32:
                default:
                    n = Ii;
                    break;
                case 268435456:
                    n = Ri
                }
                return r = re.bind(null, e),
                n = xi(n, r),
                e.callbackPriority = t,
                e.callbackNode = n,
                t
            }
            return null !== r && null !== r && Ei(r),
            e.callbackPriority = 2,
            e.callbackNode = null,
            2
        }
        function re(e, t) {
            var n = e.callbackNode;
            if (vl() && e.callbackNode !== n)
                return null;
            var r = Ts;
            return 0 === (r = y(e, e === _s ? r : 0)) ? null : (Yr(e, r, t),
            ne(e, _i()),
            null != e.callbackNode && e.callbackNode === n ? re.bind(null, e) : null)
        }
        function le(e, t) {
            if (vl())
                return null;
            Yr(e, t, !0)
        }
        function ae() {
            return 0 === mu && (mu = z()),
            mu
        }
        function oe() {
            if (0 === --gu && null !== hu) {
                null !== bu && (bu.status = "fulfilled");
                var e = hu;
                hu = null,
                vu = 0,
                bu = null;
                for (var t = 0; t < e.length; t++)
                    (0,
                    e[t])()
            }
        }
        function ie(e) {
            e.updateQueue = {
                baseState: e.memoizedState,
                firstBaseUpdate: null,
                lastBaseUpdate: null,
                shared: {
                    pending: null,
                    lanes: 0,
                    hiddenCallbacks: null
                },
                callbacks: null
            }
        }
        function ue(e, t) {
            e = e.updateQueue,
            t.updateQueue === e && (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                callbacks: null
            })
        }
        function se(e) {
            return {
                lane: e,
                tag: 0,
                payload: null,
                callback: null,
                next: null
            }
        }
        function ce(e, t, n) {
            var r = e.updateQueue;
            if (null === r)
                return null;
            if (r = r.shared,
            2 & Ns) {
                var l = r.pending;
                return null === l ? t.next = t : (t.next = l.next,
                l.next = t),
                r.pending = t,
                t = Z(e),
                K(e, null, n),
                t
            }
            return Y(e, r, t, n),
            Z(e)
        }
        function fe(e, t, n) {
            if (null !== (t = t.updateQueue) && (t = t.shared,
            4194176 & n)) {
                var r = t.lanes;
                n |= r &= e.pendingLanes,
                t.lanes = n,
                N(e, n)
            }
        }
        function de(e, t) {
            var n = e.updateQueue
              , r = e.alternate;
            if (null !== r && n === (r = r.updateQueue)) {
                var l = null
                  , a = null;
                if (null !== (n = n.firstBaseUpdate)) {
                    do {
                        var o = {
                            lane: n.lane,
                            tag: n.tag,
                            payload: n.payload,
                            callback: null,
                            next: null
                        };
                        null === a ? l = a = o : a = a.next = o,
                        n = n.next
                    } while (null !== n);
                    null === a ? l = a = t : a = a.next = t
                } else
                    l = a = t;
                return n = {
                    baseState: r.baseState,
                    firstBaseUpdate: l,
                    lastBaseUpdate: a,
                    shared: r.shared,
                    callbacks: r.callbacks
                },
                void (e.updateQueue = n)
            }
            null === (e = n.lastBaseUpdate) ? n.firstBaseUpdate = t : e.next = t,
            n.lastBaseUpdate = t
        }
        function pe() {
            if (Su && null !== bu)
                throw bu
        }
        function me(e, t, n, r) {
            Su = !1;
            var l = e.updateQueue;
            yu = !1;
            var a = l.firstBaseUpdate
              , o = l.lastBaseUpdate
              , i = l.shared.pending;
            if (null !== i) {
                l.shared.pending = null;
                var u = i
                  , s = u.next;
                u.next = null,
                null === o ? a = s : o.next = s,
                o = u;
                var c = e.alternate;
                null !== c && (i = (c = c.updateQueue).lastBaseUpdate) !== o && (null === i ? c.firstBaseUpdate = s : i.next = s,
                c.lastBaseUpdate = u)
            }
            if (null !== a) {
                var f = l.baseState;
                for (o = 0,
                c = s = u = null,
                i = a; ; ) {
                    var d = -536870913 & i.lane
                      , p = d !== i.lane;
                    if (p ? (Ts & d) === d : (r & d) === d) {
                        0 !== d && d === vu && (Su = !0),
                        null !== c && (c = c.next = {
                            lane: 0,
                            tag: i.tag,
                            payload: i.payload,
                            callback: null,
                            next: null
                        });
                        e: {
                            var m = e
                              , h = i;
                            d = t;
                            var g = n;
                            switch (h.tag) {
                            case 1:
                                if ("function" == typeof (m = h.payload)) {
                                    f = m.call(g, f, d);
                                    break e
                                }
                                f = m;
                                break e;
                            case 3:
                                m.flags = -65537 & m.flags | 128;
                            case 0:
                                if (null == (d = "function" == typeof (m = h.payload) ? m.call(g, f, d) : m))
                                    break e;
                                f = Bl({}, f, d);
                                break e;
                            case 2:
                                yu = !0
                            }
                        }
                        null !== (d = i.callback) && (e.flags |= 64,
                        p && (e.flags |= 8192),
                        null === (p = l.callbacks) ? l.callbacks = [d] : p.push(d))
                    } else
                        p = {
                            lane: d,
                            tag: i.tag,
                            payload: i.payload,
                            callback: i.callback,
                            next: null
                        },
                        null === c ? (s = c = p,
                        u = f) : c = c.next = p,
                        o |= d;
                    if (null === (i = i.next)) {
                        if (null === (i = l.shared.pending))
                            break;
                        i = (p = i).next,
                        p.next = null,
                        l.lastBaseUpdate = p,
                        l.shared.pending = null
                    }
                }
                null === c && (u = f),
                l.baseState = u,
                l.firstBaseUpdate = s,
                l.lastBaseUpdate = c,
                null === a && (l.shared.lanes = 0),
                Hs |= o,
                e.lanes = o,
                e.memoizedState = f
            }
        }
        function he(e, t) {
            if ("function" != typeof e)
                throw Error(r(191, e));
            e.call(t)
        }
        function ge(e, t) {
            var n = e.callbacks;
            if (null !== n)
                for (e.callbacks = null,
                e = 0; e < n.length; e++)
                    he(n[e], t)
        }
        function ve(e, t) {
            if (Ui(e, t))
                return !0;
            if ("object" != typeof e || null === e || "object" != typeof t || null === t)
                return !1;
            var n = Object.keys(e)
              , r = Object.keys(t);
            if (n.length !== r.length)
                return !1;
            for (r = 0; r < n.length; r++) {
                var l = n[r];
                if (!wu.call(t, l) || !Ui(e[l], t[l]))
                    return !1
            }
            return !0
        }
        function be(e) {
            return "fulfilled" === (e = e.status) || "rejected" === e
        }
        function ye() {}
        function Se(e, t, n) {
            switch (void 0 === (n = e[n]) ? e.push(t) : n !== t && (t.then(ye, ye),
            t = n),
            t.status) {
            case "fulfilled":
                return t.value;
            case "rejected":
                if ((e = t.reason) === ku)
                    throw Error(r(483));
                throw e;
            default:
                if ("string" == typeof t.status)
                    t.then(ye, ye);
                else {
                    if (null !== (e = _s) && 100 < e.shellSuspendCounter)
                        throw Error(r(482));
                    (e = t).status = "pending",
                    e.then(function(e) {
                        if ("pending" === t.status) {
                            var n = t;
                            n.status = "fulfilled",
                            n.value = e
                        }
                    }, function(e) {
                        if ("pending" === t.status) {
                            var n = t;
                            n.status = "rejected",
                            n.reason = e
                        }
                    })
                }
                switch (t.status) {
                case "fulfilled":
                    return t.value;
                case "rejected":
                    if ((e = t.reason) === ku)
                        throw Error(r(483));
                    throw e
                }
                throw Pu = t,
                ku
            }
        }
        function we() {
            if (null === Pu)
                throw Error(r(459));
            var e = Pu;
            return Pu = null,
            e
        }
        function ke(e) {
            var t = Eu;
            return Eu += 1,
            null === xu && (xu = []),
            Se(xu, e, t)
        }
        function ze(e, t) {
            t = t.props.ref,
            e.ref = void 0 !== t ? t : null
        }
        function Ce(e, t) {
            if (t.$$typeof === ql)
                throw Error(r(525));
            throw e = Object.prototype.toString.call(t),
            Error(r(31, "[object Object]" === e ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
        }
        function Pe(e) {
            return (0,
            e._init)(e._payload)
        }
        function xe(e) {
            function n(t, n) {
                if (e) {
                    var r = t.deletions;
                    null === r ? (t.deletions = [n],
                    t.flags |= 16) : r.push(n)
                }
            }
            function a(t, r) {
                if (!e)
                    return null;
                for (; null !== r; )
                    n(t, r),
                    r = r.sibling;
                return null
            }
            function o(e) {
                for (var t = new Map; null !== e; )
                    null !== e.key ? t.set(e.key, e) : t.set(e.index, e),
                    e = e.sibling;
                return t
            }
            function i(e, t) {
                return (e = El(e, t)).index = 0,
                e.sibling = null,
                e
            }
            function u(t, n, r) {
                return t.index = r,
                e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.flags |= 33554434,
                n) : r : (t.flags |= 33554434,
                n) : (t.flags |= 1048576,
                n)
            }
            function s(t) {
                return e && null === t.alternate && (t.flags |= 33554434),
                t
            }
            function c(e, t, n, r) {
                return null === t || 6 !== t.tag ? ((t = Tl(n, e.mode, r)).return = e,
                t) : ((t = i(t, n)).return = e,
                t)
            }
            function f(e, t, n, r) {
                var l = n.type;
                return l === Xl ? p(e, t, n.props.children, r, n.key) : null !== t && (t.elementType === l || "object" == typeof l && null !== l && l.$$typeof === oa && Pe(l) === t.type) ? (ze(t = i(t, n.props), n),
                t.return = e,
                t) : (ze(t = Nl(n.type, n.key, n.props, null, e.mode, r), n),
                t.return = e,
                t)
            }
            function d(e, t, n, r) {
                return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = Il(n, e.mode, r)).return = e,
                t) : ((t = i(t, n.children || [])).return = e,
                t)
            }
            function p(e, t, n, r, l) {
                return null === t || 7 !== t.tag ? ((t = _l(n, e.mode, r, l)).return = e,
                t) : ((t = i(t, n)).return = e,
                t)
            }
            function m(e, t, n) {
                if ("string" == typeof t && "" !== t || "number" == typeof t || "bigint" == typeof t)
                    return (t = Tl("" + t, e.mode, n)).return = e,
                    t;
                if ("object" == typeof t && null !== t) {
                    switch (t.$$typeof) {
                    case Yl:
                        return ze(n = Nl(t.type, t.key, t.props, null, e.mode, n), t),
                        n.return = e,
                        n;
                    case Gl:
                        return (t = Il(t, e.mode, n)).return = e,
                        t;
                    case oa:
                        return m(e, t = (0,
                        t._init)(t._payload), n)
                    }
                    if (pa(t) || l(t))
                        return (t = _l(t, e.mode, n, null)).return = e,
                        t;
                    if ("function" == typeof t.then)
                        return m(e, ke(t), n);
                    if (t.$$typeof === ta)
                        return m(e, Rn(e, t), n);
                    Ce(e, t)
                }
                return null
            }
            function h(e, t, n, r) {
                var a = null !== t ? t.key : null;
                if ("string" == typeof n && "" !== n || "number" == typeof n || "bigint" == typeof n)
                    return null !== a ? null : c(e, t, "" + n, r);
                if ("object" == typeof n && null !== n) {
                    switch (n.$$typeof) {
                    case Yl:
                        return n.key === a ? f(e, t, n, r) : null;
                    case Gl:
                        return n.key === a ? d(e, t, n, r) : null;
                    case oa:
                        return h(e, t, n = (a = n._init)(n._payload), r)
                    }
                    if (pa(n) || l(n))
                        return null !== a ? null : p(e, t, n, r, null);
                    if ("function" == typeof n.then)
                        return h(e, t, ke(n), r);
                    if (n.$$typeof === ta)
                        return h(e, t, Rn(e, n), r);
                    Ce(e, n)
                }
                return null
            }
            function g(e, t, n, r, a) {
                if ("string" == typeof r && "" !== r || "number" == typeof r || "bigint" == typeof r)
                    return c(t, e = e.get(n) || null, "" + r, a);
                if ("object" == typeof r && null !== r) {
                    switch (r.$$typeof) {
                    case Yl:
                        return f(t, e = e.get(null === r.key ? n : r.key) || null, r, a);
                    case Gl:
                        return d(t, e = e.get(null === r.key ? n : r.key) || null, r, a);
                    case oa:
                        return g(e, t, n, r = (0,
                        r._init)(r._payload), a)
                    }
                    if (pa(r) || l(r))
                        return p(t, e = e.get(n) || null, r, a, null);
                    if ("function" == typeof r.then)
                        return g(e, t, n, ke(r), a);
                    if (r.$$typeof === ta)
                        return g(e, t, n, Rn(t, r), a);
                    Ce(t, r)
                }
                return null
            }
            function v(t, c, f, d) {
                if ("object" == typeof f && null !== f && f.type === Xl && null === f.key && (f = f.props.children),
                "object" == typeof f && null !== f) {
                    switch (f.$$typeof) {
                    case Yl:
                        e: {
                            for (var p = f.key; null !== c; ) {
                                if (c.key === p) {
                                    if ((p = f.type) === Xl) {
                                        if (7 === c.tag) {
                                            a(t, c.sibling),
                                            (d = i(c, f.props.children)).return = t,
                                            t = d;
                                            break e
                                        }
                                    } else if (c.elementType === p || "object" == typeof p && null !== p && p.$$typeof === oa && Pe(p) === c.type) {
                                        a(t, c.sibling),
                                        ze(d = i(c, f.props), f),
                                        d.return = t,
                                        t = d;
                                        break e
                                    }
                                    a(t, c);
                                    break
                                }
                                n(t, c),
                                c = c.sibling
                            }
                            f.type === Xl ? ((d = _l(f.props.children, t.mode, d, f.key)).return = t,
                            t = d) : (ze(d = Nl(f.type, f.key, f.props, null, t.mode, d), f),
                            d.return = t,
                            t = d)
                        }
                        return s(t);
                    case Gl:
                        e: {
                            for (p = f.key; null !== c; ) {
                                if (c.key === p) {
                                    if (4 === c.tag && c.stateNode.containerInfo === f.containerInfo && c.stateNode.implementation === f.implementation) {
                                        a(t, c.sibling),
                                        (d = i(c, f.children || [])).return = t,
                                        t = d;
                                        break e
                                    }
                                    a(t, c);
                                    break
                                }
                                n(t, c),
                                c = c.sibling
                            }
                            (d = Il(f, t.mode, d)).return = t,
                            t = d
                        }
                        return s(t);
                    case oa:
                        return v(t, c, f = (p = f._init)(f._payload), d)
                    }
                    if (pa(f))
                        return function(t, r, l, i) {
                            for (var s = null, c = null, f = r, d = r = 0, p = null; null !== f && d < l.length; d++) {
                                f.index > d ? (p = f,
                                f = null) : p = f.sibling;
                                var v = h(t, f, l[d], i);
                                if (null === v) {
                                    null === f && (f = p);
                                    break
                                }
                                e && f && null === v.alternate && n(t, f),
                                r = u(v, r, d),
                                null === c ? s = v : c.sibling = v,
                                c = v,
                                f = p
                            }
                            if (d === l.length)
                                return a(t, f),
                                nu && I(t, d),
                                s;
                            if (null === f) {
                                for (; d < l.length; d++)
                                    null !== (f = m(t, l[d], i)) && (r = u(f, r, d),
                                    null === c ? s = f : c.sibling = f,
                                    c = f);
                                return nu && I(t, d),
                                s
                            }
                            for (f = o(f); d < l.length; d++)
                                null !== (p = g(f, t, d, l[d], i)) && (e && null !== p.alternate && f.delete(null === p.key ? d : p.key),
                                r = u(p, r, d),
                                null === c ? s = p : c.sibling = p,
                                c = p);
                            return e && f.forEach(function(e) {
                                return n(t, e)
                            }),
                            nu && I(t, d),
                            s
                        }(t, c, f, d);
                    if (l(f)) {
                        if ("function" != typeof (p = l(f)))
                            throw Error(r(150));
                        return function(t, l, i, s) {
                            if (null == i)
                                throw Error(r(151));
                            for (var c = null, f = null, d = l, p = l = 0, v = null, b = i.next(); null !== d && !b.done; p++,
                            b = i.next()) {
                                d.index > p ? (v = d,
                                d = null) : v = d.sibling;
                                var y = h(t, d, b.value, s);
                                if (null === y) {
                                    null === d && (d = v);
                                    break
                                }
                                e && d && null === y.alternate && n(t, d),
                                l = u(y, l, p),
                                null === f ? c = y : f.sibling = y,
                                f = y,
                                d = v
                            }
                            if (b.done)
                                return a(t, d),
                                nu && I(t, p),
                                c;
                            if (null === d) {
                                for (; !b.done; p++,
                                b = i.next())
                                    null !== (b = m(t, b.value, s)) && (l = u(b, l, p),
                                    null === f ? c = b : f.sibling = b,
                                    f = b);
                                return nu && I(t, p),
                                c
                            }
                            for (d = o(d); !b.done; p++,
                            b = i.next())
                                null !== (b = g(d, t, p, b.value, s)) && (e && null !== b.alternate && d.delete(null === b.key ? p : b.key),
                                l = u(b, l, p),
                                null === f ? c = b : f.sibling = b,
                                f = b);
                            return e && d.forEach(function(e) {
                                return n(t, e)
                            }),
                            nu && I(t, p),
                            c
                        }(t, c, f = p.call(f), d)
                    }
                    if ("function" == typeof f.then)
                        return v(t, c, ke(f), d);
                    if (f.$$typeof === ta)
                        return v(t, c, Rn(t, f), d);
                    Ce(t, f)
                }
                return "string" == typeof f && "" !== f || "number" == typeof f || "bigint" == typeof f ? (f = "" + f,
                null !== c && 6 === c.tag ? (a(t, c.sibling),
                (d = i(c, f)).return = t,
                t = d) : (a(t, c),
                (d = Tl(f, t.mode, d)).return = t,
                t = d),
                s(t)) : a(t, c)
            }
            return function(e, n, r, l) {
                try {
                    Eu = 0;
                    var a = v(e, n, r, l);
                    return xu = null,
                    a
                } catch (i) {
                    if (i === ku)
                        throw i;
                    var o = t(29, i, null, e.mode);
                    return o.lanes = l,
                    o.return = e,
                    o
                }
            }
        }
        function Ee(e, t) {
            v(Lu, e = Ds),
            v(_u, t),
            Ds = e | t.baseLanes
        }
        function je() {
            v(Lu, Ds),
            v(_u, _u.current)
        }
        function Ne() {
            Ds = Lu.current,
            g(_u),
            g(Lu)
        }
        function _e(e) {
            var t = e.alternate;
            v(Ru, 1 & Ru.current),
            v(Tu, e),
            null === Iu && (null === t || null !== _u.current || null !== t.memoizedState) && (Iu = e)
        }
        function Le(e) {
            if (22 === e.tag) {
                if (v(Ru, Ru.current),
                v(Tu, e),
                null === Iu) {
                    var t = e.alternate;
                    null !== t && null !== t.memoizedState && (Iu = e)
                }
            } else
                Te()
        }
        function Te() {
            v(Ru, Ru.current),
            v(Tu, Tu.current)
        }
        function Ie(e) {
            g(Tu),
            Iu === e && (Iu = null),
            g(Ru)
        }
        function Re(e) {
            for (var t = e; null !== t; ) {
                if (13 === t.tag) {
                    var n = t.memoizedState;
                    if (null !== n && (null === (n = n.dehydrated) || jo(n) || No(n)))
                        return t
                } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
                    if (128 & t.flags)
                        return t
                } else if (null !== t.child) {
                    t.child.return = t,
                    t = t.child;
                    continue
                }
                if (t === e)
                    break;
                for (; null === t.sibling; ) {
                    if (null === t.return || t.return === e)
                        return null;
                    t = t.return
                }
                t.sibling.return = t.return,
                t = t.sibling
            }
            return null
        }
        function Me() {
            throw Error(r(321))
        }
        function Fe(e, t) {
            if (null === t)
                return !1;
            for (var n = 0; n < t.length && n < e.length; n++)
                if (!Ui(e[n], t[n]))
                    return !1;
            return !0
        }
        function Oe(e, t, n, r, l, a) {
            return Mu = a,
            Fu = t,
            t.memoizedState = null,
            t.updateQueue = null,
            t.lanes = 0,
            fa.H = null === e || null === e.memoizedState ? Yu : Gu,
            Au = !1,
            a = n(r, l),
            Au = !1,
            Hu && (a = Ue(t, n, r, l)),
            De(e),
            a
        }
        function De(e) {
            fa.H = qu;
            var t = null !== Ou && null !== Ou.next;
            if (Mu = 0,
            Du = Ou = Fu = null,
            Uu = !1,
            $u = 0,
            Vu = null,
            t)
                throw Error(r(300));
            null === e || es || null !== (e = e.dependencies) && Ln(e) && (es = !0)
        }
        function Ue(e, t, n, l) {
            Fu = e;
            var a = 0;
            do {
                if (Hu && (Vu = null),
                $u = 0,
                Hu = !1,
                25 <= a)
                    throw Error(r(301));
                if (a += 1,
                Du = Ou = null,
                null != e.updateQueue) {
                    var o = e.updateQueue;
                    o.lastEffect = null,
                    o.events = null,
                    o.stores = null,
                    null != o.memoCache && (o.memoCache.index = 0)
                }
                fa.H = Xu,
                o = t(n, l)
            } while (Hu);
            return o
        }
        function He() {
            var e = fa.H
              , t = e.useState()[0];
            return t = "function" == typeof t.then ? Be(t) : t,
            e = e.useState()[0],
            (null !== Ou ? Ou.memoizedState : null) !== e && (Fu.flags |= 1024),
            t
        }
        function Ae() {
            var e = 0 !== Qu;
            return Qu = 0,
            e
        }
        function Qe(e, t, n) {
            t.updateQueue = e.updateQueue,
            t.flags &= -2053,
            e.lanes &= ~n
        }
        function $e(e) {
            if (Uu) {
                for (e = e.memoizedState; null !== e; ) {
                    var t = e.queue;
                    null !== t && (t.pending = null),
                    e = e.next
                }
                Uu = !1
            }
            Mu = 0,
            Du = Ou = Fu = null,
            Hu = !1,
            $u = Qu = 0,
            Vu = null
        }
        function Ve() {
            var e = {
                memoizedState: null,
                baseState: null,
                baseQueue: null,
                queue: null,
                next: null
            };
            return null === Du ? Fu.memoizedState = Du = e : Du = Du.next = e,
            Du
        }
        function We() {
            if (null === Ou) {
                var e = Fu.alternate;
                e = null !== e ? e.memoizedState : null
            } else
                e = Ou.next;
            var t = null === Du ? Fu.memoizedState : Du.next;
            if (null !== t)
                Du = t,
                Ou = e;
            else {
                if (null === e) {
                    if (null === Fu.alternate)
                        throw Error(r(467));
                    throw Error(r(310))
                }
                e = {
                    memoizedState: (Ou = e).memoizedState,
                    baseState: Ou.baseState,
                    baseQueue: Ou.baseQueue,
                    queue: Ou.queue,
                    next: null
                },
                null === Du ? Fu.memoizedState = Du = e : Du = Du.next = e
            }
            return Du
        }
        function Be(e) {
            var t = $u;
            return $u += 1,
            null === Vu && (Vu = []),
            e = Se(Vu, e, t),
            t = Fu,
            null === (null === Du ? t.memoizedState : Du.next) && (t = t.alternate,
            fa.H = null === t || null === t.memoizedState ? Yu : Gu),
            e
        }
        function qe(e) {
            if (null !== e && "object" == typeof e) {
                if ("function" == typeof e.then)
                    return Be(e);
                if (e.$$typeof === ta)
                    return In(e)
            }
            throw Error(r(438, String(e)))
        }
        function Ye(e) {
            var t = null
              , n = Fu.updateQueue;
            if (null !== n && (t = n.memoCache),
            null == t) {
                var r = Fu.alternate;
                null !== r && null !== (r = r.updateQueue) && null != (r = r.memoCache) && (t = {
                    data: r.data.map(function(e) {
                        return e.slice()
                    }),
                    index: 0
                })
            }
            if (null == t && (t = {
                data: [],
                index: 0
            }),
            null === n && (n = Bu(),
            Fu.updateQueue = n),
            n.memoCache = t,
            void 0 === (n = t.data[t.index]))
                for (n = t.data[t.index] = Array(e),
                r = 0; r < e; r++)
                    n[r] = ua;
            return t.index++,
            n
        }
        function Ge(e, t) {
            return "function" == typeof t ? t(e) : t
        }
        function Xe(e) {
            return Ke(We(), Ou, e)
        }
        function Ke(e, t, n) {
            var l = e.queue;
            if (null === l)
                throw Error(r(311));
            l.lastRenderedReducer = n;
            var a = e.baseQueue
              , o = l.pending;
            if (null !== o) {
                if (null !== a) {
                    var i = a.next;
                    a.next = o.next,
                    o.next = i
                }
                t.baseQueue = a = o,
                l.pending = null
            }
            if (o = e.baseState,
            null === a)
                e.memoizedState = o;
            else {
                var u = i = null
                  , s = null
                  , c = t = a.next
                  , f = !1;
                do {
                    var d = -536870913 & c.lane;
                    if (d !== c.lane ? (Ts & d) === d : (Mu & d) === d) {
                        var p = c.revertLane;
                        if (0 === p)
                            null !== s && (s = s.next = {
                                lane: 0,
                                revertLane: 0,
                                action: c.action,
                                hasEagerState: c.hasEagerState,
                                eagerState: c.eagerState,
                                next: null
                            }),
                            d === vu && (f = !0);
                        else {
                            if ((Mu & p) === p) {
                                c = c.next,
                                p === vu && (f = !0);
                                continue
                            }
                            d = {
                                lane: 0,
                                revertLane: c.revertLane,
                                action: c.action,
                                hasEagerState: c.hasEagerState,
                                eagerState: c.eagerState,
                                next: null
                            },
                            null === s ? (u = s = d,
                            i = o) : s = s.next = d,
                            Fu.lanes |= p,
                            Hs |= p
                        }
                        d = c.action,
                        Au && n(o, d),
                        o = c.hasEagerState ? c.eagerState : n(o, d)
                    } else
                        p = {
                            lane: d,
                            revertLane: c.revertLane,
                            action: c.action,
                            hasEagerState: c.hasEagerState,
                            eagerState: c.eagerState,
                            next: null
                        },
                        null === s ? (u = s = p,
                        i = o) : s = s.next = p,
                        Fu.lanes |= d,
                        Hs |= d;
                    c = c.next
                } while (null !== c && c !== t);
                if (null === s ? i = o : s.next = u,
                !Ui(o, e.memoizedState) && (es = !0,
                f && null !== (n = bu)))
                    throw n;
                e.memoizedState = o,
                e.baseState = i,
                e.baseQueue = s,
                l.lastRenderedState = o
            }
            return null === a && (l.lanes = 0),
            [e.memoizedState, l.dispatch]
        }
        function Ze(e) {
            var t = We()
              , n = t.queue;
            if (null === n)
                throw Error(r(311));
            n.lastRenderedReducer = e;
            var l = n.dispatch
              , a = n.pending
              , o = t.memoizedState;
            if (null !== a) {
                n.pending = null;
                var i = a = a.next;
                do {
                    o = e(o, i.action),
                    i = i.next
                } while (i !== a);
                Ui(o, t.memoizedState) || (es = !0),
                t.memoizedState = o,
                null === t.baseQueue && (t.baseState = o),
                n.lastRenderedState = o
            }
            return [o, l]
        }
        function Je(e, t, n) {
            var l = Fu
              , a = We()
              , o = nu;
            if (o) {
                if (void 0 === n)
                    throw Error(r(407));
                n = n()
            } else
                n = t();
            var i = !Ui((Ou || a).memoizedState, n);
            if (i && (a.memoizedState = n,
            es = !0),
            a = a.queue,
            Ct(nt.bind(null, l, a, e), [e]),
            a.getSnapshot !== t || i || null !== Du && 1 & Du.memoizedState.tag) {
                if (l.flags |= 2048,
                yt(9, tt.bind(null, l, a, n, t), {
                    destroy: void 0
                }, null),
                null === _s)
                    throw Error(r(349));
                o || 60 & Mu || et(l, t, n)
            }
            return n
        }
        function et(e, t, n) {
            e.flags |= 16384,
            e = {
                getSnapshot: t,
                value: n
            },
            null === (t = Fu.updateQueue) ? (t = Bu(),
            Fu.updateQueue = t,
            t.stores = [e]) : null === (n = t.stores) ? t.stores = [e] : n.push(e)
        }
        function tt(e, t, n, r) {
            t.value = n,
            t.getSnapshot = r,
            rt(t) && lt(e)
        }
        function nt(e, t, n) {
            return n(function() {
                rt(t) && lt(e)
            })
        }
        function rt(e) {
            var t = e.getSnapshot;
            e = e.value;
            try {
                var n = t();
                return !Ui(e, n)
            } catch (r) {
                return !0
            }
        }
        function lt(e) {
            var t = X(e, 2);
            null !== t && qr(t, 0, 2)
        }
        function at(e) {
            var t = Ve();
            if ("function" == typeof e) {
                var n = e;
                if (e = n(),
                Au) {
                    L(!0);
                    try {
                        n()
                    } finally {
                        L(!1)
                    }
                }
            }
            return t.memoizedState = t.baseState = e,
            t.queue = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Ge,
                lastRenderedState: e
            },
            t
        }
        function ot(e, t, n, r) {
            return e.baseState = n,
            Ke(e, Ou, "function" == typeof r ? r : Ge)
        }
        function it(e, t, n, l, a) {
            if (Vt(e))
                throw Error(r(485));
            if (null !== (e = t.action)) {
                var o = {
                    payload: a,
                    action: e,
                    next: null,
                    isTransition: !0,
                    status: "pending",
                    value: null,
                    reason: null,
                    listeners: [],
                    then: function(e) {
                        o.listeners.push(e)
                    }
                };
                null !== fa.T ? n(!0) : o.isTransition = !1,
                l(o),
                null === (n = t.pending) ? (o.next = t.pending = o,
                ut(t, o)) : (o.next = n.next,
                t.pending = n.next = o)
            }
        }
        function ut(e, t) {
            var n = t.action
              , r = t.payload
              , l = e.state;
            if (t.isTransition) {
                var a = fa.T
                  , o = {};
                fa.T = o;
                try {
                    var i = n(l, r)
                      , u = fa.S;
                    null !== u && u(o, i),
                    st(e, t, i)
                } catch (s) {
                    ft(e, t, s)
                } finally {
                    fa.T = a
                }
            } else
                try {
                    st(e, t, a = n(l, r))
                } catch (c) {
                    ft(e, t, c)
                }
        }
        function st(e, t, n) {
            null !== n && "object" == typeof n && "function" == typeof n.then ? n.then(function(n) {
                ct(e, t, n)
            }, function(n) {
                return ft(e, t, n)
            }) : ct(e, t, n)
        }
        function ct(e, t, n) {
            t.status = "fulfilled",
            t.value = n,
            dt(t),
            e.state = n,
            null !== (t = e.pending) && ((n = t.next) === t ? e.pending = null : (n = n.next,
            t.next = n,
            ut(e, n)))
        }
        function ft(e, t, n) {
            var r = e.pending;
            if (e.pending = null,
            null !== r) {
                r = r.next;
                do {
                    t.status = "rejected",
                    t.reason = n,
                    dt(t),
                    t = t.next
                } while (t !== r)
            }
            e.action = null
        }
        function dt(e) {
            e = e.listeners;
            for (var t = 0; t < e.length; t++)
                (0,
                e[t])()
        }
        function pt(e, t) {
            return t
        }
        function mt(e, t) {
            if (nu) {
                var n = _s.formState;
                if (null !== n) {
                    e: {
                        var r = Fu;
                        if (nu) {
                            if (tu) {
                                var l = To(tu, lu);
                                if (l) {
                                    tu = Ro(l),
                                    r = Io(l);
                                    break e
                                }
                            }
                            A(r)
                        }
                        r = !1
                    }
                    r && (t = n[0])
                }
            }
            (n = Ve()).memoizedState = n.baseState = t,
            r = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: pt,
                lastRenderedState: t
            },
            n.queue = r,
            n = At.bind(null, Fu, r),
            r.dispatch = n,
            r = at(!1);
            var a = $t.bind(null, Fu, !1, r.queue);
            return l = {
                state: t,
                dispatch: null,
                action: e,
                pending: null
            },
            (r = Ve()).queue = l,
            n = it.bind(null, Fu, l, a, n),
            l.dispatch = n,
            r.memoizedState = e,
            [t, n, !1]
        }
        function ht(e) {
            return gt(We(), Ou, e)
        }
        function gt(e, t, n) {
            t = Ke(e, t, pt)[0],
            e = Xe(Ge)[0],
            t = "object" == typeof t && null !== t && "function" == typeof t.then ? Be(t) : t;
            var r = We()
              , l = r.queue
              , a = l.dispatch;
            return n !== r.memoizedState && (Fu.flags |= 2048,
            yt(9, vt.bind(null, l, n), {
                destroy: void 0
            }, null)),
            [t, a, e]
        }
        function vt(e, t) {
            e.action = t
        }
        function bt(e) {
            var t = We()
              , n = Ou;
            if (null !== n)
                return gt(t, n, e);
            We(),
            t = t.memoizedState;
            var r = (n = We()).queue.dispatch;
            return n.memoizedState = e,
            [t, r, !1]
        }
        function yt(e, t, n, r) {
            return e = {
                tag: e,
                create: t,
                inst: n,
                deps: r,
                next: null
            },
            null === (t = Fu.updateQueue) && (t = Bu(),
            Fu.updateQueue = t),
            null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next,
            n.next = e,
            e.next = r,
            t.lastEffect = e),
            e
        }
        function St() {
            return We().memoizedState
        }
        function wt(e, t, n, r) {
            var l = Ve();
            Fu.flags |= e,
            l.memoizedState = yt(1 | t, n, {
                destroy: void 0
            }, void 0 === r ? null : r)
        }
        function kt(e, t, n, r) {
            var l = We();
            r = void 0 === r ? null : r;
            var a = l.memoizedState.inst;
            null !== Ou && null !== r && Fe(r, Ou.memoizedState.deps) ? l.memoizedState = yt(t, n, a, r) : (Fu.flags |= e,
            l.memoizedState = yt(1 | t, n, a, r))
        }
        function zt(e, t) {
            wt(8390656, 8, e, t)
        }
        function Ct(e, t) {
            kt(2048, 8, e, t)
        }
        function Pt(e, t) {
            return kt(4, 2, e, t)
        }
        function xt(e, t) {
            return kt(4, 4, e, t)
        }
        function Et(e, t) {
            if ("function" == typeof t) {
                e = e();
                var n = t(e);
                return function() {
                    "function" == typeof n ? n() : t(null)
                }
            }
            if (null != t)
                return e = e(),
                t.current = e,
                function() {
                    t.current = null
                }
        }
        function jt(e, t, n) {
            n = null != n ? n.concat([e]) : null,
            kt(4, 4, Et.bind(null, t, e), n)
        }
        function Nt() {}
        function _t(e, t) {
            var n = We();
            t = void 0 === t ? null : t;
            var r = n.memoizedState;
            return null !== t && Fe(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
            e)
        }
        function Lt(e, t) {
            var n = We();
            t = void 0 === t ? null : t;
            var r = n.memoizedState;
            if (null !== t && Fe(t, r[1]))
                return r[0];
            if (r = e(),
            Au) {
                L(!0);
                try {
                    e()
                } finally {
                    L(!1)
                }
            }
            return n.memoizedState = [r, t],
            r
        }
        function Tt(e, t, n) {
            return void 0 === n || 1073741824 & Mu ? e.memoizedState = t : (e.memoizedState = n,
            e = Br(),
            Fu.lanes |= e,
            Hs |= e,
            n)
        }
        function It(e, t, n, r) {
            return Ui(n, t) ? n : null !== _u.current ? (e = Tt(e, n, r),
            Ui(e, t) || (es = !0),
            e) : 42 & Mu ? (e = Br(),
            Fu.lanes |= e,
            Hs |= e,
            t) : (es = !0,
            e.memoizedState = n)
        }
        function Rt(e, t, n, r, l) {
            var a = Oa();
            Fa(0 !== a && 8 > a ? a : 8);
            var o, i, u, s = fa.T, c = {};
            fa.T = c,
            $t(e, !1, t, n);
            try {
                var f = l()
                  , d = fa.S;
                null !== d && d(c, f),
                null !== f && "object" == typeof f && "function" == typeof f.then ? Qt(e, t, (o = r,
                i = [],
                u = {
                    status: "pending",
                    value: null,
                    reason: null,
                    then: function(e) {
                        i.push(e)
                    }
                },
                f.then(function() {
                    u.status = "fulfilled",
                    u.value = o;
                    for (var e = 0; e < i.length; e++)
                        (0,
                        i[e])(o)
                }, function(e) {
                    for (u.status = "rejected",
                    u.reason = e,
                    e = 0; e < i.length; e++)
                        (0,
                        i[e])(void 0)
                }),
                u), Wr()) : Qt(e, t, r, Wr())
            } catch (p) {
                Qt(e, t, {
                    then: function() {},
                    status: "rejected",
                    reason: p
                }, Wr())
            } finally {
                Fa(a),
                fa.T = s
            }
        }
        function Mt(e) {
            var t = e.memoizedState;
            if (null !== t)
                return t;
            var n = {};
            return (t = {
                memoizedState: Ba,
                baseState: Ba,
                baseQueue: null,
                queue: {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: Ge,
                    lastRenderedState: Ba
                },
                next: null
            }).next = {
                memoizedState: n,
                baseState: n,
                baseQueue: null,
                queue: {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: Ge,
                    lastRenderedState: n
                },
                next: null
            },
            e.memoizedState = t,
            null !== (e = e.alternate) && (e.memoizedState = t),
            t
        }
        function Ft() {
            return In(qa)
        }
        function Ot() {
            return We().memoizedState
        }
        function Dt() {
            return We().memoizedState
        }
        function Ut(e) {
            for (var t = e.return; null !== t; ) {
                switch (t.tag) {
                case 24:
                case 3:
                    var n = Wr()
                      , r = ce(t, e = se(n), n);
                    return null !== r && (qr(r, 0, n),
                    fe(r, t, n)),
                    t = {
                        cache: Fn()
                    },
                    void (e.payload = t)
                }
                t = t.return
            }
        }
        function Ht(e, t, n) {
            var r = Wr();
            n = {
                lane: r,
                revertLane: 0,
                action: n,
                hasEagerState: !1,
                eagerState: null,
                next: null
            },
            Vt(e) ? Wt(t, n) : null !== (n = G(e, t, n, r)) && (qr(n, 0, r),
            Bt(n, t, r))
        }
        function At(e, t, n) {
            Qt(e, t, n, Wr())
        }
        function Qt(e, t, n, r) {
            var l = {
                lane: r,
                revertLane: 0,
                action: n,
                hasEagerState: !1,
                eagerState: null,
                next: null
            };
            if (Vt(e))
                Wt(t, l);
            else {
                var a = e.alternate;
                if (0 === e.lanes && (null === a || 0 === a.lanes) && null !== (a = t.lastRenderedReducer))
                    try {
                        var o = t.lastRenderedState
                          , i = a(o, n);
                        if (l.hasEagerState = !0,
                        l.eagerState = i,
                        Ui(i, o))
                            return Y(e, t, l, 0),
                            null === _s && q(),
                            !1
                    } catch (u) {}
                if (null !== (n = G(e, t, l, r)))
                    return qr(n, 0, r),
                    Bt(n, t, r),
                    !0
            }
            return !1
        }
        function $t(e, t, n, l) {
            if (l = {
                lane: 2,
                revertLane: ae(),
                action: l,
                hasEagerState: !1,
                eagerState: null,
                next: null
            },
            Vt(e)) {
                if (t)
                    throw Error(r(479))
            } else
                null !== (t = G(e, n, l, 2)) && qr(t, 0, 2)
        }
        function Vt(e) {
            var t = e.alternate;
            return e === Fu || null !== t && t === Fu
        }
        function Wt(e, t) {
            Hu = Uu = !0;
            var n = e.pending;
            null === n ? t.next = t : (t.next = n.next,
            n.next = t),
            e.pending = t
        }
        function Bt(e, t, n) {
            if (4194176 & n) {
                var r = t.lanes;
                n |= r &= e.pendingLanes,
                t.lanes = n,
                N(e, n)
            }
        }
        function qt(e, t, n, r) {
            n = null == (n = n(r, t = e.memoizedState)) ? t : Bl({}, t, n),
            e.memoizedState = n,
            0 === e.lanes && (e.updateQueue.baseState = n)
        }
        function Yt(e, t, n, r, l, a, o) {
            return "function" == typeof (e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, a, o) : !(t.prototype && t.prototype.isPureReactComponent && ve(n, r) && ve(l, a))
        }
        function Gt(e, t, n, r) {
            e = t.state,
            "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r),
            "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && Ku.enqueueReplaceState(t, t.state, null)
        }
        function Xt(e, t) {
            var n = t;
            if ("ref"in t)
                for (var r in n = {},
                t)
                    "ref" !== r && (n[r] = t[r]);
            if (e = e.defaultProps)
                for (var l in n === t && (n = Bl({}, n)),
                e)
                    void 0 === n[l] && (n[l] = e[l]);
            return n
        }
        function Kt(e, t) {
            try {
                (0,
                e.onUncaughtError)(t.value, {
                    componentStack: t.stack
                })
            } catch (n) {
                setTimeout(function() {
                    throw n
                })
            }
        }
        function Zt(e, t, n) {
            try {
                (0,
                e.onCaughtError)(n.value, {
                    componentStack: n.stack,
                    errorBoundary: 1 === t.tag ? t.stateNode : null
                })
            } catch (r) {
                setTimeout(function() {
                    throw r
                })
            }
        }
        function Jt(e, t, n) {
            return (n = se(n)).tag = 3,
            n.payload = {
                element: null
            },
            n.callback = function() {
                Kt(e, t)
            }
            ,
            n
        }
        function en(e) {
            return (e = se(e)).tag = 3,
            e
        }
        function tn(e, t, n, r) {
            var l = n.type.getDerivedStateFromError;
            if ("function" == typeof l) {
                var a = r.value;
                e.payload = function() {
                    return l(a)
                }
                ,
                e.callback = function() {
                    Zt(t, n, r)
                }
            }
            var o = n.stateNode;
            null !== o && "function" == typeof o.componentDidCatch && (e.callback = function() {
                Zt(t, n, r),
                "function" != typeof l && (null === Ks ? Ks = new Set([this]) : Ks.add(this));
                var e = r.stack;
                this.componentDidCatch(r.value, {
                    componentStack: null !== e ? e : ""
                })
            }
            )
        }
        function nn(e, t, n, r) {
            t.child = null === e ? Nu(t, null, n, r) : ju(t, e.child, n, r)
        }
        function rn(e, t, n, r, l) {
            n = n.render;
            var a = t.ref;
            if ("ref"in r) {
                var o = {};
                for (var i in r)
                    "ref" !== i && (o[i] = r[i])
            } else
                o = r;
            return Tn(t),
            r = Oe(e, t, n, o, a, l),
            i = Ae(),
            null === e || es ? (nu && i && M(t),
            t.flags |= 1,
            nn(e, t, r, l),
            t.child) : (Qe(e, t, l),
            zn(e, t, l))
        }
        function ln(e, t, n, r, l) {
            if (null === e) {
                var a = n.type;
                return "function" != typeof a || xl(a) || void 0 !== a.defaultProps || null !== n.compare ? ((e = Nl(n.type, null, r, t, t.mode, l)).ref = t.ref,
                e.return = t,
                t.child = e) : (t.tag = 15,
                t.type = a,
                an(e, t, a, r, l))
            }
            if (a = e.child,
            !Cn(e, l)) {
                var o = a.memoizedProps;
                if ((n = null !== (n = n.compare) ? n : ve)(o, r) && e.ref === t.ref)
                    return zn(e, t, l)
            }
            return t.flags |= 1,
            (e = El(a, r)).ref = t.ref,
            e.return = t,
            t.child = e
        }
        function an(e, t, n, r, l) {
            if (null !== e) {
                var a = e.memoizedProps;
                if (ve(a, r) && e.ref === t.ref) {
                    if (es = !1,
                    t.pendingProps = r = a,
                    !Cn(e, l))
                        return t.lanes = e.lanes,
                        zn(e, t, l);
                    131072 & e.flags && (es = !0)
                }
            }
            return cn(e, t, n, r, l)
        }
        function on(e, t, n) {
            var r = t.pendingProps
              , l = r.children
              , a = !!(2 & t.stateNode._pendingVisibility)
              , o = null !== e ? e.memoizedState : null;
            if (sn(e, t),
            "hidden" === r.mode || a) {
                if (128 & t.flags) {
                    if (r = null !== o ? o.baseLanes | n : n,
                    null !== e) {
                        for (l = t.child = e.child,
                        a = 0; null !== l; )
                            a = a | l.lanes | l.childLanes,
                            l = l.sibling;
                        t.childLanes = a & ~r
                    } else
                        t.childLanes = 0,
                        t.child = null;
                    return un(e, t, r, n)
                }
                if (!(536870912 & n))
                    return t.lanes = t.childLanes = 536870912,
                    un(e, t, null !== o ? o.baseLanes | n : n, n);
                t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                },
                null !== e && Un(0, null !== o ? o.cachePool : null),
                null !== o ? Ee(t, o) : je(),
                Le(t)
            } else
                null !== o ? (Un(0, o.cachePool),
                Ee(t, o),
                Te(),
                t.memoizedState = null) : (null !== e && Un(0, null),
                je(),
                Te());
            return nn(e, t, l, n),
            t.child
        }
        function un(e, t, n, r) {
            var l = Dn();
            return l = null === l ? null : {
                parent: _a ? us._currentValue : us._currentValue2,
                pool: l
            },
            t.memoizedState = {
                baseLanes: n,
                cachePool: l
            },
            null !== e && Un(0, null),
            je(),
            Le(t),
            null !== e && _n(e, t, r, !0),
            null
        }
        function sn(e, t) {
            var n = t.ref;
            if (null === n)
                null !== e && null !== e.ref && (t.flags |= 2097664);
            else {
                if ("function" != typeof n && "object" != typeof n)
                    throw Error(r(284));
                null !== e && e.ref === n || (t.flags |= 2097664)
            }
        }
        function cn(e, t, n, r, l) {
            return Tn(t),
            n = Oe(e, t, n, r, void 0, l),
            r = Ae(),
            null === e || es ? (nu && r && M(t),
            t.flags |= 1,
            nn(e, t, n, l),
            t.child) : (Qe(e, t, l),
            zn(e, t, l))
        }
        function fn(e, t, n, r, l, a) {
            return Tn(t),
            t.updateQueue = null,
            n = Ue(t, r, n, l),
            De(e),
            r = Ae(),
            null === e || es ? (nu && r && M(t),
            t.flags |= 1,
            nn(e, t, n, a),
            t.child) : (Qe(e, t, a),
            zn(e, t, a))
        }
        function dn(e, t, n, r, l) {
            if (Tn(t),
            null === t.stateNode) {
                var a = Si
                  , o = n.contextType;
                "object" == typeof o && null !== o && (a = In(o)),
                a = new n(r,a),
                t.memoizedState = null !== a.state && void 0 !== a.state ? a.state : null,
                a.updater = Ku,
                t.stateNode = a,
                a._reactInternals = t,
                (a = t.stateNode).props = r,
                a.state = t.memoizedState,
                a.refs = {},
                ie(t),
                o = n.contextType,
                a.context = "object" == typeof o && null !== o ? In(o) : Si,
                a.state = t.memoizedState,
                "function" == typeof (o = n.getDerivedStateFromProps) && (qt(t, n, o, r),
                a.state = t.memoizedState),
                "function" == typeof n.getDerivedStateFromProps || "function" == typeof a.getSnapshotBeforeUpdate || "function" != typeof a.UNSAFE_componentWillMount && "function" != typeof a.componentWillMount || (o = a.state,
                "function" == typeof a.componentWillMount && a.componentWillMount(),
                "function" == typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(),
                o !== a.state && Ku.enqueueReplaceState(a, a.state, null),
                me(t, r, a, l),
                pe(),
                a.state = t.memoizedState),
                "function" == typeof a.componentDidMount && (t.flags |= 4194308),
                r = !0
            } else if (null === e) {
                a = t.stateNode;
                var i = t.memoizedProps
                  , u = Xt(n, i);
                a.props = u;
                var s = a.context
                  , c = n.contextType;
                o = Si,
                "object" == typeof c && null !== c && (o = In(c));
                var f = n.getDerivedStateFromProps;
                c = "function" == typeof f || "function" == typeof a.getSnapshotBeforeUpdate,
                i = t.pendingProps !== i,
                c || "function" != typeof a.UNSAFE_componentWillReceiveProps && "function" != typeof a.componentWillReceiveProps || (i || s !== o) && Gt(t, a, r, o),
                yu = !1;
                var d = t.memoizedState;
                a.state = d,
                me(t, r, a, l),
                pe(),
                s = t.memoizedState,
                i || d !== s || yu ? ("function" == typeof f && (qt(t, n, f, r),
                s = t.memoizedState),
                (u = yu || Yt(t, n, u, r, d, s, o)) ? (c || "function" != typeof a.UNSAFE_componentWillMount && "function" != typeof a.componentWillMount || ("function" == typeof a.componentWillMount && a.componentWillMount(),
                "function" == typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount()),
                "function" == typeof a.componentDidMount && (t.flags |= 4194308)) : ("function" == typeof a.componentDidMount && (t.flags |= 4194308),
                t.memoizedProps = r,
                t.memoizedState = s),
                a.props = r,
                a.state = s,
                a.context = o,
                r = u) : ("function" == typeof a.componentDidMount && (t.flags |= 4194308),
                r = !1)
            } else {
                a = t.stateNode,
                ue(e, t),
                c = Xt(n, o = t.memoizedProps),
                a.props = c,
                f = t.pendingProps,
                d = a.context,
                s = n.contextType,
                u = Si,
                "object" == typeof s && null !== s && (u = In(s)),
                (s = "function" == typeof (i = n.getDerivedStateFromProps) || "function" == typeof a.getSnapshotBeforeUpdate) || "function" != typeof a.UNSAFE_componentWillReceiveProps && "function" != typeof a.componentWillReceiveProps || (o !== f || d !== u) && Gt(t, a, r, u),
                yu = !1,
                d = t.memoizedState,
                a.state = d,
                me(t, r, a, l),
                pe();
                var p = t.memoizedState;
                o !== f || d !== p || yu || null !== e && null !== e.dependencies && Ln(e.dependencies) ? ("function" == typeof i && (qt(t, n, i, r),
                p = t.memoizedState),
                (c = yu || Yt(t, n, c, r, d, p, u) || null !== e && null !== e.dependencies && Ln(e.dependencies)) ? (s || "function" != typeof a.UNSAFE_componentWillUpdate && "function" != typeof a.componentWillUpdate || ("function" == typeof a.componentWillUpdate && a.componentWillUpdate(r, p, u),
                "function" == typeof a.UNSAFE_componentWillUpdate && a.UNSAFE_componentWillUpdate(r, p, u)),
                "function" == typeof a.componentDidUpdate && (t.flags |= 4),
                "function" == typeof a.getSnapshotBeforeUpdate && (t.flags |= 1024)) : ("function" != typeof a.componentDidUpdate || o === e.memoizedProps && d === e.memoizedState || (t.flags |= 4),
                "function" != typeof a.getSnapshotBeforeUpdate || o === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024),
                t.memoizedProps = r,
                t.memoizedState = p),
                a.props = r,
                a.state = p,
                a.context = u,
                r = c) : ("function" != typeof a.componentDidUpdate || o === e.memoizedProps && d === e.memoizedState || (t.flags |= 4),
                "function" != typeof a.getSnapshotBeforeUpdate || o === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024),
                r = !1)
            }
            return a = r,
            sn(e, t),
            r = !!(128 & t.flags),
            a || r ? (a = t.stateNode,
            n = r && "function" != typeof n.getDerivedStateFromError ? null : a.render(),
            t.flags |= 1,
            null !== e && r ? (t.child = ju(t, e.child, null, l),
            t.child = ju(t, null, n, l)) : nn(e, t, n, l),
            t.memoizedState = a.state,
            e = t.child) : e = zn(e, t, l),
            e
        }
        function pn(e, t, n, r) {
            return W(),
            t.flags |= 256,
            nn(e, t, n, r),
            t.child
        }
        function mn(e) {
            return {
                baseLanes: e,
                cachePool: Hn()
            }
        }
        function hn(e, t, n) {
            return e = null !== e ? e.childLanes & ~n : 0,
            t && (e |= $s),
            e
        }
        function gn(e, n, l) {
            var a, o = n.pendingProps, i = !1, u = !!(128 & n.flags);
            if ((a = u) || (a = (null === e || null !== e.memoizedState) && !!(2 & Ru.current)),
            a && (i = !0,
            n.flags &= -129),
            a = !!(32 & n.flags),
            n.flags &= -33,
            null === e) {
                if (nu) {
                    if (i ? _e(n) : Te(),
                    nu) {
                        var s, c = tu;
                        (s = c) && (null !== (c = Ho(c, lu)) ? (n.memoizedState = {
                            dehydrated: c,
                            treeContext: null !== qi ? {
                                id: Yi,
                                overflow: Gi
                            } : null,
                            retryLane: 536870912
                        },
                        (s = t(18, null, null, 0)).stateNode = c,
                        s.return = n,
                        n.child = s,
                        eu = n,
                        tu = null,
                        s = !0) : s = !1),
                        s || A(n)
                    }
                    if (null !== (c = n.memoizedState) && null !== (c = c.dehydrated))
                        return No(c) ? n.lanes = 16 : n.lanes = 536870912,
                        null;
                    Ie(n)
                }
                return c = o.children,
                o = o.fallback,
                i ? (Te(),
                c = bn({
                    mode: "hidden",
                    children: c
                }, i = n.mode),
                o = _l(o, i, l, null),
                c.return = n,
                o.return = n,
                c.sibling = o,
                n.child = c,
                (i = n.child).memoizedState = mn(l),
                i.childLanes = hn(e, a, l),
                n.memoizedState = ts,
                o) : (_e(n),
                vn(n, c))
            }
            if (null !== (s = e.memoizedState) && null !== (c = s.dehydrated)) {
                if (u)
                    256 & n.flags ? (_e(n),
                    n.flags &= -257,
                    n = yn(e, n, l)) : null !== n.memoizedState ? (Te(),
                    n.child = e.child,
                    n.flags |= 128,
                    n = null) : (Te(),
                    i = o.fallback,
                    c = n.mode,
                    o = bn({
                        mode: "visible",
                        children: o.children
                    }, c),
                    (i = _l(i, c, l, null)).flags |= 2,
                    o.return = n,
                    i.return = n,
                    o.sibling = i,
                    n.child = o,
                    ju(n, e.child, null, l),
                    (o = n.child).memoizedState = mn(l),
                    o.childLanes = hn(e, a, l),
                    n.memoizedState = ts,
                    n = i);
                else if (_e(n),
                No(c))
                    a = _o(c).digest,
                    (o = Error(r(419))).stack = "",
                    o.digest = a,
                    B({
                        value: o,
                        source: null,
                        stack: null
                    }),
                    n = yn(e, n, l);
                else if (es || _n(e, n, l, !1),
                a = 0 !== (l & e.childLanes),
                es || a) {
                    if (null !== (a = _s)) {
                        if (42 & (o = l & -l))
                            o = 1;
                        else
                            switch (o) {
                            case 2:
                                o = 1;
                                break;
                            case 8:
                                o = 4;
                                break;
                            case 32:
                                o = 16;
                                break;
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
                                o = 64;
                                break;
                            case 268435456:
                                o = 134217728;
                                break;
                            default:
                                o = 0
                            }
                        if (0 !== (o = 0 !== (o & (a.suspendedLanes | l)) ? 0 : o) && o !== s.retryLane)
                            throw s.retryLane = o,
                            X(e, o),
                            qr(a, 0, o),
                            Ju
                    }
                    jo(c) || ol(),
                    n = yn(e, n, l)
                } else
                    jo(c) ? (n.flags |= 128,
                    n.child = e.child,
                    n = zl.bind(null, e),
                    Lo(c, n),
                    n = null) : (e = s.treeContext,
                    Ia && (tu = Oo(c),
                    eu = n,
                    nu = !0,
                    ru = null,
                    lu = !1,
                    null !== e && (Wi[Bi++] = Yi,
                    Wi[Bi++] = Gi,
                    Wi[Bi++] = qi,
                    Yi = e.id,
                    Gi = e.overflow,
                    qi = n)),
                    (n = vn(n, o.children)).flags |= 4096);
                return n
            }
            return i ? (Te(),
            i = o.fallback,
            c = n.mode,
            u = (s = e.child).sibling,
            (o = El(s, {
                mode: "hidden",
                children: o.children
            })).subtreeFlags = 31457280 & s.subtreeFlags,
            null !== u ? i = El(u, i) : (i = _l(i, c, l, null)).flags |= 2,
            i.return = n,
            o.return = n,
            o.sibling = i,
            n.child = o,
            o = i,
            i = n.child,
            null === (c = e.child.memoizedState) ? c = mn(l) : (null !== (s = c.cachePool) ? (u = _a ? us._currentValue : us._currentValue2,
            s = s.parent !== u ? {
                parent: u,
                pool: u
            } : s) : s = Hn(),
            c = {
                baseLanes: c.baseLanes | l,
                cachePool: s
            }),
            i.memoizedState = c,
            i.childLanes = hn(e, a, l),
            n.memoizedState = ts,
            o) : (_e(n),
            e = (l = e.child).sibling,
            (l = El(l, {
                mode: "visible",
                children: o.children
            })).return = n,
            l.sibling = null,
            null !== e && (null === (a = n.deletions) ? (n.deletions = [e],
            n.flags |= 16) : a.push(e)),
            n.child = l,
            n.memoizedState = null,
            l)
        }
        function vn(e, t) {
            return (t = bn({
                mode: "visible",
                children: t
            }, e.mode)).return = e,
            e.child = t
        }
        function bn(e, t) {
            return Ll(e, t, 0, null)
        }
        function yn(e, t, n) {
            return ju(t, e.child, null, n),
            (e = vn(t, t.pendingProps.children)).flags |= 2,
            t.memoizedState = null,
            e
        }
        function Sn(e, t, n) {
            e.lanes |= t;
            var r = e.alternate;
            null !== r && (r.lanes |= t),
            jn(e.return, t, n)
        }
        function wn(e, t, n, r, l) {
            var a = e.memoizedState;
            null === a ? e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: l
            } : (a.isBackwards = t,
            a.rendering = null,
            a.renderingStartTime = 0,
            a.last = r,
            a.tail = n,
            a.tailMode = l)
        }
        function kn(e, t, n) {
            var r = t.pendingProps
              , l = r.revealOrder
              , a = r.tail;
            if (nn(e, t, r.children, n),
            2 & (r = Ru.current))
                r = 1 & r | 2,
                t.flags |= 128;
            else {
                if (null !== e && 128 & e.flags)
                    e: for (e = t.child; null !== e; ) {
                        if (13 === e.tag)
                            null !== e.memoizedState && Sn(e, n, t);
                        else if (19 === e.tag)
                            Sn(e, n, t);
                        else if (null !== e.child) {
                            e.child.return = e,
                            e = e.child;
                            continue
                        }
                        if (e === t)
                            break e;
                        for (; null === e.sibling; ) {
                            if (null === e.return || e.return === t)
                                break e;
                            e = e.return
                        }
                        e.sibling.return = e.return,
                        e = e.sibling
                    }
                r &= 1
            }
            switch (v(Ru, r),
            l) {
            case "forwards":
                for (n = t.child,
                l = null; null !== n; )
                    null !== (e = n.alternate) && null === Re(e) && (l = n),
                    n = n.sibling;
                null === (n = l) ? (l = t.child,
                t.child = null) : (l = n.sibling,
                n.sibling = null),
                wn(t, !1, l, n, a);
                break;
            case "backwards":
                for (n = null,
                l = t.child,
                t.child = null; null !== l; ) {
                    if (null !== (e = l.alternate) && null === Re(e)) {
                        t.child = l;
                        break
                    }
                    e = l.sibling,
                    l.sibling = n,
                    n = l,
                    l = e
                }
                wn(t, !0, n, null, a);
                break;
            case "together":
                wn(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null
            }
            return t.child
        }
        function zn(e, t, n) {
            if (null !== e && (t.dependencies = e.dependencies),
            Hs |= t.lanes,
            0 === (n & t.childLanes)) {
                if (null === e)
                    return null;
                if (_n(e, t, n, !1),
                0 === (n & t.childLanes))
                    return null
            }
            if (null !== e && t.child !== e.child)
                throw Error(r(153));
            if (null !== t.child) {
                for (n = El(e = t.child, e.pendingProps),
                t.child = n,
                n.return = t; null !== e.sibling; )
                    e = e.sibling,
                    (n = n.sibling = El(e, e.pendingProps)).return = t;
                n.sibling = null
            }
            return t.child
        }
        function Cn(e, t) {
            return 0 !== (e.lanes & t) || !(null === (e = e.dependencies) || !Ln(e))
        }
        function Pn(e, t, n) {
            if (null !== e)
                if (e.memoizedProps !== t.pendingProps)
                    es = !0;
                else {
                    if (!(Cn(e, n) || 128 & t.flags))
                        return es = !1,
                        function(e, t, n) {
                            switch (t.tag) {
                            case 3:
                                O(t, t.stateNode.containerInfo),
                                xn(0, us, e.memoizedState.cache),
                                W();
                                break;
                            case 27:
                            case 5:
                                U(t);
                                break;
                            case 4:
                                O(t, t.stateNode.containerInfo);
                                break;
                            case 10:
                                xn(0, t.type, t.memoizedProps.value);
                                break;
                            case 13:
                                var r = t.memoizedState;
                                if (null !== r)
                                    return null !== r.dehydrated ? (_e(t),
                                    t.flags |= 128,
                                    null) : 0 !== (n & t.child.childLanes) ? gn(e, t, n) : (_e(t),
                                    null !== (e = zn(e, t, n)) ? e.sibling : null);
                                _e(t);
                                break;
                            case 19:
                                var l = !!(128 & e.flags);
                                if ((r = 0 !== (n & t.childLanes)) || (_n(e, t, n, !1),
                                r = 0 !== (n & t.childLanes)),
                                l) {
                                    if (r)
                                        return kn(e, t, n);
                                    t.flags |= 128
                                }
                                if (null !== (l = t.memoizedState) && (l.rendering = null,
                                l.tail = null,
                                l.lastEffect = null),
                                v(Ru, Ru.current),
                                r)
                                    break;
                                return null;
                            case 22:
                            case 23:
                                return t.lanes = 0,
                                on(e, t, n);
                            case 24:
                                xn(0, us, e.memoizedState.cache)
                            }
                            return zn(e, t, n)
                        }(e, t, n);
                    es = !!(131072 & e.flags)
                }
            else
                es = !1,
                nu && 1048576 & t.flags && R(t, Vi, t.index);
            switch (t.lanes = 0,
            t.tag) {
            case 16:
                e: {
                    e = t.pendingProps;
                    var l = t.elementType
                      , o = l._init;
                    if (l = o(l._payload),
                    t.type = l,
                    "function" != typeof l) {
                        if (null != l) {
                            if ((o = l.$$typeof) === na) {
                                t.tag = 11,
                                t = rn(null, t, l, e, n);
                                break e
                            }
                            if (o === aa) {
                                t.tag = 14,
                                t = ln(null, t, l, e, n);
                                break e
                            }
                        }
                        throw t = a(l) || l,
                        Error(r(306, t, ""))
                    }
                    xl(l) ? (e = Xt(l, e),
                    t.tag = 1,
                    t = dn(null, t, l, e, n)) : (t.tag = 0,
                    t = cn(null, t, l, e, n))
                }
                return t;
            case 0:
                return cn(e, t, t.type, t.pendingProps, n);
            case 1:
                return dn(e, t, l = t.type, o = Xt(l, t.pendingProps), n);
            case 3:
                e: {
                    if (O(t, t.stateNode.containerInfo),
                    null === e)
                        throw Error(r(387));
                    var i = t.pendingProps;
                    l = (o = t.memoizedState).element,
                    ue(e, t),
                    me(t, i, null, n);
                    var u = t.memoizedState;
                    if (i = u.cache,
                    xn(0, us, i),
                    i !== o.cache && Nn(t, [us], n, !0),
                    pe(),
                    i = u.element,
                    Ia && o.isDehydrated) {
                        if (o = {
                            element: i,
                            isDehydrated: !1,
                            cache: u.cache
                        },
                        t.updateQueue.baseState = o,
                        t.memoizedState = o,
                        256 & t.flags) {
                            t = pn(e, t, i, n);
                            break e
                        }
                        if (i !== l) {
                            B(l = T(Error(r(424)), t)),
                            t = pn(e, t, i, n);
                            break e
                        }
                        for (Ia && (tu = Fo(t.stateNode.containerInfo),
                        eu = t,
                        nu = !0,
                        ru = null,
                        lu = !0),
                        n = Nu(t, null, i, n),
                        t.child = n; n; )
                            n.flags = -3 & n.flags | 4096,
                            n = n.sibling
                    } else {
                        if (W(),
                        i === l) {
                            t = zn(e, t, n);
                            break e
                        }
                        nn(e, t, i, n)
                    }
                    t = t.child
                }
                return t;
            case 26:
                if (Zo)
                    return sn(e, t),
                    null === e ? (n = ti(t.type, null, t.pendingProps, null)) ? t.memoizedState = n : nu || (t.stateNode = ii(t.type, t.pendingProps, Zi.current, t)) : t.memoizedState = ti(t.type, e.memoizedProps, t.pendingProps, e.memoizedState),
                    null;
            case 27:
                if (di)
                    return U(t),
                    null === e && di && nu && (l = t.stateNode = pi(t.type, t.pendingProps, Zi.current, Xi.current, !1),
                    eu = t,
                    lu = !0,
                    tu = Mo(l)),
                    l = t.pendingProps.children,
                    null !== e || nu ? nn(e, t, l, n) : t.child = ju(t, null, l, n),
                    sn(e, t),
                    t.child;
            case 5:
                return null === e && nu && (Xo(t.type, t.pendingProps, Xi.current),
                (o = l = tu) && (null !== (l = Do(l, t.type, t.pendingProps, lu)) ? (t.stateNode = l,
                eu = t,
                tu = Mo(l),
                lu = !1,
                o = !0) : o = !1),
                o || A(t)),
                U(t),
                o = t.type,
                i = t.pendingProps,
                u = null !== e ? e.memoizedProps : null,
                l = i.children,
                Pa(o, i) ? l = null : null !== u && Pa(o, u) && (t.flags |= 32),
                null !== t.memoizedState && (o = Oe(e, t, He, null, null, n),
                _a ? qa._currentValue = o : qa._currentValue2 = o),
                sn(e, t),
                nn(e, t, l, n),
                t.child;
            case 6:
                return null === e && nu && (Ko(t.pendingProps, Xi.current),
                (e = n = tu) && (null !== (n = Uo(n, t.pendingProps, lu)) ? (t.stateNode = n,
                eu = t,
                tu = null,
                e = !0) : e = !1),
                e || A(t)),
                null;
            case 13:
                return gn(e, t, n);
            case 4:
                return O(t, t.stateNode.containerInfo),
                l = t.pendingProps,
                null === e ? t.child = ju(t, null, l, n) : nn(e, t, l, n),
                t.child;
            case 11:
                return rn(e, t, t.type, t.pendingProps, n);
            case 7:
                return nn(e, t, t.pendingProps, n),
                t.child;
            case 8:
            case 12:
                return nn(e, t, t.pendingProps.children, n),
                t.child;
            case 10:
                return l = t.pendingProps,
                xn(0, t.type, l.value),
                nn(e, t, l.children, n),
                t.child;
            case 9:
                return o = t.type._context,
                l = t.pendingProps.children,
                Tn(t),
                l = l(o = In(o)),
                t.flags |= 1,
                nn(e, t, l, n),
                t.child;
            case 14:
                return ln(e, t, t.type, t.pendingProps, n);
            case 15:
                return an(e, t, t.type, t.pendingProps, n);
            case 19:
                return kn(e, t, n);
            case 22:
                return on(e, t, n);
            case 24:
                return Tn(t),
                l = In(us),
                null === e ? (null === (o = Dn()) && (o = _s,
                i = Fn(),
                o.pooledCache = i,
                i.refCount++,
                null !== i && (o.pooledCacheLanes |= n),
                o = i),
                t.memoizedState = {
                    parent: l,
                    cache: o
                },
                ie(t),
                xn(0, us, o)) : (0 !== (e.lanes & n) && (ue(e, t),
                me(t, null, null, n),
                pe()),
                o = e.memoizedState,
                i = t.memoizedState,
                o.parent !== l ? (o = {
                    parent: l,
                    cache: l
                },
                t.memoizedState = o,
                0 === t.lanes && (t.memoizedState = t.updateQueue.baseState = o),
                xn(0, us, l)) : (l = i.cache,
                xn(0, us, l),
                l !== o.cache && Nn(t, [us], n, !0))),
                nn(e, t, t.pendingProps.children, n),
                t.child;
            case 29:
                throw t.pendingProps
            }
            throw Error(r(156, t.tag))
        }
        function xn(e, t, n) {
            _a ? (v(ns, t._currentValue),
            t._currentValue = n) : (v(ns, t._currentValue2),
            t._currentValue2 = n)
        }
        function En(e) {
            var t = ns.current;
            _a ? e._currentValue = t : e._currentValue2 = t,
            g(ns)
        }
        function jn(e, t, n) {
            for (; null !== e; ) {
                var r = e.alternate;
                if ((e.childLanes & t) !== t ? (e.childLanes |= t,
                null !== r && (r.childLanes |= t)) : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
                e === n)
                    break;
                e = e.return
            }
        }
        function Nn(e, t, n, l) {
            var a = e.child;
            for (null !== a && (a.return = e); null !== a; ) {
                var o = a.dependencies;
                if (null !== o) {
                    var i = a.child;
                    o = o.firstContext;
                    e: for (; null !== o; ) {
                        var u = o;
                        o = a;
                        for (var s = 0; s < t.length; s++)
                            if (u.context === t[s]) {
                                o.lanes |= n,
                                null !== (u = o.alternate) && (u.lanes |= n),
                                jn(o.return, n, e),
                                l || (i = null);
                                break e
                            }
                        o = u.next
                    }
                } else if (18 === a.tag) {
                    if (null === (i = a.return))
                        throw Error(r(341));
                    i.lanes |= n,
                    null !== (o = i.alternate) && (o.lanes |= n),
                    jn(i, n, e),
                    i = null
                } else
                    i = a.child;
                if (null !== i)
                    i.return = a;
                else
                    for (i = a; null !== i; ) {
                        if (i === e) {
                            i = null;
                            break
                        }
                        if (null !== (a = i.sibling)) {
                            a.return = i.return,
                            i = a;
                            break
                        }
                        i = i.return
                    }
                a = i
            }
        }
        function _n(e, t, n, l) {
            e = null;
            for (var a = t, o = !1; null !== a; ) {
                if (!o)
                    if (524288 & a.flags)
                        o = !0;
                    else if (262144 & a.flags)
                        break;
                if (10 === a.tag) {
                    var i = a.alternate;
                    if (null === i)
                        throw Error(r(387));
                    if (null !== (i = i.memoizedProps)) {
                        var u = a.type;
                        Ui(a.pendingProps.value, i.value) || (null !== e ? e.push(u) : e = [u])
                    }
                } else if (a === Ji.current) {
                    if (null === (i = a.alternate))
                        throw Error(r(387));
                    i.memoizedState.memoizedState !== a.memoizedState.memoizedState && (null !== e ? e.push(qa) : e = [qa])
                }
                a = a.return
            }
            null !== e && Nn(t, e, n, l),
            t.flags |= 262144
        }
        function Ln(e) {
            for (e = e.firstContext; null !== e; ) {
                var t = e.context;
                if (!Ui(_a ? t._currentValue : t._currentValue2, e.memoizedValue))
                    return !0;
                e = e.next
            }
            return !1
        }
        function Tn(e) {
            rs = e,
            ls = null,
            null !== (e = e.dependencies) && (e.firstContext = null)
        }
        function In(e) {
            return Mn(rs, e)
        }
        function Rn(e, t) {
            return null === rs && Tn(e),
            Mn(e, t)
        }
        function Mn(e, t) {
            var n = _a ? t._currentValue : t._currentValue2;
            if (t = {
                context: t,
                memoizedValue: n,
                next: null
            },
            null === ls) {
                if (null === e)
                    throw Error(r(308));
                ls = t,
                e.dependencies = {
                    lanes: 0,
                    firstContext: t
                },
                e.flags |= 524288
            } else
                ls = ls.next = t;
            return n
        }
        function Fn() {
            return {
                controller: new as,
                data: new Map,
                refCount: 0
            }
        }
        function On(e) {
            e.refCount--,
            0 === e.refCount && os(is, function() {
                e.controller.abort()
            })
        }
        function Dn() {
            var e = cs.current;
            return null !== e ? e : _s.pooledCache
        }
        function Un(e, t) {
            v(cs, null === t ? cs.current : t.pool)
        }
        function Hn() {
            var e = Dn();
            return null === e ? null : {
                parent: _a ? us._currentValue : us._currentValue2,
                pool: e
            }
        }
        function An(e) {
            e.flags |= 4
        }
        function Qn(e, t) {
            if (null !== e && e.child === t.child)
                return !1;
            if (16 & t.flags)
                return !0;
            for (e = t.child; null !== e; ) {
                if (13878 & e.flags || 13878 & e.subtreeFlags)
                    return !0;
                e = e.sibling
            }
            return !1
        }
        function $n(e, t, n, r) {
            if (La)
                for (n = t.child; null !== n; ) {
                    if (5 === n.tag || 6 === n.tag)
                        za(e, n.stateNode);
                    else if (!(4 === n.tag || di && 27 === n.tag) && null !== n.child) {
                        n.child.return = n,
                        n = n.child;
                        continue
                    }
                    if (n === t)
                        break;
                    for (; null === n.sibling; ) {
                        if (null === n.return || n.return === t)
                            return;
                        n = n.return
                    }
                    n.sibling.return = n.return,
                    n = n.sibling
                }
            else if (Ta)
                for (var l = t.child; null !== l; ) {
                    if (5 === l.tag) {
                        var a = l.stateNode;
                        n && r && (a = xo(a, l.type, l.memoizedProps)),
                        za(e, a)
                    } else if (6 === l.tag)
                        a = l.stateNode,
                        n && r && (a = Eo(a, l.memoizedProps)),
                        za(e, a);
                    else if (4 !== l.tag)
                        if (22 === l.tag && null !== l.memoizedState)
                            null !== (a = l.child) && (a.return = l),
                            $n(e, l, !0, !0);
                        else if (null !== l.child) {
                            l.child.return = l,
                            l = l.child;
                            continue
                        }
                    if (l === t)
                        break;
                    for (; null === l.sibling; ) {
                        if (null === l.return || l.return === t)
                            return;
                        l = l.return
                    }
                    l.sibling.return = l.return,
                    l = l.sibling
                }
        }
        function Vn(e, t, n, r) {
            if (Ta)
                for (var l = t.child; null !== l; ) {
                    if (5 === l.tag) {
                        var a = l.stateNode;
                        n && r && (a = xo(a, l.type, l.memoizedProps)),
                        zo(e, a)
                    } else if (6 === l.tag)
                        a = l.stateNode,
                        n && r && (a = Eo(a, l.memoizedProps)),
                        zo(e, a);
                    else if (4 !== l.tag)
                        if (22 === l.tag && null !== l.memoizedState)
                            null !== (a = l.child) && (a.return = l),
                            Vn(e, l, !(null !== l.memoizedProps && "manual" === l.memoizedProps.mode), !0);
                        else if (null !== l.child) {
                            l.child.return = l,
                            l = l.child;
                            continue
                        }
                    if (l === t)
                        break;
                    for (; null === l.sibling; ) {
                        if (null === l.return || l.return === t)
                            return;
                        l = l.return
                    }
                    l.sibling.return = l.return,
                    l = l.sibling
                }
        }
        function Wn(e, t) {
            if (Ta && Qn(e, t)) {
                var n = (e = t.stateNode).containerInfo
                  , r = ko();
                Vn(r, t, !1, !1),
                e.pendingChildren = r,
                An(t),
                Co(n, r)
            }
        }
        function Bn(e, t, n, r) {
            if (La)
                e.memoizedProps !== r && An(t);
            else if (Ta) {
                var l = e.stateNode
                  , a = e.memoizedProps;
                if ((e = Qn(e, t)) || a !== r) {
                    var o = Xi.current;
                    (a = wo(l, n, a, r, !e, null)) === l ? t.stateNode = l : (Ca(a, n, r, o) && An(t),
                    t.stateNode = a,
                    e ? $n(a, t, !1, !1) : An(t))
                } else
                    t.stateNode = l
            }
        }
        function qn(e, t, n) {
            if (Aa(t, n)) {
                if (e.flags |= 16777216,
                !Qa(t, n)) {
                    if (!rl())
                        throw Pu = Cu,
                        zu;
                    e.flags |= 8192
                }
            } else
                e.flags &= -16777217
        }
        function Yn(e, t) {
            if (si(t)) {
                if (e.flags |= 16777216,
                !ci(t)) {
                    if (!rl())
                        throw Pu = Cu,
                        zu;
                    e.flags |= 8192
                }
            } else
                e.flags &= -16777217
        }
        function Gn(e, t) {
            null !== t && (e.flags |= 4),
            16384 & e.flags && (t = 22 !== e.tag ? P() : 536870912,
            e.lanes |= t,
            Vs |= t)
        }
        function Xn(e, t) {
            if (!nu)
                switch (e.tailMode) {
                case "hidden":
                    t = e.tail;
                    for (var n = null; null !== t; )
                        null !== t.alternate && (n = t),
                        t = t.sibling;
                    null === n ? e.tail = null : n.sibling = null;
                    break;
                case "collapsed":
                    n = e.tail;
                    for (var r = null; null !== n; )
                        null !== n.alternate && (r = n),
                        n = n.sibling;
                    null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null
                }
        }
        function Kn(e) {
            var t = null !== e.alternate && e.alternate.child === e.child
              , n = 0
              , r = 0;
            if (t)
                for (var l = e.child; null !== l; )
                    n |= l.lanes | l.childLanes,
                    r |= 31457280 & l.subtreeFlags,
                    r |= 31457280 & l.flags,
                    l.return = e,
                    l = l.sibling;
            else
                for (l = e.child; null !== l; )
                    n |= l.lanes | l.childLanes,
                    r |= l.subtreeFlags,
                    r |= l.flags,
                    l.return = e,
                    l = l.sibling;
            return e.subtreeFlags |= r,
            e.childLanes = n,
            t
        }
        function Zn(e, t, n) {
            var l = t.pendingProps;
            switch (F(t),
            t.tag) {
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
            case 1:
                return Kn(t),
                null;
            case 3:
                return n = t.stateNode,
                l = null,
                null !== e && (l = e.memoizedState.cache),
                t.memoizedState.cache !== l && (t.flags |= 2048),
                En(us),
                D(),
                n.pendingContext && (n.context = n.pendingContext,
                n.pendingContext = null),
                null !== e && null !== e.child || (V(t) ? An(t) : null === e || e.memoizedState.isDehydrated && !(256 & t.flags) || (t.flags |= 1024,
                null !== ru && (Gr(ru),
                ru = null))),
                Wn(e, t),
                Kn(t),
                null;
            case 26:
                if (Zo) {
                    n = t.type;
                    var a = t.memoizedState;
                    return null === e ? (An(t),
                    null !== a ? (Kn(t),
                    Yn(t, a)) : (Kn(t),
                    qn(t, n, l))) : a ? a !== e.memoizedState ? (An(t),
                    Kn(t),
                    Yn(t, a)) : (Kn(t),
                    t.flags &= -16777217) : (La ? e.memoizedProps !== l && An(t) : Bn(e, t, n, l),
                    Kn(t),
                    qn(t, n, l)),
                    null
                }
            case 27:
                if (di) {
                    if (H(t),
                    n = Zi.current,
                    a = t.type,
                    null !== e && null != t.stateNode)
                        La ? e.memoizedProps !== l && An(t) : Bn(e, t, a, l);
                    else {
                        if (!l) {
                            if (null === t.stateNode)
                                throw Error(r(166));
                            return Kn(t),
                            null
                        }
                        e = Xi.current,
                        V(t) ? Q(t, e) : (e = pi(a, l, n, e, !0),
                        t.stateNode = e,
                        An(t))
                    }
                    return Kn(t),
                    null
                }
            case 5:
                if (H(t),
                n = t.type,
                null !== e && null != t.stateNode)
                    Bn(e, t, n, l);
                else {
                    if (!l) {
                        if (null === t.stateNode)
                            throw Error(r(166));
                        return Kn(t),
                        null
                    }
                    e = Xi.current,
                    V(t) ? Q(t, e) : ($n(a = ka(n, l, Zi.current, e, t), t, !1, !1),
                    t.stateNode = a,
                    Ca(a, n, l, e) && An(t))
                }
                return Kn(t),
                qn(t, t.type, t.pendingProps),
                null;
            case 6:
                if (e && null != t.stateNode)
                    n = e.memoizedProps,
                    La ? n !== l && An(t) : Ta && (n !== l ? (t.stateNode = xa(l, Zi.current, Xi.current, t),
                    An(t)) : t.stateNode = e.stateNode);
                else {
                    if ("string" != typeof l && null === t.stateNode)
                        throw Error(r(166));
                    if (e = Zi.current,
                    n = Xi.current,
                    V(t)) {
                        if (!Ia)
                            throw Error(r(176));
                        if (e = t.stateNode,
                        n = t.memoizedProps,
                        l = null,
                        null !== (a = eu))
                            switch (a.tag) {
                            case 27:
                            case 5:
                                l = a.memoizedProps
                            }
                        Qo(e, n, t, l) || A(t)
                    } else
                        t.stateNode = xa(l, e, n, t)
                }
                return Kn(t),
                null;
            case 13:
                if (l = t.memoizedState,
                null === e || null !== e.memoizedState && null !== e.memoizedState.dehydrated) {
                    if (a = V(t),
                    null !== l && null !== l.dehydrated) {
                        if (null === e) {
                            if (!a)
                                throw Error(r(318));
                            if (!Ia)
                                throw Error(r(344));
                            if (!(a = null !== (a = t.memoizedState) ? a.dehydrated : null))
                                throw Error(r(317));
                            $o(a, t)
                        } else
                            W(),
                            !(128 & t.flags) && (t.memoizedState = null),
                            t.flags |= 4;
                        Kn(t),
                        a = !1
                    } else
                        null !== ru && (Gr(ru),
                        ru = null),
                        a = !0;
                    if (!a)
                        return 256 & t.flags ? (Ie(t),
                        t) : (Ie(t),
                        null)
                }
                if (Ie(t),
                128 & t.flags)
                    return t.lanes = n,
                    t;
                if (n = null !== l,
                e = null !== e && null !== e.memoizedState,
                n) {
                    a = null,
                    null !== (l = t.child).alternate && null !== l.alternate.memoizedState && null !== l.alternate.memoizedState.cachePool && (a = l.alternate.memoizedState.cachePool.pool);
                    var o = null;
                    null !== l.memoizedState && null !== l.memoizedState.cachePool && (o = l.memoizedState.cachePool.pool),
                    o !== a && (l.flags |= 2048)
                }
                return n !== e && n && (t.child.flags |= 8192),
                Gn(t, t.updateQueue),
                Kn(t),
                null;
            case 4:
                return D(),
                Wn(e, t),
                null === e && Ma(t.stateNode.containerInfo),
                Kn(t),
                null;
            case 10:
                return En(t.type),
                Kn(t),
                null;
            case 19:
                if (g(Ru),
                null === (a = t.memoizedState))
                    return Kn(t),
                    null;
                if (l = !!(128 & t.flags),
                null === (o = a.rendering))
                    if (l)
                        Xn(a, !1);
                    else {
                        if (0 !== Us || null !== e && 128 & e.flags)
                            for (e = t.child; null !== e; ) {
                                if (null !== (o = Re(e))) {
                                    for (t.flags |= 128,
                                    Xn(a, !1),
                                    e = o.updateQueue,
                                    t.updateQueue = e,
                                    Gn(t, e),
                                    t.subtreeFlags = 0,
                                    e = n,
                                    n = t.child; null !== n; )
                                        jl(n, e),
                                        n = n.sibling;
                                    return v(Ru, 1 & Ru.current | 2),
                                    t.child
                                }
                                e = e.sibling
                            }
                        null !== a.tail && _i() > Gs && (t.flags |= 128,
                        l = !0,
                        Xn(a, !1),
                        t.lanes = 4194304)
                    }
                else {
                    if (!l)
                        if (null !== (e = Re(o))) {
                            if (t.flags |= 128,
                            l = !0,
                            e = e.updateQueue,
                            t.updateQueue = e,
                            Gn(t, e),
                            Xn(a, !0),
                            null === a.tail && "hidden" === a.tailMode && !o.alternate && !nu)
                                return Kn(t),
                                null
                        } else
                            2 * _i() - a.renderingStartTime > Gs && 536870912 !== n && (t.flags |= 128,
                            l = !0,
                            Xn(a, !1),
                            t.lanes = 4194304);
                    a.isBackwards ? (o.sibling = t.child,
                    t.child = o) : (null !== (e = a.last) ? e.sibling = o : t.child = o,
                    a.last = o)
                }
                return null !== a.tail ? (t = a.tail,
                a.rendering = t,
                a.tail = t.sibling,
                a.renderingStartTime = _i(),
                t.sibling = null,
                e = Ru.current,
                v(Ru, l ? 1 & e | 2 : 1 & e),
                t) : (Kn(t),
                null);
            case 22:
            case 23:
                return Ie(t),
                Ne(),
                l = null !== t.memoizedState,
                null !== e ? null !== e.memoizedState !== l && (t.flags |= 8192) : l && (t.flags |= 8192),
                l ? !!(536870912 & n) && !(128 & t.flags) && (Kn(t),
                6 & t.subtreeFlags && (t.flags |= 8192)) : Kn(t),
                null !== (n = t.updateQueue) && Gn(t, n.retryQueue),
                n = null,
                null !== e && null !== e.memoizedState && null !== e.memoizedState.cachePool && (n = e.memoizedState.cachePool.pool),
                l = null,
                null !== t.memoizedState && null !== t.memoizedState.cachePool && (l = t.memoizedState.cachePool.pool),
                l !== n && (t.flags |= 2048),
                null !== e && g(cs),
                null;
            case 24:
                return n = null,
                null !== e && (n = e.memoizedState.cache),
                t.memoizedState.cache !== n && (t.flags |= 2048),
                En(us),
                Kn(t),
                null;
            case 25:
                return null
            }
            throw Error(r(156, t.tag))
        }
        function Jn(e, t) {
            switch (F(t),
            t.tag) {
            case 1:
                return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128,
                t) : null;
            case 3:
                return En(us),
                D(),
                65536 & (e = t.flags) && !(128 & e) ? (t.flags = -65537 & e | 128,
                t) : null;
            case 26:
            case 27:
            case 5:
                return H(t),
                null;
            case 13:
                if (Ie(t),
                null !== (e = t.memoizedState) && null !== e.dehydrated) {
                    if (null === t.alternate)
                        throw Error(r(340));
                    W()
                }
                return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128,
                t) : null;
            case 19:
                return g(Ru),
                null;
            case 4:
                return D(),
                null;
            case 10:
                return En(t.type),
                null;
            case 22:
            case 23:
                return Ie(t),
                Ne(),
                null !== e && g(cs),
                65536 & (e = t.flags) ? (t.flags = -65537 & e | 128,
                t) : null;
            case 24:
                return En(us),
                null;
            default:
                return null
            }
        }
        function er(e, t) {
            switch (F(t),
            t.tag) {
            case 3:
                En(us),
                D();
                break;
            case 26:
            case 27:
            case 5:
                H(t);
                break;
            case 4:
                D();
                break;
            case 13:
                Ie(t);
                break;
            case 19:
                g(Ru);
                break;
            case 10:
                En(t.type);
                break;
            case 22:
            case 23:
                Ie(t),
                Ne(),
                null !== e && g(cs);
                break;
            case 24:
                En(us)
            }
        }
        function tr(e, t) {
            try {
                var n = t.updateQueue
                  , r = null !== n ? n.lastEffect : null;
                if (null !== r) {
                    var l = r.next;
                    n = l;
                    do {
                        if ((n.tag & e) === e) {
                            r = void 0;
                            var a = n.create
                              , o = n.inst;
                            r = a(),
                            o.destroy = r
                        }
                        n = n.next
                    } while (n !== l)
                }
            } catch (i) {
                yl(t, t.return, i)
            }
        }
        function nr(e, t, n) {
            try {
                var r = t.updateQueue
                  , l = null !== r ? r.lastEffect : null;
                if (null !== l) {
                    var a = l.next;
                    r = a;
                    do {
                        if ((r.tag & e) === e) {
                            var o = r.inst
                              , i = o.destroy;
                            if (void 0 !== i) {
                                o.destroy = void 0,
                                l = t;
                                var u = n;
                                try {
                                    i()
                                } catch (s) {
                                    yl(l, u, s)
                                }
                            }
                        }
                        r = r.next
                    } while (r !== a)
                }
            } catch (s) {
                yl(t, t.return, s)
            }
        }
        function rr(e) {
            var t = e.updateQueue;
            if (null !== t) {
                var n = e.stateNode;
                try {
                    ge(t, n)
                } catch (r) {
                    yl(e, e.return, r)
                }
            }
        }
        function lr(e, t, n) {
            n.props = Xt(e.type, e.memoizedProps),
            n.state = e.memoizedState;
            try {
                n.componentWillUnmount()
            } catch (r) {
                yl(e, t, r)
            }
        }
        function ar(e, t) {
            try {
                var n = e.ref;
                if (null !== n) {
                    var r = e.stateNode;
                    switch (e.tag) {
                    case 26:
                    case 27:
                    case 5:
                        var l = va(r);
                        break;
                    default:
                        l = r
                    }
                    "function" == typeof n ? e.refCleanup = n(l) : n.current = l
                }
            } catch (a) {
                yl(e, t, a)
            }
        }
        function or(e, t) {
            var n = e.ref
              , r = e.refCleanup;
            if (null !== n)
                if ("function" == typeof r)
                    try {
                        r()
                    } catch (l) {
                        yl(e, t, l)
                    } finally {
                        e.refCleanup = null,
                        null != (e = e.alternate) && (e.refCleanup = null)
                    }
                else if ("function" == typeof n)
                    try {
                        n(null)
                    } catch (a) {
                        yl(e, t, a)
                    }
                else
                    n.current = null
        }
        function ir(e) {
            var t = e.type
              , n = e.memoizedProps
              , r = e.stateNode;
            try {
                uo(r, t, n, e)
            } catch (l) {
                yl(e, e.return, l)
            }
        }
        function ur(e, t, n) {
            try {
                so(e.stateNode, e.type, n, t, e)
            } catch (r) {
                yl(e, e.return, r)
            }
        }
        function sr(e) {
            return 5 === e.tag || 3 === e.tag || !!Zo && 26 === e.tag || !!di && 27 === e.tag || 4 === e.tag
        }
        function cr(e) {
            e: for (; ; ) {
                for (; null === e.sibling; ) {
                    if (null === e.return || sr(e.return))
                        return null;
                    e = e.return
                }
                for (e.sibling.return = e.return,
                e = e.sibling; 5 !== e.tag && 6 !== e.tag && (!di || 27 !== e.tag) && 18 !== e.tag; ) {
                    if (2 & e.flags)
                        continue e;
                    if (null === e.child || 4 === e.tag)
                        continue e;
                    e.child.return = e,
                    e = e.child
                }
                if (!(2 & e.flags))
                    return e.stateNode
            }
        }
        function fr(e, t, n) {
            var r = e.tag;
            if (5 === r || 6 === r)
                e = e.stateNode,
                t ? fo(n, e, t) : oo(n, e);
            else if (!(4 === r || di && 27 === r) && null !== (e = e.child))
                for (fr(e, t, n),
                e = e.sibling; null !== e; )
                    fr(e, t, n),
                    e = e.sibling
        }
        function dr(e, t, n) {
            var r = e.tag;
            if (5 === r || 6 === r)
                e = e.stateNode,
                t ? co(n, e, t) : ao(n, e);
            else if (!(4 === r || di && 27 === r) && null !== (e = e.child))
                for (dr(e, t, n),
                e = e.sibling; null !== e; )
                    dr(e, t, n),
                    e = e.sibling
        }
        function pr(e, t, n) {
            e = e.containerInfo;
            try {
                Po(e, n)
            } catch (r) {
                yl(t, t.return, r)
            }
        }
        function mr(e, t, n) {
            var r = n.flags;
            switch (n.tag) {
            case 0:
            case 11:
            case 15:
                Cr(e, n),
                4 & r && tr(5, n);
                break;
            case 1:
                if (Cr(e, n),
                4 & r)
                    if (e = n.stateNode,
                    null === t)
                        try {
                            e.componentDidMount()
                        } catch (i) {
                            yl(n, n.return, i)
                        }
                    else {
                        var l = Xt(n.type, t.memoizedProps);
                        t = t.memoizedState;
                        try {
                            e.componentDidUpdate(l, t, e.__reactInternalSnapshotBeforeUpdate)
                        } catch (u) {
                            yl(n, n.return, u)
                        }
                    }
                64 & r && rr(n),
                512 & r && ar(n, n.return);
                break;
            case 3:
                if (Cr(e, n),
                64 & r && null !== (r = n.updateQueue)) {
                    if (e = null,
                    null !== n.child)
                        switch (n.child.tag) {
                        case 27:
                        case 5:
                            e = va(n.child.stateNode);
                            break;
                        case 1:
                            e = n.child.stateNode
                        }
                    try {
                        ge(r, e)
                    } catch (i) {
                        yl(n, n.return, i)
                    }
                }
                break;
            case 26:
                if (Zo) {
                    Cr(e, n),
                    512 & r && ar(n, n.return);
                    break
                }
            case 27:
            case 5:
                Cr(e, n),
                null === t && 4 & r && ir(n),
                512 & r && ar(n, n.return);
                break;
            case 12:
                Cr(e, n);
                break;
            case 13:
                Cr(e, n),
                4 & r && br(e, n);
                break;
            case 22:
                if (!(l = null !== n.memoizedState || fs)) {
                    t = null !== t && null !== t.memoizedState || ds;
                    var a = fs
                      , o = ds;
                    fs = l,
                    (ds = t) && !o ? xr(e, n, !!(8772 & n.subtreeFlags)) : Cr(e, n),
                    fs = a,
                    ds = o
                }
                512 & r && ("manual" === n.memoizedProps.mode ? ar(n, n.return) : or(n, n.return));
                break;
            default:
                Cr(e, n)
            }
        }
        function hr(e) {
            var t = e.alternate;
            null !== t && (e.alternate = null,
            hr(t)),
            e.child = null,
            e.deletions = null,
            e.sibling = null,
            5 === e.tag && null !== (t = e.stateNode) && Ha(t),
            e.stateNode = null,
            e.return = null,
            e.dependencies = null,
            e.memoizedProps = null,
            e.memoizedState = null,
            e.pendingProps = null,
            e.stateNode = null,
            e.updateQueue = null
        }
        function gr(e, t, n) {
            for (n = n.child; null !== n; )
                vr(e, t, n),
                n = n.sibling
        }
        function vr(e, t, n) {
            if (Di && "function" == typeof Di.onCommitFiberUnmount)
                try {
                    Di.onCommitFiberUnmount(Oi, n)
                } catch (a) {}
            switch (n.tag) {
            case 26:
                if (Zo) {
                    ds || or(n, t),
                    gr(e, t, n),
                    n.memoizedState ? ri(n.memoizedState) : n.stateNode && oi(n.stateNode);
                    break
                }
            case 27:
                if (di) {
                    ds || or(n, t);
                    var r = vs
                      , l = bs;
                    vs = n.stateNode,
                    gr(e, t, n),
                    gi(n.stateNode),
                    vs = r,
                    bs = l;
                    break
                }
            case 5:
                ds || or(n, t);
            case 6:
                if (La) {
                    if (r = vs,
                    l = bs,
                    vs = null,
                    gr(e, t, n),
                    bs = l,
                    null !== (vs = r))
                        if (bs)
                            try {
                                mo(vs, n.stateNode)
                            } catch (o) {
                                yl(n, t, o)
                            }
                        else
                            try {
                                po(vs, n.stateNode)
                            } catch (o) {
                                yl(n, t, o)
                            }
                } else
                    gr(e, t, n);
                break;
            case 18:
                La && null !== vs && (bs ? Yo(vs, n.stateNode) : qo(vs, n.stateNode));
                break;
            case 4:
                La ? (r = vs,
                l = bs,
                vs = n.stateNode.containerInfo,
                bs = !0,
                gr(e, t, n),
                vs = r,
                bs = l) : (Ta && pr(n.stateNode, n, ko()),
                gr(e, t, n));
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                ds || nr(2, n, t),
                ds || nr(4, n, t),
                gr(e, t, n);
                break;
            case 1:
                ds || (or(n, t),
                "function" == typeof (r = n.stateNode).componentWillUnmount && lr(n, t, r)),
                gr(e, t, n);
                break;
            case 21:
                gr(e, t, n);
                break;
            case 22:
                ds || or(n, t),
                ds = (r = ds) || null !== n.memoizedState,
                gr(e, t, n),
                ds = r;
                break;
            default:
                gr(e, t, n)
            }
        }
        function br(e, t) {
            if (Ia && null === t.memoizedState && null !== (e = t.alternate) && null !== (e = e.memoizedState) && null !== (e = e.dehydrated))
                try {
                    Bo(e)
                } catch (n) {
                    yl(t, t.return, n)
                }
        }
        function yr(e, t) {
            var n = function(e) {
                switch (e.tag) {
                case 13:
                case 19:
                    var t = e.stateNode;
                    return null === t && (t = e.stateNode = new ms),
                    t;
                case 22:
                    return null === (t = (e = e.stateNode)._retryCache) && (t = e._retryCache = new ms),
                    t;
                default:
                    throw Error(r(435, e.tag))
                }
            }(e);
            t.forEach(function(t) {
                var r = Cl.bind(null, e, t);
                n.has(t) || (n.add(t),
                t.then(r, r))
            })
        }
        function Sr(e, t) {
            var n = t.deletions;
            if (null !== n)
                for (var l = 0; l < n.length; l++) {
                    var a = n[l]
                      , o = e
                      , i = t;
                    if (La) {
                        var u = i;
                        e: for (; null !== u; ) {
                            switch (u.tag) {
                            case 27:
                            case 5:
                                vs = u.stateNode,
                                bs = !1;
                                break e;
                            case 3:
                            case 4:
                                vs = u.stateNode.containerInfo,
                                bs = !0;
                                break e
                            }
                            u = u.return
                        }
                        if (null === vs)
                            throw Error(r(160));
                        vr(o, i, a),
                        vs = null,
                        bs = !1
                    } else
                        vr(o, i, a);
                    null !== (o = a.alternate) && (o.return = null),
                    a.return = null
                }
            if (13878 & t.subtreeFlags)
                for (t = t.child; null !== t; )
                    wr(t, e),
                    t = t.sibling
        }
        function wr(e, t) {
            var n = e.alternate
              , l = e.flags;
            switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                Sr(t, e),
                kr(e),
                4 & l && (nr(3, e, e.return),
                tr(3, e),
                nr(5, e, e.return));
                break;
            case 1:
                Sr(t, e),
                kr(e),
                512 & l && (ds || null === n || or(n, n.return)),
                64 & l && fs && null !== (e = e.updateQueue) && null !== (l = e.callbacks) && (n = e.shared.hiddenCallbacks,
                e.shared.hiddenCallbacks = null === n ? l : n.concat(l));
                break;
            case 26:
                if (Zo) {
                    var a = ys;
                    Sr(t, e),
                    kr(e),
                    512 & l && (ds || null === n || or(n, n.return)),
                    4 & l && (l = null !== n ? n.memoizedState : null,
                    t = e.memoizedState,
                    null === n ? null === t ? null === e.stateNode ? e.stateNode = li(a, e.type, e.memoizedProps, e) : ai(a, e.type, e.stateNode) : e.stateNode = ni(a, t, e.memoizedProps) : l !== t ? (null === l ? null !== n.stateNode && oi(n.stateNode) : ri(l),
                    null === t ? ai(a, e.type, e.stateNode) : ni(a, t, e.memoizedProps)) : null === t && null !== e.stateNode && ur(e, e.memoizedProps, n.memoizedProps));
                    break
                }
            case 27:
                if (di && 4 & l && null === e.alternate) {
                    a = e.stateNode;
                    var o = e.memoizedProps;
                    try {
                        mi(a),
                        hi(e.type, o, a, e)
                    } catch (f) {
                        yl(e, e.return, f)
                    }
                }
            case 5:
                if (Sr(t, e),
                kr(e),
                512 & l && (ds || null === n || or(n, n.return)),
                La) {
                    if (32 & e.flags) {
                        t = e.stateNode;
                        try {
                            ho(t)
                        } catch (f) {
                            yl(e, e.return, f)
                        }
                    }
                    4 & l && null != e.stateNode && ur(e, t = e.memoizedProps, null !== n ? n.memoizedProps : t),
                    1024 & l && (ps = !0)
                }
                break;
            case 6:
                if (Sr(t, e),
                kr(e),
                4 & l && La) {
                    if (null === e.stateNode)
                        throw Error(r(162));
                    l = e.memoizedProps,
                    n = null !== n ? n.memoizedProps : l,
                    t = e.stateNode;
                    try {
                        io(t, n, l)
                    } catch (f) {
                        yl(e, e.return, f)
                    }
                }
                break;
            case 3:
                if (Zo ? (ui(),
                a = ys,
                ys = ei(t.containerInfo),
                Sr(t, e),
                ys = a) : Sr(t, e),
                kr(e),
                4 & l) {
                    if (La && Ia && null !== n && n.memoizedState.isDehydrated)
                        try {
                            Wo(t.containerInfo)
                        } catch (f) {
                            yl(e, e.return, f)
                        }
                    if (Ta) {
                        l = t.containerInfo,
                        n = t.pendingChildren;
                        try {
                            Po(l, n)
                        } catch (f) {
                            yl(e, e.return, f)
                        }
                    }
                }
                ps && (ps = !1,
                zr(e));
                break;
            case 4:
                Zo ? (n = ys,
                ys = ei(e.stateNode.containerInfo),
                Sr(t, e),
                kr(e),
                ys = n) : (Sr(t, e),
                kr(e)),
                4 & l && Ta && pr(e.stateNode, e, e.stateNode.pendingChildren);
                break;
            case 12:
                Sr(t, e),
                kr(e);
                break;
            case 13:
                Sr(t, e),
                kr(e),
                8192 & e.child.flags && null !== e.memoizedState != (null !== n && null !== n.memoizedState) && (Ys = _i()),
                4 & l && null !== (l = e.updateQueue) && (e.updateQueue = null,
                yr(e, l));
                break;
            case 22:
                512 & l && (ds || null === n || or(n, n.return)),
                a = null !== e.memoizedState;
                var i = null !== n && null !== n.memoizedState
                  , u = fs
                  , s = ds;
                if (fs = u || a,
                ds = s || i,
                Sr(t, e),
                ds = s,
                fs = u,
                kr(e),
                (t = e.stateNode)._current = e,
                t._visibility &= -3,
                t._visibility |= 2 & t._pendingVisibility,
                8192 & l && (t._visibility = a ? -2 & t._visibility : 1 | t._visibility,
                a && (t = fs || ds,
                null === n || i || t || Pr(e)),
                La && (null === e.memoizedProps || "manual" !== e.memoizedProps.mode)))
                    e: if (n = null,
                    La)
                        for (t = e; ; ) {
                            if (5 === t.tag || Zo && 26 === t.tag || di && 27 === t.tag) {
                                if (null === n) {
                                    i = n = t;
                                    try {
                                        o = i.stateNode,
                                        a ? go(o) : bo(i.stateNode, i.memoizedProps)
                                    } catch (f) {
                                        yl(i, i.return, f)
                                    }
                                }
                            } else if (6 === t.tag) {
                                if (null === n) {
                                    i = t;
                                    try {
                                        var c = i.stateNode;
                                        a ? vo(c) : yo(c, i.memoizedProps)
                                    } catch (f) {
                                        yl(i, i.return, f)
                                    }
                                }
                            } else if ((22 !== t.tag && 23 !== t.tag || null === t.memoizedState || t === e) && null !== t.child) {
                                t.child.return = t,
                                t = t.child;
                                continue
                            }
                            if (t === e)
                                break e;
                            for (; null === t.sibling; ) {
                                if (null === t.return || t.return === e)
                                    break e;
                                n === t && (n = null),
                                t = t.return
                            }
                            n === t && (n = null),
                            t.sibling.return = t.return,
                            t = t.sibling
                        }
                4 & l && null !== (l = e.updateQueue) && null !== (n = l.retryQueue) && (l.retryQueue = null,
                yr(e, n));
                break;
            case 19:
                Sr(t, e),
                kr(e),
                4 & l && null !== (l = e.updateQueue) && (e.updateQueue = null,
                yr(e, l));
                break;
            case 21:
                break;
            default:
                Sr(t, e),
                kr(e)
            }
        }
        function kr(e) {
            var t = e.flags;
            if (2 & t) {
                try {
                    if (La && (!di || 27 !== e.tag)) {
                        e: {
                            for (var n = e.return; null !== n; ) {
                                if (sr(n)) {
                                    var l = n;
                                    break e
                                }
                                n = n.return
                            }
                            throw Error(r(160))
                        }
                        switch (l.tag) {
                        case 27:
                            if (di) {
                                var a = l.stateNode;
                                dr(e, cr(e), a);
                                break
                            }
                        case 5:
                            var o = l.stateNode;
                            32 & l.flags && (ho(o),
                            l.flags &= -33),
                            dr(e, cr(e), o);
                            break;
                        case 3:
                        case 4:
                            var i = l.stateNode.containerInfo;
                            fr(e, cr(e), i);
                            break;
                        default:
                            throw Error(r(161))
                        }
                    }
                } catch (u) {
                    yl(e, e.return, u)
                }
                e.flags &= -3
            }
            4096 & t && (e.flags &= -4097)
        }
        function zr(e) {
            if (1024 & e.subtreeFlags)
                for (e = e.child; null !== e; ) {
                    var t = e;
                    zr(t),
                    5 === t.tag && 1024 & t.flags && Ya(t.stateNode),
                    e = e.sibling
                }
        }
        function Cr(e, t) {
            if (8772 & t.subtreeFlags)
                for (t = t.child; null !== t; )
                    mr(e, t.alternate, t),
                    t = t.sibling
        }
        function Pr(e) {
            for (e = e.child; null !== e; ) {
                var t = e;
                switch (t.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    nr(4, t, t.return),
                    Pr(t);
                    break;
                case 1:
                    or(t, t.return);
                    var n = t.stateNode;
                    "function" == typeof n.componentWillUnmount && lr(t, t.return, n),
                    Pr(t);
                    break;
                case 26:
                case 27:
                case 5:
                    or(t, t.return),
                    Pr(t);
                    break;
                case 22:
                    or(t, t.return),
                    null === t.memoizedState && Pr(t);
                    break;
                default:
                    Pr(t)
                }
                e = e.sibling
            }
        }
        function xr(e, t, n) {
            for (n = n && !!(8772 & t.subtreeFlags),
            t = t.child; null !== t; ) {
                var r = t.alternate
                  , l = e
                  , a = t
                  , o = a.flags;
                switch (a.tag) {
                case 0:
                case 11:
                case 15:
                    xr(l, a, n),
                    tr(4, a);
                    break;
                case 1:
                    if (xr(l, a, n),
                    "function" == typeof (l = (r = a).stateNode).componentDidMount)
                        try {
                            l.componentDidMount()
                        } catch (s) {
                            yl(r, r.return, s)
                        }
                    if (null !== (l = (r = a).updateQueue)) {
                        var i = r.stateNode;
                        try {
                            var u = l.shared.hiddenCallbacks;
                            if (null !== u)
                                for (l.shared.hiddenCallbacks = null,
                                l = 0; l < u.length; l++)
                                    he(u[l], i)
                        } catch (s) {
                            yl(r, r.return, s)
                        }
                    }
                    n && 64 & o && rr(a),
                    ar(a, a.return);
                    break;
                case 26:
                case 27:
                case 5:
                    xr(l, a, n),
                    n && null === r && 4 & o && ir(a),
                    ar(a, a.return);
                    break;
                case 12:
                default:
                    xr(l, a, n);
                    break;
                case 13:
                    xr(l, a, n),
                    n && 4 & o && br(l, a);
                    break;
                case 22:
                    null === a.memoizedState && xr(l, a, n),
                    ar(a, a.return)
                }
                t = t.sibling
            }
        }
        function Er(e, t) {
            var n = null;
            null !== e && null !== e.memoizedState && null !== e.memoizedState.cachePool && (n = e.memoizedState.cachePool.pool),
            e = null,
            null !== t.memoizedState && null !== t.memoizedState.cachePool && (e = t.memoizedState.cachePool.pool),
            e !== n && (null != e && e.refCount++,
            null != n && On(n))
        }
        function jr(e, t) {
            e = null,
            null !== t.alternate && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache) !== e && (t.refCount++,
            null != e && On(e))
        }
        function Nr(e, t, n, r) {
            if (10256 & t.subtreeFlags)
                for (t = t.child; null !== t; )
                    _r(e, t, n, r),
                    t = t.sibling
        }
        function _r(e, t, n, r) {
            var l = t.flags;
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                Nr(e, t, n, r),
                2048 & l && tr(9, t);
                break;
            case 3:
                Nr(e, t, n, r),
                2048 & l && (e = null,
                null !== t.alternate && (e = t.alternate.memoizedState.cache),
                (t = t.memoizedState.cache) !== e && (t.refCount++,
                null != e && On(e)));
                break;
            case 12:
                if (2048 & l) {
                    Nr(e, t, n, r),
                    e = t.stateNode;
                    try {
                        var a = t.memoizedProps
                          , o = a.id
                          , i = a.onPostCommit;
                        "function" == typeof i && i(o, null === t.alternate ? "mount" : "update", e.passiveEffectDuration, -0)
                    } catch (u) {
                        yl(t, t.return, u)
                    }
                } else
                    Nr(e, t, n, r);
                break;
            case 23:
                break;
            case 22:
                a = t.stateNode,
                null !== t.memoizedState ? 4 & a._visibility ? Nr(e, t, n, r) : Tr(e, t) : 4 & a._visibility ? Nr(e, t, n, r) : (a._visibility |= 4,
                Lr(e, t, n, r, !!(10256 & t.subtreeFlags))),
                2048 & l && Er(t.alternate, t);
                break;
            case 24:
                Nr(e, t, n, r),
                2048 & l && jr(t.alternate, t);
                break;
            default:
                Nr(e, t, n, r)
            }
        }
        function Lr(e, t, n, r, l) {
            for (l = l && !!(10256 & t.subtreeFlags),
            t = t.child; null !== t; ) {
                var a = e
                  , o = t
                  , i = n
                  , u = r
                  , s = o.flags;
                switch (o.tag) {
                case 0:
                case 11:
                case 15:
                    Lr(a, o, i, u, l),
                    tr(8, o);
                    break;
                case 23:
                    break;
                case 22:
                    var c = o.stateNode;
                    null !== o.memoizedState ? 4 & c._visibility ? Lr(a, o, i, u, l) : Tr(a, o) : (c._visibility |= 4,
                    Lr(a, o, i, u, l)),
                    l && 2048 & s && Er(o.alternate, o);
                    break;
                case 24:
                    Lr(a, o, i, u, l),
                    l && 2048 & s && jr(o.alternate, o);
                    break;
                default:
                    Lr(a, o, i, u, l)
                }
                t = t.sibling
            }
        }
        function Tr(e, t) {
            if (10256 & t.subtreeFlags)
                for (t = t.child; null !== t; ) {
                    var n = e
                      , r = t
                      , l = r.flags;
                    switch (r.tag) {
                    case 22:
                        Tr(n, r),
                        2048 & l && Er(r.alternate, r);
                        break;
                    case 24:
                        Tr(n, r),
                        2048 & l && jr(r.alternate, r);
                        break;
                    default:
                        Tr(n, r)
                    }
                    t = t.sibling
                }
        }
        function Ir(e) {
            if (e.subtreeFlags & Ss)
                for (e = e.child; null !== e; )
                    Rr(e),
                    e = e.sibling
        }
        function Rr(e) {
            switch (e.tag) {
            case 26:
                Ir(e),
                e.flags & Ss && (null !== e.memoizedState ? fi(ys, e.memoizedState, e.memoizedProps) : Va(e.type, e.memoizedProps));
                break;
            case 5:
                Ir(e),
                e.flags & Ss && Va(e.type, e.memoizedProps);
                break;
            case 3:
            case 4:
                if (Zo) {
                    var t = ys;
                    ys = ei(e.stateNode.containerInfo),
                    Ir(e),
                    ys = t
                } else
                    Ir(e);
                break;
            case 22:
                null === e.memoizedState && (null !== (t = e.alternate) && null !== t.memoizedState ? (t = Ss,
                Ss = 16777216,
                Ir(e),
                Ss = t) : Ir(e));
                break;
            default:
                Ir(e)
            }
        }
        function Mr(e) {
            var t = e.alternate;
            if (null !== t && null !== (e = t.child)) {
                t.child = null;
                do {
                    t = e.sibling,
                    e.sibling = null,
                    e = t
                } while (null !== e)
            }
        }
        function Fr(e) {
            var t = e.deletions;
            if (16 & e.flags) {
                if (null !== t)
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        hs = r,
                        Ur(r, e)
                    }
                Mr(e)
            }
            if (10256 & e.subtreeFlags)
                for (e = e.child; null !== e; )
                    Or(e),
                    e = e.sibling
        }
        function Or(e) {
            switch (e.tag) {
            case 0:
            case 11:
            case 15:
                Fr(e),
                2048 & e.flags && nr(9, e, e.return);
                break;
            case 3:
            case 12:
            default:
                Fr(e);
                break;
            case 22:
                var t = e.stateNode;
                null !== e.memoizedState && 4 & t._visibility && (null === e.return || 13 !== e.return.tag) ? (t._visibility &= -5,
                Dr(e)) : Fr(e)
            }
        }
        function Dr(e) {
            var t = e.deletions;
            if (16 & e.flags) {
                if (null !== t)
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        hs = r,
                        Ur(r, e)
                    }
                Mr(e)
            }
            for (e = e.child; null !== e; ) {
                switch ((t = e).tag) {
                case 0:
                case 11:
                case 15:
                    nr(8, t, t.return),
                    Dr(t);
                    break;
                case 22:
                    4 & (n = t.stateNode)._visibility && (n._visibility &= -5,
                    Dr(t));
                    break;
                default:
                    Dr(t)
                }
                e = e.sibling
            }
        }
        function Ur(e, t) {
            for (; null !== hs; ) {
                var n = hs;
                switch (n.tag) {
                case 0:
                case 11:
                case 15:
                    nr(8, n, t);
                    break;
                case 23:
                case 22:
                    if (null !== n.memoizedState && null !== n.memoizedState.cachePool) {
                        var r = n.memoizedState.cachePool.pool;
                        null != r && r.refCount++
                    }
                    break;
                case 24:
                    On(n.memoizedState.cache)
                }
                if (null !== (r = n.child))
                    r.return = n,
                    hs = r;
                else
                    e: for (n = e; null !== hs; ) {
                        var l = (r = hs).sibling
                          , a = r.return;
                        if (hr(r),
                        r === n) {
                            hs = null;
                            break e
                        }
                        if (null !== l) {
                            l.return = a,
                            hs = l;
                            break e
                        }
                        hs = a
                    }
            }
        }
        function Hr(e) {
            var t = Ra(e);
            if (null != t) {
                if ("string" != typeof t.memoizedProps["data-testname"])
                    throw Error(r(364));
                return t
            }
            if (null === (e = Za(e)))
                throw Error(r(362));
            return e.stateNode.current
        }
        function Ar(e, t) {
            var n = e.tag;
            switch (t.$$typeof) {
            case ks:
                if (e.type === t.value)
                    return !0;
                break;
            case zs:
                e: {
                    for (t = t.value,
                    e = [e, 0],
                    n = 0; n < e.length; ) {
                        var l = e[n++]
                          , a = l.tag
                          , o = e[n++]
                          , i = t[o];
                        if (5 !== a && 26 !== a && 27 !== a || !to(l)) {
                            for (; null != i && Ar(l, i); )
                                i = t[++o];
                            if (o === t.length) {
                                t = !0;
                                break e
                            }
                            for (l = l.child; null !== l; )
                                e.push(l, o),
                                l = l.sibling
                        }
                    }
                    t = !1
                }
                return t;
            case Cs:
                if ((5 === n || 26 === n || 27 === n) && no(e.stateNode, t.value))
                    return !0;
                break;
            case xs:
                if ((5 === n || 6 === n || 26 === n || 27 === n) && null !== (e = eo(e)) && 0 <= e.indexOf(t.value))
                    return !0;
                break;
            case Ps:
                if ((5 === n || 26 === n || 27 === n) && "string" == typeof (e = e.memoizedProps["data-testname"]) && e.toLowerCase() === t.value.toLowerCase())
                    return !0;
                break;
            default:
                throw Error(r(365))
            }
            return !1
        }
        function Qr(e) {
            switch (e.$$typeof) {
            case ks:
                return "<" + (a(e.value) || "Unknown") + ">";
            case zs:
                return ":has(" + (Qr(e) || "") + ")";
            case Cs:
                return '[role="' + e.value + '"]';
            case xs:
                return '"' + e.value + '"';
            case Ps:
                return '[data-testname="' + e.value + '"]';
            default:
                throw Error(r(365))
            }
        }
        function $r(e, t) {
            var n = [];
            e = [e, 0];
            for (var r = 0; r < e.length; ) {
                var l = e[r++]
                  , a = l.tag
                  , o = e[r++]
                  , i = t[o];
                if (5 !== a && 26 !== a && 27 !== a || !to(l)) {
                    for (; null != i && Ar(l, i); )
                        i = t[++o];
                    if (o === t.length)
                        n.push(l);
                    else
                        for (l = l.child; null !== l; )
                            e.push(l, o),
                            l = l.sibling
                }
            }
            return n
        }
        function Vr(e, t) {
            if (!Ka)
                throw Error(r(363));
            e = $r(e = Hr(e), t),
            t = [],
            e = Array.from(e);
            for (var n = 0; n < e.length; ) {
                var l = e[n++]
                  , a = l.tag;
                if (5 === a || 26 === a || 27 === a)
                    to(l) || t.push(l.stateNode);
                else
                    for (l = l.child; null !== l; )
                        e.push(l),
                        l = l.sibling
            }
            return t
        }
        function Wr() {
            return 2 & Ns && 0 !== Ts ? Ts & -Ts : null !== fa.T ? 0 !== vu ? vu : ae() : Da()
        }
        function Br() {
            0 === $s && ($s = 536870912 & Ts && !nu ? 536870912 : z());
            var e = Tu.current;
            return null !== e && (e.flags |= 32),
            $s
        }
        function qr(e, t, n) {
            (e === _s && 2 === Is || null !== e.cancelPendingCommit) && (tl(e, 0),
            Zr(e, Ts, $s, !1)),
            E(e, n),
            2 & Ns && e === _s || (e === _s && (!(2 & Ns) && (As |= n),
            4 === Us && Zr(e, Ts, $s, !1)),
            J(e))
        }
        function Yr(e, t, n) {
            if (6 & Ns)
                throw Error(r(327));
            for (var l = !n && !(60 & t) && 0 === (t & e.expiredLanes) || S(e, t), a = l ? function(e, t) {
                var n = Ns;
                Ns |= 2;
                var l = ll()
                  , a = al();
                _s !== e || Ts !== t ? (Xs = null,
                Gs = _i() + 500,
                tl(e, t)) : Fs = S(e, t);
                e: for (; ; )
                    try {
                        if (0 !== Is && null !== Ls) {
                            t = Ls;
                            var o = Rs;
                            t: switch (Is) {
                            case 1:
                                Is = 0,
                                Rs = null,
                                dl(e, t, o, 1);
                                break;
                            case 2:
                                if (be(o)) {
                                    Is = 0,
                                    Rs = null,
                                    fl(t);
                                    break
                                }
                                t = function() {
                                    2 === Is && _s === e && (Is = 7),
                                    J(e)
                                }
                                ,
                                o.then(t, t);
                                break e;
                            case 3:
                                Is = 7;
                                break e;
                            case 4:
                                Is = 5;
                                break e;
                            case 7:
                                be(o) ? (Is = 0,
                                Rs = null,
                                fl(t)) : (Is = 0,
                                Rs = null,
                                dl(e, t, o, 7));
                                break;
                            case 5:
                                var i = null;
                                switch (Ls.tag) {
                                case 26:
                                    i = Ls.memoizedState;
                                case 5:
                                case 27:
                                    var u = Ls
                                      , s = u.type
                                      , c = u.pendingProps;
                                    if (i ? ci(i) : Qa(s, c)) {
                                        Is = 0,
                                        Rs = null;
                                        var f = u.sibling;
                                        if (null !== f)
                                            Ls = f;
                                        else {
                                            var d = u.return;
                                            null !== d ? (Ls = d,
                                            pl(d)) : Ls = null
                                        }
                                        break t
                                    }
                                }
                                Is = 0,
                                Rs = null,
                                dl(e, t, o, 5);
                                break;
                            case 6:
                                Is = 0,
                                Rs = null,
                                dl(e, t, o, 6);
                                break;
                            case 8:
                                el(),
                                Us = 6;
                                break e;
                            default:
                                throw Error(r(462))
                            }
                        }
                        sl();
                        break
                    } catch (p) {
                        nl(e, p)
                    }
                return ls = rs = null,
                fa.H = l,
                fa.A = a,
                Ns = n,
                null !== Ls ? 0 : (_s = null,
                Ts = 0,
                q(),
                Us)
            }(e, t) : il(e, t, !0), o = l; ; ) {
                if (0 === a) {
                    Fs && !l && Zr(e, t, 0, !1);
                    break
                }
                if (6 === a)
                    Zr(e, t, 0, !Ms);
                else {
                    if (n = e.current.alternate,
                    o && !Kr(n)) {
                        a = il(e, t, !1),
                        o = !1;
                        continue
                    }
                    if (2 === a) {
                        if (o = t,
                        e.errorRecoveryDisabledLanes & o)
                            var i = 0;
                        else
                            i = 0 != (i = -536870913 & e.pendingLanes) ? i : 536870912 & i ? 536870912 : 0;
                        if (0 !== i) {
                            t = i;
                            e: {
                                var u = e;
                                a = Ws;
                                var s = Ia && u.current.memoizedState.isDehydrated;
                                if (s && (tl(u, i).flags |= 256),
                                2 !== (i = il(u, i, !1))) {
                                    if (Os && !s) {
                                        u.errorRecoveryDisabledLanes |= o,
                                        As |= o,
                                        a = 4;
                                        break e
                                    }
                                    o = Bs,
                                    Bs = a,
                                    null !== o && Gr(o)
                                }
                                a = i
                            }
                            if (o = !1,
                            2 !== a)
                                continue
                        }
                    }
                    if (1 === a) {
                        tl(e, 0),
                        Zr(e, t, 0, !0);
                        break
                    }
                    e: {
                        switch (l = e,
                        a) {
                        case 0:
                        case 1:
                            throw Error(r(345));
                        case 4:
                            if ((4194176 & t) === t) {
                                Zr(l, t, $s, !Ms);
                                break e
                            }
                            break;
                        case 2:
                            Bs = null;
                            break;
                        case 3:
                        case 5:
                            break;
                        default:
                            throw Error(r(329))
                        }
                        if (l.finishedWork = n,
                        l.finishedLanes = t,
                        (62914560 & t) === t && 10 < (o = Ys + 300 - _i())) {
                            if (Zr(l, t, $s, !Ms),
                            0 !== y(l, 0))
                                break e;
                            l.timeoutHandle = Ea(Xr.bind(null, l, n, Bs, Xs, qs, t, $s, As, Vs, Ms, 2, -0, 0), o)
                        } else
                            Xr(l, n, Bs, Xs, qs, t, $s, As, Vs, Ms, 0, -0, 0)
                    }
                }
                break
            }
            J(e)
        }
        function Gr(e) {
            null === Bs ? Bs = e : Bs.push.apply(Bs, e)
        }
        function Xr(e, t, n, r, l, a, o, i, u, s, c, f, d) {
            var p = t.subtreeFlags;
            if ((8192 & p || !(16785408 & ~p)) && ($a(),
            Rr(t),
            null !== (t = Wa())))
                return e.cancelPendingCommit = t(hl.bind(null, e, n, r, l, o, i, u, 1, f, d)),
                void Zr(e, a, o, !s);
            hl(e, n, r, l, o, i, u)
        }
        function Kr(e) {
            for (var t = e; ; ) {
                var n = t.tag;
                if ((0 === n || 11 === n || 15 === n) && 16384 & t.flags && null !== (n = t.updateQueue) && null !== (n = n.stores))
                    for (var r = 0; r < n.length; r++) {
                        var l = n[r]
                          , a = l.getSnapshot;
                        l = l.value;
                        try {
                            if (!Ui(a(), l))
                                return !1
                        } catch (o) {
                            return !1
                        }
                    }
                if (n = t.child,
                16384 & t.subtreeFlags && null !== n)
                    n.return = t,
                    t = n;
                else {
                    if (t === e)
                        break;
                    for (; null === t.sibling; ) {
                        if (null === t.return || t.return === e)
                            return !0;
                        t = t.return
                    }
                    t.sibling.return = t.return,
                    t = t.sibling
                }
            }
            return !0
        }
        function Zr(e, t, n, r) {
            t &= ~Qs,
            t &= ~As,
            e.suspendedLanes |= t,
            e.pingedLanes &= ~t,
            r && (e.warmLanes |= t),
            r = e.expirationTimes;
            for (var l = t; 0 < l; ) {
                var a = 31 - wi(l)
                  , o = 1 << a;
                r[a] = -1,
                l &= ~o
            }
            0 !== n && j(e, n, t)
        }
        function Jr() {
            return !!(6 & Ns) || (ee(0),
            !1)
        }
        function el() {
            if (null !== Ls) {
                if (0 === Is)
                    var e = Ls.return;
                else
                    ls = rs = null,
                    $e(e = Ls),
                    xu = null,
                    Eu = 0,
                    e = Ls;
                for (; null !== e; )
                    er(e.alternate, e),
                    e = e.return;
                Ls = null
            }
        }
        function tl(e, t) {
            e.finishedWork = null,
            e.finishedLanes = 0;
            var n = e.timeoutHandle;
            n !== Na && (e.timeoutHandle = Na,
            ja(n)),
            null !== (n = e.cancelPendingCommit) && (e.cancelPendingCommit = null,
            n()),
            el(),
            _s = e,
            Ls = n = El(e.current, null),
            Ts = t,
            Is = 0,
            Rs = null,
            Ms = !1,
            Fs = S(e, t),
            Os = !1,
            Vs = $s = Qs = As = Hs = Us = 0,
            Bs = Ws = null,
            qs = !1,
            8 & t && (t |= 32 & t);
            var r = e.entangledLanes;
            if (0 !== r)
                for (e = e.entanglements,
                r &= t; 0 < r; ) {
                    var l = 31 - wi(r)
                      , a = 1 << l;
                    t |= e[l],
                    r &= ~a
                }
            return Ds = t,
            q(),
            n
        }
        function nl(e, t) {
            Fu = null,
            fa.H = qu,
            t === ku ? (t = we(),
            Is = 3) : t === zu ? (t = we(),
            Is = 4) : Is = t === Ju ? 8 : null !== t && "object" == typeof t && "function" == typeof t.then ? 6 : 1,
            Rs = t,
            null === Ls && (Us = 1,
            Kt(e, T(t, e.current)))
        }
        function rl() {
            var e = Tu.current;
            return null === e || ((4194176 & Ts) === Ts ? null === Iu : !!((62914560 & Ts) === Ts || 536870912 & Ts) && e === Iu)
        }
        function ll() {
            var e = fa.H;
            return fa.H = qu,
            null === e ? qu : e
        }
        function al() {
            var e = fa.A;
            return fa.A = ws,
            e
        }
        function ol() {
            Us = 4,
            Ms || (4194176 & Ts) !== Ts && null !== Tu.current || (Fs = !0),
            !(134217727 & Hs) && !(134217727 & As) || null === _s || Zr(_s, Ts, $s, !1)
        }
        function il(e, t, n) {
            var r = Ns;
            Ns |= 2;
            var l = ll()
              , a = al();
            _s === e && Ts === t || (Xs = null,
            tl(e, t)),
            t = !1;
            var o = Us;
            e: for (; ; )
                try {
                    if (0 !== Is && null !== Ls) {
                        var i = Ls
                          , u = Rs;
                        switch (Is) {
                        case 8:
                            el(),
                            o = 6;
                            break e;
                        case 3:
                        case 2:
                        case 6:
                            null === Tu.current && (t = !0);
                            var s = Is;
                            if (Is = 0,
                            Rs = null,
                            dl(e, i, u, s),
                            n && Fs) {
                                o = 0;
                                break e
                            }
                            break;
                        default:
                            s = Is,
                            Is = 0,
                            Rs = null,
                            dl(e, i, u, s)
                        }
                    }
                    ul(),
                    o = Us;
                    break
                } catch (c) {
                    nl(e, c)
                }
            return t && e.shellSuspendCounter++,
            ls = rs = null,
            Ns = r,
            fa.H = l,
            fa.A = a,
            null === Ls && (_s = null,
            Ts = 0,
            q()),
            o
        }
        function ul() {
            for (; null !== Ls; )
                cl(Ls)
        }
        function sl() {
            for (; null !== Ls && !ji(); )
                cl(Ls)
        }
        function cl(e) {
            var t = Pn(e.alternate, e, Ds);
            e.memoizedProps = e.pendingProps,
            null === t ? pl(e) : Ls = t
        }
        function fl(e) {
            var t = e
              , n = t.alternate;
            switch (t.tag) {
            case 15:
            case 0:
                t = fn(n, t, t.pendingProps, t.type, void 0, Ts);
                break;
            case 11:
                t = fn(n, t, t.pendingProps, t.type.render, t.ref, Ts);
                break;
            case 5:
                $e(t);
            default:
                er(n, t),
                t = Pn(n, t = Ls = jl(t, Ds), Ds)
            }
            e.memoizedProps = e.pendingProps,
            null === t ? pl(e) : Ls = t
        }
        function dl(e, t, n, l) {
            ls = rs = null,
            $e(t),
            xu = null,
            Eu = 0;
            var a = t.return;
            try {
                if (function(e, t, n, l, a) {
                    if (n.flags |= 32768,
                    null !== l && "object" == typeof l && "function" == typeof l.then) {
                        if (null !== (t = n.alternate) && _n(t, n, a, !0),
                        null !== (n = Tu.current)) {
                            switch (n.tag) {
                            case 13:
                                return null === Iu ? ol() : null === n.alternate && 0 === Us && (Us = 3),
                                n.flags &= -257,
                                n.flags |= 65536,
                                n.lanes = a,
                                l === Cu ? n.flags |= 16384 : (null === (t = n.updateQueue) ? n.updateQueue = new Set([l]) : t.add(l),
                                Sl(e, l, a)),
                                !1;
                            case 22:
                                return n.flags |= 65536,
                                l === Cu ? n.flags |= 16384 : (null === (t = n.updateQueue) ? (t = {
                                    transitions: null,
                                    markerInstances: null,
                                    retryQueue: new Set([l])
                                },
                                n.updateQueue = t) : null === (n = t.retryQueue) ? t.retryQueue = new Set([l]) : n.add(l),
                                Sl(e, l, a)),
                                !1
                            }
                            throw Error(r(435, n.tag))
                        }
                        return Sl(e, l, a),
                        ol(),
                        !1
                    }
                    if (nu)
                        return null !== (t = Tu.current) ? (!(65536 & t.flags) && (t.flags |= 256),
                        t.flags |= 65536,
                        t.lanes = a,
                        l !== au && B(T(e = Error(r(422), {
                            cause: l
                        }), n))) : (l !== au && B(T(t = Error(r(423), {
                            cause: l
                        }), n)),
                        (e = e.current.alternate).flags |= 65536,
                        a &= -a,
                        e.lanes |= a,
                        l = T(l, n),
                        de(e, a = Jt(e.stateNode, l, a)),
                        4 !== Us && (Us = 2)),
                        !1;
                    var o = Error(r(520), {
                        cause: l
                    });
                    if (o = T(o, n),
                    null === Ws ? Ws = [o] : Ws.push(o),
                    4 !== Us && (Us = 2),
                    null === t)
                        return !0;
                    l = T(l, n),
                    n = t;
                    do {
                        switch (n.tag) {
                        case 3:
                            return n.flags |= 65536,
                            e = a & -a,
                            n.lanes |= e,
                            de(n, e = Jt(n.stateNode, l, e)),
                            !1;
                        case 1:
                            if (t = n.type,
                            o = n.stateNode,
                            !(128 & n.flags || "function" != typeof t.getDerivedStateFromError && (null === o || "function" != typeof o.componentDidCatch || null !== Ks && Ks.has(o))))
                                return n.flags |= 65536,
                                a &= -a,
                                n.lanes |= a,
                                tn(a = en(a), e, n, l),
                                de(n, a),
                                !1
                        }
                        n = n.return
                    } while (null !== n);
                    return !1
                }(e, a, t, n, Ts))
                    return Us = 1,
                    Kt(e, T(n, e.current)),
                    void (Ls = null)
            } catch (o) {
                if (null !== a)
                    throw Ls = a,
                    o;
                return Us = 1,
                Kt(e, T(n, e.current)),
                void (Ls = null)
            }
            32768 & t.flags ? (nu || 1 === l ? e = !0 : Fs || 536870912 & Ts ? e = !1 : (Ms = e = !0,
            (2 === l || 3 === l || 6 === l) && null !== (l = Tu.current) && 13 === l.tag && (l.flags |= 16384)),
            ml(t, e)) : pl(t)
        }
        function pl(e) {
            var t = e;
            do {
                if (32768 & t.flags)
                    return void ml(t, Ms);
                e = t.return;
                var n = Zn(t.alternate, t, Ds);
                if (null !== n)
                    return void (Ls = n);
                if (null !== (t = t.sibling))
                    return void (Ls = t);
                Ls = t = e
            } while (null !== t);
            0 === Us && (Us = 5)
        }
        function ml(e, t) {
            do {
                var n = Jn(e.alternate, e);
                if (null !== n)
                    return n.flags &= 32767,
                    void (Ls = n);
                if (null !== (n = e.return) && (n.flags |= 32768,
                n.subtreeFlags = 0,
                n.deletions = null),
                !t && null !== (e = e.sibling))
                    return void (Ls = e);
                Ls = e = n
            } while (null !== e);
            Us = 6,
            Ls = null
        }
        function hl(e, t, n, l, a, o, i, u, s, c) {
            var f = fa.T
              , d = Oa();
            try {
                Fa(2),
                fa.T = null,
                function(e, t, n, l, a, o, i, u) {
                    do {
                        vl()
                    } while (null !== Js);
                    if (6 & Ns)
                        throw Error(r(327));
                    var s = e.finishedWork;
                    if (l = e.finishedLanes,
                    null === s)
                        return null;
                    if (e.finishedWork = null,
                    e.finishedLanes = 0,
                    s === e.current)
                        throw Error(r(177));
                    e.callbackNode = null,
                    e.callbackPriority = 0,
                    e.cancelPendingCommit = null;
                    var c = s.lanes | s.childLanes;
                    if (function(e, t, n, r, l, a) {
                        var o = e.pendingLanes;
                        e.pendingLanes = n,
                        e.suspendedLanes = 0,
                        e.pingedLanes = 0,
                        e.warmLanes = 0,
                        e.expiredLanes &= n,
                        e.entangledLanes &= n,
                        e.errorRecoveryDisabledLanes &= n,
                        e.shellSuspendCounter = 0;
                        var i = e.entanglements
                          , u = e.expirationTimes
                          , s = e.hiddenUpdates;
                        for (n = o & ~n; 0 < n; ) {
                            var c = 31 - wi(n)
                              , f = 1 << c;
                            i[c] = 0,
                            u[c] = -1;
                            var d = s[c];
                            if (null !== d)
                                for (s[c] = null,
                                c = 0; c < d.length; c++) {
                                    var p = d[c];
                                    null !== p && (p.lane &= -536870913)
                                }
                            n &= ~f
                        }
                        0 !== r && j(e, r, 0),
                        0 !== a && 0 === l && 0 !== e.tag && (e.suspendedLanes |= a & ~(o & ~t))
                    }(e, l, c |= uu, o, i, u),
                    e === _s && (Ls = _s = null,
                    Ts = 0),
                    !(10256 & s.subtreeFlags) && !(10256 & s.flags) || Zs || (Zs = !0,
                    tc = c,
                    nc = n,
                    xi(Ii, function() {
                        return vl(),
                        null
                    })),
                    n = !!(15990 & s.flags),
                    15990 & s.subtreeFlags || n ? (n = fa.T,
                    fa.T = null,
                    o = Oa(),
                    Fa(2),
                    i = Ns,
                    Ns |= 4,
                    function(e, t) {
                        for (Sa(e.containerInfo),
                        hs = t; null !== hs; )
                            if (t = (e = hs).child,
                            1028 & e.subtreeFlags && null !== t)
                                t.return = e,
                                hs = t;
                            else
                                for (; null !== hs; ) {
                                    var n = (e = hs).alternate;
                                    switch (t = e.flags,
                                    e.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                    case 5:
                                    case 26:
                                    case 27:
                                    case 6:
                                    case 4:
                                    case 17:
                                        break;
                                    case 1:
                                        if (1024 & t && null !== n) {
                                            t = void 0;
                                            var l = e
                                              , a = n.memoizedProps;
                                            n = n.memoizedState;
                                            var o = l.stateNode;
                                            try {
                                                var i = Xt(l.type, a, (l.elementType,
                                                l.type));
                                                t = o.getSnapshotBeforeUpdate(i, n),
                                                o.__reactInternalSnapshotBeforeUpdate = t
                                            } catch (u) {
                                                yl(l, l.return, u)
                                            }
                                        }
                                        break;
                                    case 3:
                                        1024 & t && La && So(e.stateNode.containerInfo);
                                        break;
                                    default:
                                        if (1024 & t)
                                            throw Error(r(163))
                                    }
                                    if (null !== (t = e.sibling)) {
                                        t.return = e.return,
                                        hs = t;
                                        break
                                    }
                                    hs = e.return
                                }
                        i = gs,
                        gs = !1
                    }(e, s),
                    wr(s, e),
                    wa(e.containerInfo),
                    e.current = s,
                    mr(e, s.alternate, s),
                    Ni(),
                    Ns = i,
                    Fa(o),
                    fa.T = n) : e.current = s,
                    Zs ? (Zs = !1,
                    Js = e,
                    ec = l) : gl(e, c),
                    0 === (c = e.pendingLanes) && (Ks = null),
                    function(e) {
                        if (Di && "function" == typeof Di.onCommitFiberRoot)
                            try {
                                Di.onCommitFiberRoot(Oi, e, void 0, !(128 & ~e.current.flags))
                            } catch (t) {}
                    }(s.stateNode),
                    J(e),
                    null !== t)
                        for (a = e.onRecoverableError,
                        s = 0; s < t.length; s++)
                            c = t[s],
                            a(c.value, {
                                componentStack: c.stack
                            });
                    !!(3 & ec) && vl(),
                    c = e.pendingLanes,
                    4194218 & l && 42 & c ? e === lc ? rc++ : (rc = 0,
                    lc = e) : rc = 0,
                    ee(0)
                }(e, t, n, l, d, a, o, i)
            } finally {
                fa.T = f,
                Fa(d)
            }
        }
        function gl(e, t) {
            0 === (e.pooledCacheLanes &= t) && null != (t = e.pooledCache) && (e.pooledCache = null,
            On(t))
        }
        function vl() {
            if (null !== Js) {
                var e = Js
                  , t = tc;
                tc = 0;
                var n = _(ec)
                  , l = 32 > n ? 32 : n;
                n = fa.T;
                var a = Oa();
                try {
                    if (Fa(l),
                    fa.T = null,
                    null === Js)
                        var o = !1;
                    else {
                        l = nc,
                        nc = null;
                        var i = Js
                          , u = ec;
                        if (Js = null,
                        ec = 0,
                        6 & Ns)
                            throw Error(r(331));
                        var s = Ns;
                        if (Ns |= 4,
                        Or(i.current),
                        _r(i, i.current, u, l),
                        Ns = s,
                        ee(0),
                        Di && "function" == typeof Di.onPostCommitFiberRoot)
                            try {
                                Di.onPostCommitFiberRoot(Oi, i)
                            } catch (c) {}
                        o = !0
                    }
                    return o
                } finally {
                    Fa(a),
                    fa.T = n,
                    gl(e, t)
                }
            }
            return !1
        }
        function bl(e, t, n) {
            t = T(n, t),
            null !== (e = ce(e, t = Jt(e.stateNode, t, 2), 2)) && (E(e, 2),
            J(e))
        }
        function yl(e, t, n) {
            if (3 === e.tag)
                bl(e, e, n);
            else
                for (; null !== t; ) {
                    if (3 === t.tag) {
                        bl(t, e, n);
                        break
                    }
                    if (1 === t.tag) {
                        var r = t.stateNode;
                        if ("function" == typeof t.type.getDerivedStateFromError || "function" == typeof r.componentDidCatch && (null === Ks || !Ks.has(r))) {
                            e = T(n, e),
                            null !== (r = ce(t, n = en(2), 2)) && (tn(n, r, t, e),
                            E(r, 2),
                            J(r));
                            break
                        }
                    }
                    t = t.return
                }
        }
        function Sl(e, t, n) {
            var r = e.pingCache;
            if (null === r) {
                r = e.pingCache = new js;
                var l = new Set;
                r.set(t, l)
            } else
                void 0 === (l = r.get(t)) && (l = new Set,
                r.set(t, l));
            l.has(n) || (Os = !0,
            l.add(n),
            e = wl.bind(null, e, t, n),
            t.then(e, e))
        }
        function wl(e, t, n) {
            var r = e.pingCache;
            null !== r && r.delete(t),
            e.pingedLanes |= e.suspendedLanes & n,
            e.warmLanes &= ~n,
            _s === e && (Ts & n) === n && (4 === Us || 3 === Us && (62914560 & Ts) === Ts && 300 > _i() - Ys ? !(2 & Ns) && tl(e, 0) : Qs |= n,
            Vs === Ts && (Vs = 0)),
            J(e)
        }
        function kl(e, t) {
            0 === t && (t = P()),
            null !== (e = X(e, t)) && (E(e, t),
            J(e))
        }
        function zl(e) {
            var t = e.memoizedState
              , n = 0;
            null !== t && (n = t.retryLane),
            kl(e, n)
        }
        function Cl(e, t) {
            var n = 0;
            switch (e.tag) {
            case 13:
                var l = e.stateNode
                  , a = e.memoizedState;
                null !== a && (n = a.retryLane);
                break;
            case 19:
                l = e.stateNode;
                break;
            case 22:
                l = e.stateNode._retryCache;
                break;
            default:
                throw Error(r(314))
            }
            null !== l && l.delete(t),
            kl(e, n)
        }
        function Pl(e, t, n, r) {
            this.tag = e,
            this.key = n,
            this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
            this.index = 0,
            this.refCleanup = this.ref = null,
            this.pendingProps = t,
            this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
            this.mode = r,
            this.subtreeFlags = this.flags = 0,
            this.deletions = null,
            this.childLanes = this.lanes = 0,
            this.alternate = null
        }
        function xl(e) {
            return !(!(e = e.prototype) || !e.isReactComponent)
        }
        function El(e, n) {
            var r = e.alternate;
            return null === r ? ((r = t(e.tag, n, e.key, e.mode)).elementType = e.elementType,
            r.type = e.type,
            r.stateNode = e.stateNode,
            r.alternate = e,
            e.alternate = r) : (r.pendingProps = n,
            r.type = e.type,
            r.flags = 0,
            r.subtreeFlags = 0,
            r.deletions = null),
            r.flags = 31457280 & e.flags,
            r.childLanes = e.childLanes,
            r.lanes = e.lanes,
            r.child = e.child,
            r.memoizedProps = e.memoizedProps,
            r.memoizedState = e.memoizedState,
            r.updateQueue = e.updateQueue,
            n = e.dependencies,
            r.dependencies = null === n ? null : {
                lanes: n.lanes,
                firstContext: n.firstContext
            },
            r.sibling = e.sibling,
            r.index = e.index,
            r.ref = e.ref,
            r.refCleanup = e.refCleanup,
            r
        }
        function jl(e, t) {
            e.flags &= 31457282;
            var n = e.alternate;
            return null === n ? (e.childLanes = 0,
            e.lanes = t,
            e.child = null,
            e.subtreeFlags = 0,
            e.memoizedProps = null,
            e.memoizedState = null,
            e.updateQueue = null,
            e.dependencies = null,
            e.stateNode = null) : (e.childLanes = n.childLanes,
            e.lanes = n.lanes,
            e.child = n.child,
            e.subtreeFlags = 0,
            e.deletions = null,
            e.memoizedProps = n.memoizedProps,
            e.memoizedState = n.memoizedState,
            e.updateQueue = n.updateQueue,
            e.type = n.type,
            t = n.dependencies,
            e.dependencies = null === t ? null : {
                lanes: t.lanes,
                firstContext: t.firstContext
            }),
            e
        }
        function Nl(e, n, l, a, o, i) {
            var u = 0;
            if (a = e,
            "function" == typeof e)
                xl(e) && (u = 1);
            else if ("string" == typeof e)
                u = Zo && di ? Jo(e, l, Xi.current) ? 26 : vi(e) ? 27 : 5 : Zo ? Jo(e, l, Xi.current) ? 26 : 5 : di && vi(e) ? 27 : 5;
            else
                e: switch (e) {
                case Xl:
                    return _l(l.children, o, i, n);
                case Kl:
                    u = 8,
                    o |= 24;
                    break;
                case Zl:
                    return (e = t(12, l, n, 2 | o)).elementType = Zl,
                    e.lanes = i,
                    e;
                case ra:
                    return (e = t(13, l, n, o)).elementType = ra,
                    e.lanes = i,
                    e;
                case la:
                    return (e = t(19, l, n, o)).elementType = la,
                    e.lanes = i,
                    e;
                case ia:
                    return Ll(l, o, i, n);
                default:
                    if ("object" == typeof e && null !== e)
                        switch (e.$$typeof) {
                        case Jl:
                        case ta:
                            u = 10;
                            break e;
                        case ea:
                            u = 9;
                            break e;
                        case na:
                            u = 11;
                            break e;
                        case aa:
                            u = 14;
                            break e;
                        case oa:
                            u = 16,
                            a = null;
                            break e
                        }
                    u = 29,
                    l = Error(r(130, null === e ? "null" : typeof e, "")),
                    a = null
                }
            return (n = t(u, l, n, o)).elementType = e,
            n.type = a,
            n.lanes = i,
            n
        }
        function _l(e, n, r, l) {
            return (e = t(7, e, l, n)).lanes = r,
            e
        }
        function Ll(e, n, l, a) {
            (e = t(22, e, a, n)).elementType = ia,
            e.lanes = l;
            var o = {
                _visibility: 1,
                _pendingVisibility: 1,
                _pendingMarkers: null,
                _retryCache: null,
                _transitions: null,
                _current: null,
                detach: function() {
                    var e = o._current;
                    if (null === e)
                        throw Error(r(456));
                    if (!(2 & o._pendingVisibility)) {
                        var t = X(e, 2);
                        null !== t && (o._pendingVisibility |= 2,
                        qr(t, 0, 2))
                    }
                },
                attach: function() {
                    var e = o._current;
                    if (null === e)
                        throw Error(r(456));
                    if (2 & o._pendingVisibility) {
                        var t = X(e, 2);
                        null !== t && (o._pendingVisibility &= -3,
                        qr(t, 0, 2))
                    }
                }
            };
            return e.stateNode = o,
            e
        }
        function Tl(e, n, r) {
            return (e = t(6, e, null, n)).lanes = r,
            e
        }
        function Il(e, n, r) {
            return (n = t(4, null !== e.children ? e.children : [], e.key, n)).lanes = r,
            n.stateNode = {
                containerInfo: e.containerInfo,
                pendingChildren: null,
                implementation: e.implementation
            },
            n
        }
        function Rl(e, t, n, r, l, a, o, i) {
            this.tag = 1,
            this.containerInfo = e,
            this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
            this.timeoutHandle = Na,
            this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null,
            this.callbackPriority = 0,
            this.expirationTimes = x(-1),
            this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.finishedLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
            this.entanglements = x(0),
            this.hiddenUpdates = x(null),
            this.identifierPrefix = r,
            this.onUncaughtError = l,
            this.onCaughtError = a,
            this.onRecoverableError = o,
            this.pooledCache = null,
            this.pooledCacheLanes = 0,
            this.formState = i,
            this.incompleteTransitions = new Map
        }
        function Ml(e, n, r, l, a, o, i, u, s, c, f, d) {
            return e = new Rl(e,n,r,i,u,s,c,d),
            n = 1,
            !0 === o && (n |= 24),
            o = t(3, null, null, n),
            e.current = o,
            o.stateNode = e,
            (n = Fn()).refCount++,
            e.pooledCache = n,
            n.refCount++,
            o.memoizedState = {
                element: l,
                isDehydrated: r,
                cache: n
            },
            ie(o),
            e
        }
        function Fl(e) {
            return e ? e = Si : Si
        }
        function Ol(e) {
            var t = e._reactInternals;
            if (void 0 === t) {
                if ("function" == typeof e.render)
                    throw Error(r(188));
                throw e = Object.keys(e).join(","),
                Error(r(268, e))
            }
            return null === (e = null !== (e = d(t)) ? p(e) : null) ? null : va(e.stateNode)
        }
        function Dl(e, t, n, r, l, a) {
            l = Fl(l),
            null === r.context ? r.context = l : r.pendingContext = l,
            (r = se(t)).payload = {
                element: n
            },
            null !== (a = void 0 === a ? null : a) && (r.callback = a),
            null !== (n = ce(e, r, t)) && (qr(n, 0, t),
            fe(n, e, t))
        }
        function Ul(e, t) {
            if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
                var n = e.retryLane;
                e.retryLane = 0 !== n && n < t ? n : t
            }
        }
        function Hl(e, t) {
            Ul(e, t),
            (e = e.alternate) && Ul(e, t)
        }
        var Al, Ql, $l = {}, Vl = w(), Wl = C(), Bl = Object.assign, ql = Symbol.for("react.element"), Yl = Symbol.for("react.transitional.element"), Gl = Symbol.for("react.portal"), Xl = Symbol.for("react.fragment"), Kl = Symbol.for("react.strict_mode"), Zl = Symbol.for("react.profiler"), Jl = Symbol.for("react.provider"), ea = Symbol.for("react.consumer"), ta = Symbol.for("react.context"), na = Symbol.for("react.forward_ref"), ra = Symbol.for("react.suspense"), la = Symbol.for("react.suspense_list"), aa = Symbol.for("react.memo"), oa = Symbol.for("react.lazy"), ia = Symbol.for("react.offscreen"), ua = Symbol.for("react.memo_cache_sentinel"), sa = Symbol.iterator, ca = Symbol.for("react.client.reference"), fa = Vl.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, da = !1, pa = Array.isArray, ma = e.rendererVersion, ha = e.rendererPackageName, ga = e.extraDevToolsConfig, va = e.getPublicInstance, ba = e.getRootHostContext, ya = e.getChildHostContext, Sa = e.prepareForCommit, wa = e.resetAfterCommit, ka = e.createInstance, za = e.appendInitialChild, Ca = e.finalizeInitialChildren, Pa = e.shouldSetTextContent, xa = e.createTextInstance, Ea = e.scheduleTimeout, ja = e.cancelTimeout, Na = e.noTimeout, _a = e.isPrimaryRenderer;
        e.warnsIfNotActing;
        var La = e.supportsMutation
          , Ta = e.supportsPersistence
          , Ia = e.supportsHydration
          , Ra = e.getInstanceFromNode;
        e.beforeActiveInstanceBlur,
        e.afterActiveInstanceBlur;
        var Ma = e.preparePortalMount;
        e.prepareScopeUpdate,
        e.getInstanceFromScope;
        var Fa = e.setCurrentUpdatePriority
          , Oa = e.getCurrentUpdatePriority
          , Da = e.resolveUpdatePriority;
        e.resolveEventType,
        e.resolveEventTimeStamp;
        var Ua = e.shouldAttemptEagerTransition
          , Ha = e.detachDeletedInstance;
        e.requestPostPaintCallback;
        var Aa = e.maySuspendCommit
          , Qa = e.preloadInstance
          , $a = e.startSuspendingCommit
          , Va = e.suspendInstance
          , Wa = e.waitForCommitToBeReady
          , Ba = e.NotPendingTransition
          , qa = e.HostTransitionContext
          , Ya = e.resetFormInstance;
        e.bindToConsole;
        var Ga = e.supportsMicrotasks
          , Xa = e.scheduleMicrotask
          , Ka = e.supportsTestSelectors
          , Za = e.findFiberRoot
          , Ja = e.getBoundingRect
          , eo = e.getTextContent
          , to = e.isHiddenSubtree
          , no = e.matchAccessibilityRole
          , ro = e.setFocusIfFocusable
          , lo = e.setupIntersectionObserver
          , ao = e.appendChild
          , oo = e.appendChildToContainer
          , io = e.commitTextUpdate
          , uo = e.commitMount
          , so = e.commitUpdate
          , co = e.insertBefore
          , fo = e.insertInContainerBefore
          , po = e.removeChild
          , mo = e.removeChildFromContainer
          , ho = e.resetTextContent
          , go = e.hideInstance
          , vo = e.hideTextInstance
          , bo = e.unhideInstance
          , yo = e.unhideTextInstance
          , So = e.clearContainer
          , wo = e.cloneInstance
          , ko = e.createContainerChildSet
          , zo = e.appendChildToContainerChildSet
          , Co = e.finalizeContainerChildren
          , Po = e.replaceContainerChildren
          , xo = e.cloneHiddenInstance
          , Eo = e.cloneHiddenTextInstance
          , jo = e.isSuspenseInstancePending
          , No = e.isSuspenseInstanceFallback
          , _o = e.getSuspenseInstanceFallbackErrorDetails
          , Lo = e.registerSuspenseInstanceRetry
          , To = e.canHydrateFormStateMarker
          , Io = e.isFormStateMarkerMatching
          , Ro = e.getNextHydratableSibling
          , Mo = e.getFirstHydratableChild
          , Fo = e.getFirstHydratableChildWithinContainer
          , Oo = e.getFirstHydratableChildWithinSuspenseInstance
          , Do = e.canHydrateInstance
          , Uo = e.canHydrateTextInstance
          , Ho = e.canHydrateSuspenseInstance
          , Ao = e.hydrateInstance
          , Qo = e.hydrateTextInstance
          , $o = e.hydrateSuspenseInstance
          , Vo = e.getNextHydratableInstanceAfterSuspenseInstance
          , Wo = e.commitHydratedContainer
          , Bo = e.commitHydratedSuspenseInstance
          , qo = e.clearSuspenseBoundary
          , Yo = e.clearSuspenseBoundaryFromContainer
          , Go = e.shouldDeleteUnhydratedTailInstances;
        e.diffHydratedPropsForDevWarnings,
        e.diffHydratedTextForDevWarnings,
        e.describeHydratableInstanceForDevWarnings;
        var Xo = e.validateHydratableInstance
          , Ko = e.validateHydratableTextInstance
          , Zo = e.supportsResources
          , Jo = e.isHostHoistableType
          , ei = e.getHoistableRoot
          , ti = e.getResource
          , ni = e.acquireResource
          , ri = e.releaseResource
          , li = e.hydrateHoistable
          , ai = e.mountHoistable
          , oi = e.unmountHoistable
          , ii = e.createHoistableInstance
          , ui = e.prepareToCommitHoistables
          , si = e.mayResourceSuspendCommit
          , ci = e.preloadResource
          , fi = e.suspendResource
          , di = e.supportsSingletons
          , pi = e.resolveSingletonInstance
          , mi = e.clearSingleton
          , hi = e.acquireSingletonInstance
          , gi = e.releaseSingletonInstance
          , vi = e.isHostSingletonType
          , bi = []
          , yi = -1
          , Si = {}
          , wi = Math.clz32 ? Math.clz32 : function(e) {
            return 0 == (e >>>= 0) ? 32 : 31 - (ki(e) / zi | 0) | 0
        }
          , ki = Math.log
          , zi = Math.LN2
          , Ci = 128
          , Pi = 4194304
          , xi = Wl.unstable_scheduleCallback
          , Ei = Wl.unstable_cancelCallback
          , ji = Wl.unstable_shouldYield
          , Ni = Wl.unstable_requestPaint
          , _i = Wl.unstable_now
          , Li = Wl.unstable_ImmediatePriority
          , Ti = Wl.unstable_UserBlockingPriority
          , Ii = Wl.unstable_NormalPriority
          , Ri = Wl.unstable_IdlePriority
          , Mi = Wl.log
          , Fi = Wl.unstable_setDisableYieldValue
          , Oi = null
          , Di = null
          , Ui = "function" == typeof Object.is ? Object.is : function(e, t) {
            return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
        }
          , Hi = new WeakMap
          , Ai = []
          , Qi = 0
          , $i = null
          , Vi = 0
          , Wi = []
          , Bi = 0
          , qi = null
          , Yi = 1
          , Gi = ""
          , Xi = h(null)
          , Ki = h(null)
          , Zi = h(null)
          , Ji = h(null)
          , eu = null
          , tu = null
          , nu = !1
          , ru = null
          , lu = !1
          , au = Error(r(519))
          , ou = []
          , iu = 0
          , uu = 0
          , su = null
          , cu = null
          , fu = !1
          , du = !1
          , pu = !1
          , mu = 0
          , hu = null
          , gu = 0
          , vu = 0
          , bu = null
          , yu = !1
          , Su = !1
          , wu = Object.prototype.hasOwnProperty
          , ku = Error(r(460))
          , zu = Error(r(474))
          , Cu = {
            then: function() {}
        }
          , Pu = null
          , xu = null
          , Eu = 0
          , ju = xe(!0)
          , Nu = xe(!1)
          , _u = h(null)
          , Lu = h(0)
          , Tu = h(null)
          , Iu = null
          , Ru = h(0)
          , Mu = 0
          , Fu = null
          , Ou = null
          , Du = null
          , Uu = !1
          , Hu = !1
          , Au = !1
          , Qu = 0
          , $u = 0
          , Vu = null
          , Wu = 0
          , Bu = function() {
            return {
                lastEffect: null,
                events: null,
                stores: null,
                memoCache: null
            }
        }
          , qu = {
            readContext: In,
            use: qe,
            useCallback: Me,
            useContext: Me,
            useEffect: Me,
            useImperativeHandle: Me,
            useLayoutEffect: Me,
            useInsertionEffect: Me,
            useMemo: Me,
            useReducer: Me,
            useRef: Me,
            useState: Me,
            useDebugValue: Me,
            useDeferredValue: Me,
            useTransition: Me,
            useSyncExternalStore: Me,
            useId: Me
        };
        qu.useCacheRefresh = Me,
        qu.useMemoCache = Me,
        qu.useHostTransitionStatus = Me,
        qu.useFormState = Me,
        qu.useActionState = Me,
        qu.useOptimistic = Me;
        var Yu = {
            readContext: In,
            use: qe,
            useCallback: function(e, t) {
                return Ve().memoizedState = [e, void 0 === t ? null : t],
                e
            },
            useContext: In,
            useEffect: zt,
            useImperativeHandle: function(e, t, n) {
                n = null != n ? n.concat([e]) : null,
                wt(4194308, 4, Et.bind(null, t, e), n)
            },
            useLayoutEffect: function(e, t) {
                return wt(4194308, 4, e, t)
            },
            useInsertionEffect: function(e, t) {
                wt(4, 2, e, t)
            },
            useMemo: function(e, t) {
                var n = Ve();
                t = void 0 === t ? null : t;
                var r = e();
                if (Au) {
                    L(!0);
                    try {
                        e()
                    } finally {
                        L(!1)
                    }
                }
                return n.memoizedState = [r, t],
                r
            },
            useReducer: function(e, t, n) {
                var r = Ve();
                if (void 0 !== n) {
                    var l = n(t);
                    if (Au) {
                        L(!0);
                        try {
                            n(t)
                        } finally {
                            L(!1)
                        }
                    }
                } else
                    l = t;
                return r.memoizedState = r.baseState = l,
                e = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: l
                },
                r.queue = e,
                e = e.dispatch = Ht.bind(null, Fu, e),
                [r.memoizedState, e]
            },
            useRef: function(e) {
                return e = {
                    current: e
                },
                Ve().memoizedState = e
            },
            useState: function(e) {
                var t = (e = at(e)).queue
                  , n = At.bind(null, Fu, t);
                return t.dispatch = n,
                [e.memoizedState, n]
            },
            useDebugValue: Nt,
            useDeferredValue: function(e, t) {
                return Tt(Ve(), e, t)
            },
            useTransition: function() {
                var e = at(!1);
                return e = Rt.bind(null, Fu, e.queue, !0, !1),
                Ve().memoizedState = e,
                [!1, e]
            },
            useSyncExternalStore: function(e, t, n) {
                var l = Fu
                  , a = Ve();
                if (nu) {
                    if (void 0 === n)
                        throw Error(r(407));
                    n = n()
                } else {
                    if (n = t(),
                    null === _s)
                        throw Error(r(349));
                    60 & Ts || et(l, t, n)
                }
                a.memoizedState = n;
                var o = {
                    value: n,
                    getSnapshot: t
                };
                return a.queue = o,
                zt(nt.bind(null, l, o, e), [e]),
                l.flags |= 2048,
                yt(9, tt.bind(null, l, o, n, t), {
                    destroy: void 0
                }, null),
                n
            },
            useId: function() {
                var e = Ve()
                  , t = _s.identifierPrefix;
                if (nu) {
                    var n = Gi;
                    t = ":" + t + "R" + (n = (Yi & ~(1 << 32 - wi(Yi) - 1)).toString(32) + n),
                    0 < (n = Qu++) && (t += "H" + n.toString(32)),
                    t += ":"
                } else
                    t = ":" + t + "r" + (n = Wu++).toString(32) + ":";
                return e.memoizedState = t
            },
            useCacheRefresh: function() {
                return Ve().memoizedState = Ut.bind(null, Fu)
            }
        };
        Yu.useMemoCache = Ye,
        Yu.useHostTransitionStatus = Ft,
        Yu.useFormState = mt,
        Yu.useActionState = mt,
        Yu.useOptimistic = function(e) {
            var t = Ve();
            t.memoizedState = t.baseState = e;
            var n = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: null,
                lastRenderedState: null
            };
            return t.queue = n,
            t = $t.bind(null, Fu, !0, n),
            n.dispatch = t,
            [e, t]
        }
        ;
        var Gu = {
            readContext: In,
            use: qe,
            useCallback: _t,
            useContext: In,
            useEffect: Ct,
            useImperativeHandle: jt,
            useInsertionEffect: Pt,
            useLayoutEffect: xt,
            useMemo: Lt,
            useReducer: Xe,
            useRef: St,
            useState: function() {
                return Xe(Ge)
            },
            useDebugValue: Nt,
            useDeferredValue: function(e, t) {
                return It(We(), Ou.memoizedState, e, t)
            },
            useTransition: function() {
                var e = Xe(Ge)[0]
                  , t = We().memoizedState;
                return ["boolean" == typeof e ? e : Be(e), t]
            },
            useSyncExternalStore: Je,
            useId: Ot
        };
        Gu.useCacheRefresh = Dt,
        Gu.useMemoCache = Ye,
        Gu.useHostTransitionStatus = Ft,
        Gu.useFormState = ht,
        Gu.useActionState = ht,
        Gu.useOptimistic = function(e, t) {
            return ot(We(), 0, e, t)
        }
        ;
        var Xu = {
            readContext: In,
            use: qe,
            useCallback: _t,
            useContext: In,
            useEffect: Ct,
            useImperativeHandle: jt,
            useInsertionEffect: Pt,
            useLayoutEffect: xt,
            useMemo: Lt,
            useReducer: Ze,
            useRef: St,
            useState: function() {
                return Ze(Ge)
            },
            useDebugValue: Nt,
            useDeferredValue: function(e, t) {
                var n = We();
                return null === Ou ? Tt(n, e, t) : It(n, Ou.memoizedState, e, t)
            },
            useTransition: function() {
                var e = Ze(Ge)[0]
                  , t = We().memoizedState;
                return ["boolean" == typeof e ? e : Be(e), t]
            },
            useSyncExternalStore: Je,
            useId: Ot
        };
        Xu.useCacheRefresh = Dt,
        Xu.useMemoCache = Ye,
        Xu.useHostTransitionStatus = Ft,
        Xu.useFormState = bt,
        Xu.useActionState = bt,
        Xu.useOptimistic = function(e, t) {
            var n = We();
            return null !== Ou ? ot(n, 0, e, t) : (n.baseState = e,
            [e, n.queue.dispatch])
        }
        ;
        var Ku = {
            isMounted: function(e) {
                return !!(e = e._reactInternals) && c(e) === e
            },
            enqueueSetState: function(e, t, n) {
                e = e._reactInternals;
                var r = Wr()
                  , l = se(r);
                l.payload = t,
                null != n && (l.callback = n),
                null !== (t = ce(e, l, r)) && (qr(t, 0, r),
                fe(t, e, r))
            },
            enqueueReplaceState: function(e, t, n) {
                e = e._reactInternals;
                var r = Wr()
                  , l = se(r);
                l.tag = 1,
                l.payload = t,
                null != n && (l.callback = n),
                null !== (t = ce(e, l, r)) && (qr(t, 0, r),
                fe(t, e, r))
            },
            enqueueForceUpdate: function(e, t) {
                e = e._reactInternals;
                var n = Wr()
                  , r = se(n);
                r.tag = 2,
                null != t && (r.callback = t),
                null !== (t = ce(e, r, n)) && (qr(t, 0, n),
                fe(t, e, n))
            }
        }
          , Zu = "function" == typeof reportError ? reportError : function(e) {
            if ("object" == typeof window && "function" == typeof window.ErrorEvent) {
                var t = new window.ErrorEvent("error",{
                    bubbles: !0,
                    cancelable: !0,
                    message: "object" == typeof e && null !== e && "string" == typeof e.message ? String(e.message) : String(e),
                    error: e
                });
                if (!window.dispatchEvent(t))
                    return
            } else if ("object" == typeof process && "function" == typeof process.emit)
                return void process.emit("uncaughtException", e);
            console.error(e)
        }
          , Ju = Error(r(461))
          , es = !1
          , ts = {
            dehydrated: null,
            treeContext: null,
            retryLane: 0
        }
          , ns = h(null)
          , rs = null
          , ls = null
          , as = "undefined" != typeof AbortController ? AbortController : function() {
            var e = []
              , t = this.signal = {
                aborted: !1,
                addEventListener: function(t, n) {
                    e.push(n)
                }
            };
            this.abort = function() {
                t.aborted = !0,
                e.forEach(function(e) {
                    return e()
                })
            }
        }
          , os = Wl.unstable_scheduleCallback
          , is = Wl.unstable_NormalPriority
          , us = {
            $$typeof: ta,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0
        }
          , ss = fa.S;
        fa.S = function(e, t) {
            "object" == typeof t && null !== t && "function" == typeof t.then && function(e, t) {
                if (null === hu) {
                    var n = hu = [];
                    gu = 0,
                    vu = ae(),
                    bu = {
                        status: "pending",
                        value: void 0,
                        then: function(e) {
                            n.push(e)
                        }
                    }
                }
                gu++,
                t.then(oe, oe)
            }(0, t),
            null !== ss && ss(e, t)
        }
        ;
        var cs = h(null)
          , fs = !1
          , ds = !1
          , ps = !1
          , ms = "function" == typeof WeakSet ? WeakSet : Set
          , hs = null
          , gs = !1
          , vs = null
          , bs = !1
          , ys = null
          , Ss = 8192
          , ws = {
            getCacheForType: function(e) {
                var t = In(us)
                  , n = t.data.get(e);
                return void 0 === n && (n = e(),
                t.data.set(e, n)),
                n
            }
        }
          , ks = 0
          , zs = 1
          , Cs = 2
          , Ps = 3
          , xs = 4;
        if ("function" == typeof Symbol && Symbol.for) {
            var Es = Symbol.for;
            ks = Es("selector.component"),
            zs = Es("selector.has_pseudo_class"),
            Cs = Es("selector.role"),
            Ps = Es("selector.test_id"),
            xs = Es("selector.text")
        }
        var js = "function" == typeof WeakMap ? WeakMap : Map
          , Ns = 0
          , _s = null
          , Ls = null
          , Ts = 0
          , Is = 0
          , Rs = null
          , Ms = !1
          , Fs = !1
          , Os = !1
          , Ds = 0
          , Us = 0
          , Hs = 0
          , As = 0
          , Qs = 0
          , $s = 0
          , Vs = 0
          , Ws = null
          , Bs = null
          , qs = !1
          , Ys = 0
          , Gs = 1 / 0
          , Xs = null
          , Ks = null
          , Zs = !1
          , Js = null
          , ec = 0
          , tc = 0
          , nc = null
          , rc = 0
          , lc = null;
        return $l.attemptContinuousHydration = function(e) {
            if (13 === e.tag) {
                var t = X(e, 67108864);
                null !== t && qr(t, 0, 67108864),
                Hl(e, 67108864)
            }
        }
        ,
        $l.attemptHydrationAtCurrentPriority = function(e) {
            if (13 === e.tag) {
                var t = Wr()
                  , n = X(e, t);
                null !== n && qr(n, 0, t),
                Hl(e, t)
            }
        }
        ,
        $l.attemptSynchronousHydration = function(e) {
            switch (e.tag) {
            case 3:
                if ((e = e.stateNode).current.memoizedState.isDehydrated) {
                    var t = b(e.pendingLanes);
                    if (0 !== t) {
                        for (e.pendingLanes |= 2,
                        e.entangledLanes |= 2; t; ) {
                            var n = 1 << 31 - wi(t);
                            e.entanglements[1] |= n,
                            t &= ~n
                        }
                        J(e),
                        !(6 & Ns) && (Gs = _i() + 500,
                        ee(0))
                    }
                }
                break;
            case 13:
                null !== (t = X(e, 2)) && qr(t, 0, 2),
                Jr(),
                Hl(e, 2)
            }
        }
        ,
        $l.batchedUpdates = function(e, t) {
            return e(t)
        }
        ,
        $l.createComponentSelector = function(e) {
            return {
                $$typeof: ks,
                value: e
            }
        }
        ,
        $l.createContainer = function(e, t, n, r, l, a, o, i, u, s) {
            return Ml(e, t, !1, null, 0, r, a, o, i, u, 0, null)
        }
        ,
        $l.createHasPseudoClassSelector = function(e) {
            return {
                $$typeof: zs,
                value: e
            }
        }
        ,
        $l.createHydrationContainer = function(e, t, n, r, l, a, o, i, u, s, c, f, d) {
            return (e = Ml(n, r, !0, e, 0, a, i, u, s, c, 0, d)).context = Fl(null),
            n = e.current,
            (l = se(r = Wr())).callback = null != t ? t : null,
            ce(n, l, r),
            e.current.lanes = r,
            E(e, r),
            J(e),
            e
        }
        ,
        $l.createPortal = function(e, t, n) {
            var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
            return {
                $$typeof: Gl,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n
            }
        }
        ,
        $l.createRoleSelector = function(e) {
            return {
                $$typeof: Cs,
                value: e
            }
        }
        ,
        $l.createTestNameSelector = function(e) {
            return {
                $$typeof: Ps,
                value: e
            }
        }
        ,
        $l.createTextSelector = function(e) {
            return {
                $$typeof: xs,
                value: e
            }
        }
        ,
        $l.defaultOnCaughtError = function(e) {
            console.error(e)
        }
        ,
        $l.defaultOnRecoverableError = function(e) {
            Zu(e)
        }
        ,
        $l.defaultOnUncaughtError = function(e) {
            Zu(e)
        }
        ,
        $l.deferredUpdates = function(e) {
            var t = fa.T
              , n = Oa();
            try {
                return Fa(32),
                fa.T = null,
                e()
            } finally {
                Fa(n),
                fa.T = t
            }
        }
        ,
        $l.discreteUpdates = function(e, t, n, r, l) {
            var a = fa.T
              , o = Oa();
            try {
                return Fa(2),
                fa.T = null,
                e(t, n, r, l)
            } finally {
                Fa(o),
                fa.T = a,
                0 === Ns && (Gs = _i() + 500)
            }
        }
        ,
        $l.findAllNodes = Vr,
        $l.findBoundingRects = function(e, t) {
            if (!Ka)
                throw Error(r(363));
            t = Vr(e, t),
            e = [];
            for (var n = 0; n < t.length; n++)
                e.push(Ja(t[n]));
            for (t = e.length - 1; 0 < t; t--)
                for (var l = (n = e[t]).x, a = l + n.width, o = n.y, i = o + n.height, u = t - 1; 0 <= u; u--)
                    if (t !== u) {
                        var s = e[u]
                          , c = s.x
                          , f = c + s.width
                          , d = s.y
                          , p = d + s.height;
                        if (l >= c && o >= d && a <= f && i <= p) {
                            e.splice(t, 1);
                            break
                        }
                        if (!(l !== c || n.width !== s.width || p < o || d > i)) {
                            d > o && (s.height += d - o,
                            s.y = o),
                            p < i && (s.height = i - d),
                            e.splice(t, 1);
                            break
                        }
                        if (!(o !== d || n.height !== s.height || f < l || c > a)) {
                            c > l && (s.width += c - l,
                            s.x = l),
                            f < a && (s.width = a - c),
                            e.splice(t, 1);
                            break
                        }
                    }
            return e
        }
        ,
        $l.findHostInstance = Ol,
        $l.findHostInstanceWithNoPortals = function(e) {
            return null === (e = null !== (e = d(e)) ? m(e) : null) ? null : va(e.stateNode)
        }
        ,
        $l.findHostInstanceWithWarning = function(e) {
            return Ol(e)
        }
        ,
        $l.flushPassiveEffects = vl,
        $l.flushSyncFromReconciler = function(e) {
            var t = Ns;
            Ns |= 1;
            var n = fa.T
              , r = Oa();
            try {
                if (Fa(2),
                fa.T = null,
                e)
                    return e()
            } finally {
                Fa(r),
                fa.T = n,
                !(6 & (Ns = t)) && ee(0)
            }
        }
        ,
        $l.flushSyncWork = Jr,
        $l.focusWithin = function(e, t) {
            if (!Ka)
                throw Error(r(363));
            for (t = $r(e = Hr(e), t),
            t = Array.from(t),
            e = 0; e < t.length; ) {
                var n = t[e++]
                  , l = n.tag;
                if (!to(n)) {
                    if ((5 === l || 26 === l || 27 === l) && ro(n.stateNode))
                        return !0;
                    for (n = n.child; null !== n; )
                        t.push(n),
                        n = n.sibling
                }
            }
            return !1
        }
        ,
        $l.getFindAllNodesFailureDescription = function(e, t) {
            if (!Ka)
                throw Error(r(363));
            var n = 0
              , l = [];
            e = [Hr(e), 0];
            for (var a = 0; a < e.length; ) {
                var o = e[a++]
                  , i = o.tag
                  , u = e[a++]
                  , s = t[u];
                if ((5 !== i && 26 !== i && 27 !== i || !to(o)) && (Ar(o, s) && (l.push(Qr(s)),
                ++u > n && (n = u)),
                u < t.length))
                    for (o = o.child; null !== o; )
                        e.push(o, u),
                        o = o.sibling
            }
            if (n < t.length) {
                for (e = []; n < t.length; n++)
                    e.push(Qr(t[n]));
                return "findAllNodes was able to match part of the selector:\n  " + l.join(" > ") + "\n\nNo matching component was found for:\n  " + e.join(" > ")
            }
            return null
        }
        ,
        $l.getPublicRootInstance = function(e) {
            if (!(e = e.current).child)
                return null;
            switch (e.child.tag) {
            case 27:
            case 5:
                return va(e.child.stateNode);
            default:
                return e.child.stateNode
            }
        }
        ,
        $l.injectIntoDevTools = function() {
            var e = {
                bundleType: 0,
                version: ma,
                rendererPackageName: ha,
                currentDispatcherRef: fa,
                findFiberByHostInstance: Ra,
                reconcilerVersion: "19.0.0"
            };
            if (null !== ga && (e.rendererConfig = ga),
            "undefined" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)
                e = !1;
            else {
                var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                if (t.isDisabled || !t.supportsFiber)
                    e = !0;
                else {
                    try {
                        Oi = t.inject(e),
                        Di = t
                    } catch (n) {}
                    e = !!t.checkDCE
                }
            }
            return e
        }
        ,
        $l.isAlreadyRendering = function() {
            return !1
        }
        ,
        $l.observeVisibleRects = function(e, t, n, l) {
            if (!Ka)
                throw Error(r(363));
            e = Vr(e, t);
            var a = lo(e, n, l).disconnect;
            return {
                disconnect: function() {
                    a()
                }
            }
        }
        ,
        $l.shouldError = function() {
            return null
        }
        ,
        $l.shouldSuspend = function() {
            return !1
        }
        ,
        $l.startHostTransition = function(e, t, l, a) {
            if (5 !== e.tag)
                throw Error(r(476));
            var o = Mt(e).queue;
            Rt(e, o, t, Ba, null === l ? n : function() {
                var t = Mt(e).next.queue;
                return Qt(e, t, {}, Wr()),
                l(a)
            }
            )
        }
        ,
        $l.updateContainer = function(e, t, n, r) {
            var l = t.current
              , a = Wr();
            return Dl(l, a, e, t, n, r),
            a
        }
        ,
        $l.updateContainerSync = function(e, t, n, r) {
            return 0 === t.tag && vl(),
            Dl(t.current, 2, e, t, n, r),
            2
        }
        ,
        $l
    }
    ,
    e.exports.default = e.exports,
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    })),
    X.exports;
    var e
}
const Z = k((Y || (Y = 1,
G.exports = K()),
G.exports));
var J = C();
const ee = [];
function te(e, t, n= (e, t) => e === t) {
    if (e === t)
        return !0;
    if (!e || !t)
        return !1;
    const r = e.length;
    if (t.length !== r)
        return !1;
    for (let l = 0; l < r; l++)
        if (!n(e[l], t[l]))
            return !1;
    return !0
}
function ne(e, t=null, n=!1, r={}) {
    null === t && (t = [e]);
    for (const o of ee)
        if (te(t, o.keys, o.equal)) {
            if (n)
                return;
            if (Object.prototype.hasOwnProperty.call(o, "error"))
                throw o.error;
            if (Object.prototype.hasOwnProperty.call(o, "response"))
                return r.lifespan && r.lifespan > 0 && (o.timeout && clearTimeout(o.timeout),
                o.timeout = setTimeout(o.remove, r.lifespan)),
                o.response;
            if (!n)
                throw o.promise
        }
    const l = {
        keys: t,
        equal: r.equal,
        remove: () => {
            const e = ee.indexOf(l);
            -1 !== e && ee.splice(e, 1)
        }
        ,
        promise: (a = e,
        "object" == typeof a && "function" == typeof a.then ? e : e(...t)).then(e => {
            l.response = e,
            r.lifespan && r.lifespan > 0 && (l.timeout = setTimeout(l.remove, r.lifespan))
        }
        ).catch(e => l.error = e)
    };
    var a;
    if (ee.push(l),
    !n)
        throw l.promise
}
const re = (e, t, n) => ne(e, t, !1, n);
function le(e, t, n) {
    if (!e)
        return;
    if (!0 === n(e))
        return e;
    let r = t ? e.return : e.child;
    for (; r; ) {
        const e = le(r, t, n);
        if (e)
            return e;
        r = t ? null : r.sibling
    }
}
function ae(e) {
    try {
        return Object.defineProperties(e, {
            _currentRenderer: {
                get: () => null,
                set() {}
            },
            _currentRenderer2: {
                get: () => null,
                set() {}
            }
        })
    } catch (t) {
        return e
    }
}
const oe = ae(P.createContext(null));
class ie extends P.Component {
    render() {
        return P.createElement(oe.Provider, {
            value: this._reactInternals
        }, this.props.children)
    }
}
function ue() {
    const e = P.useContext(oe);
    if (null === e)
        throw new Error("its-fine: useFiber must be called within a <FiberProvider />!");
    const t = P.useId();
    return P.useMemo( () => {
        for (const n of [e, null == e ? void 0 : e.alternate]) {
            if (!n)
                continue;
            const e = le(n, !1, e => {
                let n = e.memoizedState;
                for (; n; ) {
                    if (n.memoizedState === t)
                        return !0;
                    n = n.next
                }
            }
            );
            if (e)
                return e
        }
    }
    , [e, t])
}
const se = Symbol.for("react.context")
  , ce = e => null !== e && "object" == typeof e && "$$typeof"in e && e.$$typeof === se;
function fe() {
    const e = function() {
        const e = ue()
          , [t] = P.useState( () => new Map);
        t.clear();
        let n = e;
        for (; n; ) {
            const e = n.type;
            ce(e) && e !== oe && !t.has(e) && t.set(e, P.use(ae(e))),
            n = n.return
        }
        return t
    }();
    return P.useMemo( () => Array.from(e.keys()).reduce( (t, n) => r => P.createElement(t, null, P.createElement(n.Provider, {
        ...r,
        value: e.get(n)
    })), e => P.createElement(ie, {
        ...e
    })), [e])
}
function de(e) {
    let t = e.root;
    for (; t.getState().previousRoot; )
        t = t.getState().previousRoot;
    return t
}
const pe = e => e && e.isOrthographicCamera
  , me = e => e && e.hasOwnProperty("current")
  , he = e => null != e && ("string" == typeof e || "number" == typeof e || e.isColor)
  , ge = ( (e, t) => "undefined" != typeof window && ((null == (e = window.document) ? void 0 : e.createElement) || "ReactNative" === (null == (t = window.navigator) ? void 0 : t.product)))() ? P.useLayoutEffect : P.useEffect;
function ve(e) {
    const t = P.useRef(e);
    return ge( () => {
        t.current = e
    }
    , [e]),
    t
}
function be() {
    const e = ue()
      , t = fe();
    return P.useMemo( () => ({children: n}) => {
        const r = !!le(e, !0, e => e.type === P.StrictMode) ? P.StrictMode : P.Fragment;
        return x.jsx(r, {
            children: x.jsx(t, {
                children: n
            })
        })
    }
    , [e, t])
}
function ye({set: e}) {
    return ge( () => (e(new Promise( () => null)),
    () => e(!1)), [e]),
    null
}
const Se = (e => ((e = class extends P.Component {
    constructor(...e) {
        super(...e),
        this.state = {
            error: !1
        }
    }
    componentDidCatch(e) {
        this.props.set(e)
    }
    render() {
        return this.state.error ? null : this.props.children
    }
}
).getDerivedStateFromError = () => ({
    error: !0
}),
e))();
function we(e) {
    var t;
    const n = "undefined" != typeof window ? null != (t = window.devicePixelRatio) ? t : 2 : 1;
    return Array.isArray(e) ? Math.min(Math.max(e[0], n), e[1]) : e
}
function ke(e) {
    var t;
    return null == (t = e.__r3f) ? void 0 : t.root.getState()
}
const ze = {
    obj: e => e === Object(e) && !ze.arr(e) && "function" != typeof e,
    fun: e => "function" == typeof e,
    str: e => "string" == typeof e,
    num: e => "number" == typeof e,
    boo: e => "boolean" == typeof e,
    und: e => void 0 === e,
    nul: e => null === e,
    arr: e => Array.isArray(e),
    equ(e, t, {arrays: n="shallow", objects: r="reference", strict: l=!0}={}) {
        if (typeof e != typeof t || !!e != !!t)
            return !1;
        if (ze.str(e) || ze.num(e) || ze.boo(e))
            return e === t;
        const a = ze.obj(e);
        if (a && "reference" === r)
            return e === t;
        const o = ze.arr(e);
        if (o && "reference" === n)
            return e === t;
        if ((o || a) && e === t)
            return !0;
        let i;
        for (i in e)
            if (!(i in t))
                return !1;
        if (a && "shallow" === n && "shallow" === r) {
            for (i in l ? t : e)
                if (!ze.equ(e[i], t[i], {
                    strict: l,
                    objects: "reference"
                }))
                    return !1
        } else
            for (i in l ? t : e)
                if (e[i] !== t[i])
                    return !1;
        if (ze.und(i)) {
            if (o && 0 === e.length && 0 === t.length)
                return !0;
            if (a && 0 === Object.keys(e).length && 0 === Object.keys(t).length)
                return !0;
            if (e !== t)
                return !1
        }
        return !0
    }
};
const Ce = ["children", "key", "ref"];
function Pe(e) {
    const t = {};
    for (const n in e)
        Ce.includes(n) || (t[n] = e[n]);
    return t
}
function xe(e, t, n, r) {
    const l = e;
    let a = null == l ? void 0 : l.__r3f;
    return a || (a = {
        root: t,
        type: n,
        parent: null,
        children: [],
        props: Pe(r),
        object: l,
        eventCount: 0,
        handlers: {},
        isHidden: !1
    },
    l && (l.__r3f = a)),
    a
}
function Ee(e, t) {
    let n = e[t];
    if (!t.includes("-"))
        return {
            root: e,
            key: t,
            target: n
        };
    n = e;
    for (const l of t.split("-")) {
        var r;
        t = l,
        e = n,
        n = null == (r = n) ? void 0 : r[t]
    }
    return {
        root: e,
        key: t,
        target: n
    }
}
const je = /-\d+$/;
function Ne(e, t) {
    if (ze.str(t.props.attach)) {
        if (je.test(t.props.attach)) {
            const n = t.props.attach.replace(je, "")
              , {root: r, key: l} = Ee(e.object, n);
            Array.isArray(r[l]) || (r[l] = [])
        }
        const {root: n, key: r} = Ee(e.object, t.props.attach);
        t.previousAttach = n[r],
        n[r] = t.object
    } else
        ze.fun(t.props.attach) && (t.previousAttach = t.props.attach(e.object, t.object))
}
function _e(e, t) {
    if (ze.str(t.props.attach)) {
        const {root: n, key: r} = Ee(e.object, t.props.attach)
          , l = t.previousAttach;
        void 0 === l ? delete n[r] : n[r] = l
    } else
        null == t.previousAttach || t.previousAttach(e.object, t.object);
    delete t.previousAttach
}
const Le = [...Ce, "args", "dispose", "attach", "object", "onUpdate", "dispose"]
  , Te = new Map;
function Ie(e) {
    let t = Te.get(e.constructor);
    try {
        t || (t = new e.constructor,
        Te.set(e.constructor, t))
    } catch (n) {}
    return t
}
const Re = ["map", "emissiveMap", "sheenColorMap", "specularColorMap", "envMap"]
  , Me = /^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/;
function Fe(e, t) {
    var n;
    const r = e.__r3f
      , l = r && de(r).getState()
      , a = null == r ? void 0 : r.eventCount;
    for (const i in t) {
        let n = t[i];
        if (Le.includes(i))
            continue;
        if (r && Me.test(i)) {
            "function" == typeof n ? r.handlers[i] = n : delete r.handlers[i],
            r.eventCount = Object.keys(r.handlers).length;
            continue
        }
        if (void 0 === n)
            continue;
        let {root: a, key: u, target: s} = Ee(e, i);
        if (s instanceof m && n instanceof m)
            s.mask = n.mask;
        else if (s instanceof h && he(n))
            s.set(n);
        else if (null !== s && "object" == typeof s && "function" == typeof s.set && "function" == typeof s.copy && null != n && n.constructor && s.constructor === n.constructor)
            s.copy(n);
        else if (null !== s && "object" == typeof s && "function" == typeof s.set && Array.isArray(n))
            "function" == typeof s.fromArray ? s.fromArray(n) : s.set(...n);
        else if (null !== s && "object" == typeof s && "function" == typeof s.set && "number" == typeof n)
            "function" == typeof s.setScalar ? s.setScalar(n) : s.set(n);
        else {
            var o;
            a[u] = n,
            l && !l.linear && Re.includes(u) && null != (o = a[u]) && o.isTexture && a[u].format === g && a[u].type === v && (a[u].colorSpace = f)
        }
    }
    if (null != r && r.parent && null != l && l.internal && null != (n = r.object) && n.isObject3D && a !== r.eventCount) {
        const e = r.object
          , t = l.internal.interaction.indexOf(e);
        t > -1 && l.internal.interaction.splice(t, 1),
        r.eventCount && null !== e.raycast && l.internal.interaction.push(e)
    }
    return r && void 0 === r.props.attach && (r.object.isBufferGeometry ? r.props.attach = "geometry" : r.object.isMaterial && (r.props.attach = "material")),
    r && Oe(r),
    e
}
function Oe(e) {
    var t;
    if (!e.parent)
        return;
    null == e.props.onUpdate || e.props.onUpdate(e.object);
    const n = null == (t = e.root) || null == t.getState ? void 0 : t.getState();
    n && 0 === n.internal.frames && n.invalidate()
}
function De(e, t) {
    e.manual || (pe(e) ? (e.left = t.width / -2,
    e.right = t.width / 2,
    e.top = t.height / 2,
    e.bottom = t.height / -2) : e.aspect = t.width / t.height,
    e.updateProjectionMatrix())
}
const Ue = e => null == e ? void 0 : e.isObject3D;
function He(e) {
    return (e.eventObject || e.object).uuid + "/" + e.index + e.instanceId
}
function Ae(e, t, n, r) {
    const l = n.get(t);
    l && (n.delete(t),
    0 === n.size && (e.delete(r),
    l.target.releasePointerCapture(r)))
}
function Qe(e) {
    function t(e) {
        return e.filter(e => ["Move", "Over", "Enter", "Out", "Leave"].some(t => {
            var n;
            return null == (n = e.__r3f) ? void 0 : n.handlers["onPointer" + t]
        }
        ))
    }
    function n(t) {
        const {internal: n} = e.getState();
        for (const e of n.hovered.values())
            if (!t.length || !t.find(t => t.object === e.object && t.index === e.index && t.instanceId === e.instanceId)) {
                const r = e.eventObject.__r3f;
                if (n.hovered.delete(He(e)),
                null != r && r.eventCount) {
                    const n = r.handlers
                      , l = {
                        ...e,
                        intersections: t
                    };
                    null == n.onPointerOut || n.onPointerOut(l),
                    null == n.onPointerLeave || n.onPointerLeave(l)
                }
            }
    }
    function r(e, t) {
        for (let n = 0; n < t.length; n++) {
            const r = t[n].__r3f;
            null == r || null == r.handlers.onPointerMissed || r.handlers.onPointerMissed(e)
        }
    }
    return {
        handlePointer: function(l) {
            switch (l) {
            case "onPointerLeave":
            case "onPointerCancel":
                return () => n([]);
            case "onLostPointerCapture":
                return t => {
                    const {internal: r} = e.getState();
                    "pointerId"in t && r.capturedMap.has(t.pointerId) && requestAnimationFrame( () => {
                        r.capturedMap.has(t.pointerId) && (r.capturedMap.delete(t.pointerId),
                        n([]))
                    }
                    )
                }
            }
            return function(a) {
                const {onPointerMissed: o, internal: i} = e.getState();
                i.lastEvent.current = a;
                const u = "onPointerMove" === l
                  , s = "onClick" === l || "onContextMenu" === l || "onDoubleClick" === l
                  , c = function(t, n) {
                    const r = e.getState()
                      , l = new Set
                      , a = []
                      , o = n ? n(r.internal.interaction) : r.internal.interaction;
                    for (let e = 0; e < o.length; e++) {
                        const t = ke(o[e]);
                        t && (t.raycaster.camera = void 0)
                    }
                    r.previousRoot || null == r.events.compute || r.events.compute(t, r);
                    let i = o.flatMap(function(e) {
                        const n = ke(e);
                        return n && n.events.enabled && null !== n.raycaster.camera ? (void 0 === n.raycaster.camera && (null == n.events.compute || n.events.compute(t, n, null == (r = n.previousRoot) ? void 0 : r.getState()),
                        void 0 === n.raycaster.camera && (n.raycaster.camera = null)),
                        n.raycaster.camera ? n.raycaster.intersectObject(e, !0) : []) : [];
                        var r
                    }).sort( (e, t) => {
                        const n = ke(e.object)
                          , r = ke(t.object);
                        return n && r && r.events.priority - n.events.priority || e.distance - t.distance
                    }
                    ).filter(e => {
                        const t = He(e);
                        return !l.has(t) && (l.add(t),
                        !0)
                    }
                    );
                    r.events.filter && (i = r.events.filter(i, r));
                    for (const e of i) {
                        let t = e.object;
                        for (; t; ) {
                            var u;
                            null != (u = t.__r3f) && u.eventCount && a.push({
                                ...e,
                                eventObject: t
                            }),
                            t = t.parent
                        }
                    }
                    if ("pointerId"in t && r.internal.capturedMap.has(t.pointerId))
                        for (let e of r.internal.capturedMap.get(t.pointerId).values())
                            l.has(He(e.intersection)) || a.push(e.intersection);
                    return a
                }(a, u ? t : void 0)
                  , f = s ? function(t) {
                    const {internal: n} = e.getState()
                      , r = t.offsetX - n.initialClick[0]
                      , l = t.offsetY - n.initialClick[1];
                    return Math.round(Math.sqrt(r * r + l * l))
                }(a) : 0;
                "onPointerDown" === l && (i.initialClick = [a.offsetX, a.offsetY],
                i.initialHits = c.map(e => e.eventObject)),
                s && !c.length && f <= 2 && (r(a, i.interaction),
                o && o(a)),
                u && n(c),
                function(e, t, r, l) {
                    if (e.length) {
                        const a = {
                            stopped: !1
                        };
                        for (const o of e) {
                            let i = ke(o.object);
                            if (i || o.object.traverseAncestors(e => {
                                const t = ke(e);
                                if (t)
                                    return i = t,
                                    !1
                            }
                            ),
                            i) {
                                const {raycaster: u, pointer: s, camera: c, internal: f} = i
                                  , d = new y(s.x,s.y,0).unproject(c)
                                  , p = e => {
                                    var t, n;
                                    return null != (t = null == (n = f.capturedMap.get(e)) ? void 0 : n.has(o.eventObject)) && t
                                }
                                  , m = e => {
                                    const n = {
                                        intersection: o,
                                        target: t.target
                                    };
                                    f.capturedMap.has(e) ? f.capturedMap.get(e).set(o.eventObject, n) : f.capturedMap.set(e, new Map([[o.eventObject, n]])),
                                    t.target.setPointerCapture(e)
                                }
                                  , h = e => {
                                    const t = f.capturedMap.get(e);
                                    t && Ae(f.capturedMap, o.eventObject, t, e)
                                }
                                ;
                                let g = {};
                                for (let e in t) {
                                    let n = t[e];
                                    "function" != typeof n && (g[e] = n)
                                }
                                let v = {
                                    ...o,
                                    ...g,
                                    pointer: s,
                                    intersections: e,
                                    stopped: a.stopped,
                                    delta: r,
                                    unprojectedPoint: d,
                                    ray: u.ray,
                                    camera: c,
                                    stopPropagation() {
                                        const r = "pointerId"in t && f.capturedMap.get(t.pointerId);
                                        (!r || r.has(o.eventObject)) && (v.stopped = a.stopped = !0,
                                        f.hovered.size && Array.from(f.hovered.values()).find(e => e.eventObject === o.eventObject)) && n([...e.slice(0, e.indexOf(o)), o])
                                    },
                                    target: {
                                        hasPointerCapture: p,
                                        setPointerCapture: m,
                                        releasePointerCapture: h
                                    },
                                    currentTarget: {
                                        hasPointerCapture: p,
                                        setPointerCapture: m,
                                        releasePointerCapture: h
                                    },
                                    nativeEvent: t
                                };
                                if (l(v),
                                !0 === a.stopped)
                                    break
                            }
                        }
                    }
                }(c, a, f, function(e) {
                    const t = e.eventObject
                      , n = t.__r3f;
                    if (null == n || !n.eventCount)
                        return;
                    const o = n.handlers;
                    if (u) {
                        if (o.onPointerOver || o.onPointerEnter || o.onPointerOut || o.onPointerLeave) {
                            const t = He(e)
                              , n = i.hovered.get(t);
                            n ? n.stopped && e.stopPropagation() : (i.hovered.set(t, e),
                            null == o.onPointerOver || o.onPointerOver(e),
                            null == o.onPointerEnter || o.onPointerEnter(e))
                        }
                        null == o.onPointerMove || o.onPointerMove(e)
                    } else {
                        const n = o[l];
                        n ? s && !i.initialHits.includes(t) || (r(a, i.interaction.filter(e => !i.initialHits.includes(e))),
                        n(e)) : s && i.initialHits.includes(t) && r(a, i.interaction.filter(e => !i.initialHits.includes(e)))
                    }
                })
            }
        }
    }
}
const $e = e => !(null == e || !e.render)
  , Ve = P.createContext(null);
function We() {
    const e = P.useContext(Ve);
    if (!e)
        throw new Error("R3F: Hooks can only be used within the Canvas component!");
    return e
}
function Be(e=e => e, t) {
    return We()(e, t)
}
function qe(e, t=0) {
    const n = We()
      , r = n.getState().internal.subscribe
      , l = ve(e);
    return ge( () => r(l, t, n), [t, r, n]),
    null
}
const Ye = new WeakMap;
function Ge(e, t) {
    return function(n, ...r) {
        let l;
        var a, o;
        return "function" == typeof (a = n) && (null == a || null == (o = a.prototype) ? void 0 : o.constructor) === a ? (l = Ye.get(n),
        l || (l = new n,
        Ye.set(n, l))) : l = n,
        e && e(l),
        Promise.all(r.map(e => new Promise( (n, r) => l.load(e, e => {
            Ue(null == e ? void 0 : e.scene) && Object.assign(e, function(e) {
                const t = {
                    nodes: {},
                    materials: {},
                    meshes: {}
                };
                return e && e.traverse(e => {
                    e.name && (t.nodes[e.name] = e),
                    e.material && !t.materials[e.material.name] && (t.materials[e.material.name] = e.material),
                    e.isMesh && !t.meshes[e.name] && (t.meshes[e.name] = e)
                }
                ),
                t
            }(e.scene)),
            n(e)
        }
        , t, t => r(new Error(`Could not load ${e}: ${null == t ? void 0 : t.message}`))))))
    }
}
function Xe(e, t, n, r) {
    const l = Array.isArray(t) ? t : [t]
      , a = re(Ge(n, r), [e, ...l], {
        equal: ze.equ
    });
    return Array.isArray(t) ? a : a[0]
}
function Ke(e) {
    const t = Z(e);
    return t.injectIntoDevTools({
        bundleType: 0,
        rendererPackageName: "@react-three/fiber",
        version: P.version
    }),
    t
}
Xe.preload = function(e, t, n) {
    const r = Array.isArray(t) ? t : [t];
    return ( (e, t, n) => {
        ne(e, t, !0, n)
    }
    )(Ge(n), [e, ...r])
}
,
Xe.clear = function(e, t) {
    return (e => {
        if (void 0 === e || 0 === e.length)
            ee.splice(0, ee.length);
        else {
            const t = ee.find(t => te(e, t.keys, t.equal));
            t && t.remove()
        }
    }
    )([e, ...Array.isArray(t) ? t : [t]])
}
;
const Ze = {}
  , Je = /^three(?=[A-Z])/
  , et = e => `${e[0].toUpperCase()}${e.slice(1)}`;
let tt = 0;
function nt(e) {
    if ("function" == typeof e) {
        const t = "" + tt++;
        return Ze[t] = e,
        t
    }
    Object.assign(Ze, e)
}
function rt(e, t) {
    const n = et(e)
      , r = Ze[n];
    if ("primitive" !== e && !r)
        throw new Error(`R3F: ${n} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`);
    if ("primitive" === e && !t.object)
        throw new Error("R3F: Primitives without 'object' are invalid!");
    if (void 0 !== t.args && !Array.isArray(t.args))
        throw new Error("R3F: The args prop must be an array!")
}
function lt(e) {
    var t;
    e.isHidden && (e.props.attach && null != (t = e.parent) && t.object ? Ne(e.parent, e) : Ue(e.object) && !1 !== e.props.visible && (e.object.visible = !0),
    e.isHidden = !1,
    Oe(e))
}
function at(e, t, n) {
    const r = t.root.getState();
    if (e.parent || e.object === r.scene) {
        if (!t.object) {
            var l, a;
            const e = Ze[et(t.type)];
            t.object = null != (l = t.props.object) ? l : new e(...null != (a = t.props.args) ? a : []),
            t.object.__r3f = t
        }
        if (Fe(t.object, t.props),
        t.props.attach)
            Ne(e, t);
        else if (Ue(t.object) && Ue(e.object)) {
            const r = e.object.children.indexOf(null == n ? void 0 : n.object);
            if (n && -1 !== r) {
                const n = e.object.children.indexOf(t.object);
                if (-1 !== n) {
                    e.object.children.splice(n, 1);
                    const l = n < r ? r - 1 : r;
                    e.object.children.splice(l, 0, t.object)
                } else
                    t.object.parent = e.object,
                    e.object.children.splice(r, 0, t.object),
                    t.object.dispatchEvent({
                        type: "added"
                    }),
                    e.object.dispatchEvent({
                        type: "childadded",
                        child: t.object
                    })
            } else
                e.object.add(t.object)
        }
        for (const e of t.children)
            at(t, e);
        Oe(t)
    }
}
function ot(e, t) {
    t && (t.parent = e,
    e.children.push(t),
    at(e, t))
}
function it(e, t, n) {
    if (!t || !n)
        return;
    t.parent = e;
    const r = e.children.indexOf(n);
    -1 !== r ? e.children.splice(r, 0, t) : e.children.push(t),
    at(e, t, n)
}
function ut(e) {
    if ("function" == typeof e.dispose) {
        const t = () => {
            try {
                e.dispose()
            } catch {}
        }
        ;
        "undefined" != typeof IS_REACT_ACT_ENVIRONMENT ? t() : J.unstable_scheduleCallback(J.unstable_IdlePriority, t)
    }
}
function st(e, t, n) {
    if (!t)
        return;
    t.parent = null;
    const r = e.children.indexOf(t);
    -1 !== r && e.children.splice(r, 1),
    t.props.attach ? _e(e, t) : Ue(t.object) && Ue(e.object) && (e.object.remove(t.object),
    function(e, t) {
        const {internal: n} = e.getState();
        n.interaction = n.interaction.filter(e => e !== t),
        n.initialHits = n.initialHits.filter(e => e !== t),
        n.hovered.forEach( (e, r) => {
            e.eventObject !== t && e.object !== t || n.hovered.delete(r)
        }
        ),
        n.capturedMap.forEach( (e, r) => {
            Ae(n.capturedMap, t, e, r)
        }
        )
    }(de(t), t.object));
    const l = null !== t.props.dispose && !1 !== n;
    for (let a = t.children.length - 1; a >= 0; a--) {
        st(t, t.children[a], l)
    }
    t.children.length = 0,
    delete t.object.__r3f,
    l && "primitive" !== t.type && "Scene" !== t.object.type && ut(t.object),
    void 0 === n && Oe(t)
}
function ct(e, t) {
    for (const n of [e, e.alternate])
        if (null !== n)
            if ("function" == typeof n.ref) {
                null == n.refCleanup || n.refCleanup();
                const e = n.ref(t);
                "function" == typeof e && (n.refCleanup = e)
            } else
                n.ref && (n.ref.current = t)
}
const ft = [];
const dt = () => {}
  , pt = {};
let mt = 0;
const ht = Ke({
    isPrimaryRenderer: !1,
    warnsIfNotActing: !1,
    supportsMutation: !0,
    supportsPersistence: !1,
    supportsHydration: !1,
    createInstance: function(e, t, n) {
        var r;
        return rt(e = et(e)in Ze ? e : e.replace(Je, ""), t),
        "primitive" === e && null != (r = t.object) && r.__r3f && delete t.object.__r3f,
        xe(t.object, n, e, t)
    },
    removeChild: st,
    appendChild: ot,
    appendInitialChild: ot,
    insertBefore: it,
    appendChildToContainer(e, t) {
        const n = e.getState().scene.__r3f;
        t && n && ot(n, t)
    },
    removeChildFromContainer(e, t) {
        const n = e.getState().scene.__r3f;
        t && n && st(n, t)
    },
    insertInContainerBefore(e, t, n) {
        const r = e.getState().scene.__r3f;
        t && n && r && it(r, t, n)
    },
    getRootHostContext: () => pt,
    getChildHostContext: () => pt,
    commitUpdate(e, t, n, r, l) {
        var a, o, i;
        rt(t, r);
        let u = !1;
        if (("primitive" === e.type && n.object !== r.object || (null == (a = r.args) ? void 0 : a.length) !== (null == (o = n.args) ? void 0 : o.length) || null != (i = r.args) && i.some( (e, t) => {
            var r;
            return e !== (null == (r = n.args) ? void 0 : r[t])
        }
        )) && (u = !0),
        u)
            ft.push([e, {
                ...r
            }, l]);
        else {
            const t = function(e, t) {
                const n = {};
                for (const r in t)
                    if (!Le.includes(r) && !ze.equ(t[r], e.props[r])) {
                        n[r] = t[r];
                        for (const e in t)
                            e.startsWith(`${r}-`) && (n[e] = t[e])
                    }
                for (const r in e.props) {
                    if (Le.includes(r) || t.hasOwnProperty(r))
                        continue;
                    const {root: l, key: a} = Ee(e.object, r);
                    if (l.constructor && 0 === l.constructor.length) {
                        const e = Ie(l);
                        ze.und(e) || (n[a] = e[a])
                    } else
                        n[a] = 0
                }
                return n
            }(e, r);
            Object.keys(t).length && (Object.assign(e.props, t),
            Fe(e.object, t))
        }
        (null === l.sibling || !(4 & l.flags)) && function() {
            for (const [n] of ft) {
                const e = n.parent;
                if (e) {
                    n.props.attach ? _e(e, n) : Ue(n.object) && Ue(e.object) && e.object.remove(n.object);
                    for (const e of n.children)
                        e.props.attach ? _e(n, e) : Ue(e.object) && Ue(n.object) && n.object.remove(e.object)
                }
                n.isHidden && lt(n),
                n.object.__r3f && delete n.object.__r3f,
                "primitive" !== n.type && ut(n.object)
            }
            for (const [n,r,l] of ft) {
                n.props = r;
                const a = n.parent;
                if (a) {
                    var e, t;
                    const r = Ze[et(n.type)];
                    n.object = null != (e = n.props.object) ? e : new r(...null != (t = n.props.args) ? t : []),
                    n.object.__r3f = n,
                    ct(l, n.object),
                    Fe(n.object, n.props),
                    n.props.attach ? Ne(a, n) : Ue(n.object) && Ue(a.object) && a.object.add(n.object);
                    for (const e of n.children)
                        e.props.attach ? Ne(n, e) : Ue(e.object) && Ue(n.object) && n.object.add(e.object);
                    Oe(n)
                }
            }
            ft.length = 0
        }()
    },
    finalizeInitialChildren: () => !1,
    commitMount() {},
    getPublicInstance: e => null == e ? void 0 : e.object,
    prepareForCommit: () => null,
    preparePortalMount: e => xe(e.getState().scene, e, "", {}),
    resetAfterCommit: () => {}
    ,
    shouldSetTextContent: () => !1,
    clearContainer: () => !1,
    hideInstance: function(e) {
        var t;
        e.isHidden || (e.props.attach && null != (t = e.parent) && t.object ? _e(e.parent, e) : Ue(e.object) && (e.object.visible = !1),
        e.isHidden = !0,
        Oe(e))
    },
    unhideInstance: lt,
    createTextInstance: dt,
    hideTextInstance: dt,
    unhideTextInstance: dt,
    scheduleTimeout: "function" == typeof setTimeout ? setTimeout : void 0,
    cancelTimeout: "function" == typeof clearTimeout ? clearTimeout : void 0,
    noTimeout: -1,
    getInstanceFromNode: () => null,
    beforeActiveInstanceBlur() {},
    afterActiveInstanceBlur() {},
    detachDeletedInstance() {},
    prepareScopeUpdate() {},
    getInstanceFromScope: () => null,
    shouldAttemptEagerTransition: () => !1,
    trackSchedulerEvent: () => {}
    ,
    resolveEventType: () => null,
    resolveEventTimeStamp: () => -1.1,
    requestPostPaintCallback() {},
    maySuspendCommit: () => !1,
    preloadInstance: () => !0,
    startSuspendingCommit() {},
    suspendInstance() {},
    waitForCommitToBeReady: () => null,
    NotPendingTransition: null,
    HostTransitionContext: P.createContext(null),
    setCurrentUpdatePriority(e) {
        mt = e
    },
    getCurrentUpdatePriority: () => mt,
    resolveUpdatePriority() {
        var e;
        if (0 !== mt)
            return mt;
        switch ("undefined" != typeof window && (null == (e = window.event) ? void 0 : e.type)) {
        case "click":
        case "contextmenu":
        case "dblclick":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
            return M.DiscreteEventPriority;
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "pointerenter":
        case "pointerleave":
        case "wheel":
            return M.ContinuousEventPriority;
        default:
            return M.DefaultEventPriority
        }
    },
    resetFormInstance() {}
})
  , gt = new Map
  , vt = {
    objects: "shallow",
    strict: !1
};
function bt(m) {
    const h = gt.get(m)
      , g = null == h ? void 0 : h.fiber
      , v = null == h ? void 0 : h.store;
    h && console.warn("R3F.createRoot should only be called once!");
    const w = "function" == typeof reportError ? reportError : console.error
      , k = v || ( (e, t) => {
        const n = B( (n, r) => {
            const l = new y
              , a = new y
              , o = new y;
            function i(e=r().camera, t=a, n=r().size) {
                const {width: i, height: u, top: s, left: c} = n
                  , f = i / u;
                t.isVector3 ? o.copy(t) : o.set(...t);
                const d = e.getWorldPosition(l).distanceTo(o);
                if (pe(e))
                    return {
                        width: i / e.zoom,
                        height: u / e.zoom,
                        top: s,
                        left: c,
                        factor: 1,
                        distance: d,
                        aspect: f
                    };
                {
                    const t = e.fov * Math.PI / 180
                      , n = 2 * Math.tan(t / 2) * d
                      , r = n * (i / u);
                    return {
                        width: r,
                        height: n,
                        top: s,
                        left: c,
                        factor: i / r,
                        distance: d,
                        aspect: f
                    }
                }
            }
            let u;
            const s = e => n(t => ({
                performance: {
                    ...t.performance,
                    current: e
                }
            }))
              , c = new b;
            return {
                set: n,
                get: r,
                gl: null,
                camera: null,
                raycaster: null,
                events: {
                    priority: 1,
                    enabled: !0,
                    connected: !1
                },
                scene: null,
                xr: null,
                invalidate: (t=1) => e(r(), t),
                advance: (e, n) => t(e, n, r()),
                legacy: !1,
                linear: !1,
                flat: !1,
                controls: null,
                clock: new S,
                pointer: c,
                mouse: c,
                frameloop: "always",
                onPointerMissed: void 0,
                performance: {
                    current: 1,
                    min: .5,
                    max: 1,
                    debounce: 200,
                    regress: () => {
                        const e = r();
                        u && clearTimeout(u),
                        e.performance.current !== e.performance.min && s(e.performance.min),
                        u = setTimeout( () => s(r().performance.max), e.performance.debounce)
                    }
                },
                size: {
                    width: 0,
                    height: 0,
                    top: 0,
                    left: 0
                },
                viewport: {
                    initialDpr: 0,
                    dpr: 0,
                    width: 0,
                    height: 0,
                    top: 0,
                    left: 0,
                    aspect: 0,
                    distance: 0,
                    factor: 0,
                    getCurrentViewport: i
                },
                setEvents: e => n(t => ({
                    ...t,
                    events: {
                        ...t.events,
                        ...e
                    }
                })),
                setSize: (e, t, l=0, o=0) => {
                    const u = r().camera
                      , s = {
                        width: e,
                        height: t,
                        top: l,
                        left: o
                    };
                    n(e => ({
                        size: s,
                        viewport: {
                            ...e.viewport,
                            ...i(u, a, s)
                        }
                    }))
                }
                ,
                setDpr: e => n(t => {
                    const n = we(e);
                    return {
                        viewport: {
                            ...t.viewport,
                            dpr: n,
                            initialDpr: t.viewport.initialDpr || n
                        }
                    }
                }
                ),
                setFrameloop: (e="always") => {
                    const t = r().clock;
                    t.stop(),
                    t.elapsedTime = 0,
                    "never" !== e && (t.start(),
                    t.elapsedTime = 0),
                    n( () => ({
                        frameloop: e
                    }))
                }
                ,
                previousRoot: void 0,
                internal: {
                    interaction: [],
                    hovered: new Map,
                    subscribers: [],
                    initialClick: [0, 0],
                    initialHits: [],
                    capturedMap: new Map,
                    lastEvent: P.createRef(),
                    active: !1,
                    frames: 0,
                    priority: 0,
                    subscribe: (e, t, n) => {
                        const l = r().internal;
                        return l.priority = l.priority + (t > 0 ? 1 : 0),
                        l.subscribers.push({
                            ref: e,
                            priority: t,
                            store: n
                        }),
                        l.subscribers = l.subscribers.sort( (e, t) => e.priority - t.priority),
                        () => {
                            const n = r().internal;
                            null != n && n.subscribers && (n.priority = n.priority - (t > 0 ? 1 : 0),
                            n.subscribers = n.subscribers.filter(t => t.ref !== e))
                        }
                    }
                }
            }
        }
        )
          , r = n.getState();
        let l = r.size
          , a = r.viewport.dpr
          , o = r.camera;
        return n.subscribe( () => {
            const {camera: e, size: t, viewport: r, gl: i, set: u} = n.getState();
            if (t.width !== l.width || t.height !== l.height || r.dpr !== a) {
                l = t,
                a = r.dpr,
                De(e, t),
                r.dpr > 0 && i.setPixelRatio(r.dpr);
                const n = "undefined" != typeof HTMLCanvasElement && i.domElement instanceof HTMLCanvasElement;
                i.setSize(t.width, t.height, n)
            }
            e !== o && (o = e,
            u(t => ({
                viewport: {
                    ...t.viewport,
                    ...t.viewport.getCurrentViewport(e)
                }
            })))
        }
        ),
        n.subscribe(t => e(t)),
        n
    }
    )(Ot, Dt)
      , z = g || ht.createContainer(k, M.ConcurrentRoot, null, !1, null, "", w, w, w, null);
    let C, E;
    h || gt.set(m, {
        fiber: z,
        store: k
    });
    let j = !1
      , N = null;
    return {
        async configure(h={}) {
            let g;
            N = new Promise(e => g = e);
            let {gl: v, size: b, scene: y, events: S, onCreated: w, shadows: z=!1, linear: P=!1, flat: x=!1, legacy: _=!1, orthographic: L=!1, frameloop: T="always", dpr: I=[1, 2], performance: R, raycaster: M, camera: F, onPointerMissed: O} = h
              , D = k.getState()
              , U = D.gl;
            if (!D.gl) {
                const t = {
                    canvas: m,
                    powerPreference: "high-performance",
                    antialias: !0,
                    alpha: !0
                }
                  , n = "function" == typeof v ? await v(t) : v;
                U = $e(n) ? n : new e({
                    ...t,
                    ...v
                }),
                D.set({
                    gl: U
                })
            }
            let H = D.raycaster;
            H || D.set({
                raycaster: H = new t
            });
            const {params: A, ...Q} = M || {};
            if (ze.equ(Q, H, vt) || Fe(H, {
                ...Q
            }),
            ze.equ(A, H.params, vt) || Fe(H, {
                params: {
                    ...H.params,
                    ...A
                }
            }),
            !D.camera || D.camera === E && !ze.equ(E, F, vt)) {
                E = F;
                const e = null == F ? void 0 : F.isCamera
                  , t = e ? F : L ? new n(0,0,0,0,.1,1e3) : new r(75,0,.1,1e3);
                e || (t.position.z = 5,
                F && (Fe(t, F),
                t.manual || ("aspect"in F || "left"in F || "right"in F || "bottom"in F || "top"in F) && (t.manual = !0,
                t.updateProjectionMatrix())),
                D.camera || null != F && F.rotation || t.lookAt(0, 0, 0)),
                D.set({
                    camera: t
                }),
                H.camera = t
            }
            if (!D.scene) {
                let e;
                null != y && y.isScene ? (e = y,
                xe(e, k, "", {})) : (e = new l,
                xe(e, k, "", {}),
                y && Fe(e, y)),
                D.set({
                    scene: e
                })
            }
            S && !D.events.handlers && D.set({
                events: S(k)
            });
            const $ = function(e, t) {
                if (!t && "undefined" != typeof HTMLCanvasElement && e instanceof HTMLCanvasElement && e.parentElement) {
                    const {width: t, height: n, top: r, left: l} = e.parentElement.getBoundingClientRect();
                    return {
                        width: t,
                        height: n,
                        top: r,
                        left: l
                    }
                }
                return !t && "undefined" != typeof OffscreenCanvas && e instanceof OffscreenCanvas ? {
                    width: e.width,
                    height: e.height,
                    top: 0,
                    left: 0
                } : {
                    width: 0,
                    height: 0,
                    top: 0,
                    left: 0,
                    ...t
                }
            }(m, b);
            if (ze.equ($, D.size, vt) || D.setSize($.width, $.height, $.top, $.left),
            I && D.viewport.dpr !== we(I) && D.setDpr(I),
            D.frameloop !== T && D.setFrameloop(T),
            D.onPointerMissed || D.set({
                onPointerMissed: O
            }),
            R && !ze.equ(R, D.performance, vt) && D.set(e => ({
                performance: {
                    ...e.performance,
                    ...R
                }
            })),
            !D.xr) {
                var V;
                const e = (e, t) => {
                    const n = k.getState();
                    "never" !== n.frameloop && Dt(e, !0, n, t)
                }
                  , t = () => {
                    const t = k.getState();
                    t.gl.xr.enabled = t.gl.xr.isPresenting,
                    t.gl.xr.setAnimationLoop(t.gl.xr.isPresenting ? e : null),
                    t.gl.xr.isPresenting || Ot(t)
                }
                  , n = {
                    connect() {
                        const e = k.getState().gl;
                        e.xr.addEventListener("sessionstart", t),
                        e.xr.addEventListener("sessionend", t)
                    },
                    disconnect() {
                        const e = k.getState().gl;
                        e.xr.removeEventListener("sessionstart", t),
                        e.xr.removeEventListener("sessionend", t)
                    }
                };
                "function" == typeof (null == (V = U.xr) ? void 0 : V.addEventListener) && n.connect(),
                D.set({
                    xr: n
                })
            }
            if (U.shadowMap) {
                const e = U.shadowMap.enabled
                  , t = U.shadowMap.type;
                if (U.shadowMap.enabled = !!z,
                ze.boo(z))
                    U.shadowMap.type = a;
                else if (ze.str(z)) {
                    var W;
                    const e = {
                        basic: u,
                        percentage: i,
                        soft: a,
                        variance: o
                    };
                    U.shadowMap.type = null != (W = e[z]) ? W : a
                } else
                    ze.obj(z) && Object.assign(U.shadowMap, z);
                e === U.shadowMap.enabled && t === U.shadowMap.type || (U.shadowMap.needsUpdate = !0)
            }
            return s.enabled = !_,
            j || (U.outputColorSpace = P ? c : f,
            U.toneMapping = x ? d : p),
            D.legacy !== _ && D.set( () => ({
                legacy: _
            })),
            D.linear !== P && D.set( () => ({
                linear: P
            })),
            D.flat !== x && D.set( () => ({
                flat: x
            })),
            !v || ze.fun(v) || $e(v) || ze.equ(v, U, vt) || Fe(U, v),
            C = w,
            j = !0,
            g(),
            this
        },
        render(e) {
            return j || N || this.configure(),
            N.then( () => {
                ht.updateContainer(x.jsx(yt, {
                    store: k,
                    children: e,
                    onCreated: C,
                    rootElement: m
                }), z, null, () => {}
                )
            }
            ),
            k
        },
        unmount() {
            St(m)
        }
    }
}
function yt({store: e, children: t, onCreated: n, rootElement: r}) {
    return ge( () => {
        const t = e.getState();
        t.set(e => ({
            internal: {
                ...e.internal,
                active: !0
            }
        })),
        n && n(t),
        e.getState().events.connected || null == t.events.connect || t.events.connect(r)
    }
    , []),
    x.jsx(Ve.Provider, {
        value: e,
        children: t
    })
}
function St(e, t) {
    const n = gt.get(e)
      , r = null == n ? void 0 : n.fiber;
    if (r) {
        const t = null == n ? void 0 : n.store.getState();
        t && (t.internal.active = !1),
        ht.updateContainer(null, r, null, () => {
            t && setTimeout( () => {
                try {
                    var n, r, l, a;
                    null == t.events.disconnect || t.events.disconnect(),
                    null == (n = t.gl) || null == (r = n.renderLists) || null == r.dispose || r.dispose(),
                    null == (l = t.gl) || null == l.forceContextLoss || l.forceContextLoss(),
                    null != (a = t.gl) && a.xr && t.xr.disconnect(),
                    function(e) {
                        "Scene" !== e.type && (null == e.dispose || e.dispose());
                        for (const t in e) {
                            const n = e[t];
                            "Scene" !== (null == n ? void 0 : n.type) && (null == n || null == n.dispose || n.dispose())
                        }
                    }(t.scene),
                    gt.delete(e)
                } catch (o) {}
            }
            , 500)
        }
        )
    }
}
function wt(e, t, n) {
    return x.jsx(kt, {
        children: e,
        container: t,
        state: n
    })
}
function kt({state: e={}, children: n, container: r}) {
    const {events: l, size: a, ...o} = e
      , i = We()
      , [u] = P.useState( () => new t)
      , [s] = P.useState( () => new b)
      , c = ve( (e, t) => {
        let n;
        if (t.camera && a) {
            const r = t.camera;
            n = e.viewport.getCurrentViewport(r, new y, a),
            r !== e.camera && De(r, a)
        }
        return {
            ...e,
            ...t,
            scene: r,
            raycaster: u,
            pointer: s,
            mouse: s,
            previousRoot: i,
            events: {
                ...e.events,
                ...t.events,
                ...l
            },
            size: {
                ...e.size,
                ...a
            },
            viewport: {
                ...e.viewport,
                ...n
            },
            setEvents: e => t.set(t => ({
                ...t,
                events: {
                    ...t.events,
                    ...e
                }
            }))
        }
    }
    )
      , f = P.useMemo( () => {
        const e = B( (e, t) => ({
            ...o,
            set: e,
            get: t
        }))
          , t = t => e.setState(e => c.current(t, e));
        return t(i.getState()),
        i.subscribe(t),
        e
    }
    , [i, r]);
    return x.jsx(x.Fragment, {
        children: ht.createPortal(x.jsx(Ve.Provider, {
            value: f,
            children: n
        }), f, null)
    })
}
const zt = new Set
  , Ct = new Set
  , Pt = new Set;
function xt(e, t) {
    if (e.size)
        for (const {callback: n} of e.values())
            n(t)
}
function Et(e, t) {
    switch (e) {
    case "before":
        return xt(zt, t);
    case "after":
        return xt(Ct, t);
    case "tail":
        return xt(Pt, t)
    }
}
let jt, Nt;
function _t(e, t, n) {
    let r = t.clock.getDelta();
    "never" === t.frameloop && "number" == typeof e && (r = e - t.clock.elapsedTime,
    t.clock.oldTime = t.clock.elapsedTime,
    t.clock.elapsedTime = e),
    jt = t.internal.subscribers;
    for (let l = 0; l < jt.length; l++)
        Nt = jt[l],
        Nt.ref.current(Nt.store.getState(), r, n);
    return !t.internal.priority && t.gl.render && t.gl.render(t.scene, t.camera),
    t.internal.frames = Math.max(0, t.internal.frames - 1),
    "always" === t.frameloop ? 1 : t.internal.frames
}
let Lt, Tt, It, Rt = !1, Mt = !1;
function Ft(e) {
    Tt = requestAnimationFrame(Ft),
    Rt = !0,
    Lt = 0,
    Et("before", e),
    Mt = !0;
    for (const n of gt.values()) {
        var t;
        It = n.store.getState(),
        !It.internal.active || !("always" === It.frameloop || It.internal.frames > 0) || null != (t = It.gl.xr) && t.isPresenting || (Lt += _t(e, It))
    }
    if (Mt = !1,
    Et("after", e),
    0 === Lt)
        return Et("tail", e),
        Rt = !1,
        cancelAnimationFrame(Tt)
}
function Ot(e, t=1) {
    var n;
    if (!e)
        return gt.forEach(e => Ot(e.store.getState(), t));
    null != (n = e.gl.xr) && n.isPresenting || !e.internal.active || "never" === e.frameloop || (e.internal.frames = t > 1 ? Math.min(60, e.internal.frames + t) : Mt ? 2 : 1,
    Rt || (Rt = !0,
    requestAnimationFrame(Ft)))
}
function Dt(e, t=!0, n, r) {
    if (t && Et("before", e),
    n)
        _t(e, n, r);
    else
        for (const l of gt.values())
            _t(e, l.store.getState());
    t && Et("after", e)
}
const Ut = {
    onClick: ["click", !1],
    onContextMenu: ["contextmenu", !1],
    onDoubleClick: ["dblclick", !1],
    onWheel: ["wheel", !0],
    onPointerDown: ["pointerdown", !0],
    onPointerUp: ["pointerup", !0],
    onPointerLeave: ["pointerleave", !0],
    onPointerMove: ["pointermove", !0],
    onPointerCancel: ["pointercancel", !0],
    onLostPointerCapture: ["lostpointercapture", !0]
};
function Ht(e) {
    const {handlePointer: t} = Qe(e);
    return {
        priority: 1,
        enabled: !0,
        compute(e, t, n) {
            t.pointer.set(e.offsetX / t.size.width * 2 - 1, -e.offsetY / t.size.height * 2 + 1),
            t.raycaster.setFromCamera(t.pointer, t.camera)
        },
        connected: void 0,
        handlers: Object.keys(Ut).reduce( (e, n) => ({
            ...e,
            [n]: t(n)
        }), {}),
        update: () => {
            var t;
            const {events: n, internal: r} = e.getState();
            null != (t = r.lastEvent) && t.current && n.handlers && n.handlers.onPointerMove(r.lastEvent.current)
        }
        ,
        connect: t => {
            const {set: n, events: r} = e.getState();
            if (null == r.disconnect || r.disconnect(),
            n(e => ({
                events: {
                    ...e.events,
                    connected: t
                }
            })),
            r.handlers)
                for (const e in r.handlers) {
                    const n = r.handlers[e]
                      , [l,a] = Ut[e];
                    t.addEventListener(l, n, {
                        passive: a
                    })
                }
        }
        ,
        disconnect: () => {
            const {set: t, events: n} = e.getState();
            if (n.connected) {
                if (n.handlers)
                    for (const e in n.handlers) {
                        const t = n.handlers[e]
                          , [r] = Ut[e];
                        n.connected.removeEventListener(r, t)
                    }
                t(e => ({
                    events: {
                        ...e.events,
                        connected: void 0
                    }
                }))
            }
        }
    }
}
export {ye as B, Se as E, qe as a, be as b, ve as c, ge as d, nt as e, bt as f, Ht as g, St as h, me as i, Xe as j, wt as k, Fe as l, ie as m, re as s, Be as u};
