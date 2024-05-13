"use strict";
class Building {
    constructor() {
        this.floorsarea = document.createElement("div");
        this.currentBuilding = this.createBuild();
        this.elevatorManagement = this.createElevatorMenage();
        this.floors = this.createFloors();
    }
    createBuild() {
        const currentBuilding = document.createElement("div");
        currentBuilding.style.height = `${(Settings.getInstance().floorHeight) * Settings.getInstance().numFloors}px`;
        return currentBuilding;
    }
    createElevatorMenage() {
        const elevatorManagement = Factory.getInstance().create("ElevatorMenagment", null);
        elevatorManagement.elevatorsArea.style.height = `${Settings.getInstance().floorHeight * Settings.getInstance().numFloors}px`;
        return elevatorManagement;
    }
    createFloors() {
        this.floorsarea.style.minWidth = "160px";
        const floors = [];
        for (let i = 0; i < Settings.getInstance().numFloors; i++) {
            floors.push(Factory.getInstance().create("SingleFloor", [this, (Settings.getInstance().numFloors - i - 1)]));
        }
        return floors;
    }
    get mycurrentBuilding() {
        return this.currentBuilding;
    }
    getOrder(floorNum) {
        return this.elevatorManagement.getOrder(floorNum);
    }
    appFloors() {
        this.floorsarea.classList.add("columFlex");
        this.floors.forEach((floor) => {
            floor.appendToParent(this.floorsarea);
        });
        this.currentBuilding.appendChild(this.floorsarea);
    }
    appElevator() {
        const elevatorContainer = document.createElement("div");
        elevatorContainer.classList.add("elevator-management");
        this.elevatorManagement.appendToParent(elevatorContainer);
        this.currentBuilding.appendChild(elevatorContainer);
    }
    appendToParent(parent) {
        this.currentBuilding.classList.add("rowFlex");
        this.appFloors();
        this.appElevator();
        parent.appendChild(this.currentBuilding);
    }
    run() {
        this.floors.forEach((SingleFloor) => {
            SingleFloor.run();
        });
        this.elevatorManagement.run();
    }
}
