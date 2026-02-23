import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SuggestionService } from '../Services/suggestion.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Suggestion } from '../models/suggestion';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent implements OnInit {
  id:any;
  suggform!: FormGroup;
    categories:string[] = ['santé', 'sport', 'education'];
    status:string[] = ['en-attente', 'acceptee', 'terminé'];
    constructor(private suggservice:SuggestionService , private router:Router,private act:ActivatedRoute) { }
    sugg:Suggestion = new Suggestion();
  ngOnInit(): void {
    this.id=this.act.snapshot.params['ide'];
    console.log(this.id);
     this.suggform = new FormGroup({
          title: new FormControl('', [Validators.required, Validators.maxLength(10),Validators.pattern('^[A-Z][a-zA-Z ]*$')]),
          description: new FormControl('', [Validators.required, Validators.minLength(10)]),
          category: new FormControl('', Validators.required),
          date: new FormControl(new Date(), Validators.required),
          status: new FormControl('', [Validators.required, Validators.pattern('^(en-attente|acceptee|terminé)$')]),
        });
        this.suggservice.getSuggestionById(this.id).subscribe((data:any)=>{
          console.log(data);
          this.sugg=data;
          this.suggform.patchValue(this.sugg as any );
        })
  }
  get description() {
    return this.suggform.get('description');
  }
  update() {
    if (this.suggform.valid) {
      this.suggservice.updateSuggestion(this.id,this.suggform.value).subscribe((data:any)=>{
        console.log(data);
        this.router.navigate(['/list']);
      })
    } else {
      console.log('Form is invalid');
    }}
}
