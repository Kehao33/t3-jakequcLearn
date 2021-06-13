"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const case_1 = __importDefault(require("case"));
const formatLabel = (value, template = "title", options) => {
    const { fill, noApostrophes, names, abbreviations } = options || {};
    switch (template) {
        case "upper":
        case "lower":
        case "capital":
        // return Case[template](value, names, noApostrophes);
        case "sentence":
            return case_1.default[template](value, names, abbreviations);
        default:
            return case_1.default[template](value);
    }
};
exports.default = formatLabel;
console.log(formatLabel("Add A Department"));
