"use strict";
class settings {
    constructor() {
        this.Frime = 50;
        this.NumBuildings = 2;
        this.NumFloors = 7;
        this.NumElevators = 3;
        this.elevatorSRC = `./elements/elv.png`;
        this.audioSRC = `./elements/ding.mp3`;
    }
    get frime() { return this.Frime; } //frame
    get numBuildings() { return this.NumBuildings; }
    get numFloors() { return this.NumFloors; }
    get numElevators() { return this.NumElevators; }
    get elevator() { return this.elevatorSRC; }
    get audio() { return this.audioSRC; }
}
