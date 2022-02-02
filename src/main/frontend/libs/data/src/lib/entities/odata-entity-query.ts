
export class OdataEntityQuery {

  Highlight: Array<string>;
  id: string;
  MetadataType: string;
  Title: string;
  AccessLevel: string;
  Description: Array<string>;
  ObjectLanguage?: string;
  IsPartOf?: string;
  Keywords: Array<string>;
  ProjectName?: string;
  ProjectDescription?: string;
  Location?: string;
  Country: string;
  Region: string;
  Geolocation: string;
  LegacyBlob: string;
  Creator: string;
  RecordingDate?: string;
  ResourceType?: Array<string>;
  ResourceMimeType?: Array<string>;
  MetadataObject: Array<string>;

  constructor(entity: any) {
    this.Highlight = entity['@a5.highlight'];
    this.id = entity['id'];
    this.MetadataType = entity['MetadataType'];
    this.Title = entity['Title'];
    this.AccessLevel = entity['accessLevel'];
    this.Description = entity['Description'];
    this.ObjectLanguage = entity['ObjectLanguage'];
    this.IsPartOf = entity['IsPartOf'];
    this.Keywords = entity['Keywords'];
    this.ProjectName = entity['ProjectName'];
    this.ProjectDescription = entity['ProjectDescription'];
    this.Geolocation = entity['GeoLocation'];
    this.Location = entity['Location'];
    this.Country = entity['Country'];
    this.Region = entity['Region'];
    this.LegacyBlob = entity['LegacyBlob'];
    this.Creator = entity['Creator'];
    this.RecordingDate = entity['RecordingDate'];
    this.ResourceType = entity['ResourceType'];
    this.ResourceMimeType = entity['ResourceMimeType'];
    this.MetadataObject = entity['MetadataObject']
  }

  getHighlight() {
    return this.Highlight;
  }

  getId() {
    return this.id;
  }

  getType() {
    return this.MetadataType;
  }

  getTitle() {
    return this.Title;
  }

  getAccessLevel() {
    return this.AccessLevel;
  }

  getDescription() {
    return this.Description || '<no description available>';
  }

  getShortDescription() {
    return this.getDescription().toString().split(".")[0];
  }

  getLanguages() {
    return this.ObjectLanguage;
  }

  getKeywords() {
    return this.Keywords;
  }

  getCountry() {
    return this.Country;
  }

  getLocation() {
    return this.Location;
  }

  getRegion() {
    return this.Region;
  }

  getProjectName() {
    return this.ProjectName;
  }

  getProjectDescription() {
    return this.ProjectDescription;
  }

  getResourceMimeType() {
    return this.ResourceMimeType;
  }

  getResourceType() {
    return this.ResourceType;
  }

  getMetadataObject() {
    return this.MetadataObject;
  }

  getRouteId() {
    return this.id ? this.id[0].replace('hdl:', '') : this.id.replace('hdl:', '');
  }

  getRoutePrefix() {
    return this.MetadataType[0].toLowerCase();
  }

  getRouteParent() {
    return this.IsPartOf ? this.IsPartOf[0].replace('hdl:', '') : this.IsPartOf.replace('hdl:', '');
  }

  isBundle() {
    return this.MetadataType[0] == 'Bundle';
  }

  isCollection() {
    return this.MetadataType[0] == 'Collection';
  }

}
