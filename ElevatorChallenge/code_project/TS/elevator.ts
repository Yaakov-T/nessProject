class Elevator {
    private m_elevatorElement: HTMLImageElement;
    private m_sumOfTime: number = 0;
    private m_destinationQueue: number[];
    private m_timeToWait: number = 0;
    private m_XPossition: number = 0;

    constructor() {
        this.m_destinationQueue = [];
        this.m_elevatorElement = document.createElement('img');
        this.aditAtributes();
    };


    aditAtributes(): void {
        this.m_elevatorElement.src = "./elements/elv.png";
        this.m_elevatorElement.classList.add('elevatorStyle');
        this.m_elevatorElement.style.height = "110px";
        this.m_elevatorElement.style.width = "110px";
        this.m_elevatorElement.style.bottom = `${this.m_XPossition}px`;
    };

    public get elevatorElement(): HTMLDivElement {
        return this.m_elevatorElement;
    }

    appendToParent(parent: HTMLElement): void {
        parent.appendChild(this.elevatorElement);
    }

    addFloorToQueue(floor: number): void {
        this.m_destinationQueue.push(floor);
        const newTime = this.timeBetweenFloors(floor, this.m_destinationQueue[this.m_destinationQueue.length - 1])
        this.m_sumOfTime += (newTime + 4);
    }
    moveElevator(): void {
        if(this.m_timeToWait > 0) {
            this.m_timeToWait--;
        }
        else {
            this.addPart();
            this.m_elevatorElement.style.bottom = `${this.m_XPossition}px`
            if (this.checkArrivalDestination()) {
                this.openDoor();
            };
        }
    }
    addPart(): void {
        if (this.m_XPossition < this.m_destinationQueue[0]*120) {
            this.m_XPossition += 120;
        }
        else if (this.m_XPossition > this.m_destinationQueue[0]*120) {
            this.m_XPossition -= 120;
        }
    }
    checkArrivalDestination(): Boolean {
        return (this.m_destinationQueue[0] * 120 == this.m_XPossition);
        // this.m_timeToWait = 4;
        // const newFloor = this.m_destinationQueue.shift()
        // if (newFloor)
        //     this.m_currentFloor = newFloor;


    }

    timeWithNewFloor(floor: number): number {
        {
            if (this.m_destinationQueue[this.m_destinationQueue.length - 1]) {
                const timeBetween = this.timeBetweenFloors(floor, this.m_destinationQueue[this.m_destinationQueue.length - 1])
                return this.m_sumOfTime + timeBetween;
            }
            return this.m_sumOfTime;
        }

    }
    timeBetweenFloors(floor1: number, floor2: number): number {
        if (floor1 < floor2) {
          return (floor2 - floor1) / 2;
        }
        return (floor1 - floor2) / 2;
    };

    openDoor(): void {
        // ding
        this.m_timeToWait = 4;
        const newFloor = this.m_destinationQueue.shift()
        if (newFloor){

        }

    }
}

