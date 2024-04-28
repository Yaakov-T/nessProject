
class elevatorButton {
    floorNumber: number;
    parent: SingleFloor;
    button: HTMLButtonElement;
    arrivalDisplay: ArrivalDisplay

    constructor(parent: SingleFloor, arrivalDisplay: ArrivalDisplay) {
        this.parent = parent;
        this.floorNumber = this.parent.getfloorNumber();
        this.button = this.createButton();
        this.arrivalDisplay = arrivalDisplay;
    }
    createButton(): HTMLButtonElement {
        const button = document.createElement('button');
        button.classList.add('metal', 'linear');
        button.textContent = `${this.floorNumber}`;
        button.disabled = false;
        button.addEventListener('click', () => {
            this.orderElevator();
        });
        return button;
    }

    appendToParent(parent: HTMLElement): void {
        parent.appendChild(this.button);
    }
    orderElevator(): void {
        this.parent.getOrder();
    }
}
