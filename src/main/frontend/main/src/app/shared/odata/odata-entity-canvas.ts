import { OdataEntity } from './odata-entity';
import { OdataEntityAnnotationLayer } from './odata-entity-annotation-layer';
import { OdataEntityObject } from './odata-entity-object';

export class OdataEntityCanvas extends OdataEntity {

    id: string;

    label: string;

    type: Array<any>;

    duration: number;

    media: Array<any>;

    otherContent: Array<any>;

    constructor(entity: any) {
        super(entity);
        this.id = entity["id"];
        this.label = entity["label"];
        this.type = entity["type"];
        this.duration = entity["duration"];
        this.media = OdataEntity.expand(entity["media"], OdataEntityObject);
        this.otherContent = OdataEntity.expand(entity["otherContent"], OdataEntityAnnotationLayer);
    }
}
