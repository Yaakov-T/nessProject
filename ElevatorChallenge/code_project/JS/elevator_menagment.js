"use strict";
class ElevatorManagement {
    constructor(numElevators, frime) {
        this.frime = frime;
        this.elevators = [];
        for (let i = 0; i < numElevators; i++) {
            this.elevators.push(new Elevator(this.frime));
        }
        this.elevatorsArea = document.createElement('div');
        this.elevationArea.classList.add("rowFlex");
    }
    get elevationArea() {
        return this.elevatorsArea;
    }
    getOrder(floor) {
        let minTime = this.elevators[0].checkTimeWithFloor(floor);
        let elevatorIndex = 0;
        for (let i = 1; i < this.elevators.length; ++i) {
            const time = this.elevators[i].checkTimeWithFloor(floor);
            if (time < minTime) {
                minTime = time;
                elevatorIndex = i;
            }
        }
        this.elevators[elevatorIndex].addNewFloor(floor);
        return minTime;
    }
    appendToParent(parent) {
        this.elevators.forEach((elevator, i) => {
            elevator.elevatorElement.style.left = `${115 * i + 8}px`;
            elevator.appendToParent(this.elevatorsArea);
        });
        parent.appendChild(this.elevatorsArea);
    }
    moveAllElevators() {
        this.elevators.forEach((elevator) => {
            elevator.moveElevator();
        });
    }
}
