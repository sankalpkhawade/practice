import { Component, OnInit } from '@angular/core';
import { ServiceUserService } from 'src/app/ProjectVehicle/Vehicle_Service/User_service/service-user.service';
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from 'src/app/ProjectVehicle/Vehicle_Service/Auth_sevices/auth.service';
import { IbookVehicle } from '../../IBookVehicle';
import { IPayment } from '../../IPayment';
import { IPayvalidation } from '../../IPayvalidation';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  filteredItems: IbookVehicle[];
  VehicleItems: IbookVehicle[];
  id : number;
  newValue:IbookVehicle;
  flag:boolean=false;
  newPay:IPayment={
    reservationId:null,
    paymentMode: null,
    amount:null

  }
  pay: IPayvalidation;
  constructor(private userService:ServiceUserService,private router: Router,private authService:AuthService,private route:ActivatedRoute) { }

  ngOnInit() {
   this.newValue={
    amount:null,
    reservationId:null,
   }
   this.pay={
    fname:'',
    email:'',
    adr:'',
    city:'',
    state:'',
    zip:null,
    cname:'',
    ccnum:null,
    expmonth:'',
    cvv:null

   }

    this.id = +this.route.snapshot.paramMap.get('reservationId');
    this.userService.getBookingsById(this.id)
      .subscribe((result:IbookVehicle)=>{
        this.newValue=result
      })
     
  }

  payment()
  {
   this.newPay.amount=this.newValue.amount;
   this.newPay.reservationId=this.newValue.reservationId;
   console.log(this.newPay.paymentMode);
   this.userService.Makepayment(this.newPay).subscribe(()=> this.check());
   this.userService.updatePaymentStatus(this.newPay.reservationId).subscribe();
  }

  check():void{
    this.flag=true;
   }
}


