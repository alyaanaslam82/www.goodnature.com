var zr = Object.defineProperty,
    Zr = Object.defineProperties;
var Qr = Object.getOwnPropertyDescriptors;
var Vt = Object.getOwnPropertySymbols;
var je = Object.prototype.hasOwnProperty,
    Ge = Object.prototype.propertyIsEnumerable;
var Ve = r => {
        throw TypeError(r)
    },
    k = Math.pow,
    Me = (r, i, o) => i in r ? zr(r, i, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: o
    }) : r[i] = o,
    H = (r, i) => {
        for (var o in i || (i = {})) je.call(i, o) && Me(r, o, i[o]);
        if (Vt)
            for (var o of Vt(i)) Ge.call(i, o) && Me(r, o, i[o]);
        return r
    },
    ot = (r, i) => Zr(r, Qr(i));
var Ye = (r, i) => {
    var o = {};
    for (var s in r) je.call(r, s) && i.indexOf(s) < 0 && (o[s] = r[s]);
    if (r != null && Vt)
        for (var s of Vt(r)) i.indexOf(s) < 0 && Ge.call(r, s) && (o[s] = r[s]);
    return o
};
var tn = (r, i, o) => i.has(r) || Ve("Cannot " + o);
var $ = (r, i, o) => (tn(r, i, "read from private field"), o ? o.call(r) : i.get(r)),
    Z = (r, i, o) => i.has(r) ? Ve("Cannot add the same private member more than once") : i instanceof WeakSet ? i.add(r) : i.set(r, o);
var L = (r, i, o) => new Promise((s, u) => {
    var l = y => {
            try {
                p(o.next(y))
            } catch (w) {
                u(w)
            }
        },
        h = y => {
            try {
                p(o.throw(y))
            } catch (w) {
                u(w)
            }
        },
        p = y => y.done ? s(y.value) : Promise.resolve(y.value).then(l, h);
    p((o = o.apply(r, i)).next())
});
import {
    o as pe
} from "./index-client.C8e8cJZb.js";
import {
    w as we
} from "./index.DeRN1XK-.js";
import {
    k as et,
    g as rt,
    s as nt,
    aL as en
} from "./runtime.B7th0A2U.js";
new URL("sveltekit-internal://");

function rn(r, i) {
    return r === "/" || i === "ignore" ? r : i === "never" ? r.endsWith("/") ? r.slice(0, -1) : r : i === "always" && !r.endsWith("/") ? r + "/" : r
}

function nn(r) {
    return r.split("%25").map(decodeURI).join("%25")
}

function on(r) {
    for (const i in r) r[i] = decodeURIComponent(r[i]);
    return r
}

function ce({
    href: r
}) {
    return r.split("#")[0]
}

function an(r, i, o, s = !1) {
    const u = new URL(r);
    Object.defineProperty(u, "searchParams", {
        value: new Proxy(u.searchParams, {
            get(h, p) {
                if (p === "get" || p === "getAll" || p === "has") return w => (o(w), h[p](w));
                i();
                const y = Reflect.get(h, p);
                return typeof y == "function" ? y.bind(h) : y
            }
        }),
        enumerable: !0,
        configurable: !0
    });
    const l = ["href", "pathname", "search", "toString", "toJSON"];
    s && l.push("hash");
    for (const h of l) Object.defineProperty(u, h, {
        get() {
            return i(), r[h]
        },
        enumerable: !0,
        configurable: !0
    });
    return u
}
const sn = "/__data.json",
    cn = ".html__data.json";

function ln(r) {
    return r.endsWith(".html") ? r.replace(/\.html$/, cn) : r.replace(/\/$/, "") + sn
}

function un(...r) {
    let i = 5381;
    for (const o of r)
        if (typeof o == "string") {
            let s = o.length;
            for (; s;) i = i * 33 ^ o.charCodeAt(--s)
        } else if (ArrayBuffer.isView(o)) {
        const s = new Uint8Array(o.buffer, o.byteOffset, o.byteLength);
        let u = s.length;
        for (; u;) i = i * 33 ^ s[--u]
    } else throw new TypeError("value must be a string or TypedArray");
    return (i >>> 0).toString(36)
}
var fn = {},
    Qt = {};
Qt.byteLength = dn;
Qt.toByteArray = gn;
Qt.fromByteArray = En;
var it = [],
    K = [],
    hn = typeof Uint8Array != "undefined" ? Uint8Array : Array,
    le = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var ht = 0, pn = le.length; ht < pn; ++ht) it[ht] = le[ht], K[le.charCodeAt(ht)] = ht;
K[45] = 62;
K[95] = 63;

function lr(r) {
    var i = r.length;
    if (i % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
    var o = r.indexOf("=");
    o === -1 && (o = i);
    var s = o === i ? 0 : 4 - o % 4;
    return [o, s]
}

function dn(r) {
    var i = lr(r),
        o = i[0],
        s = i[1];
    return (o + s) * 3 / 4 - s
}

function yn(r, i, o) {
    return (i + o) * 3 / 4 - o
}

function gn(r) {
    var i, o = lr(r),
        s = o[0],
        u = o[1],
        l = new hn(yn(r, s, u)),
        h = 0,
        p = u > 0 ? s - 4 : s,
        y;
    for (y = 0; y < p; y += 4) i = K[r.charCodeAt(y)] << 18 | K[r.charCodeAt(y + 1)] << 12 | K[r.charCodeAt(y + 2)] << 6 | K[r.charCodeAt(y + 3)], l[h++] = i >> 16 & 255, l[h++] = i >> 8 & 255, l[h++] = i & 255;
    return u === 2 && (i = K[r.charCodeAt(y)] << 2 | K[r.charCodeAt(y + 1)] >> 4, l[h++] = i & 255), u === 1 && (i = K[r.charCodeAt(y)] << 10 | K[r.charCodeAt(y + 1)] << 4 | K[r.charCodeAt(y + 2)] >> 2, l[h++] = i >> 8 & 255, l[h++] = i & 255), l
}

function wn(r) {
    return it[r >> 18 & 63] + it[r >> 12 & 63] + it[r >> 6 & 63] + it[r & 63]
}

function mn(r, i, o) {
    for (var s, u = [], l = i; l < o; l += 3) s = (r[l] << 16 & 16711680) + (r[l + 1] << 8 & 65280) + (r[l + 2] & 255), u.push(wn(s));
    return u.join("")
}

function En(r) {
    for (var i, o = r.length, s = o % 3, u = [], l = 16383, h = 0, p = o - s; h < p; h += l) u.push(mn(r, h, h + l > p ? p : h + l));
    return s === 1 ? (i = r[o - 1], u.push(it[i >> 2] + it[i << 4 & 63] + "==")) : s === 2 && (i = (r[o - 2] << 8) + r[o - 1], u.push(it[i >> 10] + it[i >> 4 & 63] + it[i << 2 & 63] + "=")), u.join("")
}
var me = {}; /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
me.read = function(r, i, o, s, u) {
    var l, h, p = u * 8 - s - 1,
        y = (1 << p) - 1,
        w = y >> 1,
        c = -7,
        E = o ? u - 1 : 0,
        B = o ? -1 : 1,
        m = r[i + E];
    for (E += B, l = m & (1 << -c) - 1, m >>= -c, c += p; c > 0; l = l * 256 + r[i + E], E += B, c -= 8);
    for (h = l & (1 << -c) - 1, l >>= -c, c += s; c > 0; h = h * 256 + r[i + E], E += B, c -= 8);
    if (l === 0) l = 1 - w;
    else {
        if (l === y) return h ? NaN : (m ? -1 : 1) * (1 / 0);
        h = h + Math.pow(2, s), l = l - w
    }
    return (m ? -1 : 1) * h * Math.pow(2, l - s)
};
me.write = function(r, i, o, s, u, l) {
    var h, p, y, w = l * 8 - u - 1,
        c = (1 << w) - 1,
        E = c >> 1,
        B = u === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
        m = s ? 0 : l - 1,
        x = s ? 1 : -1,
        A = i < 0 || i === 0 && 1 / i < 0 ? 1 : 0;
    for (i = Math.abs(i), isNaN(i) || i === 1 / 0 ? (p = isNaN(i) ? 1 : 0, h = c) : (h = Math.floor(Math.log(i) / Math.LN2), i * (y = Math.pow(2, -h)) < 1 && (h--, y *= 2), h + E >= 1 ? i += B / y : i += B * Math.pow(2, 1 - E), i * y >= 2 && (h++, y /= 2), h + E >= c ? (p = 0, h = c) : h + E >= 1 ? (p = (i * y - 1) * Math.pow(2, u), h = h + E) : (p = i * Math.pow(2, E - 1) * Math.pow(2, u), h = 0)); u >= 8; r[o + m] = p & 255, m += x, p /= 256, u -= 8);
    for (h = h << u | p, w += u; w > 0; r[o + m] = h & 255, m += x, h /= 256, w -= 8);
    r[o + m - x] |= A * 128
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(r) {
    const i = Qt,
        o = me,
        s = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
    r.Buffer = c, r.SlowBuffer = b, r.INSPECT_MAX_BYTES = 50;
    const u = 2147483647;
    r.kMaxLength = u;
    const {
        Uint8Array: l,
        ArrayBuffer: h,
        SharedArrayBuffer: p
    } = globalThis;
    c.TYPED_ARRAY_SUPPORT = y(), !c.TYPED_ARRAY_SUPPORT && typeof console != "undefined" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");

    function y() {
        try {
            const n = new l(1),
                t = {
                    foo: function() {
                        return 42
                    }
                };
            return Object.setPrototypeOf(t, l.prototype), Object.setPrototypeOf(n, t), n.foo() === 42
        } catch (n) {
            return !1
        }
    }
    Object.defineProperty(c.prototype, "parent", {
        enumerable: !0,
        get: function() {
            if (c.isBuffer(this)) return this.buffer
        }
    }), Object.defineProperty(c.prototype, "offset", {
        enumerable: !0,
        get: function() {
            if (c.isBuffer(this)) return this.byteOffset
        }
    });

    function w(n) {
        if (n > u) throw new RangeError('The value "' + n + '" is invalid for option "size"');
        const t = new l(n);
        return Object.setPrototypeOf(t, c.prototype), t
    }

    function c(n, t, e) {
        if (typeof n == "number") {
            if (typeof t == "string") throw new TypeError('The "string" argument must be of type string. Received type number');
            return x(n)
        }
        return E(n, t, e)
    }
    c.poolSize = 8192;

    function E(n, t, e) {
        if (typeof n == "string") return A(n, t);
        if (h.isView(n)) return v(n);
        if (n == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof n);
        if (tt(n, h) || n && tt(n.buffer, h) || typeof p != "undefined" && (tt(n, p) || n && tt(n.buffer, p))) return N(n, t, e);
        if (typeof n == "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
        const a = n.valueOf && n.valueOf();
        if (a != null && a !== n) return c.from(a, t, e);
        const f = Y(n);
        if (f) return f;
        if (typeof Symbol != "undefined" && Symbol.toPrimitive != null && typeof n[Symbol.toPrimitive] == "function") return c.from(n[Symbol.toPrimitive]("string"), t, e);
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof n)
    }
    c.from = function(n, t, e) {
        return E(n, t, e)
    }, Object.setPrototypeOf(c.prototype, l.prototype), Object.setPrototypeOf(c, l);

    function B(n) {
        if (typeof n != "number") throw new TypeError('"size" argument must be of type number');
        if (n < 0) throw new RangeError('The value "' + n + '" is invalid for option "size"')
    }

    function m(n, t, e) {
        return B(n), n <= 0 ? w(n) : t !== void 0 ? typeof e == "string" ? w(n).fill(t, e) : w(n).fill(t) : w(n)
    }
    c.alloc = function(n, t, e) {
        return m(n, t, e)
    };

    function x(n) {
        return B(n), w(n < 0 ? 0 : G(n) | 0)
    }
    c.allocUnsafe = function(n) {
        return x(n)
    }, c.allocUnsafeSlow = function(n) {
        return x(n)
    };

    function A(n, t) {
        if ((typeof t != "string" || t === "") && (t = "utf8"), !c.isEncoding(t)) throw new TypeError("Unknown encoding: " + t);
        const e = _(n, t) | 0;
        let a = w(e);
        const f = a.write(n, t);
        return f !== e && (a = a.slice(0, f)), a
    }

    function I(n) {
        const t = n.length < 0 ? 0 : G(n.length) | 0,
            e = w(t);
        for (let a = 0; a < t; a += 1) e[a] = n[a] & 255;
        return e
    }

    function v(n) {
        if (tt(n, l)) {
            const t = new l(n);
            return N(t.buffer, t.byteOffset, t.byteLength)
        }
        return I(n)
    }

    function N(n, t, e) {
        if (t < 0 || n.byteLength < t) throw new RangeError('"offset" is outside of buffer bounds');
        if (n.byteLength < t + (e || 0)) throw new RangeError('"length" is outside of buffer bounds');
        let a;
        return t === void 0 && e === void 0 ? a = new l(n) : e === void 0 ? a = new l(n, t) : a = new l(n, t, e), Object.setPrototypeOf(a, c.prototype), a
    }

    function Y(n) {
        if (c.isBuffer(n)) {
            const t = G(n.length) | 0,
                e = w(t);
            return e.length === 0 || n.copy(e, 0, 0, t), e
        }
        if (n.length !== void 0) return typeof n.length != "number" || se(n.length) ? w(0) : I(n);
        if (n.type === "Buffer" && Array.isArray(n.data)) return I(n.data)
    }

    function G(n) {
        if (n >= u) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + u.toString(16) + " bytes");
        return n | 0
    }

    function b(n) {
        return +n != n && (n = 0), c.alloc(+n)
    }
    c.isBuffer = function(t) {
        return t != null && t._isBuffer === !0 && t !== c.prototype
    }, c.compare = function(t, e) {
        if (tt(t, l) && (t = c.from(t, t.offset, t.byteLength)), tt(e, l) && (e = c.from(e, e.offset, e.byteLength)), !c.isBuffer(t) || !c.isBuffer(e)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
        if (t === e) return 0;
        let a = t.length,
            f = e.length;
        for (let d = 0, g = Math.min(a, f); d < g; ++d)
            if (t[d] !== e[d]) {
                a = t[d], f = e[d];
                break
            }
        return a < f ? -1 : f < a ? 1 : 0
    }, c.isEncoding = function(t) {
        switch (String(t).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return !0;
            default:
                return !1
        }
    }, c.concat = function(t, e) {
        if (!Array.isArray(t)) throw new TypeError('"list" argument must be an Array of Buffers');
        if (t.length === 0) return c.alloc(0);
        let a;
        if (e === void 0)
            for (e = 0, a = 0; a < t.length; ++a) e += t[a].length;
        const f = c.allocUnsafe(e);
        let d = 0;
        for (a = 0; a < t.length; ++a) {
            let g = t[a];
            if (tt(g, l)) d + g.length > f.length ? (c.isBuffer(g) || (g = c.from(g)), g.copy(f, d)) : l.prototype.set.call(f, g, d);
            else if (c.isBuffer(g)) g.copy(f, d);
            else throw new TypeError('"list" argument must be an Array of Buffers');
            d += g.length
        }
        return f
    };

    function _(n, t) {
        if (c.isBuffer(n)) return n.length;
        if (h.isView(n) || tt(n, h)) return n.byteLength;
        if (typeof n != "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof n);
        const e = n.length,
            a = arguments.length > 2 && arguments[2] === !0;
        if (!a && e === 0) return 0;
        let f = !1;
        for (;;) switch (t) {
            case "ascii":
            case "latin1":
            case "binary":
                return e;
            case "utf8":
            case "utf-8":
                return ae(n).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return e * 2;
            case "hex":
                return e >>> 1;
            case "base64":
                return $e(n).length;
            default:
                if (f) return a ? -1 : ae(n).length;
                t = ("" + t).toLowerCase(), f = !0
        }
    }
    c.byteLength = _;

    function U(n, t, e) {
        let a = !1;
        if ((t === void 0 || t < 0) && (t = 0), t > this.length || ((e === void 0 || e > this.length) && (e = this.length), e <= 0) || (e >>>= 0, t >>>= 0, e <= t)) return "";
        for (n || (n = "utf8");;) switch (n) {
            case "hex":
                return Gr(this, t, e);
            case "utf8":
            case "utf-8":
                return ke(this, t, e);
            case "ascii":
                return Mr(this, t, e);
            case "latin1":
            case "binary":
                return jr(this, t, e);
            case "base64":
                return Or(this, t, e);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return Vr(this, t, e);
            default:
                if (a) throw new TypeError("Unknown encoding: " + n);
                n = (n + "").toLowerCase(), a = !0
        }
    }
    c.prototype._isBuffer = !0;

    function R(n, t, e) {
        const a = n[t];
        n[t] = n[e], n[e] = a
    }
    c.prototype.swap16 = function() {
        const t = this.length;
        if (t % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
        for (let e = 0; e < t; e += 2) R(this, e, e + 1);
        return this
    }, c.prototype.swap32 = function() {
        const t = this.length;
        if (t % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
        for (let e = 0; e < t; e += 4) R(this, e, e + 3), R(this, e + 1, e + 2);
        return this
    }, c.prototype.swap64 = function() {
        const t = this.length;
        if (t % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
        for (let e = 0; e < t; e += 8) R(this, e, e + 7), R(this, e + 1, e + 6), R(this, e + 2, e + 5), R(this, e + 3, e + 4);
        return this
    }, c.prototype.toString = function() {
        const t = this.length;
        return t === 0 ? "" : arguments.length === 0 ? ke(this, 0, t) : U.apply(this, arguments)
    }, c.prototype.toLocaleString = c.prototype.toString, c.prototype.equals = function(t) {
        if (!c.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
        return this === t ? !0 : c.compare(this, t) === 0
    }, c.prototype.inspect = function() {
        let t = "";
        const e = r.INSPECT_MAX_BYTES;
        return t = this.toString("hex", 0, e).replace(/(.{2})/g, "$1 ").trim(), this.length > e && (t += " ... "), "<Buffer " + t + ">"
    }, s && (c.prototype[s] = c.prototype.inspect), c.prototype.compare = function(t, e, a, f, d) {
        if (tt(t, l) && (t = c.from(t, t.offset, t.byteLength)), !c.isBuffer(t)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t);
        if (e === void 0 && (e = 0), a === void 0 && (a = t ? t.length : 0), f === void 0 && (f = 0), d === void 0 && (d = this.length), e < 0 || a > t.length || f < 0 || d > this.length) throw new RangeError("out of range index");
        if (f >= d && e >= a) return 0;
        if (f >= d) return -1;
        if (e >= a) return 1;
        if (e >>>= 0, a >>>= 0, f >>>= 0, d >>>= 0, this === t) return 0;
        let g = d - f,
            F = a - e;
        const D = Math.min(g, F),
            C = this.slice(f, d),
            O = t.slice(e, a);
        for (let S = 0; S < D; ++S)
            if (C[S] !== O[S]) {
                g = C[S], F = O[S];
                break
            }
        return g < F ? -1 : F < g ? 1 : 0
    };

    function P(n, t, e, a, f) {
        if (n.length === 0) return -1;
        if (typeof e == "string" ? (a = e, e = 0) : e > 2147483647 ? e = 2147483647 : e < -2147483648 && (e = -2147483648), e = +e, se(e) && (e = f ? 0 : n.length - 1), e < 0 && (e = n.length + e), e >= n.length) {
            if (f) return -1;
            e = n.length - 1
        } else if (e < 0)
            if (f) e = 0;
            else return -1;
        if (typeof t == "string" && (t = c.from(t, a)), c.isBuffer(t)) return t.length === 0 ? -1 : Q(n, t, e, a, f);
        if (typeof t == "number") return t = t & 255, typeof l.prototype.indexOf == "function" ? f ? l.prototype.indexOf.call(n, t, e) : l.prototype.lastIndexOf.call(n, t, e) : Q(n, [t], e, a, f);
        throw new TypeError("val must be string, number or Buffer")
    }

    function Q(n, t, e, a, f) {
        let d = 1,
            g = n.length,
            F = t.length;
        if (a !== void 0 && (a = String(a).toLowerCase(), a === "ucs2" || a === "ucs-2" || a === "utf16le" || a === "utf-16le")) {
            if (n.length < 2 || t.length < 2) return -1;
            d = 2, g /= 2, F /= 2, e /= 2
        }

        function D(O, S) {
            return d === 1 ? O[S] : O.readUInt16BE(S * d)
        }
        let C;
        if (f) {
            let O = -1;
            for (C = e; C < g; C++)
                if (D(n, C) === D(t, O === -1 ? 0 : C - O)) {
                    if (O === -1 && (O = C), C - O + 1 === F) return O * d
                } else O !== -1 && (C -= C - O), O = -1
        } else
            for (e + F > g && (e = g - F), C = e; C >= 0; C--) {
                let O = !0;
                for (let S = 0; S < F; S++)
                    if (D(n, C + S) !== D(t, S)) {
                        O = !1;
                        break
                    }
                if (O) return C
            }
        return -1
    }
    c.prototype.includes = function(t, e, a) {
        return this.indexOf(t, e, a) !== -1
    }, c.prototype.indexOf = function(t, e, a) {
        return P(this, t, e, a, !0)
    }, c.prototype.lastIndexOf = function(t, e, a) {
        return P(this, t, e, a, !1)
    };

    function mt(n, t, e, a) {
        e = Number(e) || 0;
        const f = n.length - e;
        a ? (a = Number(a), a > f && (a = f)) : a = f;
        const d = t.length;
        a > d / 2 && (a = d / 2);
        let g;
        for (g = 0; g < a; ++g) {
            const F = parseInt(t.substr(g * 2, 2), 16);
            if (se(F)) return g;
            n[e + g] = F
        }
        return g
    }

    function Mt(n, t, e, a) {
        return Gt(ae(t, n.length - e), n, e, a)
    }

    function jt(n, t, e, a) {
        return Gt(Hr(t), n, e, a)
    }

    function Et(n, t, e, a) {
        return Gt($e(t), n, e, a)
    }

    function Dr(n, t, e, a) {
        return Gt(Kr(t, n.length - e), n, e, a)
    }
    c.prototype.write = function(t, e, a, f) {
        if (e === void 0) f = "utf8", a = this.length, e = 0;
        else if (a === void 0 && typeof e == "string") f = e, a = this.length, e = 0;
        else if (isFinite(e)) e = e >>> 0, isFinite(a) ? (a = a >>> 0, f === void 0 && (f = "utf8")) : (f = a, a = void 0);
        else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        const d = this.length - e;
        if ((a === void 0 || a > d) && (a = d), t.length > 0 && (a < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
        f || (f = "utf8");
        let g = !1;
        for (;;) switch (f) {
            case "hex":
                return mt(this, t, e, a);
            case "utf8":
            case "utf-8":
                return Mt(this, t, e, a);
            case "ascii":
            case "latin1":
            case "binary":
                return jt(this, t, e, a);
            case "base64":
                return Et(this, t, e, a);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return Dr(this, t, e, a);
            default:
                if (g) throw new TypeError("Unknown encoding: " + f);
                f = ("" + f).toLowerCase(), g = !0
        }
    }, c.prototype.toJSON = function() {
        return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0)
        }
    };

    function Or(n, t, e) {
        return t === 0 && e === n.length ? i.fromByteArray(n) : i.fromByteArray(n.slice(t, e))
    }

    function ke(n, t, e) {
        e = Math.min(n.length, e);
        const a = [];
        let f = t;
        for (; f < e;) {
            const d = n[f];
            let g = null,
                F = d > 239 ? 4 : d > 223 ? 3 : d > 191 ? 2 : 1;
            if (f + F <= e) {
                let D, C, O, S;
                switch (F) {
                    case 1:
                        d < 128 && (g = d);
                        break;
                    case 2:
                        D = n[f + 1], (D & 192) === 128 && (S = (d & 31) << 6 | D & 63, S > 127 && (g = S));
                        break;
                    case 3:
                        D = n[f + 1], C = n[f + 2], (D & 192) === 128 && (C & 192) === 128 && (S = (d & 15) << 12 | (D & 63) << 6 | C & 63, S > 2047 && (S < 55296 || S > 57343) && (g = S));
                        break;
                    case 4:
                        D = n[f + 1], C = n[f + 2], O = n[f + 3], (D & 192) === 128 && (C & 192) === 128 && (O & 192) === 128 && (S = (d & 15) << 18 | (D & 63) << 12 | (C & 63) << 6 | O & 63, S > 65535 && S < 1114112 && (g = S))
                }
            }
            g === null ? (g = 65533, F = 1) : g > 65535 && (g -= 65536, a.push(g >>> 10 & 1023 | 55296), g = 56320 | g & 1023), a.push(g), f += F
        }
        return $r(a)
    }
    const Te = 4096;

    function $r(n) {
        const t = n.length;
        if (t <= Te) return String.fromCharCode.apply(String, n);
        let e = "",
            a = 0;
        for (; a < t;) e += String.fromCharCode.apply(String, n.slice(a, a += Te));
        return e
    }

    function Mr(n, t, e) {
        let a = "";
        e = Math.min(n.length, e);
        for (let f = t; f < e; ++f) a += String.fromCharCode(n[f] & 127);
        return a
    }

    function jr(n, t, e) {
        let a = "";
        e = Math.min(n.length, e);
        for (let f = t; f < e; ++f) a += String.fromCharCode(n[f]);
        return a
    }

    function Gr(n, t, e) {
        const a = n.length;
        (!t || t < 0) && (t = 0), (!e || e < 0 || e > a) && (e = a);
        let f = "";
        for (let d = t; d < e; ++d) f += Jr[n[d]];
        return f
    }

    function Vr(n, t, e) {
        const a = n.slice(t, e);
        let f = "";
        for (let d = 0; d < a.length - 1; d += 2) f += String.fromCharCode(a[d] + a[d + 1] * 256);
        return f
    }
    c.prototype.slice = function(t, e) {
        const a = this.length;
        t = ~~t, e = e === void 0 ? a : ~~e, t < 0 ? (t += a, t < 0 && (t = 0)) : t > a && (t = a), e < 0 ? (e += a, e < 0 && (e = 0)) : e > a && (e = a), e < t && (e = t);
        const f = this.subarray(t, e);
        return Object.setPrototypeOf(f, c.prototype), f
    };

    function j(n, t, e) {
        if (n % 1 !== 0 || n < 0) throw new RangeError("offset is not uint");
        if (n + t > e) throw new RangeError("Trying to access beyond buffer length")
    }
    c.prototype.readUintLE = c.prototype.readUIntLE = function(t, e, a) {
        t = t >>> 0, e = e >>> 0, a || j(t, e, this.length);
        let f = this[t],
            d = 1,
            g = 0;
        for (; ++g < e && (d *= 256);) f += this[t + g] * d;
        return f
    }, c.prototype.readUintBE = c.prototype.readUIntBE = function(t, e, a) {
        t = t >>> 0, e = e >>> 0, a || j(t, e, this.length);
        let f = this[t + --e],
            d = 1;
        for (; e > 0 && (d *= 256);) f += this[t + --e] * d;
        return f
    }, c.prototype.readUint8 = c.prototype.readUInt8 = function(t, e) {
        return t = t >>> 0, e || j(t, 1, this.length), this[t]
    }, c.prototype.readUint16LE = c.prototype.readUInt16LE = function(t, e) {
        return t = t >>> 0, e || j(t, 2, this.length), this[t] | this[t + 1] << 8
    }, c.prototype.readUint16BE = c.prototype.readUInt16BE = function(t, e) {
        return t = t >>> 0, e || j(t, 2, this.length), this[t] << 8 | this[t + 1]
    }, c.prototype.readUint32LE = c.prototype.readUInt32LE = function(t, e) {
        return t = t >>> 0, e || j(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + this[t + 3] * 16777216
    }, c.prototype.readUint32BE = c.prototype.readUInt32BE = function(t, e) {
        return t = t >>> 0, e || j(t, 4, this.length), this[t] * 16777216 + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
    }, c.prototype.readBigUInt64LE = st(function(t) {
        t = t >>> 0, ft(t, "offset");
        const e = this[t],
            a = this[t + 7];
        (e === void 0 || a === void 0) && xt(t, this.length - 8);
        const f = e + this[++t] * k(2, 8) + this[++t] * k(2, 16) + this[++t] * k(2, 24),
            d = this[++t] + this[++t] * k(2, 8) + this[++t] * k(2, 16) + a * k(2, 24);
        return BigInt(f) + (BigInt(d) << BigInt(32))
    }), c.prototype.readBigUInt64BE = st(function(t) {
        t = t >>> 0, ft(t, "offset");
        const e = this[t],
            a = this[t + 7];
        (e === void 0 || a === void 0) && xt(t, this.length - 8);
        const f = e * k(2, 24) + this[++t] * k(2, 16) + this[++t] * k(2, 8) + this[++t],
            d = this[++t] * k(2, 24) + this[++t] * k(2, 16) + this[++t] * k(2, 8) + a;
        return (BigInt(f) << BigInt(32)) + BigInt(d)
    }), c.prototype.readIntLE = function(t, e, a) {
        t = t >>> 0, e = e >>> 0, a || j(t, e, this.length);
        let f = this[t],
            d = 1,
            g = 0;
        for (; ++g < e && (d *= 256);) f += this[t + g] * d;
        return d *= 128, f >= d && (f -= Math.pow(2, 8 * e)), f
    }, c.prototype.readIntBE = function(t, e, a) {
        t = t >>> 0, e = e >>> 0, a || j(t, e, this.length);
        let f = e,
            d = 1,
            g = this[t + --f];
        for (; f > 0 && (d *= 256);) g += this[t + --f] * d;
        return d *= 128, g >= d && (g -= Math.pow(2, 8 * e)), g
    }, c.prototype.readInt8 = function(t, e) {
        return t = t >>> 0, e || j(t, 1, this.length), this[t] & 128 ? (255 - this[t] + 1) * -1 : this[t]
    }, c.prototype.readInt16LE = function(t, e) {
        t = t >>> 0, e || j(t, 2, this.length);
        const a = this[t] | this[t + 1] << 8;
        return a & 32768 ? a | 4294901760 : a
    }, c.prototype.readInt16BE = function(t, e) {
        t = t >>> 0, e || j(t, 2, this.length);
        const a = this[t + 1] | this[t] << 8;
        return a & 32768 ? a | 4294901760 : a
    }, c.prototype.readInt32LE = function(t, e) {
        return t = t >>> 0, e || j(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
    }, c.prototype.readInt32BE = function(t, e) {
        return t = t >>> 0, e || j(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
    }, c.prototype.readBigInt64LE = st(function(t) {
        t = t >>> 0, ft(t, "offset");
        const e = this[t],
            a = this[t + 7];
        (e === void 0 || a === void 0) && xt(t, this.length - 8);
        const f = this[t + 4] + this[t + 5] * k(2, 8) + this[t + 6] * k(2, 16) + (a << 24);
        return (BigInt(f) << BigInt(32)) + BigInt(e + this[++t] * k(2, 8) + this[++t] * k(2, 16) + this[++t] * k(2, 24))
    }), c.prototype.readBigInt64BE = st(function(t) {
        t = t >>> 0, ft(t, "offset");
        const e = this[t],
            a = this[t + 7];
        (e === void 0 || a === void 0) && xt(t, this.length - 8);
        const f = (e << 24) + this[++t] * k(2, 16) + this[++t] * k(2, 8) + this[++t];
        return (BigInt(f) << BigInt(32)) + BigInt(this[++t] * k(2, 24) + this[++t] * k(2, 16) + this[++t] * k(2, 8) + a)
    }), c.prototype.readFloatLE = function(t, e) {
        return t = t >>> 0, e || j(t, 4, this.length), o.read(this, t, !0, 23, 4)
    }, c.prototype.readFloatBE = function(t, e) {
        return t = t >>> 0, e || j(t, 4, this.length), o.read(this, t, !1, 23, 4)
    }, c.prototype.readDoubleLE = function(t, e) {
        return t = t >>> 0, e || j(t, 8, this.length), o.read(this, t, !0, 52, 8)
    }, c.prototype.readDoubleBE = function(t, e) {
        return t = t >>> 0, e || j(t, 8, this.length), o.read(this, t, !1, 52, 8)
    };

    function W(n, t, e, a, f, d) {
        if (!c.isBuffer(n)) throw new TypeError('"buffer" argument must be a Buffer instance');
        if (t > f || t < d) throw new RangeError('"value" argument is out of bounds');
        if (e + a > n.length) throw new RangeError("Index out of range")
    }
    c.prototype.writeUintLE = c.prototype.writeUIntLE = function(t, e, a, f) {
        if (t = +t, e = e >>> 0, a = a >>> 0, !f) {
            const F = Math.pow(2, 8 * a) - 1;
            W(this, t, e, a, F, 0)
        }
        let d = 1,
            g = 0;
        for (this[e] = t & 255; ++g < a && (d *= 256);) this[e + g] = t / d & 255;
        return e + a
    }, c.prototype.writeUintBE = c.prototype.writeUIntBE = function(t, e, a, f) {
        if (t = +t, e = e >>> 0, a = a >>> 0, !f) {
            const F = Math.pow(2, 8 * a) - 1;
            W(this, t, e, a, F, 0)
        }
        let d = a - 1,
            g = 1;
        for (this[e + d] = t & 255; --d >= 0 && (g *= 256);) this[e + d] = t / g & 255;
        return e + a
    }, c.prototype.writeUint8 = c.prototype.writeUInt8 = function(t, e, a) {
        return t = +t, e = e >>> 0, a || W(this, t, e, 1, 255, 0), this[e] = t & 255, e + 1
    }, c.prototype.writeUint16LE = c.prototype.writeUInt16LE = function(t, e, a) {
        return t = +t, e = e >>> 0, a || W(this, t, e, 2, 65535, 0), this[e] = t & 255, this[e + 1] = t >>> 8, e + 2
    }, c.prototype.writeUint16BE = c.prototype.writeUInt16BE = function(t, e, a) {
        return t = +t, e = e >>> 0, a || W(this, t, e, 2, 65535, 0), this[e] = t >>> 8, this[e + 1] = t & 255, e + 2
    }, c.prototype.writeUint32LE = c.prototype.writeUInt32LE = function(t, e, a) {
        return t = +t, e = e >>> 0, a || W(this, t, e, 4, 4294967295, 0), this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = t & 255, e + 4
    }, c.prototype.writeUint32BE = c.prototype.writeUInt32BE = function(t, e, a) {
        return t = +t, e = e >>> 0, a || W(this, t, e, 4, 4294967295, 0), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = t & 255, e + 4
    };

    function Ce(n, t, e, a, f) {
        Oe(t, a, f, n, e, 7);
        let d = Number(t & BigInt(4294967295));
        n[e++] = d, d = d >> 8, n[e++] = d, d = d >> 8, n[e++] = d, d = d >> 8, n[e++] = d;
        let g = Number(t >> BigInt(32) & BigInt(4294967295));
        return n[e++] = g, g = g >> 8, n[e++] = g, g = g >> 8, n[e++] = g, g = g >> 8, n[e++] = g, e
    }

    function Le(n, t, e, a, f) {
        Oe(t, a, f, n, e, 7);
        let d = Number(t & BigInt(4294967295));
        n[e + 7] = d, d = d >> 8, n[e + 6] = d, d = d >> 8, n[e + 5] = d, d = d >> 8, n[e + 4] = d;
        let g = Number(t >> BigInt(32) & BigInt(4294967295));
        return n[e + 3] = g, g = g >> 8, n[e + 2] = g, g = g >> 8, n[e + 1] = g, g = g >> 8, n[e] = g, e + 8
    }
    c.prototype.writeBigUInt64LE = st(function(t, e = 0) {
        return Ce(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"))
    }), c.prototype.writeBigUInt64BE = st(function(t, e = 0) {
        return Le(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"))
    }), c.prototype.writeIntLE = function(t, e, a, f) {
        if (t = +t, e = e >>> 0, !f) {
            const D = Math.pow(2, 8 * a - 1);
            W(this, t, e, a, D - 1, -D)
        }
        let d = 0,
            g = 1,
            F = 0;
        for (this[e] = t & 255; ++d < a && (g *= 256);) t < 0 && F === 0 && this[e + d - 1] !== 0 && (F = 1), this[e + d] = (t / g >> 0) - F & 255;
        return e + a
    }, c.prototype.writeIntBE = function(t, e, a, f) {
        if (t = +t, e = e >>> 0, !f) {
            const D = Math.pow(2, 8 * a - 1);
            W(this, t, e, a, D - 1, -D)
        }
        let d = a - 1,
            g = 1,
            F = 0;
        for (this[e + d] = t & 255; --d >= 0 && (g *= 256);) t < 0 && F === 0 && this[e + d + 1] !== 0 && (F = 1), this[e + d] = (t / g >> 0) - F & 255;
        return e + a
    }, c.prototype.writeInt8 = function(t, e, a) {
        return t = +t, e = e >>> 0, a || W(this, t, e, 1, 127, -128), t < 0 && (t = 255 + t + 1), this[e] = t & 255, e + 1
    }, c.prototype.writeInt16LE = function(t, e, a) {
        return t = +t, e = e >>> 0, a || W(this, t, e, 2, 32767, -32768), this[e] = t & 255, this[e + 1] = t >>> 8, e + 2
    }, c.prototype.writeInt16BE = function(t, e, a) {
        return t = +t, e = e >>> 0, a || W(this, t, e, 2, 32767, -32768), this[e] = t >>> 8, this[e + 1] = t & 255, e + 2
    }, c.prototype.writeInt32LE = function(t, e, a) {
        return t = +t, e = e >>> 0, a || W(this, t, e, 4, 2147483647, -2147483648), this[e] = t & 255, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24, e + 4
    }, c.prototype.writeInt32BE = function(t, e, a) {
        return t = +t, e = e >>> 0, a || W(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = t & 255, e + 4
    }, c.prototype.writeBigInt64LE = st(function(t, e = 0) {
        return Ce(this, t, e, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
    }), c.prototype.writeBigInt64BE = st(function(t, e = 0) {
        return Le(this, t, e, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
    });

    function ve(n, t, e, a, f, d) {
        if (e + a > n.length) throw new RangeError("Index out of range");
        if (e < 0) throw new RangeError("Index out of range")
    }

    function Ne(n, t, e, a, f) {
        return t = +t, e = e >>> 0, f || ve(n, t, e, 4), o.write(n, t, e, a, 23, 4), e + 4
    }
    c.prototype.writeFloatLE = function(t, e, a) {
        return Ne(this, t, e, !0, a)
    }, c.prototype.writeFloatBE = function(t, e, a) {
        return Ne(this, t, e, !1, a)
    };

    function Pe(n, t, e, a, f) {
        return t = +t, e = e >>> 0, f || ve(n, t, e, 8), o.write(n, t, e, a, 52, 8), e + 8
    }
    c.prototype.writeDoubleLE = function(t, e, a) {
        return Pe(this, t, e, !0, a)
    }, c.prototype.writeDoubleBE = function(t, e, a) {
        return Pe(this, t, e, !1, a)
    }, c.prototype.copy = function(t, e, a, f) {
        if (!c.isBuffer(t)) throw new TypeError("argument should be a Buffer");
        if (a || (a = 0), !f && f !== 0 && (f = this.length), e >= t.length && (e = t.length), e || (e = 0), f > 0 && f < a && (f = a), f === a || t.length === 0 || this.length === 0) return 0;
        if (e < 0) throw new RangeError("targetStart out of bounds");
        if (a < 0 || a >= this.length) throw new RangeError("Index out of range");
        if (f < 0) throw new RangeError("sourceEnd out of bounds");
        f > this.length && (f = this.length), t.length - e < f - a && (f = t.length - e + a);
        const d = f - a;
        return this === t && typeof l.prototype.copyWithin == "function" ? this.copyWithin(e, a, f) : l.prototype.set.call(t, this.subarray(a, f), e), d
    }, c.prototype.fill = function(t, e, a, f) {
        if (typeof t == "string") {
            if (typeof e == "string" ? (f = e, e = 0, a = this.length) : typeof a == "string" && (f = a, a = this.length), f !== void 0 && typeof f != "string") throw new TypeError("encoding must be a string");
            if (typeof f == "string" && !c.isEncoding(f)) throw new TypeError("Unknown encoding: " + f);
            if (t.length === 1) {
                const g = t.charCodeAt(0);
                (f === "utf8" && g < 128 || f === "latin1") && (t = g)
            }
        } else typeof t == "number" ? t = t & 255 : typeof t == "boolean" && (t = Number(t));
        if (e < 0 || this.length < e || this.length < a) throw new RangeError("Out of range index");
        if (a <= e) return this;
        e = e >>> 0, a = a === void 0 ? this.length : a >>> 0, t || (t = 0);
        let d;
        if (typeof t == "number")
            for (d = e; d < a; ++d) this[d] = t;
        else {
            const g = c.isBuffer(t) ? t : c.from(t, f),
                F = g.length;
            if (F === 0) throw new TypeError('The value "' + t + '" is invalid for argument "value"');
            for (d = 0; d < a - e; ++d) this[d + e] = g[d % F]
        }
        return this
    };
    const ut = {};

    function oe(n, t, e) {
        ut[n] = class extends e {
            constructor() {
                super(), Object.defineProperty(this, "message", {
                    value: t.apply(this, arguments),
                    writable: !0,
                    configurable: !0
                }), this.name = `${this.name} [${n}]`, this.stack, delete this.name
            }
            get code() {
                return n
            }
            set code(f) {
                Object.defineProperty(this, "code", {
                    configurable: !0,
                    enumerable: !0,
                    value: f,
                    writable: !0
                })
            }
            toString() {
                return `${this.name} [${n}]: ${this.message}`
            }
        }
    }
    oe("ERR_BUFFER_OUT_OF_BOUNDS", function(n) {
        return n ? `${n} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds"
    }, RangeError), oe("ERR_INVALID_ARG_TYPE", function(n, t) {
        return `The "${n}" argument must be of type number. Received type ${typeof t}`
    }, TypeError), oe("ERR_OUT_OF_RANGE", function(n, t, e) {
        let a = `The value of "${n}" is out of range.`,
            f = e;
        return Number.isInteger(e) && Math.abs(e) > k(2, 32) ? f = De(String(e)) : typeof e == "bigint" && (f = String(e), (e > k(BigInt(2), BigInt(32)) || e < -k(BigInt(2), BigInt(32))) && (f = De(f)), f += "n"), a += ` It must be ${t}. Received ${f}`, a
    }, RangeError);

    function De(n) {
        let t = "",
            e = n.length;
        const a = n[0] === "-" ? 1 : 0;
        for (; e >= a + 4; e -= 3) t = `_${n.slice(e-3,e)}${t}`;
        return `${n.slice(0,e)}${t}`
    }

    function Yr(n, t, e) {
        ft(t, "offset"), (n[t] === void 0 || n[t + e] === void 0) && xt(t, n.length - (e + 1))
    }

    function Oe(n, t, e, a, f, d) {
        if (n > e || n < t) {
            const g = typeof t == "bigint" ? "n" : "";
            let F;
            throw t === 0 || t === BigInt(0) ? F = `>= 0${g} and < 2${g} ** ${(d+1)*8}${g}` : F = `>= -(2${g} ** ${(d+1)*8-1}${g}) and < 2 ** ${(d+1)*8-1}${g}`, new ut.ERR_OUT_OF_RANGE("value", F, n)
        }
        Yr(a, f, d)
    }

    function ft(n, t) {
        if (typeof n != "number") throw new ut.ERR_INVALID_ARG_TYPE(t, "number", n)
    }

    function xt(n, t, e) {
        throw Math.floor(n) !== n ? (ft(n, e), new ut.ERR_OUT_OF_RANGE("offset", "an integer", n)) : t < 0 ? new ut.ERR_BUFFER_OUT_OF_BOUNDS : new ut.ERR_OUT_OF_RANGE("offset", `>= 0 and <= ${t}`, n)
    }
    const qr = /[^+/0-9A-Za-z-_]/g;

    function Wr(n) {
        if (n = n.split("=")[0], n = n.trim().replace(qr, ""), n.length < 2) return "";
        for (; n.length % 4 !== 0;) n = n + "=";
        return n
    }

    function ae(n, t) {
        t = t || 1 / 0;
        let e;
        const a = n.length;
        let f = null;
        const d = [];
        for (let g = 0; g < a; ++g) {
            if (e = n.charCodeAt(g), e > 55295 && e < 57344) {
                if (!f) {
                    if (e > 56319) {
                        (t -= 3) > -1 && d.push(239, 191, 189);
                        continue
                    } else if (g + 1 === a) {
                        (t -= 3) > -1 && d.push(239, 191, 189);
                        continue
                    }
                    f = e;
                    continue
                }
                if (e < 56320) {
                    (t -= 3) > -1 && d.push(239, 191, 189), f = e;
                    continue
                }
                e = (f - 55296 << 10 | e - 56320) + 65536
            } else f && (t -= 3) > -1 && d.push(239, 191, 189);
            if (f = null, e < 128) {
                if ((t -= 1) < 0) break;
                d.push(e)
            } else if (e < 2048) {
                if ((t -= 2) < 0) break;
                d.push(e >> 6 | 192, e & 63 | 128)
            } else if (e < 65536) {
                if ((t -= 3) < 0) break;
                d.push(e >> 12 | 224, e >> 6 & 63 | 128, e & 63 | 128)
            } else if (e < 1114112) {
                if ((t -= 4) < 0) break;
                d.push(e >> 18 | 240, e >> 12 & 63 | 128, e >> 6 & 63 | 128, e & 63 | 128)
            } else throw new Error("Invalid code point")
        }
        return d
    }

    function Hr(n) {
        const t = [];
        for (let e = 0; e < n.length; ++e) t.push(n.charCodeAt(e) & 255);
        return t
    }

    function Kr(n, t) {
        let e, a, f;
        const d = [];
        for (let g = 0; g < n.length && !((t -= 2) < 0); ++g) e = n.charCodeAt(g), a = e >> 8, f = e % 256, d.push(f), d.push(a);
        return d
    }

    function $e(n) {
        return i.toByteArray(Wr(n))
    }

    function Gt(n, t, e, a) {
        let f;
        for (f = 0; f < a && !(f + e >= t.length || f >= n.length); ++f) t[f + e] = n[f];
        return f
    }

    function tt(n, t) {
        return n instanceof t || n != null && n.constructor != null && n.constructor.name != null && n.constructor.name === t.name
    }

    function se(n) {
        return n !== n
    }
    const Jr = function() {
        const n = "0123456789abcdef",
            t = new Array(256);
        for (let e = 0; e < 16; ++e) {
            const a = e * 16;
            for (let f = 0; f < 16; ++f) t[a + f] = n[e] + n[f]
        }
        return t
    }();

    function st(n) {
        return typeof BigInt == "undefined" ? Xr : n
    }

    function Xr() {
        throw new Error("BigInt not supported")
    }
})(fn);

function xn(r) {
    const i = atob(r),
        o = new Uint8Array(i.length);
    for (let s = 0; s < i.length; s++) o[s] = i.charCodeAt(s);
    return o.buffer
}
const ur = window.fetch;
window.fetch = (r, i) => ((r instanceof Request ? r.method : (i == null ? void 0 : i.method) || "GET") !== "GET" && It.delete(Ee(r)), ur(r, i));
const It = new Map;

function _n(r, i) {
    const o = Ee(r, i),
        s = document.querySelector(o);
    if (s != null && s.textContent) {
        let u = JSON.parse(s.textContent),
            {
                body: l
            } = u,
            h = Ye(u, ["body"]);
        const p = s.getAttribute("data-ttl");
        return p && It.set(o, {
            body: l,
            init: h,
            ttl: 1e3 * Number(p)
        }), s.getAttribute("data-b64") !== null && (l = xn(l)), Promise.resolve(new Response(l, h))
    }
    return window.fetch(r, i)
}

function Bn(r, i, o) {
    if (It.size > 0) {
        const s = Ee(r, o),
            u = It.get(s);
        if (u) {
            if (performance.now() < u.ttl && ["default", "force-cache", "only-if-cached", void 0].includes(o == null ? void 0 : o.cache)) return new Response(u.body, u.init);
            It.delete(s)
        }
    }
    return window.fetch(i, o)
}

function Ee(r, i) {
    let s = `script[data-sveltekit-fetched][data-url=${JSON.stringify(r instanceof Request?r.url:r)}]`;
    if (i != null && i.headers || i != null && i.body) {
        const u = [];
        i.headers && u.push([...new Headers(i.headers)].join(",")), i.body && (typeof i.body == "string" || ArrayBuffer.isView(i.body)) && u.push(i.body), s += `[data-hash="${un(...u)}"]`
    }
    return s
}
const In = /^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;

function bn(r) {
    const i = [];
    return {
        pattern: r === "/" ? /^\/$/ : new RegExp(`^${Fn(r).map(s=>{const u=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(s);if(u)return i.push({name:u[1],matcher:u[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const l=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(s);if(l)return i.push({name:l[1],matcher:l[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!s)return;const h=s.split(/\[(.+?)\](?!\])/);return"/"+h.map((y,w)=>{if(w%2){if(y.startsWith("x+"))return ue(String.fromCharCode(parseInt(y.slice(2),16)));if(y.startsWith("u+"))return ue(String.fromCharCode(...y.slice(2).split("-").map(A=>parseInt(A,16))));const c=In.exec(y),[,E,B,m,x]=c;return i.push({name:m,matcher:x,optional:!!E,rest:!!B,chained:B?w===1&&h[0]==="":!1}),B?"(.*?)":E?"([^/]*)?":"([^/]+?)"}return ue(y)}).join("")}).join("")}/?$`),
        params: i
    }
}

function An(r) {
    return !/^\([^)]+\)$/.test(r)
}

function Fn(r) {
    return r.slice(1).split("/").filter(An)
}

function Un(r, i, o) {
    const s = {},
        u = r.slice(1),
        l = u.filter(p => p !== void 0);
    let h = 0;
    for (let p = 0; p < i.length; p += 1) {
        const y = i[p];
        let w = u[p - h];
        if (y.chained && y.rest && h && (w = u.slice(p - h, p + 1).filter(c => c).join("/"), h = 0), w === void 0) {
            y.rest && (s[y.name] = "");
            continue
        }
        if (!y.matcher || o[y.matcher](w)) {
            s[y.name] = w;
            const c = i[p + 1],
                E = u[p + 1];
            c && !c.rest && c.optional && E && y.chained && (h = 0), !c && !E && Object.keys(s).length === l.length && (h = 0);
            continue
        }
        if (y.optional && y.chained) {
            h++;
            continue
        }
        return
    }
    if (!h) return s
}

function ue(r) {
    return r.normalize().replace(/[[\]]/g, "\\$&").replace(/%/g, "%25").replace(/\//g, "%2[Ff]").replace(/\?/g, "%3[Ff]").replace(/#/g, "%23").replace(/[.*+?^${}()|\\]/g, "\\$&")
}

function Rn({
    nodes: r,
    server_loads: i,
    dictionary: o,
    matchers: s
}) {
    const u = new Set(i);
    return Object.entries(o).map(([p, [y, w, c]]) => {
        const {
            pattern: E,
            params: B
        } = bn(p), m = {
            id: p,
            exec: x => {
                const A = E.exec(x);
                if (A) return Un(A, B, s)
            },
            errors: [1, ...c || []].map(x => r[x]),
            layouts: [0, ...w || []].map(h),
            leaf: l(y)
        };
        return m.errors.length = m.layouts.length = Math.max(m.errors.length, m.layouts.length), m
    });

    function l(p) {
        const y = p < 0;
        return y && (p = ~p), [y, r[p]]
    }

    function h(p) {
        return p === void 0 ? p : [u.has(p), r[p]]
    }
}

function fr(r, i = JSON.parse) {
    try {
        return i(sessionStorage[r])
    } catch (o) {}
}

function qe(r, i, o = JSON.stringify) {
    const s = o(i);
    try {
        sessionStorage[r] = s
    } catch (u) {}
}
var tr, er;
const z = (er = (tr = globalThis.__sveltekit_1ljk1hu) == null ? void 0 : tr.base) != null ? er : "";
var rr, nr;
const Sn = (nr = (rr = globalThis.__sveltekit_1ljk1hu) == null ? void 0 : rr.assets) != null ? nr : z,
    kn = "1762447802697",
    hr = "sveltekit:snapshot",
    pr = "sveltekit:scroll",
    dr = "sveltekit:states",
    Tn = "sveltekit:pageurl",
    dt = "sveltekit:history",
    At = "sveltekit:navigation",
    Yt = {
        tap: 1,
        hover: 2,
        viewport: 3,
        eager: 4,
        off: -1,
        false: -1
    },
    $t = location.origin;

function xe(r) {
    if (r instanceof URL) return r;
    let i = document.baseURI;
    if (!i) {
        const o = document.getElementsByTagName("base");
        i = o.length ? o[0].href : document.URL
    }
    return new URL(r, i)
}

function _e() {
    return {
        x: pageXOffset,
        y: pageYOffset
    }
}

function pt(r, i) {
    return r.getAttribute(`data-sveltekit-${i}`)
}
const We = ot(H({}, Yt), {
    "": Yt.hover
});

function yr(r) {
    var o;
    let i = (o = r.assignedSlot) != null ? o : r.parentNode;
    return (i == null ? void 0 : i.nodeType) === 11 && (i = i.host), i
}

function gr(r, i) {
    for (; r && r !== i;) {
        if (r.nodeName.toUpperCase() === "A" && r.hasAttribute("href")) return r;
        r = yr(r)
    }
}

function de(r, i, o) {
    let s;
    try {
        s = new URL(r instanceof SVGAElement ? r.href.baseVal : r.href, document.baseURI)
    } catch (p) {}
    const u = r instanceof SVGAElement ? r.target.baseVal : r.target,
        l = !s || !!u || te(s, i, o) || (r.getAttribute("rel") || "").split(/\s+/).includes("external"),
        h = (s == null ? void 0 : s.origin) === $t && r.hasAttribute("download");
    return {
        url: s,
        external: l,
        target: u,
        download: h
    }
}

function qt(r) {
    let i = null,
        o = null,
        s = null,
        u = null,
        l = null,
        h = null,
        p = r;
    for (; p && p !== document.documentElement;) s === null && (s = pt(p, "preload-code")), u === null && (u = pt(p, "preload-data")), i === null && (i = pt(p, "keepfocus")), o === null && (o = pt(p, "noscroll")), l === null && (l = pt(p, "reload")), h === null && (h = pt(p, "replacestate")), p = yr(p);

    function y(w) {
        switch (w) {
            case "":
            case "true":
                return !0;
            case "off":
            case "false":
                return !1;
            default:
                return
        }
    }
    return {
        preload_code: We[s != null ? s : "off"],
        preload_data: We[u != null ? u : "off"],
        keepfocus: y(i),
        noscroll: y(o),
        reload: y(l),
        replace_state: y(h)
    }
}

function He(r) {
    const i = we(r);
    let o = !0;

    function s() {
        o = !0, i.update(h => h)
    }

    function u(h) {
        o = !1, i.set(h)
    }

    function l(h) {
        let p;
        return i.subscribe(y => {
            (p === void 0 || o && y !== p) && h(p = y)
        })
    }
    return {
        notify: s,
        set: u,
        subscribe: l
    }
}
const wr = {
    v: () => {}
};

function Cn() {
    const {
        set: r,
        subscribe: i
    } = we(!1), o = 3e5;
    let s;

    function u() {
        return L(this, null, function*() {
            clearTimeout(s), s = setTimeout(u, o);
            try {
                const l = yield fetch(`${Sn}/_app/version.json`, {
                    headers: {
                        pragma: "no-cache",
                        "cache-control": "no-cache"
                    }
                });
                if (!l.ok) return !1;
                const p = (yield l.json()).version !== kn;
                return p && (r(!0), wr.v(), clearTimeout(s)), p
            } catch (l) {
                return !1
            }
        })
    }
    return s = setTimeout(u, o), {
        subscribe: i,
        check: u
    }
}

function te(r, i, o) {
    return r.origin !== $t || !r.pathname.startsWith(i) ? !0 : o ? !(r.pathname === i + "/" || r.protocol === "file:" && r.pathname.replace(/\/[^/]+\.html?$/, "") === i) : !1
}

function Ke(r) {
    const i = vn(r),
        o = new ArrayBuffer(i.length),
        s = new DataView(o);
    for (let u = 0; u < o.byteLength; u++) s.setUint8(u, i.charCodeAt(u));
    return o
}
const Ln = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

function vn(r) {
    r.length % 4 === 0 && (r = r.replace(/==?$/, ""));
    let i = "",
        o = 0,
        s = 0;
    for (let u = 0; u < r.length; u++) o <<= 6, o |= Ln.indexOf(r[u]), s += 6, s === 24 && (i += String.fromCharCode((o & 16711680) >> 16), i += String.fromCharCode((o & 65280) >> 8), i += String.fromCharCode(o & 255), o = s = 0);
    return s === 12 ? (o >>= 4, i += String.fromCharCode(o)) : s === 18 && (o >>= 2, i += String.fromCharCode((o & 65280) >> 8), i += String.fromCharCode(o & 255)), i
}
const Nn = -1,
    Pn = -2,
    Dn = -3,
    On = -4,
    $n = -5,
    Mn = -6;

function jn(r, i) {
    if (typeof r == "number") return u(r, !0);
    if (!Array.isArray(r) || r.length === 0) throw new Error("Invalid input");
    const o = r,
        s = Array(o.length);

    function u(l, h = !1) {
        if (l === Nn) return;
        if (l === Dn) return NaN;
        if (l === On) return 1 / 0;
        if (l === $n) return -1 / 0;
        if (l === Mn) return -0;
        if (h) throw new Error("Invalid input");
        if (l in s) return s[l];
        const p = o[l];
        if (!p || typeof p != "object") s[l] = p;
        else if (Array.isArray(p))
            if (typeof p[0] == "string") {
                const y = p[0],
                    w = i == null ? void 0 : i[y];
                if (w) return s[l] = w(u(p[1]));
                switch (y) {
                    case "Date":
                        s[l] = new Date(p[1]);
                        break;
                    case "Set":
                        const c = new Set;
                        s[l] = c;
                        for (let m = 1; m < p.length; m += 1) c.add(u(p[m]));
                        break;
                    case "Map":
                        const E = new Map;
                        s[l] = E;
                        for (let m = 1; m < p.length; m += 2) E.set(u(p[m]), u(p[m + 1]));
                        break;
                    case "RegExp":
                        s[l] = new RegExp(p[1], p[2]);
                        break;
                    case "Object":
                        s[l] = Object(p[1]);
                        break;
                    case "BigInt":
                        s[l] = BigInt(p[1]);
                        break;
                    case "null":
                        const B = Object.create(null);
                        s[l] = B;
                        for (let m = 1; m < p.length; m += 2) B[p[m]] = u(p[m + 1]);
                        break;
                    case "Int8Array":
                    case "Uint8Array":
                    case "Uint8ClampedArray":
                    case "Int16Array":
                    case "Uint16Array":
                    case "Int32Array":
                    case "Uint32Array":
                    case "Float32Array":
                    case "Float64Array":
                    case "BigInt64Array":
                    case "BigUint64Array":
                        {
                            const m = globalThis[y],
                                x = p[1],
                                A = Ke(x),
                                I = new m(A);s[l] = I;
                            break
                        }
                    case "ArrayBuffer":
                        {
                            const m = p[1],
                                x = Ke(m);s[l] = x;
                            break
                        }
                    default:
                        throw new Error(`Unknown type ${y}`)
                }
            } else {
                const y = new Array(p.length);
                s[l] = y;
                for (let w = 0; w < p.length; w += 1) {
                    const c = p[w];
                    c !== Pn && (y[w] = u(c))
                }
            }
        else {
            const y = {};
            s[l] = y;
            for (const w in p) {
                const c = p[w];
                y[w] = u(c)
            }
        }
        return s[l]
    }
    return u(0)
}
const mr = new Set(["load", "prerender", "csr", "ssr", "trailingSlash", "config"]);
[...mr];
const Gn = new Set([...mr]);
[...Gn];

function Vn(r) {
    return r.filter(i => i != null)
}
class ee {
    constructor(i, o) {
        this.status = i, typeof o == "string" ? this.body = {
            message: o
        } : o ? this.body = o : this.body = {
            message: `Error: ${i}`
        }
    }
    toString() {
        return JSON.stringify(this.body)
    }
}
class Er {
    constructor(i, o) {
        this.status = i, this.location = o
    }
}
class Be extends Error {
    constructor(i, o, s) {
        super(s), this.status = i, this.text = o
    }
}
const Yn = "x-sveltekit-invalidated",
    qn = "x-sveltekit-trailing-slash";

function Wt(r) {
    return r instanceof ee || r instanceof Be ? r.status : 500
}

function Wn(r) {
    return r instanceof Be ? r.text : "Internal Error"
}
let q, Ft, fe;
const Hn = pe.toString().includes("$$") || /function \w+\(\) \{\}/.test(pe.toString());
var St, kt, Tt, Ct, Lt, vt, Nt, Pt, ir, Dt, or, Ot, ar;
Hn ? (q = {
    data: {},
    form: null,
    error: null,
    params: {},
    route: {
        id: null
    },
    state: {},
    status: -1,
    url: new URL("https://example.com")
}, Ft = {
    current: null
}, fe = {
    current: !1
}) : (q = new(ir = class {
    constructor() {
        Z(this, St, et({}));
        Z(this, kt, et(null));
        Z(this, Tt, et(null));
        Z(this, Ct, et({}));
        Z(this, Lt, et({
            id: null
        }));
        Z(this, vt, et({}));
        Z(this, Nt, et(-1));
        Z(this, Pt, et(new URL("https://example.com")))
    }
    get data() {
        return rt($(this, St))
    }
    set data(i) {
        nt($(this, St), i)
    }
    get form() {
        return rt($(this, kt))
    }
    set form(i) {
        nt($(this, kt), i)
    }
    get error() {
        return rt($(this, Tt))
    }
    set error(i) {
        nt($(this, Tt), i)
    }
    get params() {
        return rt($(this, Ct))
    }
    set params(i) {
        nt($(this, Ct), i)
    }
    get route() {
        return rt($(this, Lt))
    }
    set route(i) {
        nt($(this, Lt), i)
    }
    get state() {
        return rt($(this, vt))
    }
    set state(i) {
        nt($(this, vt), i)
    }
    get status() {
        return rt($(this, Nt))
    }
    set status(i) {
        nt($(this, Nt), i)
    }
    get url() {
        return rt($(this, Pt))
    }
    set url(i) {
        nt($(this, Pt), i)
    }
}, St = new WeakMap, kt = new WeakMap, Tt = new WeakMap, Ct = new WeakMap, Lt = new WeakMap, vt = new WeakMap, Nt = new WeakMap, Pt = new WeakMap, ir), Ft = new(or = class {
    constructor() {
        Z(this, Dt, et(null))
    }
    get current() {
        return rt($(this, Dt))
    }
    set current(i) {
        nt($(this, Dt), i)
    }
}, Dt = new WeakMap, or), fe = new(ar = class {
    constructor() {
        Z(this, Ot, et(!1))
    }
    get current() {
        return rt($(this, Ot))
    }
    set current(i) {
        nt($(this, Ot), i)
    }
}, Ot = new WeakMap, ar), wr.v = () => fe.current = !0);

function Kn(r) {
    Object.assign(q, r)
}
const Jn = new Set(["icon", "shortcut icon", "apple-touch-icon"]);
var sr;
const lt = (sr = fr(pr)) != null ? sr : {};
var cr;
const Ut = (cr = fr(hr)) != null ? cr : {},
    ct = {
        url: He({}),
        page: He({}),
        navigating: we(null),
        updated: Cn()
    };

function Ie(r) {
    lt[r] = _e()
}

function Xn(r, i) {
    let o = r + 1;
    for (; lt[o];) delete lt[o], o += 1;
    for (o = i + 1; Ut[o];) delete Ut[o], o += 1
}

function wt(r) {
    return location.href = r.href, new Promise(() => {})
}

function xr() {
    return L(this, null, function*() {
        if ("serviceWorker" in navigator) {
            const r = yield navigator.serviceWorker.getRegistration(z || "/");
            r && (yield r.update())
        }
    })
}

function Je() {}
let re, ye, Ht, at, ge, M;
const _r = [],
    Kt = [];
let J = null;
const be = new Set,
    zn = new Set,
    yt = new Set;
let T = {
        branch: [],
        error: null,
        url: null
    },
    Ae = !1,
    Jt = !1,
    Xe = !0,
    Rt = !1,
    _t = !1,
    Br = !1,
    Fe = !1,
    Ir, V, X, Xt;
const bt = new Set;

function di(r, i, o) {
    return L(this, null, function*() {
        var u, l, h, p;
        document.URL !== location.href && (location.href = location.href), M = r, yield(l = (u = r.hooks).init) == null ? void 0 : l.call(u), re = Rn(r), at = document.documentElement, ge = i, ye = r.nodes[0], Ht = r.nodes[1], ye(), Ht(), V = (h = history.state) == null ? void 0 : h[dt], X = (p = history.state) == null ? void 0 : p[At], V || (V = X = Date.now(), history.replaceState(ot(H({}, history.state), {
            [dt]: V,
            [At]: X
        }), ""));
        const s = lt[V];
        s && (history.scrollRestoration = "manual", scrollTo(s.x, s.y)), o ? yield ii(ge, o): ri(location.href, {
            replaceState: !0
        }), ni()
    })
}

function Zn() {
    _r.length = 0, Fe = !1
}

function br(r) {
    Kt.some(i => i == null ? void 0 : i.snapshot) && (Ut[r] = Kt.map(i => {
        var o;
        return (o = i == null ? void 0 : i.snapshot) == null ? void 0 : o.capture()
    }))
}

function Ar(r) {
    var i;
    (i = Ut[r]) == null || i.forEach((o, s) => {
        var u, l;
        (l = (u = Kt[s]) == null ? void 0 : u.snapshot) == null || l.restore(o)
    })
}

function ze() {
    Ie(V), qe(pr, lt), br(X), qe(hr, Ut)
}

function Fr(r, i, o, s) {
    return L(this, null, function*() {
        return Bt({
            type: "goto",
            url: xe(r),
            keepfocus: i.keepFocus,
            noscroll: i.noScroll,
            replace_state: i.replaceState,
            state: i.state,
            redirect_count: o,
            nav_token: s,
            accept: () => {
                i.invalidateAll && (Fe = !0)
            }
        })
    })
}

function Ur(r) {
    return L(this, null, function*() {
        if (r.id !== (J == null ? void 0 : J.id)) {
            const i = {};
            bt.add(i), J = {
                id: r.id,
                token: i,
                promise: Sr(ot(H({}, r), {
                    preload: i
                })).then(o => (bt.delete(i), o.type === "loaded" && o.state.error && (J = null), o))
            }
        }
        return J.promise
    })
}

function he(r) {
    return L(this, null, function*() {
        const i = re.find(o => o.exec(kr(r)));
        i && (yield Promise.all([...i.layouts, i.leaf].map(o => o == null ? void 0 : o[1]())))
    })
}

function Rr(r, i, o) {
    var l, h;
    T = r.state;
    const s = document.querySelector("style[data-sveltekit]");
    s && s.remove(), Object.assign(q, r.props.page), Ir = new M.root({
        target: i,
        props: ot(H({}, r.props), {
            stores: ct,
            components: Kt
        }),
        hydrate: o,
        sync: !1
    }), Ar(X);
    const u = {
        from: null,
        to: {
            params: T.params,
            route: {
                id: (h = (l = T.route) == null ? void 0 : l.id) != null ? h : null
            },
            url: new URL(location.href)
        },
        willUnload: !1,
        type: "enter",
        complete: Promise.resolve()
    };
    yt.forEach(p => p(u)), Jt = !0
}

function zt({
    url: r,
    params: i,
    branch: o,
    status: s,
    error: u,
    route: l,
    form: h
}) {
    var m;
    let p = "never";
    if (z && (r.pathname === z || r.pathname === z + "/")) p = "always";
    else
        for (const x of o)(x == null ? void 0 : x.slash) !== void 0 && (p = x.slash);
    r.pathname = rn(r.pathname, p), r.search = r.search;
    const y = {
        type: "loaded",
        state: {
            url: r,
            params: i,
            branch: o,
            error: u,
            route: l
        },
        props: {
            constructors: Vn(o).map(x => x.node.component),
            page: Se(q)
        }
    };
    h !== void 0 && (y.props.form = h);
    let w = {},
        c = !q,
        E = 0;
    for (let x = 0; x < Math.max(o.length, T.branch.length); x += 1) {
        const A = o[x],
            I = T.branch[x];
        (A == null ? void 0 : A.data) !== (I == null ? void 0 : I.data) && (c = !0), A && (w = H(H({}, w), A.data), c && (y.props[`data_${E}`] = w), E += 1)
    }
    return (!T.url || r.href !== T.url.href || T.error !== u || h !== void 0 && h !== q.form || c) && (y.props.page = {
        error: u,
        params: i,
        route: {
            id: (m = l == null ? void 0 : l.id) != null ? m : null
        },
        state: {},
        status: s,
        url: new URL(r),
        form: h != null ? h : null,
        data: c ? w : q.data
    }), y
}

function Ue(h) {
    return L(this, arguments, function*({
        loader: r,
        parent: i,
        url: o,
        params: s,
        route: u,
        server_data_node: l
    }) {
        var E, B, m, x, A, I, v;
        let p = null,
            y = !0;
        const w = {
                dependencies: new Set,
                params: new Set,
                parent: !1,
                route: !1,
                url: !1,
                search_params: new Set
            },
            c = yield r();
        if ((E = c.universal) != null && E.load) {
            let G, N = function(...b) {
                for (const _ of b) {
                    const {
                        href: U
                    } = new URL(_, o);
                    w.dependencies.add(U)
                }
            };
            const Y = {
                route: new Proxy(u, {
                    get: (b, _) => (y && (w.route = !0), b[_])
                }),
                params: new Proxy(s, {
                    get: (b, _) => (y && w.params.add(_), b[_])
                }),
                data: (B = l == null ? void 0 : l.data) != null ? B : null,
                url: an(o, () => {
                    y && (w.url = !0)
                }, b => {
                    y && w.search_params.add(b)
                }, M.hash),
                fetch(b, _) {
                    return L(this, null, function*() {
                        let U;
                        b instanceof Request ? (U = b.url, _ = H({
                            body: b.method === "GET" || b.method === "HEAD" ? void 0 : yield b.blob(), cache: b.cache, credentials: b.credentials, headers: [...b.headers].length ? b.headers : void 0, integrity: b.integrity, keepalive: b.keepalive, method: b.method, mode: b.mode, redirect: b.redirect, referrer: b.referrer, referrerPolicy: b.referrerPolicy, signal: b.signal
                        }, _)) : U = b;
                        const R = new URL(U, o);
                        return y && N(R.href), R.origin === o.origin && (U = R.href.slice(o.origin.length)), Jt ? Bn(U, R.href, _) : _n(U, _)
                    })
                },
                setHeaders: () => {},
                depends: N,
                parent() {
                    return y && (w.parent = !0), i()
                },
                untrack(b) {
                    y = !1;
                    try {
                        return b()
                    } finally {
                        y = !0
                    }
                }
            };
            p = (m = yield c.universal.load.call(null, Y)) != null ? m : null
        }
        return {
            node: c,
            loader: r,
            server: l,
            universal: (x = c.universal) != null && x.load ? {
                type: "data",
                data: p,
                uses: w
            } : null,
            data: (A = p != null ? p : l == null ? void 0 : l.data) != null ? A : null,
            slash: (v = (I = c.universal) == null ? void 0 : I.trailingSlash) != null ? v : l == null ? void 0 : l.slash
        }
    })
}

function Ze(r, i, o, s, u, l) {
    if (Fe) return !0;
    if (!u) return !1;
    if (u.parent && r || u.route && i || u.url && o) return !0;
    for (const h of u.search_params)
        if (s.has(h)) return !0;
    for (const h of u.params)
        if (l[h] !== T.params[h]) return !0;
    for (const h of u.dependencies)
        if (_r.some(p => p(new URL(h)))) return !0;
    return !1
}

function Re(r, i) {
    return (r == null ? void 0 : r.type) === "data" ? r : (r == null ? void 0 : r.type) === "skip" && i != null ? i : null
}

function Qn(r, i) {
    if (!r) return new Set(i.searchParams.keys());
    const o = new Set([...r.searchParams.keys(), ...i.searchParams.keys()]);
    for (const s of o) {
        const u = r.searchParams.getAll(s),
            l = i.searchParams.getAll(s);
        u.every(h => l.includes(h)) && l.every(h => u.includes(h)) && o.delete(s)
    }
    return o
}

function Qe({
    error: r,
    url: i,
    route: o,
    params: s
}) {
    return {
        type: "loaded",
        state: {
            error: r,
            url: i,
            route: o,
            params: s,
            branch: []
        },
        props: {
            page: Se(q),
            constructors: []
        }
    }
}

function Sr(h) {
    return L(this, arguments, function*({
        id: r,
        invalidating: i,
        url: o,
        params: s,
        route: u,
        preload: l
    }) {
        var b;
        if ((J == null ? void 0 : J.id) === r) return bt.delete(J.token), J.promise;
        const {
            errors: p,
            layouts: y,
            leaf: w
        } = u, c = [...y, w];
        p.forEach(_ => _ == null ? void 0 : _().catch(() => {})), c.forEach(_ => _ == null ? void 0 : _[1]().catch(() => {}));
        let E = null;
        const B = T.url ? r !== Zt(T.url) : !1,
            m = T.route ? u.id !== T.route.id : !1,
            x = Qn(T.url, o);
        let A = !1;
        const I = c.map((_, U) => {
            var Q;
            const R = T.branch[U],
                P = !!(_ != null && _[0]) && ((R == null ? void 0 : R.loader) !== _[1] || Ze(A, m, B, x, (Q = R.server) == null ? void 0 : Q.uses, s));
            return P && (A = !0), P
        });
        if (I.some(Boolean)) {
            try {
                E = yield vr(o, I)
            } catch (_) {
                const U = yield gt(_, {
                    url: o,
                    params: s,
                    route: {
                        id: r
                    }
                });
                return bt.has(l) ? Qe({
                    error: U,
                    url: o,
                    params: s,
                    route: u
                }) : ne({
                    status: Wt(_),
                    error: U,
                    url: o,
                    route: u
                })
            }
            if (E.type === "redirect") return E
        }
        const v = E == null ? void 0 : E.nodes;
        let N = !1;
        const Y = c.map((_, U) => L(this, null, function*() {
            var mt;
            if (!_) return;
            const R = T.branch[U],
                P = v == null ? void 0 : v[U];
            if ((!P || P.type === "skip") && _[1] === (R == null ? void 0 : R.loader) && !Ze(N, m, B, x, (mt = R.universal) == null ? void 0 : mt.uses, s)) return R;
            if (N = !0, (P == null ? void 0 : P.type) === "error") throw P;
            return Ue({
                loader: _[1],
                url: o,
                params: s,
                route: u,
                parent: () => L(this, null, function*() {
                    var jt;
                    const Mt = {};
                    for (let Et = 0; Et < U; Et += 1) Object.assign(Mt, (jt = yield Y[Et]) == null ? void 0 : jt.data);
                    return Mt
                }),
                server_data_node: Re(P === void 0 && _[0] ? {
                    type: "skip"
                } : P != null ? P : null, _[0] ? R == null ? void 0 : R.server : void 0)
            })
        }));
        for (const _ of Y) _.catch(() => {});
        const G = [];
        for (let _ = 0; _ < c.length; _ += 1)
            if (c[_]) try {
                G.push(yield Y[_])
            } catch (U) {
                if (U instanceof Er) return {
                    type: "redirect",
                    location: U.location
                };
                if (bt.has(l)) return Qe({
                    error: yield gt(U, {
                        params: s,
                        url: o,
                        route: {
                            id: u.id
                        }
                    }), url: o, params: s, route: u
                });
                let R = Wt(U),
                    P;
                if (v != null && v.includes(U)) R = (b = U.status) != null ? b : R, P = U.error;
                else if (U instanceof ee) P = U.body;
                else {
                    if (yield ct.updated.check()) return yield xr(), yield wt(o);
                    P = yield gt(U, {
                        params: s,
                        url: o,
                        route: {
                            id: u.id
                        }
                    })
                }
                const Q = yield ti(_, G, p);
                return Q ? zt({
                    url: o,
                    params: s,
                    branch: G.slice(0, Q.idx).concat(Q.node),
                    status: R,
                    error: P,
                    route: u
                }) : yield Cr(o, {
                    id: u.id
                }, P, R)
            } else G.push(void 0);
        return zt({
            url: o,
            params: s,
            branch: G,
            status: 200,
            error: null,
            route: u,
            form: i ? void 0 : null
        })
    })
}

function ti(r, i, o) {
    return L(this, null, function*() {
        for (; r--;)
            if (o[r]) {
                let s = r;
                for (; !i[s];) s -= 1;
                try {
                    return {
                        idx: s + 1,
                        node: {
                            node: yield o[r](), loader: o[r], data: {}, server: null, universal: null
                        }
                    }
                } catch (u) {
                    continue
                }
            }
    })
}

function ne(u) {
    return L(this, arguments, function*({
        status: r,
        error: i,
        url: o,
        route: s
    }) {
        var c;
        const l = {};
        let h = null;
        if (M.server_loads[0] === 0) try {
            const E = yield vr(o, [!0]);
            if (E.type !== "data" || E.nodes[0] && E.nodes[0].type !== "data") throw 0;
            h = (c = E.nodes[0]) != null ? c : null
        } catch (E) {
            (o.origin !== $t || o.pathname !== location.pathname || Ae) && (yield wt(o))
        }
        const y = yield Ue({
            loader: ye,
            url: o,
            params: l,
            route: s,
            parent: () => Promise.resolve({}),
            server_data_node: Re(h)
        }), w = {
            node: yield Ht(), loader: Ht, universal: null, server: null, data: null
        };
        return zt({
            url: o,
            params: l,
            branch: [y, w],
            status: r,
            error: i,
            route: null
        })
    })
}

function ie(r, i) {
    var u;
    if (!r || te(r, z, M.hash)) return;
    let o;
    try {
        if (o = (u = M.hooks.reroute({
                url: new URL(r)
            })) != null ? u : r, typeof o == "string") {
            const l = new URL(r);
            M.hash ? l.hash = o : l.pathname = o, o = l
        }
    } catch (l) {
        return
    }
    const s = kr(o);
    for (const l of re) {
        const h = l.exec(s);
        if (h) return {
            id: Zt(r),
            invalidating: i,
            route: l,
            params: on(h),
            url: r
        }
    }
}

function kr(r) {
    return nn(M.hash ? r.hash.replace(/^#/, "").replace(/[?#].+/, "") : r.pathname.slice(z.length)) || "/"
}

function Zt(r) {
    return (M.hash ? r.hash.replace(/^#/, "") : r.pathname) + r.search
}

function Tr({
    url: r,
    type: i,
    intent: o,
    delta: s
}) {
    let u = !1;
    const l = Pr(T, o, r, i);
    s !== void 0 && (l.navigation.delta = s);
    const h = ot(H({}, l.navigation), {
        cancel: () => {
            u = !0, l.reject(new Error("navigation cancelled"))
        }
    });
    return Rt || be.forEach(p => p(h)), u ? null : l
}

function Bt(E) {
    return L(this, arguments, function*({
        type: r,
        url: i,
        popped: o,
        keepfocus: s,
        noscroll: u,
        replace_state: l,
        state: h = {},
        redirect_count: p = 0,
        nav_token: y = {},
        accept: w = Je,
        block: c = Je
    }) {
        var G;
        const B = ie(i, !1),
            m = Tr({
                url: i,
                type: r,
                delta: o == null ? void 0 : o.delta,
                intent: B
            });
        if (!m) {
            c();
            return
        }
        const x = V,
            A = X;
        w(), Rt = !0, Jt && ct.navigating.set(Ft.current = m.navigation), Xt = y;
        let I = B && (yield Sr(B));
        if (!I) {
            if (te(i, z, M.hash)) return yield wt(i);
            I = yield Cr(i, {
                id: null
            }, yield gt(new Be(404, "Not Found", `Not found: ${i.pathname}`), {
                url: i,
                params: {},
                route: {
                    id: null
                }
            }), 404)
        }
        if (i = (B == null ? void 0 : B.url) || i, Xt !== y) return m.reject(new Error("navigation aborted")), !1;
        if (I.type === "redirect")
            if (p >= 20) I = yield ne({
                status: 500,
                error: yield gt(new Error("Redirect loop"), {
                    url: i,
                    params: {},
                    route: {
                        id: null
                    }
                }), url: i, route: {
                    id: null
                }
            });
            else return Fr(new URL(I.location, i).href, {}, p + 1, y), !1;
        else I.props.page.status >= 400 && (yield ct.updated.check()) && (yield xr(), yield wt(i));
        if (Zn(), Ie(x), br(A), I.props.page.url.pathname !== i.pathname && (i.pathname = I.props.page.url.pathname), h = o ? o.state : h, !o) {
            const b = l ? 0 : 1,
                _ = {
                    [dt]: V += b,
                    [At]: X += b,
                    [dr]: h
                };
            (l ? history.replaceState : history.pushState).call(history, _, "", i), l || Xn(V, X)
        }
        if (J = null, I.props.page.state = h, Jt) {
            T = I.state, I.props.page && (I.props.page.url = i);
            const b = (yield Promise.all(Array.from(zn, _ => _(m.navigation)))).filter(_ => typeof _ == "function");
            if (b.length > 0) {
                let _ = function() {
                    b.forEach(U => {
                        yt.delete(U)
                    })
                };
                b.push(_), b.forEach(U => {
                    yt.add(U)
                })
            }
            Ir.$set(I.props), Kn(I.props.page), Br = !0
        } else Rr(I, ge, !1);
        const {
            activeElement: v
        } = document;
        yield en();
        const N = o ? o.scroll : u ? _e() : null;
        if (Xe) {
            const b = i.hash && document.getElementById(decodeURIComponent(M.hash ? (G = i.hash.split("#")[2]) != null ? G : "" : i.hash.slice(1)));
            N ? scrollTo(N.x, N.y) : b ? b.scrollIntoView() : scrollTo(0, 0)
        }
        const Y = document.activeElement !== v && document.activeElement !== document.body;
        !s && !Y && oi(), Xe = !0, I.props.page && Object.assign(q, I.props.page), Rt = !1, r === "popstate" && Ar(X), m.fulfil(void 0), yt.forEach(b => b(m.navigation)), ct.navigating.set(Ft.current = null)
    })
}

function Cr(r, i, o, s) {
    return L(this, null, function*() {
        return r.origin === $t && r.pathname === location.pathname && !Ae ? yield ne({
            status: s,
            error: o,
            url: r,
            route: i
        }): yield wt(r)
    })
}

function ei() {
    let r;
    at.addEventListener("mousemove", l => {
        const h = l.target;
        clearTimeout(r), r = setTimeout(() => {
            s(h, 2)
        }, 20)
    });

    function i(l) {
        l.defaultPrevented || s(l.composedPath()[0], 1)
    }
    at.addEventListener("mousedown", i), at.addEventListener("touchstart", i, {
        passive: !0
    });
    const o = new IntersectionObserver(l => {
        for (const h of l) h.isIntersecting && (he(new URL(h.target.href)), o.unobserve(h.target))
    }, {
        threshold: 0
    });

    function s(l, h) {
        const p = gr(l, at);
        if (!p) return;
        const {
            url: y,
            external: w,
            download: c
        } = de(p, z, M.hash);
        if (w || c) return;
        const E = qt(p),
            B = y && Zt(T.url) === Zt(y);
        if (!E.reload && !B)
            if (h <= E.preload_data) {
                const m = ie(y, !1);
                m && Ur(m)
            } else h <= E.preload_code && he(y)
    }

    function u() {
        o.disconnect();
        for (const l of at.querySelectorAll("a")) {
            const {
                url: h,
                external: p,
                download: y
            } = de(l, z, M.hash);
            if (p || y) continue;
            const w = qt(l);
            w.reload || (w.preload_code === Yt.viewport && o.observe(l), w.preload_code === Yt.eager && he(h))
        }
    }
    yt.add(u), u()
}

function gt(r, i) {
    var u;
    if (r instanceof ee) return r.body;
    const o = Wt(r),
        s = Wn(r);
    return (u = M.hooks.handleError({
        error: r,
        event: i,
        status: o,
        message: s
    })) != null ? u : {
        message: s
    }
}

function Lr(r, i) {
    pe(() => (r.add(i), () => {
        r.delete(i)
    }))
}

function yi(r) {
    Lr(yt, r)
}

function gi(r) {
    Lr(be, r)
}

function ri(r, i = {}) {
    return r = new URL(xe(r)), r.origin !== $t ? Promise.reject(new Error("goto: invalid URL")) : Fr(r, i, 0)
}

function wi(r) {
    return L(this, null, function*() {
        var h;
        const i = xe(r),
            o = ie(i, !1);
        if (!o) throw new Error(`Attempted to preload a URL that does not belong to this app: ${i}`);
        const s = yield Ur(o);
        if (s.type === "redirect") return {
            type: s.type,
            location: s.location
        };
        const {
            status: u,
            data: l
        } = (h = s.props.page) != null ? h : q;
        return {
            type: s.type,
            status: u,
            data: l
        }
    })
}

function ni() {
    var i;
    history.scrollRestoration = "manual", addEventListener("beforeunload", o => {
        let s = !1;
        if (ze(), !Rt) {
            const u = Pr(T, void 0, null, "leave"),
                l = ot(H({}, u.navigation), {
                    cancel: () => {
                        s = !0, u.reject(new Error("navigation cancelled"))
                    }
                });
            be.forEach(h => h(l))
        }
        s ? (o.preventDefault(), o.returnValue = "") : history.scrollRestoration = "auto"
    }), addEventListener("visibilitychange", () => {
        document.visibilityState === "hidden" && ze()
    }), (i = navigator.connection) != null && i.saveData || ei(), at.addEventListener("click", o => L(this, null, function*() {
        var m;
        if (o.button || o.which !== 1 || o.metaKey || o.ctrlKey || o.shiftKey || o.altKey || o.defaultPrevented) return;
        const s = gr(o.composedPath()[0], at);
        if (!s) return;
        const {
            url: u,
            external: l,
            target: h,
            download: p
        } = de(s, z, M.hash);
        if (!u) return;
        if (h === "_parent" || h === "_top") {
            if (window.parent !== window) return
        } else if (h && h !== "_self") return;
        const y = qt(s);
        if (!(s instanceof SVGAElement) && u.protocol !== location.protocol && !(u.protocol === "https:" || u.protocol === "http:") || p) return;
        const [c, E] = (M.hash ? u.hash.replace(/^#/, "") : u.href).split("#"), B = c === ce(location);
        if (l || y.reload && (!B || !E)) {
            Tr({
                url: u,
                type: "link"
            }) ? Rt = !0 : o.preventDefault();
            return
        }
        if (E !== void 0 && B) {
            const [, x] = T.url.href.split("#");
            if (x === E) {
                if (o.preventDefault(), E === "" || E === "top" && s.ownerDocument.getElementById("top") === null) window.scrollTo({
                    top: 0
                });
                else {
                    const A = s.ownerDocument.getElementById(decodeURIComponent(E));
                    A && (A.scrollIntoView(), A.focus())
                }
                return
            }
            if (_t = !0, Ie(V), r(u), !y.replace_state) return;
            _t = !1
        }
        o.preventDefault(), yield new Promise(x => {
            requestAnimationFrame(() => {
                setTimeout(x, 0)
            }), setTimeout(x, 100)
        }), Bt({
            type: "link",
            url: u,
            keepfocus: y.keepfocus,
            noscroll: y.noscroll,
            replace_state: (m = y.replace_state) != null ? m : u.href === location.href
        })
    })), at.addEventListener("submit", o => {
        var B, m;
        if (o.defaultPrevented) return;
        const s = HTMLFormElement.prototype.cloneNode.call(o.target),
            u = o.submitter;
        if (((u == null ? void 0 : u.formTarget) || s.target) === "_blank" || ((u == null ? void 0 : u.formMethod) || s.method) !== "get") return;
        const p = new URL((u == null ? void 0 : u.hasAttribute("formaction")) && (u == null ? void 0 : u.formAction) || s.action);
        if (te(p, z, !1)) return;
        const y = o.target,
            w = qt(y);
        if (w.reload) return;
        o.preventDefault(), o.stopPropagation();
        const c = new FormData(y),
            E = u == null ? void 0 : u.getAttribute("name");
        E && c.append(E, (B = u == null ? void 0 : u.getAttribute("value")) != null ? B : ""), p.search = new URLSearchParams(c).toString(), Bt({
            type: "form",
            url: p,
            keepfocus: w.keepfocus,
            noscroll: w.noscroll,
            replace_state: (m = w.replace_state) != null ? m : p.href === location.href
        })
    }), addEventListener("popstate", o => L(this, null, function*() {
        var s, u, l;
        if ((s = o.state) != null && s[dt]) {
            const h = o.state[dt];
            if (Xt = {}, h === V) return;
            const p = lt[h],
                y = (u = o.state[dr]) != null ? u : {},
                w = new URL((l = o.state[Tn]) != null ? l : location.href),
                c = o.state[At],
                E = ce(location) === ce(T.url);
            if (c === X && (Br || E)) {
                y !== q.state && (q.state = y), r(w), lt[V] = _e(), p && scrollTo(p.x, p.y), V = h;
                return
            }
            const m = h - V;
            yield Bt({
                type: "popstate",
                url: w,
                popped: {
                    state: y,
                    scroll: p,
                    delta: m
                },
                accept: () => {
                    V = h, X = c
                },
                block: () => {
                    history.go(-m)
                },
                nav_token: Xt
            })
        } else if (!_t) {
            const h = new URL(location.href);
            r(h)
        }
    })), addEventListener("hashchange", () => {
        _t ? (_t = !1, history.replaceState(ot(H({}, history.state), {
            [dt]: ++V,
            [At]: X
        }), "", location.href)) : M.hash && T.url.hash === location.hash && Bt({
            type: "goto",
            url: T.url
        })
    });
    for (const o of document.querySelectorAll("link")) Jn.has(o.rel) && (o.href = o.href);
    addEventListener("pageshow", o => {
        o.persisted && ct.navigating.set(Ft.current = null)
    });

    function r(o) {
        T.url = q.url = o, ct.page.set(Se(q)), ct.page.notify()
    }
}

function ii(y, w) {
    return L(this, arguments, function*(r, {
        status: i = 200,
        error: o,
        node_ids: s,
        params: u,
        route: l,
        data: h,
        form: p
    }) {
        Ae = !0;
        const c = new URL(location.href);
        ({
            params: u = {},
            route: l = {
                id: null
            }
        } = ie(c, !1) || {});
        let E, B = !0;
        try {
            const m = s.map((I, v) => L(this, null, function*() {
                    const N = h[v];
                    return N != null && N.uses && (N.uses = Nr(N.uses)), Ue({
                        loader: M.nodes[I],
                        url: c,
                        params: u,
                        route: l,
                        parent: () => L(this, null, function*() {
                            const Y = {};
                            for (let G = 0; G < v; G += 1) Object.assign(Y, (yield m[G]).data);
                            return Y
                        }),
                        server_data_node: Re(N)
                    })
                })),
                x = yield Promise.all(m), A = re.find(({
                    id: I
                }) => I === l.id);
            if (A) {
                const I = A.layouts;
                for (let v = 0; v < I.length; v++) I[v] || x.splice(v, 0, void 0)
            }
            E = zt({
                url: c,
                params: u,
                branch: x,
                status: i,
                error: o,
                form: p,
                route: A != null ? A : null
            })
        } catch (m) {
            if (m instanceof Er) {
                yield wt(new URL(m.location, location.href));
                return
            }
            E = yield ne({
                status: Wt(m),
                error: yield gt(m, {
                    url: c,
                    params: u,
                    route: l
                }), url: c, route: l
            }), r.textContent = "", B = !1
        }
        E.props.page && (E.props.page.state = {}), Rr(E, r, B)
    })
}

function vr(r, i) {
    return L(this, null, function*() {
        var u;
        const o = new URL(r);
        o.pathname = ln(r.pathname), r.pathname.endsWith("/") && o.searchParams.append(qn, "1"), o.searchParams.append(Yn, i.map(l => l ? "1" : "0").join(""));
        const s = yield ur(o.href);
        if (!s.ok) {
            let l;
            throw (u = s.headers.get("content-type")) != null && u.includes("application/json") ? l = yield s.json(): s.status === 404 ? l = "Not Found" : s.status === 500 && (l = "Internal Error"), new ee(s.status, l)
        }
        return new Promise(l => L(this, null, function*() {
            var E;
            const h = new Map,
                p = s.body.getReader(),
                y = new TextDecoder;

            function w(B) {
                return jn(B, ot(H({}, M.decoders), {
                    Promise: m => new Promise((x, A) => {
                        h.set(m, {
                            fulfil: x,
                            reject: A
                        })
                    })
                }))
            }
            let c = "";
            for (;;) {
                const {
                    done: B,
                    value: m
                } = yield p.read();
                if (B && !c) break;
                for (c += !m && c ? `
` : y.decode(m, {
                        stream: !0
                    });;) {
                    const x = c.indexOf(`
`);
                    if (x === -1) break;
                    const A = JSON.parse(c.slice(0, x));
                    if (c = c.slice(x + 1), A.type === "redirect") return l(A);
                    if (A.type === "data")(E = A.nodes) == null || E.forEach(I => {
                        (I == null ? void 0 : I.type) === "data" && (I.uses = Nr(I.uses), I.data = w(I.data))
                    }), l(A);
                    else if (A.type === "chunk") {
                        const {
                            id: I,
                            data: v,
                            error: N
                        } = A, Y = h.get(I);
                        h.delete(I), N ? Y.reject(w(N)) : Y.fulfil(w(v))
                    }
                }
            }
        }))
    })
}

function Nr(r) {
    var i, o, s;
    return {
        dependencies: new Set((i = r == null ? void 0 : r.dependencies) != null ? i : []),
        params: new Set((o = r == null ? void 0 : r.params) != null ? o : []),
        parent: !!(r != null && r.parent),
        route: !!(r != null && r.route),
        url: !!(r != null && r.url),
        search_params: new Set((s = r == null ? void 0 : r.search_params) != null ? s : [])
    }
}

function oi() {
    const r = document.querySelector("[autofocus]");
    if (r) r.focus();
    else {
        const i = document.body,
            o = i.getAttribute("tabindex");
        i.tabIndex = -1, i.focus({
            preventScroll: !0,
            focusVisible: !1
        }), o !== null ? i.setAttribute("tabindex", o) : i.removeAttribute("tabindex");
        const s = getSelection();
        if (s && s.type !== "None") {
            const u = [];
            for (let l = 0; l < s.rangeCount; l += 1) u.push(s.getRangeAt(l));
            setTimeout(() => {
                if (s.rangeCount === u.length) {
                    for (let l = 0; l < s.rangeCount; l += 1) {
                        const h = u[l],
                            p = s.getRangeAt(l);
                        if (h.commonAncestorContainer !== p.commonAncestorContainer || h.startContainer !== p.startContainer || h.endContainer !== p.endContainer || h.startOffset !== p.startOffset || h.endOffset !== p.endOffset) return
                    }
                    s.removeAllRanges()
                }
            })
        }
    }
}

function Pr(r, i, o, s) {
    var y, w, c, E, B;
    let u, l;
    const h = new Promise((m, x) => {
        u = m, l = x
    });
    return h.catch(() => {}), {
        navigation: {
            from: {
                params: r.params,
                route: {
                    id: (w = (y = r.route) == null ? void 0 : y.id) != null ? w : null
                },
                url: r.url
            },
            to: o && {
                params: (c = i == null ? void 0 : i.params) != null ? c : null,
                route: {
                    id: (B = (E = i == null ? void 0 : i.route) == null ? void 0 : E.id) != null ? B : null
                },
                url: o
            },
            willUnload: !i,
            type: s,
            complete: h
        },
        fulfil: u,
        reject: l
    }
}

function Se(r) {
    return {
        data: r.data,
        error: r.error,
        form: r.form,
        params: r.params,
        route: r.route,
        state: r.state,
        status: r.status,
        url: r.url
    }
}
export {
    yi as a, gi as b, q as c, di as d, ri as g, wi as p, ct as s
};