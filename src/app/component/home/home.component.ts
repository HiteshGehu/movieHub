import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  name: string;
  role: string;
  constructor(private route: Router) {
    this.name = localStorage.getItem('currentUserName');
  }
  logout() {
    this.route.navigate(['']);
  }
  allMovies() {
    this.route.navigate(['/movie-list']);
  }
}
