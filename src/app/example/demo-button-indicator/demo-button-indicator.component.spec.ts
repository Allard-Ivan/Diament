import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoButtonIndicatorComponent } from './demo-button-indicator.component';

describe('DemoButtonIndicatorComponent', () => {
  let component: DemoButtonIndicatorComponent;
  let fixture: ComponentFixture<DemoButtonIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoButtonIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoButtonIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
