import {ChangeDetectionStrategy, Component, model} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
    selector: 'app-sidenav',
    standalone: true,
    imports: [MatButtonModule, MatSidenavModule],
    templateUrl: './sidenav.component.html',
    styleUrl: './sidenav.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent {
    // readonly isDrawerOpened = signal(false);

    // readonly isDrawerOpened = input(false);
    // readonly isDrawerOpenedChange = output<boolean>();

    readonly isDrawerOpened = model(false);

    toggleDrawerOpened() {
        // this.isDrawerOpened.update(isOpened => !isOpened);
        // this.isDrawerOpenedChange.emit(!this.isDrawerOpened());
        this.isDrawerOpened.set(!this.isDrawerOpened());
    }
}
