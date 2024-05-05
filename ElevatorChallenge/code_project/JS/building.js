"use strict";
class Building {
    constructor(settings) {
        this.settings = settings;
        this.floorsarea = document.createElement("div");
        this.currentBuilding = this.createBuild();
        this.elevatorManagement = this.createElevatorMenage();
        this.floors = this.createFloors();
    }
    getOrder(floorNum) {
        return this.elevatorManagement.getOrder(floorNum);
    }
    createBuild() {
        const currentBuilding = document.createElement("div");
        currentBuilding.style.height = `${(this.settings.floorHeight) * this.settings.numFloors}px`;
        return currentBuilding;
    }
    createElevatorMenage() {
        const elevatorManagement = new elevatorMenagment(this.settings.numElevators, this);
        elevatorManagement.elevatorsArea.style.height = `${this.settings.floorHeight * this.settings.numFloors}px`;
        return elevatorManagement;
    }
    createFloors() {
        this.floorsarea.style.maxWidth = "50%";
        this.floorsarea.style.minWidth = "120px";
        const floors = [];
        for (let i = 0; i < this.settings.numFloors; i++) {
            floors.push(new SingleFloor(this, (this.settings.numFloors - i - 1)));
        }
        return floors;
    }
    get mycurrentBuilding() {
        return this.currentBuilding;
    }
    appendToParent(parent) {
        this.currentBuilding.classList.add("rowFlex");
        this.floorsarea.classList.add("columFlex");
        this.floors.forEach((floor) => {
            floor.appendToParent(this.floorsarea);
        });
        this.currentBuilding.appendChild(this.floorsarea);
        const elevatorContainer = document.createElement("div");
        elevatorContainer.classList.add("elevator-management");
        this.elevatorManagement.appendToParent(elevatorContainer);
        this.currentBuilding.appendChild(elevatorContainer);
        parent.appendChild(this.currentBuilding);
    }
    run() {
        this.floors.forEach((SingleFloor) => {
            SingleFloor.run();
        });
        this.elevatorManagement.run();
    }
}
