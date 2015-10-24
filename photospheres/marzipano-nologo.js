
/* 
 * Marzipano - a 360° media viewer for the modern web (v0.4.0)
 *
 * Copyright (C) 2015 Digisfera Lda. All Rights Reserved.
 *
 * All source code, documentation and other information contained herein is
 * and remains the property of Digisfera Lda. Dissemination or reproduction
 * of this material is strictly forbidden unless prior written permission
 * is obtained from Digisfera Lda.
 *
 * This software may not be used for any commercial purposes. 
 * The "Powered by Marzipano" watermark must remain visible.
 * For more information see LICENSE.txt
 * 
 */
! function(t) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = t();
    else if ("function" == typeof define && define.amd) define([], t);
    else {
        var e;
        "undefined" != typeof window ? e = window : "undefined" != typeof global ? e = global : "undefined" != typeof self && (e = self), e.Marzipano = t()
    }
}(function() {
    var t;
    return function e(t, i, r) {
        function n(s, a) {
            if (!i[s]) {
                if (!t[s]) {
                    var h = "function" == typeof require && require;
                    if (!a && h) return h(s, !0);
                    if (o) return o(s, !0);
                    var l = new Error("Cannot find module '" + s + "'");
                    throw l.code = "MODULE_NOT_FOUND", l
                }
                var u = i[s] = {
                    exports: {}
                };
                t[s][0].call(u.exports, function(e) {
                    var i = t[s][1][e];
                    return n(i ? i : e)
                }, u, u.exports, e, t, i, r)
            }
            return i[s].exports
        }
        for (var o = "function" == typeof require && require, s = 0; s < r.length; s++) n(r[s]);
        return n
    }({
        1: [function(e, i) {
            ! function(e, r) {
                "undefined" != typeof i && i.exports ? i.exports.browser = r() : "function" == typeof t && t.amd ? t(r) : this[e] = r()
            }("bowser", function() {
                function t(t) {
                    function i(e) {
                        var i = t.match(e);
                        return i && i.length > 1 && i[1] || ""
                    }
                    var r, n = i(/(ipod|iphone|ipad)/i).toLowerCase(),
                        o = /like android/i.test(t),
                        s = !o && /android/i.test(t),
                        a = i(/version\/(\d+(\.\d+)?)/i),
                        h = /tablet/i.test(t),
                        l = !h && /[^-]mobi/i.test(t);
                    /opera|opr/i.test(t) ? r = {
                        name: "Opera",
                        opera: e,
                        version: a || i(/(?:opera|opr)[\s\/](\d+(\.\d+)?)/i)
                    } : /windows phone/i.test(t) ? r = {
                        name: "Windows Phone",
                        windowsphone: e,
                        msie: e,
                        version: i(/iemobile\/(\d+(\.\d+)?)/i)
                    } : /msie|trident/i.test(t) ? r = {
                        name: "Internet Explorer",
                        msie: e,
                        version: i(/(?:msie |rv:)(\d+(\.\d+)?)/i)
                    } : /chrome|crios|crmo/i.test(t) ? r = {
                        name: "Chrome",
                        chrome: e,
                        version: i(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
                    } : n ? (r = {
                        name: "iphone" == n ? "iPhone" : "ipad" == n ? "iPad" : "iPod"
                    }, a && (r.version = a)) : /sailfish/i.test(t) ? r = {
                        name: "Sailfish",
                        sailfish: e,
                        version: i(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
                    } : /seamonkey\//i.test(t) ? r = {
                        name: "SeaMonkey",
                        seamonkey: e,
                        version: i(/seamonkey\/(\d+(\.\d+)?)/i)
                    } : /firefox|iceweasel/i.test(t) ? (r = {
                        name: "Firefox",
                        firefox: e,
                        version: i(/(?:firefox|iceweasel)[ \/](\d+(\.\d+)?)/i)
                    }, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t) && (r.firefoxos = e)) : /silk/i.test(t) ? r = {
                        name: "Amazon Silk",
                        silk: e,
                        version: i(/silk\/(\d+(\.\d+)?)/i)
                    } : s ? r = {
                        name: "Android",
                        version: a
                    } : /phantom/i.test(t) ? r = {
                        name: "PhantomJS",
                        phantom: e,
                        version: i(/phantomjs\/(\d+(\.\d+)?)/i)
                    } : /blackberry|\bbb\d+/i.test(t) || /rim\stablet/i.test(t) ? r = {
                        name: "BlackBerry",
                        blackberry: e,
                        version: a || i(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
                    } : /(web|hpw)os/i.test(t) ? (r = {
                        name: "WebOS",
                        webos: e,
                        version: a || i(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
                    }, /touchpad\//i.test(t) && (r.touchpad = e)) : r = /bada/i.test(t) ? {
                        name: "Bada",
                        bada: e,
                        version: i(/dolfin\/(\d+(\.\d+)?)/i)
                    } : /tizen/i.test(t) ? {
                        name: "Tizen",
                        tizen: e,
                        version: i(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || a
                    } : /safari/i.test(t) ? {
                        name: "Safari",
                        safari: e,
                        version: a
                    } : {}, /(apple)?webkit/i.test(t) ? (r.name = r.name || "Webkit", r.webkit = e, !r.version && a && (r.version = a)) : !r.opera && /gecko\//i.test(t) && (r.name = r.name || "Gecko", r.gecko = e, r.version = r.version || i(/gecko\/(\d+(\.\d+)?)/i)), s || r.silk ? r.android = e : n && (r[n] = e, r.ios = e);
                    var u = "";
                    n ? (u = i(/os (\d+([_\s]\d+)*) like mac os x/i), u = u.replace(/[_\s]/g, ".")) : s ? u = i(/android[ \/-](\d+(\.\d+)*)/i) : r.windowsphone ? u = i(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : r.webos ? u = i(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : r.blackberry ? u = i(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : r.bada ? u = i(/bada\/(\d+(\.\d+)*)/i) : r.tizen && (u = i(/tizen[\/\s](\d+(\.\d+)*)/i)), u && (r.osversion = u);
                    var c = u.split(".")[0];
                    return h || "ipad" == n || s && (3 == c || 4 == c && !l) || r.silk ? r.tablet = e : (l || "iphone" == n || "ipod" == n || s || r.blackberry || r.webos || r.bada) && (r.mobile = e), r.msie && r.version >= 10 || r.chrome && r.version >= 20 || r.firefox && r.version >= 20 || r.safari && r.version >= 6 || r.opera && r.version >= 10 || r.ios && r.osversion && r.osversion.split(".")[0] >= 6 || r.blackberry && r.version >= 10.1 ? r.a = e : r.msie && r.version < 10 || r.chrome && r.version < 20 || r.firefox && r.version < 20 || r.safari && r.version < 6 || r.opera && r.version < 10 || r.ios && r.osversion && r.osversion.split(".")[0] < 6 ? r.c = e : r.x = e, r
                }
                var e = !0,
                    i = t("undefined" != typeof navigator ? navigator.userAgent : "");
                return i._detect = t, i
            })
        }, {}],
        2: [function(t, e) {
            e.exports = {
                GLMAT_EPSILON: function() {
                    return 1e-6
                },
                GLMAT_RANDOM: function() {
                    return Math.random
                },
                GLMAT_ARRAY_TYPE: function() {
                    return "undefined" != typeof Float32Array ? Float32Array : Array
                }
            }
        }, {}],
        3: [function(t, e) {
            function i(t, e) {
                return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t[9] = e[9], t[10] = e[10], t[11] = e[11], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15], t
            }
            e.exports = i
        }, {}],
        4: [function(t, e) {
            function i() {
                var t = new r(16);
                return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
            }
            e.exports = i;
            var r = t("./common").GLMAT_ARRAY_TYPE()
        }, {
            "./common": 2
        }],
        5: [function(t, e) {
            function i(t) {
                return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
            }
            e.exports = i
        }, {}],
        6: [function(t, e) {
            function i(t, e) {
                var i = e[0],
                    r = e[1],
                    n = e[2],
                    o = e[3],
                    s = e[4],
                    a = e[5],
                    h = e[6],
                    l = e[7],
                    u = e[8],
                    c = e[9],
                    p = e[10],
                    d = e[11],
                    f = e[12],
                    m = e[13],
                    v = e[14],
                    _ = e[15],
                    y = i * a - r * s,
                    g = i * h - n * s,
                    w = i * l - o * s,
                    x = r * h - n * a,
                    b = r * l - o * a,
                    E = n * l - o * h,
                    T = u * m - c * f,
                    C = u * v - p * f,
                    M = u * _ - d * f,
                    L = c * v - p * m,
                    R = c * _ - d * m,
                    A = p * _ - d * v,
                    S = y * A - g * R + w * L + x * M - b * C + E * T;
                return S ? (S = 1 / S, t[0] = (a * A - h * R + l * L) * S, t[1] = (n * R - r * A - o * L) * S, t[2] = (m * E - v * b + _ * x) * S, t[3] = (p * b - c * E - d * x) * S, t[4] = (h * M - s * A - l * C) * S, t[5] = (i * A - n * M + o * C) * S, t[6] = (v * w - f * E - _ * g) * S, t[7] = (u * E - p * w + d * g) * S, t[8] = (s * R - a * M + l * T) * S, t[9] = (r * M - i * R - o * T) * S, t[10] = (f * b - m * w + _ * y) * S, t[11] = (c * w - u * b - d * y) * S, t[12] = (a * C - s * L - h * T) * S, t[13] = (i * L - r * C + n * T) * S, t[14] = (m * g - f * x - v * y) * S, t[15] = (u * x - c * g + p * y) * S, t) : null
            }
            e.exports = i
        }, {}],
        7: [function(t, e) {
            function i(t, e, i, r, n, o, s) {
                var a = 1 / (e - i),
                    h = 1 / (r - n),
                    l = 1 / (o - s);
                return t[0] = -2 * a, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = -2 * h, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 2 * l, t[11] = 0, t[12] = (e + i) * a, t[13] = (n + r) * h, t[14] = (s + o) * l, t[15] = 1, t
            }
            e.exports = i
        }, {}],
        8: [function(t, e) {
            function i(t, e, i, r, n) {
                var o = 1 / Math.tan(e / 2),
                    s = 1 / (r - n);
                return t[0] = o / i, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = o, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = (n + r) * s, t[11] = -1, t[12] = 0, t[13] = 0, t[14] = 2 * n * r * s, t[15] = 0, t
            }
            e.exports = i
        }, {}],
        9: [function(t, e) {
            function i(t, e, i) {
                var r = Math.sin(i),
                    n = Math.cos(i),
                    o = e[4],
                    s = e[5],
                    a = e[6],
                    h = e[7],
                    l = e[8],
                    u = e[9],
                    c = e[10],
                    p = e[11];
                return e !== t && (t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]), t[4] = o * n + l * r, t[5] = s * n + u * r, t[6] = a * n + c * r, t[7] = h * n + p * r, t[8] = l * n - o * r, t[9] = u * n - s * r, t[10] = c * n - a * r, t[11] = p * n - h * r, t
            }
            e.exports = i
        }, {}],
        10: [function(t, e) {
            function i(t, e, i) {
                var r = Math.sin(i),
                    n = Math.cos(i),
                    o = e[0],
                    s = e[1],
                    a = e[2],
                    h = e[3],
                    l = e[8],
                    u = e[9],
                    c = e[10],
                    p = e[11];
                return e !== t && (t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]), t[0] = o * n - l * r, t[1] = s * n - u * r, t[2] = a * n - c * r, t[3] = h * n - p * r, t[8] = o * r + l * n, t[9] = s * r + u * n, t[10] = a * r + c * n, t[11] = h * r + p * n, t
            }
            e.exports = i
        }, {}],
        11: [function(t, e) {
            function i(t, e, i) {
                var r = Math.sin(i),
                    n = Math.cos(i),
                    o = e[0],
                    s = e[1],
                    a = e[2],
                    h = e[3],
                    l = e[4],
                    u = e[5],
                    c = e[6],
                    p = e[7];
                return e !== t && (t[8] = e[8], t[9] = e[9], t[10] = e[10], t[11] = e[11], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]), t[0] = o * n + l * r, t[1] = s * n + u * r, t[2] = a * n + c * r, t[3] = h * n + p * r, t[4] = l * n - o * r, t[5] = u * n - s * r, t[6] = c * n - a * r, t[7] = p * n - h * r, t
            }
            e.exports = i
        }, {}],
        12: [function(t, e) {
            function i(t, e, i) {
                var r = i[0],
                    n = i[1],
                    o = i[2];
                return t[0] = e[0] * r, t[1] = e[1] * r, t[2] = e[2] * r, t[3] = e[3] * r, t[4] = e[4] * n, t[5] = e[5] * n, t[6] = e[6] * n, t[7] = e[7] * n, t[8] = e[8] * o, t[9] = e[9] * o, t[10] = e[10] * o, t[11] = e[11] * o, t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15], t
            }
            e.exports = i
        }, {}],
        13: [function(t, e) {
            function i(t, e, i) {
                var r, n, o, s, a, h, l, u, c, p, d, f, m = i[0],
                    v = i[1],
                    _ = i[2];
                return e === t ? (t[12] = e[0] * m + e[4] * v + e[8] * _ + e[12], t[13] = e[1] * m + e[5] * v + e[9] * _ + e[13], t[14] = e[2] * m + e[6] * v + e[10] * _ + e[14], t[15] = e[3] * m + e[7] * v + e[11] * _ + e[15]) : (r = e[0], n = e[1], o = e[2], s = e[3], a = e[4], h = e[5], l = e[6], u = e[7], c = e[8], p = e[9], d = e[10], f = e[11], t[0] = r, t[1] = n, t[2] = o, t[3] = s, t[4] = a, t[5] = h, t[6] = l, t[7] = u, t[8] = c, t[9] = p, t[10] = d, t[11] = f, t[12] = r * m + a * v + c * _ + e[12], t[13] = n * m + h * v + p * _ + e[13], t[14] = o * m + l * v + d * _ + e[14], t[15] = s * m + u * v + f * _ + e[15]), t
            }
            e.exports = i
        }, {}],
        14: [function(t, e) {
            function i(t, e) {
                if (t === e) {
                    var i = e[1],
                        r = e[2],
                        n = e[3],
                        o = e[6],
                        s = e[7],
                        a = e[11];
                    t[1] = e[4], t[2] = e[8], t[3] = e[12], t[4] = i, t[6] = e[9], t[7] = e[13], t[8] = r, t[9] = o, t[11] = e[14], t[12] = n, t[13] = s, t[14] = a
                } else t[0] = e[0], t[1] = e[4], t[2] = e[8], t[3] = e[12], t[4] = e[1], t[5] = e[5], t[6] = e[9], t[7] = e[13], t[8] = e[2], t[9] = e[6], t[10] = e[10], t[11] = e[14], t[12] = e[3], t[13] = e[7], t[14] = e[11], t[15] = e[15];
                return t
            }
            e.exports = i
        }, {}],
        15: [function(t, e, i) {
            arguments[4][2][0].apply(i, arguments)
        }, {
            dup: 2
        }],
        16: [function(t, e) {
            function i() {
                var t = new r(2);
                return t[0] = 0, t[1] = 0, t
            }
            e.exports = i;
            var r = t("./common").GLMAT_ARRAY_TYPE()
        }, {
            "./common": 15
        }],
        17: [function(t, e) {
            function i(t, e, i) {
                return t[0] = e, t[1] = i, t
            }
            e.exports = i
        }, {}],
        18: [function(t, e, i) {
            arguments[4][2][0].apply(i, arguments)
        }, {
            dup: 2
        }],
        19: [function(t, e) {
            function i() {
                var t = new r(3);
                return t[0] = 0, t[1] = 0, t[2] = 0, t
            }
            e.exports = i;
            var r = t("./common").GLMAT_ARRAY_TYPE()
        }, {
            "./common": 18
        }],
        20: [function(t, e) {
            function i(t, e) {
                return t[0] * e[0] + t[1] * e[1] + t[2] * e[2]
            }
            e.exports = i
        }, {}],
        21: [function(t, e) {
            function i(t, e, i) {
                var n = new r(3);
                return n[0] = t, n[1] = e, n[2] = i, n
            }
            e.exports = i;
            var r = t("./common").GLMAT_ARRAY_TYPE()
        }, {
            "./common": 18
        }],
        22: [function(t, e) {
            function i(t, e, i, r) {
                return t[0] = e, t[1] = i, t[2] = r, t
            }
            e.exports = i
        }, {}],
        23: [function(t, e) {
            function i(t, e, i) {
                var r = e[0],
                    n = e[1],
                    o = e[2],
                    s = i[3] * r + i[7] * n + i[11] * o + i[15];
                return s = s || 1, t[0] = (i[0] * r + i[4] * n + i[8] * o + i[12]) / s, t[1] = (i[1] * r + i[5] * n + i[9] * o + i[13]) / s, t[2] = (i[2] * r + i[6] * n + i[10] * o + i[14]) / s, t
            }
            e.exports = i
        }, {}],
        24: [function(t, e) {
            function i(t, e, i) {
                return t[0] = e[0] + i[0], t[1] = e[1] + i[1], t[2] = e[2] + i[2], t[3] = e[3] + i[3], t
            }
            e.exports = i
        }, {}],
        25: [function(t, e) {
            e.exports = {
                GLMAT_ARRAY_TYPE: "undefined" != typeof Float32Array ? Float32Array : Array
            }
        }, {}],
        26: [function(t, e) {
            function i() {
                var t = new r(4);
                return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 0, t
            }
            var r = t("./common").GLMAT_ARRAY_TYPE;
            e.exports = i
        }, {
            "./common": 25
        }],
        27: [function(t, e) {
            function i(t, e) {
                return t[0] * e[0] + t[1] * e[1] + t[2] * e[2] + t[3] * e[3]
            }
            e.exports = i
        }, {}],
        28: [function(t, e) {
            function i(t, e, i, r, n) {
                return t[0] = e, t[1] = i, t[2] = r, t[3] = n, t
            }
            e.exports = i
        }, {}],
        29: [function(t, e) {
            function i(t, e, i) {
                var r = e[0],
                    n = e[1],
                    o = e[2],
                    s = e[3];
                return t[0] = i[0] * r + i[4] * n + i[8] * o + i[12] * s, t[1] = i[1] * r + i[5] * n + i[9] * o + i[13] * s, t[2] = i[2] * r + i[6] * n + i[10] * o + i[14] * s, t[3] = i[3] * r + i[7] * n + i[11] * o + i[15] * s, t
            }
            e.exports = i
        }, {}],
        30: [function(e, i) {
            ! function(e, r, n, o) {
                "use strict";

                function s(t, e, i) {
                    return setTimeout(d(t, i), e)
                }

                function a(t, e, i) {
                    return Array.isArray(t) ? (h(t, i[e], i), !0) : !1
                }

                function h(t, e, i) {
                    var r;
                    if (t)
                        if (t.forEach) t.forEach(e, i);
                        else if (t.length !== o)
                        for (r = 0; r < t.length;) e.call(i, t[r], r, t), r++;
                    else
                        for (r in t) t.hasOwnProperty(r) && e.call(i, t[r], r, t)
                }

                function l(t, e, i) {
                    for (var r = Object.keys(e), n = 0; n < r.length;)(!i || i && t[r[n]] === o) && (t[r[n]] = e[r[n]]), n++;
                    return t
                }

                function u(t, e) {
                    return l(t, e, !0)
                }

                function c(t) {
                    if (Object.create) return Object.create(t);
                    var e = function() {};
                    e.prototype = t;
                    var i = new e;
                    return e.prototype = null, i
                }

                function p(t, e, i) {
                    var r, n = e.prototype;
                    r = t.prototype = c(n), r.constructor = t, r._super = n, i && l(r, i)
                }

                function d(t, e) {
                    return function() {
                        return t.apply(e, arguments)
                    }
                }

                function f(t, e) {
                    return typeof t == de ? t.apply(e ? e[0] || o : o, e) : t
                }

                function m(t, e) {
                    return t === o ? e : t
                }

                function v(t, e, i) {
                    h(w(e), function(e) {
                        t.addEventListener(e, i, !1)
                    })
                }

                function _(t, e, i) {
                    h(w(e), function(e) {
                        t.removeEventListener(e, i, !1)
                    })
                }

                function y(t, e) {
                    for (; t;) {
                        if (t == e) return !0;
                        t = t.parentNode
                    }
                    return !1
                }

                function g(t, e) {
                    return t.indexOf(e) > -1
                }

                function w(t) {
                    return t.trim().split(/\s+/g)
                }

                function x(t, e, i) {
                    if (t.indexOf && !i) return t.indexOf(e);
                    for (var r = 0; r < t.length;) {
                        if (i && t[r][i] == e || !i && t[r] === e) return r;
                        r++
                    }
                    return -1
                }

                function b(t) {
                    return Array.prototype.slice.call(t, 0)
                }

                function E(t, e, i) {
                    for (var r = [], n = [], o = 0; o < t.length;) {
                        var s = e ? t[o][e] : t[o];
                        x(n, s) < 0 && r.push(t[o]), n[o] = s, o++
                    }
                    return i && (r = e ? r.sort(function(t, i) {
                        return t[e] > i[e]
                    }) : r.sort()), r
                }

                function T(t, e) {
                    for (var i, r, n = e[0].toUpperCase() + e.slice(1), s = 0; s < ce.length;) {
                        if (i = ce[s], r = i ? i + n : e, r in t) return r;
                        s++
                    }
                    return o
                }

                function C() {
                    return _e++
                }

                function M(t) {
                    var i = t.ownerDocument || t;
                    return i.defaultView || i.parentWindow || e
                }

                function L(t, e) {
                    var i = this;
                    this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function(e) {
                        f(t.options.enable, [t]) && i.handler(e)
                    }, this.init()
                }

                function R(t) {
                    var e, i = t.options.inputClass;
                    return new(e = i ? i : we ? W : xe ? G : ge ? U : B)(t, A)
                }

                function A(t, e, i) {
                    var r = i.pointers.length,
                        n = i.changedPointers.length,
                        o = e & Le && r - n === 0,
                        s = e & (Ae | Se) && r - n === 0;
                    i.isFirst = !!o, i.isFinal = !!s, o && (t.session = {}), i.eventType = e, S(t, i), t.emit("hammer.input", i), t.recognize(i), t.session.prevInput = i
                }

                function S(t, e) {
                    var i = t.session,
                        r = e.pointers,
                        n = r.length;
                    i.firstInput || (i.firstInput = I(e)), n > 1 && !i.firstMultiple ? i.firstMultiple = I(e) : 1 === n && (i.firstMultiple = !1);
                    var o = i.firstInput,
                        s = i.firstMultiple,
                        a = s ? s.center : o.center,
                        h = e.center = z(r);
                    e.timeStamp = ve(), e.deltaTime = e.timeStamp - o.timeStamp, e.angle = O(a, h), e.distance = H(a, h), P(i, e), e.offsetDirection = D(e.deltaX, e.deltaY), e.scale = s ? V(s.pointers, r) : 1, e.rotation = s ? Y(s.pointers, r) : 0, k(i, e);
                    var l = t.element;
                    y(e.srcEvent.target, l) && (l = e.srcEvent.target), e.target = l
                }

                function P(t, e) {
                    var i = e.center,
                        r = t.offsetDelta || {},
                        n = t.prevDelta || {},
                        o = t.prevInput || {};
                    (e.eventType === Le || o.eventType === Ae) && (n = t.prevDelta = {
                        x: o.deltaX || 0,
                        y: o.deltaY || 0
                    }, r = t.offsetDelta = {
                        x: i.x,
                        y: i.y
                    }), e.deltaX = n.x + (i.x - r.x), e.deltaY = n.y + (i.y - r.y)
                }

                function k(t, e) {
                    var i, r, n, s, a = t.lastInterval || e,
                        h = e.timeStamp - a.timeStamp;
                    if (e.eventType != Se && (h > Me || a.velocity === o)) {
                        var l = a.deltaX - e.deltaX,
                            u = a.deltaY - e.deltaY,
                            c = F(h, l, u);
                        r = c.x, n = c.y, i = me(c.x) > me(c.y) ? c.x : c.y, s = D(l, u), t.lastInterval = e
                    } else i = a.velocity, r = a.velocityX, n = a.velocityY, s = a.direction;
                    e.velocity = i, e.velocityX = r, e.velocityY = n, e.direction = s
                }

                function I(t) {
                    for (var e = [], i = 0; i < t.pointers.length;) e[i] = {
                        clientX: fe(t.pointers[i].clientX),
                        clientY: fe(t.pointers[i].clientY)
                    }, i++;
                    return {
                        timeStamp: ve(),
                        pointers: e,
                        center: z(e),
                        deltaX: t.deltaX,
                        deltaY: t.deltaY
                    }
                }

                function z(t) {
                    var e = t.length;
                    if (1 === e) return {
                        x: fe(t[0].clientX),
                        y: fe(t[0].clientY)
                    };
                    for (var i = 0, r = 0, n = 0; e > n;) i += t[n].clientX, r += t[n].clientY, n++;
                    return {
                        x: fe(i / e),
                        y: fe(r / e)
                    }
                }

                function F(t, e, i) {
                    return {
                        x: e / t || 0,
                        y: i / t || 0
                    }
                }

                function D(t, e) {
                    return t === e ? Pe : me(t) >= me(e) ? t > 0 ? ke : Ie : e > 0 ? ze : Fe
                }

                function H(t, e, i) {
                    i || (i = Ye);
                    var r = e[i[0]] - t[i[0]],
                        n = e[i[1]] - t[i[1]];
                    return Math.sqrt(r * r + n * n)
                }

                function O(t, e, i) {
                    i || (i = Ye);
                    var r = e[i[0]] - t[i[0]],
                        n = e[i[1]] - t[i[1]];
                    return 180 * Math.atan2(n, r) / Math.PI
                }

                function Y(t, e) {
                    return O(e[1], e[0], Ve) - O(t[1], t[0], Ve)
                }

                function V(t, e) {
                    return H(e[0], e[1], Ve) / H(t[0], t[1], Ve)
                }

                function B() {
                    this.evEl = We, Ne ? this.evDoc = Xe : this.evWin = Xe, this.allow = !0, this.pressed = !1, L.apply(this, arguments)
                }

                function W() {
                    this.evEl = Ue, this.evWin = je, L.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
                }

                function X() {
                    this.evTarget = Ke, this.evWin = Ze, this.started = !1, L.apply(this, arguments)
                }

                function N(t, e) {
                    var i = b(t.touches),
                        r = b(t.changedTouches);
                    return e & (Ae | Se) && (i = E(i.concat(r), "identifier", !0)), [i, r]
                }

                function G() {
                    this.evTarget = $e, this.targetIds = {}, L.apply(this, arguments)
                }

                function q(t, e) {
                    var i = b(t.touches),
                        r = this.targetIds;
                    if (e & (Le | Re) && 1 === i.length) return r[i[0].identifier] = !0, [i, i];
                    var n, o, s = b(t.changedTouches),
                        a = [],
                        h = this.target;
                    if (o = i.filter(function(t) {
                            return y(t.target, h)
                        }), e === Le)
                        for (n = 0; n < o.length;) r[o[n].identifier] = !0, n++;
                    for (n = 0; n < s.length;) r[s[n].identifier] && a.push(s[n]), e & (Ae | Se) && delete r[s[n].identifier], n++;
                    return a.length ? [E(o.concat(a), "identifier", !0), a] : void 0
                }

                function U() {
                    L.apply(this, arguments);
                    var t = d(this.handler, this);
                    this.touch = new G(this.manager, t), this.mouse = new B(this.manager, t)
                }

                function j(t, e) {
                    this.manager = t, this.set(e)
                }

                function Q(t) {
                    if (g(t, oi)) return oi;
                    var e = g(t, si),
                        i = g(t, ai);
                    return e && i ? si + " " + ai : e || i ? e ? si : ai : g(t, ni) ? ni : ri
                }

                function K(t) {
                    this.id = C(), this.manager = null, this.options = u(t || {}, this.defaults), this.options.enable = m(this.options.enable, !0), this.state = hi, this.simultaneous = {}, this.requireFail = []
                }

                function Z(t) {
                    return t & di ? "cancel" : t & ci ? "end" : t & ui ? "move" : t & li ? "start" : ""
                }

                function J(t) {
                    return t == Fe ? "down" : t == ze ? "up" : t == ke ? "left" : t == Ie ? "right" : ""
                }

                function $(t, e) {
                    var i = e.manager;
                    return i ? i.get(t) : t
                }

                function te() {
                    K.apply(this, arguments)
                }

                function ee() {
                    te.apply(this, arguments), this.pX = null, this.pY = null
                }

                function ie() {
                    te.apply(this, arguments)
                }

                function re() {
                    K.apply(this, arguments), this._timer = null, this._input = null
                }

                function ne() {
                    te.apply(this, arguments)
                }

                function oe() {
                    te.apply(this, arguments)
                }

                function se() {
                    K.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
                }

                function ae(t, e) {
                    return e = e || {}, e.recognizers = m(e.recognizers, ae.defaults.preset), new he(t, e)
                }

                function he(t, e) {
                    e = e || {}, this.options = u(e, ae.defaults), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.element = t, this.input = R(this), this.touchAction = new j(this, this.options.touchAction), le(this, !0), h(e.recognizers, function(t) {
                        var e = this.add(new t[0](t[1]));
                        t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3])
                    }, this)
                }

                function le(t, e) {
                    var i = t.element;
                    i.style && h(t.options.cssProps, function(t, r) {
                        i.style[T(i.style, r)] = e ? t : ""
                    })
                }

                function ue(t, e) {
                    var i = r.createEvent("Event");
                    i.initEvent(t, !0, !0), i.gesture = e, e.target.dispatchEvent(i)
                }
                var ce = ["", "webkit", "moz", "MS", "ms", "o"],
                    pe = r.createElement("div"),
                    de = "function",
                    fe = Math.round,
                    me = Math.abs,
                    ve = Date.now,
                    _e = 1,
                    ye = /mobile|tablet|ip(ad|hone|od)|android/i,
                    ge = "ontouchstart" in e,
                    we = T(e, "PointerEvent") !== o,
                    xe = ge && ye.test(navigator.userAgent),
                    be = "touch",
                    Ee = "pen",
                    Te = "mouse",
                    Ce = "kinect",
                    Me = 25,
                    Le = 1,
                    Re = 2,
                    Ae = 4,
                    Se = 8,
                    Pe = 1,
                    ke = 2,
                    Ie = 4,
                    ze = 8,
                    Fe = 16,
                    De = ke | Ie,
                    He = ze | Fe,
                    Oe = De | He,
                    Ye = ["x", "y"],
                    Ve = ["clientX", "clientY"];
                L.prototype = {
                    handler: function() {},
                    init: function() {
                        this.evEl && v(this.element, this.evEl, this.domHandler), this.evTarget && v(this.target, this.evTarget, this.domHandler), this.evWin && v(M(this.element), this.evWin, this.domHandler), this.evDoc && v(r, this.evDoc, this.domHandler), this.evBody && v(r.body, this.evBody, this.domHandler)
                    },
                    destroy: function() {
                        this.evEl && _(this.element, this.evEl, this.domHandler), this.evTarget && _(this.target, this.evTarget, this.domHandler), this.evWin && _(M(this.element), this.evWin, this.domHandler), this.evDoc && _(r, this.evDoc, this.domHandler), this.evBody && _(r.body, this.evBody, this.domHandler)
                    }
                };
                var Be = {
                        mousedown: Le,
                        mousemove: Re,
                        mouseup: Ae
                    },
                    We = "mousedown",
                    Xe = "mousemove mouseup",
                    Ne = e.navigator.userAgent.indexOf("MSIE 8") > 0;
                p(B, L, {
                    handler: function(t) {
                        var e = Be[t.type],
                            i = 0;
                        Ne && (i = 1), e & Le && t.button === i && (this.pressed = !0), e & Re && t.button !== i && (e = Ae), this.pressed && this.allow && (e & Ae && (this.pressed = !1), this.callback(this.manager, e, {
                            pointers: [t],
                            changedPointers: [t],
                            pointerType: Te,
                            srcEvent: t
                        }))
                    }
                });
                var Ge = {
                        pointerdown: Le,
                        pointermove: Re,
                        pointerup: Ae,
                        pointercancel: Se,
                        pointerout: Se
                    },
                    qe = {
                        2: be,
                        3: Ee,
                        4: Te,
                        5: Ce
                    },
                    Ue = "pointerdown",
                    je = "pointermove pointerup pointercancel";
                e.MSPointerEvent && (Ue = "MSPointerDown", je = "MSPointerMove MSPointerUp MSPointerCancel"), p(W, L, {
                    handler: function(t) {
                        var e = this.store,
                            i = !1,
                            r = t.type.toLowerCase().replace("ms", ""),
                            n = Ge[r],
                            o = qe[t.pointerType] || t.pointerType,
                            s = o == be,
                            a = x(e, t.pointerId, "pointerId");
                        n & Le && (0 === t.button || s) ? 0 > a && (e.push(t), a = e.length - 1) : n & (Ae | Se) && (i = !0), 0 > a || (e[a] = t, this.callback(this.manager, n, {
                            pointers: e,
                            changedPointers: [t],
                            pointerType: o,
                            srcEvent: t
                        }), i && e.splice(a, 1))
                    }
                });
                var Qe = {
                        touchstart: Le,
                        touchmove: Re,
                        touchend: Ae,
                        touchcancel: Se
                    },
                    Ke = "touchstart",
                    Ze = "touchstart touchmove touchend touchcancel";
                p(X, L, {
                    handler: function(t) {
                        var e = Qe[t.type];
                        if (e === Le && (this.started = !0), this.started) {
                            var i = N.call(this, t, e);
                            e & (Ae | Se) && i[0].length - i[1].length === 0 && (this.started = !1), this.callback(this.manager, e, {
                                pointers: i[0],
                                changedPointers: i[1],
                                pointerType: be,
                                srcEvent: t
                            })
                        }
                    }
                });
                var Je = {
                        touchstart: Le,
                        touchmove: Re,
                        touchend: Ae,
                        touchcancel: Se
                    },
                    $e = "touchstart touchmove touchend touchcancel";
                p(G, L, {
                    handler: function(t) {
                        var e = Je[t.type],
                            i = q.call(this, t, e);
                        i && this.callback(this.manager, e, {
                            pointers: i[0],
                            changedPointers: i[1],
                            pointerType: be,
                            srcEvent: t
                        })
                    }
                }), p(U, L, {
                    handler: function(t, e, i) {
                        var r = i.pointerType == be,
                            n = i.pointerType == Te;
                        if (r) this.mouse.allow = !1;
                        else if (n && !this.mouse.allow) return;
                        e & (Ae | Se) && (this.mouse.allow = !0), this.callback(t, e, i)
                    },
                    destroy: function() {
                        this.touch.destroy(), this.mouse.destroy()
                    }
                });
                var ti = T(pe.style, "touchAction"),
                    ei = ti !== o,
                    ii = "compute",
                    ri = "auto",
                    ni = "manipulation",
                    oi = "none",
                    si = "pan-x",
                    ai = "pan-y";
                j.prototype = {
                    set: function(t) {
                        t == ii && (t = this.compute()), ei && this.manager.element.style && (this.manager.element.style[ti] = t), this.actions = t.toLowerCase().trim()
                    },
                    update: function() {
                        this.set(this.manager.options.touchAction)
                    },
                    compute: function() {
                        var t = [];
                        return h(this.manager.recognizers, function(e) {
                            f(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()))
                        }), Q(t.join(" "))
                    },
                    preventDefaults: function(t) {
                        if (!ei) {
                            var e = t.srcEvent,
                                i = t.offsetDirection;
                            if (this.manager.session.prevented) return void e.preventDefault();
                            var r = this.actions,
                                n = g(r, oi),
                                o = g(r, ai),
                                s = g(r, si);
                            return n || o && i & De || s && i & He ? this.preventSrc(e) : void 0
                        }
                    },
                    preventSrc: function(t) {
                        this.manager.session.prevented = !0, t.preventDefault()
                    }
                };
                var hi = 1,
                    li = 2,
                    ui = 4,
                    ci = 8,
                    pi = ci,
                    di = 16,
                    fi = 32;
                K.prototype = {
                    defaults: {},
                    set: function(t) {
                        return l(this.options, t), this.manager && this.manager.touchAction.update(), this
                    },
                    recognizeWith: function(t) {
                        if (a(t, "recognizeWith", this)) return this;
                        var e = this.simultaneous;
                        return t = $(t, this), e[t.id] || (e[t.id] = t, t.recognizeWith(this)), this
                    },
                    dropRecognizeWith: function(t) {
                        return a(t, "dropRecognizeWith", this) ? this : (t = $(t, this), delete this.simultaneous[t.id], this)
                    },
                    requireFailure: function(t) {
                        if (a(t, "requireFailure", this)) return this;
                        var e = this.requireFail;
                        return t = $(t, this), -1 === x(e, t) && (e.push(t), t.requireFailure(this)), this
                    },
                    dropRequireFailure: function(t) {
                        if (a(t, "dropRequireFailure", this)) return this;
                        t = $(t, this);
                        var e = x(this.requireFail, t);
                        return e > -1 && this.requireFail.splice(e, 1), this
                    },
                    hasRequireFailures: function() {
                        return this.requireFail.length > 0
                    },
                    canRecognizeWith: function(t) {
                        return !!this.simultaneous[t.id]
                    },
                    emit: function(t) {
                        function e(e) {
                            i.manager.emit(i.options.event + (e ? Z(r) : ""), t)
                        }
                        var i = this,
                            r = this.state;
                        ci > r && e(!0), e(), r >= ci && e(!0)
                    },
                    tryEmit: function(t) {
                        return this.canEmit() ? this.emit(t) : void(this.state = fi)
                    },
                    canEmit: function() {
                        for (var t = 0; t < this.requireFail.length;) {
                            if (!(this.requireFail[t].state & (fi | hi))) return !1;
                            t++
                        }
                        return !0
                    },
                    recognize: function(t) {
                        var e = l({}, t);
                        return f(this.options.enable, [this, e]) ? (this.state & (pi | di | fi) && (this.state = hi), this.state = this.process(e), void(this.state & (li | ui | ci | di) && this.tryEmit(e))) : (this.reset(), void(this.state = fi))
                    },
                    process: function() {},
                    getTouchAction: function() {},
                    reset: function() {}
                }, p(te, K, {
                    defaults: {
                        pointers: 1
                    },
                    attrTest: function(t) {
                        var e = this.options.pointers;
                        return 0 === e || t.pointers.length === e
                    },
                    process: function(t) {
                        var e = this.state,
                            i = t.eventType,
                            r = e & (li | ui),
                            n = this.attrTest(t);
                        return r && (i & Se || !n) ? e | di : r || n ? i & Ae ? e | ci : e & li ? e | ui : li : fi
                    }
                }), p(ee, te, {
                    defaults: {
                        event: "pan",
                        threshold: 10,
                        pointers: 1,
                        direction: Oe
                    },
                    getTouchAction: function() {
                        var t = this.options.direction,
                            e = [];
                        return t & De && e.push(ai), t & He && e.push(si), e
                    },
                    directionTest: function(t) {
                        var e = this.options,
                            i = !0,
                            r = t.distance,
                            n = t.direction,
                            o = t.deltaX,
                            s = t.deltaY;
                        return n & e.direction || (e.direction & De ? (n = 0 === o ? Pe : 0 > o ? ke : Ie, i = o != this.pX, r = Math.abs(t.deltaX)) : (n = 0 === s ? Pe : 0 > s ? ze : Fe, i = s != this.pY, r = Math.abs(t.deltaY))), t.direction = n, i && r > e.threshold && n & e.direction
                    },
                    attrTest: function(t) {
                        return te.prototype.attrTest.call(this, t) && (this.state & li || !(this.state & li) && this.directionTest(t))
                    },
                    emit: function(t) {
                        this.pX = t.deltaX, this.pY = t.deltaY;
                        var e = J(t.direction);
                        e && this.manager.emit(this.options.event + e, t), this._super.emit.call(this, t)
                    }
                }), p(ie, te, {
                    defaults: {
                        event: "pinch",
                        threshold: 0,
                        pointers: 2
                    },
                    getTouchAction: function() {
                        return [oi]
                    },
                    attrTest: function(t) {
                        return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & li)
                    },
                    emit: function(t) {
                        if (this._super.emit.call(this, t), 1 !== t.scale) {
                            var e = t.scale < 1 ? "in" : "out";
                            this.manager.emit(this.options.event + e, t)
                        }
                    }
                }), p(re, K, {
                    defaults: {
                        event: "press",
                        pointers: 1,
                        time: 500,
                        threshold: 5
                    },
                    getTouchAction: function() {
                        return [ri]
                    },
                    process: function(t) {
                        var e = this.options,
                            i = t.pointers.length === e.pointers,
                            r = t.distance < e.threshold,
                            n = t.deltaTime > e.time;
                        if (this._input = t, !r || !i || t.eventType & (Ae | Se) && !n) this.reset();
                        else if (t.eventType & Le) this.reset(), this._timer = s(function() {
                            this.state = pi, this.tryEmit()
                        }, e.time, this);
                        else if (t.eventType & Ae) return pi;
                        return fi
                    },
                    reset: function() {
                        clearTimeout(this._timer)
                    },
                    emit: function(t) {
                        this.state === pi && (t && t.eventType & Ae ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = ve(), this.manager.emit(this.options.event, this._input)))
                    }
                }), p(ne, te, {
                    defaults: {
                        event: "rotate",
                        threshold: 0,
                        pointers: 2
                    },
                    getTouchAction: function() {
                        return [oi]
                    },
                    attrTest: function(t) {
                        return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & li)
                    }
                }), p(oe, te, {
                    defaults: {
                        event: "swipe",
                        threshold: 10,
                        velocity: .65,
                        direction: De | He,
                        pointers: 1
                    },
                    getTouchAction: function() {
                        return ee.prototype.getTouchAction.call(this)
                    },
                    attrTest: function(t) {
                        var e, i = this.options.direction;
                        return i & (De | He) ? e = t.velocity : i & De ? e = t.velocityX : i & He && (e = t.velocityY), this._super.attrTest.call(this, t) && i & t.direction && t.distance > this.options.threshold && me(e) > this.options.velocity && t.eventType & Ae
                    },
                    emit: function(t) {
                        var e = J(t.direction);
                        e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t)
                    }
                }), p(se, K, {
                    defaults: {
                        event: "tap",
                        pointers: 1,
                        taps: 1,
                        interval: 300,
                        time: 250,
                        threshold: 2,
                        posThreshold: 10
                    },
                    getTouchAction: function() {
                        return [ni]
                    },
                    process: function(t) {
                        var e = this.options,
                            i = t.pointers.length === e.pointers,
                            r = t.distance < e.threshold,
                            n = t.deltaTime < e.time;
                        if (this.reset(), t.eventType & Le && 0 === this.count) return this.failTimeout();
                        if (r && n && i) {
                            if (t.eventType != Ae) return this.failTimeout();
                            var o = this.pTime ? t.timeStamp - this.pTime < e.interval : !0,
                                a = !this.pCenter || H(this.pCenter, t.center) < e.posThreshold;
                            this.pTime = t.timeStamp, this.pCenter = t.center, a && o ? this.count += 1 : this.count = 1, this._input = t;
                            var h = this.count % e.taps;
                            if (0 === h) return this.hasRequireFailures() ? (this._timer = s(function() {
                                this.state = pi, this.tryEmit()
                            }, e.interval, this), li) : pi
                        }
                        return fi
                    },
                    failTimeout: function() {
                        return this._timer = s(function() {
                            this.state = fi
                        }, this.options.interval, this), fi
                    },
                    reset: function() {
                        clearTimeout(this._timer)
                    },
                    emit: function() {
                        this.state == pi && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
                    }
                }), ae.VERSION = "2.0.4", ae.defaults = {
                    domEvents: !1,
                    touchAction: ii,
                    enable: !0,
                    inputTarget: null,
                    inputClass: null,
                    preset: [
                        [ne, {
                            enable: !1
                        }],
                        [ie, {
                                enable: !1
                            },
                            ["rotate"]
                        ],
                        [oe, {
                            direction: De
                        }],
                        [ee, {
                                direction: De
                            },
                            ["swipe"]
                        ],
                        [se],
                        [se, {
                                event: "doubletap",
                                taps: 2
                            },
                            ["tap"]
                        ],
                        [re]
                    ],
                    cssProps: {
                        userSelect: "none",
                        touchSelect: "none",
                        touchCallout: "none",
                        contentZooming: "none",
                        userDrag: "none",
                        tapHighlightColor: "rgba(0,0,0,0)"
                    }
                };
                var mi = 1,
                    vi = 2;
                he.prototype = {
                    set: function(t) {
                        return l(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this
                    },
                    stop: function(t) {
                        this.session.stopped = t ? vi : mi
                    },
                    recognize: function(t) {
                        var e = this.session;
                        if (!e.stopped) {
                            this.touchAction.preventDefaults(t);
                            var i, r = this.recognizers,
                                n = e.curRecognizer;
                            (!n || n && n.state & pi) && (n = e.curRecognizer = null);
                            for (var o = 0; o < r.length;) i = r[o], e.stopped === vi || n && i != n && !i.canRecognizeWith(n) ? i.reset() : i.recognize(t), !n && i.state & (li | ui | ci) && (n = e.curRecognizer = i), o++
                        }
                    },
                    get: function(t) {
                        if (t instanceof K) return t;
                        for (var e = this.recognizers, i = 0; i < e.length; i++)
                            if (e[i].options.event == t) return e[i];
                        return null
                    },
                    add: function(t) {
                        if (a(t, "add", this)) return this;
                        var e = this.get(t.options.event);
                        return e && this.remove(e), this.recognizers.push(t), t.manager = this, this.touchAction.update(), t
                    },
                    remove: function(t) {
                        if (a(t, "remove", this)) return this;
                        var e = this.recognizers;
                        return t = this.get(t), e.splice(x(e, t), 1), this.touchAction.update(), this
                    },
                    on: function(t, e) {
                        var i = this.handlers;
                        return h(w(t), function(t) {
                            i[t] = i[t] || [], i[t].push(e)
                        }), this
                    },
                    off: function(t, e) {
                        var i = this.handlers;
                        return h(w(t), function(t) {
                            e ? i[t].splice(x(i[t], e), 1) : delete i[t]
                        }), this
                    },
                    emit: function(t, e) {
                        this.options.domEvents && ue(t, e);
                        var i = this.handlers[t] && this.handlers[t].slice();
                        if (i && i.length) {
                            e.type = t, e.preventDefault = function() {
                                e.srcEvent.preventDefault()
                            };
                            for (var r = 0; r < i.length;) i[r](e), r++
                        }
                    },
                    destroy: function() {
                        this.element && le(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
                    }
                }, l(ae, {
                    INPUT_START: Le,
                    INPUT_MOVE: Re,
                    INPUT_END: Ae,
                    INPUT_CANCEL: Se,
                    STATE_POSSIBLE: hi,
                    STATE_BEGAN: li,
                    STATE_CHANGED: ui,
                    STATE_ENDED: ci,
                    STATE_RECOGNIZED: pi,
                    STATE_CANCELLED: di,
                    STATE_FAILED: fi,
                    DIRECTION_NONE: Pe,
                    DIRECTION_LEFT: ke,
                    DIRECTION_RIGHT: Ie,
                    DIRECTION_UP: ze,
                    DIRECTION_DOWN: Fe,
                    DIRECTION_HORIZONTAL: De,
                    DIRECTION_VERTICAL: He,
                    DIRECTION_ALL: Oe,
                    Manager: he,
                    Input: L,
                    TouchAction: j,
                    TouchInput: G,
                    MouseInput: B,
                    PointerEventInput: W,
                    TouchMouseInput: U,
                    SingleTouchInput: X,
                    Recognizer: K,
                    AttrRecognizer: te,
                    Tap: se,
                    Pan: ee,
                    Swipe: oe,
                    Pinch: ie,
                    Rotate: ne,
                    Press: re,
                    on: v,
                    off: _,
                    each: h,
                    merge: u,
                    extend: l,
                    inherit: p,
                    bindFn: d,
                    prefixed: T
                }), typeof t == de && t.amd ? t(function() {
                    return ae
                }) : "undefined" != typeof i && i.exports ? i.exports = ae : e[n] = ae
            }(window, document, "Hammer")
        }, {}],
        31: [function(t, e) {
            "use strict";

            function i() {}

            function r(t) {
                for (var e in i.prototype) i.prototype.hasOwnProperty(e) && (t.prototype[e] = i.prototype[e])
            }
            i.prototype.addEventListener = function(t, e) {
                var i = this.__events = this.__events || {},
                    r = i[t] = i[t] || [];
                r.push(e)
            }, i.prototype.removeEventListener = function(t, e) {
                var i = this.__events = this.__events || {},
                    r = i[t];
                if (r) {
                    var n = r.indexOf(e);
                    n >= 0 && r.splice(n, 1)
                }
            }, i.prototype.emit = function() {
                var t = this.__events = this.__events || {},
                    e = arguments[0],
                    i = t[e];
                if (i)
                    for (var r = 0; r < i.length; r++) {
                        var n = i[r];
                        n.apply(this, arguments)
                    }
            }, e.exports = r
        }, {}],
        32: [function(t, e) {
            "use strict";

            function i(t, e) {
                this._equals = t, this._hash = e, this._queue = [], this._visited = new r(t, e), this._neighborsFun = null, this._exploreFun = null
            }
            var r = t("./collections/Set");
            i.prototype.start = function(t, e, i) {
                if (this._neighborsFun || this._exploreFun) throw new Error("GraphFinder: search already in progress");
                this.reset(), this._neighborsFun = e, this._exploreFun = i, this._queue.push(t)
            }, i.prototype.reset = function() {
                this._neighborsFun = null, this._exploreFun = null, this._queue.length = 0, this._visited.clear()
            }, i.prototype.next = function() {
                var t = this._queue,
                    e = this._visited,
                    i = this._neighborsFun,
                    r = this._exploreFun;
                if (!i || !r) throw new Error("GraphFinder: no search in progress");
                for (; t.length > 0;) {
                    var n = this._queue.shift();
                    if (!e.has(n) && r(n)) {
                        e.add(n);
                        for (var o = i(n), s = 0; s < o.length; s++) t.push(o[s]);
                        return n
                    }
                }
                return this.reset(), null
            }, e.exports = i
        }, {
            "./collections/Set": 54
        }],
        33: [function(t, e) {
            "use strict";

            function i(t, e, i, r, o) {
                if (o = o || {}, o.perspective = o.perspective || {}, o.perspective.extraRotations = null != o.perspective.extraRotations ? o.perspective.extraRotations : "", o.perspective.radius && !n()) throw new Error("Hotspot cannot not be embedded in sphere for lack of browser support");
                this._domElement = t, this._parentDomElement = e, this._view = i, this._params = {}, this._perspective = {}, this.setPosition(r), this._parentDomElement.appendChild(this._domElement), this.setPerspective(o.perspective), this._visible = !0, this._position = {
                    x: 0,
                    y: 0
                }
            }
            var r = t("minimal-event-emitter"),
                n = t("./support/Css"),
                o = t("./positionAbsolutely"),
                s = t("./domUtil").setTransform;
            r(i), i.prototype._destroy = function() {
                this._parentDomElement.removeChild(this._domElement), this._domElement = null, this._parentDomElement = null, this._params = null, this._view = null, this._position = null, this._visible = !1
            }, i.prototype.domElement = function() {
                return this._domElement
            }, i.prototype.position = function() {
                return this._params
            }, i.prototype.setPosition = function(t) {
                for (var e in t) this._params[e] = t[e];
                this._update()
            }, i.prototype.perspective = function() {
                return this._perspective
            }, i.prototype.setPerspective = function(t) {
                for (var e in t) this._perspective[e] = t[e];
                this._update()
            }, i.prototype.show = function() {
                this._visible || (this._visible = !0, this._update())
            }, i.prototype.hide = function() {
                this._visible && (this._visible = !1, this._update())
            }, i.prototype._update = function() {
                var t, e, i = this._domElement,
                    r = this._params,
                    n = this._position,
                    o = !1;
                if (this._visible) {
                    var s = this._view;
                    this._perspective.radius ? (o = !0, this._setEmbeddedPosition(s, r)) : (s.coordinatesToScreen(r, n), t = n.x, e = n.y, null != t && null != e && (o = !0, this._setPosition(t, e)))
                }
                o ? (i.style.display = "block", i.style.position = "absolute") : (i.style.display = "none", i.style.position = "")
            }, i.prototype._setEmbeddedPosition = function(t, e) {
                var i = t.coordinatesToPerspectiveTransform(e, this._perspective.radius, this._perspective.extraRotations);
                s(this._domElement, i)
            }, i.prototype._setPosition = function(t, e) {
                o(this._domElement, t, e)
            }, e.exports = i
        }, {
            "./domUtil": 73,
            "./positionAbsolutely": 81,
            "./support/Css": 107,
            "minimal-event-emitter": 31
        }],
        34: [function(t, e) {
            "use strict";

            function i(t, e, i, r, n) {
                n = n || {}, this._parentDomElement = t, this._stage = e, this._view = i, this._renderLoop = r, this._rect = n.rect, this._hotspotContainerWrapper = document.createElement("div"), h(this._hotspotContainerWrapper), d(this._hotspotContainerWrapper, "none"), this._parentDomElement.appendChild(this._hotspotContainerWrapper), this._hotspotContainer = document.createElement("div"), h(this._hotspotContainer), d(this._hotspotContainer, "all"), this._hotspotContainerWrapper.appendChild(this._hotspotContainer), this._hotspots = [], this._visible = !0, this._supported = !0, this._isVisible = !0, this._positionAndSize = {}, this._hasRect = null, this._newPositionAndSize = {}, this._updateHandler = this._update.bind(this), this._renderLoop.addEventListener("afterRender", this._updateHandler)
            }
            var r = t("minimal-event-emitter"),
                n = t("./Hotspot"),
                o = t("./calcRect"),
                s = t("./positionAbsolutely"),
                a = t("./support/cssPointerEvents"),
                h = t("./domUtil").setAbsolute,
                l = t("./domUtil").setOverflowHidden,
                u = t("./domUtil").setOverflowVisible,
                c = t("./domUtil").setNullSize,
                p = t("./domUtil").setPixelSize,
                d = t("./domUtil").setWithVendorPrefix("pointer-events");
            r(i), i.prototype.destroy = function() {
                var t = this;
                this._parentDomElement.removeChild(this._hotspotContainerWrapper), this._hotspots.forEach(function(e) {
                    t.destroyHotspot(e)
                }), this._renderLoop.removeEventListener("afterRender", this._updateHandler), this._parentDomElement = null, this._stage = null, this._view = null, this._renderLoop = null, this._rect = null
            }, i.prototype.domElement = function() {
                return this._hotspotContainer
            }, i.prototype.setRect = function(t) {
                this._rect = t
            }, i.prototype.rect = function() {
                return this._rect
            }, i.prototype.createHotspot = function(t, e, i) {
                e = e || {};
                var r = new n(t, this._hotspotContainer, this._view, e, i);
                return this._hotspots.push(r), r._update(), this.emit("hotspotsChange"), r
            }, i.prototype.hasHotspot = function(t) {
                return this._hotspots.indexOf(t) >= 0
            }, i.prototype.listHotspots = function() {
                return [].concat(this._hotspots)
            }, i.prototype.destroyHotspot = function(t) {
                var e = this._hotspots.indexOf(t);
                if (0 > e) throw new Error("No such hotspot");
                this._hotspots.splice(e, 1), t._destroy(), this.emit("hotspotsChange")
            }, i.prototype.hide = function() {
                this._visible = !1, this._updateVisibility()
            }, i.prototype.show = function() {
                this._visible = !0, this._updateVisibility()
            }, i.prototype._updateVisibility = function() {
                var t = this._visible && this._supported;
                t && !this._isVisible ? (this._hotspotContainerWrapper.style.display = "block", this._isVisible = !0) : !t && this._isVisible && (this._hotspotContainerWrapper.style.display = "none", this._isVisible = !1)
            }, i.prototype._update = function() {
                this._updatePositionAndSize();
                for (var t = 0; t < this._hotspots.length; t++) this._hotspots[t]._update()
            }, i.prototype._updatePositionAndSize = function() {
                this._rect ? !a() && this._hotspots.length > 0 ? (console.warn("HotspotContainer: this browser does not support using effects.rect with hotspots. Hotspots will be hidden."), this._supported = !1) : (o(this._stage.width(), this._stage.height(), this._rect, this._newPositionAndSize), this._setPositionAndSizeWithRect(this._newPositionAndSize), this._supported = !0) : (this._setPositionAndSizeWithoutRect(), this._supported = !0), this._updateVisibility()
            }, i.prototype._setPositionAndSizeWithRect = function(t) {
                var e = this._hotspotContainerWrapper;
                this._hasRect !== !0 && l(e), (this._hasRect !== !0 || t.left !== this._positionAndSize.left || t.top !== this._positionAndSize.top) && s(e, t.left, t.top), (this._hasRect !== !0 || +t.width !== this._positionAndSize.width || t.height !== this._positionAndSize.height) && p(e, t.width, t.height), this._positionAndSize.left = t.left, this._positionAndSize.top = t.top, this._positionAndSize.width = t.width, this._positionAndSize.height = t.height, this._hasRect = !0
            }, i.prototype._setPositionAndSizeWithoutRect = function() {
                this._hasRect !== !1 && (s(this._hotspotContainerWrapper, 0, 0), c(this._hotspotContainerWrapper), u(this._hotspotContainerWrapper), this._hasRect = !1)
            }, e.exports = i
        }, {
            "./Hotspot": 33,
            "./calcRect": 49,
            "./domUtil": 73,
            "./positionAbsolutely": 81,
            "./support/cssPointerEvents": 110,
            "minimal-event-emitter": 31
        }],
        35: [function(t, e) {
            "use strict";

            function i(t, e, i, r, n, o) {
                o = o || {};
                var s = this;
                this._stage = t, this._source = e, this._geometry = i, this._view = r, this._effects = o.effects || {}, this._textureStore = n, this._fixedLevelIndex = null, this._viewChangeHandler = function() {
                    s.emit("viewChange", s.view())
                }, this._view.addEventListener("change", this._viewChangeHandler), this._handleTextureStoreChange = function() {
                    s.emit("textureStoreChange", s.textureStore())
                }, this._textureStore.addEventListener("textureLoad", this._handleTextureStoreChange), this._textureStore.addEventListener("textureError", this._handleTextureStoreChange), this._textureStore.addEventListener("textureInvalid", this._handleTextureStoreChange), this._levels = []
            }
            var r = t("minimal-event-emitter"),
                n = t("./util/extend");
            r(i), i.prototype.destroy = function() {
                this._view.removeEventListener("change", this._viewChangeHandler), this._textureStore.removeEventListener("textureLoad", this._handleTextureStoreChange), this._textureStore.removeEventListener("textureError", this._handleTextureStoreChange), this._textureStore.removeEventListener("textureInvalid", this._handleTextureStoreChange), this._stage.removeEventListener("resize", this._handleStageResize), this._stage = null, this._source = null, this._geometry = null, this._view = null, this._textureStore = null
            }, i.prototype.source = function() {
                return this._source
            }, i.prototype.geometry = function() {
                return this._geometry
            }, i.prototype.view = function() {
                return this._view
            }, i.prototype.effects = function() {
                return this._effects
            }, i.prototype.textureStore = function() {
                return this._textureStore
            }, i.prototype.setView = function(t) {
                this._view = t, this.emit("viewChange", this._view)
            }, i.prototype.setEffects = function(t) {
                this._effects = t, this.emit("effectsChange", this._effects)
            }, i.prototype.mergeEffects = function(t) {
                n(this._effects, t), this.emit("effectsChange", this._effects)
            }, i.prototype.fixedLevel = function() {
                return this._fixedLevelIndex
            }, i.prototype.setFixedLevel = function(t) {
                if (t !== this._fixedLevelIndex) {
                    if (null != t && (t >= this._geometry.levelList.length || 0 > t)) throw new Error("Level index out of range: " + t);
                    this._fixedLevelIndex = t, this.emit("fixedLevelChange", this._fixedLevelIndex)
                }
            }, i.prototype._selectLevel = function() {
                var t;
                return t = null != this._fixedLevelIndex ? this._geometry.levelList[this._fixedLevelIndex] : this._view.selectLevel(this._geometry.selectableLevelList)
            }, i.prototype.visibleTiles = function(t) {
                var e = this._selectLevel();
                return this._geometry.visibleTiles(this._view, e, t)
            }, i.prototype.pinLevel = function(t) {
                for (var e = this._geometry.levelList[t], i = this._geometry.getLevelTiles(e), r = 0; r < i.length; r++) this._textureStore.pin(i[r])
            }, i.prototype.unpinLevel = function(t) {
                for (var e = this._geometry.levelList[t], i = this._geometry.getLevelTiles(e), r = 0; r < i.length; r++) this._textureStore.unpin(i[r])
            }, i.prototype.pinFirstLevel = function() {
                return this.pinLevel(0)
            }, i.prototype.unpinFirstLevel = function() {
                return this.unpinLevel(0)
            }, e.exports = i
        }, {
            "./util/extend": 125,
            "minimal-event-emitter": 31
        }],
        36: [function(t, e) {
            "use strict";

            function i() {
                this.constructor.super_.apply(this, arguments)
            }
            var r = t("./util/inherits");
            r(i, Error), e.exports = i
        }, {
            "./util/inherits": 127
        }],
        37: [function(t, e) {
            "use strict";

            function i(t, e) {
                this._stage = t, this._controls = e, this._running = !1, this._renderOnNextFrame = !1, this._boundLoop = this._loop.bind(this), this._onBeforeRender = !1;
                var i = this;
                this._renderInvalidHandler = function() {
                    i._onBeforeRender || i.renderOnNextFrame()
                }, this._stage.addEventListener("renderInvalid", this._renderInvalidHandler)
            }
            var r = t("minimal-event-emitter");
            r(i), i.prototype.destroy = function() {
                this.stop(), this._stage.removeEventListener("renderInvalid", this._renderInvalidHandler), this._stage = null
            }, i.prototype.stage = function() {
                return this._stage
            }, i.prototype.start = function() {
                this._running = !0, this.renderOnNextFrame()
            }, i.prototype.stop = function() {
                this._running = !1
            }, i.prototype.renderOnNextFrame = function() {
                this._running && !this._renderOnNextFrame && (this._renderOnNextFrame = !0, requestAnimationFrame(this._boundLoop))
            }, i.prototype._loop = function() {
                this._running && (this._renderOnNextFrame = !1, this.render())
            }, i.prototype.render = function() {
                this._onBeforeRender = !0, this.emit("beforeRender"), this._onBeforeRender = !1, this._stage.render(), this.emit("afterRender")
            }, e.exports = i
        }, {
            "minimal-event-emitter": 31
        }],
        38: [function(t, e) {
            "use strict";

            function i(t, e) {
                this._viewer = t, this._layer = e, this._view = e.view(), this._hotspotContainer = new n(t._controlContainer, t._stage, this._view, t._renderLoop, {
                    rect: e.effects().rect
                }), this._movement = null, this._movementStartTime = null, this._movementStep = null, this._movementParams = null, this._movementCallback = null, this._updateMovementHandler = this._updateMovement.bind(this), this._updateHotspotContainerHandler = this._updateHotspotContainer.bind(this), this._viewer.addEventListener("sceneChange", this._updateHotspotContainerHandler), this._layer.addEventListener("effectsChange", this._updateHotspotContainerHandler), this._viewChangeHandler = this.emit.bind(this, "viewChange"), this._view.addEventListener("change", this._viewChangeHandler), this._updateHotspotContainer()
            }
            var r = t("minimal-event-emitter"),
                n = t("./HotspotContainer"),
                o = t("./util/clock"),
                s = t("./util/noop"),
                a = t("./util/type"),
                h = t("./util/defaults");
            r(i), i.prototype._destroy = function() {
                this._view.removeEventListener("change", this._viewChangeHandler), this._viewer.removeEventListener("sceneChange", this._updateHotspotContainerHandler), this._layer.removeEventListener("effectsChange", this._updateHotspotContainerHandler), this._movement && this.stopMovement(), this._hotspotContainer.destroy(), this._movement = null, this._viewer = null, this._layer = null, this._view = null, this._hotspotContainer = null
            }, i.prototype.hotspotContainer = function() {
                return this._hotspotContainer
            }, i.prototype.layer = function() {
                return this._layer
            }, i.prototype.view = function() {
                return this._view
            }, i.prototype.viewer = function() {
                return this._viewer
            }, i.prototype.visible = function() {
                return this._viewer.scene() === this
            }, i.prototype.switchTo = function(t, e) {
                return this._viewer.switchScene(this, t, e)
            }, i.prototype.lookTo = function(t, e, i) {
                if (e = e || {}, i = i || s, "object" !== a(t)) throw new Error("Parameter 0 of lookTo() should be an object");
                var r = null != e.transitionDuration ? e.transitionDuration : 1e3,
                    n = null != e.shortest ? e.shortest : !0,
                    o = this._view,
                    l = o.parameters(),
                    u = {};
                h(u, t), h(u, l), n && o.normalizeToClosest(u, u);
                var c = function(t) {
                        return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
                    },
                    p = function() {
                        var t = !1;
                        return function(e, i) {
                            if (i >= r && t) return null;
                            var n = Math.min(i / r, 1);
                            for (var o in e) {
                                var s = l[o],
                                    a = u[o];
                                e[o] = s + c(n) * (a - s)
                            }
                            return t = i >= r, e
                        }
                    },
                    d = this._viewer.controls().enabled();
                this._viewer.controls().disable(), this.startMovement(p, function() {
                    d && this._viewer.controls().enable(), i()
                })
            }, i.prototype.startMovement = function(t, e) {
                var i = this._viewer.renderLoop();
                this._movement && this.stopMovement();
                var r = t();
                if ("function" != typeof r) throw new Error("Bad movement");
                this._movement = t, this._movementStep = r, this._movementStartTime = o(), this._movementParams = {}, this._movementCallback = e, i.addEventListener("beforeRender", this._updateMovementHandler), i.renderOnNextFrame()
            }, i.prototype.stopMovement = function() {
                var t = this._viewer.renderLoop();
                this._movementCallback && this._movementCallback(), t.removeEventListener("beforeRender", this._updateMovementHandler), this._movement = null, this._movementStep = null, this._movementStartTime = null, this._movementParams = null, this._movementCallback = null
            }, i.prototype.movement = function() {
                return this._movement
            }, i.prototype._updateMovement = function() {
                if (!this._movement) throw new Error("Should not call update");
                var t = this._viewer.renderLoop(),
                    e = this._view,
                    i = o() - this._movementStartTime,
                    r = this._movementStep,
                    n = this._movementParams;
                n = e.parameters(n), n = r(n, i), null == n ? this.stopMovement() : (e.setParameters(n), t.renderOnNextFrame())
            }, i.prototype._updateHotspotContainer = function() {
                this._hotspotContainer.setRect(this._layer.effects().rect), this.visible() ? this._hotspotContainer.show() : this._hotspotContainer.hide()
            }, e.exports = i
        }, {
            "./HotspotContainer": 34,
            "./util/clock": 116,
            "./util/defaults": 121,
            "./util/noop": 130,
            "./util/type": 138,
            "minimal-event-emitter": 31
        }],
        39: [function(t, e) {
            "use strict";

            function i() {}

            function r(t, e) {
                var r = this;
                r._id = y++, r._store = t, r._tile = e, r._asset = null, r._texture = null, r._changeHandler = function() {
                    t.emit("textureInvalid", e)
                };
                var n = t.source(),
                    o = t.stage(),
                    s = n.loadAsset.bind(n),
                    a = o.createTexture.bind(o),
                    h = c(u(s), a);
                d && console.log("loading", r._id, r._tile), r._cancel = h(o, e, function(t, e, n, o) {
                    return r._cancel = null, t ? (n && n.destroy(), o && o.destroy(), void(t instanceof i ? (r._store.emit("textureCancel", r._tile), d && console.log("cancel", r._id, r._tile)) : (r._store.emit("textureError", r._tile, t), console.warn("Error loading texture", t), d && console.log("error", r._id, r._tile)))) : (r._texture = o, n.dynamic ? (r._asset = n, n.addEventListener("change", r._changeHandler)) : n.destroy(), r._store.emit("textureLoad", r._tile), void(d && console.log("load", r._id, r._tile)))
                })
            }

            function n(t, e, i, r) {
                r = l(r || {}, _), this._source = e, this._stage = i;
                var n = t.TileClass;
                this._clientPhase = f, this._clientCounter = 0, this._itemMap = new o(n.equals, n.hash), this._visible = new s(n.equals, n.hash), this._previouslyVisible = new a(n.equals, n.hash, r.previouslyVisibleCacheSize), this._pinMap = new o(n.equals, n.hash), this._newVisible = new s(n.equals, n.hash), this._noLongerVisible = [], this._visibleAgain = [], this._evicted = []
            }
            var o = t("./collections/Map"),
                s = t("./collections/Set"),
                a = t("./collections/LruSet"),
                h = t("minimal-event-emitter"),
                l = t("./util/defaults"),
                u = t("./util/retry"),
                c = t("./util/chain"),
                p = t("./util/inherits"),
                d = "undefined" != typeof MARZIPANODEBUG && MARZIPANODEBUG.textureStore,
                f = "idle",
                m = "start",
                v = "end",
                _ = {
                    previouslyVisibleCacheSize: 32
                },
                y = 0;
            p(i, Error), r.prototype.asset = function() {
                return this._asset
            }, r.prototype.texture = function() {
                return this._texture
            }, r.prototype.destroy = function() {
                var t = this,
                    e = t._id,
                    r = t._store,
                    n = t._tile,
                    o = t._asset,
                    s = t._texture,
                    a = t._cancel;
                return a ? void a(new i("Texture load cancelled")) : (o && (o.removeEventListener("change", t._changeHandler), o.destroy()), s && s.destroy(), r.emit("textureUnload", n), d && console.log("unload", e, n), t._changeHandler = null, t._asset = null, t._texture = null, t._tile = null, t._store = null, void(t._id = null))
            }, h(r), h(n), n.prototype.destroy = function() {
                this.clear(), this._source = null, this._stage = null, this._itemMap = null, this._visible = null, this._previouslyVisible = null, this._pinMap = null, this._newVisible = null, this._noLongerVisible = null, this._visibleAgain = null, this._evicted = null
            }, n.prototype.stage = function() {
                return this._stage
            }, n.prototype.source = function() {
                return this._source
            }, n.prototype.clear = function() {
                var t = this;
                t._evicted.length = 0, t._itemMap.each(function(e) {
                    t._evicted.push(e)
                }), t._evicted.forEach(function(e) {
                    t._unloadTile(e)
                }), t._itemMap.clear(), t._visible.clear(), t._previouslyVisible.clear(), t._pinMap.clear(), t._newVisible.clear(), t._noLongerVisible.length = 0, t._visibleAgain.length = 0, t._evicted.length = 0
            }, n.prototype.clearNotPinned = function() {
                var t = this;
                t._evicted.length = 0, t._itemMap.each(function(e) {
                    t._pinMap.has(e) || t._evicted.push(e)
                }), t._evicted.forEach(function(e) {
                    t._unloadTile(e)
                }), t._visible.clear(), t._previouslyVisible.clear(), t._evicted.length = 0
            }, n.prototype.startFrame = function() {
                if (this._clientPhase !== f && this._clientPhase !== m) throw new Error("TextureStore: startFrame called out of sequence");
                this._clientPhase = m, this._clientCounter++, this._newVisible.clear()
            }, n.prototype.markTile = function(t) {
                if (this._clientPhase !== m) throw new Error("TextureStore: markTile called out of sequence");
                this._newVisible.add(t)
            }, n.prototype.endFrame = function() {
                if (this._clientPhase !== m && this._clientPhase !== v) throw new Error("TextureStore: endFrame called out of sequence");
                this._clientPhase = v, this._clientCounter--, this._clientCounter || (this._update(), this._clientPhase = f)
            }, n.prototype._update = function() {
                var t = this;
                t._noLongerVisible.length = 0, t._visible.each(function(e) {
                    t._newVisible.has(e) || t._noLongerVisible.push(e)
                }), t._visibleAgain.length = 0, t._newVisible.each(function(e) {
                    t._previouslyVisible.has(e) && t._visibleAgain.push(e)
                }), t._visibleAgain.forEach(function(e) {
                    t._previouslyVisible.remove(e)
                }), t._evicted.length = 0, t._noLongerVisible.forEach(function(e) {
                    var i = t._itemMap.get(e),
                        r = i && i.texture();
                    if (r) {
                        var n = t._previouslyVisible.add(e);
                        null != n && t._evicted.push(n)
                    } else i && t._unloadTile(e)
                }), t._evicted.forEach(function(e) {
                    t._pinMap.has(e) || t._unloadTile(e)
                }), t._newVisible.each(function(e) {
                    var i = t._itemMap.get(e);
                    if (i) {
                        var r = i.texture(),
                            n = i.asset();
                        r && n && (r.refresh(e, n), t.emit("textureInvalid", e))
                    } else t._loadTile(e)
                });
                var e = t._visible;
                t._visible = t._newVisible, t._newVisible = e, t._noLongerVisible.length = 0, t._visibleAgain.length = 0, t._evicted.length = 0
            }, n.prototype._loadTile = function(t) {
                if (this._itemMap.has(t)) throw new Error("TextureStore: loading texture already in cache");
                var e = new r(this, t);
                this._itemMap.set(t, e)
            }, n.prototype._unloadTile = function(t) {
                var e = this._itemMap.del(t);
                if (!e) throw new Error("TextureStore: unloading texture not in cache");
                e.destroy()
            }, n.prototype.asset = function(t) {
                var e = this._itemMap.get(t);
                return e ? e.asset() : null
            }, n.prototype.texture = function(t) {
                var e = this._itemMap.get(t);
                return e ? e.texture() : null
            }, n.prototype.pin = function(t) {
                var e = this._pinMap.get(t) || 0;
                this._pinMap.set(t, e + 1), this._itemMap.has(t) || this._loadTile(t)
            }, n.prototype.unpin = function(t) {
                var e = this._pinMap.get(t);
                if (!e) throw new Error("TextureStore: unpin when not pinned");
                e--, e > 0 ? this._pinMap.set(t, e) : (this._pinMap.del(t), this._visible.has(t) || this._previouslyVisible.has(t) || this._unloadTile(t))
            }, n.prototype.query = function(t) {
                var e = this._itemMap.get(t),
                    i = this._pinMap.get(t) || 0;
                return {
                    visible: this._visible.has(t),
                    previouslyVisible: this._previouslyVisible.has(t),
                    hasAsset: null != e && null != e.asset(),
                    hasTexture: null != e && null != e.texture(),
                    pinned: 0 !== i,
                    pinCount: i
                }
            }, e.exports = n
        }, {
            "./collections/LruSet": 52,
            "./collections/Map": 53,
            "./collections/Set": 54,
            "./util/chain": 114,
            "./util/defaults": 121,
            "./util/inherits": 127,
            "./util/retry": 135,
            "minimal-event-emitter": 31
        }],
        40: [function(t, e) {
            "use strict";

            function i(t) {
                t = n(t || {}, s), this._duration = t.duration, this._startTime = null, this._handle = null, this._check = this._check.bind(this)
            }
            var r = t("minimal-event-emitter"),
                n = t("./util/defaults"),
                o = t("./util/clock"),
                s = {
                    duration: 1 / 0
                };
            r(i), i.prototype.start = function() {
                this._startTime = o(), null == this._handle && this._duration < 1 / 0 && this._setup(this._duration)
            }, i.prototype.started = function() {
                return null != this._startTime
            }, i.prototype.stop = function() {
                this._startTime = null, null != this._handle && (clearTimeout(this._handle), this._handle = null)
            }, i.prototype.reset = function() {
                this.start()
            }, i.prototype._setup = function(t) {
                this._handle = setTimeout(this._check, t)
            }, i.prototype._check = function() {
                var t = o(),
                    e = t - this._startTime,
                    i = this._duration - e;
                this._handle = null, 0 >= i ? (this.emit("timeout"), this._startTime = null) : 1 / 0 > i && this._setup(i)
            }, i.prototype.duration = function() {
                return this._duration
            }, i.prototype.setDuration = function(t) {
                this._duration = t, null != this._startTime && (null != this._handle && (clearTimeout(this._handle), this._handle = null), this._check())
            }, e.exports = i
        }, {
            "./util/clock": 116,
            "./util/defaults": 121,
            "minimal-event-emitter": 31
        }],
        41: [function(t, e) {
            "use strict";

            function i(t, e) {
                e = e || {}, this._domElement = t, _.setOverflowHidden(t);
                var i;
                if (e.stageType) {
                    if (i = b[e.stageType], !i) throw new Error("Unknown stage type: " + e.stageType)
                } else i = f();
                this._stage = new i(e), v(this._stage), this._domElement.appendChild(this._stage.domElement()), this._controlContainer = document.createElement("div"), _.setAbsolute(this._controlContainer), _.setFullSize(this._controlContainer);
                var r = document.createElement("div");
                _.setAbsolute(r), _.setFullSize(r), _.setBlocking(r), this._controlContainer.appendChild(r), t.appendChild(this._controlContainer), this.updateSize(), this._updateSizeListener = this.updateSize.bind(this), window.addEventListener("resize", this._updateSizeListener), this._renderLoop = new o(this._stage), this._controls = new s, this._controlMethods = m(this._controls, this._controlContainer, e.controls), this._controls.attach(this._renderLoop), this._hammerManagerTouch = x.get(this._controlContainer, "touch"), this._hammerManagerMouse = x.get(this._controlContainer, "mouse"), e.cursors = e.cursors || {}, this._dragCursor = new w(this._controls, "mouseViewDrag", t, e.cursors.drag), this._renderLoop.start(), this._scenes = [], this._scene = null, this._cancelCurrentTween = null, this._viewChangeHandler = this.emit.bind(this, "viewChange"), this._idleTimer = new u, this._idleTimer.start(), this._resetIdleTimerHandler = this._resetIdleTimer.bind(this), this.addEventListener("viewChange", this._resetIdleTimerHandler), this._enterIdleHandler = this._enterIdle.bind(this), this._idleTimer.addEventListener("timeout", this._enterIdleHandler), this._leaveIdleHandler = this._leaveIdle.bind(this), this._controls.addEventListener("active", this._leaveIdleHandler), this.addEventListener("sceneChange", this._leaveIdleHandler), this._idleMovement = null
            }

            function r(t, e) {
                e.layer().mergeEffects({
                    opacity: t
                }), e._hotspotContainer.domElement().style.opacity = t
            }
            var n = t("minimal-event-emitter"),
                o = t("./RenderLoop"),
                s = t("./controls/Controls"),
                a = t("./Layer"),
                h = t("./TextureStore"),
                l = t("./Scene"),
                u = t("./Timer"),
                c = t("./stages/WebGl"),
                p = t("./stages/Css"),
                d = t("./stages/Flash"),
                f = t("./chooseBestStage"),
                m = t("./controls/registerDefaultControls"),
                v = t("./renderers/registerDefaultRenderers"),
                _ = t("./domUtil"),
                y = t("./util/tween"),
                g = t("./util/noop"),
                w = t("./controls/DragCursor"),
                x = t("./controls/HammerGestures"),
                b = {
                    webgl: c,
                    css: p,
                    flash: d
                };
            n(i), i.prototype.destroy = function() {
                window.removeEventListener("resize", this._updateSizeListener), this._updateSizeListener = null, this._scene && this._scene.view().removeEventListener("change", this._viewChangeHandler), this._viewChangeHandler = null;
                for (var t in this._controlMethods) this._controlMethods[t].destroy();
                for (this._controlMethods = null; this._scenes.length;) this.destroyScene(this._scenes[0]);
                this._scenes = null, this._scene = null, this._domElement.removeChild(this._stage.domElement()), this._stage.destroy(), this._stage = null, this._renderLoop.destroy(), this._renderLoop = null, this._controls.destroy(), this._controls = null, this._cancelCurrentTween && (this._cancelCurrentTween(), this._cancelCurrentTween = null), this._domElement = null, this._controlContainer = null
            }, i.prototype.updateSize = function() {
                this._stage.updateSize()
            }, i.prototype.stage = function() {
                return this._stage
            }, i.prototype.renderLoop = function() {
                return this._renderLoop
            }, i.prototype.controls = function() {
                return this._controls
            }, i.prototype.domElement = function() {
                return this._domElement
            }, i.prototype.createScene = function(t) {
                t = t || {};
                var e = this._stage,
                    i = t.source,
                    r = t.geometry,
                    n = t.view,
                    o = new h(r, i, e, t.textureStore),
                    s = new a(e, i, r, n, o, t.layerOpts);
                t.pinFirstLevel && s.pinFirstLevel();
                var u = new l(this, s);
                return this._scenes.push(u), u
            }, i.prototype._addLayer = function(t) {
                t.pinFirstLevel(), this._stage.addLayer(t)
            }, i.prototype._removeLayer = function(t) {
                this._stage.hasLayer(t) && (t.unpinFirstLevel(), this._stage.removeLayer(t)), t.textureStore().clearNotPinned()
            }, i.prototype.destroyScene = function(t) {
                var e = this._scenes.indexOf(t);
                if (0 > e) throw new Error("No such scene in viewer");
                this._removeLayer(t._layer), this._scene === t && (this._scene = null, this._cancelCurrentTween && (this._cancelCurrentTween(), this._cancelCurrentTween = null)), this._scenes.splice(e, 1);
                var i = t._layer,
                    r = i.textureStore();
                t._destroy(), i.destroy(), r.destroy()
            }, i.prototype.destroyAllScenes = function() {
                for (; this._scenes.length > 0;) this.destroyScene(this._scenes[0])
            }, i.prototype.hasScene = function(t) {
                return this._scenes.indexOf(t) >= 0
            }, i.prototype.listScenes = function() {
                return [].concat(this._scenes)
            }, i.prototype.scene = function() {
                return this._scene
            }, i.prototype.view = function() {
                var t = this._scene;
                return t ? t.layer().view() : null
            }, i.prototype.lookTo = function(t, e, i) {
                var r = this._scene;
                r && r.lookTo(t, e, i)
            }, i.prototype.startMovement = function(t, e) {
                var i = this._scene;
                i && i.startMovement(t, e)
            }, i.prototype.stopMovement = function() {
                var t = this._scene;
                t && t.stopMovement()
            }, i.prototype.setIdleMovement = function(t, e) {
                this._idleTimer.setDuration(t), this._idleMovement = e
            }, i.prototype.breakIdleMovement = function() {
                this._leaveIdle(), this._resetIdleTimer()
            }, i.prototype._resetIdleTimer = function() {
                this._idleTimer.reset()
            }, i.prototype._enterIdle = function() {
                var t = this._scene,
                    e = this._idleMovement;
                t && e && t.startMovement(e)
            }, i.prototype._leaveIdle = function() {
                var t = this._scene;
                t && t.movement() === this._idleMovement && t.stopMovement()
            };
            var E = 1e3;
            i.prototype.switchScene = function(t, e, i) {
                function n(e) {
                    u(e, t, a)
                }

                function o() {
                    a && c._removeLayer(a.layer()), c._cancelCurrentTween = null, i()
                }
                e = e || {}, i = i || g;
                var s = this._stage,
                    a = this._scene;
                if (a === t) return void i();
                if (this._scenes.indexOf(t) < 0) throw new Error("No such scene in viewer");
                var h = s.listLayers();
                if (a && a.layer() !== h[h.length - 1]) throw new Error("Stage not in sync with viewer");
                this._cancelCurrentTween && (this._cancelCurrentTween(), this._cancelCurrentTween = null);
                var l = null != e.transitionDuration ? e.transitionDuration : E,
                    u = null != e.transitionUpdate ? e.transitionUpdate : r,
                    c = this;
                c._addLayer(t.layer()), this._cancelCurrentTween = y(l, n, o), this._scene = t, this.emit("sceneChange"), this.emit("viewChange"), a && a.view().removeEventListener("change", this._viewChangeHandler), t.view().addEventListener("change", this._viewChangeHandler)
            }, e.exports = i
        }, {
            "./Layer": 35,
            "./RenderLoop": 37,
            "./Scene": 38,
            "./TextureStore": 39,
            "./Timer": 40,
            "./chooseBestStage": 50,
            "./controls/Controls": 59,
            "./controls/DragCursor": 61,
            "./controls/HammerGestures": 64,
            "./controls/registerDefaultControls": 71,
            "./domUtil": 73,
            "./renderers/registerDefaultRenderers": 93,
            "./stages/Css": 100,
            "./stages/Flash": 101,
            "./stages/WebGl": 104,
            "./util/noop": 130,
            "./util/tween": 137,
            "minimal-event-emitter": 31
        }],
        42: [function(t, e) {
            "use strict";

            function i(t, e) {
                e = e || {};
                var i = n(e.watermarkPosition || {});
                this.constructor.super_.apply(this, arguments), this._domElement.appendChild(s(i))
            }

            function r(t) {
                return Math.min(200, Math.max(t, 0))
            }

            function n(t) {
                var e = {},
                    i = parseInt(t.top, 10),
                    n = parseInt(t.bottom, 10),
                    o = parseInt(t.left, 10),
                    s = parseInt(t.right, 10);
                return isNaN(i) ? isNaN(n) ? (e.top = "auto", e.bottom = l + "px") : (e.top = "auto", e.bottom = r(n) + "px") : (e.top = r(i) + "px", e.bottom = "auto"), isNaN(o) ? isNaN(s) ? (e.left = "auto", e.right = u + "px") : (e.left = "auto", e.right = r(s) + "px") : (e.left = r(o) + "px", e.right = "auto"), e
            }

            function o(t) {
                var e = "";
                for (var i in t) e += i + ":" + t[i] + " !important;";
                return e
            }

            function s(t) {
                var e = document.createElement("a"),
                    i = document.createElement("img");
                return e.appendChild(i), e.setAttribute("href", "http://www.marzipano.net/"), e.setAttribute("target", "_blank"), e.setAttribute("style", o(f) + o(p)), e.style.top = t.top, e.style.bottom = t.bottom, e.style.left = t.left, e.style.right = t.right, i.setAttribute("style", o(f) + o(d)), i.src = c, e
            }
            var a = t("./Viewer"),
                h = t("./util/inherits"),
                l = 10,
                u = 15;
            h(i, a);
            var c = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAREAAABLCAMAAABgKEOZAAAAXVBMVEX///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8/beDHAAAAHnRSTlMAEBEgIjAzQERQVWBmcHd/iI+Zn6qvu7/Mz93f7u9X10/4AAAG2klEQVR4AeyYUYu1OAyGU6QUKVKKlFCk7///mTv4NujiqS574Rn4vudmepGjyTNpKpUBPoQgfyYgdT0JCKUBAEqUnYQmYkvMx0+TSAAMlR+U66aLs1/ASAwgtURGHATYj7Pv753EUOh7RkhxQvKelFYA6nqm5qsC+cjffzZCmh8bIW25GjFWEXEbVulEwMsrsFg3K1BkZwXK/nKXGuqupCHJjkPDJufOCYCcUYb6paFNDNNPAS7kxrqN41lTrECihkkI5bxnhCJ2DwsQpeMbNRWrKkIbvJVWxkZEPJBHRohbgXQxQiq2swe6edmIY3qOEjoLEPhHhGpSsSqAZWyEGsdGLATTZyOJy7mn5zYkeduI1H836rlZvUU1hAXV0p9ujaRnIxOQb42I2kOa+5aRwoKNjEYxif+yJlNXlrDJrZH8bERWbJ+N5MN72Bt3EfnCrlmuE2xm/SuUeRaRyuwU672RivXRSATcxQhX87H3aP91I4m1X4ddYOZslUgte+DcA1JnOhfMEcResoCrET7esGflijYfG2uegPi6kSkDWYZGpv0PN4wH3N48rgcYobdO+GFRIJpp49mIUfx5Y7FD3wKoqtoArDI2IhVZpA/VhsiN/rlHOlsQ+b89ooA6IVOj7NdApwQZG6EAK2bFSkWf58imqpVbcDRHxkZMQ0U1JQlQeRFgCSFY+pfJysOYm8QB3k4cx1KGk3WD/hcjC/D5rDmNDr7q/clKBqcv05r7WvY1ZGjEDotnI4r62QhPKvJNI6MvNBaSbV2QEnRshDGbezTigTQwotBfYuTyFe/FClPMZk0Vy72RCUhPRlxFcwMjQP4VRihhsbVvWC1bbICzTd4a/NCIKYS/NzJVIMrwK37+LUbOtwE4Jr40HKVVoMmDEbdBb4z4uMKEXIyElS/7upHBjREpp95JOPWOAbWCSQTi/Y3RFsY3Ruq+b2R4q0iW08j1QLw3wmVzYyOaZ5GBkY1v/o6RvzfP/7Rrhi2Os1AUFglBQriIBJEg/v+f+W5qtvXMsU1vty/MB8+nJbk999xHrTvDmKGhoaGhoaGhUor8n/6DyCAyiAwig8iQc24yv19DdpE/WuzjyXw8WJ+v3uJjLiVHv9Cr1sMoBe579DM8VkeYpZbI/KoLv3VbORWms3YvVdGZnta93LVL96uhepwNCslh8XP31RhFBOQRHyVxNm93sVsTNN9ehebJZqnTlApon5lI9dATYfc4GaOMULViyfq6i30AOV+lxwfD2SXXF/Yn+vN5EJHI3eqQoaiJgHv0IqFmyjxtPwLK1yGCSKi7wfcNqMvNUKYDW91Hs9zOzxHZSj7CUZrmfNUSzHMEOXp4d3axrlU43k1PiMy3dGLPlQwY9joC7pD9BO92rECDSdou0na04e8wrv0oHrL8Y5PaG9M2NB030JQrBCACL1NzTtzxIFujjFCNgoWvhjy1Bqmpn9PhWKtzu4PrgYFFcUepaRT5IIVqh0SCQYFBhGJ55W4T1F9EgAfbzw+Fl11q/fIzeyoQsVo319vCS1btBIaEGUCCBkhkrYPxEVmMLsJENfawmcgA9pQ7553p+Nk2EDKLsKeamgxDwghYii+RyM7ulWEyugiCgPBRYoOKKVb3jLCxfT1XERrT8uNGqkRMX3bHL30kAvRx3866CNttXWmyjQ0A9ITjVnVPLYDm5cdR2AJzJ/uMiMDiwb4VXYQE6wrP2AC6FCWRiOzb7R7fILLgnQBEYMeCLBhqI+AgOBDtIT0RZs9FZMEXLxPBoXh1948jQAF0YaTpgohiWM9FlxcvE8HvmO9FQBd8h++/R0TeLcrTayLyMRH5XUQ2Lrq+eHtEtidZsz7CB0SykghmA6VrInanu5WI9LPCjaiOQIMkMMAuSiLwPzqQLf04/B/tKyLF9jeX/zwCDlI309TvEvREVggHZ5jj8MXrzCWRtf+duXwcgQaRtiV2WfVELPxIAAeC4/Qv3gsiO69+hm2ujUCDTGCAXbRE8GdKxPtGnGTeIMLYNnz4TxHuBr7bRU+kv9Zr4Tj9i/eaCB8twSXVR6BBJjid0EVBBM+rYJrLODNkuCCSHUbFO1sfgQcRirPWLioisGnLdl9v629TUBw65Jt5iwhOO2342yd9BByk+WfxFn/57o2SCOYpYTkSOX8EKVEoDh3yxYFsn4hPt+m8O3AsoTAQfQQexP7tYh8GwWiJ4ICgYDgOWrBcn4gc06I8eGkjYArYFSAxSiKgZW+99sV8kwi7s/QRaBDJYOCMnghovTNOYsxXiRzu6e6+gtHnEXgQK9Dl32Wd/JGz3//LCXT/fgQ2GH9L8ns1iAwig8ggMogMIoPIIPIfiGyGLaAclDgAAAAASUVORK5CYII=",
                p = {
                    display: "block",
                    position: "absolute",
                    height: "30px",
                    width: "auto"
                },
                d = {
                    height: "100%",
                    width: "auto",
                    position: "static"
                },
                f = {
                    display: "block",
                    opacity: 1,
                    visibility: "visible",
                    transform: "none",
                    "-webkit-transform": "none",
                    "-moz-transform": "none",
                    margin: "auto",
                    "margin-left": "auto",
                    "margin-right": "auto",
                    "margin-top": "auto",
                    "margin-bottom": "auto",
                    "z-index": "10000"
                };
            e.exports = i
        }, {
            "./Viewer": 41,
            "./util/inherits": 127
        }],
        43: [function(t, e) {
            "use strict";

            function i(t, e) {
                e = e || {}, this._opts = e, this._element = t, this._timestamp = 1, this._lastUsedTime = null
            }
            var r = t("../util/clock"),
                n = t("minimal-event-emitter");
            n(i), i.prototype.element = function() {
                return this._element
            }, i.prototype.width = function() {
                return this._element.width
            }, i.prototype.height = function() {
                return this._element.height
            }, i.prototype.dynamic = !0, i.prototype.timestamp = function() {
                return this._timestamp
            }, i.prototype.changed = function() {
                this._timestamp++, this.emit("change")
            }, i.prototype.used = function() {
                this._lastUsedTime = r()
            }, i.prototype.destroy = function() {
                this._opts.unload && this._opts.unload()
            }, e.exports = i
        }, {
            "../util/clock": 116,
            "minimal-event-emitter": 31
        }],
        44: [function(t, e) {
            "use strict";

            function i(t, e) {
                this._flashElement = t, this._imageId = e, this._timestamp = r()
            }
            var r = t("../util/clock");
            i.prototype.element = function() {
                return this._imageId
            }, i.prototype.timestamp = function() {
                return this._timestamp
            }, i.prototype.dynamic = !1, i.prototype.destroy = function() {
                var t = this._flashElement,
                    e = this._imageId;
                t.unloadImage(e), this._flashElement = null, this._imageId = null
            }, e.exports = i
        }, {
            "../util/clock": 116
        }],
        45: [function(t, e) {
            "use strict";

            function i(t) {
                this._element = t, this._timestamp = r()
            }
            var r = t("../util/clock"),
                n = t("../util/noop");
            i.prototype.element = function() {
                return this._element
            }, i.prototype.width = function() {
                return this._element.width
            }, i.prototype.height = function() {
                return this._element.height
            }, i.prototype.timestamp = function() {
                return this._timestamp
            }, i.prototype.dynamic = !1, i.prototype.destroy = n, e.exports = i
        }, {
            "../util/clock": 116,
            "../util/noop": 130
        }],
        46: [function(t, e) {
            "use strict";

            function i(t) {
                this._element = t, this._timestamp = r()
            }
            var r = t("../util/clock"),
                n = t("../util/noop");
            i.prototype.element = function() {
                return this._element
            }, i.prototype.width = function() {
                return this._element.naturalWidth
            }, i.prototype.height = function() {
                return this._element.naturalHeight
            }, i.prototype.timestamp = function() {
                return this._timestamp
            }, i.prototype.dynamic = !1, i.prototype.destroy = n, e.exports = i
        }, {
            "../util/clock": 116,
            "../util/noop": 130
        }],
        47: [function(t, e) {
            "use strict";

            function i(t) {
                var e = this;
                this._wrappedVideo = null, this._destroyed = !1, this.emitChanged = function() {
                    e.emit("change")
                }, this._lastTimestamp = -1, this.setVideo(t)
            }
            var r = t("minimal-event-emitter"),
                n = document.createElement("canvas");
            n.width = 1, n.height = 1, r(i), i.prototype.dynamic = !0, i.prototype.setVideo = function(t) {
                function e() {
                    r.paused || i.emit("change"), i._destroyed || (i._emitChangedIfPlayingLoop = requestAnimationFrame(e))
                }
                var i = this;
                if (this._wrappedVideo = t, this._wrappedVideo && this._wrappedVideo.videoElement().removeEventListener("timeupdate", this.emitChanged), null != t) {
                    var r = t.videoElement();
                    r.addEventListener("timeupdate", this.emitChanged), this._emitChangedIfPlayingLoop && (cancelAnimationFrame(this._emitChangedIfPlayingLoop), this._emitChangedIfPlayingLoop = null), e(), i.emit("change")
                }
            }, i.prototype.disableMipmapping = !0, i.prototype.width = function() {
                return this._wrappedVideo ? this._wrappedVideo.videoElement().videoWidth : n.width
            }, i.prototype.height = function() {
                return this._wrappedVideo ? this._wrappedVideo.videoElement().videoHeight : n.height
            }, i.prototype.element = function() {
                return this._wrappedVideo ? this._wrappedVideo.drawElement() : n
            }, i.prototype.video = function() {
                return this._wrappedVideo
            }, i.prototype.timestamp = function() {
                return this._wrappedVideo && (this._lastTimestamp = this._wrappedVideo.videoElement().currentTime), this._lastTimestamp
            }, i.prototype.destroy = function() {
                this._destroyed = !0, this._wrappedVideo && this._wrappedVideo.videoElement().removeEventListener("timeupdate", this._handleProgress), this._emitChangedIfPlayingLoop && (cancelAnimationFrame(this._emitChangedIfPlayingLoop), this._emitChangedIfPlayingLoop = null)
            }, e.exports = i
        }, {
            "minimal-event-emitter": 31
        }],
        48: [function(t, e) {
            "use strict";

            function i(t) {
                t = r(t || {}, s);
                var e = t.yawSpeed,
                    i = t.pitchSpeed,
                    n = t.fovSpeed,
                    o = t.yawAccel,
                    a = t.pitchAccel,
                    h = t.fovAccel,
                    l = t.targetPitch,
                    u = t.targetFov;
                return function() {
                    var t, r, s, c, p = 0,
                        d = 0,
                        f = 0,
                        m = 0,
                        v = 0,
                        _ = 0,
                        y = 0;
                    return function(g, w) {
                        if (t = (w - p) / 1e3, v = Math.min(d + t * o, e), r = v * t, g.yaw = g.yaw + r, null != l && g.pitch !== l) {
                            var x = .5 * f * f / a;
                            _ = Math.abs(l - g.pitch) > x ? Math.min(f + t * a, i) : Math.max(f - t * a, 0), s = _ * t, l < g.pitch && (g.pitch = Math.max(l, g.pitch - s)), l > g.pitch && (g.pitch = Math.min(l, g.pitch + s))
                        }
                        if (null != u && g.fov !== l) {
                            var b = .5 * m * m / h;
                            y = Math.abs(u - g.fov) > b ? Math.min(m + t * h, n) : Math.max(m - t * h, 0), c = y * t, u < g.fov && (g.fov = Math.max(u, g.fov - c)), u > g.fov && (g.fov = Math.min(u, g.fov + c))
                        }
                        return p = w, d = v, f = _, m = y, g
                    }
                }
            }
            var r = t("./util/defaults"),
                n = .1,
                o = .01,
                s = {
                    yawSpeed: n,
                    pitchSpeed: n,
                    fovSpeed: n,
                    yawAccel: o,
                    pitchAccel: o,
                    fovAccel: o,
                    targetPitch: 0,
                    targetFov: null
                };
            e.exports = i
        }, {
            "./util/defaults": 121
        }],
        49: [function(t, e) {
            "use strict";

            function i(t, e, i, r) {
                r = r || {};
                var n;
                n = null != i && null != i.absoluteWidth ? i.absoluteWidth : null != i && null != i.relativeWidth ? i.relativeWidth * t : t;
                var o;
                o = i && null != i.absoluteHeight ? i.absoluteHeight : null != i && null != i.relativeHeight ? i.relativeHeight * e : e;
                var s;
                s = null != i && null != i.absoluteX ? i.absoluteX : null != i && null != i.relativeX ? i.relativeX * t : 0;
                var a;
                return a = null != i && null != i.absoluteY ? i.absoluteY : null != i && null != i.relativeY ? i.relativeY * e : 0, r.height = o, r.width = n, r.left = s, r.top = a, r.right = s + n, r.bottom = a + o, r.totalWidth = t, r.totalHeight = e, r
            }
            e.exports = i
        }, {}],
        50: [function(t, e) {
            "use strict";

            function i() {
                for (var t = 0; t < s.length; t++) {
                    var e = s[t];
                    if (e.supported()) return e
                }
                throw new Error("None of the stage types are supported")
            }
            var r = t("./stages/WebGl"),
                n = t("./stages/Css"),
                o = t("./stages/Flash"),
                s = [r, n, o];
            e.exports = i
        }, {
            "./stages/Css": 100,
            "./stages/Flash": 101,
            "./stages/WebGl": 104
        }],
        51: [function(t, e) {
            "use strict";

            function i(t, e, i) {
                if ("function" != typeof t) throw new Error("LruMap: bad equals function");
                if (this._equals = t, "function" != typeof e) throw new Error("LruMap: bad hash function");
                if (this._hash = e, "number" != typeof i || isNaN(i) || 0 > i) throw new Error("LruMap: bad maximum size");
                this._maxsize = i, this._keys = [], this._values = [], this._pivot = 0
            }
            var r = t("../util/mod");
            i.prototype._modulus = function() {
                return this._maxsize > this._keys.length ? this._keys.length + 1 : this._maxsize
            }, i.prototype.get = function(t) {
                for (var e = 0; e < this._keys.length; e++) {
                    var i = this._keys[e];
                    if (this._equals(t, i)) {
                        var r = this._values[e];
                        return r
                    }
                }
                return null
            }, i.prototype.set = function(t, e) {
                var i = null,
                    n = !1;
                if (0 === this._maxsize) return t;
                for (var o = 0; o < this._keys.length; o++) {
                    var s = this._keys[o];
                    if (this._equals(t, s)) {
                        for (var a = o, h = this._modulus(); a !== this._pivot;) {
                            var l = r(a + 1, h);
                            this._keys[a] = this._keys[l], this._values[a] = this._values[l], a = l
                        }
                        n = !0;
                        break
                    }
                }
                return n || (i = this._pivot < this._keys.length ? this._keys[this._pivot] : null), this._keys[this._pivot] = t, this._values[this._pivot] = e, this._pivot = r(this._pivot + 1, this._modulus()), i
            }, i.prototype.del = function(t) {
                for (var e = 0; e < this._keys.length; e++) {
                    var i = this._keys[e];
                    if (this._equals(t, i)) {
                        for (var n = this._values[e], o = e; o < this._keys.length - 1; o++) this._keys[o] = this._keys[o + 1], this._values[o] = this._values[o + 1];
                        return this._keys.length = this._keys.length - 1, this._values.length = this._values.length - 1, e < this._pivot && (this._pivot = r(this._pivot - 1, this._modulus())), n
                    }
                }
                return null
            }, i.prototype.has = function(t) {
                for (var e = 0; e < this._keys.length; e++) {
                    var i = this._keys[e];
                    if (this._equals(t, i)) return !0
                }
                return !1
            }, i.prototype.size = function() {
                return this._keys.length
            }, i.prototype.clear = function() {
                this._keys.length = 0, this._values.length = 0, this._pivot = 0
            }, i.prototype.each = function(t) {
                for (var e = 0, i = 0; i < this._keys.length; i++) {
                    var r = this._keys[i],
                        n = this._values[i];
                    t(r, n), e += 1
                }
                return e
            }, e.exports = i
        }, {
            "../util/mod": 129
        }],
        52: [function(t, e) {
            "use strict";

            function i(t, e, i) {
                if ("function" != typeof t) throw new Error("LruSet: bad equals function");
                if (this._equals = t, "function" != typeof e) throw new Error("LruSet: bad hash function");
                if (this._hash = e, "number" != typeof i || isNaN(i) || 0 > i) throw new Error("LruSet: bad maximum size");
                this._maxsize = i, this._items = [], this._pivot = 0
            }
            var r = t("../util/mod");
            i.prototype._modulus = function() {
                return this._maxsize > this._items.length ? this._items.length + 1 : this._maxsize
            }, i.prototype.add = function(t) {
                var e = null,
                    i = !1;
                if (0 === this._maxsize) return t;
                for (var n = 0; n < this._items.length; n++) {
                    var o = this._items[n];
                    if (this._equals(t, o)) {
                        for (var s = n, a = this._modulus(); s !== this._pivot;) {
                            var h = r(s + 1, a);
                            this._items[s] = this._items[h], s = h
                        }
                        i = !0;
                        break
                    }
                }
                return i || (e = this._pivot < this._items.length ? this._items[this._pivot] : null), this._items[this._pivot] = t, this._pivot = r(this._pivot + 1, this._modulus()), e
            }, i.prototype.remove = function(t) {
                for (var e = 0; e < this._items.length; e++) {
                    var i = this._items[e];
                    if (this._equals(t, i)) {
                        for (var n = e; n < this._items.length - 1; n++) this._items[n] = this._items[n + 1];
                        return this._items.length = this._items.length - 1, e < this._pivot && (this._pivot = r(this._pivot - 1, this._modulus())), i
                    }
                }
                return null
            }, i.prototype.has = function(t) {
                for (var e = 0; e < this._items.length; e++) {
                    var i = this._items[e];
                    if (this._equals(t, i)) return !0
                }
                return !1
            }, i.prototype.size = function() {
                return this._items.length
            }, i.prototype.clear = function() {
                this._items.length = 0, this._pivot = 0
            }, i.prototype.each = function(t) {
                for (var e = 0, i = 0; i < this._items.length; i++) {
                    var r = this._items[i];
                    t(r), e += 1
                }
                return e
            }, e.exports = i
        }, {
            "../util/mod": 129
        }],
        53: [function(t, e) {
            "use strict";

            function i(t, e, i) {
                if ("function" != typeof t) throw new Error("Map: bad equals function");
                if (this._equals = t, "function" != typeof e) throw new Error("Map: bad hash function");
                if (this._hash = e, null != i) {
                    if ("number" != typeof i || isNaN(i) || 1 > i) throw new Error("Map: bad number of buckets");
                    this._nbuckets = i
                } else this._nbuckets = r;
                this._keyBuckets = [], this._valBuckets = [];
                for (var n = 0; n < this._nbuckets; n++) this._keyBuckets.push([]), this._valBuckets.push([])
            }
            var r = 32;
            i.prototype._hashmod = function(t) {
                return this._hash(t) % this._nbuckets
            }, i.prototype.get = function(t) {
                for (var e = this._hashmod(t), i = this._keyBuckets[e], r = 0; r < i.length; r++) {
                    var n = i[r];
                    if (this._equals(t, n)) {
                        var o = this._valBuckets[e],
                            s = o[r];
                        return s
                    }
                }
                return null
            }, i.prototype.set = function(t, e) {
                for (var i = this._hashmod(t), r = this._keyBuckets[i], n = this._valBuckets[i], o = 0; o < r.length; o++) {
                    var s = r[o];
                    if (this._equals(t, s)) {
                        var a = n[o];
                        return r[o] = t, n[o] = e, a
                    }
                }
                return r.push(t), n.push(e), null
            }, i.prototype.del = function(t) {
                for (var e = this._hashmod(t), i = this._keyBuckets[e], r = this._valBuckets[e], n = 0; n < i.length; n++) {
                    var o = i[n];
                    if (this._equals(t, o)) {
                        for (var s = r[n], a = n; a < i.length - 1; a++) i[a] = i[a + 1], r[a] = r[a + 1];
                        return i.length = i.length - 1, r.length = r.length - 1, s
                    }
                }
                return null
            }, i.prototype.has = function(t) {
                for (var e = this._hashmod(t), i = this._keyBuckets[e], r = 0; r < i.length; r++) {
                    var n = i[r];
                    if (this._equals(t, n)) return !0
                }
                return !1
            }, i.prototype.size = function() {
                for (var t = 0, e = 0; e < this._nbuckets; e++) {
                    var i = this._keyBuckets[e];
                    t += i.length
                }
                return t
            }, i.prototype.clear = function() {
                for (var t = 0; t < this._nbuckets; t++) {
                    var e = this._keyBuckets[t],
                        i = this._valBuckets[t];
                    e.length = 0, i.length = 0
                }
            }, i.prototype.each = function(t) {
                for (var e = 0, i = 0; i < this._nbuckets; i++)
                    for (var r = this._keyBuckets[i], n = this._valBuckets[i], o = 0; o < r.length; o++) {
                        var s = r[o],
                            a = n[o];
                        t(s, a), e += 1
                    }
                return e
            }, e.exports = i
        }, {}],
        54: [function(t, e) {
            "use strict";

            function i(t, e, i) {
                if ("function" != typeof t) throw new Error("Set: bad equals function");
                if (this._equals = t, "function" != typeof e) throw new Error("Set: bad hash function");
                if (this._hash = e, null != i) {
                    if ("number" != typeof i || isNaN(i) || 1 > i) throw new Error("Set: bad number of buckets");
                    this._nbuckets = i
                } else this._nbuckets = r;
                this._buckets = [];
                for (var n = 0; n < this._nbuckets; n++) this._buckets.push([])
            }
            var r = 32;
            i.prototype._hashmod = function(t) {
                return this._hash(t) % this._nbuckets
            }, i.prototype.add = function(t) {
                for (var e = this._hashmod(t), i = this._buckets[e], r = 0; r < i.length; r++) {
                    var n = i[r];
                    if (this._equals(t, n)) return i[r] = t, n
                }
                return i.push(t), null
            }, i.prototype.remove = function(t) {
                for (var e = this._hashmod(t), i = this._buckets[e], r = 0; r < i.length; r++) {
                    var n = i[r];
                    if (this._equals(t, n)) {
                        for (var o = r; o < i.length - 1; o++) i[o] = i[o + 1];
                        return i.length = i.length - 1, n
                    }
                }
                return null
            }, i.prototype.has = function(t) {
                for (var e = this._hashmod(t), i = this._buckets[e], r = 0; r < i.length; r++) {
                    var n = i[r];
                    if (this._equals(t, n)) return !0
                }
                return !1
            }, i.prototype.size = function() {
                for (var t = 0, e = 0; e < this._nbuckets; e++) {
                    var i = this._buckets[e];
                    t += i.length
                }
                return t
            }, i.prototype.clear = function() {
                for (var t = 0; t < this._nbuckets; t++) {
                    var e = this._buckets[t];
                    e.length = 0
                }
            }, i.prototype.each = function(t) {
                for (var e = 0, i = 0; i < this._nbuckets; i++)
                    for (var r = this._buckets[i], n = 0; n < r.length; n++) {
                        var o = r[n];
                        t(o), e += 1
                    }
                return e
            }, e.exports = i
        }, {}],
        55: [function(t, e) {
            "use strict";

            function i(t) {
                this._concurrency = t && t.concurrency || 1, this._paused = t && !!t.paused || !1, this._pool = [];
                for (var e = 0; e < this._concurrency; e++) this._pool.push(new r(t));
                this._next = 0
            }
            var r = t("./WorkQueue"),
                n = t("../util/mod");
            i.prototype.length = function() {
                for (var t = 0, e = 0; e < this._pool.length; e++) t += this._pool[e].length();
                return t
            }, i.prototype.push = function(t, e) {
                var i = this._next,
                    r = this._pool[i].push(t, e);
                return this._next = n(this._next + 1, this._concurrency), r
            }, i.prototype.pause = function() {
                if (!this._paused) {
                    this._paused = !0;
                    for (var t = 0; t < this._concurrency; t++) this._pool[t].pause()
                }
            }, i.prototype.resume = function() {
                if (this._paused) {
                    this._paused = !1;
                    for (var t = 0; t < this._concurrency; t++) this._pool[t].resume()
                }
            }, e.exports = i
        }, {
            "../util/mod": 129,
            "./WorkQueue": 56
        }],
        56: [function(t, e) {
            "use strict";

            function i(t, e) {
                this.fn = t, this.cb = e, this.cfn = null
            }

            function r(t) {
                this._queue = [], this._delay = t && t.delay || 0, this._paused = t && !!t.paused || !1, this._currentTask = null, this._lastFinished = null
            }
            var n = t("../util/clock");
            r.prototype.length = function() {
                return this._queue.length
            }, r.prototype.push = function(t, e) {
                var r = new i(t, e),
                    n = this._cancel.bind(this, r);
                return this._queue.push(r), this._next(), n
            }, r.prototype.pause = function() {
                this._paused || (this._paused = !0)
            }, r.prototype.resume = function() {
                this._paused && (this._paused = !1, this._next())
            }, r.prototype._start = function(t) {
                if (this._currentTask) throw new Error("WorkQueue: called start while running task");
                this._currentTask = t;
                var e = this._finish.bind(this, t);
                if (t.cfn = t.fn(e), "function" != typeof t.cfn) throw new Error("WorkQueue: function is not cancellable")
            }, r.prototype._finish = function(t) {
                var e = Array.prototype.slice.call(arguments, 1);
                if (this._currentTask !== t) throw new Error("WorkQueue: called finish on wrong task");
                t.cb.apply(null, e), this._currentTask = null, this._lastFinished = n(), this._next()
            }, r.prototype._cancel = function(t) {
                var e = Array.prototype.slice.call(arguments, 1);
                if (this._currentTask === t) t.cfn.apply(null, e);
                else {
                    var i = this._queue.indexOf(t);
                    i >= 0 && (this._queue.splice(i, 1), t.cb.apply(null, e))
                }
            }, r.prototype._next = function() {
                if (!this._paused && this._queue.length && !this._currentTask) {
                    if (null != this._lastFinished) {
                        var t = n() - this._lastFinished,
                            e = this._delay - t;
                        if (e > 0) return void setTimeout(this._next.bind(this), e)
                    }
                    var i = this._queue.shift();
                    this._start(i)
                }
            }, e.exports = r
        }, {
            "../util/clock": 116
        }],
        57: [function(t, e) {
            "use strict";

            function i(t) {
                var e = t || {};
                return e.colorOffset = e.colorOffset || u.create(), e.colorMatrix = e.colorMatrix || c.create(), e
            }

            function r(t, e, i) {
                n(i, t, e.colorMatrix), u.add(i, i, e.colorOffset)
            }

            function n(t, e, i) {
                var r = e[0],
                    n = e[1],
                    o = e[2],
                    s = e[3];
                return t[0] = i[0] * r + i[1] * n + i[2] * o + i[3] * s, t[1] = i[4] * r + i[5] * n + i[6] * o + i[7] * s, t[2] = i[8] * r + i[9] * n + i[10] * o + i[11] * s, t[3] = i[12] * r + i[13] * n + i[14] * o + i[15] * s, t
            }

            function o(t, e) {
                for (var i = t.width, n = t.height, o = t.data, s = 0; i * n > s; s++) u.set(p, o[4 * s + 0] / 255, o[4 * s + 1] / 255, o[4 * s + 2] / 255, o[4 * s + 3] / 255), r(p, e, p), o[4 * s + 0] = 255 * p[0], o[4 * s + 1] = 255 * p[1], o[4 * s + 2] = 255 * p[2], o[4 * s + 3] = 255 * p[3]
            }

            function s(t, e) {
                return e = i(e), c.identity(e.colorMatrix), e.colorOffset[0] = t, e.colorOffset[1] = t, e.colorOffset[2] = t, e
            }

            function a(t, e) {
                return e = i(e), e.colorMatrix[0] = 1 - .607 * t, e.colorMatrix[1] = .769 * t, e.colorMatrix[2] = .189 * t, e.colorMatrix[3] = 0, e.colorMatrix[4] = .349 * t, e.colorMatrix[5] = 1 - .314 * t, e.colorMatrix[6] = .168 * t, e.colorMatrix[7] = 0, e.colorMatrix[8] = .272 * t, e.colorMatrix[9] = .534 * t, e.colorMatrix[10] = 1 - .869 * t, e.colorMatrix[11] = 0, e.colorMatrix[12] = 0, e.colorMatrix[13] = 0, e.colorMatrix[14] = 0, e.colorMatrix[15] = 1, e.colorOffset[0] = 0, e.colorOffset[1] = 0, e.colorOffset[2] = 0, e
            }

            function h(t, e) {
                e = i(e);
                var r = .3086,
                    n = .6094,
                    o = .082,
                    s = (1 - t) * r,
                    a = (1 - t) * n,
                    h = (1 - t) * o;
                return e.colorMatrix[0] = s + t, e.colorMatrix[1] = a, e.colorMatrix[2] = h, e.colorMatrix[3] = 0, e.colorMatrix[4] = s, e.colorMatrix[5] = a + t, e.colorMatrix[6] = h, e.colorMatrix[7] = 0, e.colorMatrix[8] = s, e.colorMatrix[9] = a, e.colorMatrix[10] = h + t, e.colorMatrix[11] = 0, e.colorMatrix[12] = 0, e.colorMatrix[13] = 0, e.colorMatrix[14] = 0, e.colorMatrix[15] = 1, e.colorOffset[0] = 0, e.colorOffset[1] = 0, e.colorOffset[2] = 0, e
            }

            function l(t, e) {
                return e = i(e), e.colorMatrix[0] = t, e.colorMatrix[1] = 0, e.colorMatrix[2] = 0, e.colorMatrix[3] = 0, e.colorMatrix[4] = 0, e.colorMatrix[5] = t, e.colorMatrix[6] = 0, e.colorMatrix[7] = 0, e.colorMatrix[8] = 0, e.colorMatrix[9] = 0, e.colorMatrix[10] = t, e.colorMatrix[11] = 0, e.colorMatrix[12] = 0, e.colorMatrix[13] = 0, e.colorMatrix[14] = 0, e.colorMatrix[15] = 1, e.colorOffset[0] = (1 - t) / 2, e.colorOffset[1] = (1 - t) / 2, e.colorOffset[2] = (1 - t) / 2, e
            }
            var u = {
                    create: t("gl-vec4/create"),
                    add: t("gl-vec4/add"),
                    set: t("gl-vec4/set")
                },
                c = {
                    create: t("gl-mat4/create"),
                    transpose: t("gl-mat4/transpose"),
                    identity: t("gl-mat4/identity")
                },
                p = u.create();
            e.exports = {
                brightness: s,
                sepia: a,
                saturation: h,
                contrast: l,
                empty: i,
                applyToPixel: r,
                applyToImageData: o
            }
        }, {
            "gl-mat4/create": 4,
            "gl-mat4/identity": 5,
            "gl-mat4/transpose": 14,
            "gl-vec4/add": 24,
            "gl-vec4/create": 26,
            "gl-vec4/set": 28
        }],
        58: [function(t, e) {
            "use strict";

            function i(t) {
                t = t || {}, this._methods = [], this._parameters = ["x", "y", "axisScaledX", "axisScaledY", "zoom", "yaw", "pitch", "roll"], this._clock = t.clock || o, this._composedOffsets = {}, this._composeReturn = {
                    offsets: this._composedOffsets,
                    changing: null
                }
            }
            var r = t("minimal-event-emitter"),
                n = t("./Dynamics"),
                o = t("../util/clock");
            r(i), i.prototype.add = function(t) {
                if (!this.has(t)) {
                    var e = {};
                    this._parameters.forEach(function(t) {
                        e[t] = {
                            dynamics: new n,
                            time: null
                        }
                    });
                    var i = this._updateDynamics.bind(this, e),
                        r = {
                            instance: t,
                            dynamics: e,
                            parameterDynamicsHandler: i
                        };
                    t.addEventListener("parameterDynamics", i), this._methods.push(r)
                }
            }, i.prototype.remove = function(t) {
                var e = this._indexOfInstance(t);
                if (e >= 0) {
                    var i = this._methods.splice(e, 1)[0];
                    i.instance.removeEventListener("parameterDynamics", i.parameterDynamicsHandler)
                }
            }, i.prototype.has = function(t) {
                return this._indexOfInstance(t) >= 0
            }, i.prototype._indexOfInstance = function(t) {
                for (var e = 0; e < this._methods.length; e++)
                    if (this._methods[e].instance === t) return e;
                return -1
            }, i.prototype.list = function() {
                for (var t = [], e = 0; e < this._methods.length; e++) t.push(this._methods[e].instance);
                return t
            }, i.prototype._updateDynamics = function(t, e, i, r) {
                var n = t[i];
                if (!n) throw new Error("Unknown control parameter " + i);
                var o = this._clock();
                n.dynamics.update(r, (o - n.time) / 1e3), n.time = o, this.emit("change")
            }, i.prototype._resetComposedOffsets = function() {
                for (var t = 0; t < this._parameters.length; t++) this._composedOffsets[this._parameters[t]] = 0
            }, i.prototype.offsets = function() {
                var t, e = !1,
                    i = this._clock();
                this._resetComposedOffsets();
                for (var r = 0; r < this._methods.length; r++)
                    for (var n = this._methods[r].dynamics, o = 0; o < this._parameters.length; o++) {
                        t = this._parameters[o];
                        var s = n[t],
                            a = s.dynamics;
                        null != a.offset && (this._composedOffsets[t] += a.offset, a.offset = null);
                        var h = (i - s.time) / 1e3,
                            l = a.offsetFromVelocity(h);
                        l && (this._composedOffsets[t] += l);
                        var u = a.velocityAfter(h);
                        a.velocity = u, u && (e = !0), s.time = i
                    }
                return this._composeReturn.changing = e, this._composeReturn
            }, i.prototype.destroy = function() {
                for (var t = this.list(), e = 0; e < t.length; e++) this.remove(t[e]);
                this._methods = null
            }, e.exports = i
        }, {
            "../util/clock": 116,
            "./Dynamics": 62,
            "minimal-event-emitter": 31
        }],
        59: [function(t, e) {
            "use strict";

            function i(t) {
                t = t || {}, this._methods = {}, this._methodGroups = {}, this._composer = new r, this._enabled = t && t.enabled ? !!t.enabled : !0, this._activeCount = 0, this._attachedRenderLoop = null
            }
            var r = t("./Composer"),
                n = t("minimal-event-emitter"),
                o = "undefined" != typeof MARZIPANODEBUG && MARZIPANODEBUG.controls;
            n(i), i.prototype.methods = function() {
                var t = {};
                for (var e in this._methods) t[e] = this._methods[e];
                return t
            }, i.prototype.method = function(t) {
                return this._methods[t]
            }, i.prototype.registerMethod = function(t, e, i) {
                if (this._methods[t]) throw new Error("Control method already registered with id " + t);
                this._methods[t] = {
                    instance: e,
                    enabled: !1,
                    active: !1,
                    activeHandler: this._handleActive.bind(this, t),
                    inactiveHandler: this._handleInactive.bind(this, t)
                }, i && this.enableMethod(t, e)
            }, i.prototype.unregisterMethod = function(t) {
                var e = this._methods[t];
                if (!e) throw new Error("No control method registered with id " + t);
                e.enabled && this.disableMethod(t), delete this._methods[t]
            }, i.prototype.enableMethod = function(t) {
                var e = this._methods[t];
                if (!e) throw new Error("No control method registered with id " + t);
                e.enabled || (e.enabled = !0, e.active && this._incrementActiveCount(), this._listen(t), this._updateComposer(), this.emit("methodEnabled", t))
            }, i.prototype.disableMethod = function(t) {
                var e = this._methods[t];
                if (!e) throw new Error("No control method registered with id " + t);
                e.enabled && (e.enabled = !1, e.active && this._decrementActiveCount(), this._unlisten(t), this._updateComposer(), this.emit("methodDisabled", t))
            }, i.prototype.addMethodGroup = function(t, e) {
                this._methodGroups[t] = e
            }, i.prototype.removeMethodGroup = function(t) {
                delete this._methodGroups[t]
            }, i.prototype.methodGroups = function() {
                var t = {};
                for (var e in this._methodGroups) t[e] = this._methodGroups[e];
                return t
            }, i.prototype.enableMethodGroup = function(t) {
                var e = this;
                e._methodGroups[t].forEach(function(t) {
                    e.enableMethod(t)
                })
            }, i.prototype.disableMethodGroup = function(t) {
                var e = this;
                e._methodGroups[t].forEach(function(t) {
                    e.disableMethod(t)
                })
            }, i.prototype.enabled = function() {
                return this._enabled
            }, i.prototype.enable = function() {
                this._enabled = !0, this._activeCount > 0 && this.emit("active"), this.emit("enabled"), this._updateComposer()
            }, i.prototype.disable = function() {
                this._enabled = !1, this._activeCount > 0 && this.emit("inactive"), this.emit("disabled"), this._updateComposer()
            }, i.prototype.attach = function(t) {
                this._attachedRenderLoop && this.detach(), this._attachedRenderLoop = t, this._beforeRenderHandler = this._updateViewsWithControls.bind(this), this._changeHandler = t.renderOnNextFrame.bind(t), this._attachedRenderLoop.addEventListener("beforeRender", this._beforeRenderHandler), this._composer.addEventListener("change", this._changeHandler)
            }, i.prototype.detach = function() {
                this._attachedRenderLoop && (this._attachedRenderLoop.removeEventListener("beforeRender", this._beforeRenderHandler), this._composer.removeEventListener("change", this._changeHandler), this._beforeRenderHandler = null, this._changeHandler = null, this._attachedRenderLoop = null)
            }, i.prototype.attached = function() {
                return null != this._attachedRenderLoop
            }, i.prototype._listen = function(t) {
                var e = this._methods[t];
                if (!e) throw new Error("Bad method id");
                e.instance.addEventListener("active", e.activeHandler), e.instance.addEventListener("inactive", e.inactiveHandler)
            }, i.prototype._unlisten = function(t) {
                var e = this._methods[t];
                if (!e) throw new Error("Bad method id");
                e.instance.removeEventListener("active", e.activeHandler), e.instance.removeEventListener("inactive", e.inactiveHandler)
            }, i.prototype._handleActive = function(t) {
                var e = this._methods[t];
                if (!e) throw new Error("Bad method id");
                if (!e.enabled) throw new Error("Should not receive event from disabled control method");
                e.active || (e.active = !0, this._incrementActiveCount())
            }, i.prototype._handleInactive = function(t) {
                var e = this._methods[t];
                if (!e) throw new Error("Bad method id");
                if (!e.enabled) throw new Error("Should not receive event from disabled control method");
                e.active && (e.active = !1, this._decrementActiveCount())
            }, i.prototype._incrementActiveCount = function() {
                this._activeCount++, o && this._checkActiveCount(), this._enabled && 1 === this._activeCount && this.emit("active")
            }, i.prototype._decrementActiveCount = function() {
                this._activeCount--, o && this._checkActiveCount(), this._enabled && 0 === this._activeCount && this.emit("inactive")
            }, i.prototype._checkActiveCount = function() {
                var t = 0;
                for (var e in this._methods) {
                    var i = this._methods[e];
                    i.enabled && i.active && t++
                }
                if (t != this._activeCount) throw new Error("Bad control state")
            }, i.prototype._updateComposer = function() {
                var t = this._composer;
                for (var e in this._methods) {
                    var i = this._methods[e],
                        r = this._enabled && i.enabled;
                    r && !t.has(i.instance) && t.add(i.instance), !r && t.has(i.instance) && t.remove(i.instance)
                }
            }, i.prototype._updateViewsWithControls = function() {
                var t = this._composer.offsets();
                t.changing && this._attachedRenderLoop.renderOnNextFrame();
                for (var e = this._attachedRenderLoop.stage().listLayers(), i = 0; i < e.length; i++) e[i].view().updateWithControlParameters(t.offsets)
            }, i.prototype.destroy = function() {
                this.detach(), this._composer.destroy(), this._methods = null
            }, e.exports = i
        }, {
            "./Composer": 58,
            "minimal-event-emitter": 31
        }],
        60: [function(t, e) {
            "use strict";

            function i(t, e, i) {
                this._element = t, this._opts = o(i || {}, h), this._startEvent = null, this._lastEvent = null, this._active = !1, this._dynamics = {
                    x: new r,
                    y: new r
                }, this._hammer = n.get(t, e), this._hammer.on("hammer.input", this._handleHammerEvent.bind(this)), this._hammer.on("panstart", this._handleStart.bind(this)), this._hammer.on("panmove", this._handleMove.bind(this)), this._hammer.on("panend", this._handleEnd.bind(this)), this._hammer.on("pancancel", this._handleEnd.bind(this))
            }
            var r = t("./Dynamics"),
                n = t("./HammerGestures"),
                o = t("../util/defaults"),
                s = t("minimal-event-emitter"),
                a = t("./util").maxFriction,
                h = {
                    friction: 6,
                    maxFrictionTime: .3
                },
                l = "undefined" != typeof MARZIPANODEBUG && MARZIPANODEBUG.controls;
            s(i), i.prototype.destroy = function() {
                this._hammer.release(), this._element = null, this._opts = null, this._startEvent = null, this._lastEvent = null, this._active = null, this._dynamics = null, this._hammer = null
            }, i.prototype._handleHammerEvent = function(t) {
                if (t.isFirst) {
                    if (l && this._active) throw new Error("DragControlMethod active detected when already active");
                    this._active = !0, this.emit("active")
                }
                if (t.isFinal) {
                    if (l && !this._active) throw new Error("DragControlMethod inactive detected when already inactive");
                    this._active = !1, this.emit("inactive")
                }
            }, i.prototype._handleStart = function(t) {
                t.preventDefault(), this._startEvent = t
            }, i.prototype._handleMove = function(t) {
                t.preventDefault(), this._startEvent && (this._updateDynamicsMove(t), this.emit("parameterDynamics", "axisScaledX", this._dynamics.x), this.emit("parameterDynamics", "axisScaledY", this._dynamics.y))
            }, i.prototype._handleEnd = function(t) {
                t.preventDefault(), this._startEvent && (this._updateDynamicsRelease(t), this.emit("parameterDynamics", "axisScaledX", this._dynamics.x), this.emit("parameterDynamics", "axisScaledY", this._dynamics.y)), this._startEvent = !1, this._lastEvent = !1
            }, i.prototype._updateDynamicsMove = function(t) {
                var e = t.deltaX,
                    i = t.deltaY,
                    r = this._lastEvent || this._startEvent;
                r && (e -= r.deltaX, i -= r.deltaY);
                var n = this._element.getBoundingClientRect(),
                    o = n.right - n.left,
                    s = n.bottom - n.top;
                e /= o, i /= s, this._dynamics.x.reset(), this._dynamics.y.reset(), this._dynamics.x.offset = -e, this._dynamics.y.offset = -i, this._lastEvent = t
            };
            var u = [null, null];
            i.prototype._updateDynamicsRelease = function(t) {
                var e = this._element.getBoundingClientRect(),
                    i = e.right - e.left,
                    r = e.bottom - e.top,
                    n = 1e3 * t.velocityX / i,
                    o = 1e3 * t.velocityY / r;
                this._dynamics.x.reset(), this._dynamics.y.reset(), this._dynamics.x.velocity = n, this._dynamics.y.velocity = o, a(this._opts.friction, this._dynamics.x.velocity, this._dynamics.y.velocity, this._opts.maxFrictionTime, u), this._dynamics.x.friction = u[0], this._dynamics.y.friction = u[1]
            }, e.exports = i
        }, {
            "../util/defaults": 121,
            "./Dynamics": 62,
            "./HammerGestures": 64,
            "./util": 72,
            "minimal-event-emitter": 31
        }],
        61: [function(t, e) {
            "use strict";

            function i(t, e, i, n) {
                n = n || {}, n.active = ["move"], n.inactive = ["default"], n.disabled = [null], this._controls = t, this._id = e, this._attached = !1, this._setActiveCursor = r.bind(null, i, n.active), this._setInactiveCursor = r.bind(null, i, n.inactive), this._setDisabledCursor = r.bind(null, i, n.disabled), t.method(e).enabled && this._attachCursor(t.method(e)), this._enableChangeHandler = this._updateAttach.bind(this), t.addEventListener("methodEnabled", this._enableChangeHandler), t.addEventListener("methodDisabled", this._enableChangeHandler), t.addEventListener("enabled", this._enableChangeHandler), t.addEventListener("disabled", this._enableChangeHandler)
            }

            function r(t, e) {
                e.forEach(function(e) {
                    t.style.cursor = e
                })
            }
            i.prototype.destroy = function() {
                this._detachCursor(this._controls.method(this._id)), this._controls.removeEventListener("methodEnabled", this._enableChangeHandler), this._controls.removeEventListener("methodDisabled", this._enableChangeHandler), this._controls.removeEventListener("enabled", this._enableChangeHandler), this._controls.removeEventListener("disabled", this._enableChangeHandler)
            }, i.prototype._updateAttach = function() {
                var t = this._controls,
                    e = this._id;
                t.enabled() && t.method(e).enabled ? this._attachCursor(t.method(e)) : this._detachCursor(t.method(e))
            }, i.prototype._attachCursor = function(t) {
                this._attached || (t.instance.addEventListener("active", this._setActiveCursor), t.instance.addEventListener("inactive", this._setInactiveCursor), t.active ? this._setActiveCursor() : this._setInactiveCursor(), this._attached = !0)
            }, i.prototype._detachCursor = function(t) {
                this._attached && (t.instance.removeEventListener("active", this._setActiveCursor), t.instance.removeEventListener("inactive", this._setInactiveCursor), this._setDisabledCursor(), this._attached = !1)
            }, e.exports = i
        }, {}],
        62: [function(t, e) {
            "use strict";

            function i() {
                this.velocity = null, this.friction = null, this.offset = null
            }

            function r(t, e) {
                return 0 > t ? Math.min(0, t + e) : t > 0 ? Math.max(0, t - e) : 0
            }
            i.equals = function(t, e) {
                return t.velocity === e.velocity && t.friction === e.friction && t.offset === e.offset
            }, i.prototype.equals = function(t) {
                return i.equals(this, t)
            }, i.prototype.update = function(t, e) {
                t.offset && (this.offset = this.offset || 0, this.offset += t.offset);
                var i = this.offsetFromVelocity(e);
                i && (this.offset = this.offset || 0, this.offset += i), this.velocity = t.velocity, this.friction = t.friction
            }, i.prototype.reset = function() {
                this.velocity = null, this.friction = null, this.offset = null
            }, i.prototype.velocityAfter = function(t) {
                return this.velocity ? this.friction ? r(this.velocity, this.friction * t) : this.velocity : null
            }, i.prototype.offsetFromVelocity = function(t) {
                t = Math.min(t, this.nullVelocityTime());
                var e = this.velocityAfter(t),
                    i = (this.velocity + e) / 2;
                return i * t
            }, i.prototype.nullVelocityTime = function() {
                return null == this.velocity ? 0 : this.velocity && !this.friction ? 1 / 0 : Math.abs(this.velocity / this.friction)
            }, e.exports = i
        }, {}],
        63: [function(t, e) {
            "use strict";

            function i(t, e, i, n) {
                if (!t) throw new Error("ElementPressControlMethod: element must be defined");
                if (!e) throw new Error("ElementPressControlMethod: parameter must be defined");
                if (!i) throw new Error("ElementPressControlMethod: velocity must be defined");
                if (!n) throw new Error("ElementPressControlMethod: friction must be defined");
                this._element = t, this._pressHandler = this._handlePress.bind(this), this._releaseHandler = this._handleRelease.bind(this), t.addEventListener("mousedown", this._pressHandler), t.addEventListener("mouseup", this._releaseHandler), t.addEventListener("mouseleave", this._releaseHandler), t.addEventListener("touchstart", this._pressHandler), t.addEventListener("touchmove", this._releaseHandler), t.addEventListener("touchend", this._releaseHandler), this._parameter = e, this._velocity = i, this._friction = n, this._dynamics = new r, this._pressing = !1
            }
            var r = t("./Dynamics"),
                n = t("minimal-event-emitter");
            n(i), i.prototype.destroy = function() {
                this._element.removeEventListener("mousedown", this._pressHandler), this._element.removeEventListener("mouseup", this._releaseHandler), this._element.removeEventListener("mouseleave", this._releaseHandler), this._element.removeEventListener("touchstart", this._pressHandler), this._element.removeEventListener("touchmove", this._releaseHandler), this._element.removeEventListener("touchend", this._releaseHandler)
            }, i.prototype._handlePress = function() {
                this._pressing = !0, this._dynamics.velocity = this._velocity, this._dynamics.friction = 0, this.emit("parameterDynamics", this._parameter, this._dynamics), this.emit("active")
            }, i.prototype._handleRelease = function() {
                this._pressing && (this._dynamics.friction = this._friction, this.emit("parameterDynamics", this._parameter, this._dynamics), this.emit("inactive")), this._pressing = !1
            }, e.exports = i
        }, {
            "./Dynamics": 62,
            "minimal-event-emitter": 31
        }],
        64: [function(t, e) {
            "use strict";

            function i() {
                this._managers = new a(r, n)
            }

            function r(t, e) {
                return t === e
            }

            function n(t) {
                for (var e = t.id || t.toString(); e.length < 5;) e += "0";
                return h(e.charCodeAt(0), e.charCodeAt(1), e.charCodeAt(2), e.charCodeAt(3), e.charCodeAt(4))
            }

            function o(t, e, i, r) {
                this._manager = e, this._element = i, this._type = r, this._hammerGestures = t, this._eventHandlers = []
            }
            var s = t("hammerjs"),
                a = t("../collections/Map"),
                h = t("../util/hash"),
                l = t("bowser").browser;
            i.prototype.get = function(t, e) {
                this._managers.has(t) || this._managers.set(t, {});
                var i = this._managers.get(t);
                i[e] || (i[e] = this._createManager(t, e));
                var r = i[e];
                return r.refs += 1, new o(this, r.manager, t, e)
            }, i.prototype._createManager = function(t, e) {
                var i = new s.Manager(t);
                return "mouse" === e ? i.add(new s.Pan({
                    direction: s.DIRECTION_ALL,
                    threshold: 0
                })) : ("touch" === e || "pen" === e || "kinect" === e) && (i.add(new s.Pan({
                    direction: s.DIRECTION_ALL,
                    threshold: 20,
                    pointers: 1
                })), l.msie && parseFloat(l.version) < 10 || i.add(new s.Pinch)), {
                    manager: i,
                    refs: 0
                }
            }, i.prototype._releaseHandle = function(t, e) {
                var i = this._managers.get(t)[e];
                i.refs -= 1, i.refs <= 0 && (i.manager.destroy(), this._managers.get(t)[e] = null)
            }, o.prototype.on = function(t, e) {
                var i = this._type,
                    r = function(t) {
                        i === t.pointerType && e(t)
                    };
                this._eventHandlers.push({
                    events: t,
                    handler: r
                }), this._manager.on(t, r)
            }, o.prototype.release = function() {
                for (var t = 0; t < this._eventHandlers.length; t++) {
                    var e = this._eventHandlers[t];
                    this._manager.off(e.events, e.handler)
                }
                this._hammerGestures._releaseHandle(this._element, this._type), this._manager = null, this._element = null, this._type = null, this._hammerGestures = null
            }, o.prototype.manager = function() {
                return this._manager
            }, e.exports = new i
        }, {
            "../collections/Map": 53,
            "../util/hash": 126,
            bowser: 1,
            hammerjs: 30
        }],
        65: [function(t, e) {
            "use strict";

            function i(t, e, i, n, o) {
                if (!t) throw new Error("KeyControlMethod: keyCode must be defined");
                if (!e) throw new Error("KeyControlMethod: parameter must be defined");
                if (!i) throw new Error("KeyControlMethod: velocity must be defined");
                if (!n) throw new Error("KeyControlMethod: friction must be defined");
                o = o || document, this._keyCode = t, this._parameter = e, this._velocity = i, this._friction = n, this._element = o, this._keydownHandler = this._handlePress.bind(this), this._keyupHandler = this._handleRelease.bind(this), this._blurHandler = this._handleBlur.bind(this), this._element.addEventListener("keydown", this._keydownHandler), this._element.addEventListener("keyup", this._keyupHandler), window.addEventListener("blur", this._blurHandler), this._dynamics = new r, this._pressing = !1
            }
            var r = t("./Dynamics"),
                n = t("minimal-event-emitter");
            n(i), i.prototype.destroy = function() {
                this._element.addEventListener("keydown", this._keydownHandler), this._element.addEventListener("keyup", this._keyupHandler), window.addEventListener("blur", this._blurHandler)
            }, i.prototype._handlePress = function(t) {
                t.keyCode === this._keyCode && (this._pressing = !0, this._dynamics.velocity = this._velocity, this._dynamics.friction = 0, this.emit("parameterDynamics", this._parameter, this._dynamics), this.emit("active"))
            }, i.prototype._handleRelease = function(t) {
                t.keyCode === this._keyCode && (this._pressing && (this._dynamics.friction = this._friction, this.emit("parameterDynamics", this._parameter, this._dynamics), this.emit("inactive")), this._pressing = !1)
            }, i.prototype._handleBlur = function() {
                this._dynamics.velocity = 0, this.emit("parameterDynamics", this._parameter, this._dynamics), this.emit("inactive"), this._pressing = !1
            }, e.exports = i
        }, {
            "./Dynamics": 62,
            "minimal-event-emitter": 31
        }],
        66: [function(t, e) {
            "use strict";

            function i(t, e) {
                this._hammer = n.get(t, e), this._lastEvent = null, this._active = !1, this._dynamics = new r, this._hammer.on("pinchstart", this._handleStart.bind(this)), this._hammer.on("pinch", this._handleEvent.bind(this)), this._hammer.on("pinchend", this._handleEnd.bind(this)), this._hammer.on("pinchcancel", this._handleEnd.bind(this))
            }
            var r = t("./Dynamics"),
                n = t("./HammerGestures"),
                o = t("minimal-event-emitter");
            o(i), i.prototype.destroy = function() {
                this._hammer.release(), this._hammer = null, this._lastEvent = null, this._active = null, this._dynamics = null
            }, i.prototype._handleStart = function() {
                this._active || (this._active = !0, this.emit("active"))
            }, i.prototype._handleEnd = function() {
                this._lastEvent = null, this._active && (this._active = !1, this.emit("inactive"))
            }, i.prototype._handleEvent = function(t) {
                var e = t.scale;
                this._lastEvent && (e /= this._lastEvent.scale), this._dynamics.offset = -1 * (e - 1), this.emit("parameterDynamics", "zoom", this._dynamics), this._lastEvent = t
            }, e.exports = i
        }, {
            "./Dynamics": 62,
            "./HammerGestures": 64,
            "minimal-event-emitter": 31
        }],
        67: [function(t, e) {
            "use strict";

            function i(t, e, i) {
                this._element = t, this._opts = o(i || {}, h), this._active = !1, this._hammer = n.get(t, e), this._dynamics = {
                    x: new r,
                    y: new r
                }, this._hammer.on("panstart", this._handleStart.bind(this)), this._hammer.on("panmove", this._handleMove.bind(this)), this._hammer.on("panend", this._handleRelease.bind(this)), this._hammer.on("pancancel", this._handleRelease.bind(this))
            }
            var r = t("./Dynamics"),
                n = t("./HammerGestures"),
                o = t("../util/defaults"),
                s = t("minimal-event-emitter"),
                a = t("./util").maxFriction,
                h = {
                    speed: 8,
                    friction: 6,
                    maxFrictionTime: .3
                };
            s(i), i.prototype.destroy = function() {
                this._hammer.release(), this._hammer = null, this._element = null, this._opts = null, this._active = null, this._dynamics = null
            }, i.prototype._handleStart = function(t) {
                t.preventDefault(), this._active || (this._active = !0, this.emit("active"))
            }, i.prototype._handleMove = function(t) {
                t.preventDefault(), this._updateDynamics(t, !1)
            }, i.prototype._handleRelease = function(t) {
                t.preventDefault(), this._updateDynamics(t, !0), this._active && (this._active = !1, this.emit("inactive"))
            };
            var l = [null, null];
            i.prototype._updateDynamics = function(t, e) {
                var i = this._element.getBoundingClientRect(),
                    r = i.right - i.left,
                    n = i.bottom - i.top,
                    o = Math.max(r, n),
                    s = t.deltaX / o * this._opts.speed,
                    h = t.deltaY / o * this._opts.speed;
                this._dynamics.x.reset(), this._dynamics.y.reset(), this._dynamics.x.velocity = s, this._dynamics.y.velocity = h, e && (a(this._opts.friction, this._dynamics.x.velocity, this._dynamics.y.velocity, this._opts.maxFrictionTime, l), this._dynamics.x.friction = l[0], this._dynamics.y.friction = l[1]), this.emit("parameterDynamics", "x", this._dynamics.x), this.emit("parameterDynamics", "y", this._dynamics.y)
            }, e.exports = i
        }, {
            "../util/defaults": 121,
            "./Dynamics": 62,
            "./HammerGestures": 64,
            "./util": 72,
            "minimal-event-emitter": 31
        }],
        68: [function(t, e) {
            "use strict";

            function i(t, e) {
                this._opts = s(e || {}, h), this._dynamics = new n, this._eventList = [];
                var i = this._opts.frictionTime ? this.withSmoothing : this.withoutSmoothing;
                this._wheelListener = new o(t, i.bind(this))
            }

            function r(t) {
                var e = 1 == t.deltaMode ? 20 : 1;
                return t.deltaY * e
            }
            var n = t("./Dynamics"),
                o = t("./WheelListener"),
                s = t("../util/defaults"),
                a = t("minimal-event-emitter"),
                h = {
                    frictionTime: .2,
                    zoomDelta: .001
                };
            a(i), i.prototype.destroy = function() {
                this._wheelListener.remove(), this._opts = null, this._dynamics = null, this._eventList = null
            }, i.prototype.withoutSmoothing = function(t) {
                this._dynamics.offset = r(t) * this._opts.zoomDelta, this.emit("parameterDynamics", "zoom", this._dynamics), t.preventDefault(), this.emit("active"), this.emit("inactive")
            }, i.prototype.withSmoothing = function(t) {
                var e = t.timeStamp;
                for (this._eventList.push(t); this._eventList[0].timeStamp < e - 1e3 * this._opts.frictionTime;) this._eventList.shift(0);
                for (var i = 0, n = 0; n < this._eventList.length; n++) {
                    var o = r(this._eventList[n]) * this._opts.zoomDelta;
                    i += o / this._opts.frictionTime
                }
                this._dynamics.velocity = i, this._dynamics.friction = Math.abs(i) / this._opts.frictionTime, this.emit("parameterDynamics", "zoom", this._dynamics), t.preventDefault(), this.emit("active"), this.emit("inactive")
            }, e.exports = i
        }, {
            "../util/defaults": 121,
            "./Dynamics": 62,
            "./WheelListener": 70,
            "minimal-event-emitter": 31
        }],
        69: [function(t, e) {
            "use strict";

            function i(t) {
                if (!t) throw new Error("VelocityControlMethod: parameter must be defined");
                this._parameter = t, this._dynamics = new r
            }
            var r = t("./Dynamics"),
                n = (t("../util/defaults"), t("minimal-event-emitter"));
            n(i), i.prototype.destroy = function() {}, i.prototype.setVelocity = function(t) {
                this._dynamics.velocity = t, this.emit("parameterDynamics", this._parameter, this._dynamics)
            }, i.prototype.setFriction = function(t) {
                this._dynamics.friction = t, this.emit("parameterDynamics", this._parameter, this._dynamics)
            }, e.exports = i
        }, {
            "../util/defaults": 121,
            "./Dynamics": 62,
            "minimal-event-emitter": 31
        }],
        70: [function(t, e) {
            "use strict";

            function i() {
                return "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : null
            }

            function r(t, e, r) {
                var o = i();
                if ("wheel" === o) this._fun = e, this._elem = t, this._elem.addEventListener("wheel", this._fun, r);
                else {
                    if ("mousewheel" !== o) throw new Error("Browser does not support mouse wheel events");
                    this._fun = n(e), this._elem = t, this._elem.addEventListener("mousewheel", this._fun, r)
                }
            }

            function n(t) {
                return function(e) {
                    e || (e = window.event);
                    var i = {
                        originalEvent: e,
                        target: e.target || e.srcElement,
                        type: "wheel",
                        deltaMode: 1,
                        deltaX: 0,
                        deltaZ: 0,
                        timeStamp: e.timeStamp || Date.now(),
                        preventDefault: e.preventDefault.bind(e)
                    };
                    return i.deltaY = -1 / 40 * e.wheelDelta, e.wheelDeltaX && (i.deltaX = -1 / 40 * e.wheelDeltaX), t(i)
                }
            }
            r.prototype.remove = function() {
                var t = i();
                "wheel" === t ? this._elem.removeEventListener("wheel", this._fun) : "mousewheel" === t && this._elem.removeEventListener("mousewheel", this._fun)
            }, e.exports = r
        }, {}],
        71: [function(t, e) {
            "use strict";

            function i(t, e, i) {
                i = r(i || {}, l);
                var u = {
                        mouseViewDrag: new n(e, "mouse"),
                        mouseViewQtvr: new o(e, "mouse"),
                        scrollZoom: new s(e),
                        touchView: new n(e, "touch"),
                        pinch: new a(e, "touch"),
                        leftArrowKey: new h(37, "x", -.7, 3),
                        rightArrowKey: new h(39, "x", .7, 3),
                        upArrowKey: new h(38, "y", -.7, 3),
                        downArrowKey: new h(40, "y", .7, 3),
                        plusKey: new h(107, "zoom", -.7, 3),
                        minusKey: new h(109, "zoom", .7, 3),
                        wKey: new h(87, "y", -.7, 3),
                        aKey: new h(65, "x", -.7, 3),
                        sKey: new h(83, "y", .7, 3),
                        dKey: new h(68, "x", .7, 3),
                        qKey: new h(81, "roll", .7, 3),
                        eKey: new h(69, "roll", -.7, 3)
                    },
                    c = {
                        arrowKeys: ["leftArrowKey", "rightArrowKey", "upArrowKey", "downArrowKey"],
                        plusMinusKeys: ["plusKey", "minusKey"],
                        wasdKeys: ["wKey", "aKey", "sKey", "dKey"],
                        qeKeys: ["qKey", "eKey"]
                    },
                    p = ["scrollZoom", "touchView", "pinch"];
                switch (i.mouseViewMode) {
                    case "drag":
                        p.push("mouseViewDrag");
                        break;
                    case "qtvr":
                        p.push("mouseViewQtvr");
                        break;
                    default:
                        throw new Error("Unknown mouse view mode: " + i.mouseViewMode)
                }
                for (var d in u) {
                    var f = u[d];
                    t.registerMethod(d, f), p.indexOf(d) >= 0 && t.enableMethod(d)
                }
                for (var m in c) {
                    var v = c[m];
                    t.addMethodGroup(m, v)
                }
                return u
            }
            var r = t("../util/defaults"),
                n = t("./Drag"),
                o = t("./Qtvr"),
                s = t("./ScrollZoom"),
                a = t("./PinchZoom"),
                h = t("./Key"),
                l = {
                    mouseViewMode: "drag"
                };
            e.exports = i
        }, {
            "../util/defaults": 121,
            "./Drag": 60,
            "./Key": 65,
            "./PinchZoom": 66,
            "./Qtvr": 67,
            "./ScrollZoom": 68
        }],
        72: [function(t, e) {
            "use strict";

            function i(t, e, i, n, o) {
                var s = Math.sqrt(Math.pow(e, 2) + Math.pow(i, 2));
                t = Math.max(t, s / n), r(e, i, t, o), o[0] = Math.abs(o[0]), o[1] = Math.abs(o[1])
            }

            function r(t, e, i, r) {
                var n = Math.atan(e / t);
                r[0] = i * Math.cos(n), r[1] = i * Math.sin(n)
            }
            e.exports = {
                maxFriction: i,
                changeVectorNorm: r
            }
        }, {}],
        73: [function(t, e) {
            "use strict";

            function i(t) {
                for (var e = document.documentElement.style, i = ["Moz", "Webkit", "Khtml", "O", "ms"], r = 0; r < i.length; r++) {
                    var n = i[r],
                        o = t[0].toUpperCase() + t.slice(1),
                        s = n + o;
                    if (s in e) return s
                }
                return t
            }

            function r(t) {
                var e = i(t);
                return function(t) {
                    return t.style[e]
                }
            }

            function n(t) {
                var e = i(t);
                return function(t, i) {
                    return t.style[e] = i
                }
            }

            function o(t) {
                v(t, "translateZ(0)")
            }

            function s(t) {
                _(t, "0 0 0")
            }

            function a(t) {
                t.style.position = "absolute"
            }

            function h(t, e, i) {
                t.style.left = e + "px", t.style.top = i + "px"
            }

            function l(t, e, i) {
                t.style.width = e + "px", t.style.height = i + "px"
            }

            function u(t) {
                t.style.width = t.style.height = 0
            }

            function c(t) {
                t.style.width = t.style.height = "100%"
            }

            function p(t) {
                t.style.overflow = "hidden"
            }

            function d(t) {
                t.style.overflow = "visible"
            }

            function f(t) {
                t.style.pointerEvents = "none"
            }

            function m(t) {
                t.style.backgroundColor = "#000", t.style.opacity = "0", t.style.filter = "alpha(opacity=0)"
            }
            var v = n("transform"),
                _ = n("transformOrigin");
            e.exports = {
                prefixProperty: i,
                getWithVendorPrefix: r,
                setWithVendorPrefix: n,
                setTransform: v,
                setTransformOrigin: _,
                setNullTransform: o,
                setNullTransformOrigin: s,
                setAbsolute: a,
                setPixelPosition: h,
                setPixelSize: l,
                setNullSize: u,
                setFullSize: c,
                setOverflowHidden: p,
                setOverflowVisible: d,
                setNoPointerEvents: f,
                setBlocking: m
            }
        }, {}],
        74: [function(t, e) {
            "use strict";

            function i(t, e, i, r, n) {
                this.face = t, this.x = e, this.y = i, this.z = r, this._cube = n
            }

            function r(t) {
                if (this.constructor.super_.call(this, t), this._size = t.size, this._tileSize = t.tileSize, this._size % this._tileSize !== 0) throw new Error("Level size is not multiple of tile size: " + this._size + " " + this._tileSize)
            }

            function n(t) {
                if ("array" !== m(t)) throw new Error("Argument 0 must be an array");
                this.levelList = c(t, r), this.selectableLevelList = p(this.levelList);
                for (var e = 1; e < this.levelList.length; e++) {
                    var n = this.levelList[e].validateWithPreviousLevel(this.levelList[e - 1]);
                    if (n) throw n
                }
                this._graphFinder = new a(i.equals, i.hash), this._neighborsCache = new l(i.equals, i.hash, 64), this._vec = v.create(), this._viewParams = {}, this._tileVertices = [v.create(), v.create(), v.create(), v.create()]
            }
            for (var o = t("../util/inherits"), s = t("../util/hash"), a = t("../GraphFinder"), h = t("../util/rotateVector"), l = t("../collections/LruMap"), u = t("./Level"), c = t("./common").makeLevelList, p = t("./common").makeSelectableLevelList, d = t("../util/clamp"), f = t("../util/cmp"), m = t("../util/type"), v = {
                    create: t("gl-vec3/create"),
                    set: t("gl-vec3/set"),
                    dot: t("gl-vec3/dot"),
                    fromValues: t("gl-vec3/fromValues")
                }, _ = "fblrud", y = {
                    f: {
                        x: 0,
                        y: 0
                    },
                    b: {
                        x: 0,
                        y: Math.PI
                    },
                    l: {
                        x: 0,
                        y: Math.PI / 2
                    },
                    r: {
                        x: 0,
                        y: -Math.PI / 2
                    },
                    u: {
                        x: Math.PI / 2,
                        y: 0
                    },
                    d: {
                        x: -Math.PI / 2,
                        y: 0
                    }
                }, g = {}, w = 0; w < _.length; w++) {
                var x = _[w],
                    b = y[x],
                    E = v.fromValues(0, 0, -1);
                h(E, E, b.y, b.x, 0), g[x] = E
            }
            var T = {
                    f: ["l", "r", "u", "d"],
                    b: ["r", "l", "u", "d"],
                    l: ["b", "f", "u", "d"],
                    r: ["f", "b", "u", "d"],
                    u: ["l", "r", "b", "f"],
                    d: ["l", "r", "f", "b"]
                },
                C = [
                    [0, 1],
                    [1, 0],
                    [0, -1],
                    [-1, 0]
                ];
            i.prototype.level = function() {
                return this._cube.levelList[this.z]
            }, i.prototype.rotX = function() {
                return y[this.face].x
            }, i.prototype.rotY = function() {
                return y[this.face].y
            }, i.prototype.centerX = function() {
                return (this.x + .5) / this.level().numHorizontalTiles() - .5
            }, i.prototype.centerY = function() {
                return .5 - (this.y + .5) / this.level().numVerticalTiles()
            }, i.prototype.scaleX = function() {
                return 1 / this.level().numHorizontalTiles()
            }, i.prototype.scaleY = function() {
                return 1 / this.level().numVerticalTiles()
            }, i.prototype.width = function() {
                return this.level().tileWidth()
            }, i.prototype.height = function() {
                return this.level().tileHeight()
            }, i.prototype.levelWidth = function() {
                return this.level().width()
            }, i.prototype.levelHeight = function() {
                return this.level().height()
            }, i.prototype.vertices = function(t) {
                return this._cube.vertices(this, t)
            }, i.prototype.atTopLevel = function() {
                return 0 === this.z
            }, i.prototype.atBottomLevel = function() {
                return this.z === this._cube.levelList.length - 1
            }, i.prototype.parent = function() {
                return this._cube.parent(this)
            }, i.prototype.children = function(t) {
                return this._cube.children(this, t)
            }, i.prototype.atTopEdge = function() {
                return 0 === this.y
            }, i.prototype.atBottomEdge = function() {
                return this.y === this.level().numVerticalTiles() - 1
            }, i.prototype.atLeftEdge = function() {
                return 0 === this.x
            }, i.prototype.atRightEdge = function() {
                return this.x === this.level().numHorizontalTiles() - 1
            }, i.prototype.padTop = function() {
                return this.atTopEdge() && /[fu]/.test(this.face)
            }, i.prototype.padBottom = function() {
                return !this.atBottomEdge() || /[fd]/.test(this.face)
            }, i.prototype.padLeft = function() {
                return this.atLeftEdge() && /[flud]/.test(this.face)
            }, i.prototype.padRight = function() {
                return !this.atRightEdge() || /[frud]/.test(this.face)
            }, i.hash = function(t) {
                return null != t ? s(t.face.charCodeAt(0), t.z, t.x, t.y) : 0
            }, i.equals = function(t, e) {
                return null != t && null != e && t.face === e.face && t.z === e.z && t.x === e.x && t.y === e.y
            }, i.cmp = function(t, e) {
                var i = "fudlrb".indexOf(t.face),
                    r = "fudlrb".indexOf(e.face);
                return f(t.z, e.z) || f(i, r) || f(t.y, e.y) || f(t.x, e.x)
            }, i.str = function(t) {
                return "CubeTile(" + t.face + ", " + t.x + ", " + t.y + ", " + t.z + ")"
            }, i.prototype.hash = function() {
                return i.hash(this)
            }, i.prototype.equals = function(t) {
                return i.equals(this, t)
            }, i.prototype.cmp = function(t) {
                return i.cmp(this, t)
            }, i.prototype.str = function() {
                return i.str(this)
            }, o(r, u), r.prototype.width = function() {
                return this._size
            }, r.prototype.height = function() {
                return this._size
            }, r.prototype.tileWidth = function() {
                return this._tileSize
            }, r.prototype.tileHeight = function() {
                return this._tileSize
            }, r.prototype.validateWithPreviousLevel = function(t) {
                if (this.width() % t.width() !== 0) throw new Error("Level width must be multiple of previous level: " + this.width() + " vs. " + t.width());
                if (this.numHorizontalTiles() % t.numHorizontalTiles() !== 0) throw new Error("Number of horizontal tiles must be multiple of that on parent level: " + this.numHorizontalTiles() + " (" + this.width() + "/" + this.tileWidth() + ") vs. " + t.numHorizontalTiles() + " (" + t.width() + "/" + t.tileWidth() + ")");
                if (this.height() % t.height() !== 0) throw new Error("Level height must be multiple of previous level: " + this.height() + " vs. " + t.height());
                if (this.numVerticalTiles() % t.numVerticalTiles() !== 0) throw new Error("Number of vertical tiles must be multiple of that on parent level: " + this.numVerticalTiles() + " (" + this.height() + "/" + this.tileHeight() + ") vs. " + t.numVerticalTiles() + " (" + t.height() + "/" + t.tileHeight() + ")");
                return !1
            }, n.prototype.maxTileSize = function() {
                for (var t = 0, e = 0; e < this.levelList.length; e++) {
                    var i = this.levelList[e];
                    t = Math.max(t, i.tileWidth, i.tileHeight)
                }
                return t
            }, n.prototype._tile = function(t, e, r, n) {
                return new i(t, e, r, n, this)
            }, n.prototype.closestTile = function(t, e) {
                var r = this._vec,
                    n = 1 / 0,
                    o = null;
                v.set(r, 0, 0, -1), h(r, r, -t.yaw, -t.pitch, -t.roll);
                for (var s in g) {
                    var a = g[s],
                        l = 1 - v.dot(a, r);
                    n > l && (n = l, o = s)
                }
                for (var u = Math.max(Math.abs(r[0]), Math.abs(r[1]), Math.abs(r[2])) / .5, c = 0; 3 > c; c++) r[c] = r[c] / u;
                var p = y[o];
                h(r, r, -p.y, -p.x, -p.z);
                var f = this.levelList.indexOf(e),
                    m = e.numHorizontalTiles(),
                    _ = e.numVerticalTiles(),
                    w = r[0],
                    x = r[1],
                    b = d(Math.floor((.5 + w) * m), 0, m - 1),
                    E = d(Math.floor((.5 - x) * _), 0, _ - 1);
                return new i(o, b, E, f, this)
            }, n.prototype.neighbors = function(t) {
                var e = this._neighborsCache.get(t);
                if (e) return e;
                for (var r = this._vec, n = t.face, o = t.x, s = t.y, a = t.z, l = t.level(), u = l.numHorizontalTiles(), c = l.numVerticalTiles(), p = [], f = 0; f < C.length; f++) {
                    var m = C[f][0],
                        _ = C[f][1],
                        g = o + m,
                        w = s + _,
                        x = n;
                    if (0 > g || g >= u || 0 > w || w >= c) {
                        var b = t.centerX(),
                            E = t.centerY();
                        0 > g ? (v.set(r, -.5, E, -.5), x = T[n][0]) : g >= u ? (v.set(r, .5, E, -.5), x = T[n][1]) : 0 > w ? (v.set(r, b, .5, -.5), x = T[n][2]) : w >= c && (v.set(r, b, -.5, -.5), x = T[n][3]);
                        var M;
                        M = y[n], h(r, r, M.y, M.x, M.z), M = y[x], h(r, r, -M.y, -M.x, -M.z), g = d(Math.floor((.5 + r[0]) * u), 0, u - 1), w = d(Math.floor((.5 - r[1]) * c), 0, c - 1)
                    }
                    p.push(new i(x, g, w, a, this))
                }
                return this._neighborsCache.set(t, p), p
            }, n.prototype.vertices = function(t, e) {
                function i(e, i, r) {
                    switch (t.face) {
                        case "f":
                            v.set(e, i, r, -.5);
                            break;
                        case "b":
                            v.set(e, -i, r, .5);
                            break;
                        case "l":
                            v.set(e, -.5, r, -i);
                            break;
                        case "r":
                            v.set(e, .5, r, i);
                            break;
                        case "u":
                            v.set(e, i, .5, r);
                            break;
                        case "d":
                            v.set(e, i, -.5, -r);
                            break;
                        default:
                            throw new Error("bad cube face")
                    }
                }
                var r = t.centerX() - t.scaleX() / 2,
                    n = t.centerX() + t.scaleX() / 2,
                    o = t.centerY() - t.scaleY() / 2,
                    s = t.centerY() + t.scaleY() / 2;
                return i(e[0], r, s), i(e[1], n, s), i(e[2], n, o), i(e[3], r, o), e
            }, n.prototype.getLevelTiles = function(t, e) {
                var r = this.levelList.indexOf(t),
                    n = t.numHorizontalTiles() - 1,
                    o = t.numVerticalTiles() - 1;
                e || (e = []);
                for (var s = 0; s < _.length; s++)
                    for (var a = _[s], h = 0; n >= h; h++)
                        for (var l = 0; o >= l; l++) e.push(new i(a, h, l, r, this));
                return e
            }, n.prototype.parent = function(t) {
                if (t.atTopLevel()) return null;
                var e = t.z - 1,
                    r = t.face,
                    n = t.x / t.level().numHorizontalTiles(),
                    o = t.y / t.level().numVerticalTiles(),
                    s = this.levelList[e],
                    a = Math.floor(n * s.numHorizontalTiles()),
                    h = Math.floor(o * s.numVerticalTiles());
                return new i(r, a, h, e, this)
            }, n.prototype.children = function(t, e) {
                if (t.atBottomLevel()) return null;
                e || (e = []);
                for (var r = t.z + 1, n = t.level(), o = this.levelList[r], s = o.numHorizontalTiles() / n.numHorizontalTiles(), a = o.numVerticalTiles() / n.numVerticalTiles(), h = 0; s > h; h++)
                    for (var l = 0; a > l; l++) e.push(new i(t.face, s * t.x + h, a * t.y + l, r, this));
                return e
            }, n.prototype.visibleTiles = function(t, e, i) {
                function r(e) {
                    return e.vertices(o), t.intersects(o)
                }
                var n = this._viewParams,
                    o = this._tileVertices,
                    s = this._graphFinder,
                    a = this.closestTile(t.parameters(n), e);
                if (!r(a)) throw new Error("Starting tile is not visible");
                i || (i = []);
                var h;
                for (s.start(a, this.neighbors.bind(this), r); null != (h = s.next());) i.push(h);
                return i
            }, n.TileClass = n.prototype.TileClass = i, n.type = n.prototype.type = "cube", i.type = i.prototype.type = "cube", e.exports = n
        }, {
            "../GraphFinder": 32,
            "../collections/LruMap": 51,
            "../util/clamp": 115,
            "../util/cmp": 117,
            "../util/hash": 126,
            "../util/inherits": 127,
            "../util/rotateVector": 136,
            "../util/type": 138,
            "./Level": 77,
            "./common": 78,
            "gl-vec3/create": 19,
            "gl-vec3/dot": 20,
            "gl-vec3/fromValues": 21,
            "gl-vec3/set": 22
        }],
        75: [function(t, e) {
            "use strict";

            function i(t, e) {
                this.z = t, this._equirect = e
            }

            function r(t) {
                this.constructor.super_.call(this, t), this._width = t.width
            }

            function n(t) {
                if ("array" !== u(t)) throw new Error("Argument 0 must be an array");
                this.levelList = h.makeLevelList(t, r), this.selectableLevelList = h.makeSelectableLevelList(this.levelList)
            }
            var o = t("../util/inherits"),
                s = t("../util/hash"),
                a = t("../util/cmp"),
                h = t("./common"),
                l = t("./Level"),
                u = t("../util/type");
            i.prototype.level = function() {
                return this._equirect.levelList[this.z]
            }, i.prototype.width = function() {
                return this.level().tileWidth()
            }, i.prototype.height = function() {
                return this.level().tileHeight()
            }, i.prototype.atTopLevel = function() {
                return 0 === this.z
            }, i.prototype.atBottomLevel = function() {
                return this.z === this._equirect.levelList.length - 1
            }, i.prototype.padTop = function() {
                return !1
            }, i.prototype.padBottom = function() {
                return !1
            }, i.prototype.padLeft = function() {
                return !1
            }, i.prototype.padRight = function() {
                return !1
            }, i.prototype.neighbors = function() {
                return this._equirect.neighbors(this)
            }, i.prototype.parent = function() {
                return this._equirect.parent(this)
            }, i.prototype.children = function(t) {
                return this._equirect.children(this, t)
            }, i.prototype.atTopEdge = function() {
                return !0
            }, i.prototype.atBottomEdge = function() {
                return !0
            }, i.prototype.atLeftEdge = function() {
                return !0
            }, i.prototype.atRightEdge = function() {
                return !0
            }, i.hash = function(t) {
                return s(t.z)
            }, i.equals = function(t, e) {
                return t.z === e.z
            }, i.cmp = function(t, e) {
                return a(t.z, e.z)
            }, i.str = function(t) {
                return "EquirectTile(" + t.z + ")"
            }, i.prototype.hash = function() {
                return i.hash(this)
            }, i.prototype.equals = function(t) {
                return i.equals(this, t)
            }, i.prototype.cmp = function(t) {
                return i.cmp(this, t)
            }, i.prototype.str = function() {
                return i.str(this)
            }, o(r, l), r.prototype.width = function() {
                return this._width
            }, r.prototype.height = function() {
                return this._width / 2
            }, r.prototype.tileWidth = function() {
                return this._width
            }, r.prototype.tileHeight = function() {
                return this._width / 2
            }, n.prototype.maxTileSize = function() {
                for (var t = 0, e = 0; e < this.levelList.length; e++) {
                    var i = this.levelList[e];
                    t = Math.max(t, i.tileWidth, i.tileHeight)
                }
                return t
            }, n.prototype.getLevelTiles = function(t, e) {
                var r = this.levelList.indexOf(t);
                return e || (e = []), e.push(new i(r, this)), e
            }, n.prototype.parent = function(t) {
                return t.atTopLevel() ? null : new i(t.z - 1, this)
            }, n.prototype.children = function(t, e) {
                return t.atBottomLevel() ? null : (e || (e = []), e.push(new i(t.z + 1, this)), e)
            }, n.prototype.neighbors = function() {
                return []
            }, n.prototype.getFirstLevel = function() {
                return new i(0, this)
            }, n.prototype.visibleTiles = function(t, e, r) {
                var n = new i(this.levelList.indexOf(e), this);
                r || (r = []), r.length = 0, r.push(n)
            }, n.TileClass = n.prototype.TileClass = i, n.type = n.prototype.type = "equirect", i.type = i.prototype.type = "equirect", i.disableMipmapping = i.prototype.disableMipmapping = !0, e.exports = n
        }, {
            "../util/cmp": 117,
            "../util/hash": 126,
            "../util/inherits": 127,
            "../util/type": 138,
            "./Level": 77,
            "./common": 78
        }],
        76: [function(t, e) {
            "use strict";

            function i(t, e, i, r) {
                this.x = t, this.y = e, this.z = i, this._flat = r
            }

            function r(t) {
                if (this.constructor.super_.call(this, t), this._width = t.width, this._height = t.height, this._tileWidth = t.tileWidth, this._tileHeight = t.tileHeight, this._width % this._tileWidth !== 0) throw new Error("Level width is not multiple of tile width: " + this._width + " vs. " + this._tileWidth)
            }

            function n(t) {
                if ("array" !== m(t)) throw new Error("Argument 0 must be an array");
                this.levelList = u(t, r), this.selectableLevelList = c(this.levelList);
                for (var e = 1; e < this.levelList.length; e++) {
                    var n = this.levelList[e].validateWithPreviousLevel(this.levelList[e - 1]);
                    if (n) throw n
                }
                this._graphFinder = new a(i.equals, i.hash), this._neighborsCache = new h(i.equals, i.hash, 64), this._viewParams = {}, this._tileVertices = [v.create(), v.create(), v.create(), v.create()]
            }
            var o = t("../util/inherits"),
                s = t("../util/hash"),
                a = t("../GraphFinder"),
                h = t("../collections/LruMap"),
                l = t("./Level"),
                u = t("./common").makeLevelList,
                c = t("./common").makeSelectableLevelList,
                p = t("../util/clamp"),
                d = t("../util/mod"),
                f = t("../util/cmp"),
                m = t("../util/type"),
                v = {
                    create: t("gl-vec2/create"),
                    set: t("gl-vec2/set")
                },
                _ = [
                    [0, 1],
                    [1, 0],
                    [0, -1],
                    [-1, 0]
                ];
            i.prototype.level = function() {
                return this._flat.levelList[this.z]
            }, i.prototype.rotX = function() {
                return 0
            }, i.prototype.rotY = function() {
                return 0
            }, i.prototype.centerX = function() {
                var t = this.level().width(),
                    e = this.level().tileWidth();
                return (this.x * e + .5 * this.width()) / t - .5
            }, i.prototype.centerY = function() {
                var t = this.level().height(),
                    e = this.level().tileHeight();
                return .5 - (this.y * e + .5 * this.height()) / t
            }, i.prototype.scaleX = function() {
                var t = this.level().width();
                return this.width() / t
            }, i.prototype.scaleY = function() {
                var t = this.level().height();
                return this.height() / t
            }, i.prototype.width = function() {
                var t = this.level(),
                    e = t.width(),
                    i = t.tileWidth();
                if (this.atRightEdge()) {
                    var r = d(e, i);
                    return r || i
                }
                return i
            }, i.prototype.height = function() {
                var t = this.level(),
                    e = t.height(),
                    i = t.tileHeight();
                if (this.atBottomEdge()) {
                    var r = d(e, i);
                    return r || i
                }
                return i
            }, i.prototype.levelWidth = function() {
                return this.level().width()
            }, i.prototype.levelHeight = function() {
                return this.level().height()
            }, i.prototype.vertices = function(t) {
                return this._flat.vertices(this, t)
            }, i.prototype.atTopLevel = function() {
                return 0 === this.z
            }, i.prototype.atBottomLevel = function() {
                return this.z === this._flat.levelList.length - 1
            }, i.prototype.neighbors = function() {
                return this._flat.neighbors(this)
            }, i.prototype.parent = function() {
                return this._flat.parent(this)
            }, i.prototype.children = function(t) {
                return this._flat.children(this, t)
            }, i.prototype.atTopEdge = function() {
                return 0 === this.y
            }, i.prototype.atBottomEdge = function() {
                return this.y === this.level().numVerticalTiles() - 1
            }, i.prototype.atLeftEdge = function() {
                return 0 === this.x
            }, i.prototype.atRightEdge = function() {
                return this.x === this.level().numHorizontalTiles() - 1
            }, i.prototype.padTop = function() {
                return !1
            }, i.prototype.padBottom = function() {
                return !this.atBottomEdge()
            }, i.prototype.padLeft = function() {
                return !1
            }, i.prototype.padRight = function() {
                return !this.atRightEdge()
            }, i.hash = function(t) {
                return null != t ? s(t.z, t.x, t.y) : 0
            }, i.equals = function(t, e) {
                return null != t && null != e && t.z === e.z && t.x === e.x && t.y === e.y
            }, i.cmp = function(t, e) {
                return f(t.z, e.z) || f(t.y, e.y) || f(t.x, e.x)
            }, i.str = function(t) {
                return "FlatTile(" + t.x + ", " + t.y + ", " + t.z + ")"
            }, i.prototype.hash = function() {
                return i.hash(this)
            }, i.prototype.equals = function(t) {
                return i.equals(this, t)
            }, i.prototype.cmp = function(t) {
                return i.cmp(this, t)
            }, i.prototype.str = function() {
                return i.str(this)
            }, o(r, l), r.prototype.width = function() {
                return this._width
            }, r.prototype.height = function() {
                return this._height
            }, r.prototype.tileWidth = function() {
                return this._tileWidth
            }, r.prototype.tileHeight = function() {
                return this._tileHeight
            }, r.prototype.validateWithPreviousLevel = function(t) {
                return this.width() % t.width() !== 0 ? new Error("Level width must be multiple of previous level: " + this.width() + " vs. " + t.width()) : this.height() % t.height() !== 0 ? new Error("Level height must be multiple of previous level: " + this.height() + " vs. " + t.height()) : this.tileWidth() % t.tileWidth() !== 0 ? new Error("Level tile width must be same as of previous level: " + this.tileWidth() + " vs. " + t.tileWidth()) : this.tileHeight() % t.tileHeight() !== 0 ? new Error("Level tile height must be same as of previous level: " + this.tileHeight() + " vs. " + t.tileHeight()) : !1
            }, n.prototype.maxTileSize = function() {
                for (var t = 0, e = 0; e < this.levelList.length; e++) {
                    var i = this.levelList[e];
                    t = Math.max(t, i.tileWidth, i.tileHeight)
                }
                return t
            }, n.prototype.vertices = function(t, e) {
                var i = t.centerX() - t.scaleX() / 2,
                    r = t.centerX() + t.scaleX() / 2,
                    n = t.centerY() - t.scaleY() / 2,
                    o = t.centerY() + t.scaleY() / 2;
                return v.set(e[0], i, o), v.set(e[1], r, o), v.set(e[2], r, n), v.set(e[3], i, n), e
            }, n.prototype.getLevelTiles = function(t, e) {
                var r = this.levelList.indexOf(t),
                    n = t.numHorizontalTiles() - 1,
                    o = t.numVerticalTiles() - 1;
                e || (e = []);
                for (var s = 0; n >= s; s++)
                    for (var a = 0; o >= a; a++) e.push(new i(s, a, r, this));
                return e
            }, n.prototype.parent = function(t) {
                if (t.atTopLevel()) return null;
                var e = t.z - 1,
                    r = Math.floor(t.x / 2),
                    n = Math.floor(t.y / 2);
                return new i(r, n, e, this)
            }, n.prototype.children = function(t, e) {
                if (t.atBottomLevel()) return null;
                e || (e = []);
                var r = t.z + 1;
                return e.push(new i(2 * t.x, 2 * t.y, r, this)), e.push(new i(2 * t.x, 2 * t.y + 1, r, this)), e.push(new i(2 * t.x + 1, 2 * t.y, r, this)), e.push(new i(2 * t.x + 1, 2 * t.y + 1, r, this)), e
            }, n.prototype.neighbors = function(t) {
                var e = this._neighborsCache.get(t);
                if (e) return e;
                for (var r = t.x, n = t.y, o = t.z, s = t.level(), a = s.numHorizontalTiles() - 1, h = s.numVerticalTiles() - 1, l = [], u = 0; u < _.length; u++) {
                    var c = _[u][0],
                        p = _[u][1],
                        d = r + c,
                        f = n + p;
                    d >= 0 && a >= d && f >= 0 && h >= f && l.push(new i(d, f, o, this))
                }
                return this._neighborsCache.set(t, l), l
            }, n.prototype.getFirstLevel = function(t) {
                var e = this.levelList[0],
                    r = e.numHorizontalTiles() - 1,
                    n = e.numVerticalTiles() - 1;
                t || (t = []);
                for (var o = 0; r >= o; o++)
                    for (var s = 0; n >= s; s++) t.push(new i(o, s, 0, this));
                return t
            }, n.prototype.closestTile = function(t, e) {
                var r = t.x,
                    n = t.y,
                    o = this.levelList.indexOf(e),
                    s = e.width(),
                    a = e.height(),
                    h = e.tileWidth(),
                    l = e.tileHeight(),
                    u = e.numHorizontalTiles(),
                    c = e.numVerticalTiles(),
                    d = p(Math.floor(r * s / h), 0, u - 1),
                    f = p(Math.floor(n * a / l), 0, c - 1);
                return new i(d, f, o, this)
            }, n.prototype.visibleTiles = function(t, e, i) {
                function r(e) {
                    return e.vertices(o), t.intersects(o)
                }
                var n = this._viewParams,
                    o = this._tileVertices,
                    s = this._graphFinder,
                    a = this.closestTile(t.parameters(n), e);
                i || (i = []);
                var h;
                for (s.start(a, this.neighbors.bind(this), r); null != (h = s.next());) i.push(h);
                return i
            }, n.TileClass = n.prototype.TileClass = i, n.type = n.prototype.type = "flat", i.type = i.prototype.type = "flat", i.disableMipmapping = i.prototype.disableMipmapping = !0, e.exports = n
        }, {
            "../GraphFinder": 32,
            "../collections/LruMap": 51,
            "../util/clamp": 115,
            "../util/cmp": 117,
            "../util/hash": 126,
            "../util/inherits": 127,
            "../util/mod": 129,
            "../util/type": 138,
            "./Level": 77,
            "./common": 78,
            "gl-vec2/create": 16,
            "gl-vec2/set": 17
        }],
        77: [function(t, e) {
            "use strict";

            function i(t) {
                this._fallbackOnly = !!t.fallbackOnly
            }
            i.prototype.numHorizontalTiles = function() {
                return Math.ceil(this.width() / this.tileWidth())
            }, i.prototype.numVerticalTiles = function() {
                return Math.ceil(this.height() / this.tileHeight())
            }, i.prototype.fallbackOnly = function() {
                return this._fallbackOnly
            }, e.exports = i
        }, {}],
        78: [function(t, e) {
            "use strict";

            function i(t, e) {
                for (var i = [], r = 0; r < t.length; r++) i.push(new e(t[r]));
                return i.sort(function(t, e) {
                    return n(t.width(), e.width())
                }), i
            }

            function r(t) {
                var e = t.filter(function(t) {
                    return !t.fallbackOnly()
                });
                if (!e.length) throw new Error("No selectable levels in list");
                return e
            }
            var n = t("../util/cmp");
            e.exports = {
                makeLevelList: i,
                makeSelectableLevelList: r
            }
        }, {
            "../util/cmp": 117
        }],
        79: [function(t, e) {
            var i = t("./index");
            i.Viewer = t("./WatermarkedViewer"), e.exports = i
        }, {
            "./index": 80
        }],
        80: [function(t, e) {
            e.exports = {
                WebGlStage: t("./stages/WebGl"),
                CssStage: t("./stages/Css"),
                FlashStage: t("./stages/Flash"),
                WebGlCubeRenderer: t("./renderers/WebGlCube"),
                WebGlFlatRenderer: t("./renderers/WebGlFlat"),
                WebGlEquirectRenderer: t("./renderers/WebGlEquirect"),
                CssCubeRenderer: t("./renderers/CssCube"),
                CssFlatRenderer: t("./renderers/CssFlat"),
                FlashCubeRenderer: t("./renderers/FlashCube"),
                FlashFlatRenderer: t("./renderers/FlashFlat"),
                registerDefaultRenderers: t("./renderers/registerDefaultRenderers"),
                CubeGeometry: t("./geometries/Cube"),
                FlatGeometry: t("./geometries/Flat"),
                EquirectGeometry: t("./geometries/Equirect"),
                RectilinearView: t("./views/Rectilinear"),
                FlatView: t("./views/Flat"),
                ImageUrlSource: t("./sources/ImageUrl"),
                SingleAssetSource: t("./sources/SingleAsset"),
                DynamicCanvasAsset: t("./assets/DynamicCanvas"),
                StaticCanvasAsset: t("./assets/StaticCanvas"),
                VideoAsset: t("./assets/Video"),
                TextureStore: t("./TextureStore"),
                Layer: t("./Layer"),
                RenderLoop: t("./RenderLoop"),
                KeyControlMethod: t("./controls/Key"),
                DragControlMethod: t("./controls/Drag"),
                QtvrControlMethod: t("./controls/Qtvr"),
                ScrollZoomControlMethod: t("./controls/ScrollZoom"),
                PinchZoomControlMethod: t("./controls/PinchZoom"),
                VelocityControlMethod: t("./controls/Velocity"),
                ElementPressControlMethod: t("./controls/ElementPress"),
                Controls: t("./controls/Controls"),
                Dynamics: t("./controls/Dynamics"),
                Viewer: t("./Viewer"),
                Scene: t("./Scene"),
                Hotspot: t("./Hotspot"),
                HotspotContainer: t("./HotspotContainer"),
                colorEffects: t("./colorEffects"),
                supported: t("./supported"),
                chooseBestStage: t("./chooseBestStage"),
                registerDefaultControls: t("./controls/registerDefaultControls"),
                autorotate: t("./autorotate"),
                util: {
                    clamp: t("./util/clamp"),
                    mod: t("./util/mod"),
                    compose: t("./util/compose"),
                    convertFov: t("./util/convertFov"),
                    eventEmitter: t("minimal-event-emitter"),
                    degToRad: t("./util/degToRad"),
                    radToDeg: t("./util/radToDeg")
                },
                version: t("./version"),
                dependencies: {
                    hammerjs: t("hammerjs"),
                    bowser: t("bowser")
                }
            }
        }, {
            "./Hotspot": 33,
            "./HotspotContainer": 34,
            "./Layer": 35,
            "./RenderLoop": 37,
            "./Scene": 38,
            "./TextureStore": 39,
            "./Viewer": 41,
            "./assets/DynamicCanvas": 43,
            "./assets/StaticCanvas": 45,
            "./assets/Video": 47,
            "./autorotate": 48,
            "./chooseBestStage": 50,
            "./colorEffects": 57,
            "./controls/Controls": 59,
            "./controls/Drag": 60,
            "./controls/Dynamics": 62,
            "./controls/ElementPress": 63,
            "./controls/Key": 65,
            "./controls/PinchZoom": 66,
            "./controls/Qtvr": 67,
            "./controls/ScrollZoom": 68,
            "./controls/Velocity": 69,
            "./controls/registerDefaultControls": 71,
            "./geometries/Cube": 74,
            "./geometries/Equirect": 75,
            "./geometries/Flat": 76,
            "./renderers/CssCube": 83,
            "./renderers/CssFlat": 84,
            "./renderers/FlashCube": 86,
            "./renderers/FlashFlat": 87,
            "./renderers/WebGlCube": 90,
            "./renderers/WebGlEquirect": 91,
            "./renderers/WebGlFlat": 92,
            "./renderers/registerDefaultRenderers": 93,
            "./sources/ImageUrl": 98,
            "./sources/SingleAsset": 99,
            "./stages/Css": 100,
            "./stages/Flash": 101,
            "./stages/WebGl": 104,
            "./supported": 111,
            "./util/clamp": 115,
            "./util/compose": 118,
            "./util/convertFov": 119,
            "./util/degToRad": 123,
            "./util/mod": 129,
            "./util/radToDeg": 133,
            "./version": 139,
            "./views/Flat": 140,
            "./views/Rectilinear": 141,
            bowser: 1,
            hammerjs: 30,
            "minimal-event-emitter": 31
        }],
        81: [function(t, e) {
            "use strict";

            function i(t, e, i) {
                if (r()) {
                    var a = "translateX(" + s(e) + "px) translateY(" + s(i) + "px) translateZ(0)";
                    n(t, a)
                } else o(t, e, i)
            }
            var r = t("./support/Css"),
                n = t("./domUtil").setTransform,
                o = t("./domUtil").setPixelPosition,
                s = t("./util/decimal");
            e.exports = i
        }, {
            "./domUtil": 73,
            "./support/Css": 107,
            "./util/decimal": 120
        }],
        82: [function(t, e) {
            "use strict";

            function i(t, e) {
                return t.cmp(e)
            }

            function r(t, e, i) {
                this._root = t, this._browserQuirks = e;
                var r = document.createElement("div");
                t.appendChild(r), r.style.position = "absolute", o.setOverflowHidden(r), o.setNoPointerEvents(r), this._browserQuirks.useNullTransform && o.setNullTransform(r), this.domElement = r, this._oldTileList = [], this._newTileList = [], this._textureMap = new n(i.equals, i.hash)
            }
            var n = t("../collections/Map"),
                o = t("../domUtil"),
                s = "undefined" != typeof MARZIPANODEBUG && MARZIPANODEBUG.css;
            r.prototype.destroy = function() {
                this._root.removeChild(this.domElement), this._textureMap = null, this.domElement = null
            }, r.prototype.startLayer = function(t, e) {
                var i = this.domElement;
                i.style.left = e.left + "px", i.style.top = e.top + "px", i.style.width = e.width + "px", i.style.height = e.height + "px";
                var r = 1,
                    n = t.effects();
                n && null != n.opacity && (r = n.opacity), i.style.opacity = r, this._newTileList.length = 0, this._textureMap.clear()
            }, r.prototype.renderTile = function(t, e) {
                this._newTileList.push(t), this._textureMap.set(t, e)
            }, r.prototype.endLayer = function(t) {
                var e, r, n, a, h, l, u, c, p = this.domElement,
                    d = this._oldTileList,
                    f = this._newTileList,
                    m = this._textureMap,
                    v = t.view();
                if (p.children.length !== d.length) throw new Error("DOM not in sync with tile list");
                for (f.sort(i), e = 0, n = d[e], u = p.firstChild, r = 0; r < f.length; r++) {
                    for (a = f[r]; e < d.length && !(n.cmp(a) >= 0);) c = u.nextSibling, p.removeChild(u), u = c, n = d[++e];
                    if (h = m.get(a), l = h ? h._canvas : null, !l) throw new Error("Rendering tile with missing texture");
                    if (n && 0 === n.cmp(a)) {
                        if (l != u) throw new Error("DOM not in sync with tile list");
                        u = u.nextSibling, n = d[++e]
                    } else p.insertBefore(l, u);
                    o.setTransform(l, this.calculateTransform(a, h, v)), s && l.setAttribute("data-tile", a.str())
                }
                for (; u;) c = u.nextSibling, p.removeChild(u), u = c;
                if (p.children.length !== f.length) throw new Error("DOM not in sync with tile list");
                var _ = this._oldTileList;
                this._oldTileList = this._newTileList, this._newTileList = _
            }, e.exports = r
        }, {
            "../collections/Map": 53,
            "../domUtil": 73
        }],
        83: [function(t, e) {
            "use strict";

            function i(t, e) {
                this.constructor.super_.call(this, t, e, r)
            }
            var r = t("../geometries/Cube").TileClass,
                n = t("./CssBase"),
                o = t("../util/decimal"),
                s = t("../util/inherits");
            s(i, n), i.prototype.calculateTransform = function(t, e, i) {
                var r = this._browserQuirks.padSize,
                    n = this._browserQuirks.reverseLevelDepth,
                    s = this._browserQuirks.perspectiveNudge,
                    a = "",
                    h = n ? 256 - t.z : t.levelWidth(),
                    l = i.size(),
                    u = l.width,
                    c = l.height;
                a += "translate3d(" + o(u / 2) + "px, " + o(c / 2) + "px, 0px) ";
                var p = .5 * c / Math.tan(i.fov() / 2),
                    d = p + s;
                a += "perspective(" + o(p) + "px) translateZ(" + o(d) + "px) ";
                var f = -i.roll(),
                    m = -i.pitch(),
                    v = i.yaw();
                a += "rotateZ(" + o(f) + "rad) rotateX(" + o(m) + "rad) rotateY(" + o(v) + "rad) ";
                var _ = -t.rotX(),
                    y = t.rotY();
                a += "rotateX(" + o(_) + "rad) rotateY(" + o(y) + "rad) ";
                var g = t.centerX() - t.scaleX() / 2,
                    w = -(t.centerY() + t.scaleY() / 2),
                    x = g * h,
                    b = w * h,
                    E = -h / 2;
                if (a += "translate3d(" + o(x) + "px, " + o(b) + "px, " + o(E) + "px) ", n) {
                    var T = h * t.scaleX() / t.width(),
                        C = h * t.scaleY() / t.height();
                    a += "scale(" + o(T) + ", " + o(C) + ") "
                }
                var M = t.padLeft() ? r : 0,
                    L = t.padTop() ? r : 0;
                return (0 !== M || 0 !== L) && (a += "translate3d(" + o(-M) + "px, " + o(-L) + "px, 0) "), a
            }, e.exports = i
        }, {
            "../geometries/Cube": 74,
            "../util/decimal": 120,
            "../util/inherits": 127,
            "./CssBase": 82
        }],
        84: [function(t, e) {
            "use strict";

            function i(t, e) {
                this.constructor.super_.call(this, t, e, r)
            }
            var r = t("../geometries/Flat").TileClass,
                n = t("./CssBase"),
                o = t("../util/decimal"),
                s = t("../util/inherits");
            s(i, n), i.prototype.calculateTransform = function(t, e, i) {
                var r = this._browserQuirks.padSize,
                    n = "",
                    s = i.width(),
                    a = i.height();
                n += "translateX(" + o(s / 2) + "px) translateY(" + o(a / 2) + "px) ";
                var h = s / i._zoomX(),
                    l = a / i._zoomY(),
                    u = t.centerX() - t.scaleX() / 2 + .5,
                    c = .5 - t.centerY() - t.scaleY() / 2,
                    p = u * h,
                    d = c * l;
                n += "translateX(" + o(p) + "px) translateY(" + o(d) + "px) ";
                var f = -i.x() * h,
                    m = -i.y() * l;
                n += "translateX(" + o(f) + "px) translateY(" + o(m) + "px) ";
                var v = t.padLeft() ? r : 0,
                    _ = t.padTop() ? r : 0;
                (0 !== v || 0 !== _) && (n += "translateX(" + o(-v) + "px) translateY(" + o(-_) + "px) ");
                var y = h / t.levelWidth(),
                    g = l / t.levelHeight();
                return n += "scale(" + o(y) + ", " + o(g) + ") "
            }, e.exports = i
        }, {
            "../geometries/Flat": 76,
            "../util/decimal": 120,
            "../util/inherits": 127,
            "./CssBase": 82
        }],
        85: [function(t, e) {
            "use strict";

            function i(t, e) {
                return t.cmp(e)
            }

            function r(t, e, i, r) {
                this._flashElement = t, this._layerId = e, this._quirks = i, this._tileList = [], this._textureMap = new n(r.equals, r.hash), this._layerCreated = !1
            }
            var n = t("../collections/Map");
            r.prototype.destroy = function() {
                this._flashElement.destroyLayer(this._layerId), this._flashElement = null, this._layerId = null, this._layerCreated = null, this._tileList = null, this._padSize = null
            }, r.prototype.startLayer = function() {
                this._flashElement.isReady && (this._layerCreated || (this._flashElement.createLayer(this._layerId), this._layerCreated = !0), this._tileList.length = 0, this._textureMap.clear())
            }, r.prototype.renderTile = function(t, e) {
                this._tileList.push(t), this._textureMap.set(t, e)
            }, r.prototype.endLayer = function(t, e) {
                if (this._flashElement.isReady) {
                    var r = this._tileList;
                    r.sort(i), this._renderOnFlash(t, e)
                }
            }, e.exports = r
        }, {
            "../collections/Map": 53
        }],
        86: [function(t, e) {
            "use strict";

            function i(t, e, i) {
                this.constructor.super_.call(this, t, e, i, n), this._flashTileList = []
            }
            var r = t("./FlashBase"),
                n = t("../geometries/Cube").TileClass,
                o = t("../util/inherits"),
                s = t("../util/radToDeg");
            o(i, r), i.prototype._renderOnFlash = function(t, e) {
                var i = this._flashElement,
                    r = this._layerId,
                    n = this._quirks.padSize,
                    o = this._tileList,
                    a = this._textureMap,
                    h = this._flashTileList;
                h.length = 0;
                for (var l = 0; l < o.length; l++) {
                    var u = o[l],
                        c = a.get(u);
                    if (!c) throw new Error("Rendering tile with missing texture");
                    var p = u.padTop() ? n : 0,
                        d = u.padBottom() ? n : 0,
                        f = u.padLeft() ? n : 0,
                        m = u.padRight() ? n : 0;
                    h.push({
                        textureId: c._textureId,
                        face: u.face,
                        width: u.width(),
                        height: u.height(),
                        centerX: u.centerX(),
                        centerY: u.centerY(),
                        rotX: s(u.rotX()),
                        rotY: s(u.rotY()),
                        levelSize: u.levelWidth(),
                        padTop: p,
                        padBottom: d,
                        padLeft: f,
                        padRight: m
                    })
                }
                var v = 1,
                    _ = t.effects();
                _ && null != _.opacity && (v = _.opacity);
                var y = t.view(),
                    g = y.yaw(),
                    w = y.pitch(),
                    x = y.roll(),
                    b = y.fov();
                i.drawCubeTiles(r, e.width, e.height, e.left, e.top, v, g, w, x, b, h)
            }, e.exports = i
        }, {
            "../geometries/Cube": 74,
            "../util/inherits": 127,
            "../util/radToDeg": 133,
            "./FlashBase": 85
        }],
        87: [function(t, e) {
            "use strict";

            function i(t, e, i) {
                this.constructor.super_.call(this, t, e, i, n), this._flashTileList = []
            }
            var r = t("./FlashBase"),
                n = t("../geometries/Flat").TileClass,
                o = t("../util/inherits");
            o(i, r), i.prototype._renderOnFlash = function(t, e) {
                var i = this._flashElement,
                    r = this._layerId,
                    n = this._quirks.padSize,
                    o = this._tileList,
                    s = this._textureMap,
                    a = this._flashTileList;
                a.length = 0;
                for (var h = 0; h < o.length; h++) {
                    var l = o[h],
                        u = s.get(l);
                    if (!u) throw new Error("Rendering tile with missing texture");
                    var c = l.padTop() ? n : 0,
                        p = l.padBottom() ? n : 0,
                        d = l.padLeft() ? n : 0,
                        f = l.padRight() ? n : 0;
                    a.push({
                        textureId: u._textureId,
                        width: l.width(),
                        height: l.height(),
                        centerX: l.centerX(),
                        centerY: l.centerY(),
                        scaleX: l.scaleX(),
                        scaleY: l.scaleY(),
                        levelWidth: l.levelWidth(),
                        levelHeight: l.levelHeight(),
                        padTop: c,
                        padBottom: p,
                        padLeft: d,
                        padRight: f
                    })
                }
                var m = 1,
                    v = t.effects();
                v && null != v.opacity && (m = v.opacity);
                var _ = t.view(),
                    y = _.x(),
                    g = _.y(),
                    w = _._zoomX(),
                    x = _._zoomY();
                i.drawFlatTiles(r, e.width, e.height, e.left, e.top, m, y, g, w, x, a)
            }, e.exports = i
        }, {
            "../geometries/Flat": 76,
            "../util/inherits": 127,
            "./FlashBase": 85
        }],
        88: [function(t, e) {
            "use strict";

            function i(t) {
                this.gl = t, this.vtMatrix = g.create(), this.vccMatrix = g.create(), this.translateVector = w.create(), this.scaleVector = w.create(), this.constantBuffers = n(this.gl, f, m, v), this.shaderProgram = s(this.gl, p, d, _, y)
            }
            var r = t("./WebGlCommon"),
                n = r.createConstantBuffers,
                o = r.destroyConstantBuffers,
                s = r.createShaderProgram,
                a = r.destroyShaderProgram,
                h = r.setViewport,
                l = r.setupPixelEffectUniforms,
                u = r.setDepth,
                c = r.setTexture,
                p = t("../shaders/vertexNormal"),
                d = t("../shaders/fragmentNormal"),
                f = [0, 1, 2, 0, 2, 3],
                m = [-.5, -.5, 0, .5, -.5, 0, .5, .5, 0, -.5, .5, 0],
                v = [0, 0, 1, 0, 1, 1, 0, 1],
                _ = ["aVertexPosition", "aTextureCoord"],
                y = ["vtMatrix", "vccMatrix", "uDepth", "uSampler", "uOpacity", "colorOffset", "colorMatrix"],
                g = {
                    create: t("gl-mat4/create"),
                    copy: t("gl-mat4/copy"),
                    identity: t("gl-mat4/identity"),
                    rotateX: t("gl-mat4/rotateX"),
                    rotateY: t("gl-mat4/rotateY"),
                    translate: t("gl-mat4/translate"),
                    scale: t("gl-mat4/scale")
                },
                w = {
                    create: t("gl-vec3/create")
                };
            i.prototype.destroy = function() {
                this.vtMatrix = null, this.vccMatrix = null, this.translateVector = null, this.scaleVector = null, o(this.gl, this.constantBuffers), this.constantBuffers = null, a(this.gl, this.shaderProgram), this.shaderProgram = null, this.gl = null
            }, i.prototype.startLayer = function(t, e) {
                var i = this.gl,
                    r = this.shaderProgram,
                    n = this.constantBuffers;
                i.useProgram(r), h(i, t, e, this.vccMatrix), i.uniformMatrix4fv(r.vccMatrix, !1, this.vccMatrix), i.bindBuffer(i.ARRAY_BUFFER, n.vertexPositions), i.vertexAttribPointer(r.aVertexPosition, 3, i.FLOAT, i.FALSE, 0, 0), i.bindBuffer(i.ARRAY_BUFFER, n.textureCoords), i.vertexAttribPointer(r.aTextureCoord, 2, i.FLOAT, i.FALSE, 0, 0), l(i, t.effects(), {
                    opacity: r.uOpacity,
                    colorOffset: r.colorOffset,
                    colorMatrix: r.colorMatrix
                })
            }, i.prototype.endLayer = function() {}, i.prototype.renderTile = function(t, e, i, r) {
                var n = this.gl,
                    o = this.shaderProgram,
                    s = this.constantBuffers,
                    a = this.vtMatrix,
                    h = this.translateVector,
                    l = this.scaleVector;
                h[0] = t.centerX(), h[1] = t.centerY(), h[2] = -.5, l[0] = t.scaleX(), l[1] = t.scaleY(), l[2] = 1, g.copy(a, i.view().projection()), g.rotateX(a, a, t.rotX()), g.rotateY(a, a, t.rotY()), g.translate(a, a, h), g.scale(a, a, l), n.uniformMatrix4fv(o.vtMatrix, !1, a), u(n, o, r, t.z), c(n, o, e), n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, s.vertexIndices), n.drawElements(n.TRIANGLES, f.length, n.UNSIGNED_SHORT, 0)
            }, e.exports = i
        }, {
            "../shaders/fragmentNormal": 95,
            "../shaders/vertexNormal": 97,
            "./WebGlCommon": 89,
            "gl-mat4/copy": 3,
            "gl-mat4/create": 4,
            "gl-mat4/identity": 5,
            "gl-mat4/rotateX": 9,
            "gl-mat4/rotateY": 10,
            "gl-mat4/scale": 12,
            "gl-mat4/translate": 13,
            "gl-vec3/create": 19
        }],
        89: [function(t, e) {
            "use strict";

            function i(t, e, i) {
                var r = t.createShader(e);
                if (t.shaderSource(r, i), t.compileShader(r), !t.getShaderParameter(r, t.COMPILE_STATUS)) throw t.getShaderInfoLog(r);
                return r
            }

            function r(t, e, r, n, o) {
                var s = i(t, t.VERTEX_SHADER, e),
                    a = i(t, t.FRAGMENT_SHADER, r),
                    h = t.createProgram();
                if (t.attachShader(h, s), t.attachShader(h, a), t.linkProgram(h), !t.getProgramParameter(h, t.LINK_STATUS)) throw t.getProgramInfoLog(h);
                for (var l = 0; l < n.length; l++) {
                    var u = n[l];
                    h[u] = t.getAttribLocation(h, u), t.enableVertexAttribArray(h[u])
                }
                for (var c = 0; c < o.length; c++) {
                    var p = o[c];
                    h[p] = t.getUniformLocation(h, p)
                }
                return h
            }

            function n(t, e) {
                for (var i = t.getAttachedShaders(e), r = 0; r < i.length; r++) {
                    var n = i[r];
                    t.detachShader(e, n), t.deleteShader(n)
                }
                t.deleteProgram(e)
            }

            function o(t, e, i, r) {
                var n = t.createBuffer();
                return t.bindBuffer(e, n), t.bufferData(e, r, i), n
            }

            function s(t, e, i, r) {
                return {
                    vertexIndices: o(t, t.ELEMENT_ARRAY_BUFFER, t.STATIC_DRAW, new Uint16Array(e)),
                    vertexPositions: o(t, t.ARRAY_BUFFER, t.STATIC_DRAW, new Float32Array(i)),
                    textureCoords: o(t, t.ARRAY_BUFFER, t.STATIC_DRAW, new Float32Array(r))
                }
            }

            function a(t, e) {
                t.deleteBuffer(e.vertexIndices), t.deleteBuffer(e.vertexPositions), t.deleteBuffer(e.textureCoords)
            }

            function h(t, e, i) {
                t.activeTexture(t.TEXTURE0), t.bindTexture(t.TEXTURE_2D, i._texture), t.uniform1i(e.uSampler, 0)
            }

            function l(t, e, i, r) {
                var n = ((i + 1) * f - r) / (f * d);
                t.uniform1f(e.uDepth, n)
            }

            function u(t, e, i) {
                var r = w;
                e && null != e.opacity && (r = e.opacity), t.uniform1f(i.opacity, r);
                var n = x;
                e && e.colorOffset && (n = e.colorOffset), t.uniform4fv(i.colorOffset, n);
                var o = b;
                e && e.colorMatrix && (o = e.colorMatrix), t.uniformMatrix4fv(i.colorMatrix, !1, o)
            }

            function c(t, e, i, r) {
                var n = m();
                p(i, E, r), t.viewport(n * E.offsetX, n * E.offsetY, n * E.width, n * E.height)
            }

            function p(t, e, i) {
                var r = t.left,
                    n = t.totalWidth,
                    o = v(r, 0, n),
                    s = t.width - (o - r),
                    a = n - o,
                    h = v(s, 0, a);
                e.offsetX = o, e.width = h;
                var l = t.totalHeight - t.bottom,
                    u = t.totalHeight,
                    c = v(l, 0, u),
                    p = t.height - (c - l),
                    d = u - c,
                    f = v(p, 0, d);
                e.offsetY = c, e.height = f, C[0] = t.width / h, C[1] = t.height / f, C[2] = 1;
                var m = o - r,
                    _ = r + t.width,
                    y = o + h,
                    w = _ - y,
                    x = c - l,
                    b = l + t.height,
                    E = c + f,
                    M = b - E;
                T[0] = (w - m) / h, T[1] = (M - x) / f, T[2] = 0;
                var L = i;
                g.identity(L), g.translate(L, L, T), g.scale(L, L, C)
            }
            var d = 256,
                f = 256,
                m = t("../util/pixelRatio"),
                v = t("../util/clamp"),
                _ = {
                    create: t("gl-vec4/create")
                },
                y = {
                    create: t("gl-vec3/create")
                },
                g = {
                    create: t("gl-mat4/create"),
                    identity: t("gl-mat4/identity"),
                    translate: t("gl-mat4/translate"),
                    scale: t("gl-mat4/scale")
                },
                w = 1,
                x = _.create(),
                b = g.create();
            g.identity(b);
            var E = {},
                T = y.create(),
                C = y.create();
            e.exports = {
                createShaderProgram: r,
                destroyShaderProgram: n,
                createConstantBuffers: s,
                destroyConstantBuffers: a,
                setTexture: h,
                setDepth: l,
                setViewport: c,
                setupPixelEffectUniforms: u
            }
        }, {
            "../util/clamp": 115,
            "../util/pixelRatio": 132,
            "gl-mat4/create": 4,
            "gl-mat4/identity": 5,
            "gl-mat4/scale": 12,
            "gl-mat4/translate": 13,
            "gl-vec3/create": 19,
            "gl-vec4/create": 26
        }],
        90: [function(t, e) {
            "use strict";
            var i = t("./WebGlBase");
            e.exports = i
        }, {
            "./WebGlBase": 88
        }],
        91: [function(t, e) {
            "use strict";

            function i(t) {
                this.gl = t, this.pMatrix = g.create(), this.vccMatrix = g.create(), this.constantBuffers = n(this.gl, f, m, v), this.shaderProgram = o(this.gl, p, d, _, y)
            }
            var r = t("./WebGlCommon"),
                n = r.createConstantBuffers,
                o = r.createShaderProgram,
                s = r.setViewport,
                a = r.destroyConstantBuffers,
                h = r.destroyShaderProgram,
                l = r.setupPixelEffectUniforms,
                u = r.setDepth,
                c = r.setTexture,
                p = t("../shaders/vertexEquirect"),
                d = t("../shaders/fragmentEquirect"),
                f = [0, 1, 2, 0, 2, 3],
                m = [-1, -1, 0, 1, -1, 0, 1, 1, 0, -1, 1, 0],
                v = [0, 0, 1, 0, 1, 1, 0, 1],
                _ = ["aVertexPosition", "aTextureCoord"],
                y = ["uPInvMatrix", "uDepth", "vccMatrix", "uSampler", "uOpacity", "uWidth", "uHeight", "colorOffset", "colorMatrix", "textureX", "textureY", "textureWidth", "textureHeight"],
                g = {
                    create: t("gl-mat4/create"),
                    copy: t("gl-mat4/copy"),
                    invert: t("gl-mat4/invert")
                };
            i.prototype.destroy = function() {
                this.pMatrix = null, a(this.gl, this.constantBuffers), this.constantBuffers = null, h(this.gl, this.shaderProgram), this.shaderProgram = null, this.gl = null
            }, i.prototype.startLayer = function(t, e) {
                var i = this.gl,
                    r = this.shaderProgram,
                    n = this.constantBuffers,
                    o = this.pMatrix;
                i.useProgram(this.shaderProgram), s(i, t, e, this.vccMatrix), i.uniformMatrix4fv(r.vccMatrix, !1, this.vccMatrix), i.bindBuffer(i.ARRAY_BUFFER, n.vertexPositions), i.vertexAttribPointer(r.aVertexPosition, 3, i.FLOAT, i.FALSE, 0, 0), i.bindBuffer(i.ARRAY_BUFFER, n.textureCoords), i.vertexAttribPointer(r.aTextureCoord, 2, i.FLOAT, i.FALSE, 0, 0), g.copy(this.pMatrix, t.view().projection()), g.invert(o, o), i.uniformMatrix4fv(r.uPInvMatrix, !1, o), this.gl.uniform1f(this.shaderProgram.uWidth, e.width), this.gl.uniform1f(this.shaderProgram.uHeight, e.height);
                var a = t.effects().textureCrop || {},
                    h = null != a.x ? a.x : 0,
                    u = null != a.y ? a.y : 0,
                    c = null != a.width ? a.width : 1,
                    p = null != a.height ? a.height : 1;
                this.gl.uniform1f(this.shaderProgram.textureX, h), this.gl.uniform1f(this.shaderProgram.textureY, u), this.gl.uniform1f(this.shaderProgram.textureWidth, c), this.gl.uniform1f(this.shaderProgram.textureHeight, p), l(i, t.effects(), {
                    opacity: r.uOpacity,
                    colorOffset: r.colorOffset,
                    colorMatrix: r.colorMatrix
                })
            }, i.prototype.endLayer = function() {}, i.prototype.renderTile = function(t, e, i, r) {
                var n = this.gl,
                    o = this.shaderProgram,
                    s = this.constantBuffers;
                u(n, o, r, t.z), c(n, o, e), n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, s.vertexIndices), n.drawElements(n.TRIANGLES, f.length, n.UNSIGNED_SHORT, 0)
            }, e.exports = i
        }, {
            "../shaders/fragmentEquirect": 94,
            "../shaders/vertexEquirect": 96,
            "./WebGlCommon": 89,
            "gl-mat4/copy": 3,
            "gl-mat4/create": 4,
            "gl-mat4/invert": 6
        }],
        92: [function(t, e, i) {
            arguments[4][90][0].apply(i, arguments)
        }, {
            "./WebGlBase": 88,
            dup: 90
        }],
        93: [function(t, e) {
            "use strict";

            function i(t) {
                switch (t.type) {
                    case "webgl":
                        t.registerRenderer("flat", "flat", n), t.registerRenderer("cube", "rectilinear", r), t.registerRenderer("equirect", "rectilinear", o);
                        break;
                    case "css":
                        t.registerRenderer("flat", "flat", a), t.registerRenderer("cube", "rectilinear", s);
                        break;
                    case "flash":
                        t.registerRenderer("flat", "flat", l), t.registerRenderer("cube", "rectilinear", h);
                        break;
                    default:
                        throw new Error("Unknown stage type: " + t.type)
                }
            }
            var r = t("./WebGlCube"),
                n = t("./WebGlFlat"),
                o = t("./WebGlEquirect"),
                s = t("./CssCube"),
                a = t("./CssFlat"),
                h = t("./FlashCube"),
                l = t("./FlashFlat");
            e.exports = i
        }, {
            "./CssCube": 83,
            "./CssFlat": 84,
            "./FlashCube": 86,
            "./FlashFlat": 87,
            "./WebGlCube": 90,
            "./WebGlEquirect": 91,
            "./WebGlFlat": 92
        }],
        94: [function(t, e) {
            e.exports = "#ifdef GL_FRAGMENT_PRECISION_HIGH\nprecision highp float;\n#else\nprecision mediump float;\n#endif\n\nuniform sampler2D uSampler;\nuniform mat4 uPInvMatrix;\nuniform float uWidth;\nuniform float uHeight;\nuniform float uOpacity;\nvarying vec2 vTextureCoord;\nuniform vec4 colorOffset;\nuniform mat4 colorMatrix;\n\nuniform float textureX;\nuniform float textureY;\nuniform float textureWidth;\nuniform float textureHeight;\n\nconst float PI = 3.14159265358979323846264;\n\nvoid main(void) {\n  float x = 2.0 * vTextureCoord.x - 1.0;\n  float y = 2.0 * vTextureCoord.y - 1.0;\n  vec4 pos = uPInvMatrix * vec4(x, y, 1.0, 1.0);\n  float r = inversesqrt(pos.x * pos.x + pos.y * pos.y + pos.z * pos.z);\n  float phi  = acos(pos.y * r);\n  float theta = atan(pos.x, -pos.z);\n  float s = 0.5 + 0.5 * theta / PI;\n  float t = 1.0 - phi / PI;\n\n  s = s * textureWidth + textureX;\n  t = t * textureHeight + textureY;\n\n  vec4 color = texture2D(uSampler, vec2(s, t));\n  color = color * colorMatrix + colorOffset;\n  gl_FragColor = vec4(color.rgb * color.a * uOpacity, color.a * uOpacity);\n}\n"
        }, {}],
        95: [function(t, e) {
            e.exports = "#ifdef GL_FRAGMENT_PRECISION_HIGH\nprecision highp float;\n#else\nprecision mediump float;\n#endif\n\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform float uOpacity;\nuniform vec4 colorOffset;\nuniform mat4 colorMatrix;\n\nvoid main(void) {\n  vec4 color = texture2D(uSampler, vTextureCoord);\n  color = color * colorMatrix + colorOffset;\n  gl_FragColor = vec4(color.rgb * color.a * uOpacity, color.a * uOpacity);\n}\n"
        }, {}],
        96: [function(t, e) {
            e.exports = "attribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\nvarying vec2 vTextureCoord;\nuniform float uDepth;\nuniform mat4 vccMatrix;\n\nvoid main(void) {\n  gl_Position = vccMatrix * vec4(aVertexPosition.xy, uDepth, 1.0);\n  vTextureCoord = aTextureCoord;\n}\n"
        }, {}],
        97: [function(t, e) {
            e.exports = "attribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\nvarying vec2 vTextureCoord;\nuniform float uDepth;\nuniform mat4 vtMatrix;\nuniform mat4 vccMatrix;\n\nvoid main(void) {\n  gl_Position = vccMatrix * vtMatrix * vec4(aVertexPosition.xy, 0.0, 1.0);\n  gl_Position.z = uDepth * gl_Position.w;\n  vTextureCoord = aTextureCoord;\n}\n"
        }, {}],
        98: [function(t, e) {
            "use strict";

            function i(t, e) {
                e = e ? e : {}, this._loadPool = new o({
                    concurrency: e.concurrency || c
                }), this._retryDelay = e.retryDelay || p, this._retryMap = {}, this._sourceFromTile = t
            }

            function r(t) {
                var e = "\\{(" + t + ")\\}";
                return new RegExp(e, "g")
            }
            var n = t("../NetworkError"),
                o = t("../collections/WorkPool"),
                s = t("../util/chain"),
                a = t("../util/delay"),
                h = t("../util/clock"),
                l = {
                    x: "x",
                    y: "y",
                    z: "z",
                    f: "face"
                },
                u = "bdflru",
                c = 4,
                p = 1e4;
            i.prototype.loadAsset = function(t, e, i) {
                var r, o = this,
                    l = this._retryDelay,
                    u = this._retryMap,
                    c = this._sourceFromTile(e),
                    p = c.url,
                    d = c.rect,
                    f = t.loadImage.bind(t, p, d),
                    m = function(t) {
                        return o._loadPool.push(f, function(i, r) {
                            i ? (i instanceof n && (u[p] = h()), t(i, e)) : (delete u[p], t(null, e, r))
                        })
                    },
                    v = u[p];
                if (null != v) {
                    var _ = h(),
                        y = _ - v;
                    l > y ? r = l - y : (r = 0, delete u[p])
                }
                var g = a.bind(null, r);
                return s(g, m)(i)
            }, i.fromString = function(t, e) {
                function n(e) {
                    var i = t;
                    for (var n in l) {
                        var o = r(n),
                            s = e[l[n]];
                        i = i.replace(o, s)
                    }
                    return {
                        url: i
                    }
                }

                function o(t) {
                    return 0 === t.z ? s(t) : n(t)
                }

                function s(t) {
                    var i = a.indexOf(t.face) / 6;
                    return {
                        url: e.cubeMapPreviewUrl,
                        rect: {
                            x: 0,
                            y: i,
                            width: 1,
                            height: 1 / 6
                        }
                    }
                }
                e = e || {};
                var a = e && e.cubeMapPreviewFaceOrder || u,
                    h = e.cubeMapPreviewUrl ? o : n;
                return new i(h)
            }, i.stringHasFace = function(t) {
                return i.stringHasProperty(t, "f")
            }, i.stringHasX = function(t) {
                return i.stringHasProperty(t, "x")
            }, i.stringHasY = function(t) {
                return i.stringHasProperty(t, "y")
            }, i.stringHasLevel = function(t) {
                return i.stringHasProperty(t, "z")
            }, i.stringHasProperty = function(t, e) {
                return !!t.match(r(e))
            }, e.exports = i
        }, {
            "../NetworkError": 36,
            "../collections/WorkPool": 55,
            "../util/chain": 114,
            "../util/clock": 116,
            "../util/delay": 124
        }],
        99: [function(t, e) {
            "use strict";

            function i(t) {
                this._asset = t
            }
            i.prototype.asset = function() {
                return this._asset
            }, i.prototype.loadAsset = function(t, e, i) {
                function r() {
                    clearTimeout(o), i.apply(null, arguments)
                }
                var n = this,
                    o = setTimeout(function() {
                        i(null, e, n._asset)
                    }, 0);
                return r
            }, e.exports = i
        }, {}],
        100: [function(t, e) {
            "use strict";

            function i(t) {
                this.constructor.super_.call(this, t), this._domElement = document.createElement("div"), a.setAbsolute(this._domElement), a.setFullSize(this._domElement)
            }

            function r(t, e, i) {
                var r = document.createElement("canvas");
                a.setAbsolute(r), a.setNullTransformOrigin(r), this._canvas = r, this._timestamp = null, this.refresh(e, i)
            }
            var n = t("./Stage"),
                o = t("../support/Css"),
                s = t("../util/inherits"),
                a = t("../domUtil"),
                h = t("bowser").browser,
                l = t("./loadImageHtml"),
                u = {
                    padSize: h.ios ? 0 : 3,
                    reverseLevelDepth: h.ios,
                    useNullTransform: h.ios,
                    perspectiveNudge: h.webkit || h.gecko ? .001 : 0
                };
            s(i, n), i.prototype.destroy = function() {
                this.constructor.super_.prototype.destroy.call(this), this._domElement = null
            }, i.supported = function() {
                return o()
            }, i.prototype._updateSize = function() {
                var t = this._domElement,
                    e = this._width,
                    i = this._height;
                a.setPixelSize(t, e, i)
            }, i.prototype.loadImage = l, i.prototype._validateLayer = function() {}, i.prototype.createRenderer = function(t) {
                return new t(this._domElement, u)
            }, i.prototype.destroyRenderer = function(t) {
                t.destroy()
            }, i.prototype.startFrame = function() {}, i.prototype.endFrame = function() {}, i.type = i.prototype.type = "css", r.prototype.refresh = function(t, e) {
                var i = e.timestamp();
                if (i !== this._timestamp) {
                    this._timestamp = i;
                    var r = this._canvas,
                        n = r.getContext("2d"),
                        o = e.element(),
                        s = t.width(),
                        a = t.height(),
                        h = u.padSize,
                        l = t.padTop() ? h : 0,
                        c = t.padBottom() ? h : 0,
                        p = t.padLeft() ? h : 0,
                        d = t.padRight() ? h : 0;
                    r.width = p + s + d, r.height = l + a + c, n.drawImage(o, p, l, s, a);
                    var f;
                    for (f = 0; l > f; f++) n.drawImage(r, p, l, s, 1, p, f, s, 1);
                    for (f = 0; p > f; f++) n.drawImage(r, p, l, 1, a, f, l, 1, a);
                    for (f = 0; c > f; f++) n.drawImage(r, p, l + a - 1, s, 1, p, l + a + f, s, 1);
                    for (f = 0; d > f; f++) n.drawImage(r, p + s - 1, l, 1, a, p + s + f, l, 1, a)
                }
            }, r.prototype.destroy = function() {
                this._canvas = null, this._timestamp = null
            }, i.TextureClass = i.prototype.TextureClass = r, e.exports = i
        }, {
            "../domUtil": 73,
            "../support/Css": 107,
            "../util/inherits": 127,
            "./Stage": 103,
            "./loadImageHtml": 106,
            bowser: 1
        }],
        101: [function(t, e) {
            "use strict";

            function i() {
                return window[m].__next++
            }

            function r(t) {
                this.constructor.super_.call(this, t), this._wmode = t && t.wmode || f, this._swfPath = t && t.swfPath || d, this._flashStageId = i(), this._callbacksObj = window[m][this._flashStageId] = {}, this._stageCallbacksObjVarName = m + "[" + this._flashStageId + "]", this._callbackListeners = {};
                for (var e = 0; e < v.length; e++) this._callbacksObj[v[e]] = this._callListeners(v[e]);
                this._loadImageQueue = new h, this._loadImageQueue.pause(), this._flashReady = !1, this._nextLayerId = 0;
                var r = n(this._swfPath, this._flashStageId, this._stageCallbacksObjVarName);
                this._domElement = r.root, this._blockingElement = r.blocking, this._flashElement = r.flash, this._checkReadyTimer = setInterval(this._checkReady.bind(this), 50)
            }

            function n(t, e, i) {
                var r = document.createElement("div");
                c.setAbsolute(r), c.setFullSize(r);
                var n = "marzipano-flash-stage-" + e,
                    o = '<object id="' + n + '" name="' + n + '" type="application/x-shockwave-flash" data="' + t + '">',
                    s = "";
                s += '<param name="movie" value="' + t + '" />', s += '<param name="allowscriptaccess" value="always" />', s += '<param name="flashvars" value="callbacksObjName=' + i + '" />', s += '<param name="wmode" value="transparent" />', o += s, o += "</object>";
                var a = document.createElement("div");
                a.innerHTML = o;
                var h = a.firstChild;
                c.setAbsolute(h), c.setFullSize(h), r.appendChild(h);
                var l = document.createElement("div");
                return c.setAbsolute(l), c.setFullSize(l), c.setBlocking(l), r.appendChild(l), {
                    root: r,
                    flash: h,
                    blocking: l
                }
            }

            function o(t, e, i) {
                var r = i.element(),
                    n = e.width(),
                    o = e.height(),
                    s = _.padSize,
                    a = e.padTop() ? s : 0,
                    h = e.padBottom() ? s : 0,
                    l = e.padLeft() ? s : 0,
                    u = e.padRight() ? s : 0,
                    c = t._flashElement.createTexture(r, n, o, a, h, l, u);
                this._stage = t, this._textureId = c
            }
            var s = t("./Stage"),
                a = t("../support/Flash"),
                h = t("../collections/WorkQueue"),
                l = t("../util/inherits"),
                u = t("../util/defer"),
                c = t("../domUtil"),
                p = t("./loadImageFlash"),
                d = "marzipano.swf",
                f = "transparent",
                m = "MarzipanoFlashCallbackMap";
            m in window || (window[m] = {
                __next: 0
            });
            var v = ["imageLoaded"],
                _ = {
                    padSize: 3
                };
            l(r, s), r.prototype.destroy = function() {
                this.constructor.super_.prototype.destroy.call(this), this._domElement = null, this._blockingElement = null, this._flashElement = null, window[m][this._flashStageId] = null, this._callbacksObj = null, this._loadImageQueue = null, clearInterval(this._checkReadyTimer)
            }, r.supported = function() {
                return a()
            }, r.prototype._updateSize = function() {
                var t = this._domElement,
                    e = this._width,
                    i = this._height;
                c.setPixelSize(t, e, i)
            }, r.prototype.loadImage = function(t, e, i) {
                var r = p.bind(null, this, t, e);
                return this._loadImageQueue.push(r, i)
            }, r.prototype._validateLayer = function() {}, r.prototype._onCallback = function(t, e) {
                this._callbackListeners[t] = this._callbackListeners[t] || [], this._callbackListeners[t].push(e)
            }, r.prototype._offCallback = function(t, e) {
                var i = this._callbackListeners[t] || [],
                    r = i.indexOf(e);
                r >= 0 && i.splice(r, 1)
            }, r.prototype._callListeners = function(t) {
                var e = this;
                return function() {
                    for (var i = e._callbackListeners[t] || [], r = 0; r < i.length; r++) {
                        var n = i[r];
                        u(n, arguments)
                    }
                }
            }, r.prototype._checkReady = function() {
                var t = this._flashElement.isReady;
                return t && t() ? (this._flashReady = !0, clearTimeout(this._checkReadyTimer), this._loadImageQueue.resume(), this.emitRenderInvalid(), !0) : !1
            }, r.prototype.createRenderer = function(t) {
                return new t(this._flashElement, ++this._nextLayerId, _)
            }, r.prototype.destroyRenderer = function(t) {
                t.destroy()
            }, r.prototype.startFrame = function() {}, r.prototype.endFrame = function() {}, r.type = r.prototype.type = "flash", o.prototype.refresh = function() {}, o.prototype.destroy = function() {
                var t = this._textureId,
                    e = this._stage;
                e._flashElement.destroyTexture(t), this._stage = null, this._textureId = null
            }, r.TextureClass = r.prototype.TextureClass = o, e.exports = r
        }, {
            "../collections/WorkQueue": 56,
            "../domUtil": 73,
            "../support/Flash": 108,
            "../util/defer": 122,
            "../util/inherits": 127,
            "./Stage": 103,
            "./loadImageFlash": 105
        }],
        102: [function(t, e) {
            "use strict";

            function i() {
                this._renderers = {}
            }
            i.prototype.set = function(t, e, i) {
                this._renderers[t] || (this._renderers[t] = {}), this._renderers[t][e] = i
            }, i.prototype.get = function(t, e) {
                var i = this._renderers[t] && this._renderers[t][e];
                return i || null
            }, e.exports = i
        }, {}],
        103: [function(t, e) {
            "use strict";

            function i(t, e) {
                return -t.cmp(e)
            }

            function r() {
                this._domElement = null, this._layers = [], this._renderers = [], this._visibleTiles = [], this._fallbackTiles = {
                    children: [],
                    parents: []
                }, this._tmpTiles = [], this._width = null, this._height = null, this._rect = {}, this._createTextureWorkQueue = new o({
                    delay: u
                }), this.emitRenderInvalid = this.emitRenderInvalid.bind(this), this._rendererRegistry = new l
            }
            var n = t("minimal-event-emitter"),
                o = t("../collections/WorkQueue"),
                s = t("../calcRect"),
                a = t("../util/async"),
                h = t("../util/cancelize"),
                l = t("./RendererRegistry"),
                u = 20;
            n(r), r.prototype.destroy = function() {
                this.removeAllLayers(), this._layers = null, this._renderers = null, this._visibleTiles = null, this._fallbackTiles = null, this._tmpTiles = null, this._width = null, this._height = null, this._createTextureWorkQueue = null, this.emitRenderInvalid = null, this._rendererRegistry = null
            }, r.prototype.registerRenderer = function(t, e, i) {
                return this._rendererRegistry.set(t, e, i)
            }, r.prototype.domElement = function() {
                return this._domElement
            }, r.prototype.size = function(t) {
                return t = t || {}, t.width = this._width, t.height = this._height, t
            }, r.prototype.width = function() {
                return this._width
            }, r.prototype.height = function() {
                return this._height
            }, r.prototype.updateSize = function() {
                this._width = this._domElement.parentElement.clientWidth, this._height = this._domElement.parentElement.clientHeight, this._updateSize(), this.emit("resize"), this.emitRenderInvalid()
            }, r.prototype.emitRenderInvalid = function() {
                this.emit("renderInvalid")
            }, r.prototype.addLayer = function(t) {
                if (this._layers.indexOf(t) >= 0) throw new Error("Layer already in stage");
                this._validateLayer(t), this._layers.push(t), this._renderers.push(null), t.addEventListener("viewChange", this.emitRenderInvalid), t.addEventListener("effectsChange", this.emitRenderInvalid), t.addEventListener("fixedLevelChange", this.emitRenderInvalid), t.addEventListener("textureStoreChange", this.emitRenderInvalid), this.emitRenderInvalid()
            }, r.prototype.removeLayer = function(t) {
                var e = this._layers.indexOf(t);
                if (0 > e) throw new Error("No such layer in stage");
                var i = this._layers.splice(e, 1)[0],
                    r = this._renderers.splice(e, 1)[0];
                r && this.destroyRenderer(r), i.removeEventListener("viewChange", this.emitRenderInvalid), i.removeEventListener("effectsChange", this.emitRenderInvalid), i.removeEventListener("fixedLevelChange", this.emitRenderInvalid), i.removeEventListener("textureStoreChange", this.emitRenderInvalid), this.emitRenderInvalid()
            }, r.prototype.removeAllLayers = function() {
                for (; this._layers.length > 0;) this.removeLayer(this._layers[0])
            }, r.prototype.listLayers = function() {
                return [].concat(this._layers)
            }, r.prototype.hasLayer = function(t) {
                return this._layers.indexOf(t) >= 0
            }, r.prototype.moveLayerToIndex = function(t, e) {
                var i = this._layers.indexOf(t);
                if (0 > i) throw new Error("No such layer in stage");
                var t = this._layers.splice(i, 1)[0],
                    r = this._renderers.splice(i, 1)[0];
                this._layers.splice(e, 0, t), this._renderers.splice(e, 0, r), this.emitRenderInvalid()
            }, r.prototype.render = function() {
                var t, e = this._visibleTiles,
                    r = this._fallbackTiles,
                    n = this._width,
                    o = this._height,
                    a = this._rect;
                if (!(0 >= n || 0 >= o)) {
                    for (this.startFrame(), t = 0; t < this._layers.length; t++) this._layers[t].textureStore().startFrame();
                    for (t = 0; t < this._layers.length; t++) {
                        var h = this._layers[t],
                            l = h.effects(),
                            u = h.view(),
                            c = this._updateRenderer(t),
                            p = this._layers.length - t,
                            d = h.textureStore();
                        s(n, o, l && l.rect, a), a.width <= 0 || a.height <= 0 || (u.setSize(a), e.length = 0, h.visibleTiles(e), c.startLayer(h, a), r.children.length = 0, r.parents.length = 0, this._renderTiles(e, d, c, h, p, !0), this._renderTiles(r.children, d, c, h, p, !1), r.parents.sort(i), this._renderTiles(r.parents, d, c, h, p, !1), c.endLayer(h, a))
                    }
                    for (t = 0; t < this._layers.length; t++) this._layers[t].textureStore().endFrame();
                    this.endFrame()
                }
            }, r.prototype._updateRenderer = function(t) {
                var e = this._layers[t],
                    i = this.type,
                    r = e.geometry().type,
                    n = e.view().type,
                    o = this._rendererRegistry.get(r, n);
                if (!o) throw new Error("No " + i + " renderer avaiable for " + r + " geometry and " + n + " view");
                var s = this._renderers[t];
                return s ? s instanceof o || (this._renderers[t] = this.createRenderer(o), this.destroyRenderer(s)) : this._renderers[t] = this.createRenderer(o), this._renderers[t]
            }, r.prototype._renderTiles = function(t, e, i, r, n, o) {
                for (var s = 0; s < t.length; s++) {
                    var a = t[s];
                    e.texture(a) ? i.renderTile(a, e.texture(a), r, n, s) : o && this._fallback(a, e), e.markTile(a)
                }
            }, r.prototype._fallback = function(t, e) {
                return this._childrenFallback(t, e) || this._parentFallback(t, e)
            }, r.prototype._parentFallback = function(t, e) {
                for (var i = this._fallbackTiles.parents; null != (t = t.parent());)
                    if (t && e.texture(t)) {
                        for (var r = 0; r < i.length; r++)
                            if (t.equals(i[r])) return !0;
                        return i.push(t), !0
                    }
                return !1
            }, r.prototype._childrenFallback = function(t, e) {
                var i = this._fallbackTiles.children,
                    r = this._tmpTiles;
                if (r.length = 0, !t.children(r)) return !1;
                if (1 === r.length && !e.texture(r[0])) return this._childrenFallback(r[0], e, i);
                for (var n = !1, o = 0; o < r.length; o++) e.texture(r[o]) ? i.push(r[o]) : n = !0;
                return !n
            }, r.prototype.createTexture = function(t, e, i) {
                function r() {
                    return new n.TextureClass(n, t, e)
                }
                var n = this,
                    o = h(a(r));
                return this._createTextureWorkQueue.push(o, function(r, n) {
                    i(r, t, e, n)
                })
            }, e.exports = r
        }, {
            "../calcRect": 49,
            "../collections/WorkQueue": 56,
            "../util/async": 112,
            "../util/cancelize": 113,
            "./RendererRegistry": 102,
            "minimal-event-emitter": 31
        }],
        104: [function(t, e) {
            "use strict";

            function i(t, e) {
                var i = {
                    alpha: !0,
                    preserveDrawingBuffer: e && e.preserveDrawingBuffer
                };
                m && "undefined" != typeof WebGLDebugUtils && (console.log("Using WebGL lost context simulator"), t = WebGLDebugUtils.makeLostContextSimulatingCanvas(t));
                var r = t.getContext && (t.getContext("webgl", i) || t.getContext("experimental-webgl", i));
                if (!r) throw new Error("Could not get WebGL context");
                return m && "undefined" != typeof WebGLDebugUtils && (r = WebGLDebugUtils.makeDebugContext(r), console.log("Using WebGL debug context")), r
            }

            function r(t) {
                function e(t, e) {
                    return t === e
                }

                function r(t) {
                    return d(t.toString())
                }
                t = t || {};
                var n = this;
                this.constructor.super_.call(this, t), this._mipmapping = null != t.mipmapping ? t.mipmapping : !1, this._useTexSubImage2D = null != t.useTexSubImage2D ? t.useTexSubImage2D : !0, this._domElement = document.createElement("canvas"), h.setAbsolute(this._domElement), h.setFullSize(this._domElement), this._gl = i(this._domElement, t), this._blendFuncStrings = t.blendFunc || ["ONE", "ONE_MINUS_SRC_ALPHA"], this._handleContextLoss = function() {
                    n.emit("webglcontextlost"), n._gl = null
                }, this._domElement.addEventListener("webglcontextlost", this._handleContextLoss), this._rendererInstances = new a(e, r)
            }

            function n(t, e, i) {
                this._stage = t, this._gl = t._gl, this._texture = null, this._timestamp = null, this._width = this._height = null, this.refresh(e, i)
            }
            var o = t("./Stage"),
                s = t("../support/WebGl"),
                a = t("../collections/Map"),
                h = t("../domUtil"),
                l = t("./loadImageHtml"),
                u = t("../util/inherits"),
                c = t("../util/defer"),
                p = t("../util/pixelRatio"),
                d = t("../util/hash"),
                f = t("../util/ispot"),
                m = "undefined" != typeof MARZIPANODEBUG && MARZIPANODEBUG.webGl;
            u(r, o), r.prototype.destroy = function() {
                this.constructor.super_.prototype.destroy.call(this), this._domElement.removeEventListener("webglcontextlost", this._handleContextLoss), this._domElement = null, this._rendererInstances = null, this._gl = null
            }, r.supported = function() {
                return s()
            }, r.prototype.webGlContext = function() {
                return this._gl
            }, r.prototype._updateSize = function() {
                var t = this._domElement,
                    e = this._width,
                    i = this._height,
                    r = p();
                this._domElement.width = r * e, this._domElement.height = r * i, c(h.setPixelSize.bind(null, t, e, i))
            }, r.prototype.loadImage = l, r.prototype.maxTextureSize = function() {
                return this._gl.getParameter(this._gl.MAX_TEXTURE_SIZE)
            }, r.prototype._validateLayer = function(t) {
                var e = t.geometry().maxTileSize(),
                    i = this.maxTextureSize();
                if (e > i) throw new Error("Layer has level with tile size larger than maximum texture size (" + e + " vs. " + i + ")")
            }, r.prototype.createRenderer = function(t) {
                if (this._rendererInstances.has(t)) return this._rendererInstances.get(t);
                var e = new t(this._gl);
                return this._rendererInstances.set(t, e), e
            }, r.prototype.destroyRenderer = function(t) {
                this._renderers.indexOf(t) < 0 && (t.destroy(), this._rendererInstances.del(t.constructor))
            }, r.prototype.startFrame = function() {
                var t = this._gl;
                if (!t) throw new Error("Bad WebGL context - maybe context was lost?");
                var e = this._width,
                    i = this._height,
                    r = p();
                t.viewport(0, 0, r * e, r * i), t.clearColor(0, 0, 0, 0), t.clear(t.COLOR_BUFFER_BIT | t.DEPTH_BUFFER_BIT), t.enable(t.DEPTH_TEST), t.enable(t.BLEND), t.blendFunc(t[this._blendFuncStrings[0]], t[this._blendFuncStrings[1]])
            }, r.prototype.endFrame = function() {}, r.type = r.prototype.type = "webgl", n.prototype.refresh = function(t, e) {
                var i, r = this._gl,
                    n = this._stage,
                    o = e.timestamp();
                if (o !== this._timestamp) {
                    var s = e.element(),
                        a = e.width(),
                        h = e.height();
                    if (a !== this._width || h !== this._height) {
                        var l = n.maxTextureSize();
                        if (a > l) throw new Error("Texture width larger than max size (" + a + " vs. " + l + ")");
                        if (h > l) throw new Error("Texture height larger than max size (" + h + " vs. " + l + ")");
                        this._texture && r.deleteTexture(i), i = this._texture = r.createTexture(), r.bindTexture(r.TEXTURE_2D, i), r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, !0), r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, r.RGBA, r.UNSIGNED_BYTE, s)
                    } else i = this._texture, r.bindTexture(r.TEXTURE_2D, i), r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, !0), n._useTexSubImage2D ? r.texSubImage2D(r.TEXTURE_2D, 0, 0, 0, r.RGBA, r.UNSIGNED_BYTE, s) : r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, r.RGBA, r.UNSIGNED_BYTE, s);
                    var u = f(a) && f(h) && !t.disableMipmapping && !e.disableMipmapping && n._mipmapping;
                    u ? (r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAG_FILTER, r.LINEAR), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.LINEAR_MIPMAP_LINEAR), r.generateMipmap(r.TEXTURE_2D)) : (r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAG_FILTER, r.LINEAR), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.LINEAR)), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE), r.bindTexture(r.TEXTURE_2D, null), this._timestamp = o, this._width = a, this._height = h
                }
            }, n.prototype.destroy = function() {
                var t = this._texture,
                    e = this._gl;
                t && e.deleteTexture(t), this._stage = null, this._gl = null, this._texture = null, this._timestamp = null, this._width = this._height = null
            }, r.TextureClass = r.prototype.TextureClass = n, e.exports = r
        }, {
            "../collections/Map": 53,
            "../domUtil": 73,
            "../support/WebGl": 109,
            "../util/defer": 122,
            "../util/hash": 126,
            "../util/inherits": 127,
            "../util/ispot": 128,
            "../util/pixelRatio": 132,
            "./Stage": 103,
            "./loadImageHtml": 106
        }],
        105: [function(t, e) {
            "use strict";

            function i(t, e, i, s) {
                function a(i, n) {
                    n === f && (t._offCallback("imageLoaded", a), i ? s(new r("Network error: " + e)) : s(null, new o(l, f)))
                }

                function h() {
                    l.cancelImage(f), t._offCallback("imageLoaded", a), s.apply(null, arguments)
                }
                var l = t._flashElement,
                    u = i && i.x || 0,
                    c = i && i.y || 0,
                    p = i && i.width || 1,
                    d = i && i.height || 1,
                    f = l.loadImage(e, p, d, u, c);
                return s = n(s), t._onCallback("imageLoaded", a), h
            }
            var r = t("../NetworkError"),
                n = t("../util/once"),
                o = t("../assets/FlashImage");
            e.exports = i
        }, {
            "../NetworkError": 36,
            "../assets/FlashImage": 44,
            "../util/once": 131
        }],
        106: [function(t, e) {
            "use strict";

            function i(t, e, i) {
                function a() {
                    h.onload = h.onerror = null, h.src = "", i.apply(null, arguments)
                }
                var h = new Image;
                h.crossOrigin = "anonymous";
                var l = e && e.x || 0,
                    u = e && e.y || 0,
                    c = e && e.width || 1,
                    p = e && e.height || 1;
                return i = n(i), h.onload = function() {
                    if (0 === l && 0 === u && 1 === c && 1 === p) i(null, new o(h));
                    else {
                        l *= h.naturalWidth, u *= h.naturalHeight, c *= h.naturalWidth, p *= h.naturalHeight;
                        var t = document.createElement("canvas");
                        t.width = c, t.height = p;
                        var e = t.getContext("2d");
                        e.drawImage(h, l, u, c, p, 0, 0, c, p), i(null, new s(t))
                    }
                }, h.onerror = function() {
                    i(new r("Network error: " + t))
                }, h.src = t, a
            }
            var r = t("../NetworkError"),
                n = t("../util/once"),
                o = t("../assets/StaticImage"),
                s = t("../assets/StaticCanvas");
            e.exports = i
        }, {
            "../NetworkError": 36,
            "../assets/StaticCanvas": 45,
            "../assets/StaticImage": 46,
            "../util/once": 131
        }],
        107: [function(t, e) {
            "use strict";

            function i() {
                var t = o("perspective"),
                    e = document.createElement("div"),
                    i = "undefined" != typeof e.style[t];
                if (i && "WebkitPerspective" === t) {
                    var r = "__testCssSupport__",
                        n = document.createElement("style");
                    n.textContent = "@media(-webkit-transform-3d){#" + r + "{height: 3px;})", document.getElementsByTagName("head")[0].appendChild(n), e.id = r, document.body.appendChild(e), i = e.offsetHeight > 0, n.parentNode.removeChild(n), e.parentNode.removeChild(e)
                }
                return i
            }

            function r() {
                return void 0 !== n ? n : n = i()
            }
            var n, o = t("../domUtil").prefixProperty;
            e.exports = r
        }, {
            "../domUtil": 73
        }],
        108: [function(t, e) {
            "use strict";

            function i() {
                var t = null,
                    e = navigator.plugins,
                    i = navigator.mimeTypes,
                    r = null;
                if (e && e["Shockwave Flash"] && i && i["application/x-shockwave-flash"] && i["application/x-shockwave-flash"].enabledPlugin) r = e["Shockwave Flash"].description, r = r.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), t = [0, 0, 0], t[0] = parseInt(r.replace(/^(.*)\..*$/, "$1"), 10), t[1] = parseInt(r.replace(/^.*\.(.*)\s.*$/, "$1"), 10), t[2] = /[a-zA-Z]/.test(r) ? parseInt(r.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0;
                else if (window.ActiveXObject) try {
                    var n = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                    n && (r = n.GetVariable("$version")) && (r = r.split(" ")[1].split(","), t = [parseInt(r[0], 10), parseInt(r[1], 10), parseInt(r[2], 10)])
                } catch (o) {}
                return t
            }

            function r() {
                var t = i();
                return t && (t[0] >= 11 || 10 === t[0] && t[1] >= 1)
            }

            function n() {
                return void 0 !== o ? o : o = r()
            }
            var o;
            e.exports = n
        }, {}],
        109: [function(t, e) {
            "use strict";

            function i() {
                var t = document.createElement("canvas"),
                    e = t.getContext && (t.getContext("webgl") || t.getContext("experimental-webgl"));
                return !!e
            }

            function r() {
                return void 0 !== n ? n : n = i()
            }
            var n;
            e.exports = r
        }, {}],
        110: [function(t, e) {
            "use strict";

            function i() {
                var t = document.createElement("a").style;
                t.cssText = "pointer-events:auto";
                var e = "auto" === t.pointerEvents,
                    i = o.msie && parseFloat(o.version) < 11;
                return e && !i
            }

            function r() {
                return void 0 !== n ? n : n = i()
            }
            var n, o = t("bowser").browser;
            e.exports = r
        }, {
            bowser: 1
        }],
        111: [function(t, e) {
            "use strict";

            function i() {
                try {
                    return !!r()
                } catch (t) {
                    return !1
                }
            }
            var r = t("./chooseBestStage");
            e.exports = i
        }, {
            "./chooseBestStage": 50
        }],
        112: [function(t, e) {
            "use strict";

            function i(t) {
                return function(e) {
                    var i, r;
                    try {
                        r = t()
                    } catch (n) {
                        i = n
                    } finally {
                        e(i || null, i ? null : r)
                    }
                }
            }
            e.exports = i
        }, {}],
        113: [function(t, e) {
            "use strict";

            function i(t) {
                return function() {
                    function e() {
                        n.apply(null, arguments)
                    }
                    if (!arguments.length) throw new Error("cancelized: expected at least one argument");
                    var i = Array.prototype.slice.call(arguments, 0),
                        n = i[i.length - 1] = r(i[i.length - 1]);
                    return t.apply(null, i), e
                }
            }
            var r = t("./once");
            e.exports = i
        }, {
            "./once": 131
        }],
        114: [function(t, e) {
            "use strict";

            function i() {
                var t = Array.prototype.slice.call(arguments, 0);
                return function() {
                    function e() {
                        var t = arguments[0];
                        if (t) return o = s = null, void h.apply(null, arguments);
                        if (!n.length) return o = s = null, void h.apply(null, arguments);
                        o = n.shift();
                        var i = o,
                            r = Array.prototype.slice.call(arguments, 1);
                        r.push(e);
                        var a = o.apply(null, r);
                        if (i === o) {
                            if ("function" != typeof a) throw new Error("chain: chaining on non-cancellable function");
                            s = a
                        }
                    }

                    function i() {
                        s && s.apply(null, arguments)
                    }
                    var n = t.slice(0),
                        o = null,
                        s = null,
                        a = arguments.length ? Array.prototype.slice.call(arguments, 0, arguments.length - 1) : [],
                        h = arguments.length ? arguments[arguments.length - 1] : r;
                    return a.unshift(null), e.apply(null, a), i
                }
            }
            var r = t("./noop");
            e.exports = i
        }, {
            "./noop": 130
        }],
        115: [function(t, e) {
            "use strict";

            function i(t, e, i) {
                return Math.min(Math.max(t, e), i)
            }
            e.exports = i
        }, {}],
        116: [function(t, e) {
            "use strict";

            function i() {
                return window.performance && window.performance.now ? function() {
                    return window.performance.now()
                } : null
            }

            function r() {
                return function() {
                    return Date.now()
                }
            }
            var n = i() || r();
            e.exports = n
        }, {}],
        117: [function(t, e) {
            "use strict";

            function i(t, e) {
                return e > t ? -1 : t > e ? 1 : 0
            }
            e.exports = i
        }, {}],
        118: [function(t, e) {
            "use strict";

            function i() {
                var t = arguments;
                return function(e) {
                    for (var i = e, r = 0; r < t.length; r++) {
                        var n = t[r];
                        i = n.call(null, i)
                    }
                    return i
                }
            }
            e.exports = i
        }, {}],
        119: [function(t, e) {
            "use strict";

            function i(t, e, i) {
                return 2 * Math.atan(i * Math.tan(t / 2) / e)
            }

            function r(t, e, r) {
                return i(t, e, r)
            }

            function n(t, e, r) {
                return i(t, e, Math.sqrt(e * e + r * r))
            }

            function o(t, e, r) {
                return i(t, r, e)
            }

            function s(t, e, r) {
                return i(t, r, Math.sqrt(e * e + r * r))
            }

            function a(t, e, r) {
                return i(t, Math.sqrt(e * e + r * r), e)
            }

            function h(t, e, r) {
                return i(t, Math.sqrt(e * e + r * r), r)
            }
            e.exports = {
                convert: i,
                htov: r,
                htod: n,
                vtoh: o,
                vtod: s,
                dtoh: a,
                dtov: h
            }
        }, {}],
        120: [function(t, e) {
            "use strict";

            function i(t) {
                return t.toPrecision(15)
            }
            e.exports = i
        }, {}],
        121: [function(t, e) {
            "use strict";

            function i(t, e) {
                for (var i in e) i in t || (t[i] = e[i]);
                return t
            }
            e.exports = i
        }, {}],
        122: [function(t, e) {
            "use strict";

            function i(t, e) {
                function i() {
                    e && e.length > 0 ? t.apply(null, e) : t()
                }
                setTimeout(i, 0)
            }
            e.exports = i
        }, {}],
        123: [function(t, e) {
            "use strict";

            function i(t) {
                return t * Math.PI / 180
            }
            e.exports = i
        }, {}],
        124: [function(t, e) {
            "use strict";

            function i(t, e) {
                function i() {
                    null != n && (n = null, e(null))
                }

                function r() {
                    null != n && (clearTimeout(n), n = null, e.apply(null, arguments))
                }
                var n = null;
                return n = setTimeout(i, t), r
            }
            e.exports = i
        }, {}],
        125: [function(t, e) {
            "use strict";

            function i(t, e) {
                for (var i in e) t[i] = e[i];
                return t
            }
            e.exports = i
        }, {}],
        126: [function(t, e) {
            "use strict";

            function i() {
                for (var t = 0, e = 0; e < arguments.length; e++) {
                    var i = arguments[e];
                    t += i, t += i << 10, t ^= i >> 6
                }
                return t += t << 3, t ^= t >> 11, t += t << 15, t >= 0 ? t : -t
            }
            e.exports = i
        }, {}],
        127: [function(t, e) {
            "use strict";

            function i(t, e) {
                t.super_ = e;
                var i = function() {};
                i.prototype = e.prototype, t.prototype = new i, t.prototype.constructor = t
            }
            e.exports = i
        }, {}],
        128: [function(t, e) {
            "use strict";

            function i(t) {
                return 0 === (t & t - 1)
            }
            e.exports = i
        }, {}],
        129: [function(t, e) {
            "use strict";

            function i(t, e) {
                return (+t % (e = +e) + e) % e
            }
            e.exports = i
        }, {}],
        130: [function(t, e) {
            "use strict";

            function i() {}
            e.exports = i
        }, {}],
        131: [function(t, e) {
            "use strict";

            function i(t) {
                var e, i = !1;
                return function() {
                    return i || (i = !0, e = t.apply(null, arguments)), e
                }
            }
            e.exports = i
        }, {}],
        132: [function(t, e) {
            "use strict";

            function i() {
                if ("undefined" != typeof window) {
                    if (window.devicePixelRatio) return window.devicePixelRatio;
                    if (window.screen && window.screen.deviceXDPI && window.screen.logicalXDPI) return window.screen.deviceXDPI / window.screen.logicalXDPI;
                    if (window.screen && window.screen.systemXDPI && window.screen.logicalXDPI) return window.screen.systemXDPI / window.screen.logicalXDPI
                }
                return r
            }
            var r = 1;
            e.exports = i
        }, {}],
        133: [function(t, e) {
            "use strict";

            function i(t) {
                return 180 * t / Math.PI
            }
            e.exports = i
        }, {}],
        134: [function(t, e) {
            "use strict";

            function i(t) {
                return "number" == typeof t && isFinite(t)
            }
            e.exports = i
        }, {}],
        135: [function(t, e) {
            "use strict";

            function i(t) {
                return function() {
                    function e() {
                        var e = arguments[0];
                        !e || s ? n.apply(null, arguments) : o = t.apply(null, i)
                    }
                    var i = arguments.length ? Array.prototype.slice.call(arguments, 0, arguments.length - 1) : [],
                        n = arguments.length ? arguments[arguments.length - 1] : r,
                        o = null,
                        s = !1;
                    return i.push(e), e(!0),
                        function() {
                            s = !0, o.apply(null, arguments)
                        }
                }
            }
            var r = t("./noop");
            e.exports = i
        }, {
            "./noop": 130
        }],
        136: [function(t, e) {
            "use strict";

            function i(t, e, i, a, h) {
                return n.copy(s, o), i && n.rotateY(s, s, i), a && n.rotateX(s, s, a), h && n.rotateZ(s, s, h), r.transformMat4(t, e, s), t
            }
            var r = {
                    transformMat4: t("gl-vec3/transformMat4")
                },
                n = {
                    identity: t("gl-mat4/identity"),
                    create: t("gl-mat4/create"),
                    copy: t("gl-mat4/copy"),
                    rotateZ: t("gl-mat4/rotateZ"),
                    rotateY: t("gl-mat4/rotateY"),
                    rotateX: t("gl-mat4/rotateX")
                },
                o = n.identity(n.create()),
                s = n.create();
            e.exports = i
        }, {
            "gl-mat4/copy": 3,
            "gl-mat4/create": 4,
            "gl-mat4/identity": 5,
            "gl-mat4/rotateX": 9,
            "gl-mat4/rotateY": 10,
            "gl-mat4/rotateZ": 11,
            "gl-vec3/transformMat4": 23
        }],
        137: [function(t, e) {
            "use strict";

            function i(t, e, i) {
                function n() {
                    if (!o) {
                        var a = (r() - s) / t;
                        1 > a ? (e(a), requestAnimationFrame(n)) : (e(1), i())
                    }
                }
                var o = !1,
                    s = r();
                return e(0), requestAnimationFrame(n),
                    function() {
                        o = !0, i.apply(null, arguments)
                    }
            }
            var r = t("./clock");
            e.exports = i
        }, {
            "./clock": 116
        }],
        138: [function(t, e) {
            "use strict";

            function i(t) {
                var e = typeof t;
                if ("object" === e) {
                    if (null === t) return "null";
                    if ("[object Array]" === Object.prototype.toString.call(t)) return "array";
                    if ("[object RegExp]" === Object.prototype.toString.call(t)) return "regexp"
                }
                return e
            }
            e.exports = i
        }, {}],
        139: [function(t, e) {
            e.exports = "0.4.0"
        }, {}],
        140: [function(t, e) {
            "use strict";

            function i(t, e) {
                if (!t || null == t.mediaAspectRatio) throw new Error("FlatView: mediaAspectRatio must be defined");
                this._x = t && null != t.x ? t.x : l, this._y = t && null != t.y ? t.y : u, this._zoom = t && null != t.zoom ? t.zoom : c, this._mediaAspectRatio = t.mediaAspectRatio, this._width = t && null != t.width ? t.width : 0, this._height = t && null != t.height ? t.height : 0, this._limiter = e || null, this._frustum = [0, 0, 0, 0], this._projectionMatrix = a.create(), this._projectionChanged = !0, this._params = {}, this._vertex = h.create(), this._invProj = a.create(), this._update()
            }
            var r = t("../util/pixelRatio"),
                n = t("minimal-event-emitter"),
                o = t("../util/real"),
                s = t("../util/clamp"),
                a = (t("../util/decimal"), {
                    create: t("gl-mat4/create"),
                    ortho: t("gl-mat4/ortho"),
                    invert: t("gl-mat4/invert")
                }),
                h = {
                    create: t("gl-vec4/create"),
                    set: t("gl-vec4/set"),
                    transformMat4: t("gl-vec4/transformMat4")
                },
                l = .5,
                u = .5,
                c = 1,
                p = [1, 0, 1, 0],
                d = [-1, -1, 1, 1],
                f = 1e-9;
            n(i), i.prototype.destroy = function() {}, i.prototype.x = function() {
                return this._x
            }, i.prototype.y = function() {
                return this._y
            }, i.prototype.zoom = function() {
                return this._zoom
            }, i.prototype.mediaAspectRatio = function() {
                return this._mediaAspectRatio
            }, i.prototype.width = function() {
                return this._width
            }, i.prototype.height = function() {
                return this._height
            }, i.prototype.size = function(t) {
                return t || (t = {}), t.width = this._width, t.height = this._height, t
            }, i.prototype.parameters = function(t) {
                return t || (t = {}), t.x = this._x, t.y = this._y, t.zoom = this._zoom, t.mediaAspectRatio = this._mediaAspectRatio, t
            }, i.prototype.setX = function(t) {
                this._resetParams(), this._params.x = t, this._update(this._params)
            }, i.prototype.setY = function(t) {
                this._resetParams(), this._params.y = t, this._update(this._params)
            }, i.prototype.setZoom = function(t) {
                this._resetParams(), this._params.zoom = t, this._update(this._params)
            }, i.prototype.offsetX = function(t) {
                this.setX(this._x + t)
            }, i.prototype.offsetY = function(t) {
                this.setY(this._y + t)
            }, i.prototype.offsetZoom = function(t) {
                this.setZoom(this._zoom + t)
            }, i.prototype.setMediaAspectRatio = function(t) {
                this._resetParams(), this._params.mediaAspectRatio = t, this._update(this._params)
            }, i.prototype.setSize = function(t) {
                this._resetParams(), this._params.width = t.width, this._params.height = t.height, this._update(this._params)
            }, i.prototype.setParameters = function(t) {
                this._resetParams();
                var e = this._params;
                e.x = t.x, e.y = t.y, e.zoom = t.zoom, e.mediaAspectRatio = t.mediaAspectRatio, this._update(e)
            }, i.prototype.setLimiter = function(t) {
                this._limiter = t || null, this._update()
            }, i.prototype._resetParams = function() {
                var t = this._params;
                t.x = null, t.y = null, t.zoom = null, t.mediaAspectRatio = null, t.width = null, t.height = null
            }, i.prototype._update = function(t) {
                null == t && (this._resetParams(), t = this._params);
                var e = this._x,
                    i = this._y,
                    r = this._zoom,
                    n = this._mediaAspectRatio,
                    a = this._width,
                    h = this._height;
                if (t.x = null != t.x ? t.x : e, t.y = null != t.y ? t.y : i, t.zoom = null != t.zoom ? t.zoom : r, t.mediaAspectRatio = null != t.mediaAspectRatio ? t.mediaAspectRatio : n, t.width = null != t.width ? t.width : a, t.height = null != t.height ? t.height : h, this._limiter && (t = this._limiter(t), !t)) throw new Error("Bad view limiter");
                var l = t.x,
                    u = t.y,
                    c = t.zoom,
                    p = t.mediaAspectRatio,
                    d = t.width,
                    m = t.height;
                if (!(o(l) && o(u) && o(c) && o(p) && o(d) && o(m))) throw new Error("Bad view - suspect a broken limiter");
                c = s(c, f, 1 / 0), this._x = l, this._y = u, this._zoom = c, this._mediaAspectRatio = p, this._width = d, this._height = m, (l !== e || u !== i || c !== r || p !== n || d !== a || m !== h) && (this._projectionChanged = !0, this.emit("change")), (d !== a || m !== h) && this.emit("resize")
            }, i.prototype._zoomX = function() {
                return this._zoom
            }, i.prototype._zoomY = function() {
                var t = this._mediaAspectRatio,
                    e = this._width / this._height,
                    i = this._zoom,
                    r = i * t / e;
                return isNaN(r) && (r = i), r
            }, i.prototype.updateWithControlParameters = function(t) {
                var e = this.zoom(),
                    i = this._zoomX(),
                    r = this._zoomY();
                this.offsetX(t.axisScaledX * i + t.x * e), this.offsetY(t.axisScaledY * r + t.y * e), this.offsetZoom(t.zoom * e)
            }, i.prototype.projection = function() {
                var t = this._projectionMatrix;
                if (this._projectionChanged) {
                    var e = this._x,
                        i = this._y,
                        r = this._zoomX(),
                        n = this._zoomY(),
                        o = this._frustum,
                        s = o[0] = .5 - i + .5 * n,
                        h = o[1] = e - .5 + .5 * r,
                        l = o[2] = .5 - i - .5 * n,
                        u = o[3] = e - .5 - .5 * r;
                    a.ortho(t, u, h, l, s, -1, 1), this._projectionChanged = !1
                }
                return t
            }, i.prototype.selectLevel = function(t) {
                for (var e = r() * this.width(), i = this._zoom, n = 0; n < t.length; n++) {
                    var o = t[n];
                    if (i * o.width() >= e) return o
                }
                return t[t.length - 1]
            }, i.prototype.intersects = function(t) {
                var e = this._frustum;
                this.projection();
                for (var i = 0; i < e.length; i++) {
                    for (var r = e[i], n = p[i], o = d[i], s = !1, a = 0; a < t.length; a++) {
                        var h = t[a];
                        if (0 > o && h[n] < r || o > 0 && h[n] > r) {
                            s = !0;
                            break
                        }
                    }
                    if (!s) return !1
                }
                return !0
            }, i.prototype.coordinatesToScreen = function(t, e) {
                var i = this._vertex;
                e || (e = {});
                var r = this._width,
                    n = this._height;
                if (0 >= r || 0 >= n) return e.x = null, e.y = null, null;
                var o = t && null != t.x ? t.x : l,
                    s = t && null != t.y ? t.y : u;
                h.set(i, o - .5, .5 - s, -1, 1), h.transformMat4(i, i, this.projection());
                for (var a = 0; 3 > a; a++) i[a] /= i[3];
                return e.x = r * (i[0] + 1) / 2, e.y = n * (1 - i[1]) / 2, e
            }, i.prototype.screenToCoordinates = function(t, e) {
                var i = this._vertex,
                    r = this._invProj;
                e || (e = {});
                var n = this._width,
                    o = this._height;
                a.invert(r, this.projection());
                var s = 2 * t.x / n - 1,
                    l = 1 - 2 * t.y / o;
                return h.set(i, s, l, 1, 1), h.transformMat4(i, i, r), e.x = .5 + i[0], e.y = .5 - i[1], e
            }, i.prototype.normalizeToClosest = function(t, e) {
                e.x = t.x, e.y = t.y
            }, i.limit = {
                x: function(t, e) {
                    return function(i) {
                        return i.x = s(i.x, t, e), i
                    }
                },
                y: function(t, e) {
                    return function(i) {
                        return i.y = s(i.y, t, e), i
                    }
                },
                zoom: function(t, e) {
                    return function(i) {
                        return i.zoom = s(i.zoom, t, e), i
                    }
                },
                resolution: function(t) {
                    return function(e) {
                        if (e.width <= 0 || e.height <= 0) return e;
                        var i = e.width,
                            n = r() * i / t;
                        return e.zoom = s(e.zoom, n, 1 / 0), e
                    }
                },
                visibleX: function(t, e) {
                    return function(i) {
                        var r = e - t;
                        i.zoom > r && (i.zoom = r);
                        var n = t + .5 * i.zoom,
                            o = e - .5 * i.zoom;
                        return i.x = s(i.x, n, o), i
                    }
                },
                visibleY: function(t, e) {
                    return function(i) {
                        if (i.width <= 0 || i.height <= 0) return i;
                        var r = i.width / i.height,
                            n = r / i.mediaAspectRatio,
                            o = (e - t) * n;
                        i.zoom > o && (i.zoom = o);
                        var a = t + .5 * i.zoom / n,
                            h = e - .5 * i.zoom / n;
                        return i.y = s(i.y, a, h), i
                    }
                },
                letterbox: function() {
                    return function(t) {
                        if (t.width <= 0 || t.height <= 0) return t;
                        var e = t.width / t.height,
                            i = 1,
                            r = e / t.mediaAspectRatio;
                        t.mediaAspectRatio >= e && (t.zoom = Math.min(t.zoom, i)), t.mediaAspectRatio <= e && (t.zoom = Math.min(t.zoom, r));
                        var n, o;
                        t.zoom > i ? n = o = .5 : (n = 0 + .5 * t.zoom / i, o = 1 - .5 * t.zoom / i);
                        var a, h;
                        return t.zoom > r ? a = h = .5 : (a = 0 + .5 * t.zoom / r, h = 1 - .5 * t.zoom / r), t.x = s(t.x, n, o), t.y = s(t.y, a, h), t
                    }
                }
            }, i.type = i.prototype.type = "flat", e.exports = i
        }, {
            "../util/clamp": 115,
            "../util/decimal": 120,
            "../util/pixelRatio": 132,
            "../util/real": 134,
            "gl-mat4/create": 4,
            "gl-mat4/invert": 6,
            "gl-mat4/ortho": 7,
            "gl-vec4/create": 26,
            "gl-vec4/set": 28,
            "gl-vec4/transformMat4": 29,
            "minimal-event-emitter": 31
        }],
        141: [function(t, e) {
            "use strict";

            function i(t, e) {
                this._yaw = t && null != t.yaw ? t.yaw : _, this._pitch = t && null != t.pitch ? t.pitch : y, this._roll = t && null != t.roll ? t.roll : g, this._fov = t && null != t.fov ? t.fov : w, this._width = t && null != t.width ? t.width : m, this._height = t && null != t.height ? t.height : v, this._projectionCenterX = t && null != t.projectionCenterX ? t.projectionCenterX : x, this._projectionCenterY = t && null != t.projectionCenterY ? t.projectionCenterY : b, this._limiter = e || null, this._projectionChanged = !0, this._projectionMatrix = d.create(), this._viewFrustum = [f.create(), f.create(), f.create(), f.create(), f.create()], this._params = {}, this._vertex = f.create(), this._invProj = d.create(), this._update()
            }
            var r = t("minimal-event-emitter"),
                n = t("../util/pixelRatio"),
                o = t("../util/convertFov"),
                s = t("../util/rotateVector"),
                a = t("../util/mod"),
                h = t("../util/real"),
                l = t("../util/clamp"),
                u = t("../util/decimal"),
                c = t("../util/compose"),
                p = t("./projectionCenter"),
                d = {
                    create: t("gl-mat4/create"),
                    perspective: t("gl-mat4/perspective"),
                    rotateX: t("gl-mat4/rotateX"),
                    rotateY: t("gl-mat4/rotateY"),
                    rotateZ: t("gl-mat4/rotateZ"),
                    invert: t("gl-mat4/invert")
                },
                f = {
                    create: t("gl-vec4/create"),
                    dot: t("gl-vec4/dot"),
                    set: t("gl-vec4/set"),
                    transformMat4: t("gl-vec4/transformMat4")
                },
                m = 0,
                v = 0,
                _ = 0,
                y = 0,
                g = 0,
                w = Math.PI / 4,
                x = 0,
                b = 0,
                E = 1e-9;
            r(i), i.prototype.destroy = function() {
                this._yaw = null, this._pitch = null, this._roll = null, this._fov = null, this._width = null, this._height = null, this._limiter = null, this._projectionChanged = null, this._projectionMatrix = null, this._viewFrustum = null, this._params = null, this._vertex = null, this._invProj = null
            }, i.prototype.yaw = function() {
                return this._yaw
            }, i.prototype.pitch = function() {
                return this._pitch
            }, i.prototype.roll = function() {
                return this._roll
            }, i.prototype.projectionCenterX = function() {
                return this._projectionCenterX
            }, i.prototype.projectionCenterY = function() {
                return this._projectionCenterY
            }, i.prototype.fov = function() {
                return this._fov
            }, i.prototype.width = function() {
                return this._width
            }, i.prototype.height = function() {
                return this._height
            }, i.prototype.size = function(t) {
                return t || (t = {}), t.width = this._width, t.height = this._height, t
            }, i.prototype.parameters = function(t) {
                return t || (t = {}), t.yaw = this._yaw, t.pitch = this._pitch, t.roll = this._roll, t.fov = this._fov, t
            }, i.prototype.limiter = function() {
                return this._limiter
            }, i.prototype.setYaw = function(t) {
                this._resetParams(), this._params.yaw = t, this._update(this._params)
            }, i.prototype.setPitch = function(t) {
                this._resetParams(), this._params.pitch = t, this._update(this._params)
            }, i.prototype.setRoll = function(t) {
                this._resetParams(), this._params.roll = t, this._update(this._params)
            }, i.prototype.setFov = function(t) {
                this._resetParams(), this._params.fov = t, this._update(this._params)
            }, i.prototype.setProjectionCenterX = function(t) {
                this._resetParams(), this._params.projectionCenterX = t, this._update(this._params)
            }, i.prototype.setProjectionCenterY = function(t) {
                this._resetParams(), this._params.projectionCenterY = t, this._update(this._params)
            }, i.prototype.offsetYaw = function(t) {
                this.setYaw(this._yaw + t)
            }, i.prototype.offsetPitch = function(t) {
                this.setPitch(this._pitch + t)
            }, i.prototype.offsetRoll = function(t) {
                this.setRoll(this._roll + t)
            }, i.prototype.offsetFov = function(t) {
                this.setFov(this._fov + t)
            }, i.prototype.setSize = function(t) {
                this._resetParams(), this._params.width = t.width, this._params.height = t.height, this._update(this._params)
            }, i.prototype.setParameters = function(t) {
                this._resetParams();
                var e = this._params;
                e.yaw = t.yaw, e.pitch = t.pitch, e.roll = t.roll, e.fov = t.fov, e.projectionCenterX = t.projectionCenterX, e.projectionCenterY = t.projectionCenterY, this._update(e)
            }, i.prototype.setLimiter = function(t) {
                this._limiter = t || null, this._update()
            }, i.prototype._resetParams = function() {
                var t = this._params;
                t.yaw = null, t.pitch = null, t.roll = null, t.fov = null, t.width = null, t.height = null
            }, i.prototype._update = function(t) {
                null == t && (this._resetParams(), t = this._params);
                var e = this._yaw,
                    i = this._pitch,
                    r = this._roll,
                    n = this._fov,
                    o = this._projectionCenterX,
                    s = this._projectionCenterY,
                    a = this._width,
                    l = this._height;
                if (t.yaw = null != t.yaw ? t.yaw : e, t.pitch = null != t.pitch ? t.pitch : i, t.roll = null != t.roll ? t.roll : r, t.fov = null != t.fov ? t.fov : n, t.width = null != t.width ? t.width : a, t.height = null != t.height ? t.height : l, t.projectionCenterX = null != t.projectionCenterX ? t.projectionCenterX : o, t.projectionCenterY = null != t.projectionCenterY ? t.projectionCenterY : s, this._limiter && (t = this._limiter(t), !t)) throw new Error("Bad view limiter");
                t = this._normalize(t);
                var u = t.yaw,
                    c = t.pitch,
                    p = t.roll,
                    d = t.fov,
                    f = t.width,
                    m = t.height,
                    v = t.projectionCenterX,
                    _ = t.projectionCenterY;
                if (!(h(u) && h(c) && h(p) && h(d) && h(f) && h(m) && h(v) && h(_))) throw new Error("Bad view - suspect a broken limiter");
                this._yaw = u, this._pitch = c, this._roll = p, this._fov = d, this._width = f, this._height = m, this._projectionCenterX = v, this._projectionCenterY = _, (u !== e || c !== i || p !== r || d !== n || f !== a || m !== l || v !== o || _ !== s) && (this._projectionChanged = !0, this.emit("change")), (f !== a || m !== l) && this.emit("resize")
            }, i.prototype._normalize = function(t) {
                this._normalizeCoordinates(t);
                var e = o.htov(Math.PI, t.width, t.height),
                    i = isNaN(e) ? Math.PI : Math.min(Math.PI, e);
                return t.fov = l(t.fov, E, i - E), t
            }, i.prototype._normalizeCoordinates = function(t) {
                return "yaw" in t && (t.yaw = a(t.yaw - Math.PI, -2 * Math.PI) + Math.PI), "pitch" in t && (t.pitch = a(t.pitch - Math.PI, -2 * Math.PI) + Math.PI), "roll" in t && (t.roll = a(t.roll - Math.PI, -2 * Math.PI) + Math.PI), t
            }, i.prototype.normalizeToClosest = function(t, e) {
                return e = e || {}, e.yaw = t.yaw, e.pitch = t.pitch, this._normalizeCoordinates(e), Math.abs(e.yaw - 2 * Math.PI - this._yaw) < Math.abs(e.yaw - this._yaw) ? e.yaw = e.yaw - 2 * Math.PI : Math.abs(e.yaw + 2 * Math.PI - this._yaw) < Math.abs(e.yaw - this._yaw) && (e.yaw = e.yaw + 2 * Math.PI), Math.abs(e.pitch - 2 * Math.PI - this._pitch) < Math.abs(e.pitch - this._pitch) ? e.pitch = e.pitch - 2 * Math.PI : Math.abs(e.pitch + 2 * Math.PI - this._pitch) < Math.abs(e.pitch - this._pitch) && (e.pitch = e.pitch + 2 * Math.PI), e
            }, i.prototype.updateWithControlParameters = function(t) {
                var e = this._fov,
                    i = o.vtoh(e, this._width, this._height);
                isNaN(i) && (i = e), this.offsetYaw(t.axisScaledX * i + 2 * t.x * i + t.yaw), this.offsetPitch(t.axisScaledY * e + 2 * t.y * i + t.pitch), this.offsetRoll(-t.roll), this.offsetFov(t.zoom * e)
            }, i.prototype.projection = function() {
                var t = this._projectionMatrix,
                    e = this._viewFrustum;
                if (this._projectionChanged) {
                    var i = this._fov,
                        r = o.vtoh(i, this._width, this._height);
                    p.viewParamsToProjectionMatrix(this._projectionCenterX, this._projectionCenterY, i, r, -1, 1, t), d.rotateZ(t, t, this._roll), d.rotateX(t, t, this._pitch), d.rotateY(t, t, this._yaw), f.set(e[0], t[3] + t[0], t[7] + t[4], t[11] + t[8], 0), f.set(e[1], t[3] - t[0], t[7] - t[4], t[11] - t[8], 0), f.set(e[2], t[3] + t[1], t[7] + t[5], t[11] + t[9], 0), f.set(e[3], t[3] - t[1], t[7] - t[5], t[11] - t[9], 0), f.set(e[4], t[3] + t[2], t[7] + t[6], t[11] + t[10], 0), this._projectionChanged = !1
                }
                return t
            }, i.prototype.frustum = function() {
                return this.projection(), this._viewFrustum
            }, i.prototype.intersects = function(t) {
                var e = this._viewFrustum,
                    i = this._vertex;
                this.projection();
                for (var r = 0; r < e.length; r++) {
                    for (var n = e[r], o = !1, s = 0; s < t.length; s++) {
                        var a = t[s];
                        f.set(i, a[0], a[1], a[2], 0), f.dot(n, i) >= 0 && (o = !0)
                    }
                    if (!o) return !1
                }
                return !0
            }, i.prototype.selectLevel = function(t) {
                for (var e = n() * this._height, i = Math.tan(.5 * this._fov), r = 0; r < t.length; r++) {
                    var o = t[r];
                    if (i * o.height() >= e) return o
                }
                return t[t.length - 1]
            }, i.prototype.coordinatesToScreen = function(t, e) {
                var i = this._vertex;
                e || (e = {});
                var r = this._width,
                    n = this._height;
                if (0 >= r || 0 >= n) return e.x = null, e.y = null, null;
                var o = t && null != t.yaw ? t.yaw : _,
                    a = t && null != t.pitch ? t.pitch : y,
                    h = t && null != t.roll ? t.roll : g;
                f.set(i, 0, 0, -1, 1), s(i, i, -o, -a, -h), f.transformMat4(i, i, this.projection());
                for (var l = 0; 3 > l; l++) i[l] /= i[3];
                return i[2] >= 0 ? (e.x = r * (i[0] + 1) / 2, e.y = n * (1 - i[1]) / 2, e) : (e.x = null, e.y = null, null)
            }, i.prototype.coordinatesToPerspectiveTransform = function(t, e, i) {
                i = i || "";
                var r = this._height,
                    n = this._width,
                    o = this.perspectiveTransformPerspective(),
                    s = "";
                return s += "translateX(" + u(n / 2) + "px) translateY(" + u(r / 2) + "px) ", s += "translateX(-50%) translateY(-50%) ", s += "perspective(" + u(o) + "px) ", s += "translateZ(" + u(o) + "px) ", s += "rotateZ(" + u(-this._roll) + "rad) ", s += "rotateX(" + u(-this._pitch) + "rad) ", s += "rotateY(" + u(this._yaw) + "rad) ", s += "rotateY(" + u(-t.yaw) + "rad) ", s += "rotateX(" + u(t.pitch) + "rad) ", s += "translateZ(" + u(-e) + "px) ", s += i + " "
            }, i.prototype.perspectiveTransformPerspective = function() {
                return .5 * this._height / Math.tan(this._fov / 2)
            }, i.prototype.screenToCoordinates = function(t, e) {
                var i = this._vertex,
                    r = this._invProj;
                e || (e = {});
                var n = this._width,
                    o = this._height;
                d.invert(r, this.projection());
                var s = 2 * t.x / n - 1,
                    a = 1 - 2 * t.y / o;
                f.set(i, s, a, 1, 1), f.transformMat4(i, i, r);
                var h = Math.sqrt(i[0] * i[0] + i[1] * i[1] + i[2] * i[2]);
                return e.yaw = Math.atan2(i[0], -i[2]), e.pitch = Math.acos(i[1] / h) - Math.PI / 2, this._normalizeCoordinates(e), e
            }, i.limit = {
                yaw: function(t, e) {
                    return function(i) {
                        return i.yaw = l(i.yaw, t, e), i
                    }
                },
                pitch: function(t, e) {
                    return function(i) {
                        return i.pitch = l(i.pitch, t, e), i
                    }
                },
                roll: function(t, e) {
                    return function(i) {
                        i.roll = l(i.roll, t, e)
                    }
                },
                hfov: function(t, e) {
                    return function(i) {
                        var r = i.width,
                            n = i.height;
                        if (r > 0 && n > 0) {
                            var s = o.htov(t, r, n),
                                a = o.htov(e, r, n);
                            i.fov = l(i.fov, s, a)
                        }
                        return i
                    }
                },
                vfov: function(t, e) {
                    return function(i) {
                        return i.fov = l(i.fov, t, e), i
                    }
                },
                resolution: function(t) {
                    return function(e) {
                        var i = e.height;
                        if (i) {
                            var r = n() * i,
                                o = 2 * Math.atan(r / t);
                            e.fov = l(e.fov, o, 1 / 0)
                        }
                        return e
                    }
                },
                maxResolutionAndMaxFov: function(t, e, r) {
                    return r = null != r ? r : e, c(i.limit.resolution(t), i.limit.vfov(0, e), i.limit.hfov(0, r), i.limit.pitch(-Math.PI / 2, Math.PI / 2))
                }
            }, i.projectionCenter = p, i.type = i.prototype.type = "rectilinear", e.exports = i
        }, {
            "../util/clamp": 115,
            "../util/compose": 118,
            "../util/convertFov": 119,
            "../util/decimal": 120,
            "../util/mod": 129,
            "../util/pixelRatio": 132,
            "../util/real": 134,
            "../util/rotateVector": 136,
            "./projectionCenter": 142,
            "gl-mat4/create": 4,
            "gl-mat4/invert": 6,
            "gl-mat4/perspective": 8,
            "gl-mat4/rotateX": 9,
            "gl-mat4/rotateY": 10,
            "gl-mat4/rotateZ": 11,
            "gl-vec4/create": 26,
            "gl-vec4/dot": 27,
            "gl-vec4/set": 28,
            "gl-vec4/transformMat4": 29,
            "minimal-event-emitter": 31
        }],
        142: [function(t, e) {
            "use strict";

            function i(t, e, i, r, n) {
                n = n || {};
                var o = Math.atan(2 * e * Math.tan(i / 2));
                n.up = i / 2 + o, n.down = i / 2 - o;
                var s = Math.atan(2 * t * Math.tan(r / 2));
                return n.left = r / 2 + s, n.right = r / 2 - s, n
            }

            function r(t, e, i, r, n) {
                n = n || {};
                var o = t + e,
                    s = t - o / 2,
                    a = Math.tan(s) / (2 * Math.tan(o / 2)),
                    h = r + i,
                    l = i - h / 2,
                    u = Math.tan(l) / (2 * Math.tan(h / 2));
                return n.vfov = o, n.hfov = h, n.projectionCenterX = u, n.projectionCenterY = a, n
            }

            function n(t, e, i, r, n, o, s) {
                var a = Math.tan(t),
                    h = Math.tan(e),
                    l = Math.tan(i),
                    u = Math.tan(r),
                    c = 2 / (l + u),
                    p = 2 / (a + h);
                s[0] = c, s[1] = 0, s[2] = 0, s[3] = 0, s[4] = 0, s[5] = p, s[6] = 0, s[7] = 0, s[8] = -((l - u) * c * .5), s[9] = (a - h) * p * .5, s[10] = -(n + o) / (o - n), s[11] = -1, s[12] = 0, s[13] = 0, s[14] = -(2 * o * n) / (o - n), s[15] = 0
            }

            function o(t, e, r, o, a, h, l) {
                i(t, e, r, o, s), n(s.up, s.down, s.left, s.right, a, h, l)
            }
            var s = {};
            e.exports = {
                viewParamsToVrFovs: i,
                vrFovsToViewParams: r,
                vrFovsToProjectionMatrix: n,
                viewParamsToProjectionMatrix: o
            }
        }, {}]
    }, {}, [79])(79)
});