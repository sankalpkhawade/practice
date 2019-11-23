import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IUserInfo } from '../../Interface/IUserInfo';
import { Observable } from 'rxjs/internal/Observable';
import { IbookVehicle } from '../../Interface/IBookVehicle';
import { IPayment } from '../../Interface/IPayment';
import { IVehicleInfo } from '../../Interface/IVehicleInfo';

@Injectable({
  providedIn: 'root'
})
export class ServiceUserService {

  constructor(private http: HttpClient) { }
  user:IUserInfo[];
  memID:string;
  name:string;
  readonly rootURL='http://localhost:6343/api/Registration';
  //readonly root='http://localhost:53070/api/Login';
  bookingURL ="http://localhost:3834/api/Booking";
  getBook ="http://localhost:3834/api/booking/getmembook";
  getbookbyid = "http://localhost:3834/api/booking/getBookings";
  payment = "http://localhost:3834/api/booking/payment";
  updatepaymentstatus="";
  getpaymentstatus="http://localhost:3834/api/booking/getpayment"

  addUser(user:IUserInfo):Observable<IUserInfo>
  {
    {{debugger}}
    return this.http.post<IUserInfo>(this.rootURL,user,
      {headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      });
  }
  getUser(userid:string,pass:string):Observable<IUserInfo>
  {
    {{debugger}}

    return this.http.get<IUserInfo>(this.rootURL+'/'+userid+'/'+pass);
  }
 
   updateStatus(id:string):Observable<IVehicleInfo>
    {{{debugger}}
      return this.http.delete<IVehicleInfo>(this.bookingURL+"/"+id);
    } 

  BookVehicle(item:IbookVehicle):Observable<IbookVehicle>
  {
    {{debugger}}
    return this.http.post<IbookVehicle>(this.bookingURL,item,{
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  getBookings(memid:string):Observable<IbookVehicle>
  {
    {{debugger}}
    return this.http.get<IbookVehicle>(this.getBook+"/"+memid);
  }

  getBookingsById(reservationId:number):Observable<IbookVehicle>
     { {{debugger}}
      return this.http.get<IbookVehicle>(this.getbookbyid+"/"+reservationId);
     
     }

     Makepayment(item:IPayment):Observable<IPayment>
     {
      return this.http.post<IPayment>(this.payment,item,{
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        });
     }

     cancelbooking(id:number):Observable<IbookVehicle[]>
  {
    return this.http.delete<IbookVehicle[]>(this.rootURL+"/"+id);
  }

  updatePaymentStatus(item:number):Observable<any>
  {
    return this.http.put(this.updatepaymentstatus+"/"+item,{
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  getpaymenttable():Observable<IPayment[]>
  {
    {{debugger}}
    return this.http.get<IPayment[]>(this.getpaymentstatus);
  }
}
