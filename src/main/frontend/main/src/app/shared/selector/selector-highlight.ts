import { AbstractSelectorBoolean } from './abstract-selector-boolean';

export class SelectorHighlight extends AbstractSelectorBoolean {

  static readonly HIGHLIGHT: string = "highlight";

  constructor() {
    super(SelectorHighlight.HIGHLIGHT);
  }
}
