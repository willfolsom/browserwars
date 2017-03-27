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
var combat_service_1 = require('./combat.service');
var colorInput_component_1 = require('./colorInput.component');
var AppComponent = (function () {
    function AppComponent(_combatService) {
        this._combatService = _combatService;
        this._actionText = 'Fight!';
        this._color = 'red';
    }
    AppComponent.prototype.ngOnInit = function () {
        this._combatService.initArmies('red');
    };
    Object.defineProperty(AppComponent.prototype, "goodArmy", {
        get: function () {
            return this._combatService.goodArmy;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "badArmy", {
        get: function () {
            return this._combatService.badArmy;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "logger", {
        get: function () {
            return this._combatService.logger;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "actionText", {
        get: function () {
            return this._actionText;
        },
        set: function (s) {
            this._actionText = s;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "color", {
        get: function () {
            return this._color;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.changeArmyColor = function (value) {
        this._color = value;
        this._combatService.recolorArmy(value);
    };
    AppComponent.prototype.fight = function () {
        if (this._combatService.noWinner) {
            this._combatService.fight();
            if (!this._combatService.noWinner)
                this.actionText = 'Restart!';
        }
        else {
            this.actionText = 'Fight!';
            this._combatService.initArmies(this.color);
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'browser-wars',
            moduleId: module.id,
            templateUrl: './app.component.html',
            providers: [combat_service_1.CombatService, colorInput_component_1.ColorInputComponent]
        }), 
        __metadata('design:paramtypes', [combat_service_1.CombatService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map