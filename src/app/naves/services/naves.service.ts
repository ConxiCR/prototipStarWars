import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavesService {

  constructor( private http: HttpClient ) { }

  getNaves(){
    return this.http.get('https://swapi.dev/api/vehicles/')
  }
}
