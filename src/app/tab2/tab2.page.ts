import { Component } from '@angular/core';
import { HandleNYTService } from '../handle-nyt.service';
import { SearchResult } from '../shared/search-result';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  searchResult: SearchResult[];
  newToPage = true;

  constructor(private handleNYTService: HandleNYTService) { }

  // test(event){
  //   let input: string = event.srcElement.value;
  //   input = input.replace(" ", "+");
  //   console.log(input);
  // }

  doSearch(event) {
    if (this.newToPage) {
      this.newToPage = false;
    }else{
      this.searchResult = null;
    }
    let inputValue: string = event.srcElement.value;
    inputValue = inputValue.trim();
    inputValue = inputValue.replace(" ", "+");
    console.log(inputValue);
    this.handleNYTService.findArticles(inputValue).then(result => {
      this.searchResult = result;
      this.handleNYTService.savedSearch(result);
    });
  }
}