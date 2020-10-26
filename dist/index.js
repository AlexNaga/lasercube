"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@laser-dac/core");
const laserdock_1 = require("@laser-dac/laserdock");
(() => __awaiter(void 0, void 0, void 0, function* () {
    const dac = new core_1.DAC();
    dac.use(new laserdock_1.Laserdock());
    const started = yield dac.start();
    if (started) {
        const pps = 30000; // points per second
        // draw a horizontal red line from left to right in the center
        // @laser-dac/draw can help you with drawing points!
        const scene = {
            points: [
                { x: 0.1, y: 0.5, r: 1, g: 0, b: 0 },
                { x: 0.9, y: 0.5, r: 1, g: 0, b: 0 },
            ],
        };
        dac.stream(scene, pps);
    }
}))();
