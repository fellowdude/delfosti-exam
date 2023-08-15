import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

const URL_BACKEND = "http://localhost:3030/";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  JWT_TOKEN: string | undefined = localStorage.getItem('jwt')?.toString();
  constructor(private http: HttpClient) {}

  private formatErrors(error: any) {
    console.log(error);
    return throwError(error.error);
  }

  post(
    path: string,
    body: Object = {},
    params: HttpParams = new HttpParams()
  ): Observable<any> {
    const headers = new HttpHeaders()
      .set('Vary', '*')
      .append('Access-Control-Allow-Origin','*')
      .append('Content-type', 'application/json');
    console.log(headers);
    return this.http
      .post(`${URL_BACKEND}${path}`, body, {
        params,
        headers: headers,
      })
      .pipe(catchError(this.formatErrors));
  }

  getLogged(
    path: string,
    params: HttpParams = new HttpParams()
  ): Observable<any> {
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + localStorage.getItem('jwt'))
      .set('Vary', '*')
      .append('Access-Control-Allow-Origin','*')
      .append('Content-type', 'application/json');
    return this.http
      .get(`${URL_BACKEND}${path}`, {
        params,
        headers: headers,
      })
      .pipe(catchError(this.formatErrors));
  }

  postLogged(
    path: string,
    body: Object = {},
    params: HttpParams = new HttpParams()
  ): Observable<any> {
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + localStorage.getItem('jwt'))
      .set('Vary', '*')
      .append('Access-Control-Allow-Origin','*')
      .append('Content-type', 'application/json');
    return this.http
      .post(`${URL_BACKEND}${path}`, body, {
        params,
        headers: headers,
      })
      .pipe(catchError(this.formatErrors));
  }

  putLogged(
    path: string,
    body: Object = {},
    params: HttpParams = new HttpParams()
  ): Observable<any> {
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + localStorage.getItem('jwt'))
      .set('Vary', '*')
      .append('Access-Control-Allow-Origin','*')
      .append('Content-type', 'application/json');
    return this.http
      .put(`${URL_BACKEND}${path}`, body, {
        params,
        headers: headers,
      })
      .pipe(catchError(this.formatErrors));
  }

  deleteLogged(
    path: string,
    params: HttpParams = new HttpParams()
  ): Observable<any> {
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + localStorage.getItem('jwt'))
      .set('Vary', '*')
      .append('Access-Control-Allow-Origin','*')
      .append('Content-type', 'application/json');
    return this.http
      .delete(`${URL_BACKEND}${path}`, {
        params,
        headers: headers,
      })
      .pipe(catchError(this.formatErrors));
  }
}
