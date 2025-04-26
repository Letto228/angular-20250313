import {createReducer, on} from '@ngrx/store';
import {productsInitialState} from './products.state';
import {addProducts, incrementCount} from './products.actions';

export const productsReducer = createReducer(
    productsInitialState,
    on(addProducts, (state, action) => ({
        ...state,
        data: action.products,
    })),
    on(incrementCount, state => ({
        ...state,
        lectureCount: state.lectureCount + 1,
    })),
);
