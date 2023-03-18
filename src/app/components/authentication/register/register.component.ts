import { Router } from '@angular/router';
import { ApiService } from './../../api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { NzFormTooltipIcon } from 'ng-zorro-antd/form';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  validateForm!: FormGroup;


  constructor(private fb: FormBuilder, private api: ApiService, private router: Router) {}

  submitForm(): void {
    if (this.validateForm.valid) {
        console.log('submit', this.validateForm.value);
        this.api.registeration(true);
        localStorage.setItem('token', this.validateForm.value.email);
        localStorage.setItem('userName', this.validateForm.value.email);
        this.router.navigate(['/quiz-board']);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.validateForm.controls['checkPassword'].updateValueAndValidity());
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls['password'].value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  getCaptcha(e: MouseEvent): void {
    console.log(e);
    
    e.preventDefault();
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
      phoneNumberPrefix: ['+86'],
      phoneNumber: [null, [Validators.required]],
      captcha: [null, [Validators.required]],
      agree: [false]
    });
  }

  contactEnter(e:any){
    // console.log(e);
    if((e.keyCode>95 &&e.keyCode<106) || (e.keyCode>46 &&e.keyCode<58) || (e.keyCode==8 || e.keyCode==9 || e.keyCode==13)){
    // DO NOHING 
    
  }
  else{
    e.preventDefault();
  }
}
}
