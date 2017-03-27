import { Injectable } from '@angular/core';
import { Army } from './models/army';
import { Unit, Infantry, Tank, Mech } from './models/units';

@Injectable()
export class CombatService {
    private _goodArmy:Army;
    private _badArmy:Army;
    private _logger:Array<string>=['', '', ''];
    private _noWinner:boolean=true;

    get goodArmy(): Array<Unit> {
        return this._goodArmy.units;
    }
    get badArmy(): Array<Unit> {
        return this._badArmy.units;
    }
    get logger(): Array<string> {
        return this._logger;
    }
    set logger(s:Array<string>) {
        this._logger = s;
    }
    get noWinner(): boolean {
        return this._noWinner;
    }
    set noWinner(b:boolean) {
        this._noWinner = b;
    }

    /**
     * Creating and manipluating army functions
     */
    initArmies(color: string): Array<Army> {
        this.noWinner = true;
        this._goodArmy = this.newArmy(color);
        this._badArmy = this.newArmy('robo');
        return [this._goodArmy, this._badArmy];
    }

    newArmy(color: string): Army {
        let army = new Army();
        let units = Array<Unit>();
        army._color = color;

        units.push(new Mech());
        units.push(new Tank());
        units.push(new Infantry());

        (color == 'robo') ? units.reverse() : '';

        for (let u in units) {
            units[u].img = 'app/assets/' +
                army._color + '/' +
                units[u].type + '.png';
        }

        army.units = units;
        army.alive = units.length;
        return army;
    }

    recolorArmy(color:string) {
        for (let u in this._goodArmy._units) {
            this._goodArmy._units[u].img = 'app/assets/' +
                color + '/' +
                this._goodArmy._units[u].type + '.png';
        }
        this._goodArmy._color = color;
    }

    /**
     * Turn logic
     */
    fight() {
        this.logger = ['','',''];

        /** determine who is alive and eligible to fight */
        let tempGood = this.goodArmy.filter(function(u) { return u.alive; });
        let tempBad = this.badArmy.filter(function(u) { return u.alive; });

        if (tempGood.length && tempBad.length) {
            for (let u in tempBad) {
                let ran = Math.floor(Math.random()*(tempGood.length));
                this.battle(tempBad[u], tempGood[ran], 0);
            }
            for (let u in tempGood) {
                let ran = Math.floor(Math.random()*(tempBad.length));
                this.battle(tempGood[u], tempBad[ran], 1);
            }
        }

        /** rediscover who is alive after battling to determine if there was a victor */
        tempGood = this.goodArmy.filter(function(u) { return u.alive; });
        tempBad = this.badArmy.filter(function(u) { return u.alive; });

        if (tempGood.length && !tempBad.length) {
            this.noWinner = false;
            this.logger[2] = 'You are victorious!'
        }
        else if (!tempGood.length && tempBad.length) {
            this.noWinner = false;
            this.logger[2] = 'The robots have defeated you.'
        }
        else if (!tempGood.length && !tempBad.length) {
            this.noWinner = false;
            this.logger[2] = 'Your armies have destroyed each other!';
        }
    }

    battle(u1:Unit, u2:Unit, n:number) {
        u1.health -= (u2.attack - u1.defense) < 0 ?
                     (u2.attack - u1.defense)*(-1) :
                     (u2.attack - u1.defense);

        u2.health -= (u1.attack - u2.defense) < 0 ?
                     (u1.attack - u2.defense)*(-1) :
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
        else if (u1.health <= 0 && u2.health <= 0){
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
    }
}