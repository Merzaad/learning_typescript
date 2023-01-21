"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const promise = () => new Promise((res) => {
    res({
        data: { a: [1], b: '1' },
        status: 'resolved',
    });
});
const asyncTest = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield promise();
        console.log(result.data);
    }
    catch (error) {
        console.error(error);
    }
});
const arr = [1, 2, '3'];
arr.forEach((value) => {
    // console.log(value.toUpperCase())
});
const f = ({ x, y }) => {
    // console.log(y - x)
    // console.log(x - y)
    console.log(x + y);
};
const ff = (param) => {
    var _a;
    // console.log(param.y.toUpperCase())
    console.log((_a = param.y) === null || _a === void 0 ? void 0 : _a.toUpperCase());
};
const fff = (x) => {
    // console.log(x.toUpperCase())
    if (typeof x === 'string') {
        console.log(x.toUpperCase());
    }
    else if (Array.isArray(x)) {
        console.log(x.map((i) => i.a));
    }
    else {
        console.log(x.a);
    }
};
const x = () => {
    return { data: { a: [1], b: '1' }, status: 'resolved', context: '', added: 'true' };
};
const xx = () => {
    const a = { a: 'true', b: false };
    const b = { a: 'true', b: false };
    return { a, b };
};
