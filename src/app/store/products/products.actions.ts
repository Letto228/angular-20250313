import {createAction} from '@ngrx/store';
import {Product} from '../../shared/products/product.interface';

export enum ProductsActionTypes {
    AddProducts = '[Products] Add products',
}

export const addProducts = createAction(ProductsActionTypes.AddProducts, (products: Product[]) => ({
    products,
}));
