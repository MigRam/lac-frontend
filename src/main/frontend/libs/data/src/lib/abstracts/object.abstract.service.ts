export abstract class AbstractObjectService {
    abstract getObjectByID(id: string, selectorsMap: string): any;
    abstract getObjects(selectorsSet: string): any;
}