import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InnerComponent } from './inner.component';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: InnerModule
      }
    ])
  ],
  declarations: [InnerComponent]
})
export class InnerModule { }
