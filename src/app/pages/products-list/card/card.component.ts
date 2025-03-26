import {Component, Input} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {Product} from '../../../shared/products/product.interface';

@Component({
    selector: 'app-card',
    standalone: true,
    imports: [MatCardModule],
    templateUrl: './card.component.html',
    styleUrl: './card.component.css',
})
export class CardComponent {
    @Input() product!: Product;
}
