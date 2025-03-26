import {Component} from '@angular/core';
import {NgFor} from '@angular/common';
import {CardComponent} from './card/card.component';

import {productsMock} from '../../shared/products/products.mock';

@Component({
    selector: 'app-products-list',
    standalone: true,
    imports: [CardComponent, NgFor],
    templateUrl: './products-list.component.html',
    styleUrl: './products-list.component.css',
})
export class ProductsListComponent {
    productsData = productsMock;
}
