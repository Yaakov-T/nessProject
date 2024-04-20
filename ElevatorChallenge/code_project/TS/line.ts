class Line {
    line: HTMLElement;

    constructor() {
        this.line = document.createElement('div');
        this.line.className = "blackline";
    }

    appendToParent(parent: HTMLElement): void {
        parent.appendChild(this.line);
    }
}
