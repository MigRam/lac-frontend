"use strict";
var State;
(function (State) {
    State[State["IN_VALUE"] = 0] = "IN_VALUE";
    State[State["OUT_VALUE"] = 1] = "OUT_VALUE";
})(State || (State = {}));

var AbstractSelectorFilter = (function () {
    function AbstractSelectorFilter(param) {
        this._value = [];
        this._token = "";
        this._pos = -1;
        this._param = param;
    }
    Object.defineProperty(AbstractSelectorFilter.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            if (typeof value === "string") {
                this._input = value;
                this._size = value.length;
                this.parse();
            }
            else {
                this._value = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    AbstractSelectorFilter.prototype.toString = function () {
        var str = [];
        var tok = "";
        for (var i = 0; i < this._value.length; i++) {
            tok = this._value[i];
            if (tok.match(/^(eq|ne|gt|ge|lt|le|or|and|not)$/)) {
                str.push(" " + tok + " ");
            }
            else {
                str.push(tok);
            }
        }
        return this._param + "=" + str.join("");
    };
    AbstractSelectorFilter.prototype.next = function () {
        var next;
        if (this._pos + 1 < this._size) {
            next = this.peek();
            this._pos++;
        }
        else {
            next = null;
        }
        return next;
    };
    AbstractSelectorFilter.prototype.peek = function () {
        return this._input[this._pos];
    };
    AbstractSelectorFilter.prototype.eat = function () {
        this._token += this.peek();
    };
    AbstractSelectorFilter.prototype.flush = function () {
        if (this._token !== "") {
            this._value.push(this._token);
            this._token = "";
        }
    };
    AbstractSelectorFilter.prototype.parseSpace = function () {
        this._state === State.IN_VALUE ? this.eat() : this.flush();
    };
    AbstractSelectorFilter.prototype.parseSingleQuote = function () {
        if (this._state === State.IN_VALUE && this._quote === "\"") {
            this._state = State.OUT_VALUE;
            this._quote = "";
        }
        else if (this._state === State.OUT_VALUE) {
            this._state = State.IN_VALUE;
            this._quote = "\"";
        }
        else {
            this.eat();
        }
    };
    AbstractSelectorFilter.prototype.parseDoubleQuote = function () {
        if (this._state === State.IN_VALUE && this._quote === "'") {
            this._state = State.OUT_VALUE;
            this._quote = "";
        }
        else if (this._state === State.OUT_VALUE) {
            this._state = State.IN_VALUE;
            this._quote = "'";
        }
        else {
            this.eat();
        }
    };
    AbstractSelectorFilter.prototype.parseParenthesis = function () {
        this.flush();
        this.eat();
        this.flush();
    };
    AbstractSelectorFilter.prototype.parse = function () {
        while (this.next() !== null) {
            switch (this.peek()) {
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
    };
    return AbstractSelectorFilter;
}());
exports.AbstractSelectorFilter = AbstractSelectorFilter;
//# sourceMappingURL=abstract-selector-filter.js.map
