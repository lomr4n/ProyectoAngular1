import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { Persona } from '../other/persona';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent implements OnInit {

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
    this.router.navigate(["update-persona/"+this.persona.id]);
  }
}
