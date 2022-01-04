"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nextYearSalary = (currentSalary, rate = 1.1) => {
    return currentSalary * rate;
};
console.log(nextYearSalary(1000));
