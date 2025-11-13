var He = Object.defineProperty,
    ze = Object.defineProperties;
var je = Object.getOwnPropertyDescriptors;
var Vt = Object.getOwnPropertySymbols;
var he = Object.prototype.hasOwnProperty,
    ce = Object.prototype.propertyIsEnumerable;
var le = (u, t, e) => t in u ? He(u, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: e
    }) : u[t] = e,
    x = (u, t) => {
        for (var e in t || (t = {})) he.call(t, e) && le(u, e, t[e]);
        if (Vt)
            for (var e of Vt(t)) ce.call(t, e) && le(u, e, t[e]);
        return u
    },
    O = (u, t) => ze(u, je(t));
var z = (u, t) => {
    var e = {};
    for (var s in u) he.call(u, s) && t.indexOf(s) < 0 && (e[s] = u[s]);
    if (u != null && Vt)
        for (var s of Vt(u)) t.indexOf(s) < 0 && ce.call(u, s) && (e[s] = u[s]);
    return e
};
import {
    f as Ge
} from "./Image.uyohTMJQ.js";
import {
    t as qe,
    a as Ke
} from "./disclose-version.Cr9xuhkA.js";
import {
    p as Ye,
    h as de,
    r as pe,
    e as Xe,
    B as Ze,
    t as Qe,
    b as Je
} from "./runtime.B7th0A2U.js";
import {
    s as We
} from "./render.DCpC4m_T.js";
import {
    a as fe
} from "./actions.CAd6_Ft5.js";
import {
    r as $e,
    b as ft,
    a as ge
} from "./attributes.CecWNX5Z.js";
import {
    b as ts
} from "./input.zq82Y1YP.js";
import {
    p as rt
} from "./props.C7v_At4K.js";

function Jt(u) {
    return typeof u == "number"
}

function Xt(u) {
    return typeof u == "string"
}

function Lt(u) {
    return typeof u == "boolean"
}

function me(u) {
    return Object.prototype.toString.call(u) === "[object Object]"
}

function M(u) {
    return Math.abs(u)
}

function Wt(u) {
    return Math.sign(u)
}

function xt(u, t) {
    return M(u - t)
}

function es(u, t) {
    if (u === 0 || t === 0 || M(u) <= M(t)) return 0;
    const e = xt(M(u), M(t));
    return M(e / u)
}

function ss(u) {
    return Math.round(u * 100) / 100
}

function bt(u) {
    return yt(u).map(Number)
}

function Y(u) {
    return u[Dt(u)]
}

function Dt(u) {
    return Math.max(0, u.length - 1)
}

function $t(u, t) {
    return t === Dt(u)
}

function ke(u, t = 0) {
    return Array.from(Array(u), (e, s) => t + s)
}

function yt(u) {
    return Object.keys(u)
}

function Ce(u, t) {
    return [u, t].reduce((e, s) => (yt(s).forEach(n => {
        const i = e[n],
            r = s[n],
            a = me(i) && me(r);
        e[n] = a ? Ce(i, r) : r
    }), e), {})
}

function Zt(u, t) {
    return typeof t.MouseEvent != "undefined" && u instanceof t.MouseEvent
}

function ns(u, t) {
    const e = {
        start: s,
        center: n,
        end: i
    };

    function s() {
        return 0
    }

    function n(o) {
        return i(o) / 2
    }

    function i(o) {
        return t - o
    }

    function r(o, l) {
        return Xt(u) ? e[u](o) : u(t, o, l)
    }
    return {
        measure: r
    }
}

function Bt() {
    let u = [];

    function t(n, i, r, a = {
        passive: !0
    }) {
        let o;
        if ("addEventListener" in n) n.addEventListener(i, r, a), o = () => n.removeEventListener(i, r, a);
        else {
            const l = n;
            l.addListener(r), o = () => l.removeListener(r)
        }
        return u.push(o), s
    }

    function e() {
        u = u.filter(n => n())
    }
    const s = {
        add: t,
        clear: e
    };
    return s
}

function is(u, t, e, s) {
    const n = Bt(),
        i = 1e3 / 60;
    let r = null,
        a = 0,
        o = 0;

    function l() {
        n.add(u, "visibilitychange", () => {
            u.hidden && d()
        })
    }

    function f() {
        _(), n.clear()
    }

    function c(k) {
        if (!o) return;
        r || (r = k, e(), e());
        const h = k - r;
        for (r = k, a += h; a >= i;) e(), a -= i;
        const m = a / i;
        s(m), o && (o = t.requestAnimationFrame(c))
    }

    function p() {
        o || (o = t.requestAnimationFrame(c))
    }

    function _() {
        t.cancelAnimationFrame(o), r = null, a = 0, o = 0
    }

    function d() {
        r = null, a = 0
    }
    return {
        init: l,
        destroy: f,
        start: p,
        stop: _,
        update: e,
        render: s
    }
}

function rs(u, t) {
    const e = t === "rtl",
        s = u === "y",
        n = s ? "y" : "x",
        i = s ? "x" : "y",
        r = !s && e ? -1 : 1,
        a = f(),
        o = c();

    function l(d) {
        const {
            height: g,
            width: k
        } = d;
        return s ? g : k
    }

    function f() {
        return s ? "top" : e ? "right" : "left"
    }

    function c() {
        return s ? "bottom" : e ? "left" : "right"
    }

    function p(d) {
        return d * r
    }
    return {
        scroll: n,
        cross: i,
        startEdge: a,
        endEdge: o,
        measureSize: l,
        direction: p
    }
}

function mt(u = 0, t = 0) {
    const e = M(u - t);

    function s(l) {
        return l < u
    }

    function n(l) {
        return l > t
    }

    function i(l) {
        return s(l) || n(l)
    }

    function r(l) {
        return i(l) ? s(l) ? u : t : l
    }

    function a(l) {
        return e ? l - e * Math.ceil((l - t) / e) : l
    }
    return {
        length: e,
        max: t,
        min: u,
        constrain: r,
        reachedAny: i,
        reachedMax: n,
        reachedMin: s,
        removeOffset: a
    }
}

function Ae(u, t, e) {
    const {
        constrain: s
    } = mt(0, u), n = u + 1;
    let i = r(t);

    function r(p) {
        return e ? M((n + p) % n) : s(p)
    }

    function a() {
        return i
    }

    function o(p) {
        return i = r(p), c
    }

    function l(p) {
        return f().set(a() + p)
    }

    function f() {
        return Ae(u, a(), e)
    }
    const c = {
        get: a,
        set: o,
        add: l,
        clone: f
    };
    return c
}

function us(u, t, e, s, n, i, r, a, o, l, f, c, p, _, d, g, k, h, m) {
    const {
        cross: v,
        direction: y
    } = u, V = ["INPUT", "SELECT", "TEXTAREA"], B = {
        passive: !1
    }, S = Bt(), b = Bt(), I = mt(50, 225).constrain(_.measure(20)), R = {
        mouse: 300,
        touch: 400
    }, D = {
        mouse: 500,
        touch: 600
    }, j = d ? 43 : 25;
    let X = !1,
        Z = 0,
        Q = 0,
        ct = !1,
        ot = !1,
        tt = !1,
        et = !1;

    function Et(E) {
        if (!m) return;

        function T(H) {
            (Lt(m) || m(E, H)) && At(H)
        }
        const L = t;
        S.add(L, "dragstart", H => H.preventDefault(), B).add(L, "touchmove", () => {}, B).add(L, "touchend", () => {}).add(L, "touchstart", T).add(L, "mousedown", T).add(L, "touchcancel", U).add(L, "contextmenu", U).add(L, "click", nt, !0)
    }

    function J() {
        S.clear(), b.clear()
    }

    function kt() {
        const E = et ? e : t;
        b.add(E, "touchmove", G, B).add(E, "touchend", U).add(E, "mousemove", G, B).add(E, "mouseup", U)
    }

    function _t(E) {
        const T = E.nodeName || "";
        return V.includes(T)
    }

    function st() {
        return (d ? D : R)[et ? "mouse" : "touch"]
    }

    function Ct(E, T) {
        const L = c.add(Wt(E) * -1),
            H = f.byDistance(E, !d).distance;
        return d || M(E) < I ? H : k && T ? H * .5 : f.byIndex(L.get(), 0).distance
    }

    function At(E) {
        const T = Zt(E, s);
        et = T, tt = d && T && !E.buttons && X, X = xt(n.get(), r.get()) >= 2, !(T && E.button !== 0) && (_t(E.target) || (ct = !0, i.pointerDown(E), l.useFriction(0).useDuration(0), n.set(r), kt(), Z = i.readPoint(E), Q = i.readPoint(E, v), p.emit("pointerDown")))
    }

    function G(E) {
        if (!Zt(E, s) && E.touches.length >= 2) return U(E);
        const L = i.readPoint(E),
            H = i.readPoint(E, v),
            W = xt(L, Z),
            it = xt(H, Q);
        if (!ot && !et && (!E.cancelable || (ot = W > it, !ot))) return U(E);
        const dt = i.pointerMove(E);
        W > g && (tt = !0), l.useFriction(.3).useDuration(.75), a.start(), n.add(y(dt)), E.preventDefault()
    }

    function U(E) {
        const L = f.byDistance(0, !1).index !== c.get(),
            H = i.pointerUp(E) * st(),
            W = Ct(y(H), L),
            it = es(H, W),
            dt = j - 10 * it,
            lt = h + it / 50;
        ot = !1, ct = !1, b.clear(), l.useDuration(dt).useFriction(lt), o.distance(W, !d), et = !1, p.emit("pointerUp")
    }

    function nt(E) {
        tt && (E.stopPropagation(), E.preventDefault(), tt = !1)
    }

    function K() {
        return ct
    }
    return {
        init: Et,
        destroy: J,
        pointerDown: K
    }
}

function as(u, t) {
    let s, n;

    function i(c) {
        return c.timeStamp
    }

    function r(c, p) {
        const d = `client${(p||u.scroll)==="x"?"X":"Y"}`;
        return (Zt(c, t) ? c : c.touches[0])[d]
    }

    function a(c) {
        return s = c, n = c, r(c)
    }

    function o(c) {
        const p = r(c) - r(n),
            _ = i(c) - i(s) > 170;
        return n = c, _ && (s = c), p
    }

    function l(c) {
        if (!s || !n) return 0;
        const p = r(n) - r(s),
            _ = i(c) - i(s),
            d = i(c) - i(n) > 170,
            g = p / _;
        return _ && !d && M(g) > .1 ? g : 0
    }
    return {
        pointerDown: a,
        pointerMove: o,
        pointerUp: l,
        readPoint: r
    }
}

function os() {
    function u(e) {
        const {
            offsetTop: s,
            offsetLeft: n,
            offsetWidth: i,
            offsetHeight: r
        } = e;
        return {
            top: s,
            right: n + i,
            bottom: s + r,
            left: n,
            width: i,
            height: r
        }
    }
    return {
        measure: u
    }
}

function ls(u) {
    function t(s) {
        return u * (s / 100)
    }
    return {
        measure: t
    }
}

function hs(u, t, e, s, n, i, r) {
    const a = [u].concat(s);
    let o, l, f = [],
        c = !1;

    function p(k) {
        return n.measureSize(r.measure(k))
    }

    function _(k) {
        if (!i) return;
        l = p(u), f = s.map(p);

        function h(m) {
            for (const v of m) {
                if (c) return;
                const y = v.target === u,
                    V = s.indexOf(v.target),
                    B = y ? l : f[V],
                    S = p(y ? u : s[V]);
                if (M(S - B) >= .5) {
                    k.reInit(), t.emit("resize");
                    break
                }
            }
        }
        o = new ResizeObserver(m => {
            (Lt(i) || i(k, m)) && h(m)
        }), e.requestAnimationFrame(() => {
            a.forEach(m => o.observe(m))
        })
    }

    function d() {
        c = !0, o && o.disconnect()
    }
    return {
        init: _,
        destroy: d
    }
}

function cs(u, t, e, s, n, i) {
    let r = 0,
        a = 0,
        o = n,
        l = i,
        f = u.get(),
        c = 0;

    function p() {
        const B = s.get() - u.get(),
            S = !o;
        let b = 0;
        return S ? (r = 0, e.set(s), u.set(s), b = B) : (e.set(u), r += B / o, r *= l, f += r, u.add(r), b = f - c), a = Wt(b), c = f, V
    }

    function _() {
        const B = s.get() - t.get();
        return M(B) < .001
    }

    function d() {
        return o
    }

    function g() {
        return a
    }

    function k() {
        return r
    }

    function h() {
        return v(n)
    }

    function m() {
        return y(i)
    }

    function v(B) {
        return o = B, V
    }

    function y(B) {
        return l = B, V
    }
    const V = {
        direction: g,
        duration: d,
        velocity: k,
        seek: p,
        settled: _,
        useBaseFriction: m,
        useBaseDuration: h,
        useFriction: y,
        useDuration: v
    };
    return V
}

function ds(u, t, e, s, n) {
    const i = n.measure(10),
        r = n.measure(50),
        a = mt(.1, .99);
    let o = !1;

    function l() {
        return !(o || !u.reachedAny(e.get()) || !u.reachedAny(t.get()))
    }

    function f(_) {
        if (!l()) return;
        const d = u.reachedMin(t.get()) ? "min" : "max",
            g = M(u[d] - t.get()),
            k = e.get() - t.get(),
            h = a.constrain(g / r);
        e.subtract(k * h), !_ && M(k) < i && (e.set(u.constrain(e.get())), s.useDuration(25).useBaseFriction())
    }

    function c(_) {
        o = !_
    }
    return {
        shouldConstrain: l,
        constrain: f,
        toggleActive: c
    }
}

function ps(u, t, e, s, n) {
    const i = mt(-t + u, 0),
        r = c(),
        a = f(),
        o = p();

    function l(d, g) {
        return xt(d, g) <= 1
    }

    function f() {
        const d = r[0],
            g = Y(r),
            k = r.lastIndexOf(d),
            h = r.indexOf(g) + 1;
        return mt(k, h)
    }

    function c() {
        return e.map((d, g) => {
            const {
                min: k,
                max: h
            } = i, m = i.constrain(d), v = !g, y = $t(e, g);
            return v ? h : y || l(k, m) ? k : l(h, m) ? h : m
        }).map(d => parseFloat(d.toFixed(3)))
    }

    function p() {
        if (t <= u + n) return [i.max];
        if (s === "keepSnaps") return r;
        const {
            min: d,
            max: g
        } = a;
        return r.slice(d, g)
    }
    return {
        snapsContained: o,
        scrollContainLimit: a
    }
}

function fs(u, t, e) {
    const s = t[0],
        n = e ? s - u : Y(t);
    return {
        limit: mt(n, s)
    }
}

function gs(u, t, e, s) {
    const i = t.min + .1,
        r = t.max + .1,
        {
            reachedMin: a,
            reachedMax: o
        } = mt(i, r);

    function l(p) {
        return p === 1 ? o(e.get()) : p === -1 ? a(e.get()) : !1
    }

    function f(p) {
        if (!l(p)) return;
        const _ = u * (p * -1);
        s.forEach(d => d.add(_))
    }
    return {
        loop: f
    }
}

function ms(u) {
    const {
        max: t,
        length: e
    } = u;

    function s(i) {
        const r = i - t;
        return e ? r / -e : 0
    }
    return {
        get: s
    }
}

function ks(u, t, e, s, n) {
    const {
        startEdge: i,
        endEdge: r
    } = u, {
        groupSlides: a
    } = n, o = c().map(t.measure), l = p(), f = _();

    function c() {
        return a(s).map(g => Y(g)[r] - g[0][i]).map(M)
    }

    function p() {
        return s.map(g => e[i] - g[i]).map(g => -M(g))
    }

    function _() {
        return a(l).map(g => g[0]).map((g, k) => g + o[k])
    }
    return {
        snaps: l,
        snapsAligned: f
    }
}

function _s(u, t, e, s, n, i) {
    const {
        groupSlides: r
    } = n, {
        min: a,
        max: o
    } = s, l = f();

    function f() {
        const p = r(i),
            _ = !u || t === "keepSnaps";
        return e.length === 1 ? [i] : _ ? p : p.slice(a, o).map((d, g, k) => {
            const h = !g,
                m = $t(k, g);
            if (h) {
                const v = Y(k[0]) + 1;
                return ke(v)
            }
            if (m) {
                const v = Dt(i) - Y(k)[0] + 1;
                return ke(v, Y(k)[0])
            }
            return d
        })
    }
    return {
        slideRegistry: l
    }
}

function vs(u, t, e, s, n) {
    const {
        reachedAny: i,
        removeOffset: r,
        constrain: a
    } = s;

    function o(d) {
        return d.concat().sort((g, k) => M(g) - M(k))[0]
    }

    function l(d) {
        const g = u ? r(d) : a(d),
            k = t.map((m, v) => ({
                diff: f(m - g, 0),
                index: v
            })).sort((m, v) => M(m.diff) - M(v.diff)),
            {
                index: h
            } = k[0];
        return {
            index: h,
            distance: g
        }
    }

    function f(d, g) {
        const k = [d, d + e, d - e];
        if (!u) return d;
        if (!g) return o(k);
        const h = k.filter(m => Wt(m) === g);
        return h.length ? o(h) : Y(k) - e
    }

    function c(d, g) {
        const k = t[d] - n.get(),
            h = f(k, g);
        return {
            index: d,
            distance: h
        }
    }

    function p(d, g) {
        const k = n.get() + d,
            {
                index: h,
                distance: m
            } = l(k),
            v = !u && i(k);
        if (!g || v) return {
            index: h,
            distance: d
        };
        const y = t[h] - m,
            V = d + f(y, 0);
        return {
            index: h,
            distance: V
        }
    }
    return {
        byDistance: p,
        byIndex: c,
        shortcut: f
    }
}

function Es(u, t, e, s, n, i, r) {
    function a(c) {
        const p = c.distance,
            _ = c.index !== t.get();
        i.add(p), p && (s.duration() ? u.start() : (u.update(), u.render(1), u.update())), _ && (e.set(t.get()), t.set(c.index), r.emit("select"))
    }

    function o(c, p) {
        const _ = n.byDistance(c, p);
        a(_)
    }

    function l(c, p) {
        const _ = t.clone().set(c),
            d = n.byIndex(_.get(), p);
        a(d)
    }
    return {
        distance: o,
        index: l
    }
}

function Cs(u, t, e, s, n, i, r, a) {
    const o = {
        passive: !0,
        capture: !0
    };
    let l = 0;

    function f(_) {
        if (!a) return;

        function d(g) {
            if (new Date().getTime() - l > 10) return;
            r.emit("slideFocusStart"), u.scrollLeft = 0;
            const m = e.findIndex(v => v.includes(g));
            Jt(m) && (n.useDuration(0), s.index(m, 0), r.emit("slideFocus"))
        }
        i.add(document, "keydown", c, !1), t.forEach((g, k) => {
            i.add(g, "focus", h => {
                (Lt(a) || a(_, h)) && d(k)
            }, o)
        })
    }

    function c(_) {
        _.code === "Tab" && (l = new Date().getTime())
    }
    return {
        init: f
    }
}

function St(u) {
    let t = u;

    function e() {
        return t
    }

    function s(o) {
        t = r(o)
    }

    function n(o) {
        t += r(o)
    }

    function i(o) {
        t -= r(o)
    }

    function r(o) {
        return Jt(o) ? o : o.get()
    }
    return {
        get: e,
        set: s,
        add: n,
        subtract: i
    }
}

function Fe(u, t) {
    const e = u.scroll === "x" ? r : a,
        s = t.style;
    let n = null,
        i = !1;

    function r(p) {
        return `translate3d(${p}px,0px,0px)`
    }

    function a(p) {
        return `translate3d(0px,${p}px,0px)`
    }

    function o(p) {
        if (i) return;
        const _ = ss(u.direction(p));
        _ !== n && (s.transform = e(_), n = _)
    }

    function l(p) {
        i = !p
    }

    function f() {
        i || (s.transform = "", t.getAttribute("style") || t.removeAttribute("style"))
    }
    return {
        clear: f,
        to: o,
        toggleActive: l
    }
}

function As(u, t, e, s, n, i, r, a, o) {
    const f = bt(n),
        c = bt(n).reverse(),
        p = h().concat(m());

    function _(S, b) {
        return S.reduce((I, R) => I - n[R], b)
    }

    function d(S, b) {
        return S.reduce((I, R) => _(I, b) > 0 ? I.concat([R]) : I, [])
    }

    function g(S) {
        return i.map((b, I) => ({
            start: b - s[I] + .5 + S,
            end: b + t - .5 + S
        }))
    }

    function k(S, b, I) {
        const R = g(b);
        return S.map(D => {
            const j = I ? 0 : -e,
                X = I ? e : 0,
                Z = I ? "end" : "start",
                Q = R[D][Z];
            return {
                index: D,
                loopPoint: Q,
                slideLocation: St(-1),
                translate: Fe(u, o[D]),
                target: () => a.get() > Q ? j : X
            }
        })
    }

    function h() {
        const S = r[0],
            b = d(c, S);
        return k(b, e, !1)
    }

    function m() {
        const S = t - r[0] - 1,
            b = d(f, S);
        return k(b, -e, !0)
    }

    function v() {
        return p.every(({
            index: S
        }) => {
            const b = f.filter(I => I !== S);
            return _(b, t) <= .1
        })
    }

    function y() {
        p.forEach(S => {
            const {
                target: b,
                translate: I,
                slideLocation: R
            } = S, D = b();
            D !== R.get() && (I.to(D), R.set(D))
        })
    }

    function V() {
        p.forEach(S => S.translate.clear())
    }
    return {
        canLoop: v,
        clear: V,
        loop: y,
        loopPoints: p
    }
}

function Fs(u, t, e) {
    let s, n = !1;

    function i(o) {
        if (!e) return;

        function l(f) {
            for (const c of f)
                if (c.type === "childList") {
                    o.reInit(), t.emit("slidesChanged");
                    break
                }
        }
        s = new MutationObserver(f => {
            n || (Lt(e) || e(o, f)) && l(f)
        }), s.observe(u, {
            childList: !0
        })
    }

    function r() {
        s && s.disconnect(), n = !0
    }
    return {
        init: i,
        destroy: r
    }
}

function Ss(u, t, e, s) {
    const n = {};
    let i = null,
        r = null,
        a, o = !1;

    function l() {
        a = new IntersectionObserver(d => {
            o || (d.forEach(g => {
                const k = t.indexOf(g.target);
                n[k] = g
            }), i = null, r = null, e.emit("slidesInView"))
        }, {
            root: u.parentElement,
            threshold: s
        }), t.forEach(d => a.observe(d))
    }

    function f() {
        a && a.disconnect(), o = !0
    }

    function c(d) {
        return yt(n).reduce((g, k) => {
            const h = parseInt(k),
                {
                    isIntersecting: m
                } = n[h];
            return (d && m || !d && !m) && g.push(h), g
        }, [])
    }

    function p(d = !0) {
        if (d && i) return i;
        if (!d && r) return r;
        const g = c(d);
        return d && (i = g), d || (r = g), g
    }
    return {
        init: l,
        destroy: f,
        get: p
    }
}

function xs(u, t, e, s, n, i) {
    const {
        measureSize: r,
        startEdge: a,
        endEdge: o
    } = u, l = e[0] && n, f = d(), c = g(), p = e.map(r), _ = k();

    function d() {
        if (!l) return 0;
        const m = e[0];
        return M(t[a] - m[a])
    }

    function g() {
        if (!l) return 0;
        const m = i.getComputedStyle(Y(s));
        return parseFloat(m.getPropertyValue(`margin-${o}`))
    }

    function k() {
        return e.map((m, v, y) => {
            const V = !v,
                B = $t(y, v);
            return V ? p[v] + f : B ? p[v] + c : y[v + 1][a] - m[a]
        }).map(M)
    }
    return {
        slideSizes: p,
        slideSizesWithGaps: _,
        startGap: f,
        endGap: c
    }
}

function bs(u, t, e, s, n, i, r, a, o) {
    const {
        startEdge: l,
        endEdge: f,
        direction: c
    } = u, p = Jt(e);

    function _(h, m) {
        return bt(h).filter(v => v % m === 0).map(v => h.slice(v, v + m))
    }

    function d(h) {
        return h.length ? bt(h).reduce((m, v, y) => {
            const V = Y(m) || 0,
                B = V === 0,
                S = v === Dt(h),
                b = n[l] - i[V][l],
                I = n[l] - i[v][f],
                R = !s && B ? c(r) : 0,
                D = !s && S ? c(a) : 0,
                j = M(I - D - (b + R));
            return y && j > t + o && m.push(v), S && m.push(h.length), m
        }, []).map((m, v, y) => {
            const V = Math.max(y[v - 1] || 0);
            return h.slice(V, m)
        }) : []
    }

    function g(h) {
        return p ? _(h, e) : d(h)
    }
    return {
        groupSlides: g
    }
}

function ys(u, t, e, s, n, i, r) {
    const {
        align: a,
        axis: o,
        direction: l,
        startIndex: f,
        loop: c,
        duration: p,
        dragFree: _,
        dragThreshold: d,
        inViewThreshold: g,
        slidesToScroll: k,
        skipSnaps: h,
        containScroll: m,
        watchResize: v,
        watchSlides: y,
        watchDrag: V,
        watchFocus: B
    } = i, S = 2, b = os(), I = b.measure(t), R = e.map(b.measure), D = rs(o, l), j = D.measureSize(I), X = ls(j), Z = ns(a, j), Q = !c && !!m, ct = c || !!m, {
        slideSizes: ot,
        slideSizesWithGaps: tt,
        startGap: et,
        endGap: Et
    } = xs(D, I, R, e, ct, n), J = bs(D, j, k, c, I, R, et, Et, S), {
        snaps: kt,
        snapsAligned: _t
    } = ks(D, Z, I, R, J), st = -Y(kt) + Y(tt), {
        snapsContained: Ct,
        scrollContainLimit: At
    } = ps(j, st, _t, m, S), G = Q ? Ct : _t, {
        limit: U
    } = fs(st, G, c), nt = Ae(Dt(G), f, c), K = nt.clone(), w = bt(e), E = ({
        dragHandler: vt,
        scrollBody: Gt,
        scrollBounds: qt,
        options: {
            loop: Tt
        }
    }) => {
        Tt || qt.constrain(vt.pointerDown()), Gt.seek()
    }, T = ({
        scrollBody: vt,
        translate: Gt,
        location: qt,
        offsetLocation: Tt,
        previousLocation: we,
        scrollLooper: Me,
        slideLooper: Re,
        dragHandler: Le,
        animation: Oe,
        eventHandler: ie,
        scrollBounds: Ne,
        options: {
            loop: re
        }
    }, ue) => {
        const ae = vt.settled(),
            Pe = !Ne.shouldConstrain(),
            oe = re ? ae : ae && Pe;
        oe && !Le.pointerDown() && (Oe.stop(), ie.emit("settle")), oe || ie.emit("scroll");
        const Ue = qt.get() * ue + we.get() * (1 - ue);
        Tt.set(Ue), re && (Me.loop(vt.direction()), Re.loop()), Gt.to(Tt.get())
    }, L = is(s, n, () => E(jt), vt => T(jt, vt)), H = .68, W = G[nt.get()], it = St(W), dt = St(W), lt = St(W), pt = St(W), Ft = cs(it, lt, dt, pt, p, H), Ht = vs(c, G, st, U, pt), zt = Es(L, nt, K, Ft, Ht, pt, r), ee = ms(U), se = Bt(), Te = Ss(t, e, r, g), {
        slideRegistry: ne
    } = _s(Q, m, G, At, J, w), Ve = Cs(u, e, ne, zt, Ft, se, r, B), jt = {
        ownerDocument: s,
        ownerWindow: n,
        eventHandler: r,
        containerRect: I,
        slideRects: R,
        animation: L,
        axis: D,
        dragHandler: us(D, u, s, n, pt, as(D, n), it, L, zt, Ft, Ht, nt, r, X, _, d, h, H, V),
        eventStore: se,
        percentOfView: X,
        index: nt,
        indexPrevious: K,
        limit: U,
        location: it,
        offsetLocation: lt,
        previousLocation: dt,
        options: i,
        resizeHandler: hs(t, r, n, e, D, v, b),
        scrollBody: Ft,
        scrollBounds: ds(U, lt, pt, Ft, X),
        scrollLooper: gs(st, U, lt, [it, lt, dt, pt]),
        scrollProgress: ee,
        scrollSnapList: G.map(ee.get),
        scrollSnaps: G,
        scrollTarget: Ht,
        scrollTo: zt,
        slideLooper: As(D, j, st, ot, tt, kt, G, lt, e),
        slideFocus: Ve,
        slidesHandler: Fs(t, r, y),
        slidesInView: Te,
        slideIndexes: w,
        slideRegistry: ne,
        slidesToScroll: J,
        target: pt,
        translate: Fe(D, t)
    };
    return jt
}

function Bs() {
    let u = {},
        t;

    function e(l) {
        t = l
    }

    function s(l) {
        return u[l] || []
    }

    function n(l) {
        return s(l).forEach(f => f(t, l)), o
    }

    function i(l, f) {
        return u[l] = s(l).concat([f]), o
    }

    function r(l, f) {
        return u[l] = s(l).filter(c => c !== f), o
    }

    function a() {
        u = {}
    }
    const o = {
        init: e,
        emit: n,
        off: r,
        on: i,
        clear: a
    };
    return o
}
const Is = {
    align: "center",
    axis: "x",
    container: null,
    slides: null,
    containScroll: "trimSnaps",
    direction: "ltr",
    slidesToScroll: 1,
    inViewThreshold: 0,
    breakpoints: {},
    dragFree: !1,
    dragThreshold: 10,
    loop: !1,
    skipSnaps: !1,
    duration: 25,
    startIndex: 0,
    active: !0,
    watchDrag: !0,
    watchResize: !0,
    watchSlides: !0,
    watchFocus: !0
};

function Ds(u) {
    function t(i, r) {
        return Ce(i, r || {})
    }

    function e(i) {
        const r = i.breakpoints || {},
            a = yt(r).filter(o => u.matchMedia(o).matches).map(o => r[o]).reduce((o, l) => t(o, l), {});
        return t(i, a)
    }

    function s(i) {
        return i.map(r => yt(r.breakpoints || {})).reduce((r, a) => r.concat(a), []).map(u.matchMedia)
    }
    return {
        mergeOptions: t,
        optionsAtMedia: e,
        optionsMediaQueries: s
    }
}

function Ts(u) {
    let t = [];

    function e(i, r) {
        return t = r.filter(({
            options: a
        }) => u.optionsAtMedia(a).active !== !1), t.forEach(a => a.init(i, u)), r.reduce((a, o) => Object.assign(a, {
            [o.name]: o
        }), {})
    }

    function s() {
        t = t.filter(i => i.destroy())
    }
    return {
        init: e,
        destroy: s
    }
}

function Se(u, t, e) {
    const s = u.ownerDocument,
        n = s.defaultView,
        i = Ds(n),
        r = Ts(i),
        a = Bt(),
        o = Bs(),
        {
            mergeOptions: l,
            optionsAtMedia: f,
            optionsMediaQueries: c
        } = i,
        {
            on: p,
            off: _,
            emit: d
        } = o,
        g = D;
    let k = !1,
        h, m = l(Is, Se.globalOptions),
        v = l(m),
        y = [],
        V, B, S;

    function b() {
        const {
            container: w,
            slides: E
        } = v;
        B = (Xt(w) ? u.querySelector(w) : w) || u.children[0];
        const L = Xt(E) ? B.querySelectorAll(E) : E;
        S = [].slice.call(L || B.children)
    }

    function I(w) {
        const E = ys(u, B, S, s, n, w, o);
        if (w.loop && !E.slideLooper.canLoop()) {
            const T = Object.assign({}, w, {
                loop: !1
            });
            return I(T)
        }
        return E
    }

    function R(w, E) {
        k || (m = l(m, w), v = f(m), y = E || y, b(), h = I(v), c([m, ...y.map(({
            options: T
        }) => T)]).forEach(T => a.add(T, "change", D)), v.active && (h.translate.to(h.location.get()), h.animation.init(), h.slidesInView.init(), h.slideFocus.init(K), h.eventHandler.init(K), h.resizeHandler.init(K), h.slidesHandler.init(K), h.options.loop && h.slideLooper.loop(), B.offsetParent && S.length && h.dragHandler.init(K), V = r.init(K, y)))
    }

    function D(w, E) {
        const T = J();
        j(), R(l({
            startIndex: T
        }, w), E), o.emit("reInit")
    }

    function j() {
        h.dragHandler.destroy(), h.eventStore.clear(), h.translate.clear(), h.slideLooper.clear(), h.resizeHandler.destroy(), h.slidesHandler.destroy(), h.slidesInView.destroy(), h.animation.destroy(), r.destroy(), a.clear()
    }

    function X() {
        k || (k = !0, a.clear(), j(), o.emit("destroy"), o.clear())
    }

    function Z(w, E, T) {
        !v.active || k || (h.scrollBody.useBaseFriction().useDuration(E === !0 ? 0 : v.duration), h.scrollTo.index(w, T || 0))
    }

    function Q(w) {
        const E = h.index.add(1).get();
        Z(E, w, -1)
    }

    function ct(w) {
        const E = h.index.add(-1).get();
        Z(E, w, 1)
    }

    function ot() {
        return h.index.add(1).get() !== J()
    }

    function tt() {
        return h.index.add(-1).get() !== J()
    }

    function et() {
        return h.scrollSnapList
    }

    function Et() {
        return h.scrollProgress.get(h.location.get())
    }

    function J() {
        return h.index.get()
    }

    function kt() {
        return h.indexPrevious.get()
    }

    function _t() {
        return h.slidesInView.get()
    }

    function st() {
        return h.slidesInView.get(!1)
    }

    function Ct() {
        return V
    }

    function At() {
        return h
    }

    function G() {
        return u
    }

    function U() {
        return B
    }

    function nt() {
        return S
    }
    const K = {
        canScrollNext: ot,
        canScrollPrev: tt,
        containerNode: U,
        internalEngine: At,
        destroy: X,
        off: _,
        on: p,
        emit: d,
        plugins: Ct,
        previousScrollSnap: kt,
        reInit: g,
        rootNode: G,
        scrollNext: Q,
        scrollPrev: ct,
        scrollProgress: Et,
        scrollSnapList: et,
        scrollTo: Z,
        selectedScrollSnap: J,
        slideNodes: nt,
        slidesInView: _t,
        slidesNotInView: st
    };
    return R(t, e), setTimeout(() => o.emit("init"), 0), K
}
Se.globalOptions = void 0;

function tn(u) {
    const t = Number(u);
    return isNaN(t) ? 0 : Ge({
        amount: t
    })
}

function ht(u) {
    return typeof u == "string" || u instanceof String
}

function _e(u) {
    var t;
    return typeof u == "object" && u != null && (u == null || (t = u.constructor) == null ? void 0 : t.name) === "Object"
}

function xe(u, t) {
    return Array.isArray(t) ? xe(u, (e, s) => t.includes(s)) : Object.entries(u).reduce((e, s) => {
        let [n, i] = s;
        return t(i, n) && (e[n] = i), e
    }, {})
}
const C = {
    NONE: "NONE",
    LEFT: "LEFT",
    FORCE_LEFT: "FORCE_LEFT",
    RIGHT: "RIGHT",
    FORCE_RIGHT: "FORCE_RIGHT"
};

function Vs(u) {
    switch (u) {
        case C.LEFT:
            return C.FORCE_LEFT;
        case C.RIGHT:
            return C.FORCE_RIGHT;
        default:
            return u
    }
}

function Kt(u) {
    return u.replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1")
}

function Mt(u, t) {
    if (t === u) return !0;
    const e = Array.isArray(t),
        s = Array.isArray(u);
    let n;
    if (e && s) {
        if (t.length != u.length) return !1;
        for (n = 0; n < t.length; n++)
            if (!Mt(t[n], u[n])) return !1;
        return !0
    }
    if (e != s) return !1;
    if (t && u && typeof t == "object" && typeof u == "object") {
        const i = t instanceof Date,
            r = u instanceof Date;
        if (i && r) return t.getTime() == u.getTime();
        if (i != r) return !1;
        const a = t instanceof RegExp,
            o = u instanceof RegExp;
        if (a && o) return t.toString() == u.toString();
        if (a != o) return !1;
        const l = Object.keys(t);
        for (n = 0; n < l.length; n++)
            if (!Object.prototype.hasOwnProperty.call(u, l[n])) return !1;
        for (n = 0; n < l.length; n++)
            if (!Mt(u[l[n]], t[l[n]])) return !1;
        return !0
    } else if (t && u && typeof t == "function" && typeof u == "function") return t.toString() === u.toString();
    return !1
}
class ws {
    constructor(t) {
        for (Object.assign(this, t); this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos);) --this.oldSelection.start;
        if (this.insertedCount)
            for (; this.value.slice(this.cursorPos) !== this.oldValue.slice(this.oldSelection.end);) this.value.length - this.cursorPos < this.oldValue.length - this.oldSelection.end ? ++this.oldSelection.end : ++this.cursorPos
    }
    get startChangePos() {
        return Math.min(this.cursorPos, this.oldSelection.start)
    }
    get insertedCount() {
        return this.cursorPos - this.startChangePos
    }
    get inserted() {
        return this.value.substr(this.startChangePos, this.insertedCount)
    }
    get removedCount() {
        return Math.max(this.oldSelection.end - this.startChangePos || this.oldValue.length - this.value.length, 0)
    }
    get removed() {
        return this.oldValue.substr(this.startChangePos, this.removedCount)
    }
    get head() {
        return this.value.substring(0, this.startChangePos)
    }
    get tail() {
        return this.value.substring(this.startChangePos + this.insertedCount)
    }
    get removeDirection() {
        return !this.removedCount || this.insertedCount ? C.NONE : (this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos) && this.oldSelection.end === this.oldSelection.start ? C.RIGHT : C.LEFT
    }
}

function A(u, t) {
    return new A.InputMask(u, t)
}

function be(u) {
    if (u == null) throw new Error("mask property should be defined");
    return u instanceof RegExp ? A.MaskedRegExp : ht(u) ? A.MaskedPattern : u === Date ? A.MaskedDate : u === Number ? A.MaskedNumber : Array.isArray(u) || u === Array ? A.MaskedDynamic : A.Masked && u.prototype instanceof A.Masked ? u : A.Masked && u instanceof A.Masked ? u.constructor : u instanceof Function ? A.MaskedFunction : (console.warn("Mask not found for mask", u), A.Masked)
}

function It(u) {
    if (!u) throw new Error("Options in not defined");
    if (A.Masked) {
        if (u.prototype instanceof A.Masked) return {
            mask: u
        };
        const t = u instanceof A.Masked ? {
                mask: u
            } : _e(u) && u.mask instanceof A.Masked ? u : {},
            {
                mask: e = void 0
            } = t,
            s = z(t, ["mask"]);
        if (e) {
            const n = e.mask;
            return x(O(x({}, xe(e, (i, r) => !r.startsWith("_"))), {
                mask: e.constructor,
                _mask: n
            }), s)
        }
    }
    return _e(u) ? x({}, u) : {
        mask: u
    }
}

function at(u) {
    if (A.Masked && u instanceof A.Masked) return u;
    const t = It(u),
        e = be(t.mask);
    if (!e) throw new Error("Masked class is not found for provided mask " + t.mask + ", appropriate module needs to be imported manually before creating mask.");
    return t.mask === e && delete t.mask, t._mask && (t.mask = t._mask, delete t._mask), new e(t)
}
A.createMask = at;
class te {
    get selectionStart() {
        let t;
        try {
            t = this._unsafeSelectionStart
        } catch (e) {}
        return t != null ? t : this.value.length
    }
    get selectionEnd() {
        let t;
        try {
            t = this._unsafeSelectionEnd
        } catch (e) {}
        return t != null ? t : this.value.length
    }
    select(t, e) {
        if (!(t == null || e == null || t === this.selectionStart && e === this.selectionEnd)) try {
            this._unsafeSelect(t, e)
        } catch (s) {}
    }
    get isActive() {
        return !1
    }
}
A.MaskElement = te;
const ve = 90,
    Ms = 89;
class Ot extends te {
    constructor(t) {
        super(), this.input = t, this._onKeydown = this._onKeydown.bind(this), this._onInput = this._onInput.bind(this), this._onBeforeinput = this._onBeforeinput.bind(this), this._onCompositionEnd = this._onCompositionEnd.bind(this)
    }
    get rootElement() {
        var t, e, s;
        return (t = (e = (s = this.input).getRootNode) == null ? void 0 : e.call(s)) != null ? t : document
    }
    get isActive() {
        return this.input === this.rootElement.activeElement
    }
    bindEvents(t) {
        this.input.addEventListener("keydown", this._onKeydown), this.input.addEventListener("input", this._onInput), this.input.addEventListener("beforeinput", this._onBeforeinput), this.input.addEventListener("compositionend", this._onCompositionEnd), this.input.addEventListener("drop", t.drop), this.input.addEventListener("click", t.click), this.input.addEventListener("focus", t.focus), this.input.addEventListener("blur", t.commit), this._handlers = t
    }
    _onKeydown(t) {
        if (this._handlers.redo && (t.keyCode === ve && t.shiftKey && (t.metaKey || t.ctrlKey) || t.keyCode === Ms && t.ctrlKey)) return t.preventDefault(), this._handlers.redo(t);
        if (this._handlers.undo && t.keyCode === ve && (t.metaKey || t.ctrlKey)) return t.preventDefault(), this._handlers.undo(t);
        t.isComposing || this._handlers.selectionChange(t)
    }
    _onBeforeinput(t) {
        if (t.inputType === "historyUndo" && this._handlers.undo) return t.preventDefault(), this._handlers.undo(t);
        if (t.inputType === "historyRedo" && this._handlers.redo) return t.preventDefault(), this._handlers.redo(t)
    }
    _onCompositionEnd(t) {
        this._handlers.input(t)
    }
    _onInput(t) {
        t.isComposing || this._handlers.input(t)
    }
    unbindEvents() {
        this.input.removeEventListener("keydown", this._onKeydown), this.input.removeEventListener("input", this._onInput), this.input.removeEventListener("beforeinput", this._onBeforeinput), this.input.removeEventListener("compositionend", this._onCompositionEnd), this.input.removeEventListener("drop", this._handlers.drop), this.input.removeEventListener("click", this._handlers.click), this.input.removeEventListener("focus", this._handlers.focus), this.input.removeEventListener("blur", this._handlers.commit), this._handlers = {}
    }
}
A.HTMLMaskElement = Ot;
class Rs extends Ot {
    constructor(t) {
        super(t), this.input = t
    }
    get _unsafeSelectionStart() {
        return this.input.selectionStart != null ? this.input.selectionStart : this.value.length
    }
    get _unsafeSelectionEnd() {
        return this.input.selectionEnd
    }
    _unsafeSelect(t, e) {
        this.input.setSelectionRange(t, e)
    }
    get value() {
        return this.input.value
    }
    set value(t) {
        this.input.value = t
    }
}
A.HTMLMaskElement = Ot;
class ye extends Ot {
    get _unsafeSelectionStart() {
        const t = this.rootElement,
            e = t.getSelection && t.getSelection(),
            s = e && e.anchorOffset,
            n = e && e.focusOffset;
        return n == null || s == null || s < n ? s : n
    }
    get _unsafeSelectionEnd() {
        const t = this.rootElement,
            e = t.getSelection && t.getSelection(),
            s = e && e.anchorOffset,
            n = e && e.focusOffset;
        return n == null || s == null || s > n ? s : n
    }
    _unsafeSelect(t, e) {
        if (!this.rootElement.createRange) return;
        const s = this.rootElement.createRange();
        s.setStart(this.input.firstChild || this.input, t), s.setEnd(this.input.lastChild || this.input, e);
        const n = this.rootElement,
            i = n.getSelection && n.getSelection();
        i && (i.removeAllRanges(), i.addRange(s))
    }
    get value() {
        return this.input.textContent || ""
    }
    set value(t) {
        this.input.textContent = t
    }
}
A.HTMLContenteditableMaskElement = ye;
class Nt {
    constructor() {
        this.states = [], this.currentIndex = 0
    }
    get currentState() {
        return this.states[this.currentIndex]
    }
    get isEmpty() {
        return this.states.length === 0
    }
    push(t) {
        this.currentIndex < this.states.length - 1 && (this.states.length = this.currentIndex + 1), this.states.push(t), this.states.length > Nt.MAX_LENGTH && this.states.shift(), this.currentIndex = this.states.length - 1
    }
    go(t) {
        return this.currentIndex = Math.min(Math.max(this.currentIndex + t, 0), this.states.length - 1), this.currentState
    }
    undo() {
        return this.go(-1)
    }
    redo() {
        return this.go(1)
    }
    clear() {
        this.states.length = 0, this.currentIndex = 0
    }
}
Nt.MAX_LENGTH = 100;
class Ls {
    constructor(t, e) {
        this.el = t instanceof te ? t : t.isContentEditable && t.tagName !== "INPUT" && t.tagName !== "TEXTAREA" ? new ye(t) : new Rs(t), this.masked = at(e), this._listeners = {}, this._value = "", this._unmaskedValue = "", this._rawInputValue = "", this.history = new Nt, this._saveSelection = this._saveSelection.bind(this), this._onInput = this._onInput.bind(this), this._onChange = this._onChange.bind(this), this._onDrop = this._onDrop.bind(this), this._onFocus = this._onFocus.bind(this), this._onClick = this._onClick.bind(this), this._onUndo = this._onUndo.bind(this), this._onRedo = this._onRedo.bind(this), this.alignCursor = this.alignCursor.bind(this), this.alignCursorFriendly = this.alignCursorFriendly.bind(this), this._bindEvents(), this.updateValue(), this._onChange()
    }
    maskEquals(t) {
        var e;
        return t == null || ((e = this.masked) == null ? void 0 : e.maskEquals(t))
    }
    get mask() {
        return this.masked.mask
    }
    set mask(t) {
        if (this.maskEquals(t)) return;
        if (!(t instanceof A.Masked) && this.masked.constructor === be(t)) {
            this.masked.updateOptions({
                mask: t
            });
            return
        }
        const e = t instanceof A.Masked ? t : at({
            mask: t
        });
        e.unmaskedValue = this.masked.unmaskedValue, this.masked = e
    }
    get value() {
        return this._value
    }
    set value(t) {
        this.value !== t && (this.masked.value = t, this.updateControl("auto"))
    }
    get unmaskedValue() {
        return this._unmaskedValue
    }
    set unmaskedValue(t) {
        this.unmaskedValue !== t && (this.masked.unmaskedValue = t, this.updateControl("auto"))
    }
    get rawInputValue() {
        return this._rawInputValue
    }
    set rawInputValue(t) {
        this.rawInputValue !== t && (this.masked.rawInputValue = t, this.updateControl(), this.alignCursor())
    }
    get typedValue() {
        return this.masked.typedValue
    }
    set typedValue(t) {
        this.masked.typedValueEquals(t) || (this.masked.typedValue = t, this.updateControl("auto"))
    }
    get displayValue() {
        return this.masked.displayValue
    }
    _bindEvents() {
        this.el.bindEvents({
            selectionChange: this._saveSelection,
            input: this._onInput,
            drop: this._onDrop,
            click: this._onClick,
            focus: this._onFocus,
            commit: this._onChange,
            undo: this._onUndo,
            redo: this._onRedo
        })
    }
    _unbindEvents() {
        this.el && this.el.unbindEvents()
    }
    _fireEvent(t, e) {
        const s = this._listeners[t];
        s && s.forEach(n => n(e))
    }
    get selectionStart() {
        return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart
    }
    get cursorPos() {
        return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd
    }
    set cursorPos(t) {
        !this.el || !this.el.isActive || (this.el.select(t, t), this._saveSelection())
    }
    _saveSelection() {
        this.displayValue !== this.el.value && console.warn("Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly."), this._selection = {
            start: this.selectionStart,
            end: this.cursorPos
        }
    }
    updateValue() {
        this.masked.value = this.el.value, this._value = this.masked.value, this._unmaskedValue = this.masked.unmaskedValue, this._rawInputValue = this.masked.rawInputValue
    }
    updateControl(t) {
        const e = this.masked.unmaskedValue,
            s = this.masked.value,
            n = this.masked.rawInputValue,
            i = this.displayValue,
            r = this.unmaskedValue !== e || this.value !== s || this._rawInputValue !== n;
        this._unmaskedValue = e, this._value = s, this._rawInputValue = n, this.el.value !== i && (this.el.value = i), t === "auto" ? this.alignCursor() : t != null && (this.cursorPos = t), r && this._fireChangeEvents(), !this._historyChanging && (r || this.history.isEmpty) && this.history.push({
            unmaskedValue: e,
            selection: {
                start: this.selectionStart,
                end: this.cursorPos
            }
        })
    }
    updateOptions(t) {
        const r = t,
            {
                mask: e
            } = r,
            s = z(r, ["mask"]),
            n = !this.maskEquals(e),
            i = this.masked.optionsIsChanged(s);
        n && (this.mask = e), i && this.masked.updateOptions(s), (n || i) && this.updateControl()
    }
    updateCursor(t) {
        t != null && (this.cursorPos = t, this._delayUpdateCursor(t))
    }
    _delayUpdateCursor(t) {
        this._abortUpdateCursor(), this._changingCursorPos = t, this._cursorChanging = setTimeout(() => {
            this.el && (this.cursorPos = this._changingCursorPos, this._abortUpdateCursor())
        }, 10)
    }
    _fireChangeEvents() {
        this._fireEvent("accept", this._inputEvent), this.masked.isComplete && this._fireEvent("complete", this._inputEvent)
    }
    _abortUpdateCursor() {
        this._cursorChanging && (clearTimeout(this._cursorChanging), delete this._cursorChanging)
    }
    alignCursor() {
        this.cursorPos = this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos, C.LEFT))
    }
    alignCursorFriendly() {
        this.selectionStart === this.cursorPos && this.alignCursor()
    }
    on(t, e) {
        return this._listeners[t] || (this._listeners[t] = []), this._listeners[t].push(e), this
    }
    off(t, e) {
        if (!this._listeners[t]) return this;
        if (!e) return delete this._listeners[t], this;
        const s = this._listeners[t].indexOf(e);
        return s >= 0 && this._listeners[t].splice(s, 1), this
    }
    _onInput(t) {
        this._inputEvent = t, this._abortUpdateCursor();
        const e = new ws({
                value: this.el.value,
                cursorPos: this.cursorPos,
                oldValue: this.displayValue,
                oldSelection: this._selection
            }),
            s = this.masked.rawInputValue,
            n = this.masked.splice(e.startChangePos, e.removed.length, e.inserted, e.removeDirection, {
                input: !0,
                raw: !0
            }).offset,
            i = s === this.masked.rawInputValue ? e.removeDirection : C.NONE;
        let r = this.masked.nearestInputPos(e.startChangePos + n, i);
        i !== C.NONE && (r = this.masked.nearestInputPos(r, C.NONE)), this.updateControl(r), delete this._inputEvent
    }
    _onChange() {
        this.displayValue !== this.el.value && this.updateValue(), this.masked.doCommit(), this.updateControl(), this._saveSelection()
    }
    _onDrop(t) {
        t.preventDefault(), t.stopPropagation()
    }
    _onFocus(t) {
        this.alignCursorFriendly()
    }
    _onClick(t) {
        this.alignCursorFriendly()
    }
    _onUndo() {
        this._applyHistoryState(this.history.undo())
    }
    _onRedo() {
        this._applyHistoryState(this.history.redo())
    }
    _applyHistoryState(t) {
        t && (this._historyChanging = !0, this.unmaskedValue = t.unmaskedValue, this.el.select(t.selection.start, t.selection.end), this._saveSelection(), this._historyChanging = !1)
    }
    destroy() {
        this._unbindEvents(), this._listeners.length = 0, delete this.el
    }
}
A.InputMask = Ls;
class F {
    static normalize(t) {
        return Array.isArray(t) ? t : [t, new F]
    }
    constructor(t) {
        Object.assign(this, {
            inserted: "",
            rawInserted: "",
            tailShift: 0,
            skip: !1
        }, t)
    }
    aggregate(t) {
        return this.inserted += t.inserted, this.rawInserted += t.rawInserted, this.tailShift += t.tailShift, this.skip = this.skip || t.skip, this
    }
    get offset() {
        return this.tailShift + this.inserted.length
    }
    get consumed() {
        return !!this.rawInserted || this.skip
    }
    equals(t) {
        return this.inserted === t.inserted && this.tailShift === t.tailShift && this.rawInserted === t.rawInserted && this.skip === t.skip
    }
}
A.ChangeDetails = F;
class $ {
    constructor(t, e, s) {
        t === void 0 && (t = ""), e === void 0 && (e = 0), this.value = t, this.from = e, this.stop = s
    }
    toString() {
        return this.value
    }
    extend(t) {
        this.value += String(t)
    }
    appendTo(t) {
        return t.append(this.toString(), {
            tail: !0
        }).aggregate(t._appendPlaceholder())
    }
    get state() {
        return {
            value: this.value,
            from: this.from,
            stop: this.stop
        }
    }
    set state(t) {
        Object.assign(this, t)
    }
    unshift(t) {
        if (!this.value.length || t != null && this.from >= t) return "";
        const e = this.value[0];
        return this.value = this.value.slice(1), e
    }
    shift() {
        if (!this.value.length) return "";
        const t = this.value[this.value.length - 1];
        return this.value = this.value.slice(0, -1), t
    }
}
class N {
    constructor(t) {
        this._value = "", this._update(x(x({}, N.DEFAULTS), t)), this._initialized = !0
    }
    updateOptions(t) {
        this.optionsIsChanged(t) && this.withValueRefresh(this._update.bind(this, t))
    }
    _update(t) {
        Object.assign(this, t)
    }
    get state() {
        return {
            _value: this.value,
            _rawInputValue: this.rawInputValue
        }
    }
    set state(t) {
        this._value = t._value
    }
    reset() {
        this._value = ""
    }
    get value() {
        return this._value
    }
    set value(t) {
        this.resolve(t, {
            input: !0
        })
    }
    resolve(t, e) {
        e === void 0 && (e = {
            input: !0
        }), this.reset(), this.append(t, e, ""), this.doCommit()
    }
    get unmaskedValue() {
        return this.value
    }
    set unmaskedValue(t) {
        this.resolve(t, {})
    }
    get typedValue() {
        return this.parse ? this.parse(this.value, this) : this.unmaskedValue
    }
    set typedValue(t) {
        this.format ? this.value = this.format(t, this) : this.unmaskedValue = String(t)
    }
    get rawInputValue() {
        return this.extractInput(0, this.displayValue.length, {
            raw: !0
        })
    }
    set rawInputValue(t) {
        this.resolve(t, {
            raw: !0
        })
    }
    get displayValue() {
        return this.value
    }
    get isComplete() {
        return !0
    }
    get isFilled() {
        return this.isComplete
    }
    nearestInputPos(t, e) {
        return t
    }
    totalInputPositions(t, e) {
        return t === void 0 && (t = 0), e === void 0 && (e = this.displayValue.length), Math.min(this.displayValue.length, e - t)
    }
    extractInput(t, e, s) {
        return t === void 0 && (t = 0), e === void 0 && (e = this.displayValue.length), this.displayValue.slice(t, e)
    }
    extractTail(t, e) {
        return t === void 0 && (t = 0), e === void 0 && (e = this.displayValue.length), new $(this.extractInput(t, e), t)
    }
    appendTail(t) {
        return ht(t) && (t = new $(String(t))), t.appendTo(this)
    }
    _appendCharRaw(t, e) {
        return t ? (this._value += t, new F({
            inserted: t,
            rawInserted: t
        })) : new F
    }
    _appendChar(t, e, s) {
        e === void 0 && (e = {});
        const n = this.state;
        let i;
        if ([t, i] = this.doPrepareChar(t, e), t && (i = i.aggregate(this._appendCharRaw(t, e)), !i.rawInserted && this.autofix === "pad")) {
            const r = this.state;
            this.state = n;
            let a = this.pad(e);
            const o = this._appendCharRaw(t, e);
            a = a.aggregate(o), o.rawInserted || a.equals(i) ? i = a : this.state = r
        }
        if (i.inserted) {
            let r, a = this.doValidate(e) !== !1;
            if (a && s != null) {
                const o = this.state;
                if (this.overwrite === !0) {
                    r = s.state;
                    for (let f = 0; f < i.rawInserted.length; ++f) s.unshift(this.displayValue.length - i.tailShift)
                }
                let l = this.appendTail(s);
                if (a = l.rawInserted.length === s.toString().length, !(a && l.inserted) && this.overwrite === "shift") {
                    this.state = o, r = s.state;
                    for (let f = 0; f < i.rawInserted.length; ++f) s.shift();
                    l = this.appendTail(s), a = l.rawInserted.length === s.toString().length
                }
                a && l.inserted && (this.state = o)
            }
            a || (i = new F, this.state = n, s && r && (s.state = r))
        }
        return i
    }
    _appendPlaceholder() {
        return new F
    }
    _appendEager() {
        return new F
    }
    append(t, e, s) {
        if (!ht(t)) throw new Error("value should be string");
        const n = ht(s) ? new $(String(s)) : s;
        e != null && e.tail && (e._beforeTailState = this.state);
        let i;
        [t, i] = this.doPrepare(t, e);
        for (let r = 0; r < t.length; ++r) {
            const a = this._appendChar(t[r], e, n);
            if (!a.rawInserted && !this.doSkipInvalid(t[r], e, n)) break;
            i.aggregate(a)
        }
        return (this.eager === !0 || this.eager === "append") && e != null && e.input && t && i.aggregate(this._appendEager()), n != null && (i.tailShift += this.appendTail(n).tailShift), i
    }
    remove(t, e) {
        return t === void 0 && (t = 0), e === void 0 && (e = this.displayValue.length), this._value = this.displayValue.slice(0, t) + this.displayValue.slice(e), new F
    }
    withValueRefresh(t) {
        if (this._refreshing || !this._initialized) return t();
        this._refreshing = !0;
        const e = this.rawInputValue,
            s = this.value,
            n = t();
        return this.rawInputValue = e, this.value && this.value !== s && s.indexOf(this.value) === 0 && (this.append(s.slice(this.displayValue.length), {}, ""), this.doCommit()), delete this._refreshing, n
    }
    runIsolated(t) {
        if (this._isolated || !this._initialized) return t(this);
        this._isolated = !0;
        const e = this.state,
            s = t(this);
        return this.state = e, delete this._isolated, s
    }
    doSkipInvalid(t, e, s) {
        return !!this.skipInvalid
    }
    doPrepare(t, e) {
        return e === void 0 && (e = {}), F.normalize(this.prepare ? this.prepare(t, this, e) : t)
    }
    doPrepareChar(t, e) {
        return e === void 0 && (e = {}), F.normalize(this.prepareChar ? this.prepareChar(t, this, e) : t)
    }
    doValidate(t) {
        return (!this.validate || this.validate(this.value, this, t)) && (!this.parent || this.parent.doValidate(t))
    }
    doCommit() {
        this.commit && this.commit(this.value, this)
    }
    splice(t, e, s, n, i) {
        s === void 0 && (s = ""), n === void 0 && (n = C.NONE), i === void 0 && (i = {
            input: !0
        });
        const r = t + e,
            a = this.extractTail(r),
            o = this.eager === !0 || this.eager === "remove";
        let l;
        o && (n = Vs(n), l = this.extractInput(0, r, {
            raw: !0
        }));
        let f = t;
        const c = new F;
        if (n !== C.NONE && (f = this.nearestInputPos(t, e > 1 && t !== 0 && !o ? C.NONE : n), c.tailShift = f - t), c.aggregate(this.remove(f)), o && n !== C.NONE && l === this.rawInputValue)
            if (n === C.FORCE_LEFT) {
                let p;
                for (; l === this.rawInputValue && (p = this.displayValue.length);) c.aggregate(new F({
                    tailShift: -1
                })).aggregate(this.remove(p - 1))
            } else n === C.FORCE_RIGHT && a.unshift();
        return c.aggregate(this.append(s, i, a))
    }
    maskEquals(t) {
        return this.mask === t
    }
    optionsIsChanged(t) {
        return !Mt(this, t)
    }
    typedValueEquals(t) {
        const e = this.typedValue;
        return t === e || N.EMPTY_VALUES.includes(t) && N.EMPTY_VALUES.includes(e) || (this.format ? this.format(t, this) === this.format(this.typedValue, this) : !1)
    }
    pad(t) {
        return new F
    }
}
N.DEFAULTS = {
    skipInvalid: !0
};
N.EMPTY_VALUES = [void 0, null, ""];
A.Masked = N;
class gt {
    constructor(t, e) {
        t === void 0 && (t = []), e === void 0 && (e = 0), this.chunks = t, this.from = e
    }
    toString() {
        return this.chunks.map(String).join("")
    }
    extend(t) {
        if (!String(t)) return;
        t = ht(t) ? new $(String(t)) : t;
        const e = this.chunks[this.chunks.length - 1],
            s = e && (e.stop === t.stop || t.stop == null) && t.from === e.from + e.toString().length;
        if (t instanceof $) s ? e.extend(t.toString()) : this.chunks.push(t);
        else if (t instanceof gt) {
            if (t.stop == null) {
                let n;
                for (; t.chunks.length && t.chunks[0].stop == null;) n = t.chunks.shift(), n.from += t.from, this.extend(n)
            }
            t.toString() && (t.stop = t.blockIndex, this.chunks.push(t))
        }
    }
    appendTo(t) {
        if (!(t instanceof A.MaskedPattern)) return new $(this.toString()).appendTo(t);
        const e = new F;
        for (let s = 0; s < this.chunks.length; ++s) {
            const n = this.chunks[s],
                i = t._mapPosToBlock(t.displayValue.length),
                r = n.stop;
            let a;
            if (r != null && (!i || i.index <= r) && ((n instanceof gt || t._stops.indexOf(r) >= 0) && e.aggregate(t._appendPlaceholder(r)), a = n instanceof gt && t._blocks[r]), a) {
                const o = a.appendTail(n);
                e.aggregate(o);
                const l = n.toString().slice(o.rawInserted.length);
                l && e.aggregate(t.append(l, {
                    tail: !0
                }))
            } else e.aggregate(t.append(n.toString(), {
                tail: !0
            }))
        }
        return e
    }
    get state() {
        return {
            chunks: this.chunks.map(t => t.state),
            from: this.from,
            stop: this.stop,
            blockIndex: this.blockIndex
        }
    }
    set state(t) {
        const n = t,
            {
                chunks: e
            } = n,
            s = z(n, ["chunks"]);
        Object.assign(this, s), this.chunks = e.map(i => {
            const r = "chunks" in i ? new gt : new $;
            return r.state = i, r
        })
    }
    unshift(t) {
        if (!this.chunks.length || t != null && this.from >= t) return "";
        const e = t != null ? t - this.from : t;
        let s = 0;
        for (; s < this.chunks.length;) {
            const n = this.chunks[s],
                i = n.unshift(e);
            if (n.toString()) {
                if (!i) break;
                ++s
            } else this.chunks.splice(s, 1);
            if (i) return i
        }
        return ""
    }
    shift() {
        if (!this.chunks.length) return "";
        let t = this.chunks.length - 1;
        for (; 0 <= t;) {
            const e = this.chunks[t],
                s = e.shift();
            if (e.toString()) {
                if (!s) break;
                --t
            } else this.chunks.splice(t, 1);
            if (s) return s
        }
        return ""
    }
}
class Os {
    constructor(t, e) {
        this.masked = t, this._log = [];
        const {
            offset: s,
            index: n
        } = t._mapPosToBlock(e) || (e < 0 ? {
            index: 0,
            offset: 0
        } : {
            index: this.masked._blocks.length,
            offset: 0
        });
        this.offset = s, this.index = n, this.ok = !1
    }
    get block() {
        return this.masked._blocks[this.index]
    }
    get pos() {
        return this.masked._blockStartPos(this.index) + this.offset
    }
    get state() {
        return {
            index: this.index,
            offset: this.offset,
            ok: this.ok
        }
    }
    set state(t) {
        Object.assign(this, t)
    }
    pushState() {
        this._log.push(this.state)
    }
    popState() {
        const t = this._log.pop();
        return t && (this.state = t), t
    }
    bindBlock() {
        this.block || (this.index < 0 && (this.index = 0, this.offset = 0), this.index >= this.masked._blocks.length && (this.index = this.masked._blocks.length - 1, this.offset = this.block.displayValue.length))
    }
    _pushLeft(t) {
        for (this.pushState(), this.bindBlock(); 0 <= this.index; --this.index, this.offset = ((e = this.block) == null ? void 0 : e.displayValue.length) || 0) {
            var e;
            if (t()) return this.ok = !0
        }
        return this.ok = !1
    }
    _pushRight(t) {
        for (this.pushState(), this.bindBlock(); this.index < this.masked._blocks.length; ++this.index, this.offset = 0)
            if (t()) return this.ok = !0;
        return this.ok = !1
    }
    pushLeftBeforeFilled() {
        return this._pushLeft(() => {
            if (!(this.block.isFixed || !this.block.value) && (this.offset = this.block.nearestInputPos(this.offset, C.FORCE_LEFT), this.offset !== 0)) return !0
        })
    }
    pushLeftBeforeInput() {
        return this._pushLeft(() => {
            if (!this.block.isFixed) return this.offset = this.block.nearestInputPos(this.offset, C.LEFT), !0
        })
    }
    pushLeftBeforeRequired() {
        return this._pushLeft(() => {
            if (!(this.block.isFixed || this.block.isOptional && !this.block.value)) return this.offset = this.block.nearestInputPos(this.offset, C.LEFT), !0
        })
    }
    pushRightBeforeFilled() {
        return this._pushRight(() => {
            if (!(this.block.isFixed || !this.block.value) && (this.offset = this.block.nearestInputPos(this.offset, C.FORCE_RIGHT), this.offset !== this.block.value.length)) return !0
        })
    }
    pushRightBeforeInput() {
        return this._pushRight(() => {
            if (!this.block.isFixed) return this.offset = this.block.nearestInputPos(this.offset, C.NONE), !0
        })
    }
    pushRightBeforeRequired() {
        return this._pushRight(() => {
            if (!(this.block.isFixed || this.block.isOptional && !this.block.value)) return this.offset = this.block.nearestInputPos(this.offset, C.NONE), !0
        })
    }
}
class Be {
    constructor(t) {
        Object.assign(this, t), this._value = "", this.isFixed = !0
    }
    get value() {
        return this._value
    }
    get unmaskedValue() {
        return this.isUnmasking ? this.value : ""
    }
    get rawInputValue() {
        return this._isRawInput ? this.value : ""
    }
    get displayValue() {
        return this.value
    }
    reset() {
        this._isRawInput = !1, this._value = ""
    }
    remove(t, e) {
        return t === void 0 && (t = 0), e === void 0 && (e = this._value.length), this._value = this._value.slice(0, t) + this._value.slice(e), this._value || (this._isRawInput = !1), new F
    }
    nearestInputPos(t, e) {
        e === void 0 && (e = C.NONE);
        const s = 0,
            n = this._value.length;
        switch (e) {
            case C.LEFT:
            case C.FORCE_LEFT:
                return s;
            case C.NONE:
            case C.RIGHT:
            case C.FORCE_RIGHT:
            default:
                return n
        }
    }
    totalInputPositions(t, e) {
        return t === void 0 && (t = 0), e === void 0 && (e = this._value.length), this._isRawInput ? e - t : 0
    }
    extractInput(t, e, s) {
        return t === void 0 && (t = 0), e === void 0 && (e = this._value.length), s === void 0 && (s = {}), s.raw && this._isRawInput && this._value.slice(t, e) || ""
    }
    get isComplete() {
        return !0
    }
    get isFilled() {
        return !!this._value
    }
    _appendChar(t, e) {
        if (e === void 0 && (e = {}), this.isFilled) return new F;
        const s = this.eager === !0 || this.eager === "append",
            i = this.char === t && (this.isUnmasking || e.input || e.raw) && (!e.raw || !s) && !e.tail,
            r = new F({
                inserted: this.char,
                rawInserted: i ? this.char : ""
            });
        return this._value = this.char, this._isRawInput = i && (e.raw || e.input), r
    }
    _appendEager() {
        return this._appendChar(this.char, {
            tail: !0
        })
    }
    _appendPlaceholder() {
        const t = new F;
        return this.isFilled || (this._value = t.inserted = this.char), t
    }
    extractTail() {
        return new $("")
    }
    appendTail(t) {
        return ht(t) && (t = new $(String(t))), t.appendTo(this)
    }
    append(t, e, s) {
        const n = this._appendChar(t[0], e);
        return s != null && (n.tailShift += this.appendTail(s).tailShift), n
    }
    doCommit() {}
    get state() {
        return {
            _value: this._value,
            _rawInputValue: this.rawInputValue
        }
    }
    set state(t) {
        this._value = t._value, this._isRawInput = !!t._rawInputValue
    }
    pad(t) {
        return this._appendPlaceholder()
    }
}
class Rt {
    constructor(t) {
        const l = t,
            {
                parent: e,
                isOptional: s,
                placeholderChar: n,
                displayChar: i,
                lazy: r,
                eager: a
            } = l,
            o = z(l, ["parent", "isOptional", "placeholderChar", "displayChar", "lazy", "eager"]);
        this.masked = at(o), Object.assign(this, {
            parent: e,
            isOptional: s,
            placeholderChar: n,
            displayChar: i,
            lazy: r,
            eager: a
        })
    }
    reset() {
        this.isFilled = !1, this.masked.reset()
    }
    remove(t, e) {
        return t === void 0 && (t = 0), e === void 0 && (e = this.value.length), t === 0 && e >= 1 ? (this.isFilled = !1, this.masked.remove(t, e)) : new F
    }
    get value() {
        return this.masked.value || (this.isFilled && !this.isOptional ? this.placeholderChar : "")
    }
    get unmaskedValue() {
        return this.masked.unmaskedValue
    }
    get rawInputValue() {
        return this.masked.rawInputValue
    }
    get displayValue() {
        return this.masked.value && this.displayChar || this.value
    }
    get isComplete() {
        return !!this.masked.value || this.isOptional
    }
    _appendChar(t, e) {
        if (e === void 0 && (e = {}), this.isFilled) return new F;
        const s = this.masked.state;
        let n = this.masked._appendChar(t, this.currentMaskFlags(e));
        return n.inserted && this.doValidate(e) === !1 && (n = new F, this.masked.state = s), !n.inserted && !this.isOptional && !this.lazy && !e.input && (n.inserted = this.placeholderChar), n.skip = !n.inserted && !this.isOptional, this.isFilled = !!n.inserted, n
    }
    append(t, e, s) {
        return this.masked.append(t, this.currentMaskFlags(e), s)
    }
    _appendPlaceholder() {
        return this.isFilled || this.isOptional ? new F : (this.isFilled = !0, new F({
            inserted: this.placeholderChar
        }))
    }
    _appendEager() {
        return new F
    }
    extractTail(t, e) {
        return this.masked.extractTail(t, e)
    }
    appendTail(t) {
        return this.masked.appendTail(t)
    }
    extractInput(t, e, s) {
        return t === void 0 && (t = 0), e === void 0 && (e = this.value.length), this.masked.extractInput(t, e, s)
    }
    nearestInputPos(t, e) {
        e === void 0 && (e = C.NONE);
        const s = 0,
            n = this.value.length,
            i = Math.min(Math.max(t, s), n);
        switch (e) {
            case C.LEFT:
            case C.FORCE_LEFT:
                return this.isComplete ? i : s;
            case C.RIGHT:
            case C.FORCE_RIGHT:
                return this.isComplete ? i : n;
            case C.NONE:
            default:
                return i
        }
    }
    totalInputPositions(t, e) {
        return t === void 0 && (t = 0), e === void 0 && (e = this.value.length), this.value.slice(t, e).length
    }
    doValidate(t) {
        return this.masked.doValidate(this.currentMaskFlags(t)) && (!this.parent || this.parent.doValidate(this.currentMaskFlags(t)))
    }
    doCommit() {
        this.masked.doCommit()
    }
    get state() {
        return {
            _value: this.value,
            _rawInputValue: this.rawInputValue,
            masked: this.masked.state,
            isFilled: this.isFilled
        }
    }
    set state(t) {
        this.masked.state = t.masked, this.isFilled = t.isFilled
    }
    currentMaskFlags(t) {
        var e;
        return O(x({}, t), {
            _beforeTailState: (t == null || (e = t._beforeTailState) == null ? void 0 : e.masked) || (t == null ? void 0 : t._beforeTailState)
        })
    }
    pad(t) {
        return new F
    }
}
Rt.DEFAULT_DEFINITIONS = {
    0: /\d/,
    a: /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
    "*": /./
};
class Ns extends N {
    updateOptions(t) {
        super.updateOptions(t)
    }
    _update(t) {
        const e = t.mask;
        e && (t.validate = s => s.search(e) >= 0), super._update(t)
    }
}
A.MaskedRegExp = Ns;
class P extends N {
    constructor(t) {
        super(O(x(x({}, P.DEFAULTS), t), {
            definitions: Object.assign({}, Rt.DEFAULT_DEFINITIONS, t == null ? void 0 : t.definitions)
        }))
    }
    updateOptions(t) {
        super.updateOptions(t)
    }
    _update(t) {
        t.definitions = Object.assign({}, this.definitions, t.definitions), super._update(t), this._rebuildMask()
    }
    _rebuildMask() {
        const t = this.definitions;
        this._blocks = [], this.exposeBlock = void 0, this._stops = [], this._maskedBlocks = {};
        const e = this.mask;
        if (!e || !t) return;
        let s = !1,
            n = !1;
        for (let r = 0; r < e.length; ++r) {
            if (this.blocks) {
                const f = e.slice(r),
                    c = Object.keys(this.blocks).filter(_ => f.indexOf(_) === 0);
                c.sort((_, d) => d.length - _.length);
                const p = c[0];
                if (p) {
                    const i = It(this.blocks[p]),
                        {
                            expose: _,
                            repeat: d
                        } = i,
                        g = z(i, ["expose", "repeat"]),
                        k = O(x({
                            lazy: this.lazy,
                            eager: this.eager,
                            placeholderChar: this.placeholderChar,
                            displayChar: this.displayChar,
                            overwrite: this.overwrite,
                            autofix: this.autofix
                        }, g), {
                            repeat: d,
                            parent: this
                        }),
                        h = d != null ? new A.RepeatBlock(k) : at(k);
                    h && (this._blocks.push(h), _ && (this.exposeBlock = h), this._maskedBlocks[p] || (this._maskedBlocks[p] = []), this._maskedBlocks[p].push(this._blocks.length - 1)), r += p.length - 1;
                    continue
                }
            }
            let a = e[r],
                o = a in t;
            if (a === P.STOP_CHAR) {
                this._stops.push(this._blocks.length);
                continue
            }
            if (a === "{" || a === "}") {
                s = !s;
                continue
            }
            if (a === "[" || a === "]") {
                n = !n;
                continue
            }
            if (a === P.ESCAPE_CHAR) {
                if (++r, a = e[r], !a) break;
                o = !1
            }
            const l = o ? new Rt(O(x({
                isOptional: n,
                lazy: this.lazy,
                eager: this.eager,
                placeholderChar: this.placeholderChar,
                displayChar: this.displayChar
            }, It(t[a])), {
                parent: this
            })) : new Be({
                char: a,
                eager: this.eager,
                isUnmasking: s
            });
            this._blocks.push(l)
        }
    }
    get state() {
        return O(x({}, super.state), {
            _blocks: this._blocks.map(t => t.state)
        })
    }
    set state(t) {
        if (!t) {
            this.reset();
            return
        }
        const n = t,
            {
                _blocks: e
            } = n,
            s = z(n, ["_blocks"]);
        this._blocks.forEach((i, r) => i.state = e[r]), super.state = s
    }
    reset() {
        super.reset(), this._blocks.forEach(t => t.reset())
    }
    get isComplete() {
        return this.exposeBlock ? this.exposeBlock.isComplete : this._blocks.every(t => t.isComplete)
    }
    get isFilled() {
        return this._blocks.every(t => t.isFilled)
    }
    get isFixed() {
        return this._blocks.every(t => t.isFixed)
    }
    get isOptional() {
        return this._blocks.every(t => t.isOptional)
    }
    doCommit() {
        this._blocks.forEach(t => t.doCommit()), super.doCommit()
    }
    get unmaskedValue() {
        return this.exposeBlock ? this.exposeBlock.unmaskedValue : this._blocks.reduce((t, e) => t += e.unmaskedValue, "")
    }
    set unmaskedValue(t) {
        if (this.exposeBlock) {
            const e = this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) + this.exposeBlock.displayValue.length);
            this.exposeBlock.unmaskedValue = t, this.appendTail(e), this.doCommit()
        } else super.unmaskedValue = t
    }
    get value() {
        return this.exposeBlock ? this.exposeBlock.value : this._blocks.reduce((t, e) => t += e.value, "")
    }
    set value(t) {
        if (this.exposeBlock) {
            const e = this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) + this.exposeBlock.displayValue.length);
            this.exposeBlock.value = t, this.appendTail(e), this.doCommit()
        } else super.value = t
    }
    get typedValue() {
        return this.exposeBlock ? this.exposeBlock.typedValue : super.typedValue
    }
    set typedValue(t) {
        if (this.exposeBlock) {
            const e = this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) + this.exposeBlock.displayValue.length);
            this.exposeBlock.typedValue = t, this.appendTail(e), this.doCommit()
        } else super.typedValue = t
    }
    get displayValue() {
        return this._blocks.reduce((t, e) => t += e.displayValue, "")
    }
    appendTail(t) {
        return super.appendTail(t).aggregate(this._appendPlaceholder())
    }
    _appendEager() {
        var t;
        const e = new F;
        let s = (t = this._mapPosToBlock(this.displayValue.length)) == null ? void 0 : t.index;
        if (s == null) return e;
        this._blocks[s].isFilled && ++s;
        for (let n = s; n < this._blocks.length; ++n) {
            const i = this._blocks[n]._appendEager();
            if (!i.inserted) break;
            e.aggregate(i)
        }
        return e
    }
    _appendCharRaw(t, e) {
        e === void 0 && (e = {});
        const s = this._mapPosToBlock(this.displayValue.length),
            n = new F;
        if (!s) return n;
        for (let r = s.index, a; a = this._blocks[r]; ++r) {
            var i;
            const o = a._appendChar(t, O(x({}, e), {
                _beforeTailState: (i = e._beforeTailState) == null || (i = i._blocks) == null ? void 0 : i[r]
            }));
            if (n.aggregate(o), o.consumed) break
        }
        return n
    }
    extractTail(t, e) {
        t === void 0 && (t = 0), e === void 0 && (e = this.displayValue.length);
        const s = new gt;
        return t === e || this._forEachBlocksInRange(t, e, (n, i, r, a) => {
            const o = n.extractTail(r, a);
            o.stop = this._findStopBefore(i), o.from = this._blockStartPos(i), o instanceof gt && (o.blockIndex = i), s.extend(o)
        }), s
    }
    extractInput(t, e, s) {
        if (t === void 0 && (t = 0), e === void 0 && (e = this.displayValue.length), s === void 0 && (s = {}), t === e) return "";
        let n = "";
        return this._forEachBlocksInRange(t, e, (i, r, a, o) => {
            n += i.extractInput(a, o, s)
        }), n
    }
    _findStopBefore(t) {
        let e;
        for (let s = 0; s < this._stops.length; ++s) {
            const n = this._stops[s];
            if (n <= t) e = n;
            else break
        }
        return e
    }
    _appendPlaceholder(t) {
        const e = new F;
        if (this.lazy && t == null) return e;
        const s = this._mapPosToBlock(this.displayValue.length);
        if (!s) return e;
        const n = s.index,
            i = t != null ? t : this._blocks.length;
        return this._blocks.slice(n, i).forEach(r => {
            if (!r.lazy || t != null) {
                var a;
                e.aggregate(r._appendPlaceholder((a = r._blocks) == null ? void 0 : a.length))
            }
        }), e
    }
    _mapPosToBlock(t) {
        let e = "";
        for (let s = 0; s < this._blocks.length; ++s) {
            const n = this._blocks[s],
                i = e.length;
            if (e += n.displayValue, t <= e.length) return {
                index: s,
                offset: t - i
            }
        }
    }
    _blockStartPos(t) {
        return this._blocks.slice(0, t).reduce((e, s) => e += s.displayValue.length, 0)
    }
    _forEachBlocksInRange(t, e, s) {
        e === void 0 && (e = this.displayValue.length);
        const n = this._mapPosToBlock(t);
        if (n) {
            const i = this._mapPosToBlock(e),
                r = i && n.index === i.index,
                a = n.offset,
                o = i && r ? i.offset : this._blocks[n.index].displayValue.length;
            if (s(this._blocks[n.index], n.index, a, o), i && !r) {
                for (let l = n.index + 1; l < i.index; ++l) s(this._blocks[l], l, 0, this._blocks[l].displayValue.length);
                s(this._blocks[i.index], i.index, 0, i.offset)
            }
        }
    }
    remove(t, e) {
        t === void 0 && (t = 0), e === void 0 && (e = this.displayValue.length);
        const s = super.remove(t, e);
        return this._forEachBlocksInRange(t, e, (n, i, r, a) => {
            s.aggregate(n.remove(r, a))
        }), s
    }
    nearestInputPos(t, e) {
        if (e === void 0 && (e = C.NONE), !this._blocks.length) return 0;
        const s = new Os(this, t);
        if (e === C.NONE) return s.pushRightBeforeInput() || (s.popState(), s.pushLeftBeforeInput()) ? s.pos : this.displayValue.length;
        if (e === C.LEFT || e === C.FORCE_LEFT) {
            if (e === C.LEFT) {
                if (s.pushRightBeforeFilled(), s.ok && s.pos === t) return t;
                s.popState()
            }
            if (s.pushLeftBeforeInput(), s.pushLeftBeforeRequired(), s.pushLeftBeforeFilled(), e === C.LEFT) {
                if (s.pushRightBeforeInput(), s.pushRightBeforeRequired(), s.ok && s.pos <= t || (s.popState(), s.ok && s.pos <= t)) return s.pos;
                s.popState()
            }
            return s.ok ? s.pos : e === C.FORCE_LEFT ? 0 : (s.popState(), s.ok || (s.popState(), s.ok) ? s.pos : 0)
        }
        return e === C.RIGHT || e === C.FORCE_RIGHT ? (s.pushRightBeforeInput(), s.pushRightBeforeRequired(), s.pushRightBeforeFilled() ? s.pos : e === C.FORCE_RIGHT ? this.displayValue.length : (s.popState(), s.ok || (s.popState(), s.ok) ? s.pos : this.nearestInputPos(t, C.LEFT))) : t
    }
    totalInputPositions(t, e) {
        t === void 0 && (t = 0), e === void 0 && (e = this.displayValue.length);
        let s = 0;
        return this._forEachBlocksInRange(t, e, (n, i, r, a) => {
            s += n.totalInputPositions(r, a)
        }), s
    }
    maskedBlock(t) {
        return this.maskedBlocks(t)[0]
    }
    maskedBlocks(t) {
        const e = this._maskedBlocks[t];
        return e ? e.map(s => this._blocks[s]) : []
    }
    pad(t) {
        const e = new F;
        return this._forEachBlocksInRange(0, this.displayValue.length, s => e.aggregate(s.pad(t))), e
    }
}
P.DEFAULTS = O(x({}, N.DEFAULTS), {
    lazy: !0,
    placeholderChar: "_"
});
P.STOP_CHAR = "`";
P.ESCAPE_CHAR = "\\";
P.InputDefinition = Rt;
P.FixedDefinition = Be;
A.MaskedPattern = P;
class wt extends P {
    get _matchFrom() {
        return this.maxLength - String(this.from).length
    }
    constructor(t) {
        super(t)
    }
    updateOptions(t) {
        super.updateOptions(t)
    }
    _update(t) {
        const f = t,
            {
                to: e = this.to || 0,
                from: s = this.from || 0,
                maxLength: n = this.maxLength || 0,
                autofix: i = this.autofix
            } = f,
            r = z(f, ["to", "from", "maxLength", "autofix"]);
        this.to = e, this.from = s, this.maxLength = Math.max(String(e).length, n), this.autofix = i;
        const a = String(this.from).padStart(this.maxLength, "0"),
            o = String(this.to).padStart(this.maxLength, "0");
        let l = 0;
        for (; l < o.length && o[l] === a[l];) ++l;
        r.mask = o.slice(0, l).replace(/0/g, "\\0") + "0".repeat(this.maxLength - l), super._update(r)
    }
    get isComplete() {
        return super.isComplete && !!this.value
    }
    boundaries(t) {
        let e = "",
            s = "";
        const [, n, i] = t.match(/^(\D*)(\d*)(\D*)/) || [];
        return i && (e = "0".repeat(n.length) + i, s = "9".repeat(n.length) + i), e = e.padEnd(this.maxLength, "0"), s = s.padEnd(this.maxLength, "9"), [e, s]
    }
    doPrepareChar(t, e) {
        e === void 0 && (e = {});
        let s;
        return [t, s] = super.doPrepareChar(t.replace(/\D/g, ""), e), t || (s.skip = !this.isComplete), [t, s]
    }
    _appendCharRaw(t, e) {
        if (e === void 0 && (e = {}), !this.autofix || this.value.length + 1 > this.maxLength) return super._appendCharRaw(t, e);
        const s = String(this.from).padStart(this.maxLength, "0"),
            n = String(this.to).padStart(this.maxLength, "0"),
            [i, r] = this.boundaries(this.value + t);
        return Number(r) < this.from ? super._appendCharRaw(s[this.value.length], e) : Number(i) > this.to ? !e.tail && this.autofix === "pad" && this.value.length + 1 < this.maxLength ? super._appendCharRaw(s[this.value.length], e).aggregate(this._appendCharRaw(t, e)) : super._appendCharRaw(n[this.value.length], e) : super._appendCharRaw(t, e)
    }
    doValidate(t) {
        const e = this.value;
        if (e.search(/[^0]/) === -1 && e.length <= this._matchFrom) return !0;
        const [n, i] = this.boundaries(e);
        return this.from <= Number(i) && Number(n) <= this.to && super.doValidate(t)
    }
    pad(t) {
        const e = new F;
        if (this.value.length === this.maxLength) return e;
        const s = this.value,
            n = this.maxLength - this.value.length;
        if (n) {
            this.reset();
            for (let i = 0; i < n; ++i) e.aggregate(super._appendCharRaw("0", t));
            s.split("").forEach(i => this._appendCharRaw(i))
        }
        return e
    }
}
A.MaskedRange = wt;
const Ps = "d{.}`m{.}`Y";
class ut extends P {
    static extractPatternOptions(t) {
        const i = t,
            {
                mask: e,
                pattern: s
            } = i,
            n = z(i, ["mask", "pattern"]);
        return O(x({}, n), {
            mask: ht(e) ? e : s
        })
    }
    constructor(t) {
        super(ut.extractPatternOptions(x(x({}, ut.DEFAULTS), t)))
    }
    updateOptions(t) {
        super.updateOptions(t)
    }
    _update(t) {
        const a = x(x({}, ut.DEFAULTS), t),
            {
                mask: e,
                pattern: s,
                blocks: n
            } = a,
            i = z(a, ["mask", "pattern", "blocks"]),
            r = Object.assign({}, ut.GET_DEFAULT_BLOCKS());
        t.min && (r.Y.from = t.min.getFullYear()), t.max && (r.Y.to = t.max.getFullYear()), t.min && t.max && r.Y.from === r.Y.to && (r.m.from = t.min.getMonth() + 1, r.m.to = t.max.getMonth() + 1, r.m.from === r.m.to && (r.d.from = t.min.getDate(), r.d.to = t.max.getDate())), Object.assign(r, this.blocks, n), super._update(O(x({}, i), {
            mask: ht(e) ? e : s,
            blocks: r
        }))
    }
    doValidate(t) {
        const e = this.date;
        return super.doValidate(t) && (!this.isComplete || this.isDateExist(this.value) && e != null && (this.min == null || this.min <= e) && (this.max == null || e <= this.max))
    }
    isDateExist(t) {
        return this.format(this.parse(t, this), this).indexOf(t) >= 0
    }
    get date() {
        return this.typedValue
    }
    set date(t) {
        this.typedValue = t
    }
    get typedValue() {
        return this.isComplete ? super.typedValue : null
    }
    set typedValue(t) {
        super.typedValue = t
    }
    maskEquals(t) {
        return t === Date || super.maskEquals(t)
    }
    optionsIsChanged(t) {
        return super.optionsIsChanged(ut.extractPatternOptions(t))
    }
}
ut.GET_DEFAULT_BLOCKS = () => ({
    d: {
        mask: wt,
        from: 1,
        to: 31,
        maxLength: 2
    },
    m: {
        mask: wt,
        from: 1,
        to: 12,
        maxLength: 2
    },
    Y: {
        mask: wt,
        from: 1900,
        to: 9999
    }
});
ut.DEFAULTS = O(x({}, P.DEFAULTS), {
    mask: Date,
    pattern: Ps,
    format: (u, t) => {
        if (!u) return "";
        const e = String(u.getDate()).padStart(2, "0"),
            s = String(u.getMonth() + 1).padStart(2, "0"),
            n = u.getFullYear();
        return [e, s, n].join(".")
    },
    parse: (u, t) => {
        const [e, s, n] = u.split(".").map(Number);
        return new Date(n, s - 1, e)
    }
});
A.MaskedDate = ut;
class Pt extends N {
    constructor(t) {
        super(x(x({}, Pt.DEFAULTS), t)), this.currentMask = void 0
    }
    updateOptions(t) {
        super.updateOptions(t)
    }
    _update(t) {
        super._update(t), "mask" in t && (this.exposeMask = void 0, this.compiledMasks = Array.isArray(t.mask) ? t.mask.map(e => {
            const r = It(e),
                {
                    expose: s
                } = r,
                n = z(r, ["expose"]),
                i = at(x({
                    overwrite: this._overwrite,
                    eager: this._eager,
                    skipInvalid: this._skipInvalid
                }, n));
            return s && (this.exposeMask = i), i
        }) : [])
    }
    _appendCharRaw(t, e) {
        e === void 0 && (e = {});
        const s = this._applyDispatch(t, e);
        return this.currentMask && s.aggregate(this.currentMask._appendChar(t, this.currentMaskFlags(e))), s
    }
    _applyDispatch(t, e, s) {
        t === void 0 && (t = ""), e === void 0 && (e = {}), s === void 0 && (s = "");
        const n = e.tail && e._beforeTailState != null ? e._beforeTailState._value : this.value,
            i = this.rawInputValue,
            r = e.tail && e._beforeTailState != null ? e._beforeTailState._rawInputValue : i,
            a = i.slice(r.length),
            o = this.currentMask,
            l = new F,
            f = o == null ? void 0 : o.state;
        return this.currentMask = this.doDispatch(t, x({}, e), s), this.currentMask && (this.currentMask !== o ? (this.currentMask.reset(), r && (this.currentMask.append(r, {
            raw: !0
        }), l.tailShift = this.currentMask.value.length - n.length), a && (l.tailShift += this.currentMask.append(a, {
            raw: !0,
            tail: !0
        }).tailShift)) : f && (this.currentMask.state = f)), l
    }
    _appendPlaceholder() {
        const t = this._applyDispatch();
        return this.currentMask && t.aggregate(this.currentMask._appendPlaceholder()), t
    }
    _appendEager() {
        const t = this._applyDispatch();
        return this.currentMask && t.aggregate(this.currentMask._appendEager()), t
    }
    appendTail(t) {
        const e = new F;
        return t && e.aggregate(this._applyDispatch("", {}, t)), e.aggregate(this.currentMask ? this.currentMask.appendTail(t) : super.appendTail(t))
    }
    currentMaskFlags(t) {
        var e, s;
        return O(x({}, t), {
            _beforeTailState: ((e = t._beforeTailState) == null ? void 0 : e.currentMaskRef) === this.currentMask && ((s = t._beforeTailState) == null ? void 0 : s.currentMask) || t._beforeTailState
        })
    }
    doDispatch(t, e, s) {
        return e === void 0 && (e = {}), s === void 0 && (s = ""), this.dispatch(t, this, e, s)
    }
    doValidate(t) {
        return super.doValidate(t) && (!this.currentMask || this.currentMask.doValidate(this.currentMaskFlags(t)))
    }
    doPrepare(t, e) {
        e === void 0 && (e = {});
        let [s, n] = super.doPrepare(t, e);
        if (this.currentMask) {
            let i;
            [s, i] = super.doPrepare(s, this.currentMaskFlags(e)), n = n.aggregate(i)
        }
        return [s, n]
    }
    doPrepareChar(t, e) {
        e === void 0 && (e = {});
        let [s, n] = super.doPrepareChar(t, e);
        if (this.currentMask) {
            let i;
            [s, i] = super.doPrepareChar(s, this.currentMaskFlags(e)), n = n.aggregate(i)
        }
        return [s, n]
    }
    reset() {
        var t;
        (t = this.currentMask) == null || t.reset(), this.compiledMasks.forEach(e => e.reset())
    }
    get value() {
        return this.exposeMask ? this.exposeMask.value : this.currentMask ? this.currentMask.value : ""
    }
    set value(t) {
        this.exposeMask ? (this.exposeMask.value = t, this.currentMask = this.exposeMask, this._applyDispatch()) : super.value = t
    }
    get unmaskedValue() {
        return this.exposeMask ? this.exposeMask.unmaskedValue : this.currentMask ? this.currentMask.unmaskedValue : ""
    }
    set unmaskedValue(t) {
        this.exposeMask ? (this.exposeMask.unmaskedValue = t, this.currentMask = this.exposeMask, this._applyDispatch()) : super.unmaskedValue = t
    }
    get typedValue() {
        return this.exposeMask ? this.exposeMask.typedValue : this.currentMask ? this.currentMask.typedValue : ""
    }
    set typedValue(t) {
        if (this.exposeMask) {
            this.exposeMask.typedValue = t, this.currentMask = this.exposeMask, this._applyDispatch();
            return
        }
        let e = String(t);
        this.currentMask && (this.currentMask.typedValue = t, e = this.currentMask.unmaskedValue), this.unmaskedValue = e
    }
    get displayValue() {
        return this.currentMask ? this.currentMask.displayValue : ""
    }
    get isComplete() {
        var t;
        return !!((t = this.currentMask) != null && t.isComplete)
    }
    get isFilled() {
        var t;
        return !!((t = this.currentMask) != null && t.isFilled)
    }
    remove(t, e) {
        const s = new F;
        return this.currentMask && s.aggregate(this.currentMask.remove(t, e)).aggregate(this._applyDispatch()), s
    }
    get state() {
        var t;
        return O(x({}, super.state), {
            _rawInputValue: this.rawInputValue,
            compiledMasks: this.compiledMasks.map(e => e.state),
            currentMaskRef: this.currentMask,
            currentMask: (t = this.currentMask) == null ? void 0 : t.state
        })
    }
    set state(t) {
        const r = t,
            {
                compiledMasks: e,
                currentMaskRef: s,
                currentMask: n
            } = r,
            i = z(r, ["compiledMasks", "currentMaskRef", "currentMask"]);
        e && this.compiledMasks.forEach((a, o) => a.state = e[o]), s != null && (this.currentMask = s, this.currentMask.state = n), super.state = i
    }
    extractInput(t, e, s) {
        return this.currentMask ? this.currentMask.extractInput(t, e, s) : ""
    }
    extractTail(t, e) {
        return this.currentMask ? this.currentMask.extractTail(t, e) : super.extractTail(t, e)
    }
    doCommit() {
        this.currentMask && this.currentMask.doCommit(), super.doCommit()
    }
    nearestInputPos(t, e) {
        return this.currentMask ? this.currentMask.nearestInputPos(t, e) : super.nearestInputPos(t, e)
    }
    get overwrite() {
        return this.currentMask ? this.currentMask.overwrite : this._overwrite
    }
    set overwrite(t) {
        this._overwrite = t
    }
    get eager() {
        return this.currentMask ? this.currentMask.eager : this._eager
    }
    set eager(t) {
        this._eager = t
    }
    get skipInvalid() {
        return this.currentMask ? this.currentMask.skipInvalid : this._skipInvalid
    }
    set skipInvalid(t) {
        this._skipInvalid = t
    }
    get autofix() {
        return this.currentMask ? this.currentMask.autofix : this._autofix
    }
    set autofix(t) {
        this._autofix = t
    }
    maskEquals(t) {
        return Array.isArray(t) ? this.compiledMasks.every((e, s) => {
            if (!t[s]) return;
            const r = t[s],
                {
                    mask: n
                } = r,
                i = z(r, ["mask"]);
            return Mt(e, i) && e.maskEquals(n)
        }) : super.maskEquals(t)
    }
    typedValueEquals(t) {
        var e;
        return !!((e = this.currentMask) != null && e.typedValueEquals(t))
    }
}
Pt.DEFAULTS = O(x({}, N.DEFAULTS), {
    dispatch: (u, t, e, s) => {
        if (!t.compiledMasks.length) return;
        const n = t.rawInputValue,
            i = t.compiledMasks.map((r, a) => {
                const o = t.currentMask === r,
                    l = o ? r.displayValue.length : r.nearestInputPos(r.displayValue.length, C.FORCE_LEFT);
                return r.rawInputValue !== n ? (r.reset(), r.append(n, {
                    raw: !0
                })) : o || r.remove(l), r.append(u, t.currentMaskFlags(e)), r.appendTail(s), {
                    index: a,
                    weight: r.rawInputValue.length,
                    totalInputPositions: r.totalInputPositions(0, Math.max(l, r.nearestInputPos(r.displayValue.length, C.FORCE_LEFT)))
                }
            });
        return i.sort((r, a) => a.weight - r.weight || a.totalInputPositions - r.totalInputPositions), t.compiledMasks[i[0].index]
    }
});
A.MaskedDynamic = Pt;
class Ut extends P {
    constructor(t) {
        super(x(x({}, Ut.DEFAULTS), t))
    }
    updateOptions(t) {
        super.updateOptions(t)
    }
    _update(t) {
        const n = t,
            {
                enum: e
            } = n,
            s = z(n, ["enum"]);
        if (e) {
            const i = e.map(o => o.length),
                r = Math.min(...i),
                a = Math.max(...i) - r;
            s.mask = "*".repeat(r), a && (s.mask += "[" + "*".repeat(a) + "]"), this.enum = e
        }
        super._update(s)
    }
    _appendCharRaw(t, e) {
        e === void 0 && (e = {});
        const s = Math.min(this.nearestInputPos(0, C.FORCE_RIGHT), this.value.length),
            n = this.enum.filter(i => this.matchValue(i, this.unmaskedValue + t, s));
        if (n.length) {
            n.length === 1 && this._forEachBlocksInRange(0, this.value.length, (r, a) => {
                const o = n[0][a];
                a >= this.value.length || o === r.value || (r.reset(), r._appendChar(o, e))
            });
            const i = super._appendCharRaw(n[0][this.value.length], e);
            return n.length === 1 && n[0].slice(this.unmaskedValue.length).split("").forEach(r => i.aggregate(super._appendCharRaw(r))), i
        }
        return new F({
            skip: !this.isComplete
        })
    }
    extractTail(t, e) {
        return t === void 0 && (t = 0), e === void 0 && (e = this.displayValue.length), new $("", t)
    }
    remove(t, e) {
        if (t === void 0 && (t = 0), e === void 0 && (e = this.displayValue.length), t === e) return new F;
        const s = Math.min(super.nearestInputPos(0, C.FORCE_RIGHT), this.value.length);
        let n;
        for (n = t; n >= 0 && !(this.enum.filter(a => this.matchValue(a, this.value.slice(s, n), s)).length > 1); --n);
        const i = super.remove(n, e);
        return i.tailShift += n - t, i
    }
    get isComplete() {
        return this.enum.indexOf(this.value) >= 0
    }
}
Ut.DEFAULTS = O(x({}, P.DEFAULTS), {
    matchValue: (u, t, e) => u.indexOf(t, e) === e
});
A.MaskedEnum = Ut;
class Us extends N {
    updateOptions(t) {
        super.updateOptions(t)
    }
    _update(t) {
        super._update(O(x({}, t), {
            validate: t.mask
        }))
    }
}
A.MaskedFunction = Us;
var Ie;
class q extends N {
    constructor(t) {
        super(x(x({}, q.DEFAULTS), t))
    }
    updateOptions(t) {
        super.updateOptions(t)
    }
    _update(t) {
        super._update(t), this._updateRegExps()
    }
    _updateRegExps() {
        const t = "^" + (this.allowNegative ? "[+|\\-]?" : ""),
            e = "\\d*",
            s = (this.scale ? "(" + Kt(this.radix) + "\\d{0," + this.scale + "})?" : "") + "$";
        this._numberRegExp = new RegExp(t + e + s), this._mapToRadixRegExp = new RegExp("[" + this.mapToRadix.map(Kt).join("") + "]", "g"), this._thousandsSeparatorRegExp = new RegExp(Kt(this.thousandsSeparator), "g")
    }
    _removeThousandsSeparators(t) {
        return t.replace(this._thousandsSeparatorRegExp, "")
    }
    _insertThousandsSeparators(t) {
        const e = t.split(this.radix);
        return e[0] = e[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator), e.join(this.radix)
    }
    doPrepareChar(t, e) {
        e === void 0 && (e = {});
        const [s, n] = super.doPrepareChar(this._removeThousandsSeparators(this.scale && this.mapToRadix.length && (e.input && e.raw || !e.input && !e.raw) ? t.replace(this._mapToRadixRegExp, this.radix) : t), e);
        return t && !s && (n.skip = !0), s && !this.allowPositive && !this.value && s !== "-" && n.aggregate(this._appendChar("-")), [s, n]
    }
    _separatorsCount(t, e) {
        e === void 0 && (e = !1);
        let s = 0;
        for (let n = 0; n < t; ++n) this._value.indexOf(this.thousandsSeparator, n) === n && (++s, e && (t += this.thousandsSeparator.length));
        return s
    }
    _separatorsCountFromSlice(t) {
        return t === void 0 && (t = this._value), this._separatorsCount(this._removeThousandsSeparators(t).length, !0)
    }
    extractInput(t, e, s) {
        return t === void 0 && (t = 0), e === void 0 && (e = this.displayValue.length), [t, e] = this._adjustRangeWithSeparators(t, e), this._removeThousandsSeparators(super.extractInput(t, e, s))
    }
    _appendCharRaw(t, e) {
        e === void 0 && (e = {});
        const s = e.tail && e._beforeTailState ? e._beforeTailState._value : this._value,
            n = this._separatorsCountFromSlice(s);
        this._value = this._removeThousandsSeparators(this.value);
        const i = this._value;
        this._value += t;
        const r = this.number;
        let a = !isNaN(r),
            o = !1;
        if (a) {
            let p;
            this.min != null && this.min < 0 && this.number < this.min && (p = this.min), this.max != null && this.max > 0 && this.number > this.max && (p = this.max), p != null && (this.autofix ? (this._value = this.format(p, this).replace(q.UNMASKED_RADIX, this.radix), o || (o = i === this._value && !e.tail)) : a = !1), a && (a = !!this._value.match(this._numberRegExp))
        }
        let l;
        a ? l = new F({
            inserted: this._value.slice(i.length),
            rawInserted: o ? "" : t,
            skip: o
        }) : (this._value = i, l = new F), this._value = this._insertThousandsSeparators(this._value);
        const f = e.tail && e._beforeTailState ? e._beforeTailState._value : this._value,
            c = this._separatorsCountFromSlice(f);
        return l.tailShift += (c - n) * this.thousandsSeparator.length, l
    }
    _findSeparatorAround(t) {
        if (this.thousandsSeparator) {
            const e = t - this.thousandsSeparator.length + 1,
                s = this.value.indexOf(this.thousandsSeparator, e);
            if (s <= t) return s
        }
        return -1
    }
    _adjustRangeWithSeparators(t, e) {
        const s = this._findSeparatorAround(t);
        s >= 0 && (t = s);
        const n = this._findSeparatorAround(e);
        return n >= 0 && (e = n + this.thousandsSeparator.length), [t, e]
    }
    remove(t, e) {
        t === void 0 && (t = 0), e === void 0 && (e = this.displayValue.length), [t, e] = this._adjustRangeWithSeparators(t, e);
        const s = this.value.slice(0, t),
            n = this.value.slice(e),
            i = this._separatorsCount(s.length);
        this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(s + n));
        const r = this._separatorsCountFromSlice(s);
        return new F({
            tailShift: (r - i) * this.thousandsSeparator.length
        })
    }
    nearestInputPos(t, e) {
        if (!this.thousandsSeparator) return t;
        switch (e) {
            case C.NONE:
            case C.LEFT:
            case C.FORCE_LEFT:
                {
                    const s = this._findSeparatorAround(t - 1);
                    if (s >= 0) {
                        const n = s + this.thousandsSeparator.length;
                        if (t < n || this.value.length <= n || e === C.FORCE_LEFT) return s
                    }
                    break
                }
            case C.RIGHT:
            case C.FORCE_RIGHT:
                {
                    const s = this._findSeparatorAround(t);
                    if (s >= 0) return s + this.thousandsSeparator.length
                }
        }
        return t
    }
    doCommit() {
        if (this.value) {
            const t = this.number;
            let e = t;
            this.min != null && (e = Math.max(e, this.min)), this.max != null && (e = Math.min(e, this.max)), e !== t && (this.unmaskedValue = this.format(e, this));
            let s = this.value;
            this.normalizeZeros && (s = this._normalizeZeros(s)), this.padFractionalZeros && this.scale > 0 && (s = this._padFractionalZeros(s)), this._value = s
        }
        super.doCommit()
    }
    _normalizeZeros(t) {
        const e = this._removeThousandsSeparators(t).split(this.radix);
        return e[0] = e[0].replace(/^(\D*)(0*)(\d*)/, (s, n, i, r) => n + r), t.length && !/\d$/.test(e[0]) && (e[0] = e[0] + "0"), e.length > 1 && (e[1] = e[1].replace(/0*$/, ""), e[1].length || (e.length = 1)), this._insertThousandsSeparators(e.join(this.radix))
    }
    _padFractionalZeros(t) {
        if (!t) return t;
        const e = t.split(this.radix);
        return e.length < 2 && e.push(""), e[1] = e[1].padEnd(this.scale, "0"), e.join(this.radix)
    }
    doSkipInvalid(t, e, s) {
        e === void 0 && (e = {});
        const n = this.scale === 0 && t !== this.thousandsSeparator && (t === this.radix || t === q.UNMASKED_RADIX || this.mapToRadix.includes(t));
        return super.doSkipInvalid(t, e, s) && !n
    }
    get unmaskedValue() {
        return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, q.UNMASKED_RADIX)
    }
    set unmaskedValue(t) {
        super.unmaskedValue = t
    }
    get typedValue() {
        return this.parse(this.unmaskedValue, this)
    }
    set typedValue(t) {
        this.rawInputValue = this.format(t, this).replace(q.UNMASKED_RADIX, this.radix)
    }
    get number() {
        return this.typedValue
    }
    set number(t) {
        this.typedValue = t
    }
    get allowNegative() {
        return this.min != null && this.min < 0 || this.max != null && this.max < 0
    }
    get allowPositive() {
        return this.min != null && this.min > 0 || this.max != null && this.max > 0
    }
    typedValueEquals(t) {
        return (super.typedValueEquals(t) || q.EMPTY_VALUES.includes(t) && q.EMPTY_VALUES.includes(this.typedValue)) && !(t === 0 && this.value === "")
    }
}
Ie = q;
q.UNMASKED_RADIX = ".";
q.EMPTY_VALUES = [...N.EMPTY_VALUES, 0];
q.DEFAULTS = O(x({}, N.DEFAULTS), {
    mask: Number,
    radix: ",",
    thousandsSeparator: "",
    mapToRadix: [Ie.UNMASKED_RADIX],
    min: Number.MIN_SAFE_INTEGER,
    max: Number.MAX_SAFE_INTEGER,
    scale: 2,
    normalizeZeros: !0,
    padFractionalZeros: !1,
    parse: Number,
    format: u => u.toLocaleString("en-US", {
        useGrouping: !1,
        maximumFractionDigits: 20
    })
});
A.MaskedNumber = q;
const Qt = {
    MASKED: "value",
    UNMASKED: "unmaskedValue",
    TYPED: "typedValue"
};

function De(u, t, e) {
    t === void 0 && (t = Qt.MASKED), e === void 0 && (e = Qt.MASKED);
    const s = at(u);
    return n => s.runIsolated(i => (i[t] = n, i[e]))
}

function Hs(u, t, e, s) {
    return De(t, e, s)(u)
}
A.PIPE_TYPE = Qt;
A.createPipe = De;
A.pipe = Hs;
class zs extends P {
    get repeatFrom() {
        var t;
        return (t = Array.isArray(this.repeat) ? this.repeat[0] : this.repeat === 1 / 0 ? 0 : this.repeat) != null ? t : 0
    }
    get repeatTo() {
        var t;
        return (t = Array.isArray(this.repeat) ? this.repeat[1] : this.repeat) != null ? t : 1 / 0
    }
    constructor(t) {
        super(t)
    }
    updateOptions(t) {
        super.updateOptions(t)
    }
    _update(t) {
        var e, s, n;
        const o = It(t),
            {
                repeat: i
            } = o,
            r = z(o, ["repeat"]);
        this._blockOpts = Object.assign({}, this._blockOpts, r);
        const a = at(this._blockOpts);
        this.repeat = (e = (s = i != null ? i : a.repeat) != null ? s : this.repeat) != null ? e : 1 / 0, super._update({
            mask: "m".repeat(Math.max(this.repeatTo === 1 / 0 && ((n = this._blocks) == null ? void 0 : n.length) || 0, this.repeatFrom)),
            blocks: {
                m: a
            },
            eager: a.eager,
            overwrite: a.overwrite,
            skipInvalid: a.skipInvalid,
            lazy: a.lazy,
            placeholderChar: a.placeholderChar,
            displayChar: a.displayChar
        })
    }
    _allocateBlock(t) {
        if (t < this._blocks.length) return this._blocks[t];
        if (this.repeatTo === 1 / 0 || this._blocks.length < this.repeatTo) return this._blocks.push(at(this._blockOpts)), this.mask += "m", this._blocks[this._blocks.length - 1]
    }
    _appendCharRaw(t, e) {
        e === void 0 && (e = {});
        const s = new F;
        for (let o = (n = (i = this._mapPosToBlock(this.displayValue.length)) == null ? void 0 : i.index) != null ? n : Math.max(this._blocks.length - 1, 0), l, f; l = (r = this._blocks[o]) != null ? r : f = !f && this._allocateBlock(o); ++o) {
            var n, i, r, a;
            const c = l._appendChar(t, O(x({}, e), {
                _beforeTailState: (a = e._beforeTailState) == null || (a = a._blocks) == null ? void 0 : a[o]
            }));
            if (c.skip && f) {
                this._blocks.pop(), this.mask = this.mask.slice(1);
                break
            }
            if (s.aggregate(c), c.consumed) break
        }
        return s
    }
    _trimEmptyTail(t, e) {
        var s, n;
        t === void 0 && (t = 0);
        const i = Math.max(((s = this._mapPosToBlock(t)) == null ? void 0 : s.index) || 0, this.repeatFrom, 0);
        let r;
        e != null && (r = (n = this._mapPosToBlock(e)) == null ? void 0 : n.index), r == null && (r = this._blocks.length - 1);
        let a = 0;
        for (let o = r; i <= o && !this._blocks[o].unmaskedValue; --o, ++a);
        a && (this._blocks.splice(r - a + 1, a), this.mask = this.mask.slice(a))
    }
    reset() {
        super.reset(), this._trimEmptyTail()
    }
    remove(t, e) {
        t === void 0 && (t = 0), e === void 0 && (e = this.displayValue.length);
        const s = super.remove(t, e);
        return this._trimEmptyTail(t, e), s
    }
    totalInputPositions(t, e) {
        return t === void 0 && (t = 0), e == null && this.repeatTo === 1 / 0 ? 1 / 0 : super.totalInputPositions(t, e)
    }
    get state() {
        return super.state
    }
    set state(t) {
        this._blocks.length = t._blocks.length, this.mask = this.mask.slice(0, this._blocks.length), super.state = t
    }
}
A.RepeatBlock = zs;
try {
    globalThis.IMask = A
} catch (u) {}

function Ee(u, t, e) {
    const s = document.createEvent("CustomEvent");
    s.initCustomEvent(t, !0, !0, e), u.dispatchEvent(s)
}

function js(u, t) {
    const e = t instanceof A.InputMask ? t : A(u, t);
    return e.on("accept", () => Ee(u, "accept", e)).on("complete", () => Ee(u, "complete", e))
}

function Yt(u, t) {
    let e, s;

    function n() {
        var r;
        s && ((r = e) == null || r.destroy()), e = void 0, s = void 0
    }

    function i(r) {
        if (!r) return n();
        r instanceof A.InputMask || !e ? e = js(u, r) : e.updateOptions(r), s = r !== e
    }
    return i(t), {
        update: i,
        destroy: n
    }
}
var Gs = qe("<label><span> </span> <input></label>");

function en(u, t) {
    Ye(t, !0);
    let e = rt(t, "type", 3, "text"),
        s = rt(t, "placeholder", 3, void 0),
        n = rt(t, "autocomplete", 3, ""),
        i = rt(t, "required", 3, !0),
        r = rt(t, "labelVisibility", 3, "visible"),
        a = rt(t, "wrapperClasses", 3, ""),
        o = rt(t, "value", 15, ""),
        l = rt(t, "maxlength", 3, null),
        f = rt(t, "disabled", 3, !1);

    function c(m, v) {
        m.type = v
    }
    const p = {
        mask: "000-00-0000",
        placeholderChar: "_",
        lazy: !1
    };
    var _ = Gs(),
        d = de(_);
    let g;
    var k = de(d, !0);
    pe(d);
    var h = Xe(d, 2);
    $e(h), ft(h, "pattern", String.raw `\d{3}-\d{2}-\d{4}`), fe(h, (m, v) => c == null ? void 0 : c(m, v), e), fe(h, (m, v) => Yt == null ? void 0 : Yt(m, v), () => p), Ze(() => ts(h, o)), pe(_), Qe(m => {
        ft(_, "for", t.id), ge(_, 1, `flex flex-col gap-y-2 label-border-b ${a()}`), g = ge(d, 1, "input-label input-label", null, g, m), We(k, t.label), ft(h, "id", t.id), ft(h, "name", t.name), ft(h, "placeholder", s()), ft(h, "autocomplete", n()), h.required = i(), ft(h, "maxlength", l()), h.disabled = f()
    }, [() => ({
        "sr-only": r() === "invisible"
    })]), Ke(u, _), Je()
}
export {
    Se as E, en as S, tn as f
};