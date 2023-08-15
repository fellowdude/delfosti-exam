import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private api: ApiService) { }

  getAll(): Observable<any> {
    return this.api.getLogged('orders');
  }

  getAllById(id: string): Observable<any> {
    return this.api.getLogged('orders/'+id);
  }

  getAllByOrderNumber(order_number: string): Observable<any> {
    return this.api.getLogged('orders/number/'+order_number);
  }
}
