import { Component } from '@angular/core';
import { Person } from '../classes/person';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  // Array of Grades between 0 and 20 randomly generated
  Grades: number[] = [5, 10, 15, 20, 0, 5, 10, 15, 20, 0, 5, 10, 15, 20, 0, 5, 10, 15, 20, 0];

  People: Array<Person> = [
    new Person(1,'John', 'Doe', 30),
    new Person(2,'Jane', 'Doe', 25),
    new Person(3,'Jack', 'Doe', 20),
    new Person(4,'Jill', 'Doe', 15),
    new Person(5,'Jenny', 'Doe', 10),
  ];
}
