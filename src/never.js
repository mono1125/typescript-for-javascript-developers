"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function error(message) {
    throw new Error(message);
}
try {
    let result = error('test');
    console.log({ result });
}
catch (error) {
    console.log({ error });
}
let foo = undefined;
let bar = error('only me!');
