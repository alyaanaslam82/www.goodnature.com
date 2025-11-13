import {
    d as G,
    t as H,
    p as J,
    a as K
} from "./disclose-version.Cr9xuhkA.js";
import {
    p as L,
    h as y,
    r as h,
    e as N,
    B as O,
    t as P,
    b as Q
} from "./runtime.B7th0A2U.js";
import {
    s as R
} from "./render.DCpC4m_T.js";
import {
    a as U
} from "./actions.CAd6_Ft5.js";
import {
    r as W,
    b as i,
    a as d
} from "./attributes.CecWNX5Z.js";
import {
    b as X
} from "./input.zq82Y1YP.js";
import {
    p as a
} from "./props.C7v_At4K.js";
import {
    o as Y
} from "./index-client.C8e8cJZb.js";
var Z = H("<label><span> </span> <input></label>");

function ue(x, e) {
    L(e, !0);
    let _ = a(e, "onkeydown", 3, null),
        v = a(e, "onchange", 3, null),
        g = a(e, "oninput", 3, null),
        w = a(e, "type", 3, "text"),
        k = a(e, "min", 3, void 0),
        q = a(e, "pattern", 3, void 0),
        z = a(e, "placeholder", 3, void 0),
        B = a(e, "autocomplete", 3, "on"),
        C = a(e, "required", 3, !0),
        I = a(e, "labelVisibility", 3, "visible"),
        S = a(e, "wrapperClasses", 3, ""),
        T = a(e, "value", 15, ""),
        V = a(e, "maxlength", 3, null),
        m = a(e, "disabled", 3, !1),
        E = a(e, "appearance", 3, void 0),
        r = a(e, "stripeStyle", 3, !1),
        M = a(e, "inputmode", 3, "text"),
        j = a(e, "autofocus", 3, !1);

    function s(l, n) {
        l.type = n
    }
    const D = () => {
        const l = document.getElementById(e.id);
        l && l.focus()
    };
    Y(() => {});
    var u = Z(),
        o = y(u);
    let f;
    var F = y(o, !0);
    h(o);
    var t = N(o, 2);
    return W(t), J(t, j()), t.__change = function(...l) {
        var n;
        (n = v()) == null || n.apply(this, l)
    }, t.__input = function(...l) {
        var n;
        (n = g()) == null || n.apply(this, l)
    }, t.__keydown = function(...l) {
        var n;
        (n = _()) == null || n.apply(this, l)
    }, U(t, (l, n) => s == null ? void 0 : s(l, n), w), O(() => X(t, T)), h(u), P(l => {
        var n, c, p, b;
        i(u, "for", e.id), d(u, 1, `flex flex-col gap-y-2  ${S()}`, "svelte-kz7wxx"), f = d(o, 1, `input-label ${(n=r()?"font-normal":"")!=null?n:""}`, null, f, l), R(F, e.label), i(t, "id", e.id), i(t, "placeholder", z()), i(t, "name", e.name), i(t, "autocomplete", B()), t.required = C(), i(t, "maxlength", V()), i(t, "inputmode", M()), t.disabled = m(), i(t, "min", k()), i(t, "pattern", q()), d(t, 1, `${(c=E()==="none"?"appearance-none":"")!=null?c:""}${(p=m()?"disabled":"")!=null?p:""}${(b=r()?"stripe-style-input":"")!=null?b:""}`, "svelte-kz7wxx")
    }, [() => ({
        "sr-only": I() === "invisible"
    })]), K(x, u), Q({
        focus: D
    })
}
G(["change", "input", "keydown"]);
export {
    ue as T
};