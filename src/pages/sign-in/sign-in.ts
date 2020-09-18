import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationProvider } from '../../providers/auth.provider';
import { SiteSettingsProvider } from 'src/providers/site-settings.provider';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.html',
  styleUrls: ['./sign-in.scss']
})
export class SignInPage implements OnInit {
  email: string;
  pwd: string;
  message: string;

  constructor(
    private router: Router,
    private authProvider: AuthenticationProvider,
    private siteSettingsProvider: SiteSettingsProvider
  ) {
  }

  ngOnInit() {
  }

  signIn() {
    this.message = '';
    this.authProvider.signIn(this.email, this.pwd).then(() => {
      this.router.navigate(['home']);
    }).catch(err => {
      console.log(err);
      this.message = err.message;
    });
  }

  navigate(path, id?) {
    if(id) {
      this.router.navigate([path, id]);
    }
    else {
      this.router.navigate([path]);
    }
  }

}
