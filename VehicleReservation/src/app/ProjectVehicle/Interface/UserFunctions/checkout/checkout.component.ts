import { Component, OnInit } from '@angular/core';
import { IbookVehicle } from '../../IBookVehicle';
import { ServiceUserService } from 'src/app/ProjectVehicle/Vehicle_Service/User_service/service-user.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/ProjectVehicle/Vehicle_Service/Auth_sevices/auth.service';
import { IPayment } from '../../IPayment';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit  {
  filteredItems: IbookVehicle[];
  VehicleItems: IbookVehicle[];
  PaymentItems : IPayment[];

  constructor(private userService:ServiceUserService,private router: Router,private authService:AuthService) { }

  ngOnInit() {
    this.userService.getBookings(this.userService.memID).subscribe(result=>this.filteredItems=result as IbookVehicle[]);
    this.VehicleItems=this.filteredItems;
    this.userService.getpaymenttable().subscribe(result=>this.PaymentItems=result as IPayment[]);
  }

}
