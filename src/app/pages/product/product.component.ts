import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTabsModule} from '@angular/material/tabs';
import {ActivatedRoute, Router, RouterLink, RouterOutlet} from '@angular/router';
import {filter, map} from 'rxjs';
import {CarouselDirective} from '../../shared/carousel/carousel.directive';
import {ProductsStoreService} from '../../shared/products/products-store.service';

@Component({
    selector: 'app-product',
    standalone: true,
    imports: [
        CarouselDirective,
        MatButtonModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatTabsModule,
        RouterOutlet,
        RouterLink,
    ],
    templateUrl: './product.component.html',
    styleUrl: './product.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {
    private readonly productsStoreService = inject(ProductsStoreService);
    private readonly router = inject(Router);
    private readonly activatedRoute = inject(ActivatedRoute);

    constructor() {
        this.activatedRoute.paramMap
            .pipe(
                map(paramMap => paramMap.get('id')),
                filter(Boolean),
            )
            .subscribe(id => {
                this.productsStoreService.loadProduct(id);
            });

        // const id = this.activatedRoute.snapshot.paramMap.get('id');

        // if (id) {
        //     this.productsStoreService.loadProduct(id);
        // }

        // setTimeout(() => {
        //     this.router.navigate(['../', '96-planset-dexp-ursus-s290-32-gb-3g-cernyj'], {
        //         relativeTo: this.activatedRoute,
        //     });
        // }, 4000);

        // this.productsStoreService.loadProduct('96-planset-dexp-ursus-s290-32-gb-3g-cernyj');
    }

    getProduct(): ReturnType<ProductsStoreService['getProduct']> {
        return this.productsStoreService.getProduct();
    }

    navigateTo(tab: string) {
        // this.router.navigate([`/product/id/${tab}`]);
        // this.router.navigateByUrl(`/product/id/${tab}`);

        this.router.navigate([`./${tab}`], {
            relativeTo: this.activatedRoute,
        });

        // const urlTree = this.router.createUrlTree([`./${tab}`], {
        //     relativeTo: this.activatedRoute,
        // });

        // console.log(urlTree.toString());

        // // this.router.navigateByUrl(urlTree);
        // this.router.navigateByUrl(urlTree.toString());
    }
}
