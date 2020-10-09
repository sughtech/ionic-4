import { Component, OnInit } from '@angular/core';
import { HandleNYTService } from '../handle-nyt.service';
import { Article } from '../shared/article';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  results: Article[];
  result: Article;

  doRefresh(event): void{
    this.fetchArticles().then(value => {
      event.target.complete();
    });
    
  }

  constructor(private handleNYTService: HandleNYTService) {}

  fetchArticles(){
    return this.handleNYTService.fetchArticles().then(results => {
      this.results = results;
      console.log(this.results);
      return this.result = results[0];
     
    });
  }

  ngOnInit(){
    this.fetchArticles();
    console.log('');
  }

}
