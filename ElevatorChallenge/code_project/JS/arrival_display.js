"use strict";
class ArrivalDisplay {
    constructor() {
        this.waiteTime = 0;
        this.display = document.createElement("div");
        this.display.classList.add("ArrivalDisplay");
        this.updateDisplay();
    }
    setTime(time) {
        this.waiteTime = time;
    }
    updateDisplay() {
        this.display.innerHTML = ` <p>${(Math.ceil(this.waiteTime).toString())}</p>`;
    }
    reduceTime() {
        this.waiteTime -= 1 / 200;
    }
    run() {
        if (this.waiteTime > 0) {
            this.reduceTime();
        }
        if (this.waiteTime > 0) {
        }
        this.updateDisplay();
    }
    appendToParent(parent) {
        parent.appendChild(this.display);
    }
}
