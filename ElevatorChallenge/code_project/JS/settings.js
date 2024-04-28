"use strict";
class settings {
    constructor() {
        this.Frime = 100;
        this.NumBuildings = 1;
        this.NumFloors = 7;
        this.NumElevators = 2;
    }
    get frime() { return this.Frime; }
    get numBuildings() { return this.NumBuildings; }
    get numFloors() { return this.NumFloors; }
    get numElevators() { return this.NumElevators; }
}
