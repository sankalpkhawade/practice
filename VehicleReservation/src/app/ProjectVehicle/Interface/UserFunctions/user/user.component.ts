import { Component, OnInit, TemplateRef } from '@angular/core';
import { ModalModule, BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { IVehicleInfo } from '../../IVehicleInfo';
import { Observable } from 'rxjs';
import { ServiceAdminService } from 'src/app/ProjectVehicle/Vehicle_Service/Admin_service/service-admin.service';
import { Router } from '@angular/router';
import { IUserInfo } from '../../IUserInfo';
import { IbookVehicle } from '../../IBookVehicle';
import { ServiceUserService } from 'src/app/ProjectVehicle/Vehicle_Service/User_service/service-user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  VehicleItems:IVehicleInfo[];
  item1:IbookVehicle={};
  vehicleItem:IVehicleInfo;
  filteredItems:IVehicleInfo[];
  member : string;
  days:number;
  amount:number=0;
  flag:boolean=false;
  name:string;
  filteredItem: Observable<IVehicleInfo[]>;
  msg: string;
  ngOnInit() {
    this.name=this.userservie.name;
    this.AdminService.getVehicleItems().subscribe(result=>this.filteredItems=result as IVehicleInfo[]);
    this.VehicleItems=this.filteredItems;
    console.log(this.filteredItems);
  }
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService ,private AdminService:ServiceAdminService,private router:Router,private userservie:ServiceUserService) {}
 
  openModal(template: TemplateRef<any>,temp:IVehicleInfo) {
    {{debugger}}
    console.log(temp)
    this.vehicleItem=temp;
    this.item1.vehicleNo =temp.vehicleNo;
    this.item1.amount =this.amount;
    console.log(this.item1)
    this.modalRef = this.modalService.show(template);
    
  }
  bookingconfirm(item1:IbookVehicle){
    {{debugger}}
    if(this.vehicleItem.active==false){
    item1.amount=this.vehicleItem.price*item1.NoOfDaysReserved
    item1.memberId = this.userservie.memID;
    console.log(item1.memberId)
     this.userservie.updateStatus(this.item1.vehicleNo).subscribe(result=>{

            this.filteredItem=this.AdminService.getVehicleItems();
          }); 
{{debugger}}
    this.userservie.BookVehicle(item1).subscribe(()=> this.check());
    }
    else
    {
      this.msg = "The Vehicle has already been booked. Please try booking some other Vehicle."
    }
  }

  check():void{
    this.flag=true;
   }

   openmore(template:TemplateRef<any>,temp:IVehicleInfo)
{
  this.vehicleItem=temp;
  this.modalRef = this.modalService.show(template);
}
}