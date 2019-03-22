import { Component, OnInit } from '@angular/core';
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
  constructor(private fb: FormBuilder) {

  }
  ngOnInit() {
    this.validateForm = this.fb.group({
      name: [ null, [ Validators.required ] ]
    });
  }
  isValidateName() {
    
  }
}