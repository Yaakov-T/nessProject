class ArrivalDisplay {
    private display: HTMLDivElement;
    private waiteTime: number = 0;
    private settings: settings;

    constructor(settings: settings) {
        this.display = document.createElement("div");
        this.display.classList.add("ArrivalDisplay");
        this.updateDisplay();
        this.settings = settings;
    }
    setTime(time: number): void {
        this.waiteTime = (time / 2) / this.settings.frime;
    }
    updateDisplay(): void {
        this.display.innerHTML = `<p>${(Math.ceil(this.waiteTime).toString())}</p>`;
    }
    reduceTime(): void {
        this.waiteTime -= 1 / (4 * (this.settings.frime));
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
