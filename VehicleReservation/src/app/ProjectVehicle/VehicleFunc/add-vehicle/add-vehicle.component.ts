import { Component, OnInit } from '@angular/core';
import { IVehicleInfo } from '../../Interface/IVehicleInfo';
import { ServiceAdminService } from '../../Vehicle_Service/Admin_service/service-admin.service';
import { AuthService } from '../../Vehicle_Service/Auth_sevices/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {

  Vehicleitem:IVehicleInfo;
 
  userItems:IVehicleInfo[];
  constructor(private addservice:ServiceAdminService,private _authService:AuthService,private router:Router,private route:ActivatedRoute) {
    
   }
   flag:boolean=false;
  
  ngOnInit() {
    this.Vehicleitem={
      vehicleNo:'',
      branch:'',
      vehicleType: '',
      insuranceExpiryDate:null,
      lastServicedDate:null,
      serviceDueDate:null,
      active:null,
      price:null,
      photopath:'' 
    }
  
  }
  addVehicle(newVH:IVehicleInfo):void{
    console.log(newVH);
    {{debugger}}
    this.addservice.AddVehicle(newVH).subscribe(()=> this.check());
  }
 check():void{
    this.flag=true;
   }
  logOut():void
  {
    this._authService.logOut();
    this.router.navigate(['/']);
  }
 
}
