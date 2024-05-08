"use strict";
class Factory {
    constructor() {
        this.create = (className, parameter) => {
            switch (className) {
                case 'Building':
                    return new Building();
                case 'ElevatorMenagment':
                    return new ElevatorMenagment();
                case 'ArrivalDisplay':
                    return new ArrivalDisplay();
                case 'Elevator':
                    return new Elevator(parameter);
                case 'ElevatorButton':
                    return new ElevatorButton(parameter);
                case 'SingleFloor':
                    if (parameter instanceof Array && parameter.length === 2) {
                        const [buildingInstance, numberParam] = parameter;
                        return new SingleFloor(buildingInstance, numberParam);
                    }
                    break;
                case 'FloorSpace':
                    return new FloorSpace();
                case 'Line':
                    return new Line();
                default:
                    throw new Error('Invalid class name provided.');
            }
        };
        this.createButton = (parent, arrivalDisplay) => {
            return new ElevatorButton(parent);
        };
        this.createSystem = (buildingErea) => {
            return new CreateSystem(buildingErea);
        };
    }
    static getInstance() {
        if (!Factory.instance) {
            Factory.instance = new Factory();
        }
        return Factory.instance;
    }
}
Factory.instance = null;
