/** Dropdown component that allows for custom color to be chosen */

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'color-input',
    template: `<select id="sel" #sel (change)="selectItem(sel.value)"><option *ngFor="let value of values">{{value}}</option></select>`,
    styles: [`{background-color: white`]
})
export class ColorInputComponent {
    @Input()
    values = ['RED', 'BLUE', 'GREEN', 'GOLD'];

    @Output() select = new EventEmitter();

    selectItem(value:any) {
        this.select.emit(value);
    }
}