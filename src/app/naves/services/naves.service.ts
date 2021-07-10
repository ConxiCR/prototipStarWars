import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Nave } from '../interfaces/naves.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NavesService {

  private baseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient ) { }

  getNaves(): Observable<Nave[]>{
    return this.http.get<Nave[]>(`${this.baseUrl}/vehicles/`)
  }
}
