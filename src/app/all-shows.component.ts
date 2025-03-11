import { Component, OnInit } from '@angular/core';
import { BackendService, IShow } from './backend.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-all-shows',
  templateUrl: './all-shows.component.html',
  styleUrls: ['./all-shows.component.css'],
})
export class AllShowsComponent implements OnInit {
  shows$!: Observable<IShow[]>;

  constructor(private backendService: BackendService) {}

  ngOnInit() {
    this.shows$ = this.backendService.getAllShows();
  }
}
