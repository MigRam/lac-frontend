export abstract class AbstractSelectorNumber {

  protected _param: string;

  protected _value: number;

  constructor(param: string) {
    this._param = param;
  }

  get value(): number|string {
    return this._value;
  }

  set value(value: number|string) {
    if (typeof value === "string") {
      this._value = parseInt(value);
    } else {
      this._value = value;
    }
  }

  toString(): string {
    return this._param + "=" + this._value;
  }
}
