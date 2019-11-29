import { Component } from '@angular/core';
import { Book } from '../../app/book';
import { NavController, AlertController } from 'ionic-angular';
import { CourseProvider } from '../../providers/course/course';
import { CourseResult } from '../../app/model/CourseResult';
import { CourselistPage } from '../courselist/courselist';
import { Student } from '../../app/Student';
import { Classroom } from '../../app/Classroom';
import { Teacher } from '../../app/Teacher';
// import { NavController, LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  // constructor(public navCtrl: NavController
  //   ,public loadingCtrl: LoadingController) {

  // }

  // presentLoading() {
  //   const loader = this.loadingCtrl.create({
  //     content: "加载中，请稍后……",
  //     duration: 3000
  //   });
  //   loader.present();
  // }
  bookstr:string
  classroomstr:string
  studentstr:string
  teacherstr:string
  bl:Array<Book>
  sl:Array<Student>
  rl:Array<Classroom>
  hl:Array<Teacher>
  type:string;
  value:string;
  cl:Array<CourseResult>

  constructor(public navCtrl: NavController
    ,private courseservice:CourseProvider
    ,public alertCtrl: AlertController
   ) {
      this.bl= new Array();
      this.sl= new Array();
      this.rl= new Array();
      this.hl= new Array();
      this.cl =new Array();
      this.initBookList()
      this.initStudentList()
      this.initClassroomList()
      this.initTeacherList()

      
}

initBookList(){
  this.bl=new Array();


 this.courseservice.getBookList()
 .then((data:any)=>{

 this.bl=data;

 })

}

initStudentList(){
  this.sl=new Array();


 this.courseservice.getStudentList()
 .then((data:any)=>{

 this.sl=data;

 })

}

initClassroomList(){
  this.rl=new Array();


 this.courseservice.getClassroomList()
 .then((data:any)=>{

 this.rl=data;

 })

}

initTeacherList(){
  this.hl=new Array();


 this.courseservice.getTeacherList()
 .then((data:any)=>{

 this.hl=data;

 })

}

queryFromServer(){

  if(this.bookstr){
 this.type = "book"
 this.value = this.bookstr

  }
  else if (this.classroomstr){
    this.type = "classroom"
    this.value = this.classroomstr
  }

  else if (this.studentstr){
      this.type = "student"
      this.value = this.studentstr
    }

    else if (this.teacherstr){
      this.type = "teacher"
      this.value = this.teacherstr
    }

    

  


console.log(this.type)
console.log(this.value)

 this.courseservice.getCourseListByParm(this.type,this.value)
 .then((data:any)=>{
  this.cl= data;
 if (this.cl.length==0){

  const alert = this.alertCtrl.create({
    title: '查询结果',
    subTitle: '没有查询到相关课程',
    buttons: ['OK']
  });
  alert.present();

 }

 else{

 this.navCtrl.push(CourselistPage,{"courselist":this.cl});

 }




console.dir(this.cl);


 })





this.type =null
this.value =null
this.bookstr =null
this.classroomstr =null
this.studentstr =null
this.teacherstr =null
}



}