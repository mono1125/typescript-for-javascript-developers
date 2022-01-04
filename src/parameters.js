"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const debugProfile = (name, age) => {
    console.log({ name, age });
};
debugProfile('Ham', 43);
const profile = ['Gloria', 76];
debugProfile(...profile);
