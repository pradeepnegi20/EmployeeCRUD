import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ERoleGuard implements CanActivate {
  constructor(private router:Router){

  }
  canActivate(){
    let AdminRole=localStorage.getItem('Role');
    if(AdminRole=='Admin' || AdminRole=='Editor'){
     return true;
    }
    Swal.fire('Not Authorized',"don't have permission to Acces this Path",'warning')
    //alert("You don't have permission to Edit Employee")
    
    return false;
   }
  
}
