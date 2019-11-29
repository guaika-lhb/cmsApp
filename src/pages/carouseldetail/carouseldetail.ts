import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Carousel } from '../../app/model/carousel';

/**
 * Generated class for the CarouseldetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-carouseldetail',
  templateUrl: 'carouseldetail.html',
})
export class CarouseldetailPage {
  c:Carousel;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.c=new Carousel();
    this.c=navParams.get("carousel");
  }

  ionViewDidLoad() {
   
  }

}
