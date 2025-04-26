// state => state.products.data

import {createFeatureSelector, createSelector} from '@ngrx/store';
import {PRODUCTS_FEATURE, ProductsState} from './products.state';
import {Product} from '../../shared/products/product.interface';

export const peoductsFeatureSelector = createFeatureSelector<ProductsState>(PRODUCTS_FEATURE);
// (state: State) => state[PRODUCTS_FEATURE]
// (state: State) => state.products

export const productsSelector = createSelector(
    peoductsFeatureSelector,
    (productsState: ProductsState) => productsState.data, // extractFn
);
// productsSelector === (state: State) => extractFn(peoductsFeatureSelector(state))

export const lectureCountSelector = createSelector(
    peoductsFeatureSelector,
    (productsState: ProductsState) => productsState.lectureCount, // extractFn
);
// lectureCountSelector === (state: State) => extractFn(peoductsFeatureSelector(state))

export const currentProductIdSelector = createSelector(
    peoductsFeatureSelector,
    (productsState: ProductsState) => productsState.currentProductId, // extractFn
);
// currentProductIdSelector === (state: State) => extractFn(peoductsFeatureSelector(state))

export const currentProductSelector = createSelector(
    productsSelector,
    currentProductIdSelector,
    (products: Product[] | null, currentProductId: string | null) =>
        products?.find(({_id}) => _id === currentProductId),
);
// currentProductSelector === (state: State) => extractFn(productsSelector(state), currentProductIdSelector(state))
