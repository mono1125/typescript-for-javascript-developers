"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
let url = 'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';
axios_1.default.get(url).then(function (response) {
    let data;
    data = response.data;
    console.log(data);
});
