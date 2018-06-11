import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { movies } from './movie.mock-data';
import { Movie } from './movie.model';
import { FilterPipe } from './filter.pipe';
import { genreType } from "./movie.model";

@Component({
	selector: 'movie-list',
	templateUrl: 'movie-list-component.html',
	styleUrls: ['movie-list-component.css']
})
export class MovieListComponent {
	movieList:Movie[];
	genres:any[];
	searchGenre:string;
	searchName:string;
	
	constructor(private route: ActivatedRoute) {	
		this.movieList = movies.sort((a,b)=>{
			let nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase();
			if (nameA < nameB)
				return -1; 
			if (nameA > nameB)
				return 1;
			return 0;
		})
		this.genres = Object.keys(genreType);
		
		this.route.params.subscribe( params => {
			if(!params.genre)
				this.searchGenre = "";
			else
				this.searchGenre = params.genre;
			}
		);
	};
}