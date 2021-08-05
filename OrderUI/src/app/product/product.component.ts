import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductServiceService } from 'src/app/Services/product-service.service';
import { Product } from "src/app/Models/Product";
import { CartService } from 'src/app/Services/cart.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductServiceService,private CartService: CartService) {
    this.productService.getProucts().subscribe(data => {console.log(data)
      this.productdata=data;
    })  
   }

  ngOnInit(): void {
  }

  productdata: Product[] = {} as Product[];
  cartProductdata: Product[] = {} as Product[];
  

  @Output() nameEmitter = new EventEmitter < Product[] > ();  
  messageText = "";
  addToCart(product: Product) {
     
    this.CartService.addToCart(product);
    this.messageText=''+product.title+ ' has been added to the cart!';
  }
  

}
