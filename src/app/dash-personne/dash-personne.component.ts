import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonneService } from '../services/personne.service';
import { Personne } from '../interfaces/personne';


@Component({
  selector: 'app-dash-personne',
  templateUrl: './dash-personne.component.html',
  styleUrls: ['./dash-personne.component.css']
})
export class DashPersonneComponent  implements OnInit {
    
  public personnes: Array <Personne> = new Array <Personne>();

  res:Array <Personne> = new Array <Personne>();

 
  constructor(private _personneService: PersonneService, private formBuilder: FormBuilder, private http: HttpClient,private router: Router) { }
  public personneForm!: FormGroup;

  ngOnInit(): void {
    this.personneForm=this.formBuilder.group({
      id:[''],
      nom:[''],
      prenon:[''],
      photo:['']
     
      });
    this._personneService.getPersonnes().subscribe(data =>(this.personnes=data));
   // console.log(this .personnes);
  }

  _personneForm!: boolean;
  isNewLaptop!: boolean;
  newLaptop: any = {};
  editpersonneForm!: boolean;
  editedpersonne: any={};
  showAddpersonne!:boolean;

  showEditpersonneForm(p: Personne) {
    if (!p) {
      this._personneForm = false;
      return;
    }
    this.editpersonneForm = true;
    this.editedpersonne = p;
  }


  ajoutpersonne(){
    this.personneForm.reset();
    this.showAddpersonne=true;
    this.editedpersonne=false;
  }


  addpersonne() {
    this.http.post<Personne>("http://localhost:3000/personne", this.personneForm.value).subscribe(res =>{
      this._personneService.getPersonnes().subscribe(data =>(this.personnes=data)); 
      this.personneForm.reset();
      console.log(res);
  })
  }

  editpersonne(id: number, p: Personne) {
    console.log(p);
      this.http.put<Personne>("http://localhost:3000/personne"+'/'+id, p).subscribe(res =>{
        console.log(res);
        this.personneForm.reset();
      this._personneService.getPersonnes().subscribe(data =>(this.personnes=data)); 
       })
      }
  deletepersonne(id: any) {
      this.http.delete<Personne>("http://localhost:3000/personne"+'/'+id).subscribe(res =>{
      alert("Supprimer");
      console.log(res);
      this._personneService.getPersonnes().subscribe(data =>(this.personnes=data)); 
     })
    }




  }
