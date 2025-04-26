import {inject, Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map, switchMap} from 'rxjs';
import {addProducts, loadProducts} from './products.actions';
import {ProductsApiService} from '../../shared/products/products-api.service';

@Injectable()
export class ProductsEffects {
    private readonly actions$ = inject(Actions);
    // private readonly store$ = inject(Store);
    private readonly productsApiService = inject(ProductsApiService);

    // readonly loadProducts$ = createEffect(
    //     () =>
    //         this.actions$.pipe(
    //             // filter(action => loadProducts.type === action.type),
    //             ofType(loadProducts),
    //             switchMap(() =>
    //                 this.productsApiService.getProducts$().pipe(
    //                     tap(products => {
    //                         this.store$.dispatch(addProducts(products));
    //                     }),
    //                 ),
    //             ),
    //         ),
    //     {dispatch: false},
    // );

    readonly loadProducts$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadProducts),
            switchMap(() =>
                this.productsApiService.getProducts$().pipe(map(products => addProducts(products))),
            ),
        ),
    );
}
