import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/service/userservice/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  login: FormGroup;
  showPassword: boolean = false;
  submitted = false;
  subscriptions: Subscription[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  get f() {
    return this.login.controls;
  }

  ngOnInit() {
    this.login = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log(this.login.value);
    this.submitted = true;

    if (this.login.invalid) {
      return;
    } else {
      let reqPayload = {
        email: this.login.value.email,
        password: this.login.value.password,
      };

      this.userService.LoginUser(reqPayload).subscribe((res: any) => {
        this.showSnackbar(res.message);
        console.log({ res });
        if (res.token) {
          localStorage.setItem('token', res.token);
          localStorage.setItem('firstName', res.data.firstName);
          localStorage.setItem('lastName', res.data.lastName);
          localStorage.setItem('email', res.data.email);
          this.router.navigateByUrl('/dashboard/note');
        }
      });
    }
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  showSnackbar(message: string) {
    this.snackBar.open(message, 'Dismiss');
  }
}

// const subscription = this.userService.LoginUser(this.login.value).pipe(first()).subscribe(res => {
//   if(res.success) {
//     localStorage.setItem("authToken",res.token)
//   }
//   this.showSnackbar(res.message);
// });
// this.subscriptions.push(subscription);
