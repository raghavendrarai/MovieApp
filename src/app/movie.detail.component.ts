import { Component,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { movies } from './movie.mock-data';
import { Movie } from './movie.model';

@Component({
  selector: 'movie-detail',
  templateUrl: 'movie-detail-component.html',
  styleUrls: ['movie-detail-component.css']
})
export class MovieDetailComponent { 
	private sub: any;
	data:Movie;
	
	
	constructor(private route: ActivatedRoute,private location: Location) {
		this.route.params.subscribe( params => {
			this.data = movies.filter(m => m.id == params.id)[0];
			}
		);
	};
	
	goBack(){
		this.location.back();
	}
};