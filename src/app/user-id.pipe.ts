import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userId'
})
export class UserIdPipe implements PipeTransform {

  //konverze podle userId
  transform(id: number): string {
    switch (id) {
      case 1: return 'admin'; break;
      case 2: return 'tester'; break;
      default: return 'neznámý uživatel'
    }
  }

}
