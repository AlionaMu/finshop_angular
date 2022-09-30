import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiRoot } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PostService {

  public constructor(
    public http: HttpClient
  ) {}

  public postData(
    name: string,
    phone: string,
    company: string,
  ): any {

    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    const options = { headers: headers };
    return this.http.post<any>(`${apiRoot}/v1/promoform`, {
      name,
      phone,
      company
    }, options);
  }
}
