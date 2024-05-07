"use strict";
let system;
let sett = new settings();
const DOMElementStyle = (DOMElement) => {
    DOMElement.style.minWidth = (`${window.innerWidth}px`);
};
const init = () => {
    const DOMElement = document.getElementById("buildingErea");
    const buildingErea = document.createElement("div");
    if (DOMElement) {
        DOMElementStyle(DOMElement);
        DOMElement.appendChild(buildingErea);
        buildingErea.classList.add("buildingErea");
    }
    system = new createSystem(buildingErea, sett);
};
const run = () => {
    system.run();
};
const intervalId = setInterval(run, sett.runtime);
init();
