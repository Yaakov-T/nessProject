class Building {
    private currentBuilding: HTMLDivElement;
    private floorsarea: HTMLDivElement;
    private floors: SingleFloor[];
    private elevatorManagement: elevatorMenagment;
    settings: settings;

    constructor(settings: settings) {
        this.settings = settings;
        this.floorsarea = document.createElement("div");
        this.currentBuilding = this.createBuild();
        this.elevatorManagement = this.createElevatorMenage();
        this.floors = this.createFloors();
    }

    getOrder(floorNum: number): number | false {
        return this.elevatorManagement.getOrder(floorNum);
    }

    createBuild(): HTMLDivElement {
        const currentBuilding: HTMLDivElement = document.createElement("div");
        currentBuilding.style.height = `${(this.settings.floorHeight) * this.settings.numFloors}px`;
        return currentBuilding;
    }

    createElevatorMenage(): elevatorMenagment {
        const elevatorManagement = new elevatorMenagment(this.settings.numElevators, this);
        elevatorManagement.elevatorsArea.style.height = `${this.settings.floorHeight * this.settings.numFloors}px`;
        return elevatorManagement;
    }

    createFloors(): SingleFloor[] {
        this.floorsarea.style.maxWidth = "50%"
        this.floorsarea.style.minWidth = "120px"

        const floors: SingleFloor[] = [];

        for (let i = 0; i < this.settings.numFloors; i++) {
            floors.push(new SingleFloor(this, (this.settings.numFloors - i - 1)));
        }
        return floors;
    }




    get mycurrentBuilding(): HTMLDivElement {
        return this.currentBuilding;
    }
    appendToParent(parent: HTMLElement): void {
        this.currentBuilding.classList.add("rowFlex");

        this.floorsarea.classList.add("columFlex");
        this.floors.forEach((floor) => {
            floor.appendToParent(this.floorsarea);
        });
        this.currentBuilding.appendChild(this.floorsarea);
        const elevatorContainer = document.createElement("div");
        elevatorContainer.classList.add("elevator-management");
        this.elevatorManagement.appendToParent(elevatorContainer);

        this.currentBuilding.appendChild(elevatorContainer);
        parent.appendChild(this.currentBuilding);
    }
    run(): void {
        this.floors.forEach((SingleFloor) => {
            SingleFloor.run();
        })
        this.elevatorManagement.run();
    }
}

