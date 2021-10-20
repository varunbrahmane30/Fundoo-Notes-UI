import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from '../httpservice/http.service';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  token: any;
  private BACKEND_BASE_URL = environment.BACKEND_BASE_URL;
  constructor(private httpService: HttpService) {
    this.token = localStorage.getItem('token');
    console.log(this.token);
  }

  createnoteservice(reqData: any) {
    console.log(this.token);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.token,
    });
    console.log(headers);
    return this.httpService.PostService(
      this.BACKEND_BASE_URL + '/notes',
      reqData,
      headers
    );
  }

  GetAllBinNotes() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.token}`,
    });
    return this.httpService.GetService(
      this.BACKEND_BASE_URL + '/notes/bined',
      headers
    );
  }
  GetAllArchivedNotes() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.token}`,
    });
    return this.httpService.GetService(
      this.BACKEND_BASE_URL + '/notes/archived',
      headers
    );
  }
  getAllNotes() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.token}`,
    });
    return this.httpService.GetService(
      this.BACKEND_BASE_URL + '/notes',
      headers
    );
  }

  UpdateNoteService(reqData: any) {
    console.log(reqData);
    console.log(this.token);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.token,
    });
    console.log(headers);
    return this.httpService.PutService(
      this.BACKEND_BASE_URL + '/notes/' + reqData.id,
      reqData,
      headers
    );
  }

  TrashNoteService(data: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.token}`,
    });
    return this.httpService.PutService(
      this.BACKEND_BASE_URL + '/notes/' + data.id + '/Trash/',
      data,
      headers
    );
  }

  setColor(reqData: any) {
    // console.log(reqData);
    // console.log(this.token);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.token,
    });
    console.log(headers);
    return this.httpService.PutService(
      this.BACKEND_BASE_URL + '/notes/' + reqData.id + '/color/',
      reqData,
      headers
    );
  }

  ArchiveNoteService(data: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.token}`,
    });
    return this.httpService.PutService(
      this.BACKEND_BASE_URL + '/notes/' + data.id + '/Archive/',
      data,
      headers
    );
  }

  DeleteNoteForeverService(data: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.token}`,
    });
    return this.httpService.DeleteService(
      this.BACKEND_BASE_URL + '/notes/' + data.id,
      headers
    );
  }
}
