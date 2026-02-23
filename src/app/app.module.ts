import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListSuggestionsComponent } from './list-suggestions/list-suggestions.component';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { AddFormComponent } from './add-form/add-form.component';
import { AppRoutingModule } from './app-routing.module';
import { AnnonceComponent } from './annonce/annonce.component';
import { ListAnnonceComponent } from './annonce/list-annonce/list-annonce.component';
import { AddAnnonceComponent } from './annonce/add-annonce/add-annonce.component';
import { AnnonceModuleModule } from './annonce/annonce-module.module';
import { HttpClient, provideHttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ListSuggestionsComponent,
    NotfoundComponent,
    AddFormComponent
   
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    AnnonceModuleModule,
    ReactiveFormsModule
    
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
