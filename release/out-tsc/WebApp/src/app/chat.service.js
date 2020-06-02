import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
let ChatService = class ChatService {
    constructor(socket, messageService) {
        this.socket = socket;
        this.messageService = messageService;
        this.getMessages = () => {
            return Observable.create((observer) => {
                this.socket.on('new-message', (message) => {
                    observer.next(message);
                });
            });
        };
    }
    sendMessage(message) {
        this.messageService.add('service sending');
        this.socket.emit('new-message', message);
    }
};
ChatService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ChatService);
export { ChatService };
//# sourceMappingURL=chat.service.js.map