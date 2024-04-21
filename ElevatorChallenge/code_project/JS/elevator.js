"use strict";
class Elevator {
    constructor() {
        this.m_sumOfTime = 0;
        this.m_timeToWait = 0;
        this.m_XPossition = 0;
        this.m_destinationQueue = [];
        this.m_elevatorElement = document.createElement('img');
        this.aditAtributes();
    }
    ;
    aditAtributes() {
        this.m_elevatorElement.src = "./elements/elv.png";
        this.m_elevatorElement.classList.add('elevatorStyle');
        this.m_elevatorElement.style.height = "110px";
        this.m_elevatorElement.style.width = "110px";
        this.m_elevatorElement.style.bottom = `${this.m_XPossition}px`;
    }
    ;
    get elevatorElement() {
        return this.m_elevatorElement;
    }
    appendToParent(parent) {
        parent.appendChild(this.elevatorElement);
    }
    addFloorToQueue(floor) {
        this.m_destinationQueue.push(floor);
        const newTime = this.timeBetweenFloors(floor, this.m_destinationQueue[this.m_destinationQueue.length - 1]);
        this.m_sumOfTime += (newTime + 4);
    }
    moveElevator() {
        if (this.m_timeToWait > 0) {
            this.m_timeToWait--;
        }
        else {
            this.addPart();
            this.m_elevatorElement.style.bottom = `${this.m_XPossition}px`;
            if (this.checkArrivalDestination()) {
                this.openDoor();
            }
            ;
        }
    }
    addPart() {
        if (this.m_XPossition < this.m_destinationQueue[0] * 120) {
            this.m_XPossition += 120;
        }
        else if (this.m_XPossition > this.m_destinationQueue[0] * 120) {
            this.m_XPossition -= 120;
        }
    }
    checkArrivalDestination() {
        return (this.m_destinationQueue[0] * 120 == this.m_XPossition);
        // this.m_timeToWait = 4;
        // const newFloor = this.m_destinationQueue.shift()
        // if (newFloor)
        //     this.m_currentFloor = newFloor;
    }
    timeWithNewFloor(floor) {
        {
            if (this.m_destinationQueue[this.m_destinationQueue.length - 1]) {
                const timeBetween = this.timeBetweenFloors(floor, this.m_destinationQueue[this.m_destinationQueue.length - 1]);
                return this.m_sumOfTime + timeBetween;
            }
            return this.m_sumOfTime;
        }
    }
    timeBetweenFloors(floor1, floor2) {
        if (floor1 < floor2) {
            return (floor2 - floor1) / 2;
        }
        return (floor1 - floor2) / 2;
    }
    ;
    openDoor() {
        // ding
        this.m_timeToWait = 4;
        const newFloor = this.m_destinationQueue.shift();
        if (newFloor) {
        }
    }
}
