import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {CardComponent} from './card/card.component';
import {ProductsStoreService} from '../../shared/products/products-store.service';

@Component({
    selector: 'app-products-list',
    standalone: true,
    imports: [CardComponent, MatProgressSpinnerModule],
    templateUrl: './products-list.component.html',
    styleUrl: './products-list.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent {
    // private readonly productsStoreService = new ProductsStoreService();
    private readonly productsStoreService = inject(ProductsStoreService);

    // readonly products = signal<Product[] | null>(null);
    // readonly products = this.productsStoreService.products;

    constructor() {
        this.productsStoreService.loadProducts();
        // setTimeout(() => {
        //     this.products.set(productsMock);
        // }, 2000);
        // setTimeout(() => {
        //     this.products.set(
        //         productsMock.map(product => ({...product, images: [...product.images.reverse()]})),
        //     );
        // }, 6000);
    }

    getProducts(): ReturnType<ProductsStoreService['getProducts']> {
        return this.productsStoreService.getProducts();
    }
}
