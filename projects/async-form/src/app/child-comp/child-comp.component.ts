import { Component, OnInit, forwardRef, InjectionToken } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
export interface MyInterface {
  dd: string;
}
export const INTERFACE_TOKEN = new InjectionToken<MyInterface>('MyInterfaceToken');
@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ChildCompComponent),
      multi: true
    },
    {
      provide: INTERFACE_TOKEN,
      useExisting: forwardRef( () => ChildCompComponent )
    }
  ]
})
export class ChildCompComponent implements OnInit, MyInterface {
  dd ='ssss'
  _value: number = 1;
  get myvalue() {
    return this._value;
  }
  set myvalue(val) {
    this._value = val;
    this.propagateChange(val);
  }
  constructor() { }

  ngOnInit() {
  }
  propagateChange(val) {

  }
  writeValue(val: number): void {
    this._value = val;
  }
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
  }
}
