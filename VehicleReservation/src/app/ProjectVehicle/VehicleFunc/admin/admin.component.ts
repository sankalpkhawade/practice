import { Component, OnInit } from '@angular/core';
import { ServiceAdminService } from '../../Vehicle_Service/Admin_service/service-admin.service';
import { Router } from '@angular/router';
import { IVehicleInfo } from 'src/app/ProjectVehicle/Interface/IVehicleInfo';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private AdminService:ServiceAdminService,private router:Router,) { }
  VehicleItems:Observable<IVehicleInfo[]>;
  vehicleItem:IVehicleInfo;
  ngOnInit() {
    
    this.filteredItems=this.AdminService.getVehicleItems();
    this.VehicleItems=this.filteredItems;
    console.log(this.filteredItems);
  }
  delete(item:IVehicleInfo)
 {
  this.AdminService.deleteVehicle(item.vehicleNo).subscribe(()=>
{
  this.filteredItems=this.AdminService.getVehicleItems();
});
} 
  filteredItems:Observable<IVehicleInfo[]>;
  openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    }
  closeNav() {
      document.getElementById("mySidebar").style.width = "0";
      document.getElementById("main").style.marginLeft = "0";
  }

}
