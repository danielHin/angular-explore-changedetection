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

  constructor(public service: SomeServiceService) {

  }

  public onClick() {

  }
}
