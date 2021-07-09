import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Nave } from '../interfaces/naves.interface';

@Injectable({
  providedIn: 'root'
})
export class NavesService {

  constructor( private http: HttpClient ) { }

  getNaves(): Observable<Nave[]>{
    return this.http.get<Nave[]>('https://swapi.dev/api/vehicles')
  }
}
