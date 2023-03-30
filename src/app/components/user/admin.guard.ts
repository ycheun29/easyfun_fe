import { Injectable } from "@angular/core";
import {
    ActivatedRouteSnapshot, 
    RouterStateSnapshot,
    Router
} from "@angular/router";
import { map } from "rxjs/operators";
import { Observable, of } from "rxjs";
import { AuthService } from "../../models/auth.service";

@Injectable()
export class AdminGuard {

    constructor(private router: Router,
        private auth: AuthService) { }

        canActivate(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot): Observable<boolean> 
        {
            if (!this.auth.authenticated) {
                this.auth.redirectUrl = state.url;
                this.router.navigateByUrl("/user/login");
                return of(false);
            }
        
            return this.auth.getUser().pipe(
                map(response => response.admin || false)
            );
        }
}