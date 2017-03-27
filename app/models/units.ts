export class Unit {
    name: string;
    type: Type;
    health: number;
    startHealth: number;
    _alive: boolean=true;
    attack: number;
    defense: number;
    speed: number;
    luck: number;
    killed: Array<Unit>=[];
    deathBy: Unit;
    img: string;

    get heartIcon(): string {
        if (this.health > 2*this.startHealth/3) return 'app/assets/icons/heart_green.png';
        else if (this.health > this.startHealth/3) return 'app/assets/icons/heart_yellow.png';
        return 'app/assets/icons/heart_red.png';
    }

    get alive(): boolean {
        return this._alive;
    }
    set alive(b:boolean) {
        this._alive = false;
    }
}

/**
 * translates to 0, 1, 2 for easier img naming
 */
enum Type {
    infantry,
    tank,
    mech
}

export class Infantry extends Unit {
    name = 'Infantry';
    type = Type.infantry;
    health = 4;
    startHealth = 4;
    alive: true;
    attack = 4;
    defense = 3;
    speed = 2;
    luck = 3;
}

export class Tank extends Unit {
    name = 'Tank';
    type = Type.tank;
    health = 9;
    startHealth = 9;
    alive: true;
    attack = 6;
    defense = 9;
    speed = 3;
    luck = 1;
}

export class Mech extends Unit {
    name = 'Mech';
    type = Type.mech;
    health = 7;
    startHealth = 7;
    alive: true;
    attack = 8;
    defense = 6;
    speed = 1;
    luck = 2;
}