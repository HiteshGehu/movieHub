import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  credentials: any = {};
  constructor(private route: Router, private authService: AuthService) {}
  onSubmit(form: NgForm) {
    this.authService.setUser(form.value.name);
    this.route.navigate(['/home']);
  }
  create() {
    this.route.navigate(['/sign-up']);
  }
}
