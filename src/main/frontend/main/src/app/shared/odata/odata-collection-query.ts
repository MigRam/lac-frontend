import { OdataCollection } from './odata-collection';
import { OdataEntityQuery } from './odata-entity-query';

export class OdataCollectionQuery extends OdataCollection {

  value: Array<OdataEntityQuery> = [];

  a5Facets: any = [];

  a5Autocomplete: Array<any>;

  constructor(json: any) {
    super(json);
    for(var entity in json.value) {
      this.value.push(new OdataEntityQuery(json.value[entity]));
    }
    for(var facet in json["@a5.facets"]) {
      var obj: any = {};
      obj.faceName = facet;
      obj.buckets = json["@a5.facets"][facet].buckets
      obj.hasMoreBuckets = (json["@a5.facets"][facet].sum_other_doc_count > 0);
      this.a5Facets.push(obj);
    }
    this.a5Autocomplete = json["@a5.autocomplete"] ? json["@a5.autocomplete"].autocomplete.buckets : null;
  }
}
