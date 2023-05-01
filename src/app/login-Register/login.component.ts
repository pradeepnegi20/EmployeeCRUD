import { Component, OnInit } from '@angular/core';
import { Login, User } from '../Models/model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from '../Service/api-service.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
Role=['Admin','Editor','Viewer'];
  RegisterUser:  User = new User();
  formValue!:FormGroup;
  LoginForm!:FormGroup;
  LoginUser:Login = new Login();
  constructor(private formbuilder: FormBuilder,private service:ApiServiceService,private router:Router){

  }
  datePipe: DatePipe = new DatePipe('en-US');
ngOnInit(): void {
  
  
  this.LoginForm=this.formbuilder.group({
    Email:new FormControl ('',[Validators.required,Validators.email]),
    Password:new FormControl ('',[Validators.required])
  })


}


get email(){
  return this.LoginForm.get('Email') as FormControl
}

get password(){
  return this.LoginForm.get('Email') as FormControl
}


storeRole:any;
data:any;
Login(){
  this.LoginUser.Email=this.LoginForm.value.Email.toLowerCase();
  this.LoginUser.Password=this.LoginForm.value.Password;
  console.log(this.LoginUser.Email)
 this.service.getUser().subscribe(res=>{
  const userss = res.find((a:any)=>{
    return a.Email ===this.LoginUser.Email && a.Password ===this.LoginUser.Password
  });
  if(userss){
    localStorage.setItem('User',this.LoginUser.Email);
    this.service.getUserRole(this.LoginUser.Email).subscribe((res)=>{
      console.log(res)
      this.storeRole=res[0]['Role']
      localStorage.setItem('Role',this.storeRole)
      this.service.setrole();
    });
    Swal.fire("Login Successful")
    
    this.router.navigate(['Emp/all-emp'])
    
  }
  else{
    Swal.fire("Incorrect Password or Email",'Check Password or Email','error')
  }
  
 },
 err=>{
  Swal.fire("Server is down","Server is down","error")
 });
  
  
}
GetRole:any;
role:any;
setUserRole(){
  this.role=localStorage.getItem('User');
  this.service.getUserRole(this.role).subscribe((res)=>{
  localStorage.setItem('Role',res.Role);
  })

}









}
