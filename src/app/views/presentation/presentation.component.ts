import { Component, OnInit } from '@angular/core';
import { Presentation } from 'src/app/models/presentation';
import { PresentationService } from 'src/app/services/Presentation/presentation.service';


@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {
  presentation: Presentation | undefined;
  presentationId: number = 1;
  constructor(private presentationService: PresentationService) { }

  ngOnInit(): void {
    this.loadPresentationById();

  }

  loadPresentationById(): void {
    const presentationId = 1;

    this.presentationService.getPresentationById(presentationId).subscribe((presentation: Presentation | undefined) => {

      this.presentation = presentation;

    });
  }




}