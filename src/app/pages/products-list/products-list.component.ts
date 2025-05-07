import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CardComponent} from './card/card.component';
import {productsMock} from '../../shared/products/products.mock';

/** Компонент списка товаров */
@Component({
    selector: 'app-products-list',
    standalone: true,
    imports: [CardComponent],
    templateUrl: './products-list.component.html',
    styleUrl: './products-list.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent {
    get ProductList() {
        return productsMock;
    }

    get firstProduct() {
        return productsMock[0];
    }
}
