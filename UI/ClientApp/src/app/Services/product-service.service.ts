import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Product } from '../Models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http: HttpClient) { }


  baseURL = "http://localhost:3093/Product";

  getProucts(): Observable<Product[]> {
    let url = this.baseURL + "?userId=" + Number;
    return this.http.get<Product[]>(url);
  }
}
