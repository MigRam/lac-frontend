export abstract class AbstractSelectorStringArray {

  protected _param: string;

  protected _value: Array<string>;

  constructor(param: string) {
    this._param = param;
  }

  get value(): string|Array<string> {
    return this._value;
  }

  set value(value: string|Array<string>) {
    if (typeof value === "string") {
      this._value = value.split(",");
    } else {
      this._value = value;
    }
  }

  toString(): string {
    return this._param + "=" + this._value.join();
  }
}
