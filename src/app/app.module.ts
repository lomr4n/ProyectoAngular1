import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { ListComponent } from './list/list.component';
import { PersonaComponent } from './persona/persona.component';
import { FormUpdateComponent } from './form-update/form-update.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ListComponent,
    PersonaComponent,
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
