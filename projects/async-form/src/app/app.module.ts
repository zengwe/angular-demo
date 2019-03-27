import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubmitStatusDirective } from './submit-status.directive';
import { ChildCompComponent } from './child-comp/child-comp.component';
import { ChildDDirective } from './child-d.directive';
@NgModule({
  declarations: [
    AppComponent,
    SubmitStatusDirective,
    ChildCompComponent,
    ChildDDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
