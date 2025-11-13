import {
    c as oe,
    a as v,
    t as L,
    e as le,
    d as fe,
    q as de
} from "./disclose-version.Cr9xuhkA.js";
import {
    p as te,
    s as U,
    m as ie,
    f as ce,
    b as re,
    h as b,
    r as d,
    e as T,
    t as q,
    g as w,
    c as _e,
    x as ge,
    u as Z
} from "./runtime.B7th0A2U.js";
import {
    s as ae
} from "./render.DCpC4m_T.js";
import {
    p as r,
    i as m
} from "./props.C7v_At4K.js";
import {
    e as be,
    i as ye
} from "./each.Dhp-fwEL.js";
import {
    h as p
} from "./html.C9SqvzYP.js";
import {
    a as W,
    b as E,
    c as ue,
    s as ne
} from "./attributes.CecWNX5Z.js";
import {
    P as Y
} from "./PlainText.jQB6_nhn.js";
import {
    i as he
} from "./legacy.DuDeTpA6.js";
import {
    f as $
} from "./index.BfzkwSOg.js";
import {
    I as ee
} from "./Icon.iCcfpOYl.js";
import {
    l as me
} from "./link-resolver.A6NvoPr8.js";
import {
    l as ve
} from "./isFilled.GM-Jo1Zy.js";
import {
    s as ke
} from "./snippet.DcSGrBgi.js";
import {
    P as se
} from "./PrismicImage.gSVLv-t2.js";
var xe = L('<button type="submit"><span><!></span> <!></button>'),
    we = L("<span><!> <!></span>"),
    Le = L("<span><!></span>"),
    Ce = L("<a><!> <!></a>");

function Te(F, e) {
    var K, M;
    te(e, !1);
    let C = r(e, "link", 8, void 0),
        I = r(e, "url", 8, void 0),
        y = r(e, "icon", 8, !0),
        h = r(e, "label", 12, "Read more"),
        R = r(e, "newTab", 12, !1),
        S = r(e, "as", 8, "Link"),
        O = r(e, "color", 8, "Automatic"),
        H = r(e, "type", 8, "Tertiary"),
        D = r(e, "iconColor", 8, "Automatic"),
        _ = r(e, "onClick", 8, void 0),
        J = r(e, "className", 8, "");
    ["click here", "click this", "go", "here", "this", "start", "right here", "more", "learn more"].includes((K = h()) == null ? void 0 : K.toLowerCase()) && h(((M = h()) == null ? void 0 : M.concat('<span class="sr-only"> to follow this link</span>')) || ""), ve(C()) && "target" in C() && C().target && R(!0);
    let k = ie("button-primary");
    O() === "Green" ? U(k, "button-green") : O() === "Berry" ? U(k, "button-berry") : H() === "Primary" ? U(k, "button-primary") : H() === "Secondary" ? U(k, "button-secondary") : H() === "Tertiary" && U(k, "button-tertiary");
    let P = ie("fill-current");
    D() === "Automatic" ? U(P, "fill-current") : D() === "Green" ? U(P, "fill-light-green") : D() === "Berry" && U(P, "fill-berry"), he();
    var Q = oe(),
        i = ce(Q); {
        var l = A => {
                var B = xe(),
                    N = b(B),
                    s = b(N);
                p(s, h), d(N);
                var o = T(N, 2); {
                    var x = c => {
                        ee(c, {
                            icon: $,
                            get class() {
                                var f;
                                return `${(f=w(P))!=null?f:""} icon w-4 h-4`
                            }
                        })
                    };
                    m(o, c => {
                        y() && c(x)
                    })
                }
                d(B), q(() => {
                    var c;
                    return W(B, 1, `button ${(c=w(k))!=null?c:""}`)
                }), le("click", B, function(...c) {
                    var f;
                    (f = _()) == null || f.apply(this, c)
                }), v(A, B)
            },
            j = (A, B) => {
                {
                    var N = o => {
                            var x = we(),
                                c = b(x);
                            p(c, h);
                            var f = T(c, 2); {
                                var a = t => {
                                    ee(t, {
                                        icon: $,
                                        get class() {
                                            var n;
                                            return `${(n=w(P))!=null?n:""} icon w-4 h-4`
                                        }
                                    })
                                };
                                m(f, t => {
                                    y() && t(a)
                                })
                            }
                            d(x), q(() => {
                                var t, n;
                                return W(x, 1, `button ${(t=w(k))!=null?t:""} ${(n=J())!=null?n:""}`)
                            }), v(o, x)
                        },
                        s = (o, x) => {
                            {
                                var c = f => {
                                    var a = Ce(),
                                        t = b(a); {
                                        var n = u => {
                                            var g = Le(),
                                                X = b(g);
                                            p(X, h), d(g), v(u, g)
                                        };
                                        m(t, u => {
                                            h() && u(n)
                                        })
                                    }
                                    var G = T(t, 2); {
                                        var z = u => {
                                            ee(u, {
                                                icon: $,
                                                get class() {
                                                    var g;
                                                    return `${(g=w(P))!=null?g:""} icon w-4 h-4`
                                                }
                                            })
                                        };
                                        m(G, u => {
                                            y() && u(z)
                                        })
                                    }
                                    d(a), q(u => {
                                        var g, X;
                                        E(a, "href", u), W(a, 1, `button ${(g=w(k))!=null?g:""} ${(X=J())!=null?X:""}`), E(a, "target", R() ? "_blank" : null), E(a, "rel", R() ? "noopener noreferrer" : null)
                                    }, [() => C() ? me(C()) : I()], _e), le("click", a, function(...u) {
                                        var g;
                                        (g = _()) == null || g.apply(this, u)
                                    }), v(f, a)
                                };
                                m(o, f => {
                                    S() === "Link" && (C() || I()) && f(c)
                                }, x)
                            }
                        };
                    m(A, o => {
                        S() === "Dummy" ? o(N) : o(s, !1)
                    }, B)
                }
            };
        m(i, A => {
            S() === "Button" ? A(l) : A(j, !1)
        })
    }
    v(F, Q), re()
}
var qe = L('<span class="sr-only"> </span>'),
    Ae = L("<a><!> <!> <!></a>");

function Be(F, e) {
    te(e, !0);
    let C = r(e, "url", 3, "/"),
        I = r(e, "newTab", 3, !1),
        y = r(e, "label", 3, ""),
        h = r(e, "screenReaderLabel", 3, ""),
        R = r(e, "ariaLabel", 3, null),
        S = r(e, "queryString", 3, ""),
        O = r(e, "onClick", 3, void 0),
        H = r(e, "class", 3, ""),
        D = Z(() => ve(e.prismicLink) && e.prismicLink.link_type === "Web" && e.prismicLink.target);
    var _ = Ae();
    _.__click = function(...i) {
        var l;
        (l = O()) == null || l.apply(this, i)
    };
    var J = b(_); {
        var V = i => {
            var l = qe(),
                j = b(l, !0);
            d(l), q(() => ae(j, h())), v(i, l)
        };
        m(J, i => {
            h() && i(V)
        })
    }
    var k = T(J, 2); {
        var P = i => {
            var l = de();
            q(() => ae(l, y())), v(i, l)
        };
        m(k, i => {
            y() && i(P)
        })
    }
    var Q = T(k, 2);
    ke(Q, () => {
        var i;
        return (i = e.children) != null ? i : ge
    }), d(_), q(i => {
        E(_, "href", i), W(_, 1, ue(H())), E(_, "target", I() || w(D) ? "_blank" : null), E(_, "rel", I() || w(D) ? "noopener noreferrer" : null), E(_, "aria-label", R() ? R() : void 0)
    }, [() => e.prismicLink ? `${me(e.prismicLink)}${S()}` : `${C()}${S()}`]), v(F, _), re()
}
fe(["click"]);

function Pe(F) {
    return F.toLowerCase().replace(/\s/g, "-").replace("&", "and")
}
var je = L("<div><!></div>"),
    Ne = L('<a class="button button-tertiary recipe-tag-badge" data-sveltekit-noscroll=""><!></a>'),
    Re = L('<div class="flex flex-items flex-wrap gap-2 mt-5 relative z-10"></div>'),
    Ie = L('<span class="sr-only"> </span>'),
    Se = L("<div><div><!> <!> <!> <!></div>  <!>  <!></div>"),
    De = L("<div><!></div>"),
    Ge = L("<div><!> <!> <!></div>");

function pe(F, e) {
    te(e, !0);
    let C = r(e, "className", 3, ""),
        I = r(e, "image_treatment", 3, !0),
        y = r(e, "image_max_width", 3, null),
        h = r(e, "image_square", 3, !1),
        R = r(e, "tags", 3, !1),
        S = r(e, "line_clamp", 3, !1),
        O = r(e, "center_card_titles", 3, !1),
        H = r(e, "cta_type", 3, "Tertiary"),
        D = r(e, "cta_color", 3, "Automatic"),
        _ = r(e, "cta_icon", 3, !0),
        J = r(e, "cta_icon_color", 3, "Automatic");
    var V = oe(),
        k = ce(V); {
        var P = i => {
                var l = Se(),
                    j = b(l),
                    K = b(j); {
                    var M = a => {
                        var t = je();
                        let n;
                        var G = b(t);
                        const z = Z(() => {
                            var u;
                            return ((u = e.image) == null ? void 0 : u.alt) || ""
                        });
                        se(G, {
                            get image() {
                                return e.image
                            },
                            get alt() {
                                return w(z)
                            },
                            class: "h-full w-full object-center object-cover "
                        }), d(t), q(u => {
                            n = W(t, 1, ue(["card-image mb-8", h() ? "aspect-square" : !y() && "aspect-[3/1.6]", C()]), null, n, u), ne(t, y() ? `max-width: ${y()}px` : "")
                        }, [() => ({
                            "custom-filter": I()
                        })]), v(a, t)
                    };
                    m(K, a => {
                        var t;
                        (t = e.image) != null && t.url && a(M)
                    })
                }
                var A = T(K, 2); {
                    var B = a => {
                        const t = Z(() => O() && "text-center");
                        Y(a, {
                            as: "h3",
                            get class() {
                                var n;
                                return `text-3xl title ${(n=w(t))!=null?n:""}`
                            },
                            get content() {
                                return e.title
                            }
                        })
                    };
                    m(A, a => {
                        e.title && a(B)
                    })
                }
                var N = T(A, 2); {
                    var s = a => {
                        const t = Z(() => S() && "line-clamp-3");
                        Y(a, {
                            get content() {
                                return e.subtitle
                            },
                            get class() {
                                var n;
                                return `leading-relaxed max-md:text-sm text-gray-500 mt-6 ${(n=w(t))!=null?n:""}`
                            }
                        })
                    };
                    m(N, a => {
                        e.subtitle && a(s)
                    })
                }
                var o = T(N, 2); {
                    var x = a => {
                        var t = Re();
                        be(t, 21, R, ye, (n, G) => {
                            var z = Ne(),
                                u = b(z);
                            p(u, () => w(G)), d(z), q(g => E(z, "href", g), [() => `/recipes/page/1?recipe_tags=${Pe(w(G))}`]), v(n, z)
                        }), d(t), v(a, t)
                    };
                    m(o, a => {
                        R() && a(x)
                    })
                }
                d(j);
                var c = T(j, 2);
                Be(c, {
                    class: "card-overlay-link",
                    get prismicLink() {
                        return e.cta_link
                    },
                    children: (a, t) => {
                        var n = Ie(),
                            G = b(n, !0);
                        d(n), q(() => ae(G, e.title)), v(a, n)
                    },
                    $$slots: {
                        default: !0
                    }
                });
                var f = T(c, 2);
                Te(f, {
                    as: "Dummy",
                    get label() {
                        return e.cta_label
                    },
                    get type() {
                        return H()
                    },
                    get icon() {
                        return _()
                    },
                    get color() {
                        return D()
                    },
                    get iconColor() {
                        return J()
                    },
                    className: "-ml-1 mt-8 self-start justify-self-end pointer-events-none"
                }), d(l), q(() => {
                    var a;
                    return W(l, 1, `card relative justify-between ${(a=C())!=null?a:""}`)
                }), v(i, l)
            },
            Q = i => {
                var l = Ge(),
                    j = b(l); {
                    var K = s => {
                        var o = De();
                        let x;
                        var c = b(o);
                        se(c, {
                            get image() {
                                return e.image
                            },
                            alt: "image?.alt",
                            class: "w-full object-center object-cover"
                        }), d(o), q(f => {
                            var a, t;
                            x = W(o, 1, `relative w-full h-auto overflow-hidden mb-10 ${(a=h()?"aspect-square":!y()&&"aspect-[3/1.6]")!=null?a:""}`, null, x, f), ne(o, `max-width: ${(t=y()?`${y()}px`:"")!=null?t:""}`)
                        }, [() => ({
                            "custom-filter": I()
                        })]), v(s, o)
                    };
                    m(j, s => {
                        var o;
                        (o = e.image) != null && o.url && s(K)
                    })
                }
                var M = T(j, 2); {
                    var A = s => {
                        Y(s, {
                            as: "h3",
                            class: "text-3xl title mb-7",
                            get content() {
                                return e.title
                            }
                        })
                    };
                    m(M, s => {
                        e.title && s(A)
                    })
                }
                var B = T(M, 2); {
                    var N = s => {
                        Y(s, {
                            get content() {
                                return e.subtitle
                            },
                            class: "leading-relaxed text-gray-500 mb-8 pr-5"
                        })
                    };
                    m(B, s => {
                        e.subtitle && s(N)
                    })
                }
                d(l), q(() => {
                    var s;
                    return W(l, 1, `card ${(s=C())!=null?s:""}`)
                }), v(i, l)
            };
        m(k, i => {
            var l;
            ((l = e.cta_link) == null ? void 0 : l.link_type) !== "Any" ? i(P): i(Q, !1)
        })
    }
    v(F, V), re()
}
export {
    Te as B, pe as C, Be as L, Pe as g
};