import { AbstractSelectorStringArray } from './abstract-selector-string-array';

export class SelectorSelect extends AbstractSelectorStringArray {

  static readonly SELECT: string = "$select";

  constructor() {
    super(SelectorSelect.SELECT);
  }
}
