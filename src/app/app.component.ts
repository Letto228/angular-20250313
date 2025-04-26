import {ChangeDetectionStrategy, Component} from '@angular/core';
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
}
