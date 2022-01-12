import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadThreadComponent } from './load-thread.component';

describe('LoadThreadComponent', () => {
  let component: LoadThreadComponent;
  let fixture: ComponentFixture<LoadThreadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadThreadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadThreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
