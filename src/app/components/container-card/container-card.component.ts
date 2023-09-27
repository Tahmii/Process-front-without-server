import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/skill';
import { SkillService } from 'src/app/services/Skill/skill.service';

@Component({
  selector: 'app-container-card',
  templateUrl: './container-card.component.html',
  styleUrls: ['./container-card.component.css']
})
export class ContainerCardComponent implements OnInit {

  competences: Skill[] = [];
  cardIndex: any;

  constructor(private skillService: SkillService) { }
  ngOnInit(): void {
    this.getAllSkillFromJson();
  }

  getAllSkillFromJson() {
    this.skillService.getJSONData().subscribe((data: Skill[]) => {
      this.competences = data;
    });
  }

  groupSkillsByStack() {
    const groupedSkills: { stack: string; skills: Skill[] }[] = [];

    this.competences.sort((a, b) => a.stack.localeCompare(b.stack));

    let currentStack = '';
    let currentGroup: Skill[] = [];

    for (const skill of this.competences) {
      if (skill.stack !== currentStack) {
        if (currentGroup.length > 0) {
          groupedSkills.push({ stack: currentStack, skills: currentGroup });
        }
        currentStack = skill.stack;
        currentGroup = [];
      }
      currentGroup.push(skill);
    }

    if (currentGroup.length > 0) {
      groupedSkills.push({ stack: currentStack, skills: currentGroup });
    }

    return groupedSkills;
  }

}
