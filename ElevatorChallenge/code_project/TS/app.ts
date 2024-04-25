const init = (): void => {
    createBuildings();
    rander();
};
const createBuildings = () => {
    for (let i = 0; i < numBuildings; i++) {
        buildingArr.push(new Building(numFloors, numElevators, floorHeight, frime));
    }
}
const frime = 100;
const numBuildings = 3;
const numFloors: number = 7;
const numElevators: number = 2;



const buildingArr: Building[] = [];
const floorHeight: number = 120;

const DOMElement: HTMLElement | null = document.getElementById("buildingManagement");
const buildingManagement : HTMLDivElement = document.createElement("div");
if (DOMElement) {
    DOMElement.style.alignItems = ("center");
    DOMElement.style.width = (`${window.innerWidth}px`);
    DOMElement.style.paddingLeft = (`5%`);
    DOMElement.style.paddingRight = (`5%`);
    DOMElement.appendChild(buildingManagement);
    buildingManagement.style.display = ("flex");
    buildingManagement.style.justifyContent = ("space-between");
}
const rander = (): void => {
        buildingManagement.innerHTML = '';

        // Append each building to buildingManagement
        buildingArr.forEach((building) => {
            building.mycurrentBuilding.style.maxWidth=`${90/numBuildings}%`
            building.appendToParent(buildingManagement);
        });

    };


const run = setInterval(() => {
    buildingArr.forEach((building) => {
        building.run();
    })
}, 500 / frime);

init();

