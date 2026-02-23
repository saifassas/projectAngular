import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { ListAnnonceComponent } from './list-annonce/list-annonce.component';
import { AnnonceComponent } from './annonce.component';
import { AddAnnonceComponent } from './add-annonce/add-annonce.component';

const r:Routes = [
  {path:'',component:AnnonceComponent,children:[
    {path:'list',component:ListAnnonceComponent},
    {path:'add',component:AddAnnonceComponent}
  ]}


]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(r)
  ],
  exports:[
    RouterModule
  ]
})
export class AnnonceRoutingModule { }
