import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from '../interfaces/users';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  //user: Users;
  //users: Array <Users> = new Array <Users>();
  public signupForm!: FormGroup;
  
//constructor(private userService: UsersService, private router: Router){}
  

constructor(private formBuilder: FormBuilder, private http: HttpClient,private router: Router){}


ngOnInit(): void {
  this.signupForm=this.formBuilder.group({
    fullname:[''],
    email:[''],
    password:['']
   
    });
  }

  signUp(){

    this.http.post<Users>("http://localhost:3000/users", this.signupForm.value).subscribe(res =>{
    alert("OK");
   this.signupForm.reset();
   this.router.navigate(['/login']);
})

  }
}