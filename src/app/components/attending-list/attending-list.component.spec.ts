import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendingListComponent } from './attending-list.component';

describe('AttendingListComponent', () => {
  let component: AttendingListComponent;
  let fixture: ComponentFixture<AttendingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
