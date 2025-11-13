import {
    B as f,
    C as d
} from "./runtime.B7th0A2U.js";
import {
    l as s
} from "./disclose-version.Cr9xuhkA.js";

function _(e, u, r) {
    if (e.multiple) return b(e, u);
    for (var n of e.options) {
        var t = i(n);
        if (d(t, u)) {
            n.selected = !0;
            return
        }
    }(!r || u !== void 0) && (e.selectedIndex = -1)
}

function c(e, u) {
    f(() => {
        var r = new MutationObserver(() => {
            var n = e.__value;
            _(e, n)
        });
        return r.observe(e, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeFilter: ["value"]
        }), () => {
            r.disconnect()
        }
    })
}

function q(e, u, r = u) {
    var n = !0;
    s(e, "change", t => {
        var o;
        var a = t ? "[selected]" : ":checked",
            v;
        if (e.multiple) v = [].map.call(e.querySelectorAll(a), i);
        else {
            var l = (o = e.querySelector(a)) != null ? o : e.querySelector("option:not([disabled])");
            v = l && i(l)
        }
        r(v)
    }), f(() => {
        var t = u();
        if (_(e, t, n), n && t === void 0) {
            var a = e.querySelector(":checked");
            a !== null && (t = i(a), r(t))
        }
        e.__value = t, n = !1
    }), c(e)
}

function b(e, u) {
    for (var r of e.options) r.selected = ~u.indexOf(i(r))
}

function i(e) {
    return "__value" in e ? e.__value : e.value
}
export {
    q as b
};