import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from './auth-service.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth:AuthServiceService,private router:Router){

  }
  canActivate(){
    if(this.auth.IsLoggedIn()){
      
      return true;
    }
    Swal.fire('Login First','You are not logged in','warning')
    this.router.navigate(['Login']);
    return false;
   
  }
  
}
