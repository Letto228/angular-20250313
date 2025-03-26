import {Component, Input} from '@angular/core';
import {MatIcon} from '@angular/material/icon';

@Component({
    selector: 'app-product-rating',
    standalone: true,
    imports: [MatIcon],
    templateUrl: './product-rating.component.html',
    styleUrl: './product-rating.component.css',
})
export class ProductRatingComponent {
    @Input() rating = 0;
    get fullStars(): number {
        return Math.floor(this.rating);
    }

    get hasHalfStar(): boolean {
        return this.rating % 1 >= 0.5;
    }

    get emptyStars(): number {
        return 5 - this.fullStars - (this.hasHalfStar ? 1 : 0);
    }

    // eslint-disable-next-line @typescript-eslint/member-ordering
    protected readonly Array = Array;
}
