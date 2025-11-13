import {
    z as S,
    aM as q,
    aN as D,
    aO as K,
    aP as Q,
    X as R,
    aQ as X
} from "./runtime.B7th0A2U.js";
import {
    s as F,
    u as J,
    d as W,
    p as Z,
    v as y,
    x as m,
    y as x
} from "./disclose-version.Cr9xuhkA.js";

function k(r) {
    var f, i, s = "";
    if (typeof r == "string" || typeof r == "number") s += r;
    else if (typeof r == "object")
        if (Array.isArray(r)) {
            var t = r.length;
            for (f = 0; f < t; f++) r[f] && (i = k(r[f])) && (s && (s += " "), s += i)
        } else
            for (i in r) r[i] && (s && (s += " "), s += i);
    return s
}

function rr() {
    for (var r, f, i = 0, s = "", t = arguments.length; i < t; i++)(r = arguments[i]) && (f = k(r)) && (s && (s += " "), s += f);
    return s
}

function fr(r) {
    return typeof r == "object" ? rr(r) : r != null ? r : ""
}
const j = [...` 	
\r\f \v\uFEFF`];

function ir(r, f, i) {
    var s = r == null ? "" : "" + r;
    if (f && (s = s ? s + " " + f : f), i) {
        for (var t in i)
            if (i[t]) s = s ? s + " " + t : t;
            else if (s.length)
            for (var u = t.length, c = 0;
                (c = s.indexOf(t, c)) >= 0;) {
                var e = c + u;
                (c === 0 || j.includes(s[c - 1])) && (e === s.length || j.includes(s[e])) ? s = (c === 0 ? "" : s.substring(0, c)) + s.substring(e + 1): c = e
            }
    }
    return s === "" ? null : s
}

function U(r, f = !1) {
    var i = f ? " !important;" : ";",
        s = "";
    for (var t in r) {
        var u = r[t];
        u != null && u !== "" && (s += " " + t + ": " + u + i)
    }
    return s
}

function I(r) {
    return r[0] !== "-" || r[1] !== "-" ? r.toLowerCase() : r
}

function sr(r, f) {
    if (f) {
        var i = "",
            s, t;
        if (Array.isArray(f) ? (s = f[0], t = f[1]) : s = f, r) {
            r = String(r).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
            var u = !1,
                c = 0,
                e = !1,
                A = [];
            s && A.push(...Object.keys(s).map(I)), t && A.push(...Object.keys(t).map(I));
            var l = 0,
                b = -1;
            const _ = r.length;
            for (var g = 0; g < _; g++) {
                var d = r[g];
                if (e ? d === "/" && r[g - 1] === "*" && (e = !1) : u ? u === d && (u = !1) : d === "/" && r[g + 1] === "*" ? e = !0 : d === '"' || d === "'" ? u = d : d === "(" ? c++ : d === ")" && c--, !e && u === !1 && c === 0) {
                    if (d === ":" && b === -1) b = g;
                    else if (d === ";" || g === _ - 1) {
                        if (b !== -1) {
                            var M = I(r.substring(l, b).trim());
                            if (!A.includes(M)) {
                                d !== ";" && g++;
                                var O = r.substring(l, g).trim();
                                i += " " + O + ";"
                            }
                        }
                        l = g + 1, b = -1
                    }
                }
            }
        }
        return s && (i += U(s)), t && (i += U(t, !0)), i = i.trim(), i === "" ? null : i
    }
    return r == null ? null : String(r)
}

function tr(r, f, i, s, t, u) {
    var c = r.__className;
    if (S || c !== i || c === void 0) {
        var e = ir(i, s, u);
        (!S || e !== r.getAttribute("class")) && (e == null ? r.removeAttribute("class") : f ? r.className = e : r.setAttribute("class", e)), r.__className = i
    } else if (u && t !== u)
        for (var A in u) {
            var l = !!u[A];
            (t == null || l !== !!t[A]) && r.classList.toggle(A, l)
        }
    return u
}

function $(r, f = {}, i, s) {
    for (var t in i) {
        var u = i[t];
        f[t] !== u && (i[t] == null ? r.style.removeProperty(t) : r.style.setProperty(t, u, s))
    }
}

function ur(r, f, i, s) {
    var t = r.__style;
    if (S || t !== f) {
        var u = sr(f, s);
        (!S || u !== r.getAttribute("style")) && (u == null ? r.removeAttribute("style") : r.style.cssText = u), r.__style = f
    } else s && (Array.isArray(s) ? ($(r, i == null ? void 0 : i[0], s[0]), $(r, i == null ? void 0 : i[1], s[1], "important")) : $(r, i, s));
    return s
}
const L = Symbol("class"),
    p = Symbol("style"),
    z = Symbol("is custom element"),
    B = Symbol("is html");

function lr(r) {
    if (S) {
        var f = !1,
            i = () => {
                if (!f) {
                    if (f = !0, r.hasAttribute("value")) {
                        var s = r.value;
                        E(r, "value", null), r.value = s
                    }
                    if (r.hasAttribute("checked")) {
                        var t = r.checked;
                        E(r, "checked", null), r.checked = t
                    }
                }
            };
        r.__on_r = i, X(i), m()
    }
}

function er(r, f) {
    var i = T(r);
    i.value === (i.value = f != null ? f : void 0) || r.value === f && (f !== 0 || r.nodeName !== "PROGRESS") || (r.value = f != null ? f : "")
}

function nr(r, f) {
    var i = T(r);
    i.checked !== (i.checked = f != null ? f : void 0) && (r.checked = f)
}

function ar(r, f) {
    f ? r.hasAttribute("selected") || r.setAttribute("selected", "") : r.removeAttribute("selected")
}

function E(r, f, i, s) {
    var t = T(r);
    S && (t[f] = r.getAttribute(f), f === "src" || f === "srcset" || f === "href" && r.nodeName === "LINK") || t[f] !== (t[f] = i) && (f === "loading" && (r[q] = i), i == null ? r.removeAttribute(f) : typeof i != "string" && G(r).includes(f) ? r[f] = i : r.setAttribute(f, i))
}

function gr(r, f, i, s, t = !1) {
    var w;
    var u = T(r),
        c = u[z],
        e = !u[B];
    let A = S && c;
    A && R(!1);
    var l = f || {},
        b = r.tagName === "OPTION";
    for (var g in f) g in i || (i[g] = null);
    i.class ? i.class = fr(i.class) : i[L] && (i.class = null), i[p] && ((w = i.style) != null || (i.style = null));
    var d = G(r);
    for (const a in i) {
        let o = i[a];
        if (b && a === "value" && o == null) {
            r.value = r.__value = "", l[a] = o;
            continue
        }
        if (a === "class") {
            var M = r.namespaceURI === "http://www.w3.org/1999/xhtml";
            tr(r, M, o, s, f == null ? void 0 : f[L], i[L]), l[a] = o, l[L] = i[L];
            continue
        }
        if (a === "style") {
            ur(r, o, f == null ? void 0 : f[p], i[p]), l[a] = o, l[p] = i[p];
            continue
        }
        var O = l[a];
        if (o !== O) {
            l[a] = o;
            var _ = a[0] + a[1];
            if (_ !== "$$")
                if (_ === "on") {
                    const v = {},
                        N = "$$" + a;
                    let n = a.slice(2);
                    var C = x(n);
                    if (F(n) && (n = n.slice(0, -7), v.capture = !0), !C && O) {
                        if (o != null) continue;
                        r.removeEventListener(n, l[N], v), l[N] = null
                    }
                    if (o != null)
                        if (C) r[`__${n}`] = o, W([n]);
                        else {
                            let H = function(Y) {
                                l[a].call(this, Y)
                            };
                            l[N] = J(n, r, H, v)
                        }
                    else C && (r[`__${n}`] = void 0)
                } else if (a === "style") E(r, a, o);
            else if (a === "autofocus") Z(r, !!o);
            else if (!c && (a === "__value" || a === "value" && o != null)) r.value = r.__value = o;
            else if (a === "selected" && b) ar(r, o);
            else {
                var h = a;
                e || (h = y(h));
                var P = h === "defaultValue" || h === "defaultChecked";
                if (o == null && !c && !P)
                    if (u[a] = null, h === "value" || h === "checked") {
                        let v = r;
                        const N = f === void 0;
                        if (h === "value") {
                            let n = v.defaultValue;
                            v.removeAttribute(h), v.defaultValue = n, v.value = v.__value = N ? n : null
                        } else {
                            let n = v.defaultChecked;
                            v.removeAttribute(h), v.defaultChecked = n, v.checked = N ? n : !1
                        }
                    } else r.removeAttribute(a);
                else P || d.includes(h) && (c || typeof o != "string") ? r[h] = o : typeof o != "function" && E(r, h, o)
            }
        }
    }
    return A && R(!0), l
}

function T(r) {
    var f;
    return (f = r.__attributes) != null ? f : r.__attributes = {
        [z]: r.nodeName.includes("-"),
        [B]: r.namespaceURI === D
    }
}
var V = new Map;

function G(r) {
    var f = V.get(r.nodeName);
    if (f) return f;
    V.set(r.nodeName, f = []);
    for (var i, s = r, t = Element.prototype; t !== s;) {
        i = Q(s);
        for (var u in i) i[u].set && f.push(u);
        s = K(s)
    }
    return f
}
export {
    tr as a, E as b, fr as c, er as d, nr as e, gr as f, lr as r, ur as s
};