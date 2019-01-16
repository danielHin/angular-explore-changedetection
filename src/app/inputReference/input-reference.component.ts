import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-input-reference',
  template: `
    <app-input-reference-child [anObject]="foo" [primitiveType]="bar"></app-input-reference-child>
    <button (click)="changeObject()">Change Object</button>
    <button (click)="changePrimitive()">Change Primitive</button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputReferenceComponent {

  public foo = {
    title: 'foo',
    subtitle: 'bar'
  };

  public bar = 2;
  private tmp = 0;

  public changeObject() {
    // this.foo.title = 'hello'; // <-- mutate won't work. We need a new reference in order to detect the change in the childs view!
    this.foo = {
      title: 'hello' + this.tmp++,
      subtitle: 'bar'
    };
  }

  public changePrimitive() {
    this.bar++;
  }

}
