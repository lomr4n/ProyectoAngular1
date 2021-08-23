import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiService } from '../../aplication/api.service';
import { Router } from '@angular/router';
import { Persona } from '../../model/persona';

@Component({
  selector: 'app-persona-card',
  templateUrl: './persona-card.component.html',
  styleUrls: ['./persona-card.component.scss']
})
export class PersonaCardComponent implements OnInit {

  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
  }

  @Input("persona") persona!:Persona;

  @Output() updateArray = new EventEmitter<any>();


  delete(){
    this.updateArray.emit(this.persona);
    this.api.delete(this.persona).subscribe(res => {
      console.log(res);
    });
  }
  navigate(){
    this.router.navigate(["update-persona-card/"+this.persona.id]);
  }
}
