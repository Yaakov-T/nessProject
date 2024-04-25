"use strict";
class Elevator {
    constructor(frime) {
        this.SumOfTime = 0;
        this.CurrentFloor = 0;
        this.TimeToWait = 0;
        this.XPossition = 0;
        this.frime = frime;
        this.DestinationQueue = [];
        this.ElevatorElement = this.createElevator();
    }
    ;
    createElevator() {
        const elevatorElement = document.createElement('img');
        elevatorElement.src = "./elements/elv.png";
        elevatorElement.classList.add('elevatorStyle');
        elevatorElement.style.height = "110px";
        elevatorElement.style.width = "110px";
        elevatorElement.style.bottom = `${this.XPossition}px`;
        return elevatorElement;
    }
    ;
    get elevatorElement() {
        return this.ElevatorElement;
    }
    appendToParent(parent) {
        parent.appendChild(this.elevatorElement);
    }
    addNewFloor(floor) {
        this.DestinationQueue.push(floor);
        const newTime = this.timeBetweenFloors(floor, this.DestinationQueue[this.DestinationQueue.length - 1]);
        this.SumOfTime += (newTime + (4 * this.frime));
    }
    moveElevator() {
        if (this.TimeToWait > 0) {
            this.TimeToWait--;
        }
        else {
            this.addPart();
            this.ElevatorElement.style.bottom = `${this.XPossition}px`;
            if (this.checkArrivalDestination()) {
                this.openDoor();
            }
            ;
        }
    }
    addPart() {
        if (this.XPossition < this.DestinationQueue[0] * 120) {
            this.XPossition += 120 / this.frime;
        }
        else if (this.XPossition > this.DestinationQueue[0] * 120) {
            this.XPossition -= 120 / this.frime;
        }
    }
    checkArrivalDestination() {
        return Math.abs(this.DestinationQueue[0] * 120 - this.XPossition) < 1;
    }
    checkTimeWithFloor(floor) {
        {
            if (this.DestinationQueue.length > 0) {
                const timeBetween = this.timeBetweenFloors(floor, this.DestinationQueue[this.DestinationQueue.length - 1]);
                return this.SumOfTime + timeBetween;
            }
            return this.timeBetweenFloors(floor, this.CurrentFloor);
        }
    }
    timeBetweenFloors(floor1, floor2) {
        if (floor2 || floor2 == 0) {
            return ((Math.abs(floor2 - floor1)) / 2);
        }
        return 0;
    }
    ;
    openDoor() {
        // ding
        this.TimeToWait = 4 * this.frime;
        if (this.DestinationQueue.length > 0) {
            this.CurrentFloor = this.DestinationQueue.shift();
        }
    }
}
