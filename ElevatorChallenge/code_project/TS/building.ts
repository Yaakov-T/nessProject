class Building {
    private currentBuilding: HTMLDivElement;
    private floorsarea: HTMLDivElement;
    private floors: SingleFloor[];
    private elevatorManagement: ElevatorMenagment;

    constructor() {
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
        currentBuilding.style.height = `${(Settings.getInstance().floorHeight) * Settings.getInstance().numFloors}px`;
        return currentBuilding;
    }

    createElevatorMenage(): ElevatorMenagment {
        const elevatorManagement = Factory.getInstance().create("ElevatorMenagment",null);
        elevatorManagement.elevatorsArea.style.height = `${Settings.getInstance().floorHeight * Settings.getInstance().numFloors}px`;
        return elevatorManagement;
    }

    createFloors(): SingleFloor[] {
        this.floorsarea.style.maxWidth = "50%"
        this.floorsarea.style.minWidth = "120px"

        const floors: SingleFloor[] = [];

        for (let i = 0; i < Settings.getInstance().numFloors; i++) {
            floors.push(Factory.getInstance().create("SingleFloor",[this, (Settings.getInstance().numFloors - i - 1)]));
        }
        return floors;
    }




    get mycurrentBuilding(): HTMLDivElement {
        return this.currentBuilding;
    }
    appFloors():void{
        this.floorsarea.classList.add("columFlex");
        this.floors.forEach((floor) => {
            floor.appendToParent(this.floorsarea);
        });
        this.currentBuilding.appendChild(this.floorsarea);
    }
    appElevator():void{
        const elevatorContainer = document.createElement("div");
        elevatorContainer.classList.add("elevator-management");
        this.elevatorManagement.appendToParent(elevatorContainer);
        this.currentBuilding.appendChild(elevatorContainer);
    }
    appendToParent(parent: HTMLElement): void {
        this.currentBuilding.classList.add("rowFlex");
        this.appFloors();
        this.appElevator();

        parent.appendChild(this.currentBuilding);
    }
    run(): void {
        this.floors.forEach((SingleFloor) => {
            SingleFloor.run();
        })
        this.elevatorManagement.run();
    }
}

