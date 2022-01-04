"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const kansu = () => 43;
let numberAny = kansu();
let numberUnknown = kansu();
let sumAny = numberAny + 10;
if (typeof numberUnknown === 'number') {
    let sumUnknown = numberUnknown + 10;
}
