import { OdataEntity } from './odata-entity';
import { OdataEntityAnnotation } from './odata-entity-annotation';

export class OdataEntityAnnotationLayer extends OdataEntity {

    id: string;

    label: string;

    type: Array<string>;

    resources: Array<OdataEntityAnnotation>;

    hasParent: string;

    isParentOf: Array<string>;

    constructor(entity: any) {
        super(entity);
        this.id = entity["id"];
        this.label = entity["label"];
        this.type = entity["type"];
        this.resources = OdataEntity.expand(entity["resources"], OdataEntityAnnotation);
        this.hasParent = entity["hasParent"];
        this.isParentOf = entity["isParentOf"];
    }
}
