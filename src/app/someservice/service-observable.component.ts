import { Component, OnInit } from '@angular/core';
import { SomeServiceService } from './some-service.service';

@Component({
  selector: 'app-service-observable',
  template: `
    <p>{{service.counterObservable | async}}</p>
  `,
  styles: []
})
export class ServiceObservableComponent implements OnInit {

  constructor(public service: SomeServiceService) { }

  ngOnInit() {
  }

}
