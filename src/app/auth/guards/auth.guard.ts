import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot,  UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private authService: AuthService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      //si existe el id(usuario) se puede ver la información
      if(this.authService.auth.id){
        return true;
      }
      console.log('bloqueado por AuthGuard_canActivate');
        return false;
  }
  
  canLoad(
      route: Route,
      segments: UrlSegment[]): Observable<boolean> | UrlTree | Promise<boolean | UrlTree> | boolean | UrlTree {

        //console.log('canLoad');
        console.log( route );
        console.log( segments );
        //si existe el id(usuario) se puede ver la información
        if(this.authService.auth.id){
          return true;
        }
        console.log('bloqueado por AuthGuard_canLoad');
          return false;
  }
}

