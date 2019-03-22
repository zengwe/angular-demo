import { Component, OnInit, Input, forwardRef, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
@Component({
  selector: 'app-double',
  templateUrl: './double.component.html',
  styleUrls: ['./double.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DoubleComponent),
      multi: true
    }
  ]
})
export class DoubleComponent implements OnInit, ControlValueAccessor{
  arr: string[] = ['123','456'];
  _myvalue: any;
  get myvalue() {
    return this._myvalue;
  }
  set myvalue(val) {
    this._myvalue = val;
    this.propagateChange(val);
  }
  constructor() { }
  consoleLog() {
    console.log(this.arr)
  }
  ngOnInit() {
  }
  writeValue(val: object): void {
    this._myvalue = val;
  }

  onchange() {
    console.log()
  }
  propagateChange(val) {

  }
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    console.log('registerOnChange',fn)
  }
}
