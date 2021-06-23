import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeInfoRoutingModule } from './employee-info-routing.module';
import { EmployeeInfoComponent } from './employee-info.component';
import { SharedModule } from '../../shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    EmployeeInfoComponent
  ],
  imports: [
    CommonModule,
    EmployeeInfoRoutingModule,
    SharedModule,
    NgSelectModule,
    NgxPaginationModule
  ]
})
export class EmployeeInfoModule { }
