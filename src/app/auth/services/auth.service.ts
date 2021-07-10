import { HttpClient } from '@angular/common/http';
import { TagPlaceholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Auth } from '../interface/auth.interface';
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _auth: Auth | undefined;

  get auth(): Auth{
    return {...this._auth! }//desestructuro para que no se cambie por accidente. _auth siempre va a tener un valor
  }

  constructor( private http: HttpClient ) { }

  //método para hacer la petición al url de backend
  login(){
    return this.http.get<Auth>(`${this.baseUrl}`)
      .pipe( 
        //tap( resp => console.log('AuthService', resp))
        tap( auth => this._auth = auth ),
        tap( auth => localStorage.setItem('id', auth.id) ),
       );
  }

}
