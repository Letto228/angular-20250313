import {Component, Input, output} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {Product} from '../../../shared/products/product.interface';

/** Компонент карточки товара */
@Component({
    selector: 'app-product-card',
    standalone: true,
    imports: [MatCardModule, MatButtonModule, MatIconModule],
    templateUrl: './card.component.html',
    styleUrl: './card.component.css',
})
export class CardComponent {
    @Input() product?: Product;

    readonly buyProduct = output<Event>();

    get productImage() {
        return this.product?.images.at(0);
    }

    isActiveStar(index: number): boolean {
        return !!this.product && this.product.rating >= index;
    }

    buy(event: Event) {
        event.stopPropagation();
        this.buyProduct.emit(event);
    }
}
