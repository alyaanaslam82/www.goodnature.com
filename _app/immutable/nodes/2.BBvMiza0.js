import {
    t as y,
    a as E
} from "../chunks/disclose-version.Cr9xuhkA.js";
import "../chunks/legacy.DuDeTpA6.js";
import {
    p as J,
    l as f,
    a as W,
    f as C,
    b as G,
    s as g,
    m as u,
    d as L,
    g as a,
    c as v,
    e as S
} from "../chunks/runtime.B7th0A2U.js";
import {
    p as O
} from "../chunks/props.C7v_At4K.js";
import {
    W as P
} from "../chunks/WebPageJsonLd.CDtd1VsT.js";
import {
    S as j
} from "../chunks/index.DoCwNyEd.js";
import {
    S as k
} from "../chunks/SvelteSEO.CgaA0hzj.js";
var w = y("<!> <!> <!>", 1);

function K(b, i) {
    J(i, !1);
    const s = u(),
        p = u();
    let n = O(i, "data", 8);
    f(() => (a(s), L(n())), () => {
        (e => g(s, e.page))(n() || {})
    }), f(() => a(s), () => {
        var e, t, r, o, l, _;
        g(p, [...(r = (t = (e = a(s)) == null ? void 0 : e.data) == null ? void 0 : t.hero_slices) != null ? r : [], ...(_ = (l = (o = a(s)) == null ? void 0 : o.data) == null ? void 0 : l.page_slices) != null ? _ : []])
    }), W();
    var c = w(),
        m = C(c);
    const x = v(() => {
        var e, t;
        return (t = (e = a(s)) == null ? void 0 : e.data) == null ? void 0 : t.og_description
    });
    k(m, {
        get description() {
            return a(x)
        },
        title: "Goodnature Commercial Juicing Equipment | Since 1976"
    });
    var d = S(m, 2);
    const h = v(() => {
        var e, t, r, o;
        return (o = (r = (t = (e = a(s)) == null ? void 0 : e.data) == null ? void 0 : t.title) == null ? void 0 : r[0]) == null ? void 0 : o.text
    });
    P(d, {
        get name() {
            return a(h)
        }
    });
    var q = S(d, 2);
    j(q, {
        get slices() {
            return a(p)
        }
    }), E(b, c), G()
}
export {
    K as component
};