"use strict";
class FloorSpace {
    constructor() {
        this.space = document.createElement('div');
        this.space.classList.add("floor");
        this.space.style.height = "110px";
        this.space.style.paddingLeft = "3px";
        this.space.style.paddingRight = "3px";
    }
    get floorSpace() {
        return this.space;
    }
    appendToParent(parent) {
        parent.appendChild(this.space);
    }
}
