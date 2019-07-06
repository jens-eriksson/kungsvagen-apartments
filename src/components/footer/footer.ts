import { Component, OnInit } from '@angular/core';
import { AuthProvider } from '../../providers/auth';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class FooterComponent implements OnInit {

  isAnonymous: Boolean;
  redirectTo: string = "";

  constructor (
    private authProvider: AuthProvider,
    private route: ActivatedRoute
  ) { 
    this.isAnonymous = this.authProvider.isAnonymous();
    for(let segment of this.route.snapshot.url) {
      this.redirectTo += segment + "/";
    }
  }

  ngOnInit() {
  }

}