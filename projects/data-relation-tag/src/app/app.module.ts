import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DoubleComponent } from './double/double.component';
import { FormsModule } from '@angular/forms';
import { ZzjInputComponent } from './zzj-input/zzj-input.component';
@NgModule({
  declarations: [
    AppComponent,
    DoubleComponent,
    ZzjInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
