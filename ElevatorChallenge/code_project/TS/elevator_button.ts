
class ElevatorButton {
    floorNumber: number;
    parent: SingleFloor;
    button: HTMLButtonElement;

    constructor(parent: SingleFloor) {
        this.parent = parent;
        this.floorNumber = this.parent.getfloorNumber();
        this.button = this.createButton();
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
