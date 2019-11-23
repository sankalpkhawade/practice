import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { IVehicleInfo } from 'src/app/ProjectVehicle/Interface/IVehicleInfo'
import { Observable } from 'rxjs';
import { IUserInfo } from '../../Interface/IUserInfo';
@Injectable({
  providedIn: 'root'
})
export class ServiceAdminService {

  constructor(private http: HttpClient) { }
  public vehicleItem:IVehicleInfo[];
  public vehicleItemTemp:Observable<IVehicleInfo[]>;
  searchKey:string;
  readonly rootURL='http://localhost:1423/api/admin'
  readonly rootedit='http://localhost:1423/api/admin/upd'
  readonly approve='http://localhost:1423/api/admin/approve'
  readonly userdetails='http://localhost:6343/api/Registration'
  readonly rejectuser='http://localhost:1423/api/UserRequest'
  getVehicleItems():Observable<IVehicleInfo[]>
    {          
      return this.http.get<IVehicleInfo[]>(this.rootURL);  
    }


    getUserDetail():Observable<IUserInfo[]>
    {          
      return this.http.get<IUserInfo[]>(this.userdetails);  
    }


     getVehicleById(vehicleNo:string):Observable<IVehicleInfo>
     { {{debugger}}
      return this.http.get<IVehicleInfo>(this.rootURL+"/"+vehicleNo);
     
     }
  
  getVehicleSearch(search:string):Observable<IVehicleInfo[]>
    {
      return this.http.get<IVehicleInfo[]>(''+"/"+search);
    }
    
  AddVehicle(item:IVehicleInfo):Observable<IVehicleInfo>
  {{{debugger}}
    return this.http.post<IVehicleInfo>(this.rootURL,item,{
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }
  
  updateMenuItem(item:IVehicleInfo):Observable<any>
  {
    return this.http.put(this.rootedit+'/'+item.vehicleNo,item,{
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  });
  
  }

  deleteVehicle(id:string):Observable<IVehicleInfo>
  {
    return this.http.delete<IVehicleInfo>(this.rootURL+"/"+id);
  }

  approveUser(id:string):Observable<any>
  {
    return this.http.put(this.approve+"/"+id,{
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  rejectUser(id:string):Observable<IUserInfo>
  {
    return this.http.delete<IUserInfo>(this.rejectuser+"/"+id);
  }
}
