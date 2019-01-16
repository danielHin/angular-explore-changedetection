import { Component, OnInit } from '@angular/core';
import { SomeServiceService } from '../someservice/some-service.service';

@Component({
  selector: 'app-getter',
  template: `
    <h4>using getter</h4>
    <p>
     {{service.counterObject.counter}}
    </p>
  `,
  styles: []
})
export class GetterComponent implements OnInit {

  constructor(public service: SomeServiceService) { }

  ngOnInit() {
  }

}
