import {
    v,
    w as c,
    y as u,
    z as d,
    M as n,
    A as o,
    N as g,
    O as y,
    P as b,
    Q as p,
    R
} from "./runtime.B7th0A2U.js";
import {
    b as h,
    f as w
} from "./disclose-version.Cr9xuhkA.js";

function z(_, l, O, k, A) {
    var i = _,
        r = "",
        e;
    v(() => {
        var t;
        if (r === (r = (t = l()) != null ? t : "")) {
            d && n();
            return
        }
        e !== void 0 && (u(e), e = void 0), r !== "" && (e = c(() => {
            if (d) {
                o.data;
                for (var a = n(), f = a; a !== null && (a.nodeType !== 8 || a.data !== "");) f = a, a = g(a);
                if (a === null) throw y(), b;
                h(o, f), i = p(a);
                return
            }
            var m = r + "",
                s = w(m);
            h(R(s), s.lastChild), i.before(s)
        }))
    })
}
export {
    z as h
};