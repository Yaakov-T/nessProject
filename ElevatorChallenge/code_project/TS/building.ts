class Building {
    private currentBuilding: HTMLDivElement;
    private floorsarea: HTMLDivElement;
    private floors: SingleFloor[];
    private elevatorManagement: elevatorMenagment;
    settings: settings;

    constructor(floorHeight: number, settings: settings) {
        this.settings = settings;
        this.floorsarea = document.createElement("div");
        this.currentBuilding = this.createBuild(floorHeight);
        this.elevatorManagement = this.createElevatorMenage(floorHeight,);
        this.floors = this.createFloors();
    }

    getOrder(floorNum: number): number | false {
        let x= this.elevatorManagement.getOrder(floorNum);
        console.log(x);
        return x;
    }

    createBuild(floorHeight: number): HTMLDivElement {
        const currentBuilding: HTMLDivElement = document.createElement("div");
        currentBuilding.style.height = `${(floorHeight) * this.settings.numFloors}px`;
        return currentBuilding;
    }

    createElevatorMenage(floorHeight: number): elevatorMenagment {
        const elevatorManagement = new elevatorMenagment(this.settings.numElevators, this);
        elevatorManagement.elevatorsArea.style.height = `${floorHeight * this.settings.numFloors}px`;
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
        this.elevatorManagement.run();
        this.floors.forEach((SingleFloor) => {
            SingleFloor.run();
        })
    }
}

