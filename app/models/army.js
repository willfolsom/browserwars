"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Army = void 0;
var Army = /** @class */ (function () {
    function Army() {
    }
    Object.defineProperty(Army.prototype, "units", {
        get: function () {
            return this._units;
        },
        set: function (u) {
            this._units = u;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Army.prototype, "alive", {
        get: function () {
            return this._alive;
        },
        set: function (num) {
            this._alive = num;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Army.prototype, "dead", {
        get: function () {
            return this._dead;
        },
        set: function (num) {
            this._dead = num;
        },
        enumerable: false,
        configurable: true
    });
    return Army;
}());
exports.Army = Army;
//# sourceMappingURL=army.js.map