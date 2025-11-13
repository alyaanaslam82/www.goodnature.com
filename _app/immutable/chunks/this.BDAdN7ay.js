import {
    B as S,
    D as h,
    j as k,
    F as B,
    S as T
} from "./runtime.B7th0A2U.js";

function t(r, i) {
    return r === i || (r == null ? void 0 : r[T]) === i
}

function q(r = {}, i, a, c) {
    return S(() => {
        var f, s;
        return h(() => {
            f = s, s = [], k(() => {
                r !== a(...s) && (i(r, ...s), f && t(a(...f), r) && i(null, ...f))
            })
        }), () => {
            B(() => {
                s && t(a(...s), r) && i(null, ...s)
            })
        }
    }), r
}
export {
    q as b
};