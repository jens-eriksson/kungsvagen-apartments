import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthProvider {
    public currentUser;

    constructor(
        private httpClient: HttpClient
    ) {
    }

    initilize() {
        this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    }

    async signIn(user): Promise<any> {
        let path = "auth/sign-in";
        let message = "Welcome in";

        try {
            this.currentUser = await this.httpClient.post(environment.apiBaseUrl + path, user).toPromise();
        }
        catch(err) {
            message = err.message;
            if(this.currentUser) {
                localStorage.removeItem("currentUser");
                this.currentUser = null;
            }
        }
        
        localStorage.setItem("currentUser", JSON.stringify(this.currentUser));
        return message;
    }

    async signOut() {
        localStorage.removeItem("currentUser");
        this.currentUser = null;
    }

    isAuthenticated(): boolean {
        if (this.currentUser && this.currentUser.jwt) {
            return true;
        }

        return false;
    }
}