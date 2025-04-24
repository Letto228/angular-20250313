import {Product} from '../../shared/products/product.interface';

export const PRODUCTS_FEATURE = 'products';

export type ProductsState = {
    data: Product[] | null;
};

export const productsInitialState: ProductsState = {
    data: null,
};
