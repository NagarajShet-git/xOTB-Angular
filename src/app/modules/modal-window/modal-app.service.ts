import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalAppService {

  constructor() { }

  public modalButtonAction$: Subject<object> = new Subject();
  
  public setModalButtonAction(value: object) {
    this.modalButtonAction$.next(value);
  }
  
}
