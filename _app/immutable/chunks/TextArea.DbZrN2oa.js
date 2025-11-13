import {
    t as g,
    o as h,
    a as w
} from "./disclose-version.Cr9xuhkA.js";
import {
    p as y,
    h as c,
    r as f,
    e as q,
    t as D,
    b as V
} from "./runtime.B7th0A2U.js";
import {
    s as C
} from "./render.DCpC4m_T.js";
import {
    b as r,
    a as d
} from "./attributes.CecWNX5Z.js";
import {
    b as F
} from "./input.zq82Y1YP.js";
import {
    p as l
} from "./props.C7v_At4K.js";

function E(u) {
    const e = new FormData(u.target),
        t = {};
    for (const [s, o] of e.entries()) {
        const m = t[s];
        m ? t[s] = `${m}, ${o}` : t[s] = o
    }
    return t
}
var T = g("<label><span> </span> <textarea></textarea></label>");

function G(u, e) {
    y(e, !0);
    let t = l(e, "autocomplete", 3, ""),
        s = l(e, "required", 3, !0),
        o = l(e, "labelVisibility", 3, "visible"),
        m = l(e, "wrapperClasses", 3, ""),
        v = l(e, "value", 15, ""),
        p = l(e, "rows", 3, 5);
    var i = T(),
        n = c(i);
    let b;
    var x = c(n, !0);
    f(n);
    var a = q(n, 2);
    h(a), f(i), D(_ => {
        r(i, "for", e.id), d(i, 1, `flex flex-col gap-y-2 label-border-b ${m()}`), b = d(n, 1, "input-label", null, b, _), C(x, e.label), r(a, "id", e.id), r(a, "placeholder", e.placeholder), r(a, "name", e.name), r(a, "autocomplete", t()), r(a, "rows", p()), a.required = s()
    }, [() => ({
        "sr-only": o() === "invisible"
    })]), F(a, v), w(u, i), V()
}
export {
    G as T, E as g
};