import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  btnClicked: any;
  username: any;
  password: any;
  constructor(private router: Router) {}

  loginForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern(/^[a-zA-Z]+$/),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });
  get getName() {
    return this.loginForm.controls['name'];
  }
  get getPassword() {
    return this.loginForm.controls['password'];
  }

  login(e: any) {
    this.btnClicked = true;
    if (this.loginForm.status == 'VALID') {
      if (this.loginForm.value.name == 'admin' && this.loginForm.value.password == 'admin123') {
        this.router.navigate(['dashboard']);
      } else {
        this.router.navigate(['home']);
      }
    }
  }
}
