"use strict";
class elevatorButton {
    constructor(parent, arrivalDisplay) {
        this.parent = parent;
        this.floorNumber = this.parent.getfloorNumber();
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
        this.parent.getOrder();
    }
}
