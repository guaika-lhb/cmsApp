import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CourseResult } from '../../app/model/CourseResult';

/**
 * Generated class for the CourselistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-courselist',
  templateUrl: 'courselist.html',
})
export class CourselistPage {

  cl:Array<CourseResult>

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   this.cl = new Array();
   this.cl= navParams.get("courselist")



  }

  ionViewDidLoad() {
  
  }

}