"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var army_1 = require('./models/army');
var units_1 = require('./models/units');
var CombatService = (function () {
    function CombatService() {
        this._logger = ['', '', ''];
        this._noWinner = true;
    }
    Object.defineProperty(CombatService.prototype, "goodArmy", {
        get: function () {
            return this._goodArmy.units;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CombatService.prototype, "badArmy", {
        get: function () {
            return this._badArmy.units;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CombatService.prototype, "logger", {
        get: function () {
            return this._logger;
        },
        set: function (s) {
            this._logger = s;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CombatService.prototype, "noWinner", {
        get: function () {
            return this._noWinner;
        },
        set: function (b) {
            this._noWinner = b;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Creating and manipluating army functions
     */
    CombatService.prototype.initArmies = function (color) {
        this.noWinner = true;
        this._goodArmy = this.newArmy(color);
        this._badArmy = this.newArmy('robo');
        return [this._goodArmy, this._badArmy];
    };
    CombatService.prototype.newArmy = function (color) {
        var army = new army_1.Army();
        var units = Array();
        army._color = color;
        units.push(new units_1.Mech());
        units.push(new units_1.Tank());
        units.push(new units_1.Infantry());
        (color == 'robo') ? units.reverse() : '';
        for (var u in units) {
            units[u].img = 'app/assets/' +
                army._color + '/' +
                units[u].type + '.png';
        }
        army.units = units;
        army.alive = units.length;
        return army;
    };
    CombatService.prototype.recolorArmy = function (color) {
        for (var u in this._goodArmy._units) {
            this._goodArmy._units[u].img = 'app/assets/' +
                color + '/' +
                this._goodArmy._units[u].type + '.png';
        }
        this._goodArmy._color = color;
    };
    /**
     * Turn logic
     */
    CombatService.prototype.fight = function () {
        this.logger = ['', '', ''];
        /** determine who is alive and eligible to fight */
        var tempGood = this.goodArmy.filter(function (u) { return u.alive; });
        var tempBad = this.badArmy.filter(function (u) { return u.alive; });
        if (tempGood.length && tempBad.length) {
            for (var u in tempBad) {
                var ran = Math.floor(Math.random() * (tempGood.length));
                this.battle(tempBad[u], tempGood[ran], 0);
            }
            for (var u in tempGood) {
                var ran = Math.floor(Math.random() * (tempBad.length));
                this.battle(tempGood[u], tempBad[ran], 1);
            }
        }
        /** rediscover who is alive after battling to determine if there was a victor */
        tempGood = this.goodArmy.filter(function (u) { return u.alive; });
        tempBad = this.badArmy.filter(function (u) { return u.alive; });
        if (tempGood.length && !tempBad.length) {
            this.noWinner = false;
            this.logger[2] = 'You are victorious!';
        }
        else if (!tempGood.length && tempBad.length) {
            this.noWinner = false;
            this.logger[2] = 'The robots have defeated you.';
        }
        else if (!tempGood.length && !tempBad.length) {
            this.noWinner = false;
            this.logger[2] = 'Your armies have destroyed each other!';
        }
    };
    CombatService.prototype.battle = function (u1, u2, n) {
        u1.health -= (u2.attack - u1.defense) < 0 ?
            (u2.attack - u1.defense) * (-1) :
            (u2.attack - u1.defense);
        u2.health -= (u1.attack - u2.defense) < 0 ?
            (u1.attack - u2.defense) * (-1) :
            (u1.attack - u2.defense);
        this.logger[n] += u1.name + ' attacks ' + u2.name + '! ';
        if (u1.health <= 0 && u2.health > 0) {
            u1.deathBy = u2;
            u1.health = 0;
            u1.alive = false;
            u2.killed.push(u1);
            this.logger[n] += u2.name + ' KILLS ' + u1.name + '! ';
        }
        else if (u1.health > 0 && u2.health <= 0) {
            u2.deathBy = u1;
            u2.health = 0;
            u2.alive = false;
            u1.killed.push(u2);
            this.logger[n] += u1.name + ' KILLS ' + u2.name + '! ';
        }
        else if (u1.health <= 0 && u2.health <= 0) {
            u1.deathBy = u2;
            u1.health = 0;
            u1.alive = false;
            u2.killed.push(u1);
            u2.deathBy = u1;
            u2.health = 0;
            u2.alive = false;
            u1.killed.push(u2);
            this.logger[n] += u1.name + ' and ' + u2.name + ' kill each other! ';
        }
    };
    CombatService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], CombatService);
    return CombatService;
}());
exports.CombatService = CombatService;
//# sourceMappingURL=combat.service.js.map