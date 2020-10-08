import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../article';
import { HandleFBService } from 'src/app/handle-fb.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.scss'],
})
export class ArticleItemComponent implements OnInit {
  @Input() article: Article;
  @Input() hideBookmark: boolean;

  constructor(private bookmarkService: HandleFBService, private toastController: ToastController) { }

  addBookmark(){
    let isNewEntry = this.bookmarkService.addBookmark(this.article);
    if (isNewEntry) {
      this.showToast('Bookmark Added Successfully!');
    } else {
      this.showToast('Bookmark Already Exists!');
    }
  }

  showToast(msg: string) {
    this.toastController.create({
      message: msg,
      duration: 2000
    }).then(toast => toast.present());
  }

  ngOnInit() {
    if (!this.article.multimedia) {
      this.article.multimedia = [{
        url: "https://static01.nyt.com/images/2020/03/03/world/coronavirus-map-promo/coronavirus-map-promo-superJumbo-v737.png"
      }];
    }
  }

}
