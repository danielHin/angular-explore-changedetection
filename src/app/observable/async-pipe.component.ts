import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-async-pipe',
  template: `
    <b>Subscribe to observable using async pipe in view</b>
    <div>Display data emitted by observable using async pipe: {{observable | async}}</div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AsyncPipeComponent {
  @Input() observable: Observable<any>;
}
