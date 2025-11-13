var H = Object.defineProperty,
    M = Object.defineProperties;
var j = Object.getOwnPropertyDescriptors;
var E = Object.getOwnPropertySymbols;
var k = Object.prototype.hasOwnProperty,
    C = Object.prototype.propertyIsEnumerable;
var N = (t, e, a) => e in t ? H(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: a
    }) : t[e] = a,
    A = (t, e) => {
        for (var a in e || (e = {})) k.call(e, a) && N(t, a, e[a]);
        if (E)
            for (var a of E(e)) C.call(e, a) && N(t, a, e[a]);
        return t
    },
    O = (t, e) => M(t, j(e));
import {
    ac as m,
    R as P,
    ad as S,
    N as V,
    P as p,
    X as h,
    Q as D,
    M as $,
    A as u,
    Y as z,
    O as Q,
    ae as W,
    a9 as X,
    a1 as q,
    af as B,
    T as F,
    w as G,
    p as J,
    I as K,
    z as w,
    a2 as U,
    b as Z
} from "./runtime.B7th0A2U.js";
import {
    g as x,
    i as I,
    j as v,
    k as ee,
    b as te,
    m as ae
} from "./disclose-version.Cr9xuhkA.js";
let R = !0;

function ie(t) {
    R = t
}

function oe(t, e) {
    var o;
    var a = e == null ? "" : typeof e == "object" ? e + "" : e;
    a !== ((o = t.__t) != null ? o : t.__t = t.nodeValue) && (t.__t = a, t.nodeValue = a + "")
}

function re(t, e) {
    return L(t, e)
}

function fe(t, e) {
    var c;
    m(), e.intro = (c = e.intro) != null ? c : !1;
    const a = e.target,
        o = w,
        l = u;
    try {
        for (var r = P(a); r && (r.nodeType !== 8 || r.data !== S);) r = V(r);
        if (!r) throw p;
        h(!0), D(r), $();
        const d = L(t, O(A({}, e), {
            anchor: r
        }));
        if (u === null || u.nodeType !== 8 || u.data !== z) throw Q(), p;
        return h(!1), d
    } catch (d) {
        if (d === p) return e.recover === !1 && W(), m(), X(a), h(!1), re(t, e);
        throw d
    } finally {
        h(o), D(l), ae()
    }
}
const f = new Map;

function L(t, {
    target: e,
    anchor: a,
    props: o = {},
    events: l,
    context: r,
    intro: c = !0
}) {
    m();
    var d = new Set,
        y = i => {
            for (var s = 0; s < i.length; s++) {
                var n = i[s];
                if (!d.has(n)) {
                    d.add(n);
                    var _ = ee(n);
                    e.addEventListener(n, v, {
                        passive: _
                    });
                    var b = f.get(n);
                    b === void 0 ? (document.addEventListener(n, v, {
                        passive: _
                    }), f.set(n, 1)) : f.set(n, b + 1)
                }
            }
        };
    y(q(x)), I.add(y);
    var g = void 0,
        Y = B(() => {
            var i = a != null ? a : e.appendChild(F());
            return G(() => {
                if (r) {
                    J({});
                    var s = K;
                    s.c = r
                }
                l && (o.$$events = l), w && te(i, null), R = c, g = t(i, o) || {}, R = !0, w && (U.nodes_end = u), r && Z()
            }), () => {
                var _;
                for (var s of d) {
                    e.removeEventListener(s, v);
                    var n = f.get(s);
                    --n === 0 ? (document.removeEventListener(s, v), f.delete(s)) : f.set(s, n)
                }
                I.delete(y), i !== a && ((_ = i.parentNode) == null || _.removeChild(i))
            }
        });
    return T.set(g, Y), g
}
let T = new WeakMap;

function _e(t, e) {
    const a = T.get(t);
    return a ? (T.delete(t), a(e)) : Promise.resolve()
}
export {
    R as a, ie as b, fe as h, re as m, oe as s, _e as u
};