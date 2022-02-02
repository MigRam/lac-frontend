import { ApiSelector } from './api-selector';

export class ApiSelectorObject extends ApiSelector {

  constructor(
  ) {
    super();
  }

  toQueryString(): string {
    return ("?" + this.selectors().join("&"));
  }
}
