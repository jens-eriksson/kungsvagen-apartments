import { AuthProvider } from './../../providers/auth';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.html',
  styleUrls: ['./sign-in.css']
})
export class SignInPage implements OnInit {
  email: string = "";
  pwd: string = "";
  message: string;
  redirectTo: string = "/home";

  constructor(
    private authProvider: AuthProvider,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  async signIn() {
    this.message = await this.authProvider.signIn({
      email: this.email,
      pwd: this.pwd
    }); 
    if (this.authProvider.isAuthenticated()) {
      this.router.navigate([this.redirectTo]);
    }
  }
}
