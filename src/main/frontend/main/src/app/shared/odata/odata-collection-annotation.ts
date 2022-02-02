import { OdataCollection } from "./odata-collection";
import { OdataEntityAnnotation } from "./odata-entity-annotation";

export class OdataCollectionAnnotation extends OdataCollection {

  value: Array<OdataEntityAnnotation> = [];

  a5Facets: any = [];

  constructor(json: any) {
    super(json);
    for(let entity of json.value) {
      this.value.push(new OdataEntityAnnotation(entity));
    }
    for(var facet in json["@a5.facets"]) {
      var obj: any = {};
      obj.faceName = facet;
      obj.buckets = json["@a5.facets"][facet].buckets
      obj.hasMoreBuckets = (json["@a5.facets"][facet].sum_other_doc_count > 0);
      this.a5Facets.push(obj);
    }
  }
}
