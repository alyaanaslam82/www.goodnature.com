import {
    c as f,
    a as c
} from "./disclose-version.Cr9xuhkA.js";
import {
    p as u,
    f as l,
    b as x,
    g as o,
    u as T
} from "./runtime.B7th0A2U.js";
import {
    p,
    i as b
} from "./props.C7v_At4K.js";
import {
    h as y
} from "./html.C9SqvzYP.js";
import {
    a as P
} from "./asText.BXrg0c_9.js";
import {
    r as k
} from "./isFilled.GM-Jo1Zy.js";

function q(d, t) {
    u(t, !0);
    let a = p(t, "as", 3, "p"),
        g = p(t, "class", 3, ""),
        e = T(() => typeof t.content != "string" && k(t.content) ? P(t.content) : t.content);
    var s = f(),
        v = l(s); {
        var _ = r => {
            var n = f(),
                h = l(n);
            y(h, () => {
                var i, m;
                return `<${a()} id="${(m=(i=o(e))==null?void 0:i.replace(/[\W_]+/g,"-"))==null?void 0:m.toLowerCase()}" class="${g()}">${o(e)}</${a()}>`
            }), c(r, n)
        };
        b(v, r => {
            typeof o(e) == "string" && a() && r(_)
        })
    }
    c(d, s), x()
}
export {
    q as P
};