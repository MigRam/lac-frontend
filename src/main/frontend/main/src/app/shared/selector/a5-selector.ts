import { A5SelectorDrill } from './a5-selector-drill';

export class A5Selector {

  count: boolean;

  filter: A5SelectorDrill = new A5SelectorDrill("$filter", "or");

  orderby: Array<string> = null;

  search: string;

  select: Array<string> = null;

  skip: number = 0;

  top: number = 10;

  autocomplete: boolean;

  drill: A5SelectorDrill = new A5SelectorDrill("drill", "or");

  facets: Object = {
      ObjectLanguage: 5,
      Keywords: 5,
      ResourceType: 5,
      Country: 5,
      Creator: 5,
      Region: 5
  };

  fields: Array<string> = null;

  highlight: boolean = true;

  pretty: boolean = false;

  toQueryString(): string {
    var tokens: any = [];
    if (this.count        != null) tokens.push("$count="       + this.count);
    tokens.push(this.filter.toQueryString());
    if (this.orderby      != null) tokens.push("$orderby="     + this.orderby);
    if (this.search       != null) tokens.push("$search="      + (this.search == "" ? "*" : this.search));
    if (this.select       != null) tokens.push("$select="      + this.select);
    if (this.skip         != null) tokens.push("$skip="        + this.skip);
    if (this.top          != null) tokens.push("$top="         + this.top);
    if (this.autocomplete != null) tokens.push("autocomplete=" + this.autocomplete);
    tokens.push(this.drill.toQueryString());
    if (this.facets       != null) {
      var facetStrings: any = [];
      for(var facet in this.facets) {
        facetStrings.push(facet + ":" + this.facets[facet]);
      }
      tokens.push("facets=" + facetStrings.join(","));
    }
    if (this.fields       != null) tokens.push("fields="       + this.fields);
    if (this.highlight    != null) tokens.push("highlight="    + this.highlight);
    if (this.pretty       != null) tokens.push("pretty="       + this.pretty);
    return ("?" + tokens.join("&"));
  }
}
