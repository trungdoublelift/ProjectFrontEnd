import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, Form } from '@angular/forms';
import { StudentService } from 'src/app/services/student.service';
import { isThrowStatement } from 'typescript';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.scss'],
})
export class AddstudentComponent implements OnInit {
  addStudentForm: any;

  constructor(private student: StudentService) {
    this.addStudentForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      MSSV: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  ngOnInit(): void {}
  async addStudent() {
    let name, MSSV, email;
    if (this.addStudentForm.valid) {
      name = this.addStudentForm.controls.name.value;
      MSSV = this.addStudentForm.controls.name.MSSV;
      email = this.addStudentForm.controls.name.email;
      await this.student.addStudent(name, MSSV, email);
    } else {
      alert("Vui lòng nhập đủ thông tin")
    }
  }
}
