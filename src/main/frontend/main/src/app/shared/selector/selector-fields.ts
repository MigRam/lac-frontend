import { AbstractSelectorStringArray } from './abstract-selector-string-array';

export class SelectorFields extends AbstractSelectorStringArray {

  static readonly FIELDS: string = "fields";

  constructor() {
    super(SelectorFields.FIELDS);
  }
}
