import { Injectable } from '@angular/core';
import { SearchResult } from './shared/search-result';

@Injectable({
  providedIn: 'root'
})
export class HandleNYTService {
  topArticlesAddress: string = "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=df5IslK9fHoIqbuTlpGKK11eZPQGAR6T";
  searchEndpoint = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=XXXXXXXXXX&api-key=df5IslK9fHoIqbuTlpGKK11eZPQGAR6T";
  searchResult: SearchResult[];

  savedSearch(searchResult: SearchResult[]){
    this.searchResult = searchResult;
  }

  fetchArticles(){
    let request = fetch(this.topArticlesAddress);
    return request.then(async response => {
      if (response.ok) {
        let resBody = await response.json();
        let results = resBody.results;
        console.log(results);
        return results;
      }
    })
  }

  findArticles(search: string){
    console.log('called1');
    let request = fetch(this.searchEndpoint.replace("XXXXXXXXXX", search));
    return request.then(async response => {
      console.log(response);
      if (response.ok) {
        let resBody = await response.json();
        console.log(resBody);
        let results = resBody.response.docs;
        console.log(results);
        return results;
      }
    })
  }

  constructor() { }
}
