import { Component, OnInit, OnDestroy } from '@angular/core';
import { MessageService } from '../services/message.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit, OnDestroy{
  messages: string[] = []
  subscription!: Subscription;
  constructor(private messageService: MessageService) { }
  
  ngOnInit(): void {
    this.subscription = this.messageService.getMessage().subscribe(
      message => {
        return this.messages.push(message);
      }
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
