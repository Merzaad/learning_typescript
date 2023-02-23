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
constraints();
