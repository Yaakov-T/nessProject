"use strict";
class SingleFloor {
    constructor(floorNumber, elevatorMenagment) {
        this.m_singleFloor = document.createElement('div');
        this.m_singleFloor.style.height = '100%';
        this.floorNumber = floorNumber;
        this.elevatorCallButton = new elevatorButton(this.floorNumber, elevatorMenagment);
        this.blackLine = new Line();
        this.floorSpace = new FloorSpace();
    }
    get singleFloor() {
        return this.m_singleFloor;
    }
    appendToParent(parent) {
        // Append elements to the singleFloor container
        this.blackLine.appendToParent(this.singleFloor);
        this.floorSpace.appendToParent(this.singleFloor);
        this.elevatorCallButton.appendToParent(this.floorSpace.floorSpace); // Append button to floorSpace
        // Append singleFloor container to the specified parent element
        parent.appendChild(this.singleFloor);
    }
}
