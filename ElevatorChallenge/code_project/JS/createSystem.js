"use strict";
class CreateSystem {
    constructor(buildingErea) {
        this.createBuildings = () => {
            for (let i = 0; i < Settings.getInstance().numBuildings; i++) {
                this.buildingArr.push(Factory.getInstance().create("Building", null));
            }
        };
        this.run = () => {
            this.buildingArr.forEach((building) => {
                building.run();
            });
        };
        this.buildingArr = [];
        this.createBuildings();
        this.appendToParent(buildingErea);
    }
    appendToParent(parent) {
        this.buildingArr.forEach((building) => {
            building.appendToParent(parent);
        });
    }
}
