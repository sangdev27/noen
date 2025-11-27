import {r as e, j as t} from "./app-CWVuyR8b.js";
/* empty css                    */
const s = ({messageContent: s, onClose: l, onOpen: n, onEndOpen: a, onBtnClick: o}) => {
    const [r,i] = e.useState(!1)
      , [c,m] = e.useState(!1)
      , [u,d] = e.useState(3)
      , [x,p] = e.useState(2)
      , [g,f] = e.useState(!1)
      , j = e => {
        e.preventDefault(),
        e.stopPropagation(),
        g || (m(!0),
        f(!0),
        setTimeout( () => {
            d(3),
            p(2),
            l && l(e)
        }
        , 205),
        setTimeout( () => {
            i(!1),
            m(!1),
            f(!1)
        }
        , 750))
    }
    ;
    return t.jsxs("div", {
        className: "perspective relative h-full w-full",
        children: [t.jsx("div", {
            className: "tile out rounded-lg " + (r && !c ? "openingLeft leftOpen" : c ? "closingLeft" : ""),
            style: {
                left: 0,
                zIndex: u,
                overflow: "hidden",
                backgroundColor: "#AC100E",
                border: "none"
            },
            onClick: e => {
                e.preventDefault(),
                e.stopPropagation(),
                g || (f(!0),
                i(!0),
                n && n(e),
                setTimeout( () => {
                    m(!1),
                    d(2),
                    p(3),
                    a && a(e),
                    f(!1)
                }
                , 300))
            }
            ,
            children: t.jsx("img", {
                src: "/images/xmas/xmas-cover.jpg",
                style: {
                    objectFit: "cover",
                    objectPosition: "center"
                },
                className: "scale-175",
                alt: ""
            })
        }), t.jsx("div", {
            className: `tile rounded-lg in-left left-0 ${r && !c ? "openingLeft leftOpen" : c ? "closingLeft" : ""} `,
            style: {
                zIndex: x
            },
            onClick: j,
            children: t.jsx("div", {
                className: "inner-content",
                children: t.jsx("img", {
                    src: "/images/xmas/xmas-inner.jpg",
                    alt: ""
                })
            })
        }), t.jsx("div", {
            className: "tile in-bottom rounded-lg",
            children: t.jsxs("div", {
                className: "flex h-full w-full flex-col p-2 leading-relaxed lg:px-4 lg:py-8 text-md text-left lg:text-xl justify-between",
                children: [t.jsx("p", {
                    className: "m-0 leading-[1.5] flex-1",
                    style: {
                        wordWrap: "break-word",
                        overflowY: "auto"
                    },
                    onClick: j,
                    children: s
                }), t.jsx("button", {
                    className: "border-0 cursor-pointer",
                    onClick: o,
                    children: "Click me"
                })]
            })
        })]
    })
}
  , l = ({message: l, onBtnClick: n}) => {
    const [a,o] = e.useState(!1)
      , [r,i] = e.useState("translate-x-[-49%]")
      , [c,m] = e.useState(!1);
    e.useRef(null),
    e.useEffect( () => {
        a ? (m(!0),
        setTimeout( () => {
            i("translate-x-0")
        }
        , 300),
        setTimeout( () => {
            i("translate-x-0")
        }
        , 900),
        setTimeout( () => {
            i("translate-x-0")
        }
        , 1200),
        m(!1)) : (m(!0),
        i("translate-x-[-49%]"),
        setTimeout( () => {
            i("translate-x-[-49%]")
        }
        , 300),
        setTimeout( () => {
            i("translate-x-[-49%]")
        }
        , 900),
        setTimeout( () => {
            m(!1)
        }
        , 1500))
    }
    , [a]);
    const u = t.jsx("div", {
        className: "col-span-12 row-span-3 row-start-4 mx-auto flex items-center justify-center sm:col-span-4 sm:col-start-5",
        children: t.jsx("label", {
            htmlFor: "check",
            className: "absolute cursor-pointer",
            children: t.jsx("div", {
                className: `fly-in absolute rounded-lg flex h-[280px] w-[180px] items-center justify-center bg-white transition-transform duration-700 ease-in-out md:ml-1 lg:h-[500px] lg:w-[300px] -translate-y-30 lg:-translate-y-50 rotate-[-5deg] ${r} ${a ? "cursor-pointer hover:shadow-lg" : ""}`,
                children: t.jsx(s, {
                    messageContent: l,
                    onOpen: () => o(!0),
                    onEndOpen: e => {
                        setTimeout( () => {
                            i("translate-x-0"),
                            m(!1)
                        }
                        , 400)
                    }
                    ,
                    onBtnClick: n,
                    onClose: e => {
                        a && !c && (e => {
                            null == e || e.preventDefault(),
                            null == e || e.stopPropagation(),
                            c || (a ? setTimeout( () => {
                                o(!1)
                            }
                            , 650) : o(!0))
                        }
                        )(e)
                    }
                })
            })
        })
    });
    return t.jsx("div", {
        className: "min-h-screen",
        style: {
            backgroundImage: 'url("/images/xmas/xmas-bg.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            fontFamily: "SVN-ComicSansMS"
        },
        children: t.jsx("div", {
            className: "relative flex min-h-[90vh] w-full items-center justify-center px-2 text-gray-900 sm:px-4 lg:flex",
            children: u
        })
    })
}
;
export {l as default};
