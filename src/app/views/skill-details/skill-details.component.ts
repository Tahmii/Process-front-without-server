import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/models/skill';
import { SkillService } from 'src/app/services/Skill/skill.service';


@Component({
  selector: 'app-skill-details',
  templateUrl: './skill-details.component.html',
  styleUrls: ['./skill-details.component.css']
})
export class SkillDetailsComponent implements OnInit {
  skill: Skill | undefined;

  constructor(
    private route: ActivatedRoute,
    private skillService: SkillService,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.loadSkillDetails();
  }

  loadSkillDetails() {
    this.route.paramMap.subscribe(params => {
      const skillId = params.get('skillId');
      console.log(skillId);
      if (skillId) {
        this.skill = this.skillService.getSkillById(parseInt(skillId, 10));
      }
    });
  }

  retourALaListe() {
    this.router.navigate(['/competence']);
  }
}  
