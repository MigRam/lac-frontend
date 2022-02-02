import { AbstractSelectorStringArray } from './abstract-selector-string-array';

export class SelectorExpand extends AbstractSelectorStringArray {

  static readonly EXPAND: string = "$expand";

  constructor() {
    super(SelectorExpand.EXPAND);
  }
}
