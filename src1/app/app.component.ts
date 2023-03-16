import { Component } from '@angular/core';
import { Person } from './classes/person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-first-app';
  Grades : number[] = [5, 8, 10, 15 , 20];
  person: Person = new Person(1,'John', 'Doe', 30);
  People: Array<Person> = [
    new Person(1,'John', 'Doe', 30),
    new Person(2,'Jane', 'Doe', 25),
    new Person(3,'Jack', 'Doe', 20),
    new Person(4,'Jill', 'Doe', 15),
    new Person(5,'Jenny', 'Doe', 10),
  ];
}
