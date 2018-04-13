import { Injectable, } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpResponse, HttpHandler, HttpRequest, HttpClient } from '@angular/common/http';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/do';
import { ConstService } from './const.service';
declare var SiteJS: any;
@Injectable()
export class AccountService {

    authStorage = new AuthStorage();

    constructor(private http: HttpClient, private constService: ConstService) {}

    isAuthorized() {
        var authData = this.authStorage.getAuthData();
        if (authData)
            return true;
        else
            return false;
    }

    login(loginData) {
        return this.http.post(this.constService.baseUrl + '/account/login', { 'username': loginData.userName, 'password': loginData.pass });
    }

    register(userData){
        return this.http.post(this.constService.baseUrl + '/account/register', userData);
    }

    logout() {
        this.authStorage.setAuthorizationHeader(null);
    }

    setAuthorizationHeader(authResponse) {
        this.authStorage.setAuthorizationHeader(authResponse);
    }
}

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private AccountService: AccountService) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        // logged in so return true
        if (this.AccountService.isAuthorized()) {
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login']);
        return false;
    }
}

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    authStorage = new AuthStorage();

    constructor(private router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Get the auth header from the service.
        const authHeader = this.authStorage.getAuthorizationHeader();
        // Clone the request to add the new header.
        const authReq = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + authHeader) });
        // Pass on the cloned request instead of the original request.
        return next.handle(authReq).do(event => {
            /* If something needs to be handled when response returned */
        }).catch((e) => {
            if (e.status === 401 || e.status === 403) {
                SiteJS.notifyDanger('You are not allowed');
                this.authStorage.setAuthorizationHeader(null);
                this.router.navigate(['/login']);
            }
            return Observable.throw(new Error(`${e.status} ${e.statusText}`));
        }).finally(() => { /* Loader will be hidden here*/ });
    }
}

export class AuthStorage {

    getAuthData() {
        var authData = window.localStorage.getItem('auth_data');
        if (authData && authData.length > 0) {
            return JSON.parse(authData);
        }
        return null;
    }

    getAuthorizationHeader() {
        var authData = this.getAuthData();
        if (authData)
            return authData.token;
    }

    setAuthorizationHeader(authResponse) {
        window.localStorage.setItem('auth_data', JSON.stringify(authResponse));
    }

}