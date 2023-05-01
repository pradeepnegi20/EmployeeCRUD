import { AfterContentInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/Service/api-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-all-emp',
  templateUrl: './all-emp.component.html',
  styleUrls: ['./all-emp.component.css']
})
export class AllEMpComponent implements OnInit, AfterContentInit {
  

  constructor(private router: Router, private service: ApiServiceService) {

  }
  pages: number = 1;
  tempdata: any;
  data: any;
  ngOnInit(): void {

    this.get();


  }
admin:any;
  get() {
    this.service.getUser().subscribe((res: any) => {
      console.log(res)
      this.data = res;
      
    });
   

  }
  Add() {
    this.router.navigate(['Emp/add-emp'])
  }
  Delete(data: any) {
    this.admin=localStorage.getItem('Role')

    if(this.admin=='Admin'){
      Swal.fire({
        title:'Are you want to delete Employee',
        text:'You will not be able to recover this data',
        icon:'warning',
        showCancelButton:true,
        confirmButtonText:'Yes Delete it!',
        cancelButtonText:'No keep it'
      }).then((result)=>{
          if(result.value){
            this.service.deleteUser(data).subscribe((res) => {
            })    
            Swal.fire("Deleted","Employee data deleted","success");
            this.get()
          }
          else if(result.dismiss == Swal.DismissReason.cancel){
              Swal.fire('Cancelled','Not Deleted','error')
          }
      })
     
    }
    else{
      Swal.fire('Warning','You do not have permission to Delete Employee','error')
    }
    
  }
  Edit(data: any) {
    
    this.router.navigate(['Emp/edit', data])
  }
  Logout() {

    Swal.fire({
      title:'Are you want to Logout',
      text:'Logout',
      icon:'warning',
      showCancelButton:true,
      confirmButtonText:'Yes',
      cancelButtonText:'No'
    }).then((result)=>{
        if(result.value){
          localStorage.clear();
          this.router.navigate(['Login'])
        }
        else if(result.dismiss == Swal.DismissReason.cancel){
            Swal.fire('Not Logout',':)','error')
        }
    })
  }

  FirstName:any;
  Search(){
    if(this.FirstName == ''){
      this.get();
    }
    else{
      this.data=this.data.filter((res:any)  =>{
        return res.Name.toLowerCase().match(this.FirstName.toLowerCase());
      })
    }
  }

  ngAfterContentInit(): void {
  }
}
