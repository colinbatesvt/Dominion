import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  public handle: string;
  public message: string;
  messageList: string[] = [];

  constructor(private chatService: ChatService, private messageService: MessageService) { }

  ngOnInit() {
    this.chatService
      .getMessages()
      .subscribe((message: string) => {
        this.messageService.add('Recieving');
        this.messageList.push(message);
      });
  }

  OnMessageChanged(value: string) {

  }

  // send message
  OnSend() {
    this.messageService.add('Sending');
    this.chatService.sendMessage(this.message);
    this.message = '';
  }

  // listen for events
}
