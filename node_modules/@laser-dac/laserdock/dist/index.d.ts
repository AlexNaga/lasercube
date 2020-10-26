import { Device } from '@laser-dac/core';
import * as laserdockLib from './LaserdockLib';
export declare class Laserdock extends Device {
    private interval?;
    start(): Promise<boolean>;
    stop(): void;
    private convertPoint;
    stream(scene: {
        points: laserdockLib.IPoint[];
    }, pointsRate: number, fps: number): void;
}
