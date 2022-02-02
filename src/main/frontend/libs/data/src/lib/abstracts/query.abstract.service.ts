export abstract class AbstractQueryService {
   abstract query(input: string | string[]): any;
   abstract queryAll(): any
   abstract querySelectorsMap(): any;
   abstract filter(operator: string, keyword: string): any;
}
