var A = Object.defineProperty;
var v = Object.getOwnPropertySymbols;
var C = Object.prototype.hasOwnProperty,
    L = Object.prototype.propertyIsEnumerable;
var b = (r, e, a) => e in r ? A(r, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: a
    }) : r[e] = a,
    f = (r, e) => {
        for (var a in e || (e = {})) C.call(e, a) && b(r, a, e[a]);
        if (v)
            for (var a of v(e)) L.call(e, a) && b(r, a, e[a]);
        return r
    };
import {
    t as O,
    a as R,
    r as G
} from "./disclose-version.Cr9xuhkA.js";
import {
    p as M,
    t as T,
    b as B,
    g as i,
    k as w,
    s as _,
    u
} from "./runtime.B7th0A2U.js";
import {
    f as H
} from "./attributes.CecWNX5Z.js";
import {
    b as J
} from "./this.BDAdN7ay.js";
import {
    p as s,
    r as K
} from "./props.C7v_At4K.js";
import {
    D as z
} from "./index.VqiwlbJN.js";

function ee({
    amount: r,
    local: e = "en-US",
    currency: a = "USD",
    decimalPlaces: o = 2,
    keepZeros: c = !1
}) {
    if (typeof r != "number") return null;
    const m = new Intl.NumberFormat(e, {
        style: "currency",
        currency: a,
        maximumFractionDigits: o
    });
    return c ? m.format(r) : m.format(r).replace(/(\.|,)00$/g, "")
}
var P = O("<img>");

function te(r, e) {
    M(e, !0);
    let a = s(e, "class", 3, null),
        o = s(e, "src", 3, z),
        c = s(e, "alt", 3, ""),
        m = s(e, "lazy", 3, !0),
        S = s(e, "width", 3, 1280),
        x = s(e, "height", 3, 720),
        I = s(e, "quality", 3, 80),
        U = s(e, "style", 3, ""),
        j = s(e, "sizes", 19, () => ({})),
        q = K(e, ["$$slots", "$$events", "$$legacy", "class", "src", "alt", "lazy", "width", "height", "quality", "style", "sizes"]);
    const g = [640, 768, 1024, 1280, 1536],
        D = {
            base: -1,
            sm: 640,
            md: 768,
            lg: 1024,
            xl: 1280,
            "2xl": 1536
        };
    let h = w(void 0),
        y = w(!1),
        E = u(() => Object.entries(f({
            base: "100vw"
        }, j())).map(([t, l]) => [D[t], l]).sort((t, l) => l[0] - t[0]).filter(t => t[0]).map(t => `(min-width: ${t[0]}px) ${t[1]}`).join(",").replace(/\(min-width: -1px\) /g, ""));
    const d = (t, l) => `/_vercel/image?url=${encodeURIComponent(t)}&w=${l}&q=${I()} ${l}w`;
    let F = u(() => g.map(t => d(o(), t)).join(",")),
        N = u(() => g.map(t => d(z, t)).join(","));
    var n = P(),
        k = () => _(y, !0);
    let p;
    J(n, t => _(h, t), () => i(h)), T(() => p = H(n, p, f({
        width: S(),
        height: x(),
        srcset: i(y) ? i(N) : i(F),
        alt: c(),
        class: a(),
        loading: m() ? "lazy" : "eager",
        sizes: i(E),
        style: U(),
        onerror: k
    }, q))), G(n), R(r, n), B()
}
export {
    te as I, ee as f
};