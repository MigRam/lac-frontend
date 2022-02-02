import { OdataCollection } from './odata-collection';
import { OdataEntityObject } from './odata-entity-object';

export class OdataCollectionObject extends OdataCollection {

  value: Array<OdataEntityObject> = [];

  constructor(json: any) {
    super(json);
    for(let entity in json.value) {
      this.value.push(new OdataEntityObject(json.value[entity]));
    }
  }
}
