import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'reverse'
})
export class ReversePipe implements PipeTransform {
    transform(value: any): string {
        let strArray = value.split('');
        strArray = strArray.reverse();
        return strArray.join('');
    }

}
