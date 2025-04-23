import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {RouterLink} from '@angular/router';
import {CardComponent} from './card/card.component';
import {ProductsStoreService} from '../../shared/products/products-store.service';
import {ScrollWithLoadingDirective} from '../../shared/scroll-with-loading/scroll-with-loading.directive';

@Component({
    selector: 'app-products-list',
    standalone: true,
    imports: [CardComponent, MatProgressSpinnerModule, ScrollWithLoadingDirective, RouterLink],
    templateUrl: './products-list.component.html',
    styleUrl: './products-list.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent {
    private readonly productsStoreService = inject(ProductsStoreService);

    constructor() {
        this.productsStoreService.loadProducts();
    }

    loadNextProducts(): void {
        // eslint-disable-next-line no-console
        console.log('Load next products');
    }

    getProducts(): ReturnType<ProductsStoreService['getProducts']> {
        return this.productsStoreService.getProducts();
    }
}
