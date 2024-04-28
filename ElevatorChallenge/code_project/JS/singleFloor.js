"use strict";
class SingleFloor {
    constructor(Parent, floorNumber) {
        this.SingleFloor = document.createElement('div');
        this.parent = Parent;
        this.SingleFloor.style.height = '100%';
        this.floorNumber = floorNumber;
        this.arrivalDisplay = new ArrivalDisplay();
        this.elevatorCallButton = new elevatorButton(this, this.arrivalDisplay);
        this.blackLine = new Line();
        this.floorSpace = new FloorSpace();
    }
    getfloorNumber() {
        return this.floorNumber;
    }
    setDisplay(time) {
        this.arrivalDisplay.setTime(time);
    }
    getOrder() {
        const display = this.parent.getOrder(this.floorNumber);
        if (display) {
            this.setDisplay(display);
        }
    }
    get singleFloor() {
        return this.SingleFloor;
    }
    run() {
        this.arrivalDisplay.run();
    }
    appendToParent(parent) {
        // Append elements to the singleFloor container
        this.blackLine.appendToParent(this.singleFloor);
        this.floorSpace.appendToParent(this.singleFloor);
        this.elevatorCallButton.appendToParent(this.floorSpace.floorSpace); // Append button to floorSpace
        this.arrivalDisplay.appendToParent(this.floorSpace.floorSpace); // Append display to floorSpace
        // Append singleFloor container to the specified parent element
        parent.appendChild(this.singleFloor);
    }
}
