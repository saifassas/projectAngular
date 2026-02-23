import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  search="hello"
  name="hello 4ARCTIC4, this is interpolation"
  isDisabled=true;
  display(){
     window.alert("event binding");
  }

}
