/**
 * Dropdown component that allows for custom color to be chosen
 */
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
var ColorInputComponent = (function () {
    function ColorInputComponent() {
        this.values = ['RED', 'BLUE', 'GREEN', 'GOLD'];
        this.select = new core_1.EventEmitter();
    }
    ColorInputComponent.prototype.selectItem = function (value) {
        this.select.emit(value);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ColorInputComponent.prototype, "values", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ColorInputComponent.prototype, "select", void 0);
    ColorInputComponent = __decorate([
        core_1.Component({
            selector: 'color-input',
            template: "<select id=\"sel\" #sel (change)=\"selectItem(sel.value)\"><option *ngFor=\"let value of values\">{{value}}</option></select>",
            styles: ["{background-color: white"]
        }), 
        __metadata('design:paramtypes', [])
    ], ColorInputComponent);
    return ColorInputComponent;
}());
exports.ColorInputComponent = ColorInputComponent;
//# sourceMappingURL=colorInput.component.js.map