import { OdataEntity } from './odata-entity';

export class OdataEntityAnnotation extends OdataEntity {

    id: string;

    label: string;

    type: Array<string>;

    bodyValue: string;

    selector: any;

    target: string;

    constructor(entity: any) {
        super(entity);
        this.id = entity["id"];
        this.label = entity["label"];
        this.type = entity["type"];
        this.bodyValue = entity["bodyValue"];
        this.selector = entity["selector"];
        this.target = entity["target"];
    }
}