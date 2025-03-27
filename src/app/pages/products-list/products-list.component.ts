import {Component} from '@angular/core';
import { CardComponent } from './card/card.component';
import { productsMock } from '../../shared/products/products.mock';
import { Product } from '../../shared/products/product.interface';

@Component({
    selector: 'app-products-list',
    standalone: true,
    imports: [CardComponent],
    templateUrl: './products-list.component.html',
    styleUrl: './products-list.component.css',
})
export class ProductsListComponent  {
    products: Product[] = productsMock
}
