import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './first.component';
import { First2Component } from './first2/first2.component';
import { First3Component } from './first3/first3.component';
import { RouterModule } from '@angular/router'
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'first',
        component: FirstComponent,
        outlet: 't'
      },
      {
        path: 'dd',
        component: First3Component,
        outlet: 'y'
      }
    ])
  ],
  declarations: [FirstComponent, First2Component, First3Component]
})
export class FirstModule { }
