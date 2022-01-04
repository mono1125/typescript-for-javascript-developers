"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    constructor(name) {
        this.name = name;
    }
    run() {
        return 'I can run';
    }
}
class Lion extends Animal {
    constructor(name, speed) {
        super(name);
        this.speed = speed;
    }
    run() {
        return `${super.run()} ${this.speed}km/h.`;
    }
}
// let animal = new Animal();
// console.log(animal.run());
// let lion = new Lion();
// console.log(lion.run());
console.log(new Animal('Mickey').run());
console.log(new Lion('Simba', 80).run());
