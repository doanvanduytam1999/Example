import { products } from './product';
import { Injectable } from '@angular/core';
import { HttpClient, JsonpClientBackend } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];

  constructor(
    private http: HttpClient
  ) { }

  addToCart(product) {
    if (JSON.parse(localStorage.getItem("cart")) != null) {
      this.items = JSON.parse(localStorage.getItem("cart"));
    } else {
      this.items = [];
    }

    var exist = false;
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].id == product.id) {
        this.items[i].quantity++;
        exist = true;
        break;
      }
    }
    if (!exist) {
      this.items.push({
        id: product.id,
        name: product.name,
        price: product.price,
        description: product.description,
        image: product.image,
        quantity: 1
      });
    }
    localStorage.setItem("cart", JSON.stringify(this.items));


  }

  getItems() {
    this.items = JSON.parse(localStorage.getItem("cart"));
    return this.items;
  }

  clearCart() {
    this.items = [];
    localStorage.setItem("cart", JSON.stringify(this.items));
    return this.items;
  }

 

  getShippingPrices() {
    return this.http.get<{ type: string, price: number }[]>('/assets/shipping.json');
  }
}
