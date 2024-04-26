"use strict";
class elevatorButton {
    constructor(floorNumber, elevatorMenagment, arrivalDisplay) {
        this.floorNumber = floorNumber;
        this.elevatorMenagment = elevatorMenagment;
        this.button = this.createButton();
        this.arrivalDisplay = arrivalDisplay;
    }
    createButton() {
        const button = document.createElement('button');
        button.classList.add('metal', 'linear');
        button.textContent = `${this.floorNumber}`;
        button.disabled = false;
        button.addEventListener('click', () => {
            this.orderElevator();
        });
        return button;
    }
    appendToParent(parent) {
        parent.appendChild(this.button);
    }
    orderElevator() {
        const display = this.elevatorMenagment.getOrder(this.floorNumber);
        this.arrivalDisplay.setTime(display);
    }
}
