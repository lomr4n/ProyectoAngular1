import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiService } from '../../aplication/api.service';
import { Router } from '@angular/router';
import { Estudiante } from '../../model/estudiante';

@Component({
  selector: 'app-estudiante-card',
  templateUrl: './estudiante-card.component.html',
  styleUrls: ['./estudiante-card.component.scss']
})
export class EstudianteCardComponent implements OnInit {

  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
  }

  @Input("estudiante") estudiante!:Estudiante;

  @Output() updateArray = new EventEmitter<any>();


  delete(){
    this.updateArray.emit(this.estudiante);
    this.api.delete(this.estudiante).subscribe(res => {
      console.log(res);
    });
  }
  navigate(){
    this.router.navigate(["update-estudiante/"+this.estudiante.id]);
  }
}
