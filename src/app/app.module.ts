import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule} from "@angular/router";
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { MovieListComponent } from './movie.list.component';
import { MovieDetailComponent } from './movie.detail.component';
import { FilterPipe } from './filter.pipe';

const routes:Routes = [
	{path: 'home', component: MovieListComponent},
	{path: 'home/:genre', component: MovieListComponent},
	{path: 'search/:id', component: MovieDetailComponent},
	{path: '**', component: MovieListComponent}
];

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(routes, {useHash: true}), FormsModule ],
  declarations: [ AppComponent, MovieListComponent, MovieDetailComponent, FilterPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
