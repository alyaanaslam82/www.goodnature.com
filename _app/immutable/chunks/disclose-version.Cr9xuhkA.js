import {
    F as I,
    z as u,
    R as _,
    a9 as H,
    aF as E,
    aG as g,
    aH as D,
    a2 as p,
    ah as F,
    ap as U,
    L as j,
    T as b,
    v as z,
    aR as G,
    ad as $,
    N as C,
    X as k,
    Q as S,
    A as l,
    aS as X,
    aT as O,
    aU as Q,
    M as Y
} from "./runtime.B7th0A2U.js";

function le(e) {
    return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture"
}
const J = ["beforeinput", "click", "change", "dblclick", "contextmenu", "focusin", "focusout", "input", "keydown", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "pointerdown", "pointermove", "pointerout", "pointerover", "pointerup", "touchend", "touchmove", "touchstart"];

function fe(e) {
    return J.includes(e)
}
const K = {
    formnovalidate: "formNoValidate",
    ismap: "isMap",
    nomodule: "noModule",
    playsinline: "playsInline",
    readonly: "readOnly",
    defaultvalue: "defaultValue",
    defaultchecked: "defaultChecked",
    srcobject: "srcObject",
    novalidate: "noValidate",
    allowfullscreen: "allowFullscreen",
    disablepictureinpicture: "disablePictureInPicture",
    disableremoteplayback: "disableRemotePlayback"
};

function _e(e) {
    var t;
    return e = e.toLowerCase(), (t = K[e]) != null ? t : e
}
const Z = ["touchstart", "touchmove"];

function de(e) {
    return Z.includes(e)
}
const ee = ["textarea", "script", "style", "title"];

function ve(e) {
    return ee.includes(e)
}

function pe(e, t) {
    if (t) {
        const r = document.body;
        e.autofocus = !0, I(() => {
            document.activeElement === r && e.focus()
        })
    }
}

function he(e) {
    u && _(e) !== null && H(e)
}
let N = !1;

function te() {
    N || (N = !0, document.addEventListener("reset", e => {
        Promise.resolve().then(() => {
            var t;
            if (!e.defaultPrevented)
                for (const r of e.target.elements)(t = r.__on_r) == null || t.call(r)
        })
    }, {
        capture: !0
    }))
}

function me(e, t, r, i = !0) {
    i && r();
    for (var n of t) e.addEventListener(n, r);
    F(() => {
        for (var a of t) e.removeEventListener(a, r)
    })
}

function V(e) {
    var t = D,
        r = p;
    E(null), g(null);
    try {
        return e()
    } finally {
        E(t), g(r)
    }
}

function ye(e, t, r, i = r) {
    e.addEventListener(t, () => V(r));
    const n = e.__on_r;
    n ? e.__on_r = () => {
        n(), i(!0)
    } : e.__on_r = () => i(!0), te()
}
const re = new Set,
    ae = new Set;

function Ee(e) {
    if (!u) return;
    e.onload && e.removeAttribute("onload"), e.onerror && e.removeAttribute("onerror");
    const t = e.__e;
    t !== void 0 && (e.__e = void 0, queueMicrotask(() => {
        e.isConnected && e.dispatchEvent(t)
    }))
}

function ne(e, t, r, i = {}) {
    function n(a) {
        if (i.capture || ie.call(t, a), !a.cancelBubble) return V(() => r == null ? void 0 : r.call(this, a))
    }
    return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? I(() => {
        t.addEventListener(e, n, i)
    }) : t.addEventListener(e, n, i), n
}

function ge(e, t, r, i, n) {
    var a = {
            capture: i,
            passive: n
        },
        o = ne(e, t, r, a);
    (t === document.body || t === window || t === document) && F(() => {
        t.removeEventListener(e, o, a)
    })
}

function be(e) {
    for (var t = 0; t < e.length; t++) re.add(e[t]);
    for (var r of ae) r(e)
}

function ie(e) {
    var x;
    var t = this,
        r = t.ownerDocument,
        i = e.type,
        n = ((x = e.composedPath) == null ? void 0 : x.call(e)) || [],
        a = n[0] || e.target,
        o = 0,
        v = e.__root;
    if (v) {
        var f = n.indexOf(v);
        if (f !== -1 && (t === document || t === window)) {
            e.__root = t;
            return
        }
        var d = n.indexOf(t);
        if (d === -1) return;
        f <= d && (o = f)
    }
    if (a = n[o] || e.target, a !== t) {
        U(e, "currentTarget", {
            configurable: !0,
            get() {
                return a || r
            }
        });
        var w = D,
            T = p;
        E(null), g(null);
        try {
            for (var h, L = []; a !== null;) {
                var A = a.assignedSlot || a.parentNode || a.host || null;
                try {
                    var m = a["__" + i];
                    if (m != null && (!a.disabled || e.target === a))
                        if (j(m)) {
                            var [q, ...B] = m;
                            q.apply(a, [e, ...B])
                        } else m.call(a, e)
                } catch (y) {
                    h ? L.push(y) : h = y
                }
                if (e.cancelBubble || A === t || A === null) break;
                a = A
            }
            if (h) {
                for (let y of L) queueMicrotask(() => {
                    throw y
                });
                throw h
            }
        } finally {
            e.__root = t, delete e.currentTarget, E(w), g(T)
        }
    }
}
let s;

function we() {
    s = void 0
}

function Te(e) {
    let t = null,
        r = u;
    var i;
    if (u) {
        for (t = l, s === void 0 && (s = _(document.head)); s !== null && (s.nodeType !== 8 || s.data !== $);) s = C(s);
        s === null ? k(!1) : s = S(C(s))
    }
    u || (i = document.head.appendChild(b()));
    try {
        z(() => e(i), G)
    } finally {
        r && (k(!0), s = l, S(t))
    }
}

function W(e) {
    var t = document.createElement("template");
    return t.innerHTML = e, t.content
}

function c(e, t) {
    var r = p;
    r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t)
}

function oe(e, t) {
    var r = (t & O) !== 0,
        i = (t & Q) !== 0,
        n, a = !e.startsWith("<!>");
    return () => {
        if (u) return c(l, null), l;
        n === void 0 && (n = W(a ? e : "<!>" + e), r || (n = _(n)));
        var o = i || X ? document.importNode(n, !0) : n.cloneNode(!0);
        if (r) {
            var v = _(o),
                f = o.lastChild;
            c(v, f)
        } else c(o, o);
        return o
    }
}

function Ae(e, t) {
    var r = oe(e, t);
    return () => se(r())
}

function Se(e, t, r = "svg") {
    var i = !e.startsWith("<!>"),
        n = (t & O) !== 0,
        a = `<${r}>${i?e:"<!>"+e}</${r}>`,
        o;
    return () => {
        if (u) return c(l, null), l;
        if (!o) {
            var v = W(a),
                f = _(v);
            if (n)
                for (o = document.createDocumentFragment(); _(f);) o.appendChild(_(f));
            else o = _(f)
        }
        var d = o.cloneNode(!0);
        if (n) {
            var w = _(d),
                T = d.lastChild;
            c(w, T)
        } else c(d, d);
        return d
    }
}

function se(e) {
    if (u) return e;
    const t = e.nodeType === 11,
        r = e.tagName === "SCRIPT" ? [e] : e.querySelectorAll("script"),
        i = p;
    for (const a of r) {
        const o = document.createElement("script");
        for (var n of a.attributes) o.setAttribute(n.name, n.value);
        o.textContent = a.textContent, (t ? e.firstChild === a : e === a) && (i.nodes_start = o), (t ? e.lastChild === a : e === a) && (i.nodes_end = o), a.replaceWith(o)
    }
    return e
}

function Le(e = "") {
    if (!u) {
        var t = b(e + "");
        return c(t, t), t
    }
    var r = l;
    return r.nodeType !== 3 && (r.before(r = b()), S(r)), c(r, r), r
}

function xe() {
    if (u) return c(l, null), l;
    var e = document.createDocumentFragment(),
        t = document.createComment(""),
        r = b();
    return e.append(t, r), c(t, r), e
}

function Ce(e, t) {
    if (u) {
        p.nodes_end = l, Y();
        return
    }
    e !== null && e.before(t)
}
const ue = "5";
var P, M, R;
typeof window != "undefined" && ((R = (M = (P = window.__svelte) != null ? P : window.__svelte = {}).v) != null ? R : M.v = new Set).add(ue);
export {
    me as A, Ae as B, Ce as a, c as b, xe as c, be as d, ge as e, W as f, re as g, Te as h, ae as i, ie as j, de as k, ye as l, we as m, Se as n, he as o, pe as p, Le as q, Ee as r, le as s, oe as t, ne as u, _e as v, V as w, te as x, fe as y, ve as z
};