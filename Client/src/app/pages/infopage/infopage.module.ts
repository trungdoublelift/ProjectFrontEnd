import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { InfopageRoutingModule } from './infopage-routing.module';
import { InfopageComponent } from './infopage.component';
import { SharedModule } from '../../shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    InfopageComponent
  ],
  imports: [
    CommonModule,
    InfopageRoutingModule,
    NgSelectModule,
    SharedModule,
    NgxPaginationModule,
  ]
})
export class InfopageModule { }
