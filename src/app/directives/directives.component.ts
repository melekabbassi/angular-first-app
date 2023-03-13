import { Component } from '@angular/core';
import { Person } from '../classes/person';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  Grades : number[] = [5, 8, 10, 15 , 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];

  People: Array<Person> = [
    new Person(1,'John', 'Doe', 30),
    new Person(2,'Jane', 'Doe', 25),
    new Person(3,'Jack', 'Doe', 20),
    new Person(4,'Jill', 'Doe', 15),
    new Person(5,'Jenny', 'Doe', 10),
  ];
}
