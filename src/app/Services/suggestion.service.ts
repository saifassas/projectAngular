import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Suggestion } from '../models/suggestion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuggestionService {

  constructor(private http: HttpClient) { }
  url:string = 'http://localhost:3000/suggestions';
  getSuggestions():Observable<Suggestion>{
  return this.http.get<Suggestion>(this.url);
  }
  getSuggestionById(id:any):Observable<Suggestion>{
    return this.http.get<Suggestion>(this.url+'/'+id);
  }
  deleteSuggestion(id:any):Observable<Suggestion>{
    return this.http.delete<Suggestion>(this.url+'/'+id);
  }
  addSuggestion(sugg:Suggestion):Observable<Suggestion>{
    return this.http.post<Suggestion>(this.url,sugg);
  }
  updateSuggestion(id:any,sugg:Suggestion):Observable<Suggestion>{
    return this.http.put<Suggestion>(this.url+'/'+id,sugg);
  }
}
