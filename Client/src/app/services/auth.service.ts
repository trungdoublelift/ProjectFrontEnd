import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Routes } from '@angular/router';
import firebase from 'firebase';
import { User } from '../models/user.model';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public userInfo: Observable<any>;

  constructor(
    private auth: AngularFireAuth,
    private router: Router,
    private http: HttpClient
  ) {
    this.userInfo = this.auth.authState;
  }
  async login() {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    try {
      await this.auth.signInWithPopup(googleAuthProvider);
      alert('Login successfully');
      this.router.navigate(['/infopage']);
    } catch (err) {
      alert('Login fail');
    }
  }
  async logout() {
    this.auth.signOut();
    if (!this.auth.currentUser) {
      alert('logout successfully');
    }
    this.router.navigate(['']);
  }
  async signUp(email: any, password: any) {
    try {
      await this.auth.createUserWithEmailAndPassword(email, password);
      alert('Đăng ký thành công');
    } catch (err) {
      alert('Không thể tạo tài khoản');
    }
  }
  async signInWithEmail(email: any, password: any) {
    try {
      await this.auth.signInWithEmailAndPassword(email, password);
      alert('Đăng nhập thành công');
      this.router.navigate(['/infopage']);
    } catch (err) {
      alert('Đăng nhập thất bại');
    }
  }
  async addEmployee(id:any,name:any) {

    await this.http.post("http://localhost:8080/addEmployee",{
      id: id,
      name: name,
      rank:"",
      salary:"",
    }).toPromise();
    console.log("alo")
  }
}
