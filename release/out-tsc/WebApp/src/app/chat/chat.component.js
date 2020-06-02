import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ChatComponent = class ChatComponent {
    constructor(chatService, messageService) {
        this.chatService = chatService;
        this.messageService = messageService;
        this.messageList = [];
    }
    ngOnInit() {
        this.chatService
            .getMessages()
            .subscribe((message) => {
            this.messageService.add('Recieving');
            this.messageList.push(message);
        });
    }
    OnMessageChanged(value) {
    }
    // send message
    OnSend() {
        this.messageService.add('Sending');
        this.chatService.sendMessage(this.message);
        this.message = '';
    }
};
ChatComponent = __decorate([
    Component({
        selector: 'app-chat',
        templateUrl: './chat.component.html',
        styleUrls: ['./chat.component.css']
    })
], ChatComponent);
export { ChatComponent };
//# sourceMappingURL=chat.component.js.map