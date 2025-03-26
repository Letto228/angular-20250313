import {Component} from '@angular/core';
import {productsMock} from '../../shared/products/products.mock';
import {ProductCardComponent} from './card/product-card.component';

@Component({
    selector: 'app-products-list',
    standalone: true,
    imports: [ProductCardComponent],
    templateUrl: './products-list.component.html',
    styleUrl: './products-list.component.css',
})
export class ProductsListComponent {
    get products() {
        return productsMock;
    }
}
