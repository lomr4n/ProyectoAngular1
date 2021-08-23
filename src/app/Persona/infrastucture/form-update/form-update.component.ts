import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../aplication/api.service';
import { Persona } from '../../model/persona';

@Component({
  selector: 'app-form-update',
  templateUrl: './form-update.component.html',
  styleUrls: ['./form-update.component.scss']
})
export class FormUpdateComponent implements OnInit {

  constructor(private activatedRute:ActivatedRoute, private api:ApiService, private formBuilder: FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.getPersona();
  }
  persona!:Persona;
  registerForm:any;
  getPersona(){
    this.api.getOne(this.activatedRute.snapshot.paramMap.get("id")||"0").subscribe(res=>{
      this.persona=res;
      console.log(res);
      this.registerForm = this.formBuilder.group(<any>{
        user: [res.user],
        surname: [this.persona.surname],
        password: [this.persona.password],
        company_email: [this.persona.company_email],
        personal_email: [this.persona.personal_email],
        city: [this.persona.city],
        active:true,
        create_date:this.persona.create_date,
        image_url: [this.persona.image_url],
        termination_date:null
      })
    })
  }
  submit(){
    this.api.actualizarPersona(this.persona.id||0,this.registerForm.value).subscribe(res=>{
      console.log(res);
    });
    this.router.navigate(["/personas"]);
  }
}
