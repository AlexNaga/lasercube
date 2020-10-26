"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.relativeToBlue = exports.relativeToRedGreen = exports.relativeToPosition = exports.COLOR_RESOLUTION = exports.XY_RESOLUTION = void 0;
// The Ether Dream firmware uses 16-bit integers for the resolution, ranging from 0 to 65535.
// Source: https://github.com/j4cbo/j4cDAC/blob/e592ebcb7c9b6fb521be2005f4b85de54bc04f0f/common/protocol.h
exports.XY_RESOLUTION = 4095;
exports.COLOR_RESOLUTION = 255;
function relativeToPosition(n) {
    return Math.floor(n * exports.XY_RESOLUTION);
}
exports.relativeToPosition = relativeToPosition;
function relativeToRedGreen(r, g) {
    r = Math.floor(r * exports.COLOR_RESOLUTION);
    g = Math.floor(g * exports.COLOR_RESOLUTION);
    return r | (g << 8);
}
exports.relativeToRedGreen = relativeToRedGreen;
function relativeToBlue(b) {
    return Math.floor(b * exports.COLOR_RESOLUTION);
}
exports.relativeToBlue = relativeToBlue;
