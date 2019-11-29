import { Component } from '@angular/core';
import { NavController, Picker } from 'ionic-angular';
import { News } from '../../app/model/news';
import { NewsdetailPage } from '../newsdetail/newsdetail';
import { NewsProvider } from '../../providers/news/news';
import { Carousel } from '../../app/model/carousel';
import { CarouseldetailPage } from '../carouseldetail/carouseldetail';
import { ConfigProvider } from '../../providers/config/config';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  n1:Array<News>
  cl:Array<Carousel>
  PICHOST:string

  constructor(public navCtrl: NavController,
    private newsService:NewsProvider,
    private configservice:ConfigProvider) {
      
      this.PICHOST=configservice.HOST+"/public/";

   this.initNewsList();
   this.initCarouselList();
  }

initCarouselList(){
  this.cl=new Array();
  this.newsService.getCarouselList()
  .then((data:any)=>{
    this.cl=data;
    console.log(this.cl[0].pic);

  })


}

initNewsList(){
  this.n1=new Array();
  this.newsService.getNewsList()
  .then((data:any)=>{
    this.n1=data;

  })

}



goToNewsDetail(news:News){

  this.navCtrl.push(NewsdetailPage,{"news":news})

}

goToCarouselDetail(carousel:Carousel){

  this.navCtrl.push(CarouseldetailPage,{"carousel":carousel});

}

}
