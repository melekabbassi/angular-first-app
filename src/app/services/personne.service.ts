import { Injectable } from '@angular/core';
import { Personne } from '../interfaces/personne';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PersonneService {
 //private _apiUrl: string = `${environment.apiUrl}/personne`;
 private _apiUrl: string = 'http://localhost:3000/personne';
  constructor(private http: HttpClient) {}

  getPersonnes():Observable<Personne[]> {
    return this.http.get<Personne[]>(this._apiUrl);
  }

  addPersonne(u: Personne):Observable<Personne> {
    return this.http.post<Personne>(this._apiUrl, u);
  }

  deletePersonne(id: number):Observable<Personne> {
    return this.http.delete<Personne>(this._apiUrl+id);
  }

  updatePersonne(id: number,u: Personne ):Observable<Personne> {
    return this.http.put<Personne>(this._apiUrl+id,u);
  }
}
