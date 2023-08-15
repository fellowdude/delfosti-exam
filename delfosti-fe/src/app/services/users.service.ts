import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private api: ApiService) { }

  getAll(): Observable<any> {
    return this.api.getLogged('users');
  }

  getAllByRole(role: string): Observable<any> {
    return this.api.getLogged('users/'+role);
  }
}
