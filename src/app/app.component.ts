import {ChangeDetectionStrategy, Component, InjectionToken, Injector} from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from './core-components/header/header.component';
import {applicationConfigMock} from './shared/application-config/application-config.mock';
import {SidenavComponent} from './core-components/sidenav/sidenav.component';
import {InsertShadowDirective} from './shared/insert-shadow/insert-shadow.directive';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        HeaderComponent,
        SidenavComponent,
        MatListModule,
        InsertShadowDirective,
        RouterOutlet,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    readonly appConfig = applicationConfigMock;

    constructor() {
        const token = new InjectionToken('');
        const copyToken = new InjectionToken('');
        const injector = Injector.create({
            providers: [
                {
                    provide: token,
                    useValue: 'Egor',
                    // multi: true,
                },
                {
                    provide: copyToken,
                    useExisting: token,
                },
                // {
                //     provide: token,
                //     useValue: 'Alex',
                //     multi: true,
                // },
                // {
                //     provide: token,
                //     useValue: 'Evgen',
                //     multi: true,
                // },
            ],
        });

        // eslint-disable-next-line no-console
        console.log(injector.get(token));
    }
}
