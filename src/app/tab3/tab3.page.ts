import { Component, OnInit } from '@angular/core';
import { HandleFBService } from '../handle-fb.service';
import { Article } from '../shared/article';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
  articles: Article[];
  length: number;

  constructor(private bookmarkService: HandleFBService) {}

  fetchBookmarks(): void{
    this.articles = this.bookmarkService.fetchBookmarks();
    this.length = this.articles.length;
    console.log(this.length);
  }

  doRefresh(event): void{
    this.fetchBookmarks();
    event.target.complete();
  }

  ngOnInit(): void {
    this.fetchBookmarks();
    window.addEventListener('storage', (event) => {
      if (event.key === 'bookmarks') {
        this.fetchBookmarks();
      }
    });
  }

}
