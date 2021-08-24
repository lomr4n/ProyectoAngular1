import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../aplication/api.service';
import { Estudiante } from '../../model/estudiante';

@Component({
  selector: 'app-form-update',
  templateUrl: './form-update.component.html',
  styleUrls: ['./form-update.component.scss']
})
export class FormUpdateComponent implements OnInit {

  constructor(private activatedRute:ActivatedRoute, private api:ApiService, private formBuilder: FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.getEstudiante();
  }
  estudiante!:Estudiante;
  registerForm:any;
  getEstudiante(){
    this.api.getOne(this.activatedRute.snapshot.paramMap.get("id")||"0").subscribe(res=>{
      this.estudiante=res;
      console.log(res);
      this.registerForm = this.formBuilder.group(<any>{
        user: [res.user],
        surname: [this.estudiante.surname],
        password: [this.estudiante.password],
        company_email: [this.estudiante.company_email],
        personal_email: [this.estudiante.personal_email],
        city: [this.estudiante.city],
        active:true,
        create_date:this.estudiante.create_date,
        image_url: [this.estudiante.image_url],
        termination_date:null,
        num_hours_week:[this.estudiante.num_hours_week],
        id_profesor:[this.estudiante.id_profesor],
        branch:[this.estudiante.branch]
      })
    })
  }
  submit(){
    this.api.actualizarEstudiante(this.estudiante.id||0,this.registerForm.value).subscribe(res=>{
      console.log(res);
    });
    this.router.navigate(["/estudiantes"]);
  }
}
