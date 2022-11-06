import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedVarService {
  private routerInfo: BehaviorSubject<boolean>;

  constructor() {
    this.routerInfo = new BehaviorSubject<boolean>(false);
  }

  getValue(): Observable<boolean> {
    return this.routerInfo.asObservable();
  }
  getValue2(): Observable<boolean> {
    return this.routerInfo;
  }
  setValue(newValue): void {
    this.routerInfo.next(newValue);
  }
}
