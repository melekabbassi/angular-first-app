import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private subject = new Subject<string>();

  constructor() { }

  sendMessage(message: string) {
    this.subject.next(message);
  }
  getMessage() {
    return this.subject;
  }
}
