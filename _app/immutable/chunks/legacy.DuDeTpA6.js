import {
    I as d,
    aj as g,
    i as c,
    ak as i,
    j as m,
    al as b,
    g as p,
    d as k,
    am as v,
    an as h
} from "./runtime.B7th0A2U.js";

function j(t = !1) {
    const s = d,
        e = s.l.u;
    if (!e) return;
    let f = () => k(s.s);
    if (t) {
        let a = 0,
            n = {};
        const _ = v(() => {
            let l = !1;
            const r = s.s;
            for (const o in r) r[o] !== n[o] && (n[o] = r[o], l = !0);
            return l && a++, a
        });
        f = () => p(_)
    }
    e.b.length && g(() => {
        u(s, f), i(e.b)
    }), c(() => {
        const a = m(() => e.m.map(b));
        return () => {
            for (const n of a) typeof n == "function" && n()
        }
    }), e.a.length && c(() => {
        u(s, f), i(e.a)
    })
}

function u(t, s) {
    if (t.l.s)
        for (const e of t.l.s) p(e);
    s()
}
h();
export {
    j as i
};