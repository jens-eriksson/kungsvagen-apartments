import { SettingsComponent } from './../../pages/settings/settings.component';
import { ModalPageProvider } from './../../providers/modal-page.provider';
import { Component, OnInit } from '@angular/core';
import { AuthenticationProvider } from './../../providers/auth.provider';
import { Router } from '@angular/router';
import { UnitProvider } from './../../providers/unit.provider';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent implements OnInit {
  menuHidden: Boolean = true;
  units;

  constructor(
    public authProvider: AuthenticationProvider,
    private router: Router,
    private unitProvider: UnitProvider,
    private modalPageProvider: ModalPageProvider
  ) { 
  }

  ngOnInit() {
    this.unitProvider.all('id', 'asc').subscribe(units => {
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

  settings() {
    this.modalPageProvider.open(SettingsComponent);
  }

  toggleMenu() {
    this.menuHidden = !this.menuHidden;
  }

}