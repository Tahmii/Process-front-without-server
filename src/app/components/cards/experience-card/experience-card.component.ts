import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.css']
})
export class ExperienceCardComponent {

  @Input() firm: string | undefined;
  @Input() poste: string | undefined;
  @Input() contrat: string | undefined;
  @Input() pastime: number | undefined;
  @Input() experienceId: number | undefined;

  constructor() { }
}
