import { Router } from '@angular/router';
import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  register: boolean = true;
  login: boolean = false;
  logout: boolean = false;
  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.api.registerationEvent.subscribe((data: any)=>{
      if(data == true){
        this.register = false;
        this.login = false;
        this.logout = true;
      }
    })
    if((!!localStorage.getItem('token') != null || !!localStorage.getItem('token') != undefined) && (!!localStorage.getItem('user') != null || !!localStorage.getItem('user') !=undefined)){
      this.register = false;
      this.login = false;
      this.logout = true;
    }else{
      this.register = true;
      this.login = false;
      this.logout = false;
    }
  }

  registerBtn(){
    this.api.registerBtnClick('msg');
    this.register = false;
    this.login = true;
    this.logout = false;
  }
  loginBtn(){
    this.api.loginBtnClick('msg');
    this.login = false;
    this.register = true;
    this.logout = false;
  }
  logoutBtn(){
    this.register = true;
    this.login = false;
    this.logout = false;
    localStorage.clear()
    this.router.navigate(['/auth']);
  }

}
