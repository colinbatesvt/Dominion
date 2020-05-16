import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  private status: string;
  private statusSubject: Subject<string>;

  constructor() {
    status = '';
    this.statusSubject = new Subject<string>();
  }

  public onStatusChanged = () => {
    return this.statusSubject.asObservable();
  }

  public setStatus(newStatus: string) {
    this.status = newStatus;
    this.statusSubject.next(this.status);
  }

}
