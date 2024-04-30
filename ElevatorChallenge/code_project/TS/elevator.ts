class Elevator {
    private parent: elevatorMenagment;
    private ElevatorElement: HTMLImageElement;
    private SumOfTime: number = 0;
    private DestinationQueue: number[];
    private CurrentFloor: number | undefined = 0;
    private TimeToWait: number = 0;
    private XPossition: number = 0;
    private audioElement: HTMLAudioElement;
    private settings: settings;

    constructor(parent: elevatorMenagment) {
        this.parent = parent;
        this.settings = this.parent.settings;
        this.audioElement = new Audio(this.settings.audio);
        this.DestinationQueue = [];
        this.ElevatorElement = this.createElevator();
    };

    // check if the floor in the argument is exists in the elevator
    including(floor: number) {
        return (floor === this.CurrentFloor ||
            this.DestinationQueue.includes(floor))

    }
    createElevator(): HTMLImageElement {
        const elevatorElement: HTMLImageElement = document.createElement('img');
        elevatorElement.src = this.settings.elevator;
        elevatorElement.classList.add('elevatorStyle');
        elevatorElement.style.height = "110px";
        elevatorElement.style.width = "110px";
        elevatorElement.style.bottom = `${this.XPossition}px`;
        return elevatorElement;
    };

    //Allows to receive the wrapping element and perform operations on it
    public get elevatorElement(): HTMLDivElement {
        return this.ElevatorElement;
    }
    //push the elementto the screen using the parents element
    appendToParent(parent: HTMLElement): void {
        parent.appendChild(this.elevatorElement);
    }
    timeToStay(): number {
        return 4 * this.settings.frime;
    }
    addNewFloor(floor: number): number {
        const newTime = this.timeBetweenFloors(floor, this.DestinationQueue[this.DestinationQueue.length - 1])
        this.SumOfTime += (newTime + this.timeToStay());
        this.DestinationQueue.push(floor);
        return this.SumOfTime - this.timeToStay();
    }
    run(): void {
        if (this.SumOfTime) {
            this.SumOfTime--;
        }
        if (this.TimeToWait > 0) {
            this.TimeToWait--;
        }
        else {
            this.audioElement.pause();
            this.audioElement.currentTime = 0; // Reset playback to the beginning
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
                timeBetween = this.timeBetweenFloors(floor, this.DestinationQueue[this.DestinationQueue.length - 1]);
            }
            else {
                timeBetween = this.timeBetweenFloors(floor, this.CurrentFloor);
            }
            return (this.SumOfTime + timeBetween);
        }

    }
    timeBetweenFloors(floor1: number, floor2: number | undefined): number {
        if (floor2 || floor2 == 0) {
            return (Math.abs((floor2 - floor1)) / 2 * this.settings.frime);
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

