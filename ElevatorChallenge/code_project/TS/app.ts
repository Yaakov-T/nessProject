let system: CreateSystem;
let sett: Settings = Settings.getInstance();


const DOMElementStyle = (DOMElement: HTMLElement): void => {
    DOMElement.style.minWidth = `${window.innerWidth}px`;
}

const init = (): void => {
    const DOMElement = document.getElementById("buildingErea");
    const buildingErea = document.createElement("div");

    if (DOMElement) {
        DOMElementStyle(DOMElement);
        DOMElement.appendChild(buildingErea);
        buildingErea.classList.add("buildingErea");
    }
    system = Factory.getInstance().create("CreateSystem", buildingErea);
};

const run = () => {
    system.run();
};


const interval = setInterval(run, sett.runtime);
init();