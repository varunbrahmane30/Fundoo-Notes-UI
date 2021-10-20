import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  GetService(url = '', headers: any = null) {
    return this.httpClient.get(url, { headers });
  }

  PostService(url = '', payload = null, headers: any = null) {
    return this.httpClient.post(url, payload, { headers });
  }

  PutService(url = '', payload = null, headers: any = null) {
    return this.httpClient.put(url, payload, { headers });
  }

  DeleteService(url = '', headers: any = null) {
    return this.httpClient.delete(url, { headers });
  }
}
