import { ApiSelectorQuery } from './api-selector-query';

export class ApiSelectorAnnotation extends ApiSelectorQuery {

    constructor(
    ) {
        super();
    }

    toQueryString(): string {
        return ("?" + this.selectors().join("&"));
    }
}
