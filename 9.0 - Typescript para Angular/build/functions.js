"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function addNumber(x, y) {
    return x + y;
}
function addToHello(name) {
    return `Hello ${name}`;
}
function CallToPhone(phone) {
    return phone;
}
function getDataBase(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return "Doug";
    });
}
let soma = addNumber(4, 7);
console.log();
