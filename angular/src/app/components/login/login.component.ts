import { Component, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Chart, registerables } from 'chart.js';
import { SlideshowComponent } from '../slideshow/slideshow.component';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { CONSTANTS } from '../../services/constant';
Chart.register(...registerables);
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,SlideshowComponent, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
 
  loginForm: FormGroup;
    signupForm: FormGroup;
    isLoginMode = true; 



  constructor(public router: Router, public userService: UserService){
    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.pattern("^([a-zA-Z0-9_\\-\\.\\+]+)@([a-zA-Z0-9_\\-\\.]+)\\.(\\b(?!web\\b)[a-zA-Z]{2,5})$")]),
      password: new FormControl('',[Validators.required, Validators.minLength(2)])
    });

    this.signupForm = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.pattern("^([a-zA-Z0-9_\\-\\.\\+]+)@([a-zA-Z0-9_\\-\\.]+)\\.(\\b(?!web\\b)[a-zA-Z]{2,5})$")]),
      password: new FormControl('',[Validators.required, Validators.minLength(2)]),
      confirmPassword: new FormControl('',[Validators.required, Validators.minLength(2)])
    });
  }

  ngOnInit(): void {
      
  }


  /** Redirecting users based on user credentials */
  onSubmit(){
    if(this.loginForm.valid){
      this.userService.login(this.loginForm.value).subscribe((res)=>{
        if(res.data){
          localStorage.setItem('loginData', JSON.stringify(res.data))
          localStorage.setItem('token', res.data.accessToken)

          this.router.navigate(["/dashboard"], {replaceUrl: true});
        } else {
          alert(CONSTANTS.INVALID_CREDENTIALS);
        }

      },(err)=>{
        alert(err.message);
        
      })
    } else {
      return;
    }
  }

  onSignUp() {
    if (this.signupForm.valid) {
      this.userService.signup(this.loginForm.value).subscribe((res)=>{
        if(res.data && res.data.length){
          alert(CONSTANTS.SUCCESS)
        } else {
          alert(CONSTANTS.ALREADY_EXISTS);
        }

      },(err)=>{
        alert(err.message);
        
      })
    }
  }

  toggleMode() {
    this.isLoginMode = !this.isLoginMode;
  }
}
