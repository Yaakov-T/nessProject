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
        this.display.innerHTML = `<p>${this.waiteTime.toString()}</p>`;
        // console.log("hii");
    }
    reduceTime() {
        this.waiteTime--;
    }
    run() {
        if (this.waiteTime > 0) {
            this.reduceTime();
        }
        this.updateDisplay();
    }
    appendToParent(parent) {
        parent.appendChild(this.display);
    }
}
