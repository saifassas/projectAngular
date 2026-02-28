import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListSuggestionsComponent } from './list-suggestions/list-suggestions.component';
import { AddFormComponent } from './add-form/add-form.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UpdateComponent } from './update/update.component';
import { DetailsComponent } from './details/details.component';

const r:Routes =[
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'list',component:ListSuggestionsComponent},
  {path:'add',component:AddFormComponent},
  {path:'annonce',loadChildren:()=>import('./annonce/annonce-module.module').then(m=>m.AnnonceModuleModule)},
  {path:'update/:ide',component:UpdateComponent},
  {path:'details/:ide',component:DetailsComponent},
  {path:'**',component:NotfoundComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(r)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
