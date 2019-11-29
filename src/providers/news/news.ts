import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigProvider } from '../config/config';

/*
  Generated class for the NewsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NewsProvider {
  [x: string]: any;

  constructor(private http: HttpClient
    ,private config:ConfigProvider
    ) {
   
  }
 
  private getCarouselListUrl=this.config.HOST+"/public/getCarouselList";
    getCarouselList(){
    return this.http.get(this.getCarouselListUrl).toPromise();
  }

  private getNewsListUrl=this.config.HOST+"/public/getNewsList";
  getNewsList(){
    return this.http.get(this.getNewsListUrl).toPromise();
  }
  

}
