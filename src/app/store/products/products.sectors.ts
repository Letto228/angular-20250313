import {createFeatureSelector, createSelector} from '@ngrx/store';
import {PRODUCTS_FEATURE, ProductsState} from './products.state';

export const peoductsFeatureSelector = createFeatureSelector<ProductsState>(PRODUCTS_FEATURE);

export const productsSelector = createSelector(
    peoductsFeatureSelector,
    (productsState: ProductsState) => productsState.data,
);
