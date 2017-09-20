import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() newSearch = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  searchString: string;

  // run this search method upon click of button in nav bar
  searchHeros() {
    // emit event and send searchString up to parent
    this.newSearch.emit(this.searchString);
  }

}
