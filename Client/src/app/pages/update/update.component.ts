import { Student } from './../../models/student.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
})
export class UpdateComponent implements OnInit {
  id: any;
  result: any;
  currentStudent: any;
  updateForm: any;

  constructor(
    private Router: Router,
    private ActivateRouter: ActivatedRoute,
    public studentSer: StudentService
  ) {
    this.id = this.ActivateRouter.snapshot.params.id;
  }

  ngOnInit(): void {
    this.updateForm = new FormGroup({
      name: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      MSSV: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      dob: new FormControl('', Validators.required),
      pictureURL: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
    });

    this.getCurrentInfo();
  }
  async onSubmit() {
    if (this.updateForm.valid) {
      let status, gender;
      await this.updateForm.patchValue({
        name: this.updateForm.value.name,
        gender: this.updateForm.value.gender,
        MSSV: this.updateForm.value.MSSV,
        email: this.updateForm.value.email,
        dob: this.updateForm.value.dob,
        pictureURL: this.updateForm.value.pictureURL,
        status: this.updateForm.value.status,
      });
      gender = JSON.parse(this.updateForm.value.gender);
      status = JSON.parse(this.updateForm.value.status);
      console.log(status, gender);
      this.studentSer.updateStudent(
        this.id,
        this.updateForm.value.MSSV,
        this.updateForm.value.dob,
        this.updateForm.value.email,
        gender,
        this.updateForm.value.name,
        this.updateForm.value.pictureURL,
        status
      );
      alert('Cập nhật thành công');
      this.Router.navigate(['/infopage']);
    } else {
      alert('Vui lòng nhập đủ thông tin');
    }
  }
  async getCurrentInfo() {
    await this.studentSer.viewStudentInfo(this.id);
    this.currentStudent = await this.studentSer.student;
    this.updateForm.patchValue({
      name: this.currentStudent.hoTen,
      gender: this.currentStudent.gender,
      MSSV: this.currentStudent.MSSV,
      email: this.currentStudent.email,
      dob: this.currentStudent.dob,
      pictureURL: this.currentStudent.pictureURL,
      status: this.currentStudent.status,
    });
  }
}
