import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
let CardService = class CardService {
    constructor(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.cardsUrl = '/api/cards';
    }
    getCard(id) {
        const getCardUrl = `${this.cardsUrl}/${id}`;
        return this.http.get(getCardUrl)
            .pipe(tap(_ => this.log(`fetched card = ${id}`)), catchError(this.handleError(`getCard id = ${id}`, { url: '' })));
    }
    getCards() {
        return this.http.get(this.cardsUrl)
            .pipe(tap(_ => this.log('fetched cards')), catchError(this.handleError(`getCards`, [])));
    }
    /** Log a HeroService message with the MessageService */
    log(message) {
        this.messageService.add(`CardService: ${message}`);
    }
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    handleError(operation = 'operation', result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return of(result);
        };
    }
};
CardService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], CardService);
export { CardService };
//# sourceMappingURL=card.service.js.map