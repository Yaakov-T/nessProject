const buildingArr: Building[] = [];
const floorHeight: number = 120;
let sett : settings= new settings();;

const init = (): void => {
    createBuildings();
    rander();
};
const createBuildings = () => {
    for (let i = 0; i < sett.numBuildings; i++) {
        buildingArr.push(new Building(floorHeight, sett));
    }
}

const DOMElementStyle = (DOMElement:HTMLElement):void =>{ 
    DOMElement.style.alignItems = ("center");
    DOMElement.style.width = (`${window.innerWidth}px`);
    DOMElement.style.paddingLeft = (`5%`);
    DOMElement.style.paddingRight = (`5%`);
}


const DOMElement: HTMLElement | null = document.getElementById("buildingErea");
const buildingErea : HTMLDivElement = document.createElement("div");
if (DOMElement) {
    DOMElementStyle(DOMElement);
    DOMElement.appendChild(buildingErea);
    buildingErea.style.display = ("flex");
    buildingErea.style.justifyContent = ("space-between");
}
const rander = (): void => {
        buildingErea.innerHTML = '';
        // Append each building to buildingManagement
        buildingArr.forEach((building) => {
            building.mycurrentBuilding.style.maxWidth=`${90/sett.numBuildings}%`
            building.appendToParent(buildingErea);
        });

    };


const run = setInterval(() => {
    buildingArr.forEach((building) => {
        building.run();
    })
}, 500 / sett.frime);

init();

