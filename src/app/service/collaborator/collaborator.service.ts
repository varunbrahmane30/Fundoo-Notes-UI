import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from '../httpservice/http.service';

@Injectable({
  providedIn: 'root',
})
export class CollaboratorService {
  token: any;
  private BACKEND_BASE_URL = environment.BACKEND_BASE_URL;
  constructor(private httpService: HttpService) {
    this.token = localStorage.getItem('token');
  }

  RemoveCollaboratorService(data: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.token,
    });

    return this.httpService.DeleteService(
      this.BACKEND_BASE_URL + '/' + data.id + '/collaborator',
      headers
    );
  }
  AddCollaborotorService(data: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.token,
    });

    return this.httpService.PostService(
      this.BACKEND_BASE_URL + '/' + data.id + '/collaborator',
      data,
      headers
    );
  }

  getAllCollaborators(data: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.token,
    });
    console.log(headers);
    return this.httpService.GetService(
      this.BACKEND_BASE_URL + '/' + data.id + '/collaborator',
      headers
    );
  }
}
