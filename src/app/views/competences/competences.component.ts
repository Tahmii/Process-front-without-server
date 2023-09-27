import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/models/skill';
import { SkillService } from 'src/app/services/Skill/skill.service';

@Component({
  selector: 'app-competence',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.css']
})
export class CompetencesComponent implements OnInit {

  allSkills: Skill[] = [];
  searchedSkills: Skill[] = [];
  searchQuery: string = '';


  constructor(private skillService: SkillService, private router: Router) { }

  ngOnInit(): void {
    this.getAllSkillFromJson()
  }

  getAllSkillFromJson() {
    this.skillService.getJSONData().subscribe((data: Skill[]) => {
      this.allSkills = data;
    });
  }
  onSearch(query: string) {
    this.searchQuery = query;
    if (this.searchQuery.length < 2) {
      this.searchedSkills = [];
      return;
    }
    this.searchedSkills = this.allSkills.filter(skill =>
      skill.name.toLowerCase().startsWith(this.searchQuery.toLowerCase().slice(0, 2))
    );
  }

  goToSkillDetails(skillId: number) {
    this.router.navigate(['/skill-details', skillId]);
  }
}
