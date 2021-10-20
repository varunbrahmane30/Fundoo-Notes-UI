import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallarchiveComponent } from './getallarchive.component';

describe('GetallarchiveComponent', () => {
  let component: GetallarchiveComponent;
  let fixture: ComponentFixture<GetallarchiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetallarchiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetallarchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
