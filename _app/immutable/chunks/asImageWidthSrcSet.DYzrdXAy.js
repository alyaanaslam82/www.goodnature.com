var v = Object.defineProperty,
    T = Object.defineProperties;
var W = Object.getOwnPropertyDescriptors;
var n = Object.getOwnPropertySymbols;
var b = Object.prototype.hasOwnProperty,
    w = Object.prototype.propertyIsEnumerable;
var p = (s, t, i) => t in s ? v(s, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: i
    }) : s[t] = i,
    o = (s, t) => {
        for (var i in t || (t = {})) b.call(t, i) && p(s, i, t[i]);
        if (n)
            for (var i of n(t)) w.call(t, i) && p(s, i, t[i]);
        return s
    },
    m = (s, t) => T(s, W(t));
var c = (s, t) => {
    var i = {};
    for (var r in s) b.call(s, r) && t.indexOf(r) < 0 && (i[r] = s[r]);
    if (s != null && n)
        for (var r of n(s)) t.indexOf(r) < 0 && w.call(s, r) && (i[r] = s[r]);
    return i
};
import {
    b as h,
    a as _
} from "./link-resolver.A6NvoPr8.js";
import {
    a as x
} from "./isFilled.GM-Jo1Zy.js";
const g = [640, 828, 1200, 2048, 3840],
    U = (s, t = {}) => {
        if (s && x(s)) {
            let i = t,
                {
                    widths: e = g
                } = i,
                a = c(i, ["widths"]);
            const r = s,
                {
                    url: l,
                    dimensions: S,
                    alt: y,
                    copyright: D
                } = r,
                j = c(r, ["url", "dimensions", "alt", "copyright"]),
                u = Object.values(j);
            return e === "thumbnails" && u.length < 1 && (e = g), {
                src: _(l, a),
                srcset: e === "thumbnails" ? [h(l, m(o({}, a), {
                    widths: [S.width]
                })), ...u.map(d => h(d.url, m(o({}, a), {
                    widths: [d.dimensions.width]
                })))].join(", ") : h(s.url, m(o({}, a), {
                    widths: e
                }))
            }
        } else return null
    };
export {
    U as a
};