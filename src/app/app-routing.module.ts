import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormUpdateComponent } from './form-update/form-update.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
 
const routes: Routes = [
  {path:'add-persona', component: FormComponent},
  {path:'personas', component: ListComponent},
  {path:'update-persona/:id', component: FormUpdateComponent},
  { path: '',   redirectTo: '/personas', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
