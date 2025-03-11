import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ShowSearchComponent } from './show-search.component';
import { AllShowsComponent } from './all-shows.component';

@NgModule({
  declarations: [ShowSearchComponent, AllShowsComponent],
  imports: [BrowserModule],
  bootstrap: [ShowSearchComponent] // главный компонент для запуска
})
export class AppModule {}
