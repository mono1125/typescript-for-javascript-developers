"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let taro = new Person('Taro', 30);
console.log(taro);
const profile = ['Ham', 43];
const ham = new Person(...profile);
console.log(ham);
