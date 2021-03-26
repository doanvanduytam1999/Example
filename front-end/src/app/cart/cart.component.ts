import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  items = []
  
  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  })
  constructor(
      private cartService: CartService,
      private formBuilder : FormBuilder,
  ){} 
  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  onSubmit(): void {
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

  upQuantity(id){
    for(var i = 0; i < this.items.length; i++){
      if(this.items[i].id == id){
        this.items[i].quantity++;
        localStorage.setItem("cart", JSON.stringify(this.items));
      }
    }
  }

  downQuantity(id){
    for(var i = 0; i < this.items.length; i++){
      if(this.items[i].id == id ){
        if(this.items[i].quantity > 1){
          this.items[i].quantity--;
        }
        localStorage.setItem("cart", JSON.stringify(this.items));
        break;
      }
    }
  }

  removeItem(id) {
    this.items = JSON.parse(localStorage.getItem("cart"));
    for(var j = 0; j < this.items.length; j++){
      if(id == this.items[j].id){
        this.items.splice(j, 1);
        localStorage.setItem("cart",JSON.stringify(this.items));
        break;
      }
    }
    
  }

}
