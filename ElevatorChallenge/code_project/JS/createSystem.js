"use strict";
class CreateSystem {
    constructor(buildingErea) {
        this.createBuildings = () => {
            for (let i = 0; i < this.settings.numBuildings; i++) {
                this.buildingArr.push(Factory.getInstance().create("Building", null));
            }
        };
        this.run = () => {
            this.buildingArr.forEach((building) => {
                building.run();
            });
        };
        this.buildingArr = [];
        this.settings = Settings.getInstance();
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
