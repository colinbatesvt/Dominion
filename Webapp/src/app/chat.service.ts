import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private socket: Socket, private messageService: MessageService) {   }

  public sendMessage(message) {
    this.messageService.add('service sending');
    this.socket.emit('new-message', message);
}

  public getMessages = () => {
    return Observable.create((observer) => {
            this.socket.on('new-message', (message) => {
                observer.next(message);
            });
    });
}
}
