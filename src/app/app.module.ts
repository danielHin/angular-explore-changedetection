import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputReferenceComponent } from './inputReference/input-reference.component';
import { ObservableDetectChangesComponent } from './observable/observable-detectChanges.component';
import { AsyncPipeComponent } from './observable/async-pipe.component';
import { InputReferenceChildComponent } from './inputReference/input-reference-child.component';
import { ObservableComponent } from './observable/observable.component';
import { ServiceComponent } from './someservice/service.component';
import { ServiceGetterComponent } from './someservice/service-getter.component';
import { ServiceObservableComponent } from './someservice/service-observable.component';
import { GetterComponent } from './default-changeDetection/getter.component';

@NgModule({
  declarations: [
    AppComponent,
    InputReferenceComponent,
    ObservableDetectChangesComponent,
    AsyncPipeComponent,
    InputReferenceChildComponent,
    ObservableComponent,
    ServiceComponent,
    ServiceGetterComponent,
    ServiceObservableComponent,
    GetterComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
