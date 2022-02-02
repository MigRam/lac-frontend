import { OdataEntity } from './odata-entity';

export class OdataEntityQuery extends OdataEntity {

  id: string;

  Type: string;

  Title: string;

  Country: string;

  Region: string;

  Description: Array<string>;

  Keywords: Array<string>;

  ProjectDisplayName: string;

  LegacyBlob: string;

  ProjectDescription: string;

  ObjectLanguage: string;

  Creator: string;

  ResourceName: string;

  constructor(entity: any) {
    super(entity);
    this.id = entity.id;
    this.Type = entity.Type;
    this.Title = entity.Title;
    this.Country = entity.Country;
    this.Region = entity.Region;
    this.Description = entity.Description;
    this.Keywords = entity.Keywords;
    this.ProjectDisplayName = entity.ProjectDisplayName;
    this.LegacyBlob = entity.LegacyBlob;
    this.ProjectDescription = entity.ProjectDescription;
    this.ObjectLanguage = entity.ObjectLanguage;
    this.Creator = entity.Creator;
    this.ResourceName = entity.ResourceName;
  }
}
