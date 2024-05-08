class CreateSystem {
    private buildingArr: Building[];
    private settings: Settings;

    constructor(buildingErea: HTMLDivElement) {
        this.buildingArr = [];
        this.settings = Settings.getInstance();
        this.createBuildings();
        this.appendToParent(buildingErea);
    }
    private createBuildings = () => {
        for (let i = 0; i < this.settings.numBuildings; i++) {
            this.buildingArr.push(Factory.getInstance().create( "Building",null));
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
