export abstract class AbstractSelectorString {

  protected _param: string;

  protected _value: string;

  constructor(param: string) {
    this._param = param;
  }

  get value(): boolean|number|string {
    return this._value;
  }

  set value(value: boolean|number|string) {
    if (typeof value === "string") {
      this._value = value;
    } else {
      this._value = "" + value;
    }
  }

  toString(): string {
    return this._param + "=" + this._value;
  }
}
