import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';
import { state, style, transition, animate } from '@angular/animations';

import { trigger } from '@angular/animations';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css',
  animations: [
    trigger('slide', [
      state(
        'in',
        style({
          opacity: 1,
          transform: 'translateX(0)',
        })
      ),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)',
        }),
        animate(300),
      ]),
      transition('* => void', [
        animate(
          300,
          style({
            transform: 'translateX(100px)',
            opacity: 0,
          })
        ),
      ]),
    ]),
  ],
})
export class MovieListComponent implements OnInit {
  filteredStatus = '';
  movies: any[];
  isLoading = true;
  loading: boolean = true;
  constructor(private route: Router, private movieService: MovieService) {}
  ngOnInit(): void {
    this.movieService.demoRequest().subscribe((movie: any) => {
      this.isLoading = false;
      this.movies = movie.movies;
      console.log('movies', this.movies);
    });
  }
  onDetails(i: number) {
    this.route.navigate(['/movie-details', i]);
  }
}
