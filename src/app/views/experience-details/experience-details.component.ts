import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experience } from 'src/app/models/experience';
import { ExperienceService } from 'src/app/services/Experience/experience.service';

@Component({
  selector: 'app-experience-details',
  templateUrl: './experience-details.component.html',
  styleUrls: ['./experience-details.component.css']
})
export class ExperienceDetailsComponent implements OnInit {

  experience: Experience | null = null;

  constructor(
    private route: ActivatedRoute,
    private experienceService: ExperienceService,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.getSkillDetails();
  }

  getSkillDetails() {
    this.route.paramMap.subscribe(params => {
      const experienceId = params.get('experienceId');
      if (experienceId) {
        this.experienceService.getExperienceyById(experienceId).subscribe((exp: Experience) => {
          this.experience = exp;
          console.log(exp)
        });

      }

    });

  }

  retourALaListe() {
    this.router.navigate(['/experience']);
  }
}  