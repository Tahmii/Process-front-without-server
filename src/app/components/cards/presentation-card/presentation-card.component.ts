import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-presentation-card',
  templateUrl: './presentation-card.component.html',
  styleUrls: ['./presentation-card.component.css']
})
export class PresentationCardComponent {

  @Input() firstName: string | undefined;
  @Input() lastName: string | undefined;
  @Input() phone: number | undefined;
  @Input() email: string | undefined;
  @Input() years: number | undefined;
  @Input() infoComplementaire: string | undefined;
  @Input() job: string | undefined;

}
