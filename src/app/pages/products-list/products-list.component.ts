import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {CardComponent} from './card/card.component';
import {productsMock} from '../../shared/products/products.mock';
import {Product} from '../../shared/products/product.interface';

@Component({
    selector: 'app-products-list',
    standalone: true,
    imports: [CardComponent, MatProgressSpinnerModule],
    templateUrl: './products-list.component.html',
    styleUrl: './products-list.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent {
    readonly products = signal<Product[] | null>(null);

    constructor() {
        setTimeout(() => {
            this.products.set(productsMock);
        }, 2000);
        setTimeout(() => {
            this.products.set(
                productsMock.map(product => ({...product, images: [...product.images.reverse()]})),
            );
        }, 6000);
    }
}
