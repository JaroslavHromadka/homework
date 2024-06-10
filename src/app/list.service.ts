import { IUser } from './user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  sortType = 0;

  private dataCache: IUser[] = [];
  constructor(private http: HttpClient) { }

  load(): Observable<IUser[]> {
    if (this.dataCache.length > 0) {
      return of(this.dataCache);
    }
    else {
      return this.http.get<IUser[]>('https://jsonplaceholder.typicode.com/todos').pipe(tap(data => this.dataCache = data));
    }
  }

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

  delete(id: number):IUser[] {
    return this.dataCache.filter(o => o.id !== id);
  }
}
