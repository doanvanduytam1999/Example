import { products } from './product';
import { Product } from './models/product';
import { Injectable } from '@angular/core';
import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Observable } from 'rxjs';

const apiUrl= "http://localhost:3000/phone"

@Injectable({
  providedIn: 'root'
})
export class ProductService {

    constructor( private http: HttpClient) {}


    getProducts(): Observable<Product[]>{
        return this.http.get<Product[]>(apiUrl);
    }
    getProductById(id: string): Observable<Product>{
        return this.http.get<Product>(`http://localhost:3000/phone/${id}`);
    }


}
