export class DiscoveryFacets {

  private _topFive = ['ObjectLanguage', 'Keywords', 'Country'];
  private _index = [ 'ObjectLanguage', 'Country', 'Region', 'Keywords', 'ResourceMimeType', 'MetadataType' ];

  toQuerySelector() {
    return this._index.toString();
  }

  toExploreTopFiveSelector() {
    return this._topFive.toString();
  }



}
