import { Injectable } from '@angular/core';
import { Card } from '../../../Common/src/card';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CardService {

constructor(private http: HttpClient, private messageService: MessageService) { }

private cardsUrl = '/api/cards';

getCard(id: number): Observable<Card> {

  const getCardUrl = `${this.cardsUrl}/${id}`;
  return this.http.get<Card>(getCardUrl)
  .pipe(
    tap(_ => this.log(`fetched card = ${id}`)),
    catchError(this.handleError<Card>(`getCard id = ${id}`, { url: ''}))
  );
}

getCards(): Observable<Card[]> {

  return this.http.get<Card[]>(this.cardsUrl)
  .pipe(
    tap(_ => this.log('fetched cards')),
    catchError(this.handleError<Card[]>(`getCards`, []))
  );
}

/** Log a HeroService message with the MessageService */
private log(message: string) {
  this.messageService.add(`CardService: ${message}`);
}

/**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

}
