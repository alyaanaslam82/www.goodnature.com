var St = (t, e, n) => new Promise((r, a) => {
    var l = s => {
            try {
                u(n.next(s))
            } catch (f) {
                a(f)
            }
        },
        i = s => {
            try {
                u(n.throw(s))
            } catch (f) {
                a(f)
            }
        },
        u = s => s.done ? r(s.value) : Promise.resolve(s.value).then(l, i);
    u((n = n.apply(t, e)).next())
});
var hn = Array.isArray,
    dn = Array.prototype.indexOf,
    ae = Array.from,
    le = Object.defineProperty,
    $ = Object.getOwnPropertyDescriptor,
    wn = Object.getOwnPropertyDescriptors,
    yn = Object.prototype,
    En = Array.prototype,
    qt = Object.getPrototypeOf,
    Dt = Object.isExtensible;

function se(t) {
    return typeof t == "function"
}
const fe = () => {};

function ue(t) {
    return t()
}

function jt(t) {
    for (var e = 0; e < t.length; e++) t[e]()
}
const A = 2,
    Yt = 4,
    ot = 8,
    xt = 16,
    S = 32,
    G = 64,
    rt = 128,
    T = 256,
    at = 512,
    y = 1024,
    N = 2048,
    P = 4096,
    U = 8192,
    _t = 16384,
    gn = 32768,
    Ht = 65536,
    Tn = 1 << 17,
    mn = 1 << 19,
    Bt = 1 << 20,
    Et = 1 << 21,
    L = Symbol("$state"),
    ie = Symbol("legacy props"),
    oe = Symbol("");

function Ut(t) {
    return t === this.v
}

function An(t, e) {
    return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function"
}

function Vt(t) {
    return !An(t, this.v)
}

function xn(t) {
    throw new Error("https://svelte.dev/e/effect_in_teardown")
}

function In() {
    throw new Error("https://svelte.dev/e/effect_in_unowned_derived")
}

function On(t) {
    throw new Error("https://svelte.dev/e/effect_orphan")
}

function Rn() {
    throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")
}

function _e() {
    throw new Error("https://svelte.dev/e/hydration_failed")
}

function ce(t) {
    throw new Error("https://svelte.dev/e/lifecycle_legacy_only")
}

function ve(t) {
    throw new Error("https://svelte.dev/e/props_invalid_value")
}

function bn() {
    throw new Error("https://svelte.dev/e/state_descriptors_fixed")
}

function Nn() {
    throw new Error("https://svelte.dev/e/state_prototype_fixed")
}

function Sn() {
    throw new Error("https://svelte.dev/e/state_unsafe_mutation")
}
let ct = !1;

function pe() {
    ct = !0
}
const he = 1,
    de = 2,
    we = 4,
    ye = 8,
    Ee = 16,
    ge = 1,
    Te = 2,
    me = 4,
    Ae = 8,
    xe = 16,
    Ie = 1,
    Oe = 2,
    Re = 4,
    be = 1,
    Ne = 2,
    Dn = "[",
    kn = "[!",
    Cn = "]",
    Gt = {},
    E = Symbol(),
    Se = "http://www.w3.org/1999/xhtml",
    De = "http://www.w3.org/2000/svg";

function Pn(t) {
    throw new Error("https://svelte.dev/e/lifecycle_outside_component")
}
let p = null;

function kt(t) {
    p = t
}

function ke(t, e) {
    return Fn().set(t, e), e
}

function Ce(t, e = !1, n) {
    var r = p = {
        p,
        c: null,
        d: !1,
        e: null,
        m: !1,
        s: t,
        x: null,
        l: null
    };
    ct && !e && (p.l = {
        s: null,
        u: null,
        r1: [],
        r2: Ot(!1)
    }), Hn(() => {
        r.d = !0
    })
}

function Pe(t) {
    const e = p;
    if (e !== null) {
        t !== void 0 && (e.x = t);
        const i = e.e;
        if (i !== null) {
            var n = h,
                r = v;
            e.e = null;
            try {
                for (var a = 0; a < i.length; a++) {
                    var l = i[a];
                    ft(l.effect), V(l.reaction), tn(l.fn)
                }
            } finally {
                ft(n), V(r)
            }
        }
        p = e.p, e.m = !0
    }
    return t || {}
}

function vt() {
    return !ct || p !== null && p.l === null
}

function Fn(t) {
    var e;
    return p === null && Pn(), (e = p.c) != null ? e : p.c = new Map(Mn(p) || void 0)
}

function Mn(t) {
    let e = t.p;
    for (; e !== null;) {
        const n = e.c;
        if (n !== null) return n;
        e = e.p
    }
    return null
}

function B(t) {
    if (typeof t != "object" || t === null || L in t) return t;
    const e = qt(t);
    if (e !== yn && e !== En) return t;
    var n = new Map,
        r = hn(t),
        a = D(0),
        l = v,
        i = u => {
            var s = v;
            V(l);
            var f = u();
            return V(s), f
        };
    return r && n.set("length", D(t.length)), new Proxy(t, {
        defineProperty(u, s, f) {
            (!("value" in f) || f.configurable === !1 || f.enumerable === !1 || f.writable === !1) && bn();
            var c = n.get(s);
            return c === void 0 ? (c = i(() => D(f.value)), n.set(s, c)) : O(c, i(() => B(f.value))), !0
        },
        deleteProperty(u, s) {
            var f = n.get(s);
            if (f === void 0) s in u && n.set(s, i(() => D(E)));
            else {
                if (r && typeof s == "string") {
                    var c = n.get("length"),
                        o = Number(s);
                    Number.isInteger(o) && o < c.v && O(c, o)
                }
                O(f, E), Ct(a)
            }
            return !0
        },
        get(u, s, f) {
            var I;
            if (s === L) return t;
            var c = n.get(s),
                o = s in u;
            if (c === void 0 && (!o || (I = $(u, s)) != null && I.writable) && (c = i(() => D(B(o ? u[s] : E))), n.set(s, c)), c !== void 0) {
                var _ = C(c);
                return _ === E ? void 0 : _
            }
            return Reflect.get(u, s, f)
        },
        getOwnPropertyDescriptor(u, s) {
            var f = Reflect.getOwnPropertyDescriptor(u, s);
            if (f && "value" in f) {
                var c = n.get(s);
                c && (f.value = C(c))
            } else if (f === void 0) {
                var o = n.get(s),
                    _ = o == null ? void 0 : o.v;
                if (o !== void 0 && _ !== E) return {
                    enumerable: !0,
                    configurable: !0,
                    value: _,
                    writable: !0
                }
            }
            return f
        },
        has(u, s) {
            var _;
            if (s === L) return !0;
            var f = n.get(s),
                c = f !== void 0 && f.v !== E || Reflect.has(u, s);
            if (f !== void 0 || h !== null && (!c || (_ = $(u, s)) != null && _.writable)) {
                f === void 0 && (f = i(() => D(c ? B(u[s]) : E)), n.set(s, f));
                var o = C(f);
                if (o === E) return !1
            }
            return c
        },
        set(u, s, f, c) {
            var Nt;
            var o = n.get(s),
                _ = s in u;
            if (r && s === "length")
                for (var I = f; I < o.v; I += 1) {
                    var F = n.get(I + "");
                    F !== void 0 ? O(F, E) : I in u && (F = i(() => D(E)), n.set(I + "", F))
                }
            o === void 0 ? (!_ || (Nt = $(u, s)) != null && Nt.writable) && (o = i(() => D(void 0)), O(o, i(() => B(f))), n.set(s, o)) : (_ = o.v !== E, O(o, i(() => B(f))));
            var nt = Reflect.getOwnPropertyDescriptor(u, s);
            if (nt != null && nt.set && nt.set.call(c, f), !_) {
                if (r && typeof s == "string") {
                    var bt = n.get("length"),
                        yt = Number(s);
                    Number.isInteger(yt) && yt >= bt.v && O(bt, yt + 1)
                }
                Ct(a)
            }
            return !0
        },
        ownKeys(u) {
            C(a);
            var s = Reflect.ownKeys(u).filter(o => {
                var _ = n.get(o);
                return _ === void 0 || _.v !== E
            });
            for (var [f, c] of n) c.v !== E && !(f in u) && s.push(f);
            return s
        },
        setPrototypeOf() {
            Nn()
        }
    })
}

function Ct(t, e = 1) {
    O(t, t.v + e)
}

function Pt(t) {
    try {
        if (t !== null && typeof t == "object" && L in t) return t[L]
    } catch (e) {}
    return t
}

function Fe(t, e) {
    return Object.is(Pt(t), Pt(e))
}

function It(t) {
    var e = A | N,
        n = v !== null && v.f & A ? v : null;
    return h === null || n !== null && n.f & T ? e |= T : h.f |= Bt, {
        ctx: p,
        deps: null,
        effects: null,
        equals: Ut,
        f: e,
        fn: t,
        reactions: null,
        rv: 0,
        v: null,
        wv: 0,
        parent: n != null ? n : h
    }
}

function Me(t) {
    const e = It(t);
    return un(e), e
}

function Le(t) {
    const e = It(t);
    return e.equals = Vt, e
}

function Kt(t) {
    var e = t.effects;
    if (e !== null) {
        t.effects = null;
        for (var n = 0; n < e.length; n += 1) Y(e[n])
    }
}

function Ln(t) {
    for (var e = t.parent; e !== null;) {
        if (!(e.f & A)) return e;
        e = e.parent
    }
    return null
}

function Zt(t) {
    var e, n = h;
    ft(Ln(t));
    try {
        Kt(t), e = vn(t)
    } finally {
        ft(n)
    }
    return e
}

function $t(t) {
    var e = Zt(t),
        n = (k || t.f & T) && t.deps !== null ? P : y;
    x(t, n), t.equals(e) || (t.v = e, t.wv = _n())
}
const X = new Map;

function Ot(t, e) {
    var n = {
        f: 0,
        v: t,
        reactions: null,
        equals: Ut,
        rv: 0,
        wv: 0
    };
    return n
}

function D(t, e) {
    const n = Ot(t);
    return un(n), n
}

function qe(t, e = !1) {
    var r, a;
    const n = Ot(t);
    return e || (n.equals = Vt), ct && p !== null && p.l !== null && ((a = (r = p.l).s) != null ? a : r.s = []).push(n), n
}

function je(t, e) {
    return O(t, wt(() => C(t))), e
}

function O(t, e, n = !1) {
    v !== null && !b && vt() && v.f & (A | xt) && !(w != null && w.includes(t)) && Sn();
    let r = n ? B(e) : e;
    return gt(t, r)
}

function gt(t, e) {
    if (!t.equals(e)) {
        var n = t.v;
        tt ? X.set(t, e) : X.set(t, n), t.v = e, t.f & A && (t.f & N && Zt(t), x(t, t.f & T ? P : y)), t.wv = _n(), Wt(t, N), vt() && h !== null && h.f & y && !(h.f & (S | G)) && (m === null ? Zn([t]) : m.push(t))
    }
    return e
}

function Ye(t, e = 1) {
    var n = C(t),
        r = e === 1 ? n++ : n--;
    return O(t, n), r
}

function Wt(t, e) {
    var n = t.reactions;
    if (n !== null)
        for (var r = vt(), a = n.length, l = 0; l < a; l++) {
            var i = n[l],
                u = i.f;
            u & N || !r && i === h || (x(i, e), u & (y | T) && (u & A ? Wt(i, P) : dt(i)))
        }
}

function Xt(t) {
    console.warn("https://svelte.dev/e/hydration_mismatch")
}
let j = !1;

function He(t) {
    j = t
}
let R;

function z(t) {
    if (t === null) throw Xt(), Gt;
    return R = t
}

function Be() {
    return z(H(R))
}

function Ue(t) {
    if (j) {
        if (H(R) !== null) throw Xt(), Gt;
        R = t
    }
}

function Ve(t = 1) {
    if (j) {
        for (var e = t, n = R; e--;) n = H(n);
        R = n
    }
}

function Ge() {
    for (var t = 0, e = R;;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === Cn) {
                if (t === 0) return e;
                t -= 1
            } else(n === Dn || n === kn) && (t += 1)
        }
        var r = H(e);
        e.remove(), e = r
    }
}
var Ft, qn, jn, zt, Jt;

function Ke() {
    if (Ft === void 0) {
        Ft = window, qn = document, jn = /Firefox/.test(navigator.userAgent);
        var t = Element.prototype,
            e = Node.prototype,
            n = Text.prototype;
        zt = $(e, "firstChild").get, Jt = $(e, "nextSibling").get, Dt(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), Dt(n) && (n.__t = void 0)
    }
}

function Tt(t = "") {
    return document.createTextNode(t)
}

function mt(t) {
    return zt.call(t)
}

function H(t) {
    return Jt.call(t)
}

function Ze(t, e) {
    if (!j) return mt(t);
    var n = mt(R);
    if (n === null) n = R.appendChild(Tt());
    else if (e && n.nodeType !== 3) {
        var r = Tt();
        return n == null || n.before(r), z(r), r
    }
    return z(n), n
}

function $e(t, e) {
    if (!j) {
        var n = mt(t);
        return n instanceof Comment && n.data === "" ? H(n) : n
    }
    return R
}

function We(t, e = 1, n = !1) {
    let r = j ? R : t;
    for (var a; e--;) a = r, r = H(r);
    if (!j) return r;
    var l = r == null ? void 0 : r.nodeType;
    if (n && l !== 3) {
        var i = Tt();
        return r === null ? a == null || a.after(i) : r.before(i), z(i), i
    }
    return z(r), r
}

function Xe(t) {
    t.textContent = ""
}

function Qt(t) {
    h === null && v === null && On(), v !== null && v.f & T && h === null && In(), tt && xn()
}

function Yn(t, e) {
    var n = e.last;
    n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t)
}

function K(t, e, n, r = !0) {
    var s;
    var a = h,
        l = {
            ctx: p,
            deps: null,
            nodes_start: null,
            nodes_end: null,
            f: t | N,
            first: null,
            fn: e,
            last: null,
            next: null,
            parent: a,
            prev: null,
            teardown: null,
            transitions: null,
            wv: 0
        };
    if (n) try {
        ht(l), l.f |= gn
    } catch (f) {
        throw Y(l), f
    } else e !== null && dt(l);
    var i = n && l.deps === null && l.first === null && l.nodes_start === null && l.teardown === null && (l.f & (Bt | rt)) === 0;
    if (!i && r && (a !== null && Yn(l, a), v !== null && v.f & A)) {
        var u = v;
        ((s = u.effects) != null ? s : u.effects = []).push(l)
    }
    return l
}

function Hn(t) {
    const e = K(ot, null, !1);
    return x(e, y), e.teardown = t, e
}

function ze(t) {
    var a;
    Qt();
    var e = h !== null && (h.f & S) !== 0 && p !== null && !p.m;
    if (e) {
        var n = p;
        ((a = n.e) != null ? a : n.e = []).push({
            fn: t,
            effect: h,
            reaction: v
        })
    } else {
        var r = tn(t);
        return r
    }
}

function Je(t) {
    return Qt(), Rt(t)
}

function Qe(t) {
    const e = K(G, t, !0);
    return (n = {}) => new Promise(r => {
        n.outro ? Vn(e, () => {
            Y(e), r(void 0)
        }) : (Y(e), r(void 0))
    })
}

function tn(t) {
    return K(Yt, t, !1)
}

function tr(t, e) {
    var n = p,
        r = {
            effect: null,
            ran: !1
        };
    n.l.r1.push(r), r.effect = Rt(() => {
        t(), !r.ran && (r.ran = !0, O(n.l.r2, !0), wt(e))
    })
}

function nr() {
    var t = p;
    Rt(() => {
        if (C(t.l.r2)) {
            for (var e of t.l.r1) {
                var n = e.effect;
                n.f & y && x(n, P), Z(n) && ht(n), e.ran = !1
            }
            t.l.r2.v = !1
        }
    })
}

function Rt(t) {
    return K(ot, t, !0)
}

function er(t, e = [], n = It) {
    const r = e.map(n);
    return Bn(() => t(...r.map(C)))
}

function Bn(t, e = 0) {
    return K(ot | xt | e, t, !0)
}

function rr(t, e = !0) {
    return K(ot | S, t, !0, e)
}

function nn(t) {
    var e = t.teardown;
    if (e !== null) {
        const n = tt,
            r = v;
        Lt(!0), V(null);
        try {
            e.call(null)
        } finally {
            Lt(n), V(r)
        }
    }
}

function en(t, e = !1) {
    var n = t.first;
    for (t.first = t.last = null; n !== null;) {
        var r = n.next;
        n.f & G ? n.parent = null : Y(n, e), n = r
    }
}

function Un(t) {
    for (var e = t.first; e !== null;) {
        var n = e.next;
        e.f & S || Y(e), e = n
    }
}

function Y(t, e = !0) {
    var n = !1;
    if ((e || t.f & mn) && t.nodes_start !== null) {
        for (var r = t.nodes_start, a = t.nodes_end; r !== null;) {
            var l = r === a ? null : H(r);
            r.remove(), r = l
        }
        n = !0
    }
    en(t, e && !n), it(t, 0), x(t, _t);
    var i = t.transitions;
    if (i !== null)
        for (const s of i) s.stop();
    nn(t);
    var u = t.parent;
    u !== null && u.first !== null && rn(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = null
}

function rn(t) {
    var e = t.parent,
        n = t.prev,
        r = t.next;
    n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n))
}

function Vn(t, e) {
    var n = [];
    an(t, n, !0), Gn(n, () => {
        Y(t), e && e()
    })
}

function Gn(t, e) {
    var n = t.length;
    if (n > 0) {
        var r = () => --n || e();
        for (var a of t) a.out(r)
    } else e()
}

function an(t, e, n) {
    if (!(t.f & U)) {
        if (t.f ^= U, t.transitions !== null)
            for (const i of t.transitions)(i.is_global || n) && e.push(i);
        for (var r = t.first; r !== null;) {
            var a = r.next,
                l = (r.f & Ht) !== 0 || (r.f & S) !== 0;
            an(r, e, l ? n : !1), r = a
        }
    }
}

function ar(t) {
    ln(t, !0)
}

function ln(t, e) {
    if (t.f & U) {
        t.f ^= U, t.f & y || (t.f ^= y), Z(t) && (x(t, N), dt(t));
        for (var n = t.first; n !== null;) {
            var r = n.next,
                a = (n.f & Ht) !== 0 || (n.f & S) !== 0;
            ln(n, a ? e : !1), n = r
        }
        if (t.transitions !== null)
            for (const l of t.transitions)(l.is_global || e) && l.in()
    }
}
const Kn = typeof requestIdleCallback == "undefined" ? t => setTimeout(t, 1) : requestIdleCallback;
let J = [],
    Q = [];

function sn() {
    var t = J;
    J = [], jt(t)
}

function fn() {
    var t = Q;
    Q = [], jt(t)
}

function lr(t) {
    J.length === 0 && queueMicrotask(sn), J.push(t)
}

function sr(t) {
    Q.length === 0 && Kn(fn), Q.push(t)
}

function Mt() {
    J.length > 0 && sn(), Q.length > 0 && fn()
}
let et = !1,
    lt = !1,
    st = null,
    q = !1,
    tt = !1;

function Lt(t) {
    tt = t
}
let W = [];
let v = null,
    b = !1;

function V(t) {
    v = t
}
let h = null;

function ft(t) {
    h = t
}
let w = null;

function un(t) {
    v !== null && v.f & Et && (w === null ? w = [t] : w.push(t))
}
let d = null,
    g = 0,
    m = null;

function Zn(t) {
    m = t
}
let on = 1,
    ut = 0,
    k = !1,
    M = null;

function _n() {
    return ++on
}

function Z(t) {
    var o, _;
    var e = t.f;
    if (e & N) return !0;
    if (e & P) {
        var n = t.deps,
            r = (e & T) !== 0;
        if (n !== null) {
            var a, l, i = (e & at) !== 0,
                u = r && h !== null && !k,
                s = n.length;
            if (i || u) {
                var f = t,
                    c = f.parent;
                for (a = 0; a < s; a++) l = n[a], (i || !((o = l == null ? void 0 : l.reactions) != null && o.includes(f))) && ((_ = l.reactions) != null ? _ : l.reactions = []).push(f);
                i && (f.f ^= at), u && c !== null && !(c.f & T) && (f.f ^= T)
            }
            for (a = 0; a < s; a++)
                if (l = n[a], Z(l) && $t(l), l.wv > t.wv) return !0
        }(!r || h !== null && !k) && x(t, y)
    }
    return !1
}

function $n(t, e) {
    for (var n = e; n !== null;) {
        if (n.f & rt) try {
            n.fn(t);
            return
        } catch (r) {
            n.f ^= rt
        }
        n = n.parent
    }
    throw et = !1, t
}

function Wn(t) {
    return (t.f & _t) === 0 && (t.parent === null || (t.parent.f & rt) === 0)
}

function pt(t, e, n, r) {
    if (et) {
        if (n === null && (et = !1), Wn(e)) throw t;
        return
    }
    n !== null && (et = !0); {
        $n(t, e);
        return
    }
}

function cn(t, e, n = !0) {
    var r = t.reactions;
    if (r !== null)
        for (var a = 0; a < r.length; a++) {
            var l = r[a];
            w != null && w.includes(t) || (l.f & A ? cn(l, e, !1) : e === l && (n ? x(l, N) : l.f & y && x(l, P), dt(l)))
        }
}

function vn(t) {
    var I, F;
    var e = d,
        n = g,
        r = m,
        a = v,
        l = k,
        i = w,
        u = p,
        s = b,
        f = t.f;
    d = null, g = 0, m = null, k = (f & T) !== 0 && (b || !q || v === null), v = f & (S | G) ? null : t, w = null, kt(t.ctx), b = !1, ut++, t.f |= Et;
    try {
        var c = (0, t.fn)(),
            o = t.deps;
        if (d !== null) {
            var _;
            if (it(t, g), o !== null && g > 0)
                for (o.length = g + d.length, _ = 0; _ < d.length; _++) o[g + _] = d[_];
            else t.deps = o = d;
            if (!k)
                for (_ = g; _ < o.length; _++)((F = (I = o[_]).reactions) != null ? F : I.reactions = []).push(t)
        } else o !== null && g < o.length && (it(t, g), o.length = g);
        if (vt() && m !== null && !b && o !== null && !(t.f & (A | P | N)))
            for (_ = 0; _ < m.length; _++) cn(m[_], t);
        return a !== t && (ut++, m !== null && (r === null ? r = m : r.push(...m))), c
    } finally {
        d = e, g = n, m = r, v = a, k = l, w = i, kt(u), b = s, t.f ^= Et
    }
}

function Xn(t, e) {
    let n = e.reactions;
    if (n !== null) {
        var r = dn.call(n, t);
        if (r !== -1) {
            var a = n.length - 1;
            a === 0 ? n = e.reactions = null : (n[r] = n[a], n.pop())
        }
    }
    n === null && e.f & A && (d === null || !d.includes(e)) && (x(e, P), e.f & (T | at) || (e.f ^= at), Kt(e), it(e, 0))
}

function it(t, e) {
    var n = t.deps;
    if (n !== null)
        for (var r = e; r < n.length; r++) Xn(t, n[r])
}

function ht(t) {
    var e = t.f;
    if (!(e & _t)) {
        x(t, y);
        var n = h,
            r = p,
            a = q;
        h = t, q = !0;
        try {
            e & xt ? Un(t) : en(t), nn(t);
            var l = vn(t);
            t.teardown = typeof l == "function" ? l : null, t.wv = on;
            var i = t.deps,
                u
        } catch (s) {
            pt(s, t, n, r || t.ctx)
        } finally {
            q = a, h = n
        }
    }
}

function zn() {
    try {
        Rn()
    } catch (t) {
        if (st !== null) pt(t, st, null);
        else throw t
    }
}

function pn() {
    var t = q;
    try {
        var e = 0;
        for (q = !0; W.length > 0;) {
            e++ > 1e3 && zn();
            var n = W,
                r = n.length;
            W = [];
            for (var a = 0; a < r; a++) {
                var l = Qn(n[a]);
                Jn(l)
            }
            X.clear()
        }
    } finally {
        lt = !1, q = t, st = null
    }
}

function Jn(t) {
    var e = t.length;
    if (e !== 0)
        for (var n = 0; n < e; n++) {
            var r = t[n];
            if (!(r.f & (_t | U))) try {
                Z(r) && (ht(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? rn(r) : r.fn = null))
            } catch (a) {
                pt(a, r, null, r.ctx)
            }
        }
}

function dt(t) {
    lt || (lt = !0, queueMicrotask(pn));
    for (var e = st = t; e.parent !== null;) {
        e = e.parent;
        var n = e.f;
        if (n & (G | S)) {
            if (!(n & y)) return;
            e.f ^= y
        }
    }
    W.push(e)
}

function Qn(t) {
    for (var e = [], n = t; n !== null;) {
        var r = n.f,
            a = (r & (S | G)) !== 0,
            l = a && (r & y) !== 0;
        if (!l && !(r & U)) {
            if (r & Yt) e.push(n);
            else if (a) n.f ^= y;
            else {
                var i = v;
                try {
                    v = n, Z(n) && ht(n)
                } catch (f) {
                    pt(f, n, null, n.ctx)
                } finally {
                    v = i
                }
            }
            var u = n.first;
            if (u !== null) {
                n = u;
                continue
            }
        }
        var s = n.parent;
        for (n = n.next; n === null && s !== null;) n = s.next, s = s.parent
    }
    return e
}

function te(t) {
    var e;
    for (Mt(); W.length > 0;) lt = !0, pn(), Mt();
    return e
}

function fr() {
    return St(this, null, function*() {
        yield Promise.resolve(), te()
    })
}

function C(t) {
    var e = t.f,
        n = (e & A) !== 0;
    if (M !== null && M.add(t), v !== null && !b) {
        if (!(w != null && w.includes(t))) {
            var r = v.deps;
            t.rv < ut && (t.rv = ut, d === null && r !== null && r[g] === t ? g++ : d === null ? d = [t] : (!k || !d.includes(t)) && d.push(t))
        }
    } else if (n && t.deps === null && t.effects === null) {
        var a = t,
            l = a.parent;
        l !== null && !(l.f & T) && (a.f ^= T)
    }
    return n && (a = t, Z(a) && $t(a)), tt && X.has(t) ? X.get(t) : t.v
}

function ne(t) {
    var e = M;
    M = new Set;
    var n = M,
        r;
    try {
        if (wt(t), e !== null)
            for (r of M) e.add(r)
    } finally {
        M = e
    }
    return n
}

function ur(t) {
    var e = ne(() => wt(t));
    for (var n of e)
        if (n.f & Tn)
            for (const r of n.deps || []) r.f & A || gt(r, r.v);
        else gt(n, n.v)
}

function wt(t) {
    var e = b;
    try {
        return b = !0, t()
    } finally {
        b = e
    }
}
const ee = -7169;

function x(t, e) {
    t.f = t.f & ee | e
}

function ir(t) {
    if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
        if (L in t) At(t);
        else if (!Array.isArray(t))
            for (let e in t) {
                const n = t[e];
                typeof n == "object" && n && L in n && At(n)
            }
    }
}

function At(t, e = new Set) {
    if (typeof t == "object" && t !== null && !(t instanceof EventTarget) && !e.has(t)) {
        e.add(t), t instanceof Date && t.getTime();
        for (let r in t) try {
            At(t[r], e)
        } catch (a) {}
        const n = qt(t);
        if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
            const r = wn(n);
            for (let a in r) {
                const l = r[a].get;
                if (l) try {
                    l.call(t)
                } catch (i) {}
            }
        }
    }
}
export {
    qn as $, R as A, tn as B, Fe as C, Rt as D, Ht as E, lr as F, An as G, Pn as H, p as I, ce as J, ct as K, hn as L, Be as M, H as N, Xt as O, Gt as P, z as Q, mt as R, L as S, Tt as T, we as U, kn as V, Ge as W, He as X, Cn as Y, ar as Z, Vn as _, nr as a, U as a0, ae as a1, h as a2, he as a3, gt as a4, de as a5, Ot as a6, ye as a7, an as a8, Xe as a9, M as aA, se as aB, xt as aC, gn as aD, Re as aE, V as aF, ft as aG, v as aH, Ie as aI, Oe as aJ, te as aK, fr as aL, oe as aM, Se as aN, qt as aO, wn as aP, sr as aQ, mn as aR, jn as aS, be as aT, Ne as aU, ur as aV, je as aW, yn as aX, De as aY, ke as aZ, Gn as aa, Ee as ab, Ke as ac, Dn as ad, _e as ae, Qe as af, vt as ag, Hn as ah, Ye as ai, Je as aj, jt as ak, ue as al, It as am, pe as an, E as ao, le as ap, $ as aq, ve as ar, Tn as as, me as at, Vt as au, Ae as av, ie as aw, Te as ax, ge as ay, xe as az, Pe as b, Le as c, ir as d, We as e, $e as f, C as g, Ze as h, ze as i, wt as j, D as k, tr as l, qe as m, Ve as n, Ft as o, Ce as p, B as q, Ue as r, O as s, er as t, Me as u, Bn as v, rr as w, fe as x, Y as y, j as z
};