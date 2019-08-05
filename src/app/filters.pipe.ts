import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filters'
})
export class FiltersPipe implements PipeTransform {

  transform(items: any[], field: string, value: string): any[] {
    if (!items) {
        return [];
    }
    if (!field || !value) {
        return items;
    }

    if (field === 'AssignedToCurrentUser') {
      return items.filter(singleItem => singleItem[field].includes('true'));
    } else {
      return items.filter(singleItem => singleItem[field].toLowerCase().includes(value.toLowerCase()));
    }
  }
}
