class settings {
    private Frime: number = 100;
    private NumBuildings: number = 1;
    private NumFloors: number = 7;
    private NumElevators: number = 3;
    private elevatorSRC: string = `./elements/elv.png`
    private audioSRC: string = `./elements/ding.mp3`

    constructor() {
    }
    get frime ():number {return this.Frime;} 
    get numBuildings():number {return this.NumBuildings;} 
    get numFloors ():number {return this.NumFloors;} 
    get numElevators ():number {return this.NumElevators;}   
    get elevator ():string {return this.elevatorSRC;}   
    get audio ():string {return this.audioSRC;}   
}
