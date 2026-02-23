import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnonceRoutingModule } from './annonce-routing.module';
import { AddAnnonceComponent } from './add-annonce/add-annonce.component';
import { ListAnnonceComponent } from './list-annonce/list-annonce.component';
import { AnnonceComponent } from './annonce.component';



@NgModule({
  declarations: [
    AnnonceComponent,
    ListAnnonceComponent,
    AddAnnonceComponent
  ],
  imports: [
    CommonModule,
    AnnonceRoutingModule
  ]
})
export class AnnonceModuleModule { }
