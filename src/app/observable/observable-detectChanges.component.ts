import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable-detect-changes',
  template: `
    <div>
      <b>Subscribe to observable in component</b>
      <p>Display property set by subscribing to a observable in component: {{dataFromObservable}}</p>
      <p><button (click)="dcEnabled = !dcEnabled">enable/disable detect changes in subscribe</button></p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ObservableDetectChangesComponent implements OnInit {
  @Input() observable: Observable<any>;
  public dataFromObservable;
  public dcEnabled = false;
  constructor(private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.observable.subscribe((data: number) => {
      this.dataFromObservable = data * 100; /* <-- this will update the property but won't be detected in the view!
      although this is a primitive type
      */
      if (this.dcEnabled) {
        this.cdr.detectChanges(); /* <-- call detect changes for updating the view!
      Better use async pipes when not processing the data emitted by a observable before displaying it */
      }
    });
  }

}
