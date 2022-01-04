"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let fooCompatible;
let barCompatible = 'TypeScript';
console.log(typeof fooCompatible);
fooCompatible = barCompatible;
console.log(typeof fooCompatible);
let fooIncompatible;
let barIncompatible = 1;
// fooIncompatible = barIncompatible;
let fooString;
let barString = 'string';
fooString = barString;
let fooStringLiteral = 'fooStringLiteral';
fooString = fooStringLiteral;
let fooNumber;
let fooNumberLiteral = 1976;
fooNumber = fooNumberLiteral;
class Person {
    constructor(age, name) {
        this.age = age;
        this.name = name;
    }
}
let me;
me = new Person(43, 'HamSan');
console.log({ me });
