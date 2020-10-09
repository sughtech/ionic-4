import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';

import { SharedModule } from '../shared/shared.module';
import { SearchResultsComponent } from '../shared/search-results/search-results.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: "result",
        component: SearchResultsComponent
      }
    ])
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
