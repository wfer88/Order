import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from "src/app/Models/Product";
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private CartService: CartService) { }
  cartProductdata: Product[] = {} as Product[];
  @Output() nameEmitter = new EventEmitter < Product[] > ();  
  ngOnInit(): void {
  }
  items = this.CartService.getItems();
  total = this.CartService.getTotal();
 
  removeFromCart(id: number) {
    this.CartService.removeFromCart(id);
    this.items = this.CartService.getItems();
    this.calcToatal();
  }
  calcToatal() {
    this.total = this.CartService.getTotal();
  }
  isValidLink() {
    
    return  this.total>0?true:false;
  }
}
