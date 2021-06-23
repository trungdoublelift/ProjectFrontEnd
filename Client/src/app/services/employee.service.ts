import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  public employeeList:any;
  constructor(
    private firestore: AngularFirestore,
    private router: Router,
    private http: HttpClient
  ) {
     firestore
      .collection<any>('Employee')
      .valueChanges({ idField: 'idDoc' }).subscribe(data=>{
        this.employeeList=data;
      });
  }
  async deleteEmployee(id: any) {
    await this.http.post('http://localhost:8080/deleteEmployee?id=',{
      id:id,
    }).toPromise();
  }
  async updateEmployee(id: any, name: any, rank: any, salary: any) {
    await this.http.put('http://localhost:8080/updateProfile', {
      id: id,
      name: name,
      rank: rank,
      salary: salary,
    },{responseType:'text'}).toPromise();
  }
  async getEmployeeInfo(id:any){
    await this.http.post("http://localhost:8080/getEmployeeInfo",{
      id:id,
    }).toPromise()
  }
}
