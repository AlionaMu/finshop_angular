import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiRoot } from 'src/environments/environment';
import { UserData } from '../../promo/models/user.model';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class PostService {

  public constructor(
    public http: HttpClient,
  ) {}

  public postData(
    name: string,
    phone: string,
    company: string,
  ): Observable<UserData> {
    return this.http.post<UserData>(`${apiRoot}`, {
      name,
      phone,
      company
    });
  }
}
