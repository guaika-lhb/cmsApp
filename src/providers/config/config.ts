import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ConfigProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConfigProvider {

  constructor(private http: HttpClient) {
  
  }

  public HOST="http://localhost:81"
// public HOST="http://www.wbdqc.cn:81"

}
