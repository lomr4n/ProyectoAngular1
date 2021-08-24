import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estudiante } from '../model/estudiante';
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'

})
export class ApiService {

  constructor(
    private http: HttpClient
  ) {
  }

  url:string=environment.url+"/estudiantes"

 crearEstudiante(estudiante:Estudiante): Observable<Estudiante>{
    return this.http.post<Estudiante>(`${this.url}`,estudiante);
  }
  getAll(): Observable<Estudiante[]>{
    return this.http.get<Estudiante[]>(`${this.url}`);
  }
  getOne(id:string): Observable<Estudiante>{
    return this.http.get<Estudiante>(`${this.url}/${id}`);
  }
  delete(estudiante:Estudiante): Observable<any>{
    return this.http.delete(`${this.url}/${estudiante.id}`);
  }

   actualizarEstudiante(id:number, estudiante:Estudiante): Observable<Estudiante>{
    return this.http.put<Estudiante>(`${this.url}/${id}`,estudiante);
  }
}
