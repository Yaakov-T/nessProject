
class SingleFloor {
    private m_singleFloor: HTMLDivElement;
    private floorNumber: number;
    private elevatorCallButton: elevatorButton;
    private blackLine: Line;
    private floorSpace: FloorSpace;

    constructor(floorNumber: number,elevatorMenagment: ElevatorManagement) {
        this.m_singleFloor = document.createElement('div');
        this.m_singleFloor.style.height = '100%';
        this.floorNumber = floorNumber;
        this.elevatorCallButton = new elevatorButton(this.floorNumber,elevatorMenagment);
        this.blackLine = new Line();
        this.floorSpace = new FloorSpace();
    }
    get singleFloor():HTMLDivElement{
        return this.m_singleFloor;
    }
    appendToParent(parent: HTMLElement): void {
        // Append elements to the singleFloor container
        this.blackLine.appendToParent(this.singleFloor);
        this.floorSpace.appendToParent(this.singleFloor);
        this.elevatorCallButton.appendToParent(this.floorSpace.floorSpace); // Append button to floorSpace

        // Append singleFloor container to the specified parent element
        parent.appendChild(this.singleFloor);
    }
}
