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


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ListComponent,
    PersonaCardComponent,
    FormUpdateComponent
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
