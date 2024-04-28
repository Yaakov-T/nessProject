"use strict";
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
const buildingArr = [];
const floorHeight = 120;
const DOMElement = document.getElementById("buildingManagement");
const buildingManagement = document.createElement("div");
if (DOMElement) {
    DOMElement.style.alignItems = ("center");
    DOMElement.style.width = (`${window.innerWidth}px`);
    DOMElement.style.paddingLeft = (`5%`);
    DOMElement.style.paddingRight = (`5%`);
    DOMElement.appendChild(buildingManagement);
    buildingManagement.style.display = ("flex");
    buildingManagement.style.justifyContent = ("space-between");
}
const rander = () => {
    buildingManagement.innerHTML = '';
    // Append each building to buildingManagement
    buildingArr.forEach((building) => {
        building.mycurrentBuilding.style.maxWidth = `${90 / sett.numBuildings}%`;
        building.appendToParent(buildingManagement);
    });
};
const run = setInterval(() => {
    buildingArr.forEach((building) => {
        building.run();
    });
}, 500 / sett.frime);
init();
