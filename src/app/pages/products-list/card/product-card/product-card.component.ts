import {Component, inject, Input} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {Product} from '../../../../shared/products/product.interface';

/** Компонент карточки товара */
@Component({
    selector: 'app-product-card',
    standalone: true,
    imports: [MatCardModule, MatButtonModule, MatIconModule],
    templateUrl: './product-card.component.html',
    styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
    @Input() product?: Product;

    // взято из https://material.angular.io/components/icon/examples -> icons
    readonly likeIcon =
        `<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px">
                      <path d="M0 0h24v24H0z" fill="none"/>
                      <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.` +
        `44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5` +
        `1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"/>
                    </svg>`;

    readonly basketIcon =
        '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#1f1f1f">' +
        '<path d="M0 0h24v24H0z" fill="none"/>' +
        '<path d="M17.21 9l-4.38-6.56c-.19-.28-.51-.42-.83-.42-.32 0-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1h-4.79zM9 9l3-4.4L15 9H9zm3 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>' +
        '</svg>';

    get productImage() {
        return this.product?.images.at(0);
    }

    // взято из https://material.angular.io/components/icon/examples -> icons
    constructor() {
        this.getIconSVG(this.likeIcon, 'like-icon');
        this.getIconSVG(this.basketIcon, 'basket-icon');
    }

    isActiveStar(index: number): boolean {
        return !!this.product && this.product.rating >= index;
    }

    /** Метод добавления иконки */
    getIconSVG(iconCode: string, iconName: string) {
        const iconRegistry = inject(MatIconRegistry);
        const sanitizer = inject(DomSanitizer);

        iconRegistry.addSvgIconLiteral(iconName, sanitizer.bypassSecurityTrustHtml(iconCode));
    }
}
