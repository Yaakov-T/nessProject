"use strict";
class Elevator {
    constructor(yPossition) {
        this.SumOfTime = 0;
        this.CurrentFloor = 0;
        this.TimeToWait = 0;
        this.XPossition = 0;
        this.createElevator = (yPossition) => {
            const elevatorElement = document.createElement('img');
            elevatorElement.src = Settings.getInstance().elevator;
            elevatorElement.classList.add('elevatorStyle');
            elevatorElement.style.height = "110px";
            elevatorElement.style.width = "110px";
            elevatorElement.style.bottom = `${this.XPossition}px`;
            elevatorElement.style.left = `${yPossition}px`;
            return elevatorElement;
        };
        //push the element to the screen using the parents element
        this.appendToParent = (parent) => {
            parent.appendChild(this.ElevatorElement);
        };
        this.timeToStay = () => {
            return Settings.getInstance().secondsToStay * Settings.getInstance().amountPerSecond;
        };
        // check if the floor in the argument is exists in the elevator
        this.including = (floor) => {
            return ( //floor === this.CurrentFloor ||
            this.DestinationQueue.includes(floor));
        };
        this.addNewFloor = (floor) => {
            const timeBetween = this.timeBetweenFloors(floor, this.DestinationQueue[this.DestinationQueue.length - 1]);
            this.SumOfTime += (timeBetween + this.timeToStay());
            this.DestinationQueue.push(floor);
            return (this.SumOfTime - this.timeToStay());
        };
        this.checkTimeWithFloor = (floor) => {
            const timeBetween = this.timeBetweenFloors(floor, this.DestinationQueue[this.DestinationQueue.length - 1]);
            return (this.SumOfTime + timeBetween);
        };
        this.timeBetweenFloors = (floor1, floor2) => {
            if (floor2 || floor2 == 0) {
                return Math.abs(floor2 - floor1);
            }
            return this.timeBetweenFloors(floor1, this.CurrentFloor);
        };
        ///////////////////////////////////////////////////
        this.run = () => {
            if (this.SumOfTime) {
                this.SumOfTime -= 1;
            }
            this.TimeToWait--;
            if (this.TimeToWait == 0) {
                this.closeDoor();
            }
            else {
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
        };
        this.checkArrivalDestination = () => {
            return Math.abs(this.DestinationQueue[0] * 120 - this.XPossition) < 0.1;
        };
        this.moveElevator = () => {
            if (this.TimeToWait <= 0) {
                this.moveDirection();
                this.ElevatorElement.style.bottom = `${this.XPossition}px`;
                if (this.checkArrivalDestination()) {
                    this.openDoor();
                }
                ;
            }
        };
        this.moveDirection = () => {
            if (this.CurrentFloor || this.CurrentFloor == 0) {
                if (this.CurrentFloor < this.DestinationQueue[0]) {
                    this.XPossition += 120 / Settings.getInstance().frame;
                }
                else if (this.CurrentFloor > this.DestinationQueue[0]) {
                    this.XPossition -= 120 / Settings.getInstance().frame;
                }
            }
        };
        this.openDoor = () => {
            this.audioElement.play();
            this.CurrentFloor = undefined;
            this.TimeToWait = 4;
        };
        this.audioElement = new Audio(Settings.getInstance().audio);
        this.DestinationQueue = [];
        this.ElevatorElement = this.createElevator(yPossition);
    }
    ;
    closeDoor() {
        this.audioElement.pause();
        this.audioElement.currentTime = 0; // Reset playback to the beginning
        if (this.DestinationQueue.length > 0) {
            this.CurrentFloor = this.DestinationQueue.shift();
        }
    }
}
