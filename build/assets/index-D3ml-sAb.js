import {_ as e} from "./extends-DPdBf6DS.js";
import {r as t, j as i, R as n} from "./app-CWVuyR8b.js";
import {V as s, a0 as r, Q as a, O as o, c as l, P as c, a9 as u, aa as h, ab as d, ac as p, ad as f, S as v, ae as m, af as g, ag as x, ah as S, ai as b, L as y, aj as T, C as E, r as w, ak as M, al as B, am as U, an as R, ao as z, k as P, ap as A, t as _, aq as D, D as C, v as O, ar as I, as as F, at as H, a5 as N, Y as L, au as k, B as G, a as j, _ as V, av as W, aw as Y} from "./three.module-uFtjsCt7.js";
import {u as X, a as Z, e as K} from "./events-dc44c1b8.esm-Dn7KqyVj.js";
var $ = Object.defineProperty
  , Q = (e, t, i) => (( (e, t, i) => {
    t in e ? $(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: i
    }) : e[t] = i
}
)(e, t + "", i),
i);
class q {
    constructor() {
        Q(this, "_listeners")
    }
    addEventListener(e, t) {
        void 0 === this._listeners && (this._listeners = {});
        const i = this._listeners;
        void 0 === i[e] && (i[e] = []),
        -1 === i[e].indexOf(t) && i[e].push(t)
    }
    hasEventListener(e, t) {
        if (void 0 === this._listeners)
            return !1;
        const i = this._listeners;
        return void 0 !== i[e] && -1 !== i[e].indexOf(t)
    }
    removeEventListener(e, t) {
        if (void 0 === this._listeners)
            return;
        const i = this._listeners[e];
        if (void 0 !== i) {
            const e = i.indexOf(t);
            -1 !== e && i.splice(e, 1)
        }
    }
    dispatchEvent(e) {
        if (void 0 === this._listeners)
            return;
        const t = this._listeners[e.type];
        if (void 0 !== t) {
            e.target = this;
            const i = t.slice(0);
            for (let t = 0, n = i.length; t < n; t++)
                i[t].call(this, e);
            e.target = null
        }
    }
}
var J = Object.defineProperty
  , ee = (e, t, i) => (( (e, t, i) => {
    t in e ? J(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: i
    }) : e[t] = i
}
)(e, "symbol" != typeof t ? t + "" : t, i),
i);
const te = new d
  , ie = new p
  , ne = Math.cos(Math.PI / 180 * 70)
  , se = (e, t) => (e % t + t) % t;
let re = class extends q {
    constructor(e, t) {
        super(),
        ee(this, "object"),
        ee(this, "domElement"),
        ee(this, "enabled", !0),
        ee(this, "target", new s),
        ee(this, "minDistance", 0),
        ee(this, "maxDistance", 1 / 0),
        ee(this, "minZoom", 0),
        ee(this, "maxZoom", 1 / 0),
        ee(this, "minPolarAngle", 0),
        ee(this, "maxPolarAngle", Math.PI),
        ee(this, "minAzimuthAngle", -1 / 0),
        ee(this, "maxAzimuthAngle", 1 / 0),
        ee(this, "enableDamping", !1),
        ee(this, "dampingFactor", .05),
        ee(this, "enableZoom", !0),
        ee(this, "zoomSpeed", 1),
        ee(this, "enableRotate", !0),
        ee(this, "rotateSpeed", 1),
        ee(this, "enablePan", !0),
        ee(this, "panSpeed", 1),
        ee(this, "screenSpacePanning", !0),
        ee(this, "keyPanSpeed", 7),
        ee(this, "zoomToCursor", !1),
        ee(this, "autoRotate", !1),
        ee(this, "autoRotateSpeed", 2),
        ee(this, "reverseOrbit", !1),
        ee(this, "reverseHorizontalOrbit", !1),
        ee(this, "reverseVerticalOrbit", !1),
        ee(this, "keys", {
            LEFT: "ArrowLeft",
            UP: "ArrowUp",
            RIGHT: "ArrowRight",
            BOTTOM: "ArrowDown"
        }),
        ee(this, "mouseButtons", {
            LEFT: u.ROTATE,
            MIDDLE: u.DOLLY,
            RIGHT: u.PAN
        }),
        ee(this, "touches", {
            ONE: h.ROTATE,
            TWO: h.DOLLY_PAN
        }),
        ee(this, "target0"),
        ee(this, "position0"),
        ee(this, "zoom0"),
        ee(this, "_domElementKeyEvents", null),
        ee(this, "getPolarAngle"),
        ee(this, "getAzimuthalAngle"),
        ee(this, "setPolarAngle"),
        ee(this, "setAzimuthalAngle"),
        ee(this, "getDistance"),
        ee(this, "getZoomScale"),
        ee(this, "listenToKeyEvents"),
        ee(this, "stopListenToKeyEvents"),
        ee(this, "saveState"),
        ee(this, "reset"),
        ee(this, "update"),
        ee(this, "connect"),
        ee(this, "dispose"),
        ee(this, "dollyIn"),
        ee(this, "dollyOut"),
        ee(this, "getScale"),
        ee(this, "setScale"),
        this.object = e,
        this.domElement = t,
        this.target0 = this.target.clone(),
        this.position0 = this.object.position.clone(),
        this.zoom0 = this.object.zoom,
        this.getPolarAngle = () => g.phi,
        this.getAzimuthalAngle = () => g.theta,
        this.setPolarAngle = e => {
            let t = se(e, 2 * Math.PI)
              , n = g.phi;
            n < 0 && (n += 2 * Math.PI),
            t < 0 && (t += 2 * Math.PI);
            let s = Math.abs(t - n);
            2 * Math.PI - s < s && (t < n ? t += 2 * Math.PI : n += 2 * Math.PI),
            x.phi = t - n,
            i.update()
        }
        ,
        this.setAzimuthalAngle = e => {
            let t = se(e, 2 * Math.PI)
              , n = g.theta;
            n < 0 && (n += 2 * Math.PI),
            t < 0 && (t += 2 * Math.PI);
            let s = Math.abs(t - n);
            2 * Math.PI - s < s && (t < n ? t += 2 * Math.PI : n += 2 * Math.PI),
            x.theta = t - n,
            i.update()
        }
        ,
        this.getDistance = () => i.object.position.distanceTo(i.target),
        this.listenToKeyEvents = e => {
            e.addEventListener("keydown", ce),
            this._domElementKeyEvents = e
        }
        ,
        this.stopListenToKeyEvents = () => {
            this._domElementKeyEvents.removeEventListener("keydown", ce),
            this._domElementKeyEvents = null
        }
        ,
        this.saveState = () => {
            i.target0.copy(i.target),
            i.position0.copy(i.object.position),
            i.zoom0 = i.object.zoom
        }
        ,
        this.reset = () => {
            i.target.copy(i.target0),
            i.object.position.copy(i.position0),
            i.object.zoom = i.zoom0,
            i.object.updateProjectionMatrix(),
            i.dispatchEvent(n),
            i.update(),
            v = f.NONE
        }
        ,
        this.update = ( () => {
            const t = new s
              , r = new s(0,1,0)
              , l = (new a).setFromUnitVectors(e.up, r)
              , u = l.clone().invert()
              , h = new s
              , d = new a
              , p = 2 * Math.PI;
            return function() {
                const a = i.object.position;
                l.setFromUnitVectors(e.up, r),
                u.copy(l).invert(),
                t.copy(a).sub(i.target),
                t.applyQuaternion(l),
                g.setFromVector3(t),
                i.autoRotate && v === f.NONE && I(2 * Math.PI / 60 / 60 * i.autoRotateSpeed),
                i.enableDamping ? (g.theta += x.theta * i.dampingFactor,
                g.phi += x.phi * i.dampingFactor) : (g.theta += x.theta,
                g.phi += x.phi);
                let y = i.minAzimuthAngle
                  , T = i.maxAzimuthAngle;
                isFinite(y) && isFinite(T) && (y < -Math.PI ? y += p : y > Math.PI && (y -= p),
                T < -Math.PI ? T += p : T > Math.PI && (T -= p),
                g.theta = y <= T ? Math.max(y, Math.min(T, g.theta)) : g.theta > (y + T) / 2 ? Math.max(y, g.theta) : Math.min(T, g.theta)),
                g.phi = Math.max(i.minPolarAngle, Math.min(i.maxPolarAngle, g.phi)),
                g.makeSafe(),
                !0 === i.enableDamping ? i.target.addScaledVector(b, i.dampingFactor) : i.target.add(b),
                i.zoomToCursor && _ || i.object.isOrthographicCamera ? g.radius = W(g.radius) : g.radius = W(g.radius * S),
                t.setFromSpherical(g),
                t.applyQuaternion(u),
                a.copy(i.target).add(t),
                i.object.matrixAutoUpdate || i.object.updateMatrix(),
                i.object.lookAt(i.target),
                !0 === i.enableDamping ? (x.theta *= 1 - i.dampingFactor,
                x.phi *= 1 - i.dampingFactor,
                b.multiplyScalar(1 - i.dampingFactor)) : (x.set(0, 0, 0),
                b.set(0, 0, 0));
                let E = !1;
                if (i.zoomToCursor && _) {
                    let n = null;
                    if (i.object instanceof c && i.object.isPerspectiveCamera) {
                        const e = t.length();
                        n = W(e * S);
                        const s = e - n;
                        i.object.position.addScaledVector(P, s),
                        i.object.updateMatrixWorld()
                    } else if (i.object.isOrthographicCamera) {
                        const e = new s(A.x,A.y,0);
                        e.unproject(i.object),
                        i.object.zoom = Math.max(i.minZoom, Math.min(i.maxZoom, i.object.zoom / S)),
                        i.object.updateProjectionMatrix(),
                        E = !0;
                        const r = new s(A.x,A.y,0);
                        r.unproject(i.object),
                        i.object.position.sub(r).add(e),
                        i.object.updateMatrixWorld(),
                        n = t.length()
                    } else
                        console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),
                        i.zoomToCursor = !1;
                    null !== n && (i.screenSpacePanning ? i.target.set(0, 0, -1).transformDirection(i.object.matrix).multiplyScalar(n).add(i.object.position) : (te.origin.copy(i.object.position),
                    te.direction.set(0, 0, -1).transformDirection(i.object.matrix),
                    Math.abs(i.object.up.dot(te.direction)) < ne ? e.lookAt(i.target) : (ie.setFromNormalAndCoplanarPoint(i.object.up, i.target),
                    te.intersectPlane(ie, i.target))))
                } else
                    i.object instanceof o && i.object.isOrthographicCamera && (E = 1 !== S,
                    E && (i.object.zoom = Math.max(i.minZoom, Math.min(i.maxZoom, i.object.zoom / S)),
                    i.object.updateProjectionMatrix()));
                return S = 1,
                _ = !1,
                !!(E || h.distanceToSquared(i.object.position) > m || 8 * (1 - d.dot(i.object.quaternion)) > m) && (i.dispatchEvent(n),
                h.copy(i.object.position),
                d.copy(i.object.quaternion),
                E = !1,
                !0)
            }
        }
        )(),
        this.connect = e => {
            i.domElement = e,
            i.domElement.style.touchAction = "none",
            i.domElement.addEventListener("contextmenu", ue),
            i.domElement.addEventListener("pointerdown", re),
            i.domElement.addEventListener("pointercancel", oe),
            i.domElement.addEventListener("wheel", le)
        }
        ,
        this.dispose = () => {
            var e, t, n, s, r, a;
            i.domElement && (i.domElement.style.touchAction = "auto"),
            null == (e = i.domElement) || e.removeEventListener("contextmenu", ue),
            null == (t = i.domElement) || t.removeEventListener("pointerdown", re),
            null == (n = i.domElement) || n.removeEventListener("pointercancel", oe),
            null == (s = i.domElement) || s.removeEventListener("wheel", le),
            null == (r = i.domElement) || r.ownerDocument.removeEventListener("pointermove", ae),
            null == (a = i.domElement) || a.ownerDocument.removeEventListener("pointerup", oe),
            null !== i._domElementKeyEvents && i._domElementKeyEvents.removeEventListener("keydown", ce)
        }
        ;
        const i = this
          , n = {
            type: "change"
        }
          , d = {
            type: "start"
        }
          , p = {
            type: "end"
        }
          , f = {
            NONE: -1,
            ROTATE: 0,
            DOLLY: 1,
            PAN: 2,
            TOUCH_ROTATE: 3,
            TOUCH_PAN: 4,
            TOUCH_DOLLY_PAN: 5,
            TOUCH_DOLLY_ROTATE: 6
        };
        let v = f.NONE;
        const m = 1e-6
          , g = new r
          , x = new r;
        let S = 1;
        const b = new s
          , y = new l
          , T = new l
          , E = new l
          , w = new l
          , M = new l
          , B = new l
          , U = new l
          , R = new l
          , z = new l
          , P = new s
          , A = new l;
        let _ = !1;
        const D = []
          , C = {};
        function O() {
            return Math.pow(.95, i.zoomSpeed)
        }
        function I(e) {
            i.reverseOrbit || i.reverseHorizontalOrbit ? x.theta += e : x.theta -= e
        }
        function F(e) {
            i.reverseOrbit || i.reverseVerticalOrbit ? x.phi += e : x.phi -= e
        }
        const H = ( () => {
            const e = new s;
            return function(t, i) {
                e.setFromMatrixColumn(i, 0),
                e.multiplyScalar(-t),
                b.add(e)
            }
        }
        )()
          , N = ( () => {
            const e = new s;
            return function(t, n) {
                !0 === i.screenSpacePanning ? e.setFromMatrixColumn(n, 1) : (e.setFromMatrixColumn(n, 0),
                e.crossVectors(i.object.up, e)),
                e.multiplyScalar(t),
                b.add(e)
            }
        }
        )()
          , L = ( () => {
            const e = new s;
            return function(t, n) {
                const s = i.domElement;
                if (s && i.object instanceof c && i.object.isPerspectiveCamera) {
                    const r = i.object.position;
                    e.copy(r).sub(i.target);
                    let a = e.length();
                    a *= Math.tan(i.object.fov / 2 * Math.PI / 180),
                    H(2 * t * a / s.clientHeight, i.object.matrix),
                    N(2 * n * a / s.clientHeight, i.object.matrix)
                } else
                    s && i.object instanceof o && i.object.isOrthographicCamera ? (H(t * (i.object.right - i.object.left) / i.object.zoom / s.clientWidth, i.object.matrix),
                    N(n * (i.object.top - i.object.bottom) / i.object.zoom / s.clientHeight, i.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),
                    i.enablePan = !1)
            }
        }
        )();
        function k(e) {
            i.object instanceof c && i.object.isPerspectiveCamera || i.object instanceof o && i.object.isOrthographicCamera ? S = e : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),
            i.enableZoom = !1)
        }
        function G(e) {
            k(S / e)
        }
        function j(e) {
            k(S * e)
        }
        function V(e) {
            if (!i.zoomToCursor || !i.domElement)
                return;
            _ = !0;
            const t = i.domElement.getBoundingClientRect()
              , n = e.clientX - t.left
              , s = e.clientY - t.top
              , r = t.width
              , a = t.height;
            A.x = n / r * 2 - 1,
            A.y = -s / a * 2 + 1,
            P.set(A.x, A.y, 1).unproject(i.object).sub(i.object.position).normalize()
        }
        function W(e) {
            return Math.max(i.minDistance, Math.min(i.maxDistance, e))
        }
        function Y(e) {
            y.set(e.clientX, e.clientY)
        }
        function X(e) {
            w.set(e.clientX, e.clientY)
        }
        function Z() {
            if (1 == D.length)
                y.set(D[0].pageX, D[0].pageY);
            else {
                const e = .5 * (D[0].pageX + D[1].pageX)
                  , t = .5 * (D[0].pageY + D[1].pageY);
                y.set(e, t)
            }
        }
        function K() {
            if (1 == D.length)
                w.set(D[0].pageX, D[0].pageY);
            else {
                const e = .5 * (D[0].pageX + D[1].pageX)
                  , t = .5 * (D[0].pageY + D[1].pageY);
                w.set(e, t)
            }
        }
        function $() {
            const e = D[0].pageX - D[1].pageX
              , t = D[0].pageY - D[1].pageY
              , i = Math.sqrt(e * e + t * t);
            U.set(0, i)
        }
        function Q(e) {
            if (1 == D.length)
                T.set(e.pageX, e.pageY);
            else {
                const t = de(e)
                  , i = .5 * (e.pageX + t.x)
                  , n = .5 * (e.pageY + t.y);
                T.set(i, n)
            }
            E.subVectors(T, y).multiplyScalar(i.rotateSpeed);
            const t = i.domElement;
            t && (I(2 * Math.PI * E.x / t.clientHeight),
            F(2 * Math.PI * E.y / t.clientHeight)),
            y.copy(T)
        }
        function q(e) {
            if (1 == D.length)
                M.set(e.pageX, e.pageY);
            else {
                const t = de(e)
                  , i = .5 * (e.pageX + t.x)
                  , n = .5 * (e.pageY + t.y);
                M.set(i, n)
            }
            B.subVectors(M, w).multiplyScalar(i.panSpeed),
            L(B.x, B.y),
            w.copy(M)
        }
        function J(e) {
            const t = de(e)
              , n = e.pageX - t.x
              , s = e.pageY - t.y
              , r = Math.sqrt(n * n + s * s);
            R.set(0, r),
            z.set(0, Math.pow(R.y / U.y, i.zoomSpeed)),
            G(z.y),
            U.copy(R)
        }
        function re(e) {
            var t, n;
            !1 !== i.enabled && (0 === D.length && (null == (t = i.domElement) || t.ownerDocument.addEventListener("pointermove", ae),
            null == (n = i.domElement) || n.ownerDocument.addEventListener("pointerup", oe)),
            function(e) {
                D.push(e)
            }(e),
            "touch" === e.pointerType ? function(e) {
                switch (he(e),
                D.length) {
                case 1:
                    switch (i.touches.ONE) {
                    case h.ROTATE:
                        if (!1 === i.enableRotate)
                            return;
                        Z(),
                        v = f.TOUCH_ROTATE;
                        break;
                    case h.PAN:
                        if (!1 === i.enablePan)
                            return;
                        K(),
                        v = f.TOUCH_PAN;
                        break;
                    default:
                        v = f.NONE
                    }
                    break;
                case 2:
                    switch (i.touches.TWO) {
                    case h.DOLLY_PAN:
                        if (!1 === i.enableZoom && !1 === i.enablePan)
                            return;
                        i.enableZoom && $(),
                        i.enablePan && K(),
                        v = f.TOUCH_DOLLY_PAN;
                        break;
                    case h.DOLLY_ROTATE:
                        if (!1 === i.enableZoom && !1 === i.enableRotate)
                            return;
                        i.enableZoom && $(),
                        i.enableRotate && Z(),
                        v = f.TOUCH_DOLLY_ROTATE;
                        break;
                    default:
                        v = f.NONE
                    }
                    break;
                default:
                    v = f.NONE
                }
                v !== f.NONE && i.dispatchEvent(d)
            }(e) : function(e) {
                let t;
                switch (e.button) {
                case 0:
                    t = i.mouseButtons.LEFT;
                    break;
                case 1:
                    t = i.mouseButtons.MIDDLE;
                    break;
                case 2:
                    t = i.mouseButtons.RIGHT;
                    break;
                default:
                    t = -1
                }
                switch (t) {
                case u.DOLLY:
                    if (!1 === i.enableZoom)
                        return;
                    !function(e) {
                        V(e),
                        U.set(e.clientX, e.clientY)
                    }(e),
                    v = f.DOLLY;
                    break;
                case u.ROTATE:
                    if (e.ctrlKey || e.metaKey || e.shiftKey) {
                        if (!1 === i.enablePan)
                            return;
                        X(e),
                        v = f.PAN
                    } else {
                        if (!1 === i.enableRotate)
                            return;
                        Y(e),
                        v = f.ROTATE
                    }
                    break;
                case u.PAN:
                    if (e.ctrlKey || e.metaKey || e.shiftKey) {
                        if (!1 === i.enableRotate)
                            return;
                        Y(e),
                        v = f.ROTATE
                    } else {
                        if (!1 === i.enablePan)
                            return;
                        X(e),
                        v = f.PAN
                    }
                    break;
                default:
                    v = f.NONE
                }
                v !== f.NONE && i.dispatchEvent(d)
            }(e))
        }
        function ae(e) {
            !1 !== i.enabled && ("touch" === e.pointerType ? function(e) {
                switch (he(e),
                v) {
                case f.TOUCH_ROTATE:
                    if (!1 === i.enableRotate)
                        return;
                    Q(e),
                    i.update();
                    break;
                case f.TOUCH_PAN:
                    if (!1 === i.enablePan)
                        return;
                    q(e),
                    i.update();
                    break;
                case f.TOUCH_DOLLY_PAN:
                    if (!1 === i.enableZoom && !1 === i.enablePan)
                        return;
                    !function(e) {
                        i.enableZoom && J(e),
                        i.enablePan && q(e)
                    }(e),
                    i.update();
                    break;
                case f.TOUCH_DOLLY_ROTATE:
                    if (!1 === i.enableZoom && !1 === i.enableRotate)
                        return;
                    !function(e) {
                        i.enableZoom && J(e),
                        i.enableRotate && Q(e)
                    }(e),
                    i.update();
                    break;
                default:
                    v = f.NONE
                }
            }(e) : function(e) {
                if (!1 === i.enabled)
                    return;
                switch (v) {
                case f.ROTATE:
                    if (!1 === i.enableRotate)
                        return;
                    !function(e) {
                        T.set(e.clientX, e.clientY),
                        E.subVectors(T, y).multiplyScalar(i.rotateSpeed);
                        const t = i.domElement;
                        t && (I(2 * Math.PI * E.x / t.clientHeight),
                        F(2 * Math.PI * E.y / t.clientHeight)),
                        y.copy(T),
                        i.update()
                    }(e);
                    break;
                case f.DOLLY:
                    if (!1 === i.enableZoom)
                        return;
                    !function(e) {
                        R.set(e.clientX, e.clientY),
                        z.subVectors(R, U),
                        z.y > 0 ? G(O()) : z.y < 0 && j(O()),
                        U.copy(R),
                        i.update()
                    }(e);
                    break;
                case f.PAN:
                    if (!1 === i.enablePan)
                        return;
                    !function(e) {
                        M.set(e.clientX, e.clientY),
                        B.subVectors(M, w).multiplyScalar(i.panSpeed),
                        L(B.x, B.y),
                        w.copy(M),
                        i.update()
                    }(e)
                }
            }(e))
        }
        function oe(e) {
            var t, n, s;
            !function(e) {
                delete C[e.pointerId];
                for (let t = 0; t < D.length; t++)
                    if (D[t].pointerId == e.pointerId)
                        return void D.splice(t, 1)
            }(e),
            0 === D.length && (null == (t = i.domElement) || t.releasePointerCapture(e.pointerId),
            null == (n = i.domElement) || n.ownerDocument.removeEventListener("pointermove", ae),
            null == (s = i.domElement) || s.ownerDocument.removeEventListener("pointerup", oe)),
            i.dispatchEvent(p),
            v = f.NONE
        }
        function le(e) {
            !1 === i.enabled || !1 === i.enableZoom || v !== f.NONE && v !== f.ROTATE || (e.preventDefault(),
            i.dispatchEvent(d),
            function(e) {
                V(e),
                e.deltaY < 0 ? j(O()) : e.deltaY > 0 && G(O()),
                i.update()
            }(e),
            i.dispatchEvent(p))
        }
        function ce(e) {
            !1 !== i.enabled && !1 !== i.enablePan && function(e) {
                let t = !1;
                switch (e.code) {
                case i.keys.UP:
                    L(0, i.keyPanSpeed),
                    t = !0;
                    break;
                case i.keys.BOTTOM:
                    L(0, -i.keyPanSpeed),
                    t = !0;
                    break;
                case i.keys.LEFT:
                    L(i.keyPanSpeed, 0),
                    t = !0;
                    break;
                case i.keys.RIGHT:
                    L(-i.keyPanSpeed, 0),
                    t = !0
                }
                t && (e.preventDefault(),
                i.update())
            }(e)
        }
        function ue(e) {
            !1 !== i.enabled && e.preventDefault()
        }
        function he(e) {
            let t = C[e.pointerId];
            void 0 === t && (t = new l,
            C[e.pointerId] = t),
            t.set(e.pageX, e.pageY)
        }
        function de(e) {
            const t = e.pointerId === D[0].pointerId ? D[1] : D[0];
            return C[t.pointerId]
        }
        this.dollyIn = (e=O()) => {
            j(e),
            i.update()
        }
        ,
        this.dollyOut = (e=O()) => {
            G(e),
            i.update()
        }
        ,
        this.getScale = () => S,
        this.setScale = e => {
            k(e),
            i.update()
        }
        ,
        this.getZoomScale = () => O(),
        void 0 !== t && this.connect(t),
        this.update()
    }
}
;
const ae = t.forwardRef( ({makeDefault: i, camera: n, regress: s, domElement: r, enableDamping: a=!0, keyEvents: o=!1, onChange: l, onStart: c, onEnd: u, ...h}, d) => {
    const p = X(e => e.invalidate)
      , f = X(e => e.camera)
      , v = X(e => e.gl)
      , m = X(e => e.events)
      , g = X(e => e.setEvents)
      , x = X(e => e.set)
      , S = X(e => e.get)
      , b = X(e => e.performance)
      , y = n || f
      , T = r || m.connected || v.domElement
      , E = t.useMemo( () => new re(y), [y]);
    return Z( () => {
        E.enabled && E.update()
    }
    , -1),
    t.useEffect( () => (o && E.connect(!0 === o ? T : o),
    E.connect(T),
    () => {
        E.dispose()
    }
    ), [o, T, s, E, p]),
    t.useEffect( () => {
        const e = e => {
            p(),
            s && b.regress(),
            l && l(e)
        }
          , t = e => {
            c && c(e)
        }
          , i = e => {
            u && u(e)
        }
        ;
        return E.addEventListener("change", e),
        E.addEventListener("start", t),
        E.addEventListener("end", i),
        () => {
            E.removeEventListener("start", t),
            E.removeEventListener("end", i),
            E.removeEventListener("change", e)
        }
    }
    , [l, c, u, E, p, g]),
    t.useEffect( () => {
        if (i) {
            const e = S().controls;
            return x({
                controls: E
            }),
            () => x({
                controls: e
            })
        }
    }
    , [i, E]),
    t.createElement("primitive", e({
        ref: d,
        object: E,
        enableDamping: a
    }, h))
}
);
/**
 * postprocessing v6.37.3 build Sun Apr 27 2025
 * https://github.com/pmndrs/postprocessing
 * Copyright 2015-2025 Raoul van Rüschen
 * @license Zlib
 */
var oe = .001
  , le = class {
    constructor() {
        this.startTime = performance.now(),
        this.previousTime = 0,
        this.currentTime = 0,
        this._delta = 0,
        this._elapsed = 0,
        this._fixedDelta = 1e3 / 60,
        this.timescale = 1,
        this.useFixedDelta = !1,
        this._autoReset = !1
    }
    get autoReset() {
        return this._autoReset
    }
    set autoReset(e) {
        "undefined" != typeof document && void 0 !== document.hidden && (e ? document.addEventListener("visibilitychange", this) : document.removeEventListener("visibilitychange", this),
        this._autoReset = e)
    }
    get delta() {
        return this._delta * oe
    }
    get fixedDelta() {
        return this._fixedDelta * oe
    }
    set fixedDelta(e) {
        this._fixedDelta = 1e3 * e
    }
    get elapsed() {
        return this._elapsed * oe
    }
    update(e) {
        this.useFixedDelta ? this._delta = this.fixedDelta : (this.previousTime = this.currentTime,
        this.currentTime = (void 0 !== e ? e : performance.now()) - this.startTime,
        this._delta = this.currentTime - this.previousTime),
        this._delta *= this.timescale,
        this._elapsed += this._delta
    }
    reset() {
        this._delta = 0,
        this._elapsed = 0,
        this.currentTime = performance.now() - this.startTime
    }
    getDelta() {
        return this.delta
    }
    getElapsed() {
        return this.elapsed
    }
    handleEvent(e) {
        document.hidden || (this.currentTime = performance.now() - this.startTime)
    }
    dispose() {
        this.autoReset = !1
    }
}
  , ce = ( () => {
    const e = new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0])
      , t = new Float32Array([0, 0, 2, 0, 0, 2])
      , i = new G;
    return i.setAttribute("position", new j(e,3)),
    i.setAttribute("uv", new j(t,2)),
    i
}
)()
  , ue = class e {
    static get fullscreenGeometry() {
        return ce
    }
    constructor(e="Pass", t=new P, i=new A) {
        this.name = e,
        this.renderer = null,
        this.scene = t,
        this.camera = i,
        this.screen = null,
        this.rtt = !0,
        this.needsSwap = !0,
        this.needsDepthTexture = !1,
        this.enabled = !0
    }
    get renderToScreen() {
        return !this.rtt
    }
    set renderToScreen(e) {
        if (this.rtt === e) {
            const t = this.fullscreenMaterial;
            null !== t && (t.needsUpdate = !0),
            this.rtt = !e
        }
    }
    set mainScene(e) {}
    set mainCamera(e) {}
    setRenderer(e) {
        this.renderer = e
    }
    isEnabled() {
        return this.enabled
    }
    setEnabled(e) {
        this.enabled = e
    }
    get fullscreenMaterial() {
        return null !== this.screen ? this.screen.material : null
    }
    set fullscreenMaterial(t) {
        let i = this.screen;
        null !== i ? i.material = t : (i = new _(e.fullscreenGeometry,t),
        i.frustumCulled = !1,
        null === this.scene && (this.scene = new P),
        this.scene.add(i),
        this.screen = i)
    }
    getFullscreenMaterial() {
        return this.fullscreenMaterial
    }
    setFullscreenMaterial(e) {
        this.fullscreenMaterial = e
    }
    getDepthTexture() {
        return null
    }
    setDepthTexture(e, t=B) {}
    render(e, t, i, n, s) {
        throw new Error("Render method not implemented!")
    }
    setSize(e, t) {}
    initialize(e, t, i) {}
    dispose() {
        for (const t of Object.keys(this)) {
            const i = this[t];
            (i instanceof b || i instanceof N || i instanceof L || i instanceof e) && this[t].dispose()
        }
        null !== this.fullscreenMaterial && this.fullscreenMaterial.dispose()
    }
}
  , he = class extends ue {
    constructor() {
        super("ClearMaskPass", null, null),
        this.needsSwap = !1
    }
    render(e, t, i, n, s) {
        const r = e.state.buffers.stencil;
        r.setLocked(!1),
        r.setTest(!1)
    }
}
  , de = "varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}"
  , pe = class extends O {
    constructor() {
        super({
            name: "CopyMaterial",
            uniforms: {
                inputBuffer: new H(null),
                opacity: new H(1)
            },
            blending: F,
            toneMapped: !1,
            depthWrite: !1,
            depthTest: !1,
            fragmentShader: "#include <common>\n#include <dithering_pars_fragment>\n#ifdef FRAMEBUFFER_PRECISION_HIGH\nuniform mediump sampler2D inputBuffer;\n#else\nuniform lowp sampler2D inputBuffer;\n#endif\nuniform float opacity;varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);gl_FragColor=opacity*texel;\n#include <colorspace_fragment>\n#include <dithering_fragment>\n}",
            vertexShader: de
        })
    }
    set inputBuffer(e) {
        this.uniforms.inputBuffer.value = e
    }
    setInputBuffer(e) {
        this.uniforms.inputBuffer.value = e
    }
    getOpacity(e) {
        return this.uniforms.opacity.value
    }
    setOpacity(e) {
        this.uniforms.opacity.value = e
    }
}
  , fe = class extends ue {
    constructor(e, t=!0) {
        super("CopyPass"),
        this.fullscreenMaterial = new pe,
        this.needsSwap = !1,
        this.renderTarget = e,
        void 0 === e && (this.renderTarget = new b(1,1,{
            minFilter: y,
            magFilter: y,
            stencilBuffer: !1,
            depthBuffer: !1
        }),
        this.renderTarget.texture.name = "CopyPass.Target"),
        this.autoResize = t
    }
    get resize() {
        return this.autoResize
    }
    set resize(e) {
        this.autoResize = e
    }
    get texture() {
        return this.renderTarget.texture
    }
    getTexture() {
        return this.renderTarget.texture
    }
    setAutoResizeEnabled(e) {
        this.autoResize = e
    }
    render(e, t, i, n, s) {
        this.fullscreenMaterial.inputBuffer = t.texture,
        e.setRenderTarget(this.renderToScreen ? null : this.renderTarget),
        e.render(this.scene, this.camera)
    }
    setSize(e, t) {
        this.autoResize && this.renderTarget.setSize(e, t)
    }
    initialize(e, t, i) {
        void 0 !== i && (this.renderTarget.texture.type = i,
        i !== f ? this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1" : null !== e && e.outputColorSpace === v && (this.renderTarget.texture.colorSpace = v))
    }
}
  , ve = new E
  , me = class extends ue {
    constructor(e=!0, t=!0, i=!1) {
        super("ClearPass", null, null),
        this.needsSwap = !1,
        this.color = e,
        this.depth = t,
        this.stencil = i,
        this.overrideClearColor = null,
        this.overrideClearAlpha = -1
    }
    setClearFlags(e, t, i) {
        this.color = e,
        this.depth = t,
        this.stencil = i
    }
    getOverrideClearColor() {
        return this.overrideClearColor
    }
    setOverrideClearColor(e) {
        this.overrideClearColor = e
    }
    getOverrideClearAlpha() {
        return this.overrideClearAlpha
    }
    setOverrideClearAlpha(e) {
        this.overrideClearAlpha = e
    }
    render(e, t, i, n, s) {
        const r = this.overrideClearColor
          , a = this.overrideClearAlpha
          , o = e.getClearAlpha()
          , l = null !== r
          , c = a >= 0;
        l ? (e.getClearColor(ve),
        e.setClearColor(r, c ? a : o)) : c && e.setClearAlpha(a),
        e.setRenderTarget(this.renderToScreen ? null : t),
        e.clear(this.color, this.depth, this.stencil),
        l ? e.setClearColor(ve, o) : c && e.setClearAlpha(o)
    }
}
  , ge = class extends ue {
    constructor(e, t) {
        super("MaskPass", e, t),
        this.needsSwap = !1,
        this.clearPass = new me(!1,!1,!0),
        this.inverse = !1
    }
    set mainScene(e) {
        this.scene = e
    }
    set mainCamera(e) {
        this.camera = e
    }
    get inverted() {
        return this.inverse
    }
    set inverted(e) {
        this.inverse = e
    }
    get clear() {
        return this.clearPass.enabled
    }
    set clear(e) {
        this.clearPass.enabled = e
    }
    getClearPass() {
        return this.clearPass
    }
    isInverted() {
        return this.inverted
    }
    setInverted(e) {
        this.inverted = e
    }
    render(e, t, i, n, s) {
        const r = e.getContext()
          , a = e.state.buffers
          , o = this.scene
          , l = this.camera
          , c = this.clearPass
          , u = this.inverted ? 0 : 1
          , h = 1 - u;
        a.color.setMask(!1),
        a.depth.setMask(!1),
        a.color.setLocked(!0),
        a.depth.setLocked(!0),
        a.stencil.setTest(!0),
        a.stencil.setOp(r.REPLACE, r.REPLACE, r.REPLACE),
        a.stencil.setFunc(r.ALWAYS, u, 4294967295),
        a.stencil.setClear(h),
        a.stencil.setLocked(!0),
        this.clearPass.enabled && (this.renderToScreen ? c.render(e, null) : (c.render(e, t),
        c.render(e, i))),
        this.renderToScreen ? (e.setRenderTarget(null),
        e.render(o, l)) : (e.setRenderTarget(t),
        e.render(o, l),
        e.setRenderTarget(i),
        e.render(o, l)),
        a.color.setLocked(!1),
        a.depth.setLocked(!1),
        a.stencil.setLocked(!1),
        a.stencil.setFunc(r.EQUAL, 1, 4294967295),
        a.stencil.setOp(r.KEEP, r.KEEP, r.KEEP),
        a.stencil.setLocked(!0)
    }
}
  , xe = class {
    constructor(e=null, {depthBuffer: t=!0, stencilBuffer: i=!1, multisampling: n=0, frameBufferType: s}={}) {
        this.renderer = null,
        this.inputBuffer = this.createBuffer(t, i, s, n),
        this.outputBuffer = this.inputBuffer.clone(),
        this.copyPass = new fe,
        this.depthTexture = null,
        this.passes = [],
        this.timer = new le,
        this.autoRenderToScreen = !0,
        this.setRenderer(e)
    }
    get multisampling() {
        return this.inputBuffer.samples || 0
    }
    set multisampling(e) {
        const t = this.inputBuffer
          , i = this.multisampling;
        i > 0 && e > 0 ? (this.inputBuffer.samples = e,
        this.outputBuffer.samples = e,
        this.inputBuffer.dispose(),
        this.outputBuffer.dispose()) : i !== e && (this.inputBuffer.dispose(),
        this.outputBuffer.dispose(),
        this.inputBuffer = this.createBuffer(t.depthBuffer, t.stencilBuffer, t.texture.type, e),
        this.inputBuffer.depthTexture = this.depthTexture,
        this.outputBuffer = this.inputBuffer.clone())
    }
    getTimer() {
        return this.timer
    }
    getRenderer() {
        return this.renderer
    }
    setRenderer(e) {
        if (this.renderer = e,
        null !== e) {
            const t = e.getSize(new l)
              , i = e.getContext().getContextAttributes().alpha
              , n = this.inputBuffer.texture.type;
            n === f && e.outputColorSpace === v && (this.inputBuffer.texture.colorSpace = v,
            this.outputBuffer.texture.colorSpace = v,
            this.inputBuffer.dispose(),
            this.outputBuffer.dispose()),
            e.autoClear = !1,
            this.setSize(t.width, t.height);
            for (const s of this.passes)
                s.initialize(e, i, n)
        }
    }
    replaceRenderer(e, t=!0) {
        const i = this.renderer
          , n = i.domElement.parentNode;
        return this.setRenderer(e),
        t && null !== n && (n.removeChild(i.domElement),
        n.appendChild(e.domElement)),
        i
    }
    createDepthTexture() {
        const e = this.depthTexture = new m;
        return this.inputBuffer.depthTexture = e,
        this.inputBuffer.dispose(),
        this.inputBuffer.stencilBuffer ? (e.format = g,
        e.type = x) : e.type = S,
        e
    }
    deleteDepthTexture() {
        if (null !== this.depthTexture) {
            this.depthTexture.dispose(),
            this.depthTexture = null,
            this.inputBuffer.depthTexture = null,
            this.inputBuffer.dispose();
            for (const e of this.passes)
                e.setDepthTexture(null)
        }
    }
    createBuffer(e, t, i, n) {
        const s = this.renderer
          , r = null === s ? new l : s.getDrawingBufferSize(new l)
          , a = {
            minFilter: y,
            magFilter: y,
            stencilBuffer: t,
            depthBuffer: e,
            type: i
        }
          , o = new b(r.width,r.height,a);
        return n > 0 && (o.ignoreDepthForMultisampleCopy = !1,
        o.samples = n),
        i === f && null !== s && s.outputColorSpace === v && (o.texture.colorSpace = v),
        o.texture.name = "EffectComposer.Buffer",
        o.texture.generateMipmaps = !1,
        o
    }
    setMainScene(e) {
        for (const t of this.passes)
            t.mainScene = e
    }
    setMainCamera(e) {
        for (const t of this.passes)
            t.mainCamera = e
    }
    addPass(e, t) {
        const i = this.passes
          , n = this.renderer
          , s = n.getDrawingBufferSize(new l)
          , r = n.getContext().getContextAttributes().alpha
          , a = this.inputBuffer.texture.type;
        if (e.setRenderer(n),
        e.setSize(s.width, s.height),
        e.initialize(n, r, a),
        this.autoRenderToScreen && (i.length > 0 && (i[i.length - 1].renderToScreen = !1),
        e.renderToScreen && (this.autoRenderToScreen = !1)),
        void 0 !== t ? i.splice(t, 0, e) : i.push(e),
        this.autoRenderToScreen && (i[i.length - 1].renderToScreen = !0),
        e.needsDepthTexture || null !== this.depthTexture)
            if (null === this.depthTexture) {
                const t = this.createDepthTexture();
                for (e of i)
                    e.setDepthTexture(t)
            } else
                e.setDepthTexture(this.depthTexture)
    }
    removePass(e) {
        const t = this.passes
          , i = t.indexOf(e);
        if (-1 !== i && t.splice(i, 1).length > 0) {
            if (null !== this.depthTexture) {
                const i = (e, t) => e || t.needsDepthTexture;
                t.reduce(i, !1) || (e.getDepthTexture() === this.depthTexture && e.setDepthTexture(null),
                this.deleteDepthTexture())
            }
            this.autoRenderToScreen && i === t.length && (e.renderToScreen = !1,
            t.length > 0 && (t[t.length - 1].renderToScreen = !0))
        }
    }
    removeAllPasses() {
        const e = this.passes;
        this.deleteDepthTexture(),
        e.length > 0 && (this.autoRenderToScreen && (e[e.length - 1].renderToScreen = !1),
        this.passes = [])
    }
    render(e) {
        const t = this.renderer
          , i = this.copyPass;
        let n, s, r, a = this.inputBuffer, o = this.outputBuffer, l = !1;
        void 0 === e && (this.timer.update(),
        e = this.timer.getDelta());
        for (const c of this.passes)
            c.enabled && (c.render(t, a, o, e, l),
            c.needsSwap && (l && (i.renderToScreen = c.renderToScreen,
            n = t.getContext(),
            s = t.state.buffers.stencil,
            s.setFunc(n.NOTEQUAL, 1, 4294967295),
            i.render(t, a, o, e, l),
            s.setFunc(n.EQUAL, 1, 4294967295)),
            r = a,
            a = o,
            o = r),
            c instanceof ge ? l = !0 : c instanceof he && (l = !1))
    }
    setSize(e, t, i) {
        const n = this.renderer
          , s = n.getSize(new l);
        void 0 !== e && void 0 !== t || (e = s.width,
        t = s.height),
        s.width === e && s.height === t || n.setSize(e, t, i);
        const r = n.getDrawingBufferSize(new l);
        this.inputBuffer.setSize(r.width, r.height),
        this.outputBuffer.setSize(r.width, r.height);
        for (const a of this.passes)
            a.setSize(r.width, r.height)
    }
    reset() {
        this.dispose(),
        this.autoRenderToScreen = !0
    }
    dispose() {
        for (const e of this.passes)
            e.dispose();
        this.passes = [],
        null !== this.inputBuffer && this.inputBuffer.dispose(),
        null !== this.outputBuffer && this.outputBuffer.dispose(),
        this.deleteDepthTexture(),
        this.copyPass.dispose(),
        this.timer.dispose(),
        ue.fullscreenGeometry.dispose()
    }
}
  , Se = 0
  , be = 1
  , ye = 2
  , Te = {
    FRAGMENT_HEAD: "FRAGMENT_HEAD",
    FRAGMENT_MAIN_UV: "FRAGMENT_MAIN_UV",
    FRAGMENT_MAIN_IMAGE: "FRAGMENT_MAIN_IMAGE",
    VERTEX_HEAD: "VERTEX_HEAD",
    VERTEX_MAIN_SUPPORT: "VERTEX_MAIN_SUPPORT"
}
  , Ee = class {
    constructor() {
        this.shaderParts = new Map([[Te.FRAGMENT_HEAD, null], [Te.FRAGMENT_MAIN_UV, null], [Te.FRAGMENT_MAIN_IMAGE, null], [Te.VERTEX_HEAD, null], [Te.VERTEX_MAIN_SUPPORT, null]]),
        this.defines = new Map,
        this.uniforms = new Map,
        this.blendModes = new Map,
        this.extensions = new Set,
        this.attributes = Se,
        this.varyings = new Set,
        this.uvTransformation = !1,
        this.readDepth = !1,
        this.colorSpace = R
    }
}
  , we = !1
  , Me = class {
    constructor(e=null) {
        this.originalMaterials = new Map,
        this.material = null,
        this.materials = null,
        this.materialsBackSide = null,
        this.materialsDoubleSide = null,
        this.materialsFlatShaded = null,
        this.materialsFlatShadedBackSide = null,
        this.materialsFlatShadedDoubleSide = null,
        this.setMaterial(e),
        this.meshCount = 0,
        this.replaceMaterial = e => {
            if (e.isMesh) {
                let t;
                if (e.material.flatShading)
                    switch (e.material.side) {
                    case C:
                        t = this.materialsFlatShadedDoubleSide;
                        break;
                    case D:
                        t = this.materialsFlatShadedBackSide;
                        break;
                    default:
                        t = this.materialsFlatShaded
                    }
                else
                    switch (e.material.side) {
                    case C:
                        t = this.materialsDoubleSide;
                        break;
                    case D:
                        t = this.materialsBackSide;
                        break;
                    default:
                        t = this.materials
                    }
                this.originalMaterials.set(e, e.material),
                e.isSkinnedMesh ? e.material = t[2] : e.isInstancedMesh ? e.material = t[1] : e.material = t[0],
                ++this.meshCount
            }
        }
    }
    cloneMaterial(e) {
        if (!(e instanceof O))
            return e.clone();
        const t = e.uniforms
          , i = new Map;
        for (const s in t) {
            const e = t[s].value;
            e.isRenderTargetTexture && (t[s].value = null,
            i.set(s, e))
        }
        const n = e.clone();
        for (const s of i)
            t[s[0]].value = s[1],
            n.uniforms[s[0]].value = s[1];
        return n
    }
    setMaterial(e) {
        if (this.disposeMaterials(),
        this.material = e,
        null !== e) {
            const t = this.materials = [this.cloneMaterial(e), this.cloneMaterial(e), this.cloneMaterial(e)];
            for (const i of t)
                i.uniforms = Object.assign({}, e.uniforms),
                i.side = I;
            t[2].skinning = !0,
            this.materialsBackSide = t.map(t => {
                const i = this.cloneMaterial(t);
                return i.uniforms = Object.assign({}, e.uniforms),
                i.side = D,
                i
            }
            ),
            this.materialsDoubleSide = t.map(t => {
                const i = this.cloneMaterial(t);
                return i.uniforms = Object.assign({}, e.uniforms),
                i.side = C,
                i
            }
            ),
            this.materialsFlatShaded = t.map(t => {
                const i = this.cloneMaterial(t);
                return i.uniforms = Object.assign({}, e.uniforms),
                i.flatShading = !0,
                i
            }
            ),
            this.materialsFlatShadedBackSide = t.map(t => {
                const i = this.cloneMaterial(t);
                return i.uniforms = Object.assign({}, e.uniforms),
                i.flatShading = !0,
                i.side = D,
                i
            }
            ),
            this.materialsFlatShadedDoubleSide = t.map(t => {
                const i = this.cloneMaterial(t);
                return i.uniforms = Object.assign({}, e.uniforms),
                i.flatShading = !0,
                i.side = C,
                i
            }
            )
        }
    }
    render(e, t, i) {
        const n = e.shadowMap.enabled;
        if (e.shadowMap.enabled = !1,
        we) {
            const n = this.originalMaterials;
            this.meshCount = 0,
            t.traverse(this.replaceMaterial),
            e.render(t, i);
            for (const e of n)
                e[0].material = e[1];
            this.meshCount !== n.size && n.clear()
        } else {
            const n = t.overrideMaterial;
            t.overrideMaterial = this.material,
            e.render(t, i),
            t.overrideMaterial = n
        }
        e.shadowMap.enabled = n
    }
    disposeMaterials() {
        if (null !== this.material) {
            const e = this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);
            for (const t of e)
                t.dispose()
        }
    }
    dispose() {
        this.originalMaterials.clear(),
        this.disposeMaterials()
    }
    static get workaroundEnabled() {
        return we
    }
    static set workaroundEnabled(e) {
        we = e
    }
}
  , Be = -1
  , Ue = class extends U {
    constructor(e, t=-1, i=-1, n=1) {
        super(),
        this.resizable = e,
        this.baseSize = new l(1,1),
        this.preferredSize = new l(t,i),
        this.target = this.preferredSize,
        this.s = n,
        this.effectiveSize = new l,
        this.addEventListener("change", () => this.updateEffectiveSize()),
        this.updateEffectiveSize()
    }
    updateEffectiveSize() {
        const e = this.baseSize
          , t = this.preferredSize
          , i = this.effectiveSize
          , n = this.scale;
        t.width !== Be ? i.width = t.width : t.height !== Be ? i.width = Math.round(t.height * (e.width / Math.max(e.height, 1))) : i.width = Math.round(e.width * n),
        t.height !== Be ? i.height = t.height : t.width !== Be ? i.height = Math.round(t.width / Math.max(e.width / Math.max(e.height, 1), 1)) : i.height = Math.round(e.height * n)
    }
    get width() {
        return this.effectiveSize.width
    }
    set width(e) {
        this.preferredWidth = e
    }
    get height() {
        return this.effectiveSize.height
    }
    set height(e) {
        this.preferredHeight = e
    }
    getWidth() {
        return this.width
    }
    getHeight() {
        return this.height
    }
    get scale() {
        return this.s
    }
    set scale(e) {
        this.s !== e && (this.s = e,
        this.preferredSize.setScalar(Be),
        this.dispatchEvent({
            type: "change"
        }),
        this.resizable.setSize(this.baseSize.width, this.baseSize.height))
    }
    getScale() {
        return this.scale
    }
    setScale(e) {
        this.scale = e
    }
    get baseWidth() {
        return this.baseSize.width
    }
    set baseWidth(e) {
        this.baseSize.width !== e && (this.baseSize.width = e,
        this.dispatchEvent({
            type: "change"
        }),
        this.resizable.setSize(this.baseSize.width, this.baseSize.height))
    }
    getBaseWidth() {
        return this.baseWidth
    }
    setBaseWidth(e) {
        this.baseWidth = e
    }
    get baseHeight() {
        return this.baseSize.height
    }
    set baseHeight(e) {
        this.baseSize.height !== e && (this.baseSize.height = e,
        this.dispatchEvent({
            type: "change"
        }),
        this.resizable.setSize(this.baseSize.width, this.baseSize.height))
    }
    getBaseHeight() {
        return this.baseHeight
    }
    setBaseHeight(e) {
        this.baseHeight = e
    }
    setBaseSize(e, t) {
        this.baseSize.width === e && this.baseSize.height === t || (this.baseSize.set(e, t),
        this.dispatchEvent({
            type: "change"
        }),
        this.resizable.setSize(this.baseSize.width, this.baseSize.height))
    }
    get preferredWidth() {
        return this.preferredSize.width
    }
    set preferredWidth(e) {
        this.preferredSize.width !== e && (this.preferredSize.width = e,
        this.dispatchEvent({
            type: "change"
        }),
        this.resizable.setSize(this.baseSize.width, this.baseSize.height))
    }
    getPreferredWidth() {
        return this.preferredWidth
    }
    setPreferredWidth(e) {
        this.preferredWidth = e
    }
    get preferredHeight() {
        return this.preferredSize.height
    }
    set preferredHeight(e) {
        this.preferredSize.height !== e && (this.preferredSize.height = e,
        this.dispatchEvent({
            type: "change"
        }),
        this.resizable.setSize(this.baseSize.width, this.baseSize.height))
    }
    getPreferredHeight() {
        return this.preferredHeight
    }
    setPreferredHeight(e) {
        this.preferredHeight = e
    }
    setPreferredSize(e, t) {
        this.preferredSize.width === e && this.preferredSize.height === t || (this.preferredSize.set(e, t),
        this.dispatchEvent({
            type: "change"
        }),
        this.resizable.setSize(this.baseSize.width, this.baseSize.height))
    }
    copy(e) {
        this.s = e.scale,
        this.baseSize.set(e.baseWidth, e.baseHeight),
        this.preferredSize.set(e.preferredWidth, e.preferredHeight),
        this.dispatchEvent({
            type: "change"
        }),
        this.resizable.setSize(this.baseSize.width, this.baseSize.height)
    }
    static get AUTO_SIZE() {
        return Be
    }
}
  , Re = 9
  , ze = 23
  , Pe = 28
  , Ae = new Map([[0, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x+y,opacity);}"], [1, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,min(y.a,opacity));}"], [2, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,(x+y)*0.5,opacity);}"], [3, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.rg,xHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}"], [4, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(step(0.0,y)*(1.0-min(vec4(1.0),(1.0-x)/y)),vec4(1.0),step(1.0,x));return mix(x,z,opacity);}"], [5, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=step(0.0,x)*mix(min(vec4(1.0),x/max(1.0-y,1e-9)),vec4(1.0),step(1.0,y));return mix(x,z,opacity);}"], [6, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,min(x,y),opacity);}"], [7, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,abs(x-y),opacity);}"], [8, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x/max(y,1e-12),opacity);}"], [Re, null], [10, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,(x+y-2.0*x*y),opacity);}"], [11, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 a=min(x,1.0),b=min(y,1.0);vec4 z=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,y));return mix(x,z,opacity);}"], [12, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,step(1.0,x+y),opacity);}"], [13, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.r,xHSL.gb));return vec4(mix(x.rgb,z,opacity),y.a);}"], [14, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,1.0-y,opacity);}"], [15, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y*(1.0-x),opacity);}"], [16, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,max(x,y),opacity);}"], [17, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,clamp(y+x-1.0,0.0,1.0),opacity);}"], [18, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,min(x+y,1.0),opacity);}"], [19, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,clamp(2.0*y+x-1.0,0.0,1.0),opacity);}"], [20, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.rg,yHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}"], [21, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x*y,opacity);}"], [22, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,1.0-abs(1.0-x-y),opacity);}"], [ze, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,opacity);}"], [24, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(2.0*y*x,1.0-2.0*(1.0-y)*(1.0-x),step(0.5,x));return mix(x,z,opacity);}"], [25, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 y2=2.0*y;vec4 z=mix(mix(y2,x,step(0.5*x,y)),max(vec4(0.0),y2-1.0),step(x,(y2-1.0)));return mix(x,z,opacity);}"], [26, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(min(x*x/max(1.0-y,1e-12),1.0),y,step(1.0,y));return mix(x,z,opacity);}"], [27, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.r,yHSL.g,xHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}"], [Pe, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x+y-min(x*y,1.0),opacity);}"], [29, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 y2=2.0*y;vec4 w=step(0.5,y);vec4 z=mix(x-(1.0-y2)*x*(1.0-x),mix(x+(y2-1.0)*(sqrt(x)-x),x+(y2-1.0)*x*((16.0*x-12.0)*x+3.0),w*(1.0-step(0.25,x))),w);return mix(x,z,opacity);}"], [30, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return y;}"], [31, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,max(x+y-1.0,0.0),opacity);}"], [32, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(max(1.0-min((1.0-x)/(2.0*y),1.0),0.0),min(x/(2.0*(1.0-y)),1.0),step(0.5,y));return mix(x,z,opacity);}"]])
  , _e = class extends U {
    constructor(e, t=1) {
        super(),
        this._blendFunction = e,
        this.opacity = new H(t)
    }
    getOpacity() {
        return this.opacity.value
    }
    setOpacity(e) {
        this.opacity.value = e
    }
    get blendFunction() {
        return this._blendFunction
    }
    set blendFunction(e) {
        this._blendFunction = e,
        this.dispatchEvent({
            type: "change"
        })
    }
    getBlendFunction() {
        return this.blendFunction
    }
    setBlendFunction(e) {
        this.blendFunction = e
    }
    getShaderCode() {
        return Ae.get(this.blendFunction)
    }
}
  , De = class extends U {
    constructor(e, t, {attributes: i=Se, blendFunction: n=ze, defines: s=new Map, uniforms: r=new Map, extensions: a=null, vertexShader: o=null}={}) {
        super(),
        this.name = e,
        this.renderer = null,
        this.attributes = i,
        this.fragmentShader = t,
        this.vertexShader = o,
        this.defines = s,
        this.uniforms = r,
        this.extensions = a,
        this.blendMode = new _e(n),
        this.blendMode.addEventListener("change", e => this.setChanged()),
        this._inputColorSpace = R,
        this._outputColorSpace = z
    }
    get inputColorSpace() {
        return this._inputColorSpace
    }
    set inputColorSpace(e) {
        this._inputColorSpace = e,
        this.setChanged()
    }
    get outputColorSpace() {
        return this._outputColorSpace
    }
    set outputColorSpace(e) {
        this._outputColorSpace = e,
        this.setChanged()
    }
    set mainScene(e) {}
    set mainCamera(e) {}
    getName() {
        return this.name
    }
    setRenderer(e) {
        this.renderer = e
    }
    getDefines() {
        return this.defines
    }
    getUniforms() {
        return this.uniforms
    }
    getExtensions() {
        return this.extensions
    }
    getBlendMode() {
        return this.blendMode
    }
    getAttributes() {
        return this.attributes
    }
    setAttributes(e) {
        this.attributes = e,
        this.setChanged()
    }
    getFragmentShader() {
        return this.fragmentShader
    }
    setFragmentShader(e) {
        this.fragmentShader = e,
        this.setChanged()
    }
    getVertexShader() {
        return this.vertexShader
    }
    setVertexShader(e) {
        this.vertexShader = e,
        this.setChanged()
    }
    setChanged() {
        this.dispatchEvent({
            type: "change"
        })
    }
    setDepthTexture(e, t=B) {}
    update(e, t, i) {}
    setSize(e, t) {}
    initialize(e, t, i) {}
    dispose() {
        for (const e of Object.keys(this)) {
            const t = this[e];
            (t instanceof b || t instanceof N || t instanceof L || t instanceof ue) && this[e].dispose()
        }
    }
}
  , Ce = 2
  , Oe = 3
  , Ie = [new Float32Array([0, 0]), new Float32Array([0, 1, 1]), new Float32Array([0, 1, 1, 2]), new Float32Array([0, 1, 2, 2, 3]), new Float32Array([0, 1, 2, 3, 4, 4, 5]), new Float32Array([0, 1, 2, 3, 4, 5, 7, 8, 9, 10])]
  , Fe = class extends O {
    constructor(e=new V) {
        super({
            name: "KawaseBlurMaterial",
            uniforms: {
                inputBuffer: new H(null),
                texelSize: new H(new V),
                scale: new H(1),
                kernel: new H(0)
            },
            blending: F,
            toneMapped: !1,
            depthWrite: !1,
            depthTest: !1,
            fragmentShader: "#ifdef FRAMEBUFFER_PRECISION_HIGH\nuniform mediump sampler2D inputBuffer;\n#else\nuniform lowp sampler2D inputBuffer;\n#endif\nvarying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;\n#include <colorspace_fragment>\n}",
            vertexShader: "uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}"
        }),
        this.setTexelSize(e.x, e.y),
        this.kernelSize = Ce
    }
    set inputBuffer(e) {
        this.uniforms.inputBuffer.value = e
    }
    setInputBuffer(e) {
        this.inputBuffer = e
    }
    get kernelSequence() {
        return Ie[this.kernelSize]
    }
    get scale() {
        return this.uniforms.scale.value
    }
    set scale(e) {
        this.uniforms.scale.value = e
    }
    getScale() {
        return this.uniforms.scale.value
    }
    setScale(e) {
        this.uniforms.scale.value = e
    }
    getKernel() {
        return null
    }
    get kernel() {
        return this.uniforms.kernel.value
    }
    set kernel(e) {
        this.uniforms.kernel.value = e
    }
    setKernel(e) {
        this.kernel = e
    }
    setTexelSize(e, t) {
        this.uniforms.texelSize.value.set(e, t, .5 * e, .5 * t)
    }
    setSize(e, t) {
        const i = 1 / e
          , n = 1 / t;
        this.uniforms.texelSize.value.set(i, n, .5 * i, .5 * n)
    }
}
  , He = class extends ue {
    constructor({kernelSize: e=Ce, resolutionScale: t=.5, width: i=Ue.AUTO_SIZE, height: n=Ue.AUTO_SIZE, resolutionX: s=i, resolutionY: r=n}={}) {
        super("KawaseBlurPass"),
        this.renderTargetA = new b(1,1,{
            depthBuffer: !1
        }),
        this.renderTargetA.texture.name = "Blur.Target.A",
        this.renderTargetB = this.renderTargetA.clone(),
        this.renderTargetB.texture.name = "Blur.Target.B";
        const a = this.resolution = new Ue(this,s,r,t);
        a.addEventListener("change", e => this.setSize(a.baseWidth, a.baseHeight)),
        this._blurMaterial = new Fe,
        this._blurMaterial.kernelSize = e,
        this.copyMaterial = new pe
    }
    getResolution() {
        return this.resolution
    }
    get blurMaterial() {
        return this._blurMaterial
    }
    set blurMaterial(e) {
        this._blurMaterial = e
    }
    get dithering() {
        return this.copyMaterial.dithering
    }
    set dithering(e) {
        this.copyMaterial.dithering = e
    }
    get kernelSize() {
        return this.blurMaterial.kernelSize
    }
    set kernelSize(e) {
        this.blurMaterial.kernelSize = e
    }
    get width() {
        return this.resolution.width
    }
    set width(e) {
        this.resolution.preferredWidth = e
    }
    get height() {
        return this.resolution.height
    }
    set height(e) {
        this.resolution.preferredHeight = e
    }
    get scale() {
        return this.blurMaterial.scale
    }
    set scale(e) {
        this.blurMaterial.scale = e
    }
    getScale() {
        return this.blurMaterial.scale
    }
    setScale(e) {
        this.blurMaterial.scale = e
    }
    getKernelSize() {
        return this.kernelSize
    }
    setKernelSize(e) {
        this.kernelSize = e
    }
    getResolutionScale() {
        return this.resolution.scale
    }
    setResolutionScale(e) {
        this.resolution.scale = e
    }
    render(e, t, i, n, s) {
        const r = this.scene
          , a = this.camera
          , o = this.renderTargetA
          , l = this.renderTargetB
          , c = this.blurMaterial
          , u = c.kernelSequence;
        let h = t;
        this.fullscreenMaterial = c;
        for (let d = 0, p = u.length; d < p; ++d) {
            const t = 1 & d ? l : o;
            c.kernel = u[d],
            c.inputBuffer = h.texture,
            e.setRenderTarget(t),
            e.render(r, a),
            h = t
        }
        this.fullscreenMaterial = this.copyMaterial,
        this.copyMaterial.inputBuffer = h.texture,
        e.setRenderTarget(this.renderToScreen ? null : i),
        e.render(r, a)
    }
    setSize(e, t) {
        const i = this.resolution;
        i.setBaseSize(e, t);
        const n = i.width
          , s = i.height;
        this.renderTargetA.setSize(n, s),
        this.renderTargetB.setSize(n, s),
        this.blurMaterial.setSize(e, t)
    }
    initialize(e, t, i) {
        void 0 !== i && (this.renderTargetA.texture.type = i,
        this.renderTargetB.texture.type = i,
        i !== f ? (this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1",
        this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1") : null !== e && e.outputColorSpace === v && (this.renderTargetA.texture.colorSpace = v,
        this.renderTargetB.texture.colorSpace = v))
    }
    static get AUTO_SIZE() {
        return Ue.AUTO_SIZE
    }
}
  , Ne = class extends O {
    constructor(e=!1, t=null) {
        super({
            name: "LuminanceMaterial",
            defines: {
                THREE_REVISION: k.replace(/\D+/g, "")
            },
            uniforms: {
                inputBuffer: new H(null),
                threshold: new H(0),
                smoothing: new H(1),
                range: new H(null)
            },
            blending: F,
            toneMapped: !1,
            depthWrite: !1,
            depthTest: !1,
            fragmentShader: "#include <common>\n#ifdef FRAMEBUFFER_PRECISION_HIGH\nuniform mediump sampler2D inputBuffer;\n#else\nuniform lowp sampler2D inputBuffer;\n#endif\n#ifdef RANGE\nuniform vec2 range;\n#elif defined(THRESHOLD)\nuniform float threshold;uniform float smoothing;\n#endif\nvarying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);float l=luminance(texel.rgb);\n#ifdef RANGE\nfloat low=step(range.x,l);float high=step(l,range.y);l*=low*high;\n#elif defined(THRESHOLD)\nl=smoothstep(threshold,threshold+smoothing,l)*l;\n#endif\n#ifdef COLOR\ngl_FragColor=vec4(texel.rgb*clamp(l,0.0,1.0),l);\n#else\ngl_FragColor=vec4(l);\n#endif\n}",
            vertexShader: de
        }),
        this.colorOutput = e,
        this.luminanceRange = t
    }
    set inputBuffer(e) {
        this.uniforms.inputBuffer.value = e
    }
    setInputBuffer(e) {
        this.uniforms.inputBuffer.value = e
    }
    get threshold() {
        return this.uniforms.threshold.value
    }
    set threshold(e) {
        this.smoothing > 0 || e > 0 ? this.defines.THRESHOLD = "1" : delete this.defines.THRESHOLD,
        this.uniforms.threshold.value = e
    }
    getThreshold() {
        return this.threshold
    }
    setThreshold(e) {
        this.threshold = e
    }
    get smoothing() {
        return this.uniforms.smoothing.value
    }
    set smoothing(e) {
        this.threshold > 0 || e > 0 ? this.defines.THRESHOLD = "1" : delete this.defines.THRESHOLD,
        this.uniforms.smoothing.value = e
    }
    getSmoothingFactor() {
        return this.smoothing
    }
    setSmoothingFactor(e) {
        this.smoothing = e
    }
    get useThreshold() {
        return this.threshold > 0 || this.smoothing > 0
    }
    set useThreshold(e) {}
    get colorOutput() {
        return void 0 !== this.defines.COLOR
    }
    set colorOutput(e) {
        e ? this.defines.COLOR = "1" : delete this.defines.COLOR,
        this.needsUpdate = !0
    }
    isColorOutputEnabled(e) {
        return this.colorOutput
    }
    setColorOutputEnabled(e) {
        this.colorOutput = e
    }
    get useRange() {
        return null !== this.luminanceRange
    }
    set useRange(e) {
        this.luminanceRange = null
    }
    get luminanceRange() {
        return this.uniforms.range.value
    }
    set luminanceRange(e) {
        null !== e ? this.defines.RANGE = "1" : delete this.defines.RANGE,
        this.uniforms.range.value = e,
        this.needsUpdate = !0
    }
    getLuminanceRange() {
        return this.luminanceRange
    }
    setLuminanceRange(e) {
        this.luminanceRange = e
    }
}
  , Le = class extends ue {
    constructor({renderTarget: e, luminanceRange: t, colorOutput: i, resolutionScale: n=1, width: s=Ue.AUTO_SIZE, height: r=Ue.AUTO_SIZE, resolutionX: a=s, resolutionY: o=r}={}) {
        super("LuminancePass"),
        this.fullscreenMaterial = new Ne(i,t),
        this.needsSwap = !1,
        this.renderTarget = e,
        void 0 === this.renderTarget && (this.renderTarget = new b(1,1,{
            depthBuffer: !1
        }),
        this.renderTarget.texture.name = "LuminancePass.Target");
        const l = this.resolution = new Ue(this,a,o,n);
        l.addEventListener("change", e => this.setSize(l.baseWidth, l.baseHeight))
    }
    get texture() {
        return this.renderTarget.texture
    }
    getTexture() {
        return this.renderTarget.texture
    }
    getResolution() {
        return this.resolution
    }
    render(e, t, i, n, s) {
        this.fullscreenMaterial.inputBuffer = t.texture,
        e.setRenderTarget(this.renderToScreen ? null : this.renderTarget),
        e.render(this.scene, this.camera)
    }
    setSize(e, t) {
        const i = this.resolution;
        i.setBaseSize(e, t),
        this.renderTarget.setSize(i.width, i.height)
    }
    initialize(e, t, i) {
        void 0 !== i && i !== f && (this.renderTarget.texture.type = i,
        this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1")
    }
}
  , ke = class extends O {
    constructor() {
        super({
            name: "DownsamplingMaterial",
            uniforms: {
                inputBuffer: new H(null),
                texelSize: new H(new l)
            },
            blending: F,
            toneMapped: !1,
            depthWrite: !1,
            depthTest: !1,
            fragmentShader: "#ifdef FRAMEBUFFER_PRECISION_HIGH\nuniform mediump sampler2D inputBuffer;\n#else\nuniform lowp sampler2D inputBuffer;\n#endif\n#define WEIGHT_INNER 0.125\n#define WEIGHT_OUTER 0.0555555\nvarying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;float clampToBorder(const in vec2 uv){return float(uv.s>=0.0&&uv.s<=1.0&&uv.t>=0.0&&uv.t<=1.0);}void main(){vec4 c=vec4(0.0);vec4 w=WEIGHT_INNER*vec4(clampToBorder(vUv00),clampToBorder(vUv01),clampToBorder(vUv02),clampToBorder(vUv03));c+=w.x*texture2D(inputBuffer,vUv00);c+=w.y*texture2D(inputBuffer,vUv01);c+=w.z*texture2D(inputBuffer,vUv02);c+=w.w*texture2D(inputBuffer,vUv03);w=WEIGHT_OUTER*vec4(clampToBorder(vUv04),clampToBorder(vUv05),clampToBorder(vUv06),clampToBorder(vUv07));c+=w.x*texture2D(inputBuffer,vUv04);c+=w.y*texture2D(inputBuffer,vUv05);c+=w.z*texture2D(inputBuffer,vUv06);c+=w.w*texture2D(inputBuffer,vUv07);w=WEIGHT_OUTER*vec4(clampToBorder(vUv08),clampToBorder(vUv09),clampToBorder(vUv10),clampToBorder(vUv11));c+=w.x*texture2D(inputBuffer,vUv08);c+=w.y*texture2D(inputBuffer,vUv09);c+=w.z*texture2D(inputBuffer,vUv10);c+=w.w*texture2D(inputBuffer,vUv11);c+=WEIGHT_OUTER*texture2D(inputBuffer,vUv);gl_FragColor=c;\n#include <colorspace_fragment>\n}",
            vertexShader: "uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;void main(){vUv=position.xy*0.5+0.5;vUv00=vUv+texelSize*vec2(-1.0,1.0);vUv01=vUv+texelSize*vec2(1.0,1.0);vUv02=vUv+texelSize*vec2(-1.0,-1.0);vUv03=vUv+texelSize*vec2(1.0,-1.0);vUv04=vUv+texelSize*vec2(-2.0,2.0);vUv05=vUv+texelSize*vec2(0.0,2.0);vUv06=vUv+texelSize*vec2(2.0,2.0);vUv07=vUv+texelSize*vec2(-2.0,0.0);vUv08=vUv+texelSize*vec2(2.0,0.0);vUv09=vUv+texelSize*vec2(-2.0,-2.0);vUv10=vUv+texelSize*vec2(0.0,-2.0);vUv11=vUv+texelSize*vec2(2.0,-2.0);gl_Position=vec4(position.xy,1.0,1.0);}"
        })
    }
    set inputBuffer(e) {
        this.uniforms.inputBuffer.value = e
    }
    setSize(e, t) {
        this.uniforms.texelSize.value.set(1 / e, 1 / t)
    }
}
  , Ge = class extends O {
    constructor() {
        super({
            name: "UpsamplingMaterial",
            uniforms: {
                inputBuffer: new H(null),
                supportBuffer: new H(null),
                texelSize: new H(new l),
                radius: new H(.85)
            },
            blending: F,
            toneMapped: !1,
            depthWrite: !1,
            depthTest: !1,
            fragmentShader: "#ifdef FRAMEBUFFER_PRECISION_HIGH\nuniform mediump sampler2D inputBuffer;uniform mediump sampler2D supportBuffer;\n#else\nuniform lowp sampler2D inputBuffer;uniform lowp sampler2D supportBuffer;\n#endif\nuniform float radius;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vec4 c=vec4(0.0);c+=texture2D(inputBuffer,vUv0)*0.0625;c+=texture2D(inputBuffer,vUv1)*0.125;c+=texture2D(inputBuffer,vUv2)*0.0625;c+=texture2D(inputBuffer,vUv3)*0.125;c+=texture2D(inputBuffer,vUv)*0.25;c+=texture2D(inputBuffer,vUv4)*0.125;c+=texture2D(inputBuffer,vUv5)*0.0625;c+=texture2D(inputBuffer,vUv6)*0.125;c+=texture2D(inputBuffer,vUv7)*0.0625;vec4 baseColor=texture2D(supportBuffer,vUv);gl_FragColor=mix(baseColor,c,radius);\n#include <colorspace_fragment>\n}",
            vertexShader: "uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,1.0);vUv1=vUv+texelSize*vec2(0.0,1.0);vUv2=vUv+texelSize*vec2(1.0,1.0);vUv3=vUv+texelSize*vec2(-1.0,0.0);vUv4=vUv+texelSize*vec2(1.0,0.0);vUv5=vUv+texelSize*vec2(-1.0,-1.0);vUv6=vUv+texelSize*vec2(0.0,-1.0);vUv7=vUv+texelSize*vec2(1.0,-1.0);gl_Position=vec4(position.xy,1.0,1.0);}"
        })
    }
    set inputBuffer(e) {
        this.uniforms.inputBuffer.value = e
    }
    set supportBuffer(e) {
        this.uniforms.supportBuffer.value = e
    }
    get radius() {
        return this.uniforms.radius.value
    }
    set radius(e) {
        this.uniforms.radius.value = e
    }
    setSize(e, t) {
        this.uniforms.texelSize.value.set(1 / e, 1 / t)
    }
}
  , je = class extends ue {
    constructor() {
        super("MipmapBlurPass"),
        this.needsSwap = !1,
        this.renderTarget = new b(1,1,{
            depthBuffer: !1
        }),
        this.renderTarget.texture.name = "Upsampling.Mipmap0",
        this.downsamplingMipmaps = [],
        this.upsamplingMipmaps = [],
        this.downsamplingMaterial = new ke,
        this.upsamplingMaterial = new Ge,
        this.resolution = new l
    }
    get texture() {
        return this.renderTarget.texture
    }
    get levels() {
        return this.downsamplingMipmaps.length
    }
    set levels(e) {
        if (this.levels !== e) {
            const t = this.renderTarget;
            this.dispose(),
            this.downsamplingMipmaps = [],
            this.upsamplingMipmaps = [];
            for (let i = 0; i < e; ++i) {
                const e = t.clone();
                e.texture.name = "Downsampling.Mipmap" + i,
                this.downsamplingMipmaps.push(e)
            }
            this.upsamplingMipmaps.push(t);
            for (let i = 1, n = e - 1; i < n; ++i) {
                const e = t.clone();
                e.texture.name = "Upsampling.Mipmap" + i,
                this.upsamplingMipmaps.push(e)
            }
            this.setSize(this.resolution.x, this.resolution.y)
        }
    }
    get radius() {
        return this.upsamplingMaterial.radius
    }
    set radius(e) {
        this.upsamplingMaterial.radius = e
    }
    render(e, t, i, n, s) {
        const {scene: r, camera: a} = this
          , {downsamplingMaterial: o, upsamplingMaterial: l} = this
          , {downsamplingMipmaps: c, upsamplingMipmaps: u} = this;
        let h = t;
        this.fullscreenMaterial = o;
        for (let d = 0, p = c.length; d < p; ++d) {
            const t = c[d];
            o.setSize(h.width, h.height),
            o.inputBuffer = h.texture,
            e.setRenderTarget(t),
            e.render(r, a),
            h = t
        }
        this.fullscreenMaterial = l;
        for (let d = u.length - 1; d >= 0; --d) {
            const t = u[d];
            l.setSize(h.width, h.height),
            l.inputBuffer = h.texture,
            l.supportBuffer = c[d].texture,
            e.setRenderTarget(t),
            e.render(r, a),
            h = t
        }
    }
    setSize(e, t) {
        const i = this.resolution;
        i.set(e, t);
        let n = i.width
          , s = i.height;
        for (let r = 0, a = this.downsamplingMipmaps.length; r < a; ++r)
            n = Math.round(.5 * n),
            s = Math.round(.5 * s),
            this.downsamplingMipmaps[r].setSize(n, s),
            r < this.upsamplingMipmaps.length && this.upsamplingMipmaps[r].setSize(n, s)
    }
    initialize(e, t, i) {
        if (void 0 !== i) {
            const t = this.downsamplingMipmaps.concat(this.upsamplingMipmaps);
            for (const e of t)
                e.texture.type = i;
            if (i !== f)
                this.downsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1",
                this.upsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1";
            else if (null !== e && e.outputColorSpace === v)
                for (const e of t)
                    e.texture.colorSpace = v
        }
    }
    dispose() {
        super.dispose();
        for (const e of this.downsamplingMipmaps.concat(this.upsamplingMipmaps))
            e.dispose()
    }
}
  , Ve = class extends De {
    constructor({blendFunction: e=Pe, luminanceThreshold: t=.9, luminanceSmoothing: i=.025, mipmapBlur: n=!1, intensity: s=1, radius: r=.85, levels: a=8, kernelSize: o=Oe, resolutionScale: l=.5, width: c=Ue.AUTO_SIZE, height: u=Ue.AUTO_SIZE, resolutionX: h=c, resolutionY: d=u}={}) {
        super("BloomEffect", "#ifdef FRAMEBUFFER_PRECISION_HIGH\nuniform mediump sampler2D map;\n#else\nuniform lowp sampler2D map;\n#endif\nuniform float intensity;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec4 texel=texture2D(map,uv);outputColor=vec4(texel.rgb*intensity,texel.a);}", {
            blendFunction: e,
            uniforms: new Map([["map", new H(null)], ["intensity", new H(s)]])
        }),
        this.renderTarget = new b(1,1,{
            depthBuffer: !1
        }),
        this.renderTarget.texture.name = "Bloom.Target",
        this.blurPass = new He({
            kernelSize: o
        }),
        this.luminancePass = new Le({
            colorOutput: !0
        }),
        this.luminanceMaterial.threshold = t,
        this.luminanceMaterial.smoothing = i,
        this.mipmapBlurPass = new je,
        this.mipmapBlurPass.enabled = n,
        this.mipmapBlurPass.radius = r,
        this.mipmapBlurPass.levels = a,
        this.uniforms.get("map").value = n ? this.mipmapBlurPass.texture : this.renderTarget.texture;
        const p = this.resolution = new Ue(this,h,d,l);
        p.addEventListener("change", e => this.setSize(p.baseWidth, p.baseHeight))
    }
    get texture() {
        return this.mipmapBlurPass.enabled ? this.mipmapBlurPass.texture : this.renderTarget.texture
    }
    getTexture() {
        return this.texture
    }
    getResolution() {
        return this.resolution
    }
    getBlurPass() {
        return this.blurPass
    }
    getLuminancePass() {
        return this.luminancePass
    }
    get luminanceMaterial() {
        return this.luminancePass.fullscreenMaterial
    }
    getLuminanceMaterial() {
        return this.luminancePass.fullscreenMaterial
    }
    get width() {
        return this.resolution.width
    }
    set width(e) {
        this.resolution.preferredWidth = e
    }
    get height() {
        return this.resolution.height
    }
    set height(e) {
        this.resolution.preferredHeight = e
    }
    get dithering() {
        return this.blurPass.dithering
    }
    set dithering(e) {
        this.blurPass.dithering = e
    }
    get kernelSize() {
        return this.blurPass.kernelSize
    }
    set kernelSize(e) {
        this.blurPass.kernelSize = e
    }
    get distinction() {
        return console.warn(this.name, "distinction was removed"),
        1
    }
    set distinction(e) {
        console.warn(this.name, "distinction was removed")
    }
    get intensity() {
        return this.uniforms.get("intensity").value
    }
    set intensity(e) {
        this.uniforms.get("intensity").value = e
    }
    getIntensity() {
        return this.intensity
    }
    setIntensity(e) {
        this.intensity = e
    }
    getResolutionScale() {
        return this.resolution.scale
    }
    setResolutionScale(e) {
        this.resolution.scale = e
    }
    update(e, t, i) {
        const n = this.renderTarget
          , s = this.luminancePass;
        s.enabled ? (s.render(e, t),
        this.mipmapBlurPass.enabled ? this.mipmapBlurPass.render(e, s.renderTarget) : this.blurPass.render(e, s.renderTarget, n)) : this.mipmapBlurPass.enabled ? this.mipmapBlurPass.render(e, t) : this.blurPass.render(e, t, n)
    }
    setSize(e, t) {
        const i = this.resolution;
        i.setBaseSize(e, t),
        this.renderTarget.setSize(i.width, i.height),
        this.blurPass.resolution.copy(i),
        this.luminancePass.setSize(e, t),
        this.mipmapBlurPass.setSize(e, t)
    }
    initialize(e, t, i) {
        this.blurPass.initialize(e, t, i),
        this.luminancePass.initialize(e, t, i),
        this.mipmapBlurPass.initialize(e, t, i),
        void 0 !== i && (this.renderTarget.texture.type = i,
        null !== e && e.outputColorSpace === v && (this.renderTarget.texture.colorSpace = v))
    }
}
  , We = class extends ue {
    constructor(e, t, i=null) {
        super("RenderPass", e, t),
        this.needsSwap = !1,
        this.clearPass = new me,
        this.overrideMaterialManager = null === i ? null : new Me(i),
        this.ignoreBackground = !1,
        this.skipShadowMapUpdate = !1,
        this.selection = null
    }
    set mainScene(e) {
        this.scene = e
    }
    set mainCamera(e) {
        this.camera = e
    }
    get renderToScreen() {
        return super.renderToScreen
    }
    set renderToScreen(e) {
        super.renderToScreen = e,
        this.clearPass.renderToScreen = e
    }
    get overrideMaterial() {
        const e = this.overrideMaterialManager;
        return null !== e ? e.material : null
    }
    set overrideMaterial(e) {
        const t = this.overrideMaterialManager;
        null !== e ? null !== t ? t.setMaterial(e) : this.overrideMaterialManager = new Me(e) : null !== t && (t.dispose(),
        this.overrideMaterialManager = null)
    }
    getOverrideMaterial() {
        return this.overrideMaterial
    }
    setOverrideMaterial(e) {
        this.overrideMaterial = e
    }
    get clear() {
        return this.clearPass.enabled
    }
    set clear(e) {
        this.clearPass.enabled = e
    }
    getSelection() {
        return this.selection
    }
    setSelection(e) {
        this.selection = e
    }
    isBackgroundDisabled() {
        return this.ignoreBackground
    }
    setBackgroundDisabled(e) {
        this.ignoreBackground = e
    }
    isShadowMapDisabled() {
        return this.skipShadowMapUpdate
    }
    setShadowMapDisabled(e) {
        this.skipShadowMapUpdate = e
    }
    getClearPass() {
        return this.clearPass
    }
    render(e, t, i, n, s) {
        const r = this.scene
          , a = this.camera
          , o = this.selection
          , l = a.layers.mask
          , c = r.background
          , u = e.shadowMap.autoUpdate
          , h = this.renderToScreen ? null : t;
        null !== o && a.layers.set(o.getLayer()),
        this.skipShadowMapUpdate && (e.shadowMap.autoUpdate = !1),
        (this.ignoreBackground || null !== this.clearPass.overrideClearColor) && (r.background = null),
        this.clearPass.enabled && this.clearPass.render(e, t),
        e.setRenderTarget(h),
        null !== this.overrideMaterialManager ? this.overrideMaterialManager.render(e, r, a) : e.render(r, a),
        a.layers.mask = l,
        r.background = c,
        e.shadowMap.autoUpdate = u
    }
}
  , Ye = class extends O {
    constructor() {
        super({
            name: "DepthDownsamplingMaterial",
            defines: {
                DEPTH_PACKING: "0"
            },
            uniforms: {
                depthBuffer: new H(null),
                normalBuffer: new H(null),
                texelSize: new H(new l)
            },
            blending: F,
            toneMapped: !1,
            depthWrite: !1,
            depthTest: !1,
            fragmentShader: "#include <packing>\n#ifdef GL_FRAGMENT_PRECISION_HIGH\nuniform highp sampler2D depthBuffer;\n#else\nuniform mediump sampler2D depthBuffer;\n#endif\n#ifdef DOWNSAMPLE_NORMALS\nuniform lowp sampler2D normalBuffer;\n#endif\nvarying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;float readDepth(const in vec2 uv){\n#if DEPTH_PACKING == 3201\nreturn unpackRGBAToDepth(texture2D(depthBuffer,uv));\n#else\nreturn texture2D(depthBuffer,uv).r;\n#endif\n}int findBestDepth(const in float samples[4]){float c=(samples[0]+samples[1]+samples[2]+samples[3])*0.25;float distances[4];distances[0]=abs(c-samples[0]);distances[1]=abs(c-samples[1]);distances[2]=abs(c-samples[2]);distances[3]=abs(c-samples[3]);float maxDistance=max(max(distances[0],distances[1]),max(distances[2],distances[3]));int remaining[3];int rejected[3];int i,j,k;for(i=0,j=0,k=0;i<4;++i){if(distances[i]<maxDistance){remaining[j++]=i;}else{rejected[k++]=i;}}for(;j<3;++j){remaining[j]=rejected[--k];}vec3 s=vec3(samples[remaining[0]],samples[remaining[1]],samples[remaining[2]]);c=(s.x+s.y+s.z)/3.0;distances[0]=abs(c-s.x);distances[1]=abs(c-s.y);distances[2]=abs(c-s.z);float minDistance=min(distances[0],min(distances[1],distances[2]));for(i=0;i<3;++i){if(distances[i]==minDistance){break;}}return remaining[i];}void main(){float d[4];d[0]=readDepth(vUv0);d[1]=readDepth(vUv1);d[2]=readDepth(vUv2);d[3]=readDepth(vUv3);int index=findBestDepth(d);\n#ifdef DOWNSAMPLE_NORMALS\nvec3 n[4];n[0]=texture2D(normalBuffer,vUv0).rgb;n[1]=texture2D(normalBuffer,vUv1).rgb;n[2]=texture2D(normalBuffer,vUv2).rgb;n[3]=texture2D(normalBuffer,vUv3).rgb;\n#else\nvec3 n[4];n[0]=vec3(0.0);n[1]=vec3(0.0);n[2]=vec3(0.0);n[3]=vec3(0.0);\n#endif\ngl_FragColor=vec4(n[index],d[index]);}",
            vertexShader: "uniform vec2 texelSize;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vUv0=uv;vUv1=vec2(uv.x,uv.y+texelSize.y);vUv2=vec2(uv.x+texelSize.x,uv.y);vUv3=uv+texelSize;gl_Position=vec4(position.xy,1.0,1.0);}"
        })
    }
    set depthBuffer(e) {
        this.uniforms.depthBuffer.value = e
    }
    set depthPacking(e) {
        this.defines.DEPTH_PACKING = e.toFixed(0),
        this.needsUpdate = !0
    }
    setDepthBuffer(e, t=B) {
        this.depthBuffer = e,
        this.depthPacking = t
    }
    set normalBuffer(e) {
        this.uniforms.normalBuffer.value = e,
        null !== e ? this.defines.DOWNSAMPLE_NORMALS = "1" : delete this.defines.DOWNSAMPLE_NORMALS,
        this.needsUpdate = !0
    }
    setNormalBuffer(e) {
        this.normalBuffer = e
    }
    setTexelSize(e, t) {
        this.uniforms.texelSize.value.set(e, t)
    }
    setSize(e, t) {
        this.uniforms.texelSize.value.set(1 / e, 1 / t)
    }
}
  , Xe = class extends ue {
    constructor({normalBuffer: e=null, resolutionScale: t=.5, width: i=Ue.AUTO_SIZE, height: n=Ue.AUTO_SIZE, resolutionX: s=i, resolutionY: r=n}={}) {
        super("DepthDownsamplingPass");
        const a = new Ye;
        a.normalBuffer = e,
        this.fullscreenMaterial = a,
        this.needsDepthTexture = !0,
        this.needsSwap = !1,
        this.renderTarget = new b(1,1,{
            minFilter: w,
            magFilter: w,
            depthBuffer: !1,
            type: M
        }),
        this.renderTarget.texture.name = "DepthDownsamplingPass.Target",
        this.renderTarget.texture.generateMipmaps = !1;
        const o = this.resolution = new Ue(this,s,r,t);
        o.addEventListener("change", e => this.setSize(o.baseWidth, o.baseHeight))
    }
    get texture() {
        return this.renderTarget.texture
    }
    getTexture() {
        return this.renderTarget.texture
    }
    getResolution() {
        return this.resolution
    }
    setDepthTexture(e, t=B) {
        this.fullscreenMaterial.depthBuffer = e,
        this.fullscreenMaterial.depthPacking = t
    }
    render(e, t, i, n, s) {
        e.setRenderTarget(this.renderToScreen ? null : this.renderTarget),
        e.render(this.scene, this.camera)
    }
    setSize(e, t) {
        const i = this.resolution;
        i.setBaseSize(e, t),
        this.renderTarget.setSize(i.width, i.height),
        this.fullscreenMaterial.setSize(e, t)
    }
    initialize(e, t, i) {
        const n = e.getContext();
        if (!(n.getExtension("EXT_color_buffer_float") || n.getExtension("EXT_color_buffer_half_float")))
            throw new Error("Rendering to float texture is not supported.")
    }
}
  , Ze = "#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#define packFloatToRGBA(v) packDepthToRGBA(v)\n#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)\n#ifdef FRAMEBUFFER_PRECISION_HIGH\nuniform mediump sampler2D inputBuffer;\n#else\nuniform lowp sampler2D inputBuffer;\n#endif\n#if DEPTH_PACKING == 3201\nuniform lowp sampler2D depthBuffer;\n#elif defined(GL_FRAGMENT_PRECISION_HIGH)\nuniform highp sampler2D depthBuffer;\n#else\nuniform mediump sampler2D depthBuffer;\n#endif\nuniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}float readDepth(const in vec2 uv){\n#if DEPTH_PACKING == 3201\nreturn unpackRGBAToDepth(texture2D(depthBuffer,uv));\n#else\nreturn texture2D(depthBuffer,uv).r;\n#endif\n}float getViewZ(const in float depth){\n#ifdef PERSPECTIVE_CAMERA\nreturn perspectiveDepthToViewZ(depth,cameraNear,cameraFar);\n#else\nreturn orthographicDepthToViewZ(depth,cameraNear,cameraFar);\n#endif\n}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE color0.a=clamp(color0.a,0.0,1.0);gl_FragColor=color0;\n#ifdef ENCODE_OUTPUT\n#include <colorspace_fragment>\n#endif\n#include <dithering_fragment>\n}"
  , Ke = "uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}"
  , $e = class extends O {
    constructor(e, t, i, n, s=!1) {
        super({
            name: "EffectMaterial",
            defines: {
                THREE_REVISION: k.replace(/\D+/g, ""),
                DEPTH_PACKING: "0",
                ENCODE_OUTPUT: "1"
            },
            uniforms: {
                inputBuffer: new H(null),
                depthBuffer: new H(null),
                resolution: new H(new l),
                texelSize: new H(new l),
                cameraNear: new H(.3),
                cameraFar: new H(1e3),
                aspect: new H(1),
                time: new H(0)
            },
            blending: F,
            toneMapped: !1,
            depthWrite: !1,
            depthTest: !1,
            dithering: s
        }),
        e && this.setShaderParts(e),
        t && this.setDefines(t),
        i && this.setUniforms(i),
        this.copyCameraSettings(n)
    }
    set inputBuffer(e) {
        this.uniforms.inputBuffer.value = e
    }
    setInputBuffer(e) {
        this.uniforms.inputBuffer.value = e
    }
    get depthBuffer() {
        return this.uniforms.depthBuffer.value
    }
    set depthBuffer(e) {
        this.uniforms.depthBuffer.value = e
    }
    get depthPacking() {
        return Number(this.defines.DEPTH_PACKING)
    }
    set depthPacking(e) {
        this.defines.DEPTH_PACKING = e.toFixed(0),
        this.needsUpdate = !0
    }
    setDepthBuffer(e, t=B) {
        this.depthBuffer = e,
        this.depthPacking = t
    }
    setShaderData(e) {
        this.setShaderParts(e.shaderParts),
        this.setDefines(e.defines),
        this.setUniforms(e.uniforms),
        this.setExtensions(e.extensions)
    }
    setShaderParts(e) {
        return this.fragmentShader = Ze.replace(Te.FRAGMENT_HEAD, e.get(Te.FRAGMENT_HEAD) || "").replace(Te.FRAGMENT_MAIN_UV, e.get(Te.FRAGMENT_MAIN_UV) || "").replace(Te.FRAGMENT_MAIN_IMAGE, e.get(Te.FRAGMENT_MAIN_IMAGE) || ""),
        this.vertexShader = Ke.replace(Te.VERTEX_HEAD, e.get(Te.VERTEX_HEAD) || "").replace(Te.VERTEX_MAIN_SUPPORT, e.get(Te.VERTEX_MAIN_SUPPORT) || ""),
        this.needsUpdate = !0,
        this
    }
    setDefines(e) {
        for (const t of e.entries())
            this.defines[t[0]] = t[1];
        return this.needsUpdate = !0,
        this
    }
    setUniforms(e) {
        for (const t of e.entries())
            this.uniforms[t[0]] = t[1];
        return this
    }
    setExtensions(e) {
        this.extensions = {};
        for (const t of e)
            this.extensions[t] = !0;
        return this
    }
    get encodeOutput() {
        return void 0 !== this.defines.ENCODE_OUTPUT
    }
    set encodeOutput(e) {
        this.encodeOutput !== e && (e ? this.defines.ENCODE_OUTPUT = "1" : delete this.defines.ENCODE_OUTPUT,
        this.needsUpdate = !0)
    }
    isOutputEncodingEnabled(e) {
        return this.encodeOutput
    }
    setOutputEncodingEnabled(e) {
        this.encodeOutput = e
    }
    get time() {
        return this.uniforms.time.value
    }
    set time(e) {
        this.uniforms.time.value = e
    }
    setDeltaTime(e) {
        this.uniforms.time.value += e
    }
    adoptCameraSettings(e) {
        this.copyCameraSettings(e)
    }
    copyCameraSettings(e) {
        e && (this.uniforms.cameraNear.value = e.near,
        this.uniforms.cameraFar.value = e.far,
        e instanceof c ? this.defines.PERSPECTIVE_CAMERA = "1" : delete this.defines.PERSPECTIVE_CAMERA,
        this.needsUpdate = !0)
    }
    setSize(e, t) {
        const i = this.uniforms;
        i.resolution.value.set(e, t),
        i.texelSize.value.set(1 / e, 1 / t),
        i.aspect.value = e / t
    }
    static get Section() {
        return Te
    }
}
;
function Qe(e, t, i) {
    for (const n of t) {
        const t = "$1" + e + n.charAt(0).toUpperCase() + n.slice(1)
          , s = new RegExp("([^\\.])(\\b" + n + "\\b)","g");
        for (const e of i.entries())
            null !== e[1] && i.set(e[0], e[1].replace(s, t))
    }
}
function qe(e, t, i) {
    let n = t.getFragmentShader()
      , s = t.getVertexShader();
    const r = void 0 !== n && /mainImage/.test(n)
      , a = void 0 !== n && /mainUv/.test(n);
    if (i.attributes |= t.getAttributes(),
    void 0 === n)
        throw new Error(`Missing fragment shader (${t.name})`);
    if (a && 0 !== (i.attributes & ye))
        throw new Error(`Effects that transform UVs are incompatible with convolution effects (${t.name})`);
    if (!r && !a)
        throw new Error(`Could not find mainImage or mainUv function (${t.name})`);
    {
        const o = /\w+\s+(\w+)\([\w\s,]*\)\s*{/g
          , l = i.shaderParts;
        let c = l.get(Te.FRAGMENT_HEAD) || ""
          , u = l.get(Te.FRAGMENT_MAIN_UV) || ""
          , h = l.get(Te.FRAGMENT_MAIN_IMAGE) || ""
          , d = l.get(Te.VERTEX_HEAD) || ""
          , p = l.get(Te.VERTEX_MAIN_SUPPORT) || "";
        const f = new Set
          , m = new Set;
        if (a && (u += `\t${e}MainUv(UV);\n`,
        i.uvTransformation = !0),
        null !== s && /mainSupport/.test(s)) {
            const t = /mainSupport *\([\w\s]*?uv\s*?\)/.test(s);
            p += `\t${e}MainSupport(`,
            p += t ? "vUv);\n" : ");\n";
            for (const e of s.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))
                for (const t of e[1].split(/\s*,\s*/))
                    i.varyings.add(t),
                    f.add(t),
                    m.add(t);
            for (const e of s.matchAll(o))
                m.add(e[1])
        }
        for (const e of n.matchAll(o))
            m.add(e[1]);
        for (const e of t.defines.keys())
            m.add(e.replace(/\([\w\s,]*\)/g, ""));
        for (const e of t.uniforms.keys())
            m.add(e);
        m.delete("while"),
        m.delete("for"),
        m.delete("if"),
        t.uniforms.forEach( (t, n) => i.uniforms.set(e + n.charAt(0).toUpperCase() + n.slice(1), t)),
        t.defines.forEach( (t, n) => i.defines.set(e + n.charAt(0).toUpperCase() + n.slice(1), t));
        const g = new Map([["fragment", n], ["vertex", s]]);
        Qe(e, m, i.defines),
        Qe(e, m, g),
        n = g.get("fragment"),
        s = g.get("vertex");
        const x = t.blendMode;
        if (i.blendModes.set(x.blendFunction, x),
        r) {
            null !== t.inputColorSpace && t.inputColorSpace !== i.colorSpace && (h += t.inputColorSpace === v ? "color0 = sRGBTransferOETF(color0);\n\t" : "color0 = sRGBToLinear(color0);\n\t"),
            t.outputColorSpace !== z ? i.colorSpace = t.outputColorSpace : null !== t.inputColorSpace && (i.colorSpace = t.inputColorSpace);
            const s = /MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;
            h += `${e}MainImage(color0, UV, `,
            0 !== (i.attributes & be) && s.test(n) && (h += "depth, ",
            i.readDepth = !0),
            h += "color1);\n\t";
            const r = e + "BlendOpacity";
            i.uniforms.set(r, x.opacity),
            h += `color0 = blend${x.blendFunction}(color0, color1, ${r});\n\n\t`,
            c += `uniform float ${r};\n\n`
        }
        if (c += n + "\n",
        null !== s && (d += s + "\n"),
        l.set(Te.FRAGMENT_HEAD, c),
        l.set(Te.FRAGMENT_MAIN_UV, u),
        l.set(Te.FRAGMENT_MAIN_IMAGE, h),
        l.set(Te.VERTEX_HEAD, d),
        l.set(Te.VERTEX_MAIN_SUPPORT, p),
        null !== t.extensions)
            for (const e of t.extensions)
                i.extensions.add(e)
    }
}
var Je = class extends ue {
    constructor(e, ...t) {
        super("EffectPass"),
        this.fullscreenMaterial = new $e(null,null,null,e),
        this.listener = e => this.handleEvent(e),
        this.effects = [],
        this.setEffects(t),
        this.skipRendering = !1,
        this.minTime = 1,
        this.maxTime = Number.POSITIVE_INFINITY,
        this.timeScale = 1
    }
    set mainScene(e) {
        for (const t of this.effects)
            t.mainScene = e
    }
    set mainCamera(e) {
        this.fullscreenMaterial.copyCameraSettings(e);
        for (const t of this.effects)
            t.mainCamera = e
    }
    get encodeOutput() {
        return this.fullscreenMaterial.encodeOutput
    }
    set encodeOutput(e) {
        this.fullscreenMaterial.encodeOutput = e
    }
    get dithering() {
        return this.fullscreenMaterial.dithering
    }
    set dithering(e) {
        const t = this.fullscreenMaterial;
        t.dithering = e,
        t.needsUpdate = !0
    }
    setEffects(e) {
        for (const t of this.effects)
            t.removeEventListener("change", this.listener);
        this.effects = e.sort( (e, t) => t.attributes - e.attributes);
        for (const t of this.effects)
            t.addEventListener("change", this.listener)
    }
    updateMaterial() {
        const e = new Ee;
        let t = 0;
        for (const a of this.effects)
            if (a.blendMode.blendFunction === Re)
                e.attributes |= a.getAttributes() & be;
            else {
                if (0 !== (e.attributes & a.getAttributes() & ye))
                    throw new Error(`Convolution effects cannot be merged (${a.name})`);
                qe("e" + t++, a, e)
            }
        let i = e.shaderParts.get(Te.FRAGMENT_HEAD)
          , n = e.shaderParts.get(Te.FRAGMENT_MAIN_IMAGE)
          , s = e.shaderParts.get(Te.FRAGMENT_MAIN_UV);
        const r = /\bblend\b/g;
        for (const a of e.blendModes.values())
            i += a.getShaderCode().replace(r, `blend${a.blendFunction}`) + "\n";
        0 !== (e.attributes & be) ? (e.readDepth && (n = "float depth = readDepth(UV);\n\n\t" + n),
        this.needsDepthTexture = null === this.getDepthTexture()) : this.needsDepthTexture = !1,
        e.colorSpace === v && (n += "color0 = sRGBToLinear(color0);\n\t"),
        e.uvTransformation ? (s = "vec2 transformedUv = vUv;\n" + s,
        e.defines.set("UV", "transformedUv")) : e.defines.set("UV", "vUv"),
        e.shaderParts.set(Te.FRAGMENT_HEAD, i),
        e.shaderParts.set(Te.FRAGMENT_MAIN_IMAGE, n),
        e.shaderParts.set(Te.FRAGMENT_MAIN_UV, s);
        for (const [a,o] of e.shaderParts)
            null !== o && e.shaderParts.set(a, o.trim().replace(/^#/, "\n#"));
        this.skipRendering = 0 === t,
        this.needsSwap = !this.skipRendering,
        this.fullscreenMaterial.setShaderData(e)
    }
    recompile() {
        this.updateMaterial()
    }
    getDepthTexture() {
        return this.fullscreenMaterial.depthBuffer
    }
    setDepthTexture(e, t=B) {
        this.fullscreenMaterial.depthBuffer = e,
        this.fullscreenMaterial.depthPacking = t;
        for (const i of this.effects)
            i.setDepthTexture(e, t)
    }
    render(e, t, i, n, s) {
        for (const r of this.effects)
            r.update(e, t, n);
        if (!this.skipRendering || this.renderToScreen) {
            const s = this.fullscreenMaterial;
            s.inputBuffer = t.texture,
            s.time += n * this.timeScale,
            e.setRenderTarget(this.renderToScreen ? null : i),
            e.render(this.scene, this.camera)
        }
    }
    setSize(e, t) {
        this.fullscreenMaterial.setSize(e, t);
        for (const i of this.effects)
            i.setSize(e, t)
    }
    initialize(e, t, i) {
        this.renderer = e;
        for (const n of this.effects)
            n.initialize(e, t, i);
        this.updateMaterial(),
        void 0 !== i && i !== f && (this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1")
    }
    dispose() {
        super.dispose();
        for (const e of this.effects)
            e.removeEventListener("change", this.listener),
            e.dispose()
    }
    handleEvent(e) {
        if ("change" === e.type)
            this.recompile()
    }
}
  , et = class extends ue {
    constructor(e, t, {renderTarget: i, resolutionScale: n=1, width: s=Ue.AUTO_SIZE, height: r=Ue.AUTO_SIZE, resolutionX: a=s, resolutionY: o=r}={}) {
        super("NormalPass"),
        this.needsSwap = !1,
        this.renderPass = new We(e,t,new T);
        const l = this.renderPass;
        l.ignoreBackground = !0,
        l.skipShadowMapUpdate = !0;
        const c = l.getClearPass();
        c.overrideClearColor = new E(7829503),
        c.overrideClearAlpha = 1,
        this.renderTarget = i,
        void 0 === this.renderTarget && (this.renderTarget = new b(1,1,{
            minFilter: w,
            magFilter: w
        }),
        this.renderTarget.texture.name = "NormalPass.Target");
        const u = this.resolution = new Ue(this,a,o,n);
        u.addEventListener("change", e => this.setSize(u.baseWidth, u.baseHeight))
    }
    set mainScene(e) {
        this.renderPass.mainScene = e
    }
    set mainCamera(e) {
        this.renderPass.mainCamera = e
    }
    get texture() {
        return this.renderTarget.texture
    }
    getTexture() {
        return this.renderTarget.texture
    }
    getResolution() {
        return this.resolution
    }
    getResolutionScale() {
        return this.resolution.scale
    }
    setResolutionScale(e) {
        this.resolution.scale = e
    }
    render(e, t, i, n, s) {
        const r = this.renderToScreen ? null : this.renderTarget;
        this.renderPass.render(e, r, r)
    }
    setSize(e, t) {
        const i = this.resolution;
        i.setBaseSize(e, t),
        this.renderTarget.setSize(i.width, i.height)
    }
}
;
function tt(e, t, i) {
    return t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = i,
    e
}
function it(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
new l,
new l;
var nt = function e(t, i, n) {
    var s = this;
    it(this, e),
    tt(this, "dot2", function(e, t) {
        return s.x * e + s.y * t
    }),
    tt(this, "dot3", function(e, t, i) {
        return s.x * e + s.y * t + s.z * i
    }),
    this.x = t,
    this.y = i,
    this.z = n
}
  , st = [new nt(1,1,0), new nt(-1,1,0), new nt(1,-1,0), new nt(-1,-1,0), new nt(1,0,1), new nt(-1,0,1), new nt(1,0,-1), new nt(-1,0,-1), new nt(0,1,1), new nt(0,-1,1), new nt(0,1,-1), new nt(0,-1,-1)]
  , rt = [151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180]
  , at = new Array(512)
  , ot = new Array(512);
function lt(e) {
    var t = function(e) {
        if ("number" == typeof e)
            e = Math.abs(e);
        else if ("string" == typeof e) {
            var t = e;
            e = 0;
            for (var i = 0; i < t.length; i++)
                e = (e + (i + 1) * (t.charCodeAt(i) % 96)) % 2147483647
        }
        return 0 === e && (e = 311),
        e
    }(e);
    return function() {
        var e = 48271 * t % 2147483647;
        return t = e,
        e / 2147483647
    }
}
!function(e) {
    e > 0 && e < 1 && (e *= 65536),
    (e = Math.floor(e)) < 256 && (e |= e << 8);
    for (var t = 0; t < 256; t++) {
        var i;
        i = 1 & t ? rt[t] ^ 255 & e : rt[t] ^ e >> 8 & 255,
        at[t] = at[t + 256] = i,
        ot[t] = ot[t + 256] = st[i % 12]
    }
}(0);
new function e(t) {
    var i = this;
    it(this, e),
    tt(this, "seed", 0),
    tt(this, "init", function(e) {
        i.seed = e,
        i.value = lt(e)
    }),
    tt(this, "value", lt(this.seed)),
    this.init(t)
}
(Math.random());
const ct = t.createContext(null)
  , ut = e => !(2 & ~e.getAttributes())
  , ht = t.memo(t.forwardRef( ({children: e, camera: n, scene: s, resolutionScale: r, enabled: a=!0, renderPriority: o=1, autoClear: l=!0, depthBuffer: c, enableNormalPass: u, stencilBuffer: h, multisampling: d=8, frameBufferType: p=W}, f) => {
    const {gl: v, scene: m, camera: g, size: x} = X()
      , S = s || m
      , b = n || g
      , [y,T,E] = t.useMemo( () => {
        const e = new xe(v,{
            depthBuffer: c,
            stencilBuffer: h,
            multisampling: d,
            frameBufferType: p
        });
        e.addPass(new We(S,b));
        let t = null
          , i = null;
        return u && (i = new et(S,b),
        i.enabled = !1,
        e.addPass(i),
        void 0 !== r && (t = new Xe({
            normalBuffer: i.texture,
            resolutionScale: r
        }),
        t.enabled = !1,
        e.addPass(t))),
        [e, i, t]
    }
    , [b, v, c, h, d, p, S, u, r]);
    t.useEffect( () => null == y ? void 0 : y.setSize(x.width, x.height), [y, x]),
    Z( (e, t) => {
        if (a) {
            const e = v.autoClear;
            v.autoClear = l,
            h && !l && v.clearStencil(),
            y.render(t),
            v.autoClear = e
        }
    }
    , a ? o : 0);
    const w = t.useRef(null);
    t.useLayoutEffect( () => {
        var e;
        const t = []
          , i = w.current.__r3f;
        if (i && y) {
            const n = i.children;
            for (let i = 0; i < n.length; i++) {
                const s = n[i].object;
                if (s instanceof De) {
                    const r = [s];
                    if (!ut(s)) {
                        let t = null;
                        for (; (t = null == (e = n[i + 1]) ? void 0 : e.object)instanceof De && !ut(t); )
                            r.push(t),
                            i++
                    }
                    const a = new Je(b,...r);
                    t.push(a)
                } else
                    s instanceof ue && t.push(s)
            }
            for (const e of t)
                null == y || y.addPass(e);
            T && (T.enabled = !0),
            E && (E.enabled = !0)
        }
        return () => {
            for (const e of t)
                null == y || y.removePass(e);
            T && (T.enabled = !1),
            E && (E.enabled = !1)
        }
    }
    , [y, e, b, T, E]),
    t.useEffect( () => {
        const e = v.toneMapping;
        return v.toneMapping = Y,
        () => {
            v.toneMapping = e
        }
    }
    , [v]);
    const M = t.useMemo( () => ({
        composer: y,
        normalPass: T,
        downSamplingPass: E,
        resolutionScale: r,
        camera: b,
        scene: S
    }), [y, T, E, r, b, S]);
    return t.useImperativeHandle(f, () => y, [y]),
    i.jsx(ct.Provider, {
        value: M,
        children: i.jsx("group", {
            ref: w,
            children: e
        })
    })
}
));
let dt = 0;
const pt = new WeakMap
  , ft = ( (e, t) => function({blendFunction: s=(null == t ? void 0 : t.blendFunction), opacity: r=(null == t ? void 0 : t.opacity), ...a}) {
    let o = pt.get(e);
    if (!o) {
        const t = `@react-three/postprocessing/${e.name}-${dt++}`;
        K({
            [t]: e
        }),
        pt.set(e, o = t)
    }
    const l = X(e => e.camera)
      , c = n.useMemo( () => [...(null == t ? void 0 : t.args) ?? [], ...a.args ?? [{
        ...t,
        ...a
    }]], [JSON.stringify(a)]);
    return i.jsx(o, {
        camera: l,
        "blendMode-blendFunction": s,
        "blendMode-opacity-value": r,
        ...a,
        args: c
    })
}
)(Ve, {
    blendFunction: 0
});
export {ae as O, ht as d, ft as w};
