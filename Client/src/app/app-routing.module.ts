import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) }, { path: 'infopage', loadChildren: () => import('./pages/infopage/infopage.module').then(m => m.InfopageModule) }, { path: 'add', loadChildren: () => import('./pages/addstudent/addstudent.module').then(m => m.AddstudentModule) }, { path: 'update/:id', loadChildren: () => import('./pages/update/update.module').then(m => m.UpdateModule) }, { path: 'updateEmployee/:id', loadChildren: () => import('./pages/update-employee/update-employee.module').then(m => m.UpdateEmployeeModule) }, { path: 'employeeInfo', loadChildren: () => import('./pages/employee-info/employee-info.module').then(m => m.EmployeeInfoModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
