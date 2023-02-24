"use strict";
const generic = () => {
    const s = (x) => (x ? Number(x) : null);
    const g = (x, y) => x + String(y);
    console.log(g('2', [12, 34, 56]));
};
const constraints = () => {
    const a = (x) => x.length;
    console.log(/* a(1), */ a('2'));
};
const optional = () => {
    const a = (x, y) => y === null || y === void 0 ? void 0 : y.map((i) => i + x);
    // const b = (y?: number[]) => y.map((i) => i)
    console.log(a(1, [2, 3, 4]));
};
optional();
