import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../aplication/api.service';
import { Estudiante } from '../../model/estudiante';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private api:ApiService, private router:Router) { }
  estudiantes: Estudiante[] | undefined;

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.api.getAll().subscribe(res=>{
      this.estudiantes=res;
    })
  }
  deleteEstudiante(estudiante:Estudiante){
    this.estudiantes = this.estudiantes?.filter(e=>{
      return e.id != estudiante.id
    })
  }
  navigate(){
    this.router.navigate(["/add-estudiante"]);
  }
}
