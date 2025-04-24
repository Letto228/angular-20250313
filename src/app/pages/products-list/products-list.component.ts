import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {RouterLink} from '@angular/router';
import {CardComponent} from './card/card.component';
import {ProductsStoreService} from '../../shared/products/products-store.service';
import {ScrollWithLoadingDirective} from '../../shared/scroll-with-loading/scroll-with-loading.directive';
import {BrandsService} from '../../shared/brands/brands.service';
import {FilterComponent} from './filter/template-driven/filter.component';
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
    ],
    templateUrl: './products-list.component.html',
    styleUrl: './products-list.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent {
    private readonly productsStoreService = inject(ProductsStoreService);
    private readonly brandsService = inject(BrandsService);

    constructor() {
        this.productsStoreService.loadProducts();
        this.brandsService.loadBrands();
    }

    loadNextProducts(): void {
        // eslint-disable-next-line no-console
        console.log('Load next products');
    }

    getBrands(): ReturnType<BrandsService['getBrands']> {
        return this.brandsService.getBrands();
    }

    getProducts(): ReturnType<ProductsStoreService['getProducts']> {
        return this.productsStoreService.getProducts();
    }
}
