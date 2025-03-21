import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from './core-components/header/header.component';

@Component({
    selector: 'app-root',
    // selector: 'button[appButton]',
    // selector: 'div#root',
    standalone: true,
    imports: [RouterOutlet, HeaderComponent],
    templateUrl: './app.component.html',
    // template: '<h1>Hello</h1>',
    styleUrl: './app.component.css',
    // styleUrls: ['./app.component.css'],
    // styles: ['css styles'],
    // interpolation: ['{{', '}}'],
})
export class AppComponent {
    title = 'angular-20250313';
    window = window;

    readonly url =
        'https://avatars.mds.yandex.net/i?id=02cc0e55192617183d23b58b6346b238_l-4960885-images-thumbs&n=13';
}
