"use strict";
class Settings {
    constructor() {
        this.Frame = 100;
        this.NumBuildings = 2;
        this.NumFloors = 7;
        this.NumElevators = 3;
        this.Miliseconds = 1000;
        this.AmountPerSecond = 2;
        this.SecondsToStay = 2;
        this.Runtime = this.Miliseconds / this.AmountPerSecond;
        this.FloorHeight = 120;
        this.elevatorSRC = `./elements/elv.png`;
        this.audioSRC = `./elements/ding.mp3`;
    }
    static getInstance() {
        if (!Settings.instance) {
            Settings.instance = new Settings();
        }
        return Settings.instance;
    }
    get frame() { return this.Frame; }
    get floorHeight() { return this.FloorHeight; }
    get numBuildings() { return this.NumBuildings; }
    get numFloors() { return this.NumFloors; }
    get numElevators() { return this.NumElevators; }
    get elevator() { return this.elevatorSRC; }
    get audio() { return this.audioSRC; }
    get runtime() { return this.Runtime; }
    get amountPerSecond() { return this.AmountPerSecond; }
    get secondsToStay() { return this.SecondsToStay; }
}
Settings.instance = null;
