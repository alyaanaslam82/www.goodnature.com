import {
    ag as g,
    j as w,
    D as n,
    z as u,
    C as A,
    ah as D,
    F as C
} from "./runtime.B7th0A2U.js";
import {
    l as b
} from "./disclose-version.Cr9xuhkA.js";

function j(e, c, a = c) {
    var d = g();
    b(e, "input", l => {
        var v = l ? e.defaultValue : e.value;
        if (v = k(e) ? m(v) : v, a(v), d && v !== (v = c())) {
            var f = e.selectionStart,
                s = e.selectionEnd;
            e.value = v != null ? v : "", s !== null && (e.selectionStart = f, e.selectionEnd = Math.min(s, e.value.length))
        }
    }), (u && e.defaultValue !== e.value || w(c) == null && e.value) && a(k(e) ? m(e.value) : e.value), n(() => {
        var l = c();
        k(e) && l === m(e.value) || e.type === "date" && !l && !e.value || l !== e.value && (e.value = l != null ? l : "")
    })
}
const _ = new Set;

function q(e, c, a, d, l = d) {
    var t;
    var v = a.getAttribute("type") === "checkbox",
        f = e;
    let s = !1;
    if (c !== null)
        for (var h of c) f = (t = f[h]) != null ? t : f[h] = [];
    f.push(a), b(a, "change", () => {
        var r = a.__value;
        v && (r = S(f, r, a.checked)), l(r)
    }, () => l(v ? [] : null)), n(() => {
        var r = d();
        if (u && a.defaultChecked !== a.checked) {
            s = !0;
            return
        }
        v ? (r = r || [], a.checked = r.includes(a.__value)) : a.checked = A(a.__value, r)
    }), D(() => {
        var r = f.indexOf(a);
        r !== -1 && f.splice(r, 1)
    }), _.has(f) || (_.add(f), C(() => {
        f.sort((r, o) => r.compareDocumentPosition(o) === 4 ? -1 : 1), _.delete(f)
    })), C(() => {
        if (s) {
            var r;
            if (v) r = S(f, r, a.checked);
            else {
                var o = f.find(y => y.checked);
                r = o == null ? void 0 : o.__value
            }
            l(r)
        }
    })
}

function z(e, c, a = c) {
    b(e, "change", d => {
        var l = d ? e.defaultChecked : e.checked;
        a(l)
    }), (u && e.defaultChecked !== e.checked || w(c) == null) && a(e.checked), n(() => {
        var d = c();
        e.checked = !!d
    })
}

function S(e, c, a) {
    for (var d = new Set, l = 0; l < e.length; l += 1) e[l].checked && d.add(e[l].__value);
    return a || d.delete(c), Array.from(d)
}

function k(e) {
    var c = e.type;
    return c === "number" || c === "range"
}

function m(e) {
    return e === "" ? null : +e
}
export {
    z as a, j as b, q as c
};