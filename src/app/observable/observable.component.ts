import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  template: `
    <app-observable-detect-changes [observable]="observable"></app-observable-detect-changes>
    <br>
    <app-async-pipe [observable]="observable"></app-async-pipe>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ObservableComponent {

  public observable = new Observable<number>((observer) => {
    let counter = 0;
    const id = setInterval(() => {
      observer.next(++counter);
    }, 1000);
    return () => clearInterval(id);
  });

}
