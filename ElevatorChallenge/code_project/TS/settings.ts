class Settings {
    private static instance: Settings | null = null;

    private Frame: number = 100;
    private NumBuildings: number = 7;
    private NumFloors: number = 7;
    private NumElevators: number = 3;
    private Miliseconds: number = 1000;
    private AmountPerSecond = 2;
    private SecondsToStay: number = 2;
    private Runtime: number = this.Miliseconds / this.AmountPerSecond;
    private FloorHeight: number = 120;
    private elevatorSRC: string = `./elements/elv.png`
    private audioSRC: string = `./elements/ding.mp3`

    private constructor() {}

    public static getInstance(): Settings {
        if (!Settings.instance) {
            Settings.instance = new Settings();
        }
        return Settings.instance;
    }

    get frame(): number { return this.Frame; }
    get floorHeight(): number { return this.FloorHeight; }
    get numBuildings(): number { return this.NumBuildings; }
    get numFloors(): number { return this.NumFloors; }
    get numElevators(): number { return this.NumElevators; }
    get elevator(): string { return this.elevatorSRC; }
    get audio(): string { return this.audioSRC; }
    get runtime(): number { return this.Runtime; }
    get amountPerSecond(): number { return this.AmountPerSecond; }
    get secondsToStay(): number { return this.SecondsToStay; }
}