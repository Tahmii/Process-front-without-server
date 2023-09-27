import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillCardDetailComponent } from './skill-card-detail.component';

describe('SkillCardDetailComponent', () => {
  let component: SkillCardDetailComponent;
  let fixture: ComponentFixture<SkillCardDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SkillCardDetailComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SkillCardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
