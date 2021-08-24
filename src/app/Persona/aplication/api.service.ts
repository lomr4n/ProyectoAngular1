import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona';
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'

})
export class ApiService {

  constructor(
    private http: HttpClient
  ) {
  }

  url:string=environment.url+"/personas"

 crearPersona(persona:Persona): Observable<Persona>{
    return this.http.post<Persona>(`${this.url}`,persona);
  }
  getAll(): Observable<Persona[]>{
    return this.http.get<Persona[]>(`${this.url}`);
  }
  getOne(id:string): Observable<Persona>{
    return this.http.get<Persona>(`${this.url}/${id}`);
  }
  delete(persona:Persona): Observable<any>{
    return this.http.delete(`${this.url}/${persona.id}`);
  }

   actualizarPersona(id:number, persona:Persona): Observable<Persona>{
    return this.http.put<Persona>(`${this.url}/${id}`,persona);
  }
}
