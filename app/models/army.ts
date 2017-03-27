import { Unit } from './units';

export class Army {
    _color: string;
    _units: Array<Unit>;
    _alive: number;
    _dead: number;

    get units(): Array<Unit> {
        return this._units;
    }
    set units(u:Array<Unit>) {
        this._units = u;
    }
    get alive(): number {
        return this._alive;
    }
    set alive(num:number) {
        this._alive = num;
    }
    get dead(): number {
        return this._dead;
    }
    set dead(num:number) {
        this._dead = num;
    }
}