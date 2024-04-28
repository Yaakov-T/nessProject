class Elevator {
    private ElevatorElement: HTMLImageElement;
    private SumOfTime: number = 0;
    private DestinationQueue: number[];
    private CurrentFloor: number | undefined = 0;
    private TimeToWait: number = 0;
    private XPossition: number = 0;
    private audioElement: HTMLAudioElement = new Audio("./elements/ding.mp3");
    private settings: settings;

    constructor(settings: settings) {
        this.settings = settings;
        this.DestinationQueue = [];
        this.ElevatorElement = this.createElevator();
    };

    including(floor: number) {
        return (floor === this.CurrentFloor ||
            this.DestinationQueue.includes(floor))

    }
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
        this.SumOfTime += ((newTime + 4) * this.settings.frime);
    }
    moveElevator(): void {
        if (this.SumOfTime) {
          this.SumOfTime--;
        }
        if (this.TimeToWait > 0) {
            this.TimeToWait--;
        }
        else {
            this.audioElement.pause();
            this.addPart();
            this.ElevatorElement.style.bottom = `${this.XPossition}px`
            if (this.checkArrivalDestination()) {
                this.openDoor();
            };
        }
    }
    addPart(): void {
        if (this.XPossition < this.DestinationQueue[0] * 120) {
            this.XPossition += 120 / this.settings.frime;
        }
        else if (this.XPossition > this.DestinationQueue[0] * 120) {
            this.XPossition -= 120 / this.settings.frime;
        }
    }
    checkArrivalDestination(): Boolean {
        return Math.abs(this.DestinationQueue[0] * 120 - this.XPossition) < 1;
    }

    checkTimeWithFloor(floor: number): number {
        {
            let timeBetween: number;
            if (this.DestinationQueue.length > 0) {
                timeBetween = this.timeBetweenFloors(floor, this.DestinationQueue[this.DestinationQueue.length - 1])
            }
            else {
                timeBetween = this.timeBetweenFloors(floor, this.CurrentFloor)
            }
            console.log(`timeBetween: ${timeBetween}/${this.settings.frime}; sum: ${this.SumOfTime}`)
            return (this.SumOfTime) / this.settings.frime / 2 + timeBetween;
        }

    }
    timeBetweenFloors(floor1: number, floor2: number | undefined): number {
        if (floor2 || floor2 == 0) {
            return ((Math.abs(floor2 - floor1)) / 2);
        }
        return this.timeBetweenFloors(floor1, this.CurrentFloor);
    };

    openDoor(): void {
        this.audioElement.play();
        this.TimeToWait = 4 * this.settings.frime;
        if (this.DestinationQueue.length > 0) {
            this.CurrentFloor = this.DestinationQueue.shift()
        }

    }
}

