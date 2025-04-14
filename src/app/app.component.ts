import {ChangeDetectionStrategy, Component, inject, InjectionToken, Injector} from '@angular/core';
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

    constructor() {
        // Bad
        // const token = 123;
        // const token = 'str';
        // const tokenNameApp = 'name';
        // const tokenNameLib = 'name';

        // Normal
        // const token = {};

        // const tokenNameApp = {};
        // const tokenNameLib = {};

        // Best
        const token = new InjectionToken<string>('Name token');
        const tokenCopy = new InjectionToken<string>('Token copy');
        const universalToken = new InjectionToken<string>('Universal token');
        class Token {
            constructor() {
                // eslint-disable-next-line no-console
                console.log('Token Created');
            }
        }

        const parentInjector = Injector.create({
            providers: [
                {
                    provide: token, // token
                    useValue: 'Egor',
                },
            ],
        });

        const injector = Injector.create({
            parent: parentInjector,
            providers: [
                // {
                //     provide: token, // token
                //     useValue: 'Egor',
                // },
                // {
                //     provide: Token, // token
                //     useClass: Token,
                // },
                Token,
                {
                    provide: tokenCopy, // токен-псевдоним
                    // useClass: Token,
                    useExisting: Token,
                },
                {
                    provide: universalToken,
                    // useFactory: () => 'Egor', // useValue
                    // useFactory: () => new Token(), // useClass
                    useFactory: () => inject(Token), // useExisting
                },
            ],
        });

        // eslint-disable-next-line no-console
        console.log(
            injector.get(token),
            injector.get(Token),
            injector.get(tokenCopy),
            injector.get(Token) === injector.get(tokenCopy),
            injector.get(Token) === injector.get(universalToken),
        );

        // setTimeout(() => {
        //     console.log(injector.get(Token));
        //     console.log(injector.get(Token));
        //     console.log(injector.get(Token));
        //     console.log(injector.get(Token));
        // }, 5000);
    }
}
