var U = Object.defineProperty,
    B = Object.defineProperties;
var Z = Object.getOwnPropertyDescriptors;
var S = Object.getOwnPropertySymbols;
var G = Object.prototype.hasOwnProperty,
    J = Object.prototype.propertyIsEnumerable;
var M = (a, t, e) => t in a ? U(a, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: e
    }) : a[t] = e,
    b = (a, t) => {
        for (var e in t || (t = {})) G.call(t, e) && M(a, e, t[e]);
        if (S)
            for (var e of S(t)) J.call(t, e) && M(a, e, t[e]);
        return a
    },
    y = (a, t) => B(a, Z(t));
import {
    c as w,
    a as k,
    t as K
} from "./disclose-version.Cr9xuhkA.js";
import {
    p as Q,
    f as _,
    b as X,
    h as Y,
    r as F,
    t as O
} from "./runtime.B7th0A2U.js";
import {
    p as z,
    i as j
} from "./props.C7v_At4K.js";
import {
    h as A
} from "./html.C9SqvzYP.js";
import {
    a as D,
    c as tt
} from "./attributes.CecWNX5Z.js";
import {
    a as et,
    l as N
} from "./link-resolver.A6NvoPr8.js";
import {
    a as at
} from "./isFilled.GM-Jo1Zy.js";
const c = {
        heading1: "heading1",
        heading2: "heading2",
        heading3: "heading3",
        heading4: "heading4",
        heading5: "heading5",
        heading6: "heading6",
        paragraph: "paragraph",
        preformatted: "preformatted",
        strong: "strong",
        em: "em",
        listItem: "list-item",
        oListItem: "o-list-item",
        list: "group-list-item",
        oList: "group-o-list-item",
        image: "image",
        embed: "embed",
        hyperlink: "hyperlink",
        label: "label",
        span: "span"
    },
    g = {
        Any: "Any",
        Document: "Document",
        Media: "Media",
        Web: "Web"
    },
    rt = a => {
        var e, r;
        var t;
        return b({
            link_type: g.Document,
            id: a.id,
            uid: (e = a.uid) != null ? e : void 0,
            type: a.type,
            tags: a.tags,
            lang: a.lang,
            url: (r = a.url) != null ? r : void 0,
            slug: (t = a.slugs) == null ? void 0 : t[0]
        }, a.data && Object.keys(a.data).length > 0 ? {
            data: a.data
        } : {})
    },
    st = (a, t) => {
        if (!a) return null;
        const e = "link_type" in a ? a : rt(a);
        switch (e.link_type) {
            case g.Media:
            case g.Web:
                return "url" in e ? e.url : null;
            case g.Document:
                {
                    if ("id" in e && t) {
                        const r = t(e);
                        if (r != null) return r
                    }
                    return "url" in e && e.url ? e.url : null
                }
            case g.Any:
            default:
                return null
        }
    },
    T = () => (++T.i).toString();
T.i = 0;
const it = a => {
        const t = nt(a),
            e = [];
        for (let r = 0; r < t.length; r++) e.push(V(t[r]));
        return {
            key: T(),
            children: e
        }
    },
    $ = (a, t = []) => ({
        key: T(),
        type: a.type,
        text: "text" in a ? a.text : void 0,
        node: a,
        children: t
    }),
    I = a => $({
        type: c.span,
        text: a,
        spans: []
    }),
    nt = a => {
        const t = a.slice(0);
        for (let e = 0; e < t.length; e++) {
            const r = t[e];
            if (r.type === c.listItem || r.type === c.oListItem) {
                const s = [r];
                for (; t[e + 1] && t[e + 1].type === r.type;) s.push(t[e + 1]), t.splice(e, 1);
                r.type === c.listItem ? t[e] = {
                    type: c.list,
                    items: s
                } : t[e] = {
                    type: c.oList,
                    items: s
                }
            }
        }
        return t
    },
    V = a => {
        if ("text" in a) return $(a, q(a.spans, a));
        if ("items" in a) {
            const t = [];
            for (let e = 0; e < a.items.length; e++) t.push(V(a.items[e]));
            return $(a, t)
        }
        return $(a)
    },
    q = (a, t, e) => {
        if (!a.length) return [I(t.text)];
        const r = a.slice(0);
        r.sort((i, n) => i.start - n.start || n.end - i.end);
        const s = [];
        for (let i = 0; i < r.length; i++) {
            const n = r[i],
                d = e && e.start || 0,
                p = n.start - d,
                u = n.end - d,
                f = t.text.slice(p, u),
                x = [];
            for (let h = i; h < r.length; h++) {
                const l = r[h];
                l !== n && (l.start >= n.start && l.end <= n.end ? (x.push(l), r.splice(h, 1), h--) : l.start < n.end && l.end > n.start && (x.push(y(b({}, l), {
                    end: n.end
                })), r[h] = y(b({}, l), {
                    start: n.end
                })))
            }
            i === 0 && p > 0 && s.push(I(t.text.slice(0, p)));
            const L = y(b({}, n), {
                text: f
            });
            s.push($(L, q(x, y(b({}, t), {
                text: f
            }), n))), u < t.text.length && s.push(I(t.text.slice(u, r[i + 1] ? r[i + 1].start - d : void 0)))
        }
        return s
    },
    ct = (a, t) => E(it(a).children, t),
    E = (a, t) => {
        const e = [];
        for (let r = 0; r < a.length; r++) {
            const s = a[r],
                i = t(s.type, s.node, s.text, E(s.children, t), s.key);
            i != null && e.push(i)
        }
        return e
    },
    lt = {
        [c.listItem]: "listItem",
        [c.oListItem]: "oListItem",
        [c.list]: "list",
        [c.oList]: "oList"
    },
    ot = a => (t, e, r, s, i) => {
        const n = a[lt[t] || t];
        if (n) return n({
            type: t,
            node: e,
            text: r,
            children: s,
            key: i
        })
    },
    ut = (...a) => (...t) => {
        for (let e = 0; e < a.length; e++) {
            const r = a[e];
            if (r) {
                const s = r(...t);
                if (s != null) return s
            }
        }
    },
    ht = /["'&<>]/,
    v = a => {
        const t = "" + a,
            e = ht.exec(t);
        if (!e) return t;
        let r, s = "",
            i = 0,
            n = 0;
        for (i = e.index; i < t.length; i++) {
            switch (t.charCodeAt(i)) {
                case 34:
                    r = "&quot;";
                    break;
                case 38:
                    r = "&amp;";
                    break;
                case 39:
                    r = "&#39;";
                    break;
                case 60:
                    r = "&lt;";
                    break;
                case 62:
                    r = "&gt;";
                    break;
                default:
                    continue
            }
            n !== i && (s += t.substring(n, i)), n = i + 1, s += r
        }
        return n !== i ? s + t.substring(n, i) : s
    },
    m = a => "data" in a && "label" in a.data ? ` class="${a.data.label}"` : "",
    o = (a, t, e) => `<${a}${m(t)}>${e.join("")}</${a}>`,
    pt = a => `<pre${m(a)}>${v(a.text)}</pre>`,
    dt = (a, t) => {
        let e = `<img src="${t.url}" alt="${v(t.alt)}"${t.copyright?` copyright="${v(t.copyright)}"`:""} />`;
        return t.linkTo && (e = P(a, {
            type: c.hyperlink,
            data: t.linkTo,
            start: 0,
            end: 0
        }, [e])), `<p class="block-img">${e}</p>`
    },
    gt = a => `<div data-oembed="${a.oembed.embed_url}" data-oembed-type="${a.oembed.type}" data-oembed-provider="${a.oembed.provider_name}"${m(a)}>${a.oembed.html}</div>`,
    P = (a, t, e) => {
        switch (t.data.link_type) {
            case g.Web:
                return `<a href="${v(t.data.url)}" ${t.data.target?`target="${t.data.target}" `:""}rel="noopener noreferrer"${m(t)}>${e.join("")}</a>`;
            case g.Document:
                return `<a href="${st(t.data,a)}"${m(t)}>${e.join("")}</a>`;
            case g.Media:
                return `<a href="${t.data.url}"${m(t)}>${e.join("")}</a>`
        }
    },
    ft = a => a ? v(a).replace(/\n/g, "<br />") : "",
    W = a => (t, e, r, s, i) => {
        switch (e.type) {
            case c.heading1:
                return o("h1", e, s);
            case c.heading2:
                return o("h2", e, s);
            case c.heading3:
                return o("h3", e, s);
            case c.heading4:
                return o("h4", e, s);
            case c.heading5:
                return o("h5", e, s);
            case c.heading6:
                return o("h6", e, s);
            case c.paragraph:
                return o("p", e, s);
            case c.preformatted:
                return pt(e);
            case c.strong:
                return o("strong", e, s);
            case c.em:
                return o("em", e, s);
            case c.listItem:
                return o("li", e, s);
            case c.oListItem:
                return o("li", e, s);
            case c.list:
                return o("ul", e, s);
            case c.oList:
                return o("ol", e, s);
            case c.image:
                return dt(a, e);
            case c.embed:
                return gt(e);
            case c.hyperlink:
                return P(a, e, s);
            case c.label:
                return o("span", e, s);
            case c.span:
            default:
                return ft(r)
        }
    },
    bt = a => {
        const t = {};
        for (const e in a) {
            const r = a[e];
            r && (t[e] = s => r(y(b({}, s), {
                children: s.children.join("")
            })))
        }
        return ot(t)
    },
    R = (a, t, e) => {
        if (a) {
            let r;
            return e ? r = ut(typeof e == "object" ? bt(e) : (s, i, n, d, p) => e(s, i, n, d.join(""), p), W(t)) : r = W(t), ct(a, r).join("")
        } else return null
    },
    yt = (a, t = {}) => a && at(a) ? et(a.url, t) : null,
    H = (a, t, e, r) => {
        var s, i, n, d, p;
        switch (a) {
            case "heading2":
                return t = t, `<h2 id="${"text"in t&&((i=(s=t==null?void 0:t.text)==null?void 0:s.replace(/[\W_]+/g,"-"))==null?void 0:i.toLowerCase().replace(/^\d-/,"").replace(/-$/,""))}" class="title text-3xl scroll-mt-28">${r}</h2>`;
            case "heading3":
                return `<h3 class="title text-2xl">${"text"in t&&t.text}</h3>`;
            case "heading4":
                return `<h4 class="font-medium text-xl">${"text"in t&&t.text}</h4>`;
            case "heading5":
                return `<h5 class="font-semibold">${"text"in t&&t.text}</h5>`;
            case "heading6":
                return `<h6 class="font-semibold text-sm">${"text"in t&&t.text}</h6>`;
            case "hyperlink":
                {
                    t = t,
                    t.data = t.data;
                    const u = t.data.target ? `target="${t.data.target}" rel="noopener"` : "",
                        f = N(t.data);
                    return `<a ${u} href="${f}" class="link">${e}</a>`
                }
            case "image":
                {
                    t = t;
                    const u = yt(t);
                    return (n = t.linkTo) != null && n.url ? `<a ${t.linkTo.target?'target="_blank" rel="noopener"':""} href="${t.linkTo.url}"><img src=${u} width=${t.dimensions.width} height=${t.dimensions.height} alt=${t.alt||"..."} /></a>` : `<img src=${u} width=${t.dimensions.width} height=${t.dimensions.height} alt=${t.alt||"..."} />`
                }
            case "embed":
                return t = t, `
			<div data-video-embed class="bg-black [&>iframe]:inset-0 [&>iframe]:absolute [&>iframe]:w-full [&>iframe]:h-full relative aspect-video max-w-[850px] w-full my-8">
                ${(d=t==null?void 0:t.oembed)==null?void 0:d.html.replace(/src/,"data-src").replace(/data-src="https:\/\/www\.youtube\.com\/embed\/([a-zA-Z0-9]+).*oembed/i,"$&&autoplay=1")}
                <button onclick="playVideo(this)" style="background-image: url(${(p=t==null?void 0:t.oembed)==null?void 0:p.thumbnail_url})" class="absolute inset-0 z-10 bg-cover bg-center" type="button" aria-label="Play Video">
                    <div class="fill-white flex items-center justify-center">
                        <svg class="w-20" viewBox="0 0 512 512"><path d="M356.5 235.5C363.6 239.9 368 247.6 368 256C368 264.4 363.6 272.1 356.5 276.5L212.5 364.5C205.1 369 195.8 369.2 188.3 364.9C180.7 360.7 176 352.7 176 344V167.1C176 159.3 180.7 151.3 188.3 147.1C195.8 142.8 205.1 142.1 212.5 147.5L356.5 235.5zM192 168V344C192 346.9 193.6 349.6 196.1 350.1C198.6 352.4 201.7 352.3 204.2 350.8L348.2 262.8C350.6 261.4 352 258.8 352 256C352 253.2 350.6 250.6 348.2 249.2L204.2 161.2C201.7 159.7 198.6 159.6 196.1 161C193.6 162.4 192 165.1 192 168V168zM0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 496C388.5 496 496 388.5 496 256C496 123.5 388.5 16 256 16C123.5 16 16 123.5 16 256C16 388.5 123.5 496 256 496z"/></svg>
                    </div>
                </button>
			</div>
			`;
            case "label":
                return `<blockquote>${r}</blockquote>`;
            default:
                return null
        }
    };
var mt = K("<div><!></div>");

function _t(a, t) {
    Q(t, !0);
    let e = z(t, "content", 15),
        r = z(t, "class", 3, "");
    z(t, "directionList", 3, !1)() && e() && e().length && e(e()[0].type = "list-item", !0);
    var i = w(),
        n = _(i); {
        var d = p => {
            var u = w(),
                f = _(u); {
                var x = h => {
                        var l = mt(),
                            C = Y(l);
                        A(C, () => R(e(), N, H)), F(l), O(() => D(l, 1, tt(r()))), k(h, l)
                    },
                    L = h => {
                        var l = w(),
                            C = _(l);
                        A(C, () => R(e(), N, H)), k(h, l)
                    };
                j(f, h => {
                    r() ? h(x) : h(L, !1)
                })
            }
            k(p, u)
        };
        j(n, p => {
            Array.isArray(e()) && e().length > 0 && p(d)
        })
    }
    k(a, i), X()
}
export {
    _t as R, yt as a, R as b, H as h
};