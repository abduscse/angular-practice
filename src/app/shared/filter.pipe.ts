import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
    // pure: false //may cause inefficiency by afecting performance.
})
export class FilterPipe implements PipeTransform {
    transform(value: any, filterValue: string, propName: string) {
        if (value.length === 0 || filterValue === '') {
            return value;
        }
        return value.filter(x => x[propName] === filterValue);
    }
}
