import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ApiService } from '../../aplication/api.service';
import { Estudiante } from '../../model/estudiante';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [DatePipe]
})
export class FormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private datePipe: DatePipe, private api:ApiService, private router:Router) { }
  date=new Date();
  registerForm = this.formBuilder.group(<any>{
    user: [''],
    surname: [''],
    password: [''],
    company_email: [''],
    personal_email: [''],
    city: [''],
    active:true,
    create_date:this.datePipe.transform(this.date, 'yyyy-MM-dd'),
    image_url: [''],
    termination_date:null,
    num_hours_week:[],
    id_profesor:[],
    branch:['']
  })

  ngOnInit(): void {
  }

  submit(){
    this.api.crearEstudiante(this.registerForm.value).subscribe(res=>{
      console.log(res);
      this.router.navigate(["/estudiantes"]);
    });
  }
}
