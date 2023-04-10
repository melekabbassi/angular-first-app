import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from '../../interfaces/users';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  public loginForm !: FormGroup;
  
 

constructor(private formBuilder: FormBuilder, private http: HttpClient,private router: Router){}
erreur=true;


ngOnInit(): void {
  this.loginForm=this.formBuilder.group({
    email:[''],
    password:['']
   
    });
  }

isAuthenticated()  {

    this.http.get<Users[]>("http://localhost:3000/users").subscribe((res) =>{
      const user=res.some((a:Users) => {
        if( a.email===this.loginForm.value.email && a.password===this.loginForm.value.password) {
          localStorage.setItem('isConnected', 'true');
          if (this.loginForm.value.profile="user") {this.router.navigateByUrl('/produits');}
          if (this.loginForm.value.profile="admin") {this.router.navigateByUrl('/user');}
          } else {  this.erreur = false;  }
          
          }
          )
    })
}
 
}
