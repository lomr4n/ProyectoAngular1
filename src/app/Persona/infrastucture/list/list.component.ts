import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../aplication/api.service';
import { Persona } from '../../model/persona';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private api:ApiService, private router:Router) { }
  personas: Persona[] | undefined;

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.api.getAll().subscribe(res=>{
      this.personas=res;
    })
  }
  deletePersona(persona:Persona){
    this.personas = this.personas?.filter(e=>{
      return e.id != persona.id
    })
  }
  navigate(){
    this.router.navigate(["/add-persona-card"]);
  }
}
