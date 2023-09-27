import { Component, Input } from '@angular/core';
import { Skill } from 'src/app/models/skill';

@Component({
  selector: 'app-skill-for-experience-container',
  templateUrl: './skill-for-experience-container.component.html',
  styleUrls: ['./skill-for-experience-container.component.css']
})
export class SkillForExperienceContainerComponent {

  @Input() skills: Skill[] = [];

  constructor() { }

}
