import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input('content') content: string | TemplateRef<{}>
  constructor() { }

  ngOnInit() {
    this
  }

}
