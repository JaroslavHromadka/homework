import { IUser } from './user';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  // zpusob razeni, 0 - podle id, 1 - podle title sestupne, 2 - podle title vzestupne
  sortType = 0;

  //ulozeni nactenych zaznmu z api
  private dataCache: IUser[] = [];

  constructor(private http: HttpClient) { }

  //nacteni zaznamu z api
  load(): Observable<IUser[]> {
    if (this.dataCache.length > 0) {
      return of(this.dataCache);
    }
    else {
      return this.http.get<IUser[]>('https://jsonplaceholder.typicode.com/todos').pipe(tap(data => this.dataCache = data)).pipe(
        catchError(this.handleError));
    }
  }

  private handleError(error: HttpErrorResponse) {
    console.log('Error', error);
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => errorMessage);
  }

  //ziskani zaznamu podle id, v pripade 0 se jedna o novy zaznam
  get(id: number): Observable<IUser> {
    let user: IUser = {id: 0, userId: 3, title: '', completed: false};
    
    if (this.dataCache !== null && id !== 0) {
        const filter = this.dataCache.filter(o => o.id === id);
        if (filter.length > 0) {
          user = filter[0];
        }
    }
    return of(user);
  }

  //ulozeni noveho zaznamu nebo oprava existujiciho
  edit(user: IUser) {
    if (user.id === 0) {
      const id = (Math.max(...this.dataCache.map(o => o.id)) ?? 0) + 1;
      user.id = id;
      this.dataCache = [user, ...this.dataCache];
    }
    else {
      const filter = this.dataCache.filter(o => o.id === user.id);
      if (filter.length > 0) {
        filter[0] = user;
      }
    }
  }

  //smazani zaznamu
  delete(id: number):IUser[] {
    this.dataCache = this.dataCache.filter(o => o.id !== id);
    return this.dataCache;
  }
}
