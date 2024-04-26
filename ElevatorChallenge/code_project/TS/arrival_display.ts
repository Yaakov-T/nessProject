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
        this.display.innerHTML = `<p>${this.waiteTime.toString()}</p>`;
        // console.log("hii");
    }
    reduceTime(): void {
        this.waiteTime--
    }

    run(): void {
        if (this.waiteTime > 0) {
            this.reduceTime();
        }

        this.updateDisplay();

    }

    appendToParent(parent: HTMLElement): void {
        parent.appendChild(this.display);
    }
}
