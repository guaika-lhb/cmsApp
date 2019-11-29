import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { News } from '../../app/model/news';

/**
 * Generated class for the NewsdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newsdetail',
  templateUrl: 'newsdetail.html',
})
export class NewsdetailPage {
  n:News


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.n=new News();
   this.n=this.navParams.get("news");

  }

  ionViewDidLoad() {
    
  }

}
