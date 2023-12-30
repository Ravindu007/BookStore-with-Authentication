import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBookComponent } from './show-book.component';

describe('ShowBookComponent', () => {
  let component: ShowBookComponent;
  let fixture: ComponentFixture<ShowBookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowBookComponent]
    });
    fixture = TestBed.createComponent(ShowBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
