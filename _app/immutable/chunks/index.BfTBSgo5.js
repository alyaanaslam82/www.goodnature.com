var ae = Object.defineProperty,
    se = Object.defineProperties;
var oe = Object.getOwnPropertyDescriptors;
var O = Object.getOwnPropertySymbols;
var W = Object.prototype.hasOwnProperty,
    Q = Object.prototype.propertyIsEnumerable;
var J = (i, u, h) => u in i ? ae(i, u, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: h
    }) : i[u] = h,
    q = (i, u) => {
        for (var h in u || (u = {})) W.call(u, h) && J(i, h, u[h]);
        if (O)
            for (var h of O(u)) Q.call(u, h) && J(i, h, u[h]);
        return i
    },
    b = (i, u) => se(i, oe(u));
var R = (i, u) => {
    var h = {};
    for (var c in i) W.call(i, c) && u.indexOf(c) < 0 && (h[c] = i[c]);
    if (i != null && O)
        for (var c of O(i)) u.indexOf(c) < 0 && Q.call(i, c) && (h[c] = i[c]);
    return h
};
var D = (i, u, h) => new Promise((c, P) => {
    var p = m => {
            try {
                f(h.next(m))
            } catch (r) {
                P(r)
            }
        },
        E = m => {
            try {
                f(h.throw(m))
            } catch (r) {
                P(r)
            }
        },
        f = m => m.done ? c(m.value) : Promise.resolve(m.value).then(p, E);
    f((h = h.apply(i, u)).next())
});

function j(i, u, h = "WithinHeaders") {
    const c = {
        "x-algolia-api-key": u,
        "x-algolia-application-id": i
    };
    return {
        headers() {
            return h === "WithinHeaders" ? c : {}
        },
        queryParameters() {
            return h === "WithinQueryParameters" ? c : {}
        }
    }
}

function A({
    func: i,
    validate: u,
    aggregator: h,
    error: c,
    timeout: P = () => 0
}) {
    const p = E => new Promise((f, m) => {
        i(E).then(r => (h && h(r), u(r) ? f(r) : c && c.validate(r) ? m(new Error(c.message(r))) : setTimeout(() => {
            p(r).then(f).catch(m)
        }, P()))).catch(r => {
            m(r)
        })
    });
    return p()
}

function ie(i) {
    let u;
    const h = `algolia-client-js-${i.key}`;

    function c() {
        return u === void 0 && (u = i.localStorage || window.localStorage), u
    }

    function P() {
        return JSON.parse(c().getItem(h) || "{}")
    }
    return {
        get(p, E, f = {
            miss: () => Promise.resolve()
        }) {
            return Promise.resolve().then(() => {
                const m = JSON.stringify(p),
                    r = P()[m];
                return Promise.all([r || E(), r !== void 0])
            }).then(([m, r]) => Promise.all([m, r || f.miss(m)])).then(([m]) => m)
        },
        set(p, E) {
            return Promise.resolve().then(() => {
                const f = P();
                return f[JSON.stringify(p)] = E, c().setItem(h, JSON.stringify(f)), E
            })
        },
        delete(p) {
            return Promise.resolve().then(() => {
                const E = P();
                delete E[JSON.stringify(p)], c().setItem(h, JSON.stringify(E))
            })
        },
        clear() {
            return Promise.resolve().then(() => {
                c().removeItem(h)
            })
        }
    }
}

function ue() {
    return {
        get(i, u, h = {
            miss: () => Promise.resolve()
        }) {
            return u().then(P => Promise.all([P, h.miss(P)])).then(([P]) => P)
        },
        set(i, u) {
            return Promise.resolve(u)
        },
        delete(i) {
            return Promise.resolve()
        },
        clear() {
            return Promise.resolve()
        }
    }
}

function C(i) {
    const u = [...i.caches],
        h = u.shift();
    return h === void 0 ? ue() : {
        get(c, P, p = {
            miss: () => Promise.resolve()
        }) {
            return h.get(c, P, p).catch(() => C({
                caches: u
            }).get(c, P, p))
        },
        set(c, P) {
            return h.set(c, P).catch(() => C({
                caches: u
            }).set(c, P))
        },
        delete(c) {
            return h.delete(c).catch(() => C({
                caches: u
            }).delete(c))
        },
        clear() {
            return h.clear().catch(() => C({
                caches: u
            }).clear())
        }
    }
}

function B(i = {
    serializable: !0
}) {
    let u = {};
    return {
        get(h, c, P = {
            miss: () => Promise.resolve()
        }) {
            const p = JSON.stringify(h);
            if (p in u) return Promise.resolve(i.serializable ? JSON.parse(u[p]) : u[p]);
            const E = c();
            return E.then(f => P.miss(f)).then(() => E)
        },
        set(h, c) {
            return u[JSON.stringify(h)] = i.serializable ? JSON.stringify(c) : c, Promise.resolve(c)
        },
        delete(h) {
            return delete u[JSON.stringify(h)], Promise.resolve()
        },
        clear() {
            return u = {}, Promise.resolve()
        }
    }
}
const M = 2 * 60 * 1e3;

function V(i, u = "up") {
    const h = Date.now();

    function c() {
        return u === "up" || Date.now() - h > M
    }

    function P() {
        return u === "timed out" && Date.now() - h <= M
    }
    return b(q({}, i), {
        status: u,
        lastUpdate: h,
        isUp: c,
        isTimedOut: P
    })
}

function N(i, u, h) {
    return u = de(u), u in i ? Object.defineProperty(i, u, {
        value: h,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : i[u] = h, i
}

function ce(i, u) {
    if (typeof i != "object" || i === null) return i;
    var h = i[Symbol.toPrimitive];
    if (h !== void 0) {
        var c = h.call(i, u);
        if (typeof c != "object") return c;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (u === "string" ? String : Number)(i)
}

function de(i) {
    var u = ce(i, "string");
    return typeof u == "symbol" ? u : String(u)
}
class ee extends Error {
    constructor(u, h) {
        super(u), N(this, "name", "AlgoliaError"), h && (this.name = h)
    }
}
class re extends ee {
    constructor(u, h, c) {
        super(u, c), N(this, "stackTrace", void 0), this.stackTrace = h
    }
}
class he extends re {
    constructor(u) {
        super("Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.", u, "RetryError")
    }
}
class H extends re {
    constructor(u, h, c, P = "ApiError") {
        super(u, c, P), N(this, "status", void 0), this.status = h
    }
}
class le extends ee {
    constructor(u, h) {
        super(u, "DeserializationError"), N(this, "response", void 0), this.response = h
    }
}
class me extends H {
    constructor(u, h, c, P) {
        super(u, h, P, "DetailedApiError"), N(this, "error", void 0), this.error = c
    }
}

function qe(i) {
    const u = i;
    for (let h = i.length - 1; h > 0; h--) {
        const c = Math.floor(Math.random() * (h + 1)),
            P = i[h];
        u[h] = i[c], u[c] = P
    }
    return u
}

function Pe(i, u, h) {
    const c = ge(h);
    let P = `${i.protocol}://${i.url}/${u.charAt(0)==="/"?u.substr(1):u}`;
    return c.length && (P += `?${c}`), P
}

function ge(i) {
    const u = h => Object.prototype.toString.call(h) === "[object Object]" || Object.prototype.toString.call(h) === "[object Array]";
    return Object.keys(i).map(h => `${h}=${encodeURIComponent(u(i[h])?JSON.stringify(i[h]):i[h])}`).join("&")
}

function fe(i, u) {
    if (i.method === "GET" || i.data === void 0 && u.data === void 0) return;
    const h = Array.isArray(i.data) ? i.data : q(q({}, i.data), u.data);
    return JSON.stringify(h)
}

function we(i, u, h) {
    const c = q(q(q({
            Accept: "application/json"
        }, i), u), h),
        P = {};
    return Object.keys(c).forEach(p => {
        const E = c[p];
        P[p.toLowerCase()] = E
    }), P
}

function pe(i) {
    try {
        return JSON.parse(i.content)
    } catch (u) {
        throw new le(u.message, i)
    }
}

function ye({
    content: i,
    status: u
}, h) {
    try {
        const c = JSON.parse(i);
        return "error" in c ? new me(c.message, u, c.error, h) : new H(c.message, u, h)
    } catch (c) {}
    return new H(i, u, h)
}

function Ee({
    isTimedOut: i,
    status: u
}) {
    return !i && ~~u === 0
}

function Se({
    isTimedOut: i,
    status: u
}) {
    return i || Ee({
        isTimedOut: i,
        status: u
    }) || ~~(u / 100) !== 2 && ~~(u / 100) !== 4
}

function Te({
    status: i
}) {
    return ~~(i / 100) === 2
}

function be(i) {
    return i.map(u => te(u))
}

function te(i) {
    const u = i.request.headers["x-algolia-api-key"] ? {
        "x-algolia-api-key": "*****"
    } : {};
    return b(q({}, i), {
        request: b(q({}, i.request), {
            headers: q(q({}, i.request.headers), u)
        })
    })
}

function k({
    hosts: i,
    hostsCache: u,
    baseHeaders: h,
    baseQueryParameters: c,
    algoliaAgent: P,
    timeouts: p,
    requester: E,
    requestsCache: f,
    responsesCache: m
}) {
    function r(n) {
        return D(this, null, function*() {
            const a = yield Promise.all(n.map(g => u.get(g, () => Promise.resolve(V(g))))), s = a.filter(g => g.isUp()), o = a.filter(g => g.isTimedOut()), l = [...s, ...o];
            return {
                hosts: l.length > 0 ? l : n,
                getTimeout(g, w) {
                    return (o.length === 0 && g === 0 ? 1 : o.length + 3 + g) * w
                }
            }
        })
    }

    function e(n, a, s = !0) {
        return D(this, null, function*() {
            const o = [],
                l = fe(n, a),
                d = we(h, n.headers, a.headers),
                g = n.method === "GET" ? q(q({}, n.data), a.data) : {},
                w = q(q(q({}, c), n.queryParameters), g);
            if (P.value && (w["x-algolia-agent"] = P.value), a && a.queryParameters)
                for (const I of Object.keys(a.queryParameters)) !a.queryParameters[I] || Object.prototype.toString.call(a.queryParameters[I]) === "[object Object]" ? w[I] = a.queryParameters[I] : w[I] = a.queryParameters[I].toString();
            let y = 0;
            const S = (I, $) => D(this, null, function*() {
                    const U = I.pop();
                    if (U === void 0) throw new he(be(o));
                    let z = a.timeout;
                    z === void 0 && (z = s ? p.read : p.write);
                    const L = {
                            data: l,
                            headers: d,
                            method: n.method,
                            url: Pe(U, n.path, w),
                            connectTimeout: $(y, p.connect),
                            responseTimeout: $(y, z)
                        },
                        K = _ => {
                            const F = {
                                request: L,
                                response: _,
                                host: U,
                                triesLeft: I.length
                            };
                            return o.push(F), F
                        },
                        x = yield E.send(L);
                    if (Se(x)) {
                        const _ = K(x);
                        return x.isTimedOut && y++, console.log("Retryable failure", te(_)), yield u.set(U, V(U, x.isTimedOut ? "timed out" : "down")), S(I, $)
                    }
                    if (Te(x)) return pe(x);
                    throw K(x), ye(x, o)
                }),
                T = i.filter(I => I.accept === "readWrite" || (s ? I.accept === "read" : I.accept === "write")),
                v = yield r(T);
            return S([...v.hosts].reverse(), v.getTimeout)
        })
    }

    function t(n, a = {}) {
        const s = n.useReadTransporter || n.method === "GET";
        if (!s) return e(n, a, s);
        const o = () => e(n, a);
        if ((a.cacheable || n.cacheable) !== !0) return o();
        const d = {
            request: n,
            requestOptions: a,
            transporter: {
                queryParameters: c,
                headers: h
            }
        };
        return m.get(d, () => f.get(d, () => f.set(d, o()).then(g => Promise.all([f.delete(d), g]), g => Promise.all([f.delete(d), Promise.reject(g)])).then(([g, w]) => w)), {
            miss: g => m.set(d, g)
        })
    }
    return {
        hostsCache: u,
        requester: E,
        timeouts: p,
        algoliaAgent: P,
        baseHeaders: h,
        baseQueryParameters: c,
        hosts: i,
        request: t,
        requestsCache: f,
        responsesCache: m
    }
}

function Ie(i) {
    const u = {
        value: `Algolia for JavaScript (${i})`,
        add(h) {
            const c = `; ${h.segment}${h.version!==void 0?` (${h.version})`:""}`;
            return u.value.indexOf(c) === -1 && (u.value = `${u.value}${c}`), u
        }
    };
    return u
}

function G({
    algoliaAgents: i,
    client: u,
    version: h
}) {
    const c = Ie(h).add({
        segment: u,
        version: h
    });
    return i.forEach(P => c.add(P)), c
}
const Re = 1e3,
    xe = 2e3,
    Ae = 3e4,
    Ue = "5.0.0-alpha.85",
    X = ["de", "us"];

function Ce(i) {
    return [{
        url: i ? "analytics.{region}.algolia.com".replace("{region}", i) : "analytics.algolia.com",
        accept: "readWrite",
        protocol: "https"
    }]
}

function Ne(E) {
    var f = E,
        {
            appId: i,
            apiKey: u,
            authMode: h,
            algoliaAgents: c,
            region: P
        } = f,
        p = R(f, ["appId", "apiKey", "authMode", "algoliaAgents", "region"]);
    const m = j(i, u, h),
        r = k(b(q({
            hosts: Ce(P)
        }, p), {
            algoliaAgent: G({
                algoliaAgents: c,
                client: "Abtesting",
                version: Ue
            }),
            baseHeaders: q(q({
                "content-type": "text/plain"
            }, m.headers()), p.baseHeaders),
            baseQueryParameters: q(q({}, m.queryParameters()), p.baseQueryParameters)
        }));
    return {
        transporter: r,
        appId: i,
        clearCache() {
            return Promise.all([r.requestsCache.clear(), r.responsesCache.clear()]).then(() => {})
        },
        get _ua() {
            return r.algoliaAgent.value
        },
        addAlgoliaAgent(e, t) {
            r.algoliaAgent.add({
                segment: e,
                version: t
            })
        },
        addABTests(e, t) {
            if (!e) throw new Error("Parameter `addABTestsRequest` is required when calling `addABTests`.");
            if (!e.name) throw new Error("Parameter `addABTestsRequest.name` is required when calling `addABTests`.");
            if (!e.variants) throw new Error("Parameter `addABTestsRequest.variants` is required when calling `addABTests`.");
            if (!e.endAt) throw new Error("Parameter `addABTestsRequest.endAt` is required when calling `addABTests`.");
            const o = {
                method: "POST",
                path: "/2/abtests",
                queryParameters: {},
                headers: {},
                data: e
            };
            return r.request(o, t)
        },
        del({
            path: e,
            parameters: t
        }, n) {
            if (!e) throw new Error("Parameter `path` is required when calling `del`.");
            const l = {
                method: "DELETE",
                path: "/1{path}".replace("{path}", e),
                queryParameters: t || {},
                headers: {}
            };
            return r.request(l, n)
        },
        deleteABTest({
            id: e
        }, t) {
            if (!e) throw new Error("Parameter `id` is required when calling `deleteABTest`.");
            const o = {
                method: "DELETE",
                path: "/2/abtests/{id}".replace("{id}", encodeURIComponent(e)),
                queryParameters: {},
                headers: {}
            };
            return r.request(o, t)
        },
        get({
            path: e,
            parameters: t
        }, n) {
            if (!e) throw new Error("Parameter `path` is required when calling `get`.");
            const l = {
                method: "GET",
                path: "/1{path}".replace("{path}", e),
                queryParameters: t || {},
                headers: {}
            };
            return r.request(l, n)
        },
        getABTest({
            id: e
        }, t) {
            if (!e) throw new Error("Parameter `id` is required when calling `getABTest`.");
            const o = {
                method: "GET",
                path: "/2/abtests/{id}".replace("{id}", encodeURIComponent(e)),
                queryParameters: {},
                headers: {}
            };
            return r.request(o, t)
        },
        listABTests({
            offset: e,
            limit: t,
            indexPrefix: n,
            indexSuffix: a
        } = {}, s = void 0) {
            const o = "/2/abtests",
                l = {},
                d = {};
            e !== void 0 && (d.offset = e.toString()), t !== void 0 && (d.limit = t.toString()), n !== void 0 && (d.indexPrefix = n.toString()), a !== void 0 && (d.indexSuffix = a.toString());
            const g = {
                method: "GET",
                path: o,
                queryParameters: d,
                headers: l
            };
            return r.request(g, s)
        },
        post({
            path: e,
            parameters: t,
            body: n
        }, a) {
            if (!e) throw new Error("Parameter `path` is required when calling `post`.");
            const d = {
                method: "POST",
                path: "/1{path}".replace("{path}", e),
                queryParameters: t || {},
                headers: {},
                data: n || {}
            };
            return r.request(d, a)
        },
        put({
            path: e,
            parameters: t,
            body: n
        }, a) {
            if (!e) throw new Error("Parameter `path` is required when calling `put`.");
            const d = {
                method: "PUT",
                path: "/1{path}".replace("{path}", e),
                queryParameters: t || {},
                headers: {},
                data: n || {}
            };
            return r.request(d, a)
        },
        stopABTest({
            id: e
        }, t) {
            if (!e) throw new Error("Parameter `id` is required when calling `stopABTest`.");
            const o = {
                method: "POST",
                path: "/2/abtests/{id}/stop".replace("{id}", encodeURIComponent(e)),
                queryParameters: {},
                headers: {}
            };
            return r.request(o, t)
        }
    }
}
const ve = "5.0.0-alpha.85",
    Y = ["de", "us"];

function Oe(i) {
    return [{
        url: i ? "analytics.{region}.algolia.com".replace("{region}", i) : "analytics.algolia.com",
        accept: "readWrite",
        protocol: "https"
    }]
}

function De(E) {
    var f = E,
        {
            appId: i,
            apiKey: u,
            authMode: h,
            algoliaAgents: c,
            region: P
        } = f,
        p = R(f, ["appId", "apiKey", "authMode", "algoliaAgents", "region"]);
    const m = j(i, u, h),
        r = k(b(q({
            hosts: Oe(P)
        }, p), {
            algoliaAgent: G({
                algoliaAgents: c,
                client: "Analytics",
                version: ve
            }),
            baseHeaders: q(q({
                "content-type": "text/plain"
            }, m.headers()), p.baseHeaders),
            baseQueryParameters: q(q({}, m.queryParameters()), p.baseQueryParameters)
        }));
    return {
        transporter: r,
        appId: i,
        clearCache() {
            return Promise.all([r.requestsCache.clear(), r.responsesCache.clear()]).then(() => {})
        },
        get _ua() {
            return r.algoliaAgent.value
        },
        addAlgoliaAgent(e, t) {
            r.algoliaAgent.add({
                segment: e,
                version: t
            })
        },
        del({
            path: e,
            parameters: t
        }, n) {
            if (!e) throw new Error("Parameter `path` is required when calling `del`.");
            const l = {
                method: "DELETE",
                path: "/1{path}".replace("{path}", e),
                queryParameters: t || {},
                headers: {}
            };
            return r.request(l, n)
        },
        get({
            path: e,
            parameters: t
        }, n) {
            if (!e) throw new Error("Parameter `path` is required when calling `get`.");
            const l = {
                method: "GET",
                path: "/1{path}".replace("{path}", e),
                queryParameters: t || {},
                headers: {}
            };
            return r.request(l, n)
        },
        getAverageClickPosition({
            index: e,
            startDate: t,
            endDate: n,
            tags: a
        }, s) {
            if (!e) throw new Error("Parameter `index` is required when calling `getAverageClickPosition`.");
            const o = "/2/clicks/averageClickPosition",
                l = {},
                d = {};
            e !== void 0 && (d.index = e.toString()), t !== void 0 && (d.startDate = t.toString()), n !== void 0 && (d.endDate = n.toString()), a !== void 0 && (d.tags = a.toString());
            const g = {
                method: "GET",
                path: o,
                queryParameters: d,
                headers: l
            };
            return r.request(g, s)
        },
        getClickPositions({
            index: e,
            startDate: t,
            endDate: n,
            tags: a
        }, s) {
            if (!e) throw new Error("Parameter `index` is required when calling `getClickPositions`.");
            const o = "/2/clicks/positions",
                l = {},
                d = {};
            e !== void 0 && (d.index = e.toString()), t !== void 0 && (d.startDate = t.toString()), n !== void 0 && (d.endDate = n.toString()), a !== void 0 && (d.tags = a.toString());
            const g = {
                method: "GET",
                path: o,
                queryParameters: d,
                headers: l
            };
            return r.request(g, s)
        },
        getClickThroughRate({
            index: e,
            startDate: t,
            endDate: n,
            tags: a
        }, s) {
            if (!e) throw new Error("Parameter `index` is required when calling `getClickThroughRate`.");
            const o = "/2/clicks/clickThroughRate",
                l = {},
                d = {};
            e !== void 0 && (d.index = e.toString()), t !== void 0 && (d.startDate = t.toString()), n !== void 0 && (d.endDate = n.toString()), a !== void 0 && (d.tags = a.toString());
            const g = {
                method: "GET",
                path: o,
                queryParameters: d,
                headers: l
            };
            return r.request(g, s)
        },
        getConversationRate({
            index: e,
            startDate: t,
            endDate: n,
            tags: a
        }, s) {
            if (!e) throw new Error("Parameter `index` is required when calling `getConversationRate`.");
            const o = "/2/conversions/conversionRate",
                l = {},
                d = {};
            e !== void 0 && (d.index = e.toString()), t !== void 0 && (d.startDate = t.toString()), n !== void 0 && (d.endDate = n.toString()), a !== void 0 && (d.tags = a.toString());
            const g = {
                method: "GET",
                path: o,
                queryParameters: d,
                headers: l
            };
            return r.request(g, s)
        },
        getNoClickRate({
            index: e,
            startDate: t,
            endDate: n,
            tags: a
        }, s) {
            if (!e) throw new Error("Parameter `index` is required when calling `getNoClickRate`.");
            const o = "/2/searches/noClickRate",
                l = {},
                d = {};
            e !== void 0 && (d.index = e.toString()), t !== void 0 && (d.startDate = t.toString()), n !== void 0 && (d.endDate = n.toString()), a !== void 0 && (d.tags = a.toString());
            const g = {
                method: "GET",
                path: o,
                queryParameters: d,
                headers: l
            };
            return r.request(g, s)
        },
        getNoResultsRate({
            index: e,
            startDate: t,
            endDate: n,
            tags: a
        }, s) {
            if (!e) throw new Error("Parameter `index` is required when calling `getNoResultsRate`.");
            const o = "/2/searches/noResultRate",
                l = {},
                d = {};
            e !== void 0 && (d.index = e.toString()), t !== void 0 && (d.startDate = t.toString()), n !== void 0 && (d.endDate = n.toString()), a !== void 0 && (d.tags = a.toString());
            const g = {
                method: "GET",
                path: o,
                queryParameters: d,
                headers: l
            };
            return r.request(g, s)
        },
        getSearchesCount({
            index: e,
            startDate: t,
            endDate: n,
            tags: a
        }, s) {
            if (!e) throw new Error("Parameter `index` is required when calling `getSearchesCount`.");
            const o = "/2/searches/count",
                l = {},
                d = {};
            e !== void 0 && (d.index = e.toString()), t !== void 0 && (d.startDate = t.toString()), n !== void 0 && (d.endDate = n.toString()), a !== void 0 && (d.tags = a.toString());
            const g = {
                method: "GET",
                path: o,
                queryParameters: d,
                headers: l
            };
            return r.request(g, s)
        },
        getSearchesNoClicks({
            index: e,
            startDate: t,
            endDate: n,
            limit: a,
            offset: s,
            tags: o
        }, l) {
            if (!e) throw new Error("Parameter `index` is required when calling `getSearchesNoClicks`.");
            const d = "/2/searches/noClicks",
                g = {},
                w = {};
            e !== void 0 && (w.index = e.toString()), t !== void 0 && (w.startDate = t.toString()), n !== void 0 && (w.endDate = n.toString()), a !== void 0 && (w.limit = a.toString()), s !== void 0 && (w.offset = s.toString()), o !== void 0 && (w.tags = o.toString());
            const y = {
                method: "GET",
                path: d,
                queryParameters: w,
                headers: g
            };
            return r.request(y, l)
        },
        getSearchesNoResults({
            index: e,
            startDate: t,
            endDate: n,
            limit: a,
            offset: s,
            tags: o
        }, l) {
            if (!e) throw new Error("Parameter `index` is required when calling `getSearchesNoResults`.");
            const d = "/2/searches/noResults",
                g = {},
                w = {};
            e !== void 0 && (w.index = e.toString()), t !== void 0 && (w.startDate = t.toString()), n !== void 0 && (w.endDate = n.toString()), a !== void 0 && (w.limit = a.toString()), s !== void 0 && (w.offset = s.toString()), o !== void 0 && (w.tags = o.toString());
            const y = {
                method: "GET",
                path: d,
                queryParameters: w,
                headers: g
            };
            return r.request(y, l)
        },
        getStatus({
            index: e
        }, t) {
            if (!e) throw new Error("Parameter `index` is required when calling `getStatus`.");
            const n = "/2/status",
                a = {},
                s = {};
            e !== void 0 && (s.index = e.toString());
            const o = {
                method: "GET",
                path: n,
                queryParameters: s,
                headers: a
            };
            return r.request(o, t)
        },
        getTopCountries({
            index: e,
            startDate: t,
            endDate: n,
            limit: a,
            offset: s,
            tags: o
        }, l) {
            if (!e) throw new Error("Parameter `index` is required when calling `getTopCountries`.");
            const d = "/2/countries",
                g = {},
                w = {};
            e !== void 0 && (w.index = e.toString()), t !== void 0 && (w.startDate = t.toString()), n !== void 0 && (w.endDate = n.toString()), a !== void 0 && (w.limit = a.toString()), s !== void 0 && (w.offset = s.toString()), o !== void 0 && (w.tags = o.toString());
            const y = {
                method: "GET",
                path: d,
                queryParameters: w,
                headers: g
            };
            return r.request(y, l)
        },
        getTopFilterAttributes({
            index: e,
            search: t,
            startDate: n,
            endDate: a,
            limit: s,
            offset: o,
            tags: l
        }, d) {
            if (!e) throw new Error("Parameter `index` is required when calling `getTopFilterAttributes`.");
            const g = "/2/filters",
                w = {},
                y = {};
            e !== void 0 && (y.index = e.toString()), t !== void 0 && (y.search = t.toString()), n !== void 0 && (y.startDate = n.toString()), a !== void 0 && (y.endDate = a.toString()), s !== void 0 && (y.limit = s.toString()), o !== void 0 && (y.offset = o.toString()), l !== void 0 && (y.tags = l.toString());
            const S = {
                method: "GET",
                path: g,
                queryParameters: y,
                headers: w
            };
            return r.request(S, d)
        },
        getTopFilterForAttribute({
            attribute: e,
            index: t,
            search: n,
            startDate: a,
            endDate: s,
            limit: o,
            offset: l,
            tags: d
        }, g) {
            if (!e) throw new Error("Parameter `attribute` is required when calling `getTopFilterForAttribute`.");
            if (!t) throw new Error("Parameter `index` is required when calling `getTopFilterForAttribute`.");
            const w = "/2/filters/{attribute}".replace("{attribute}", encodeURIComponent(e)),
                y = {},
                S = {};
            t !== void 0 && (S.index = t.toString()), n !== void 0 && (S.search = n.toString()), a !== void 0 && (S.startDate = a.toString()), s !== void 0 && (S.endDate = s.toString()), o !== void 0 && (S.limit = o.toString()), l !== void 0 && (S.offset = l.toString()), d !== void 0 && (S.tags = d.toString());
            const T = {
                method: "GET",
                path: w,
                queryParameters: S,
                headers: y
            };
            return r.request(T, g)
        },
        getTopFiltersNoResults({
            index: e,
            search: t,
            startDate: n,
            endDate: a,
            limit: s,
            offset: o,
            tags: l
        }, d) {
            if (!e) throw new Error("Parameter `index` is required when calling `getTopFiltersNoResults`.");
            const g = "/2/filters/noResults",
                w = {},
                y = {};
            e !== void 0 && (y.index = e.toString()), t !== void 0 && (y.search = t.toString()), n !== void 0 && (y.startDate = n.toString()), a !== void 0 && (y.endDate = a.toString()), s !== void 0 && (y.limit = s.toString()), o !== void 0 && (y.offset = o.toString()), l !== void 0 && (y.tags = l.toString());
            const S = {
                method: "GET",
                path: g,
                queryParameters: y,
                headers: w
            };
            return r.request(S, d)
        },
        getTopHits({
            index: e,
            search: t,
            clickAnalytics: n,
            startDate: a,
            endDate: s,
            limit: o,
            offset: l,
            tags: d
        }, g) {
            if (!e) throw new Error("Parameter `index` is required when calling `getTopHits`.");
            const w = "/2/hits",
                y = {},
                S = {};
            e !== void 0 && (S.index = e.toString()), t !== void 0 && (S.search = t.toString()), n !== void 0 && (S.clickAnalytics = n.toString()), a !== void 0 && (S.startDate = a.toString()), s !== void 0 && (S.endDate = s.toString()), o !== void 0 && (S.limit = o.toString()), l !== void 0 && (S.offset = l.toString()), d !== void 0 && (S.tags = d.toString());
            const T = {
                method: "GET",
                path: w,
                queryParameters: S,
                headers: y
            };
            return r.request(T, g)
        },
        getTopSearches({
            index: e,
            clickAnalytics: t,
            startDate: n,
            endDate: a,
            orderBy: s,
            direction: o,
            limit: l,
            offset: d,
            tags: g
        }, w) {
            if (!e) throw new Error("Parameter `index` is required when calling `getTopSearches`.");
            const y = "/2/searches",
                S = {},
                T = {};
            e !== void 0 && (T.index = e.toString()), t !== void 0 && (T.clickAnalytics = t.toString()), n !== void 0 && (T.startDate = n.toString()), a !== void 0 && (T.endDate = a.toString()), s !== void 0 && (T.orderBy = s.toString()), o !== void 0 && (T.direction = o.toString()), l !== void 0 && (T.limit = l.toString()), d !== void 0 && (T.offset = d.toString()), g !== void 0 && (T.tags = g.toString());
            const v = {
                method: "GET",
                path: y,
                queryParameters: T,
                headers: S
            };
            return r.request(v, w)
        },
        getUsersCount({
            index: e,
            startDate: t,
            endDate: n,
            tags: a
        }, s) {
            if (!e) throw new Error("Parameter `index` is required when calling `getUsersCount`.");
            const o = "/2/users/count",
                l = {},
                d = {};
            e !== void 0 && (d.index = e.toString()), t !== void 0 && (d.startDate = t.toString()), n !== void 0 && (d.endDate = n.toString()), a !== void 0 && (d.tags = a.toString());
            const g = {
                method: "GET",
                path: o,
                queryParameters: d,
                headers: l
            };
            return r.request(g, s)
        },
        post({
            path: e,
            parameters: t,
            body: n
        }, a) {
            if (!e) throw new Error("Parameter `path` is required when calling `post`.");
            const d = {
                method: "POST",
                path: "/1{path}".replace("{path}", e),
                queryParameters: t || {},
                headers: {},
                data: n || {}
            };
            return r.request(d, a)
        },
        put({
            path: e,
            parameters: t,
            body: n
        }, a) {
            if (!e) throw new Error("Parameter `path` is required when calling `put`.");
            const d = {
                method: "PUT",
                path: "/1{path}".replace("{path}", e),
                queryParameters: t || {},
                headers: {},
                data: n || {}
            };
            return r.request(d, a)
        }
    }
}
const je = "5.0.0-alpha.85",
    Z = ["eu", "us"];

function ke(i) {
    return [{
        url: "personalization.{region}.algolia.com".replace("{region}", i),
        accept: "readWrite",
        protocol: "https"
    }]
}

function Ge(E) {
    var f = E,
        {
            appId: i,
            apiKey: u,
            authMode: h,
            algoliaAgents: c,
            region: P
        } = f,
        p = R(f, ["appId", "apiKey", "authMode", "algoliaAgents", "region"]);
    const m = j(i, u, h),
        r = k(b(q({
            hosts: ke(P)
        }, p), {
            algoliaAgent: G({
                algoliaAgents: c,
                client: "Personalization",
                version: je
            }),
            baseHeaders: q(q({
                "content-type": "text/plain"
            }, m.headers()), p.baseHeaders),
            baseQueryParameters: q(q({}, m.queryParameters()), p.baseQueryParameters)
        }));
    return {
        transporter: r,
        appId: i,
        clearCache() {
            return Promise.all([r.requestsCache.clear(), r.responsesCache.clear()]).then(() => {})
        },
        get _ua() {
            return r.algoliaAgent.value
        },
        addAlgoliaAgent(e, t) {
            r.algoliaAgent.add({
                segment: e,
                version: t
            })
        },
        del({
            path: e,
            parameters: t
        }, n) {
            if (!e) throw new Error("Parameter `path` is required when calling `del`.");
            const l = {
                method: "DELETE",
                path: "/1{path}".replace("{path}", e),
                queryParameters: t || {},
                headers: {}
            };
            return r.request(l, n)
        },
        deleteUserProfile({
            userToken: e
        }, t) {
            if (!e) throw new Error("Parameter `userToken` is required when calling `deleteUserProfile`.");
            const o = {
                method: "DELETE",
                path: "/1/profiles/{userToken}".replace("{userToken}", encodeURIComponent(e)),
                queryParameters: {},
                headers: {}
            };
            return r.request(o, t)
        },
        get({
            path: e,
            parameters: t
        }, n) {
            if (!e) throw new Error("Parameter `path` is required when calling `get`.");
            const l = {
                method: "GET",
                path: "/1{path}".replace("{path}", e),
                queryParameters: t || {},
                headers: {}
            };
            return r.request(l, n)
        },
        getPersonalizationStrategy(e) {
            const s = {
                method: "GET",
                path: "/1/strategies/personalization",
                queryParameters: {},
                headers: {}
            };
            return r.request(s, e)
        },
        getUserTokenProfile({
            userToken: e
        }, t) {
            if (!e) throw new Error("Parameter `userToken` is required when calling `getUserTokenProfile`.");
            const o = {
                method: "GET",
                path: "/1/profiles/personalization/{userToken}".replace("{userToken}", encodeURIComponent(e)),
                queryParameters: {},
                headers: {}
            };
            return r.request(o, t)
        },
        post({
            path: e,
            parameters: t,
            body: n
        }, a) {
            if (!e) throw new Error("Parameter `path` is required when calling `post`.");
            const d = {
                method: "POST",
                path: "/1{path}".replace("{path}", e),
                queryParameters: t || {},
                headers: {},
                data: n || {}
            };
            return r.request(d, a)
        },
        put({
            path: e,
            parameters: t,
            body: n
        }, a) {
            if (!e) throw new Error("Parameter `path` is required when calling `put`.");
            const d = {
                method: "PUT",
                path: "/1{path}".replace("{path}", e),
                queryParameters: t || {},
                headers: {},
                data: n || {}
            };
            return r.request(d, a)
        },
        setPersonalizationStrategy(e, t) {
            if (!e) throw new Error("Parameter `personalizationStrategyParams` is required when calling `setPersonalizationStrategy`.");
            if (!e.eventScoring) throw new Error("Parameter `personalizationStrategyParams.eventScoring` is required when calling `setPersonalizationStrategy`.");
            if (!e.facetScoring) throw new Error("Parameter `personalizationStrategyParams.facetScoring` is required when calling `setPersonalizationStrategy`.");
            if (!e.personalizationImpact) throw new Error("Parameter `personalizationStrategyParams.personalizationImpact` is required when calling `setPersonalizationStrategy`.");
            const o = {
                method: "POST",
                path: "/1/strategies/personalization",
                queryParameters: {},
                headers: {},
                data: e
            };
            return r.request(o, t)
        }
    }
}
const ne = "5.0.0-alpha.85";

function $e(i) {
    return [{
        url: `${i}-dsn.algolia.net`,
        accept: "read",
        protocol: "https"
    }, {
        url: `${i}.algolia.net`,
        accept: "write",
        protocol: "https"
    }].concat(qe([{
        url: `${i}-1.algolianet.com`,
        accept: "readWrite",
        protocol: "https"
    }, {
        url: `${i}-2.algolianet.com`,
        accept: "readWrite",
        protocol: "https"
    }, {
        url: `${i}-3.algolianet.com`,
        accept: "readWrite",
        protocol: "https"
    }]))
}

function ze(p) {
    var E = p,
        {
            appId: i,
            apiKey: u,
            authMode: h,
            algoliaAgents: c
        } = E,
        P = R(E, ["appId", "apiKey", "authMode", "algoliaAgents"]);
    const f = j(i, u, h),
        m = k(b(q({
            hosts: $e(i)
        }, P), {
            algoliaAgent: G({
                algoliaAgents: c,
                client: "Search",
                version: ne
            }),
            baseHeaders: q(q({
                "content-type": "text/plain"
            }, f.headers()), P.baseHeaders),
            baseQueryParameters: q(q({}, f.queryParameters()), P.baseQueryParameters)
        }));
    return {
        transporter: m,
        appId: i,
        clearCache() {
            return Promise.all([m.requestsCache.clear(), m.responsesCache.clear()]).then(() => {})
        },
        get _ua() {
            return m.algoliaAgent.value
        },
        addAlgoliaAgent(r, e) {
            m.algoliaAgent.add({
                segment: r,
                version: e
            })
        },
        waitForTask({
            indexName: r,
            taskID: e,
            maxRetries: t = 50,
            timeout: n = s => Math.min(s * 200, 5e3)
        }, a) {
            let s = 0;
            return A({
                func: () => this.getTask({
                    indexName: r,
                    taskID: e
                }, a),
                validate: o => o.status === "published",
                aggregator: () => s += 1,
                error: {
                    validate: () => s >= t,
                    message: () => `The maximum number of retries exceeded. (${s}/${t})`
                },
                timeout: () => n(s)
            })
        },
        waitForApiKey({
            operation: r,
            key: e,
            apiKey: t,
            maxRetries: n = 50,
            timeout: a = o => Math.min(o * 200, 5e3)
        }, s) {
            let o = 0;
            const l = {
                aggregator: () => o += 1,
                error: {
                    validate: () => o >= n,
                    message: () => `The maximum number of retries exceeded. (${o}/${n})`
                },
                timeout: () => a(o)
            };
            if (r === "update") {
                if (!t) throw new Error("`apiKey` is required when waiting for an `update` operation.");
                return A(b(q({}, l), {
                    func: () => this.getApiKey({
                        key: e
                    }, s),
                    validate: d => {
                        for (const g of Object.keys(t)) {
                            const w = t[g],
                                y = d[g];
                            if (Array.isArray(w) && Array.isArray(y)) {
                                if (w.length !== y.length || w.some((S, T) => S !== y[T])) return !1
                            } else if (w !== y) return !1
                        }
                        return !0
                    }
                }))
            }
            return A(b(q({}, l), {
                func: () => this.getApiKey({
                    key: e
                }, s).catch(d => d),
                validate: d => r === "add" ? d.status !== 404 : d.status === 404
            }))
        },
        browseObjects(a, n) {
            var s = a,
                {
                    indexName: r,
                    browseParams: e
                } = s,
                t = R(s, ["indexName", "browseParams"]);
            return A(q({
                func: o => this.browse({
                    indexName: r,
                    browseParams: q({
                        cursor: o ? o.cursor : void 0
                    }, e)
                }, n),
                validate: o => o.cursor === void 0
            }, t))
        },
        browseRules(a, n) {
            var s = a,
                {
                    indexName: r,
                    searchRulesParams: e
                } = s,
                t = R(s, ["indexName", "searchRulesParams"]);
            const o = q({
                hitsPerPage: 1e3
            }, e);
            return A(q({
                func: l => this.searchRules({
                    indexName: r,
                    searchRulesParams: b(q({}, o), {
                        page: l ? l.page + 1 : o.page || 0
                    })
                }, n),
                validate: l => l.nbHits < o.hitsPerPage
            }, t))
        },
        browseSynonyms(s, a) {
            var o = s,
                {
                    indexName: r,
                    validate: e,
                    aggregator: t
                } = o,
                n = R(o, ["indexName", "validate", "aggregator"]);
            const l = q({
                hitsPerPage: 1e3
            }, n);
            return A(q({
                func: d => this.searchSynonyms(b(q({}, l), {
                    indexName: r,
                    page: d ? d.page + 1 : n.page || 0
                }), a),
                validate: d => d.nbHits < l.hitsPerPage
            }, n))
        },
        addApiKey(r, e) {
            if (!r) throw new Error("Parameter `apiKey` is required when calling `addApiKey`.");
            if (!r.acl) throw new Error("Parameter `apiKey.acl` is required when calling `addApiKey`.");
            const s = {
                method: "POST",
                path: "/1/keys",
                queryParameters: {},
                headers: {},
                data: r
            };
            return m.request(s, e)
        },
        addOrUpdateObject({
            indexName: r,
            objectID: e,
            body: t
        }, n) {
            if (!r) throw new Error("Parameter `indexName` is required when calling `addOrUpdateObject`.");
            if (!e) throw new Error("Parameter `objectID` is required when calling `addOrUpdateObject`.");
            if (!t) throw new Error("Parameter `body` is required when calling `addOrUpdateObject`.");
            const l = {
                method: "PUT",
                path: "/1/indexes/{indexName}/{objectID}".replace("{indexName}", encodeURIComponent(r)).replace("{objectID}", encodeURIComponent(e)),
                queryParameters: {},
                headers: {},
                data: t
            };
            return m.request(l, n)
        },
        appendSource(r, e) {
            if (!r) throw new Error("Parameter `source` is required when calling `appendSource`.");
            if (!r.source) throw new Error("Parameter `source.source` is required when calling `appendSource`.");
            const s = {
                method: "POST",
                path: "/1/security/sources/append",
                queryParameters: {},
                headers: {},
                data: r
            };
            return m.request(s, e)
        },
        assignUserId({
            xAlgoliaUserID: r,
            assignUserIdParams: e
        }, t) {
            if (!r) throw new Error("Parameter `xAlgoliaUserID` is required when calling `assignUserId`.");
            if (!e) throw new Error("Parameter `assignUserIdParams` is required when calling `assignUserId`.");
            if (!e.cluster) throw new Error("Parameter `assignUserIdParams.cluster` is required when calling `assignUserId`.");
            const n = "/1/clusters/mapping",
                a = {},
                s = {};
            r !== void 0 && (a["X-Algolia-User-ID"] = r.toString());
            const o = {
                method: "POST",
                path: n,
                queryParameters: s,
                headers: a,
                data: e
            };
            return m.request(o, t)
        },
        batch({
            indexName: r,
            batchWriteParams: e
        }, t) {
            if (!r) throw new Error("Parameter `indexName` is required when calling `batch`.");
            if (!e) throw new Error("Parameter `batchWriteParams` is required when calling `batch`.");
            if (!e.requests) throw new Error("Parameter `batchWriteParams.requests` is required when calling `batch`.");
            const o = {
                method: "POST",
                path: "/1/indexes/{indexName}/batch".replace("{indexName}", encodeURIComponent(r)),
                queryParameters: {},
                headers: {},
                data: e
            };
            return m.request(o, t)
        },
        batchAssignUserIds({
            xAlgoliaUserID: r,
            batchAssignUserIdsParams: e
        }, t) {
            if (!r) throw new Error("Parameter `xAlgoliaUserID` is required when calling `batchAssignUserIds`.");
            if (!e) throw new Error("Parameter `batchAssignUserIdsParams` is required when calling `batchAssignUserIds`.");
            if (!e.cluster) throw new Error("Parameter `batchAssignUserIdsParams.cluster` is required when calling `batchAssignUserIds`.");
            if (!e.users) throw new Error("Parameter `batchAssignUserIdsParams.users` is required when calling `batchAssignUserIds`.");
            const n = "/1/clusters/mapping/batch",
                a = {},
                s = {};
            r !== void 0 && (a["X-Algolia-User-ID"] = r.toString());
            const o = {
                method: "POST",
                path: n,
                queryParameters: s,
                headers: a,
                data: e
            };
            return m.request(o, t)
        },
        batchDictionaryEntries({
            dictionaryName: r,
            batchDictionaryEntriesParams: e
        }, t) {
            if (!r) throw new Error("Parameter `dictionaryName` is required when calling `batchDictionaryEntries`.");
            if (!e) throw new Error("Parameter `batchDictionaryEntriesParams` is required when calling `batchDictionaryEntries`.");
            if (!e.requests) throw new Error("Parameter `batchDictionaryEntriesParams.requests` is required when calling `batchDictionaryEntries`.");
            const o = {
                method: "POST",
                path: "/1/dictionaries/{dictionaryName}/batch".replace("{dictionaryName}", encodeURIComponent(r)),
                queryParameters: {},
                headers: {},
                data: e
            };
            return m.request(o, t)
        },
        browse({
            indexName: r,
            browseParams: e
        }, t) {
            if (!r) throw new Error("Parameter `indexName` is required when calling `browse`.");
            const o = {
                method: "POST",
                path: "/1/indexes/{indexName}/browse".replace("{indexName}", encodeURIComponent(r)),
                queryParameters: {},
                headers: {},
                data: e || {}
            };
            return m.request(o, t)
        },
        clearAllSynonyms({
            indexName: r,
            forwardToReplicas: e
        }, t) {
            if (!r) throw new Error("Parameter `indexName` is required when calling `clearAllSynonyms`.");
            const n = "/1/indexes/{indexName}/synonyms/clear".replace("{indexName}", encodeURIComponent(r)),
                a = {},
                s = {};
            e !== void 0 && (s.forwardToReplicas = e.toString());
            const o = {
                method: "POST",
                path: n,
                queryParameters: s,
                headers: a
            };
            return m.request(o, t)
        },
        clearObjects({
            indexName: r
        }, e) {
            if (!r) throw new Error("Parameter `indexName` is required when calling `clearObjects`.");
            const s = {
                method: "POST",
                path: "/1/indexes/{indexName}/clear".replace("{indexName}", encodeURIComponent(r)),
                queryParameters: {},
                headers: {}
            };
            return m.request(s, e)
        },
        clearRules({
            indexName: r,
            forwardToReplicas: e
        }, t) {
            if (!r) throw new Error("Parameter `indexName` is required when calling `clearRules`.");
            const n = "/1/indexes/{indexName}/rules/clear".replace("{indexName}", encodeURIComponent(r)),
                a = {},
                s = {};
            e !== void 0 && (s.forwardToReplicas = e.toString());
            const o = {
                method: "POST",
                path: n,
                queryParameters: s,
                headers: a
            };
            return m.request(o, t)
        },
        del({
            path: r,
            parameters: e
        }, t) {
            if (!r) throw new Error("Parameter `path` is required when calling `del`.");
            const o = {
                method: "DELETE",
                path: "/1{path}".replace("{path}", r),
                queryParameters: e || {},
                headers: {}
            };
            return m.request(o, t)
        },
        deleteApiKey({
            key: r
        }, e) {
            if (!r) throw new Error("Parameter `key` is required when calling `deleteApiKey`.");
            const s = {
                method: "DELETE",
                path: "/1/keys/{key}".replace("{key}", encodeURIComponent(r)),
                queryParameters: {},
                headers: {}
            };
            return m.request(s, e)
        },
        deleteBy({
            indexName: r,
            deleteByParams: e
        }, t) {
            if (!r) throw new Error("Parameter `indexName` is required when calling `deleteBy`.");
            if (!e) throw new Error("Parameter `deleteByParams` is required when calling `deleteBy`.");
            const o = {
                method: "POST",
                path: "/1/indexes/{indexName}/deleteByQuery".replace("{indexName}", encodeURIComponent(r)),
                queryParameters: {},
                headers: {},
                data: e
            };
            return m.request(o, t)
        },
        deleteIndex({
            indexName: r
        }, e) {
            if (!r) throw new Error("Parameter `indexName` is required when calling `deleteIndex`.");
            const s = {
                method: "DELETE",
                path: "/1/indexes/{indexName}".replace("{indexName}", encodeURIComponent(r)),
                queryParameters: {},
                headers: {}
            };
            return m.request(s, e)
        },
        deleteObject({
            indexName: r,
            objectID: e
        }, t) {
            if (!r) throw new Error("Parameter `indexName` is required when calling `deleteObject`.");
            if (!e) throw new Error("Parameter `objectID` is required when calling `deleteObject`.");
            const o = {
                method: "DELETE",
                path: "/1/indexes/{indexName}/{objectID}".replace("{indexName}", encodeURIComponent(r)).replace("{objectID}", encodeURIComponent(e)),
                queryParameters: {},
                headers: {}
            };
            return m.request(o, t)
        },
        deleteRule({
            indexName: r,
            objectID: e,
            forwardToReplicas: t
        }, n) {
            if (!r) throw new Error("Parameter `indexName` is required when calling `deleteRule`.");
            if (!e) throw new Error("Parameter `objectID` is required when calling `deleteRule`.");
            const a = "/1/indexes/{indexName}/rules/{objectID}".replace("{indexName}", encodeURIComponent(r)).replace("{objectID}", encodeURIComponent(e)),
                s = {},
                o = {};
            t !== void 0 && (o.forwardToReplicas = t.toString());
            const l = {
                method: "DELETE",
                path: a,
                queryParameters: o,
                headers: s
            };
            return m.request(l, n)
        },
        deleteSource({
            source: r
        }, e) {
            if (!r) throw new Error("Parameter `source` is required when calling `deleteSource`.");
            const s = {
                method: "DELETE",
                path: "/1/security/sources/{source}".replace("{source}", encodeURIComponent(r)),
                queryParameters: {},
                headers: {}
            };
            return m.request(s, e)
        },
        deleteSynonym({
            indexName: r,
            objectID: e,
            forwardToReplicas: t
        }, n) {
            if (!r) throw new Error("Parameter `indexName` is required when calling `deleteSynonym`.");
            if (!e) throw new Error("Parameter `objectID` is required when calling `deleteSynonym`.");
            const a = "/1/indexes/{indexName}/synonyms/{objectID}".replace("{indexName}", encodeURIComponent(r)).replace("{objectID}", encodeURIComponent(e)),
                s = {},
                o = {};
            t !== void 0 && (o.forwardToReplicas = t.toString());
            const l = {
                method: "DELETE",
                path: a,
                queryParameters: o,
                headers: s
            };
            return m.request(l, n)
        },
        get({
            path: r,
            parameters: e
        }, t) {
            if (!r) throw new Error("Parameter `path` is required when calling `get`.");
            const o = {
                method: "GET",
                path: "/1{path}".replace("{path}", r),
                queryParameters: e || {},
                headers: {}
            };
            return m.request(o, t)
        },
        getApiKey({
            key: r
        }, e) {
            if (!r) throw new Error("Parameter `key` is required when calling `getApiKey`.");
            const s = {
                method: "GET",
                path: "/1/keys/{key}".replace("{key}", encodeURIComponent(r)),
                queryParameters: {},
                headers: {}
            };
            return m.request(s, e)
        },
        getDictionaryLanguages(r) {
            const a = {
                method: "GET",
                path: "/1/dictionaries/*/languages",
                queryParameters: {},
                headers: {}
            };
            return m.request(a, r)
        },
        getDictionarySettings(r) {
            const a = {
                method: "GET",
                path: "/1/dictionaries/*/settings",
                queryParameters: {},
                headers: {}
            };
            return m.request(a, r)
        },
        getLogs({
            offset: r,
            length: e,
            indexName: t,
            type: n
        } = {}, a = void 0) {
            const s = "/1/logs",
                o = {},
                l = {};
            r !== void 0 && (l.offset = r.toString()), e !== void 0 && (l.length = e.toString()), t !== void 0 && (l.indexName = t.toString()), n !== void 0 && (l.type = n.toString());
            const d = {
                method: "GET",
                path: s,
                queryParameters: l,
                headers: o
            };
            return m.request(d, a)
        },
        getObject({
            indexName: r,
            objectID: e,
            attributesToRetrieve: t
        }, n) {
            if (!r) throw new Error("Parameter `indexName` is required when calling `getObject`.");
            if (!e) throw new Error("Parameter `objectID` is required when calling `getObject`.");
            const a = "/1/indexes/{indexName}/{objectID}".replace("{indexName}", encodeURIComponent(r)).replace("{objectID}", encodeURIComponent(e)),
                s = {},
                o = {};
            t !== void 0 && (o.attributesToRetrieve = t.toString());
            const l = {
                method: "GET",
                path: a,
                queryParameters: o,
                headers: s
            };
            return m.request(l, n)
        },
        getObjects(r, e) {
            if (!r) throw new Error("Parameter `getObjectsParams` is required when calling `getObjects`.");
            if (!r.requests) throw new Error("Parameter `getObjectsParams.requests` is required when calling `getObjects`.");
            const s = {
                method: "POST",
                path: "/1/indexes/*/objects",
                queryParameters: {},
                headers: {},
                data: r,
                useReadTransporter: !0,
                cacheable: !0
            };
            return m.request(s, e)
        },
        getRule({
            indexName: r,
            objectID: e
        }, t) {
            if (!r) throw new Error("Parameter `indexName` is required when calling `getRule`.");
            if (!e) throw new Error("Parameter `objectID` is required when calling `getRule`.");
            const o = {
                method: "GET",
                path: "/1/indexes/{indexName}/rules/{objectID}".replace("{indexName}", encodeURIComponent(r)).replace("{objectID}", encodeURIComponent(e)),
                queryParameters: {},
                headers: {}
            };
            return m.request(o, t)
        },
        getSettings({
            indexName: r
        }, e) {
            if (!r) throw new Error("Parameter `indexName` is required when calling `getSettings`.");
            const s = {
                method: "GET",
                path: "/1/indexes/{indexName}/settings".replace("{indexName}", encodeURIComponent(r)),
                queryParameters: {},
                headers: {}
            };
            return m.request(s, e)
        },
        getSources(r) {
            const a = {
                method: "GET",
                path: "/1/security/sources",
                queryParameters: {},
                headers: {}
            };
            return m.request(a, r)
        },
        getSynonym({
            indexName: r,
            objectID: e
        }, t) {
            if (!r) throw new Error("Parameter `indexName` is required when calling `getSynonym`.");
            if (!e) throw new Error("Parameter `objectID` is required when calling `getSynonym`.");
            const o = {
                method: "GET",
                path: "/1/indexes/{indexName}/synonyms/{objectID}".replace("{indexName}", encodeURIComponent(r)).replace("{objectID}", encodeURIComponent(e)),
                queryParameters: {},
                headers: {}
            };
            return m.request(o, t)
        },
        getTask({
            indexName: r,
            taskID: e
        }, t) {
            if (!r) throw new Error("Parameter `indexName` is required when calling `getTask`.");
            if (!e) throw new Error("Parameter `taskID` is required when calling `getTask`.");
            const o = {
                method: "GET",
                path: "/1/indexes/{indexName}/task/{taskID}".replace("{indexName}", encodeURIComponent(r)).replace("{taskID}", encodeURIComponent(e)),
                queryParameters: {},
                headers: {}
            };
            return m.request(o, t)
        },
        getTopUserIds(r) {
            const a = {
                method: "GET",
                path: "/1/clusters/mapping/top",
                queryParameters: {},
                headers: {}
            };
            return m.request(a, r)
        },
        getUserId({
            userID: r
        }, e) {
            if (!r) throw new Error("Parameter `userID` is required when calling `getUserId`.");
            const s = {
                method: "GET",
                path: "/1/clusters/mapping/{userID}".replace("{userID}", encodeURIComponent(r)),
                queryParameters: {},
                headers: {}
            };
            return m.request(s, e)
        },
        hasPendingMappings({
            getClusters: r
        } = {}, e = void 0) {
            const t = "/1/clusters/mapping/pending",
                n = {},
                a = {};
            r !== void 0 && (a.getClusters = r.toString());
            const s = {
                method: "GET",
                path: t,
                queryParameters: a,
                headers: n
            };
            return m.request(s, e)
        },
        listApiKeys(r) {
            const a = {
                method: "GET",
                path: "/1/keys",
                queryParameters: {},
                headers: {}
            };
            return m.request(a, r)
        },
        listClusters(r) {
            const a = {
                method: "GET",
                path: "/1/clusters",
                queryParameters: {},
                headers: {}
            };
            return m.request(a, r)
        },
        listIndices({
            page: r,
            hitsPerPage: e
        } = {}, t = void 0) {
            const n = "/1/indexes",
                a = {},
                s = {};
            r !== void 0 && (s.page = r.toString()), e !== void 0 && (s.hitsPerPage = e.toString());
            const o = {
                method: "GET",
                path: n,
                queryParameters: s,
                headers: a
            };
            return m.request(o, t)
        },
        listUserIds({
            page: r,
            hitsPerPage: e
        } = {}, t = void 0) {
            const n = "/1/clusters/mapping",
                a = {},
                s = {};
            r !== void 0 && (s.page = r.toString()), e !== void 0 && (s.hitsPerPage = e.toString());
            const o = {
                method: "GET",
                path: n,
                queryParameters: s,
                headers: a
            };
            return m.request(o, t)
        },
        multipleBatch(r, e) {
            if (!r) throw new Error("Parameter `batchParams` is required when calling `multipleBatch`.");
            if (!r.requests) throw new Error("Parameter `batchParams.requests` is required when calling `multipleBatch`.");
            const s = {
                method: "POST",
                path: "/1/indexes/*/batch",
                queryParameters: {},
                headers: {},
                data: r
            };
            return m.request(s, e)
        },
        operationIndex({
            indexName: r,
            operationIndexParams: e
        }, t) {
            if (!r) throw new Error("Parameter `indexName` is required when calling `operationIndex`.");
            if (!e) throw new Error("Parameter `operationIndexParams` is required when calling `operationIndex`.");
            if (!e.operation) throw new Error("Parameter `operationIndexParams.operation` is required when calling `operationIndex`.");
            if (!e.destination) throw new Error("Parameter `operationIndexParams.destination` is required when calling `operationIndex`.");
            const o = {
                method: "POST",
                path: "/1/indexes/{indexName}/operation".replace("{indexName}", encodeURIComponent(r)),
                queryParameters: {},
                headers: {},
                data: e
            };
            return m.request(o, t)
        },
        partialUpdateObject({
            indexName: r,
            objectID: e,
            attributesToUpdate: t,
            createIfNotExists: n
        }, a) {
            if (!r) throw new Error("Parameter `indexName` is required when calling `partialUpdateObject`.");
            if (!e) throw new Error("Parameter `objectID` is required when calling `partialUpdateObject`.");
            if (!t) throw new Error("Parameter `attributesToUpdate` is required when calling `partialUpdateObject`.");
            const s = "/1/indexes/{indexName}/{objectID}/partial".replace("{indexName}", encodeURIComponent(r)).replace("{objectID}", encodeURIComponent(e)),
                o = {},
                l = {};
            n !== void 0 && (l.createIfNotExists = n.toString());
            const d = {
                method: "POST",
                path: s,
                queryParameters: l,
                headers: o,
                data: t
            };
            return m.request(d, a)
        },
        post({
            path: r,
            parameters: e,
            body: t
        }, n) {
            if (!r) throw new Error("Parameter `path` is required when calling `post`.");
            const l = {
                method: "POST",
                path: "/1{path}".replace("{path}", r),
                queryParameters: e || {},
                headers: {},
                data: t || {}
            };
            return m.request(l, n)
        },
        put({
            path: r,
            parameters: e,
            body: t
        }, n) {
            if (!r) throw new Error("Parameter `path` is required when calling `put`.");
            const l = {
                method: "PUT",
                path: "/1{path}".replace("{path}", r),
                queryParameters: e || {},
                headers: {},
                data: t || {}
            };
            return m.request(l, n)
        },
        removeUserId({
            userID: r
        }, e) {
            if (!r) throw new Error("Parameter `userID` is required when calling `removeUserId`.");
            const s = {
                method: "DELETE",
                path: "/1/clusters/mapping/{userID}".replace("{userID}", encodeURIComponent(r)),
                queryParameters: {},
                headers: {}
            };
            return m.request(s, e)
        },
        replaceSources({
            source: r
        }, e) {
            if (!r) throw new Error("Parameter `source` is required when calling `replaceSources`.");
            const s = {
                method: "PUT",
                path: "/1/security/sources",
                queryParameters: {},
                headers: {},
                data: r
            };
            return m.request(s, e)
        },
        restoreApiKey({
            key: r
        }, e) {
            if (!r) throw new Error("Parameter `key` is required when calling `restoreApiKey`.");
            const s = {
                method: "POST",
                path: "/1/keys/{key}/restore".replace("{key}", encodeURIComponent(r)),
                queryParameters: {},
                headers: {}
            };
            return m.request(s, e)
        },
        saveObject({
            indexName: r,
            body: e
        }, t) {
            if (!r) throw new Error("Parameter `indexName` is required when calling `saveObject`.");
            if (!e) throw new Error("Parameter `body` is required when calling `saveObject`.");
            const o = {
                method: "POST",
                path: "/1/indexes/{indexName}".replace("{indexName}", encodeURIComponent(r)),
                queryParameters: {},
                headers: {},
                data: e
            };
            return m.request(o, t)
        },
        saveRule({
            indexName: r,
            objectID: e,
            rule: t,
            forwardToReplicas: n
        }, a) {
            if (!r) throw new Error("Parameter `indexName` is required when calling `saveRule`.");
            if (!e) throw new Error("Parameter `objectID` is required when calling `saveRule`.");
            if (!t) throw new Error("Parameter `rule` is required when calling `saveRule`.");
            if (!t.objectID) throw new Error("Parameter `rule.objectID` is required when calling `saveRule`.");
            const s = "/1/indexes/{indexName}/rules/{objectID}".replace("{indexName}", encodeURIComponent(r)).replace("{objectID}", encodeURIComponent(e)),
                o = {},
                l = {};
            n !== void 0 && (l.forwardToReplicas = n.toString());
            const d = {
                method: "PUT",
                path: s,
                queryParameters: l,
                headers: o,
                data: t
            };
            return m.request(d, a)
        },
        saveRules({
            indexName: r,
            rules: e,
            forwardToReplicas: t,
            clearExistingRules: n
        }, a) {
            if (!r) throw new Error("Parameter `indexName` is required when calling `saveRules`.");
            if (!e) throw new Error("Parameter `rules` is required when calling `saveRules`.");
            const s = "/1/indexes/{indexName}/rules/batch".replace("{indexName}", encodeURIComponent(r)),
                o = {},
                l = {};
            t !== void 0 && (l.forwardToReplicas = t.toString()), n !== void 0 && (l.clearExistingRules = n.toString());
            const d = {
                method: "POST",
                path: s,
                queryParameters: l,
                headers: o,
                data: e
            };
            return m.request(d, a)
        },
        saveSynonym({
            indexName: r,
            objectID: e,
            synonymHit: t,
            forwardToReplicas: n
        }, a) {
            if (!r) throw new Error("Parameter `indexName` is required when calling `saveSynonym`.");
            if (!e) throw new Error("Parameter `objectID` is required when calling `saveSynonym`.");
            if (!t) throw new Error("Parameter `synonymHit` is required when calling `saveSynonym`.");
            if (!t.objectID) throw new Error("Parameter `synonymHit.objectID` is required when calling `saveSynonym`.");
            if (!t.type) throw new Error("Parameter `synonymHit.type` is required when calling `saveSynonym`.");
            const s = "/1/indexes/{indexName}/synonyms/{objectID}".replace("{indexName}", encodeURIComponent(r)).replace("{objectID}", encodeURIComponent(e)),
                o = {},
                l = {};
            n !== void 0 && (l.forwardToReplicas = n.toString());
            const d = {
                method: "PUT",
                path: s,
                queryParameters: l,
                headers: o,
                data: t
            };
            return m.request(d, a)
        },
        saveSynonyms({
            indexName: r,
            synonymHit: e,
            forwardToReplicas: t,
            replaceExistingSynonyms: n
        }, a) {
            if (!r) throw new Error("Parameter `indexName` is required when calling `saveSynonyms`.");
            if (!e) throw new Error("Parameter `synonymHit` is required when calling `saveSynonyms`.");
            const s = "/1/indexes/{indexName}/synonyms/batch".replace("{indexName}", encodeURIComponent(r)),
                o = {},
                l = {};
            t !== void 0 && (l.forwardToReplicas = t.toString()), n !== void 0 && (l.replaceExistingSynonyms = n.toString());
            const d = {
                method: "POST",
                path: s,
                queryParameters: l,
                headers: o,
                data: e
            };
            return m.request(d, a)
        },
        search(r, e) {
            if (r && Array.isArray(r) && (r = {
                    requests: r.map(g => {
                        var w = g,
                            {
                                params: l
                            } = w,
                            d = R(w, ["params"]);
                        return d.type === "facet" ? b(q(q({}, d), l), {
                            type: "facet"
                        }) : b(q(q({}, d), l), {
                            facet: void 0,
                            maxFacetHits: void 0,
                            facetQuery: void 0
                        })
                    })
                }), !r) throw new Error("Parameter `searchMethodParams` is required when calling `search`.");
            if (!r.requests) throw new Error("Parameter `searchMethodParams.requests` is required when calling `search`.");
            const s = {
                method: "POST",
                path: "/1/indexes/*/queries",
                queryParameters: {},
                headers: {},
                data: r,
                useReadTransporter: !0,
                cacheable: !0
            };
            return m.request(s, e)
        },
        searchDictionaryEntries({
            dictionaryName: r,
            searchDictionaryEntriesParams: e
        }, t) {
            if (!r) throw new Error("Parameter `dictionaryName` is required when calling `searchDictionaryEntries`.");
            if (!e) throw new Error("Parameter `searchDictionaryEntriesParams` is required when calling `searchDictionaryEntries`.");
            if (!e.query) throw new Error("Parameter `searchDictionaryEntriesParams.query` is required when calling `searchDictionaryEntries`.");
            const o = {
                method: "POST",
                path: "/1/dictionaries/{dictionaryName}/search".replace("{dictionaryName}", encodeURIComponent(r)),
                queryParameters: {},
                headers: {},
                data: e,
                useReadTransporter: !0,
                cacheable: !0
            };
            return m.request(o, t)
        },
        searchForFacetValues({
            indexName: r,
            facetName: e,
            searchForFacetValuesRequest: t
        }, n) {
            if (!r) throw new Error("Parameter `indexName` is required when calling `searchForFacetValues`.");
            if (!e) throw new Error("Parameter `facetName` is required when calling `searchForFacetValues`.");
            const l = {
                method: "POST",
                path: "/1/indexes/{indexName}/facets/{facetName}/query".replace("{indexName}", encodeURIComponent(r)).replace("{facetName}", encodeURIComponent(e)),
                queryParameters: {},
                headers: {},
                data: t || {},
                useReadTransporter: !0,
                cacheable: !0
            };
            return m.request(l, n)
        },
        searchRules({
            indexName: r,
            searchRulesParams: e
        }, t) {
            if (!r) throw new Error("Parameter `indexName` is required when calling `searchRules`.");
            const o = {
                method: "POST",
                path: "/1/indexes/{indexName}/rules/search".replace("{indexName}", encodeURIComponent(r)),
                queryParameters: {},
                headers: {},
                data: e || {},
                useReadTransporter: !0,
                cacheable: !0
            };
            return m.request(o, t)
        },
        searchSingleIndex({
            indexName: r,
            searchParams: e
        }, t) {
            if (!r) throw new Error("Parameter `indexName` is required when calling `searchSingleIndex`.");
            const o = {
                method: "POST",
                path: "/1/indexes/{indexName}/query".replace("{indexName}", encodeURIComponent(r)),
                queryParameters: {},
                headers: {},
                data: e || {},
                useReadTransporter: !0,
                cacheable: !0
            };
            return m.request(o, t)
        },
        searchSynonyms({
            indexName: r,
            type: e,
            page: t,
            hitsPerPage: n,
            searchSynonymsParams: a
        }, s) {
            if (!r) throw new Error("Parameter `indexName` is required when calling `searchSynonyms`.");
            const o = "/1/indexes/{indexName}/synonyms/search".replace("{indexName}", encodeURIComponent(r)),
                l = {},
                d = {};
            e !== void 0 && (d.type = e.toString()), t !== void 0 && (d.page = t.toString()), n !== void 0 && (d.hitsPerPage = n.toString());
            const g = {
                method: "POST",
                path: o,
                queryParameters: d,
                headers: l,
                data: a || {},
                useReadTransporter: !0,
                cacheable: !0
            };
            return m.request(g, s)
        },
        searchUserIds(r, e) {
            if (!r) throw new Error("Parameter `searchUserIdsParams` is required when calling `searchUserIds`.");
            if (!r.query) throw new Error("Parameter `searchUserIdsParams.query` is required when calling `searchUserIds`.");
            const s = {
                method: "POST",
                path: "/1/clusters/mapping/search",
                queryParameters: {},
                headers: {},
                data: r,
                useReadTransporter: !0,
                cacheable: !0
            };
            return m.request(s, e)
        },
        setDictionarySettings(r, e) {
            if (!r) throw new Error("Parameter `dictionarySettingsParams` is required when calling `setDictionarySettings`.");
            if (!r.disableStandardEntries) throw new Error("Parameter `dictionarySettingsParams.disableStandardEntries` is required when calling `setDictionarySettings`.");
            const s = {
                method: "PUT",
                path: "/1/dictionaries/*/settings",
                queryParameters: {},
                headers: {},
                data: r
            };
            return m.request(s, e)
        },
        setSettings({
            indexName: r,
            indexSettings: e,
            forwardToReplicas: t
        }, n) {
            if (!r) throw new Error("Parameter `indexName` is required when calling `setSettings`.");
            if (!e) throw new Error("Parameter `indexSettings` is required when calling `setSettings`.");
            const a = "/1/indexes/{indexName}/settings".replace("{indexName}", encodeURIComponent(r)),
                s = {},
                o = {};
            t !== void 0 && (o.forwardToReplicas = t.toString());
            const l = {
                method: "PUT",
                path: a,
                queryParameters: o,
                headers: s,
                data: e
            };
            return m.request(l, n)
        },
        updateApiKey({
            key: r,
            apiKey: e
        }, t) {
            if (!r) throw new Error("Parameter `key` is required when calling `updateApiKey`.");
            if (!e) throw new Error("Parameter `apiKey` is required when calling `updateApiKey`.");
            if (!e.acl) throw new Error("Parameter `apiKey.acl` is required when calling `updateApiKey`.");
            const o = {
                method: "PUT",
                path: "/1/keys/{key}".replace("{key}", encodeURIComponent(r)),
                queryParameters: {},
                headers: {},
                data: e
            };
            return m.request(o, t)
        }
    }
}

function _e() {
    function i(u) {
        return new Promise(h => {
            const c = new XMLHttpRequest;
            c.open(u.method, u.url, !0), Object.keys(u.headers).forEach(f => c.setRequestHeader(f, u.headers[f]));
            const P = (f, m) => setTimeout(() => {
                    c.abort(), h({
                        status: 0,
                        content: m,
                        isTimedOut: !0
                    })
                }, f),
                p = P(u.connectTimeout, "Connection timeout");
            let E;
            c.onreadystatechange = () => {
                c.readyState > c.OPENED && E === void 0 && (clearTimeout(p), E = P(u.responseTimeout, "Socket timeout"))
            }, c.onerror = () => {
                c.status === 0 && (clearTimeout(p), clearTimeout(E), h({
                    content: c.responseText || "Network request failed",
                    status: c.status,
                    isTimedOut: !1
                }))
            }, c.onload = () => {
                clearTimeout(p), clearTimeout(E), h({
                    content: c.responseText,
                    status: c.status,
                    isTimedOut: !1
                })
            }, c.send(u.data)
        })
    }
    return {
        send: i
    }
}
const Be = ne;

function Le(i, u, h) {
    const c = q({
        apiKey: u,
        appId: i,
        timeouts: {
            connect: Re,
            read: xe,
            write: Ae
        },
        requester: _e(),
        algoliaAgents: [{
            segment: "Browser"
        }],
        authMode: "WithinQueryParameters",
        responsesCache: B(),
        requestsCache: B({
            serializable: !1
        }),
        hostsCache: C({
            caches: [ie({
                key: `${Be}-${i}`
            }), B()]
        })
    }, h);

    function P(f = {}) {
        if (f.region && (typeof f.region != "string" || !Y.includes(f.region))) throw new Error(`\`region\` must be one of the following: ${Y.join(", ")}`);
        return De(q(q(q({}, c), f.options), f))
    }

    function p(f = {}) {
        if (f.region && (typeof f.region != "string" || !X.includes(f.region))) throw new Error(`\`region\` must be one of the following: ${X.join(", ")}`);
        return Ne(q(q(q({}, c), f.options), f))
    }

    function E(f) {
        if (!f.region || f.region && (typeof f.region != "string" || !Z.includes(f.region))) throw new Error(`\`region\` is required and must be one of the following: ${Z.join(", ")}`);
        return Ge(q(q(q({}, c), f.options), f))
    }
    return b(q({}, ze(c)), {
        get _ua() {
            return this.transporter.algoliaAgent.value
        },
        initAnalytics: P,
        initPersonalization: E,
        initAbtesting: p
    })
}

function Ke(i) {
    return i.reduce((u, h) => (h.hits.forEach(c => {
        var P, p;
        switch (c.type = h.index, c.type) {
            case "shopify_products":
                (P = c.tags) != null && P.includes("juicer") || c.category === "Juice Presses" ? c.url = `/juicers/${c.handle}` : c.url = `https://shop.goodnature.com/products/${c.handle}`;
                break;
            case "recipes":
                c.url = `/recipes/${c.slug}`;
                break;
            case "knowledge":
                c.url = `/knowledgebase/${c.slug}`;
                break;
            case "articles":
                (p = c.tags) != null && p.includes("Juice Archives") ? c.url = `/juice-archives/${c.slug}` : c.url = `/blog/${c.slug}`;
                break;
            default:
                c.url = `/blog/${c.slug}`;
                break
        }
    }), [...u, ...h.hits].filter(c => !c.hide_from_store && (c.type === "products" ? c.active : !0))), [])
}
export {
    Le as a, Ke as n
};