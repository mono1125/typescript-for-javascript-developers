"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reducer = (accumulator, currentValue) => {
    console.log({ accumulator, currentValue });
    return accumulator + currentValue;
};
const sum = (...values) => {
    return values.reduce(reducer);
};
console.log(sum(1, 2, 3, 4, 5));
