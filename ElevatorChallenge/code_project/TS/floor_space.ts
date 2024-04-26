class FloorSpace {
    space: HTMLDivElement;

    constructor() {
        this.space = document.createElement('div');
        this.space.classList.add("floor", "parent-container");
        this.space.style.height = "110px";
        this.space.style.paddingLeft = "3px";
        this.space.style.paddingRight = "3px";
        
    }
    get floorSpace():HTMLDivElement{
        return this.space;
    }
    appendToParent(parent: HTMLElement): void {
        parent.appendChild(this.space);
    }
}