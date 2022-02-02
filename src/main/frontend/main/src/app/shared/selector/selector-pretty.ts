import { AbstractSelectorBoolean } from './abstract-selector-boolean';

export class SelectorPretty extends AbstractSelectorBoolean {

  static readonly PRETTY: string = "pretty";

  constructor() {
    super(SelectorPretty.PRETTY);
  }
}
