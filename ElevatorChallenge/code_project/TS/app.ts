let system: CreateSystem;
let sett: Settings = Settings.getInstance();


const DOMElementStyle = (DOMElement: HTMLElement): void => {
    DOMElement.classList.add("DOMElementStyle");
    DOMElement.style.minWidth = `100%`;
}

const init = (): void => {
    const DOMElement = document.getElementById("DOMElement");
    const allBuildingsErea = document.createElement("div");

    if (DOMElement) {
        DOMElementStyle(DOMElement);
        DOMElement.appendChild(allBuildingsErea);
        allBuildingsErea.classList.add("allBuildingErea");
    }
    system = Factory.getInstance().create("CreateSystem", allBuildingsErea);
};

const run = () => {
    system.run();
};


const interval = setInterval(run, sett.runtime);
init();