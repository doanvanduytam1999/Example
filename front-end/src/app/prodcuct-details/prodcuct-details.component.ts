import { ProductService } from './../product.service';
import { Product } from './../models/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-prodcuct-details',
  templateUrl: './prodcuct-details.component.html',
  styleUrls: ['./prodcuct-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private productService: ProductService
  ) { }

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = routeParams.get('productId');
    
    // Find the product that correspond with the id provided in route.
    this.productService.getProductById(productIdFromRoute).subscribe((result)=>{
      this.product = result;
    });
  }

  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}

