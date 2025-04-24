import {Directive, signal} from '@angular/core';

// <div appInsertShadow #sshadowDirective="appInsertShadow">

@Directive({
    selector: '[appInsertShadow]',
    standalone: true,
    host: {
        '[style.boxShadow]': 'boxShadow()',
        '(click)': 'toggleShadow()',
    },
    exportAs: 'appInsertShadow',
})
export class InsertShadowDirective {
    readonly boxShadow = signal('');

    toggleShadow() {
        this.boxShadow.update(currentBoxShadow => (!currentBoxShadow ? 'inset 0 0 10px #000' : ''));
    }
}
