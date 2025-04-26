import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {RouterLink} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {tap} from 'rxjs';
import {AsyncPipe} from '@angular/common';
import {CardComponent} from './card/card.component';
import {ScrollWithLoadingDirective} from '../../shared/scroll-with-loading/scroll-with-loading.directive';
import {BrandsService} from '../../shared/brands/brands.service';
import {FilterComponent} from './filter/template-driven/filter.component';
import {State} from '../../store/store';
import {incrementCount, loadProducts} from '../../store/products/products.actions';
import {productsSelector} from '../../store/products/products.sectors';
// import {FilterComponent} from './filter/reactive/filter.component';

@Component({
    selector: 'app-products-list',
    standalone: true,
    imports: [
        CardComponent,
        MatProgressSpinnerModule,
        ScrollWithLoadingDirective,
        RouterLink,
        FilterComponent,
        AsyncPipe,
    ],
    templateUrl: './products-list.component.html',
    styleUrl: './products-list.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent {
    // private readonly productsStoreService = inject(ProductsStoreService);
    private readonly brandsService = inject(BrandsService);
    private readonly store$ = inject<Store<State>>(Store);

    readonly products$ = this.store$.pipe(
        // map(state => state.products.data),
        // distinctUntilChanged(),
        // select(state => state.products.data), // select = map + distinctUntilChanged
        select(productsSelector), // map + distinctUntilChanged
        // eslint-disable-next-line no-console
        tap(console.log),
    );

    constructor() {
        this.store$.dispatch(loadProducts());
        // this.productsStoreService.loadProducts();
        this.brandsService.loadBrands();

        setInterval(() => {
            this.store$.dispatch(incrementCount());
        }, 1000);

        this.store$.subscribe();
    }

    loadNextProducts(): void {
        // eslint-disable-next-line no-console
        console.log('Load next products');
    }

    getBrands(): ReturnType<BrandsService['getBrands']> {
        return this.brandsService.getBrands();
    }

    // getProducts(): ReturnType<ProductsStoreService['getProducts']> {
    //     return this.productsStoreService.getProducts();
    // }
}
