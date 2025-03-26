import {Component, Input} from '@angular/core';
import {
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardFooter,
    MatCardHeader,
    MatCardImage,
} from '@angular/material/card';
import {NgOptimizedImage} from '@angular/common';
import {MatIcon} from '@angular/material/icon';
import {MatButton} from '@angular/material/button';
import {Product} from '../../../shared/products/product.interface';
import {ProductRatingComponent} from './product-rating/product-rating.component';
import {ProductImage} from '../../../shared/products/product-image.interface';

@Component({
    selector: 'app-product-card',
    standalone: true,
    imports: [
        MatCard,
        MatCardHeader,
        MatCardImage,
        NgOptimizedImage,
        MatCardContent,
        MatCardFooter,
        ProductRatingComponent,
        MatIcon,
        MatCardActions,
        MatButton,
    ],
    templateUrl: './product-card.component.html',
    styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
    @Input() product?: Product;
    get firstImage(): ProductImage | undefined {
        return this.product?.images.at(0);
    }
}
