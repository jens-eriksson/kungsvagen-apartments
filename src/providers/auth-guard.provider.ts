import { SiteSettingsProvider } from 'src/providers/site-settings.provider';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { AuthenticationProvider } from '../providers/auth.provider';

@Injectable()
export class AccessGuardProvider implements CanActivate {
    constructor(
        private authProvider: AuthenticationProvider,
        private siteSettingsProvider: SiteSettingsProvider,
        public router: Router
    ) {
    }
    canActivate(route: ActivatedRouteSnapshot): boolean {
        let deny = this.siteSettingsProvider.denyAnonymous;
        console.log(deny);
        if(deny) {
            deny = !this.authProvider.isAuthenticated();;
        }

        if (deny) {
            this.router.navigate(['sign-in']);
            return false;
        }
        else {
            return true;
        }
    }

    
}