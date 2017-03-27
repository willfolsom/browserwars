"use strict";
var Army = (function () {
    function Army() {
    }
    Object.defineProperty(Army.prototype, "units", {
        get: function () {
            return this._units;
        },
        set: function (u) {
            this._units = u;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Army.prototype, "alive", {
        get: function () {
            return this._alive;
        },
        set: function (num) {
            this._alive = num;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Army.prototype, "dead", {
        get: function () {
            return this._dead;
        },
        set: function (num) {
            this._dead = num;
        },
        enumerable: true,
        configurable: true
    });
    return Army;
}());
exports.Army = Army;
//# sourceMappingURL=army.js.map