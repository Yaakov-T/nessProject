"use strict";
class Line {
    constructor() {
        this.line = document.createElement('div');
        this.line.className = "blackline";
    }
    appendToParent(parent) {
        parent.appendChild(this.line);
    }
}
