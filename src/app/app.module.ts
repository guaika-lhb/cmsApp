import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NewsdetailPage } from '../pages/newsdetail/newsdetail';
import { ConfigProvider } from '../providers/config/config';
import { NewsProvider } from '../providers/news/news';
import { HttpClientModule } from '@angular/common/http';
import { CarouseldetailPage } from '../pages/carouseldetail/carouseldetail';
import { CourseProvider } from '../providers/course/course';
import { CourselistPage } from '../pages/courselist/courselist';
import { CoursenumPipe } from '../pipes/coursenum/coursenum';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    NewsdetailPage,
    CourselistPage,
    CarouseldetailPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    PipesModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    NewsdetailPage,
    CourselistPage,
    CarouseldetailPage  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConfigProvider,
    NewsProvider,
    CourseProvider
  ]
})
export class AppModule {}
