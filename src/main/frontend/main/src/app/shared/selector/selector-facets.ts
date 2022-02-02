import { AbstractSelectorStringArray } from './abstract-selector-string-array';

export class SelectorFacets extends AbstractSelectorStringArray {

  static readonly FACETS: string = "facets";

  constructor() {
    super(SelectorFacets.FACETS);
  }
}
