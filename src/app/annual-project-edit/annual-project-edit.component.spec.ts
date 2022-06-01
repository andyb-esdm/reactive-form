import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualProjectEditComponent } from './annual-project-edit.component';

describe('AnnualProjectEditComponent', () => {
  let component: AnnualProjectEditComponent;
  let fixture: ComponentFixture<AnnualProjectEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnualProjectEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnualProjectEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
