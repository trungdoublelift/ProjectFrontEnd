import { Router } from '@angular/router';

import { StudentService } from './../../services/student.service';
import { Component, OnInit, ViewChild, NgModule } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Student } from 'src/app/models/student.model';
import { NgSelectModule, NgOption } from '@ng-select/ng-select';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-infopage',
  templateUrl: './infopage.component.html',
  styleUrls: ['./infopage.component.scss'],
  providers: [StudentService, AuthService],
})
export class InfopageComponent implements OnInit {
   sinhvienList:any;
  data: any;
  sinhvienInfo: any;
  list: any;
  result: any;
  p:any=1;

  constructor(public stuServ: StudentService, private router: Router,private firestore:AngularFirestore) {}

  deleteSV(id: any) {
    this.stuServ.deleteStudent(id);
  }
  ngOnInit(): void {
    this.sinhvienInfo = new Student();
    this.sinhvienList=this.stuServ.studentList
  }
  getStudentID(id: any) {
    console.log(id);
  }
  async updateStudentInfo(id: any) {
    this.router.navigate(['/update/' + id]);
  }
  filter(){
    
    let status =(<HTMLInputElement>document.getElementById("filtertext")).value
    console.log(status);
    if(status==''){
      this.firestore.collection("SinhVien").valueChanges().subscribe((data)=>{
        this.stuServ.studentList=data;
      })
    }else{
      this.firestore.collection<Student>("SinhVien").valueChanges().subscribe((data)=>{
        this.stuServ.studentList=data.filter(res=>{
          return res.hoTen?.toLocaleLowerCase().match(status.toLocaleLowerCase());
        })
      })
    }
  }
  async getStudentInfo(id: any) {
    this.result = await this.stuServ.viewStudentInfo(id);
    this.result.dob = new Date().toLocaleDateString('en-US');
    return (this.sinhvienInfo = new Student(
      this.result.hoTen,
      this.result.MSSV,
      this.result.email,
      this.result.pictureURL,
      this.result.dob,
      this.result.gender,
      this.result.status
    ));
  }
}
