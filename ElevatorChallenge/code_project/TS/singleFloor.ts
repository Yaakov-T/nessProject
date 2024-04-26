
class SingleFloor {
    private SingleFloor: HTMLDivElement;
    private floorNumber: number;
    private elevatorCallButton: elevatorButton;
    private blackLine: Line;
    private floorSpace: FloorSpace;
    private arrivalDisplay: ArrivalDisplay;

    constructor(floorNumber: number ,elevatorMenagment: ElevatorManagement) {
        this.SingleFloor = document.createElement('div');
        this.SingleFloor.style.height = '100%';
        this.floorNumber = floorNumber;
        this.arrivalDisplay = new ArrivalDisplay();
        this.elevatorCallButton = new elevatorButton(this.floorNumber,elevatorMenagment , this.arrivalDisplay);
        this.blackLine = new Line();
        this.floorSpace = new FloorSpace();
    }
    get singleFloor():HTMLDivElement{
        return this.SingleFloor;
    }
    run():void{
        this.arrivalDisplay.run();
    }
    appendToParent(parent: HTMLElement): void {
        // Append elements to the singleFloor container
        this.blackLine.appendToParent(this.singleFloor);
        this.floorSpace.appendToParent(this.singleFloor);
        this.elevatorCallButton.appendToParent(this.floorSpace.floorSpace); // Append button to floorSpace
        this.arrivalDisplay.appendToParent(this.floorSpace.floorSpace); // Append display to floorSpace

        // Append singleFloor container to the specified parent element
        parent.appendChild(this.singleFloor);
    }
}
