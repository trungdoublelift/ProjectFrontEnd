import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddstudentRoutingModule } from './addstudent-routing.module';
import { AddstudentComponent } from './addstudent.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    AddstudentComponent
  ],
  imports: [
    CommonModule,
    AddstudentRoutingModule,
    SharedModule,
    
  ]
})
export class AddstudentModule { }
