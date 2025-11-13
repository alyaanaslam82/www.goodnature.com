import {
    c as k,
    a as b,
    n as q
} from "./disclose-version.Cr9xuhkA.js";
import {
    i as j
} from "./legacy.DuDeTpA6.js";
import {
    p as z,
    l as A,
    a as C,
    f as D,
    b as E,
    s as o,
    m as c,
    d as F,
    g as a,
    h as G,
    r as H,
    t as J,
    c as K
} from "./runtime.B7th0A2U.js";
import {
    p as _,
    i as L
} from "./props.C7v_At4K.js";
import {
    a as M,
    b as f
} from "./attributes.CecWNX5Z.js";
var O = q('<svg focusable="false" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path></path></svg>');

function U(v, i) {
    z(i, !1);
    const r = c(),
        n = c(),
        m = c(),
        p = c(),
        s = c();
    let w = _(i, "class", 8, ""),
        l = _(i, "icon", 8),
        u = _(i, "aria_label", 24, () => `icon_${l().iconName}`),
        x = _(i, "id", 24, () => `icon_${l().iconName}`);
    A(() => (a(r), a(n), a(m), a(p), a(s), F(l())), () => {
        (e => (o(r, e.icon[0]), o(n, e.icon[1]), o(m, e.icon[2]), o(p, e.icon[3]), o(s, e.icon[4])))(l() || {
            icon: []
        })
    }), C(), j();
    var d = k(),
        y = D(d); {
        var N = e => {
            var t = O(),
                B = G(t);
            H(t), J(I => {
                var g, h;
                M(t, 0, `icon ${w()}`), f(t, "viewBox", `0 0 ${(g=a(r))!=null?g:0} ${(h=a(n))!=null?h:0}`), f(t, "id", x()), f(t, "aria-label", u()), f(B, "d", I)
            }, [() => typeof a(s) == "string" && a(s) ? a(s) : ""], K), b(e, t)
        };
        L(y, e => {
            a(r) && a(n) && a(s) && e(N)
        })
    }
    b(v, d), E()
}
export {
    U as I
};