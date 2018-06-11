import { Component } from '@angular/core';
import { Routes, RouterModule} from "@angular/router";

import { MovieListComponent } from './movie.list.component';
import { MovieDetailComponent } from './movie.detail.component';

@Component({
  selector: 'my-app',
  template : `
	<div class="container">
		<div class="row"><a [routerLink]="['']"><div class="col-md-4"><h1>Movies</h1></div></a></div>
		<router-outlet></router-outlet>
		<div class="row footer"><div class="col-md-12">Movie Application<br/>abcd@example.com</div></div>
	</div>
  `,
  styles : [`
	a {
		text-decoration:none;
		color:black;
	}
	.footer{
		font-size:0.7em;
		background-color:black;
		color:white;
	}
  `]
})
export class AppComponent  { name = 'Angular'; }
