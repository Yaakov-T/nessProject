"use strict";
class elevatorButton {
    constructor(floorNumber, elevatorMenagment) {
        this.floorNumber = floorNumber;
        this.elevatorMenagment = elevatorMenagment;
        this.button = this.createButton();
    }
    createButton() {
        const button = document.createElement('button');
        button.classList.add('metal', 'linear');
        button.textContent = `${this.floorNumber}`;
        button.disabled = false;
        button.addEventListener('click', () => {
            button.disabled = false;
            this.orderElevator();
        });
        return button;
    }
    appendToParent(parent) {
        parent.appendChild(this.button);
    }
    orderElevator() {
        return this.elevatorMenagment.getOrder(this.floorNumber);
    }
}
