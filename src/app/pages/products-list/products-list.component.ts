import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {NgFor, NgIf} from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {CardComponent} from './card/card.component';
import {productsMock} from '../../shared/products/products.mock';
import {MyNgForDirective} from '../../shared/my-ng-for/my-ng-for.directive';
import {Product} from '../../shared/products/product.interface';

@Component({
    selector: 'app-products-list',
    standalone: true,
    // imports: [CardComponent, MyNgForDirective, CommonModule],
    imports: [CardComponent, MyNgForDirective, NgFor, NgIf, MatProgressSpinnerModule],
    templateUrl: './products-list.component.html',
    styleUrl: './products-list.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent {
    // private readonly viewportContainer = viewChild.required('cardTemplate', {
    //     read: ViewContainerRef,
    // });

    // private readonly cardTemplate = viewChild.required('cardTemplate', {read: TemplateRef});

    readonly products = signal<Product[] | null>(null);

    constructor() {
        // if ([]) {

        // } else {

        // }

        setTimeout(() => {
            this.products.set(productsMock);
        }, 2000);
        setTimeout(() => {
            this.products.set([...productsMock]);
        }, 4000);
        // setTimeout(() => {
        //     // this.products.set(productsMock.map(product => ({...product, feedbacksCount: 999})));
        //     // productsMock.push(...productsMock);
        //     this.products.set([]);
        // }, 6000);
        // this.generateCardsView();
    }

    // private generateCardsView() {
    // effect(() => {
    //     // this.viewportContainer().createEmbeddedView(this.cardTemplate());
    //     this.viewportContainer().clear();

    //     this.products.forEach(product => {
    //         this.viewportContainer().createEmbeddedView(this.cardTemplate(), {
    //             product,
    //             $implicit: product,
    //         });
    //     });
    // });
    // }

    trackBy(index: number, item: Product): Product['_id'] {
        return item._id;
    }
}
