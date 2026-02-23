import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrl: './add-form.component.css'
})
export class AddFormComponent implements OnInit{
  suggform!: FormGroup;
  categories:string[] = ['santé', 'sport', 'education'];
  status:string[] = ['en-attente', 'en-cours', 'terminé'];

  ngOnInit(): void {
    this.suggform = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(10),Validators.pattern('^[A-Z][a-zA-Z ]*$')]),
      description: new FormControl('', [Validators.required, Validators.minLength(10)]),
      categorie: new FormControl('', Validators.required),
      date: new FormControl(new Date(), Validators.required),
      status: new FormControl('', [Validators.required,Validators.pattern('en-attente')]),
    });
  }
  
  get description() {
    return this.suggform.get('description');
  }
  add() {
    console.log(this.suggform.value);
  }

}
