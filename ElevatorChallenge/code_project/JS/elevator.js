"use strict";
class Elevator {
    constructor(yPossition) {
        this.SumOfTime = 0;
        this.CurrentFloor = 0;
        this.TimeToWait = 0;
        this.XPossition = 0;
        this.audioElement = new Audio(Settings.getInstance().audio);
        this.DestinationQueue = [];
        this.ElevatorElement = this.createElevator(yPossition);
    }
    ;
    createElevator(yPossition) {
        const elevatorElement = document.createElement('img');
        elevatorElement.src = Settings.getInstance().elevator;
        elevatorElement.classList.add('elevatorStyle');
        elevatorElement.style.height = "110px";
        elevatorElement.style.width = "110px";
        elevatorElement.style.bottom = `${this.XPossition}px`;
        elevatorElement.style.left = `${yPossition}px`;
        return elevatorElement;
    }
    ;
    //push the element to the screen using the parents element
    appendToParent(parent) {
        parent.appendChild(this.ElevatorElement);
    }
    timeToStay() {
        return Settings.getInstance().secondsToStay * Settings.getInstance().amountPerSecond;
    }
    addNewFloor(floor) {
        const newTime = this.timeBetweenFloors(floor, this.DestinationQueue[this.DestinationQueue.length - 1]);
        this.SumOfTime += (newTime + this.timeToStay());
        this.DestinationQueue.push(floor);
        return (this.SumOfTime - this.timeToStay());
    }
    // check if the floor in the argument is exists in the elevator
    including(floor) {
        return (floor === this.CurrentFloor ||
            this.DestinationQueue.includes(floor));
    }
    checkTimeWithFloor(floor) {
        let timeBetween;
        if (this.DestinationQueue.length > 0) {
            timeBetween = this.timeBetweenFloors(floor, this.DestinationQueue[this.DestinationQueue.length - 1]);
        }
        else {
            timeBetween = this.timeBetweenFloors(floor, this.CurrentFloor);
        }
        return (this.SumOfTime + timeBetween);
    }
    timeBetweenFloors(floor1, floor2) {
        if (floor2 || floor2 == 0) {
            return Math.abs(floor2 - floor1);
        }
        return this.timeBetweenFloors(floor1, this.CurrentFloor);
    }
    ;
    run() {
        if (this.SumOfTime) {
            this.SumOfTime -= 1;
        }
        if (this.TimeToWait > 0) {
            this.TimeToWait--;
        }
        else {
            this.audioElement.pause();
            let count = 0;
            const actionInterval = setInterval(() => {
                if (count >= Settings.getInstance().frame) {
                    clearInterval(actionInterval);
                }
                else {
                    this.moveElevator();
                    count++;
                }
            }, (Settings.getInstance().runtime / Settings.getInstance().frame));
        }
    }
    checkArrivalDestination() {
        return Math.abs(this.DestinationQueue[0] * 120 - this.XPossition) < 0.1;
    }
    moveElevator() {
        this.moveDirection();
        this.ElevatorElement.style.bottom = `${this.XPossition}px`;
        if (this.checkArrivalDestination()) {
            this.openDoor();
        }
        ;
    }
    moveDirection() {
        if (this.CurrentFloor || this.CurrentFloor == 0) {
            if (this.CurrentFloor < this.DestinationQueue[0]) {
                this.XPossition += 120 / Settings.getInstance().frame;
            }
            else if (this.CurrentFloor > this.DestinationQueue[0]) {
                this.XPossition -= 120 / Settings.getInstance().frame;
            }
        }
    }
    openDoor() {
        this.audioElement.currentTime = 0; // Reset playback to the beginning
        this.audioElement.play();
        this.TimeToWait = 4;
        if (this.DestinationQueue.length > 0) {
            this.CurrentFloor = this.DestinationQueue.shift();
        }
    }
}
