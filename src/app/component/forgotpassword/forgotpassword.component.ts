import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/userservice/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss'],
})
export class ForgotpasswordComponent implements OnInit {
  forgotForm: FormGroup;
  subscriptions: Subscription[] = [];
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private snackBar: MatSnackBar
  ) {}

  get f() {
    return this.forgotForm.controls;
  }

  ngOnInit() {
    this.forgotForm = this.formBuilder.group({
      email: ['', Validators.required],
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.forgotForm.invalid) {
      return;
    } else {
      let reqPayload = {
        email: this.forgotForm.value.email,
      };

      console.log(this.forgotForm.value);

      this.userService.forgotPassword(reqPayload).subscribe((res) => {
        this.showSnackbar(res);
      });
    }
  }
  showSnackbar(message: any) {
    this.snackBar.open(message, 'Dismiss');
  }
}
