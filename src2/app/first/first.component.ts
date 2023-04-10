import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  message!: string;
  constructor(private messageService: MessageService) { }
  ngOnInit(): void {
      
  }
  addMessage() {
    this.messageService.sendMessage(this.message);
    this.message = '';
  }
}
