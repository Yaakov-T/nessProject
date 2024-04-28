class settings {
    private Frime: number = 100;
    private NumBuildings: number = 1;
    private NumFloors: number = 7;
    private NumElevators: number = 2;

    constructor() {
    }
    get frime ():number {return this.Frime;} 
    get numBuildings():number {return this.NumBuildings;} 
    get numFloors ():number {return this.NumFloors;} 
    get numElevators ():number {return this.NumElevators;}   
}
