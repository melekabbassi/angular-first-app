import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from '../interfaces/users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  
 

constructor(private formBuilder: FormBuilder, private http: HttpClient,private router: Router){}


ngOnInit(): void {
  this.loginForm=this.formBuilder.group({
    email:[''],
    password:['']
   
    });
  }
public bool;boolean;

  login()  {

    this.http.get<Users[]>("http://localhost:3000/users").subscribe(res =>{
      const user=res.some((a:Users) => {
        return a.email===this.loginForm.value.email && a.password===this.loginForm.value.password});
        if(user){
      alert('login Success');
   this.loginForm.reset();
   this.router.navigate(['/personne']);
    } 
    else {alert('user not found')}
   })

  }
}
