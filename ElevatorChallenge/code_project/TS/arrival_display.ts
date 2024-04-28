class ArrivalDisplay {
    display: HTMLDivElement;
    waiteTime: number = 0;

    constructor() {
        this.display = document.createElement("div");
        this.display.classList.add("ArrivalDisplay");
        this.updateDisplay();
    }
    setTime(time: number): void {
        this.waiteTime = time;
    }
    updateDisplay():void{
        this.display.innerHTML = ` <p>${(Math.ceil(this.waiteTime).toString())}</p>`;
    }
    reduceTime(): void {
        this.waiteTime -= 1/200;
    }
    run(): void {
        if (this.waiteTime > 0) {
            this.reduceTime();
        }
        if (this.waiteTime > 0) {
        }
        this.updateDisplay();

    }

    appendToParent(parent: HTMLElement): void {
        parent.appendChild(this.display);
    }
}
