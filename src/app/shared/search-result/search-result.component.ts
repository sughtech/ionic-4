import { Component, OnInit, Input } from '@angular/core';
import { SearchResult } from '../search-result';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent implements OnInit {
  @Input() result: SearchResult;

  constructor() { }

  ngOnInit() {
    if (!this.result.multimedia[0]) {
      this.result.multimedia.push({
        url: "images/2020/07/30/business/29Techfix-illo/30Techfix-illo-articleLarge.gif"
      });
    }
  }

}
