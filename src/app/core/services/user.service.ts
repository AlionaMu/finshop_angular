import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { apiRoot } from 'src/environments/environment';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {

  public constructor(
    public http: HttpClient
  ) {}

  private handleError(error: HttpErrorResponse) {
    return throwError(
      'Something bad happened; please try again later.');
  }

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
    }, options)
    .pipe(
      catchError(this.handleError)
    );;
  }
}
