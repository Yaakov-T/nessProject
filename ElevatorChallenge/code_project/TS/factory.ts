class Factory {
    private static instance: Factory | null = null;

    private constructor() { }

    static getInstance = (): Factory => {
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
                return new ArrivalDisplay(parameter as SingleFloor);
            case 'Elevator':
                return new Elevator(parameter as number);
            case 'ElevatorButton':
                return new ElevatorButton(parameter as SingleFloor)
            case 'CreateSystem':
                return new CreateSystem(parameter as HTMLDivElement)
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
}

