import { HttpClient } from '@angular/common/http';
import { EmployeeService } from './../../services/employee.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent implements OnInit {
  updateForm: any;
  id:any;
  currentEmployee:any;
  constructor(   private Router: Router,
    private ActivateRouter: ActivatedRoute,private employeeServ:EmployeeService,private http:HttpClient) { 
      this.id=this.ActivateRouter.snapshot.params.id;
    }

  ngOnInit(): void {
    this.updateForm = new FormGroup({
      name: new FormControl('', Validators.required),
      rank: new FormControl('', Validators.required),
      salary: new FormControl('', Validators.required),
    });
    this.getEmployeeInfo(this.id);
  }
  async onSubmit() {
    if (this.updateForm.valid) {
      await this.updateForm.patchValue({
        name: this.updateForm.value.name,
        rank: this.updateForm.value.rank,
        salary: this.updateForm.value.salary,

      });
      await this.employeeServ.updateEmployee(
        this.id,
        this.updateForm.value.name,
        this.updateForm.value.rank,
        this.updateForm.value.salary,
      );
      
      alert('Cập nhật thành công');
      this.Router.navigate(['/employeeInfo']);
    } else {
      console.log(this.updateForm.valid);
      alert('Vui lòng nhập đủ thông tin');
    }
  }
  async getEmployeeInfo(id:any){
      this.currentEmployee=await this.http.post("http://localhost:8080/getEmployeeInfo/",{
      id:id,
    })
    return this.currentEmployee;

  }
  async deleteEmployee(id:any){
    this.employeeServ.deleteEmployee(id);
  }
  // async getCurrentInfo() {
  //   await this.studentSer.viewStudentInfo(this.id);
  //   this.currentStudent = await this.studentSer.student;
  //   // console.log(this.currentStudent.gender.toString());
  //   this.updateForm.patchValue({
  //     name: this.currentStudent.hoTen,
  //     gender: this.currentStudent.gender,
  //     MSSV: this.currentStudent.MSSV,
  //     email: this.currentStudent.email,
  //     dob: this.currentStudent.dob,
  //     pictureURL: this.currentStudent.pictureURL,
  //     status: this.currentStudent.status,
  //   });
  // }

}
