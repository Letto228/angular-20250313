import {Product} from '../../shared/products/product.interface';

export const PRODUCTS_FEATURE = 'products';

export type ProductsState = {
    data: Product[] | null;
    lectureCount: number;
    currentProductId: string | null;
};

export const productsInitialState: ProductsState = {
    data: null,
    lectureCount: 0,
    currentProductId: null,
};
