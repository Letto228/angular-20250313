import {ChangeDetectionStrategy, Component, computed, signal} from '@angular/core';
import {HeaderComponent} from './core-components/header/header.component';
import {ProductsListComponent} from './pages/products-list/products-list.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [HeaderComponent, ProductsListComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    // private readonly changeDetectorRef = inject(ChangeDetectorRef);

    // count = 0;
    readonly count = signal(0, {equal: (a, b) => a === b});
    readonly doubleCount = computed(() => this.count() * 2);
    // readonly count = signal(0, {equal: (a, b) => true});

    // eslint-disable-next-line max-statements
    constructor() {
        setInterval(() => {
            // this.count += 1;
            // this.changeDetectorRef.markForCheck();

            this.count.update(value => value + 1);
        }, 1000);

        // const count = signal(0, {equal: (a, b) => a === b});

        // count.set(3);
        // count.update(value => value + 1);

        // console.log(count());

        // -------------------------------------------------------

        // this.count.update(value => value + 1);
        // this.count.update(value => value + 1);
        // this.count.update(value => value + 1);

        // this.doubleCount(); // calcualted
        // this.doubleCount(); // no calcualted
        // this.doubleCount(); // no calcualted
        // this.doubleCount(); // no calcualted
        // this.doubleCount(); // no calcualted
        // this.doubleCount(); // no calcualted
        // this.doubleCount(); // no calcualted
        // this.doubleCount(); // no calcualted
        // this.doubleCount(); // no calcualted
        // this.doubleCount(); // no calcualted
        // this.doubleCount(); // no calcualted
        // this.doubleCount(); // no calcualted
        // this.doubleCount(); // no calcualted

        // this.count.update(value => value + 1);

        // this.doubleCount(); // calcualted
        // this.doubleCount(); // no calcualted
        // this.doubleCount(); // no calcualted
        // this.doubleCount(); // no calcualted
        // this.doubleCount(); // no calcualted
        // this.doubleCount(); // no calcualted
        // this.doubleCount(); // no calcualted

        // --------------------------------------------

        // const signalFirst = signal(0);
        // const signalSecond = signal(signalFirst);

        // signalFirst.update(value => value + 1);
        // signalSecond()

        // --------------------------------------------

        const showCount = signal(false);
        const count = signal(0);
        const conditionalCount = computed(() => {
            console.warn('Computed calculated');

            return showCount() ? `The count: ${count()}` : `Nothing`;
        });

        // eslint-disable-next-line no-console
        console.log(conditionalCount());
        // eslint-disable-next-line no-console
        console.log(conditionalCount());
        // eslint-disable-next-line no-console
        console.log(conditionalCount());

        // eslint-disable-next-line no-console
        console.log('Update count');
        count.update(count => count + 1);

        // eslint-disable-next-line no-console
        console.log(conditionalCount());

        // eslint-disable-next-line no-console
        console.log('Update count');
        count.update(count => count + 1);

        // eslint-disable-next-line no-console
        console.log(conditionalCount());

        // eslint-disable-next-line no-console
        console.log('Update count');
        count.update(count => count + 1);

        // eslint-disable-next-line no-console
        console.log(conditionalCount());

        // eslint-disable-next-line no-console
        console.log('Show count: true');
        showCount.set(true);

        // eslint-disable-next-line no-console
        console.log(conditionalCount());
        // eslint-disable-next-line no-console
        console.log(conditionalCount());
        // eslint-disable-next-line no-console
        console.log(conditionalCount());

        // eslint-disable-next-line no-console
        console.log('Update count');
        count.update(count => count + 1);

        // eslint-disable-next-line no-console
        console.log(conditionalCount());

        // eslint-disable-next-line no-console
        console.log('Update count');
        count.update(count => count + 1);

        // eslint-disable-next-line no-console
        console.log(conditionalCount());

        // eslint-disable-next-line no-console
        console.log('Update count');
        count.update(count => count + 1);

        // eslint-disable-next-line no-console
        console.log(conditionalCount());
    }

    onLog(event: Event) {
        // eslint-disable-next-line no-console
        console.log('Clicked', event);
    }
}
