import { EmployeeService } from './../../services/employee.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.scss']
})
export class EmployeeInfoComponent implements OnInit {
  employeeList:any;
  p:number=1;

  constructor(public employeeServ:EmployeeService,private router:Router) {
   }

  ngOnInit(): void {
   
  }

   deleteEmployee(id:any){
    console.log(id);
     this.employeeServ.deleteEmployee(id);
  }
  async updateButton(id:any){
    this.router.navigate(['/updateEmployee/'+id])

  }
  // async getEmployeeInfo(id:any){
  //   this.employeeInfo=await this.employeeServ.getEmployeeInfo(id)
  //   console.log(this.getEmployeeInfo);

  // }

}
