import {createAction} from '@ngrx/store';
import {Product} from '../../shared/products/product.interface';

export enum ProductsActionTypes {
    AddProducts = '[Products] Add products',
}

export const addProducts = createAction(
    ProductsActionTypes.AddProducts, // type
    (products: Product[]) => ({products}), // creator
);

// addProducts ~ (...creatorArguments) => ({type: ProductsActionTypes.AddProducts, ...creator(creatorArguments)})

// addProducts([...]) = {type: ProductsActionTypes.AddProducts, products: [...]}
