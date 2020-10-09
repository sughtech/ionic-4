import { Component, OnInit } from '@angular/core';
import { SearchResult } from '../search-result';
import { HandleNYTService } from 'src/app/handle-nyt.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  searchResult: SearchResult[];

  constructor(private handleNYTService: HandleNYTService) { }

  ngOnInit() {
    this.searchResult = this.handleNYTService.searchResult;
  }

}
