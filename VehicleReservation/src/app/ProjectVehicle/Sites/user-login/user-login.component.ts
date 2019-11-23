import { Component, OnInit } from '@angular/core';
import { ServiceUserService } from '../../Vehicle_Service/User_service/service-user.service';
import { IUserInfo } from '../../Interface/IUserInfo';
import { Router } from '@angular/router';
import { AuthService } from '../../Vehicle_Service/Auth_sevices/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  flag:boolean=false;
  user:IUserInfo;
  name:IUserInfo;
  constructor(private userService:ServiceUserService,private router: Router,private authService:AuthService) { }
  msg:string;
 
  ngOnInit() {
  }
  onSubmit(username:string,password:string){
    this.userService.getUser(username,password).subscribe(result=>{this.user=result as IUserInfo;
      {{debugger}}
      if(this.user==null)
    {
    //this.flag=true;
    this.msg="Invalid Username and Password";
    }
      else if(this.user.roles=="User" && this.user.approval==true){
      this.userService.memID=this.user.memberId;
      this.userService.name=this.user.firstName;
      this.authService.login();
      this.router.navigate(['/User']);
      }
      else{
      this.msg="Please enter Valid  Credentials";
   
      // console.log(this.userService.memID)
      } 
    })
  }}