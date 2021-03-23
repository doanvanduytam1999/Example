import { products } from './../product';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-prodcuct-list',
  templateUrl: './prodcuct-list.component.html',
  styleUrls: ['./prodcuct-list.component.css']
})
export class ProdcuctListComponent {
  products = products
  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
