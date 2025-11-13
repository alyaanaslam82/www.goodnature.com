import {
    s as u,
    g as a,
    a6 as i,
    L as b
} from "./runtime.B7th0A2U.js";
import {
    s as g
} from "./entry.D4_9fdc-.js";

function f(e) {
    var s = i(0);
    return function() {
        return arguments.length === 1 ? (u(s, a(s) + 1), arguments[0]) : (a(s), e())
    }
}

function v(e, s) {
    var t;
    var r = (t = e.$$events) == null ? void 0 : t[s.type],
        n = b(r) ? r.slice() : r == null ? [] : [r];
    for (var o of n) o.call(this, s)
}
const c = () => {
        const e = g;
        return {
            page: {
                subscribe: e.page.subscribe
            },
            navigating: {
                subscribe: e.navigating.subscribe
            },
            updated: e.updated
        }
    },
    h = {
        subscribe(e) {
            return c().page.subscribe(e)
        }
    },
    p = {
        subscribe(e) {
            const s = c().updated;
            return p.check = s.check, s.subscribe(e)
        },
        check: () => {
            throw new Error("Cannot check updated store before subscribing")
        }
    };
export {
    v as b, h as p, f as r, p as u
};