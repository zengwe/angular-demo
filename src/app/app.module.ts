import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ZzjInputComponent } from './zzj-input/zzj-input.component';

@NgModule({
  declarations: [
    AppComponent,
    ZzjInputComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        loadChildren: './layout/layout.module#LayoutModule',
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log(this)
  }
}
