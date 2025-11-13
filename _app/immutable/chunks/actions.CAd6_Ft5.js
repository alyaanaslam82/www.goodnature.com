import {
    B as c,
    j as o,
    D as d,
    d as i,
    G as m
} from "./runtime.B7th0A2U.js";

function j(e, n, f) {
    c(() => {
        var r = o(() => n(e, f == null ? void 0 : f()) || {});
        if (f && (r != null && r.update)) {
            var a = !1,
                t = {};
            d(() => {
                var s = f();
                i(s), a && m(t, s) && (t = s, r.update(s))
            }), a = !0
        }
        if (r != null && r.destroy) return () => r.destroy()
    })
}
export {
    j as a
};