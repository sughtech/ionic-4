import { Component, ViewChild } from '@angular/core';
import { Tab1Page } from '../tab1/tab1.page';
import { Tab2Page } from '../tab2/tab2.page';
import { Tab3Page } from '../tab3/tab3.page';
import { MenuController } from '@ionic/angular';
import { SuperTabs } from '@ionic-super-tabs/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage{
  home = Tab1Page;
  search = Tab2Page;
  bookmarks = Tab3Page;
  colors = ["blue", "red"];
  currentColor = 0;

  @ViewChild(SuperTabs) tabs: SuperTabs;

  constructor(private menuController: MenuController) { }


  tabChange(event) {
    console.log(event);
  }

  toggleColors() {
    if (this.currentColor == 0) {
      this.currentColor = 1;
      return this.colors[1];
    } else {
      this.currentColor = 0;
      return this.colors[0];
    }
  }

  goToTab(index) {
    this.closeMenu();
    this.tabs.selectTab(index);
  }

  closeMenu() {
    this.menuController.close();
  }

  onClick() {
    let currentColor = this.toggleColors();
    let itemSelector = document.querySelectorAll("ion-item");
    let menu = document.getElementById('menu');
    let menuTitle = document.getElementById('menuTitle');
    let tabSelector = document.querySelector("super-tabs-toolbar");
    let tapper = document.getElementById("tapper");
    tapper.style.color = this.colors[this.colors.indexOf(currentColor) == 0 ? 1 : 0];
    itemSelector.forEach(element => {
      element.style.setProperty("--background", this.colors[this.currentColor]);
    });
    menu.style.setProperty('--background', currentColor);
    menuTitle.style.setProperty('--background', currentColor);
    tabSelector.style.backgroundColor = currentColor;
    this.menuController.isOpen().then(value => {
      if (!value) {
        this.menuController.open();
      } else {
        this.closeMenu();
      }
    })
  }

}
