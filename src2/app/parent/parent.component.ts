import { Component, OnInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  result: number = 0;
  sum: number = 0;
  num: number = 0;
  children = ['Child1', 'Child2', 'Child3']

  constructor(){}
  ngOnInit(): void {
  }

  computeAvg(grade: number) {
    this.sum += grade
    this.num++
    this.result = this.sum / this.num
  }
}
