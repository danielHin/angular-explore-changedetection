import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  template: `
    <h4>Service getter</h4>
    <app-service-getter></app-service-getter>
    <h4>Service Observable</h4>
    <app-service-observable></app-service-observable>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServiceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
