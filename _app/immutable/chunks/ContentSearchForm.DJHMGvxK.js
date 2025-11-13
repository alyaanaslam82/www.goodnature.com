var G = (P, o, x) => new Promise((T, k) => {
    var j = s => {
            try {
                u(x.next(s))
            } catch (p) {
                k(p)
            }
        },
        S = s => {
            try {
                u(x.throw(s))
            } catch (p) {
                k(p)
            }
        },
        u = s => s.done ? T(s.value) : Promise.resolve(s.value).then(j, S);
    u((x = x.apply(P, o)).next())
});
import {
    d as ge,
    t as d,
    e as he,
    a as v
} from "./disclose-version.Cr9xuhkA.js";
import {
    p as xe,
    k as K,
    q as _e,
    e as N,
    t as w,
    g as r,
    b as be,
    s as h,
    h as f,
    r as c,
    u as ye
} from "./runtime.B7th0A2U.js";
import {
    s as z
} from "./render.DCpC4m_T.js";
import {
    p as M,
    i as I
} from "./props.C7v_At4K.js";
import {
    e as Ne,
    i as we
} from "./each.Dhp-fwEL.js";
import {
    a as Ie
} from "./actions.CAd6_Ft5.js";
import {
    r as ke,
    a as V,
    b as _,
    c as Se
} from "./attributes.CecWNX5Z.js";
import {
    b as Ce
} from "./input.zq82Y1YP.js";
import {
    a as qe,
    n as Fe
} from "./index.BfTBSgo5.js";
import {
    b as ze
} from "./index.BfzkwSOg.js";
import {
    I as Pe
} from "./Icon.iCcfpOYl.js";
import {
    c as Te
} from "./clickOutside.DCPbtIjI.js";
var je = d('<img loading="eager" class="mini-search-result-image">'),
    Oe = d('<div class="mini-search-result-image"></div>'),
    Re = d('<p class="text-sm line-clamp-2"> </p>'),
    Ue = d('<p class="text-sm line-clamp-2"> </p>'),
    Xe = d('<li><a class="mini-search-result"><!> <div><p class="text-white font-medium"> </p> <!></div></a></li>'),
    De = d('<ul class="flex flex-col divide-y-1 space-y-2"></ul>'),
    Ge = d('<div class="flex flex-col items-start justify-center h-20 pl-16"><p class="text-white">No results found</p> <p class="text-gray-500 text-sm">Please try another search</p></div>'),
    Ke = d('<div><form><label for="recipe-search" class="sr-only"> </label> <!> <input class="input text-lg absolute inset-x-6 inset-y-0 !bg-transparent flex-1 pl-12 border-none outline-none" type="search" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" name="recipe-search" id="recipe-search" required></form> <div><!></div></div>');

function ea(P, o) {
    xe(o, !0);
    const x = qe("K6FXXVICF6", "bb1b7f655599b51d4e2610afb4a07fb5");
    let T = M(o, "filterString", 3, ""),
        k = M(o, "className", 3, ""),
        j = M(o, "formClassName", 3, ""),
        S, u = K(_e([])),
        s = K(""),
        p = K(!1);
    const J = () => {
            clearTimeout(S), r(s) ? (h(p, !0), S = setTimeout(() => G(this, null, function*() {
                yield Y(), h(p, !1)
            }), 250)) : h(u, [], !0)
        },
        L = () => {
            h(u, [], !0), h(s, "")
        },
        Q = (e, a, i) => o.algoliaIndexName === "knowledge" || o.algoliaIndexName === "products" ? e : i || a,
        W = (e, a) => {
            var i, t, g;
            if (e) return e;
            if (a != null && a.length) {
                if (typeof a[0] == "string") return a[0];
                if ((t = (i = a[0]) == null ? void 0 : i.file) != null && t.url) return (g = a[0].file) == null ? void 0 : g.url
            }
        },
        Y = () => G(this, null, function*() {
            const {
                results: e
            } = yield x.search({
                requests: [{
                    indexName: o.algoliaIndexName,
                    query: r(s),
                    hitsPerPage: 10,
                    filters: T()
                }]
            });
            h(u, Fe(e), !0)
        });
    var C = Ke(),
        b = f(C),
        O = f(b),
        Z = f(O);
    c(O);
    var A = N(O, 2);
    Pe(A, {
        icon: ze,
        class: "w-6 h-6 text-light-green ml-6"
    });
    var q = N(A, 2);
    ke(q), q.__input = J, c(b);
    var F = N(b, 2),
        $ = f(F); {
        var ee = e => {
                var a = De();
                Ne(a, 21, () => r(u), we, (i, t) => {
                    let g = () => r(t).title,
                        te = () => r(t).name,
                        re = () => r(t).excerpt,
                        le = () => r(t).images,
                        se = () => r(t).category,
                        ie = () => r(t).image,
                        oe = () => r(t).description,
                        ne = () => r(t).url,
                        R = () => r(t).category_names;
                    var U = Xe();
                    const B = ye(() => W(ie(), le()));
                    var X = f(U),
                        E = f(X); {
                        var ce = n => {
                                var l = je();
                                _(l, "width", 96), _(l, "height", 96), w(() => {
                                    _(l, "src", r(B)), _(l, "alt", g())
                                }), v(n, l)
                            },
                            fe = (n, l) => {
                                {
                                    var y = m => {
                                        var pe = Oe();
                                        v(m, pe)
                                    };
                                    I(n, m => {
                                        o.algoliaIndexName !== "knowledge" && m(y)
                                    }, l)
                                }
                            };
                        I(E, n => {
                            r(B) ? n(ce) : n(fe, !1)
                        })
                    }
                    var H = N(E, 2),
                        D = f(H),
                        ue = f(D, !0);
                    c(D);
                    var me = N(D, 2); {
                        var ve = n => {
                                var l = Re(),
                                    y = f(l, !0);
                                c(l), w(m => z(y, m), [() => R().filter(m => !m.includes("Featured")).join(", ")]), v(n, l)
                            },
                            de = n => {
                                var l = Ue(),
                                    y = f(l, !0);
                                c(l), w(m => z(y, m), [() => Q(se() || "", oe() || "", re() || "")]), v(n, l)
                            };
                        I(me, n => {
                            var l;
                            R() && ((l = R()) == null ? void 0 : l.length) > 0 ? n(ve) : n(de, !1)
                        })
                    }
                    c(H), c(X), c(U), w(() => {
                        _(X, "href", ne()), z(ue, g() || te())
                    }), v(i, U)
                }), c(a), v(e, a)
            },
            ae = (e, a) => {
                {
                    var i = t => {
                        var g = Ge();
                        v(t, g)
                    };
                    I(e, t => {
                        r(s).length > 0 && !r(p) && t(i)
                    }, a)
                }
            };
        I($, e => {
            r(u).length > 0 ? e(ee) : e(ae, !1)
        })
    }
    c(F), Ie(F, (e, a) => {
        var i;
        return (i = Te) == null ? void 0 : i(e, a)
    }, () => L), c(C), w(() => {
        var e, a, i, t;
        V(C, 1, `relative w-full max-w-screen-sm ${(e=k())!=null?e:""}`), V(b, 1, `relative rounded-full h-16 bg-black/20 flex items-center backdrop-blur-md ${(a=j())!=null?a:""}`), z(Z, `Search ${(i=o.algoliaIndexName==="articles"?"blog articles":o.algoliaIndexName)!=null?i:""}`), _(q, "placeholder", `Search ${(t=o.algoliaIndexName)!=null?t:""}...`), V(F, 1, Se([r(s).length > 0 && "is-open", "mini-search-results", "z-20"]))
    }), he("submit", b, e => (e.preventDefault(), !1)), Ce(q, () => r(s), e => h(s, e)), v(P, C), be()
}
ge(["input"]);
export {
    ea as C
};