let system :createSystem;
let sett : settings= new settings();


const DOMElementStyle = (DOMElement:HTMLElement):void =>{ 
    DOMElement.style.minWidth = (`${window.innerWidth}px`);
}

const init = (): void => {
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

