import { AbstractSelectorFilter } from './abstract-selector-filter';

export class SelectorDrill extends AbstractSelectorFilter {

  static readonly DRILL: string = "drill";

  constructor() {
    super(SelectorDrill.DRILL);
  }
}
