var hexcase = 0
    , add = "str_test"
    , add2 = "doyouwantme"
    , b64pad = ""
    , chrsz = 8;

function hex_md5(c) {
    c += "canyoufindme";
    return binl2hex(core_md5(str2binl(c), c.length * chrsz))
}
function b(c) {
    c += add;
    return binl2b64(core_md5(str2binl(c), c.length * chrsz))
}
function str_md5(c) {
    return binl2str(core_md5(str2binl(c), c.length * chrsz))
}
function hex_hmac_md5(c, a) {
    return binl2hex(core_hmac_md5(c, a))
}
function b64_hmac_md5(c, a) {
    return binl2b64(core_hmac_md5(c, a))
}
function str_hmac_md5(c, a) {
    return binl2str(core_hmac_md5(c, a))
}
function md5_vm_test() {
    return "900150983cd24fb0d6963f7d28e17f72" == hex_md5("abc")
}
function core_md5(c, a) {
    c[a >> 5] |= 128 << a % 32;
    c[(a + 64 >>> 9 << 4) + 14] = a;
    a = 1732584193;
    for (var e = -271733879, d = -1732584194, f = 271733878, g = 0; g < c.length; g += 16) {
        var h = a
            , k = e
            , l = d
            , m = f;
        a = md5_ff(a, e, d, f, c[g + 0], 7, -680876936);
        f = md5_ff(f, a, e, d, c[g + 1], 12, -389564586);
        d = md5_ff(d, f, a, e, c[g + 2], 17, 606105819);
        e = md5_ff(e, d, f, a, c[g + 3], 22, -1044525330);
        a = md5_ff(a, e, d, f, c[g + 4], 7, -176418897);
        f = md5_ff(f, a, e, d, c[g + 5], 12, 1200080426);
        d = md5_ff(d, f, a, e, c[g + 6], 17, -1473231341);
        e = md5_ff(e, d, f, a, c[g + 7], 22, -45705983);
        a = md5_ff(a, e, d, f, c[g + 8], 7, 1770035416);
        f = md5_ff(f, a, e, d, c[g + 9], 12, -1958414417);
        d = md5_ff(d, f, a, e, c[g + 10], 17, -42063);
        e = md5_ff(e, d, f, a, c[g + 11], 22, -1990404162);
        a = md5_ff(a, e, d, f, c[g + 12], 7, 1804603682);
        f = md5_ff(f, a, e, d, c[g + 13], 12, -40341101);
        d = md5_ff(d, f, a, e, c[g + 14], 17, -1502002290);
        e = md5_ff(e, d, f, a, c[g + 15], 22, 1236535329);
        a = md5_gg(a, e, d, f, c[g + 1], 5, -165796510);
        f = md5_gg(f, a, e, d, c[g + 6], 9, -1069501632);
        d = md5_gg(d, f, a, e, c[g + 11], 14, 643717713);
        e = md5_gg(e, d, f, a, c[g + 0], 20, -373897302);
        a = md5_gg(a, e, d, f, c[g + 5], 5, -701558691);
        f = md5_gg(f, a, e, d, c[g + 10], 9, 38016083);
        d = md5_gg(d, f, a, e, c[g + 15], 14, -660478335);
        e = md5_gg(e, d, f, a, c[g + 4], 20, -405537848);
        a = md5_gg(a, e, d, f, c[g + 9], 5, 568446438);
        f = md5_gg(f, a, e, d, c[g + 14], 9, -1019803690);
        d = md5_gg(d, f, a, e, c[g + 3], 14, -187363961);
        e = md5_gg(e, d, f, a, c[g + 8], 20, 1163531501);
        a = md5_gg(a, e, d, f, c[g + 13], 5, -1444681467);
        f = md5_gg(f, a, e, d, c[g + 2], 9, -51403784);
        d = md5_gg(d, f, a, e, c[g + 7], 14, 1735328473);
        e = md5_gg(e, d, f, a, c[g + 12], 20, -1926607734);
        a = md5_hh(a, e, d, f, c[g + 5], 4, -378558);
        f = md5_hh(f, a, e, d, c[g + 8], 11, -2022574463);
        d = md5_hh(d, f, a, e, c[g + 11], 16, 1839030562);
        e = md5_hh(e, d, f, a, c[g + 14], 23, -35309556);
        a = md5_hh(a, e, d, f, c[g + 1], 4, -1530992060);
        f = md5_hh(f, a, e, d, c[g + 4], 11, 1272893353);
        d = md5_hh(d, f, a, e, c[g + 7], 16, -155497632);
        e = md5_hh(e, d, f, a, c[g + 10], 23, -1094730640);
        a = md5_hh(a, e, d, f, c[g + 13], 4, 681279174);
        f = md5_hh(f, a, e, d, c[g + 0], 11, -358537222);
        d = md5_hh(d, f, a, e, c[g + 3], 16, -722521979);
        e = md5_hh(e, d, f, a, c[g + 6], 23, 76029189);
        a = md5_hh(a, e, d, f, c[g + 9], 4, -640364487);
        f = md5_hh(f, a, e, d, c[g + 12], 11, -421815835);
        d = md5_hh(d, f, a, e, c[g + 15], 16, 530742520);
        e = md5_hh(e, d, f, a, c[g + 2], 23, -995338651);
        a = md5_ii(a, e, d, f, c[g + 0], 6, -198630844);
        f = md5_ii(f, a, e, d, c[g + 7], 10, 1126891415);
        d = md5_ii(d, f, a, e, c[g + 14], 15, -1416354905);
        e = md5_ii(e, d, f, a, c[g + 5], 21, -57434055);
        a = md5_ii(a, e, d, f, c[g + 12], 6, 1700485571);
        f = md5_ii(f, a, e, d, c[g + 3], 10, -1894986606);
        d = md5_ii(d, f, a, e, c[g + 10], 15, -1051523);
        e = md5_ii(e, d, f, a, c[g + 1], 21, -2054922799);
        a = md5_ii(a, e, d, f, c[g + 8], 6, 1873313359);
        f = md5_ii(f, a, e, d, c[g + 15], 10, -30611744);
        d = md5_ii(d, f, a, e, c[g + 6], 15, -1560198380);
        e = md5_ii(e, d, f, a, c[g + 13], 21, 1309151649);
        a = md5_ii(a, e, d, f, c[g + 4], 6, -145523070);
        f = md5_ii(f, a, e, d, c[g + 11], 10, -1120210379);
        d = md5_ii(d, f, a, e, c[g + 2], 15, 718787259);
        e = md5_ii(e, d, f, a, c[g + 9], 21, -343485551);
        a = safe_add(a, h);
        e = safe_add(e, k);
        d = safe_add(d, l);
        f = safe_add(f, m)

    }
    return [a, e, d, f]
}

function md5_ff(c, a, e, d, f, g, h) {
    return md5_cmn(a & e | ~a & d, c, a, f, g, h)
}
function md5_gg(c, a, e, d, f, g, h) {
    return md5_cmn(a & d | e & ~d, c, a, f, g, h)
}
function md5_hh(c, a, e, d, f, g, h) {
    return md5_cmn(a ^ e ^ d, c, a, f, g, h)
}
function md5_ii(c, a, e, d, f, g, h) {
    return md5_cmn(e ^ (a | ~d), c, a, f, g, h)
}
function core_hmac_md5(c, a) {
    var e = str2binl(c);
    16 < e.length && (e = core_md5(e, c.length * chrsz));
    var d = Array(16);
    c = Array(16);
    for (var f = 0; 16 > f; f++)
        d[f] = e[f] ^ 909522486,
            c[f] = e[f] ^ 1549556828;
    a = core_md5(d.concat(str2binl(a)), 512 + a.length * chrsz);
    return core_md5(c.concat(a), 640)
}
function safe_add(c, a) {
    var e = (c & 65535) + (a & 65535);
    var left = ((c >> 16) + (a >> 16) + (e >> 16) << 16)
    var d = left | e & 65535
    return d
}
function md5_cmn(c, a, e, d, f, g) {
    return safe_add(bit_rol(safe_add(safe_add(a, c), safe_add(d, g)), f), e)
}
function bit_rol(c, a) {
    return c << a | c >>> 32 - a
}
function str2binl(c) {
    for (var a = [], e = (1 << chrsz) - 1, d = 0; d < c.length * chrsz; d += chrsz){
        var codeat = c.charCodeAt(d / chrsz)
        var res = ( codeat& e) << d % 32
        a[d >> 5] |= res;
    }
    return a
}
function binl2str(c) {
    for (var a = "", e = (1 << chrsz) - 1, d = 0; d < 32 * c.length; d += chrsz)
        a += String.fromCharCode(c[d >> 5] >>> d % 32 & e);
    return a
}
function binl2hex(c) {
    for (var a = hexcase ? "0123456789ABCDEF" : "0123456789abcdef", e = "", d = 0; d < 4 * c.length; d++)
        e += a.charAt(c[d >> 2] >> d % 4 * 8 + 4 & 15) + a.charAt(c[d >> 2] >> d % 4 * 8 & 15);
    return e
}
function binl2b64(c) {
    for (var a = "", e = 0; e < 4 * c.length; e += 3)
        for (var d = (c[e >> 2] >> e % 4 * 8 & 255) << 16 | (c[e + 1 >> 2] >> (e + 1) % 4 * 8 & 255) << 8 | c[e + 2 >> 2] >> (e + 2) % 4 * 8 & 255, f = 0; 4 > f; f++)
            a = 8 * e + 8 * f > 32 * c.length ? a + b64pad : a + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(d >> 8 * (3 - f) & 63);
    return a
}
var Base64 = {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode: function(c) {
        var a = ""
            , e = 0;
        for (c = Base64._utf8_encode(c); e < c.length; ) {
            var d = c.charCodeAt(e++);
            var f = c.charCodeAt(e++);
            var g = c.charCodeAt(e++);
            var h = d >> 2;
            d = (d & 3) << 4 | f >> 4;
            var k = (f & 15) << 2 | g >> 6;
            var l = g & 63;
            isNaN(f) ? k = l = 64 : isNaN(g) && (l = 64);
            a = a + this._keyStr.charAt(h) + this._keyStr.charAt(d) + this._keyStr.charAt(k) + this._keyStr.charAt(l)
        }
        return a
    },
    decode: function(c) {
        var a = ""
            , e = 0;
        for (c = c.replace(/[^A-Za-z0-9\+\/=]/g, ""); e < c.length; ) {
            var d = this._keyStr.indexOf(c.charAt(e++));
            var f = this._keyStr.indexOf(c.charAt(e++));
            var g = this._keyStr.indexOf(c.charAt(e++));
            var h = this._keyStr.indexOf(c.charAt(e++));
            d = d << 2 | f >> 4;
            f = (f & 15) << 4 | g >> 2;
            var k = (g & 3) << 6 | h;
            a += String.fromCharCode(d);
            64 != g && (a += String.fromCharCode(f));
            64 != h && (a += String.fromCharCode(k))
        }
        return a = Base64._utf8_decode(a)
    },
    _utf8_encode: function(c) {
        var a = "";
        c = c.replace(/\r\n/g, "\n");
        for (var e = 0; e < c.length; e++) {
            var d = c.charCodeAt(e);
            128 > d ? a += String.fromCharCode(d) : (127 < d && 2048 > d ? a += String.fromCharCode(d >> 6 | 192) : (a += String.fromCharCode(d >> 12 | 224),
                a += String.fromCharCode(d >> 6 & 63 | 128)),
                a += String.fromCharCode(d & 63 | 128))
        }
        return a
    },
    _utf8_decode: function(c) {
        for (var a = "", e = 0, d, f, g; e < c.length; )
            d = c.charCodeAt(e),
                128 > d ? (a += String.fromCharCode(d),
                    e++) : 191 < d && 224 > d ? (f = c.charCodeAt(e + 1),
                    a += String.fromCharCode((d & 31) << 6 | f & 63),
                    e += 2) : (f = c.charCodeAt(e + 1),
                    g = c.charCodeAt(e + 2),
                    a += String.fromCharCode((d & 15) << 12 | (f & 63) << 6 | g & 63),
                    e += 3);
        return a
    }
};
module.exports = {
    hexMD5: hex_md5,
    b: b,
    Base_64: Base64
};
