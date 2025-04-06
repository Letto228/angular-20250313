import {Component} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {productsMock} from '../../../shared/products/products.mock';
import {Product} from '../../../shared/products/product.interface';
import {ProductImage} from '../../../shared/products/product-image.interface';

@Component({
    selector: 'app-card',
    standalone: true,
    imports: [MatCardModule],
    templateUrl: './card.component.html',
    styleUrl: './card.component.css',
})
export class CardComponent {
    product: Product = productsMock[0];
    productImage: ProductImage = this.product.images[0];
}
