
enum State {
  IN_VALUE,
  OUT_VALUE
}

export abstract class AbstractSelectorFilter {

  protected _param: string;

  protected _value: Array<string> = [];

  private _state: State;

  private _input: string;

  private _token: string = "";

  private _quote: string;

  private _pos: number = -1;

  private _size: number;

  constructor(param: string) {
    this._param = param;
  }

  get value(): string|Array<string> {
    return this._value;
  }

  set value(value: string|Array<string>) {
    if (typeof value === "string") {
      this._input = value;
      this._size = value.length;
      this.parse();
    } else {
      this._value = value;
    }
  }

  toString(): string {
    var str: Array<string> = [];
    var tok: string = "";
    for(var i = 0; i < this._value.length; i++) {
      tok = this._value[i];
      if (tok.match(/^(eq|ne|gt|ge|lt|le|or|and|not)$/)) {
        str.push(" " + tok + " ");
      } else {
        str.push(tok);
      }
    }
    return this._param + "=" + str.join("");
  }

  private next(): string {
    let next: string;
    if (this._pos + 1 < this._size) {
      next = this.peek();
      this._pos++;
    } else {
      next = null;
    }
    return next;
  }

  private peek(): string {
    return this._input[this._pos];
  }

  private eat(): void {
    this._token += this.peek();
  }

  private flush(): void {
    if (this._token !== "") {
      this._value.push(this._token);
      this._token = "";
    }
  }

  private parseSpace(): void {
    this._state === State.IN_VALUE ? this.eat() : this.flush();
  }

  private parseSingleQuote(): void {
    if (this._state === State.IN_VALUE && this._quote === "\"") {
      this._state = State.OUT_VALUE;
      this._quote = "";
    } else if (this._state === State.OUT_VALUE) {
      this._state = State.IN_VALUE;
      this._quote = "\"";
    } else {
      this.eat();
    }
  }

  private parseDoubleQuote(): void {
    if (this._state === State.IN_VALUE && this._quote === "'") {
      this._state = State.OUT_VALUE;
      this._quote = "";
    } else if (this._state === State.OUT_VALUE) {
      this._state = State.IN_VALUE;
      this._quote = "'";
    } else {
      this.eat();
    }
  }

  private parseParenthesis(): void {
    this.flush();
    this.eat();
    this.flush();
  }

  private parse(): void {
    while(this.next() !== null) {
      switch(this.peek()) {
        case " ":
          this.parseSpace();
          break;
        case "'":
          this.parseSingleQuote();
          break;
        case "\"":
          this.parseDoubleQuote();
          break;
        case "(":
        case ")":
          this.parseParenthesis();
          break;
        default:
          this.eat();
          break;
      }
    }
    this.flush();
  }
}
