import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-experience-card-details',
  templateUrl: './experience-card-details.component.html',
  styleUrls: ['./experience-card-details.component.css']
})
export class ExperienceCardDetailsComponent {

  @Input() firm: String | undefined;
  @Input() contrat: String | undefined;
  @Input() poste: String | undefined;
  @Input() pastime: number | undefined;
  @Input() experienceId: number | undefined;

  constructor() { }

}
