export function nog(x) {
    console.log(x);
}
export function nug(x) {
    return Object.keys(x);
}
export function nugg(x) {
    x.forEach(element => {
        return element;
    });
}
export function nuggets(x, y) {
    let t;
    x.forEach(element => {
        if (element == y) {
            t= y;
        }
    });
    return t;
}
export function nt(x) {
    if (x.includes("#")) {
        return document.getElementById(x);
    } else if (x.includes(".")) {
        return document.getElementsByClassName(x);
    } else {
        return document.querySelectorAll(x);
    }
}
export class m {
    constructor() { }
    static a(x) { return Math.abs(x); };
    static ac(x) { return Math.acos(x); }
    static ach(x) { return Math.acosh(x); }
    static as(x) { return Math.asin(x); }
    static ash(x) { return Math.asinh(x); }
    static at(x) { return Math.atan(x); }
    static at2(x) { return Math.atan2(x); }
    static ath(x) { return Math.atanh(x); }
    static cb(x) { return Math.cbrt(x); }
    static c(x) { return Math.ceil(x); }
    static co(x) { return Math.cos(x); }
    static ch(x) { return Math.cosh(x); }
    static e(x) { return Math.exp(x); }
    static f(x) { return Math.floor(x); }
    static l(x) { return Math.log(x); }
    static ma(x) { return Math.max(x); }
    static mi(x) { return Math.min(x); }
    static p(x) { return Math.pow(x); }
    static ra(x) { return Math.random(); }
    static r(x) { return Math.round(x); }
    static si(x) { return Math.sin(x); }
    static sh(x) { return Math.sinh(x); }
    static sq(x) { return Math.sqrt(x); }
    static t(x) { return Math.tan(x); }
    static th(x) { return Math.tanh(x); }
    static tr(x) { return Math.trunc(x); }
}
export function n(x, y) {
    if (x === y)
        return true;
    else
        return false;
}