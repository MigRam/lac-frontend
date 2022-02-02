import { SelectorCount }        from './selector/selector-count';
import { SelectorExpand }       from './selector/selector-expand';
import { SelectorFilter }       from './selector/selector-filter';
import { SelectorOrderby }      from './selector/selector-orderby';
import { SelectorPretty }       from './selector/selector-pretty';
import { SelectorSelect }       from './selector/selector-select';
import { SelectorSkip }         from './selector/selector-skip';
import { SelectorTop }          from './selector/selector-top';

export abstract class ApiSelector {

  constructor(
    private _count: SelectorCount = null,
    private _expand: SelectorExpand = null,
    private _filter: SelectorFilter = null,
    private _orderby: SelectorOrderby = null,
    private _pretty: SelectorPretty = null,
    private _select: SelectorSelect = null,
    private _skip: SelectorSkip = null,
    private _top: SelectorTop = null
  ) {}

  get count(): boolean|string {
    return this._count && this._count.value;
  }

  set count(count: boolean|string) {
    if (count === null || count === undefined) {
      this._count = null;
    } else {
      if (this._count === null) this._count = new SelectorCount();
      this._count.value = count;
    }
  }

  get expand(): string|Array<string> {
    return this._expand && this._expand.value;
  }

  set expand(expand: string|Array<string>) {
    if (expand === null || expand === undefined) {
      this._expand = null;
    } else {
      if (this._expand === null) this._expand = new SelectorExpand();
      this._expand.value = expand;
    }
  }

  get filter(): string|Array<string> {
    return this._filter && this._filter.value;
  }

  set filter(filter: string|Array<string>) {
    if (filter === null || filter === undefined) {
      this._filter = null;
    } else {
      if (this._filter === null) this._filter = new SelectorFilter();
      this._filter.value = filter;
    }
  }

  get orderby(): string|Array<string> {
    return this._orderby && this._orderby.value;
  }

  set orderby(orderby: string|Array<string>) {
    if (orderby === null || orderby === undefined) {
      this._orderby = null;
    } else {
      if (this._orderby === null) this._orderby = new SelectorOrderby();
      this._orderby.value = orderby;
    }
  }

  get pretty(): string|boolean {
    return this._pretty && this._pretty.value;
  }

  set pretty(pretty: string|boolean) {
    if (pretty === null || pretty === undefined) {
      this._pretty = null;
    } else {
      if (this._pretty === null) this._pretty = new SelectorPretty();
      this._pretty.value = pretty;
    }
  }

  get select(): string|Array<string> {
    return this._select && this._select.value;
  }

  set select(select: string|Array<string>) {
    if (select === null || select === undefined) {
      this._select = null;
    } else {
      if (this._select === null) this._select = new SelectorSelect();
      this._select.value = select;
    }
  }

  get skip(): number|string {
    return this._skip && this._skip.value;
  }

  set skip(skip: number|string) {
    if (skip === null || skip === undefined) {
      this._skip = null;
    } else {
      if (this._skip === null) this._skip = new SelectorSkip();
      this._skip.value = skip;
    }
  }

  get top(): number|string {
    return this._top && this._top.value;
  }

  set top(top: number|string) {
    if (top === null || top === undefined) {
      this._top = null;
    } else {
      if (this._top === null) this._top = new SelectorTop();
      this._top.value = top;
    }
  }

  protected selectors(): Array<string> {
    let selectors: Array<string> = [];
    if (this._count        !== null) selectors.push(this._count.toString());
    if (this._expand       !== null) selectors.push(this._expand.toString());
    if (this._filter       !== null) selectors.push(this._filter.toString());
    if (this._orderby      !== null) selectors.push(this._orderby.toString());
    if (this._pretty       !== null) selectors.push(this._pretty.toString());
    if (this._select       !== null) selectors.push(this._select.toString());
    if (this._skip         !== null) selectors.push(this._skip.toString());
    if (this._top          !== null) selectors.push(this._top.toString());
    return selectors;
  }
}
