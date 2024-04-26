class Elevator {
    frime: number;
    private ElevatorElement: HTMLImageElement;
    private SumOfTime: number = 0;
    private DestinationQueue: number[];
    private CurrentFloor: number | undefined = 0;
    private TimeToWait: number = 0;
    private XPossition: number = 0;

    constructor(frime: number) {
        this.frime = frime;
        this.DestinationQueue = [];
        this.ElevatorElement = this.createElevator();
    };


    createElevator(): HTMLImageElement {
        const elevatorElement: HTMLImageElement = document.createElement('img');
        elevatorElement.src = "./elements/elv.png";
        elevatorElement.classList.add('elevatorStyle');
        elevatorElement.style.height = "110px";
        elevatorElement.style.width = "110px";
        elevatorElement.style.bottom = `${this.XPossition}px`;
        return elevatorElement;
    };

    public get elevatorElement(): HTMLDivElement {
        return this.ElevatorElement;
    }

    appendToParent(parent: HTMLElement): void {
        parent.appendChild(this.elevatorElement);
    }

    addNewFloor(floor: number): void {
        this.DestinationQueue.push(floor);
        const newTime = this.timeBetweenFloors(floor, this.DestinationQueue[this.DestinationQueue.length - 1])
        this.SumOfTime += (newTime + (4 * this.frime));
    }
    moveElevator(): void {
        if (this.TimeToWait > 0) {
            this.TimeToWait--;
        }
        else {
            this.addPart();
            this.ElevatorElement.style.bottom = `${this.XPossition}px`
            if (this.checkArrivalDestination()) {
                this.openDoor();
            };
        }
    }
    addPart(): void {
        if (this.XPossition < this.DestinationQueue[0] * 120) {
            this.XPossition += 120 / this.frime;
        }
        else if (this.XPossition > this.DestinationQueue[0] * 120) {
            this.XPossition -= 120 / this.frime;
        }
    }
    checkArrivalDestination(): Boolean {
        return Math.abs(this.DestinationQueue[0] * 120 - this.XPossition) < 1;
    }

    checkTimeWithFloor(floor: number): number {
        {
            if (this.DestinationQueue.length > 0) {
                const timeBetween = this.timeBetweenFloors(floor, this.DestinationQueue[this.DestinationQueue.length - 1])
                return (this.SumOfTime) / this.frime + timeBetween;
            }
            const timeBetween = this.timeBetweenFloors(floor, this.CurrentFloor)
            return (this.SumOfTime) / this.frime + timeBetween;

        }

    }
    timeBetweenFloors(floor1: number, floor2: number | undefined): number {
        if (floor2 || floor2 == 0) {
            return ((Math.abs(floor2 - floor1)) / 2);
        }
        return 0;
    };

    openDoor(): void {
        // ding
        this.TimeToWait = 4 * this.frime;
        if (this.DestinationQueue.length > 0) {
            this.CurrentFloor = this.DestinationQueue.shift()
        }

    }
}

