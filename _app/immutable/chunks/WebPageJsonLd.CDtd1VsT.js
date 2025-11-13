var O = Object.defineProperty;
var _ = Object.getOwnPropertySymbols;
var U = Object.prototype.hasOwnProperty,
    V = Object.prototype.propertyIsEnumerable;
var b = (t, e, a) => e in t ? O(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: a
    }) : t[e] = a,
    v = (t, e) => {
        for (var a in e || (e = {})) U.call(e, a) && b(t, a, e[a]);
        if (_)
            for (var a of _(e)) V.call(e, a) && b(t, a, e[a]);
        return t
    };
import {
    c,
    h as q,
    a as p
} from "./disclose-version.Cr9xuhkA.js";
import {
    p as A,
    l as y,
    a as z,
    f as i,
    b as L,
    s as x,
    m as j,
    d as J,
    g as m,
    u as B
} from "./runtime.B7th0A2U.js";
import "./legacy.DuDeTpA6.js";
import {
    p as P,
    i as S
} from "./props.C7v_At4K.js";
import {
    h as W
} from "./html.C9SqvzYP.js";
import {
    b as u,
    a as D,
    p as E
} from "./index.VqiwlbJN.js";

function F(t, e) {
    A(e, !1);
    const a = j(),
        f = j();
    let h = P(e, "output", 8, "head"),
        n = P(e, "schema", 8, void 0);

    function N(r) {
        const s = o => v({
            "@context": "https://schema.org"
        }, o);
        return Array.isArray(r) ? r.map(o => s(o)) : s(r)
    }
    y(() => J(n()), () => {
        x(a, n() && typeof n() == "object")
    }), y(() => J(n()), () => {
        x(f, `<script type="application/ld+json">${JSON.stringify(N(n()))}<\/script>`)
    }), z();
    var l = c();
    q(r => {
        var s = c(),
            o = i(s); {
            var C = d => {
                var g = c(),
                    H = i(g);
                W(H, () => m(f)), p(d, g)
            };
            S(o, d => {
                m(a) && h() === "head" && d(C)
            })
        }
        p(r, s)
    });
    var k = i(l); {
        var w = r => {
            var s = c(),
                o = i(s);
            W(o, () => m(f)), p(r, s)
        };
        S(k, r => {
            m(a) && h() === "body" && r(w)
        })
    }
    p(t, l), L()
}

function X(t, e) {
    A(e, !0);
    let a = B(() => ({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: e.name,
        url: `${D}${E.url.pathname}`,
        author: u,
        copyrightHolder: u,
        creator: u
    }));
    F(t, {
        get schema() {
            return m(a)
        }
    }), L()
}
export {
    X as W
};