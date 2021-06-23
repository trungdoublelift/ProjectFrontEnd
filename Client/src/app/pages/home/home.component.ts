import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loginForm:any;
  signUpForm:any;
  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.loginForm=new FormGroup({
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
    })
    this.signUpForm=new FormGroup({
      signUpemail: new FormControl('',[Validators.required]),
      signUppassword: new FormControl('',[Validators.required]),
    })
  }
  async loginWithGoogle(){
    await this.auth.login();
  }
  async signUp(){
    let email,password;

   email=this.signUpForm.value.signUpemail;
    password=this.signUpForm.value.signUppassword
    console.log(email,password)
      await this.auth.signUp(email,password)

   
  }
  async signIn(){
    let email,password;
    try{
      email=this.loginForm.value.email;
      password=this.loginForm.value.password
      await this.auth.signInWithEmail(email,password)
    
    }catch(err){

    }


  }

}
