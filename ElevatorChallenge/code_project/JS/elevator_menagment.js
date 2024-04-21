"use strict";
class ElevatorManagement {
    constructor(numElevators) {
        this.elevators = [];
        for (let i = 0; i < numElevators; i++) {
            this.elevators.push(new Elevator());
        }
        this.elevatorsArea = document.createElement('div');
        this.elevationArea.classList.add("rowFlex");
    }
    get elevationArea() {
        return this.elevatorsArea;
    }
    getOrder(floor) {
        let minTime = this.elevators[0].timeWithNewFloor(floor);
        let elevatorIndex = 0;
        for (let i = 1; i < this.elevators.length; i++) {
            const time = this.elevators[i].timeWithNewFloor(floor);
            if (time < minTime) {
                minTime = time;
                elevatorIndex = i;
            }
        }
        this.elevators[elevatorIndex].addFloorToQueue(floor);
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
