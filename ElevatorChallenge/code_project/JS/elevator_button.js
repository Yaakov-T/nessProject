"use strict";
class ElevatorButton {
    constructor(parent) {
        this.parent = parent;
        this.floorNumber = this.parent.floorNumber;
        this.button = this.createButton();
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
        this.button.disabled = true;
        this.button.classList.add("greenFont");
    }
    freeButton() {
        this.button.disabled = false;
        this.button.classList.remove("greenFont");
    }
}
