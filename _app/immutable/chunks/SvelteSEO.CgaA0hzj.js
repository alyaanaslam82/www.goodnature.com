var ht = Object.defineProperty;
var Ze = Object.getOwnPropertySymbols;
var yt = Object.prototype.hasOwnProperty,
    bt = Object.prototype.propertyIsEnumerable;
var $e = (z, m, A) => m in z ? ht(z, m, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: A
    }) : z[m] = A,
    Ve = (z, m) => {
        for (var A in m || (m = {})) yt.call(m, A) && $e(z, A, m[A]);
        if (Ze)
            for (var A of Ze(m)) bt.call(m, A) && $e(z, A, m[A]);
        return z
    };
import {
    h as wt,
    t as a,
    a as t,
    c as q,
    r as kt
} from "./disclose-version.Cr9xuhkA.js";
import {
    p as nt,
    s as et,
    l as xt,
    a as Tt,
    b as it,
    f as u,
    t as n,
    m as tt,
    d as at,
    e as i,
    g as v,
    $ as St,
    c as ae,
    u as rt
} from "./runtime.B7th0A2U.js";
import {
    p as C,
    i as r
} from "./props.C7v_At4K.js";
import {
    i as Lt
} from "./legacy.DuDeTpA6.js";
import {
    e as J,
    i as j
} from "./each.Dhp-fwEL.js";
import {
    b as o,
    f as ot
} from "./attributes.CecWNX5Z.js";
import {
    a as Ct,
    p as At
} from "./index.VqiwlbJN.js";
var Gt = a('<meta name="description">'),
    Pt = a('<link rel="canonical">'),
    Dt = a('<link rel="alternate">'),
    Mt = a('<link rel="alternate">'),
    Nt = a('<meta name="twitter:card">'),
    Ut = a('<meta name="twitter:site">'),
    It = a('<meta name="twitter:creator">'),
    qt = a('<meta name="twitter:title">'),
    Jt = a('<meta name="twitter:description">'),
    jt = a('<meta name="twitter:image">'),
    Et = a('<meta name="twitter:image:alt">'),
    Ht = a("<!> <!> <!> <!> <!> <!> <!>", 1),
    Ot = a('<meta property="fb:app_id">'),
    Rt = a('<meta property="og:url">'),
    Vt = a('<meta property="profile:first_name">'),
    Wt = a('<meta property="profile:last_name">'),
    zt = a('<meta property="profile:username">'),
    Bt = a('<meta property="profile:gender">'),
    Ft = a("<!> <!> <!> <!>", 1),
    Kt = a('<meta property="book:author">'),
    Qt = a('<meta property="book:isbn">'),
    Xt = a('<meta property="book:release_date">'),
    Yt = a('<meta property="book:tag">'),
    Zt = a("<!> <!> <!> <!>", 1),
    $t = a('<meta property="article:published_time">'),
    ea = a('<meta property="article:modified_time">'),
    ta = a('<meta property="article:expiration_time">'),
    aa = a('<meta property="article:author">'),
    ra = a('<meta property="article:section">'),
    oa = a('<meta property="article:tag">'),
    na = a("<!> <!> <!> <!> <!> <!>", 1),
    ia = a('<meta property="video:actor">'),
    va = a('<meta property="video:actor:role">'),
    _a = a("<!> <!>", 1),
    la = a('<meta property="video:director">'),
    ma = a('<meta property="video:writer">'),
    da = a('<meta property="video:duration">'),
    sa = a('<meta property="video:release_date">'),
    fa = a('<meta property="video:tag">'),
    pa = a('<meta property="video:series">'),
    ca = a("<!> <!> <!> <!> <!> <!> <!>", 1),
    ga = a('<meta property="og:type"> <!>', 1),
    ua = a('<meta property="og:title">'),
    ha = a('<meta property="og:description">'),
    ya = a('<meta property="og:image:alt">'),
    ba = a('<meta property="og:image:width">'),
    wa = a('<meta property="og:image:height">'),
    ka = a('<meta property="og:image"> <!> <!> <!>', 1),
    xa = a('<meta property="og:video:alt">'),
    Ta = a('<meta property="og:video:width">'),
    Sa = a('<meta property="og:video:height">'),
    La = a('<meta property="og:video:secure_url">'),
    Ca = a('<meta property="og:video:type">'),
    Aa = a('<meta property="og:video"> <!> <!> <!> <!> <!>', 1),
    Ga = a('<meta property="og:locale">'),
    Pa = a('<meta property="og:site_name">'),
    Da = a("<!> <!> <!> <!> <!> <!> <!> <!>", 1),
    Ma = a("<meta>"),
    Na = a("<link>"),
    Ua = a('<meta name="robots"> <meta name="googlebot"> <!> <!> <!> <!> <!> <!> <!> <!> <!>', 1);

function Ia(z, m) {
    nt(m, !1);
    const A = tt();
    let _e = C(m, "title", 8, ""),
        le = C(m, "titleTemplate", 8, ""),
        Se = C(m, "noindex", 8, !1),
        me = C(m, "nofollow", 8, !1),
        de = C(m, "robotsProps", 8, void 0),
        re = C(m, "description", 8, void 0),
        se = C(m, "mobileAlternate", 8, void 0),
        fe = C(m, "languageAlternates", 8, void 0),
        G = C(m, "twitter", 8, void 0),
        Le = C(m, "facebook", 8, void 0),
        e = C(m, "openGraph", 8, void 0),
        Ce = C(m, "canonical", 8, void 0),
        Ne = C(m, "additionalMetaTags", 8, void 0),
        We = C(m, "additionalLinkTags", 8, void 0),
        Ue = tt("");
    if (de()) {
        const {
            nosnippet: Ie,
            maxSnippet: pe,
            maxImagePreview: ce,
            maxVideoPreview: ge,
            noarchive: Ae,
            noimageindex: qe,
            notranslate: Ge,
            unavailableAfter: Pe
        } = de();
        et(Ue, `${Ie?",nosnippet":""}${pe?`,max-snippet:${pe}`:""}${ce?`,max-image-preview:${ce}`:""}${Ae?",noarchive":""}${Pe?`,unavailable_after:${Pe}`:""}${qe?",noimageindex":""}${ge?`,max-video-preview:${ge}`:""}${Ge?",notranslate":""}`)
    }
    xt(() => (at(le()), at(_e())), () => {
        et(A, le() ? le().replace(/%s/g, _e()) : _e())
    }), Tt(), Lt(), wt(Ie => {
        var pe = Ua(),
            ce = u(pe),
            ge = i(ce, 2),
            Ae = i(ge, 2); {
            var qe = l => {
                var f = Gt();
                n(() => o(f, "content", re())), t(l, f)
            };
            r(Ae, l => {
                re() && l(qe)
            })
        }
        var Ge = i(Ae, 2); {
            var Pe = l => {
                var f = Pt();
                n(() => o(f, "href", Ce())), t(l, f)
            };
            r(Ge, l => {
                Ce() && l(Pe)
            })
        }
        var ze = i(Ge, 2); {
            var vt = l => {
                var f = Dt();
                n(() => {
                    o(f, "media", se().media), o(f, "href", se().href)
                }), t(l, f)
            };
            r(ze, l => {
                se() && l(vt)
            })
        }
        var Be = i(ze, 2); {
            var _t = l => {
                var f = q(),
                    H = u(f);
                J(H, 1, fe, j, (Q, E) => {
                    var D = Mt();
                    n(() => {
                        o(D, "hreflang", v(E).hrefLang), o(D, "href", v(E).href)
                    }), t(Q, D)
                }), t(l, f)
            };
            r(Be, l => {
                fe() && fe().length > 0 && l(_t)
            })
        }
        var Fe = i(Be, 2); {
            var lt = l => {
                var f = Ht(),
                    H = u(f); {
                    var Q = p => {
                        var y = Nt();
                        n(() => o(y, "content", G().cardType)), t(p, y)
                    };
                    r(H, p => {
                        G().cardType && p(Q)
                    })
                }
                var E = i(H, 2); {
                    var D = p => {
                        var y = Ut();
                        n(() => o(y, "content", G().site)), t(p, y)
                    };
                    r(E, p => {
                        G().site && p(D)
                    })
                }
                var O = i(E, 2); {
                    var Je = p => {
                        var y = It();
                        n(() => o(y, "content", G().handle)), t(p, y)
                    };
                    r(O, p => {
                        G().handle && p(Je)
                    })
                }
                var ue = i(O, 2); {
                    var je = p => {
                        var y = qt();
                        n(() => o(y, "content", G().title)), t(p, y)
                    };
                    r(ue, p => {
                        G().title && p(je)
                    })
                }
                var he = i(ue, 2); {
                    var Ee = p => {
                        var y = Jt();
                        n(() => o(y, "content", G().description)), t(p, y)
                    };
                    r(he, p => {
                        G().description && p(Ee)
                    })
                }
                var ye = i(he, 2); {
                    var He = p => {
                        var y = jt();
                        n(() => o(y, "content", G().image)), t(p, y)
                    };
                    r(ye, p => {
                        G().image && p(He)
                    })
                }
                var De = i(ye, 2); {
                    var Oe = p => {
                        var y = Et();
                        n(() => o(y, "content", G().imageAlt)), t(p, y)
                    };
                    r(De, p => {
                        G().imageAlt && p(Oe)
                    })
                }
                t(l, f)
            };
            r(Fe, l => {
                G() && l(lt)
            })
        }
        var Ke = i(Fe, 2); {
            var mt = l => {
                var f = Ot();
                n(() => o(f, "content", Le().appId)), t(l, f)
            };
            r(Ke, l => {
                Le() && l(mt)
            })
        }
        var Qe = i(Ke, 2); {
            var dt = l => {
                var f = Da(),
                    H = u(f); {
                    var Q = s => {
                        var h = Rt();
                        n(() => o(h, "content", e().url || Ce())), t(s, h)
                    };
                    r(H, s => {
                        (e().url || Ce()) && s(Q)
                    })
                }
                var E = i(H, 2); {
                    var D = s => {
                        var h = ga(),
                            ve = u(h),
                            be = i(ve, 2); {
                            var k = M => {
                                    var B = Ft(),
                                        Z = u(B); {
                                        var X = c => {
                                            var _ = Vt();
                                            n(() => o(_, "content", e().profile.firstName)), t(c, _)
                                        };
                                        r(Z, c => {
                                            e().profile.firstName && c(X)
                                        })
                                    }
                                    var I = i(Z, 2); {
                                        var R = c => {
                                            var _ = Wt();
                                            n(() => o(_, "content", e().profile.lastName)), t(c, _)
                                        };
                                        r(I, c => {
                                            e().profile.lastName && c(R)
                                        })
                                    }
                                    var V = i(I, 2); {
                                        var x = c => {
                                            var _ = zt();
                                            n(() => o(_, "content", e().profile.username)), t(c, _)
                                        };
                                        r(V, c => {
                                            e().profile.username && c(x)
                                        })
                                    }
                                    var b = i(V, 2); {
                                        var N = c => {
                                            var _ = Bt();
                                            n(() => o(_, "content", e().profile.gender)), t(c, _)
                                        };
                                        r(b, c => {
                                            e().profile.gender && c(N)
                                        })
                                    }
                                    t(M, B)
                                },
                                oe = (M, B) => {
                                    {
                                        var Z = I => {
                                                var R = Zt(),
                                                    V = u(R); {
                                                    var x = T => {
                                                        var P = q(),
                                                            $ = u(P);
                                                        J($, 1, () => e().book.authors, j, (ee, te) => {
                                                            var F = Kt();
                                                            n(() => o(F, "content", v(te))), t(ee, F)
                                                        }), t(T, P)
                                                    };
                                                    r(V, T => {
                                                        e().book.authors && e().book.authors.length && T(x)
                                                    })
                                                }
                                                var b = i(V, 2); {
                                                    var N = T => {
                                                        var P = Qt();
                                                        n(() => o(P, "content", e().book.isbn)), t(T, P)
                                                    };
                                                    r(b, T => {
                                                        e().book.isbn && T(N)
                                                    })
                                                }
                                                var c = i(b, 2); {
                                                    var _ = T => {
                                                        var P = Xt();
                                                        n(() => o(P, "content", e().book.releaseDate)), t(T, P)
                                                    };
                                                    r(c, T => {
                                                        e().book.releaseDate && T(_)
                                                    })
                                                }
                                                var w = i(c, 2); {
                                                    var U = T => {
                                                        var P = q(),
                                                            $ = u(P);
                                                        J($, 1, () => e().book.tags, j, (ee, te) => {
                                                            var F = Yt();
                                                            n(() => o(F, "content", v(te))), t(ee, F)
                                                        }), t(T, P)
                                                    };
                                                    r(w, T => {
                                                        e().book.tags && e().book.tags.length && T(U)
                                                    })
                                                }
                                                t(I, R)
                                            },
                                            X = (I, R) => {
                                                {
                                                    var V = b => {
                                                            var N = na(),
                                                                c = u(N); {
                                                                var _ = g => {
                                                                    var S = $t();
                                                                    n(() => o(S, "content", e().article.publishedTime)), t(g, S)
                                                                };
                                                                r(c, g => {
                                                                    e().article.publishedTime && g(_)
                                                                })
                                                            }
                                                            var w = i(c, 2); {
                                                                var U = g => {
                                                                    var S = ea();
                                                                    n(() => o(S, "content", e().article.modifiedTime)), t(g, S)
                                                                };
                                                                r(w, g => {
                                                                    e().article.modifiedTime && g(U)
                                                                })
                                                            }
                                                            var T = i(w, 2); {
                                                                var P = g => {
                                                                    var S = ta();
                                                                    n(() => o(S, "content", e().article.expirationTime)), t(g, S)
                                                                };
                                                                r(T, g => {
                                                                    e().article.expirationTime && g(P)
                                                                })
                                                            }
                                                            var $ = i(T, 2); {
                                                                var ee = g => {
                                                                    var S = q(),
                                                                        we = u(S);
                                                                    J(we, 1, () => e().article.authors, j, (ke, xe) => {
                                                                        var d = aa();
                                                                        n(() => o(d, "content", v(xe))), t(ke, d)
                                                                    }), t(g, S)
                                                                };
                                                                r($, g => {
                                                                    e().article.authors && e().article.authors.length && g(ee)
                                                                })
                                                            }
                                                            var te = i($, 2); {
                                                                var F = g => {
                                                                    var S = ra();
                                                                    n(() => o(S, "content", e().article.section)), t(g, S)
                                                                };
                                                                r(te, g => {
                                                                    e().article.section && g(F)
                                                                })
                                                            }
                                                            var Re = i(te, 2); {
                                                                var Me = g => {
                                                                    var S = q(),
                                                                        we = u(S);
                                                                    J(we, 1, () => e().article.tags, j, (ke, xe) => {
                                                                        var d = oa();
                                                                        n(() => o(d, "content", v(xe))), t(ke, d)
                                                                    }), t(g, S)
                                                                };
                                                                r(Re, g => {
                                                                    e().article.tags && e().article.tags.length && g(Me)
                                                                })
                                                            }
                                                            t(b, N)
                                                        },
                                                        x = (b, N) => {
                                                            {
                                                                var c = _ => {
                                                                    var w = ca(),
                                                                        U = u(w); {
                                                                        var T = d => {
                                                                            var L = q(),
                                                                                Y = u(L);
                                                                            J(Y, 1, () => e().video.actors, j, (ne, K) => {
                                                                                var W = _a(),
                                                                                    Ye = u(W); {
                                                                                    var ct = ie => {
                                                                                        var Te = ia();
                                                                                        n(() => o(Te, "content", v(K).profile)), t(ie, Te)
                                                                                    };
                                                                                    r(Ye, ie => {
                                                                                        v(K).profile && ie(ct)
                                                                                    })
                                                                                }
                                                                                var gt = i(Ye, 2); {
                                                                                    var ut = ie => {
                                                                                        var Te = va();
                                                                                        n(() => o(Te, "content", v(K).role)), t(ie, Te)
                                                                                    };
                                                                                    r(gt, ie => {
                                                                                        v(K).role && ie(ut)
                                                                                    })
                                                                                }
                                                                                t(ne, W)
                                                                            }), t(d, L)
                                                                        };
                                                                        r(U, d => {
                                                                            e().video.actors && e().video.actors.length && d(T)
                                                                        })
                                                                    }
                                                                    var P = i(U, 2); {
                                                                        var $ = d => {
                                                                            var L = q(),
                                                                                Y = u(L);
                                                                            J(Y, 1, () => e().video.directors, j, (ne, K) => {
                                                                                var W = la();
                                                                                n(() => o(W, "content", v(K))), t(ne, W)
                                                                            }), t(d, L)
                                                                        };
                                                                        r(P, d => {
                                                                            e().video.directors && e().video.directors.length && d($)
                                                                        })
                                                                    }
                                                                    var ee = i(P, 2); {
                                                                        var te = d => {
                                                                            var L = q(),
                                                                                Y = u(L);
                                                                            J(Y, 1, () => e().video.writers, j, (ne, K) => {
                                                                                var W = ma();
                                                                                n(() => o(W, "content", v(K))), t(ne, W)
                                                                            }), t(d, L)
                                                                        };
                                                                        r(ee, d => {
                                                                            e().video.writers && e().video.writers.length && d(te)
                                                                        })
                                                                    }
                                                                    var F = i(ee, 2); {
                                                                        var Re = d => {
                                                                            var L = da();
                                                                            n(Y => o(L, "content", Y), [() => e().video.duration.toString()], ae), t(d, L)
                                                                        };
                                                                        r(F, d => {
                                                                            e().video.duration && d(Re)
                                                                        })
                                                                    }
                                                                    var Me = i(F, 2); {
                                                                        var g = d => {
                                                                            var L = sa();
                                                                            n(() => o(L, "content", e().video.releaseDate)), t(d, L)
                                                                        };
                                                                        r(Me, d => {
                                                                            e().video.releaseDate && d(g)
                                                                        })
                                                                    }
                                                                    var S = i(Me, 2); {
                                                                        var we = d => {
                                                                            var L = q(),
                                                                                Y = u(L);
                                                                            J(Y, 1, () => e().video.tags, j, (ne, K) => {
                                                                                var W = fa();
                                                                                n(() => o(W, "content", v(K))), t(ne, W)
                                                                            }), t(d, L)
                                                                        };
                                                                        r(S, d => {
                                                                            e().video.tags && e().video.tags.length && d(we)
                                                                        })
                                                                    }
                                                                    var ke = i(S, 2); {
                                                                        var xe = d => {
                                                                            var L = pa();
                                                                            n(() => o(L, "content", e().video.series)), t(d, L)
                                                                        };
                                                                        r(ke, d => {
                                                                            e().video.series && d(xe)
                                                                        })
                                                                    }
                                                                    t(_, w)
                                                                };
                                                                r(b, _ => {
                                                                    (e().type.toLowerCase() === "video.movie" || e().type.toLowerCase() === "video.episode" || e().type.toLowerCase() === "video.tv_show" || e().type.toLowerCase() === "video.other" && e().video) && _(c)
                                                                }, N)
                                                            }
                                                        };
                                                    r(I, b => {
                                                        e().type.toLowerCase() === "article" && e().article ? b(V) : b(x, !1)
                                                    }, R)
                                                }
                                            };
                                        r(M, I => {
                                            e().type.toLowerCase() === "book" && e().book ? I(Z) : I(X, !1)
                                        }, B)
                                    }
                                };
                            r(be, M => {
                                e().type.toLowerCase() === "profile" && e().profile ? M(k) : M(oe, !1)
                            })
                        }
                        n(M => o(ve, "content", M), [() => e().type.toLowerCase()], ae), t(s, h)
                    };
                    r(E, s => {
                        e().type && s(D)
                    })
                }
                var O = i(E, 2); {
                    var Je = s => {
                        var h = ua();
                        n(() => o(h, "content", e().title || v(A))), t(s, h)
                    };
                    r(O, s => {
                        (e().title || v(A)) && s(Je)
                    })
                }
                var ue = i(O, 2); {
                    var je = s => {
                        var h = ha();
                        n(() => o(h, "content", e().description || re())), t(s, h)
                    };
                    r(ue, s => {
                        (e().description || re()) && s(je)
                    })
                }
                var he = i(ue, 2); {
                    var Ee = s => {
                        var h = q(),
                            ve = u(h);
                        J(ve, 1, () => e().images, j, (be, k) => {
                            var oe = ka(),
                                M = u(oe),
                                B = i(M, 2); {
                                var Z = x => {
                                    var b = ya();
                                    n(() => o(b, "content", v(k).alt)), t(x, b)
                                };
                                r(B, x => {
                                    v(k).alt && x(Z)
                                })
                            }
                            var X = i(B, 2); {
                                var I = x => {
                                    var b = ba();
                                    n(N => o(b, "content", N), [() => v(k).width.toString()], ae), t(x, b)
                                };
                                r(X, x => {
                                    v(k).width && x(I)
                                })
                            }
                            var R = i(X, 2); {
                                var V = x => {
                                    var b = wa();
                                    n(N => o(b, "content", N), [() => v(k).height.toString()], ae), t(x, b)
                                };
                                r(R, x => {
                                    v(k).height && x(V)
                                })
                            }
                            n(() => o(M, "content", v(k).url)), t(be, oe)
                        }), t(s, h)
                    };
                    r(he, s => {
                        e().images && e().images.length && s(Ee)
                    })
                }
                var ye = i(he, 2); {
                    var He = s => {
                        var h = q(),
                            ve = u(h);
                        J(ve, 1, () => e().videos, j, (be, k) => {
                            var oe = Aa(),
                                M = u(oe),
                                B = i(M, 2); {
                                var Z = _ => {
                                    var w = xa();
                                    n(() => o(w, "content", v(k).alt)), t(_, w)
                                };
                                r(B, _ => {
                                    v(k).alt && _(Z)
                                })
                            }
                            var X = i(B, 2); {
                                var I = _ => {
                                    var w = Ta();
                                    n(U => o(w, "content", U), [() => v(k).width.toString()], ae), t(_, w)
                                };
                                r(X, _ => {
                                    v(k).width && _(I)
                                })
                            }
                            var R = i(X, 2); {
                                var V = _ => {
                                    var w = Sa();
                                    n(U => o(w, "content", U), [() => v(k).height.toString()], ae), t(_, w)
                                };
                                r(R, _ => {
                                    v(k).height && _(V)
                                })
                            }
                            var x = i(R, 2); {
                                var b = _ => {
                                    var w = La();
                                    n(U => o(w, "content", U), [() => v(k).secureUrl.toString()], ae), t(_, w)
                                };
                                r(x, _ => {
                                    v(k).secureUrl && _(b)
                                })
                            }
                            var N = i(x, 2); {
                                var c = _ => {
                                    var w = Ca();
                                    n(U => o(w, "content", U), [() => v(k).type.toString()], ae), t(_, w)
                                };
                                r(N, _ => {
                                    v(k).type && _(c)
                                })
                            }
                            n(() => o(M, "content", v(k).url)), t(be, oe)
                        }), t(s, h)
                    };
                    r(ye, s => {
                        e().videos && e().videos.length && s(He)
                    })
                }
                var De = i(ye, 2); {
                    var Oe = s => {
                        var h = Ga();
                        n(() => o(h, "content", e().locale)), t(s, h)
                    };
                    r(De, s => {
                        e().locale && s(Oe)
                    })
                }
                var p = i(De, 2); {
                    var y = s => {
                        var h = Pa();
                        n(() => o(h, "content", e().site_name)), t(s, h)
                    };
                    r(p, s => {
                        e().site_name && s(y)
                    })
                }
                t(l, f)
            };
            r(Qe, l => {
                e() && l(dt)
            })
        }
        var Xe = i(Qe, 2); {
            var st = l => {
                var f = q(),
                    H = u(f);
                J(H, 1, Ne, j, (Q, E) => {
                    var D = Ma();
                    let O;
                    n(() => O = ot(D, O, Ve({}, v(E)))), t(Q, D)
                }), t(l, f)
            };
            r(Xe, l => {
                Ne() && Ne().length > 0 && l(st)
            })
        }
        var ft = i(Xe, 2); {
            var pt = l => {
                var f = q(),
                    H = u(f);
                J(H, 1, We, j, (Q, E) => {
                    var D = Na();
                    let O;
                    n(() => O = ot(D, O, Ve({}, v(E)))), kt(D), t(Q, D)
                }), t(l, f)
            };
            r(ft, l => {
                var f;
                (f = We()) != null && f.length && l(pt)
            })
        }
        n(() => {
            St.title = v(A), o(ce, "content", `${Se()?"noindex":"index"},${me()?"nofollow":"follow"}${v(Ue)}`), o(ge, "content", `${Se()?"noindex":"index"},${me()?"nofollow":"follow"}${v(Ue)}`)
        }), t(Ie, pe)
    }), it()
}

function Wa(z, m) {
    nt(m, !0);
    const A = "Goodnature",
        _e = "Commercial Cold-Press Juicers and Recipes",
        le = "A Goodnature commercial juice press brings out the best of nature. Made in the USA since 1976. Shipped to over 80 countries.",
        Se = {
            url: "https://rstr.in/goodnature/stock-photos/fgqgWx2JbsM",
            alt: "Goodnature - Helping families live healthier and happier lives."
        };
    let me = C(m, "title", 3, _e),
        de = C(m, "description", 3, le),
        re = C(m, "image", 3, Se),
        se = C(m, "noindex", 3, !1),
        fe = C(m, "nofollow", 3, !1),
        G = rt(() => `${Ct}${At.url.pathname}`);
    const Le = rt(() => ({
        type: "website",
        url: v(G) || m.url || "",
        title: me() || "",
        site_name: A,
        description: de() || "",
        images: [{
            url: re().url,
            alt: re().alt || ""
        }]
    }));
    Ia(z, {
        get title() {
            return me()
        },
        get description() {
            return de()
        },
        get openGraph() {
            return v(Le)
        },
        get noindex() {
            return se()
        },
        get nofollow() {
            return fe()
        }
    }), it()
}
export {
    Wa as S
};