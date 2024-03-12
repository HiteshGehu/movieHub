import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css',
})
export class MovieDetailsComponent {
  movies: any = {};
  index: number;
  constructor(
    private router: ActivatedRoute,
    private movieService: MovieService
  ) {}
  ngOnInit(): void {
    this.router.params.subscribe((params: Params) => {
      this.index = +params['id'];
    });
    this.movies = this.movieService.movies[this.index];
    console.log(this.movies);
  }
}
