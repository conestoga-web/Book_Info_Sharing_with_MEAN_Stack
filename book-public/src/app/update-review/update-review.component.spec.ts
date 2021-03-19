import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UpdateReviewComponent } from './update-review.component';

describe('UpdateReviewComponent', () => {
  let component: UpdateReviewComponent;
  let fixture: ComponentFixture<UpdateReviewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
