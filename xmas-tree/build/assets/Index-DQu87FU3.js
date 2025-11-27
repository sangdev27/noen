import {r as e, j as t} from "./app-CWVuyR8b.js";
import {C as s} from "./react-three-fiber.esm-DlHPGXYr.js";
import {O as r, d as o, w as n} from "./index-D3ml-sAb.js";
import i from "./background-stars-CufnPe8a.js";
import a from "./ChristmasTree3D-DGDSSlYG.js";
import m from "./fireworks-C495ggEb.js";
import {s as l, C as c} from "./ChistmasText-CwhnZgGq.js";
import {d} from "./OpenSSLDecryptionService-xlYgbWpP.js";
import u from "./flipper-card-ChPpbWCX.js";
import {E as p} from "./Environment-DhJCSHg6.js";
import "./events-dc44c1b8.esm-Dn7KqyVj.js";
import "./three.module-uFtjsCt7.js";
import "./extends-DPdBf6DS.js";
import "./ground-rings-C48g9UJN.js";
import "./Html-BKZbDdq-.js";
/* empty css                    */
const f = e => {
    if ("undefined" == typeof window)
        return 0;
    const t = getComputedStyle(document.documentElement).getPropertyValue(`env(safe-area-inset-${e})`);
    if (!t)
        return 0;
    const s = parseFloat(t);
    return isNaN(s) ? 0 : s
}
;
function g({encryptedData: g}) {
    const h = e.useRef(null)
      , j = e.useRef(null)
      , v = e.useRef({
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    })
      , [x,w] = e.useState(!1)
      , [y,E] = e.useState(!1)
      , [b,L] = e.useState(!1)
      , [S,C] = e.useState([])
      , [k,$] = e.useState("")
      , [D,T] = e.useState({
        r: 0,
        g: 255,
        b: 255
    })
      , [N,P] = e.useState({
        r: 30,
        g: 144,
        b: 255
    })
      , [R,A] = e.useState("")
      , [F,I] = e.useState("")
      , [M,z] = e.useState("")
      , B = e.useRef(null);
    e.useEffect( () => {
        const e = setTimeout( () => {
            w(!0),
            E(!0)
        }
        , 500);
        return () => clearTimeout(e)
    }
    , []),
    e.useEffect( () => {
        const e = () => {
            const e = f("top")
              , t = f("bottom")
              , s = f("left")
              , r = f("right");
            if (v.current = {
                top: e,
                bottom: t,
                left: s,
                right: r
            },
            j.current) {
                const o = j.current;
                o.style.top = -e + "px",
                o.style.left = -s + "px",
                o.style.right = -r + "px",
                o.style.bottom = -t + "px",
                o.style.width = `calc(100vw + ${s + r}px)`,
                o.style.height = `calc(100vh + ${e + t}px)`
            }
        }
        ;
        return e(),
        window.addEventListener("resize", e),
        () => window.removeEventListener("resize", e)
    }
    , []),
    e.useEffect( () => {
        if (R) {
            const e = B.current;
            if (e) {
                const t = () => {
                    e.paused && e.play().then( () => {
                        e.muted = !1
                    }
                    ).catch(e => {}
                    )
                }
                ;
                t();
                const s = () => {
                    t(),
                    document.removeEventListener("click", s)
                }
                ;
                document.addEventListener("click", s);
                const r = () => t();
                window.addEventListener("wheel", r);
                const o = () => t();
                return window.addEventListener("mousedown", o),
                window.addEventListener("mousemove", o),
                window.addEventListener("touchstart", o),
                () => {
                    document.removeEventListener("click", s),
                    window.removeEventListener("wheel", r),
                    window.removeEventListener("mousedown", o),
                    window.removeEventListener("mousemove", o),
                    window.removeEventListener("touchstart", o)
                }
            }
        }
    }
    , [R]),
    e.useEffect( () => {
        if (!g)
            return;
        const e = d(g);
        e && (e.messages && Array.isArray(e.messages) && C(e.messages),
        e.title && $(e.title),
        e.textColor && T(e.textColor),
        e.treeColor && P(e.treeColor),
        e.music && A(`/proxy-drive/${e.music}`),
        e.finalImage && I(`/proxy-drive/${e.finalImage}`),
        e.message && z(e.message))
    }
    , [g]);
    return t.jsxs(t.Fragment, {
        children: ["" !== R && t.jsx("audio", {
            ref: B,
            loop: !0,
            controls: !0,
            hidden: !0,
            children: t.jsx("source", {
                src: R,
                type: "audio/mpeg"
            })
        }), t.jsx("div", {
            ref: j,
            className: `relative bg-black ${l["container-christmas-tree"]}`,
            style: {
                backgroundColor: "#000",
                position: "fixed",
                margin: 0,
                padding: 0
            },
            children: b ? t.jsx(s, {
                className: l["canvas-christmas-tree"],
                camera: {
                    position: [5, 2, 7],
                    fov: 50
                },
                gl: {
                    antialias: !0,
                    alpha: !0
                },
                children: t.jsxs(e.Suspense, {
                    fallback: null,
                    children: [t.jsx("ambientLight", {
                        intensity: .3
                    }), t.jsx("pointLight", {
                        position: [0, 5, 0],
                        intensity: 2
                    }), t.jsx("pointLight", {
                        position: [5, 3, 5],
                        intensity: 1,
                        color: "#4a90e2"
                    }), t.jsx(p, {
                        preset: "night"
                    }), t.jsx(i, {}), t.jsx(a, {
                        treeColor: N
                    }), t.jsx(m, {
                        propColor: "#fff"
                    }), t.jsx(c, {
                        titleColor: D,
                        title: k,
                        messages: S,
                        visible: x,
                        imageUrl: F,
                        messageDelayMs: 1700,
                        fadeMs: 300
                    }), t.jsx(r, {
                        ref: h,
                        enableZoom: !0,
                        enablePan: !1,
                        minDistance: 6,
                        maxDistance: 12,
                        maxPolarAngle: Math.PI / 2 + .3,
                        target: [1, 1, 0]
                    }), t.jsx(o, {
                        children: t.jsx(n, {
                            luminanceThreshold: .8,
                            luminanceSmoothing: .9,
                            intensity: 1.2,
                            mipmapBlur: !0
                        })
                    })]
                })
            }) : t.jsx(u, {
                message: M,
                onBtnClick: () => {
                    L(!0)
                }
            })
        })]
    })
}
export {g as default};
