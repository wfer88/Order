import { Component, OnInit } from '@angular/core';
import { OrderServiceService } from 'src/app/Services/order-service.service'
import { Order } from "src/app/Models/Order";
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private orderService: OrderServiceService) { }

  ngOnInit(): void {
  }
  userid: number = 1;
  
  myorder: Order = {} as Order; 
  orderdata: Order[] = {} as Order[];
 
  getOrders()
  {
      this.orderService.getOrders(this.userid).subscribe(data => {console.log(data)
        this.orderdata=data;
      })    
  }

  addOrder() {
    this.orderService.addOrder(this.myorder)
      .subscribe(data => {
        console.log(data)
      })      
  }
}
