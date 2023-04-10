import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {
  @Input() name!: string;
  @Output() message = new EventEmitter<number>();
  grade!: number;
  buttonStatus: boolean = false;
  constructor(){}
  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  send(){
    this.message.emit(this.grade);
    this.buttonStatus = true;
  }
}
