import { Component, OnInit } from '@angular/core';
import { Suggestion } from '../models/suggestion';
import { SuggestionService } from '../Services/suggestion.service';
@Component({
  selector: 'app-list-suggestions',
  templateUrl: './list-suggestions.component.html',
  styleUrl: './list-suggestions.component.css'
})
export class ListSuggestionsComponent implements OnInit {
  constructor(private suggestionService: SuggestionService){ }
  listSuggestions:Suggestion[] = [];
  ngOnInit(): void {
    this.suggestionService.getSuggestions().subscribe((data:any)=>{
      this.listSuggestions=data
    })
  }
  searchTerm: string = '';
  
onClick(suggestion: Suggestion): void {
  suggestion.nbLikes += 1;

}
delete(id:any):void{
  console.log(id);
  this.suggestionService.deleteSuggestion(id).subscribe(()=>{
console.log("deleted");
this.ngOnInit();
  })  
  

}
favoris: Suggestion[] = [];
addToFavoris(suggestion: Suggestion): void {
  if (!this.favoris.includes(suggestion)) {
    this.favoris.push(suggestion);
  }
}
remove(suggestion: Suggestion): void {
  this.favoris = this.favoris.filter(item => item !== suggestion);
}

searchbyTitle(){
  return this.listSuggestions.filter(suggestion =>
    suggestion.title.toLowerCase().includes(this.searchTerm.toLowerCase())
  );  
}
}