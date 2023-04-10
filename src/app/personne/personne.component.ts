import { Component, OnInit } from '@angular/core';
import { PersonneService } from '../services/personne.service';
import { Personne } from '../interfaces/personne';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
export class PersonneComponent implements OnInit {
  public personnes: Array <Personne> = new Array <Personne>();
  constructor(private _personneService: PersonneService) { }

  ngOnInit(): void {
    this._personneService.getPersonnes().subscribe(data =>(this.personnes=data));
    console.log(this .personnes);
  }

  

}
