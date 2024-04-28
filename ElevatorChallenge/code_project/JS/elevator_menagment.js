"use strict";
class singleFloor {
    constructor(numElevators, settings) {
        this.settings = settings;
        this.elevators = [];
        for (let i = 0; i < numElevators; i++) {
            this.elevators.push(new Elevator(this.settings));
        }
        this.elevatorsArea = document.createElement('div');
        this.elevationArea.classList.add("rowFlex");
    }
    get elevationArea() {
        return this.elevatorsArea;
    }
    getOrder(floor) {
        // let minTime:number = this.elevators[0].checkTimeWithFloor(floor);
        let minTime = 100;
        let elevatorIndex = 0;
        for (let i = 0; i < this.elevators.length; ++i) {
            console.log(`elevator: ${i}`);
            if (this.elevators[i].including(floor)) {
                return false;
            }
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
