import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name:'filter'
})
export class FilterPipe implements PipeTransform{
	transform(items: any[], name: string,genre: string): any[] {
		if(!items) return [];
		if(!name && !genre) return items;
		
		if(!genre)
		return items.filter( it => {
			  return it.name.toLowerCase().includes(name);
			});
		if(!name)
		return items.filter( it => {
			  return it.genres.includes(genre);
			});
		
		return items.filter( it => {
			  return it.name.toLowerCase().includes(name) && it.genres.includes(genre);
			});
   }
}