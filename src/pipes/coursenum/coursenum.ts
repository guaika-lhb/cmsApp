import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the CoursenumPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'coursenum',
})
export class CoursenumPipe implements PipeTransform {
 


  transform(value: string, ...args) {
    let parm = Number(value)
    var result = ""

   switch (parm){
    case 0:
      result = "周二34节"
       break
       
       case 1:
       result ="周一78节"
       break
       case 2:
       result ="周五78节"
       break
     case 3:
     result = "周四56节"
     break
     case 4:
     result ="周一78节"
     break

     case 5:
      result = "周二34节"
       break

       case 6:
       result ="周三910节"
       break

       case 7:
       result ="周一78节"
       break

       case 8:
       result ="周五78节"
       break

     case 9:
     result = "周四56节"
     break

     case 10:
     result ="周一78节"
     break

     case 11:
      result = "周二34节"
       break
       case 12:
       result ="周三910节"
       break
       case 13:
       result ="周一78节"
       break
       case 14:
       result ="周五78节"
       break
     case 15:
     result = "周四56节"
     break
     case 16:
     result ="周一78节"
     break

     case 17:
      result = "周二34节"
       break

       case 18:
       result ="周三910节"
       break

       case 19:
       result ="周一78节"
       break

       case 20:
       result ="周五78节"
       break

     case 21:
     result = "周四56节"
     break

     case 22:
     result ="周一78节"
     break

     case 23:
      result = "周四56节"
      break
 
      case 24:
      result ="周一78节"
      break

   }




    return result;
  
  
  
  }
}