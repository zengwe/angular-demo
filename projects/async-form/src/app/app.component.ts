import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  validateForm: FormGroup;
  title = 'app';
  childValue = 2;
  out = 3;
  @ViewChild('appChildD') appChildD;
  constructor(private fb: FormBuilder) {

  }
  ngOnInit() {
    this.validateForm = this.fb.group({
      name: [ null, [ Validators.required ] ],
      childValue: [2],
      childValue2: [2]
    });
  }
  isValidateName() {
    
  }
  onSubmit() {
    console.log(' AppComponent submit');
  }
  showthis() {
    console.log(this)
    console.log(this.validateForm.value);
  }
}
