import { OdataEntity } from './odata-entity';
import { OdataEntityCanvas } from './odata-entity-canvas';
import { OdataEntityObject } from './odata-entity-object';

export class OdataEntityManifest extends OdataEntity {

    id: string;

    label: string;

    type: Array<string>;

    members: Array<any>;

    within: Array<any>;

    constructor(entity: any) {
        super(entity);
        this.id = entity["id"];
        this.label = entity["label"];
        this.type = entity["type"];
        this.members = OdataEntity.expand(entity["members"], OdataEntityCanvas);
        this.within = OdataEntity.expand(entity["within"], OdataEntityObject);
    }
}