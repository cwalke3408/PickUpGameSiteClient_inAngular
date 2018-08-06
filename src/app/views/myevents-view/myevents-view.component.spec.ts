import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyeventsViewComponent } from './myevents-view.component';

describe('MyeventsViewComponent', () => {
  let component: MyeventsViewComponent;
  let fixture: ComponentFixture<MyeventsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyeventsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyeventsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
