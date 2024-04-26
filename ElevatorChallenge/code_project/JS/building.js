"use strict";
class Building {
    constructor(numFloors, numElevators, floorHeight, frime) {
        this.frime = frime;
        this.floorsarea = document.createElement("div");
        this.currentBuilding = this.createBuild();
        this.elevatorManagement = this.createElevatorMenage();
        this.floors = this.createFloors();
    }
    createBuild() {
        const currentBuilding = document.createElement("div");
        currentBuilding.style.height = `${(floorHeight) * numFloors}px`;
        return currentBuilding;
    }
    createElevatorMenage() {
        const elevatorManagement = new ElevatorManagement(numElevators, this.frime);
        elevatorManagement.elevationArea.style.height = `${floorHeight * numFloors}px`;
        return elevatorManagement;
    }
    createFloors() {
        this.floorsarea.style.maxWidth = "50%";
        this.floorsarea.style.minWidth = "120px";
        const floors = [];
        for (let i = 0; i < numFloors; i++) {
            floors.push(new SingleFloor(numFloors - i - 1, this.elevatorManagement));
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
        this.elevatorManagement.moveAllElevators();
        this.floors.forEach((SingleFloor) => {
            SingleFloor.run();
        });
    }
}
