import {Component, Input} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {Product} from '../../../shared/products/product.interface';

@Component({
    selector: 'app-card',
    standalone: true,
    imports: [MatCardModule, MatButtonModule, MatIconModule],
    templateUrl: './card.component.html',
    styleUrl: './card.component.css',
})
export class CardComponent {
    @Input({required: true}) product!: Product;
    currency = '000 RUB';

    imageStyles = {
        width: '100%',
        height: '230px',
        objectFit: 'cover' as const,
        objectPosition: 'center',
    };

    get mainImage(): string {
        return this.product.images[0]?.url;
    }

    get roundedRating(): number {
        return Math.round(this.product.rating);
    }

    onProductBuy(event: Event) {
        event.stopPropagation();

        if (!this.product) {
            return;
        }

        // eslint-disable-next-line no-console
        console.log('Buy product');
    }

    isStarActive(starIndex: number): boolean {
        return !!this.product && this.product.rating >= starIndex;
    }
}
