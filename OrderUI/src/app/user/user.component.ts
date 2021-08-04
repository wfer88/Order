import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/Services/user-service.service'
import { User, UserAddress } from "src/app/Models/User";
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  

  constructor(private userService: UserServiceService) { }

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

    this.userdata.userAddresses =[];
    this.userdata.userAddresses.push(this.userAdress);
    this.userService.addUser(this.userdata)
      .subscribe(data => {
        console.log(data)
        this.getUser();
      })      
  }

}
