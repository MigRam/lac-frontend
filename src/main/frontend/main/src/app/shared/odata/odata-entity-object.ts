import { OdataEntity } from './odata-entity';

export class OdataEntityObject extends OdataEntity {

  id: string;

  label: string;

  contentType: string;

  duration: number;

  fileUri: string;

  fileExists: boolean;

  fileCreated: string;

  fileUpdated: string;

  fileSize: number;

  parentOf: Array<any>;

  relatedTo: Array<any>;

  constructor(entity: any) {
    super(entity);
    this.id = entity["id"];
    this.label = entity["label"];
    this.contentType = entity["contentType"];
    this.duration = entity["duration"];
    this.fileUri = entity["fileUri"];
    this.fileExists = entity["fileExists"];
    this.fileCreated = entity["fileCreated"];
    this.fileUpdated = entity["fileUpdated"];
    this.fileSize = entity["fileSize"];
    this.parentOf = entity["parentOf"];
    this.relatedTo = entity["relatedTo"];
  }
}
