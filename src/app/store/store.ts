import {productsReducer} from './products/products.reducer';
import {ProductsState, PRODUCTS_FEATURE} from './products/products.state';

export type State = {
    [PRODUCTS_FEATURE]: ProductsState;
};

export const reducer = {
    [PRODUCTS_FEATURE]: productsReducer,
};
