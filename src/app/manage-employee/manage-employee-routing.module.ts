import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { AllEMpComponent } from './all-emp/all-emp.component';
import { RoleGuard } from '../Authentication/role.guard';
import { ERoleGuard } from '../Authentication/erole.guard';
import { AuthGuard } from '../Authentication/auth.guard';
console.log("its a manage employee")
const routes: Routes = [
  
  {
    path:'all-emp',component:AllEMpComponent,canActivate:[AuthGuard]
  },
{
    path:'add-emp',component:AddEmployeeComponent,canActivate:[RoleGuard]
},
{
  path:'edit/:id',component:EditEmployeeComponent,canActivate:[ERoleGuard]
}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageEmployeeRoutingModule { }
