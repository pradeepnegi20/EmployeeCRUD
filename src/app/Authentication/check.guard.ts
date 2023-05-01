import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from './auth-service.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class CheckGuard implements CanActivate {
constructor(private auth: AuthServiceService,private router: Router){

}

  canActivate(){
    if(this.auth.IsLoggedIn()){
      Swal.fire('Already Login','No need to Login Again','warning')
      this.router.navigate(['Emp/all-emp'])
      return false;
    }
   
   
    return true;
  }
  
}
