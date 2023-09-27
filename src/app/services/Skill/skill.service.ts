import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Skill } from 'src/app/models/skill';
import * as skill from 'src/assets/skill.json';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  private skills: Skill[] = skill as Skill[];

  constructor(private http: HttpClient) {
    this.getJSONData().subscribe((data: Skill[]) => {
      this.skills = data;
    });
  }

  getSkillById(skillId: number): Skill | undefined {
    return this.skills.find(skill => skill.skillId === skillId);
  }
  getJSONData() {
    return this.http.get<Skill[]>('../../../assets/skill.json');
  }


}
