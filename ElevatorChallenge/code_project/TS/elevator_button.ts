
class elevatorButton {
    floorNumber: number;
    elevatorMenagment: ElevatorManagement;
    button: HTMLButtonElement;
    arrivalDisplay : ArrivalDisplay

    constructor(floorNumber: number, elevatorMenagment: ElevatorManagement, arrivalDisplay: ArrivalDisplay) {
        this.floorNumber = floorNumber;
        this.elevatorMenagment = elevatorMenagment;
        this.button = this.createButton();
        this.arrivalDisplay  = arrivalDisplay;
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
        const display = this.elevatorMenagment.getOrder(this.floorNumber);
        this.arrivalDisplay.setTime(display);
    }

}
