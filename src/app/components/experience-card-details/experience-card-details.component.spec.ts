import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceCardDetailsComponent } from './experience-card-details.component';

describe('ExperienceCardDetailsComponent', () => {
  let component: ExperienceCardDetailsComponent;
  let fixture: ComponentFixture<ExperienceCardDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExperienceCardDetailsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ExperienceCardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
