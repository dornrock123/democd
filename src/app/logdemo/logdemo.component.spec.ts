import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogdemoComponent } from './logdemo.component';

describe('LogdemoComponent', () => {
  let component: LogdemoComponent;
  let fixture: ComponentFixture<LogdemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogdemoComponent]
    });
    fixture = TestBed.createComponent(LogdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
