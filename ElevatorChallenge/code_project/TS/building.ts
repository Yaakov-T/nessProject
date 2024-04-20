class Building {
    private currentBuilding: HTMLDivElement;
    private floors: SingleFloor[];
    private elevatorManagement: ElevatorManagement;

    constructor(numFloors: number, numElevators: number, floorHeight: number) {
        this.currentBuilding = document.createElement("div");
        this.currentBuilding.style.height = `${(floorHeight) * numFloors}px`;
        this.floors = [];
        this.elevatorManagement = new ElevatorManagement(numElevators);
        this.elevatorManagement.elevationArea.style.height = `${floorHeight * numFloors}px`;
        for (let i = 0; i < numFloors; i++) {
            this.floors.push(new SingleFloor(numFloors - i - 1, this.elevatorManagement));
        }
    }
    get mycurrentBuilding(): HTMLDivElement {
        return this.currentBuilding;
    }
    appendToParent(parent: HTMLElement): void {
        const buildingContainer = document.createElement("div");
        buildingContainer.classList.add("rowFlex");

        const floorContainer = document.createElement("div");
        floorContainer.classList.add("columFlex");
        floorContainer.style.width = "100%";
        this.floors.forEach((floor) => {
            floor.appendToParent(floorContainer);
            buildingContainer.appendChild(floorContainer);
        });

        const elevatorContainer = document.createElement("div");
        elevatorContainer.classList.add("elevator-management");
        this.elevatorManagement.appendToParent(elevatorContainer);

        buildingContainer.appendChild(elevatorContainer);
        this.currentBuilding.appendChild(buildingContainer);
        parent.appendChild(this.currentBuilding);
    }
    run(): void {
        this.elevatorManagement.moveAllElevators();
    }
}

