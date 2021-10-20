import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service';

@Injectable({
  providedIn: 'root',
})
export class AuthserviceService {
  constructor(private httpService: HttpService) {}

  gettoken() {
    return !!localStorage.getItem('token');
  }
}
