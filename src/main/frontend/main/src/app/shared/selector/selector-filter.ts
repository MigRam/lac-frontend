import { AbstractSelectorFilter } from './abstract-selector-filter';

export class SelectorFilter extends AbstractSelectorFilter {

  static readonly FILTER: string = "$filter";

  constructor() {
    super(SelectorFilter.FILTER);
  }
}
