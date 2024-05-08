class Factory {
    private static instance: Factory | null = null;

    private constructor() { }

    static getInstance(): Factory {
        if (!Factory.instance) {
            Factory.instance = new Factory();
        }
        return Factory.instance;
    }

    create = (className: string, parameter: any): any => {
        switch (className) {
            case 'Building':
                return new Building();
            case 'ElevatorMenagment':
                return new ElevatorMenagment();
            case 'ArrivalDisplay':
                return new ArrivalDisplay();
            case 'Elevator':
                return new Elevator(parameter as number);
            case 'ElevatorButton':
                return new ElevatorButton(parameter as SingleFloor)
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

    createButton = (parent: SingleFloor, arrivalDisplay: ArrivalDisplay): ElevatorButton => {
        return new ElevatorButton(parent);
    };

    createSystem = (buildingErea: HTMLDivElement): CreateSystem => {
        return new CreateSystem(buildingErea);
    }
}

