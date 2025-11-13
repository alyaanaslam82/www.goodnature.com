import {
    a2 as R,
    E as q,
    aC as z,
    aD as G,
    B as M,
    aE as P,
    aB as U,
    F as $,
    x as b,
    aF as B,
    aG as x,
    aH as g,
    j as D,
    aI as H,
    aJ as J
} from "./runtime.B7th0A2U.js";
import {
    a as K
} from "./render.DCpC4m_T.js";
import {
    w as W
} from "./disclose-version.Cr9xuhkA.js";
const Q = () => performance.now(),
    h = {
        tick: r => requestAnimationFrame(r),
        now: () => Q(),
        tasks: new Set
    };

function j() {
    const r = h.now();
    h.tasks.forEach(a => {
        a.c(r) || (h.tasks.delete(a), a.f())
    }), h.tasks.size !== 0 && h.tick(j)
}

function V(r) {
    let a;
    return h.tasks.size === 0 && h.tick(j), {
        promise: new Promise(t => {
            h.tasks.add(a = {
                c: r,
                f: t
            })
        }),
        abort() {
            h.tasks.delete(a)
        }
    }
}

function p(r, a) {
    W(() => {
        r.dispatchEvent(new CustomEvent(a))
    })
}

function X(r) {
    if (r === "float") return "cssFloat";
    if (r === "offset") return "cssOffset";
    if (r.startsWith("--")) return r;
    const a = r.split("-");
    return a.length === 1 ? a[0] : a[0] + a.slice(1).map(t => t[0].toUpperCase() + t.slice(1)).join("")
}

function L(r) {
    const a = {},
        t = r.split(";");
    for (const i of t) {
        const [f, u] = i.split(":");
        if (!f || u === void 0) break;
        const d = X(f.trim());
        a[d] = u.trim()
    }
    return a
}
const Y = r => r;

function ia(r, a, t, i) {
    var y;
    var f = (r & H) !== 0,
        u = (r & J) !== 0,
        d = f && u,
        m = (r & P) !== 0,
        A = d ? "both" : f ? "in" : "out",
        _, o = a.inert,
        F = a.style.overflow,
        e, s;

    function w() {
        var E;
        var n = g,
            N = R;
        B(null), x(null);
        try {
            return _ != null ? _ : _ = t()(a, (E = i == null ? void 0 : i()) != null ? E : {}, {
                direction: A
            })
        } finally {
            B(n), x(N)
        }
    }
    var v = {
            is_global: m,
            in () {
                var n;
                if (a.inert = o, !f) {
                    s == null || s.abort(), (n = s == null ? void 0 : s.reset) == null || n.call(s);
                    return
                }
                u || e == null || e.abort(), p(a, "introstart"), e = C(a, w(), s, 1, () => {
                    p(a, "introend"), e == null || e.abort(), e = _ = void 0, a.style.overflow = F
                })
            },
            out(n) {
                if (!u) {
                    n == null || n(), _ = void 0;
                    return
                }
                a.inert = !0, p(a, "outrostart"), s = C(a, w(), e, 0, () => {
                    p(a, "outroend"), n == null || n()
                })
            },
            stop: () => {
                e == null || e.abort(), s == null || s.abort()
            }
        },
        l = R;
    if (((y = l.transitions) != null ? y : l.transitions = []).push(v), f && K) {
        var T = m;
        if (!T) {
            for (var c = l.parent; c && c.f & q;)
                for (;
                    (c = c.parent) && !(c.f & z););
            T = !c || (c.f & G) !== 0
        }
        T && M(() => {
            D(() => v.in())
        })
    }
}

function C(r, a, t, i, f) {
    var u = i === 1;
    if (U(a)) {
        var d, m = !1;
        return $(() => {
            if (!m) {
                var l = a({
                    direction: u ? "in" : "out"
                });
                d = C(r, l, t, i, f)
            }
        }), {
            abort: () => {
                m = !0, d == null || d.abort()
            },
            deactivate: () => d.deactivate(),
            reset: () => d.reset(),
            t: () => d.t()
        }
    }
    if (t == null || t.deactivate(), !(a != null && a.duration)) return f(), {
        abort: b,
        deactivate: b,
        reset: b,
        t: () => i
    };
    const {
        delay: A = 0,
        css: _,
        tick: o,
        easing: F = Y
    } = a;
    var e = [];
    if (u && t === void 0 && (o && o(0, 1), _)) {
        var s = L(_(0, 1));
        e.push(s, s)
    }
    var w = () => 1 - i,
        v = r.animate(e, {
            duration: A
        });
    return v.onfinish = () => {
        var S;
        var l = (S = t == null ? void 0 : t.t()) != null ? S : 1 - i;
        t == null || t.abort();
        var T = i - l,
            c = a.duration * Math.abs(T),
            y = [];
        if (c > 0) {
            var n = !1;
            if (_)
                for (var N = Math.ceil(c / 16.666666666666668), E = 0; E <= N; E += 1) {
                    var I = l + T * F(E / N),
                        O = L(_(I, 1 - I));
                    y.push(O), n || (n = O.overflow === "hidden")
                }
            n && (r.style.overflow = "hidden"), w = () => {
                var k = v.currentTime;
                return l + T * F(k / c)
            }, o && V(() => {
                if (v.playState !== "running") return !1;
                var k = w();
                return o(k, 1 - k), !0
            })
        }
        v = r.animate(y, {
            duration: c,
            fill: "forwards"
        }), v.onfinish = () => {
            w = () => i, o == null || o(i, 1 - i), f()
        }
    }, {
        abort: () => {
            v && (v.cancel(), v.effect = null, v.onfinish = b)
        },
        deactivate: () => {
            f = b
        },
        reset: () => {
            i === 0 && (o == null || o(1, 0))
        },
        t: () => w()
    }
}
const Z = r => r;

function sa(r, {
    delay: a = 0,
    duration: t = 400,
    easing: i = Z
} = {}) {
    const f = +getComputedStyle(r).opacity;
    return {
        delay: a,
        duration: t,
        easing: i,
        css: u => `opacity: ${u*f}`
    }
}
export {
    sa as f, ia as t
};