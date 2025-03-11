import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export interface IShow {
  id: number;
  name: string;
  image?: { medium: string; original: string };
}

@Injectable({ providedIn: 'root' })
export class BackendService {
  private apiUrl = 'https://api.tvmaze.com';

  constructor(private http: HttpClient) {}

  searchShows(query: string): Observable<IShow[]> {
    return this.http.get<{ show: IShow }[]>(`${this.apiUrl}/search/shows?q=${query}`).pipe(
      map(results => results.map(item => item.show)),
      catchError(err => {
        console.error('Search error:', err);
        return throwError(() => new Error('Failed to search shows'));
      })
    );
  }

  getAllShows(): Observable<IShow[]> {
    return this.http.get<IShow[]>(`${this.apiUrl}/shows`).pipe(
      catchError(err => {
        console.error('Load shows error:', err);
        return throwError(() => new Error('Failed to load all shows'));
      })
    );
  }
}
