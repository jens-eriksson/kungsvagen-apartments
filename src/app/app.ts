import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.html',
    styleUrls: ['./app.css']
})
export class KungsvagenApartments implements OnInit {
    subscription: Subscription;

    constructor(
        private router: Router
    ) {
    }

    ngOnInit() {
    }
}
