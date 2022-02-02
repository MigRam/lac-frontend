import { ApiSelector } from './api-selector';
import { SelectorAutocomplete } from './selector/selector-autocomplete';
import { SelectorDrill } from './selector/selector-drill';
import { SelectorFacets } from './selector/selector-facets';
import { SelectorFields } from './selector/selector-fields';
import { SelectorHighlight } from './selector/selector-highlight';
import { SelectorSearch } from './selector/selector-search';

export class ApiSelectorQuery extends ApiSelector {

  constructor(
    private _autocomplete: SelectorAutocomplete = null,
    private _drill: SelectorDrill = null,
    private _facets: SelectorFacets = null,
    private _fields: SelectorFields = null,
    private _highlight: SelectorHighlight = null,
    private _search: SelectorSearch = null
  ) {
    super();
  }

  get autocomplete(): boolean|string {
    return this._autocomplete && this._autocomplete.value;
  }

  set autocomplete(autocomplete: boolean|string) {
    if (autocomplete === null || autocomplete === undefined) {
      this._autocomplete = null;
    } else {
      if (this._autocomplete === null) this._autocomplete = new SelectorAutocomplete();
      this._autocomplete.value = autocomplete;
    }
  }

  get drill(): string|Array<string> {
    return this._drill && this._drill.value;
  }

  drillString(): string {
    if (this._drill === null) return "";
    var str: Array<string> = [];
    var tok: string = "";
    for(var i = 0; i < this._drill.value.length; i++) {
      tok = this._drill.value[i];
      if (tok.match(/^(eq|ne|gt|ge|lt|le|or|and|not)$/)) {
        str.push(" " + tok + " ");
      } else {
        str.push(tok);
      }
    }
    return str.join("");
  }

  set drill(drill: string|Array<string>) {
    if (drill === null || drill === undefined) {
      this._drill = null;
    } else {
      if (this._drill === null) this._drill = new SelectorDrill();
      this._drill.value = drill;
    }
  }

  get facets(): string|Array<string> {
    return this._facets && this._facets.value;
  }

  set facets(facets: string|Array<string>) {
    if (facets === null || facets === undefined) {
      this._facets = null;
    } else {
      if (this._facets === null) this._facets = new SelectorFacets();
      this._facets.value = facets;
    }
  }

  get fields(): string|Array<string> {
    return this._fields && this._fields.value;
  }

  set fields(fields: string|Array<string>) {
    if (fields === null || fields === undefined) {
      this._fields = null;
    } else {
      if (this._fields === null) this._fields = new SelectorFields();
      this._fields.value = fields;
    }
  }

  get highlight(): boolean|string {
    return this._highlight && this._highlight.value;
  }

  set highlight(highlight: boolean|string) {
    if (highlight === null || highlight === undefined) {
      this._highlight = null;
    } else {
      if (this._highlight === null) this._highlight = new SelectorHighlight();
      this._highlight.value = highlight;
    }
  }

  get search(): boolean|number|string {
    return this._search && this._search.value;
  }

  set search(search: boolean|number|string) {
    if (search === null || search === undefined) {
      this._search = null;
    } else {
      if (this._search === null) this._search = new SelectorSearch();
      this._search.value = search;
    }
  }

  protected selectors(): Array<string> {
    let selectors: Array<string> = super.selectors();

    if (this._autocomplete !== null) selectors.push(this._autocomplete.toString());
    if (this._drill        !== null) selectors.push(this._drill.toString());
    if (this._facets       !== null) selectors.push(this._facets.toString());
    if (this._fields       !== null) selectors.push(this._fields.toString());
    if (this._highlight    !== null) selectors.push(this._highlight.toString());
    if (this._search       !== null) selectors.push(this._search.toString());
    
    return selectors;
  }

  toQueryString(): string {
    return ("?" + this.selectors().join("&"));
  }
}
