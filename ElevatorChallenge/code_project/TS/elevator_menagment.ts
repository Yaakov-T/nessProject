class elevatorMenagment{
    private parent: Building;
    private ElevatorsArea: HTMLDivElement;
    private elevators: Elevator[];
    settings: settings;

    constructor(numElevators: number, parent: Building) {
        this.parent = parent;
        this.settings = this.parent.settings;
        this.elevators = [];
        for (let i = 0; i < numElevators; i++) {
            this.elevators.push(new Elevator(this));
        }
        this.ElevatorsArea = document.createElement('div');
        this.ElevatorsArea.classList.add("rowFlex");
    }
    get elevatorsArea(): HTMLDivElement {
        return this.ElevatorsArea;
    }
    getOrder(floor: number): number| false {
        let minTime:number = this.elevators[0].checkTimeWithFloor(floor);
        let elevatorIndex = 0;
        for(let i =1 ; i < this.elevators.length; ++i) {
            if(this.elevators[i].including(floor)){
                return false;
            }
            const time: number = this.elevators[i].checkTimeWithFloor(floor)
            if( time < minTime){
                minTime = time;
                elevatorIndex = i;
            }
        }
        
        return this.elevators[elevatorIndex].addNewFloor(floor);
    }
    appendToParent(parent: HTMLElement): void {
        this.elevators.forEach((elevator, i) => {
            elevator.elevatorElement.style.left = `${115 * i + 8}px`;
            elevator.appendToParent(this.elevatorsArea);
        });
        parent.appendChild(this.elevatorsArea);
    }
    run(): void {
        this.elevators.forEach((elevator) => {
            elevator.run();
        })
    }
}