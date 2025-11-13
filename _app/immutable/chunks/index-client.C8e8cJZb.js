import {
    H as o,
    i as p,
    I as t,
    J as m,
    K as v,
    j as f,
    L as y
} from "./runtime.B7th0A2U.js";

function d(e) {
    t === null && o(), v && t.l !== null ? r(t).m.push(e) : p(() => {
        const n = f(e);
        if (typeof n == "function") return n
    })
}

function g(e) {
    t === null && o(), d(() => () => f(e))
}

function b(e, n, {
    bubbles: c = !1,
    cancelable: s = !1
} = {}) {
    return new CustomEvent(e, {
        detail: n,
        bubbles: c,
        cancelable: s
    })
}

function h() {
    const e = t;
    return e === null && o(), (n, c, s) => {
        var l;
        const a = (l = e.s.$$events) == null ? void 0 : l[n];
        if (a) {
            const i = y(a) ? a.slice() : [a],
                u = b(n, c, s);
            for (const _ of i) _.call(e.x, u);
            return !u.defaultPrevented
        }
        return !0
    }
}

function k(e) {
    t === null && o(), t.l === null && m(), r(t).a.push(e)
}

function r(e) {
    var c;
    var n = e.l;
    return (c = n.u) != null ? c : n.u = {
        a: [],
        b: [],
        m: []
    }
}
export {
    g as a, k as b, h as c, d as o
};