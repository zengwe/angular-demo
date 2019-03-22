import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
@Component({
  selector: 'zzj-input',
  styles: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ZzjInputComponent),
      multi: true
    }
  ],
  template: `
    <input type="text" [(ngModel)]="value" (blur)="valueChange()">
  `
})
export class ZzjInputComponent implements OnInit {
  value: any;
  constructor() { }

  ngOnInit() {
  }
  writeValue(val: object): void {
    this.value = val;
  }
  valueChange() {
    this.propagateChange(this.value);
  }
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  propagateChange(val) {

  }
  registerOnTouched(fn: any): void {

  }
}
