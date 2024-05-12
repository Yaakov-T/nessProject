"use strict";
let system;
let sett = Settings.getInstance();
const DOMElementStyle = (DOMElement) => {
    DOMElement.style.minWidth = `${window.innerWidth}px`;
};
const init = () => {
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
