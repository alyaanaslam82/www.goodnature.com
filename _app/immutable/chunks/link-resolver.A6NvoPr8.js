var f = Object.defineProperty,
    h = Object.defineProperties;
var $ = Object.getOwnPropertyDescriptors;
var u = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty,
    l = Object.prototype.propertyIsEnumerable;
var o = (s, e, r) => e in s ? f(s, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : s[e] = r,
    d = (s, e) => {
        for (var r in e || (e = {})) i.call(e, r) && o(s, r, e[r]);
        if (u)
            for (var r of u(e)) l.call(e, r) && o(s, r, e[r]);
        return s
    },
    m = (s, e) => h(s, $(e));
var p = (s, e) => {
    var r = {};
    for (var a in s) i.call(s, a) && e.indexOf(a) < 0 && (r[a] = s[a]);
    if (s != null && u)
        for (var a of u(s)) e.indexOf(a) < 0 && l.call(s, a) && (r[a] = s[a]);
    return r
};
const b = s => s.replace(/[A-Z]/g, e => `-${e.toLowerCase()}`),
    g = (s, e) => {
        const r = new URL(s);
        for (const n in e) {
            const c = b(n),
                t = e[n];
            t === void 0 ? r.searchParams.delete(c) : Array.isArray(t) ? r.searchParams.set(c, t.join(",")) : r.searchParams.set(c, `${t}`)
        }
        const a = r.searchParams.get("s");
        return a && (r.searchParams.delete("s"), r.searchParams.append("s", a)), r.toString()
    },
    P = (s, a) => {
        var n = a,
            {
                widths: e
            } = n,
            r = p(n, ["widths"]);
        return e.map(c => `${g(s,m(d({},r),{w:void 0,width:c}))} ${c}w`).join(", ")
    },
    k = s => {
        const {
            uid: e,
            url: r,
            type: a,
            tags: n
        } = s || {};
        if (e) switch (a) {
            case "terms_page":
                return `/terms/${e}`;
            case "blog_home":
                return "/blog/page/1";
            case "article":
                return n != null && n.includes("Juice Archives") ? `/juice-archives/${e}` : `/blog/${e}`;
            case "product":
                return `/products/${e}`;
            case "recipes_home":
                return "/recipes/page/1";
            case "roundups_home":
                return "/recipes/roundups/page/1";
            case "recipe":
                return `/recipes/${e}`;
            case "knowledgebase_home":
                return "/knowledgebase";
            case "knowledge":
                return `/knowledgebase/${e}`;
            case "compare":
                return "/compare";
            default:
                return n != null && n.includes("Juicer") ? `/juicers/${e}` : n != null && n.includes("brand") ? `/marketplace/brands/${e}` : n != null && n.includes("marketplace") ? `/marketplace/${e}` : n != null && n.includes("consulting") ? `/consulting/${e}` : e ? `/${e}` : "/"
        }
        if (r) {
            if (r.includes(".pdf")) return r;
            if (r.includes("goodnature.com")) {
                if (r.includes("https://goodnature.com")) {
                    const c = new URL(r);
                    return `https://www.goodnature.com${c.pathname}${c.searchParams?c.searchParams.toString():""}`
                }
                return r.includes(".goodnature.com") ? r : r.replace(/^(?:\/\/|[^/]+)*/, "")
            }
            return r
        }
        return "/"
    };
export {
    g as a, P as b, k as l
};