import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaysBycontinentComponent } from './pays-bycontinent.component';

describe('PaysBycontinentComponent', () => {
  let component: PaysBycontinentComponent;
  let fixture: ComponentFixture<PaysBycontinentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaysBycontinentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaysBycontinentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
