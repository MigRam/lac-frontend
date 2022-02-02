import { AbstractSelectorNumber } from './abstract-selector-number';

export class SelectorSkip extends AbstractSelectorNumber {

  static readonly SKIP: string = "$skip";

  constructor() {
    super(SelectorSkip.SKIP);
  }
}
