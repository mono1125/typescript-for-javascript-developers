"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name, age, nationality) {
        this.name = name;
        this.age = age;
        this.nationality = nationality;
    }
    profile() {
        return `name: ${this.name}, age: ${this.age}`;
    }
}
class Android extends Person {
    constructor(name, age, nationality) {
        super(name, age, nationality);
    }
    profile() {
        return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`;
    }
}
let taro = new Person('Taro', 30, 'Japan');
console.log(taro.profile());
console.log(taro.name);
// console.log(taro.age);
// let hanako = new Person();
