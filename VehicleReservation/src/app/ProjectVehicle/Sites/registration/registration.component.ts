import { Component, OnInit } from '@angular/core';
import { IUserInfo } from '../../Interface/IUserInfo';
import { ServiceUserService } from '../../Vehicle_Service/User_service/service-user.service';
import { AuthService } from '../../Vehicle_Service/Auth_sevices/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  userNew:IUserInfo;
  temp:IUserInfo;
  userItems:IUserInfo[];
  constructor(private userservice:ServiceUserService,private _authService:AuthService,private router:Router,private route:ActivatedRoute) {
    // this.menuItems=foodService.getMenuItems();
   }
   flag:boolean=false;
  
  ngOnInit() {
    this.userNew={
    memberId:'',
    firstName:'',
    lastName :'',

    age:null,
    gender:'',
    contactNo:null,
    email:'',
    pass:'',
    branch:'',
    roles:'',
    approval: false
    }
   // const mid = +this.route.snapshot.paramMap.get('id');
    //this.menuItem=this.foodservice.getMenuItemById(mid);
   // this.userservice.getMenuItemById(mid)
  //  .subscribe(result => {
       // this.userItem = result as IUserInfo
  //  })
  }
  add(newuser:IUserInfo):void{
    console.log(newuser);
    {{debugger}}
    this.userservice.addUser(newuser).subscribe(()=> this.check());
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
