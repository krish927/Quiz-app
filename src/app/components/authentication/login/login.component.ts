import { ApiService } from './../../api.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  validateForm!: FormGroup;
  
  constructor(private fb: FormBuilder, private router: Router, private api: ApiService) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  submitForm(){
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
      this.api.registeration(true);
      localStorage.setItem('token', this.validateForm.value.userName);
      localStorage.setItem('userName', this.validateForm.value.userName);
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
}
