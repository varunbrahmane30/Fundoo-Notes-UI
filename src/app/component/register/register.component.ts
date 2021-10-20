import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { UserService } from 'src/app/service/userservice/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerform: FormGroup;
  showPassword: boolean = false;
  submitted = false;
  subscriptions: Subscription[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private snackBar: MatSnackBar
  ) {}

  get f() {
    return this.registerform.controls;
  }

  ngOnInit() {
    this.registerform = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirm: ['', Validators.required],
    });
  }
  ngSubmit() {
    this.submitted = true;

    if (this.registerform.invalid) {
      return;
    } else {
      let reqPayload = {
        firstName: this.registerform.value.firstName,
        lastName: this.registerform.value.lastName,
        email: this.registerform.value.email,
        password: this.registerform.value.password,
      };

      console.log(this.registerform.value);

      this.userService.registerUser(reqPayload).subscribe((res) => {
        this.showSnackbar(res);
      });
    }
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  showSnackbar(message: any) {
    this.snackBar.open(message, 'Dismiss');
  }
}
