import {
    ChangeDetectionStrategy,
    Component,
    effect,
    input,
    output,
    TemplateRef,
    viewChild,
    ViewContainerRef,
} from '@angular/core';

@Component({
    selector: 'app-popup-host',
    standalone: true,
    imports: [],
    templateUrl: './popup-host.component.html',
    styleUrl: './popup-host.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopupHostComponent {
    readonly template = input<TemplateRef<unknown> | null>(null);
    readonly viewportContainer = viewChild.required('viewport', {
        read: ViewContainerRef,
    });

    readonly popupHostClosed = output();

    constructor() {
        this.updateContent();
    }

    closePopupHost() {
        this.popupHostClosed.emit();
    }

    private updateContent() {
        effect(() => {
            this.viewportContainer().clear();
            const shownTemplate = this.template();

            if (shownTemplate) {
                this.viewportContainer().createEmbeddedView(shownTemplate);
            }
        });
    }
}
