import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from './other/persona';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  url:String="http://localhost:8080/api/v1/personas"

 crearPersona(persona:Persona): Observable<any>{
    return this.http.post<Persona>(`${this.url}`,persona);
  }
}
