import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http:HttpClient) { 

  }

  postUser(data:any){
    return this.http.post<any>("http://localhost:3000/posts",data).pipe(map((res:any)=>{
      return res;
    }))
  }
  getUser(){
    return this.http.get<any>("http://localhost:3000/posts").pipe(map((res:any)=>{
      return res;
    }));
  }

  deleteUser(Id:number){
    return this.http.delete<any>("http://localhost:3000/posts/"+Id).pipe(map((res:any)=>{
      return res;
    }));
  }

  get(id:number){
    return this.http.get<any>("http://localhost:3000/posts?id="+id).pipe(map((res:any)=>{
      return res;
    }));
  }
  temp1:any;
 

  getUserRole(data:any){
    return this.http.get<any>("http://localhost:3000/posts?Email="+data).pipe(map((res:any)=>{
      return res;
    }));
  }
  role:any;
  setrole(){
    this.role=localStorage.getItem('Role');
    
  }

  getrole(){
    //alert(this.role)
    return this.role;
    
  }


  Updatedata(data:any,id:number){
    return this.http.put<any>("http://localhost:3000/posts/"+id,data).pipe(map((res:any)=>{
      return res;
    }))
  }
}
