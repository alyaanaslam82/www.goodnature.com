import {
    v as V,
    z as O,
    M as Q,
    E as W,
    ad as X,
    V as J,
    W as k,
    Q as ee,
    X as x,
    Z as K,
    w as U,
    _ as Y,
    ao as re,
    A as ne,
    ah as se,
    ap as ue,
    x as B,
    m as C,
    g as _,
    s as Z,
    aq as g,
    ar as ie,
    as as ae,
    am as M,
    c as le,
    at as $,
    au as fe,
    q as te,
    j,
    av as ce,
    S as F,
    aw as G,
    K as oe,
    ax as pe,
    ay as _e,
    az as de,
    aA as ve,
    a6 as be,
    ai as y,
    aB as P
} from "./runtime.B7th0A2U.js";
import {
    s as he,
    g as Pe
} from "./index.DeRN1XK-.js";

function Te(e, r, [s, n] = [0, 0]) {
    O && s === 0 && Q();
    var u = e,
        i = null,
        l = null,
        v = re,
        I = s > 0 ? W : 0,
        c = !1;
    const E = (f, o = !0) => {
            c = !0, d(o, f)
        },
        d = (f, o) => {
            if (v === (v = f)) return;
            let b = !1;
            if (O && n !== -1) {
                if (s === 0) {
                    const t = u.data;
                    t === X ? n = 0 : t === J ? n = 1 / 0 : (n = parseInt(t.substring(1)), n !== n && (n = v ? 1 / 0 : -1))
                }
                const S = n > s;
                !!v === S && (u = k(), ee(u), x(!1), b = !0, n = -1)
            }
            v ? (i ? K(i) : o && (i = U(() => o(u))), l && Y(l, () => {
                l = null
            })) : (l ? K(l) : o && (l = U(() => o(u, [s + 1, n]))), i && Y(i, () => {
                i = null
            })), b && x(!0)
        };
    V(() => {
        c = !1, r(E), c || d(null, null)
    }, I), O && (u = ne)
}
let A = !1,
    D = Symbol();

function Oe(e, r, s) {
    var i;
    const n = (i = s[r]) != null ? i : s[r] = {
        store: null,
        source: C(void 0),
        unsubscribe: B
    };
    if (n.store !== e && !(D in s))
        if (n.unsubscribe(), n.store = e != null ? e : null, e == null) n.source.v = void 0, n.unsubscribe = B;
        else {
            var u = !0;
            n.unsubscribe = he(e, l => {
                u ? n.source.v = l : Z(n.source, l)
            }), u = !1
        }
    return e && D in s ? Pe(e) : _(n.source)
}

function ge() {
    const e = {};

    function r() {
        se(() => {
            for (var s in e) e[s].unsubscribe();
            ue(e, D, {
                enumerable: !1,
                value: !0
            })
        })
    }
    return [e, r]
}

function Ie(e) {
    var r = A;
    try {
        return A = !1, [e(), A]
    } finally {
        A = r
    }
}
const Se = {
    get(e, r) {
        if (!e.exclude.includes(r)) return e.props[r]
    },
    set(e, r) {
        return !1
    },
    getOwnPropertyDescriptor(e, r) {
        if (!e.exclude.includes(r) && r in e.props) return {
            enumerable: !0,
            configurable: !0,
            value: e.props[r]
        }
    },
    has(e, r) {
        return e.exclude.includes(r) ? !1 : r in e.props
    },
    ownKeys(e) {
        return Reflect.ownKeys(e.props).filter(r => !e.exclude.includes(r))
    }
};

function De(e, r, s) {
    return new Proxy({
        props: e,
        exclude: r
    }, Se)
}
const me = {
    get(e, r) {
        if (!e.exclude.includes(r)) return _(e.version), r in e.special ? e.special[r]() : e.props[r]
    },
    set(e, r, s) {
        return r in e.special || (e.special[r] = Ae({
            get [r]() {
                return e.props[r]
            }
        }, r, $)), e.special[r](s), y(e.version), !0
    },
    getOwnPropertyDescriptor(e, r) {
        if (!e.exclude.includes(r) && r in e.props) return {
            enumerable: !0,
            configurable: !0,
            value: e.props[r]
        }
    },
    deleteProperty(e, r) {
        return e.exclude.includes(r) || (e.exclude.push(r), y(e.version)), !0
    },
    has(e, r) {
        return e.exclude.includes(r) ? !1 : r in e.props
    },
    ownKeys(e) {
        return Reflect.ownKeys(e.props).filter(r => !e.exclude.includes(r))
    }
};

function Ne(e, r) {
    return new Proxy({
        props: e,
        exclude: r,
        special: {},
        version: be(0)
    }, me)
}
const we = {
    get(e, r) {
        let s = e.props.length;
        for (; s--;) {
            let n = e.props[s];
            if (P(n) && (n = n()), typeof n == "object" && n !== null && r in n) return n[r]
        }
    },
    set(e, r, s) {
        let n = e.props.length;
        for (; n--;) {
            let u = e.props[n];
            P(u) && (u = u());
            const i = g(u, r);
            if (i && i.set) return i.set(s), !0
        }
        return !1
    },
    getOwnPropertyDescriptor(e, r) {
        let s = e.props.length;
        for (; s--;) {
            let n = e.props[s];
            if (P(n) && (n = n()), typeof n == "object" && n !== null && r in n) {
                const u = g(n, r);
                return u && !u.configurable && (u.configurable = !0), u
            }
        }
    },
    has(e, r) {
        if (r === F || r === G) return !1;
        for (let s of e.props)
            if (P(s) && (s = s()), s != null && r in s) return !0;
        return !1
    },
    ownKeys(e) {
        const r = [];
        for (let s of e.props) {
            P(s) && (s = s());
            for (const n in s) r.includes(n) || r.push(n)
        }
        return r
    }
};

function Le(...e) {
    return new Proxy({
        props: e
    }, we)
}

function z(e) {
    var r, s;
    return (s = (r = e.ctx) == null ? void 0 : r.d) != null ? s : !1
}

function Ae(e, r, s, n) {
    var L, q;
    var u = (s & _e) !== 0,
        i = !oe || (s & pe) !== 0,
        l = (s & ce) !== 0,
        v = (s & de) !== 0,
        I = !1,
        c;
    l ? [c, I] = Ie(() => e[r]) : c = e[r];
    var E = F in e || G in e,
        d = l && ((q = (L = g(e, r)) == null ? void 0 : L.set) != null ? q : E && r in e && (a => e[r] = a)) || void 0,
        f = n,
        o = !0,
        b = !1,
        S = () => (b = !0, o && (o = !1, v ? f = j(n) : f = n), f);
    c === void 0 && n !== void 0 && (d && i && ie(), c = S(), d && d(c));
    var t;
    if (i) t = () => {
        var a = e[r];
        return a === void 0 ? S() : (o = !0, b = !1, a)
    };
    else {
        var N = (u ? M : le)(() => e[r]);
        N.f |= ae, t = () => {
            var a = _(N);
            return a !== void 0 && (f = void 0), a === void 0 ? f : a
        }
    }
    if (!(s & $)) return t;
    if (d) {
        var H = e.$$legacy;
        return function(a, h) {
            return arguments.length > 0 ? ((!i || !h || H || I) && d(h ? t() : a), a) : t()
        }
    }
    var m = !1,
        R = !1,
        w = C(c),
        p = M(() => {
            var a = t(),
                h = _(w);
            return m ? (m = !1, R = !0, h) : (R = !1, w.v = a)
        });
    return l && _(p), u || (p.equals = fe),
        function(a, h) {
            if (ve !== null && (m = R, t(), _(w)), arguments.length > 0) {
                const T = h ? _(p) : i && l ? te(a) : a;
                if (!p.equals(T)) {
                    if (m = !0, Z(w, T), b && f !== void 0 && (f = T), z(p)) return a;
                    j(() => _(p))
                }
                return a
            }
            return z(p) ? p.v : _(p)
        }
}
export {
    Oe as a, Le as b, Te as i, Ne as l, Ae as p, De as r, ge as s
};