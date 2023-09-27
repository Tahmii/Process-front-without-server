import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-card-detail',
  templateUrl: './skill-card-detail.component.html',
  styleUrls: ['./skill-card-detail.component.css']
})
export class SkillCardDetailComponent {

  @Input() titre: string | undefined;
  @Input() niveau: string | undefined;
  @Input() pastime: number | undefined;


  constructor() { }
}
