import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Suggestion } from '../models/suggestion';
import { SuggestionService } from '../Services/suggestion.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
    sugg:Suggestion = new Suggestion();

constructor(private router:Router, private suggestionService:SuggestionService, private activatedRoute: ActivatedRoute) { }
ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['ide'];
    this.suggestionService.getSuggestionById(id).subscribe((data:any)=>{
        this.sugg=data;
    })
} 

  goBack(): void {
    this.router.navigate(['/list']);
}

}
