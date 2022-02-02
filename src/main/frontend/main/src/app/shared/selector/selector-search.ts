import { AbstractSelectorString } from './abstract-selector-string';

export class SelectorSearch extends AbstractSelectorString {

  static readonly SEARCH: string = "$search";

  constructor() {
    super(SelectorSearch.SEARCH);
  }
}
