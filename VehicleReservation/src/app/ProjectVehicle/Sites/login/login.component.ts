import { Component, OnInit } from '@angular/core';
import { IUserInfo } from '../../Interface/IUserInfo';
import { ServiceUserService } from '../../Vehicle_Service/User_service/service-user.service';
import { Router } from '@angular/router';
import { AuthService } from '../../Vehicle_Service/Auth_sevices/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  flag:boolean=false;
  user:IUserInfo;
  uu: string;
  pp: string;
  constructor(private userService:ServiceUserService,private router: Router,private authService:AuthService) { }
  msg:string;
 
  ngOnInit() {
  }
  onSubmit(username:string,password:string){
    this.uu=username;
    this.pp=password;
    {{debugger}}
    this.userService.getUser(username,password).subscribe(result=>{this.user=result as IUserInfo;
      {{debugger}}
     
    //  else if(this.user.memberId==this.uu && this.user.pass==this.pp)
    //  {
    //   this.flag=true;
    //  }
    //console.log(this.user.roles);
    if(this.user==null)
    {
    //this.flag=true;
    this.msg="Invalid Username and Password";
    }

    else if (this.user.roles=="Admin" && this.user!=null)
    {
      this.authService.login();
      this.router.navigate(['/Admin']);
    }

    else {

    }

     
      // else{
      // this.msg="Please enter Valid Admin CredentiLs";
      // this.flag=true;
      // this.userService.memID=this.user.memberId;
      // console.log(this.userService.memID);
      //this.router.navigate(['/User']);
      
    })
  }}
  