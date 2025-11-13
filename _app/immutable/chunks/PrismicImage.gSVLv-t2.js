import {
    c as L,
    a as b,
    t as P,
    e as j,
    r as k
} from "./disclose-version.Cr9xuhkA.js";
import {
    p as O,
    f as Q,
    b as W,
    g as t,
    u as m,
    t as A
} from "./runtime.B7th0A2U.js";
import {
    p as i,
    i as B
} from "./props.C7v_At4K.js";
import {
    a as C,
    c as D,
    b as r
} from "./attributes.CecWNX5Z.js";
import {
    b as E
} from "./this.BDAdN7ay.js";
import {
    a as F
} from "./asImageWidthSrcSet.DYzrdXAy.js";
var G = P("<img>");

function T(v, a) {
    O(a, !0);
    let g = i(a, "component", 15, null),
        _ = i(a, "onLoad", 3, s => {}),
        y = i(a, "width", 3, null),
        z = i(a, "height", 3, null),
        d = i(a, "maxImageSize", 3, 2560),
        S = i(a, "draggable", 3, !0),
        n = i(a, "quality", 3, 75),
        w = i(a, "priority", 3, !1),
        o = m(() => [...[512, 768, 1024, 1920, 2560].filter(s => s <= d()), d()]);
    const f = m(() => t(o)[t(o).length - 1]);
    let x = m(() => `(min-width: ${t(f)}px) ${t(f)}px, 100vw`),
        p = m(() => typeof n() != "number" ? 75 : n() > 100 ? 100 : n() < 1 ? 1 : n()),
        c = m(() => F(a.image, {
            widths: t(o),
            q: t(p)
        }));
    var h = L(),
        I = Q(h); {
        var q = s => {
            var e = G();
            E(e, l => g(l), () => g()), A(() => {
                var l, u;
                C(e, 1, D(a.class)), r(e, "src", (l = t(c)) == null ? void 0 : l.src), r(e, "alt", a.alt), r(e, "width", y()), r(e, "height", z()), r(e, "sizes", t(x)), r(e, "srcset", (u = t(c)) == null ? void 0 : u.srcset), r(e, "draggable", S()), r(e, "loading", w() ? "eager" : "lazy")
            }), j("load", e, l => _()(l)), k(e), b(s, e)
        };
        B(I, s => {
            var e;
            (e = t(c)) != null && e.src && s(q)
        })
    }
    b(v, h), W()
}
export {
    T as P
};