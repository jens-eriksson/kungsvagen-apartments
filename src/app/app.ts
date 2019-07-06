import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthProvider } from '../providers/auth';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.html',
    styleUrls: ['./app.css']
})
export class Industriradhus implements OnInit {
    subscription: Subscription;

    constructor(
        private router: Router,
        private authProvider: AuthProvider
    ) {
        this.authProvider.initilize();
    }

    ngOnInit() {
    }
}
