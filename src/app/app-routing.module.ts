import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login-Register/login.component';
import { AuthServiceService } from './Authentication/auth-service.service';
import { AuthGuard } from './Authentication/auth.guard';
import { CheckGuard } from './Authentication/check.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';




const routes: Routes = [
 {
  path:'',redirectTo:'Login',pathMatch:'full'
 },
 {
  path:'Login',component:LoginComponent,canActivate:[CheckGuard]
 },
  {
    path:'Emp',loadChildren:()=>import('./manage-employee/manage-employee.module').then(mod=>mod.ManageEmployeeModule)
  },
  

  {
    path:'test',loadChildren:()=>import('./tesst/tesst.module').then(m=>m.TesstModule)
  },
  {
    path:'**',component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
