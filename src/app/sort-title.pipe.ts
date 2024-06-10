import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from './user';

@Pipe({
  name: 'sortTitle'
})
export class SortTitlePipe implements PipeTransform {

  //razeni podle typu
  transform(array: IUser[], sortType: number = 0): any[] {
    if (!Array.isArray(array)) {
      return array;
    }

    array.sort((a: IUser, b: IUser) => {
      if (sortType === 0) {
        return a.id - b.id
      }
      else {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
          return sortType === 1 ? -1 : 1;
        }
        else if (a.title.toLowerCase() > b.title.toLowerCase()) {
          return sortType === 1 ? 1 : -1;
        }
        else {
          return 0;
        }
      }
    });

    return array;
  }

}
