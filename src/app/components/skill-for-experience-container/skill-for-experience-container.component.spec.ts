import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillForExperienceContainerComponent } from './skill-for-experience-container.component';

describe('SkillForExperienceContainerComponent', () => {
  let component: SkillForExperienceContainerComponent;
  let fixture: ComponentFixture<SkillForExperienceContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SkillForExperienceContainerComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SkillForExperienceContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
