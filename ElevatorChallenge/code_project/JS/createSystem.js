"use strict";
class createSystem {
    constructor(buildingErea, Settings) {
        this.createBuildings = () => {
            for (let i = 0; i < this.sett.numBuildings; i++) {
                this.buildingArr.push(new Building(this.sett));
            }
        };
        this.run = () => {
            this.buildingArr.forEach((building) => {
                building.run();
            });
        };
        this.buildingArr = [];
        this.sett = Settings;
        this.createBuildings();
        this.appendToParent(buildingErea);
    }
    appendToParent(parent) {
        this.buildingArr.forEach((building) => {
            building.mycurrentBuilding.style.maxWidth = `${window.innerWidth / 3}%`;
            building.appendToParent(parent);
        });
    }
}
