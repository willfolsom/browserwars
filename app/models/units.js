"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mech = exports.Tank = exports.Infantry = exports.Unit = void 0;
var Unit = /** @class */ (function () {
    function Unit() {
        this._alive = true;
        this.killed = [];
    }
    Object.defineProperty(Unit.prototype, "heartIcon", {
        get: function () {
            /** determine which color heart to use based on health */
            if (this.health > 2 * this.startHealth / 3)
                return 'app/assets/icons/heart_green.png';
            else if (this.health > this.startHealth / 3)
                return 'app/assets/icons/heart_yellow.png';
            return 'app/assets/icons/heart_red.png';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Unit.prototype, "alive", {
        get: function () {
            return this._alive;
        },
        set: function (b) {
            this._alive = false;
        },
        enumerable: false,
        configurable: true
    });
    return Unit;
}());
exports.Unit = Unit;
/**
 * translates to 0, 1, 2 for easier img naming and asset mgmt
 */
var Type;
(function (Type) {
    Type[Type["infantry"] = 0] = "infantry";
    Type[Type["tank"] = 1] = "tank";
    Type[Type["mech"] = 2] = "mech";
})(Type || (Type = {}));
var Infantry = /** @class */ (function (_super) {
    __extends(Infantry, _super);
    function Infantry() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'Infantry';
        _this.type = Type.infantry;
        _this.health = 4;
        _this.startHealth = 4;
        _this.attack = 4;
        _this.defense = 3;
        _this.speed = 2;
        _this.luck = 3;
        return _this;
    }
    return Infantry;
}(Unit));
exports.Infantry = Infantry;
var Tank = /** @class */ (function (_super) {
    __extends(Tank, _super);
    function Tank() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'Tank';
        _this.type = Type.tank;
        _this.health = 9;
        _this.startHealth = 9;
        _this.attack = 6;
        _this.defense = 9;
        _this.speed = 3;
        _this.luck = 1;
        return _this;
    }
    return Tank;
}(Unit));
exports.Tank = Tank;
var Mech = /** @class */ (function (_super) {
    __extends(Mech, _super);
    function Mech() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'Mech';
        _this.type = Type.mech;
        _this.health = 7;
        _this.startHealth = 7;
        _this.attack = 8;
        _this.defense = 6;
        _this.speed = 1;
        _this.luck = 2;
        return _this;
    }
    return Mech;
}(Unit));
exports.Mech = Mech;
//# sourceMappingURL=units.js.map