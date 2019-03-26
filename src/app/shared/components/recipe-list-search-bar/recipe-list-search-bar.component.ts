import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-list-search-bar',
  templateUrl: './recipe-list-search-bar.component.html',
  styleUrls: ['./recipe-list-search-bar.component.scss']
})
export class RecipeListSearchBarComponent implements OnInit {
  @Output()
  searchEmitter = new EventEmitter<string>();
  searchTerm = '';

  constructor() { }

  ngOnInit() { }

  search(): void {
    if (this.searchTerm && this.searchTerm.length > 2) {
      this.searchEmitter.emit(this.searchTerm.trim());
    } else {
      this.searchEmitter.emit('');
    }
  }
}
