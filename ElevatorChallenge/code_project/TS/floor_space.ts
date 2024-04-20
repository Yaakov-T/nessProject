class FloorSpace {
    space: HTMLDivElement;

    constructor() {
        this.space = document.createElement('div');
        this.space.classList.add("floor", "parent-container");
        this.space.style.height = "110px";
        
    }
    get floorSpace():HTMLDivElement{
        return this.space;
    }
    appendToParent(parent: HTMLElement): void {
        parent.appendChild(this.space);
    }
}