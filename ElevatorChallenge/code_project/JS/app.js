"use strict";
const init = () => {
    createBuildings();
    rander();
};
const createBuildings = () => {
    for (let i = 0; i < numBuildings; i++) {
        buildingArr.push(new Building(numFloors, numElevators, floorHeight));
    }
    buildingArr.forEach((building) => {
        building.mycurrentBuilding.classList.add("rowFlex");
    });
};
const numBuildings = 1;
const numFloors = 7;
const numElevators = 2;
const buildingArr = [];
const floorHeight = 120;
const buildingManagement = document.getElementById("buildingManagement");
const rander = () => {
    if (buildingManagement) {
        buildingManagement.innerHTML = '';
        // Append each building to buildingManagement
        buildingArr.forEach((building) => {
            building.appendToParent(buildingManagement);
        });
    }
    ;
};
const run = setInterval(() => {
    buildingArr.forEach((building) => {
        building.run();
    });
}, 500);
init();
