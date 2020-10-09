import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleItemComponent } from './article-item/article-item.component';
import { IonicModule } from '@ionic/angular';
import { SearchResultComponent } from './search-result/search-result.component';
import { SearchResultsComponent } from './search-results/search-results.component';



@NgModule({
  declarations: [ArticleItemComponent, SearchResultsComponent, SearchResultComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    ArticleItemComponent,
    SearchResultsComponent,
    SearchResultComponent
  ]
})
export class SharedModule { }
