import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Experience } from 'src/app/models/experience';
import { ExperienceService } from 'src/app/services/Experience/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {

  allExps: Experience[] = [];
  searchedExps: Experience[] = [];
  searchQuery: string = '';


  constructor(private experienceService: ExperienceService, private router: Router) { }
  getAll() {
    this.experienceService.getAll().subscribe((exp: Experience[]) => {
      this.allExps = exp;
    });
  }
  onSearch(query: string) {
    this.searchQuery = query;
    if (this.searchQuery.length < 2) {
      this.searchedExps = [];
      return;
    }
    this.searchedExps = this.allExps.filter(exp =>
      exp.firm.toLowerCase().startsWith(this.searchQuery.toLowerCase().slice(0, 2))
    );
  }

  goToSkillDetails(experienceId: number) {
    this.router.navigate(['/experience-details', experienceId]);
  }
}