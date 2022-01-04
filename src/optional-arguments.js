"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let bmi = (height, weight, printable) => {
    const bmi = weight / (height * height);
    if (printable) {
        console.log({ bmi });
    }
    return bmi;
};
bmi(1.78, 86);
// bmi(身長, 体重, console.logで出力するかどうか?)
// bmi(1.78, 86, true);
// bmi(1.78, 86, false);
// bmi(1.78, 86);
