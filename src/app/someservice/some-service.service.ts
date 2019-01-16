import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SomeServiceService {
  private _counter = 0;
  private _counterObject = new CounterObject();
  private counterSubject = new ReplaySubject<number>(1);
  public counterObservable = this.counterSubject.asObservable();

  public get counter(): number {
    return this._counter;
  }

  public set counter(count: number) {
    this._counter = count;
    this.counterSubject.next(this._counter);
  }

  public get counterObject(): CounterObject {
    return this._counterObject;
    // return Object.assign({}, this._counterObject);
  }

  constructor() {
    this.increaseCounter();
  }

  private increaseCounter() {
    setInterval(() => {
      this.counter = ++this.counter;
      this._counterObject.counter = this.counter;
      }, 1000);
  }
}

export class CounterObject {
  public counter = 0;
}
