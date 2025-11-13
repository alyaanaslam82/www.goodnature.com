const n = t => t != null,
    s = t => !!t.length,
    e = t => n(t) ? t.length === 1 && "text" in t[0] ? !!t[0].text : !!t.length : !1,
    c = e,
    r = t => n(t) && !!t.url,
    u = r,
    o = t => n(t) && ("id" in t || "url" in t),
    i = o,
    a = t => n(a) && !!t,
    l = t => n(t) && !!t.embed_url,
    g = n,
    h = t => n(t) && s(t);
export {
    r as a, g as b, i as c, l as e, h as g, u as i, a as k, o as l, e as r, c as t
};