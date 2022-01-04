"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Me {
    static work() {
        //     "Hey, guys! This is Atsushi! Are you interested in TypeScript? Let's dive into TypeScript!";
        return `Hey, guys! This is ${this.firstName}! Are you interested in TypeScript? Let's dive into TypeScript!`;
    }
}
Me.isProgrammer = true;
Me.firstName = 'Atsushi';
Me.lastName = 'Ishida';
// let me = new Me();
// console.log(me.isProgrammer);
console.log(Me.isProgrammer);
console.log(Me.work());
