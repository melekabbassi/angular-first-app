import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserapiService {
  apiurl="http://localhost:3000/Users"; 

  constructor(private _http:HttpClient){}
  
  getdata(){
    return this._http.get(this.apiurl);
  }
  
  postdata(user:any){
    return this._http.post(this.apiurl, user)
  }
  
  update(id:any, user:any){
    return this._http.put(`${this.apiurl}/${id}`, user)
  }
  
  delete(id:any, user:any){
    return this._http.delete(`${this.apiurl}/${id}`, user)
  }
}
