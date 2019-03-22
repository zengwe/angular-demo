import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.css']
})
export class TwoWayComponent implements OnInit {
  value: number = -1;
  @Input('count') get count() {
    return this.value;
  }
  set count (value) {
    this.value = value;
    this.countChange.emit(value);
  }
  @Output() countChange = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  addvalue() {
    this.count++;
  }
}
