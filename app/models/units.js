"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Unit = (function () {
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
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Unit.prototype, "alive", {
        get: function () {
            return this._alive;
        },
        set: function (b) {
            this._alive = false;
        },
        enumerable: true,
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
var Infantry = (function (_super) {
    __extends(Infantry, _super);
    function Infantry() {
        _super.apply(this, arguments);
        this.name = 'Infantry';
        this.type = Type.infantry;
        this.health = 4;
        this.startHealth = 4;
        this.attack = 4;
        this.defense = 3;
        this.speed = 2;
        this.luck = 3;
    }
    return Infantry;
}(Unit));
exports.Infantry = Infantry;
var Tank = (function (_super) {
    __extends(Tank, _super);
    function Tank() {
        _super.apply(this, arguments);
        this.name = 'Tank';
        this.type = Type.tank;
        this.health = 9;
        this.startHealth = 9;
        this.attack = 6;
        this.defense = 9;
        this.speed = 3;
        this.luck = 1;
    }
    return Tank;
}(Unit));
exports.Tank = Tank;
var Mech = (function (_super) {
    __extends(Mech, _super);
    function Mech() {
        _super.apply(this, arguments);
        this.name = 'Mech';
        this.type = Type.mech;
        this.health = 7;
        this.startHealth = 7;
        this.attack = 8;
        this.defense = 6;
        this.speed = 1;
        this.luck = 2;
    }
    return Mech;
}(Unit));
exports.Mech = Mech;
//# sourceMappingURL=units.js.map