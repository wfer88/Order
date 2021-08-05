import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/Services/user-service.service'
import { User, UserAddress } from "src/app/Models/User";
import { Order, OrderDetail } from "src/app/Models/Order";
import { Product} from "src/app/Models/Product";
import { CartService } from 'src/app/Services/cart.service';
import { OrderServiceService } from 'src/app/Services/order-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  

  constructor(private userService: UserServiceService, private CartService: CartService,
    private OrderService: OrderServiceService,private router: Router)
  { }

  ngOnInit(): void {
  }
  
  userid: number = 1;
  userdata: User = {} as User;
  userAdress: UserAddress = {} as UserAddress;

  getUser()
  {
      this.userService.getUser(this.userid).subscribe(data => {console.log(data)
        this.userdata=data;
      })    
  }

  adduser() {

    this.userdata.userId = this.userAdress.userId = this.userAdress.userAddressId = 0;
    this.userAdress.addressType=Number(this.userAdress.addressType);
    this.userdata.userAddresses =[];
    this.userdata.userAddresses.push(this.userAdress);
    ;
      this.userService.addUser(this.userdata)
      .subscribe(data => {
       this.userid = data.body?.userid;
        //console.log( data.body);
      })
    this.saveOrder(this.userid);
    
  
  }

  saveOrder(userId: number)
  {
  
    let orderdata: Order = {} as Order;
    let OrderDetails: OrderDetail = {} as OrderDetail;
    orderdata.orderDetails = [];
    orderdata.userID = userId;
    let items = this.CartService.getItems();

            if (items.length > 0) {
              for (let j = 0; j < items.length; j++) {
                OrderDetails.productID = items[j].productID;
                OrderDetails.quantity = items[j].quantity;
                orderdata.orderDetails.push(OrderDetails);
              }}
    this.OrderService.addOrder(orderdata).subscribe(data => {
       console.log( data.body);
    });
    
    this.router.navigate(['/order']);
    this.CartService.clearCart();
    
  }

}
