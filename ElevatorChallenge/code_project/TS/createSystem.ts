class createSystem {
    private buildingArr: Building[];
    private sett: settings;

    constructor(buildingErea: HTMLDivElement ,Settings: settings) {
        this.buildingArr = [];
        this.sett = Settings;
        this.createBuildings();
        this.appendToParent(buildingErea);
    }
    private createBuildings = () => {
        for (let i = 0; i < this.sett.numBuildings; i++) {
            this.buildingArr.push(new Building(this.sett));
        }
    }
    private appendToParent(parent: HTMLElement): void {
        this.buildingArr.forEach((building) => {
            building.mycurrentBuilding.style.maxWidth = `${window.innerWidth / 3}%`
            building.appendToParent(parent);
        });
    }
    run = ():void => {
        this.buildingArr.forEach((building) => {
            building.run();
        })
    };
}
