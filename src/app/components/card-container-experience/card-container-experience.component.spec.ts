import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardContainerExperienceComponent } from './card-container-experience.component';

describe('CardContainerExperienceComponent', () => {
  let component: CardContainerExperienceComponent;
  let fixture: ComponentFixture<CardContainerExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardContainerExperienceComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CardContainerExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
