import { Component, OnInit } from '@angular/core';
import { AuthProvider } from './../../providers/auth';
import { Router } from '@angular/router';
import { UnitProvider } from 'src/providers/unit';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent implements OnInit {
  menuHidden: Boolean = true;
  units;

  constructor(
    public authProvider: AuthProvider,
    private router: Router,
    private unitProvider: UnitProvider
  ) { 
  }

  ngOnInit() {
    this.unitProvider.getUnits().subscribe(units => {
      this.units = units;
    });
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