import { Component } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-top-movies',
  templateUrl: './top-movies.component.html',
  styleUrl: './top-movies.component.css',
})
export class TopMoviesComponent {
  movies: any[] = [];
  constructor(private movieService: MovieService) {
    this.movies = movieService.classic;
  }
}
