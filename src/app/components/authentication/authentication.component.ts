import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {
  login: boolean = true;
  register: boolean = false;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.loginBtnEvent.subscribe((data)=>{
        console.log(data, "login");
        this.login = true;
        this.register = false;
    })

    this.api.registerBtnClickEvent.subscribe((data)=>{
      console.log(data,"register");
      this.register = true;
      this.login = false;
    })

    this.api.registerationEvent.subscribe((data)=>{
      console.log(data,"registeration");
      this.register = false;
      this.login = true;
    })
  }

  

}
