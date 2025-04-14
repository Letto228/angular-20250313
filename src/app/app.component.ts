import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {HeaderComponent} from './core-components/header/header.component';
import {ProductsListComponent} from './pages/products-list/products-list.component';
import {applicationConfigMock} from './shared/application-config/application-config.mock';
import {SidenavComponent} from './core-components/sidenav/sidenav.component';
import {PopupHostComponent} from './core-components/popup-host/popup-host.component';
import {InsertShadowDirective} from './shared/insert-shadow/insert-shadow.directive';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        HeaderComponent,
        ProductsListComponent,
        SidenavComponent,
        MatListModule,
        PopupHostComponent,
        InsertShadowDirective,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    readonly appConfig = applicationConfigMock;
}
