import {Directive, signal} from '@angular/core';

@Directive({
    selector: '[appInsertShadow]',
    standalone: true,
    host: {
        '[style.boxShadow]': 'boxShadow()',
        '(click)': 'toggleShadow()',
    },
})
export class InsertShadowDirective {
    readonly boxShadow = signal('');

    toggleShadow() {
        this.boxShadow.update(currentBoxShadow => (!currentBoxShadow ? 'inset 0 0 10px #000' : ''));
    }
}
