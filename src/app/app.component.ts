import { Component } from '@angular/core';
import { MarvelService } from './marvel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Marvel Heros Portal';

  // array to hold heros coming back from api call
  heroArray;

  constructor(private marvelService : MarvelService){}

  // method to bring back 100 heros
  getMarvelHeros(){
    this.marvelService.getMarvelHeros()
    .subscribe(
      heroInfo => { 
        // store results in heroArray to work with
        this.heroArray = heroInfo.data.results;
      }
    )
  }

  // method to get heros based on searchString
  getSearchHeros(searchString) {
    if (searchString != "") {
      // set up string to append to end of base url for api
      var characterSearchString = "&nameStartsWith=" + searchString;
      this.marvelService.getSearchHeros(characterSearchString)
      .subscribe(
        heroInfo => {
          // store results in heroArray to work with
          this.heroArray = heroInfo.data.results;
        }
      )
    } else {  // if the searchString is blank, we want to call original api to fetch 100 heros
      var characterSearchString = "";
      this.marvelService.getMarvelHeros()
      .subscribe(
        heroInfo => {
          // store results in heroArray to work with
          this.heroArray = heroInfo.data.results;
        }
      )
    }
    
  }

  ngOnInit (){
    this.getMarvelHeros();
  }

  
}
