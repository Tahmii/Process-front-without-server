import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerCardExperienceComponent } from './container-card-experience.component';

describe('ContainerCardExperienceComponent', () => {
  let component: ContainerCardExperienceComponent;
  let fixture: ComponentFixture<ContainerCardExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContainerCardExperienceComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ContainerCardExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
