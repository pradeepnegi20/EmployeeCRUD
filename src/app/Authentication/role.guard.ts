import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private router:Router){


  }
  canActivate(){
   let AdminRole=localStorage.getItem('Role');
   if(AdminRole=='Admin'){
    return true;
   }
   Swal.fire('Not Authorized'," you don't have permission to Add Employee",'warning')
   //alert("You don't have permission to Add Employee")
   
   return false;
  }

  
}
