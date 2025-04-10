import {Directive, effect, inject, input, TemplateRef, ViewContainerRef} from '@angular/core';

type MyNgForContext<T> = {
    $implicit: T;
    appMyNgForOf: T[];
    index: number;
};

@Directive({
    selector: '[appMyNgFor]',
    standalone: true,
})
export class MyNgForDirective<T> {
    private readonly viewContainer = inject(ViewContainerRef);
    private readonly template = inject<TemplateRef<MyNgForContext<T>>>(TemplateRef);

    readonly appMyNgForOf = input.required<T | undefined | null>();

    constructor() {
        effect(() => {
            this.viewContainer.clear();

            const appMyNgForOf = this.appMyNgForOf();

            if (appMyNgForOf instanceof Array) {
                appMyNgForOf.forEach((item, index) => {
                    this.viewContainer.createEmbeddedView(this.template, {
                        $implicit: item,
                        appMyNgForOf,
                        index,
                    });
                });
            }
        });
    }
}
