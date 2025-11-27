import {r as t, j as a} from "./app-CWVuyR8b.js";
import {a as e} from "./events-dc44c1b8.esm-Dn7KqyVj.js";
import {C as o, B as r, a as n, N as s, b as i, L as c, R as h} from "./three.module-uFtjsCt7.js";
function l({appearDuration: l=1.6, appearDelay: u=0, wave: M=!1}) {
    const f = t.useRef(null)
      , p = t.useRef(null)
      , m = t.useRef(null)
      , d = 15e3
      , y = 1.8
      , g = t.useMemo( () => function(t=128, a=.7) {
        const e = document.createElement("canvas");
        e.width = e.height = t;
        const o = e.getContext("2d");
        o && (o.clearRect(0, 0, t, t),
        o.beginPath(),
        o.arc(t / 2, t / 2, t / 2 - 2, 0, 2 * Math.PI),
        o.fillStyle = "white",
        o.globalAlpha = a,
        o.fill());
        const r = new i(e);
        return r.minFilter = c,
        r.magFilter = c,
        r.format = h,
        r.needsUpdate = !0,
        r
    }(128, .7), [])
      , w = t.useMemo( () => {
        const t = new o("#ffffff")
          , a = 3 * Math.PI * 2;
        function e(t) {
            return .25 * Math.sin(4 * t) - .5
        }
        const s = [];
        for (let o = 0; o < d; o++) {
            const r = o % 2
              , n = Math.floor(o / 2) / 7500 * a
              , i = r / 2 * Math.PI * 2
              , c = .35 * n
              , h = Math.pow(Math.random(), 2) * y
              , l = c + h
              , u = n + i
              , f = h > 1.35
              , p = Math.cos(u) * l
              , m = Math.sin(u) * l
              , d = M ? e(l) : -.6
              , g = Math.min(l / 8, 1);
            let w = .7 + .2 * g + .3 * Math.random();
            w = Math.min(w, .9);
            const b = (.015 + .012 * Math.random()) * (.5 + .5 * g);
            if (s.push({
                x: p,
                y: d,
                z: m,
                size: b,
                color: [t.r * w, t.g * w, t.b * w],
                radius: Math.hypot(p, m)
            }),
            f && o % 2 == 0) {
                const a = 2;
                for (let o = 0; o < a; o++) {
                    const a = .15 * (Math.random() - .5)
                      , o = .95 + .1 * Math.random()
                      , r = c + y * o
                      , n = u + a
                      , i = Math.cos(n) * r
                      , h = Math.sin(n) * r
                      , l = M ? e(r) : -.6;
                    s.push({
                        x: i,
                        y: l,
                        z: h,
                        size: 1.1 * b,
                        color: [t.r * w * 1.05, t.g * w * 1.05, t.b * w * 1.05],
                        radius: Math.hypot(i, h)
                    })
                }
            }
            if (M && o % 3 == 0) {
                const a = l * 4 % (2 * Math.PI)
                  , o = Math.abs(Math.cos(a));
                if (o > .7) {
                    const a = Math.floor(.4 * o);
                    for (let o = 0; o < a; o++) {
                        const a = .1 * (Math.random() - .5)
                          , o = l + (Math.random() - .5) * y * .3
                          , r = u + a
                          , n = Math.cos(r) * o
                          , i = Math.sin(r) * o
                          , c = e(o);
                        s.push({
                            x: n,
                            y: c,
                            z: i,
                            size: .9 * b,
                            color: [t.r * w, t.g * w, t.b * w],
                            radius: Math.hypot(n, i)
                        })
                    }
                }
            }
            if (o % 3 == 0 && 0 === r) {
                const a = 5
                  , o = Math.PI;
                for (let r = 0; r < a; r++) {
                    const n = u + o * ((r + 1) / (a + 1));
                    for (let a = 0; a < 2; a++) {
                        const o = (a - .5) * y * .6
                          , r = l + (Math.random() - .5) * y * .4 + o
                          , i = Math.cos(n) * r
                          , c = Math.sin(n) * r
                          , h = M ? e(r) : -.6;
                        s.push({
                            x: i,
                            y: h,
                            z: c,
                            size: .9 * b,
                            color: [t.r * w * 1, t.g * w * 1, t.b * w * 1],
                            radius: Math.hypot(i, c)
                        })
                    }
                }
            }
        }
        s.sort( (t, a) => t.radius - a.radius);
        const i = s.length
          , c = new Float32Array(3 * i)
          , h = new Float32Array(3 * i)
          , l = new Float32Array(i);
        for (let o = 0; o < i; o++) {
            const t = s[o];
            c[3 * o] = t.x,
            c[3 * o + 1] = t.y,
            c[3 * o + 2] = t.z,
            h[3 * o] = t.color[0],
            h[3 * o + 1] = t.color[1],
            h[3 * o + 2] = t.color[2],
            l[o] = t.size
        }
        const u = new r;
        return u.setAttribute("position", new n(c,3)),
        u.setAttribute("color", new n(h,3)),
        u.setAttribute("size", new n(l,1)),
        u.setDrawRange(0, 0),
        u
    }
    , [d, 2, 3, .35, y, M]);
    t.useLayoutEffect( () => {
        var t;
        const a = null == (t = f.current) ? void 0 : t.geometry
          , e = p.current;
        a && a.setDrawRange(0, 0),
        e && (e.transparent = !0,
        e.opacity = 0,
        e.needsUpdate = !0),
        m.current = null
    }
    , []);
    return e(t => {
        var a;
        const e = t.clock.getElapsedTime()
          , o = null == (a = f.current) ? void 0 : a.geometry
          , r = p.current;
        if (!o || !r)
            return;
        if (null == m.current)
            return m.current = e,
            o.setDrawRange(0, 0),
            void (r.opacity = 0);
        const n = e - m.current
          , s = Math.max(0, Math.min(1, (n - u) / l))
          , i = (c = s,
        1 - Math.pow(1 - c, 3));
        var c;
        const h = o.getAttribute("position").count;
        o.setDrawRange(0, Math.max(1, Math.floor(h * i))),
        r.opacity = Math.min(i, .8)
    }
    ),
    a.jsx("points", {
        ref: f,
        geometry: w,
        children: a.jsx("pointsMaterial", {
            ref: p,
            size: .04,
            vertexColors: !0,
            transparent: !0,
            opacity: 0,
            sizeAttenuation: !0,
            blending: s,
            depthWrite: !1,
            map: g,
            alphaTest: 0
        })
    })
}
export {l as default};
