
class elevatorButton {
    elevatorMenagment: ElevatorManagement;
    button: HTMLButtonElement;
    floorNumber: number;

    constructor(floorNumber: number, elevatorMenagment: ElevatorManagement) {
        this.floorNumber = floorNumber;
        this.elevatorMenagment = elevatorMenagment;
        this.button = this.createButton();
    }
    createButton(): HTMLButtonElement {
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

    appendToParent(parent: HTMLElement): void {
        parent.appendChild(this.button);
    }
    orderElevator(): number {
        // console.log(this.floorNumber);
        return this.elevatorMenagment.getOrder(this.floorNumber);
    }
}
