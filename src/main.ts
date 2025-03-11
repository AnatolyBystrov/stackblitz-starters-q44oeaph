import { bootstrapApplication } from '@angular/platform-browser';
import { ShowListComponent } from './app/show-list.component';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(ShowListComponent, {
  providers: [provideHttpClient()]
}).catch(err => console.error(err));
