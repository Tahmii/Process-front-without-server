import { Component, Input } from '@angular/core';
import { Skill } from 'src/app/models/skill';

@Component({
  selector: 'app-card-container-experience',
  templateUrl: './card-container-experience.component.html',
  styleUrls: ['./card-container-experience.component.css']
})
export class CardContainerExperienceComponent {

  @Input() skills: Skill[] = [];
  @Input() skillId: number | undefined;

  constructor() { }

}
