class ElevatorManagement {
    frime : number;
    private elevatorsArea: HTMLDivElement;
    private elevators: Elevator[];

    constructor(numElevators: number, frime : number) {
        this.frime = frime;
        this.elevators = [];
        for (let i = 0; i < numElevators; i++) {
            this.elevators.push(new Elevator(this.frime));
        }
        this.elevatorsArea = document.createElement('div');
        this.elevationArea.classList.add("rowFlex");
    }
    get elevationArea(): HTMLDivElement {
        return this.elevatorsArea;
    }
    getOrder(floor: number): number {
        let minTime:number = this.elevators[0].checkTimeWithFloor(floor);
        let elevatorIndex = 0;
        for(let i =1 ; i < this.elevators.length; ++i) {
            const time: number = this.elevators[i].checkTimeWithFloor(floor)
            if( time < minTime){
                minTime = time;
                elevatorIndex = i;
            }
        }
        this.elevators[elevatorIndex].addNewFloor(floor);
        return minTime;
    }
    appendToParent(parent: HTMLElement): void {
        this.elevators.forEach((elevator, i) => {
            elevator.elevatorElement.style.left = `${115 * i + 8}px`;
            elevator.appendToParent(this.elevatorsArea);
        });
        parent.appendChild(this.elevatorsArea);
    }
    moveAllElevators(): void {
        this.elevators.forEach((elevator) => {
            elevator.moveElevator();
        })
    }
}