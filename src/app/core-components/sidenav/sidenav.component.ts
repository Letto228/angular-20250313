import {ChangeDetectionStrategy, Component, viewChild} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDrawer, MatSidenavModule} from '@angular/material/sidenav';

@Component({
    selector: 'app-sidenav',
    standalone: true,
    imports: [MatButtonModule, MatSidenavModule],
    templateUrl: './sidenav.component.html',
    styleUrl: './sidenav.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent {
    // readonly naviagationTemplate = input.required<TemplateRef<unknown>>();
    // readonly isDrawerOpened = model(false);

    // readonly naviagationTemplate =
    //     contentChild.required<TemplateRef<unknown>>('naviagationTemplate');

    // @ViewChild('')
    // matDrawer: MatDrawer | undefined;

    // readonly matDrawer = viewChild.required<MatDrawer>('drawer');
    readonly matDrawer = viewChild.required(MatDrawer);
    // readonly matDrawerElement = viewChild.required(MatDrawer, {read: ElementRef});

    // readonly drawerViewport = viewChild.required('drawerViewport', {read: ViewContainerRef});

    // constructor() {
    //     // setTimeout(() => {
    //     //     this.drawerViewport().createEmbeddedView(this.naviagationTemplate());
    //     // }, 1000);

    //     // effect(() => {
    //     //     this.drawerViewport().createEmbeddedView(this.naviagationTemplate());
    //     // });
    // }

    toggleDrawerOpened() {
        // ToDo
        this.matDrawer().toggle();
        // console.log(this.matDrawerElement().nativeElement);
    }
}
