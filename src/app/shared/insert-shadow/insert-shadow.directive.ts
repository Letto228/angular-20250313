import {Directive, signal} from '@angular/core';

@Directive({
    selector: '[appInsertShadow]',
    standalone: true,
    host: {
        '[style.boxShadow]': 'boxShadow()',
        '(click)': 'toggleShadow($event)',
    },
})
export class InsertShadowDirective {
    // private readonly nativeElement = inject(ElementRef).nativeElement;

    // @HostBinding('style')
    // style: string

    // @HostListener('click')
    // onClick() {...}

    // constructor() {
    //     console.log(this.nativeElement);
    // }

    readonly boxShadow = signal('');

    toggleShadow(event: Event) {
        // console.log('Clicked');
        this.boxShadow.update(currentBoxShadow => (!currentBoxShadow ? 'inset 0 0 10px #000' : ''));
        // eslint-disable-next-line no-console
        console.log('Clicked', this.boxShadow(), event);
    }
}
