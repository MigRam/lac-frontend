export abstract class AbstractSelectorBoolean {

  protected _param: string;

  protected _value: boolean;

  constructor(param: string) {
    this._param = param;
  }

  get value(): string|boolean {
    return this._value;
  }

  set value(value: string|boolean) {
    if (typeof value === "string") {
      this._value = (value === "true" || value === "");
    } else {
      this._value = value;
    }
  }

  toString(): string {
    return this._param + "=" + this._value;
  }
}
