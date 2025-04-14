import {map, Observable, timer} from 'rxjs';
import {Injectable} from '@angular/core';
import {productsMock} from './products.mock';
import {Product} from './product.interface';

@Injectable({
    providedIn: 'root',
})
export class ProductsApiService {
    getProducts$(): Observable<Product[]> {
        return timer(1000).pipe(map(() => productsMock));
    }
}
