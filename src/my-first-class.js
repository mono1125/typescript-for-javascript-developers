"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    profile() {
        return `name: ${this.name}, age: ${this.age}`;
    }
}
let taro = new Person('Taro', 30);
console.log(taro.profile());
// let hanako = new Person();
