class ArrivalDisplay {
    private display: HTMLDivElement;
    private waiteTime: number = 0;
    private parent: SingleFloor;

    constructor(parent: SingleFloor) {
        this.parent = parent;
        this.display = document.createElement("div");
        this.display.classList.add("ArrivalDisplay");
        this.updateDisplay();
    }

    setTime(time: number): void {
        this.waiteTime = time / 2;
    }
    private updateDisplay(): void {
        this.display.innerHTML = `<p>${((this.waiteTime).toString())}</p>`;
    }
    private reduceTime(): void {
        this.waiteTime -= 0.5;
        if (this.waiteTime==-2){
            this.parent.freeButton();
        }
    }
    run(): void {
        if (this.waiteTime >= -2) {
            this.reduceTime();
        }
        if (this.waiteTime >= 0) {
            this.updateDisplay();
        }

    }

    appendToParent(parent: HTMLElement): void {
        parent.appendChild(this.display);
    }
}
