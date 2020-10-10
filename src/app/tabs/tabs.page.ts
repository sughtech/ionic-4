import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Tab1Page } from '../tab1/tab1.page';
import { Tab2Page } from '../tab2/tab2.page';
import { Tab3Page } from '../tab3/tab3.page';
import { MenuController, GestureController, Gesture } from '@ionic/angular';
import { SuperTabs } from '@ionic-super-tabs/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements AfterViewInit {
  home = Tab1Page;
  search = Tab2Page;
  bookmarks = Tab3Page;
  colors = ["blue", "red"];
  curentColor = 0;


  @ViewChild(SuperTabs) tabs: SuperTabs;
  @ViewChild("fab") fab;

  ngAfterViewInit(): void {
    const gesture: Gesture = this.gestureController.create({
      el: this.fab.el,
      threshold: 15,
      gestureName: 'my-gesture',
      onMove: ev => this.onMove(ev),
      onStart: ev => this.printer(ev, "Started: "),
      onEnd: ev => this.printer(ev, "Ended: ")
    }, true);
    gesture.enable();
  }

  printer(ev, msg){
    console.log(msg + ev);
  }

  constructor(private menuController: MenuController, private gestureController: GestureController) { }

  onMove(ev) {
    console.log(ev);
    this.fab.el.style.transform = `translate(${ev.deltaX}px, ${ev.deltaY}px)`;
  }

  tabChange(event) {
    console.log(event);
  }

  toggleColors() {
    if (this.curentColor == 0) {
      this.curentColor = 1;
      return this.colors[1];
    } else {
      this.curentColor = 0;
      return this.colors[0];
    }
  }

  goToTab(index) {
    this.closeMenu();
    this.tabs.selectTab(index);
    // console.log(this.tabs.);
  }

  closeMenu() {
    this.menuController.close();
  }

  onClick() {
    let curentColor = this.toggleColors();
    let itemSelector = document.querySelectorAll("ion-item");
    let menu = document.getElementById('menu');
    let menuTitle = document.getElementById('menuTitle');
    let tabSelector = document.querySelector("super-tabs-toolbar");
    let tapper = document.getElementById("tapper");
    tapper.style.color = this.colors[this.colors.indexOf(curentColor) == 0 ? 1 : 0];
    itemSelector.forEach(element => {
      element.style.setProperty("--background", this.colors[this.curentColor]);
    });
    menu.style.setProperty('--background', curentColor);
    menuTitle.style.setProperty('--background', curentColor);
    tabSelector.style.backgroundColor = curentColor;
    this.menuController.isOpen().then(value => {
      if (!value) {
        this.menuController.open();
      } else {
        this.closeMenu();
      }
    })
    console.log(this.fab.el);

  }

}
