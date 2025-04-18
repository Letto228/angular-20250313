import {Pipe, PipeTransform} from '@angular/core';
// import {Product} from '../products/product.interface';

@Pipe({
    name: 'curency',
    standalone: true,
    pure: true,
})
export class CurencyPipe implements PipeTransform {
    transform(price: number, code: string = '$'): string {
        // eslint-disable-next-line no-console
        console.log('getPrice Pipe');

        return `${price} ${code}`;
    }
}
