import { Injectable } from '@angular/core';
import { Student } from '../models/student.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  public studentList:any;
  public student:any;
  constructor(private firestore: AngularFirestore,private router:Router) {
   firestore
      .collection<any>('SinhVien')
      .valueChanges({ idField: 'idDoc' }).subscribe(data=>{
        this.studentList=data;
      });

  }

  async addStudent(hoTen: any, MSSV: any, email: any) {
    try {
      await this.firestore.collection('SinhVien').add({
        hoTen: hoTen,
        email: email,
        MSSV: MSSV,
        status: false,
      });
      this.router.navigate(['/infopage']);
    } catch (err) {}
  }
  async updateStudent( id: any, MSSV: any,dob: any,email: any, gender: any,hoTen: any, pictureURL: any, status: boolean) {
try{

  await this.firestore.collection('SinhVien').doc(id).update({
    MSSV: MSSV,
    dob: dob,
    email: email,
    gender: gender,
    hoTen: hoTen,
    pictureURL: pictureURL,
    status: status,
  });

}catch(err){
  console.log(err);
}
 
  }

  async deleteStudent(id: any) {
    try {
      this.firestore.collection('SinhVien').doc(id).delete();
      alert('Xóa sinh viên thành công');
    } catch (err) {
      console.log(err);
    }
  }
  public result: any;
  async viewStudentInfo(id: any) {
    try {

      await this.firestore
        .collection('SinhVien')
        .doc(id)
        .get()
        .toPromise()
        .then(async (data) => {
          this.student = await data.data();
        });
      return this.student;
    } catch (err) {
      console.log(err);
    }
  }
}
