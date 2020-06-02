import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
let StatusService = class StatusService {
    constructor() {
        this.onStatusChanged = () => {
            return this.statusSubject.asObservable();
        };
        status = '';
        this.statusSubject = new Subject();
    }
    setStatus(newStatus) {
        this.status = newStatus;
        this.statusSubject.next(this.status);
    }
    getStatus() {
        return this.status;
    }
    updateStatus(game) {
        let status = '';
        const currentPlayer = game.players[game.currentPlayer];
        if (currentPlayer !== undefined) {
            status += currentPlayer.name + '\'s turn. ';
            status += currentPlayer.state + ' phase';
            this.setStatus(status);
        }
        else {
            this.setStatus('setting up game');
        }
    }
};
StatusService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], StatusService);
export { StatusService };
//# sourceMappingURL=status.service.js.map