import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllEMpComponent } from './all-emp.component';

describe('AllEMpComponent', () => {
  let component: AllEMpComponent;
  let fixture: ComponentFixture<AllEMpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllEMpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllEMpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
