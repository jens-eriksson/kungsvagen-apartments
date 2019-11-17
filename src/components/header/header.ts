import { Component, OnInit } from '@angular/core';
import { AuthProvider } from './../../providers/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent implements OnInit {
  menuHidden: Boolean = true;

  constructor(
    public authProvider: AuthProvider,
    private router: Router
  ) { 
  }

  ngOnInit() {
  }

  signOut() {
    this.authProvider.signOut().then(() => location.reload());
  }

  navigate(path, id?) {
    if(id) {
      this.router.navigate([path, id]);
    }
    else {
      this.router.navigate([path]);
    }
    
    this.menuHidden = true;
  }

  toggleMenu() {
    this.menuHidden = !this.menuHidden;
  }

}