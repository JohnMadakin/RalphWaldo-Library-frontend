import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupSigninTabComponent } from './signup-signin-tab.component';

describe('SignupSigninTabComponent', () => {
  let component: SignupSigninTabComponent;
  let fixture: ComponentFixture<SignupSigninTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupSigninTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupSigninTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
