import { AbstractSelectorStringArray } from './abstract-selector-string-array';

export class SelectorOrderby extends AbstractSelectorStringArray {

  static readonly ORDERBY: string = "$orderby";

  constructor() {
    super(SelectorOrderby.ORDERBY);
  }
}
