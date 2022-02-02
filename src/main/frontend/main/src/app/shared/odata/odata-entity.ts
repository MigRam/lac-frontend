export class OdataEntity {

  odataContext: string;

  odataId: string;

  odataReadLink: string;

  odataMediaReadLink: string;

  odataThumbnailMediaReadLink: string;

  odataWaveformMediaReadLink: string;

  odataSpectrumMediaReadLink: string;

  a5Selector: any;

  a5Expandable: Array<string>;

  a5Highlight: Array<Object> = [];

  a5Orderby: Array<Object> = [];

  static expand(items: Array<any>, entity: any): any {
    if (!items || items.length <= 0) return;
    let entities: Array<any> = [];
    for (let item of items) {
      if (typeof item === "string") {
        entities.push(item);
      } else {
        entities.push(new entity(item));
      }
    }
    return entities;
  }

  constructor(entity: any) {
    this.odataContext = entity["@odata.context"];
    this.odataId = entity["@odata.id"];
    this.odataReadLink = entity["@odata.readLink"];
    this.odataMediaReadLink = entity["@odata.mediaReadLink"];
    this.odataThumbnailMediaReadLink = entity["Thumbnail@odata.mediaReadLink"];
    this.odataWaveformMediaReadLink = entity["Waveform@odata.mediaReadLink"];
    this.odataSpectrumMediaReadLink = entity["Spectrum@odata.mediaReadLink"];
    this.a5Selector = entity["@a5.selector"];
    this.a5Expandable = entity["@a5.expandable"];
    for(var field in entity["@a5.highlight"]) {
      this.a5Highlight.push({fieldName: field, matched: entity["@a5.highlight"][field]});
    }
    this.a5Orderby = entity["@a5.orderby"];
  }
}
