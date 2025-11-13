import {
    T as ee,
    v as ae,
    U as Z,
    Q as S,
    z as C,
    R as re,
    M as ne,
    g as X,
    c as fe,
    V as ie,
    W as z,
    X as b,
    A as g,
    Y as le,
    Z as G,
    w as J,
    _ as ue,
    a0 as D,
    a1 as K,
    F as se,
    a2 as B,
    a3 as k,
    a4 as F,
    a5 as y,
    m as ve,
    a6 as Q,
    L as te,
    a7 as de,
    a8 as _e,
    a9 as ce,
    aa as he,
    y as oe,
    ab as Ee,
    N as pe
} from "./runtime.B7th0A2U.js";

function we(l, e) {
    return e
}

function Ae(l, e, a, s) {
    for (var t = [], _ = e.length, v = 0; v < _; v++) _e(e[v].e, t, !0);
    var c = _ > 0 && t.length === 0 && a !== null;
    if (c) {
        var T = a.parentNode;
        ce(T), T.append(a), s.clear(), w(l, e[0].prev, e[_ - 1].next)
    }
    he(t, () => {
        for (var o = 0; o < _; o++) {
            var d = e[o];
            c || (s.delete(d.k), w(l, d.prev, d.next)), oe(d.e, !c)
        }
    })
}

function Ce(l, e, a, s, t, _ = null) {
    var v = l,
        c = {
            flags: e,
            items: new Map,
            first: null
        },
        T = (e & Z) !== 0;
    if (T) {
        var o = l;
        v = C ? S(re(o)) : o.appendChild(ee())
    }
    C && ne();
    var d = null,
        N = !1,
        f = fe(() => {
            var u = a();
            return te(u) ? u : u == null ? [] : K(u)
        });
    ae(() => {
        var u = X(f),
            r = u.length;
        if (N && r === 0) return;
        N = r === 0;
        let E = !1;
        if (C) {
            var p = v.data === ie;
            p !== (r === 0) && (v = z(), S(v), b(!1), E = !0)
        }
        if (C) {
            for (var A = null, I, h = 0; h < r; h++) {
                if (g.nodeType === 8 && g.data === le) {
                    v = g, E = !0, b(!1);
                    break
                }
                var n = u[h],
                    i = s(n, h);
                I = P(g, c, A, null, n, i, h, t, e, a), c.items.set(i, I), A = I
            }
            r > 0 && S(z())
        }
        C || Te(u, c, v, t, e, s, a), _ !== null && (r === 0 ? d ? G(d) : d = J(() => _(v)) : d !== null && ue(d, () => {
            d = null
        })), E && b(!0), X(f)
    }), C && (v = g)
}

function Te(l, e, a, s, t, _, v) {
    var O, V, Y, q;
    var c = (t & de) !== 0,
        T = (t & (k | y)) !== 0,
        o = l.length,
        d = e.items,
        N = e.first,
        f = N,
        u, r = null,
        E, p = [],
        A = [],
        I, h, n, i;
    if (c)
        for (i = 0; i < o; i += 1) I = l[i], h = _(I, i), n = d.get(h), n !== void 0 && ((O = n.a) == null || O.measure(), (E != null ? E : E = new Set).add(n));
    for (i = 0; i < o; i += 1) {
        if (I = l[i], h = _(I, i), n = d.get(h), n === void 0) {
            var $ = f ? f.e.nodes_start : a;
            r = P($, e, r, r === null ? e.first : r.next, I, h, i, s, t, v), d.set(h, r), p = [], A = [], f = r.next;
            continue
        }
        if (T && Ie(n, I, i, t), n.e.f & D && (G(n.e), c && ((V = n.a) == null || V.unfix(), (E != null ? E : E = new Set).delete(n))), n !== f) {
            if (u !== void 0 && u.has(n)) {
                if (p.length < A.length) {
                    var m = A[0],
                        x;
                    r = m.prev;
                    var L = p[0],
                        H = p[p.length - 1];
                    for (x = 0; x < p.length; x += 1) W(p[x], m, a);
                    for (x = 0; x < A.length; x += 1) u.delete(A[x]);
                    w(e, L.prev, H.next), w(e, r, L), w(e, H, m), f = m, r = H, i -= 1, p = [], A = []
                } else u.delete(n), W(n, f, a), w(e, n.prev, n.next), w(e, n, r === null ? e.first : r.next), w(e, r, n), r = n;
                continue
            }
            for (p = [], A = []; f !== null && f.k !== h;) f.e.f & D || (u != null ? u : u = new Set).add(f), A.push(f), f = f.next;
            if (f === null) continue;
            n = f
        }
        p.push(n), r = n, f = n.next
    }
    if (f !== null || u !== void 0) {
        for (var R = u === void 0 ? [] : K(u); f !== null;) f.e.f & D || R.push(f), f = f.next;
        var M = R.length;
        if (M > 0) {
            var j = t & Z && o === 0 ? a : null;
            if (c) {
                for (i = 0; i < M; i += 1)(Y = R[i].a) == null || Y.measure();
                for (i = 0; i < M; i += 1)(q = R[i].a) == null || q.fix()
            }
            Ae(e, R, j, d)
        }
    }
    c && se(() => {
        var U;
        if (E !== void 0)
            for (n of E)(U = n.a) == null || U.apply()
    }), B.first = e.first && e.first.e, B.last = r && r.e
}

function Ie(l, e, a, s) {
    s & k && F(l.v, e), s & y ? F(l.i, a) : l.i = a
}

function P(l, e, a, s, t, _, v, c, T, o) {
    var d = (T & k) !== 0,
        N = (T & Ee) === 0,
        f = d ? N ? ve(t) : Q(t) : t,
        u = T & y ? Q(v) : v,
        r = {
            i: u,
            v: f,
            k: _,
            a: null,
            e: null,
            prev: a,
            next: s
        };
    try {
        return r.e = J(() => c(l, f, u, o), C), r.e.prev = a && a.e, r.e.next = s && s.e, a === null ? e.first = r : (a.next = r, a.e.next = r.e), s !== null && (s.prev = r, s.e.prev = r.e), r
    } finally {}
}

function W(l, e, a) {
    for (var s = l.next ? l.next.e.nodes_start : a, t = e ? e.e.nodes_start : a, _ = l.e.nodes_start; _ !== s;) {
        var v = pe(_);
        t.before(_), _ = v
    }
}

function w(l, e, a) {
    e === null ? l.first = a : (e.next = a, e.e.next = a && a.e), a !== null && (a.prev = e, a.e.prev = e && e.e)
}
export {
    Ce as e, we as i
};