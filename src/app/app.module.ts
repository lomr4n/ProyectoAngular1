import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './Persona/infrastucture/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { ListComponent } from './Persona/infrastucture/list/list.component';
import { PersonaCardComponent } from './Persona/infrastucture/persona-card/persona-card.component';
import { FormUpdateComponent } from './Persona/infrastucture/form-update/form-update.component';
import { NavbarComponent } from './general/infrastucture/navbar/navbar.component';
import { LandingComponent } from './general/infrastucture/landing/landing.component';
import { ListComponent as ListComponentEstudiante } from './Estudiante/infrastucture/list/list.component';
import { EstudianteCardComponent } from './Estudiante/infrastucture/estudiante-card/estudiante-card.component';
import { FormUpdateComponent as FormUpdateComponentEstudiante } from './Estudiante/infrastucture/form-update/form-update.component';
import { FormComponent as FormComponentEstudiante} from './Estudiante/infrastucture/form/form.component';



@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ListComponent,
    PersonaCardComponent,
    FormUpdateComponent,
    NavbarComponent,
    LandingComponent,
    FormComponentEstudiante,
    EstudianteCardComponent,
    FormUpdateComponentEstudiante,
    ListComponentEstudiante
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
