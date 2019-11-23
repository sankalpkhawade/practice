import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './ProjectVehicle/VehicleFunc/homepage/homepage.component';
import { AdminComponent } from './ProjectVehicle/VehicleFunc/admin/admin.component';
import { LoginComponent } from './ProjectVehicle/Sites/login/login.component';

import { RegistrationComponent } from './ProjectVehicle/Sites/registration/registration.component';
import { UserComponent } from './ProjectVehicle/Interface/UserFunctions/user/user.component';
import { AddVehicleComponent } from './ProjectVehicle/VehicleFunc/add-vehicle/add-vehicle.component';
import { EditComponent } from './ProjectVehicle/VehicleFunc/edit/edit.component';
import { RequestComponent } from './ProjectVehicle/VehicleFunc/request/request.component';
import { CheckoutComponent } from './ProjectVehicle/Interface/UserFunctions/checkout/checkout.component';
import { PaymentComponent } from './ProjectVehicle/Interface/UserFunctions/payment/payment.component';
import { UserLoginComponent } from './ProjectVehicle/Sites/user-login/user-login.component';


const routes: Routes = [
  {
    path:'Home',
    component:HomepageComponent
  },
  {
    path:'Admin',
    component:AdminComponent
  },
  {
    path:'Login',
    component:LoginComponent
  },
  {
    path:'AddVehicle',
    component:AddVehicleComponent
  },

  {
    path:'UserLogin',
    component : UserLoginComponent
  },

  {
    path:'Edit/:vehicleNo',
    component:EditComponent
  },
  {
    path:'User',
    component:UserComponent
  },
  {
    path:'SignUp',
    component:RegistrationComponent
  },

  {
    path:'Request',
    component:RequestComponent
  },

  {
    path:'Checkout',
    component:CheckoutComponent
  },

  
  {
    path:'Payment/:reservationId',
    component:PaymentComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
