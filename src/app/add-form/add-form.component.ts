import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { SuggestionService } from '../Services/suggestion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrl: './add-form.component.css'
})
export class AddFormComponent implements OnInit{
  suggform!: FormGroup;
  categories:string[] = ['santé', 'sport', 'education'];
  status:string[] = ['en-attente', 'acceptee', 'terminé'];
  constructor(private suggservice:SuggestionService , private router:Router) { }

  ngOnInit(): void {
    this.suggform = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.maxLength(10),Validators.pattern('^[A-Z][a-zA-Z ]*$')]),
      description: new FormControl('', [Validators.required, Validators.minLength(10)]),
      category: new FormControl('', Validators.required),
      date: new FormControl(new Date(), Validators.required),
      status: new FormControl('', [Validators.required, Validators.pattern('^(en-attente|acceptee|terminé)$')]),
    });
  }
  
  get description() {
    return this.suggform.get('description');
  }
  add() {
    if (this.suggform.valid) {
      this.suggservice.addSuggestion(this.suggform.value).subscribe((data:any)=>{
        console.log(data);
        this.router.navigate(['/list']);
      })

    } else {
      console.log('Form is invalid');
    }
  }

}
