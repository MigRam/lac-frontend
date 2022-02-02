import { AbstractSelectorBoolean } from './abstract-selector-boolean';

export class SelectorAutocomplete extends AbstractSelectorBoolean {

  static readonly AUTOCOMPLETE: string = "autocomplete";

  constructor() {
    super(SelectorAutocomplete.AUTOCOMPLETE);
  }
}
