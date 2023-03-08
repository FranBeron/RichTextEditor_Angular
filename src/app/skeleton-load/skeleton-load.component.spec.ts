import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonLoadComponent } from './skeleton-load.component';

describe('SkeletonLoadComponent', () => {
  let component: SkeletonLoadComponent;
  let fixture: ComponentFixture<SkeletonLoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkeletonLoadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkeletonLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
