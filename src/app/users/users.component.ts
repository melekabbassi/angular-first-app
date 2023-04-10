import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserapiService } from '../services/userapi.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  userform:FormGroup|any;
  data:any;
  isedit:boolean=false;
  username:any;
  usernameShow:any;

 
  constructor(private userapiService:UserapiService) { }

  ngOnInit(): void {
   this.userform = new FormGroup({
    'fullname':new FormControl(),
    'email':new FormControl(),
    'password':new FormControl(),
    'profile':new FormControl()
   })
   this.getdata();

   alert(this.userform.profile);
  }
  update(user:any){
    this.userform.id = user.id;
   // this.usernameShow= this.userform.value.name;
    this.userapiService.update(this.userform.id, this.userform.value).subscribe(res=>{
      alert('Success');
      this.getdata();
    })

  }
  sendata(userform:FormGroup){
    this.data.push(this.userform.value);
    this.username= this.userform.value.name;
    this.userapiService.postdata(this.userform.value).subscribe(res=>{
      alert('Success');
      this.getdata();
    })
  }

  getdata(){
    this.userapiService.getdata().subscribe(res=>{
      this.data = res;
    })
  }
  
  addmodel(){
    this.isedit=false;
    this.userform.reset();
  }

  edit(i:any, user:any){
    this.isedit=true;
    this.userform.id= user.id;
    this.userform.setValue({
      fullname:user.fullname,
      email:user.email,
      password:user.password,
      profile:user.profile
    })
  }

  delete(index:number, user:any){
    this.userform.id= user.id;
    this.userapiService.delete(this.userform.id, user).subscribe(res=>{
      this.data.splice(index, 1);
    })
  }
  reset(){
    this.userform.reset();
  }
    
}
