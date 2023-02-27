import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor() { }


  @Output() registerBtnClickEvent = new EventEmitter<any>();
  registerBtnClick(msg: any){
    this.registerBtnClickEvent.emit(msg);
  }

  @Output() loginBtnEvent = new EventEmitter<any>();
  loginBtnClick(msg: any){
    this.loginBtnEvent.emit(msg);
  }

  @Output() registerationEvent = new EventEmitter<any>();
  registeration(msg: any){
    this.registerationEvent.emit(msg);
  }

  

  isLoggedIn(){
    return !!localStorage.getItem('token');
  }


}
