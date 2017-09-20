import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

// angular decorator, telling us this is injectable into other components
@Injectable()
export class MarvelService {
  private baseUrl: string = "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=70192f833372c4bf90536c073f57817a&hash=428fbcd16d2262d0cf696698994796d9";

  // set up (inject) http client for our app, basically saying "here is postman for my app"
  constructor(private http: Http) {}

  // this will be the api call to get the first 100 heros, no search
  getMarvelHeros(): Observable<any> {
    
        return this.http.get(this.baseUrl + "&limit=50")
          .map(result => {
            return result.json()
          })
    
      }

  // this will be the api call to get the heros from user search
  getSearchHeros(characterSearchString): Observable<any> {
        
        return this.http.get(this.baseUrl + characterSearchString)
          .map(result => {
            return result.json()
          })
        
      }

}
