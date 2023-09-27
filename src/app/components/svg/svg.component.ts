import { Component, Input, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.css']
})
export class SvgComponent implements AfterViewInit {

  @Input() svgContent: string = '';

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit(): void {
    this.loadSvg();
  }

  private loadSvg(): void {
    if (this.svgContent) {
      const divContainer = this.elementRef.nativeElement.querySelector('div');
      divContainer.innerHTML = this.svgContent;
    }
  }
}