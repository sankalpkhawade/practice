import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { UserComponent } from './ProjectVehicle/Interface/UserFunctions/user/user.component';
import { AdminComponent } from './ProjectVehicle/VehicleFunc/admin/admin.component';
import { HomepageComponent } from './ProjectVehicle/VehicleFunc/homepage/homepage.component';
import { LoginComponent } from './ProjectVehicle/Sites/login/login.component';
import { RegistrationComponent } from './ProjectVehicle/Sites/registration/registration.component';
import { UserLoginComponent } from './ProjectVehicle/Sites/user-login/user-login.component';
import { EditComponent } from './ProjectVehicle/VehicleFunc/edit/edit.component';
import { AddVehicleComponent } from './ProjectVehicle/VehicleFunc/add-vehicle/add-vehicle.component';
import { RequestComponent } from './ProjectVehicle/VehicleFunc/request/request.component';
import { PaymentComponent } from './ProjectVehicle/Interface/UserFunctions/payment/payment.component';
import { CheckoutComponent } from './ProjectVehicle/Interface/UserFunctions/checkout/checkout.component';
import { ModalModule } from 'ngx-bootstrap/modal';



@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserComponent,
    HomepageComponent,
    LoginComponent,
    RegistrationComponent,
    UserLoginComponent,
    EditComponent,
    AddVehicleComponent,
    RequestComponent,
    PaymentComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
