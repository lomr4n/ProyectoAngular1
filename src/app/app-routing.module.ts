import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './general/infrastucture/landing/landing.component';
import { FormUpdateComponent } from './Persona/infrastucture/form-update/form-update.component';
import { FormComponent } from './Persona/infrastucture/form/form.component';
import { ListComponent } from './Persona/infrastucture/list/list.component';
import { FormUpdateComponent as FormUpdateComponentEstudiante} from './Estudiante/infrastucture/form-update/form-update.component';
import { FormComponent as FormComponentEstudiante} from './Estudiante/infrastucture/form/form.component';
import { ListComponent as ListComponentEstudiante } from './Estudiante/infrastucture/list/list.component';

const routes: Routes = [
  {path:'add-persona', component: FormComponent},
  {path:'personas', component: ListComponent},
  {path:'update-persona/:id', component: FormUpdateComponent},
  {path:'add-estudiante', component: FormComponentEstudiante},
  {path:'estudiantes', component: ListComponentEstudiante},
  {path:'update-estudiante/:id', component: FormUpdateComponentEstudiante},
  { path: '', component: LandingComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
