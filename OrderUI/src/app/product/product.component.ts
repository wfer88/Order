import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/Services/product-service.service'
import { Product } from "src/app/Models/Product";
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductServiceService) { }

  ngOnInit(): void {
  }

  productdata: Product[] = {} as Product[];
 
  getProducts()
  {
      this.productService.getProucts().subscribe(data => {console.log(data)
        this.productdata=data;
      })    
  }

}
