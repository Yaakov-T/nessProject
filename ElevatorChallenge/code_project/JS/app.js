"use strict";
const buildingArr = [];
const sett = new settings();
;
const DOMElementStyle = (DOMElement) => {
    DOMElement.style.alignItems = ("center");
    DOMElement.style.width = (`${window.innerWidth}px`);
    DOMElement.style.paddingLeft = (`5%`);
    DOMElement.style.paddingRight = (`5%`);
};
const DOMElement = document.getElementById("buildingErea");
const buildingErea = document.createElement("div");
if (DOMElement) {
    DOMElementStyle(DOMElement);
    DOMElement.appendChild(buildingErea);
    buildingErea.style.display = ("flex");
    buildingErea.style.justifyContent = ("space-between");
}
const init = () => {
    createBuildings();
    rander();
};
const createBuildings = () => {
    for (let i = 0; i < sett.numBuildings; i++) {
        buildingArr.push(new Building(sett));
    }
};
const rander = () => {
    buildingErea.innerHTML = '';
    buildingArr.forEach((building) => {
        building.mycurrentBuilding.style.maxWidth = `${90 / sett.numBuildings}%`;
        building.appendToParent(buildingErea);
    });
};
const run = () => {
    buildingArr.forEach((building) => {
        building.run();
    });
};
const intervalId = setInterval(run, sett.runtime);
init();
