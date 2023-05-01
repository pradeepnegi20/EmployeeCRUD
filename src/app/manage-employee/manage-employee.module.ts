import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageEmployeeRoutingModule } from './manage-employee-routing.module';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AllEMpComponent } from './all-emp/all-emp.component';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AddEmployeeComponent,
    EditEmployeeComponent,
    AllEMpComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ManageEmployeeRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule
    
  ]
})
export class ManageEmployeeModule { }
