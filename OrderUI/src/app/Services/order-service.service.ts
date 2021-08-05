import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Order } from '../Models/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  constructor(private http: HttpClient) { }

  baseURL = "http://localhost:3093/User";

  getOrders(userId: Number): Observable<Order[]> {
    let url = this.baseURL + "?userId=" + Number;
    return this.http.get<Order[]>(url);
  }
  
  addOrder(order: Order) {
    return this.http.post<any>(this.baseURL, order);
  }
}
