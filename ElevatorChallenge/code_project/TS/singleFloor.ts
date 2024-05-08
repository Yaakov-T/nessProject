
class SingleFloor {
    private SingleFloor: HTMLDivElement = document.createElement('div');
    private parent: Building;
    private floorNumber: number;
    private elevatorCallButton: ElevatorButton;
    private blackLine: Line;
    private floorSpace: FloorSpace;
    private arrivalDisplay: ArrivalDisplay;
    private settings: Settings;

    constructor(Parent: Building, floorNumber: number) {
        this.parent = Parent;
        this.settings = Settings.getInstance();
        this.floorNumber = floorNumber;
        this.arrivalDisplay = Factory.getInstance().create("ArrivalDisplay", null)
        this.elevatorCallButton = Factory.getInstance().create("ElevatorButton", this);
        this.blackLine = Factory.getInstance().create("Line",null);
        this.floorSpace = Factory.getInstance().create("FloorSpace",null);
    }
    getfloorNumber(): number {
        return this.floorNumber;
    }

    setDisplay(time: number) {
        this.arrivalDisplay.setTime(time);
    }
    getOrder(): void {
        const display: number | false = this.parent.getOrder(this.floorNumber);
        if (display) {
            this.setDisplay(display);
        }
    }
    get singleFloor(): HTMLDivElement {
        return this.SingleFloor;
    }
    run(): void {
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
