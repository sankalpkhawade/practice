import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  isLoggedIn = false;
    
  constructor(private _router : Router, private _authService :AuthService){
  }

  canActivate(route: ActivatedRouteSnapshot): boolean{        
      this.isLoggedIn = this._authService.loggedIn;
      console.log("isLoggedIn: " + this.isLoggedIn);
      if(this.isLoggedIn){
          return true;
      }
      else{
          this._router.navigate(['Login']);
          return false;
      }        
  }

}
