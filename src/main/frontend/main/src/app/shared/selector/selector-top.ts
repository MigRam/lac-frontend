import { AbstractSelectorNumber } from './abstract-selector-number';

export class SelectorTop extends AbstractSelectorNumber {

  static readonly TOP: string = "$top";

  constructor() {
    super(SelectorTop.TOP);
  }
}
