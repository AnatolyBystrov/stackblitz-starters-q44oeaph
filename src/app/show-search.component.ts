import { Component } from '@angular/core';
import { BackendService, IShow } from './backend.service';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-show-search',
  templateUrl: './show-search.component.html',
  styleUrls: ['./show-search.component.css'],
})
export class ShowSearchComponent {
  shows$: Observable<IShow[]>;
  private searchQuery = new Subject<string>();

  constructor(private backendService: BackendService) {
    this.shows$ = this.searchQuery.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(query => this.backendService.searchShows(query))
    );
  }

  search(query: string) {
    this.searchQuery.next(query);
  }
}
