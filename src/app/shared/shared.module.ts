import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleItemComponent } from './article-item/article-item.component';
import { IonicModule } from '@ionic/angular';
import { SearchResultComponent } from './search-result/search-result.component';



@NgModule({
  declarations: [ArticleItemComponent, SearchResultComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    ArticleItemComponent,
    SearchResultComponent
  ]
})
export class SharedModule { }
