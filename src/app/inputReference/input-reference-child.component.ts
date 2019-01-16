import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-reference-child',
  template: `
    <div>
      <p>Display objects property: {{anObject.title}}</p>
      <p>Display primitive type: {{primitiveType}}</p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputReferenceChildComponent {

  @Input() anObject;
  @Input() primitiveType;

}
