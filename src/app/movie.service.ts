import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Movie } from './movie';
import { Observable } from 'rxjs';

export type ApiResponse = {
  Response: string;
  Search: Movie[];
  totalResults: string;
};

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  // apiURL: string =
  //   'https://moviesdatabase.p.rapidapi.com/titles/series/%7BseriesId%7D';

  // constructor(private httpClient: HttpClient) {}
  // searchMovie(name: string) {
  //   return this.httpClient.get<any>(`${this.apiURL}&s=${name}`);
  // }
  constructor() {
    this.demoRequest().subscribe((movie: any) => {
      this.movies = movie.movies;
    });
  }
  classic: any[] = [
    {
      title: 'Spiderman',
      description: 'Description for Spiderman',
      poster:
        'data:image/jpeg;base64,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',
    },

    {
      title: 'Batman',
      description: 'Kala Chamkadar',
      poster:
        'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@.300_.jpg',
    },
    {
      title: 'The Godfather',
      description: 'Desc for fodfather',
      poster:
        'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@.300_.jpg',
    },
    {
      title: 'Batman',
      description: 'Kala Chamkadar',
      poster:
        'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@.300_.jpg',
    },
    {
      title: 'The Godfather',
      description: 'Desc for fodfather',
      poster:
        'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@.300_.jpg',
    },
    {
      title: 'Batman',
      description: 'Kala Chamkadar',
      poster:
        'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@.300_.jpg',
    },
    {
      title: 'The Godfather',
      description: 'Desc for fodfather',
      poster:
        'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@.300_.jpg',
    },
    {
      title: 'Batman',
      description: 'Kala Chamkadar',
      poster:
        'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@.300_.jpg',
    },
    {
      title: 'The Godfather',
      description: 'Desc for fodfather',
      poster:
        'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@.300_.jpg',
    },
    {
      title: 'The Godfather',
      description: 'Desc for fodfather',
      poster:
        'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@.300_.jpg',
    },
  ];
  movies: any[];
  http: HttpClient = inject(HttpClient);
  demoRequest(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-rapidAPI-Key': 'fcd93fc9bdmsh8dca46667993cf6p1c8c34jsna62e27604406',
      'X-RapidAPI-Host': 'moviesverse1.p.rapidapi.com',
    });

    return this.http.get<any>(
      'https://moviesverse1.p.rapidapi.com/top-250-movies',
      { headers: headers }
    );
  }
}
