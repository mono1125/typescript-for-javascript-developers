"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const echo = (arg: number): number => {
//   return arg;
// };
//
// const echo = (arg: string): string => {
//   return arg;
// };
const echo = (arg) => {
    return arg;
};
console.log(echo(100));
console.log(echo('Hello!'));
console.log(echo(true));
class Mirror {
    constructor(value) {
        this.value = value;
    }
    echo() {
        return this.value;
    }
}
console.log(new Mirror(123).echo());
console.log(new Mirror('Hello, generics!').echo());
console.log(new Mirror(true).echo());
