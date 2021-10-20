import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service';
import { environment } from '../../../environments/environment';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private BACKEND_BASE_URL = environment.BACKEND_BASE_URL;
  token: any;

  constructor(private httpService: HttpService) {}

  getAllUsers() {
    this.token = localStorage.getItem('token');
    console.log(this.token);
    const headers = {
      headers: new HttpHeaders({
        'content-Type': 'application/json',
        Authorization: this.token,
      }),
    };
    return this.httpService.GetService(
      this.BACKEND_BASE_URL + '/user',
      headers
    );
  }

  registerUser(reqData: any) {
    let headers = {
      headers: new HttpHeaders({
        'content-Type': 'application/json',
        Authorization: this.token,
      }),
    };
    return this.httpService.PostService(
      this.BACKEND_BASE_URL + '/user',
      reqData,
      headers
    );
  }

  LoginUser(reqData: any) {
    let headers = {
      headers: new HttpHeaders({
        'content-Type': 'application/json',
      }),
    };
    return this.httpService.PostService(
      this.BACKEND_BASE_URL + '/user/login',
      reqData,
      headers
    );
  }

  forgotPassword(reqData: any) {
    let headers = {
      headers: new HttpHeaders({
        'content-Type': 'application/json',
        Authorization: this.token,
      }),
    };
    return this.httpService.PostService(
      this.BACKEND_BASE_URL + '/user/forgotPassword',
      reqData,
      headers
    );
  }
  resetPassUser(reqData: any, token: any) {
    let headers = {
      headers: new HttpHeaders({
        'content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      }),
    };
    return this.httpService.PutService(
      this.BACKEND_BASE_URL + '/user/resetPassword',
      reqData,
      headers
    );
  }
}
