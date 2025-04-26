import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {RouterLink} from '@angular/router';
import {Store} from '@ngrx/store';
import {CardComponent} from './card/card.component';
import {ScrollWithLoadingDirective} from '../../shared/scroll-with-loading/scroll-with-loading.directive';
import {BrandsService} from '../../shared/brands/brands.service';
import {FilterComponent} from './filter/template-driven/filter.component';
import {State} from '../../store/store';
import {loadProducts} from '../../store/products/products.actions';
import {productsSelector} from '../../store/products/products.sectors';

@Component({
    selector: 'app-products-list',
    standalone: true,
    imports: [
        CardComponent,
        MatProgressSpinnerModule,
        ScrollWithLoadingDirective,
        RouterLink,
        FilterComponent,
    ],
    templateUrl: './products-list.component.html',
    styleUrl: './products-list.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent {
    private readonly brandsService = inject(BrandsService);
    private readonly store$ = inject<Store<State>>(Store);

    readonly products = this.store$.selectSignal(productsSelector);

    constructor() {
        this.store$.dispatch(loadProducts());
        this.brandsService.loadBrands();
    }

    getBrands(): ReturnType<BrandsService['getBrands']> {
        return this.brandsService.getBrands();
    }
}
