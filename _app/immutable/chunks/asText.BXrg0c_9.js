const r = (t, n = " ") => {
        let s = "";
        for (let e = 0; e < t.length; e++) "text" in t[e] && (s += (s ? n : "") + t[e].text);
        return s
    },
    u = (t, n) => t ? r(t, n) : null;
export {
    u as a
};