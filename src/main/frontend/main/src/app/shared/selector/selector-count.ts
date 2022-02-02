import { AbstractSelectorBoolean } from './abstract-selector-boolean';

export class SelectorCount extends AbstractSelectorBoolean {

  static readonly COUNT: string = "$count";

  constructor() {
    super(SelectorCount.COUNT);
  }
}
