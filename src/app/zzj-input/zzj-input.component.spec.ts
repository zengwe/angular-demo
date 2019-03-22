import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZzjInputComponent } from './zzj-input.component';

describe('ZzjInputComponent', () => {
  let component: ZzjInputComponent;
  let fixture: ComponentFixture<ZzjInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZzjInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZzjInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
