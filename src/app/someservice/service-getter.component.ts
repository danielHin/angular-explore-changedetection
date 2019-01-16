import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SomeServiceService } from './some-service.service';
import { detectChanges } from '@angular/core/src/render3';

@Component({
  selector: 'app-service-getter',
  template: `
    <p>{{service.counter}}</p>
    <p>{{service.counterObject.counter}}</p>
    <button (click)="onClick()">click me</button>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServiceGetterComponent {
  /* won't be updated by the setInterval events in the service */
  constructor(public service: SomeServiceService) {

  }

  public onClick() {
    /* onClick event triggers the changeDetector of the component */
    /* ToDo: Why is the bound property updated by the CD although
    the getter is not returning a new reference and the objects is mutated
    in the service? */
  }
}
