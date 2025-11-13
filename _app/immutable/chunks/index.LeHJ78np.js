var st = Object.getOwnPropertySymbols;
var Zt = Object.prototype.hasOwnProperty,
    Qt = Object.prototype.propertyIsEnumerable;
var lt = t => typeof t == "symbol" ? t : t + "",
    ct = (t, o) => {
        var a = {};
        for (var i in t) Zt.call(t, i) && o.indexOf(i) < 0 && (a[i] = t[i]);
        if (t != null && st)
            for (var i of st(t)) o.indexOf(i) < 0 && Qt.call(t, i) && (a[i] = t[i]);
        return a
    };
/*!
 * Font Awesome Pro 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license (Commercial License)
 * Copyright 2024 Fonticons, Inc.
 */
const In = {
        prefix: "fas",
        iconName: "star",
        icon: [576, 512, [11088, 61446], "f005", "M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"]
    },
    vn = {
        prefix: "fas",
        iconName: "question",
        icon: [320, 512, [10067, 10068, 61736], "3f", "M80 160c0-35.3 28.7-64 64-64l32 0c35.3 0 64 28.7 64 64l0 3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74l0 1.4c0 17.7 14.3 32 32 32s32-14.3 32-32l0-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7l0-3.6c0-70.7-57.3-128-128-128l-32 0C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"]
    },
    Pn = {
        prefix: "fas",
        iconName: "circle-info",
        icon: [512, 512, ["info-circle"], "f05a", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]
    },
    xn = {
        prefix: "fas",
        iconName: "play",
        icon: [384, 512, [9654], "f04b", "M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"]
    },
    kn = {
        prefix: "fas",
        iconName: "xmark",
        icon: [384, 512, [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], "f00d", "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]
    },
    Un = {
        prefix: "fas",
        iconName: "quote-left",
        icon: [448, 512, [8220, "quote-left-alt"], "f10d", "M0 216C0 149.7 53.7 96 120 96l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-32 0-32 0-72zm256 0c0-66.3 53.7-120 120-120l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-32 0-32 0-72z"]
    },
    Fn = {
        prefix: "fas",
        iconName: "check",
        icon: [448, 512, [10003, 10004], "f00c", "M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]
    },
    zn = {
        prefix: "fas",
        iconName: "paper-plane",
        icon: [512, 512, [61913], "f1d8", "M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480l0-83.6c0-4 1.5-7.8 4.2-10.8L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"]
    }; /*! @license DOMPurify 3.2.3 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.3/LICENSE */
const {
    entries: St,
    setPrototypeOf: ft,
    isFrozen: Jt,
    getPrototypeOf: en,
    getOwnPropertyDescriptor: tn
} = Object;
let {
    freeze: S,
    seal: O,
    create: yt
} = Object, {
    apply: Ie,
    construct: ve
} = typeof Reflect != "undefined" && Reflect;
S || (S = function(o) {
    return o
});
O || (O = function(o) {
    return o
});
Ie || (Ie = function(o, a, i) {
    return o.apply(a, i)
});
ve || (ve = function(o, a) {
    return new o(...a)
});
const se = L(Array.prototype.forEach),
    ut = L(Array.prototype.pop),
    X = L(Array.prototype.push),
    ce = L(String.prototype.toLowerCase),
    we = L(String.prototype.toString),
    mt = L(String.prototype.match),
    V = L(String.prototype.replace),
    nn = L(String.prototype.indexOf),
    on = L(String.prototype.trim),
    w = L(Object.prototype.hasOwnProperty),
    A = L(RegExp.prototype.test),
    q = rn(TypeError);

function L(t) {
    return function(o) {
        for (var a = arguments.length, i = new Array(a > 1 ? a - 1 : 0), c = 1; c < a; c++) i[c - 1] = arguments[c];
        return Ie(t, o, i)
    }
}

function rn(t) {
    return function() {
        for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++) a[i] = arguments[i];
        return ve(t, a)
    }
}

function l(t, o) {
    let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ce;
    ft && ft(t, null);
    let i = o.length;
    for (; i--;) {
        let c = o[i];
        if (typeof c == "string") {
            const f = a(c);
            f !== c && (Jt(o) || (o[i] = f), c = f)
        }
        t[c] = !0
    }
    return t
}

function an(t) {
    for (let o = 0; o < t.length; o++) w(t, o) || (t[o] = null);
    return t
}

function v(t) {
    const o = yt(null);
    for (const [a, i] of St(t)) w(t, a) && (Array.isArray(i) ? o[a] = an(i) : i && typeof i == "object" && i.constructor === Object ? o[a] = v(i) : o[a] = i);
    return o
}

function K(t, o) {
    for (; t !== null;) {
        const i = tn(t, o);
        if (i) {
            if (i.get) return L(i.get);
            if (typeof i.value == "function") return L(i.value)
        }
        t = en(t)
    }

    function a() {
        return null
    }
    return a
}
const pt = S(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]),
    Ne = S(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]),
    De = S(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]),
    sn = S(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]),
    Me = S(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]),
    ln = S(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]),
    dt = S(["#text"]),
    Tt = S(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]),
    Ce = S(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]),
    _t = S(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]),
    le = S(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
    cn = O(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
    fn = O(/<%[\w\W]*|[\w\W]*%>/gm),
    un = O(/\$\{[\w\W]*}/gm),
    mn = O(/^data-[\-\w.\u00B7-\uFFFF]+$/),
    pn = O(/^aria-[\-\w]+$/),
    Rt = O(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
    dn = O(/^(?:\w+script|data):/i),
    Tn = O(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
    Lt = O(/^html$/i),
    _n = O(/^[a-z][.\w]*(-[.\w]+)+$/i);
var Et = Object.freeze({
    __proto__: null,
    ARIA_ATTR: pn,
    ATTR_WHITESPACE: Tn,
    CUSTOM_ELEMENT: _n,
    DATA_ATTR: mn,
    DOCTYPE_NAME: Lt,
    ERB_EXPR: fn,
    IS_ALLOWED_URI: Rt,
    IS_SCRIPT_OR_DATA: dn,
    MUSTACHE_EXPR: cn,
    TMPLIT_EXPR: un
});
const Z = {
        element: 1,
        text: 3,
        progressingInstruction: 7,
        comment: 8,
        document: 9
    },
    En = function() {
        return typeof window == "undefined" ? null : window
    },
    gn = function(o, a) {
        if (typeof o != "object" || typeof o.createPolicy != "function") return null;
        let i = null;
        const c = "data-tt-policy-suffix";
        a && a.hasAttribute(c) && (i = a.getAttribute(c));
        const f = "dompurify" + (i ? "#" + i : "");
        try {
            return o.createPolicy(f, {
                createHTML(b) {
                    return b
                },
                createScriptURL(b) {
                    return b
                }
            })
        } catch (b) {
            return console.warn("TrustedTypes policy " + f + " could not be created."), null
        }
    },
    gt = function() {
        return {
            afterSanitizeAttributes: [],
            afterSanitizeElements: [],
            afterSanitizeShadowDOM: [],
            beforeSanitizeAttributes: [],
            beforeSanitizeElements: [],
            beforeSanitizeShadowDOM: [],
            uponSanitizeAttribute: [],
            uponSanitizeElement: [],
            uponSanitizeShadowNode: []
        }
    };

function bt() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : En();
    const o = s => bt(s);
    if (o.version = "3.2.3", o.removed = [], !t || !t.document || t.document.nodeType !== Z.document) return o.isSupported = !1, o;
    let {
        document: a
    } = t;
    const i = a,
        c = i.currentScript,
        {
            DocumentFragment: f,
            HTMLTemplateElement: b,
            Node: ue,
            Element: xe,
            NodeFilter: H,
            NamedNodeMap: Nt = t.NamedNodeMap || t.MozNamedAttrMap,
            HTMLFormElement: Dt,
            DOMParser: Mt,
            trustedTypes: Q
        } = t,
        W = xe.prototype,
        Ct = K(W, "cloneNode"),
        It = K(W, "remove"),
        vt = K(W, "nextSibling"),
        Pt = K(W, "childNodes"),
        J = K(W, "parentNode");
    if (typeof b == "function") {
        const s = a.createElement("template");
        s.content && s.content.ownerDocument && (a = s.content.ownerDocument)
    }
    let g, G = "";
    const {
        implementation: me,
        createNodeIterator: xt,
        createDocumentFragment: kt,
        getElementsByTagName: Ut
    } = a, {
        importNode: Ft
    } = i;
    let R = gt();
    o.isSupported = typeof St == "function" && typeof J == "function" && me && me.createHTMLDocument !== void 0;
    const {
        MUSTACHE_EXPR: pe,
        ERB_EXPR: de,
        TMPLIT_EXPR: Te,
        DATA_ATTR: zt,
        ARIA_ATTR: Ht,
        IS_SCRIPT_OR_DATA: Wt,
        ATTR_WHITESPACE: ke,
        CUSTOM_ELEMENT: Gt
    } = Et;
    let {
        IS_ALLOWED_URI: Ue
    } = Et, p = null;
    const Fe = l({}, [...pt, ...Ne, ...De, ...Me, ...dt]);
    let T = null;
    const ze = l({}, [...Tt, ...Ce, ..._t, ...le]);
    let m = Object.seal(yt(null, {
            tagNameCheck: {
                writable: !0,
                configurable: !1,
                enumerable: !0,
                value: null
            },
            attributeNameCheck: {
                writable: !0,
                configurable: !1,
                enumerable: !0,
                value: null
            },
            allowCustomizedBuiltInElements: {
                writable: !0,
                configurable: !1,
                enumerable: !0,
                value: !1
            }
        })),
        B = null,
        _e = null,
        He = !0,
        Ee = !0,
        We = !1,
        Ge = !0,
        P = !1,
        ge = !0,
        I = !1,
        he = !1,
        Ae = !1,
        x = !1,
        ee = !1,
        te = !1,
        Be = !0,
        Ye = !1;
    const Bt = "user-content-";
    let Se = !0,
        Y = !1,
        k = {},
        U = null;
    const je = l({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
    let $e = null;
    const Xe = l({}, ["audio", "video", "img", "source", "image", "track"]);
    let ye = null;
    const Ve = l({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]),
        ne = "http://www.w3.org/1998/Math/MathML",
        oe = "http://www.w3.org/2000/svg",
        M = "http://www.w3.org/1999/xhtml";
    let F = M,
        Re = !1,
        Le = null;
    const Yt = l({}, [ne, oe, M], we);
    let ie = l({}, ["mi", "mo", "mn", "ms", "mtext"]),
        re = l({}, ["annotation-xml"]);
    const jt = l({}, ["title", "style", "font", "a", "script"]);
    let j = null;
    const $t = ["application/xhtml+xml", "text/html"],
        Xt = "text/html";
    let d = null,
        z = null;
    const Vt = a.createElement("form"),
        qe = function(e) {
            return e instanceof RegExp || e instanceof Function
        },
        be = function() {
            let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            if (!(z && z === e)) {
                if ((!e || typeof e != "object") && (e = {}), e = v(e), j = $t.indexOf(e.PARSER_MEDIA_TYPE) === -1 ? Xt : e.PARSER_MEDIA_TYPE, d = j === "application/xhtml+xml" ? we : ce, p = w(e, "ALLOWED_TAGS") ? l({}, e.ALLOWED_TAGS, d) : Fe, T = w(e, "ALLOWED_ATTR") ? l({}, e.ALLOWED_ATTR, d) : ze, Le = w(e, "ALLOWED_NAMESPACES") ? l({}, e.ALLOWED_NAMESPACES, we) : Yt, ye = w(e, "ADD_URI_SAFE_ATTR") ? l(v(Ve), e.ADD_URI_SAFE_ATTR, d) : Ve, $e = w(e, "ADD_DATA_URI_TAGS") ? l(v(Xe), e.ADD_DATA_URI_TAGS, d) : Xe, U = w(e, "FORBID_CONTENTS") ? l({}, e.FORBID_CONTENTS, d) : je, B = w(e, "FORBID_TAGS") ? l({}, e.FORBID_TAGS, d) : {}, _e = w(e, "FORBID_ATTR") ? l({}, e.FORBID_ATTR, d) : {}, k = w(e, "USE_PROFILES") ? e.USE_PROFILES : !1, He = e.ALLOW_ARIA_ATTR !== !1, Ee = e.ALLOW_DATA_ATTR !== !1, We = e.ALLOW_UNKNOWN_PROTOCOLS || !1, Ge = e.ALLOW_SELF_CLOSE_IN_ATTR !== !1, P = e.SAFE_FOR_TEMPLATES || !1, ge = e.SAFE_FOR_XML !== !1, I = e.WHOLE_DOCUMENT || !1, x = e.RETURN_DOM || !1, ee = e.RETURN_DOM_FRAGMENT || !1, te = e.RETURN_TRUSTED_TYPE || !1, Ae = e.FORCE_BODY || !1, Be = e.SANITIZE_DOM !== !1, Ye = e.SANITIZE_NAMED_PROPS || !1, Se = e.KEEP_CONTENT !== !1, Y = e.IN_PLACE || !1, Ue = e.ALLOWED_URI_REGEXP || Rt, F = e.NAMESPACE || M, ie = e.MATHML_TEXT_INTEGRATION_POINTS || ie, re = e.HTML_INTEGRATION_POINTS || re, m = e.CUSTOM_ELEMENT_HANDLING || {}, e.CUSTOM_ELEMENT_HANDLING && qe(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (m.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck), e.CUSTOM_ELEMENT_HANDLING && qe(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (m.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), e.CUSTOM_ELEMENT_HANDLING && typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (m.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), P && (Ee = !1), ee && (x = !0), k && (p = l({}, dt), T = [], k.html === !0 && (l(p, pt), l(T, Tt)), k.svg === !0 && (l(p, Ne), l(T, Ce), l(T, le)), k.svgFilters === !0 && (l(p, De), l(T, Ce), l(T, le)), k.mathMl === !0 && (l(p, Me), l(T, _t), l(T, le))), e.ADD_TAGS && (p === Fe && (p = v(p)), l(p, e.ADD_TAGS, d)), e.ADD_ATTR && (T === ze && (T = v(T)), l(T, e.ADD_ATTR, d)), e.ADD_URI_SAFE_ATTR && l(ye, e.ADD_URI_SAFE_ATTR, d), e.FORBID_CONTENTS && (U === je && (U = v(U)), l(U, e.FORBID_CONTENTS, d)), Se && (p["#text"] = !0), I && l(p, ["html", "head", "body"]), p.table && (l(p, ["tbody"]), delete B.tbody), e.TRUSTED_TYPES_POLICY) {
                    if (typeof e.TRUSTED_TYPES_POLICY.createHTML != "function") throw q('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
                    if (typeof e.TRUSTED_TYPES_POLICY.createScriptURL != "function") throw q('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
                    g = e.TRUSTED_TYPES_POLICY, G = g.createHTML("")
                } else g === void 0 && (g = gn(Q, c)), g !== null && typeof G == "string" && (G = g.createHTML(""));
                S && S(e), z = e
            }
        },
        Ke = l({}, [...Ne, ...De, ...sn]),
        Ze = l({}, [...Me, ...ln]),
        qt = function(e) {
            let n = J(e);
            (!n || !n.tagName) && (n = {
                namespaceURI: F,
                tagName: "template"
            });
            const r = ce(e.tagName),
                u = ce(n.tagName);
            return Le[e.namespaceURI] ? e.namespaceURI === oe ? n.namespaceURI === M ? r === "svg" : n.namespaceURI === ne ? r === "svg" && (u === "annotation-xml" || ie[u]) : !!Ke[r] : e.namespaceURI === ne ? n.namespaceURI === M ? r === "math" : n.namespaceURI === oe ? r === "math" && re[u] : !!Ze[r] : e.namespaceURI === M ? n.namespaceURI === oe && !re[u] || n.namespaceURI === ne && !ie[u] ? !1 : !Ze[r] && (jt[r] || !Ke[r]) : !!(j === "application/xhtml+xml" && Le[e.namespaceURI]) : !1
        },
        N = function(e) {
            X(o.removed, {
                element: e
            });
            try {
                J(e).removeChild(e)
            } catch (n) {
                It(e)
            }
        },
        ae = function(e, n) {
            try {
                X(o.removed, {
                    attribute: n.getAttributeNode(e),
                    from: n
                })
            } catch (r) {
                X(o.removed, {
                    attribute: null,
                    from: n
                })
            }
            if (n.removeAttribute(e), e === "is")
                if (x || ee) try {
                    N(n)
                } catch (r) {} else try {
                    n.setAttribute(e, "")
                } catch (r) {}
        },
        Qe = function(e) {
            let n = null,
                r = null;
            if (Ae) e = "<remove></remove>" + e;
            else {
                const _ = mt(e, /^[\r\n\t ]+/);
                r = _ && _[0]
            }
            j === "application/xhtml+xml" && F === M && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
            const u = g ? g.createHTML(e) : e;
            if (F === M) try {
                n = new Mt().parseFromString(u, j)
            } catch (_) {}
            if (!n || !n.documentElement) {
                n = me.createDocument(F, "template", null);
                try {
                    n.documentElement.innerHTML = Re ? G : u
                } catch (_) {}
            }
            const E = n.body || n.documentElement;
            return e && r && E.insertBefore(a.createTextNode(r), E.childNodes[0] || null), F === M ? Ut.call(n, I ? "html" : "body")[0] : I ? n.documentElement : E
        },
        Je = function(e) {
            return xt.call(e.ownerDocument || e, e, H.SHOW_ELEMENT | H.SHOW_COMMENT | H.SHOW_TEXT | H.SHOW_PROCESSING_INSTRUCTION | H.SHOW_CDATA_SECTION, null)
        },
        Oe = function(e) {
            return e instanceof Dt && (typeof e.nodeName != "string" || typeof e.textContent != "string" || typeof e.removeChild != "function" || !(e.attributes instanceof Nt) || typeof e.removeAttribute != "function" || typeof e.setAttribute != "function" || typeof e.namespaceURI != "string" || typeof e.insertBefore != "function" || typeof e.hasChildNodes != "function")
        },
        et = function(e) {
            return typeof ue == "function" && e instanceof ue
        };

    function C(s, e, n) {
        se(s, r => {
            r.call(o, e, n, z)
        })
    }
    const tt = function(e) {
            let n = null;
            if (C(R.beforeSanitizeElements, e, null), Oe(e)) return N(e), !0;
            const r = d(e.nodeName);
            if (C(R.uponSanitizeElement, e, {
                    tagName: r,
                    allowedTags: p
                }), e.hasChildNodes() && !et(e.firstElementChild) && A(/<[/\w]/g, e.innerHTML) && A(/<[/\w]/g, e.textContent) || e.nodeType === Z.progressingInstruction || ge && e.nodeType === Z.comment && A(/<[/\w]/g, e.data)) return N(e), !0;
            if (!p[r] || B[r]) {
                if (!B[r] && ot(r) && (m.tagNameCheck instanceof RegExp && A(m.tagNameCheck, r) || m.tagNameCheck instanceof Function && m.tagNameCheck(r))) return !1;
                if (Se && !U[r]) {
                    const u = J(e) || e.parentNode,
                        E = Pt(e) || e.childNodes;
                    if (E && u) {
                        const _ = E.length;
                        for (let y = _ - 1; y >= 0; --y) {
                            const D = Ct(E[y], !0);
                            D.__removalCount = (e.__removalCount || 0) + 1, u.insertBefore(D, vt(e))
                        }
                    }
                }
                return N(e), !0
            }
            return e instanceof xe && !qt(e) || (r === "noscript" || r === "noembed" || r === "noframes") && A(/<\/no(script|embed|frames)/i, e.innerHTML) ? (N(e), !0) : (P && e.nodeType === Z.text && (n = e.textContent, se([pe, de, Te], u => {
                n = V(n, u, " ")
            }), e.textContent !== n && (X(o.removed, {
                element: e.cloneNode()
            }), e.textContent = n)), C(R.afterSanitizeElements, e, null), !1)
        },
        nt = function(e, n, r) {
            if (Be && (n === "id" || n === "name") && (r in a || r in Vt)) return !1;
            if (!(Ee && !_e[n] && A(zt, n))) {
                if (!(He && A(Ht, n))) {
                    if (!T[n] || _e[n]) {
                        if (!(ot(e) && (m.tagNameCheck instanceof RegExp && A(m.tagNameCheck, e) || m.tagNameCheck instanceof Function && m.tagNameCheck(e)) && (m.attributeNameCheck instanceof RegExp && A(m.attributeNameCheck, n) || m.attributeNameCheck instanceof Function && m.attributeNameCheck(n)) || n === "is" && m.allowCustomizedBuiltInElements && (m.tagNameCheck instanceof RegExp && A(m.tagNameCheck, r) || m.tagNameCheck instanceof Function && m.tagNameCheck(r)))) return !1
                    } else if (!ye[n]) {
                        if (!A(Ue, V(r, ke, ""))) {
                            if (!((n === "src" || n === "xlink:href" || n === "href") && e !== "script" && nn(r, "data:") === 0 && $e[e])) {
                                if (!(We && !A(Wt, V(r, ke, "")))) {
                                    if (r) return !1
                                }
                            }
                        }
                    }
                }
            }
            return !0
        },
        ot = function(e) {
            return e !== "annotation-xml" && mt(e, Gt)
        },
        it = function(e) {
            C(R.beforeSanitizeAttributes, e, null);
            const {
                attributes: n
            } = e;
            if (!n || Oe(e)) return;
            const r = {
                attrName: "",
                attrValue: "",
                keepAttr: !0,
                allowedAttributes: T,
                forceKeepAttr: void 0
            };
            let u = n.length;
            for (; u--;) {
                const E = n[u],
                    {
                        name: _,
                        namespaceURI: y,
                        value: D
                    } = E,
                    $ = d(_);
                let h = _ === "value" ? D : on(D);
                if (r.attrName = $, r.attrValue = h, r.keepAttr = !0, r.forceKeepAttr = void 0, C(R.uponSanitizeAttribute, e, r), h = r.attrValue, Ye && ($ === "id" || $ === "name") && (ae(_, e), h = Bt + h), ge && A(/((--!?|])>)|<\/(style|title)/i, h)) {
                    ae(_, e);
                    continue
                }
                if (r.forceKeepAttr || (ae(_, e), !r.keepAttr)) continue;
                if (!Ge && A(/\/>/i, h)) {
                    ae(_, e);
                    continue
                }
                P && se([pe, de, Te], at => {
                    h = V(h, at, " ")
                });
                const rt = d(e.nodeName);
                if (nt(rt, $, h)) {
                    if (g && typeof Q == "object" && typeof Q.getAttributeType == "function" && !y) switch (Q.getAttributeType(rt, $)) {
                        case "TrustedHTML":
                            {
                                h = g.createHTML(h);
                                break
                            }
                        case "TrustedScriptURL":
                            {
                                h = g.createScriptURL(h);
                                break
                            }
                    }
                    try {
                        y ? e.setAttributeNS(y, _, h) : e.setAttribute(_, h), Oe(e) ? N(e) : ut(o.removed)
                    } catch (at) {}
                }
            }
            C(R.afterSanitizeAttributes, e, null)
        },
        Kt = function s(e) {
            let n = null;
            const r = Je(e);
            for (C(R.beforeSanitizeShadowDOM, e, null); n = r.nextNode();) C(R.uponSanitizeShadowNode, n, null), tt(n), it(n), n.content instanceof f && s(n.content);
            C(R.afterSanitizeShadowDOM, e, null)
        };
    return o.sanitize = function(s) {
        let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            n = null,
            r = null,
            u = null,
            E = null;
        if (Re = !s, Re && (s = "<!-->"), typeof s != "string" && !et(s))
            if (typeof s.toString == "function") {
                if (s = s.toString(), typeof s != "string") throw q("dirty is not a string, aborting")
            } else throw q("toString is not a function");
        if (!o.isSupported) return s;
        if (he || be(e), o.removed = [], typeof s == "string" && (Y = !1), Y) {
            if (s.nodeName) {
                const D = d(s.nodeName);
                if (!p[D] || B[D]) throw q("root node is forbidden and cannot be sanitized in-place")
            }
        } else if (s instanceof ue) n = Qe("<!---->"), r = n.ownerDocument.importNode(s, !0), r.nodeType === Z.element && r.nodeName === "BODY" || r.nodeName === "HTML" ? n = r : n.appendChild(r);
        else {
            if (!x && !P && !I && s.indexOf("<") === -1) return g && te ? g.createHTML(s) : s;
            if (n = Qe(s), !n) return x ? null : te ? G : ""
        }
        n && Ae && N(n.firstChild);
        const _ = Je(Y ? s : n);
        for (; u = _.nextNode();) tt(u), it(u), u.content instanceof f && Kt(u.content);
        if (Y) return s;
        if (x) {
            if (ee)
                for (E = kt.call(n.ownerDocument); n.firstChild;) E.appendChild(n.firstChild);
            else E = n;
            return (T.shadowroot || T.shadowrootmode) && (E = Ft.call(i, E, !0)), E
        }
        let y = I ? n.outerHTML : n.innerHTML;
        return I && p["!doctype"] && n.ownerDocument && n.ownerDocument.doctype && n.ownerDocument.doctype.name && A(Lt, n.ownerDocument.doctype.name) && (y = "<!DOCTYPE " + n.ownerDocument.doctype.name + `>
` + y), P && se([pe, de, Te], D => {
            y = V(y, D, " ")
        }), g && te ? g.createHTML(y) : y
    }, o.setConfig = function() {
        let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        be(s), he = !0
    }, o.clearConfig = function() {
        z = null, he = !1
    }, o.isValidAttribute = function(s, e, n) {
        z || be({});
        const r = d(s),
            u = d(e);
        return nt(r, u, n)
    }, o.addHook = function(s, e) {
        typeof e == "function" && X(R[s], e)
    }, o.removeHook = function(s) {
        return ut(R[s])
    }, o.removeHooks = function(s) {
        R[s] = []
    }, o.removeAllHooks = function() {
        R = gt()
    }, o
}
var Hn = bt(),
    hn = "@vercel/analytics",
    An = "1.4.1",
    Sn = () => {
        window.va || (window.va = function(...o) {
            (window.vaq = window.vaq || []).push(o)
        })
    };

function Pe() {
    return typeof window != "undefined"
}

function Ot() {
    try {
        const t = "production"
    } catch (t) {}
    return "production"
}

function yn(t = "auto") {
    if (t === "auto") {
        window.vam = Ot();
        return
    }
    window.vam = t
}

function wt() {
    return (Pe() ? window.vam : Ot()) || "production"
}

function ht() {
    return wt() === "production"
}

function fe() {
    return wt() === "development"
}

function Rn(t, i) {
    var c = i,
        {
            [t]: o
        } = c,
        a = ct(c, [lt(t)]);
    return a
}

function Ln(t, o) {
    if (!t) return;
    let a = t;
    const i = [];
    for (const [c, f] of Object.entries(t)) typeof f == "object" && f !== null && (o.strip ? a = Rn(c, a) : i.push(c));
    if (i.length > 0 && !o.strip) throw Error(`The following properties are not valid: ${i.join(", ")}. Only strings, numbers, booleans, and null are allowed.`);
    return a
}

function bn(t, o) {
    if (!t || !o) return t;
    let a = t;
    try {
        const i = Object.entries(o);
        for (const [c, f] of i)
            if (!Array.isArray(f)) {
                const b = At(f);
                b.test(a) && (a = a.replace(b, `/[${c}]`))
            }
        for (const [c, f] of i)
            if (Array.isArray(f)) {
                const b = At(f.join("/"));
                b.test(a) && (a = a.replace(b, `/[...${c}]`))
            }
        return a
    } catch (i) {
        return t
    }
}

function At(t) {
    return new RegExp(`/${On(t)}(?=[/?#]|$)`)
}

function On(t) {
    return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}
var wn = "https://va.vercel-scripts.com/v1/script.debug.js",
    Nn = "/_vercel/insights/script.js";

function Dn(t = {
    debug: !0
}) {
    var o;
    if (!Pe()) return;
    yn(t.mode), Sn(), t.beforeSend && ((o = window.va) == null || o.call(window, "beforeSend", t.beforeSend));
    const a = t.scriptSrc || (fe() ? wn : Nn);
    if (document.head.querySelector(`script[src*="${a}"]`)) return;
    const i = document.createElement("script");
    i.src = a, i.defer = !0, i.dataset.sdkn = hn + (t.framework ? `/${t.framework}` : ""), i.dataset.sdkv = An, t.disableAutoTrack && (i.dataset.disableAutoTrack = "1"), t.endpoint && (i.dataset.endpoint = t.endpoint), t.dsn && (i.dataset.dsn = t.dsn), i.onerror = () => {
        const c = fe() ? "Please check if any ad blockers are enabled and try again." : "Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";
        console.log(`[Vercel Web Analytics] Failed to load script from ${a}. ${c}`)
    }, fe() && t.debug === !1 && (i.dataset.debug = "false"), document.head.appendChild(i)
}

function Mn(t, o, a) {
    var i, c;
    if (!Pe()) {
        const f = "[Vercel Web Analytics] Please import `track` from `@vercel/analytics/server` when using this function in a server environment";
        if (ht()) console.warn(f);
        else throw new Error(f);
        return
    }
    if (!o) {
        (i = window.va) == null || i.call(window, "event", {
            name: t,
            options: a
        });
        return
    }
    try {
        const f = Ln(o, {
            strip: ht()
        });
        (c = window.va) == null || c.call(window, "event", {
            name: t,
            data: f,
            options: a
        })
    } catch (f) {
        f instanceof Error && fe() && console.error(f)
    }
}
var Wn = {
    inject: Dn,
    track: Mn,
    computeRoute: bn
};
export {
    Fn as a, zn as b, Pn as c, kn as d, xn as e, In as f, Wn as g, Un as h, Dn as i, vn as j, Hn as p, Mn as t
};