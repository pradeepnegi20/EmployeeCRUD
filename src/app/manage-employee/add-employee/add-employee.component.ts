import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/model';
import { ApiServiceService } from 'src/app/Service/api-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  Role=['Admin','Editor','Viewer'];
  RegisterUser:  User = new User();
  formValue:FormGroup;
  
  constructor(private formbuilder: FormBuilder,private service:ApiServiceService,private router:Router){
   
    this.formValue= this.formbuilder.group({

      Name: new FormControl('',[ Validators.required,Validators.minLength(2),Validators.pattern('[a-zA-S].*')]),
      
      LastName:new FormControl('', [Validators.required,Validators.minLength(2),Validators.pattern('[a-zA-S].*')]),
      Password: new FormControl('', [Validators.required,Validators.minLength(2)]),
      Email:new FormControl('', [Validators.required,Validators.email]),
      Phone:new FormControl('', [Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern('[0-9]*')]),
      Role:new FormControl('', [Validators.required]),
      JDate:new FormControl('',[ Validators.required]),
      Image:new FormControl(''),
      
      moredata:this.formbuilder.array([])
  
    })
  }
  datePipe: DatePipe = new DatePipe('en-US');
  ngOnInit(): void { 
}
 

get name(){
  return this.formValue.get('Name') as FormControl
}
get lname(){
  return this.formValue.get('LastName') as FormControl
}
get empid(){
  return this.formValue.get('EmpId') as FormControl
}
get password(){
  return this.formValue.get('Password') as FormControl
}
get email(){
  return this.formValue.get('Email') as FormControl
}
get phone(){
  return this.formValue.get('Phone') as FormControl
}
get jdate(){
  return this.formValue.get('JDate') as FormControl
}

get role(){
  return this.formValue.get('Role') as FormControl
}

get moredata(){
  return this.formValue.get('moredata') as FormArray;
}
Reset(){
  this.formValue.reset()
}



newSkill():FormGroup
{
  return this.formbuilder.group({
    FName : new FormControl(''),
    FOccupation:new FormControl(''),
    FAge:new FormControl(''),
    FRelation: new FormControl(''),
    
  })
}
addmore(){
 
  this.moredata.push(this.newSkill());
}


 
removeSkill(i:number) {
  this.moredata.removeAt(i);
}


radiochange(event:any){
  const R= event.target.value;
 // console.log(event.target.value)
  this.formValue.patchValue({
    Role:R
  });
  this.formValue.get('Role')?.updateValueAndValidity();

}
PostData(){
  console.log(this.formValue.value);
  console.log(this.Src)







  this.RegisterUser.Id=Math.floor(Date.now() + Math.random());
  this.RegisterUser.Name=this.formValue.value.Name;
  this.RegisterUser.LastName=this.formValue.value.LastName;
  this.RegisterUser.Email=this.formValue.value.Email.toLowerCase();
  this.RegisterUser.Password=this.formValue.value.Password;
 
 
  
  this.RegisterUser.Phone=this.formValue.value.Phone;
 
  this.RegisterUser.Role=this.formValue.value.Role;
  this.RegisterUser.JDate=this.formValue.value.JDate;
  this.RegisterUser.CreatedDate=this.datePipe.transform(Date.now(), 'yyyy-MM-dd');
  this.RegisterUser.FamilyInfo=this.formValue.value.moredata;
  this.RegisterUser.Image=this.Src;
  
  console.log(this.RegisterUser)
  this.service.postUser(this.RegisterUser).subscribe(res=>{
    console.log(res);
   Swal.fire("Added",'Employees Added Successfully','success')
    this.formValue.reset();
    this.Src=""
    this.router.navigate(['Emp/all-emp'])

  },
  err=>{
   Swal.fire("Not Added",'Please Try Again')
  })
} 
Src:any;
onSelect(e:any){
 
  
  if(e.target.files){
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload=(event:any)=>{
      this.Src=event.target.result
      
    }
    console.log("Path is",this.Src)
  }
}
}
  

