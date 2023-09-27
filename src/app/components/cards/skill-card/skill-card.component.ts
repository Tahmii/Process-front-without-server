import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.css']
})
export class SkillCardComponent {

  @Input() titre: string | undefined;
  @Input() niveau: string | undefined;
  @Input() pastime: number | undefined;
  @Input() skillId: number | undefined;

  constructor() { }
}
