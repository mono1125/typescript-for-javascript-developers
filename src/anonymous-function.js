"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let bmi = function (height, weight) {
    return weight / (height * height);
};
console.log(bmi(1.78, 86));
