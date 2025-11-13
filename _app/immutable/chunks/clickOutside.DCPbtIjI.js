function i(t, n) {
    const e = c => {
        const r = c.target;
        t && !t.contains(r) && !c.defaultPrevented && n()
    };
    return document.addEventListener("click", e, !0), {
        destroy() {
            document.removeEventListener("click", e, !0)
        }
    }
}
export {
    i as c
};