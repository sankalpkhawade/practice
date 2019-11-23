import { Component, OnInit } from '@angular/core';
import { IUserInfo } from '../../Interface/IUserInfo';
import { ServiceAdminService } from '../../Vehicle_Service/Admin_service/service-admin.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  constructor(private AdminService:ServiceAdminService,private router:Router,) {}

  VehicleItems:Observable<IUserInfo[]>;
  vehicleItem:IUserInfo;
  filteredItems:Observable<IUserInfo[]>;
  ngOnInit() {

    this.filteredItems=this.AdminService.getUserDetail();
    console.log(this.filteredItems);
  }

  
Accept(item:IUserInfo){
  this.AdminService.approveUser(item.memberId).subscribe(()=>
  {
    this.filteredItems=this.AdminService.getUserDetail();
  });
}
   RejectUser(item:IUserInfo){
     this.AdminService.rejectUser(item.memberId).subscribe(()=>
    {
       this.filteredItems=this.AdminService.getUserDetail();
     });

}
}
