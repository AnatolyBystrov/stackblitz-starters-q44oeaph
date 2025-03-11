import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

interface Show {
  id: number;
  name: string;
  image?: { medium: string; original: string };
}

@Component({
  selector: 'app-show-list',
  template: `
    <h2>All TV Shows</h2>
    <div class="shows-container">
      <div class="show-card" *ngFor="let show of shows$ | async">
        <img *ngIf="show.image" [src]="show.image.medium" [alt]="show.name" />
        <h3>{{ show.name }}</h3>
      </div>
    </div>
  `,
  styles: [
    `.shows-container { display: flex; flex-wrap: wrap; gap: 15px; }`,
    `.show-card { background: white; padding: 10px; border-radius: 8px; }`
  ]
})
export class ShowListComponent implements OnInit {
  shows$!: Observable<Show[]>;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.shows$ = this.http.get<Show[]>('https://api.tvmaze.com/shows').pipe(
      map(response => response || []),
      catchError(() => [])
    );
  }
}
