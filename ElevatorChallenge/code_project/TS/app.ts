const init = (): void => {
    createBuildings();
    rander();
};
const createBuildings = () =>{
    for (let i = 0; i < numBuildings; i++) {
        buildingArr.push(new Building(numFloors, numElevators, floorHeight));
    }
    buildingArr.forEach((building) => {
        building.mycurrentBuilding.classList.add("rowFlex");
    });
}

const numBuildings = 1;
const numFloors: number = 7;
const numElevators: number = 2;



const buildingArr: Building[] = [];
const floorHeight: number = 120;

const buildingManagement: HTMLElement | null = document.getElementById("buildingManagement");
const rander = (): void => {
    if (buildingManagement) {
        buildingManagement.innerHTML = '';

        // Append each building to buildingManagement
        buildingArr.forEach((building) => {
            building.appendToParent(buildingManagement);
        });

    };
};
const run = setInterval(() => {
    buildingArr.forEach((building) => {
        building.run();
    })
}, 500);

init();

