export declare function init(): number;
export declare function enableOutput(): number;
export declare function disableOutput(): number;
export declare function clearRingBuffer(): number;
export declare function setDacRate(rate: number): number;
export declare function sendSamples(points: any[], numOfPoints: number): number;
export interface IPoint {
    x: number;
    y: number;
    r: number;
    g: number;
    b: number;
    i?: number;
}
