var Kn = Object.defineProperty,
    Xn = Object.defineProperties;
var er = Object.getOwnPropertyDescriptors;
var Oe = Object.getOwnPropertySymbols;
var ht = Object.prototype.hasOwnProperty,
    mt = Object.prototype.propertyIsEnumerable;
var yt = Math.pow,
    dt = (n, e, t) => e in n ? Kn(n, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : n[e] = t,
    y = (n, e) => {
        for (var t in e || (e = {})) ht.call(e, t) && dt(n, t, e[t]);
        if (Oe)
            for (var t of Oe(e)) mt.call(e, t) && dt(n, t, e[t]);
        return n
    },
    x = (n, e) => Xn(n, er(e));
var Re = (n, e) => {
    var t = {};
    for (var r in n) ht.call(n, r) && e.indexOf(r) < 0 && (t[r] = n[r]);
    if (n != null && Oe)
        for (var r of Oe(n)) e.indexOf(r) < 0 && mt.call(n, r) && (t[r] = n[r]);
    return t
};
import {
    c as tr,
    a as gt,
    t as nr
} from "./disclose-version.Cr9xuhkA.js";
import {
    p as rr,
    f as sr,
    b as ir,
    h as ar,
    r as or,
    t as ur
} from "./runtime.B7th0A2U.js";
import {
    p as fe,
    i as lr
} from "./props.C7v_At4K.js";
import {
    a as cr
} from "./attributes.CecWNX5Z.js";
import {
    R as fr
} from "./RichText.8L8tXjWo.js";
class J extends Error {}
class dr extends J {
    constructor(e) {
        super(`Invalid DateTime: ${e.toMessage()}`)
    }
}
class hr extends J {
    constructor(e) {
        super(`Invalid Interval: ${e.toMessage()}`)
    }
}
class mr extends J {
    constructor(e) {
        super(`Invalid Duration: ${e.toMessage()}`)
    }
}
class ee extends J {}
class Gt extends J {
    constructor(e) {
        super(`Invalid unit ${e}`)
    }
}
class I extends J {}
class z extends J {
    constructor() {
        super("Zone is an abstract class")
    }
}
const c = "numeric",
    Z = "short",
    D = "long",
    Ve = {
        year: c,
        month: c,
        day: c
    },
    _t = {
        year: c,
        month: Z,
        day: c
    },
    yr = {
        year: c,
        month: Z,
        day: c,
        weekday: Z
    },
    Jt = {
        year: c,
        month: D,
        day: c
    },
    Bt = {
        year: c,
        month: D,
        day: c,
        weekday: D
    },
    jt = {
        hour: c,
        minute: c
    },
    Qt = {
        hour: c,
        minute: c,
        second: c
    },
    Kt = {
        hour: c,
        minute: c,
        second: c,
        timeZoneName: Z
    },
    Xt = {
        hour: c,
        minute: c,
        second: c,
        timeZoneName: D
    },
    en = {
        hour: c,
        minute: c,
        hourCycle: "h23"
    },
    tn = {
        hour: c,
        minute: c,
        second: c,
        hourCycle: "h23"
    },
    nn = {
        hour: c,
        minute: c,
        second: c,
        hourCycle: "h23",
        timeZoneName: Z
    },
    rn = {
        hour: c,
        minute: c,
        second: c,
        hourCycle: "h23",
        timeZoneName: D
    },
    sn = {
        year: c,
        month: c,
        day: c,
        hour: c,
        minute: c
    },
    an = {
        year: c,
        month: c,
        day: c,
        hour: c,
        minute: c,
        second: c
    },
    on = {
        year: c,
        month: Z,
        day: c,
        hour: c,
        minute: c
    },
    un = {
        year: c,
        month: Z,
        day: c,
        hour: c,
        minute: c,
        second: c
    },
    gr = {
        year: c,
        month: Z,
        day: c,
        weekday: Z,
        hour: c,
        minute: c
    },
    ln = {
        year: c,
        month: D,
        day: c,
        hour: c,
        minute: c,
        timeZoneName: Z
    },
    cn = {
        year: c,
        month: D,
        day: c,
        hour: c,
        minute: c,
        second: c,
        timeZoneName: Z
    },
    fn = {
        year: c,
        month: D,
        day: c,
        weekday: D,
        hour: c,
        minute: c,
        timeZoneName: D
    },
    dn = {
        year: c,
        month: D,
        day: c,
        weekday: D,
        hour: c,
        minute: c,
        second: c,
        timeZoneName: D
    };
class we {
    get type() {
        throw new z
    }
    get name() {
        throw new z
    }
    get ianaName() {
        return this.name
    }
    get isUniversal() {
        throw new z
    }
    offsetName(e, t) {
        throw new z
    }
    formatOffset(e, t) {
        throw new z
    }
    offset(e) {
        throw new z
    }
    equals(e) {
        throw new z
    }
    get isValid() {
        throw new z
    }
}
let qe = null;
class Ze extends we {
    static get instance() {
        return qe === null && (qe = new Ze), qe
    }
    get type() {
        return "system"
    }
    get name() {
        return new Intl.DateTimeFormat().resolvedOptions().timeZone
    }
    get isUniversal() {
        return !1
    }
    offsetName(e, {
        format: t,
        locale: r
    }) {
        return On(e, t, r)
    }
    formatOffset(e, t) {
        return ye(this.offset(e), t)
    }
    offset(e) {
        return -new Date(e).getTimezoneOffset()
    }
    equals(e) {
        return e.type === "system"
    }
    get isValid() {
        return !0
    }
}
let De = {};

function wr(n) {
    return De[n] || (De[n] = new Intl.DateTimeFormat("en-US", {
        hour12: !1,
        timeZone: n,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        era: "short"
    })), De[n]
}
const kr = {
    year: 0,
    month: 1,
    day: 2,
    era: 3,
    hour: 4,
    minute: 5,
    second: 6
};

function Tr(n, e) {
    const t = n.format(e).replace(/\u200E/g, ""),
        r = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(t),
        [, s, i, a, o, u, l, d] = r;
    return [a, s, i, o, u, l, d]
}

function Sr(n, e) {
    const t = n.formatToParts(e),
        r = [];
    for (let s = 0; s < t.length; s++) {
        const {
            type: i,
            value: a
        } = t[s], o = kr[i];
        i === "era" ? r[o] = a : m(o) || (r[o] = parseInt(a, 10))
    }
    return r
}
let pe = {};
class U extends we {
    static create(e) {
        return pe[e] || (pe[e] = new U(e)), pe[e]
    }
    static resetCache() {
        pe = {}, De = {}
    }
    static isValidSpecifier(e) {
        return this.isValidZone(e)
    }
    static isValidZone(e) {
        if (!e) return !1;
        try {
            return new Intl.DateTimeFormat("en-US", {
                timeZone: e
            }).format(), !0
        } catch (t) {
            return !1
        }
    }
    constructor(e) {
        super(), this.zoneName = e, this.valid = U.isValidZone(e)
    }
    get type() {
        return "iana"
    }
    get name() {
        return this.zoneName
    }
    get isUniversal() {
        return !1
    }
    offsetName(e, {
        format: t,
        locale: r
    }) {
        return On(e, t, r, this.name)
    }
    formatOffset(e, t) {
        return ye(this.offset(e), t)
    }
    offset(e) {
        const t = new Date(e);
        if (isNaN(t)) return NaN;
        const r = wr(this.name);
        let [s, i, a, o, u, l, d] = r.formatToParts ? Sr(r, t) : Tr(r, t);
        o === "BC" && (s = -Math.abs(s) + 1);
        const k = Ae({
            year: s,
            month: i,
            day: a,
            hour: u === 24 ? 0 : u,
            minute: l,
            second: d,
            millisecond: 0
        });
        let f = +t;
        const O = f % 1e3;
        return f -= O >= 0 ? O : 1e3 + O, (k - f) / (60 * 1e3)
    }
    equals(e) {
        return e.type === "iana" && e.name === this.name
    }
    get isValid() {
        return this.valid
    }
}
let wt = {};

function Or(n, e = {}) {
    const t = JSON.stringify([n, e]);
    let r = wt[t];
    return r || (r = new Intl.ListFormat(n, e), wt[t] = r), r
}
let je = {};

function Qe(n, e = {}) {
    const t = JSON.stringify([n, e]);
    let r = je[t];
    return r || (r = new Intl.DateTimeFormat(n, e), je[t] = r), r
}
let Ke = {};

function pr(n, e = {}) {
    const t = JSON.stringify([n, e]);
    let r = Ke[t];
    return r || (r = new Intl.NumberFormat(n, e), Ke[t] = r), r
}
let Xe = {};

function vr(n, e = {}) {
    const a = e,
        {
            base: t
        } = a,
        r = Re(a, ["base"]),
        s = JSON.stringify([n, r]);
    let i = Xe[s];
    return i || (i = new Intl.RelativeTimeFormat(n, e), Xe[s] = i), i
}
let he = null;

function Nr() {
    return he || (he = new Intl.DateTimeFormat().resolvedOptions().locale, he)
}
let kt = {};

function Ir(n) {
    let e = kt[n];
    if (!e) {
        const t = new Intl.Locale(n);
        e = "getWeekInfo" in t ? t.getWeekInfo() : t.weekInfo, kt[n] = e
    }
    return e
}

function Er(n) {
    const e = n.indexOf("-x-");
    e !== -1 && (n = n.substring(0, e));
    const t = n.indexOf("-u-");
    if (t === -1) return [n]; {
        let r, s;
        try {
            r = Qe(n).resolvedOptions(), s = n
        } catch (o) {
            const u = n.substring(0, t);
            r = Qe(u).resolvedOptions(), s = u
        }
        const {
            numberingSystem: i,
            calendar: a
        } = r;
        return [s, i, a]
    }
}

function Mr(n, e, t) {
    return (t || e) && (n.includes("-u-") || (n += "-u"), t && (n += `-ca-${t}`), e && (n += `-nu-${e}`)), n
}

function Dr(n) {
    const e = [];
    for (let t = 1; t <= 12; t++) {
        const r = h.utc(2009, t, 1);
        e.push(n(r))
    }
    return e
}

function xr(n) {
    const e = [];
    for (let t = 1; t <= 7; t++) {
        const r = h.utc(2016, 11, 13 + t);
        e.push(n(r))
    }
    return e
}

function ve(n, e, t, r) {
    const s = n.listingMode();
    return s === "error" ? null : s === "en" ? t(e) : r(e)
}

function br(n) {
    return n.numberingSystem && n.numberingSystem !== "latn" ? !1 : n.numberingSystem === "latn" || !n.locale || n.locale.startsWith("en") || new Intl.DateTimeFormat(n.intl).resolvedOptions().numberingSystem === "latn"
}
class Fr {
    constructor(e, t, r) {
        this.padTo = r.padTo || 0, this.floor = r.floor || !1;
        const o = r,
            {
                padTo: s,
                floor: i
            } = o,
            a = Re(o, ["padTo", "floor"]);
        if (!t || Object.keys(a).length > 0) {
            const u = y({
                useGrouping: !1
            }, r);
            r.padTo > 0 && (u.minimumIntegerDigits = r.padTo), this.inf = pr(e, u)
        }
    }
    format(e) {
        if (this.inf) {
            const t = this.floor ? Math.floor(e) : e;
            return this.inf.format(t)
        } else {
            const t = this.floor ? Math.floor(e) : at(e, 3);
            return N(t, this.padTo)
        }
    }
}
class Vr {
    constructor(e, t, r) {
        this.opts = r, this.originalZone = void 0;
        let s;
        if (this.opts.timeZone) this.dt = e;
        else if (e.zone.type === "fixed") {
            const a = -1 * (e.offset / 60),
                o = a >= 0 ? `Etc/GMT+${a}` : `Etc/GMT${a}`;
            e.offset !== 0 && U.create(o).valid ? (s = o, this.dt = e) : (s = "UTC", this.dt = e.offset === 0 ? e : e.setZone("UTC").plus({
                minutes: e.offset
            }), this.originalZone = e.zone)
        } else e.zone.type === "system" ? this.dt = e : e.zone.type === "iana" ? (this.dt = e, s = e.zone.name) : (s = "UTC", this.dt = e.setZone("UTC").plus({
            minutes: e.offset
        }), this.originalZone = e.zone);
        const i = y({}, this.opts);
        i.timeZone = i.timeZone || s, this.dtf = Qe(t, i)
    }
    format() {
        return this.originalZone ? this.formatToParts().map(({
            value: e
        }) => e).join("") : this.dtf.format(this.dt.toJSDate())
    }
    formatToParts() {
        const e = this.dtf.formatToParts(this.dt.toJSDate());
        return this.originalZone ? e.map(t => {
            if (t.type === "timeZoneName") {
                const r = this.originalZone.offsetName(this.dt.ts, {
                    locale: this.dt.locale,
                    format: this.opts.timeZoneName
                });
                return x(y({}, t), {
                    value: r
                })
            } else return t
        }) : e
    }
    resolvedOptions() {
        return this.dtf.resolvedOptions()
    }
}
class Cr {
    constructor(e, t, r) {
        this.opts = y({
            style: "long"
        }, r), !t && Tn() && (this.rtf = vr(e, r))
    }
    format(e, t) {
        return this.rtf ? this.rtf.format(e, t) : ns(t, e, this.opts.numeric, this.opts.style !== "long")
    }
    formatToParts(e, t) {
        return this.rtf ? this.rtf.formatToParts(e, t) : []
    }
}
const Wr = {
    firstDay: 1,
    minimalDays: 4,
    weekend: [6, 7]
};
class S {
    static fromOpts(e) {
        return S.create(e.locale, e.numberingSystem, e.outputCalendar, e.weekSettings, e.defaultToEN)
    }
    static create(e, t, r, s, i = !1) {
        const a = e || v.defaultLocale,
            o = a || (i ? "en-US" : Nr()),
            u = t || v.defaultNumberingSystem,
            l = r || v.defaultOutputCalendar,
            d = et(s) || v.defaultWeekSettings;
        return new S(o, u, l, d, a)
    }
    static resetCache() {
        he = null, je = {}, Ke = {}, Xe = {}
    }
    static fromObject({
        locale: e,
        numberingSystem: t,
        outputCalendar: r,
        weekSettings: s
    } = {}) {
        return S.create(e, t, r, s)
    }
    constructor(e, t, r, s, i) {
        const [a, o, u] = Er(e);
        this.locale = a, this.numberingSystem = t || o || null, this.outputCalendar = r || u || null, this.weekSettings = s, this.intl = Mr(this.locale, this.numberingSystem, this.outputCalendar), this.weekdaysCache = {
            format: {},
            standalone: {}
        }, this.monthsCache = {
            format: {},
            standalone: {}
        }, this.meridiemCache = null, this.eraCache = {}, this.specifiedLocale = i, this.fastNumbersCached = null
    }
    get fastNumbers() {
        return this.fastNumbersCached == null && (this.fastNumbersCached = br(this)), this.fastNumbersCached
    }
    listingMode() {
        const e = this.isEnglish(),
            t = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");
        return e && t ? "en" : "intl"
    }
    clone(e) {
        return !e || Object.getOwnPropertyNames(e).length === 0 ? this : S.create(e.locale || this.specifiedLocale, e.numberingSystem || this.numberingSystem, e.outputCalendar || this.outputCalendar, et(e.weekSettings) || this.weekSettings, e.defaultToEN || !1)
    }
    redefaultToEN(e = {}) {
        return this.clone(x(y({}, e), {
            defaultToEN: !0
        }))
    }
    redefaultToSystem(e = {}) {
        return this.clone(x(y({}, e), {
            defaultToEN: !1
        }))
    }
    months(e, t = !1) {
        return ve(this, e, Nn, () => {
            const r = t ? {
                    month: e,
                    day: "numeric"
                } : {
                    month: e
                },
                s = t ? "format" : "standalone";
            return this.monthsCache[s][e] || (this.monthsCache[s][e] = Dr(i => this.extract(i, r, "month"))), this.monthsCache[s][e]
        })
    }
    weekdays(e, t = !1) {
        return ve(this, e, Mn, () => {
            const r = t ? {
                    weekday: e,
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                } : {
                    weekday: e
                },
                s = t ? "format" : "standalone";
            return this.weekdaysCache[s][e] || (this.weekdaysCache[s][e] = xr(i => this.extract(i, r, "weekday"))), this.weekdaysCache[s][e]
        })
    }
    meridiems() {
        return ve(this, void 0, () => Dn, () => {
            if (!this.meridiemCache) {
                const e = {
                    hour: "numeric",
                    hourCycle: "h12"
                };
                this.meridiemCache = [h.utc(2016, 11, 13, 9), h.utc(2016, 11, 13, 19)].map(t => this.extract(t, e, "dayperiod"))
            }
            return this.meridiemCache
        })
    }
    eras(e) {
        return ve(this, e, xn, () => {
            const t = {
                era: e
            };
            return this.eraCache[e] || (this.eraCache[e] = [h.utc(-40, 1, 1), h.utc(2017, 1, 1)].map(r => this.extract(r, t, "era"))), this.eraCache[e]
        })
    }
    extract(e, t, r) {
        const s = this.dtFormatter(e, t),
            i = s.formatToParts(),
            a = i.find(o => o.type.toLowerCase() === r);
        return a ? a.value : null
    }
    numberFormatter(e = {}) {
        return new Fr(this.intl, e.forceSimple || this.fastNumbers, e)
    }
    dtFormatter(e, t = {}) {
        return new Vr(e, this.intl, t)
    }
    relFormatter(e = {}) {
        return new Cr(this.intl, this.isEnglish(), e)
    }
    listFormatter(e = {}) {
        return Or(this.intl, e)
    }
    isEnglish() {
        return this.locale === "en" || this.locale.toLowerCase() === "en-us" || new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us")
    }
    getWeekSettings() {
        return this.weekSettings ? this.weekSettings : Sn() ? Ir(this.locale) : Wr
    }
    getStartOfWeek() {
        return this.getWeekSettings().firstDay
    }
    getMinDaysInFirstWeek() {
        return this.getWeekSettings().minimalDays
    }
    getWeekendDays() {
        return this.getWeekSettings().weekend
    }
    equals(e) {
        return this.locale === e.locale && this.numberingSystem === e.numberingSystem && this.outputCalendar === e.outputCalendar
    }
    toString() {
        return `Locale(${this.locale}, ${this.numberingSystem}, ${this.outputCalendar})`
    }
}
let He = null;
class M extends we {
    static get utcInstance() {
        return He === null && (He = new M(0)), He
    }
    static instance(e) {
        return e === 0 ? M.utcInstance : new M(e)
    }
    static parseSpecifier(e) {
        if (e) {
            const t = e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
            if (t) return new M(Ue(t[1], t[2]))
        }
        return null
    }
    constructor(e) {
        super(), this.fixed = e
    }
    get type() {
        return "fixed"
    }
    get name() {
        return this.fixed === 0 ? "UTC" : `UTC${ye(this.fixed,"narrow")}`
    }
    get ianaName() {
        return this.fixed === 0 ? "Etc/UTC" : `Etc/GMT${ye(-this.fixed,"narrow")}`
    }
    offsetName() {
        return this.name
    }
    formatOffset(e, t) {
        return ye(this.fixed, t)
    }
    get isUniversal() {
        return !0
    }
    offset() {
        return this.fixed
    }
    equals(e) {
        return e.type === "fixed" && e.fixed === this.fixed
    }
    get isValid() {
        return !0
    }
}
class Lr extends we {
    constructor(e) {
        super(), this.zoneName = e
    }
    get type() {
        return "invalid"
    }
    get name() {
        return this.zoneName
    }
    get isUniversal() {
        return !1
    }
    offsetName() {
        return null
    }
    formatOffset() {
        return ""
    }
    offset() {
        return NaN
    }
    equals() {
        return !1
    }
    get isValid() {
        return !1
    }
}

function H(n, e) {
    if (m(n) || n === null) return e;
    if (n instanceof we) return n;
    if (Rr(n)) {
        const t = n.toLowerCase();
        return t === "default" ? e : t === "local" || t === "system" ? Ze.instance : t === "utc" || t === "gmt" ? M.utcInstance : M.parseSpecifier(t) || U.create(n)
    } else return Y(n) ? M.instance(n) : typeof n == "object" && "offset" in n && typeof n.offset == "function" ? n : new Lr(n)
}
const nt = {
        arab: "[٠-٩]",
        arabext: "[۰-۹]",
        bali: "[᭐-᭙]",
        beng: "[০-৯]",
        deva: "[०-९]",
        fullwide: "[０-９]",
        gujr: "[૦-૯]",
        hanidec: "[〇|一|二|三|四|五|六|七|八|九]",
        khmr: "[០-៩]",
        knda: "[೦-೯]",
        laoo: "[໐-໙]",
        limb: "[᥆-᥏]",
        mlym: "[൦-൯]",
        mong: "[᠐-᠙]",
        mymr: "[၀-၉]",
        orya: "[୦-୯]",
        tamldec: "[௦-௯]",
        telu: "[౦-౯]",
        thai: "[๐-๙]",
        tibt: "[༠-༩]",
        latn: "\\d"
    },
    Tt = {
        arab: [1632, 1641],
        arabext: [1776, 1785],
        bali: [6992, 7001],
        beng: [2534, 2543],
        deva: [2406, 2415],
        fullwide: [65296, 65303],
        gujr: [2790, 2799],
        khmr: [6112, 6121],
        knda: [3302, 3311],
        laoo: [3792, 3801],
        limb: [6470, 6479],
        mlym: [3430, 3439],
        mong: [6160, 6169],
        mymr: [4160, 4169],
        orya: [2918, 2927],
        tamldec: [3046, 3055],
        telu: [3174, 3183],
        thai: [3664, 3673],
        tibt: [3872, 3881]
    },
    Zr = nt.hanidec.replace(/[\[|\]]/g, "").split("");

function $r(n) {
    let e = parseInt(n, 10);
    if (isNaN(e)) {
        e = "";
        for (let t = 0; t < n.length; t++) {
            const r = n.charCodeAt(t);
            if (n[t].search(nt.hanidec) !== -1) e += Zr.indexOf(n[t]);
            else
                for (const s in Tt) {
                    const [i, a] = Tt[s];
                    r >= i && r <= a && (e += r - i)
                }
        }
        return parseInt(e, 10)
    } else return e
}
let X = {};

function Ar() {
    X = {}
}

function C({
    numberingSystem: n
}, e = "") {
    const t = n || "latn";
    return X[t] || (X[t] = {}), X[t][e] || (X[t][e] = new RegExp(`${nt[t]}${e}`)), X[t][e]
}
let St = () => Date.now(),
    Ot = "system",
    pt = null,
    vt = null,
    Nt = null,
    It = 60,
    Et, Mt = null;
class v {
    static get now() {
        return St
    }
    static set now(e) {
        St = e
    }
    static set defaultZone(e) {
        Ot = e
    }
    static get defaultZone() {
        return H(Ot, Ze.instance)
    }
    static get defaultLocale() {
        return pt
    }
    static set defaultLocale(e) {
        pt = e
    }
    static get defaultNumberingSystem() {
        return vt
    }
    static set defaultNumberingSystem(e) {
        vt = e
    }
    static get defaultOutputCalendar() {
        return Nt
    }
    static set defaultOutputCalendar(e) {
        Nt = e
    }
    static get defaultWeekSettings() {
        return Mt
    }
    static set defaultWeekSettings(e) {
        Mt = et(e)
    }
    static get twoDigitCutoffYear() {
        return It
    }
    static set twoDigitCutoffYear(e) {
        It = e % 100
    }
    static get throwOnInvalid() {
        return Et
    }
    static set throwOnInvalid(e) {
        Et = e
    }
    static resetCaches() {
        S.resetCache(), U.resetCache(), h.resetCache(), Ar()
    }
}
class L {
    constructor(e, t) {
        this.reason = e, this.explanation = t
    }
    toMessage() {
        return this.explanation ? `${this.reason}: ${this.explanation}` : this.reason
    }
}
const hn = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
    mn = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];

function F(n, e) {
    return new L("unit out of range", `you specified ${e} (of type ${typeof e}) as a ${n}, which is invalid`)
}

function rt(n, e, t) {
    const r = new Date(Date.UTC(n, e - 1, t));
    n < 100 && n >= 0 && r.setUTCFullYear(r.getUTCFullYear() - 1900);
    const s = r.getUTCDay();
    return s === 0 ? 7 : s
}

function yn(n, e, t) {
    return t + (ke(n) ? mn : hn)[e - 1]
}

function gn(n, e) {
    const t = ke(n) ? mn : hn,
        r = t.findIndex(i => i < e),
        s = e - t[r];
    return {
        month: r + 1,
        day: s
    }
}

function st(n, e) {
    return (n - e + 7) % 7 + 1
}

function Ce(n, e = 4, t = 1) {
    const {
        year: r,
        month: s,
        day: i
    } = n, a = yn(r, s, i), o = st(rt(r, s, i), t);
    let u = Math.floor((a - o + 14 - e) / 7),
        l;
    return u < 1 ? (l = r - 1, u = ge(l, e, t)) : u > ge(r, e, t) ? (l = r + 1, u = 1) : l = r, y({
        weekYear: l,
        weekNumber: u,
        weekday: o
    }, ze(n))
}

function Dt(n, e = 4, t = 1) {
    const {
        weekYear: r,
        weekNumber: s,
        weekday: i
    } = n, a = st(rt(r, 1, e), t), o = te(r);
    let u = s * 7 + i - a - 7 + e,
        l;
    u < 1 ? (l = r - 1, u += te(l)) : u > o ? (l = r + 1, u -= te(r)) : l = r;
    const {
        month: d,
        day: g
    } = gn(l, u);
    return y({
        year: l,
        month: d,
        day: g
    }, ze(n))
}

function Ye(n) {
    const {
        year: e,
        month: t,
        day: r
    } = n, s = yn(e, t, r);
    return y({
        year: e,
        ordinal: s
    }, ze(n))
}

function xt(n) {
    const {
        year: e,
        ordinal: t
    } = n, {
        month: r,
        day: s
    } = gn(e, t);
    return y({
        year: e,
        month: r,
        day: s
    }, ze(n))
}

function bt(n, e) {
    if (!m(n.localWeekday) || !m(n.localWeekNumber) || !m(n.localWeekYear)) {
        if (!m(n.weekday) || !m(n.weekNumber) || !m(n.weekYear)) throw new ee("Cannot mix locale-based week fields with ISO-based week fields");
        return m(n.localWeekday) || (n.weekday = n.localWeekday), m(n.localWeekNumber) || (n.weekNumber = n.localWeekNumber), m(n.localWeekYear) || (n.weekYear = n.localWeekYear), delete n.localWeekday, delete n.localWeekNumber, delete n.localWeekYear, {
            minDaysInFirstWeek: e.getMinDaysInFirstWeek(),
            startOfWeek: e.getStartOfWeek()
        }
    } else return {
        minDaysInFirstWeek: 4,
        startOfWeek: 1
    }
}

function Ur(n, e = 4, t = 1) {
    const r = $e(n.weekYear),
        s = V(n.weekNumber, 1, ge(n.weekYear, e, t)),
        i = V(n.weekday, 1, 7);
    return r ? s ? i ? !1 : F("weekday", n.weekday) : F("week", n.weekNumber) : F("weekYear", n.weekYear)
}

function zr(n) {
    const e = $e(n.year),
        t = V(n.ordinal, 1, te(n.year));
    return e ? t ? !1 : F("ordinal", n.ordinal) : F("year", n.year)
}

function wn(n) {
    const e = $e(n.year),
        t = V(n.month, 1, 12),
        r = V(n.day, 1, We(n.year, n.month));
    return e ? t ? r ? !1 : F("day", n.day) : F("month", n.month) : F("year", n.year)
}

function kn(n) {
    const {
        hour: e,
        minute: t,
        second: r,
        millisecond: s
    } = n, i = V(e, 0, 23) || e === 24 && t === 0 && r === 0 && s === 0, a = V(t, 0, 59), o = V(r, 0, 59), u = V(s, 0, 999);
    return i ? a ? o ? u ? !1 : F("millisecond", s) : F("second", r) : F("minute", t) : F("hour", e)
}

function m(n) {
    return typeof n == "undefined"
}

function Y(n) {
    return typeof n == "number"
}

function $e(n) {
    return typeof n == "number" && n % 1 === 0
}

function Rr(n) {
    return typeof n == "string"
}

function qr(n) {
    return Object.prototype.toString.call(n) === "[object Date]"
}

function Tn() {
    try {
        return typeof Intl != "undefined" && !!Intl.RelativeTimeFormat
    } catch (n) {
        return !1
    }
}

function Sn() {
    try {
        return typeof Intl != "undefined" && !!Intl.Locale && ("weekInfo" in Intl.Locale.prototype || "getWeekInfo" in Intl.Locale.prototype)
    } catch (n) {
        return !1
    }
}

function Hr(n) {
    return Array.isArray(n) ? n : [n]
}

function Ft(n, e, t) {
    if (n.length !== 0) return n.reduce((r, s) => {
        const i = [e(s), s];
        return r && t(r[0], i[0]) === r[0] ? r : i
    }, null)[1]
}

function Yr(n, e) {
    return e.reduce((t, r) => (t[r] = n[r], t), {})
}

function re(n, e) {
    return Object.prototype.hasOwnProperty.call(n, e)
}

function et(n) {
    if (n == null) return null;
    if (typeof n != "object") throw new I("Week settings must be an object");
    if (!V(n.firstDay, 1, 7) || !V(n.minimalDays, 1, 7) || !Array.isArray(n.weekend) || n.weekend.some(e => !V(e, 1, 7))) throw new I("Invalid week settings");
    return {
        firstDay: n.firstDay,
        minimalDays: n.minimalDays,
        weekend: Array.from(n.weekend)
    }
}

function V(n, e, t) {
    return $e(n) && n >= e && n <= t
}

function Pr(n, e) {
    return n - e * Math.floor(n / e)
}

function N(n, e = 2) {
    const t = n < 0;
    let r;
    return t ? r = "-" + ("" + -n).padStart(e, "0") : r = ("" + n).padStart(e, "0"), r
}

function q(n) {
    if (!(m(n) || n === null || n === "")) return parseInt(n, 10)
}

function P(n) {
    if (!(m(n) || n === null || n === "")) return parseFloat(n)
}

function it(n) {
    if (!(m(n) || n === null || n === "")) {
        const e = parseFloat("0." + n) * 1e3;
        return Math.floor(e)
    }
}

function at(n, e, t = !1) {
    const r = yt(10, e);
    return (t ? Math.trunc : Math.round)(n * r) / r
}

function ke(n) {
    return n % 4 === 0 && (n % 100 !== 0 || n % 400 === 0)
}

function te(n) {
    return ke(n) ? 366 : 365
}

function We(n, e) {
    const t = Pr(e - 1, 12) + 1,
        r = n + (e - t) / 12;
    return t === 2 ? ke(r) ? 29 : 28 : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][t - 1]
}

function Ae(n) {
    let e = Date.UTC(n.year, n.month - 1, n.day, n.hour, n.minute, n.second, n.millisecond);
    return n.year < 100 && n.year >= 0 && (e = new Date(e), e.setUTCFullYear(n.year, n.month - 1, n.day)), +e
}

function Vt(n, e, t) {
    return -st(rt(n, 1, e), t) + e - 1
}

function ge(n, e = 4, t = 1) {
    const r = Vt(n, e, t),
        s = Vt(n + 1, e, t);
    return (te(n) - r + s) / 7
}

function tt(n) {
    return n > 99 ? n : n > v.twoDigitCutoffYear ? 1900 + n : 2e3 + n
}

function On(n, e, t, r = null) {
    const s = new Date(n),
        i = {
            hourCycle: "h23",
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit"
        };
    r && (i.timeZone = r);
    const a = y({
            timeZoneName: e
        }, i),
        o = new Intl.DateTimeFormat(t, a).formatToParts(s).find(u => u.type.toLowerCase() === "timezonename");
    return o ? o.value : null
}

function Ue(n, e) {
    let t = parseInt(n, 10);
    Number.isNaN(t) && (t = 0);
    const r = parseInt(e, 10) || 0,
        s = t < 0 || Object.is(t, -0) ? -r : r;
    return t * 60 + s
}

function pn(n) {
    const e = Number(n);
    if (typeof n == "boolean" || n === "" || Number.isNaN(e)) throw new I(`Invalid unit value ${n}`);
    return e
}

function Le(n, e) {
    const t = {};
    for (const r in n)
        if (re(n, r)) {
            const s = n[r];
            if (s == null) continue;
            t[e(r)] = pn(s)
        }
    return t
}

function ye(n, e) {
    const t = Math.trunc(Math.abs(n / 60)),
        r = Math.trunc(Math.abs(n % 60)),
        s = n >= 0 ? "+" : "-";
    switch (e) {
        case "short":
            return `${s}${N(t,2)}:${N(r,2)}`;
        case "narrow":
            return `${s}${t}${r>0?`:${r}`:""}`;
        case "techie":
            return `${s}${N(t,2)}${N(r,2)}`;
        default:
            throw new RangeError(`Value format ${e} is out of range for property format`)
    }
}

function ze(n) {
    return Yr(n, ["hour", "minute", "second", "millisecond"])
}
const Gr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    vn = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    _r = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

function Nn(n) {
    switch (n) {
        case "narrow":
            return [..._r];
        case "short":
            return [...vn];
        case "long":
            return [...Gr];
        case "numeric":
            return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
        case "2-digit":
            return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
        default:
            return null
    }
}
const In = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    En = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    Jr = ["M", "T", "W", "T", "F", "S", "S"];

function Mn(n) {
    switch (n) {
        case "narrow":
            return [...Jr];
        case "short":
            return [...En];
        case "long":
            return [...In];
        case "numeric":
            return ["1", "2", "3", "4", "5", "6", "7"];
        default:
            return null
    }
}
const Dn = ["AM", "PM"],
    Br = ["Before Christ", "Anno Domini"],
    jr = ["BC", "AD"],
    Qr = ["B", "A"];

function xn(n) {
    switch (n) {
        case "narrow":
            return [...Qr];
        case "short":
            return [...jr];
        case "long":
            return [...Br];
        default:
            return null
    }
}

function Kr(n) {
    return Dn[n.hour < 12 ? 0 : 1]
}

function Xr(n, e) {
    return Mn(e)[n.weekday - 1]
}

function es(n, e) {
    return Nn(e)[n.month - 1]
}

function ts(n, e) {
    return xn(e)[n.year < 0 ? 0 : 1]
}

function ns(n, e, t = "always", r = !1) {
    const s = {
            years: ["year", "yr."],
            quarters: ["quarter", "qtr."],
            months: ["month", "mo."],
            weeks: ["week", "wk."],
            days: ["day", "day", "days"],
            hours: ["hour", "hr."],
            minutes: ["minute", "min."],
            seconds: ["second", "sec."]
        },
        i = ["hours", "minutes", "seconds"].indexOf(n) === -1;
    if (t === "auto" && i) {
        const g = n === "days";
        switch (e) {
            case 1:
                return g ? "tomorrow" : `next ${s[n][0]}`;
            case -1:
                return g ? "yesterday" : `last ${s[n][0]}`;
            case 0:
                return g ? "today" : `this ${s[n][0]}`
        }
    }
    const a = Object.is(e, -0) || e < 0,
        o = Math.abs(e),
        u = o === 1,
        l = s[n],
        d = r ? u ? l[1] : l[2] || l[1] : u ? s[n][0] : n;
    return a ? `${o} ${d} ago` : `in ${o} ${d}`
}

function Ct(n, e) {
    let t = "";
    for (const r of n) r.literal ? t += r.val : t += e(r.val);
    return t
}
const rs = {
    D: Ve,
    DD: _t,
    DDD: Jt,
    DDDD: Bt,
    t: jt,
    tt: Qt,
    ttt: Kt,
    tttt: Xt,
    T: en,
    TT: tn,
    TTT: nn,
    TTTT: rn,
    f: sn,
    ff: on,
    fff: ln,
    ffff: fn,
    F: an,
    FF: un,
    FFF: cn,
    FFFF: dn
};
class E {
    static create(e, t = {}) {
        return new E(e, t)
    }
    static parseFormat(e) {
        let t = null,
            r = "",
            s = !1;
        const i = [];
        for (let a = 0; a < e.length; a++) {
            const o = e.charAt(a);
            o === "'" ? (r.length > 0 && i.push({
                literal: s || /^\s+$/.test(r),
                val: r
            }), t = null, r = "", s = !s) : s || o === t ? r += o : (r.length > 0 && i.push({
                literal: /^\s+$/.test(r),
                val: r
            }), r = o, t = o)
        }
        return r.length > 0 && i.push({
            literal: s || /^\s+$/.test(r),
            val: r
        }), i
    }
    static macroTokenToFormatOpts(e) {
        return rs[e]
    }
    constructor(e, t) {
        this.opts = t, this.loc = e, this.systemLoc = null
    }
    formatWithSystemDefault(e, t) {
        return this.systemLoc === null && (this.systemLoc = this.loc.redefaultToSystem()), this.systemLoc.dtFormatter(e, y(y({}, this.opts), t)).format()
    }
    dtFormatter(e, t = {}) {
        return this.loc.dtFormatter(e, y(y({}, this.opts), t))
    }
    formatDateTime(e, t) {
        return this.dtFormatter(e, t).format()
    }
    formatDateTimeParts(e, t) {
        return this.dtFormatter(e, t).formatToParts()
    }
    formatInterval(e, t) {
        return this.dtFormatter(e.start, t).dtf.formatRange(e.start.toJSDate(), e.end.toJSDate())
    }
    resolvedOptions(e, t) {
        return this.dtFormatter(e, t).resolvedOptions()
    }
    num(e, t = 0) {
        if (this.opts.forceSimple) return N(e, t);
        const r = y({}, this.opts);
        return t > 0 && (r.padTo = t), this.loc.numberFormatter(r).format(e)
    }
    formatDateTimeFromString(e, t) {
        const r = this.loc.listingMode() === "en",
            s = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory",
            i = (f, O) => this.loc.extract(e, f, O),
            a = f => e.isOffsetFixed && e.offset === 0 && f.allowZ ? "Z" : e.isValid ? e.zone.formatOffset(e.ts, f.format) : "",
            o = () => r ? Kr(e) : i({
                hour: "numeric",
                hourCycle: "h12"
            }, "dayperiod"),
            u = (f, O) => r ? es(e, f) : i(O ? {
                month: f
            } : {
                month: f,
                day: "numeric"
            }, "month"),
            l = (f, O) => r ? Xr(e, f) : i(O ? {
                weekday: f
            } : {
                weekday: f,
                month: "long",
                day: "numeric"
            }, "weekday"),
            d = f => {
                const O = E.macroTokenToFormatOpts(f);
                return O ? this.formatWithSystemDefault(e, O) : f
            },
            g = f => r ? ts(e, f) : i({
                era: f
            }, "era"),
            k = f => {
                switch (f) {
                    case "S":
                        return this.num(e.millisecond);
                    case "u":
                    case "SSS":
                        return this.num(e.millisecond, 3);
                    case "s":
                        return this.num(e.second);
                    case "ss":
                        return this.num(e.second, 2);
                    case "uu":
                        return this.num(Math.floor(e.millisecond / 10), 2);
                    case "uuu":
                        return this.num(Math.floor(e.millisecond / 100));
                    case "m":
                        return this.num(e.minute);
                    case "mm":
                        return this.num(e.minute, 2);
                    case "h":
                        return this.num(e.hour % 12 === 0 ? 12 : e.hour % 12);
                    case "hh":
                        return this.num(e.hour % 12 === 0 ? 12 : e.hour % 12, 2);
                    case "H":
                        return this.num(e.hour);
                    case "HH":
                        return this.num(e.hour, 2);
                    case "Z":
                        return a({
                            format: "narrow",
                            allowZ: this.opts.allowZ
                        });
                    case "ZZ":
                        return a({
                            format: "short",
                            allowZ: this.opts.allowZ
                        });
                    case "ZZZ":
                        return a({
                            format: "techie",
                            allowZ: this.opts.allowZ
                        });
                    case "ZZZZ":
                        return e.zone.offsetName(e.ts, {
                            format: "short",
                            locale: this.loc.locale
                        });
                    case "ZZZZZ":
                        return e.zone.offsetName(e.ts, {
                            format: "long",
                            locale: this.loc.locale
                        });
                    case "z":
                        return e.zoneName;
                    case "a":
                        return o();
                    case "d":
                        return s ? i({
                            day: "numeric"
                        }, "day") : this.num(e.day);
                    case "dd":
                        return s ? i({
                            day: "2-digit"
                        }, "day") : this.num(e.day, 2);
                    case "c":
                        return this.num(e.weekday);
                    case "ccc":
                        return l("short", !0);
                    case "cccc":
                        return l("long", !0);
                    case "ccccc":
                        return l("narrow", !0);
                    case "E":
                        return this.num(e.weekday);
                    case "EEE":
                        return l("short", !1);
                    case "EEEE":
                        return l("long", !1);
                    case "EEEEE":
                        return l("narrow", !1);
                    case "L":
                        return s ? i({
                            month: "numeric",
                            day: "numeric"
                        }, "month") : this.num(e.month);
                    case "LL":
                        return s ? i({
                            month: "2-digit",
                            day: "numeric"
                        }, "month") : this.num(e.month, 2);
                    case "LLL":
                        return u("short", !0);
                    case "LLLL":
                        return u("long", !0);
                    case "LLLLL":
                        return u("narrow", !0);
                    case "M":
                        return s ? i({
                            month: "numeric"
                        }, "month") : this.num(e.month);
                    case "MM":
                        return s ? i({
                            month: "2-digit"
                        }, "month") : this.num(e.month, 2);
                    case "MMM":
                        return u("short", !1);
                    case "MMMM":
                        return u("long", !1);
                    case "MMMMM":
                        return u("narrow", !1);
                    case "y":
                        return s ? i({
                            year: "numeric"
                        }, "year") : this.num(e.year);
                    case "yy":
                        return s ? i({
                            year: "2-digit"
                        }, "year") : this.num(e.year.toString().slice(-2), 2);
                    case "yyyy":
                        return s ? i({
                            year: "numeric"
                        }, "year") : this.num(e.year, 4);
                    case "yyyyyy":
                        return s ? i({
                            year: "numeric"
                        }, "year") : this.num(e.year, 6);
                    case "G":
                        return g("short");
                    case "GG":
                        return g("long");
                    case "GGGGG":
                        return g("narrow");
                    case "kk":
                        return this.num(e.weekYear.toString().slice(-2), 2);
                    case "kkkk":
                        return this.num(e.weekYear, 4);
                    case "W":
                        return this.num(e.weekNumber);
                    case "WW":
                        return this.num(e.weekNumber, 2);
                    case "n":
                        return this.num(e.localWeekNumber);
                    case "nn":
                        return this.num(e.localWeekNumber, 2);
                    case "ii":
                        return this.num(e.localWeekYear.toString().slice(-2), 2);
                    case "iiii":
                        return this.num(e.localWeekYear, 4);
                    case "o":
                        return this.num(e.ordinal);
                    case "ooo":
                        return this.num(e.ordinal, 3);
                    case "q":
                        return this.num(e.quarter);
                    case "qq":
                        return this.num(e.quarter, 2);
                    case "X":
                        return this.num(Math.floor(e.ts / 1e3));
                    case "x":
                        return this.num(e.ts);
                    default:
                        return d(f)
                }
            };
        return Ct(E.parseFormat(t), k)
    }
    formatDurationFromString(e, t) {
        const r = u => {
                switch (u[0]) {
                    case "S":
                        return "millisecond";
                    case "s":
                        return "second";
                    case "m":
                        return "minute";
                    case "h":
                        return "hour";
                    case "d":
                        return "day";
                    case "w":
                        return "week";
                    case "M":
                        return "month";
                    case "y":
                        return "year";
                    default:
                        return null
                }
            },
            s = u => l => {
                const d = r(l);
                return d ? this.num(u.get(d), l.length) : l
            },
            i = E.parseFormat(t),
            a = i.reduce((u, {
                literal: l,
                val: d
            }) => l ? u : u.concat(d), []),
            o = e.shiftTo(...a.map(r).filter(u => u));
        return Ct(i, s(o))
    }
}
const bn = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;

function se(...n) {
    const e = n.reduce((t, r) => t + r.source, "");
    return RegExp(`^${e}$`)
}

function ie(...n) {
    return e => n.reduce(([t, r, s], i) => {
        const [a, o, u] = i(e, s);
        return [y(y({}, t), a), o || r, u]
    }, [{}, null, 1]).slice(0, 2)
}

function ae(n, ...e) {
    if (n == null) return [null, null];
    for (const [t, r] of e) {
        const s = t.exec(n);
        if (s) return r(s)
    }
    return [null, null]
}

function Fn(...n) {
    return (e, t) => {
        const r = {};
        let s;
        for (s = 0; s < n.length; s++) r[n[s]] = q(e[t + s]);
        return [r, null, t + s]
    }
}
const Vn = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,
    ss = `(?:${Vn.source}?(?:\\[(${bn.source})\\])?)?`,
    ot = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,
    Cn = RegExp(`${ot.source}${ss}`),
    ut = RegExp(`(?:T${Cn.source})?`),
    is = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,
    as = /(\d{4})-?W(\d\d)(?:-?(\d))?/,
    os = /(\d{4})-?(\d{3})/,
    us = Fn("weekYear", "weekNumber", "weekDay"),
    ls = Fn("year", "ordinal"),
    cs = /(\d{4})-(\d\d)-(\d\d)/,
    Wn = RegExp(`${ot.source} ?(?:${Vn.source}|(${bn.source}))?`),
    fs = RegExp(`(?: ${Wn.source})?`);

function ne(n, e, t) {
    const r = n[e];
    return m(r) ? t : q(r)
}

function ds(n, e) {
    return [{
        year: ne(n, e),
        month: ne(n, e + 1, 1),
        day: ne(n, e + 2, 1)
    }, null, e + 3]
}

function oe(n, e) {
    return [{
        hours: ne(n, e, 0),
        minutes: ne(n, e + 1, 0),
        seconds: ne(n, e + 2, 0),
        milliseconds: it(n[e + 3])
    }, null, e + 4]
}

function Te(n, e) {
    const t = !n[e] && !n[e + 1],
        r = Ue(n[e + 1], n[e + 2]),
        s = t ? null : M.instance(r);
    return [{}, s, e + 3]
}

function Se(n, e) {
    const t = n[e] ? U.create(n[e]) : null;
    return [{}, t, e + 1]
}
const hs = RegExp(`^T?${ot.source}$`),
    ms = /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;

function ys(n) {
    const [e, t, r, s, i, a, o, u, l] = n, d = e[0] === "-", g = u && u[0] === "-", k = (f, O = !1) => f !== void 0 && (O || f && d) ? -f : f;
    return [{
        years: k(P(t)),
        months: k(P(r)),
        weeks: k(P(s)),
        days: k(P(i)),
        hours: k(P(a)),
        minutes: k(P(o)),
        seconds: k(P(u), u === "-0"),
        milliseconds: k(it(l), g)
    }]
}
const gs = {
    GMT: 0,
    EDT: -4 * 60,
    EST: -5 * 60,
    CDT: -5 * 60,
    CST: -6 * 60,
    MDT: -6 * 60,
    MST: -7 * 60,
    PDT: -7 * 60,
    PST: -8 * 60
};

function lt(n, e, t, r, s, i, a) {
    const o = {
        year: e.length === 2 ? tt(q(e)) : q(e),
        month: vn.indexOf(t) + 1,
        day: q(r),
        hour: q(s),
        minute: q(i)
    };
    return a && (o.second = q(a)), n && (o.weekday = n.length > 3 ? In.indexOf(n) + 1 : En.indexOf(n) + 1), o
}
const ws = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;

function ks(n) {
    const [, e, t, r, s, i, a, o, u, l, d, g] = n, k = lt(e, s, r, t, i, a, o);
    let f;
    return u ? f = gs[u] : l ? f = 0 : f = Ue(d, g), [k, new M(f)]
}

function Ts(n) {
    return n.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim()
}
const Ss = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,
    Os = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,
    ps = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;

function Wt(n) {
    const [, e, t, r, s, i, a, o] = n;
    return [lt(e, s, r, t, i, a, o), M.utcInstance]
}

function vs(n) {
    const [, e, t, r, s, i, a, o] = n;
    return [lt(e, o, t, r, s, i, a), M.utcInstance]
}
const Ns = se(is, ut),
    Is = se(as, ut),
    Es = se(os, ut),
    Ms = se(Cn),
    Ln = ie(ds, oe, Te, Se),
    Ds = ie(us, oe, Te, Se),
    xs = ie(ls, oe, Te, Se),
    bs = ie(oe, Te, Se);

function Fs(n) {
    return ae(n, [Ns, Ln], [Is, Ds], [Es, xs], [Ms, bs])
}

function Vs(n) {
    return ae(Ts(n), [ws, ks])
}

function Cs(n) {
    return ae(n, [Ss, Wt], [Os, Wt], [ps, vs])
}

function Ws(n) {
    return ae(n, [ms, ys])
}
const Ls = ie(oe);

function Zs(n) {
    return ae(n, [hs, Ls])
}
const $s = se(cs, fs),
    As = se(Wn),
    Us = ie(oe, Te, Se);

function zs(n) {
    return ae(n, [$s, Ln], [As, Us])
}
const Lt = "Invalid Duration",
    Zn = {
        weeks: {
            days: 7,
            hours: 7 * 24,
            minutes: 7 * 24 * 60,
            seconds: 7 * 24 * 60 * 60,
            milliseconds: 7 * 24 * 60 * 60 * 1e3
        },
        days: {
            hours: 24,
            minutes: 24 * 60,
            seconds: 24 * 60 * 60,
            milliseconds: 24 * 60 * 60 * 1e3
        },
        hours: {
            minutes: 60,
            seconds: 60 * 60,
            milliseconds: 60 * 60 * 1e3
        },
        minutes: {
            seconds: 60,
            milliseconds: 60 * 1e3
        },
        seconds: {
            milliseconds: 1e3
        }
    },
    Rs = y({
        years: {
            quarters: 4,
            months: 12,
            weeks: 52,
            days: 365,
            hours: 365 * 24,
            minutes: 365 * 24 * 60,
            seconds: 365 * 24 * 60 * 60,
            milliseconds: 365 * 24 * 60 * 60 * 1e3
        },
        quarters: {
            months: 3,
            weeks: 13,
            days: 91,
            hours: 91 * 24,
            minutes: 91 * 24 * 60,
            seconds: 91 * 24 * 60 * 60,
            milliseconds: 91 * 24 * 60 * 60 * 1e3
        },
        months: {
            weeks: 4,
            days: 30,
            hours: 30 * 24,
            minutes: 30 * 24 * 60,
            seconds: 30 * 24 * 60 * 60,
            milliseconds: 30 * 24 * 60 * 60 * 1e3
        }
    }, Zn),
    b = 146097 / 400,
    j = 146097 / 4800,
    qs = y({
        years: {
            quarters: 4,
            months: 12,
            weeks: b / 7,
            days: b,
            hours: b * 24,
            minutes: b * 24 * 60,
            seconds: b * 24 * 60 * 60,
            milliseconds: b * 24 * 60 * 60 * 1e3
        },
        quarters: {
            months: 3,
            weeks: b / 28,
            days: b / 4,
            hours: b * 24 / 4,
            minutes: b * 24 * 60 / 4,
            seconds: b * 24 * 60 * 60 / 4,
            milliseconds: b * 24 * 60 * 60 * 1e3 / 4
        },
        months: {
            weeks: j / 7,
            days: j,
            hours: j * 24,
            minutes: j * 24 * 60,
            seconds: j * 24 * 60 * 60,
            milliseconds: j * 24 * 60 * 60 * 1e3
        }
    }, Zn),
    _ = ["years", "quarters", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds"],
    Hs = _.slice(0).reverse();

function R(n, e, t = !1) {
    const r = {
        values: t ? e.values : y(y({}, n.values), e.values || {}),
        loc: n.loc.clone(e.loc),
        conversionAccuracy: e.conversionAccuracy || n.conversionAccuracy,
        matrix: e.matrix || n.matrix
    };
    return new w(r)
}

function $n(n, e) {
    var r;
    let t = (r = e.milliseconds) != null ? r : 0;
    for (const s of Hs.slice(1)) e[s] && (t += e[s] * n[s].milliseconds);
    return t
}

function Zt(n, e) {
    const t = $n(n, e) < 0 ? -1 : 1;
    _.reduceRight((r, s) => {
        if (m(e[s])) return r;
        if (r) {
            const i = e[r] * t,
                a = n[s][r],
                o = Math.floor(i / a);
            e[s] += o * t, e[r] -= o * a * t
        }
        return s
    }, null), _.reduce((r, s) => {
        if (m(e[s])) return r;
        if (r) {
            const i = e[r] % 1;
            e[r] -= i, e[s] += i * n[r][s]
        }
        return s
    }, null)
}

function Ys(n) {
    const e = {};
    for (const [t, r] of Object.entries(n)) r !== 0 && (e[t] = r);
    return e
}
class w {
    constructor(e) {
        const t = e.conversionAccuracy === "longterm" || !1;
        let r = t ? qs : Rs;
        e.matrix && (r = e.matrix), this.values = e.values, this.loc = e.loc || S.create(), this.conversionAccuracy = t ? "longterm" : "casual", this.invalid = e.invalid || null, this.matrix = r, this.isLuxonDuration = !0
    }
    static fromMillis(e, t) {
        return w.fromObject({
            milliseconds: e
        }, t)
    }
    static fromObject(e, t = {}) {
        if (e == null || typeof e != "object") throw new I(`Duration.fromObject: argument expected to be an object, got ${e===null?"null":typeof e}`);
        return new w({
            values: Le(e, w.normalizeUnit),
            loc: S.fromObject(t),
            conversionAccuracy: t.conversionAccuracy,
            matrix: t.matrix
        })
    }
    static fromDurationLike(e) {
        if (Y(e)) return w.fromMillis(e);
        if (w.isDuration(e)) return e;
        if (typeof e == "object") return w.fromObject(e);
        throw new I(`Unknown duration argument ${e} of type ${typeof e}`)
    }
    static fromISO(e, t) {
        const [r] = Ws(e);
        return r ? w.fromObject(r, t) : w.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`)
    }
    static fromISOTime(e, t) {
        const [r] = Zs(e);
        return r ? w.fromObject(r, t) : w.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`)
    }
    static invalid(e, t = null) {
        if (!e) throw new I("need to specify a reason the Duration is invalid");
        const r = e instanceof L ? e : new L(e, t);
        if (v.throwOnInvalid) throw new mr(r);
        return new w({
            invalid: r
        })
    }
    static normalizeUnit(e) {
        const t = {
            year: "years",
            years: "years",
            quarter: "quarters",
            quarters: "quarters",
            month: "months",
            months: "months",
            week: "weeks",
            weeks: "weeks",
            day: "days",
            days: "days",
            hour: "hours",
            hours: "hours",
            minute: "minutes",
            minutes: "minutes",
            second: "seconds",
            seconds: "seconds",
            millisecond: "milliseconds",
            milliseconds: "milliseconds"
        }[e && e.toLowerCase()];
        if (!t) throw new Gt(e);
        return t
    }
    static isDuration(e) {
        return e && e.isLuxonDuration || !1
    }
    get locale() {
        return this.isValid ? this.loc.locale : null
    }
    get numberingSystem() {
        return this.isValid ? this.loc.numberingSystem : null
    }
    toFormat(e, t = {}) {
        const r = x(y({}, t), {
            floor: t.round !== !1 && t.floor !== !1
        });
        return this.isValid ? E.create(this.loc, r).formatDurationFromString(this, e) : Lt
    }
    toHuman(e = {}) {
        if (!this.isValid) return Lt;
        const t = _.map(r => {
            const s = this.values[r];
            return m(s) ? null : this.loc.numberFormatter(x(y({
                style: "unit",
                unitDisplay: "long"
            }, e), {
                unit: r.slice(0, -1)
            })).format(s)
        }).filter(r => r);
        return this.loc.listFormatter(y({
            type: "conjunction",
            style: e.listStyle || "narrow"
        }, e)).format(t)
    }
    toObject() {
        return this.isValid ? y({}, this.values) : {}
    }
    toISO() {
        if (!this.isValid) return null;
        let e = "P";
        return this.years !== 0 && (e += this.years + "Y"), (this.months !== 0 || this.quarters !== 0) && (e += this.months + this.quarters * 3 + "M"), this.weeks !== 0 && (e += this.weeks + "W"), this.days !== 0 && (e += this.days + "D"), (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0) && (e += "T"), this.hours !== 0 && (e += this.hours + "H"), this.minutes !== 0 && (e += this.minutes + "M"), (this.seconds !== 0 || this.milliseconds !== 0) && (e += at(this.seconds + this.milliseconds / 1e3, 3) + "S"), e === "P" && (e += "T0S"), e
    }
    toISOTime(e = {}) {
        if (!this.isValid) return null;
        const t = this.toMillis();
        return t < 0 || t >= 864e5 ? null : (e = x(y({
            suppressMilliseconds: !1,
            suppressSeconds: !1,
            includePrefix: !1,
            format: "extended"
        }, e), {
            includeOffset: !1
        }), h.fromMillis(t, {
            zone: "UTC"
        }).toISOTime(e))
    }
    toJSON() {
        return this.toISO()
    }
    toString() {
        return this.toISO()
    }[Symbol.for("nodejs.util.inspect.custom")]() {
        return this.isValid ? `Duration { values: ${JSON.stringify(this.values)} }` : `Duration { Invalid, reason: ${this.invalidReason} }`
    }
    toMillis() {
        return this.isValid ? $n(this.matrix, this.values) : NaN
    }
    valueOf() {
        return this.toMillis()
    }
    plus(e) {
        if (!this.isValid) return this;
        const t = w.fromDurationLike(e),
            r = {};
        for (const s of _)(re(t.values, s) || re(this.values, s)) && (r[s] = t.get(s) + this.get(s));
        return R(this, {
            values: r
        }, !0)
    }
    minus(e) {
        if (!this.isValid) return this;
        const t = w.fromDurationLike(e);
        return this.plus(t.negate())
    }
    mapUnits(e) {
        if (!this.isValid) return this;
        const t = {};
        for (const r of Object.keys(this.values)) t[r] = pn(e(this.values[r], r));
        return R(this, {
            values: t
        }, !0)
    }
    get(e) {
        return this[w.normalizeUnit(e)]
    }
    set(e) {
        if (!this.isValid) return this;
        const t = y(y({}, this.values), Le(e, w.normalizeUnit));
        return R(this, {
            values: t
        })
    }
    reconfigure({
        locale: e,
        numberingSystem: t,
        conversionAccuracy: r,
        matrix: s
    } = {}) {
        const a = {
            loc: this.loc.clone({
                locale: e,
                numberingSystem: t
            }),
            matrix: s,
            conversionAccuracy: r
        };
        return R(this, a)
    }
    as(e) {
        return this.isValid ? this.shiftTo(e).get(e) : NaN
    }
    normalize() {
        if (!this.isValid) return this;
        const e = this.toObject();
        return Zt(this.matrix, e), R(this, {
            values: e
        }, !0)
    }
    rescale() {
        if (!this.isValid) return this;
        const e = Ys(this.normalize().shiftToAll().toObject());
        return R(this, {
            values: e
        }, !0)
    }
    shiftTo(...e) {
        if (!this.isValid) return this;
        if (e.length === 0) return this;
        e = e.map(a => w.normalizeUnit(a));
        const t = {},
            r = {},
            s = this.toObject();
        let i;
        for (const a of _)
            if (e.indexOf(a) >= 0) {
                i = a;
                let o = 0;
                for (const l in r) o += this.matrix[l][a] * r[l], r[l] = 0;
                Y(s[a]) && (o += s[a]);
                const u = Math.trunc(o);
                t[a] = u, r[a] = (o * 1e3 - u * 1e3) / 1e3
            } else Y(s[a]) && (r[a] = s[a]);
        for (const a in r) r[a] !== 0 && (t[i] += a === i ? r[a] : r[a] / this.matrix[i][a]);
        return Zt(this.matrix, t), R(this, {
            values: t
        }, !0)
    }
    shiftToAll() {
        return this.isValid ? this.shiftTo("years", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds") : this
    }
    negate() {
        if (!this.isValid) return this;
        const e = {};
        for (const t of Object.keys(this.values)) e[t] = this.values[t] === 0 ? 0 : -this.values[t];
        return R(this, {
            values: e
        }, !0)
    }
    get years() {
        return this.isValid ? this.values.years || 0 : NaN
    }
    get quarters() {
        return this.isValid ? this.values.quarters || 0 : NaN
    }
    get months() {
        return this.isValid ? this.values.months || 0 : NaN
    }
    get weeks() {
        return this.isValid ? this.values.weeks || 0 : NaN
    }
    get days() {
        return this.isValid ? this.values.days || 0 : NaN
    }
    get hours() {
        return this.isValid ? this.values.hours || 0 : NaN
    }
    get minutes() {
        return this.isValid ? this.values.minutes || 0 : NaN
    }
    get seconds() {
        return this.isValid ? this.values.seconds || 0 : NaN
    }
    get milliseconds() {
        return this.isValid ? this.values.milliseconds || 0 : NaN
    }
    get isValid() {
        return this.invalid === null
    }
    get invalidReason() {
        return this.invalid ? this.invalid.reason : null
    }
    get invalidExplanation() {
        return this.invalid ? this.invalid.explanation : null
    }
    equals(e) {
        if (!this.isValid || !e.isValid || !this.loc.equals(e.loc)) return !1;

        function t(r, s) {
            return r === void 0 || r === 0 ? s === void 0 || s === 0 : r === s
        }
        for (const r of _)
            if (!t(this.values[r], e.values[r])) return !1;
        return !0
    }
}
const Q = "Invalid Interval";

function Ps(n, e) {
    return !n || !n.isValid ? p.invalid("missing or invalid start") : !e || !e.isValid ? p.invalid("missing or invalid end") : e < n ? p.invalid("end before start", `The end of an interval must be after its start, but you had start=${n.toISO()} and end=${e.toISO()}`) : null
}
class p {
    constructor(e) {
        this.s = e.start, this.e = e.end, this.invalid = e.invalid || null, this.isLuxonInterval = !0
    }
    static invalid(e, t = null) {
        if (!e) throw new I("need to specify a reason the Interval is invalid");
        const r = e instanceof L ? e : new L(e, t);
        if (v.throwOnInvalid) throw new hr(r);
        return new p({
            invalid: r
        })
    }
    static fromDateTimes(e, t) {
        const r = de(e),
            s = de(t),
            i = Ps(r, s);
        return i == null ? new p({
            start: r,
            end: s
        }) : i
    }
    static after(e, t) {
        const r = w.fromDurationLike(t),
            s = de(e);
        return p.fromDateTimes(s, s.plus(r))
    }
    static before(e, t) {
        const r = w.fromDurationLike(t),
            s = de(e);
        return p.fromDateTimes(s.minus(r), s)
    }
    static fromISO(e, t) {
        const [r, s] = (e || "").split("/", 2);
        if (r && s) {
            let i, a;
            try {
                i = h.fromISO(r, t), a = i.isValid
            } catch (l) {
                a = !1
            }
            let o, u;
            try {
                o = h.fromISO(s, t), u = o.isValid
            } catch (l) {
                u = !1
            }
            if (a && u) return p.fromDateTimes(i, o);
            if (a) {
                const l = w.fromISO(s, t);
                if (l.isValid) return p.after(i, l)
            } else if (u) {
                const l = w.fromISO(r, t);
                if (l.isValid) return p.before(o, l)
            }
        }
        return p.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`)
    }
    static isInterval(e) {
        return e && e.isLuxonInterval || !1
    }
    get start() {
        return this.isValid ? this.s : null
    }
    get end() {
        return this.isValid ? this.e : null
    }
    get isValid() {
        return this.invalidReason === null
    }
    get invalidReason() {
        return this.invalid ? this.invalid.reason : null
    }
    get invalidExplanation() {
        return this.invalid ? this.invalid.explanation : null
    }
    length(e = "milliseconds") {
        return this.isValid ? this.toDuration(e).get(e) : NaN
    }
    count(e = "milliseconds", t) {
        if (!this.isValid) return NaN;
        const r = this.start.startOf(e, t);
        let s;
        return t != null && t.useLocaleWeeks ? s = this.end.reconfigure({
            locale: r.locale
        }) : s = this.end, s = s.startOf(e, t), Math.floor(s.diff(r, e).get(e)) + (s.valueOf() !== this.end.valueOf())
    }
    hasSame(e) {
        return this.isValid ? this.isEmpty() || this.e.minus(1).hasSame(this.s, e) : !1
    }
    isEmpty() {
        return this.s.valueOf() === this.e.valueOf()
    }
    isAfter(e) {
        return this.isValid ? this.s > e : !1
    }
    isBefore(e) {
        return this.isValid ? this.e <= e : !1
    }
    contains(e) {
        return this.isValid ? this.s <= e && this.e > e : !1
    }
    set({
        start: e,
        end: t
    } = {}) {
        return this.isValid ? p.fromDateTimes(e || this.s, t || this.e) : this
    }
    splitAt(...e) {
        if (!this.isValid) return [];
        const t = e.map(de).filter(a => this.contains(a)).sort((a, o) => a.toMillis() - o.toMillis()),
            r = [];
        let {
            s
        } = this, i = 0;
        for (; s < this.e;) {
            const a = t[i] || this.e,
                o = +a > +this.e ? this.e : a;
            r.push(p.fromDateTimes(s, o)), s = o, i += 1
        }
        return r
    }
    splitBy(e) {
        const t = w.fromDurationLike(e);
        if (!this.isValid || !t.isValid || t.as("milliseconds") === 0) return [];
        let {
            s: r
        } = this, s = 1, i;
        const a = [];
        for (; r < this.e;) {
            const o = this.start.plus(t.mapUnits(u => u * s));
            i = +o > +this.e ? this.e : o, a.push(p.fromDateTimes(r, i)), r = i, s += 1
        }
        return a
    }
    divideEqually(e) {
        return this.isValid ? this.splitBy(this.length() / e).slice(0, e) : []
    }
    overlaps(e) {
        return this.e > e.s && this.s < e.e
    }
    abutsStart(e) {
        return this.isValid ? +this.e == +e.s : !1
    }
    abutsEnd(e) {
        return this.isValid ? +e.e == +this.s : !1
    }
    engulfs(e) {
        return this.isValid ? this.s <= e.s && this.e >= e.e : !1
    }
    equals(e) {
        return !this.isValid || !e.isValid ? !1 : this.s.equals(e.s) && this.e.equals(e.e)
    }
    intersection(e) {
        if (!this.isValid) return this;
        const t = this.s > e.s ? this.s : e.s,
            r = this.e < e.e ? this.e : e.e;
        return t >= r ? null : p.fromDateTimes(t, r)
    }
    union(e) {
        if (!this.isValid) return this;
        const t = this.s < e.s ? this.s : e.s,
            r = this.e > e.e ? this.e : e.e;
        return p.fromDateTimes(t, r)
    }
    static merge(e) {
        const [t, r] = e.sort((s, i) => s.s - i.s).reduce(([s, i], a) => i ? i.overlaps(a) || i.abutsStart(a) ? [s, i.union(a)] : [s.concat([i]), a] : [s, a], [
            [], null
        ]);
        return r && t.push(r), t
    }
    static xor(e) {
        let t = null,
            r = 0;
        const s = [],
            i = e.map(u => [{
                time: u.s,
                type: "s"
            }, {
                time: u.e,
                type: "e"
            }]),
            a = Array.prototype.concat(...i),
            o = a.sort((u, l) => u.time - l.time);
        for (const u of o) r += u.type === "s" ? 1 : -1, r === 1 ? t = u.time : (t && +t != +u.time && s.push(p.fromDateTimes(t, u.time)), t = null);
        return p.merge(s)
    }
    difference(...e) {
        return p.xor([this].concat(e)).map(t => this.intersection(t)).filter(t => t && !t.isEmpty())
    }
    toString() {
        return this.isValid ? `[${this.s.toISO()} – ${this.e.toISO()})` : Q
    }[Symbol.for("nodejs.util.inspect.custom")]() {
        return this.isValid ? `Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }` : `Interval { Invalid, reason: ${this.invalidReason} }`
    }
    toLocaleString(e = Ve, t = {}) {
        return this.isValid ? E.create(this.s.loc.clone(t), e).formatInterval(this) : Q
    }
    toISO(e) {
        return this.isValid ? `${this.s.toISO(e)}/${this.e.toISO(e)}` : Q
    }
    toISODate() {
        return this.isValid ? `${this.s.toISODate()}/${this.e.toISODate()}` : Q
    }
    toISOTime(e) {
        return this.isValid ? `${this.s.toISOTime(e)}/${this.e.toISOTime(e)}` : Q
    }
    toFormat(e, {
        separator: t = " – "
    } = {}) {
        return this.isValid ? `${this.s.toFormat(e)}${t}${this.e.toFormat(e)}` : Q
    }
    toDuration(e, t) {
        return this.isValid ? this.e.diff(this.s, e, t) : w.invalid(this.invalidReason)
    }
    mapEndpoints(e) {
        return p.fromDateTimes(e(this.s), e(this.e))
    }
}
class Ne {
    static hasDST(e = v.defaultZone) {
        const t = h.now().setZone(e).set({
            month: 12
        });
        return !e.isUniversal && t.offset !== t.set({
            month: 6
        }).offset
    }
    static isValidIANAZone(e) {
        return U.isValidZone(e)
    }
    static normalizeZone(e) {
        return H(e, v.defaultZone)
    }
    static getStartOfWeek({
        locale: e = null,
        locObj: t = null
    } = {}) {
        return (t || S.create(e)).getStartOfWeek()
    }
    static getMinimumDaysInFirstWeek({
        locale: e = null,
        locObj: t = null
    } = {}) {
        return (t || S.create(e)).getMinDaysInFirstWeek()
    }
    static getWeekendWeekdays({
        locale: e = null,
        locObj: t = null
    } = {}) {
        return (t || S.create(e)).getWeekendDays().slice()
    }
    static months(e = "long", {
        locale: t = null,
        numberingSystem: r = null,
        locObj: s = null,
        outputCalendar: i = "gregory"
    } = {}) {
        return (s || S.create(t, r, i)).months(e)
    }
    static monthsFormat(e = "long", {
        locale: t = null,
        numberingSystem: r = null,
        locObj: s = null,
        outputCalendar: i = "gregory"
    } = {}) {
        return (s || S.create(t, r, i)).months(e, !0)
    }
    static weekdays(e = "long", {
        locale: t = null,
        numberingSystem: r = null,
        locObj: s = null
    } = {}) {
        return (s || S.create(t, r, null)).weekdays(e)
    }
    static weekdaysFormat(e = "long", {
        locale: t = null,
        numberingSystem: r = null,
        locObj: s = null
    } = {}) {
        return (s || S.create(t, r, null)).weekdays(e, !0)
    }
    static meridiems({
        locale: e = null
    } = {}) {
        return S.create(e).meridiems()
    }
    static eras(e = "short", {
        locale: t = null
    } = {}) {
        return S.create(t, null, "gregory").eras(e)
    }
    static features() {
        return {
            relative: Tn(),
            localeWeek: Sn()
        }
    }
}

function $t(n, e) {
    const t = s => s.toUTC(0, {
            keepLocalTime: !0
        }).startOf("day").valueOf(),
        r = t(e) - t(n);
    return Math.floor(w.fromMillis(r).as("days"))
}

function Gs(n, e, t) {
    const r = [
            ["years", (u, l) => l.year - u.year],
            ["quarters", (u, l) => l.quarter - u.quarter + (l.year - u.year) * 4],
            ["months", (u, l) => l.month - u.month + (l.year - u.year) * 12],
            ["weeks", (u, l) => {
                const d = $t(u, l);
                return (d - d % 7) / 7
            }],
            ["days", $t]
        ],
        s = {},
        i = n;
    let a, o;
    for (const [u, l] of r) t.indexOf(u) >= 0 && (a = u, s[u] = l(n, e), o = i.plus(s), o > e ? (s[u]--, n = i.plus(s), n > e && (o = n, s[u]--, n = i.plus(s))) : n = o);
    return [n, s, o, a]
}

function _s(n, e, t, r) {
    let [s, i, a, o] = Gs(n, e, t);
    const u = e - s,
        l = t.filter(g => ["hours", "minutes", "seconds", "milliseconds"].indexOf(g) >= 0);
    l.length === 0 && (a < e && (a = s.plus({
        [o]: 1
    })), a !== s && (i[o] = (i[o] || 0) + u / (a - s)));
    const d = w.fromObject(i, r);
    return l.length > 0 ? w.fromMillis(u, r).shiftTo(...l).plus(d) : d
}
const Js = "missing Intl.DateTimeFormat.formatToParts support";

function T(n, e = t => t) {
    return {
        regex: n,
        deser: ([t]) => e($r(t))
    }
}
const Bs = " ",
    An = `[ ${Bs}]`,
    Un = new RegExp(An, "g");

function js(n) {
    return n.replace(/\./g, "\\.?").replace(Un, An)
}

function At(n) {
    return n.replace(/\./g, "").replace(Un, " ").toLowerCase()
}

function W(n, e) {
    return n === null ? null : {
        regex: RegExp(n.map(js).join("|")),
        deser: ([t]) => n.findIndex(r => At(t) === At(r)) + e
    }
}

function Ut(n, e) {
    return {
        regex: n,
        deser: ([, t, r]) => Ue(t, r),
        groups: e
    }
}

function Ie(n) {
    return {
        regex: n,
        deser: ([e]) => e
    }
}

function Qs(n) {
    return n.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
}

function Ks(n, e) {
    const t = C(e),
        r = C(e, "{2}"),
        s = C(e, "{3}"),
        i = C(e, "{4}"),
        a = C(e, "{6}"),
        o = C(e, "{1,2}"),
        u = C(e, "{1,3}"),
        l = C(e, "{1,6}"),
        d = C(e, "{1,9}"),
        g = C(e, "{2,4}"),
        k = C(e, "{4,6}"),
        f = A => ({
            regex: RegExp(Qs(A.val)),
            deser: ([B]) => B,
            literal: !0
        }),
        $ = (A => {
            if (n.literal) return f(A);
            switch (A.val) {
                case "G":
                    return W(e.eras("short"), 0);
                case "GG":
                    return W(e.eras("long"), 0);
                case "y":
                    return T(l);
                case "yy":
                    return T(g, tt);
                case "yyyy":
                    return T(i);
                case "yyyyy":
                    return T(k);
                case "yyyyyy":
                    return T(a);
                case "M":
                    return T(o);
                case "MM":
                    return T(r);
                case "MMM":
                    return W(e.months("short", !0), 1);
                case "MMMM":
                    return W(e.months("long", !0), 1);
                case "L":
                    return T(o);
                case "LL":
                    return T(r);
                case "LLL":
                    return W(e.months("short", !1), 1);
                case "LLLL":
                    return W(e.months("long", !1), 1);
                case "d":
                    return T(o);
                case "dd":
                    return T(r);
                case "o":
                    return T(u);
                case "ooo":
                    return T(s);
                case "HH":
                    return T(r);
                case "H":
                    return T(o);
                case "hh":
                    return T(r);
                case "h":
                    return T(o);
                case "mm":
                    return T(r);
                case "m":
                    return T(o);
                case "q":
                    return T(o);
                case "qq":
                    return T(r);
                case "s":
                    return T(o);
                case "ss":
                    return T(r);
                case "S":
                    return T(u);
                case "SSS":
                    return T(s);
                case "u":
                    return Ie(d);
                case "uu":
                    return Ie(o);
                case "uuu":
                    return T(t);
                case "a":
                    return W(e.meridiems(), 0);
                case "kkkk":
                    return T(i);
                case "kk":
                    return T(g, tt);
                case "W":
                    return T(o);
                case "WW":
                    return T(r);
                case "E":
                case "c":
                    return T(t);
                case "EEE":
                    return W(e.weekdays("short", !1), 1);
                case "EEEE":
                    return W(e.weekdays("long", !1), 1);
                case "ccc":
                    return W(e.weekdays("short", !0), 1);
                case "cccc":
                    return W(e.weekdays("long", !0), 1);
                case "Z":
                case "ZZ":
                    return Ut(new RegExp(`([+-]${o.source})(?::(${r.source}))?`), 2);
                case "ZZZ":
                    return Ut(new RegExp(`([+-]${o.source})(${r.source})?`), 2);
                case "z":
                    return Ie(/[a-z_+-/]{1,256}?/i);
                case " ":
                    return Ie(/[^\S\n\r]/);
                default:
                    return f(A)
            }
        })(n) || {
            invalidReason: Js
        };
    return $.token = n, $
}
const Xs = {
    year: {
        "2-digit": "yy",
        numeric: "yyyyy"
    },
    month: {
        numeric: "M",
        "2-digit": "MM",
        short: "MMM",
        long: "MMMM"
    },
    day: {
        numeric: "d",
        "2-digit": "dd"
    },
    weekday: {
        short: "EEE",
        long: "EEEE"
    },
    dayperiod: "a",
    dayPeriod: "a",
    hour12: {
        numeric: "h",
        "2-digit": "hh"
    },
    hour24: {
        numeric: "H",
        "2-digit": "HH"
    },
    minute: {
        numeric: "m",
        "2-digit": "mm"
    },
    second: {
        numeric: "s",
        "2-digit": "ss"
    },
    timeZoneName: {
        long: "ZZZZZ",
        short: "ZZZ"
    }
};

function ei(n, e, t) {
    const {
        type: r,
        value: s
    } = n;
    if (r === "literal") {
        const u = /^\s+$/.test(s);
        return {
            literal: !u,
            val: u ? " " : s
        }
    }
    const i = e[r];
    let a = r;
    r === "hour" && (e.hour12 != null ? a = e.hour12 ? "hour12" : "hour24" : e.hourCycle != null ? e.hourCycle === "h11" || e.hourCycle === "h12" ? a = "hour12" : a = "hour24" : a = t.hour12 ? "hour12" : "hour24");
    let o = Xs[a];
    if (typeof o == "object" && (o = o[i]), o) return {
        literal: !1,
        val: o
    }
}

function ti(n) {
    return [`^${n.map(t=>t.regex).reduce((t,r)=>`${t}(${r.source})`,"")}$`, n]
}

function ni(n, e, t) {
    const r = n.match(e);
    if (r) {
        const s = {};
        let i = 1;
        for (const a in t)
            if (re(t, a)) {
                const o = t[a],
                    u = o.groups ? o.groups + 1 : 1;
                !o.literal && o.token && (s[o.token.val[0]] = o.deser(r.slice(i, i + u))), i += u
            }
        return [r, s]
    } else return [r, {}]
}

function ri(n) {
    const e = i => {
        switch (i) {
            case "S":
                return "millisecond";
            case "s":
                return "second";
            case "m":
                return "minute";
            case "h":
            case "H":
                return "hour";
            case "d":
                return "day";
            case "o":
                return "ordinal";
            case "L":
            case "M":
                return "month";
            case "y":
                return "year";
            case "E":
            case "c":
                return "weekday";
            case "W":
                return "weekNumber";
            case "k":
                return "weekYear";
            case "q":
                return "quarter";
            default:
                return null
        }
    };
    let t = null,
        r;
    return m(n.z) || (t = U.create(n.z)), m(n.Z) || (t || (t = new M(n.Z)), r = n.Z), m(n.q) || (n.M = (n.q - 1) * 3 + 1), m(n.h) || (n.h < 12 && n.a === 1 ? n.h += 12 : n.h === 12 && n.a === 0 && (n.h = 0)), n.G === 0 && n.y && (n.y = -n.y), m(n.u) || (n.S = it(n.u)), [Object.keys(n).reduce((i, a) => {
        const o = e(a);
        return o && (i[o] = n[a]), i
    }, {}), t, r]
}
let Pe = null;

function si() {
    return Pe || (Pe = h.fromMillis(1555555555555)), Pe
}

function ii(n, e) {
    if (n.literal) return n;
    const t = E.macroTokenToFormatOpts(n.val),
        r = Hn(t, e);
    return r == null || r.includes(void 0) ? n : r
}

function zn(n, e) {
    return Array.prototype.concat(...n.map(t => ii(t, e)))
}
class Rn {
    constructor(e, t) {
        if (this.locale = e, this.format = t, this.tokens = zn(E.parseFormat(t), e), this.units = this.tokens.map(r => Ks(r, e)), this.disqualifyingUnit = this.units.find(r => r.invalidReason), !this.disqualifyingUnit) {
            const [r, s] = ti(this.units);
            this.regex = RegExp(r, "i"), this.handlers = s
        }
    }
    explainFromTokens(e) {
        if (this.isValid) {
            const [t, r] = ni(e, this.regex, this.handlers), [s, i, a] = r ? ri(r) : [null, null, void 0];
            if (re(r, "a") && re(r, "H")) throw new ee("Can't include meridiem when specifying 24-hour format");
            return {
                input: e,
                tokens: this.tokens,
                regex: this.regex,
                rawMatches: t,
                matches: r,
                result: s,
                zone: i,
                specificOffset: a
            }
        } else return {
            input: e,
            tokens: this.tokens,
            invalidReason: this.invalidReason
        }
    }
    get isValid() {
        return !this.disqualifyingUnit
    }
    get invalidReason() {
        return this.disqualifyingUnit ? this.disqualifyingUnit.invalidReason : null
    }
}

function qn(n, e, t) {
    return new Rn(n, t).explainFromTokens(e)
}

function ai(n, e, t) {
    const {
        result: r,
        zone: s,
        specificOffset: i,
        invalidReason: a
    } = qn(n, e, t);
    return [r, s, i, a]
}

function Hn(n, e) {
    if (!n) return null;
    const r = E.create(e, n).dtFormatter(si()),
        s = r.formatToParts(),
        i = r.resolvedOptions();
    return s.map(a => ei(a, n, i))
}
const Ge = "Invalid DateTime",
    oi = 864e13;

function me(n) {
    return new L("unsupported zone", `the zone "${n.name}" is not supported`)
}

function _e(n) {
    return n.weekData === null && (n.weekData = Ce(n.c)), n.weekData
}

function Je(n) {
    return n.localWeekData === null && (n.localWeekData = Ce(n.c, n.loc.getMinDaysInFirstWeek(), n.loc.getStartOfWeek())), n.localWeekData
}

function G(n, e) {
    const t = {
        ts: n.ts,
        zone: n.zone,
        c: n.c,
        o: n.o,
        loc: n.loc,
        invalid: n.invalid
    };
    return new h(x(y(y({}, t), e), {
        old: t
    }))
}

function Yn(n, e, t) {
    let r = n - e * 60 * 1e3;
    const s = t.offset(r);
    if (e === s) return [r, e];
    r -= (s - e) * 60 * 1e3;
    const i = t.offset(r);
    return s === i ? [r, s] : [n - Math.min(s, i) * 60 * 1e3, Math.max(s, i)]
}

function Ee(n, e) {
    n += e * 60 * 1e3;
    const t = new Date(n);
    return {
        year: t.getUTCFullYear(),
        month: t.getUTCMonth() + 1,
        day: t.getUTCDate(),
        hour: t.getUTCHours(),
        minute: t.getUTCMinutes(),
        second: t.getUTCSeconds(),
        millisecond: t.getUTCMilliseconds()
    }
}

function xe(n, e, t) {
    return Yn(Ae(n), e, t)
}

function zt(n, e) {
    const t = n.o,
        r = n.c.year + Math.trunc(e.years),
        s = n.c.month + Math.trunc(e.months) + Math.trunc(e.quarters) * 3,
        i = x(y({}, n.c), {
            year: r,
            month: s,
            day: Math.min(n.c.day, We(r, s)) + Math.trunc(e.days) + Math.trunc(e.weeks) * 7
        }),
        a = w.fromObject({
            years: e.years - Math.trunc(e.years),
            quarters: e.quarters - Math.trunc(e.quarters),
            months: e.months - Math.trunc(e.months),
            weeks: e.weeks - Math.trunc(e.weeks),
            days: e.days - Math.trunc(e.days),
            hours: e.hours,
            minutes: e.minutes,
            seconds: e.seconds,
            milliseconds: e.milliseconds
        }).as("milliseconds"),
        o = Ae(i);
    let [u, l] = Yn(o, t, n.zone);
    return a !== 0 && (u += a, l = n.zone.offset(u)), {
        ts: u,
        o: l
    }
}

function K(n, e, t, r, s, i) {
    const {
        setZone: a,
        zone: o
    } = t;
    if (n && Object.keys(n).length !== 0 || e) {
        const u = e || o,
            l = h.fromObject(n, x(y({}, t), {
                zone: u,
                specificOffset: i
            }));
        return a ? l : l.setZone(o)
    } else return h.invalid(new L("unparsable", `the input "${s}" can't be parsed as ${r}`))
}

function Me(n, e, t = !0) {
    return n.isValid ? E.create(S.create("en-US"), {
        allowZ: t,
        forceSimple: !0
    }).formatDateTimeFromString(n, e) : null
}

function Be(n, e) {
    const t = n.c.year > 9999 || n.c.year < 0;
    let r = "";
    return t && n.c.year >= 0 && (r += "+"), r += N(n.c.year, t ? 6 : 4), e ? (r += "-", r += N(n.c.month), r += "-", r += N(n.c.day)) : (r += N(n.c.month), r += N(n.c.day)), r
}

function Rt(n, e, t, r, s, i) {
    let a = N(n.c.hour);
    return e ? (a += ":", a += N(n.c.minute), (n.c.millisecond !== 0 || n.c.second !== 0 || !t) && (a += ":")) : a += N(n.c.minute), (n.c.millisecond !== 0 || n.c.second !== 0 || !t) && (a += N(n.c.second), (n.c.millisecond !== 0 || !r) && (a += ".", a += N(n.c.millisecond, 3))), s && (n.isOffsetFixed && n.offset === 0 && !i ? a += "Z" : n.o < 0 ? (a += "-", a += N(Math.trunc(-n.o / 60)), a += ":", a += N(Math.trunc(-n.o % 60))) : (a += "+", a += N(Math.trunc(n.o / 60)), a += ":", a += N(Math.trunc(n.o % 60)))), i && (a += "[" + n.zone.ianaName + "]"), a
}
const Pn = {
        month: 1,
        day: 1,
        hour: 0,
        minute: 0,
        second: 0,
        millisecond: 0
    },
    ui = {
        weekNumber: 1,
        weekday: 1,
        hour: 0,
        minute: 0,
        second: 0,
        millisecond: 0
    },
    li = {
        ordinal: 1,
        hour: 0,
        minute: 0,
        second: 0,
        millisecond: 0
    },
    Gn = ["year", "month", "day", "hour", "minute", "second", "millisecond"],
    ci = ["weekYear", "weekNumber", "weekday", "hour", "minute", "second", "millisecond"],
    fi = ["year", "ordinal", "hour", "minute", "second", "millisecond"];

function di(n) {
    const e = {
        year: "year",
        years: "year",
        month: "month",
        months: "month",
        day: "day",
        days: "day",
        hour: "hour",
        hours: "hour",
        minute: "minute",
        minutes: "minute",
        quarter: "quarter",
        quarters: "quarter",
        second: "second",
        seconds: "second",
        millisecond: "millisecond",
        milliseconds: "millisecond",
        weekday: "weekday",
        weekdays: "weekday",
        weeknumber: "weekNumber",
        weeksnumber: "weekNumber",
        weeknumbers: "weekNumber",
        weekyear: "weekYear",
        weekyears: "weekYear",
        ordinal: "ordinal"
    }[n.toLowerCase()];
    if (!e) throw new Gt(n);
    return e
}

function qt(n) {
    switch (n.toLowerCase()) {
        case "localweekday":
        case "localweekdays":
            return "localWeekday";
        case "localweeknumber":
        case "localweeknumbers":
            return "localWeekNumber";
        case "localweekyear":
        case "localweekyears":
            return "localWeekYear";
        default:
            return di(n)
    }
}

function hi(n) {
    return Fe[n] || (be === void 0 && (be = v.now()), Fe[n] = n.offset(be)), Fe[n]
}

function Ht(n, e) {
    const t = H(e.zone, v.defaultZone);
    if (!t.isValid) return h.invalid(me(t));
    const r = S.fromObject(e);
    let s, i;
    if (m(n.year)) s = v.now();
    else {
        for (const u of Gn) m(n[u]) && (n[u] = Pn[u]);
        const a = wn(n) || kn(n);
        if (a) return h.invalid(a);
        const o = hi(t);
        [s, i] = xe(n, o, t)
    }
    return new h({
        ts: s,
        zone: t,
        loc: r,
        o: i
    })
}

function Yt(n, e, t) {
    const r = m(t.round) ? !0 : t.round,
        s = (a, o) => (a = at(a, r || t.calendary ? 0 : 2, !0), e.loc.clone(t).relFormatter(t).format(a, o)),
        i = a => t.calendary ? e.hasSame(n, a) ? 0 : e.startOf(a).diff(n.startOf(a), a).get(a) : e.diff(n, a).get(a);
    if (t.unit) return s(i(t.unit), t.unit);
    for (const a of t.units) {
        const o = i(a);
        if (Math.abs(o) >= 1) return s(o, a)
    }
    return s(n > e ? -0 : 0, t.units[t.units.length - 1])
}

function Pt(n) {
    let e = {},
        t;
    return n.length > 0 && typeof n[n.length - 1] == "object" ? (e = n[n.length - 1], t = Array.from(n).slice(0, n.length - 1)) : t = Array.from(n), [e, t]
}
let be, Fe = {};
class h {
    constructor(e) {
        const t = e.zone || v.defaultZone;
        let r = e.invalid || (Number.isNaN(e.ts) ? new L("invalid input") : null) || (t.isValid ? null : me(t));
        this.ts = m(e.ts) ? v.now() : e.ts;
        let s = null,
            i = null;
        if (!r)
            if (e.old && e.old.ts === this.ts && e.old.zone.equals(t))[s, i] = [e.old.c, e.old.o];
            else {
                const o = Y(e.o) && !e.old ? e.o : t.offset(this.ts);
                s = Ee(this.ts, o), r = Number.isNaN(s.year) ? new L("invalid input") : null, s = r ? null : s, i = r ? null : o
            }
        this._zone = t, this.loc = e.loc || S.create(), this.invalid = r, this.weekData = null, this.localWeekData = null, this.c = s, this.o = i, this.isLuxonDateTime = !0
    }
    static now() {
        return new h({})
    }
    static local() {
        const [e, t] = Pt(arguments), [r, s, i, a, o, u, l] = t;
        return Ht({
            year: r,
            month: s,
            day: i,
            hour: a,
            minute: o,
            second: u,
            millisecond: l
        }, e)
    }
    static utc() {
        const [e, t] = Pt(arguments), [r, s, i, a, o, u, l] = t;
        return e.zone = M.utcInstance, Ht({
            year: r,
            month: s,
            day: i,
            hour: a,
            minute: o,
            second: u,
            millisecond: l
        }, e)
    }
    static fromJSDate(e, t = {}) {
        const r = qr(e) ? e.valueOf() : NaN;
        if (Number.isNaN(r)) return h.invalid("invalid input");
        const s = H(t.zone, v.defaultZone);
        return s.isValid ? new h({
            ts: r,
            zone: s,
            loc: S.fromObject(t)
        }) : h.invalid(me(s))
    }
    static fromMillis(e, t = {}) {
        if (Y(e)) return e < -864e13 || e > oi ? h.invalid("Timestamp out of range") : new h({
            ts: e,
            zone: H(t.zone, v.defaultZone),
            loc: S.fromObject(t)
        });
        throw new I(`fromMillis requires a numerical input, but received a ${typeof e} with value ${e}`)
    }
    static fromSeconds(e, t = {}) {
        if (Y(e)) return new h({
            ts: e * 1e3,
            zone: H(t.zone, v.defaultZone),
            loc: S.fromObject(t)
        });
        throw new I("fromSeconds requires a numerical input")
    }
    static fromObject(e, t = {}) {
        e = e || {};
        const r = H(t.zone, v.defaultZone);
        if (!r.isValid) return h.invalid(me(r));
        const s = S.fromObject(t),
            i = Le(e, qt),
            {
                minDaysInFirstWeek: a,
                startOfWeek: o
            } = bt(i, s),
            u = v.now(),
            l = m(t.specificOffset) ? r.offset(u) : t.specificOffset,
            d = !m(i.ordinal),
            g = !m(i.year),
            k = !m(i.month) || !m(i.day),
            f = g || k,
            O = i.weekYear || i.weekNumber;
        if ((f || d) && O) throw new ee("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
        if (k && d) throw new ee("Can't mix ordinal dates with month/day");
        const $ = O || i.weekday && !f;
        let A, B, ue = Ee(u, l);
        $ ? (A = ci, B = ui, ue = Ce(ue, a, o)) : d ? (A = fi, B = li, ue = Ye(ue)) : (A = Gn, B = Pn);
        let ct = !1;
        for (const ce of A) {
            const Qn = i[ce];
            m(Qn) ? ct ? i[ce] = B[ce] : i[ce] = ue[ce] : ct = !0
        }
        const _n = $ ? Ur(i, a, o) : d ? zr(i) : wn(i),
            ft = _n || kn(i);
        if (ft) return h.invalid(ft);
        const Jn = $ ? Dt(i, a, o) : d ? xt(i) : i,
            [Bn, jn] = xe(Jn, l, r),
            le = new h({
                ts: Bn,
                zone: r,
                o: jn,
                loc: s
            });
        return i.weekday && f && e.weekday !== le.weekday ? h.invalid("mismatched weekday", `you can't specify both a weekday of ${i.weekday} and a date of ${le.toISO()}`) : le.isValid ? le : h.invalid(le.invalid)
    }
    static fromISO(e, t = {}) {
        const [r, s] = Fs(e);
        return K(r, s, t, "ISO 8601", e)
    }
    static fromRFC2822(e, t = {}) {
        const [r, s] = Vs(e);
        return K(r, s, t, "RFC 2822", e)
    }
    static fromHTTP(e, t = {}) {
        const [r, s] = Cs(e);
        return K(r, s, t, "HTTP", t)
    }
    static fromFormat(e, t, r = {}) {
        if (m(e) || m(t)) throw new I("fromFormat requires an input string and a format");
        const {
            locale: s = null,
            numberingSystem: i = null
        } = r, a = S.fromOpts({
            locale: s,
            numberingSystem: i,
            defaultToEN: !0
        }), [o, u, l, d] = ai(a, e, t);
        return d ? h.invalid(d) : K(o, u, r, `format ${t}`, e, l)
    }
    static fromString(e, t, r = {}) {
        return h.fromFormat(e, t, r)
    }
    static fromSQL(e, t = {}) {
        const [r, s] = zs(e);
        return K(r, s, t, "SQL", e)
    }
    static invalid(e, t = null) {
        if (!e) throw new I("need to specify a reason the DateTime is invalid");
        const r = e instanceof L ? e : new L(e, t);
        if (v.throwOnInvalid) throw new dr(r);
        return new h({
            invalid: r
        })
    }
    static isDateTime(e) {
        return e && e.isLuxonDateTime || !1
    }
    static parseFormatForOpts(e, t = {}) {
        const r = Hn(e, S.fromObject(t));
        return r ? r.map(s => s ? s.val : null).join("") : null
    }
    static expandFormat(e, t = {}) {
        return zn(E.parseFormat(e), S.fromObject(t)).map(s => s.val).join("")
    }
    static resetCache() {
        be = void 0, Fe = {}
    }
    get(e) {
        return this[e]
    }
    get isValid() {
        return this.invalid === null
    }
    get invalidReason() {
        return this.invalid ? this.invalid.reason : null
    }
    get invalidExplanation() {
        return this.invalid ? this.invalid.explanation : null
    }
    get locale() {
        return this.isValid ? this.loc.locale : null
    }
    get numberingSystem() {
        return this.isValid ? this.loc.numberingSystem : null
    }
    get outputCalendar() {
        return this.isValid ? this.loc.outputCalendar : null
    }
    get zone() {
        return this._zone
    }
    get zoneName() {
        return this.isValid ? this.zone.name : null
    }
    get year() {
        return this.isValid ? this.c.year : NaN
    }
    get quarter() {
        return this.isValid ? Math.ceil(this.c.month / 3) : NaN
    }
    get month() {
        return this.isValid ? this.c.month : NaN
    }
    get day() {
        return this.isValid ? this.c.day : NaN
    }
    get hour() {
        return this.isValid ? this.c.hour : NaN
    }
    get minute() {
        return this.isValid ? this.c.minute : NaN
    }
    get second() {
        return this.isValid ? this.c.second : NaN
    }
    get millisecond() {
        return this.isValid ? this.c.millisecond : NaN
    }
    get weekYear() {
        return this.isValid ? _e(this).weekYear : NaN
    }
    get weekNumber() {
        return this.isValid ? _e(this).weekNumber : NaN
    }
    get weekday() {
        return this.isValid ? _e(this).weekday : NaN
    }
    get isWeekend() {
        return this.isValid && this.loc.getWeekendDays().includes(this.weekday)
    }
    get localWeekday() {
        return this.isValid ? Je(this).weekday : NaN
    }
    get localWeekNumber() {
        return this.isValid ? Je(this).weekNumber : NaN
    }
    get localWeekYear() {
        return this.isValid ? Je(this).weekYear : NaN
    }
    get ordinal() {
        return this.isValid ? Ye(this.c).ordinal : NaN
    }
    get monthShort() {
        return this.isValid ? Ne.months("short", {
            locObj: this.loc
        })[this.month - 1] : null
    }
    get monthLong() {
        return this.isValid ? Ne.months("long", {
            locObj: this.loc
        })[this.month - 1] : null
    }
    get weekdayShort() {
        return this.isValid ? Ne.weekdays("short", {
            locObj: this.loc
        })[this.weekday - 1] : null
    }
    get weekdayLong() {
        return this.isValid ? Ne.weekdays("long", {
            locObj: this.loc
        })[this.weekday - 1] : null
    }
    get offset() {
        return this.isValid ? +this.o : NaN
    }
    get offsetNameShort() {
        return this.isValid ? this.zone.offsetName(this.ts, {
            format: "short",
            locale: this.locale
        }) : null
    }
    get offsetNameLong() {
        return this.isValid ? this.zone.offsetName(this.ts, {
            format: "long",
            locale: this.locale
        }) : null
    }
    get isOffsetFixed() {
        return this.isValid ? this.zone.isUniversal : null
    }
    get isInDST() {
        return this.isOffsetFixed ? !1 : this.offset > this.set({
            month: 1,
            day: 1
        }).offset || this.offset > this.set({
            month: 5
        }).offset
    }
    getPossibleOffsets() {
        if (!this.isValid || this.isOffsetFixed) return [this];
        const e = 864e5,
            t = 6e4,
            r = Ae(this.c),
            s = this.zone.offset(r - e),
            i = this.zone.offset(r + e),
            a = this.zone.offset(r - s * t),
            o = this.zone.offset(r - i * t);
        if (a === o) return [this];
        const u = r - a * t,
            l = r - o * t,
            d = Ee(u, a),
            g = Ee(l, o);
        return d.hour === g.hour && d.minute === g.minute && d.second === g.second && d.millisecond === g.millisecond ? [G(this, {
            ts: u
        }), G(this, {
            ts: l
        })] : [this]
    }
    get isInLeapYear() {
        return ke(this.year)
    }
    get daysInMonth() {
        return We(this.year, this.month)
    }
    get daysInYear() {
        return this.isValid ? te(this.year) : NaN
    }
    get weeksInWeekYear() {
        return this.isValid ? ge(this.weekYear) : NaN
    }
    get weeksInLocalWeekYear() {
        return this.isValid ? ge(this.localWeekYear, this.loc.getMinDaysInFirstWeek(), this.loc.getStartOfWeek()) : NaN
    }
    resolvedLocaleOptions(e = {}) {
        const {
            locale: t,
            numberingSystem: r,
            calendar: s
        } = E.create(this.loc.clone(e), e).resolvedOptions(this);
        return {
            locale: t,
            numberingSystem: r,
            outputCalendar: s
        }
    }
    toUTC(e = 0, t = {}) {
        return this.setZone(M.instance(e), t)
    }
    toLocal() {
        return this.setZone(v.defaultZone)
    }
    setZone(e, {
        keepLocalTime: t = !1,
        keepCalendarTime: r = !1
    } = {}) {
        if (e = H(e, v.defaultZone), e.equals(this.zone)) return this;
        if (e.isValid) {
            let s = this.ts;
            if (t || r) {
                const i = e.offset(this.ts),
                    a = this.toObject();
                [s] = xe(a, i, e)
            }
            return G(this, {
                ts: s,
                zone: e
            })
        } else return h.invalid(me(e))
    }
    reconfigure({
        locale: e,
        numberingSystem: t,
        outputCalendar: r
    } = {}) {
        const s = this.loc.clone({
            locale: e,
            numberingSystem: t,
            outputCalendar: r
        });
        return G(this, {
            loc: s
        })
    }
    setLocale(e) {
        return this.reconfigure({
            locale: e
        })
    }
    set(e) {
        if (!this.isValid) return this;
        const t = Le(e, qt),
            {
                minDaysInFirstWeek: r,
                startOfWeek: s
            } = bt(t, this.loc),
            i = !m(t.weekYear) || !m(t.weekNumber) || !m(t.weekday),
            a = !m(t.ordinal),
            o = !m(t.year),
            u = !m(t.month) || !m(t.day),
            l = o || u,
            d = t.weekYear || t.weekNumber;
        if ((l || a) && d) throw new ee("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
        if (u && a) throw new ee("Can't mix ordinal dates with month/day");
        let g;
        i ? g = Dt(y(y({}, Ce(this.c, r, s)), t), r, s) : m(t.ordinal) ? (g = y(y({}, this.toObject()), t), m(t.day) && (g.day = Math.min(We(g.year, g.month), g.day))) : g = xt(y(y({}, Ye(this.c)), t));
        const [k, f] = xe(g, this.o, this.zone);
        return G(this, {
            ts: k,
            o: f
        })
    }
    plus(e) {
        if (!this.isValid) return this;
        const t = w.fromDurationLike(e);
        return G(this, zt(this, t))
    }
    minus(e) {
        if (!this.isValid) return this;
        const t = w.fromDurationLike(e).negate();
        return G(this, zt(this, t))
    }
    startOf(e, {
        useLocaleWeeks: t = !1
    } = {}) {
        if (!this.isValid) return this;
        const r = {},
            s = w.normalizeUnit(e);
        switch (s) {
            case "years":
                r.month = 1;
            case "quarters":
            case "months":
                r.day = 1;
            case "weeks":
            case "days":
                r.hour = 0;
            case "hours":
                r.minute = 0;
            case "minutes":
                r.second = 0;
            case "seconds":
                r.millisecond = 0;
                break
        }
        if (s === "weeks")
            if (t) {
                const i = this.loc.getStartOfWeek(),
                    {
                        weekday: a
                    } = this;
                a < i && (r.weekNumber = this.weekNumber - 1), r.weekday = i
            } else r.weekday = 1;
        if (s === "quarters") {
            const i = Math.ceil(this.month / 3);
            r.month = (i - 1) * 3 + 1
        }
        return this.set(r)
    }
    endOf(e, t) {
        return this.isValid ? this.plus({
            [e]: 1
        }).startOf(e, t).minus(1) : this
    }
    toFormat(e, t = {}) {
        return this.isValid ? E.create(this.loc.redefaultToEN(t)).formatDateTimeFromString(this, e) : Ge
    }
    toLocaleString(e = Ve, t = {}) {
        return this.isValid ? E.create(this.loc.clone(t), e).formatDateTime(this) : Ge
    }
    toLocaleParts(e = {}) {
        return this.isValid ? E.create(this.loc.clone(e), e).formatDateTimeParts(this) : []
    }
    toISO({
        format: e = "extended",
        suppressSeconds: t = !1,
        suppressMilliseconds: r = !1,
        includeOffset: s = !0,
        extendedZone: i = !1
    } = {}) {
        if (!this.isValid) return null;
        const a = e === "extended";
        let o = Be(this, a);
        return o += "T", o += Rt(this, a, t, r, s, i), o
    }
    toISODate({
        format: e = "extended"
    } = {}) {
        return this.isValid ? Be(this, e === "extended") : null
    }
    toISOWeekDate() {
        return Me(this, "kkkk-'W'WW-c")
    }
    toISOTime({
        suppressMilliseconds: e = !1,
        suppressSeconds: t = !1,
        includeOffset: r = !0,
        includePrefix: s = !1,
        extendedZone: i = !1,
        format: a = "extended"
    } = {}) {
        return this.isValid ? (s ? "T" : "") + Rt(this, a === "extended", t, e, r, i) : null
    }
    toRFC2822() {
        return Me(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", !1)
    }
    toHTTP() {
        return Me(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'")
    }
    toSQLDate() {
        return this.isValid ? Be(this, !0) : null
    }
    toSQLTime({
        includeOffset: e = !0,
        includeZone: t = !1,
        includeOffsetSpace: r = !0
    } = {}) {
        let s = "HH:mm:ss.SSS";
        return (t || e) && (r && (s += " "), t ? s += "z" : e && (s += "ZZ")), Me(this, s, !0)
    }
    toSQL(e = {}) {
        return this.isValid ? `${this.toSQLDate()} ${this.toSQLTime(e)}` : null
    }
    toString() {
        return this.isValid ? this.toISO() : Ge
    }[Symbol.for("nodejs.util.inspect.custom")]() {
        return this.isValid ? `DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }` : `DateTime { Invalid, reason: ${this.invalidReason} }`
    }
    valueOf() {
        return this.toMillis()
    }
    toMillis() {
        return this.isValid ? this.ts : NaN
    }
    toSeconds() {
        return this.isValid ? this.ts / 1e3 : NaN
    }
    toUnixInteger() {
        return this.isValid ? Math.floor(this.ts / 1e3) : NaN
    }
    toJSON() {
        return this.toISO()
    }
    toBSON() {
        return this.toJSDate()
    }
    toObject(e = {}) {
        if (!this.isValid) return {};
        const t = y({}, this.c);
        return e.includeConfig && (t.outputCalendar = this.outputCalendar, t.numberingSystem = this.loc.numberingSystem, t.locale = this.loc.locale), t
    }
    toJSDate() {
        return new Date(this.isValid ? this.ts : NaN)
    }
    diff(e, t = "milliseconds", r = {}) {
        if (!this.isValid || !e.isValid) return w.invalid("created by diffing an invalid DateTime");
        const s = y({
                locale: this.locale,
                numberingSystem: this.numberingSystem
            }, r),
            i = Hr(t).map(w.normalizeUnit),
            a = e.valueOf() > this.valueOf(),
            o = a ? this : e,
            u = a ? e : this,
            l = _s(o, u, i, s);
        return a ? l.negate() : l
    }
    diffNow(e = "milliseconds", t = {}) {
        return this.diff(h.now(), e, t)
    }
    until(e) {
        return this.isValid ? p.fromDateTimes(this, e) : this
    }
    hasSame(e, t, r) {
        if (!this.isValid) return !1;
        const s = e.valueOf(),
            i = this.setZone(e.zone, {
                keepLocalTime: !0
            });
        return i.startOf(t, r) <= s && s <= i.endOf(t, r)
    }
    equals(e) {
        return this.isValid && e.isValid && this.valueOf() === e.valueOf() && this.zone.equals(e.zone) && this.loc.equals(e.loc)
    }
    toRelative(e = {}) {
        if (!this.isValid) return null;
        const t = e.base || h.fromObject({}, {
                zone: this.zone
            }),
            r = e.padding ? this < t ? -e.padding : e.padding : 0;
        let s = ["years", "months", "days", "hours", "minutes", "seconds"],
            i = e.unit;
        return Array.isArray(e.unit) && (s = e.unit, i = void 0), Yt(t, this.plus(r), x(y({}, e), {
            numeric: "always",
            units: s,
            unit: i
        }))
    }
    toRelativeCalendar(e = {}) {
        return this.isValid ? Yt(e.base || h.fromObject({}, {
            zone: this.zone
        }), this, x(y({}, e), {
            numeric: "auto",
            units: ["years", "months", "days"],
            calendary: !0
        })) : null
    }
    static min(...e) {
        if (!e.every(h.isDateTime)) throw new I("min requires all arguments be DateTimes");
        return Ft(e, t => t.valueOf(), Math.min)
    }
    static max(...e) {
        if (!e.every(h.isDateTime)) throw new I("max requires all arguments be DateTimes");
        return Ft(e, t => t.valueOf(), Math.max)
    }
    static fromFormatExplain(e, t, r = {}) {
        const {
            locale: s = null,
            numberingSystem: i = null
        } = r, a = S.fromOpts({
            locale: s,
            numberingSystem: i,
            defaultToEN: !0
        });
        return qn(a, e, t)
    }
    static fromStringExplain(e, t, r = {}) {
        return h.fromFormatExplain(e, t, r)
    }
    static buildFormatParser(e, t = {}) {
        const {
            locale: r = null,
            numberingSystem: s = null
        } = t, i = S.fromOpts({
            locale: r,
            numberingSystem: s,
            defaultToEN: !0
        });
        return new Rn(i, e)
    }
    static fromFormatParser(e, t, r = {}) {
        if (m(e) || m(t)) throw new I("fromFormatParser requires an input string and a format parser");
        const {
            locale: s = null,
            numberingSystem: i = null
        } = r, a = S.fromOpts({
            locale: s,
            numberingSystem: i,
            defaultToEN: !0
        });
        if (!a.equals(t.locale)) throw new I(`fromFormatParser called with a locale of ${a}, but the format parser was created for ${t.locale}`);
        const {
            result: o,
            zone: u,
            specificOffset: l,
            invalidReason: d
        } = t.explainFromTokens(e);
        return d ? h.invalid(d) : K(o, u, r, `format ${t.format}`, e, l)
    }
    static get DATE_SHORT() {
        return Ve
    }
    static get DATE_MED() {
        return _t
    }
    static get DATE_MED_WITH_WEEKDAY() {
        return yr
    }
    static get DATE_FULL() {
        return Jt
    }
    static get DATE_HUGE() {
        return Bt
    }
    static get TIME_SIMPLE() {
        return jt
    }
    static get TIME_WITH_SECONDS() {
        return Qt
    }
    static get TIME_WITH_SHORT_OFFSET() {
        return Kt
    }
    static get TIME_WITH_LONG_OFFSET() {
        return Xt
    }
    static get TIME_24_SIMPLE() {
        return en
    }
    static get TIME_24_WITH_SECONDS() {
        return tn
    }
    static get TIME_24_WITH_SHORT_OFFSET() {
        return nn
    }
    static get TIME_24_WITH_LONG_OFFSET() {
        return rn
    }
    static get DATETIME_SHORT() {
        return sn
    }
    static get DATETIME_SHORT_WITH_SECONDS() {
        return an
    }
    static get DATETIME_MED() {
        return on
    }
    static get DATETIME_MED_WITH_SECONDS() {
        return un
    }
    static get DATETIME_MED_WITH_WEEKDAY() {
        return gr
    }
    static get DATETIME_FULL() {
        return ln
    }
    static get DATETIME_FULL_WITH_SECONDS() {
        return cn
    }
    static get DATETIME_HUGE() {
        return fn
    }
    static get DATETIME_HUGE_WITH_SECONDS() {
        return dn
    }
}

function de(n) {
    if (h.isDateTime(n)) return n;
    if (n && n.valueOf && Y(n.valueOf())) return h.fromJSDate(n);
    if (n && typeof n == "object") return h.fromObject(n);
    throw new I(`Unknown datetime argument: ${n}, of type ${typeof n}`)
}
var mi = nr("<div><!></div>");

function Oi(n, e) {
    rr(e, !0);
    let t = fe(e, "content", 3, null),
        r = fe(e, "color", 3, "Green"),
        s = fe(e, "schedule", 3, !1),
        i = fe(e, "start_date", 3, null),
        a = fe(e, "end_date", 3, null);
    const o = () => {
            const k = h.now(),
                f = i() ? h.fromISO(i()) : k,
                O = a() ? h.fromISO(a()) : null;
            return O ? k.startOf("day") >= (f == null ? void 0 : f.startOf("day")) && k.startOf("day") <= O.startOf("day") : f.startOf("day") <= k.startOf("day")
        },
        u = k => {
            switch (k) {
                case "Green":
                    return "theme-green text-white";
                case "Berry":
                    return "theme-berry text-white";
                case "Light":
                    return "theme-light";
                case "Dark":
                    return "theme-dark";
                default:
                    return ""
            }
        };
    var l = tr(),
        d = sr(l); {
        var g = k => {
            var f = mi(),
                O = ar(f);
            fr(O, {
                class: "container text-center",
                get content() {
                    return t()
                }
            }), or(f), ur($ => cr(f, 1, `banner ${$!=null?$:""} z-40`), [() => u(r())]), gt(k, f)
        };
        lr(d, k => {
            t() && (!s() || o()) && k(g)
        })
    }
    gt(n, l), ir()
}
export {
    Oi as B
};