import { Component } from '@angular/core';
import { Routes, RouterModule} from "@angular/router";

import { MovieListComponent } from './movie.list.component';
import { MovieDetailComponent } from './movie.detail.component';

@Component({
  selector: 'my-app',
  template : `
	<div class="container">
		<router-outlet></router-outlet>
	</div>
  `
})
export class AppComponent  { name = 'Angular'; }
