import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EditUser, User } from 'src/app/Models/model';
import { ApiServiceService } from 'src/app/Service/api-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent  implements OnInit {
  Role=['Admin','Editor','Viewer'];
  RegisterUser:  User = new User();
  Tshow=false;
  dataShow:any;
  Edituser :EditUser = new User();
Id:any;
data:number=0;
info:any;
EditForm =new FormGroup({
  Name :new FormControl(''),
  LastName:new FormControl(''),
  Age:new FormControl(''),
  Email:new FormControl(''),
  Phone :new FormControl(''),
  Password :new FormControl(''),
  JDate:new FormControl(''),
  Role :new FormControl(''),
 
  Image:new FormControl(''),
  CreatedDate:new FormControl(''),
  FamilyInfo : this.formbuilder.array([]),
Id: new FormControl(''),
  
})

constructor(private router :Router,private route: ActivatedRoute,private service:ApiServiceService,private formbuilder:FormBuilder)
{

      

}
Src:any;
ngOnInit(){
this.service.get(this.route.snapshot.params['id']).subscribe((res)=>{
  console.log(res);
  
  this.EditForm=new  FormGroup({
    
    Name: new FormControl(res[0]['Name']),
    LastName:new FormControl(res[0]['LastName']),
    Age:new FormControl(res[0]['Age']),
    Email:new FormControl(res[0]['Email']),
    Phone :new FormControl(res[0]['Phone']),
    Password :new FormControl(res[0]['Password']),
    JDate:new FormControl(res[0]['JDate']),
    Role :new FormControl(res[0]['Role']),
    Id:new FormControl(res[0]['Id']),
    Image:new FormControl(res[0]['Image']),
    CreatedDate:new FormControl(res[0]['CreatedDate']),
    FamilyInfo: this.formbuilder.array(res[0]['FamilyInfo'])
    
      

  }

  
)

this.Src= this.EditForm.value.Image;
this.Update=this.EditForm.get('FamilyInfo')?.value;

console.log('this is family info',this.Update)

  
  })
  
}
Update:any;
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
 
  this.FamilyInfo.push(this.newSkill());
}


 
removeSkill(i:number) {
  this.FamilyInfo.removeAt(i);
}


get FamilyInfo(){
  return this.EditForm.get('FamilyInfo') as FormArray;
}

UpdateData(){
  console.log(this.EditForm.value)

  this.Edituser.Name = this.EditForm.value.Name;
  this.Edituser.LastName=this.EditForm.value.LastName;
  this.Edituser.FamilyInfo=this.EditForm.value.FamilyInfo;
  this.Edituser.Image=this.Src;
  this.Edituser.Password=this.EditForm.value.Password;
  this.Edituser.Email=this.EditForm.value.Email;
  this.Edituser.Phone=this.EditForm.value.Phone;
  this.Edituser.JDate=this.EditForm.value.JDate;
  this.Edituser.Role=this.EditForm.value.Role;
  this.Edituser.CreatedDate=this.EditForm.value.CreatedDate;
  this.Edituser.Id=this.EditForm.value.Id;

  this.service.Updatedata(this.Edituser,this.route.snapshot.params['id']).subscribe((res)=>{
    Swal.fire('Employee Updated',"employee detail succsessfully updated",'success')
    this.EditForm.reset();
    this.Src=""
    this.router.navigate(['Emp/all-emp'])
  })

}
}













