import { Directive, ViewContainerRef, ɵComponentDef, Inject, Self, Optional, OnInit } from '@angular/core';
import { INTERFACE_TOKEN, MyInterface } from './child-comp/child-comp.component';
@Directive({
  selector: '[appChildD]'
})
export class ChildDDirective implements OnInit{
  myname = 'ChildDDirective';
  constructor(private vrc: ViewContainerRef, @Inject(INTERFACE_TOKEN) @Self() @Optional() public component: MyInterface,) {
    
  }
  ngOnInit() {
    console.log(this)
  }
}
