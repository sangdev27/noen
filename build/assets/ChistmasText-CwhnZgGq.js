import {r as e, j as t} from "./app-CWVuyR8b.js";
import {H as s} from "./Html-BKZbDdq-.js";
const i = {
    "container-christmas-tree": "_container-christmas-tree_1ia6f_3",
    "canvas-christmas-tree": "_canvas-christmas-tree_1ia6f_21",
    "christmas-text": "_christmas-text_1ia6f_34",
    messageWrap: "_messageWrap_1ia6f_40",
    title: "_title_1ia6f_48",
    subtitle: "_subtitle_1ia6f_56",
    "christmas-text-hidden": "_christmas-text-hidden_1ia6f_69",
    "christmas-text-visible": "_christmas-text-visible_1ia6f_74",
    "text-glow-white": "_text-glow-white_1ia6f_168"
};
function n({messages: n, visible: r, fadeMs: a=300, title: o="Merry Christmas", titleColor: c, imageUrl: l, messageDelayMs: h=500}) {
    const [u,m] = e.useState(0)
      , [d,w] = e.useState(!1)
      , {screenSize: f} = ( () => {
        const [t,s] = e.useState("desktop")
          , [i,n] = e.useState(!1)
          , r = e.useCallback( () => {
            const e = window.innerWidth
              , t = window.innerHeight;
            n(e > t),
            s(e < 650 || t < 500 ? "mobile" : e < 1024 ? "tablet" : "desktop")
        }
        , []);
        return e.useEffect( () => {
            let e;
            r();
            let t = 0;
            const s = () => {
                const i = Date.now();
                i - t > 150 ? (t = i,
                r()) : e = requestAnimationFrame(s)
            }
              , i = () => {
                cancelAnimationFrame(e),
                s()
            }
            ;
            return window.addEventListener("resize", i, {
                passive: !0
            }),
            () => {
                window.removeEventListener("resize", i),
                cancelAnimationFrame(e)
            }
        }
        , [r]),
        {
            screenSize: t,
            isLandscape: i
        }
    }
    )()
      , [p,x] = e.useState(!1)
      , [g,_] = e.useState(!1)
      , y = e.useRef([])
      , b = e.useMemo( () => ({
        mobile: {
            width: 70,
            height: 70
        },
        tablet: {
            width: 80,
            height: 80
        },
        desktop: {
            width: 115,
            height: 110
        }
    }[f]), [f, 500, 400]);
    e.useMemo( () => ( (e=50) => {
        const t = 2 * Math.PI
          , s = []
          , i = e => {
            const t = Math.cos(e)
              , s = Math.sin(e);
            return {
                x: 16 * s * s * s,
                y: 13 * t - 4 * Math.cos(2 * e) - 2 * Math.cos(3 * e)
            }
        }
        ;
        let n = 1 / 0
          , r = -1 / 0
          , a = 1 / 0
          , o = -1 / 0;
        const c = [];
        for (let l = 0; l < e; l++) {
            const s = i(l / e * t);
            c.push(s),
            n = Math.min(n, s.x),
            r = Math.max(r, s.x),
            a = Math.min(a, s.y),
            o = Math.max(o, s.y)
        }
        for (const l of c) {
            const e = (l.x - n) / (r - n) * 100
              , t = (o - l.y) / (o - a) * 100;
            s.push(`${e.toFixed(1)}% ${t.toFixed(1)}%`)
        }
        return `polygon(${s.join(", ")})`
    }
    )(60), []),
    e.useEffect( () => {
        if (y.current.forEach(e => window.clearTimeout(e)),
        y.current = [],
        m(0),
        w(!1),
        x(!1),
        !r || 0 === n.length)
            return;
        const e = window.setTimeout( () => {
            x(!0)
        }
        , h);
        return y.current.push(e),
        () => {
            y.current.forEach(e => window.clearTimeout(e)),
            y.current = []
        }
    }
    , [r, n, a, h]),
    e.useEffect( () => {
        if (p && 0 !== n.length)
            return y.current.forEach(e => window.clearTimeout(e)),
            y.current = [],
            v(u),
            () => {
                y.current.forEach(e => window.clearTimeout(e)),
                y.current = []
            }
    }
    , [p, n, a]),
    e.useEffect( () => {
        g && l && setTimeout( () => {
            w(!0),
            m(0),
            setTimeout( () => {
                v(0),
                w(!1)
            }
            , a),
            _(!1)
        }
        , $(""))
    }
    , [g]);
    const $ = e => 2e3 + 30 * ((null == e ? void 0 : e.length) ?? 0)
      , v = e => {
        const t = n[e] ?? ""
          , s = $(t)
          , i = window.setTimeout( () => {
            const t = e === n.length - 1;
            if (w(!0),
            t) {
                const e = window.setTimeout( () => {
                    if (l)
                        _(!0),
                        w(!1);
                    else {
                        m(0),
                        v(0);
                        const e = window.setTimeout( () => {
                            w(!1)
                        }
                        , 50);
                        y.current.push(e)
                    }
                }
                , a);
                return void y.current.push(e)
            }
            const s = window.setTimeout( () => {
                m(e + 1),
                w(!1),
                v(e + 1)
            }
            , a);
            y.current.push(s)
        }
        , s);
        y.current.push(i)
    }
    ;
    return t.jsx(s, {
        position: ( () => {
            if ("undefined" == typeof window)
                return [3, 2.2, 0];
            const e = window.innerWidth;
            return e < 480 ? [1.6, 2.2, 0] : e < 768 ? [2.1, 2.2, 0] : e < 1024 ? [2.4, 2.2, 0] : [3, 2.8, 0]
        }
        )(),
        transform: !0,
        style: {
            background: "none",
            userSelect: "none",
            fontFamily: "Mali"
        },
        children: t.jsxs("div", {
            className: `pointer-events-none ${i["christmas-text"]} ${r ? i["christmas-text-visible"] : i["christmas-text-hidden"]}`,
            children: [t.jsx("span", {
                className: `${i.title} font-bold text-cyan-300 drop-shadow-lg`,
                style: {
                    color: `rgb(${c.r}, ${c.g}, ${c.b})`,
                    textShadow: `0 0 2px rgb(${c.r}, ${c.g}, ${c.b})`,
                    fontFamily: "Heroe"
                },
                children: o
            }), t.jsx("div", {
                className: `${i.messageWrap}`,
                style: {
                    opacity: p ? d ? 0 : 1 : 0,
                    transition: `opacity ${a}ms ease`,
                    willChange: "opacity"
                },
                children: g && l ? t.jsx("img", {
                    src: l,
                    alt: "Display image",
                    className: "mx-auto",
                    style: {
                        width: `${b.width}px`,
                        height: `${b.height}px`
                    },
                    onError: e => {
                        console.error("Failed to load image:", l),
                        e.target.style.display = "none"
                    }
                }) : t.jsx("p", {
                    className: `${i.subtitle} ${i["text-glow-white"]} text-base text-white drop-shadow-md`,
                    style: {
                        minHeight: "1.5em"
                    },
                    children: n[u] ?? ""
                })
            })]
        })
    })
}
const r = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: n
}, Symbol.toStringTag, {
    value: "Module"
}));
export {n as C, r as a, i as s};
