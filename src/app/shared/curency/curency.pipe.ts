import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'curency',
    standalone: true,
    pure: true,
})
export class CurencyPipe implements PipeTransform {
    transform(price: number, code: string = '$'): string {
        return `${price} ${code}`;
    }
}
