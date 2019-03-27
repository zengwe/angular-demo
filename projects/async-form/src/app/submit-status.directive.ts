import { Directive, Output,EventEmitter, ElementRef, Attribute, Input, ViewChildren, ViewChild, ContentChild } from '@angular/core';
import { ChildDDirective } from './child-d.directive';
@Directive({
  selector: '[zzjSubmit]'
})
export class SubmitStatusDirective {
  @Output('zzjSubmit') submit: EventEmitter<any> = new EventEmitter();
  @Input('zzjSubmit') Submit;
  @ContentChild(ChildDDirective) ChildDDirectives = null;
  @ContentChild('[dddappChildD]') ChildDDirectives2 = null;
  constructor(private eleRef: ElementRef, @Attribute('submit') private submitFunc) { 
    console.log(submitFunc)
    console.log(eleRef)
    eleRef.nativeElement.onsubmit = () => {
      console.log('submit in SubmitStatusDirective');
      console.log('-------------------------------')
      console.log('SubmitStatusDirective', this);
      console.log('-------------------------------')
      this.submit.emit();
    }
  }
}
