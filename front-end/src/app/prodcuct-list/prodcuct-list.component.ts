import { ProductService } from './../product.service';
import { Product } from './../models/product';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-prodcuct-list',
  templateUrl: './prodcuct-list.component.html',
  styleUrls: ['./prodcuct-list.component.css']
})
export class ProdcuctListComponent implements OnInit{
  
  products: Product[] = []

  constructor(private productService : ProductService){}
  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  ngOnInit() {
    this.productService.getProducts().subscribe((products)=>{
      this.products = products;
    })
  }
}
