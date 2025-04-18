import {ChangeDetectionStrategy, Component, input, output} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {CurrencyPipe} from '@angular/common';
import {Product} from '../../../shared/products/product.interface';
import {CarouselDirective} from '../../../shared/carousel/carousel.directive';
import {CurencyPipe} from '../../../shared/curency/curency.pipe';

@Component({
    selector: 'app-card',
    standalone: true,
    imports: [
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        CarouselDirective,
        CurrencyPipe,
        CurencyPipe,
    ],
    templateUrl: './card.component.html',
    styleUrl: './card.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
    readonly product = input.required<Product>();

    readonly buy = output<Product['_id']>();

    constructor() {
        // eslint-disable-next-line no-console
        console.log('Card Created');
    }

    onProductBuy(event: Event) {
        event.stopPropagation();

        this.buy.emit(this.product()._id);
    }

    isStarActive(starIndex: number): boolean {
        return this.product().rating >= starIndex;
    }

    // getPrice() {
    //     console.log('getPrice Component');

    //     return `${this.product().price} $`;
    // }
    getPrice() {
        return getPrice(this.product());
    }
}

export function getPrice(product: Product) {
    // eslint-disable-next-line no-console
    console.log('getPrice Function');

    return `${product.price} $`;
}
