import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(movies: any, searchText: any): any {
    if(searchText == null) return movies;

    return movies.filter(function(movie){
      return movie.movie_title.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    })
  }
}
