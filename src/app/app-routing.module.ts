import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormUpdateComponent } from './Persona/infrastucture/form-update/form-update.component';
import { FormComponent } from './Persona/infrastucture/form/form.component';
import { ListComponent } from './Persona/infrastucture/list/list.component';

const routes: Routes = [
  {path:'add-persona-card', component: FormComponent},
  {path:'personas', component: ListComponent},
  {path:'update-persona-card/:id', component: FormUpdateComponent},
  { path: '',   redirectTo: '/personas', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
