import { Injectable } from '@angular/core';
import { Article } from './shared/article';

@Injectable({
  providedIn: 'root'
})
export class HandleFBService {
  bookmarks: Article[] = [];
  
  constructor() { }

  addBookmark(article: Article){
    if (localStorage.bookmarks) {
      this.bookmarks = JSON.parse(localStorage.bookmarks);
    }
    let hasArticle = this.hasArticle(this.bookmarks, article);
    console.log(hasArticle);
    if (!hasArticle) {
      this.bookmarks.push(article);
      localStorage.bookmarks = JSON.stringify(this.bookmarks);
      return true;
    }
    return false;
  }

  hasArticle(bookmarks: Article[], article: Article){
    let found: boolean = false;
    bookmarks.forEach(value => {
      console.log('present' + value.url);
      if (value.url === article.url) {
        console.log("has Article");
        found = true;
      }
    });
    return found;
  }

  fetchBookmarks(): Article[]{
    if (localStorage.bookmarks) {
      this.bookmarks = JSON.parse(localStorage.bookmarks);
    }
    return this.bookmarks;
  }

}
