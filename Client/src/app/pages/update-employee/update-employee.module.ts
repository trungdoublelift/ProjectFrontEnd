import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateEmployeeRoutingModule } from './update-employee-routing.module';
import { UpdateEmployeeComponent } from './update-employee.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    UpdateEmployeeComponent
  ],
  imports: [
    CommonModule,
    UpdateEmployeeRoutingModule,
    SharedModule,
  ]
})
export class UpdateEmployeeModule { }
