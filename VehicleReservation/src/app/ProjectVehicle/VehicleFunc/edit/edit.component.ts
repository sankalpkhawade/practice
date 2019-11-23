import { Component, OnInit } from '@angular/core';
import { ServiceAdminService } from '../../Vehicle_Service/Admin_service/service-admin.service';
import { AuthService } from '../../Vehicle_Service/Auth_sevices/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IVehicleInfo } from '../../Interface/IVehicleInfo';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  newValue:IVehicleInfo;
  vehicleItems:IVehicleInfo;
  constructor(private editService:ServiceAdminService,private authservice:AuthService,private router:Router,private route:ActivatedRoute) {
   
   }
  flag:boolean=false;
  id:string;
  //mindate = moment(new Date()).format('YYYY-MM-DD');
  ngOnInit() {
    this.newValue={
      vehicleNo:null,
      branch:null,
      vehicleType: null,
      insuranceExpiryDate:null,
      lastServicedDate:null,
      serviceDueDate:null,
      active:null,
      price:null,
      photopath:null
    }
   this.id = this.route.snapshot.paramMap.get('vehicleNo');
   {{debugger}} 
   this.editService.getVehicleById(this.id)
     .subscribe((result:IVehicleInfo)=>{
       this.newValue=result
     })
        
  }
  upVehicle(newValue:IVehicleInfo):void{
    {{debugger}}
    console.log(newValue);
    this.editService.updateMenuItem(newValue).subscribe(()=> this.check());
    this.flag=true;
  }
  check():void{
    this.flag=true;
  }
  logOut():void
  {
    this.authservice.logOut();
    this.router.navigate(['/']);
  }

}
 
 
