import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  searchQuery: string = '';

  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  onSearch(event: any) {
    const query = event.target.value;
    this.search.emit(query);
  }
}