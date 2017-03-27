import { Component, OnInit } from '@angular/core';
import { Army } from './models/army';
import { CombatService } from './combat.service';
import { Unit } from './models/units';
import { ColorInputComponent } from './colorInput.component';

@Component({
    selector: 'browser-wars',
    moduleId: module.id,
    templateUrl: './app.component.html',
    providers: [ CombatService, ColorInputComponent ]
})

export class AppComponent implements OnInit {
    private _actionText = 'Fight!';
    private _logger:Array<string>;
    private _color = 'red';

    constructor(
        private _combatService: CombatService
    ) {}

    ngOnInit() {
        this._combatService.initArmies('red');
    }

    get goodArmy(): Array<Unit> {
        return this._combatService.goodArmy;
    }
    get badArmy(): Array<Unit> {
        return this._combatService.badArmy;
    }
    get logger(): Array<string> {
        return this._combatService.logger;
    }
    get actionText(): string {
        return this._actionText;
    }
    set actionText(s:string){
        this._actionText = s;
    }
    get color(): string {
        return this._color;
    }

    private changeArmyColor(value:string) {
        this._color = value;
        this._combatService.recolorArmy(value);
    }

    private fight() {
        if (this._combatService.noWinner) {
            this._combatService.fight();
            if (!this._combatService.noWinner) this.actionText = 'Restart!';
        }
        else {
            this.actionText = 'Fight!';
            this._combatService.initArmies(this.color);
        }
    }
}