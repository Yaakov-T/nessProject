class Building {
    private currentBuilding: HTMLDivElement;
    private floorsarea: HTMLDivElement;
    private floors: SingleFloor[];
    private elevatorManagement: ElevatorManagement;
    frime:number;

    constructor(numFloors: number, numElevators: number, floorHeight: number ,frime:number) {
        this.frime = frime;
        this.floorsarea = document.createElement("div");
        this.currentBuilding = this.createBuild();
        this.elevatorManagement = this.createElevatorMenage();
        this.floors = this.createFloors();

    }
    createBuild():HTMLDivElement{
        const currentBuilding :HTMLDivElement = document.createElement("div");
        currentBuilding.style.height = `${(floorHeight) * numFloors}px`;
        return currentBuilding;
    }

    createElevatorMenage():ElevatorManagement{
        const elevatorManagement = new ElevatorManagement(numElevators , this.frime);
        elevatorManagement.elevationArea.style.height = `${floorHeight * numFloors}px`;
        return elevatorManagement;
    }

    createFloors():SingleFloor[]{
        this.floorsarea.style.maxWidth = "50%"
        this.floorsarea.style.minWidth = "120px"

        const floors :SingleFloor[] =[];
        
        for (let i = 0; i < numFloors; i++) {
            floors.push(new SingleFloor(numFloors - i - 1, this.elevatorManagement));
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
        this.elevatorManagement.moveAllElevators();
        this.floors.forEach((SingleFloor)=>{
            SingleFloor.run();
        })
    }
}

