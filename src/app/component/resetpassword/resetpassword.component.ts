import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { UserService } from 'src/app/service/userservice/user.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss'],
})
export class ResetpasswordComponent implements OnInit {
  resetForm: FormGroup;
  showPassword: boolean = false;
  submitted = false;
  token: any;
  subscriptions: Subscription[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {}

  get f() {
    return this.resetForm.controls;
  }

  ngOnInit() {
    this.token = this.route.snapshot.paramMap.get('token');
    console.log(this.token);
    this.resetForm = this.formBuilder.group({
      password: ['', Validators.required],
      confirm: ['', Validators.required],
    });
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
  showSnackbar(message: any) {
    this.snackBar.open(message, 'Dismiss');
  }

  onSubmit() {
    this.submitted = true;

    if (this.resetForm.invalid) {
      return;
    } else {
      let reqPayload = {
        password: this.resetForm.value.password,
        confirmPassword: this.resetForm.value.confirmPassword,
      };
      console.log(this.resetForm.value);

      this.route.paramMap.subscribe((params) => {
        this.token = params.get('token');
      });

      localStorage.setItem('token', this.token);

      this.userService
        .resetPassUser(reqPayload, this.token)
        .subscribe((res) => {
          this.showSnackbar(res);
        });
    }

    // console.log(this.resetForm.value);
    // const subscription = this.userService
    //   .resetpassUser(this.resetForm.value, this.token)
    //   .pipe(first())
    //   .subscribe((res) => {
    //     this.showSnackbar(res.message);
    //   });
    // this.subscriptions.push(subscription);
  }
}
