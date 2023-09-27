import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/models/experience';
import { ExperienceService } from 'src/app/services/Experience/experience.service';

@Component({
  selector: 'app-container-card-experience',
  templateUrl: './container-card-experience.component.html',
  styleUrls: ['./container-card-experience.component.css']
})
export class ContainerCardExperienceComponent implements OnInit {

  experience: Experience[] = [];
  cardIndex: any;

  constructor(private experienceService: ExperienceService) { }

  ngOnInit(): void {
    this.getAllPresentation();
  }

  getAllPresentation() {
    this.experienceService.getAll().subscribe((exp: Experience[]) => {
      this.experience = exp;
    })
  }
}
