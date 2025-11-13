var d = Object.defineProperty;
var i = Object.getOwnPropertySymbols;
var g = Object.prototype.hasOwnProperty,
    m = Object.prototype.propertyIsEnumerable;
var l = (n, t, e) => t in n ? d(n, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: e
    }) : n[t] = e,
    u = (n, t) => {
        for (var e in t || (t = {})) g.call(t, e) && l(n, e, t[e]);
        if (i)
            for (var e of i(t)) m.call(t, e) && l(n, e, t[e]);
        return n
    };
var f = (n, t, e) => new Promise((s, r) => {
    var y = a => {
            try {
                o(e.next(a))
            } catch (c) {
                r(c)
            }
        },
        _ = a => {
            try {
                o(e.throw(a))
            } catch (c) {
                r(c)
            }
        },
        o = a => a.done ? s(a.value) : Promise.resolve(a.value).then(y, _);
    o((e = e.apply(n, t)).next())
});
import {
    p,
    g as w
} from "./index.LeHJ78np.js";

function L(n, t) {
    return f(this, null, function*() {
        Object.keys(n).forEach(e => {
            p.sanitize(n[e])
        });
        try {
            const e = new FormData;
            for (const r in n) e.append(r, n[r]);
            const {
                status: s
            } = (yield fetch(t, {
                method: "POST",
                body: e
            })) || {};
            return {
                success: s === 200
            }
        } catch (e) {
            return console.error(e), {
                success: !1
            }
        }
    })
}

function b(n) {
    for (const t in n) n[t] === null && (n[t] = void 0);
    window.dataLayer = window.dataLayer || [], window.dataLayer.push(u({
        event: "generate_lead"
    }, n)), w.track("generate_lead", {
        lead_gen_name: n.lead_gen_name || null,
        lead_gen_type: n.lead_gen_type || null
    })
}
export {
    b as g, L as s
};