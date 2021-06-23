import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfopageComponent } from './infopage.component';

const routes: Routes = [{ path: '', component: InfopageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfopageRoutingModule { }
