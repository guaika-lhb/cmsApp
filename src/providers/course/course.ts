import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigProvider } from '../config/config';

/*
  Generated class for the CourseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CourseProvider {


  constructor(private http: HttpClient
    ,private config:ConfigProvider) {
   
  }


  private getBookListUrl = this.config.HOST + "/public/getBookList"

   getBookList(){

    return this.http.get(this.getBookListUrl).toPromise();
   }

   private getStudentListUrl = this.config.HOST + "/public/getStudentList"

   getStudentList(){

    return this.http.get(this.getStudentListUrl).toPromise();
   }

   private getClassroomListUrl = this.config.HOST + "/public/getClassroomList"

   getClassroomList(){

    return this.http.get(this.getClassroomListUrl).toPromise();
   }

   private getTeacherListUrl = this.config.HOST + "/public/getTeacherList"

   getTeacherList(){

    return this.http.get(this.getTeacherListUrl).toPromise();
   }



   private getCourseListByParmUrl = this.config.HOST + "/public/getCourseListByParm"

   getCourseListByParm(key:string,value:string){
    let parm = {
"key":key,
"value":value

    }

    return this.http.post(this.getCourseListByParmUrl,parm).toPromise();






   }



}