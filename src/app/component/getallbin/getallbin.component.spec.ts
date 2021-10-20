import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallbinComponent } from './getallbin.component';

describe('GetallbinComponent', () => {
  let component: GetallbinComponent;
  let fixture: ComponentFixture<GetallbinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetallbinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetallbinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
