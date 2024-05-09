"use strict";
class ArrivalDisplay {
    constructor(parent) {
        this.waiteTime = 0;
        this.parent = parent;
        this.display = document.createElement("div");
        this.display.classList.add("ArrivalDisplay");
        this.updateDisplay();
    }
    setTime(time) {
        this.waiteTime = time / 2;
    }
    updateDisplay() {
        this.display.innerHTML = `<p>${((this.waiteTime).toString())}</p>`;
    }
    reduceTime() {
        this.waiteTime -= 0.5;
        if (this.waiteTime == -2) {
            this.parent.freeButton();
        }
    }
    run() {
        if (this.waiteTime >= -2) {
            this.reduceTime();
        }
        if (this.waiteTime >= 0) {
            this.updateDisplay();
        }
    }
    appendToParent(parent) {
        parent.appendChild(this.display);
    }
}
