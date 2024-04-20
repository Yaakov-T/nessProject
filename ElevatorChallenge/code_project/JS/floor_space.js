"use strict";
class FloorSpace {
    constructor() {
        this.space = document.createElement('div');
        this.space.classList.add("floor", "parent-container");
        this.space.style.height = "110px";
    }
    get floorSpace() {
        return this.space;
    }
    appendToParent(parent) {
        parent.appendChild(this.space);
    }
}
