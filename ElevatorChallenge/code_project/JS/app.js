"use strict";
const buildingArr = [];
const floorHeight = 120;
let sett = new settings();
;
const init = () => {
    createBuildings();
    rander();
};
const createBuildings = () => {
    for (let i = 0; i < sett.numBuildings; i++) {
        buildingArr.push(new Building(floorHeight, sett));
    }
};
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
const rander = () => {
    buildingErea.innerHTML = '';
    // Append each building to buildingManagement
    buildingArr.forEach((building) => {
        building.mycurrentBuilding.style.maxWidth = `${90 / sett.numBuildings}%`;
        building.appendToParent(buildingErea);
    });
};
const run = setInterval(() => {
    buildingArr.forEach((building) => {
        building.run();
    });
}, 500 / sett.frime);
init();
