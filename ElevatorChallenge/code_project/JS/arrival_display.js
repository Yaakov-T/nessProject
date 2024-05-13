"use strict";
class ArrivalDisplay {
    constructor(parent) {
        this.waiteTime = 0;
        this.setTime = (time) => {
            this.waiteTime = time / 2;
        };
        this.updateDisplay = () => {
            this.display.innerHTML = `<p>${((this.waiteTime).toString())}</p>`;
        };
        this.reduceTime = () => {
            this.waiteTime -= 0.5;
            if (this.waiteTime == -2) {
                this.parent.freeButton();
            }
        };
        this.run = () => {
            if (this.waiteTime >= -2) {
                this.reduceTime();
            }
            if (this.waiteTime >= 0) {
                this.updateDisplay();
            }
        };
        this.appendToParent = (parent) => {
            parent.appendChild(this.display);
        };
        this.parent = parent;
        this.display = document.createElement("div");
        this.display.classList.add("ArrivalDisplay");
        this.updateDisplay();
    }
}
