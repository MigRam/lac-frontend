export class OdataEntityObject {

  OdataId: string;
  OdataMediaReadLink: string;
  OdataReadLink: string;
  Spectrum: string;
  Waveform: string;
  AccessRights: string;
  Checksum: string;
  id: string;
  Label: string;
  ContentType: string;
  Duration: number;
  FileUri: string;
  FileExists: boolean;
  FileCreated: string;
  FileUpdated: string;
  FileSize: number;
  FileParentOf: string[];
  FileRelatedTo: string;

  constructor(entity: any) {
    this.OdataId = entity['@odata.id'];
    this.OdataMediaReadLink = entity['@odata.mediaReadLink'];
    this.OdataReadLink = entity['@odata.readLink'];
    this.Spectrum = entity['Spectrum@odata.mediaReadLink'];
    this.Waveform = entity['Waveform@odata.mediaReadLink'];
    this.AccessRights = entity['accessRights'];
    this.Checksum = entity['checksum'];
    this.id = entity['id'];
    this.Label = entity['label'];
    this.ContentType = entity['contentType'];
    this.Duration = entity['duration'];
    this.FileUri = entity['fileUri'];
    this.FileExists = entity['fileExists'];
    this.FileCreated = entity['fileCreated'];
    this.FileUpdated = entity['fileUpdated'];
    this.FileSize = entity['fileSize'];
    this.FileParentOf = entity['parentOf'];
    this.FileRelatedTo = entity['relatedTo'];
  }

  getMediaReadLink() {
    return this.OdataMediaReadLink;
  }

  getReadLink() {
    return this.OdataReadLink;
  }

  getSpectrum() {
    return this.Spectrum;
  }

  getWaveform() {
    return this.Waveform;
  }

  getAccessRights() {
    return this.AccessRights;
  }

  getChecksum() {
    return this.Checksum;
  }

  getRouteId() {
    return this.id ? this.id.replace('hdl:', '') : this.id[0].replace('hdl:', '');
  }

  getTitle() {
    return this.Label.split('.')[0];
  }

  getId() {
    return this.id;
  }

  getType() {
    return this.ContentType;
  }

  getFileUri() {
    return this.FileUri;
  }

  getFileSize() {
    return this.FileSize;
  }

  getCreationDate() {
    return this.FileCreated;
  }

  getUpdateDate() {
    return this.FileUpdated;
  }

  getFileParentOf() {
    return this.FileParentOf.map(value => new OdataEntityObject(value));
  }
}
