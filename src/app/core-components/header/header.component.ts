import {ChangeDetectionStrategy, Component, input, output} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {ApplicationConfig} from '../../shared/application-config/application-config.interface';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [MatToolbarModule, MatIconModule, MatButtonModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
    // readonly applicationConfig = input<ApplicationConfig | null>(null, {alias: 'config', transform: (inputVa) => });
    // readonly applicationConfig = input<ApplicationConfig | null>(null);
    readonly applicationConfig = input.required<ApplicationConfig>();
    // @Input({required: true}) applicationConfig: ApplicationConfig | undefined;

    readonly menuClick = output<Event>();

    // constructor() {
    //     console.log(this.applicationConfig());
    // }
}
